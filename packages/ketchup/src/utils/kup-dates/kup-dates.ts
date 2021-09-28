import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import minMax from 'dayjs/plugin/minMax';
import 'dayjs/locale/es';
import 'dayjs/locale/fr';
import 'dayjs/locale/it';
import 'dayjs/locale/pl';
import 'dayjs/locale/ru';
import 'dayjs/locale/zh';
import { KupDatesNormalize } from './kup-dates-declarations';

/**
 * Handles operations and formatting of dates.
 * @module KupDates
 */
export class KupDates {
    dayjs: Function;
    locale: string;
    /**
     * Initializes KupDates.
     */
    constructor(locale?: string) {
        this.setLocale(locale);
        this.dayjs = dayjs;
        dayjs.extend(customParseFormat);
        dayjs.extend(localizedFormat);
        dayjs.extend(minMax);
    }
    /**
     * Sets the locale from the browser or from a given argument.
     * @returns {string} Locale string.
     * @see https://github.com/iamkun/dayjs/issues/732
     */
    setLocale(locale?: string): string {
        if (locale) {
            // Sets locale from string
            this.locale = locale;
        } else {
            // Sets locale from browser
            const navLangs: false | readonly string[] =
                navigator.languages ||
                (navigator.language ? [navigator.language] : false);
            if (!navLangs || !navLangs.length) {
                return 'en';
            }
            this.locale = navLangs[0].split('-')[0].toLowerCase();
        }
        dayjs.locale(this.locale);
    }
    /**
     * Formats the given date.
     * @param {dayjs.ConfigType} input - Date to be formatted.
     * @param {string} format - Output format.
     * @see https://day.js.org/docs/en/display/format
     */
    format(input: dayjs.ConfigType, format?: string): string {
        if (!format) {
            format = 'L'; // MM/DD/YYYY, DD/MM/YYYY depending on locale
        }
        return dayjs(input).format(format);
    }
    /**
     * Validates the given date.
     * @param {dayjs.ConfigType} date - Date to be validated.
     * @returns {boolean} Returns whether the argument is a valid date or not.
     */
    isValid(date: dayjs.ConfigType): boolean {
        return dayjs(date).isValid();
    }
    /**
     * Converts the input in a Date object.
     * @param {dayjs.ConfigType} input - Input date.
     * @param {string} format - Format of the input date.
     * @returns {Date} Date object.
     */
    toDate(input: dayjs.ConfigType, format?: string): Date {
        if (format) {
            return dayjs(input, format).toDate();
        } else {
            return dayjs(input).toDate();
        }
    }
    /**
     * Converts the input in a Dayjs object.
     * @param {dayjs.ConfigType} input - Input date.
     * @param {string} format - Format of the input date.
     * @returns {dayjs.Dayjs} Dayjs object.
     */
    toDayjs(input: dayjs.ConfigType, format?: string): dayjs.Dayjs {
        if (format) {
            return dayjs(input, format);
        } else {
            return dayjs(input);
        }
    }
    /**
     * Returns a computed ISO date/time from a partial string.
     * @param {string} input - Input string containing a partial date/time (i.e.: 011221).
     * @param {KupDatesNormalize} type - Type of the input string.
     * @returns {dayjs.Dayjs} Dayjs object of the normalized date.
     */
    normalize(input: string, type?: KupDatesNormalize): dayjs.Dayjs {
        const l = dayjs.Ls[this.locale].formats.L;
        input.replace(/\//g, ''); // removes all /
        input.replace(/./g, ''); // removes all .
        input.replace(/-/g, ''); // removes all :
        input.replace(/:/g, ''); // removes all -
        switch (type) {
            case KupDatesNormalize.DATE_TIME:
                // N.Y.I.
                break;
            case KupDatesNormalize.TIME:
                break;
            case KupDatesNormalize.DATE:
            default:
                const date = normalizeDate();
                return dayjs(date);
        }

        function normalizeDate(): Date {
            const today = new Date();
            const dIndex = l.indexOf('DD');
            const mIndex = l.indexOf('MM');
            let sub1 = 0,
                sub2 = 0,
                year = '';
            switch (input.length) {
                case 1:
                case 2:
                    sub1 = parseInt(input);
                    today.setDate(sub1);
                    break;
                case 3:
                    input = '0' + input; // continue into case 4
                case 4:
                    sub1 = parseInt(input.substr(0, 2));
                    sub2 = parseInt(input.substr(2, 2));
                    if (mIndex === 0) {
                        today.setDate(sub2);
                        today.setMonth(sub1 - 1); // -1 because it's 0 based
                    } else if (dIndex === 0) {
                        today.setDate(sub1);
                        today.setMonth(sub2 - 1); // -1 because it's 0 based
                    }
                    break;
                case 5:
                    input = '0' + input; // continue into case 6
                case 6:
                    sub1 = parseInt(input.substr(0, 2));
                    sub2 = parseInt(input.substr(2, 2));
                    year = today.getFullYear().toString();
                    year = year.substr(0, 2) + input.substr(4, 2);
                    if (mIndex === 0) {
                        today.setFullYear(parseInt(year), sub1, sub2 - 1);
                    } else if (dIndex === 0) {
                        today.setFullYear(parseInt(year), sub2 - 1, sub1);
                    }
                    break;
                case 7:
                    input = '0' + input; // continue into case 8
                case 8:
                    sub1 = parseInt(input.substr(0, 2));
                    sub2 = parseInt(input.substr(2, 2));
                    year = input.substr(4, 2);
                    if (mIndex === 0) {
                        today.setFullYear(parseInt(year), sub1, sub2 - 1);
                    } else if (dIndex === 0) {
                        today.setFullYear(parseInt(year), sub2 - 1, sub1);
                    }
                default:
                    break;
            }
            return today;
        }
    }
    /**
     * Returns the minimum date from an array of dates.
     * @param {dayjs.ConfigType[]} dates - Array of dates.
     * @returns {dayjs.Dayjs} Minimum date.
     */
    min(dates: dayjs.ConfigType[]): dayjs.Dayjs {
        const dayjsDates: dayjs.Dayjs[] = [];
        for (let index = 0; index < dates.length; index++) {
            const date: dayjs.ConfigType = dates[index];
            dayjsDates.push(dayjs(date));
        }
        return dayjs.min(dayjsDates);
    }
    /**
     * Returns the maximum date from an array of dates.
     * @param {dayjs.ConfigType[]} dates - Array of dates.
     * @returns {dayjs.Dayjs} Maximum date.
     */
    max(dates: dayjs.ConfigType[]): dayjs.Dayjs {
        const dayjsDates: dayjs.Dayjs[] = [];
        for (let index = 0; index < dates.length; index++) {
            const date: dayjs.ConfigType = dates[index];
            dayjsDates.push(dayjs(date));
        }
        return dayjs.max(dayjsDates);
    }
    /**
     * Subtracts the given amount of time from the input date.
     * @param {dayjs.ConfigType} input - Input date.
     * @param {number} value - The value of the subtraction (i.e.: 7).
     * @param {dayjs.OpUnitType} unit - The unit of the subtraction (i.e.: "year").
     * @returns {dayjs.Dayjs} Computed date.
     * @see https://day.js.org/docs/en/manipulate/subtract
     */
    subtract(
        input: dayjs.ConfigType,
        value: number,
        unit?: dayjs.OpUnitType
    ): dayjs.Dayjs {
        return dayjs(input).subtract(value, unit);
    }
}
