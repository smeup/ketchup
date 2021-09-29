/**
 * Props of the kup-calendar component.
 * Used to export every prop in an object.
 */
export enum KupCalendarProps {
    data = ' Actual data of the calendar.',
    dateCol = "Column containing events' dates.",
    descrCol = "Column containing events' descriptions.",
    endCol = "Column containing events' ending time.",
    hideNavigation = "When disabled, the navigation toolbar won't be displayed.",
    iconCol = "Column containing events' icons. There can be multiple icons, divided by ';'.",
    imageCol = "Column containing events' images. There can be multiple images, divided by ';'.",
    initialDate = 'Sets the initial date of the calendar.',
    startCol = "Column containing events' starting time.",
    styleCol = "Column containing events' CSS styles.",
    viewType = 'Type of the view.',
}
/**
 * Props of the kup-calendar component.
 */
export enum KupCalendarViewTypes {
    DAY = 'timeGridDay',
    LIST = 'listMonth',
    MONTH = 'dayGridMonth',
    WEEK = 'timeGridWeek',
}
