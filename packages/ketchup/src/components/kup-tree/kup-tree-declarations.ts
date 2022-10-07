import {
    KupDataCell,
    KupDataColumn,
    KupDataNode,
    KupDataRow,
} from '../../managers/kup-data/kup-data-declarations';
import type { PointerEvent } from '@interactjs/types/index';
import { GenericMap, KupEventPayload } from '../../types/GenericTypes';
import { KupCardEventPayload } from '../kup-card/kup-card-declarations';
/**
 * Props of the kup-tree component.
 * Used to export every prop in an object.
 */
export enum KupTreeProps {
    asAccordion = 'When enabled, the first level of depth will give an accordion look to nodes.',
    columns = 'The columns of the tree when tree visualization is active.',
    customStyle = 'Custom style of the component.',
    data = 'The json data used to populate the tree view: the basic, always visible tree nodes.',
    density = "The density of the rows, defaults at 'medium' and can also be set to 'dense' or 'wide'.",
    dynamicExpansionCallback = 'Function that gets invoked when a new set of nodes must be loaded as children of a node. When useDynamicExpansion is set, the tree component will have two different behaviors depending on the value of this prop. If this prop is set to null, no callback to download data is available: the component will emit an event requiring the parent to load the children of the given node. If this prop is set to have a callback, then the component will automatically make requests to load children of a given node. After the load has been completed, a different event will be fired to alert the parent of the change.',
    enableExtraColumns = 'Enables adding extra columns.',
    expanded = 'Flag: the nodes of the whole tree must be already expanded upon loading. Disabled nodes do NOT get expanded.',
    expansionMode = "Behavior of nodes' expansion: it can be chosen between expanding a node by clicking on the dropdown icon, or by clicking on the whole node.",
    filters = 'List of filters set by the user.',
    globalFilter = 'When set to true it activates the global filter.',
    globalFilterValue = 'The value of the global filter.',
    globalFilterMode = 'The mode of the global filter.',
    removableColumns = 'Sets the possibility to remove the selected column.',
    preventXScroll = 'Experimental feature: when active, the tree will try to prevent horizontal overflowing elements by setting a width on the content of the table cells. It works only on cells of the main column.',
    ripple = "When enabled displays Material's ripple effect on nodes (only when no columns are displayed).",
    scrollOnHover = 'Activates the scroll on hover function.',
    showColumns = 'Shows the tree data as a table.',
    showFilters = 'When set to true enables the column filters.',
    showFooter = 'When set to true shows the footer.',
    showHeader = 'Flag: shows the header of the tree when the tree is displayed as a table.',
    showIcons = 'Shows the icons of the nodes.',
    stateId = '',
    store = '',
    totals = 'Defines the current totals options.',
    useDynamicExpansion = 'When the component must use the dynamic expansion feature to open its nodes, it means that not all the nodes of the tree have been passed inside the data property. Therefore, when expanding a node, the tree must emit an event (or run a given callback) and wait for the child nodes to be downloaded from the server.',
}

export interface KupTreeNode extends KupDataNode {
    expandable?: boolean;
    iconColor?: string;
    style?: GenericMap;
    visible?: boolean;
}

export type TreeNodePath = number[];

/**
 * The name of the constant used by the tree component to identify the main tree in column menu
 * @constant
 */
export const treeMainColumnName = 'TREE_COLUMN';

/**
 * Contains all the data of an event.
 */
export interface KupTreeEventHandlerDetails {
    area: string;
    cell: KupDataCell;
    column: KupDataColumn;
    filterRemove: HTMLSpanElement;
    originalEvent: PointerEvent;
    row: KupDataRow;
    td: HTMLElement;
    th: HTMLElement;
    tr: HTMLElement;
}

export enum KupTreeExpansionMode {
    DROPDOWN = 'dropdown',
    NODE = 'node',
}

export interface KupTreeNodeCollapseEventPayload extends KupEventPayload {
    treeNodePath: TreeNodePath;
    treeNode: KupDataNode;
}

export interface KupTreeNodeExpandEventPayload
    extends KupTreeNodeCollapseEventPayload {
    usesDynamicExpansion?: boolean;
    dynamicExpansionRequireChildren?: boolean;
}

export interface KupTreeNodeSelectedEventPayload
    extends KupTreeNodeCollapseEventPayload {
    columnName: string;
}

export interface KupTreeNodeButtonClickEventPayload
    extends KupTreeNodeCollapseEventPayload {
    column: KupDataColumn;
    columnName: string;
}

export interface KupTreeContextMenuEventPayload extends KupEventPayload {
    details: KupTreeEventHandlerDetails;
}

export interface KupTreeColumnMenuEventPayload extends KupEventPayload {
    card: HTMLKupCardElement;
    event: CustomEvent<KupCardEventPayload | KupEventPayload>;
    open: boolean;
}

export interface KupTreeDynamicMassExpansionEventPayload
    extends KupEventPayload {
    treeNodePath?: TreeNodePath;
    treeNode?: KupDataNode;
    expandAll?: boolean;
}

export interface KupTreeColumnRemoveEventPayload extends KupEventPayload {
    column: KupDataColumn;
}
