import {
    Cell,
    Column,
    DataTable,
    Row,
} from '../../components/kup-data-table/kup-data-table-declarations';
import { KupDom } from '../kup-manager/kup-manager-declarations';
import {
    KupDataFindCellFilters,
    KupDataNewColumn,
} from './kup-data-declarations';

const dom: KupDom = document.documentElement as KupDom;

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
    const mergedDataset = mergeColumns(newD, columnNames, resultingColumn);
    return distinctDataset(mergedDataset, null, valuesColumn);
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
 * Takes the columns to merge and creates a new column with their cells. The merged columns will then be removed.
 * @param {DataTable} dataset - Input dataset.
 * @param {string[]} columns2merge - Columns to merge.
 * @param {Column} newColumn - Column created.
 * @returns {DataTable} Dataset with the new column and without the merged columns.
 */
export function mergeColumns(
    dataset: DataTable,
    columns2merge: string[],
    newColumn: Column
): DataTable {
    const outputCells: Cell[] = [];
    for (let index = 0; index < dataset.rows.length; index++) {
        const row = dataset.rows[index];
        const cells = row.cells;
        for (const key in cells) {
            const cell = cells[key];
            if (columns2merge.includes(key)) {
                outputCells.push({ ...cell });
                delete cells[key];
            }
        }
    }
    for (let index = 0; index < columns2merge.length; index++) {
        const column2removeIndex = dataset.columns.findIndex(
            (col: Column) => col.name === columns2merge[index]
        );
        dataset.columns.splice(column2removeIndex, 1);
    }
    let rowIndex = 0;
    for (let index = 0; index < outputCells.length; index++) {
        const outputCell = outputCells[index];
        let row: Row = null;
        if (!dataset.rows[rowIndex]) {
            dataset.rows[rowIndex] = { cells: {} };
        }
        row = dataset.rows[rowIndex];
        row.cells[newColumn.name] = outputCell;
        rowIndex++;
    }
    dataset.columns.push(newColumn);
    return dataset;
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
        const filters: KupDataFindCellFilters = {
            range: criteria.range,
            value: criteria.value,
        };
        const cells = findCell(dataset, filters);
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
/**
 * Finds all the cells with the specified value in the given dataset.
 * @param {DataTable} dataset - Input dataset.
 * @param {KupDataFindCellFilters} filters - Filters of the research.
 * @returns {Row[]} Array of rows fetched after applying the filters.
 */
export function findRow(
    dataset: DataTable,
    filters: KupDataFindCellFilters
): Row[] {
    return finder(dataset, filters).rows;
}
/**
 * Finds all the cells with the specified value in the given dataset.
 * @param {DataTable} dataset - Input dataset.
 * @param {KupDataFindCellFilters} filters - Filters of the research.
 * @returns {Cell[]}  Array of cells fetched after applying the filters.
 */
export function findCell(
    dataset: DataTable,
    filters: KupDataFindCellFilters
): Cell[] {
    return finder(dataset, filters).cells;
}
/**
 * Returns all the cells values of the specified columns.
 * @param {DataTable} dataset - Input dataset.
 * @param {string[]} columns - Column included.
 * @returns {string[]} Values of the cells.
 */
export function getCellValue(dataset: DataTable, columns?: string[]): string[] {
    const result: string[] = [];
    for (let index = 0; index < dataset.rows.length; index++) {
        const row = dataset.rows[index];
        const cells = row.cells;
        for (const key in cells) {
            const cell = cells[key];
            if (!columns || !columns.length || columns.includes(key)) {
                result.push(cell.value);
            }
        }
    }
    return result;
}
/**
 * Overrides the given cell attributes for the specified columns.
 * If no columns are provided, the value will be applied to every column of the dataset.
 * @param {DataTable} dataset - Input dataset.
 * @param {Cell} cell - New cell.
 * @param {string[]} columns - Columns to be handled.
 * @returns {DataTable} The input dataset with the new values.
 */
export function replaceCell(
    dataset: DataTable,
    cell: Cell,
    columns?: string[]
): DataTable {
    for (let index = 0; index < dataset.rows.length; index++) {
        const row = dataset.rows[index];
        const cells = row.cells;
        for (const key in cells) {
            if (!columns || !columns.length || columns.includes(key)) {
                cells[key] = { ...cell };
            }
        }
    }
    return dataset;
}
/**
 * Utility used by findRow and findCell.
 * @param {DataTable} dataset - Input dataset.
 * @param {KupDataFindCellFilters} filters - Filters of the research.
 * @returns {{cells: Cell[], rows: Row[]}}  Object containing rows and cells.
 */
function finder(
    dataset: DataTable,
    filters: KupDataFindCellFilters
): { cells: Cell[]; rows: Row[] } {
    const columns = filters ? filters.columns : null;
    const range = filters ? filters.range : null;
    const value = filters ? filters.value : null;
    const min = range && range.min ? range.min : null;
    const max = range && range.max ? range.max : null;
    const result: { cells: Cell[]; rows: Row[] } = {
        cells: [],
        rows: [],
    };
    for (let index = 0; index < dataset.rows.length; index++) {
        const row = dataset.rows[index];
        const cells = row.cells;
        for (const key in cells) {
            const cell = cells[key];
            if (!columns || !columns.length || columns.includes(key)) {
                if (min && max) {
                    let d: Date = null,
                        s = '',
                        n = 0;
                    if (dom.ketchup.objects.isDate(cell.obj)) {
                        d = dom.ketchup.dates.toDate(cell.value);
                        const dMax = dom.ketchup.dates.toDate(
                            max instanceof String ? max.valueOf() : max
                        );
                        const dMin = dom.ketchup.dates.toDate(
                            min instanceof String ? min.valueOf() : min
                        );
                        if (
                            d === dMax ||
                            d === dMin ||
                            (d < dMax && d > dMin)
                        ) {
                            result.cells.push(cell);
                            result.rows.push(row);
                        }
                    } else if (
                        typeof min === 'string' ||
                        min instanceof String
                    ) {
                        s = cell.value;
                        if (s === max || s === min || (s < max && s > min)) {
                            result.cells.push(cell);
                            result.rows.push(row);
                        }
                    } else {
                        n = dom.ketchup.data.numberify(cell.value);
                        if (n === max || n === min || (n < max && n > min)) {
                            result.cells.push(cell);
                            result.rows.push(row);
                        }
                    }
                } else if (value === cell.value) {
                    result.cells.push(cell);
                    result.rows.push(row);
                }
            }
        }
    }
    return result;
}
