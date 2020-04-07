import { Cell, RowAction } from '../kup-data-table/kup-data-table-declarations';

import { Badge } from '../kup-icon/kup-icon-declarations';

export interface BoxRow {
    cells: {
        [index: string]: Cell;
    };

    actions?: Array<RowAction>;

    id?: string;

    layout?: Layout;

    badgeData?: Badge[];
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
    shape?: string;
    config?: any;
}

export interface CollapsedSectionsState {
    [index: string]: {
        [index: string]: boolean;
    };
}
