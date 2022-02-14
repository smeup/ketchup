import { KupDataColumn } from '../../managers/kup-data/kup-data-declarations';
import { KupEventPayload } from '../../types/GenericTypes';

/**
 * Props of the kup-accordion component.
 * Used to export every prop in an object.
 */
export enum KupAccordionProps {
    customStyle = 'Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization',
    data = 'Data of the accordion.',
    ripple = "When enabled displays Material's ripple effect on item headers.",
}
/**
 * Data of the accordion.
 */
export interface KupAccordionData {
    columns: KupDataColumn[];
}

export interface KupAccordionItemSelectedEventPayload extends KupEventPayload {
    itemName: string;
}
