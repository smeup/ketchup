import { Row } from '../../components/kup-data-table/kup-data-table-declarations';
import {
    KupDataDataset,
    KupDataFindCellFilters,
} from './kup-data-declarations';
import { finder } from './kup-data-helper';

/**
 * Finds all the rows containing cells matching the filters criteria in the input dataset.
 * @param {KupDataDataset} dataset - Input dataset.
 * @param {KupDataFindCellFilters} filters - Filters of the research.
 * @returns {Row[]} Array of rows fetched after applying the filters.
 */
export function findRow(
    dataset: KupDataDataset,
    filters: KupDataFindCellFilters
): Row[] {
    return finder(dataset, filters).rows;
}
