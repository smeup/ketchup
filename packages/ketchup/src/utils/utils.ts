
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}


export function generateUniqueId(field: string) {
  return (new Date()).getTime() + field.trim().replace(/\s/g,'_');
}

export function eventFromElement(element: HTMLElement, eventSource) {
  while (eventSource) {
      console.log(eventSource);
    if (eventSource === element) return true;
    eventSource = eventSource.parentElement;
  }
  return false;
}