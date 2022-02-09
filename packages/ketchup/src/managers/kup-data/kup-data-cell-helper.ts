import {
    Cell,
    DataTable,
} from '../../components/kup-data-table/kup-data-table-declarations';
import { KupDataFindCellFilters } from './kup-data-declarations';
import { finder } from './kup-data-helper';

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
