import { KupEventPayload } from '../../components';
import {
    KupDataColumn,
    KupDataRow,
} from '../../managers/kup-data/kup-data-declarations';

/**
 * Props of the kup-dash-list component.
 * Used to export every prop in an object.
 */
export enum KupDashListProps {
    columnsNumber = 'Sets the number of columns.',
    customStyle = 'Custom style of the component.',
    data = 'Actual data of the dash.',
    fullWidth = 'Sets whether the component occupies all available width.',
    horizontal = 'Sets whether the dash elements are placed horizontally or not.',
    isClickable = 'Sets whether a single dash is clickable or not.',
}
/**
 * Available column options.
 */
export type KupDashListOptions =
    | 'descr'
    | 'icon'
    | 'value'
    | 'measure'
    | 'intvalue'
    | 'decvalue'
    | 'textcolor'
    | 'valuecolor'
    | 'iconcolor'
    | 'layout';
/**
 * Dash list column.
 */
export interface KupDashListColumn extends KupDataColumn {
    dashListOption?: KupDashListOptions;
}
/**
 * Dataset of the dash list.
 */
export interface KupDashListData {
    columns: KupDashListColumn[];
    rows: KupDataRow[];
}

export interface KupDashListClickEventPayload extends KupEventPayload {
    index: number;
    row: KupDataRow;
}
