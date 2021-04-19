import { KupDebugCategory } from '../kup-debug/kup-debug-declarations';
import type { KupDom } from '../kup-manager/kup-manager-declarations';

const dom: KupDom = document.documentElement as KupDom;

/**
 * This class handles elements as dialogs, making them resizable and movable.
 * @module KupDialog
 */
export class KupDialog {
    action: string = null;
    activeElement: HTMLElement = null;
    activeX: number = 0;
    activeY: number = 0;
    coordinates: string = null;
    managedElements: Set<HTMLElement> = null;
    startingHeight: number = 0;
    startingWidth: number = 0;
    startingX: number = 0;
    startingY: number = 0;
    threshold: number = 5;
    zIndex: number = 200;
    #initialized: boolean = false;
    #elementDrag: (this: Document, e: Event) => any = function (e: MouseEvent) {
        const kupDialog: KupDialog = dom.ketchup.dialog;
        const paths: EventTarget[] = e.composedPath();
        if (!kupDialog.activeElement) {
            for (let index = 0; index < paths.length; index++) {
                if ((paths[index] as HTMLElement).tagName === 'BODY') {
                    return;
                }
                try {
                    if (
                        (paths[index] as HTMLElement).nodeName !==
                            '#document-fragment' &&
                        (paths[index] as HTMLElement).hasAttribute('kup-dialog')
                    ) {
                        kupDialog.activeElement = paths[index] as HTMLElement;
                        break;
                    }
                } catch (error) {
                    dom.ketchup.debug.logMessage(
                        'kup-dialog',
                        error,
                        KupDebugCategory.WARNING
                    );
                }
            }
        }
        if (kupDialog.action === 'move') {
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
        } else if (kupDialog.action === 'resize') {
            const height: number = kupDialog.activeElement.offsetHeight;
            const width: number = kupDialog.activeElement.offsetWidth;
            let x: number = kupDialog.startingWidth;
            let y: number = kupDialog.startingHeight;
            //Y coordinates
            switch (kupDialog.coordinates) {
                case 'n-resize':
                case 'ne-resize':
                case 'nw-resize': {
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
                case 's-resize':
                case 'se-resize':
                case 'sw-resize': {
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
                case 'e-resize':
                case 'ne-resize':
                case 'se-resize': {
                    x -= kupDialog.activeX - e.clientX;
                    if (x < 100) {
                        x = 100;
                    }
                    kupDialog.activeElement.style.width = x + 'px';
                    break;
                }
                case 'w-resize':
                case 'nw-resize':
                case 'sw-resize': {
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
            kupDialog.setCoords(kupDialog.activeElement, e.clientX, e.clientY);
        }
    };
    #mouseDown: Function = function (e: MouseEvent) {
        e.preventDefault();
        const kupDialog: KupDialog = dom.ketchup.dialog;
        console.log('o');
        if (kupDialog.activeElement) {
            if (kupDialog.coordinates) {
                kupDialog.action = 'resize';
                kupDialog.startingHeight = kupDialog.activeElement.offsetHeight;
                kupDialog.startingWidth = kupDialog.activeElement.offsetWidth;
                kupDialog.startingX = kupDialog.activeElement.offsetLeft;
                kupDialog.startingY = kupDialog.activeElement.offsetTop;
            } else {
                if (kupDialog.activeElement['drag-handle']) {
                    const paths: EventTarget[] = e.composedPath();
                    if (paths[0] === kupDialog.activeElement['drag-handle']) {
                        kupDialog.action = 'move';
                    }
                }
            }
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
     * @param {HTMLElement} el - Resizable element.
     * @param {number} x - X coordinate.
     * @param {number} y - Y coordinate.
     */
    setCoords(el: HTMLElement, x: number, y: number): void {
        this.coordinates = '';
        if (el) {
            // Left border
            if (
                x === el.offsetLeft ||
                (x > el.offsetLeft && x < el.offsetLeft + this.threshold)
            ) {
                this.coordinates = 'w-resize';
            } else if (
                x === el.offsetLeft + el.offsetWidth ||
                (x < el.offsetLeft + el.offsetWidth &&
                    x > el.offsetLeft + el.offsetWidth - this.threshold)
            ) {
                // Right border
                this.coordinates = 'e-resize';
            }
            // Top border
            if (
                y === el.offsetTop ||
                (y > el.offsetTop && y < el.offsetTop + this.threshold)
            ) {
                if (this.coordinates === 'w-resize') {
                    this.coordinates = 'nw-resize';
                } else if (this.coordinates === 'e-resize') {
                    this.coordinates = 'ne-resize';
                } else {
                    this.coordinates = 'n-resize';
                }
            } else if (
                // Bottom border
                y === el.offsetTop + el.offsetHeight ||
                (y < el.offsetTop + el.offsetHeight &&
                    y > el.offsetTop + el.offsetHeight - this.threshold)
            ) {
                if (this.coordinates === 'w-resize') {
                    this.coordinates = 'sw-resize';
                } else if (this.coordinates === 'e-resize') {
                    this.coordinates = 'se-resize';
                } else {
                    this.coordinates = 's-resize';
                }
            }
            el.style.cursor = this.coordinates;
        }
    }
    /**
     * Watches the element eligible to move when dragging.
     * @param {HTMLElement} el - Movable element.
     * @param {HTMLElement} handleEl - Element that must be dragged in order to trigger the movement. When not provided, dragging anywhere on "el" will trigger the movement.
     */
    register(el: HTMLElement, handleEl?: HTMLElement): void {
        if (!this.#initialized) {
            this.initialize();
        }
        el.setAttribute('kup-dialog', '');
        el.style.zIndex = (this.zIndex++).toString();
        if (!el.style.left) {
            el.style.left = '0';
        }
        if (!el.style.top) {
            el.style.top = '0';
        }
        el.addEventListener('mousedown', (e: MouseEvent) => this.#mouseDown(e));
        if (handleEl) {
            el['drag-handle'] = handleEl;
        }
        this.managedElements.add(el);
    }
    /**
     * Removes the elements from the MoveOnDrag class watchlist.
     * @param {HTMLElement[]} elements - Elements to remove.
     */
    unregister(elements: HTMLElement[]): void {
        if (this.managedElements) {
            for (let index = 0; index < elements.length; index++) {
                this.managedElements.delete(elements[index]);
            }
        }
    }
    /**
     * Returns whether an element was previously registered or not.
     * @param {HTMLElement} el - Element to test.
     * @returns {boolean} True if the element was registered.
     */
    isRegistered(el: HTMLElement): boolean {
        return !this.managedElements ? false : this.managedElements.has(el);
    }
}
