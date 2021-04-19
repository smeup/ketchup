// TODO: [feat-1]: if acceptedDataTypesFound must be passed to all drag event handler but the dragStart event.a
// This could possibly simplify the analysis of the e.dataTransfer.types

// TODO [feat-2]: It would be a very useful improvement to add CSS animation directly in the library

// TODO [feat-3]: Another useful feature would be to add an Event Bus in order to listen the kup-drop event in a more simply way

// TODO [feat-4]: The application data is now provided by the developer in every single use case.
// I think it's possible to create a skeleton of these data and manage all this things directly in the library.
// Think about this scenario with a SmeUPper

/*
TODO [feat-5]: Implement function to merge declarations of onDragLeave and onDragOver when an element must be both a draggable element and a drop zone.
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

// TODO test this polyfill in mobile mode
// import polyfill for mobile drag and drop
// if ('ontouchstart' in document) {
//     // TODO: verify if this causes drag & drop delay at runtime
//     import('@justinribeiro/html5-dragdroptouch-shim/dist/esm.js').then(
//         (DdtShim) => {
//             new DdtShim({
//                 threshold: 5,
//                 opacity: 0.8,
//                 dblClick: 500,
//                 ctxMenu: 900,
//                 isPressHoldMode: 400,
//                 pressHoldAwait: 400,
//                 pressHoldMargin: 25,
//                 pressHoldThreshold: 0,
//             });
//         }
//     );
// }
 
// DragHandlers
export interface DragHandlers {
    onDragStart: (e: DragEvent) => void;
    onDragLeave?: (e: DragEvent) => void;
    onDragOver?: (e: DragEvent) => boolean;
    onDragEnd?: (e: DragEvent) => void;
}

// DropHandlers
export interface DropHandlers {
    onDragLeave?: (e: DragEvent) => void;
    onDragOver?: (e: DragEvent) => boolean; // TODO: add description to this function for its return value motivation
    onDrop: (e: DragEvent, acceptedDataTypesFound: string[]) => string; // TODO: add description to this function for its return value motivation
}

/**
 * The drag data interface.
 * @param kup-drag-source-element - Keeps a reference to the element which started the drag action. This is needed for the server to correctly answer to the client.
 */
interface DragData {
    'kup-drag-source-element': object; // TODO: if deemed a necessity, extract into a constant
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

// Payload holder
interface DragDropHolder {
    dragPayload:
        | undefined
        | {
              [index: string]: any; // This is used to support any data type
          };
}

// TODO: PayloadStructure to implement or remove (implement the TypeScript type lika a generic)
const dragDropPayloadHolder: DragDropHolder = {
    // fields used only by the D&D wrapper
    // [...]
    // The holder of the payload data
    dragPayload: undefined,
};

// payload getter
export function getDragDropPayload() {
    return dragDropPayloadHolder.dragPayload;
}

// payload setter
export function setDragDropPayload(dragPayload) {
    dragDropPayloadHolder.dragPayload = dragPayload;
}

// playload cleaner
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
        // manage the dragImage
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
                // this is mandatory in order to launch the onDrop method
                e.preventDefault();
            }
        };
    }
    // remember that onDragOver and onDragLeave can be replaced by the same methods in DropHandlers (if the component is both draggable and droppable)
    // in this scenario it's possible to merge the logic in the DropHandlers only
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
                    e.dataTransfer.getData('kup-drag-source-element')
                );
            } catch (error) {
                console.log(
                    'Managed error during the kup-drop-source-element parsing',
                    error
                );
                sourceElement = e.dataTransfer.getData(
                    'kup-drag-source-element'
                );
            }
            // dataType: identifier of Drag & Drop
            // sourceElement: applicative dragged object
            // targetElement: applicative dropped object
            const ketchupDropEvent = new CustomEvent('kup-drop', {
                bubbles: true,
                cancelable: true,
                detail: {
                    dataType: processedDataType,
                    sourceElement,
                    targetElement,
                },
            });
            console.log('kup-drop event', ketchupDropEvent);
            dispatcherElement.dispatchEvent(ketchupDropEvent);
            // this is mandatory
            e.preventDefault();
        }
    };

    let onDragOver = undefined;
    if (handlers.onDragOver) {
        onDragOver = (e: DragEvent) => {
            if (handlers.onDragOver(e)) {
                // this is mandatory
                e.preventDefault();
            }
        };
    }
    // remember that onDragOver and onDragLeave can be replace the same methods in DragHandlers (if the component is both draggable and droppable)
    // in this scenario it's possible to merge the logic in the DropHandlers only
    return {
        ...(onDragOver ? { onDragOver } : {}),
        ...(handlers.onDragLeave ? { onDragLeave: handlers.onDragLeave } : {}),
        onDrop,
    };
}

// utility that set the drag effect allowed
export function setDragEffectAllowed(
    e: DragEvent,
    effectAllowed:
        | 'none'
        | 'copy'
        | 'copyLink'
        | 'copyMove'
        | 'link'
        | 'linkMove'
        | 'move'
        | 'all'
        | 'uninitialized' = 'move'
) {
    e.dataTransfer.effectAllowed = effectAllowed;
}

// utility that simply check the drag data type
export function hasDragDataType(e: DragEvent, dataType: string): boolean {
    return e.dataTransfer.types.indexOf(dataType) >= 0;
}
