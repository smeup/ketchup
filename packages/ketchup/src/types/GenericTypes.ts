/**
 * Interface used to define the HTML element with Ketch.UP specific properties.
 */
export interface KupDom extends HTMLHtmlElement {
    kupDebug: boolean;
    'kup-theme': string;
    kupCurrentTheme: GenericObject;
    kupCustomStyles: Array<KupComponent>;
    kupRefreshTheme: Function;
    kupThemes: GenericObject;
}
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
