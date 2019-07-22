import { Cell, RowAction } from '../kup-data-table/kup-data-table-declarations';

// TODO use same structure as data table row?
export interface BoxRow {
    cells: {
        [index: string]: Cell;
    };

    actions?: Array<RowAction>;

    id?: string;

    layout?: Layout;
}

export interface Layout {
    horizontal?: boolean;
    sections?: Section[];
}

export interface Section {
    id?: string;
    horizontal?: boolean;
    dim?: string;
    sections?: Section[];
    content?: BoxObject[];
    style?: { [index: string]: string };
    collapsible?: boolean;
    columns?: number;
    title?: string;
}

export interface BoxObject {
    column?: string;
    value?: string;
}

export interface CollapsedSectionsState {
    [index: string]: {
        [index: string]: boolean;
    };
}
