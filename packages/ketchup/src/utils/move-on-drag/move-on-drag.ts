import type { KupDom } from '../kup-manager/kup-manager-declarations';

const dom: KupDom = document.documentElement as KupDom;

/**
 * This class is used to move elements when dragged.
 * @module MoveOnDrag
 */
export class MoveOnDrag {
    managedElements: Set<HTMLElement> = null;
    #initialized: boolean = false;
    activeElement: HTMLElement = null;
    activeX: number = 0;
    activeY: number = 0;
    #elementDrag: (this: Document, e: Event) => any = function (e: MouseEvent) {
        e.preventDefault();
        const moveOnDrag: MoveOnDrag = dom.ketchup.moveOnDrag;
        if (moveOnDrag.activeElement) {
            const x: number =
                moveOnDrag.activeElement.offsetLeft -
                (moveOnDrag.activeX - e.clientX);
            const y: number =
                moveOnDrag.activeElement.offsetTop -
                (moveOnDrag.activeY - e.clientY);
            moveOnDrag.activeElement.style.left = x + 'px';
            moveOnDrag.activeElement.style.top = y + 'px';
            moveOnDrag.activeX = e.clientX;
            moveOnDrag.activeY = e.clientY;
        }
    };
    #mouseDown: Function = function (e: MouseEvent) {
        e.preventDefault();
        this.activeX = e.clientX;
        this.activeY = e.clientY;
        const paths: EventTarget[] = e.composedPath();
        for (let index = 0; index < paths.length; index++) {
            if ((paths[index] as HTMLElement).tagName === 'BODY') {
                break;
            }
            if (
                (paths[index] as HTMLElement).nodeName !==
                    '#document-fragment' &&
                (paths[index] as HTMLElement).classList.contains(
                    'kup-movable-element'
                )
            ) {
                this.activeElement = paths[index];
                this.activeElement.style.zIndex = (
                    parseInt(this.activeElement.style.zIndex) + 1
                ).toString();
                break;
            }
        }
    };
    #mouseUp: (this: Document, e: Event) => any = function (e: MouseEvent) {
        e.preventDefault();
        const moveOnDrag: MoveOnDrag = dom.ketchup.moveOnDrag;
        moveOnDrag.activeElement = null;
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
     * Watches the element eligible to move when dragging.
     * @param {HTMLElement} el - Movable element.
     * @param {HTMLElement} handleEl - Element that must be dragged in order to trigger the movement. When not provided, dragging anywhere on "el" will trigger the movement.
     */
    register(el: HTMLElement, handleEl?: HTMLElement): void {
        if (!this.#initialized) {
            this.initialize();
        }
        el.classList.add('kup-movable-element');
        el.style.zIndex = '100';
        if (!el.style.left) {
            el.style.left = '0';
        }
        if (!el.style.top) {
            el.style.top = '0';
        }
        if (handleEl) {
            handleEl.addEventListener('mousedown', (e: MouseEvent) =>
                this.#mouseDown(e)
            );
        } else {
            el.addEventListener('mousedown', (e: MouseEvent) =>
                this.#mouseDown(e)
            );
        }
        this.managedElements.add(el);
    }
    /**
     * Removes the elements from the MoveOnDrag class watchlist.
     * @param {HTMLElement[]} elements - Elements to remove.
     */
    unregister(elements: HTMLElement[]): void {
        for (let index = 0; index < elements.length; index++) {
            this.managedElements.delete(elements[index]);
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
