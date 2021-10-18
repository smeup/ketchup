import { Column } from '../kup-data-table/kup-data-table-declarations';
import { KupEventPayload } from '../../types/GenericTypes';

/**
 * Props of the kup-accordion component.
 * Used to export every prop in an object.
 */
export enum KupAccordionProps {
    customStyle = 'Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization',
    data = 'Data of the accordion.',
}
/**
 * Data of the accordion.
 */
export interface KupAccordionData {
    columns: Column[];
}

export interface KupAccordionItemSelectedEventPayload extends KupEventPayload {
    itemName: string;
}
