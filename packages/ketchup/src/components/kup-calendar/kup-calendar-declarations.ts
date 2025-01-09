import {
    KupDataColumn,
    KupDataRow,
} from '../../managers/kup-data/kup-data-declarations';
import { KupEventPayload } from '../../types/GenericTypes';

/**
 * Props of the kup-calendar component.
 * Used to export every prop in an object.
 */
export enum KupCalendarProps {
    currentDate = 'Sets the date of the calendar. Must be in ISO format (YYYY-MM-DD).',
    customStyle = 'Custom style of the component.',
    data = 'Actual data of the calendar.',
    editableEvents = 'When true, events are editable.',
    hideNavigation = "When disabled, the navigation toolbar won't be displayed.",
    viewType = 'Type of the view.',
}
/**
 * Available view types.
 */
export enum KupCalendarViewTypes {
    DAY = 'timeGridDay',
    LIST = 'listMonth',
    MONTH = 'dayGridMonth',
    WEEK = 'timeGridWeek',
}
/**
 * Available column options.
 */
export enum KupCalendarOptions {
    DATE = 'date',
    DESCR = 'descr',
    END = 'end',
    ICON = 'icon',
    IMAGE = 'image',
    START = 'start',
    STYLE = 'style',
}
/**
 * Calendar column.
 */
export type KupCalendarColumnsProp = {
    [key in KupCalendarOptions]: string;
};
/**
 * Dataset of the calendar.
 */
export interface KupCalendarData {
    columns: KupDataColumn[];
    rows: KupDataRow[];
}
/**
 * Events payload.
 */
export interface KupCalendarEventClickEventPayload extends KupEventPayload {
    row: KupDataRow;
}
export interface KupCalendarDateClickEventPayload extends KupEventPayload {
    date: Date;
}
export interface KupCalendarEventDropEventPayload extends KupEventPayload {
    fromDate: {
        start: Date;
        end: Date;
    };
    toDate: {
        start: Date;
        end: Date;
    };
    row: KupDataRow;
}
export interface KupCalendarViewChangeEventPayload extends KupEventPayload {
    from: Date;
    to: Date;
}
