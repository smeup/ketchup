import type { KulDom } from '../kul-manager/kul-manager-declarations';
import {
    kulDynamicPositionActiveClass,
    KulDynamicPositionAnchor,
    kulDynamicPositionAnchorAttribute,
    kulDynamicPositionAttribute,
    KulDynamicPositionElement,
} from './kul-dynamic-position-declarations';
import { KulDynamicPositionPlacement } from './kul-dynamic-position-declarations';

const dom: KulDom = document.documentElement as KulDom;

/**
 * This class is used to dynamically reposition HTML elements.
 * @module KulDynamicPosition
 */
export class KulDynamicPosition {
    container: HTMLElement;
    managedElements: Set<KulDynamicPositionElement>;
    /**
     * Initializes KulDynamicPosition.
     */
    constructor() {
        this.container = document.createElement('div');
        this.container.setAttribute('kul-dynamic-position', '');
        document.body.appendChild(this.container);
        this.managedElements = new Set();
    }
    /**
     * Function used to check whether the anchor point is an HTMLElement or a set of coordinates.
     * @param {KulDynamicPositionAnchor} anchor - Anchor point.
     * @returns {anchor is HTMLElement} Returns true when the anchor point is an HTMLElement.
     */
    anchorIsHTMLElement(
        anchor: KulDynamicPositionAnchor
    ): anchor is HTMLElement {
        return (anchor as HTMLElement).tagName !== undefined;
    }
    /**
     * Watches the element eligible to dynamic positioning.
     * @param {KulDynamicPositionElement} el - Element to reposition.
     * @param {KulDynamicPositionAnchor} anchorEl - "el" position will be anchored to this element or to these coordinates.
     * @param {number} margin - "el" distance from its parent in pixels.
     * @param {KulDynamicPositionPlacement} placement - "el" placement.
     * @param {boolean} detach - When true, the function won't be recursive but it will be executed only once. "el" will be detached from its original parent and it will be appended to this.container.
     */
    register(
        el: KulDynamicPositionElement,
        anchorEl: KulDynamicPositionAnchor,
        margin?: number,
        placement?: KulDynamicPositionPlacement,
        detach?: boolean
    ): void {
        if (this.isRegistered(el)) {
            this.changeAnchor(el, anchorEl);
            return;
        }
        el.setAttribute(kulDynamicPositionAttribute, '');
        if (this.anchorIsHTMLElement(anchorEl)) {
            anchorEl.setAttribute(kulDynamicPositionAnchorAttribute, '');
        }
        el.style.zIndex = `calc(var(--kul-navbar-zindex) + 1)`;
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
        el.kulDynamicPosition = {
            anchor: anchorEl,
            detach: detach ? true : false,
            originalPath: originalPath,
            margin: margin ? margin : 0,
            placement: placement ? placement : KulDynamicPositionPlacement.AUTO,
            rAF: null,
        };
        const mutObserver: MutationObserver = new MutationObserver(function (
            mutations
        ) {
            const target: Node = mutations[0].target;
            if (
                (target as HTMLElement).classList.contains(
                    kulDynamicPositionActiveClass
                )
            ) {
                requestAnimationFrame(function () {
                    dom.ketchupLite.dynamicPosition.run(el);
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
     * @param {KulDynamicPositionElement} elements - Dynamically positioned element previously registered.
     * @param {KulDynamicPositionAnchor} anchorEl - New anchor point.
     */
    changeAnchor(
        el: KulDynamicPositionElement,
        anchorEl: KulDynamicPositionAnchor
    ): void {
        el.kulDynamicPosition.anchor = anchorEl;
    }
    /**
     * Removes the element from dynamic position management.
     * @param {KulDynamicPositionElement[]} elements - Elements to remove from the managed elements set.
     */
    unregister(elements: KulDynamicPositionElement[]): void {
        if (this.managedElements) {
            for (let index = 0; index < elements.length; index++) {
                this.managedElements.delete(elements[index]);
            }
        }
    }
    /**
     * Returns whether an element was previously registered or not.
     * @param {KulDynamicPositionElement} el - Element to test.
     * @returns {boolean} True if the element was registered.
     */
    isRegistered(el: KulDynamicPositionElement): boolean {
        return !this.managedElements ? false : this.managedElements.has(el);
    }
    /**
     * Starts the process of dynamically reposition the element (which must be firstly initialized through this.setup()).
     * @param {KulDynamicPositionElement} el - Element to reposition.
     */
    start(el: KulDynamicPositionElement): void {
        el.classList.add(kulDynamicPositionActiveClass);
    }
    /**
     * Ends the process of dynamically reposition the element.
     * @param {KulDynamicPositionElement} el - Element to reposition.
     */
    stop(el: KulDynamicPositionElement): void {
        el.classList.remove(kulDynamicPositionActiveClass);
    }
    /**
     * This function calculates where to place the element in order to correctly display it attached to its anchor point.
     * @param {KulDynamicPositionElement} el - Element to reposition.
     */
    run(el: KulDynamicPositionElement): void {
        if (!el.isConnected) {
            dom.ketchupLite.dynamicPosition.managedElements.delete(el);
            cancelAnimationFrame(el.kulDynamicPosition.rAF);
            return;
        }
        if (!el.classList.contains(kulDynamicPositionActiveClass)) {
            cancelAnimationFrame(el.kulDynamicPosition.rAF);
            return;
        }
        // Reset placement
        el.style.top = '';
        el.style.right = '';
        el.style.bottom = '';
        el.style.left = '';
        // Fixed position (usually from mouse events).
        // When anchor doesn't have the tagName property, anchor is considered as a set of coordinates.
        if (!this.anchorIsHTMLElement(el.kulDynamicPosition.anchor)) {
            const x: number = el.kulDynamicPosition.anchor.x;
            const y: number = el.kulDynamicPosition.anchor.y;
            if (
                el.offsetWidth >
                window.innerWidth - el.kulDynamicPosition.anchor.x
            ) {
                el.style.left = x - el.offsetWidth + 'px';
            } else {
                el.style.left = x + 'px';
            }
            if (
                el.offsetHeight >
                window.innerHeight - el.kulDynamicPosition.anchor.y
            ) {
                el.style.top = y - el.offsetHeight + 'px';
            } else {
                el.style.top = y + 'px';
            }
            return;
        }
        const detached: boolean = !!el.kulDynamicPosition.detach;
        const offsetH: number = el.clientHeight;
        const offsetW: number = el.clientWidth;
        const rect: DOMRect = (
            el.kulDynamicPosition.anchor as HTMLElement
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
            el.kulDynamicPosition.placement ===
                KulDynamicPositionPlacement.TOP ||
            el.kulDynamicPosition.placement ===
                KulDynamicPositionPlacement.TOP_LEFT ||
            el.kulDynamicPosition.placement ===
                KulDynamicPositionPlacement.TOP_RIGHT
        ) {
            el.style.bottom = `${
                window.innerHeight - top + el.kulDynamicPosition.margin
            }px`;
        } else if (
            el.kulDynamicPosition.placement ===
                KulDynamicPositionPlacement.BOTTOM ||
            el.kulDynamicPosition.placement ===
                KulDynamicPositionPlacement.BOTTOM_LEFT ||
            el.kulDynamicPosition.placement ===
                KulDynamicPositionPlacement.BOTTOM_RIGHT
        ) {
            el.style.top = `${bottom + el.kulDynamicPosition.margin}px`;
        } else {
            if (
                offsetH < rect.top &&
                window.innerHeight - rect.bottom < offsetH
            ) {
                el.style.bottom = `${
                    window.innerHeight - top + el.kulDynamicPosition.margin
                }px`;
            } else {
                el.style.top = `${bottom + el.kulDynamicPosition.margin}px`;
            }
        }
        // Horizontal position
        if (
            el.kulDynamicPosition.placement ===
                KulDynamicPositionPlacement.LEFT ||
            el.kulDynamicPosition.placement ===
                KulDynamicPositionPlacement.BOTTOM_LEFT ||
            el.kulDynamicPosition.placement ===
                KulDynamicPositionPlacement.TOP_LEFT
        ) {
            el.style.left = `${left}px`;
        } else if (
            el.kulDynamicPosition.placement ===
                KulDynamicPositionPlacement.RIGHT ||
            el.kulDynamicPosition.placement ===
                KulDynamicPositionPlacement.BOTTOM_RIGHT ||
            el.kulDynamicPosition.placement ===
                KulDynamicPositionPlacement.TOP_RIGHT
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
        if (!el.kulDynamicPosition.detach) {
            el.kulDynamicPosition.rAF = requestAnimationFrame(function () {
                dom.ketchupLite.dynamicPosition.run(el);
            });
        } else {
            cancelAnimationFrame(el.kulDynamicPosition.rAF);
            return;
        }
    }
}
