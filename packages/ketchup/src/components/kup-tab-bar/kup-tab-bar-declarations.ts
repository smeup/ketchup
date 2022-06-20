import { KupDataNode } from '../../managers/kup-data/kup-data-declarations';
import { KupEventPayload } from '../../types/GenericTypes';

/**
 * Props of the kup-tab-bar component.
 * Used to export every prop in an object.
 */
export enum KupTabBarProps {
    customStyle = 'Custom style of the component.',
    data = 'List of elements.',
    ripple = "When enabled displays Material's ripple effect on item headers.",
}
/**
 * The object of a single radio.
 */
export interface KupTabBarNode extends KupDataNode {
    active?: boolean;
}

export interface KupTabBarEventPayload extends KupEventPayload {
    node: KupTabBarNode;
    index: number;
}
