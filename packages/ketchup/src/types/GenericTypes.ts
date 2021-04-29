import { HTMLStencilElement } from '@stencil/core/internal';

/**
 * Generic KupComponent.
 */
export interface KupComponent extends HTMLStencilElement {
    customStyle: string;
    customStyleTheme: string;
    debugInfo: {
        endTime: number;
        renderCount: number;
        renderEnd: number;
        renderStart: number;
        startTime: number;
    };
    getProps?: (values?: boolean) => Promise<GenericObject>;
    refresh?: () => Promise<void>;
    rootElement: KupComponent;
    themeChangeCallback: Function;
}
/**
 * Resizable KupComponent.
 */
export interface ResizableKupComponent extends KupComponent {
    resizeCallback: () => {};
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
