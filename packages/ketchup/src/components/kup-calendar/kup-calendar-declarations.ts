import { KupEventPayload } from '../../types/GenericTypes';
import { Row } from '../kup-data-table/kup-data-table-declarations';

/**
 * Props of the kup-calendar component.
 * Used to export every prop in an object.
 */
export enum KupCalendarProps {
    customStyle = 'Custom style of the component.',
    data = ' Actual data of the calendar.',
    dateCol = "Column containing events' dates.",
    descrCol = "Column containing events' descriptions.",
    endCol = "Column containing events' ending time.",
    hideNavigation = "When disabled, the navigation toolbar won't be displayed.",
    iconCol = "Column containing events' icons. There can be multiple icons, divided by ';'.",
    imageCol = "Column containing events' images. There can be multiple images, divided by ';'.",
    initialDate = 'Sets the initial date of the calendar. Must be in ISO format (YYYY-MM-DD).',
    startCol = "Column containing events' starting time.",
    styleCol = "Column containing events' CSS styles.",
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
