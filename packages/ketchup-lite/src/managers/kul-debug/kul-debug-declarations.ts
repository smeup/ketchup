/**
 * Interface for the logs of KulDebug.
 */
export interface KulDebugLog {
    category: KulDebugCategory;
    date: Date;
    id: string;
    element: string | Object;
    message: string;
}
/**
 * Interface for printed logs.
 */
export interface KulDebugLogPrint {
    [index: string]: {
        date: string;
        element: string | Object;
        message: string;
    }[];
}
/**
 * Category of debug logs.
 */
export enum KulDebugCategory {
    INFO = 'Informational',
    WARNING = 'Warning',
    ERROR = 'Error',
}
/**
 * Colors associated with every type of log to be printed.
 */
export enum KulDebugLogColor {
    'Load' = 'green',
    'Render' = 'green',
    'Resize' = 'green',
    'Misc' = 'blue',
    'Total' = 'teal',
}
