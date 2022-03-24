import {
    KupDataCell,
    KupDataDataset,
    KupDataFindCellFilters,
} from './kup-data-declarations';
import { finder } from './kup-data-helper';

/**
 * Finds all the cells matching the filters criteria in the input dataset.
 * @param {KupDataDataset} dataset - Input dataset.
 * @param {KupDataFindCellFilters} filters - Filters of the research.
 * @returns {KupDataCell[]}  Array of cells fetched after applying the filters.
 */
export function findCell(
    dataset: KupDataDataset,
    filters: KupDataFindCellFilters
): KupDataCell[] {
    return finder(dataset, filters).cells;
}
/**
 * Returns all the cells values of the specified columns.
 * @param {KupDataDataset} dataset - Input dataset.
 * @param {string[]} columns - Columns included in the search. When missing, searches all columns.
 * @returns {string[]} Values of the cells.
 */
export function getCellValue(
    dataset: KupDataDataset,
    columns?: string[]
): string[] {
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
 * @param {KupDataDataset} dataset - Input dataset.
 * @param {KupDataCell} cell - New cell.
 * @param {string[]} columns - Columns to be handled.
 * @returns {KupDataCell[]} Replaced cells.
 */
export function replaceCell(
    dataset: KupDataDataset,
    cell: KupDataCell,
    columns?: string[]
): KupDataCell[] {
    const replaced: KupDataCell[] = [];
    for (let index = 0; index < dataset.rows.length; index++) {
        const row = dataset.rows[index];
        const cells = row.cells;
        for (const key in cells) {
            if (!columns || !columns.length || columns.includes(key)) {
                cells[key] = { ...cell };
                replaced.push(cells[key]);
            }
        }
    }
    return replaced;
}
