// TODO: [feat-1]: it can be very important to add a functionality or API which allows us to define
// for the flag item for the source element of the drag operation.
// This possibile feature must be detailed very well because the e.target element is not always the
// element which you want to set the source element flag on.

// TODO: [feat-2]: if acceptedDataTypesFound must be passed to all drag event handler but the dragStart event.a
// This could possibly simplify the analysis of the e.dataTransfer.types

// import polyfill for mobile drag and drop
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

export interface DragHandlers {
    onDragStart: (e: DragEvent) => void;
    onDragLeave?: (e: DragEvent) => void;
    onDragOver?: (e: DragEvent) => boolean;
    onDragEnd?: (e: DragEvent) => void;
}

export interface DropHandlers {
    onDragLeave?: (e: DragEvent) => void;
    onDragOver?: (e: DragEvent) => boolean;
    onDrop: (e: DragEvent, acceptedDataTypesFound: string[]) => string;
}

interface DragData {
    // ['application/xls']: string | object;
    // ['text/plain']: string | object;
    // ['ketchup/tablecolumnsort']: string | object;
    // ['ketchup/boxdrag']: string | object;
    // ['ketchup/table']: string | object;
    'kup-drop-source-element': object;
    [index: string]: string | object;
}

interface ImageData {
    img: HTMLImageElement | HTMLElement;
    offsetX: number;
    offsetY: number;
}

type DropTargetElement<T> = T & {
    obj: {
        t: string;
        p: string;
        k: string;
    };
};

interface DragDropHolder {
    dragPayload:
        | undefined
        | {
              [index: string]: any; // This is used to support any data type
          };
}

// TODO: payloadstructure to implement or remove
const dragDropPayloadHolder: DragDropHolder = {
    // fields used only by the D&D wrapper
    // [...]
    // The holder of the payload data
    dragPayload: undefined,
};

export function getDragDropPayload() {
    return dragDropPayloadHolder.dragPayload;
}

export function setDragDropPayload(dragPayload) {
    dragDropPayloadHolder.dragPayload = dragPayload;
}

function _cleanDragDropPayload() {
    dragDropPayloadHolder.dragPayload = undefined;
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
        // clean the DragDropPlayload
        _cleanDragDropPayload();
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

    let onDragOver = undefined;
    if (handlers.onDragOver) {
        onDragOver = (e: DragEvent) => {
            if (handlers.onDragOver(e)) {
                e.preventDefault();
            }
        };
    }

    return {
        draggable: true,
        onDragStart,
        ...(handlers.onDragLeave ? { onDragLeave: handlers.onDragLeave } : {}),
        ...(onDragOver ? { onDragOver } : {}),
        ...(handlers.onDragEnd ? { onDragEnd: handlers.onDragEnd } : {}),
    };
}

export function setKetchupDroppable(
    handlers: DropHandlers,
    acceptedDataTypes: string[],
    dispatcherElement: HTMLElement,
    targetElement: DropTargetElement<any>
) {
    const onDrop = (e: DragEvent) => {
        // Searches for accepted data types
        const acceptedDataTypesFound = acceptedDataTypes.filter((dataType) =>
            hasDragDataType(e, dataType)
        );

        // If not accepted data types have been found, we stop the drop operation
        let processedDataType = '';
        if (
            acceptedDataTypesFound.length >= 1 &&
            !!(processedDataType = handlers.onDrop(e, acceptedDataTypesFound))
        ) {
            let sourceElement;
            try {
                sourceElement = JSON.parse(
                    e.dataTransfer.getData('kup-drop-source-element')
                );
            } catch (error) {
                console.log(
                    'Managed error during the kup-drop-source-element parsing',
                    error
                );
                sourceElement = e.dataTransfer.getData(
                    'kup-drop-source-element'
                );
            }
            const ketchupDropEvent = new CustomEvent('kup-drop', {
                bubbles: true,
                cancelable: true,
                detail: {
                    dataType: processedDataType,
                    sourceElement,
                    targetElement,
                },
            });
            dispatcherElement.dispatchEvent(ketchupDropEvent);

            e.preventDefault();
        }
    };

    let onDragOver = undefined;
    if (handlers.onDragOver) {
        onDragOver = (e: DragEvent) => {
            if (handlers.onDragOver(e)) {
                e.preventDefault();
            }
        };
    }

    return {
        ...(onDragOver ? { onDragOver } : {}),
        ...(handlers.onDragLeave ? { onDragLeave: handlers.onDragLeave } : {}),
        onDrop,
    };
}

/*
TODO: Implement function to merge declarations of onDragLeave and onDragOver when an element must be both a draggable element and a drop zone.
This is necessary to avoid launching twice the same code for both the event handlers (from drag and from drop).
We have to write a function which will accept the payload to pass to setKetchupDraggable and setKetchupDroppable in addition with a third parameter.
The third parameter is an object like this one: 
{
    dragOverHandlerMerge: Enum (draggableOnly, droppableOnly, both)
    dragOverHandlerExecuteDroppableFirst: boolean = true
    dragLeaveHandlerMerge: Enum (draggableOnly, droppableOnly, both)
    dragLeaveHandlerExecuteDroppableFirst: boolean = true
}
In this way we can specify which event handlers we have to execute and/or merge in this common D&D zone, which is the whole point of this method.
*/

export function setDragEffectAllowed(
    e: DragEvent,
    effectAllowed: string = 'move'
) {
    e.dataTransfer.effectAllowed = effectAllowed;
}

export function hasDragDataType(e: DragEvent, dataType: string): boolean {
    return e.dataTransfer.types.indexOf(dataType) >= 0;
}
