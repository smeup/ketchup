import { DataTable } from '../kup-data-table/kup-data-table-declarations';
import { TreeNode } from '../kup-tree/kup-tree-declarations';

export interface TooltipObject {
    t: String;
    p: String;
    k: String;
    url: String;
}

export interface TooltipData {
    obj?: TooltipObject;
    image?: string;
    title?: string;
    content: {
        [index: string]: {
            label: string;
            value: string;
        };
    };
}

export interface TooltipAction {
    text: string;
    icon: string;
    exec: string;
    url: string;
}

export interface TooltipDetailData extends DataTable {
    actions?: { command: Array<TooltipAction> };
}

export interface TooltipRelatedObject {
    element: HTMLElement;
    object?: any;
}

export interface TooltipCellOptions extends TreeNode {
    config?: any;
}

export enum ViewMode {
    TOOTLIP = 'tip',
    CELL_OPTIONS = 'cellopt',
}
