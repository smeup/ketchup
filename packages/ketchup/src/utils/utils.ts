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
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (c) {
            var r = (Math.random() * 16) | 0,
                v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        }
    );
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

export function getCurrentLocale(suffix?: string): string {
    if (navigator == null || navigator.language == null) {
        return 'en-US' + (suffix != null ? suffix : '');
    }
    return navigator.language + (suffix != null ? suffix : '');
}

export function getSeparator(locale, separatorType) {
    const numberWithGroupAndDecimalSeparator = 1000.1;
    return Intl.NumberFormat(locale)
        .formatToParts(numberWithGroupAndDecimalSeparator)
        .find(part => part.type === separatorType)
        .value;
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

function getCurrentTimeFormatFromBrowserLocale(manageSeconds: boolean): string {
    const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    };
    if (manageSeconds == true) {
        options.second = '2-digit';
    }
    const formatObj = new Intl.DateTimeFormat(
        getCurrentLocale('-u-hc-h23'),
        options
    ).formatToParts(new Date());
    let timeFormat = formatObj
        .map((obj) => {
            switch (obj.type) {
                case 'hour':
                    return 'HH';
                case 'minute':
                    return 'mm';
                case 'second':
                    return 'ss';
                default:
                    return obj.value;
            }
        })
        .join('');
    return timeFormat;
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

/**
 * @param value number as string, formatted by actual browser locale
 * @param type - type of number for calculate suffix
 * @returns true if number string in input is a valid number
 */
export function isValidFormattedStringNumber(
    value: string,
    type: string
): boolean {
    if (value == null || value.trim() == '') {
        return false;
    }

    let tmpStr = formattedStringToUnformattedStringNumber(value, type);

    if (isNumber(tmpStr)) {
        return true;
    }
    return false;
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
    return _numberToString(input, decimals, getCurrentLocale(), true);
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
 * @returns number as string, formatted by locale US, decimal separator . (like java decimal numbers), without group separator
 **/
export function formattedStringToUnformattedStringNumber(
    input: string,
    type: string
): string {
    return numberStringToNumberString(
        input,
        type,
        getDecimalSeparator(getCurrentLocale())
    );
}

/**
 * @param input number as string, formatted by locale US, decimal separator . (like java decimal numbers), with group separator
 * @param type - type of number for calculate suffix
 * @returns number as string, formatted by locale US, decimal separator . (like java decimal numbers), without group separator
 **/
export function unformattedStringNumberToNumber(
    input: string,
    type: string
): string {
    return numberStringToNumberString(input, type, '.');
}

function numberStringToNumberString(
    input: string,
    type: string,
    decFmt: string
): string {
    if (input == null || input.trim() == '') {
        return '';
    }

    let suffix = getNumericValueSuffixByType(type);
    if (suffix != '') {
        input = input.replace(suffix, '');
    }
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

    return _numberToString(unf, -1, 'en-US', false);
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
    locale: string,
    useGrouping: boolean
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
                  useGrouping: useGrouping,
              }
            : { useGrouping: useGrouping };
    return n.toLocaleString(locale, f);
}

export const ISO_DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';
export const ISO_DEFAULT_TIME_FORMAT = 'HH:mm:ss';
export const ISO_DEFAULT_TIME_FORMAT_WITHOUT_SECONDS = 'HH:mm';

/**
 *
 * @param value date as string
 * @param inputFormat date format
 * @param outputFormat date format to return
 * @returns date as string with format changed
 */
export function changeDateTimeFormat(
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
export function unformatDateTime(
    value: string,
    defaultValueFormat: string,
    valueFormat?: string
): Date {
    if (valueFormat == null || valueFormat.trim() == '') {
        valueFormat = defaultValueFormat;
    }
    return moment(value, valueFormat).toDate();
}

/**
 * @param date date as Date object
 * @return date as string, formatted
 **/
export function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    };
    return date.toLocaleDateString(getCurrentLocale(), options);
}

/**
 * @param time time as Date object
 * @param manageSeconds flag to set seconds managing
 * @return time as string, formatted
 **/
export function formatTime(time: Date, manageSeconds: boolean): string {
    const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    };
    if (manageSeconds == true) {
        options.second = '2-digit';
    }
    return time.toLocaleTimeString(getCurrentLocale('-u-hc-h23'), options);
}

/**
 * @param value date string, formatted by actual browser locale
 * @returns true if date string in input is a valid date
 */
export function isValidFormattedStringDate(value: string): boolean {
    return isValidStringDate(value);
}

/**
 * @param value date string
 * @param valueDateFormat date format (default actual browser locale)
 * @returns true if date string in input is a valid date
 */
export function isValidStringDate(
    value: string,
    valueDateFormat?: string
): boolean {
    if (valueDateFormat == null) {
        valueDateFormat = getCurrentDateFormatFromBrowserLocale();
    }
    let m = moment(value, valueDateFormat, true);
    return m.isValid();
}

