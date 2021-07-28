import { Column, Row } from '../kup-data-table/kup-data-table-declarations';

/**
 * Props of the kup-accordion component.
 * Used to export every prop in an object.
 */
export enum KupAccordionProps {
    customStyle = 'Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization',
}
/**
 * Data of the accordion.
 */
export interface KupAccordionData {
    columns: Column[];
    rows: Row[];
}
