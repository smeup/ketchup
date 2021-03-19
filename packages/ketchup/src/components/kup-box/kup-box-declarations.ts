import {
    Cell,
    Column,
    RowAction,
} from '../kup-data-table/kup-data-table-declarations';
import { KupBadge } from '../kup-badge/kup-badge';
import { Identifiable } from '../../types/GenericTypes';

export interface BoxRow extends Identifiable {
    cells: {
        [index: string]: Cell;
    };

    actions?: Array<RowAction>;

    layout?: Layout;

    badgeData?: KupBadge[];
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
    cssClass?: string;
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
/**
 * Interface for a kanban-displayed boxlist.
 */
export interface BoxKanban {
    column: string;
    labels?: string[];
    size?: string;
}
