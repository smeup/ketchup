import type {
    KupDom,
    KupManagerClickCb,
} from '../kup-manager/kup-manager-declarations';
import {
    KupDynamicPositionAnchor,
    KupDynamicPositionElement,
} from '../kup-dynamic-position/kup-dynamic-position-declarations';
import { KupDebugCategory } from '../kup-debug/kup-debug-declarations';

const dom: KupDom = document.documentElement as KupDom;

/**
 * Handles application-wide toolbar using card component.
 * @module KupToolbar
 */
export class KupToolbar {
    currentAnchor: KupDynamicPositionAnchor = null;
    element: HTMLKupCardElement = null;
    managedElements: Set<HTMLElement> = null;
    #clickCb: KupManagerClickCb = null;

    /**
     * Initializes KupToolbar.
     */
    constructor() {
        this.managedElements = new Set();
        this.#initializeEventListeners();
    }

    #initializeEventListeners() {
        document.addEventListener('click', (e) => {
            const paths = e.composedPath() as HTMLElement[];

            if (paths.includes(this.element)) {
                return;
            }

            // Close toolbar if clicking outside
            if (
                this.currentAnchor &&
                !paths.includes(this.currentAnchor as HTMLAnchorElement)
            ) {
                this.hide();
                this.currentAnchor = null;
            }
        });
    }

    #dynPos(anchor: KupDynamicPositionAnchor) {
        if (dom.ketchup.dynamicPosition.isRegistered(this.element)) {
            dom.ketchup.dynamicPosition.changeAnchor(this.element, anchor);
        } else {
            dom.ketchup.dynamicPosition.register(
                this.element as KupDynamicPositionElement,
                anchor,
                null,
                null,
                true
            );
        }
        dom.ketchup.dynamicPosition.start(this.element);
    }

    #create(options?: Partial<HTMLKupCardElement>) {
        this.element = document.createElement('kup-card');
        this.element.id = 'kup-toolbar';
        this.element.isMenu = true;
        this.element.layoutNumber = 16;
        this.element.sizeX = 'auto';
        this.element.sizeY = 'auto';
        this.element.data = this.getFakeData(); // Dati fittizi
        if (options) {
            this.#setOptions(options);
        }
        document.body.appendChild(this.element);
        this.#clickCb = {
            cb: () => {
                this.hide();
            },
            el: this.element,
        };
    }

    #setOptions(options: Partial<HTMLKupCardElement>) {
        for (const key in options) {
            if (Object.prototype.hasOwnProperty.call(options, key)) {
                const prop = options[key];
                this.element[key] = prop;
            }
        }
    }

    getFakeData(): any {
        return [
            {
                value: 'Copia link',
                id: '1',
                icon: 'add_alert',
                trailingIcon: true,
                selected: false,
            },
            {
                value: 'Stampa',
                id: '2',
                selected: false,
                icon: 'ac_unit',
                separator: true,
            },
            {
                value: 'Aiuto - F1',
                id: '3',
                icon: '3d_rotation',
                selected: false,
            },
            {
                value: 'Estendi',
                id: '4',
                icon: '3d_rotation',
                selected: false,
                children: [
                    {
                        value: 'Aiuto - F1',
                        id: '31',
                        icon: '3d_rotation',
                        selected: false,
                    },
                    {
                        value: 'Aiuto - F2',
                        id: '31',
                        icon: '3d_rotation',
                        selected: false,
                    },
                ],
            },
            {
                value: 'Esterno',
                id: '5',
                icon: '3d_rotation',
                selected: false,
            },
            {
                value: 'Cambia vista',
                id: '6',
                icon: '3d_rotation',
                selected: false,
                separator: true,
            },
            {
                value: 'Gestisci setup utente',
                id: '7',
                icon: '3d_rotation',
                selected: false,
            },
        ];
    }

    /**
     * Destroys the toolbar.
     */
    destroy() {
        if (this.element) {
            this.element.remove();
            this.element = null;
        }
    }

    /**
     * Hides the toolbar.
     */
    hide() {
        if (this.element) {
            this.element.menuVisible = false;
            dom.ketchup.dynamicPosition.stop(this.element);
            dom.ketchup.removeClickCallback(this.#clickCb);
        }
    }

    /**
     * Displays the toolbar.
     * @param {KupDynamicPositionAnchor} anchor - Anchor point of the toolbar: HTML element or x/y coordinates.
     * @param {Partial<HTMLKupCardElement>} options - Props/attributes of the toolbar.
     */
    show(
        anchor?: KupDynamicPositionAnchor,
        options?: Partial<HTMLKupCardElement>
    ) {
        // Creates the card or updates it with new options
        if (!this.element) {
            this.#create(options);
        } else if (options) {
            this.#setOptions(options);
        }

        // If an anchor was provided, initializes or updates dynamic positioning
        if (anchor) {
            this.#dynPos(anchor);
        }

        // If the toolbar is already visible, it's pointless to go on
        if (this.element.menuVisible) {
            return;
        }

        // If the dynamic positioning is still to be registered, a warning is thrown
        if (!dom.ketchup.dynamicPosition.isRegistered(this.element)) {
            dom.ketchup.debug.logMessage(
                'kup-toolbar',
                'Unable to display KupToolbar without specifying a valid anchor point.',
                KupDebugCategory.WARNING
            );
            return;
        }

        this.element.menuVisible = true;
        // Adding the click callback for toolbar
        dom.ketchup.addClickCallback(this.#clickCb, true);
    }

    /**
     * Registers an HTMLElement as a toolbar anchor.
     * @param {HTMLElement} element - The HTML element to be registered.
     */
    register(element: HTMLElement): void {
        this.managedElements.add(element);
    }

    /**
     * Unregisters an HTMLElement, preventing it from being used as an anchor.
     *
     * @param {HTMLElement} element - The HTML element to be unregistered.
     */
    unregister(element: HTMLElement): void {
        if (this.managedElements) {
            this.managedElements.delete(element);
        }
    }
}
