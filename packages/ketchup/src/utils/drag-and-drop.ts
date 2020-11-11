// TODO: [feat-1]: it can be very important to add a functionality or API which allows us to define
// for the flag item for the source element of the drag operation.
// This possibile feature must be detailed very well because the e.target element is not always the
// element which you want to set the source element flag on.

// TODO: [feat-2]: if acceptedDataTypesFound must be passed to all drag event handler but the dragStart event.a
// This could possibly simplify the analysis of the e.dataTransfer.types

import { Event, EventEmitter } from '@stencil/core';

// TODO: import polyfill for mobile drag and drop
// TODO: install the polyfill
if ('ontouchstart' in document) {
    // TODO: verify if this causes drag & drop delay at runtime
    import('@justinribeiro/html5-dragdroptouch-shim/dist/esm.js').then(
        (DdtShim) => {
            new DdtShim({
                threshold: 5,
                opacity: 0.8,
                dblClick: 500,
                ctxMenu: 900,
                isPressHoldMode: 400,
                pressHoldAwait: 400,
                pressHoldMargin: 25,
                pressHoldThreshold: 0,
            });
        }
    );
}

// TODO: rename this
interface DragHandlers {
    onDragStart: Function;
    onDragLeave?: Function;
    onDragOver?: Function;
    onDragEnd?: Function;
}

interface DropHandlers {
    onDragLeave?: Function;
    onDragOver?: Function;
    onDrop: Function;
}

interface DragData {
    // ['application/xls']: string | object;
    // ['text/plain']: string | object;
    // ['ketchup/tablecolumnsort']: string | object;
    // ['ketchup/boxdrag']: string | object;
    // ['ketchup/table']: string | object;
    [index: string]: string | object;
}

interface ImageData {
    img: HTMLImageElement | HTMLElement;
    offsetX: number;
    offsetY: number;
}

/**
 *
 */
export function setKetchupDraggable(
    handlers: DragHandlers,
    data: DragData,
    image?: ImageData
) {
    const onDragStart = (e: DragEvent) => {
        // Sets drag data, the type of drag action, and the image
        Object.keys(data).forEach((key) => {
            e.dataTransfer.setData(
                key,
                typeof data[key] === 'string'
                    ? (data[key] as string)
                    : JSON.stringify(data[key])
            );
        });

        if (image) {
            e.dataTransfer.setDragImage(
                image.img,
                image.offsetX,
                image.offsetY
            );
        }

        // Executes the given handler for custom behavior
        handlers.onDragStart(e);
    };

    return {
        draggable: true,
        onDragStart,
        ...(handlers.onDragLeave ? { onDragLeave: handlers.onDragLeave } : {}),
        ...(handlers.onDragOver ? { onDragOver: handlers.onDragOver } : {}),
        ...(handlers.onDragEnd ? { onDragEnd: handlers.onDragEnd } : {}),
    };
}

export function setKetchupDroppable(
    handlers: DropHandlers,
	acceptedDataTypes: string[],
	dispatcherElement: HTMLElement,
	targetPayload: any // TODO create a skeleton?
) {
    const onDrop = (e: DragEvent) => {
        // Searches for accepted data types
        const acceptedDataTypesFound = acceptedDataTypes.filter((dataType) =>
            dragHasDataType(e, dataType)
        );

        // If not accepted data types have been found, we stop the drop operation
        if (
            acceptedDataTypesFound.length >= 1 &&
            handlers.onDrop(e, acceptedDataTypesFound)
        ) {
            // TODO: fire ketchup event for the accomplished drag operation
            const ketchupDropEvent = new CustomEvent('ketchup-drop', {
                bubbles: true,
                cancelable: true,
                detail:
                {
                  dataType:'', // TODO: probably this is not useful
                  sourceElement: , // TODO get from dataTrasfer
                  targetElement: targetPayload
                },
						});
            dispatcherElement.dispatchEvent(ketchupDropEvent);

            e.preventDefault();
        }
    };

    return {
        ...(handlers.onDragOver ? { onDragOver: handlers.onDragOver } : {}),
        ...(handlers.onDragLeave ? { onDragLeave: handlers.onDragLeave } : {}),
        onDrop,
    };
}

export function dragSetEffectAllowed(
    e: DragEvent,
    effectAllowed: string = 'move'
) {
    e.dataTransfer.effectAllowed = effectAllowed;
}

export function dragHasDataType(e: DragEvent, dataType: string): boolean {
    return e.dataTransfer.types.indexOf(dataType) >= 0;
}
