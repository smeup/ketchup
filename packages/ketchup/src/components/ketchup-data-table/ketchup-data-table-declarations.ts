export interface Column {
    name: string;
    title: string;
    size?: number;
    visible?: boolean;
}

export interface Row {
    cells: {
        [index: string]: Cell;
    };

    actions?: Array<RowAction>;

    group?: {
        parent: Row;
        column: string;
        expanded: boolean;
        label: string;
        children: Array<Row>;
        totals: { [index: string]: number };
    };
}

export interface Cell {
    obj: {
        t: string;
        p: string;
        k: string;
    };
    value: string;
    style?: GenericMap;
    options?: boolean;
}

export interface GenericMap {
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

export interface TotalsMap {
    [index: string]: TotalMode;
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

export interface GroupObject {
    column: string;
    visible: boolean;
}

export interface RowAction {
    text: string;
    icon: string;
}

export enum ShowGrid {
    NONE = 'None',
    ROW = 'Row',
    COL = 'Col',
    COMPLETE = 'Complete',
}

// export enum RowActionType {
//     DEFAULT = 'Default',
//     VARIABLE = 'Variable',
// }
