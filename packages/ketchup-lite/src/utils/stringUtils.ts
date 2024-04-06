/**
 * Creates a regular expression object from a provided string, with special characters escaped.
 * @param s The string to be escaped and used to create the regular expression.
 * @param flags Optional flags that modify the regular expression.
 * @returns A RegExp object constructed with the escaped string and provided flags.
 */
export function getRegExpFromString(s: string, flags?: string): RegExp {
    return new RegExp(escapeRegExp(s), flags);
}
/**
 * Escapes special characters in a string to be used in a regular expression.
 * @param s The string to escape.
 * @returns The escaped string with special regular expression characters prefixed with a backslash.
 */
function escapeRegExp(s: string) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
/**
 * Fills a string with another string to reach a specified final length, adding the fill string before or after the input string based on a flag.
 * @param {string} stringIn The initial string to fill.
 * @param {string} stringForFill The string used to fill the initial string.
 * @param {number} finalLen The desired final length of the string after filling.
 * @param {boolean} addBefore A flag indicating whether the fill string should be added before (true) or after (false) the initial string.
 * @returns The input string filled with stringForFill to the specified final length.
 */
export function fillString(
    stringIn: string,
    stringForFill: string,
    finalLen: number,
    addBefore: boolean
): string {
    let initSize = stringIn.length;
    let stringOut: string = '';
    for (let i: number = initSize; i < finalLen; i += stringForFill.length) {
        stringOut += stringForFill;
    }
    if (addBefore) {
        return stringOut + stringIn;
    } else {
        return stringIn + stringOut;
    }
}
