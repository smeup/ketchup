import { KupEventPayload } from '../../types/GenericTypes';
import { Cell } from '../kup-data-table/kup-data-table-declarations';

/**
 * Props of the kup-cell component.
 * Used to export every prop in an object.
 */
export enum KupCellProps {
    customStyle = 'Custom style of the component.',
    data = 'The data of the cell.',
    density = "The density of the cell, defaults at 'dense' and can be also set to 'wide' or 'medium'.",
    dragEnabled = 'When set to true, the component is draggable.',
}

export interface KupCellEventPayload extends KupEventPayload {
    cell: Cell;
}
