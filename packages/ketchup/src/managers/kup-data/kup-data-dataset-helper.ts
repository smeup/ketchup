import { fieldColumn } from '../../components/kup-data-table/kup-data-table-declarations';
import { KupDebugCategory } from '../kup-debug/kup-debug-declarations';
import { KupDom } from '../kup-manager/kup-manager-declarations';
import { findCell, getCellValue, replaceCell } from './kup-data-cell-helper';
import { findColumns, newColumn } from './kup-data-column-helper';
import {
    KupDataColumn,
    KupDataDataset,
    KupDataDatasetSort,
    KupDataNewColumn,
    KupDataNewColumnTypes,
    KupDataRow,
    KupDataRowCells,
} from './kup-data-declarations';
import { finder } from './kup-data-helper';

const dom: KupDom = document.documentElement as KupDom;

/**
 * Performs a distinct/count after previously grouping columns by ranges.
 * @param {KupDataDataset} dataset - Input dataset.
 * @param {KupDataNewColumn[]} rangeColumns - A list of columns coupled with their criteria for creation. These are used to define ranges.
 * @param {KupDataColumn} resultingColumn - The resulting column.
 * @param {KupDataColumn} valuesColumn - When present, this column will be included in the final dataset containing the original values of the cells.
 * @returns {KupDataDataset} New dataset with processed data.
 */
export function rangedDistinctDataset(
    dataset: KupDataDataset,
    rangeColumns: KupDataNewColumn[],
    resultingColumn: KupDataColumn,
    valuesColumn?: KupDataColumn
): KupDataDataset {
    const newD = newDataset(dataset, rangeColumns);
    const columnNames: string[] = [];
    for (let index = 0; index < rangeColumns.length; index++) {
        const newColumn = rangeColumns[index].column;
        columnNames.push(newColumn.name);
        replaceCell(newD, { value: newColumn.title }, [newColumn.name]);
    }
    newColumn(newD, KupDataNewColumnTypes.MERGE, {
        columns: columnNames,
        newColumn: resultingColumn,
    });
    return distinctDataset(newD, null, valuesColumn);
}
/**
 * Creates a new dataset with an amount of cells equal to a distinct calculation applied to the given columns.
 * The original value of cells will be stored in the title property of the new cells.
 * @param {KupDataDataset} dataset - Input dataset.
 * @param {string[]} columns - Column names to manage. When missing, defaults to all columns.
 * @param {KupDataColumn} valuesColumn - When present, this column will be included in the final dataset containing the original values of the cells.
 * @returns {KupDataDataset} New dataset with processed data.
 */
export function distinctDataset(
    dataset: KupDataDataset,
    columns?: string[],
    valuesColumn?: KupDataColumn
): KupDataDataset {
    const occurrencies: {
        [index: string]: { [index: string]: number };
    } = {};
    const rows = dataset.rows;
    for (let index = 0; index < rows.length; index++) {
        const row = rows[index];
        const cells = row.cells;
        for (const key in cells) {
            const cell = cells[key];
            if (
                !columns ||
                !columns.length ||
                (columns && columns.includes(key))
            ) {
                if (!occurrencies[key]) {
                    occurrencies[key] = {};
                }
                const occurrency = occurrencies[key];
                occurrency[cell.value] = occurrency[cell.value]
                    ? occurrency[cell.value] + 1
                    : 1;
            }
        }
    }
    const newColumns: KupDataColumn[] = [];
    const newRows: KupDataRow[] = [];
    if (valuesColumn) {
        newColumns.push(valuesColumn);
    }
    for (const key in occurrencies) {
        const occurrency = occurrencies[key];
        const column = {
            ...dataset.columns.find((col: KupDataColumn) => col.name === key),
        };
        column.obj = {
            t: 'NR',
            p: '',
            k: '',
        };
        let rowIndex = 0;
        newColumns.push(column);
        for (const j in occurrency) {
            const value = occurrency[j];
            let row: KupDataRow = null;
            if (!newRows[rowIndex]) {
                newRows[rowIndex] = { cells: {} };
            }
            row = newRows[rowIndex];
            row.cells[key] = {
                obj: {
                    t: 'NR',
                    p: '',
                    k: value.toString(),
                },
                title: j,
                value: value.toString(),
            };
            if (valuesColumn) {
                row.cells[valuesColumn.name] = {
                    value: j,
                };
            }
            rowIndex++;
        }
    }
    return {
        columns: newColumns,
        rows: newRows,
    };
}
/**
 * Creates a new dataset from the input one.
 * The new columns are to be specified in the columns argument along with their creation criteria.
 * @param {KupDataDataset} dataset - Input dataset.
 * @param {KupDataNewColumn[]} newColumns - Array containing the specifics of the new columns to be created.
 * @returns {KupDataDataset} Resulting dataset.
 */
