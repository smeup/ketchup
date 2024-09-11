import { KupDataNode } from '../../managers/kup-data/kup-data-declarations';
import { KupObj } from '../../managers/kup-objects/kup-objects-declarations';
import { GenericObject, KupEventPayload } from '../../types/GenericTypes';
import { KupListNode } from '../kup-list/kup-list-declarations';

/**
 * Props of the kup-tab-bar component.
 * Used to export every prop in an object.
 */
export enum KupTabBarProps {
    customStyle = 'Custom style of the component.',
    data = 'List of elements.',
    ripple = "When enabled displays Material's ripple effect on item headers.",
    toolbar = 'when true, it will show the toolbar activation icon',
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
