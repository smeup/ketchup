import debounce from 'lodash/debounce';

import { EventEmitter } from '@stencil/core';

// shamelessy copyed from https://github.com/ionic-team/ionic/blob/master/core/src/utils/helpers.ts
export function debounceEvent(event: EventEmitter, wait: number): EventEmitter {
    const original = (event as any)._original || event;
    return {
        _original: event,
        emit: debounce(original.emit.bind(original), wait),
    } as EventEmitter;
}

// export function debounce(func: (...args: any[]) => void, wait = 0) {
//     let timer: any;
//     return (...args: any[]): any => {
//         clearTimeout(timer);
//         timer = setTimeout(func, wait, ...args);
//     };
// }
