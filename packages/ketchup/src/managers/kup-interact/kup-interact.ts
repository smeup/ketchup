import type { ResizeEvent } from '@interactjs/actions/resize/plugin';
import type { InteractEvent } from '@interactjs/core/InteractEvent';
import type { Interaction } from '@interactjs/core/Interaction';
import type { ActionMap } from '@interactjs/core/scope';
import type {
    DraggableOptions,
    DropEvent,
    DropzoneOptions,
    ListenersArg,
    Point,
    RectResolvable,
    ResizableOptions,
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
    kupDraggableCellAttr,
    kupDraggableColumnAttr,
    KupDraggableElement,
    kupDraggableRowAttr,
    kupDragOverAttr,
    KupDropCallbacks,
    kupDropEvent,
    KupDropEventData,
    KupDropEventPayload,
    KupPointerEventTypes,
    KupResizeCallbacks,
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
    /**
     * Sets up a new draggable element.
     * @param {HTMLElement} el - The draggable element.
     * @param {Partial<DraggableOptions>} options - Options of the draggable element.
     * @param {KupDragEventData} eventData - Property used to transfer data for the drop event. The callback is used to return information of the starting item - such as cell, column and row info.
     * @param {KupDragEffect} effect - Visual effect of the drag action.
     * @param {KupDragCallbacks} callbacks - Additional callbacks to invoke.
     * @see https://interactjs.io/docs/action-options/ For more options
     */
    draggable(
        el: HTMLElement,
        options?: Partial<DraggableOptions>,
        eventData?: KupDragEventData,
        effect?: KupDragEffect,
        callbacks?: KupDragCallbacks
    ) {
        el.style.touchAction = 'none';
        el.style.userSelect = 'none';
        if (!options) {
            options = {};
        }
        if (effect === undefined || effect === null) {
            effect = KupDragEffect.MOVE;
        }
        options.listeners = {
            move(e: InteractEvent) {
                if (callbacks && callbacks.move) {
                    callbacks.move(e);
                }
                if (effect.toLowerCase() !== KupDragEffect.NONE) {
                    const draggable = e.target as KupDraggableElement;
                    const ghostImage =
                        draggable.kupDragDrop &&
                        draggable.kupDragDrop.ghostImage
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
                if (callbacks && callbacks.start) {
                    callbacks.start(e);
                }
                const draggable = e.target as KupDraggableElement;
                const draggableDetails =
                    eventData && eventData.callback
                        ? eventData.callback(e)
                        : {};
                draggable.kupDragDrop = draggableDetails;
                draggable.setAttribute(kupDraggableAttr, '');
                if (draggableDetails.cell) {
                    draggable.setAttribute(kupDraggableCellAttr, '');
                }
                if (draggableDetails.column) {
                    draggable.setAttribute(kupDraggableColumnAttr, '');
                }
                if (draggableDetails.row) {
                    draggable.setAttribute(kupDraggableRowAttr, '');
                }
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
                    case KupDragEffect.CLONE:
                        ghostImage = draggable.cloneNode(true) as HTMLElement;
                        ghostImage.id = '';
                        ghostImage.style.cursor = 'grabbing';
                        ghostImage.style.height = draggable.clientHeight + 'px';
                        ghostImage.style.left =
                            e.clientX - draggable.clientWidth / 2 + 'px';
                        ghostImage.style.margin = '0';
                        ghostImage.style.opacity = '0.75';
                        ghostImage.style.position = 'fixed';
                        ghostImage.style.top =
                            e.clientY - draggable.clientHeight / 2 + 'px';
                        ghostImage.style.transform = '';
                        ghostImage.style.width = draggable.clientWidth + 'px';
                        ghostImage.style.zIndex =
                            'calc(var(--kup-navbar-zindex) + 1)';
                        draggable.parentElement.appendChild(ghostImage);
                        draggable.kupDragDrop.ghostImage = ghostImage;
                        break;
                }
            },
            end(e: InteractEvent) {
                if (callbacks && callbacks.end) {
                    callbacks.end(e);
                }
                const draggable = e.target as KupDraggableElement;
                const ghostImage = draggable.kupDragDrop
                    ? draggable.kupDragDrop.ghostImage
                    : null;
                if (ghostImage) {
                    ghostImage.setAttribute('style', '');
                    ghostImage.remove();
                }
                draggable.removeAttribute(kupDraggableAttr);
                draggable.removeAttribute(kupDraggableCellAttr);
                draggable.removeAttribute(kupDraggableColumnAttr);
                draggable.removeAttribute(kupDraggableRowAttr);
            },
        };
        interact(el).draggable(options);
        this.managedElements.add(el);
    }
    /**
     * Sets up a new dropzone.
     * @param {HTMLElement} el - The dropzone element.
     * @param {DropzoneOptions} options - Options of the dropzone.
     * @param {KupDropEventData} eventData - Argument used to transfer data for the drop event. The callback is used to return information of the receiving item - such as cell, column and row info.
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
        this.managedElements.add(el);
    }
    /**
     * Sets up a new resizable element.
     * @param {HTMLElement} el - The resizable element.
     * @param {Partial<ResizableOptions>} options - Options of the resize action.
     * @param {KupResizeCallbacks} callbacks - Additional callbacks to invoke.
     * @param {boolean} moveOnResize - When true, the element will be moved when resizing in order to keep its position.
     * @param {boolean} autoResize - When true, the element will be automatically resized (usually the behavior is specified in a callback).
     * @see https://interactjs.io/docs/action-options/ For more options
     */
    resizable(
        el: HTMLElement,
        options?: Partial<ResizableOptions>,
        callbacks?: KupResizeCallbacks,
        moveOnResize?: boolean,
        autoResize?: boolean
    ) {
        if (!options || !options.edges) {
            options = {
                ...options,
                edges: {
                    left: true,
                    right: true,
                    bottom: true,
                    top: true,
                },
            };
        }
        options.listeners = {
            move(e: ResizeEvent) {
                if (callbacks && callbacks.move) {
                    callbacks.move(e);
                }
                if (autoResize) {
                    el.style.width = e.rect.width + 'px';
                    el.style.height = e.rect.height + 'px';
                }
                if (moveOnResize) {
                    const el = e.target as HTMLElement;
                    const oldTransform = e.target.style.transform;
                    let x = parseFloat(el.getAttribute('data-x')) || 0;
                    let y = parseFloat(el.getAttribute('data-y')) || 0;
                    x += e.deltaRect.left;
                    y += e.deltaRect.top;
                    el.style.transform = 'translate(' + x + 'px,' + y + 'px)';
                    if (
                        dom.ketchup.interact.isInViewport(
                            el,
                            oldTransform,
                            e.delta
                        )
                    ) {
                        el.setAttribute('data-x', x.toString());
                        el.setAttribute('data-y', y.toString());
                    }
                }
            },
        };
        interact(el).resizable(options);
        this.managedElements.add(el);
    }
    /**
     * Adds a new interact.js event listener to the given argument.
     * @param {HTMLElement} el - The element on which the event listener will be added.
     * @param {KupPointerEventTypes} event - Name of the event.
     * @param {KupResizeCallbacks} callback - Callback to invoke when the event fires.
     */
    on(el: HTMLElement, event: KupPointerEventTypes, callback: ListenersArg) {
        interact(el).on(event, callback);
        this.managedElements.add(el);
    }
    /**
     * This method checks whether the element is breaking the viewport boundaries.
     * @param {HTMLElement} el - Element to check.
     * @param {string} oldTransform - Previously set transform, used to rollback in case element breaks viewport boundaries.
     * @param {Point} delta - X and Y delta values of the last movement.
     */
    isInViewport(el: HTMLElement, oldTransform: string, delta: Point) {
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
    }
    /**
     * This method gives the element dialog-like features, by activating moving on drag and, optionally, the resize.
     * @param {HTMLElement} el - Dialog element.
     * @param {HTMLElement} handleEl - Element that must be dragged in order to trigger movement. When not provided, dragging anywhere on "el" will move it.
     * @param {boolean} unresizable - When true, the dialog can't be resized.
     * @param {RectResolvable<[number, number, Interaction<keyof ActionMap>]>} restrictContainer - When present, it will set the constraint of "el": it can't be moved outside this container.
     */
    dialogify(
        el: HTMLElement,
        handleEl?: HTMLElement,
        unresizable?: boolean,
        restrictContainer?: RectResolvable<
            [number, number, Interaction<keyof ActionMap>]
        >
    ): void {
        el.setAttribute(kupDialogAttribute, '');
        el.style.zIndex = (this.zIndex++).toString();
        const callbacks = {
            start(e: InteractEvent) {
                const el = e.currentTarget as HTMLElement;
                el.style.zIndex = (dom.ketchup.interact.zIndex++).toString();
            },
        };
        this.draggable(
            el,
            {
                allowFrom: handleEl ? handleEl : null,
                modifiers: [
                    interact.modifiers.restrictRect({
                        restriction: restrictContainer
                            ? restrictContainer
                            : dom.ketchup.interact.restrictContainer,
                        endOnly: true,
                    }),
                ],
            },
            null,
            KupDragEffect.MOVE,
            callbacks
        );
        if (!unresizable) {
            el.classList.add(kupDialogResizableClass);
            this.resizable(
                el,
                {
                    edges: {
                        left: true,
                        right: true,
                        bottom: true,
                        top: false,
                    },
                    modifiers: [
                        interact.modifiers.restrictSize({
                            min: { width: 100, height: 100 },
                        }),
                    ],
                },
                null,
                true,
                true
            );
        }
    }
    /**
     * Removes all event listeners from the elements in the array.
     * @param {HTMLElement[]} elements - Elements to handle.
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
     * Checks whether an element is currently registered or not.
     * @param {HTMLElement} el - Element to test.
     * @returns {boolean} True if the element was registered.
     */
    isRegistered(el: HTMLElement): boolean {
        return !this.managedElements ? false : this.managedElements.has(el);
    }
}
