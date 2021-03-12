/**
 * Interface for the KupManager override settings.
 */
export interface KupDebugLog {
    type: string;
    message: string;
    id: string | HTMLElement;
    date: string;
    element: string | Object;
}
