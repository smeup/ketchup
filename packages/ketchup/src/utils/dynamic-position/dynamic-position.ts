import type { KupDom } from '../kup-manager/kup-manager-declarations';
import type { DynamicallyPositionedElement } from './dynamic-position-declarations';

const dom: KupDom = document.documentElement as KupDom;

/**
 * This class is used to dynamically reposition HTML elements.
 * @module DynamicPosition
 */
export class DynamicPosition {
    managedElements: Set<DynamicallyPositionedElement> = new Set();
    /**
     * Watches the element eligible to dynamic positioning.
     * @param {DynamicallyPositionedElement} el - Element to reposition.
     * @param {HTMLElement} anchorEl - "el" position will be anchored to this element.
     * @param {number} margin - "el" distance from its parent in pixels.
     * @param {boolean} above - When true "el" will be always placed above its wrapper.
     * @param {boolean} right - When true "el" will be always placed on the right of its wrapper.
     */
    register(
        el: DynamicallyPositionedElement,
        anchorEl: HTMLElement,
        margin?: number,
        above?: boolean,
        right?: boolean
    ): void {
        el.classList.add('dynamic-position');
        el.style.position = 'fixed';
        el.style.zIndex = '1000';
        anchorEl.classList.add('dynamic-position-anchor');
        el.dynamicPosition = {
            above: above ? true : false,
            anchor: anchorEl,
            margin: margin ? margin : 0,
            rAF: null,
            right: right ? true : false,
        };

        const mutObserver: MutationObserver = new MutationObserver(function (
            mutations
        ) {
            const target: Node = mutations[0].target;
            if (
                (target as HTMLElement).classList.contains(
                    'dynamic-position-active'
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
     * Removes the element from dynamic position management.
     * @param {DynamicallyPositionedElement} elements - Elements to remove from the managed elements set.
     */
    unregister(elements: DynamicallyPositionedElement[]): void {
        for (let index = 0; index < elements.length; index++) {
            this.managedElements.delete(elements[index]);
        }
    }
    /**
     * Starts the process of dynamically reposition the element (which must be firstly initialized through this.setup()).
     * @param {DynamicallyPositionedElement} el - Element to reposition.
     */
    start(el: DynamicallyPositionedElement): void {
        el.classList.add('dynamic-position-active');
    }
    /**
     * Ends the process of dynamically reposition the element.
     * @param {DynamicallyPositionedElement} el - Element to reposition.
     */
    stop(el: DynamicallyPositionedElement): void {
        el.classList.remove('dynamic-position-active');
    }
    /**
     * This function calculates where to place the element in order to correctly display it attached to its anchor point.
     * @param {DynamicallyPositionedElement} el - Element to reposition.
     */
    run(el: DynamicallyPositionedElement): void {
        if (!el.isConnected) {
            dom.ketchup.dynamicPosition.managedElements.delete(el);
            cancelAnimationFrame(el.dynamicPosition.rAF);
            return;
        }
        if (!el.classList.contains('dynamic-position-active')) {
            cancelAnimationFrame(el.dynamicPosition.rAF);
            return;
        }
        let offsetH: number = el.clientHeight;
        let offsetW: number = el.clientWidth;
        const rect: DOMRect = el.dynamicPosition.anchor.getBoundingClientRect();
        el.style.top = '';
        el.style.right = '';
        el.style.bottom = '';
        el.style.left = '';
        if (
            window.innerHeight - rect.bottom < offsetH ||
            el.dynamicPosition.above
        ) {
            el.style.bottom = `${
                window.innerHeight - rect.top + el.dynamicPosition.margin
            }px`;
        } else {
            el.style.top = `${rect.bottom + el.dynamicPosition.margin}px`;
        }
        if (
            window.innerWidth - rect.left < offsetW ||
            el.dynamicPosition.right
        ) {
            //01-27-2021 Experimental: subtracting from window.innerWidth the scrollbar's width - if it's too large something's wrong so it will be set to 0
            let scrollbarWidth =
                window.innerWidth - document.documentElement.offsetWidth;
            if (scrollbarWidth > 30) {
                scrollbarWidth = 0;
            }
            el.style.right = `${
                window.innerWidth - scrollbarWidth - rect.right
            }px`;
        } else {
            el.style.left = `${rect.left}px`;
        }
        el.dynamicPosition.rAF = requestAnimationFrame(function () {
            dom.ketchup.dynamicPosition.run(el);
        });
    }
}
