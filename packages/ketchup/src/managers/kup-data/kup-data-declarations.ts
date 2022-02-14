import {
    Cell,
    Column,
    Row,
} from '../../components/kup-data-table/kup-data-table-declarations';

/**
 * Generic dataset interface.
 */
export interface KupDataDataset {
    columns?: Column[];
    rows?: Row[];
}
/**
 * Interface related to dataset operations.
 */
export interface KupDataDatasetOperations {
    cell: KupDataCellOperations;
    column: KupDataColumnOperations;
    row: KupDataRowOperations;
    distinct: (
        dataset: KupDataDataset,
        columns?: string[],
        valuesColumn?: Column
    ) => KupDataDataset;
    new: (
        dataset: KupDataDataset,
        newColumns: KupDataNewColumn[]
    ) => KupDataDataset;
    rangedDistinct: (
        dataset: KupDataDataset,
        rangeColumns: KupDataNewColumn[],
        resultingColumn: Column,
        valuesColumn?: Column
    ) => KupDataDataset;
    sort: (
        dataset: KupDataDataset,
        sortType: KupDataDatasetSort,
        headerColumn: string
    ) => KupDataDataset;
    transpose: (
        dataset: KupDataDataset,
        headerColumn?: string
    ) => KupDataDataset;
}
/**
 * Interface related to cells operations.
 */
export interface KupDataCellOperations {
    find: (dataset: KupDataDataset, filters?: KupDataFindCellFilters) => Cell[];
    getValue: (dataset: KupDataDataset, columns?: string[]) => string[];
    replace: (
        dataset: KupDataDataset,
        cell: Cell,
        columns?: string[]
    ) => Cell[];
}
/**
 * Interface related to columns operations.
 */
export interface KupDataColumnOperations {
    find: (dataset: KupDataDataset, filters?: Partial<Column>) => Column[];
    hide: (
        dataset: KupDataDataset | Column[],
        columns2hide: string[]
    ) => Column[];
    new: (
        dataset: KupDataDataset,
        type: KupDataNewColumnTypes,
        options: KupDataNewColumnOptions
    ) => string | Column;
}
/**
 * Interface related to rows operations.
 */
export interface KupDataRowOperations {
    find: (dataset: KupDataDataset, filters?: KupDataFindCellFilters) => Row[];
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
    range?: KupDataFilterRange;
    value?: string;
}
/**
 * Interface of the range filter.
 */
export interface KupDataFilterRange {
    min?: number | string | String;
    max?: number | string | String;
}
/**
 * Interface for the creation of a new column.
 */
export interface KupDataNewColumn {
    column: Column;
    criteria: KupDataFindCellFilters;
}
/**
 * Type to manage sort of the dataset.
 */
export type KupDataDatasetSort = 'normalDistribution';
/**
 * Interface containing the options related to column creation when invoking datasetOperations.column.new.
 */
export interface KupDataNewColumnOptions {
    columns?: string[];
    newColumn?: Column;
    operation?: string;
    separator?: string;
}
/**
 * Types of column creation when invoking datasetOperations.column.new.
 */
export enum KupDataNewColumnTypes {
    CONCATENATE = 'concatenate',
    MATH = 'math',
    MERGE = 'merge',
}
