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
    onDragOver?: (e: DragEvent) => void;
    onDrop: (e: DragEvent, acceptedDataTypesFound: string[]) => boolean;
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

type DropTargetElement<T extends any> = T & {
    // TODO check with FB. Actually I can't know what is T
    obj: {
        t: string;
        p: string;
        k: string;
    };
};

// additional: T; // TODO: ask Paolo how to spread generic properties from a type
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

    const onDragOver = (e: DragEvent) => {
        // TODO ask to FB if I have to do this in DropHandlers. And ask him to re-explain the reasons about two dragOver (and dragLeave)
        if (handlers.onDragOver(e)) {
            e.preventDefault();
        }
    };

    return {
        draggable: true,
        onDragStart,
        ...(handlers.onDragLeave ? { onDragLeave: handlers.onDragLeave } : {}),
        onDragOver,
        ...(handlers.onDragEnd ? { onDragEnd: handlers.onDragEnd } : {}),
    };
}

export function setKetchupDroppable(
    handlers: DropHandlers,
    acceptedDataTypes: string[],
    dispatcherElement: HTMLElement,
    targetElement: DropTargetElement<any> // TODO as above. Check with FB
) {
    const onDrop = (e: DragEvent) => {
        // Searches for accepted data types
        const acceptedDataTypesFound = acceptedDataTypes.filter((dataType) =>
            hasDragDataType(e, dataType)
        );

        // If not accepted data types have been found, we stop the drop operation
        if (
            acceptedDataTypesFound.length >= 1 &&
            handlers.onDrop(e, acceptedDataTypesFound)
        ) {
            let sourceElement;
            try {
                sourceElement = JSON.parse(
                    e.dataTransfer.getData('kup-drop-source-element')
                );
            } catch (error) {
                console.log(
                    'Error during the kup-drop-source-element parsing',
                    error
                );
                sourceElement = e.dataTransfer.getData(
                    'kup-drop-source-element'
                ); // TODO The error means that the data is a String, right? Ask to FB
            }
            const ketchupDropEvent = new CustomEvent('kup-drop', {
                bubbles: true,
                cancelable: true,
                detail: {
                    dataType: '', // TODO Ask to FB about this content. Must add another params for it?
                    sourceElement,
                    targetElement,
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

export function setDragEffectAllowed(
    e: DragEvent,
    effectAllowed: string = 'move'
) {
    e.dataTransfer.effectAllowed = effectAllowed;
}

export function hasDragDataType(e: DragEvent, dataType: string): boolean {
    return e.dataTransfer.types.indexOf(dataType) >= 0;
}
