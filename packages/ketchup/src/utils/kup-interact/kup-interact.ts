import type { ResizeEvent } from '@interactjs/actions/resize/plugin';
import type { InteractEvent } from '@interactjs/core/InteractEvent';
import type { Interaction } from '@interactjs/core/Interaction';
import type { ActionMap } from '@interactjs/core/scope';
import type {
    DraggableOptions,
    DropEvent,
    DropzoneOptions,
    Point,
    RectResolvable,
} from '@interactjs/types/index';
import type { KupDom } from '../kup-manager/kup-manager-declarations';
import interact from 'interactjs';
import {
    kupDialogAttribute,
    kupDialogResizableClass,
    KupDragCallbacks,
    KupDragEffect,
    KupDragEventData,
    kupDraggableAttr,
    KupDraggableElement,
    kupDragOverAttr,
    KupDropCallbacks,
    kupDropEvent,
    KupDropEventData,
    KupDropEventPayload,
} from './kup-interact-declarations';

const dom: KupDom = document.documentElement as KupDom;

/**
 * This class handles elements as dialogs, making them resizable and movable.
 * @module KupInteract
 */
export class KupInteract {
    container: HTMLElement;
    managedElements: Set<HTMLElement>;
    restrictContainer: RectResolvable<
        [number, number, Interaction<keyof ActionMap>]
    >;
    zIndex: number;
    /**
     * Initializes KupInteract.
     * @param {number} zIndex - The starting z-index assigned to dialogs.
     * @param {RectResolvable<[number, number, Interaction<keyof ActionMap>]>} restrictContainer - The container setting the restriction's boundary.
     */
    constructor(
        zIndex?: number,
        restrictContainer?: RectResolvable<
            [number, number, Interaction<keyof ActionMap>]
        >
    ) {
        interact.dynamicDrop(true);
        this.container = document.createElement('div');
        this.container.setAttribute('kup-interact', '');
        document.body.appendChild(this.container);
        this.managedElements = new Set();
        this.zIndex = zIndex ? zIndex : 200;
        this.restrictContainer = restrictContainer ? restrictContainer : null;
    }
    draggable(
        el: HTMLElement,
        options?: Partial<DraggableOptions>,
        eventData?: KupDragEventData,
        effect?: KupDragEffect,
        callbacks?: KupDragCallbacks
    ) {
        if (!options) {
            options = {};
        }
        if (!effect) {
            effect = KupDragEffect.MOVE;
        }
        options.listeners = {
            move(e: InteractEvent) {
                if (callbacks && callbacks.move) {
                    callbacks.move(e);
                }
                if (effect.toLowerCase() !== KupDragEffect.NONE) {
                    const draggable = e.target as KupDraggableElement;
                    const ghostImage = draggable.kupDragDrop
                        ? draggable.kupDragDrop.ghostImage
                        : e.target;
                    let x = parseFloat(ghostImage.getAttribute('data-x')) || 0;
                    let y = parseFloat(ghostImage.getAttribute('data-y')) || 0;
                    x = x + e.dx;
                    y = y + e.dy;
                    ghostImage.style.transform = `translate(${x}px, ${y}px)`;
                    ghostImage.setAttribute('data-x', x.toString());
                    ghostImage.setAttribute('data-y', y.toString());
                }
            },
            start(e: InteractEvent) {
                const draggable = e.target as KupDraggableElement;
                draggable.setAttribute(kupDraggableAttr, '');
                const draggableDetails = eventData.callback
                    ? eventData.callback()
                    : {};
                draggable.kupDragDrop = draggableDetails;
                let ghostImage = null;
                switch (effect) {
                    case KupDragEffect.BADGE:
                        ghostImage = document.createElement('kup-badge');
                        if (draggable.kupDragDrop.multiple) {
                            ghostImage.text = draggable.kupDragDrop.selectedRows
                                ? draggable.kupDragDrop.selectedRows.length.toString()
                                : '0';
                        } else {
                            ghostImage.text = '1';
                        }
                        ghostImage.style.left =
                            e.clientX - ghostImage.clientWidth / 2 + 'px';
                        ghostImage.style.pointerEvents = 'none';
                        ghostImage.style.position = 'fixed';
                        ghostImage.style.top =
                            e.clientY - ghostImage.clientHeight / 2 + 'px';
                        ghostImage.style.transition = 'none';
                        ghostImage.style.zIndex =
                            'calc(var(--kup-navbar-zindex) + 1)';
                        dom.ketchup.interact.container.appendChild(ghostImage);
                        draggable.kupDragDrop.ghostImage = ghostImage;
                        break;
                }
            },
            end(e: InteractEvent) {
                const draggable = e.target as KupDraggableElement;
                const ghostImage = draggable.kupDragDrop
                    ? draggable.kupDragDrop.ghostImage
                    : null;
                if (ghostImage) {
                    ghostImage.remove();
                }
                draggable.removeAttribute(kupDraggableAttr);
            },
        };
        interact(el).draggable(options);
    }
    /**
     * Sets up a new dropzone.
     * @param {HTMLElement} el - The dropzone element.
     * @param {DropzoneOptions} options - Options of the dropzone.
     * @param {KupDropEventData} eventData - Additional data used to trigger the drop event. The callback is used to return cell, column and row info.
     * @param {KupDropCallbacks} callbacks - Additional callbacks to invoke.
     * @see https://interactjs.io/docs/action-options/ For more options
     */
    dropzone(
        el: HTMLElement,
        options?: DropzoneOptions,
        eventData?: KupDropEventData,
        callbacks?: KupDropCallbacks
    ) {
        if (!options) {
            options = {};
        }
        options.listeners = {
            drop(e: DropEvent) {
                if (callbacks && callbacks.drop) {
                    callbacks.drop(e);
                }
                if (eventData) {
                    const draggableDetails =
                        (e.relatedTarget as KupDraggableElement).kupDragDrop ||
                        {};
                    const dropzoneDetails = eventData.callback
                        ? eventData.callback()
                        : {};
                    const ketchupDropEvent =
                        new CustomEvent<KupDropEventPayload>(kupDropEvent, {
                            bubbles: true,
                            cancelable: true,
                            detail: {
                                dataType: eventData.type,
                                sourceElement: {
                                    id: draggableDetails.id
                                        ? draggableDetails.id
                                        : '',
                                    row: draggableDetails.row
                                        ? draggableDetails.row
                                        : null,
                                    selectedRows: draggableDetails.selectedRows
                                        ? draggableDetails.selectedRows
                                        : null,
                                    cell: draggableDetails.cell
                                        ? draggableDetails.cell
                                        : null,
                                    column: draggableDetails.column
                                        ? draggableDetails.column
                                        : null,
                                },
                                targetElement: {
                                    id: dropzoneDetails.id
                                        ? dropzoneDetails.id
                                        : '',
                                    row: dropzoneDetails.row
                                        ? dropzoneDetails.row
                                        : null,
                                    cell: dropzoneDetails.cell
                                        ? dropzoneDetails.cell
                                        : null,
                                    column: dropzoneDetails.column
                                        ? dropzoneDetails.column
                                        : null,
                                },
                            },
                        });
                    (e.currentTarget as HTMLElement).removeAttribute(
                        kupDragOverAttr
                    );
                    eventData.dispatcher.dispatchEvent(ketchupDropEvent);
                }
                (e.currentTarget as HTMLElement).removeAttribute(
                    kupDragOverAttr
                );
            },
            enter(e: DropEvent) {
                if (callbacks && callbacks.enter) {
                    callbacks.enter(e);
                }
                (e.currentTarget as HTMLElement).setAttribute(
                    kupDragOverAttr,
                    ''
                );
            },
            leave(e: DropEvent) {
                if (callbacks && callbacks.leave) {
                    callbacks.leave(e);
                }
                (e.currentTarget as HTMLElement).removeAttribute(
                    kupDragOverAttr
                );
            },
        };
        interact(el).dropzone(options);
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
                            : dom.ketchup.interact.restrictContainer,
                        endOnly: true,
                    }),
                ],
            })
            .on('pointerdown', function (e: PointerEvent) {
                const el = e.currentTarget as HTMLElement;
                el.style.zIndex = (dom.ketchup.interact.zIndex++).toString();
            });
        if (!unresizable) {
            el.classList.add(kupDialogResizableClass);
            interact(el).resizable({
                edges: { left: true, right: true, bottom: true, top: false },
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
