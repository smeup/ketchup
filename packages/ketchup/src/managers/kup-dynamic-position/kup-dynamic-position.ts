import type { KupDom } from '../kup-manager/kup-manager-declarations';
import {
    kupDynamicPositionActiveClass,
    KupDynamicPositionAnchor,
    kupDynamicPositionAnchorAttribute,
    kupDynamicPositionAttribute,
    KupDynamicPositionElement,
} from './kup-dynamic-position-declarations';
import { KupDynamicPositionPlacement } from './kup-dynamic-position-declarations';

const dom: KupDom = document.documentElement as KupDom;

/**
 * This class is used to dynamically reposition HTML elements.
 * @module KupDynamicPosition
 */
export class KupDynamicPosition {
    container: HTMLElement;
    managedElements: Set<KupDynamicPositionElement>;
    /**
     * Initializes KupDynamicPosition.
     */
    constructor() {
        this.container = document.createElement('div');
        this.container.setAttribute('kup-dynamic-position', '');
        document.body.appendChild(this.container);
        this.managedElements = new Set();
    }
    /**
     * Function used to check whether the anchor point is an HTMLElement or a set of coordinates.
     * @param {KupDynamicPositionAnchor} anchor - Anchor point.
     * @returns {anchor is HTMLElement} Returns true when the anchor point is an HTMLElement.
     */
    anchorIsHTMLElement(
        anchor: KupDynamicPositionAnchor
    ): anchor is HTMLElement {
        return (anchor as HTMLElement).tagName !== undefined;
    }
    /**
     * Watches the element eligible to dynamic positioning.
     * @param {KupDynamicPositionElement} el - Element to reposition.
     * @param {KupDynamicPositionAnchor} anchorEl - "el" position will be anchored to this element or to these coordinates.
     * @param {number} margin - "el" distance from its parent in pixels.
     * @param {KupDynamicPositionPlacement} placement - "el" placement.
     * @param {boolean} detach - When true, the function won't be recursive but it will be executed only once. "el" will be detached from its original parent and it will be appended to this.container.
     */
    register(
        el: KupDynamicPositionElement,
        anchorEl: KupDynamicPositionAnchor,
        margin?: number,
        placement?: KupDynamicPositionPlacement,
        detach?: boolean
    ): void {
        if (this.isRegistered(el)) {
            this.changeAnchor(el, anchorEl);
            return;
        }
        el.setAttribute(kupDynamicPositionAttribute, '');
        if (this.anchorIsHTMLElement(anchorEl)) {
            anchorEl.setAttribute(kupDynamicPositionAnchorAttribute, '');
        }
        el.style.zIndex = `calc(var(--kup-navbar-zindex) + 1)`;
        const originalPath: HTMLElement[] = [];
        if (detach) {
            let currentEl: unknown = el;
            while (currentEl && currentEl !== document.body) {
                currentEl = (currentEl as HTMLElement).parentNode
                    ? (currentEl as HTMLElement).parentNode
                    : (currentEl as ShadowRoot).host;
                originalPath.push(currentEl as HTMLElement);
            }
            el.style.position = 'absolute';
            this.container.appendChild(el);
        } else {
            el.style.position = 'fixed';
        }
        el.kupDynamicPosition = {
            anchor: anchorEl,
            detach: detach ? true : false,
            originalPath: originalPath,
            margin: margin ? margin : 0,
            placement: placement ? placement : KupDynamicPositionPlacement.AUTO,
            rAF: null,
        };
        const mutObserver: MutationObserver = new MutationObserver(function (
            mutations
        ) {
            const target: Node = mutations[0].target;
            if (
                (target as HTMLElement).classList.contains(
                    kupDynamicPositionActiveClass
                )
            ) {
                requestAnimationFrame(function () {
                    dom.ketchup.dynamicPosition.run(el);
                });
            }
        });
        mutObserver.observe(el, {
            attributes: true,
            attributeFilter: ['class'],
        });
        this.managedElements.add(el);
    }
    /**
     * Changes the anchor point of the given element.
     * @param {KupDynamicPositionElement} elements - Dynamically positioned element previously registered.
     * @param {KupDynamicPositionAnchor} anchorEl - New anchor point.
     */
    changeAnchor(
        el: KupDynamicPositionElement,
        anchorEl: KupDynamicPositionAnchor
    ): void {
        el.kupDynamicPosition.anchor = anchorEl;
    }
    /**
     * Removes the element from dynamic position management.
     * @param {KupDynamicPositionElement[]} elements - Elements to remove from the managed elements set.
     */
    unregister(elements: KupDynamicPositionElement[]): void {
        if (this.managedElements) {
            for (let index = 0; index < elements.length; index++) {
                this.managedElements.delete(elements[index]);
            }
        }
    }
    /**
     * Returns whether an element was previously registered or not.
     * @param {KupDynamicPositionElement} el - Element to test.
     * @returns {boolean} True if the element was registered.
     */
    isRegistered(el: KupDynamicPositionElement): boolean {
        return !this.managedElements ? false : this.managedElements.has(el);
    }
    /**
     * Starts the process of dynamically reposition the element (which must be firstly initialized through this.setup()).
     * @param {KupDynamicPositionElement} el - Element to reposition.
     */
    start(el: KupDynamicPositionElement): void {
        el.classList.add(kupDynamicPositionActiveClass);
    }
    /**
     * Ends the process of dynamically reposition the element.
     * @param {KupDynamicPositionElement} el - Element to reposition.
     */
    stop(el: KupDynamicPositionElement): void {
        el.classList.remove(kupDynamicPositionActiveClass);
    }
    /**
     * This function calculates where to place the element in order to correctly display it attached to its anchor point.
     * @param {KupDynamicPositionElement} el - Element to reposition.
     */
    run(el: KupDynamicPositionElement): void {
        if (!el.isConnected) {
            dom.ketchup.dynamicPosition.managedElements.delete(el);
            cancelAnimationFrame(el.kupDynamicPosition.rAF);
            return;
        }
        if (!el.classList.contains(kupDynamicPositionActiveClass)) {
            cancelAnimationFrame(el.kupDynamicPosition.rAF);
            return;
        }
        // Reset placement
        el.style.top = '';
        el.style.right = '';
        el.style.bottom = '';
        el.style.left = '';
        // Fixed position (usually from mouse events).
        // When anchor doesn't have the tagName property, anchor is considered as a set of coordinates.
        if (!this.anchorIsHTMLElement(el.kupDynamicPosition.anchor)) {
            const x: number = el.kupDynamicPosition.anchor.x;
            const y: number = el.kupDynamicPosition.anchor.y;
            if (
                el.offsetWidth >
                window.innerWidth - el.kupDynamicPosition.anchor.x
            ) {
                el.style.left = x - el.offsetWidth + 'px';
            } else {
                el.style.left = x + 'px';
            }
            if (
                el.offsetHeight >
                window.innerHeight - el.kupDynamicPosition.anchor.y
            ) {
                el.style.top = y - el.offsetHeight + 'px';
            } else {
                el.style.top = y + 'px';
            }
            return;
        }
        const detached: boolean = !!el.kupDynamicPosition.detach;
        const offsetH: number = el.clientHeight;
        const offsetW: number = el.clientWidth;
        const rect: DOMRect = (
            el.kupDynamicPosition.anchor as HTMLElement
        ).getBoundingClientRect();
        const top: number = detached ? window.pageYOffset + rect.top : rect.top,
            left: number = detached
                ? window.pageXOffset + rect.left
                : rect.left,
            bottom: number = detached
                ? window.pageYOffset + rect.bottom
                : rect.bottom,
            right: number = detached
                ? window.pageXOffset + rect.right
                : rect.right;
        // Vertical position
        if (
            el.kupDynamicPosition.placement ===
                KupDynamicPositionPlacement.TOP ||
            el.kupDynamicPosition.placement ===
                KupDynamicPositionPlacement.TOP_LEFT ||
            el.kupDynamicPosition.placement ===
                KupDynamicPositionPlacement.TOP_RIGHT
        ) {
            el.style.bottom = `${
                window.innerHeight - top + el.kupDynamicPosition.margin
            }px`;
        } else if (
            el.kupDynamicPosition.placement ===
                KupDynamicPositionPlacement.BOTTOM ||
            el.kupDynamicPosition.placement ===
                KupDynamicPositionPlacement.BOTTOM_LEFT ||
            el.kupDynamicPosition.placement ===
                KupDynamicPositionPlacement.BOTTOM_RIGHT
        ) {
            el.style.top = `${bottom + el.kupDynamicPosition.margin}px`;
        } else {
            if (
                offsetH < rect.top &&
                window.innerHeight - rect.bottom < offsetH
            ) {
                el.style.bottom = `${
                    window.innerHeight - top + el.kupDynamicPosition.margin
                }px`;
            } else {
                el.style.top = `${bottom + el.kupDynamicPosition.margin}px`;
            }
        }
        // Horizontal position
        if (
            el.kupDynamicPosition.placement ===
                KupDynamicPositionPlacement.LEFT ||
            el.kupDynamicPosition.placement ===
                KupDynamicPositionPlacement.BOTTOM_LEFT ||
            el.kupDynamicPosition.placement ===
                KupDynamicPositionPlacement.TOP_LEFT
        ) {
            el.style.left = `${left}px`;
        } else if (
            el.kupDynamicPosition.placement ===
                KupDynamicPositionPlacement.RIGHT ||
            el.kupDynamicPosition.placement ===
                KupDynamicPositionPlacement.BOTTOM_RIGHT ||
            el.kupDynamicPosition.placement ===
                KupDynamicPositionPlacement.TOP_RIGHT
        ) {
            let scrollbarWidth: number =
                window.innerWidth - document.documentElement.offsetWidth;
            if (scrollbarWidth > 30) {
                scrollbarWidth = 0;
            }
            el.style.right = `${window.innerWidth - scrollbarWidth - right}px`;
        } else {
            if (
                offsetW < rect.right &&
                window.innerWidth - rect.left < offsetW
            ) {
                let scrollbarWidth: number =
                    window.innerWidth - document.documentElement.offsetWidth;
                if (scrollbarWidth > 30) {
                    scrollbarWidth = 0;
                }
                el.style.right = `${
                    window.innerWidth - scrollbarWidth - right
                }px`;
            } else {
                el.style.left = `${left}px`;
            }
        }
        // Recursive
        if (!el.kupDynamicPosition.detach) {
            el.kupDynamicPosition.rAF = requestAnimationFrame(function () {
                dom.ketchup.dynamicPosition.run(el);
            });
        } else {
            cancelAnimationFrame(el.kupDynamicPosition.rAF);
            return;
        }
    }
}
