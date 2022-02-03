import { KupEventPayload } from '../../types/GenericTypes';
import { Column, Row } from '../kup-data-table/kup-data-table-declarations';

/**
 * Props of the kup-calendar component.
 * Used to export every prop in an object.
 */
export enum KupCalendarProps {
    currentDate = 'Sets the date of the calendar. Must be in ISO format (YYYY-MM-DD).',
    customStyle = 'Custom style of the component.',
    data = ' Actual data of the calendar.',
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
 * Available view types.
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
export interface KupCalendarColumn extends Column {
    calendarOption: KupCalendarOptions;
}
/**
 * Dataset of the calendar.
 */
export interface KupCalendarData {
    columns: KupCalendarColumn[];
    rows: Row[];
}
/**
 * Events payload.
 */
export interface KupCalendarEventClickEventPayload extends KupEventPayload {
    row: Row;
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
}
export interface KupCalendarViewChangeEventPayload extends KupEventPayload {
    from: Date;
    to: Date;
}
