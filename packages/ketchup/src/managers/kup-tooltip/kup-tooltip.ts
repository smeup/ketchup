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
 * Handles application-wide tooltip using card component.
 * @module KupTooltip
 */
export class KupTooltip {
    element: HTMLKupCardElement;
    #clickCb: KupManagerClickCb = null;
    /**
     * Initializes KupTooltip.
     */
    constructor() {}
    #dynPos(anchorEl: KupDynamicPositionAnchor) {
        if (dom.ketchup.dynamicPosition.isRegistered(this.element)) {
            dom.ketchup.dynamicPosition.changeAnchor(this.element, anchorEl);
        } else {
            dom.ketchup.dynamicPosition.register(
                this.element as KupDynamicPositionElement,
                anchorEl,
                null,
                null,
                true
            );
        }
        dom.ketchup.dynamicPosition.start(this.element);
    }
    #create(options?: Partial<HTMLKupCardElement>) {
        this.element = document.createElement('kup-card');
        this.element.isMenu = true;
        this.element.layoutNumber = 15;
        this.element.sizeX = 'auto';
        this.element.sizeY = 'auto';
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
    hide() {
        if (this.element) {
            this.element.menuVisible = false;
            dom.ketchup.dynamicPosition.stop(this.element);
            dom.ketchup.removeClickCallback(this.#clickCb);
        }
    }
    show(
        anchorEl?: KupDynamicPositionAnchor,
        options?: Partial<HTMLKupCardElement>
    ) {
        // Creates the card or updates it with new options
        if (!this.element) {
            this.#create(options);
        } else if (options) {
            this.#setOptions(options);
        }
        // If an anchor was provided, initializes or updates dynamic positioning
        if (anchorEl) {
            this.#dynPos(anchorEl);
        }
        // If the tooltip is already visible, it's pointless to go on
        if (this.element.menuVisible) {
            return;
        }
        // If the dynamic positioning is still to be registered, a warning is thrown
        if (!dom.ketchup.dynamicPosition.isRegistered(this.element)) {
            dom.ketchup.debug.logMessage(
                'kup-tooltip',
                'Unable to display KupTooltip without specifying a valid anchor point.',
                KupDebugCategory.WARNING
            );
            return;
        }
        this.element.menuVisible = true;
        dom.ketchup.addClickCallback(this.#clickCb, true);
    }
}
