import type { KupDom } from '../kup-manager/kup-manager-declarations';
import {
    DialogElement,
    KupDialogActions,
    kupDialogAttribute,
    KupDialogCoordinates,
    kupResizableDialogClass,
} from './kup-dialog-declarations';

const dom: KupDom = document.documentElement as KupDom;

/**
 * This class handles elements as dialogs, making them resizable and movable.
 * @module KupDialog
 */
export class KupDialog {
    action: KupDialogActions = null;
    activeElement: DialogElement = null;
    activeX: number = 0;
    activeY: number = 0;
    coordinates: KupDialogCoordinates = null;
    managedElements: Set<DialogElement> = null;
    startingHeight: number = 0;
    startingWidth: number = 0;
    startingX: number = 0;
    startingY: number = 0;
    threshold: number = 5;
    zIndex: number =
        dom.ketchupInit &&
        dom.ketchupInit.dialog &&
        dom.ketchupInit.dialog.zIndex
            ? dom.ketchupInit.dialog.zIndex
            : 200;
    #initialized: boolean = false;
    #elementDrag: (this: Document, e: Event) => any = function (e: MouseEvent) {
        const kupDialog: KupDialog = dom.ketchup.dialog;
        const paths: EventTarget[] = e.composedPath();
        if (kupDialog.action === KupDialogActions.MOVE) {
            const x: number =
                kupDialog.activeElement.offsetLeft -
                (kupDialog.activeX - e.clientX);
            const y: number =
                kupDialog.activeElement.offsetTop -
                (kupDialog.activeY - e.clientY);
            kupDialog.activeElement.style.left = x + 'px';
            kupDialog.activeElement.style.top = y + 'px';
            kupDialog.activeX = e.clientX;
            kupDialog.activeY = e.clientY;
        } else if (kupDialog.action === KupDialogActions.RESIZE) {
            const height: number = kupDialog.activeElement.offsetHeight;
            const width: number = kupDialog.activeElement.offsetWidth;
            let x: number = kupDialog.startingWidth;
            let y: number = kupDialog.startingHeight;
            //Y coordinates
            switch (kupDialog.coordinates) {
                case KupDialogCoordinates.NORTH:
                case KupDialogCoordinates.NORTHEAST:
                case KupDialogCoordinates.NORTHWEST: {
                    y += kupDialog.activeY - e.clientY;
                    if (y < 100) {
                        y = 100;
                    }
                    kupDialog.activeElement.style.height = y + 'px';
                    if (height !== kupDialog.activeElement.offsetHeight) {
                        kupDialog.activeElement.style.top =
                            kupDialog.activeElement.offsetTop -
                            (kupDialog.startingY - e.clientY) +
                            'px';
                        kupDialog.startingY = e.clientY;
                    }
                    break;
                }
                case KupDialogCoordinates.SOUTH:
                case KupDialogCoordinates.SOUTHEAST:
                case KupDialogCoordinates.SOUTHWEST: {
                    y -= kupDialog.activeY - e.clientY;
                    if (y < 100) {
                        y = 100;
                    }
                    kupDialog.activeElement.style.height = y + 'px';
                    break;
                }
            }
            //X coordinates
            switch (kupDialog.coordinates) {
                case KupDialogCoordinates.EAST:
                case KupDialogCoordinates.NORTHEAST:
                case KupDialogCoordinates.SOUTHEAST: {
                    x -= kupDialog.activeX - e.clientX;
                    if (x < 100) {
                        x = 100;
                    }
                    kupDialog.activeElement.style.width = x + 'px';
                    break;
                }
                case KupDialogCoordinates.WEST:
                case KupDialogCoordinates.NORTHWEST:
                case KupDialogCoordinates.SOUTHWEST: {
                    x += kupDialog.activeX - e.clientX;
                    if (x < 100) {
                        x = 100;
                    }
                    kupDialog.activeElement.style.width = x + 'px';
                    if (width !== kupDialog.activeElement.offsetWidth) {
                        kupDialog.activeElement.style.left =
                            kupDialog.activeElement.offsetLeft -
                            (kupDialog.startingX - e.clientX) +
                            'px';
                        kupDialog.startingX = e.clientX;
                    }
                    break;
                }
            }
        } else {
            kupDialog.managedElements.forEach((el) => {
                if (paths.includes(el)) {
                    kupDialog.activeElement = el;
                }
            });
            kupDialog.setCoords(e.clientX, e.clientY, paths);
        }
    };
    #mouseDown: Function = function (e: MouseEvent) {
        const kupDialog: KupDialog = dom.ketchup.dialog;
        if (kupDialog.activeElement) {
            switch (kupDialog.coordinates) {
                case KupDialogCoordinates.ALL:
                    kupDialog.action = KupDialogActions.MOVE;
                    break;
                case KupDialogCoordinates.UNSET:
                    return;
                default:
                    kupDialog.action = KupDialogActions.RESIZE;
                    kupDialog.startingHeight =
                        kupDialog.activeElement.offsetHeight;
                    kupDialog.startingWidth =
                        kupDialog.activeElement.offsetWidth;
                    kupDialog.startingX = kupDialog.activeElement.offsetLeft;
                    kupDialog.startingY = kupDialog.activeElement.offsetTop;
                    break;
            }
            e.preventDefault();
            kupDialog.activeX = e.clientX;
            kupDialog.activeY = e.clientY;
            kupDialog.activeElement.style.zIndex = (this.zIndex++).toString();
        }
    };
    #mouseUp: (this: Document, e: Event) => any = function () {
        const kupDialog: KupDialog = dom.ketchup.dialog;
        kupDialog.action = null;
        kupDialog.activeElement = null;
    };
    /**
     * Initializes the class' elements.
     */
    initialize(): void {
        document.addEventListener('mousemove', this.#elementDrag);
        document.addEventListener('mouseup', this.#mouseUp);
        this.#initialized = true;
        this.managedElements = new Set();
    }
    /**
     * Checks whether the mouse overs on the edges of the element or not.
     * @param {number} x - X coordinate.
     * @param {number} y - Y coordinate.
     * @param {EventTarget[]} paths - Paths returned from the event. Used to search for the drag handle and, if found, enables dragging.
     */
    setCoords(x: number, y: number, paths: EventTarget[]): void {
        this.coordinates = KupDialogCoordinates.UNSET;
        if (this.activeElement) {
            if (this.activeElement.kupDialog.resizable) {
                // Left border
                if (
                    x === this.activeElement.offsetLeft ||
                    (x > this.activeElement.offsetLeft &&
                        x < this.activeElement.offsetLeft + this.threshold)
                ) {
                    this.coordinates = KupDialogCoordinates.WEST;
                } else if (
                    x ===
                        this.activeElement.offsetLeft +
                            this.activeElement.offsetWidth ||
                    (x <
                        this.activeElement.offsetLeft +
                            this.activeElement.offsetWidth &&
                        x >
                            this.activeElement.offsetLeft +
                                this.activeElement.offsetWidth -
                                this.threshold)
                ) {
                    // Right border
                    this.coordinates = KupDialogCoordinates.EAST;
                }
                // Top border
                if (
                    y === this.activeElement.offsetTop ||
                    (y > this.activeElement.offsetTop &&
                        y < this.activeElement.offsetTop + this.threshold)
                ) {
                    if (this.coordinates === KupDialogCoordinates.WEST) {
                        this.coordinates = KupDialogCoordinates.NORTHWEST;
                    } else if (this.coordinates === KupDialogCoordinates.EAST) {
                        this.coordinates = KupDialogCoordinates.NORTHEAST;
                    } else {
                        this.coordinates = KupDialogCoordinates.NORTH;
                    }
                } else if (
                    // Bottom border
                    y ===
                        this.activeElement.offsetTop +
                            this.activeElement.offsetHeight ||
                    (y <
                        this.activeElement.offsetTop +
                            this.activeElement.offsetHeight &&
                        y >
                            this.activeElement.offsetTop +
                                this.activeElement.offsetHeight -
                                this.threshold)
                ) {
                    if (this.coordinates === KupDialogCoordinates.WEST) {
                        this.coordinates = KupDialogCoordinates.SOUTHWEST;
                    } else if (this.coordinates === KupDialogCoordinates.EAST) {
                        this.coordinates = KupDialogCoordinates.SOUTHEAST;
                    } else {
                        this.coordinates = KupDialogCoordinates.SOUTH;
                    }
                }
            }
            if (this.coordinates === KupDialogCoordinates.UNSET) {
                if (this.activeElement.kupDialog.dragHandle) {
                    if (
                        paths.includes(this.activeElement.kupDialog.dragHandle)
                    ) {
                        this.coordinates = KupDialogCoordinates.ALL;
                    }
                } else {
                    this.coordinates = KupDialogCoordinates.ALL;
                }
            }
            this.activeElement.style.cursor = this.coordinates;
        }
    }
    /**
     * Watches the element handled as dialog.
     * @param {DialogElement} el - Dialog element.
     * @param {HTMLElement} handleEl - Element that must be dragged in order to trigger movement. When not provided, dragging anywhere on "el" will move it.
     * @param {boolean} unresizable - When true, the dialog can't be resized.
     */
    register(
        el: DialogElement,
        handleEl?: HTMLElement,
        unresizable?: boolean
    ): void {
        if (!this.#initialized) {
            this.initialize();
        }
        el.setAttribute(kupDialogAttribute, '');
        el.style.zIndex = (this.zIndex++).toString();
        if (!el.style.left) {
            el.style.left = '0';
        }
        if (!el.style.top) {
            el.style.top = '0';
        }
        el.addEventListener('mousedown', (e: MouseEvent) => this.#mouseDown(e));
        el.kupDialog = { dragHandle: null, resizable: true };
        if (handleEl) {
            el.kupDialog.dragHandle = handleEl;
        }
        if (unresizable) {
            el.kupDialog.resizable = false;
        } else {
            el.classList.add(kupResizableDialogClass);
        }
        this.managedElements.add(el);
    }
    /**
     * Removes the elements from the MoveOnDrag class watchlist.
     * @param {DialogElement[]} elements - Elements to remove.
     */
    unregister(elements: DialogElement[]): void {
        if (this.managedElements) {
            for (let index = 0; index < elements.length; index++) {
                this.managedElements.delete(elements[index]);
            }
        }
    }
    /**
     * Returns whether an element was previously registered or not.
     * @param {DialogElement} el - Element to test.
     * @returns {boolean} True if the element was registered.
     */
    isRegistered(el: DialogElement): boolean {
        return !this.managedElements ? false : this.managedElements.has(el);
    }
}
