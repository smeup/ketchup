/**
 * Interface used to define the HTML element with Ketch.UP specific properties.
 */
export interface KupDom extends HTMLHtmlElement {
    kupDebug: boolean;
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
export interface GenericObject {
    [index: string]: any;
}

export interface Identifiable {
    id?: string;
}
