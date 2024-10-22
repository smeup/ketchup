import { KupDataCell, KupEventPayload } from '../../components';
import { KupDataCellOptions } from '../../managers/kup-data/kup-data-declarations';

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

export enum KupCellSubmitButtonPosition {
    top = 'column-reverse',
    bottom = 'column',
    left = 'row-reverse',
    right = 'row',
}

export interface KupCellSubmitClickEventPayload extends KupEventPayload {
    cell: KupDataCellOptions;
}
