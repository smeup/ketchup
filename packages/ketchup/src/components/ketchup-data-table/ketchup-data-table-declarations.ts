export interface DataTableConfig {
    showFilter?: boolean;
    filter?: GenericMap;
    globalFilter?: boolean;
    enableSort?: boolean;
    sort?: Array<SortObject>;
    rowsPerPage?: number;
    paginatorPos?: PaginatorPos;
    columnsWidth?: Array<{
        column: string;
        width: number;
    }>;
    showHeader?: boolean;
    showGrid?: boolean;
    selectRow?: number;
}

export interface Column {
    name: string;
    title: string;
    size: number;
}

export interface Row {
    cells: {
        [index: string]: Cell;
    };
}

export interface Cell {
    obj: {
        t: string;
        p: string;
        k: string;
    };
    value: string;
}

interface GenericMap {
    [index: string]: string;
}

export interface SortObject {
    column: string;
    sortMode: SortMode;
}

export enum SortMode {
    A = 'A',
    D = 'D',
}

export enum TotalMode {
    COUNT = 'Count',
    SUM = 'Sum',
    AVARAGE = 'Avarage',
}

export enum PaginatorPos {
    TOP = 'Top',
    BOTTOM = 'Bottom',
    BOTH = 'Both',
}
