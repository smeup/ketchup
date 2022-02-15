import {
    FCellInfo,
    FCellShapes,
} from '../../f-components/f-cell/f-cell-declarations';
import { GenericMap } from '../../types/GenericTypes';
import { KupObj } from '../kup-objects/kup-objects-declarations';

/**
 * Generic dataset interface.
 */
export interface KupDataDataset {
    columns?: KupDataColumn[];
    rows?: KupDataRow[];
}
/**
 * Generic column interface.
 */
export interface KupDataColumn {
    name: string;
    title: string;
    children?: KupDataColumnChild[];
    cssClass?: string;
    decimals?: number;
    formula?: string;
    hideValuesRepetitions?: boolean;
    icon?: string;
    isKey?: boolean;
    mergedFrom?: string[];
    obj?: KupObj;
    objs?: KupObj[];
    resultOf?: string;
    shape?: FCellShapes;
    size?: string;
    valuesForFilter?: string[];
    visible?: boolean;
    style?: GenericMap;
}
export interface KupDataColumnChild {
    name: string;
    obj: KupObj;
    icon?: string;
}
/**
 * Generic row interface.
 */
export interface KupDataRow {
    cells: KupDataRowCells;
    actions?: Array<KupDataRowAction>;
    cssClass?: string;
    id?: string;
    name?: string;
    readOnly?: boolean;
    unselectable?: boolean;
}
export interface KupDataRowCells {
    [index: string]: KupDataCell;
}
export interface KupDataRowAction {
    text: string;
    icon: string;
}
/**
 * Generic cell interface.
 */
export interface KupDataCell {
    value: string;
    cardID?: number;
    cssClass?: string;
    data?: GenericMap;
    displayedValue?: string;
    icon?: string;
    info?: FCellInfo;
    isEditable?: boolean;
    obj?: KupObj;
    shape?: FCellShapes;
    style?: GenericMap;
    styleContent?: GenericMap;
    title?: string;
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
        valuesColumn?: KupDataColumn
    ) => KupDataDataset;
    new: (
        dataset: KupDataDataset,
        newColumns: KupDataNewColumn[]
    ) => KupDataDataset;
    rangedDistinct: (
        dataset: KupDataDataset,
        rangeColumns: KupDataNewColumn[],
        resultingColumn: KupDataColumn,
        valuesColumn?: KupDataColumn
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
    find: (
        dataset: KupDataDataset,
        filters?: KupDataFindCellFilters
    ) => KupDataCell[];
    getValue: (dataset: KupDataDataset, columns?: string[]) => string[];
    replace: (
        dataset: KupDataDataset,
        cell: KupDataCell,
        columns?: string[]
    ) => KupDataCell[];
}
/**
 * Interface related to columns operations.
 */
export interface KupDataColumnOperations {
    find: (
        dataset: KupDataDataset,
        filters?: Partial<KupDataColumn>
    ) => KupDataColumn[];
    hide: (
        dataset: KupDataDataset | KupDataColumn[],
        columns2hide: string[]
    ) => KupDataColumn[];
    new: (
        dataset: KupDataDataset,
        type: KupDataNewColumnTypes,
        options: KupDataNewColumnOptions
    ) => string | KupDataColumn;
}
/**
 * Interface related to rows operations.
 */
export interface KupDataRowOperations {
    find: (
        dataset: KupDataDataset,
        filters?: KupDataFindCellFilters
    ) => KupDataRow[];
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
    column: KupDataColumn;
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
    newColumn?: KupDataColumn;
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
