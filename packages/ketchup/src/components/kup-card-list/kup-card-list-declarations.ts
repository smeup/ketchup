import { KupEventPayload } from '../../components';
import {
    KupDataColumn,
    KupDataRow,
} from '../../managers/kup-data/kup-data-declarations';

/**
 * Props of the kup-card-list component.
 * Used to export every prop in an object.
 */
export enum KupCardListProps {
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
export type KupCardListOptions =
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
 * Card list column.
 */
export interface KupCardListColumn extends KupDataColumn {
    cardListOption?: KupCardListOptions;
}
/**
 * Dataset of the card list.
 */
export interface KupCardListData {
    columns: KupCardListColumn[];
    rows: KupDataRow[];
}

export interface KupCardListClickEventPayload extends KupEventPayload {
    index: number;
    row: KupDataRow;
}
