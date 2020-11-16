import get from 'lodash/get';
import numeral from 'numeral';
import moment from 'moment';

import { Identifiable } from '../types/GenericTypes';
import { logMessage } from './debug-manager';

export function identify(array: Array<Identifiable>) {
    if (array) {
        for (let i = 0; i < array.length; i++) {
            array[i].id = i.toString();
        }
    }
}

export function format(first: string, middle: string, last: string): string {
    return (
        (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '')
    );
}

export function generateUniqueId(field: string = 'def'): string {
    return new Date().getTime() + field.trim().replace(/\s/g, '_');
}

export function generateUuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (
        c
    ) {
        var r = (Math.random() * 16) | 0,
            v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

export function eventFromElement(
    element: HTMLElement,
    eventSource: HTMLElement
) {
    while (eventSource) {
        if (eventSource === element) return true;
        eventSource = eventSource.parentElement;
    }
    return false;
}

/**
 * Given an event and an element, returns if that event was generated within that element or one of its children.
 * @param event
 * @param element
 */
export function isEventFromElement(
    event: Event,
    element: HTMLElement
): boolean {
    try {
        if (event.composedPath().indexOf(element) >= 0) {
            return true;
        }
    } catch (e) {
        if (eventFromElement(element, event.target as HTMLElement)) {
            return true;
        }
    }
    return false;
}

/**
 * Given a camelCase formatted string, returns the same string in kebab-case.
 * @param str - the string to convert.
 * @returns the converted string.
 */
export function toKebabCase(str: string): string {
    return (str || '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function replacePlaceHolders(template: any, data: any) {
    template = typeof template === 'function' ? template() : template;
    if (['string', 'number'].indexOf(typeof template) === -1)
        throw 'please provide a valid template';

    if (!data) return template;

    template = template.replace(/\{\{([^}]+)\}\}/g, function (match) {
        match = match.slice(2, -2);
        var val = get(data, match, match);
        if (!val) return '{{' + match + '}}';
        return val;
    });

    return template;
}

export function formatSize(size: any) {
    if (isNaN(size)) {
        return size;
    } else {
        return size + 'px';
    }
}

export function getCurrentLocale(): string {
    return navigator.language;
}

export function getCurrentDateFormatFromBrowserLocale(): string {
    const formatObj = new Intl.DateTimeFormat(getCurrentLocale()).formatToParts(
        new Date()
    );

    let dateFormat = formatObj
        .map((obj) => {
            switch (obj.type) {
                case 'day':
                    return 'DD';
                case 'month':
                    return 'MM';
                case 'year':
                    return 'YYYY';
                default:
                    return obj.value;
            }
        })
        .join('');
    return dateFormat;
}

/**
 * Convert argument to boolean. Everything is false unless: true, "true", 1, "1", "on", "yes"
 * @param value the value to convert
 * @returns the boolean value of passed argument
 */
export function getBoolean(value: any) {
    switch (value) {
        case true:
        case 'true':
        case 1:
        case '1':
        case 'on':
        case 'yes':
            return true;
        default:
            return false;
    }
}

/**
 * Check if an object is undefined, null or empty
 * @param obj the object to check
 * @returns true or false
 */
export function isEmpty(obj: any) {
    return (
        !obj ||
        obj === null ||
        (Object.keys(obj).length === 0 && obj.constructor === Object)
    );
}

export function isNumber(value: any): boolean {
    //return typeof value === 'number';
    return !isNaN(value);
}

/**
 * @param input number as string, formatted by locale US, decimal separator . (like java decimal numbers)
 * @returns number
 **/
export function stringToNumber(input: string): number {
    if (!input || input == null || input.trim() == '') {
        input = '0';
    }
    return numeral(input).value();
}

/**
 * @param input number
 * @param decimals number of significant decimal digits for output
 * @returns number as string, formatted by actual browser locale
 **/
export function numberToString(input: number, decimals: number): string {
    if (input == null) {
        return '';
    }
    return _numberToString(input, decimals, getCurrentLocale());
}

/**
 * @param type - type of number for calculate suffix
 * @returns suffix for number, by type
 **/
export function getNumericValueSuffixByType(type: string): string {
    type = type.toUpperCase();
    let nstr = '';
    if (type == 'P') {
        nstr = ' %';
    } else if (type == 'VE') {
        nstr = ' €';
    } else if (type == 'VL') {
        nstr = ' £';
    } else if (type == 'VV') {
        nstr = ' $';
    }
    return nstr;
}

/**
 * @param input number
 * @param decimals number of significant decimal digits for output
 * @param type - type of number for calculate suffix
 * @returns number as string, formatted by actual browser locale, with suffix by type
 **/
export function numberToFormattedStringNumber(
    input: number,
    decimals: number,
    type: string
): string {
    if (input == null || isNaN(input)) {
        return '';
    }
    let nstr = numberToString(input, decimals);
    nstr = nstr + getNumericValueSuffixByType(type);
    return nstr;
}

/**
 * @param input number as string, formatted by locale US, decimal separator . (like java decimal numbers)
 * @param decimals number of significant decimal digits for output
 * @param type - type of number for calculate suffix
 * @returns number as string, formatted by actual browser locale, with suffix by type
 **/
export function unformattedStringToFormattedStringNumber(
    input: string,
    decimals: number,
    type: string
): string {
    return numberToFormattedStringNumber(stringToNumber(input), decimals, type);
}

/**
 * @param input number as string, formatted by actual browser locale
 * @param type - type of number for calculate suffix
 * @returns number as string, formatted by locale US, decimal separator . (like java decimal numbers)
 **/
export function formattedStringToUnformattedStringNumber(
    input: string,
    type: string
): string {
    if (input == null || input.trim() == '') {
        input = '0';
    }

    let suffix = getNumericValueSuffixByType(type);
    if (suffix != '') {
        input = input.replace(suffix, '');
    }
    let decFmt: string = getDecimalSeparator(getCurrentLocale());
    let regExpr: RegExp = null;
    if (decFmt == '.') {
        regExpr = /,/g;
    } else {
        regExpr = /\./g;
    }

    input = input.replace(regExpr, '');
    if (decFmt != '.') {
        input = input.replace(/,/g, '.');
    }
    let unf: number = Number(input);

    return _numberToString(unf, -1, 'en-US');
}

function getDecimalSeparator(locale) {
    const numberWithDecimalSeparator = 1.1;
    return Intl.NumberFormat(locale)
        .formatToParts(numberWithDecimalSeparator)
        .find((part) => part.type === 'decimal').value;
}

export function _numberToString(
    input: number,
    decimals: number,
    locale: string
): string {
    if (input == null) {
        input = 0;
    }
    let n: Number = Number(input);
    let f: Intl.NumberFormatOptions =
        decimals > -1
            ? {
                  minimumFractionDigits: decimals,
                  maximumFractionDigits: decimals,
              }
            : {};
    return n.toLocaleString(locale, f);
}

export const ISO_DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';

/**
 *
 * @param value date as string
 * @param inputFormat date format
 * @param outputFormat date format to return
 * @returns date as string with format changed
 */
export function changeDateFormat(
    value: string,
    inputFormat: string,
    outputFormat: string
): string {
    let m = moment(value, inputFormat);
    let str = m.format(outputFormat);
    return str;
}

/**
 * @param value date as string
 * @param valueDateFormat date format (default ISO)
 * @return Date object
 **/
export function unformatDate(value: string, valueDateFormat?: string): Date {
    if (valueDateFormat == null || valueDateFormat.trim() == '') {
        valueDateFormat = ISO_DEFAULT_DATE_FORMAT;
    }
    return moment(value, valueDateFormat).toDate();
}

/**
 * @param value date as string, formatted by actual browser locale
 * @returns date as string, formatted ISO
 **/
export function formattedStringToDefaultUnformattedStringDate(
    value: string
): string {
    return formattedStringToCustomUnformattedStringDate(
        value,
        ISO_DEFAULT_DATE_FORMAT
    );
}

/**
 * @param value date as string, formatted by actual browser locale
 * @param outputFormat date format to return
 * @returns date as string, formatted
 **/
export function formattedStringToCustomUnformattedStringDate(
    value: string,
    outputFormat: string
): string {
    return changeDateFormat(
        value,
        getCurrentDateFormatFromBrowserLocale(),
        outputFormat
    );
}

/**
 * @param value date as string, formatted ISO
 * @param valueDateFormat date format (default ISO)
 * @param customedFormat date format from smeupObject (TODO: must be managed)
 * @returns date as string, formatted by actual browser locale
 **/
export function unformattedStringToFormattedStringDate(
    value: string,
    valueDateFormat?: string,
    customedFormat?: string
): string {
    logMessage(
        'DATE-FIELD-VALUE',
        'unformattedStringToFormattedStringDate() - customedFormat param [' +
            customedFormat +
            '] not managed yet!!!'
    );
    return unformatDate(value, valueDateFormat).toLocaleDateString();
}
