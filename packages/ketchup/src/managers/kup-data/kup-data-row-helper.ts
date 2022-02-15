import {
    KupDataDataset,
    KupDataFindCellFilters,
    KupDataRow,
} from './kup-data-declarations';
import { finder } from './kup-data-helper';

/**
 * Finds all the rows containing cells matching the filters criteria in the input dataset.
 * @param {KupDataDataset} dataset - Input dataset.
 * @param {KupDataFindCellFilters} filters - Filters of the research.
 * @returns {KupDataRow[]} Array of rows fetched after applying the filters.
 */
export function findRow(
    dataset: KupDataDataset,
    filters: KupDataFindCellFilters
): KupDataRow[] {
    return finder(dataset, filters).rows;
}
