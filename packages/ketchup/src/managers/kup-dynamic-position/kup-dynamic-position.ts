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
        el.style.zIndex = `calc(var(--kup-navbar-zindex) + 1000)`;
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
        const self = this;
        const mutObserver: MutationObserver = new MutationObserver(function (
            mutations
        ) {
            const target: Node = mutations[0].target;
            if (
                (target as HTMLElement).classList.contains(
                    kupDynamicPositionActiveClass
                )
            ) {
                self.addRepositionListeners(el);
                // Call self.run(el) only after the element's dimensions are valid
                const ro = new ResizeObserver((entries) => {
                    for (const entry of entries) {
                        const newH = entry.contentRect.height;
                        const newW = entry.contentRect.width;
                        if (newH > 0 && newW > 0) {
                            self.run(el);
                            ro.unobserve(el);
                        }
                    }
                });
                ro.observe(el);
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
                this.removeRepositionListeners(elements[index]);
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
        this.removeRepositionListeners(el);
    }
    /**
     * This function calculates where to place the element in order to correctly display it attached to its anchor point.
     * @param {KupDynamicPositionElement} el - Element to reposition.
     */
    run(el: KupDynamicPositionElement): void {
        if (!el.isConnected) {
            dom.ketchup.dynamicPosition.managedElements.delete(el);
            return;
        }
        if (!el.classList.contains(kupDynamicPositionActiveClass)) {
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
            const y: number = el.kupDynamicPosition.anchor.y - 1;
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
            el.style.top = `${bottom - 1 + el.kupDynamicPosition.margin}px`;
        } else {
            if (
                offsetH < rect.top &&
                window.innerHeight - rect.bottom < offsetH
            ) {
                el.style.bottom = `${
                    window.innerHeight - top + el.kupDynamicPosition.margin
                }px`;
            } else {
                el.style.top = `${bottom - 1 + el.kupDynamicPosition.margin}px`;
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

        this.#setSubMenuPosition(el);
    }

    reposition(el: KupDynamicPositionElement): void {
        if (
            el.isConnected &&
            el.classList.contains(kupDynamicPositionActiveClass)
        ) {
            dom.ketchup.dynamicPosition.run(el);
        }
    }

    isScrollable(el: KupDynamicPositionElement): boolean {
        const style = getComputedStyle(el);
        const hasScrollableOverflow =
            ['auto', 'scroll'].includes(style.overflow) ||
            ['auto', 'scroll'].includes(style.overflowX) ||
            ['auto', 'scroll'].includes(style.overflowY);

        const canScrollVertically = el.scrollHeight > el.clientHeight;
        const canScrollHorizontally = el.scrollWidth > el.clientWidth;

        return (
            hasScrollableOverflow &&
            (canScrollVertically || canScrollHorizontally)
        );
    }

    updateEventListenerOnAncestors(
        container: HTMLElement,
        updateCallback: (el: HTMLElement) => void
    ) {
        while (container && container !== document.documentElement) {
            updateCallback(container);

            if (container.parentElement) {
                container = container.parentElement;
            } else if (
                container.getRootNode &&
                container.getRootNode() instanceof ShadowRoot
            ) {
                container = (container.getRootNode() as ShadowRoot)
                    .host as HTMLElement;
            } else {
                container = null;
            }
        }
    }

    addRepositionListeners(el: KupDynamicPositionElement): void {
        if ((el as any)._repositionListener) {
            return;
        }

        const repositionListener = () => this.reposition(el);

        window.addEventListener('resize', repositionListener);
        window.addEventListener('scroll', repositionListener);

        if (el?.kupDynamicPosition?.anchor) {
            let container = this.getAnchorContainer(el);

            this.updateEventListenerOnAncestors(container, (el) => {
                if (this.isScrollable(el)) {
                    el.addEventListener('scroll', repositionListener);
                }
            });
        }
        (el as any)._repositionListener = repositionListener;
    }

    removeRepositionListeners(el: KupDynamicPositionElement): void {
        const repositionListener = (el as any)._repositionListener;

        window.removeEventListener('resize', repositionListener);
        window.removeEventListener('scroll', repositionListener);

        if (el?.kupDynamicPosition?.anchor) {
            let container = this.getAnchorContainer(el);

            this.updateEventListenerOnAncestors(container, (el) => {
                if (this.isScrollable(el)) {
                    el.removeEventListener('scroll', repositionListener);
                }
            });
        }
        delete (el as any)._repositionListener;
    }

    getAnchorContainer(el: KupDynamicPositionElement): HTMLElement {
        return el.kupDynamicPosition.anchor &&
            this.anchorIsHTMLElement(el.kupDynamicPosition.anchor)
            ? (el.kupDynamicPosition.anchor as HTMLElement).parentElement
            : undefined;
    }

    #setSubMenuPosition(parentElement: HTMLElement): void {
        const SubMenuClass = {
            MAIN: 'nested-class',
            ALIGN_RIGHT: 'align-right',
            ALIGN_LEFT: 'align-left',
        } as const;

        const subMenuElementList: NodeListOf<HTMLElement> =
            parentElement?.shadowRoot?.querySelectorAll<HTMLElement>(
                `.${SubMenuClass.MAIN}`
            );
        if (!subMenuElementList?.length) {
            return;
        }

        const menuRect: DOMRect = parentElement.getBoundingClientRect();
        subMenuElementList.forEach((subMenuElement: HTMLElement) => {
            subMenuElement.classList.remove(
                SubMenuClass.ALIGN_LEFT,
                SubMenuClass.ALIGN_RIGHT
            );
            const subMenuRect: DOMRect = subMenuElement.getBoundingClientRect();

            const subMenuRightEdge = menuRect.right + subMenuRect.width;
            const isOverflowRight = subMenuRightEdge > window.innerWidth;

            const subMenuLeftEdge = menuRect.left - subMenuRect.width;
            const isOverflowLeft = subMenuLeftEdge < 0;

            if (isOverflowRight && isOverflowLeft) {
                return;
            }

            subMenuElement.classList.add(
                isOverflowRight
                    ? // Render on the left side of the menu
                      SubMenuClass.ALIGN_LEFT
                    : // Render on the right side of the menu
                      SubMenuClass.ALIGN_RIGHT
            );
        });
    }
}
