/**
 * Generic KupComponent.
 */
export interface KupComponent extends HTMLElement {
    customStyle: string;
    customStyleTheme: string;
    refreshCustomStyle: Function;
    debugInfo: {
        endTime: number;
        renderCount: number;
        renderEnd: number;
        renderStart: number;
        startTime: number;
    };
    rootElement: KupComponent;
}
/**
 * Props in common with every f-component.
 */
export interface FComponent {
    dataSet?: GenericObject;
    id?: string;
    title?: string;
    wrapperClass?: string;
}
/**
 * Generic object.
 */
export interface GenericObject {
    [index: string]: any;
}
/**
 * Handles an id.
 */
export interface Identifiable {
    id?: string;
}
