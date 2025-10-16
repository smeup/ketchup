import {
    KupDataColumn,
    KupDataNode,
} from '../../managers/kup-data/kup-data-declarations';
import { KupEventPayload } from '../../types/GenericTypes';

/**
 * Props of the kup-accordion component.
 * Used to export every prop in an object.
 */
export enum KupAccordionProps {
    customStyle = 'Custom style of the component. For more information: https://smeup.github.io/ketchup/#/customization',
    data = 'List of elements.',
    infoIcon = 'When true, it will show the info activation icon',
    ripple = "When enabled displays Material's ripple effect on item headers.",
    toolbar = 'When true, it will show the toolbar activation icon',
    sizing = 'Sets the type of the component sizing.',
    toolbarCallback = 'Callback to be called when the toolbar icon is clicked',
    infoCallback = 'Callback to be called when the info icon is clicked',
}
/**
 * Data of the accordion.
 */
export interface KupAccordionNode extends KupDataNode {
    active?: boolean;
    contentVisible?: boolean;
    danger?: boolean;
}

export interface KupAccordionEventPayload extends KupEventPayload {
    node: KupAccordionNode;
    // index: number;
}
