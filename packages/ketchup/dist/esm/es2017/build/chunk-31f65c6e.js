import { h } from '../mycomponent.core.js';

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}
function generateUniqueId(field) {
    return (new Date()).getTime() + field.trim().replace(/\s/g, '_');
}
function eventFromElement(element, eventSource) {
    while (eventSource) {
        console.log(eventSource);
        if (eventSource === element)
            return true;
        eventSource = eventSource.parentElement;
    }
    return false;
}

export { eventFromElement as a, generateUniqueId as b, format as c };
