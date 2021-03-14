/**
 * Interface for the logs of KupDebug.
 */
export interface KupDebugLog {
    date: Date;
    id: string | HTMLElement;
    element: string | Object;
    message: string;
}
/**
 * Interface for printed logs.
 */
export interface KupDebugLogPrint {
    [index: string]: {
        date: string;
        element: string | Object;
        message: string;
    }[];
}
/**
 * Colors associated with every type of log to be printed.
 */
export enum KupDebugLogColor {
    'Load' = 'green',
    'Render' = 'green',
    'Resize' = 'green',
    'Misc' = 'blue',
    'Total' = 'teal',
}
