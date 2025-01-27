import { KupEventPayload } from '../../types/GenericTypes';
import { KupTreeNode } from '../kup-tree/kup-tree-declarations';

/**
 * Props of the kup-multi-select component.
 * Used to export every prop in an object.
 */
export enum KupMultiSelectProps {
    customStyle = 'Custom style of the component.',
    disabled = 'Defaults at false. When set to true, the component is disabled.',
    data = 'Contains the data used to populate the tree view and the data used to visualize selected nodes via kup-chips',
}

export interface KupMultiSelectEventPayload extends KupEventPayload {
    selected: KupTreeNode;
}
