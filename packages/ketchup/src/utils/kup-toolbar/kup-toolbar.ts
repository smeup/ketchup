import { CardData, CardFamily } from '../../components/kup-card/kup-card-declarations';
import type { KupDom } from '../kup-manager/kup-manager-declarations';
import { KupToolbarElement, KupToolbarModifierKeys } from './kup-toolbar-declarations';

const dom: KupDom = document.documentElement as KupDom;

/**
 * Handles component's toolbar.
 * @module KupToolbar
 */
export class KupToolbar {
    spikeUnified: boolean;
    active: boolean;
    modifiers: KupToolbarModifierKeys[];
    managedElements: Set<KupToolbarElement>;
    #keyEvent: (this: Document, ev: KeyboardEvent) => void;
    /**
     * Initializes KupToolbar.
     */
    constructor() {
        this.spikeUnified = true;
        this.active = false;
        this.managedElements = new Set();
        this.modifiers = [
            KupToolbarModifierKeys.ALT,
            KupToolbarModifierKeys.CTRL,
        ];
        this.#keyEvent = function (e: KeyboardEvent) {
            const toolbar: KupToolbar = dom.ketchup.toolbar;
            if (toolbar.managedElements) {
                for (let index = 0; index < toolbar.modifiers.length; index++) {
                    if (
                        toolbar.modifiers[index] ===
                            KupToolbarModifierKeys.CTRL &&
                        e.metaKey
                    ) {
                        continue;
                    } else {
                        if (!e[toolbar.modifiers[index]]) {
                            {
                                if (toolbar.active) {
                                    toolbar.hide();
                                }
                                return;
                            }
                        }
                    }
                }
                toolbar.show();
            }
        };
        document.addEventListener('keydown', this.#keyEvent);
        document.addEventListener('keyup', this.#keyEvent);
    }
    /**
     * Shows components' toolbar.
     */
    show(): void {
        this.managedElements.forEach(function (comp) {
            if (comp.isConnected) {
                comp.setAttribute('kup-toolbar', '');
                comp.kupToolbar.toolbar.setAttribute('menu-visible', '');
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
                comp.kupToolbar.toolbar.removeAttribute('menu-visible');
            }
        });
        this.active = false;
    }
    /**
     * Watches the element eligible to move when dragging.
     * @param {KupToolbarElement} el - Toolbar-supporting element.
     */
    register(el: KupToolbarElement): void {

        this.managedElements.add(el);

        if (!el.kupToolbar) {

            let kupToolbar: HTMLKupCardElement = document.createElement('kup-card');
            kupToolbar.layoutFamily = CardFamily.STANDARD;
            kupToolbar.layoutNumber = 3;
            kupToolbar.setAttribute('is-menu', '');
            if (el.shadowRoot) {
                el.shadowRoot.prepend(kupToolbar);
            } else {
                el.prepend(kupToolbar);
            }
            el.kupToolbar = {
                toolbar: kupToolbar
            };
        }

    }
    /**
     * Removes the elements from the KupToolbar class watchlist.
     * @param {KupToolbarElement[]} elements - Elements to remove.
     */
    unregister(elements: KupToolbarElement[]): void {
        if (this.managedElements) {
            for (let index = 0; index < elements.length; index++) {
                this.managedElements.delete(elements[index]);
            }
        }
    }
    /**
     * Returns whether an element was previously registered or not.
     * @param {KupToolbarElement} el - Element to test.
     * @returns {boolean} True if the element was registered.
     */
    isRegistered(el: KupToolbarElement): boolean {
        return !this.managedElements ? false : this.managedElements.has(el);
    }

    getToolbar(el: KupToolbarElement): HTMLKupCardElement {
        return el.kupToolbar.toolbar;
    }

}
