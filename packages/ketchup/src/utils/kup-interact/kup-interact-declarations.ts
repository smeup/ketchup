import {
    Cell,
    Column,
    Row,
} from '../../components/kup-data-table/kup-data-table-declarations';
/**
 * HTML Attribute attached to dialogs.
 * Referenced by kup-theme.css
 */
export const kupDialogAttribute = 'kup-dialog';
/**
 * CSS class attached to resizable dialogs.
 * Referenced by kup-theme.css
 */
export const kupDialogResizableClass = 'kup-resizable';
/**
 * Drag & drop variables.
 */
export const kupDropEvent: string = 'kup-drop';
export const kupDragActiveAttr: string = 'kup-drag-active';
export const kupDraggableAttr: string = 'kup-draggable';
export const kupDragOverAttr: string = 'kup-drag-over';
/**
 * Interface for drag & drop elements.
 */
export interface KupDraggableElement extends HTMLElement {
    kupDragDrop: KupDraggablePayload;
}
/**
 * Drag and drop data transfer.
 */
export interface KupDraggablePayload extends KupDropEventSource {
    clone?: HTMLElement;
}
/**
 * Defines the additional data of the drop event.
 */
export interface KupDropEventData {
    callback?: () => KupDropEventTarget;
    dispatcher: HTMLElement;
    type: KupDropEventTypes;
}
/**
 * Supported types of drop event.
 */
export enum KupDropEventTypes {
    BOX = 'text/kup-box-drag',
    DATATABLE = 'text/kup-data-table-row-drag',
    MAGICBOX = 'text/kup-magic-box-drag',
}
/**
 * Drop event payload.
 */
export interface KupDropEventPayload {
    dataType: KupDropEventTypes;
    sourceElement: KupDropEventSource;
    targetElement: KupDropEventTarget;
}
/**
 * Source of the drop event payload.
 */
export interface KupDropEventSource {
    id?: string;
    row?: Row;
    selectedRows?: Row[];
    cell?: Cell;
    column?: Column;
}
/**
 * Target of the drop event payload.
 */
export interface KupDropEventTarget {
    id?: string;
    row?: Row;
    cell?: Cell;
    column?: Column;
}
