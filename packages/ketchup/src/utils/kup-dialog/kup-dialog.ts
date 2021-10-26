import type { ResizeEvent } from '@interactjs/actions/resize/plugin';
import type { InteractEvent } from '@interactjs/core/InteractEvent';
import type { Interaction } from '@interactjs/core/Interaction';
import type { ActionMap } from '@interactjs/core/scope';
import type { Point, RectResolvable } from '@interactjs/types/index';
import type { KupDom } from '../kup-manager/kup-manager-declarations';
import interact from 'interactjs';
import {
    kupDialogAttribute,
    kupDialogResizableClass,
} from './kup-dialog-declarations';

const dom: KupDom = document.documentElement as KupDom;

/**
 * This class handles elements as dialogs, making them resizable and movable.
 * @module KupDialog
 */
export class KupDialog {
    managedElements: Set<HTMLElement>;
    restrictContainer: RectResolvable<
        [number, number, Interaction<keyof ActionMap>]
    >;
    zIndex: number;
    /**
     * Initializes KupDialog.
     * @param {number} zIndex - The starting z-index assigned to dialogs.
     * @param {RectResolvable<[number, number, Interaction<keyof ActionMap>]>} restrictContainer - The container setting the restriction's boundary.
     */
    constructor(
        zIndex?: number,
        restrictContainer?: RectResolvable<
            [number, number, Interaction<keyof ActionMap>]
        >
    ) {
        this.managedElements = new Set();
        this.zIndex = zIndex ? zIndex : 200;
        this.restrictContainer = restrictContainer ? restrictContainer : null;
    }
    /**
     * Watches the element handled as dialog.
     * @param {HTMLElement} el - Dialog element.
     * @param {HTMLElement} handleEl - Element that must be dragged in order to trigger movement. When not provided, dragging anywhere on "el" will move it.
     * @param {boolean} unresizable - When true, the dialog can't be resized.
     * @param {RectResolvable<[number, number, Interaction<keyof ActionMap>]>} restrictContainer - When present, it will set the constraint of "el": it can't be moved outside this container.
     */
    register(
        el: HTMLElement,
        handleEl?: HTMLElement,
        unresizable?: boolean,
        restrictContainer?: RectResolvable<
            [number, number, Interaction<keyof ActionMap>]
        >
    ): void {
        const isInViewport = (
            el: HTMLElement,
            oldTransform: string,
            delta: Point
        ) => {
            const style = window.getComputedStyle(el);
            const isFixed = !!(style.position === 'fixed');
            const rect = el.getBoundingClientRect();
            if (
                rect.left < 0 ||
                rect.top < 0 ||
                (isFixed && rect.right > window.innerWidth && delta.x >= 0) ||
                (isFixed && rect.bottom > window.innerHeight && delta.y >= 0)
            ) {
                el.style.transform = oldTransform;
                return false;
            }
            return true;
        };
        el.setAttribute(kupDialogAttribute, '');
        el.style.zIndex = (this.zIndex++).toString();
        interact(el)
            .draggable({
                allowFrom: handleEl ? handleEl : null,
                listeners: {
                    move(e: InteractEvent) {
                        const el = e.target as HTMLElement;
                        const oldTransform = e.target.style.transform;
                        let x = parseFloat(el.getAttribute('data-x')) || 0;
                        let y = parseFloat(el.getAttribute('data-y')) || 0;
                        x = x + e.dx;
                        y = y + e.dy;
                        el.style.transform = `translate(${x}px, ${y}px)`;
                        if (isInViewport(el, oldTransform, e.delta)) {
                            el.setAttribute('data-x', x.toString());
                            el.setAttribute('data-y', y.toString());
                        }
                    },
                },
                modifiers: [
                    interact.modifiers.restrictRect({
                        restriction: restrictContainer
                            ? restrictContainer
                            : dom.ketchup.dialog.restrictContainer,
                        endOnly: true,
                    }),
                ],
            })
            .on('pointerdown', function (e: PointerEvent) {
                const el = e.currentTarget as HTMLElement;
                el.style.zIndex = (dom.ketchup.dialog.zIndex++).toString();
            });
        if (!unresizable) {
            el.classList.add(kupDialogResizableClass);
            interact(el).resizable({
                edges: { left: true, right: true, bottom: true, top: true },
                listeners: {
                    move(e: ResizeEvent) {
                        const el = e.target as HTMLElement;
                        const oldTransform = e.target.style.transform;
                        let x = parseFloat(el.getAttribute('data-x')) || 0;
                        let y = parseFloat(el.getAttribute('data-y')) || 0;
                        el.style.width = e.rect.width + 'px';
                        el.style.height = e.rect.height + 'px';
                        x += e.deltaRect.left;
                        y += e.deltaRect.top;
                        el.style.transform =
                            'translate(' + x + 'px,' + y + 'px)';
                        if (isInViewport(el, oldTransform, e.delta)) {
                            el.setAttribute('data-x', x.toString());
                            el.setAttribute('data-y', y.toString());
                        }
                    },
                },
                margin: 5,
                modifiers: [
                    interact.modifiers.restrictSize({
                        min: { width: 100, height: 100 },
                    }),
                ],
            });
        }
        this.managedElements.add(el);
    }
    /**
     * Removes the elements from the MoveOnDrag class watchlist.
     * @param {HTMLElement[]} elements - Elements to remove.
     */
    unregister(elements: HTMLElement[]): void {
        if (this.managedElements) {
            for (let index = 0; index < elements.length; index++) {
                this.managedElements.delete(elements[index]);
                interact(elements[index]).unset();
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
