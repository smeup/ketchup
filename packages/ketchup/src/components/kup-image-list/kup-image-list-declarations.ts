import {
    KupDataCell,
    KupDataColumn,
    KupDataNode,
    KupDataRow,
} from '../../managers/kup-data/kup-data-declarations';
import { GenericObject, KupEventPayload } from '../../types/GenericTypes';

/**
 * Props of the kup-image-list component.
 * Used to export every prop in an object.
 */
export enum KupImageListProps {
    columns = 'Can set a specific number of columns',
    customStyle = 'Custom style of the component.',
    data = 'Actual data of the component',
    ripple = "When enabled displays Material's ripple effect on clicked items.",
    rows = 'Cam set a specific number of rows. It overwrite the columns flow into rows flow',
}

export interface KupImageListEventPayload extends KupEventPayload {
    details: KupImageListEventHandlerDetails;
}
/**
 * Contains all the data of an event.
 */
export interface KupImageListEventHandlerDetails {
    cell: KupDataCell;
    column: KupDataColumn;
    originalEvent: PointerEvent;
    row: KupDataRow;
}

export interface KupImageListDataNode extends KupDataNode {
    badgeData: GenericObject[];
    children?: KupImageListDataNode[];
}
