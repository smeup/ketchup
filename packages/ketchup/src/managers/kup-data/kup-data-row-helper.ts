import {
    KupDataDataset,
    KupDataFindCellFilters,
    KupDataNode,
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
/**
 * Converts the rows of the input dataset to tree nodes.
 * @param {KupDataDataset} dataset - Input dataset.
 * @returns {KupDataNode[]} Array of tree nodes.
 */
export function toNode(dataset: KupDataDataset): KupDataNode[] {
    const nodes: KupDataNode[] = [];
    for (let index = 0; index < dataset.rows.length; index++) {
        const node: KupDataNode = {
            ...dataset.rows[index],
            children: [],
            disabled: false,
            expandable: false,
            obj: null,
            value: dataset.rows[index].id
                ? dataset.rows[index].id
                : '#' + (index + 1),
        };
        nodes.push(node);
    }
    return nodes;
}
