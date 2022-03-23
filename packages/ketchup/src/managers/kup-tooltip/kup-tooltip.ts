import type {
    KupDom,
    KupManagerClickCb,
} from '../kup-manager/kup-manager-declarations';
import {
    KupDynamicPositionAnchor,
    KupDynamicPositionElement,
} from '../kup-dynamic-position/kup-dynamic-position-declarations';

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
    #setOptions(options: Partial<HTMLKupCardElement>) {
        for (const key in options) {
            if (Object.prototype.hasOwnProperty.call(options, key)) {
                const prop = options[key];
                this.element[key] = prop;
            }
        }
    }
    anchorTo(anchorEl: KupDynamicPositionAnchor) {
        if (!this.element) {
            this.create();
        }
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
    }
    create(options?: Partial<HTMLKupCardElement>) {
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
    hide() {
        if (this.element) {
            this.element.menuVisible = false;
            dom.ketchup.dynamicPosition.stop(this.element);
            dom.ketchup.removeClickCallback(this.#clickCb);
        }
    }
    show(options?: Partial<HTMLKupCardElement>) {
        if (!this.element) {
            this.create(options);
        } else {
            this.#setOptions(options);
        }
        dom.ketchup.dynamicPosition.start(this.element);
        this.element.menuVisible = true;
        dom.ketchup.addClickCallback(this.#clickCb, true);
    }
}
