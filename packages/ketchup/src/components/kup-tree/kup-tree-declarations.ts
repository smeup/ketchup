import {
    CellsHolder,
    RowAction,
} from './../kup-data-table/kup-data-table-declarations';

/**
 * The name of the property used by the tree component to store whether a TreeNode is open or closed
 * @constant
 */
export const treeExpandedPropName = 'isExpanded';

export interface TreeNode {
    actions?: Array<RowAction>;

    cells: CellsHolder;

    children: Array<TreeNode>;
 
    disabled: boolean;

    expandable: boolean;

    icon?: string;

    iconColor?: string;

    id?: string;

    obj: {
        t: string;
        p: string;
        k: string;
    };

    options?: boolean;

    // TODO what is this?
    readOnly?: boolean;

    style?: { [index: string]: string };

    value: string;

    /** used for render or not render node (and children) while filtering */
    visible?: boolean;

    [treeExpandedPropName]?: boolean;
}

export type TreeNodePath = number[];
