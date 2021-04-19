/**
 * Element used as a dialog.
 */
export interface DialogElement extends HTMLElement {
    dragHandle?: HTMLElement;
}
/**
 * Actions performed by KupDialog.
 * The value reflects the CSS "cursor" property.
 */
export enum KupDialogActions {
    MOVE = 'move',
    RESIZE = 'resize',
}
/**
 * Coordinates of the resize.
 * The value reflects the CSS "cursor" property.
 */
export enum KupDialogCoordinates {
    UNSET = 'auto',
    NORTHWEST = 'nw-resize',
    NORTH = 'n-resize',
    NORTHEAST = 'ne-resize',
    EAST = 'e-resize',
    SOUTHEAST = 'se-resize',
    SOUTH = 's-resize',
    SOUTHWEST = 'sw-resize',
    WEST = 'w-resize',
}
