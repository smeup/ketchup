import {
    KupDataColumn,
    KupDataNode,
} from '../../managers/kup-data/kup-data-declarations';

/**
 * Props of the kup-family-tree component.
 * Used to export every prop in an object.
 */
export enum KupFamilyTreeProps {
    customStyle = 'Custom style of the component.',
    data = 'Actual data of the component',
    ripple = "When enabled displays Material's ripple effect on clicked items.",
}

export interface KupFamilyTreeData {
    columns: KupDataColumn[];
    rows: KupFamilyTreeNode[];
}

export interface KupFamilyTreeNode extends KupDataNode {
    children?: KupFamilyTreeNode[];
    isWeird?: boolean;
}
