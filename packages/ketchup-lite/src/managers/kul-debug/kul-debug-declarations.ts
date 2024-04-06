export interface KulDebugComponentInfo {
    endTime: number;
    renderCount: number;
    renderEnd: number;
    renderStart: number;
    startTime: number;
}
export interface KulDebugLog {
    category: KulDebugCategory;
    date: Date;
    element: string | Object;
    id: string;
    message: string;
}
export interface KulDebugLogPrint {
    [index: string]: {
        date: string;
        element: string | Object;
        message: string;
    }[];
}
export type KulDebugCategory = 'informational' | 'warning' | 'error';
export type KulDebugLifecycles =
    | 'custom'
    | 'did-load'
    | 'did-render'
    | 'will-render';
