import type { KupDom } from '../kup-manager/kup-manager-declarations';
import { KupToolbarModifierKeys } from './kup-toolbar-declarations';

const dom: KupDom = document.documentElement as KupDom;

/**
 * Handles component's toolbar.
 * @module KupToolbar
 */
export class KupToolbar {
    active: boolean = false;
    modifiers: KupToolbarModifierKeys[] = [
        KupToolbarModifierKeys.ALT,
        KupToolbarModifierKeys.CTRL,
    ];
    managedElements: Set<HTMLElement> = null;
    #keyEvent: (this: Document, ev: KeyboardEvent) => any = function (
        e: KeyboardEvent
    ) {
        const toolbar: KupToolbar = dom.ketchup.toolbar;
        if (toolbar.managedElements) {
            for (let index = 0; index < toolbar.modifiers.length; index++) {
                if (!e[toolbar.modifiers[index]]) {
                    if (toolbar.active) {
                        toolbar.hide();
                    }
                    return;
                }
            }
            toolbar.show();
        }
    };
    #initialized: boolean = false;
    /**
     * Initializes the class' elements.
     */
    initialize(): void {
        document.addEventListener('keydown', this.#keyEvent);
        document.addEventListener('keyup', this.#keyEvent);
        this.#initialized = true;
        this.managedElements = new Set();
    }
    /**
     * Shows components' toolbar.
     */
    show(): void {
        this.managedElements.forEach(function (comp) {
            if (comp.isConnected) {
                comp.setAttribute('kup-toolbar', '');
            }
        });
        this.active = true;
    }
    /**
     * Hides components' toolbar.
     */
    hide(): void {
        this.managedElements.forEach(function (comp) {
            if (comp.isConnected) {
                comp.removeAttribute('kup-toolbar');
            }
        });
        this.active = false;
    }
    /**
     * Watches the element eligible to move when dragging.
     * @param {HTMLElement} el - Toolbar-supporting element.
     * @param {HTMLElement} handleEl - Element that must be dragged in order to trigger the movement. When not provided, dragging anywhere on "el" will trigger the movement.
     */
    register(el: HTMLElement): void {
        if (!this.#initialized) {
            this.initialize();
        }
        this.managedElements.add(el);
    }
    /**
     * Removes the elements from the KupToolbar class watchlist.
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
