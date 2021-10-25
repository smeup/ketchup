import type { ResizeEvent } from '@interactjs/actions/resize/plugin';
import type { InteractEvent } from '@interactjs/core/InteractEvent';
import type { Interaction } from '@interactjs/core/Interaction';
import type { ActionMap } from '@interactjs/core/scope';
import type { RectResolvable } from '@interactjs/types/index';
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
     */
    constructor(
        zIndex?: number,
        restrictContainer?: RectResolvable<
            [number, number, Interaction<keyof ActionMap>]
        >
    ) {
        this.managedElements = new Set();
        this.zIndex = zIndex ? zIndex : 200;
        this.restrictContainer = restrictContainer ? restrictContainer : 'body';
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
        el.setAttribute(kupDialogAttribute, '');
        el.style.zIndex = (this.zIndex++).toString();
        interact(el)
            .draggable({
                allowFrom: handleEl ? handleEl : null,
                inertia: true,
                listeners: {
                    move(e: InteractEvent) {
                        const el = e.target as HTMLElement;
                        let x = parseFloat(el.getAttribute('data-x')) || 0;
                        let y = parseFloat(el.getAttribute('data-y')) || 0;
                        x = x + e.dx;
                        y = y + e.dy;
                        e.target.style.transform = `translate(${x}px, ${y}px)`;
                        el.setAttribute('data-x', x.toString());
                        el.setAttribute('data-y', y.toString());
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
                inertia: true,
                listeners: {
                    move(e: ResizeEvent) {
                        const el = e.target;
                        let x = parseFloat(el.getAttribute('data-x')) || 0;
                        let y = parseFloat(el.getAttribute('data-y')) || 0;
                        el.style.width = e.rect.width + 'px';
                        el.style.height = e.rect.height + 'px';
                        x += e.deltaRect.left;
                        y += e.deltaRect.top;
                        el.style.transform =
                            'translate(' + x + 'px,' + y + 'px)';
                        el.setAttribute('data-x', x.toString());
                        el.setAttribute('data-y', y.toString());
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
