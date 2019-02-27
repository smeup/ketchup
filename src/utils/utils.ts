
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}


export function generateUniqueId(field: string) {
  return (new Date()).getTime() + field;
}