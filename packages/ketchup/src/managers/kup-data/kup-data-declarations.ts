import {
    Cell,
    Column,
    DataTable,
    Row,
} from '../../components/kup-data-table/kup-data-table-declarations';

/**
 * Interface related to dataset operations.
 */
export interface KupDataDatasetOperations {
    cell: KupDataCellOperations;
    column: KupDataColumnOperations;
    row: KupDataRowOperations;
    distinct: (
        dataset: DataTable,
        columns?: string[],
        valuesColumn?: Column
    ) => DataTable;
    new: (dataset: DataTable, newColumns: KupDataNewColumn[]) => DataTable;
    rangedDistinct: (
        dataset: DataTable,
        rangeColumns: KupDataNewColumn[],
        resultingColumn: Column,
        valuesColumn?: Column
    ) => DataTable;
    transpose: (dataset: DataTable, headerColumn?: string) => DataTable;
}
/**
 * Interface related to cells operations.
 */
export interface KupDataCellOperations {
    find: (dataset: DataTable, filters?: KupDataFindCellFilters) => Cell[];
    getValue: (dataset: DataTable, columns?: string[]) => string[];
    replace: (dataset: DataTable, cell: Cell, columns?: string[]) => Cell[];
}
/**
 * Interface related to columns operations.
 */
export interface KupDataColumnOperations {
    find: (dataset: DataTable, filters?: Partial<Column>) => Column[];
    hide: (dataset: DataTable | Column[], columns2hide: string[]) => Column[];
    new: (
        dataset: DataTable,
        type: KupDataNewColumnTypes,
        options: KupDataNewColumnOptions
    ) => string | Column;
}
/**
 * Interface related to rows operations.
 */
export interface KupDataRowOperations {
    find: (dataset: DataTable, filters?: KupDataFindCellFilters) => Row[];
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
