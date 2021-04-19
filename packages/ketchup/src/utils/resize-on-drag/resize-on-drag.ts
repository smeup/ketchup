import type { KupDom } from '../kup-manager/kup-manager-declarations';

const dom: KupDom = document.documentElement as KupDom;

/**
 * This class is used to move elements when dragged.
 * @module ResizeOnDrag
 */
export class ResizeOnDrag {
    managedElements: Set<HTMLElement> = new Set();
    active: boolean = true;
    activeElement: HTMLElement = null;
    activeX: number = 0;
    activeY: number = 0;
    coordinates: string = null;
    startingHeight: number = 0;
    startingWidth: number = 0;
    startingX: number = 0;
    startingY: number = 0;
    threshold: number = 5;
    #elementDrag: Function = function (e: MouseEvent) {
        const resizeOnDrag: ResizeOnDrag = dom.ketchup.resizeOnDrag;
        const paths: EventTarget[] = e.composedPath();
        if (!resizeOnDrag.activeElement) {
            for (let index = 0; index < paths.length; index++) {
                if ((paths[index] as HTMLElement).tagName === 'BODY') {
                    return;
                }
                if (
                    (paths[index] as HTMLElement).nodeName !==
                        '#document-fragment' &&
                    (paths[index] as HTMLElement).classList.contains(
                        'kup-resizable-element'
                    )
                ) {
                    resizeOnDrag.activeElement = paths[index] as HTMLElement;
                    break;
                }
            }
        }
        console.log('here');
        if (resizeOnDrag.active) {
            let height = resizeOnDrag.activeElement.offsetHeight;
            let width = resizeOnDrag.activeElement.offsetWidth;
            let x: number = resizeOnDrag.startingWidth;
            let y: number = resizeOnDrag.startingHeight;
            //Y coordinates
            switch (resizeOnDrag.coordinates) {
                case 'n-resize':
                case 'ne-resize':
                case 'nw-resize': {
                    y += resizeOnDrag.activeY - e.clientY;
                    if (y < 100) {
                        y = 100;
                    }
                    resizeOnDrag.activeElement.style.height = y + 'px';
                    if (height !== resizeOnDrag.activeElement.offsetHeight) {
                        resizeOnDrag.activeElement.style.top =
                            resizeOnDrag.activeElement.offsetTop -
                            (resizeOnDrag.startingY - e.clientY) +
                            'px';
                        resizeOnDrag.startingY = e.clientY;
                    }
                    break;
                }
                case 's-resize':
                case 'se-resize':
                case 'sw-resize': {
                    y -= resizeOnDrag.activeY - e.clientY;
                    if (y < 100) {
                        y = 100;
                    }
                    resizeOnDrag.activeElement.style.height = y + 'px';
                    break;
                }
            }
            //X coordinates
            switch (resizeOnDrag.coordinates) {
                case 'e-resize':
                case 'ne-resize':
                case 'se-resize': {
                    x -= resizeOnDrag.activeX - e.clientX;
                    if (x < 100) {
                        x = 100;
                    }
                    resizeOnDrag.activeElement.style.width = x + 'px';
                    break;
                }
                case 'w-resize':
                case 'nw-resize':
                case 'sw-resize': {
                    x += resizeOnDrag.activeX - e.clientX;
                    if (x < 100) {
                        x = 100;
                    }
                    resizeOnDrag.activeElement.style.width = x + 'px';
                    if (width !== resizeOnDrag.activeElement.offsetWidth) {
                        resizeOnDrag.activeElement.style.left =
                            resizeOnDrag.activeElement.offsetLeft -
                            (resizeOnDrag.startingX - e.clientX) +
                            'px';
                        resizeOnDrag.startingX = e.clientX;
                    }
                    break;
                }
            }
        } else {
            resizeOnDrag.setCoords(
                resizeOnDrag.activeElement,
                e.clientX,
                e.clientY
            );
        }
    };
    #mouseDown: (e: MouseEvent, el: HTMLElement) => void = function (
        e: MouseEvent
    ) {
        e.preventDefault();
        const resizeOnDrag: ResizeOnDrag = dom.ketchup.resizeOnDrag;
        if (resizeOnDrag.activeElement && resizeOnDrag.coordinates) {
            resizeOnDrag.active = true;
            resizeOnDrag.startingHeight =
                resizeOnDrag.activeElement.offsetHeight;
            resizeOnDrag.startingWidth = resizeOnDrag.activeElement.offsetWidth;
            resizeOnDrag.startingX = resizeOnDrag.activeElement.offsetLeft;
            resizeOnDrag.startingY = resizeOnDrag.activeElement.offsetTop;
            resizeOnDrag.activeX = e.clientX;
            resizeOnDrag.activeY = e.clientY;
        }
    };
    #mouseUp: (this: Document, e: Event) => any = function () {
        const resizeOnDrag: ResizeOnDrag = dom.ketchup.resizeOnDrag;
        resizeOnDrag.active = false;
        resizeOnDrag.activeElement = null;
    };
    /**
     * Checks whether the mouse overs on the edges of the element or not.
     * @param {HTMLElement} el - Resizable element.
     * @param {number} x - X coordinate.
     * @param {number} y - Y coordinate.
     */
    setCoords(el: HTMLElement, x: number, y: number): void {
        this.coordinates = '';
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
    /**
     * Watches the element eligible to move when dragging.
     * @param {HTMLElement} el - Resizable element.
     * @param {HTMLElement} handleEl - Element that must be dragged in order to trigger the movement. When not provided, dragging anywhere on "el" will trigger the movement.
     */
    register(el: HTMLElement): void {
        el.classList.add('kup-resizable-element');
        el.addEventListener('mousedown', (e: MouseEvent) =>
            this.#mouseDown(e, el)
        );
        document.addEventListener('mousemove', (e: MouseEvent) =>
            this.#elementDrag(e)
        );
        document.addEventListener('mouseup', this.#mouseUp);
        this.managedElements.add(el);
    }
    /**
     * Removes the elements from the ResizeOnDrag class watchlist.
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
