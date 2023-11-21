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
    data = 'Actual data of the component.',
    decvalueCol = 'Sets the decimal value column.',
    descrCol = 'Sets the description column.',
    fullWidth = 'Sets whether the component occupies all available width.',
    horizontal = 'Sets whether the cards are placed horizontally or not.',
    iconCol = 'Sets the icon column.',
    iconcolorCol = 'Sets the icon color column.',
    intvalueCol = 'Sets the integer value column.',
    isClickable = 'Sets whether a single card is clickable or not.',
    layoutCol = 'Sets the layout column.',
    measureCol = 'Sets the unit of measure column.',
    textcolorCol = 'Sets the text color column.',
    valueCol = 'Sets the value column.',
    valuecolorCol = 'Sets the value color column.',
}
/**
 * Dataset of the card list.
 */
export interface KupCardListData {
    columns: KupDataColumn[];
    rows: KupDataRow[];
}

export interface KupCardListClickEventPayload extends KupEventPayload {
    index: number;
    row: KupDataRow;
}