/**
 * @param value time string, formatted by actual browser locale
 * @returns true if time string in input is a valid time
 */
export function isValidFormattedStringTime(
    value: string,
    manageSeconds: boolean
): boolean {
    let format = getCurrentTimeFormatFromBrowserLocale(manageSeconds);
    let m = moment(value, format, true);
    return m.isValid();
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
 * @param value time as string, formatted by actual browser locale
 * @returns time as string, formatted ISO
 **/
export function formattedStringToDefaultUnformattedStringTime(value: string) {
    return formattedStringToCustomUnformattedStringTime(
        value,
        ISO_DEFAULT_TIME_FORMAT,
        true
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
    return changeDateTimeFormat(
        value,
        getCurrentDateFormatFromBrowserLocale(),
        outputFormat
    );
}

/**
 * @param value time as string, formatted by actual browser locale
 * @param outputFormat time format to return
 * @param manageSeconds flag to set seconds managing
 * @returns time as string, formatted
 **/
export function formattedStringToCustomUnformattedStringTime(
    value: string,
    outputFormat: string,
    manageSeconds: boolean
): string {
    return changeDateTimeFormat(
        value,
        getCurrentTimeFormatFromBrowserLocale(manageSeconds),
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
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    };
    return unformatDateTime(
        value,
        ISO_DEFAULT_DATE_FORMAT,
        valueDateFormat
    ).toLocaleDateString(getCurrentLocale(), options);
}

/**
 * @param value time as string, formatted ISO
 * @param manageSeconds flag to set seconds managing
 * @param valueTimeFormat time format (default ISO)
 * @param customedFormat time format from smeupObject (TODO: must be managed)
 * @returns time as string, formatted by actual browser locale
 **/
export function unformattedStringToFormattedStringTime(
    value: string,
    manageSeconds: boolean,
    valueTimeFormat?: string,
    customedFormat?: string
): string {
    logMessage(
        'TIME-FIELD-VALUE',
        'unformattedStringToFormattedStringTime() - customedFormat param [' +
            customedFormat +
            '] not managed yet!!!'
    );
    const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    };
    if (manageSeconds == true) {
        options.second = '2-digit';
    }
    return unformatDateTime(
        value,
        ISO_DEFAULT_TIME_FORMAT,
        valueTimeFormat
    ).toLocaleTimeString(getCurrentLocale('-u-hc-h23'), options);
}

export function getMonthAsStringByLocale(
    month: number,
    format: string
): string {
    if (month == null) {
        return '';
    }
    const dateTmp = new Date();
    dateTmp.setDate(1);
    dateTmp.setMonth(month - 1);
    const options: Intl.DateTimeFormatOptions = {
        month: format,
    };
    const dateTimeFormat = new Intl.DateTimeFormat(getCurrentLocale(), options);
    return dateTimeFormat.format(dateTmp);
}

export function getMonthsAsStringByLocale(format?: string): string[] {
    if (format == null || format.trim() == '') {
        format = 'long';
    }
    var months: string[] = [];
    for (var i = 0; i < 12; i++) {
        months[i] = getMonthAsStringByLocale(i + 1, format);
    }

    return months;
}

export function getDayAsStringByLocale(date: Date): string {
    if (date == null) {
        return '';
    }
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'narrow',
        /** weekday: 'narrow' 'short' 'long' */
    };
    const dateTimeFormat = new Intl.DateTimeFormat(getCurrentLocale(), options);
    return dateTimeFormat.format(date);
}

function firstDayThisWeek(firstDayIndex?: number): Date {
    var d = new Date();
    const day = d.getDay();
    // dayIndex0
    d.setDate(d.getDate() - day);
    // dayIndexX
    d.setDate(d.getDate() + firstDayIndex);
    return d;
}

const offsetDate = (base: Date, count: number): Date => {
    const date = new Date(base);
    date.setDate(base.getDate() + count);
    return date;
};

function thisWeek(firstDayIndex?: number): { startDate: Date; endDate: Date } {
    const firstDay = firstDayThisWeek(firstDayIndex);
    return {
        startDate: firstDay,
        endDate: offsetDate(firstDay, 6),
    };
}

export function getDaysOfWeekAsStringByLocale(
    firstDayIndex?: number
): string[] {
    var thisWeekDays: { startDate: Date; endDate: Date } = thisWeek(
        firstDayIndex
    );
    var monday: Date = thisWeekDays.startDate;
    var days: string[] = [];
    for (var i = 0; i < 7; i++) {
        var date: Date = new Date(monday.toISOString());
        date.setDate(date.getDate() + i);
        days[i] = getDayAsStringByLocale(date);
    }
    return days;
}

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
