import {
    Cell,
    Column,
    Row,
} from '../components/kup-data-table/kup-data-table-declarations';

/**
 * Generic KupComponent.
 */
export interface KupComponent extends HTMLElement {
    customStyle: string;
    customStyleTheme: string;
    debugInfo: {
        endTime: number;
        renderCount: number;
        renderEnd: number;
        renderStart: number;
        startTime: number;
    };
    getProps?: (descriptions?: boolean) => Promise<GenericObject>;
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
    danger?: boolean;
    dataSet?: GenericObject;
    id?: string;
    info?: boolean;
    secondary?: boolean;
    success?: boolean;
    title?: string;
    warning?: boolean;
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
/**
 * Generic payload of a kup event.
 */
export interface KupEventPayload {
    comp: any;
    id: string;
}
/**
 * Interface for drag & drop elements.
 */
export interface KupDraggableElement extends HTMLElement {
    kupDragDrop: KupDraggablePayload;
}
/**
 * Drag and drop payload.
 */
export interface KupDraggablePayload {
    cell?: Cell;
    clone?: HTMLElement;
    column?: Column;
    id?: string;
    row?: Row;
    selectedRows?: Row[];
}
