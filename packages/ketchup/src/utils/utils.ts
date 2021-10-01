import get from 'lodash/get';
import numeral from 'numeral';

import { GenericObject, Identifiable } from '../types/GenericTypes';
import { KupDates } from './kup-dates/kup-dates';
import { KupDom } from './kup-manager/kup-manager-declarations';
import {
    KupDatesFormats,
    KupDatesNormalize,
} from './kup-dates/kup-dates-declarations';

const dom: KupDom = document.documentElement as KupDom;
const kupDates: KupDates = dom.ketchup ? dom.ketchup.dates : new KupDates();

export enum DateTimeFormatOptionsMonth {
    NUMERIC = 'numeric',
    DIGIT2 = '2-digit',
    LONG = 'long',
    SHORT = 'short',
    NARROW = 'narrow',
}

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

export function getCurrentLocale(): string {
    if (navigator == null || navigator.language == null) {
        return 'en-US';
    }
    return navigator.language;
}

function getSeparator(locale, separatorType) {
    const numberWithGroupAndDecimalSeparator = 1000.1;
    return Intl.NumberFormat(locale)
        .formatToParts(numberWithGroupAndDecimalSeparator)
        .find((part) => part.type === separatorType).value;
}

export function getCurrentDateFormatFromBrowserLocale(): string {
    const formatObj = new Intl.DateTimeFormat(
        kupDates.getLocale()
    ).formatToParts(new Date());

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
        kupDates.getLocale() + '-u-hc-h23',
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
    let originalInputValue = input;
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
    if (numeral(input).value() == null || isNaN(numeral(input).value())) {
        return originalInputValue;
    }
    let unf: number = stringToNumber(input);

    return _numberToString(unf, -1, 'en-US', false);
}

export function getDecimalSeparator(locale) {
    return getSeparator(locale, 'decimal');
}

function countDecimals(value: number): number {
    if (Math.floor(value) === value) return 0;
    let stringValue = value.toString().split('.')[1];
    if (stringValue) {
        return stringValue.length ? stringValue.length : 0;
    } else {
        return 0;
    }
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
    if (decimals == null || decimals == -1) {
        decimals = countDecimals(input);
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
    return time.toLocaleTimeString(kupDates.getLocale() + '-u-hc-h23', options);
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
    return kupDates.isValid(value, format, true);
}

/**
 * @param value time as string, formatted by actual browser locale
 * @returns time as string, formatted ISO
 **/
export function formattedStringToDefaultUnformattedStringTime(value: string) {
    return formattedStringToCustomUnformattedStringTime(
        value,
        KupDatesFormats.ISO_TIME,
        true
    );
}

/**
 * @param value date/time as string, formatted by actual browser locale
 * @returns date/time as string, formatted ISO
 **/
export function formattedStringToDefaultUnformattedStringTimestamp(
    value: string
) {
    return formattedStringToCustomUnformattedStringTime(
        value,
        KupDatesFormats.ISO_DATE_TIME,
        true
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
    let inputFormat: string =
        getCurrentTimeFormatFromBrowserLocale(manageSeconds);
    if (kupDates.isValid(value, inputFormat)) {
        return kupDates.format(
            kupDates.normalize(value, KupDatesNormalize.TIME),
            outputFormat
        );
    } else {
        return '';
    }
}

/**
 * @param value time as string, formatted ISO
 * @param manageSeconds flag to set seconds managing
 * @param valueTimeFormat time format (default ISO)
 * @param customedFormat time format from smeupObject
 * @returns time as string, formatted by actual browser locale
 **/
export function unformattedStringToFormattedStringTime(
    value: string,
    manageSeconds: boolean,
    customedFormat?: string
): string {
    const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    };
    if (manageSeconds == true) {
        options.second = '2-digit';
    }
    let date = kupDates.toDate(
        kupDates.normalize(value, KupDatesNormalize.TIME)
    );

    return formatByCustomedOutputTimeFormat(
        value,
        date,
        options,
        customedFormat
    );
}

function formatByCustomedOutputTimeFormat(
    valueStr: string,
    date: Date,
    options: Intl.DateTimeFormatOptions,
    customedFormat: string
): string {
    if (customedFormat == null) {
        return date.toLocaleTimeString(
            kupDates.getLocale() + '-u-hc-h23',
            options
        );
    }

    switch (customedFormat) {
        case 'I13': {
            //hh:mm
            break;
        }
        case 'I12': {
            //hh:mm:ss
            break;
        }
        case 'I11': {
            //???
            //hh:dddd
            //return moment(date).format('HH:DDDD');
            return valueStr;
        }
        case 'I14': {
            //???
            //sssss
            //return moment(date).format('SSSSS');
            return valueStr;
        }
        case 'I1H': {
            //???
            //Ora,Cen/Min HH,xx
            return valueStr;
        }
        case 'I1M': {
            //???
            //Min,Cen/Sec  MMMM,xx
            return valueStr;
        }
        case 'I21': {
            //???
            //Giorni,(4 decim)
            return valueStr;
        }
        case 'I22': {
            //???
            //Ore,(4 decim)
            return valueStr;
        }
        case 'I23': {
            //???
            //Minuti,(4 decim)
            return valueStr;
        }
        case 'I24': {
            //???
            //Secondi
            return valueStr;
        }
        case 'I2H': {
            //???
            //Ora,Cen/Min HHHH,xx
            return valueStr;
        }
        case 'I2D': {
            //???
            //Ore Minuti Secondi HHMMS
            return valueStr;
        }
        case 'I2M': {
            //???
            //Min,Cen/Sec MMMM,xx
            return valueStr;
        }
    }

    return date.toLocaleTimeString(kupDates.getLocale() + '-u-hc-h23', options);
}

/**
 * @param value date/time as string, formatted ISO
 * @param valueDateFormat date/time format (default ISO)
 * @returns date/time as string, formatted by actual browser locale
 **/
export function unformattedStringToFormattedStringTimestamp(value: string) {
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };
    return kupDates
        .toDate(kupDates.format(value, KupDatesFormats.ISO_DATE_TIME))
        .toLocaleString(kupDates.getLocale() + '-u-hc-h23', options);
}

export function getMonthAsStringByLocale(
    month: number,
    format: DateTimeFormatOptionsMonth
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
    const dateTimeFormat = new Intl.DateTimeFormat(
        kupDates.getLocale(),
        options
    );
    return dateTimeFormat.format(dateTmp);
}

export function getMonthsAsStringByLocale(
    format?: DateTimeFormatOptionsMonth
): string[] {
    if (format == null || format.trim() == '') {
        format = DateTimeFormatOptionsMonth.LONG;
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
    const dateTimeFormat = new Intl.DateTimeFormat(
        kupDates.getLocale(),
        options
    );
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
    var thisWeekDays: { startDate: Date; endDate: Date } =
        thisWeek(firstDayIndex);
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

export function deepEqual(object1, object2): boolean {
    if (!(isObject(object1) && isObject(object2))) {
        return object1 === object2;
    }
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        const val1 = object1[key];
        const val2 = object2[key];
        const areObjects = isObject(val1) && isObject(val2);
        if (
            (areObjects && !deepEqual(val1, val2)) ||
            (!areObjects && val1 !== val2)
        ) {
            return false;
        }
    }

    return true;
}

export function isObject(object): boolean {
    return object != null && typeof object === 'object';
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
