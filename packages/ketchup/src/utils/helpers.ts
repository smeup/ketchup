//import debounce from 'lodash/debounce';

//import { EventEmitter } from '@stencil/core';
import { TooltipRelatedObject } from '../components/kup-tooltip/kup-tooltip-declarations';
import { Cell } from '../components/kup-data-table/kup-data-table-declarations';
import { KupTooltip } from '../components/kup-tooltip/kup-tooltip';

// shamelessy copyed from https://github.com/ionic-team/ionic/blob/master/core/src/utils/helpers.ts
/** NOT USED!!! */
/*
export function debounceEvent(event: EventEmitter, wait: number): EventEmitter {
    const original = (event as any)._original || event;
    return {
        _original: event,
        emit: debounce(original.emit.bind(original), wait),
    } as EventEmitter;
}
*/
// export function debounce(func: (...args: any[]) => void, wait = 0) {
//     let timer: any;
//     return (...args: any[]): any => {
//         clearTimeout(timer);
//         timer = setTimeout(func, wait, ...args);
//     };
// }

export function setTooltip(event: MouseEvent, cell: Cell, tooltip: KupTooltip) {
    if (event != null) {
        event.stopPropagation();
    }
    if (tooltip == null) {
        return;
    }
    let related: TooltipRelatedObject = null;
    if (cell != null) {
        related = {} as TooltipRelatedObject;
        related.element = event.target as HTMLElement;
        related.object = cell;
    }

    let newValue = related;
    let oldValue = tooltip.relatedObject;
    if (newValue == null && oldValue == null) {
        return;
    }
    if (newValue != null && oldValue != null) {
        /*
        if (newValue.object != null && oldValue.object != null) {
            if (
                smeupObjectEquals(newValue.object.obj, oldValue.object.obj) &&
                newValue.element == oldValue.element
            ) {
                return;
            }
        }*/
        if (
            newValue.object == oldValue.object &&
            newValue.element == oldValue.element
        ) {
            return;
        }
    }
    tooltip.setTooltipInfo(related);
}

export function unsetTooltip(tooltip: KupTooltip) {
    tooltip.unsetTooltipInfo();
}
