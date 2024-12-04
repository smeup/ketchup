import { KupEventPayload } from '../../types/GenericTypes';

/**
 * Props of the kup-date-picker component.
 * Used to export every prop in an object.
 */
export enum KupDatePickerProps {
    customStyle = 'Custom style of the component.',
    data = 'Props of the sub-components.',
    disabled = 'Defaults at false. When set to true, the component is disabled.',
    firstDayIndex = 'First day number (0 - sunday, 1 - monday, ...)',
    initialValue = 'Sets the initial value of the component',
    sizing = 'Sets the size of the component. Medium is the default',
    showIcon = 'You can set if u want to show the calendar icon to toggle date-picker. True is the default',
    showPreviousNextMonthDays = 'You can set if show the previous/next month days in calendar',
    hasTooltip = 'When true displays tooltip indicator',
}
export enum SourceEvent {
    DATE = 'date',
    MONTH = 'month',
    YEAR = 'year',
}

export interface KupDatePickerEventPayload extends KupEventPayload {
    value: any;
}
