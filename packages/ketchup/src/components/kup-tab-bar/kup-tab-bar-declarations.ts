import { KupDataNode } from '../../managers/kup-data/kup-data-declarations';
import { KupEventPayload } from '../../types/GenericTypes';

/**
 * Props of the kup-tab-bar component.
 * Used to export every prop in an object.
 */
export enum KupTabBarProps {
    customStyle = 'Custom style of the component.',
    data = 'List of elements.',
    dense = 'When true, the component will be more compact.',
    infoIcon = 'Icon to be shown in the info button',
    ripple = "When enabled displays Material's ripple effect on item headers.",
    toolbar = 'when true, it will show the toolbar activation icon',
    variant = 'Variant of the component. It is either flat or contained',
    toolbarCallback = 'Callback to be called when the toolbar icon is clicked',
    infoCallback = 'Callback to be called when the info icon is clicked',
}

/**
 * Styling options for the f-button component.
 * @enum {string}
 * @property {string} FLAT - Flat style: no background nor borders.
 * @property {string} CONTAINED - Background and active field as background.

 */
export enum KupTabbarStyling {
    FLAT = 'flat',
    CONTAINED = 'contained',
}

/**
 * The object of a single radio.
 */
export interface KupTabBarNode extends KupDataNode {
    active?: boolean;
    danger?: boolean;
}

export interface KupTabBarEventPayload extends KupEventPayload {
    node: KupTabBarNode;
    index: number;
}
