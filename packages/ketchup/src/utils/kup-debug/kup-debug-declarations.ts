/**
 * Interface for the logs of KupDebug.
 */
export interface KupDebugLog {
    category: KupDebugCategory;
    date: Date;
    id: string;
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
 * Category of debug logs.
 */
export enum KupDebugCategory {
    INFO = 'Informational',
    WARNING = 'Warning',
    ERROR = 'Error',
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
