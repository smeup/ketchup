import { DataTable } from '../kup-data-table/kup-data-table-declarations';
import { TreeNode } from '../kup-tree/kup-tree-declarations';
/**
 * Props of the kup-tooltip component.
 * Used to export every prop in an object.
 */
export enum KupTooltipProps {
    cellOptions = 'Data for cell options',
    data = 'Data for top section',
    detailData = 'Data for the detail',
    detailTimeout = 'Timeout for loadDetail',
    layout = 'Layout used to display the items',
    loadTimeout = 'Timeout for tooltip',
    owner = 'Owner of this tooltip',
    relatedObject = 'Container element for tooltip',
}

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
    rowId?: string;
    colId?: string;
}

export interface TooltipCellOptions extends TreeNode {
    config?: any;
}

export enum ViewMode {
    TOOLTIP = 'tip',
    CELL_OPTIONS = 'cellopt',
}
