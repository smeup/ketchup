import { GenericObject } from '../types/GenericTypes';
import { KupBoxRow } from '../components/kup-box/kup-box-declarations';
import { KupDataRow } from '../managers/kup-data/kup-data-declarations';

export function identify(array: Array<KupBoxRow | KupDataRow>) {
    if (array) {
        for (let i = 0; i < array.length; i++) {
            array[i].id = i.toString();
        }
    }
}

/**
 * Fills a string with another string, eventually before
 * @param {string} stringIn initial string
 * @param {string} stringForFill string used for fill
 * @param {number} finalLen final string length
 * @param {boolean} addBefore flag for fill on left
 * @returns the input string filled with stringForFill
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

/**
 * Used to retrieve component's props values.
 * @param {any} comp - Component calling this function.
 * @param {GenericObject} list - Prop list, specific for each component.
 * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
 * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
 */
export function getProps(
    comp: any,
    list: GenericObject,
    descriptions?: boolean
): GenericObject {
    let props: GenericObject = {};
    if (descriptions) {
        props = list;
    } else {
        for (const key in list) {
            if (Object.prototype.hasOwnProperty.call(list, key)) {
                props[key] = comp[key];
            }
        }
    }
    return props;
}
/**
 * Sets the props to the component.
 * @param {any} comp - Component calling this function.
 * @param {GenericObject} list - Prop list, specific for each component.
 * @param {GenericObject} props - Prop to be set.
 */
export function setProps(
    comp: any,
    list: GenericObject,
    props: GenericObject
): void {
    for (const key in props) {
        // If key is a custom prop it will be set on the component (i.e.: "data", "customStyle", ecc.)
        if (list[key]) {
            comp[key] = props[key];
        } else {
            // Otherwise, it will be set on its HTML element (i.e.: "id", "style", ecc.)
            comp.rootElement[key] = props[key];
        }
    }
}

/**
 * Creates a regular expression object, from a string un-escaped
 * @param s string to use for create regular expression (not escaped)
 * @param flags flags used for the regular expression
 * @returns the regular expression object
 */
export function getRegExpFromString(s: string, flags?: string): RegExp {
    return new RegExp(escapeRegExp(s), flags);
}

function escapeRegExp(s: string) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

/**
 * Used to wait for a given number of milliseconds
 * @param ms number of milliseconds to wait
 * @returns a promise which resolves after the given number of milliseconds
 */
export function jestDelay(ms: number) {
    return new Promise((res) => setTimeout(res, ms));
}

/**
 * Extract columns in a formula string in the format "[col]"
 * @param testo
 * @returns
 */
export function extractColumnsFromFormulaString(testo: string): string[] {
    const regex = /\[([^\]]*)\]/g;
    const risultati: string[] = [];

    for (const match of testo.matchAll(regex)) {
        risultati.push(match[1]);
    }

    return risultati;
}
