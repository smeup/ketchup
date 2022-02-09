import {
    Column,
    DataTable,
    Row,
} from '../../components/kup-data-table/kup-data-table-declarations';
import { findCell, replaceCell } from './kup-data-cell-helper';
import { mergeColumns } from './kup-data-column-helper';
import { KupDataNewColumn } from './kup-data-declarations';

/**
 * Performs a distinct/count after previously grouping column by ranges.
 * @param {DataTable} dataset - Input dataset.
 * @param {KupDataNewColumn[]} rangeColumns - A list of columns coupled with their criteria for creation. These are used to define ranges.
 * @param {Column} resultingColumn - The resulting column.
 * @param {Column} valuesColumn - When present, this column will be included in the final dataset containing the original values of the cells.
 * @returns {DataTable} New dataset with processed data.
 */
export function rangedDistinctDataset(
    dataset: DataTable,
    rangeColumns: KupDataNewColumn[],
    resultingColumn: Column,
    valuesColumn: Column
): DataTable {
    const newD = newDataset(dataset, rangeColumns);
    const columnNames: string[] = [];
    for (let index = 0; index < rangeColumns.length; index++) {
        const newColumn = rangeColumns[index].column;
        columnNames.push(newColumn.name);
        replaceCell(newD, { value: newColumn.title }, [newColumn.name]);
    }
    mergeColumns(newD, columnNames, resultingColumn);
    return distinctDataset(newD, null, valuesColumn);
}
/**
 * Creates a new dataset with an amount of cells equal to a distinct calculation applied to the given columns.
 * @param {DataTable} dataset - Input dataset.
 * @param {string[]} columns - Column names to manage. When missing, defaults to all columns.
 * @param {Column} valuesColumn - When present, this column will be included in the final dataset containing the original values of the cells.
 * @returns {DataTable} New dataset with processed data.
 */
export function distinctDataset(
    dataset: DataTable,
    columns?: string[],
    valuesColumn?: Column
): DataTable {
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
    const newColumns: Column[] = [];
    const newRows: Row[] = [];
    if (valuesColumn) {
        newColumns.push(valuesColumn);
    }
    for (const key in occurrencies) {
        const occurrency = occurrencies[key];
        const column = {
            ...dataset.columns.find((col: Column) => col.name === key),
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
            let row: Row = null;
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
 * @param {DataTable} dataset - Input dataset.
 * @param {KupDataNewColumn[]} newColumns - Array containing the specifics of the new columns to be created.
 * @returns {DataTable} Resulting dataset.
 */
export function newDataset(
    dataset: DataTable,
    newColumns: KupDataNewColumn[]
): DataTable {
    const outputColumns: Column[] = [];
    const outputRows: Row[] = [];
    for (let index = 0; index < newColumns.length; index++) {
        const newColumn = newColumns[index].column;
        const criteria = newColumns[index].criteria;
        const cells = findCell(dataset, criteria);
        let rowIndex = 0;
        for (let index = 0; index < cells.length; index++) {
            const cell = cells[index];
            let outputRow: Row = null;
            if (!outputRows[rowIndex]) {
                outputRows[rowIndex] = { cells: {} };
            }
            outputRow = outputRows[rowIndex];
            outputRow.cells[newColumn.name] = cell;
            rowIndex++;
        }
        outputColumns.push(newColumn);
    }
    return {
        columns: outputColumns,
        rows: outputRows,
    };
}
