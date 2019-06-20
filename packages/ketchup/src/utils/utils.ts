export function format(first: string, middle: string, last: string): string {
    return (
        (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '')
    );
}

export function generateUniqueId(field: string = 'def'): string {
    return new Date().getTime() + field.trim().replace(/\s/g, '_');
}

export function eventFromElement(element: HTMLElement, eventSource) {
    while (eventSource) {
        console.log(eventSource);
        if (eventSource === element) return true;
        eventSource = eventSource.parentElement;
    }
    return false;
}

export function generateRandomID(): string {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return (
        '_' +
        Math.random()
            .toString(36)
            .substr(2, 9)
    );
}
