import {
    Cell,
    DataTable,
} from '../../components/kup-data-table/kup-data-table-declarations';

/**
 * Interface related to dataset operations.
 */
export interface KupDataDatasetOperations {
    distinct: (dataset: DataTable, columns?: string[]) => DataTable;
    findCell: (dataset: DataTable, filters?: KupDataFindCellFilters) => Cell[];
}
/**
 * Interface related to the formulas factory function.
 */
export interface KupDataFormulas {
    custom: (formula: string, row: { [index: string]: number }) => number;
    normalDistribution: (
        average: number,
        variance: number,
        x: number
    ) => number;
}
/**
 * Sets the filters for the cell finder method.
 */
export interface KupDataFindCellFilters {
    columns?: string[];
    min?: number;
    max?: number;
    value?: string;
}
