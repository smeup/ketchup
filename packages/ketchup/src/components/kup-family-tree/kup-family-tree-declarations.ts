import {
    KupDataCell,
    KupDataColumn,
    KupDataNode,
} from '../../managers/kup-data/kup-data-declarations';
import { KupEventPayload } from '../../types/GenericTypes';
import { KupBoxLayout } from '../kup-box/kup-box-declarations';

/**
 * Props of the kup-family-tree component.
 * Used to export every prop in an object.
 */
export enum KupFamilyTreeProps {
    autofit = "The component's initial render will fit the container by invoking the runAutofit method.",
    collapsible = 'Nodes can be expanded/collapsed.',
    customStyle = 'Custom style of the component.',
    data = 'Actual data of the component',
    layout = 'Layout of the boxes.',
    stackedLeaves = 'Child nodes that have no children are arranged vertically.',
}

export interface KupFamilyTreeData {
    columns: KupDataColumn[];
    rows: KupFamilyTreeNode[];
}

export type KupFamilyTreeLayout = KupBoxLayout | number;

export interface KupFamilyTreeNode extends KupDataNode {
    children?: KupFamilyTreeNode[];
    isStaff?: boolean;
    layout?: KupFamilyTreeLayout;
}

export interface KupFamilyTreeEventHandlerDetails {
    cell: KupDataCell;
    column: KupDataColumn;
    originalEvent: PointerEvent;
    row: KupFamilyTreeNode;
    td: HTMLElement;
}

export interface KupFamilyTreeEventPayload extends KupEventPayload {
    details: KupFamilyTreeEventHandlerDetails;
}
