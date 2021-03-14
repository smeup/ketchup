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
    date: string;
    element: string | Object;
    message: string;
    type: string;
}