export function newDataset(
    dataset: KupDataDataset,
    newColumns: KupDataNewColumn[]
): KupDataDataset {
    const outputColumns: KupDataColumn[] = [];
    const outputRows: KupDataRow[] = [];
    for (let index = 0; index < newColumns.length; index++) {
        const newColumn = newColumns[index].column;
        const criteria = newColumns[index].criteria;
        const cells = findCell(dataset, criteria);
        let rowIndex = 0;
        for (let index = 0; index < cells.length; index++) {
            const cell = cells[index];
            let outputRow: KupDataRow = null;
            if (!outputRows[rowIndex]) {
                outputRows[rowIndex] = { cells: {} };
            }
            outputRow = outputRows[rowIndex];
            outputRow.cells[newColumn.name] = JSON.parse(JSON.stringify(cell));
            rowIndex++;
        }
        outputColumns.push(newColumn);
    }
    return {
        columns: outputColumns,
        rows: outputRows,
    };
}
/**
 * Creates a new dataset with sorted elements.
 * @param {KupDataDataset} dataset Input dataset.
 * @param {KupDataDatasetSort} sortType Type of sort to apply.
 * @param {string} headerColumn The column used for sorting.
 * @returns {KupDataDataset} Sorted dataset.
 */
export function sortDataset(
    dataset: KupDataDataset,
    sortType: KupDataDatasetSort,
    headerColumn?: string
): KupDataDataset {
    if (sortType != 'normalDistribution') {
        const message = 'Wrong sort type! (' + sortType + ')';
        dom.ketchup.debug.logMessage(
            'kup-data',
            message,
            KupDebugCategory.WARNING
        );
        return dataset;
    }
    const output: KupDataDataset = {
        columns: JSON.parse(JSON.stringify(dataset.columns)),
        rows: [],
    };
    const length = dataset.rows.length;

    // sort all columns values by descending
    let values = getCellValue(dataset, [headerColumn]);
    values.sort(function (a, b) {
        return Number(a) - Number(b);
    });
    values.reverse();
    // excluding duplicates values.
    values = [...new Set(values)];

    // calculating middle index
    const idx = Math.floor(length / 2);
    let lastIdx = idx - 1;
    let leftIdx = idx - 1;
    let rightIdx = idx + 1;

    // sort the rows like a "mountain", the greatest is in the middle and the other ones are splitted left and right
    for (let i = 0; i < length; i++) {
        const value = values[i];
        // looping the rows because we have many rows with same value.
        finder(dataset, { columns: [headerColumn], value: value }).rows.forEach(
            (row) => {
                const xC = output.rows[idx];
                if (xC == null) {
                    output.rows[idx] = JSON.parse(JSON.stringify(row));
                } else {
                    output.rows[lastIdx] = JSON.parse(JSON.stringify(row));

                    if (lastIdx > idx) {
                        // right from the middle index.
                        lastIdx = leftIdx;
                        rightIdx++;
                    } else {
                        // left from the middle index.
                        lastIdx = rightIdx;
                        leftIdx--;
                    }
                }
            }
        );
    }
    return output;
}
/**
 * Creates a new dataset with transposed columns and rows.
 * @param {KupDataDataset} dataset - Input dataset.
 * @param {string} headerColumn - When specified, it will be the column used as header. When missing, the header will be a series of progressive numbers.
 * @returns {KupDataDataset} Transposed dataset.
 */
export function transposeDataset(
    dataset: KupDataDataset,
    headerColumn?: string
): KupDataDataset {
    const transposed: KupDataDataset = { columns: [], rows: [] };
    let firstColumn: KupDataColumn = null;
    if (headerColumn) {
        firstColumn = findColumns(dataset, { name: headerColumn })[0];
        transposed.columns.push(firstColumn);
        for (let index = 0; index < dataset.rows.length; index++) {
            const row = dataset.rows[index];
            const cell = row.cells[firstColumn.name];
            const title = cell.displayedValue
                ? cell.displayedValue
                : cell.value;
            transposed.columns.push({
                name: cell.value + '_' + row.id,
                title,
            });
        }
    } else {
        firstColumn = { name: fieldColumn.toUpperCase(), title: fieldColumn };
        transposed.columns.push(firstColumn);
        for (let index = 0; index < dataset.rows.length; index++) {
            const row = dataset.rows[index];
            transposed.columns.push({
                name: row.id,
                title: '#' + index,
            });
        }
    }
    for (
        let index = headerColumn ? 1 : 0;
        index < dataset.columns.length;
        index++
    ) {
        const oldColumn = dataset.columns[index];
        const cells: KupDataRowCells = {};
        cells[firstColumn.name] = {
            value: oldColumn.title,
        };

        for (let index = 1; index < transposed.columns.length; index++) {
            const newColumn = transposed.columns[index];
            const oldRow = dataset.rows[index - 1];
            const cellName = headerColumn ? newColumn.name : oldRow.id;
            cells[cellName] = oldRow.cells[oldColumn.name];
            if (oldColumn.icon && !cells[cellName].icon) {
                cells[cellName].icon = oldColumn.icon;
            }
            if (oldColumn.shape && !cells[cellName].shape) {
                cells[cellName].shape = oldColumn.shape;
            }
        }
        // If a record is key and no column argument is provided, it will be placed on top
        if (!headerColumn && oldColumn.isKey) {
            transposed.rows.unshift({
                id: String(index),
                cells,
                name: oldColumn.name,
            });
        } else {
            transposed.rows.push({
                id: String(index),
                cells,
                name: oldColumn.name,
            });
        }
    }
    return transposed;
}
