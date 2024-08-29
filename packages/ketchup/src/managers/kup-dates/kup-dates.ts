import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import minMax from 'dayjs/plugin/minMax';
import 'dayjs/locale/es';
import 'dayjs/locale/fr';
import 'dayjs/locale/it';
import 'dayjs/locale/pl';
import 'dayjs/locale/ru';
import 'dayjs/locale/zh';
import { KupComponent } from '../../types/GenericTypes';
import {
    KupDateTimeFormatOptionsMonth,
    KupDatesFormats,
    KupDatesLocales,
    KupDatesNormalize,
    KupDatesOrder,
} from './kup-dates-declarations';

/**
 * Handles operations and formatting of dates.
 * @module KupDates
 */
export class KupDates {
    dayjs: Function;
    locale: KupDatesLocales;
    managedComponents: Set<KupComponent>;
    /**
     * Initializes KupDates.
     */
    constructor(locale?: KupDatesLocales) {
        this.managedComponents = new Set();
        this.setLocale(locale);
        this.dayjs = dayjs;
        dayjs.extend(utc);
        dayjs.extend(customParseFormat);
        dayjs.extend(localizedFormat);
        dayjs.extend(minMax);
    }
    /**
     * Sets the locale from the browser or from a given argument.
     * @returns {string} Locale string.
     * @see https://github.com/iamkun/dayjs/issues/732
     */
    setLocale(locale?: KupDatesLocales): string {
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
            this.locale = navLangs[0]
                .split('-')[0]
                .toLowerCase() as KupDatesLocales;

            let found = false;
            for (const key in KupDatesLocales) {
                if (
                    Object.prototype.hasOwnProperty.call(KupDatesLocales, key)
                ) {
                    const localeItem = KupDatesLocales[key];
                    if (localeItem == this.locale) {
                        found = true;
                        break;
                    }
                }
            }
            if (!found) {
                console.log('set forced locale: en');
                this.locale = KupDatesLocales.ENGLISH;
            }
        }
        dayjs.locale(this.locale);
        this.managedComponents.forEach(function (comp) {
            if (comp.isConnected) {
                comp.refresh();
            }
        });
        document.dispatchEvent(new CustomEvent('kup-dates-localechange'));
    }
    /**
     * @returns {string} The current locale.
     */
    getLocale(): string {
        return this.locale;
    }
    /**
     * Gets the available locales.
     * @returns {Array<KupDatesLocales>} Array of locales' names.
     */
    getLocales(): Array<KupDatesLocales> {
        const items: Array<KupDatesLocales> = Object.keys(KupDatesLocales)
            .map((key) => KupDatesLocales[key])
            .filter((value) => typeof value === 'string');
        return items;
    }

    /**
     * Gets date format by browser locale
     * @returns {string} date format pattern, by browser locale
     */
    getDateFormat(): string {
        const formatObj = new Intl.DateTimeFormat(
            this.getLocale()
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

    /**
     * Gets time format by browser locale
     * @param {boolean} manageSeconds flag to set seconds managing
     * @returns {string} time format pattern, by browser locale
     */
    getTimeFormat(manageSeconds: boolean): string {
        const options: Intl.DateTimeFormatOptions = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        };
        if (manageSeconds == true) {
            options.second = '2-digit';
        }
        const formatObj = new Intl.DateTimeFormat(
            this.getLocale() + '-u-hc-h23',
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
     * Formats the given date.
     * @param {dayjs.ConfigType} input - Date to be formatted.
     * @param {string} format - Output format.
     * @see https://day.js.org/docs/en/display/format
     */
    format(input: dayjs.ConfigType, format?: string): string {
        if (!format) {
            format = 'L'; // MM/DD/YYYY, DD/MM/YYYY depending on locale
        }
        return dayjs.utc(input).format(format);
    }
    /**
     * Gets the time formatted
     * @param {Date} time time as Date object
     * @param {boolean} manageSeconds flag to set seconds managing
     * @return {string} time as string, formatted
     **/
    formatTime(time: Date, manageSeconds: boolean): string {
        const options: Intl.DateTimeFormatOptions = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        };
        if (manageSeconds == true) {
            options.second = '2-digit';
        }
        return time.toLocaleTimeString(this.getLocale() + '-u-hc-h23', options);
    }
    /**
     * Validates the given date.
     * @param {dayjs.ConfigType} date - Date to be validated.
     * @param {string} format - Format of the input date.
     * @param {boolean} strict - Strict parsing requires that the format and input match exactly, including delimiters.
     * @returns {boolean} Returns whether the argument is a valid date or not.
     */
    isValid(
        date: dayjs.ConfigType,
        format?: string,
        strict?: boolean
    ): boolean {
        if (format && format != null) {
            return dayjs(date, format, strict).isValid();
        } else {
            return dayjs(date, undefined, strict).isValid();
        }
    }

    /**
     * Validates strictly the given date.
     * @param {string} year - The year component of the date.
     * @param {string} month - The month component of the date.
     * @param {string} day - The day component of the date.
     * @returns {boolean} Returns whether the argument is a valid date or not.
     */
    isDateValidStrict(year: string, month: string, day: string): boolean {
        const yearInt = parseInt(year, 10);
        const monthInt = parseInt(month, 10);
        const dayInt = parseInt(day, 10);

        if (
            isNaN(yearInt) ||
            isNaN(monthInt) ||
            isNaN(dayInt) ||
            yearInt < 0 ||
            monthInt < 1 ||
            monthInt > 12 ||
            dayInt < 1
        ) {
            return false;
        }

        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (monthInt === 2) {
            const isLeapYear =
                (yearInt % 4 === 0 && yearInt % 100 !== 0) ||
                yearInt % 400 === 0;
            if (isLeapYear) {
                daysInMonth[1] = 29;
            }
        }

        if (dayInt > daysInMonth[monthInt - 1]) {
            return false;
        }

        return true;
    }

    /**
     * Parse and validate a string for date purpose in european format.
     * @param {string} input - The input string to parse.
     * @returns {day: string , month: string , year: string, dateFormat: "DDMMYYYY" | "DDMMYY" | "DD/MM/YYYY" | "DD/MM/YY" | "DD-MM-YYYY" | "DD-MM-YY"} Returns an object with date data and its format.
     */
    parseAndValidateDate(input: string): {
        day: string;
        month: string;
        year: string;
        dateFormat:
            | 'DDMMYYYY'
            | 'DDMMYY'
            | 'DD/MM/YYYY'
            | 'DD/MM/YY'
            | 'DD-MM-YYYY'
            | 'DD-MM-YY';
    } {
        let dateFormat:
            | 'DDMMYYYY'
            | 'DDMMYY'
            | 'DD/MM/YYYY'
            | 'DD/MM/YY'
            | 'DD-MM-YYYY'
            | 'DD-MM-YY'
            | null = null;
        let day: string, month: string, year: string;

        if (input.includes('/')) {
            let parts = input.split('/');
            if (parts.length !== 3) return null;

            day = parts[0];
            month = parts[1];
            year = parts[2];
            if (year.length === 2) {
                year = (parseInt(year, 10) >= 50 ? '19' : '20') + year;
                dateFormat = 'DD/MM/YY';
            } else if (year.length === 4) {
                dateFormat = 'DD/MM/YYYY';
            } else {
                return null;
            }
        } else if (input.includes('-')) {
            let parts = input.split('-');
            if (parts.length !== 3) return null;

            day = parts[0];
            month = parts[1];
            year = parts[2];
            if (year.length === 2) {
                year = (parseInt(year, 10) >= 50 ? '19' : '20') + year;
                dateFormat = 'DD-MM-YY';
            } else if (year.length === 4) {
                dateFormat = 'DD-MM-YYYY';
            } else {
                return null;
            }
        } else {
            let cleanedInput = input.replace(/[^0-9]/g, '');
            if (cleanedInput.length === 8) {
                // DDMMYYYY
                day = cleanedInput.slice(0, 2);
                month = cleanedInput.slice(2, 4);
                year = cleanedInput.slice(4, 8);
                dateFormat = 'DDMMYYYY';
            } else if (cleanedInput.length === 6) {
                // DDMMYY
                day = cleanedInput.slice(0, 2);
                month = cleanedInput.slice(2, 4);
                year = cleanedInput.slice(4, 6);
                year = (+year >= 50 ? '19' : '20') + year;
                dateFormat = 'DDMMYY';
            } else {
                return null;
            }
        }

        // check is valid date
        const date = new Date(`${year}-${month}-${day}`);
        if (isNaN(date.getTime())) {
            return null;
        }
        if (!this.isDateValidStrict(year, month, day)) {
            return null;
        }

        return { day, month, year, dateFormat };
    }

    /**
     * Parse and validate a string for date purpose in usa format.
     * @param {string} input - The input string to parse.
     * @returns {day: string , month: string , year: string, dateFormat: | 'MMDDYYYY' | 'MMDDYY'| 'MM/DD/YYYY'| 'MM/DD/YY'| 'MM-DD-YYYY' | 'MM-DD-YY'} Returns an object with date data and its format.
     */
    parseAndValidateDateEn(input: string): {
        day: string;
        month: string;
        year: string;
        dateFormat:
            | 'MMDDYYYY'
            | 'MMDDYY'
            | 'MM/DD/YYYY'
            | 'MM/DD/YY'
            | 'MM-DD-YYYY'
            | 'MM-DD-YY';
    } {
        let dateFormat:
            | 'MMDDYYYY'
            | 'MMDDYY'
            | 'MM/DD/YYYY'
            | 'MM/DD/YY'
            | 'MM-DD-YYYY'
            | 'MM-DD-YY'
            | null = null;
        let day: string, month: string, year: string;

        if (input.includes('/')) {
            let parts = input.split('/');
            if (parts.length !== 3) return null;

            month = parts[0];
            day = parts[1];
            year = parts[2];
            if (year.length === 2) {
                year = (parseInt(year, 10) >= 50 ? '19' : '20') + year;
                dateFormat = 'MM/DD/YY';
            } else if (year.length === 4) {
                dateFormat = 'MM/DD/YYYY';
            } else {
                return null;
            }
        } else if (input.includes('-')) {
            let parts = input.split('-');
            if (parts.length !== 3) return null;

            month = parts[0];
            day = parts[1];
            year = parts[2];
            if (year.length === 2) {
                year = (parseInt(year, 10) >= 50 ? '19' : '20') + year;
                dateFormat = 'MM-DD-YY';
            } else if (year.length === 4) {
                dateFormat = 'MM-DD-YYYY';
            } else {
                return null;
            }
        } else {
            let cleanedInput = input.replace(/[^0-9]/g, '');
            if (cleanedInput.length === 8) {
                // MMDDYYYY
                month = cleanedInput.slice(0, 2);
                day = cleanedInput.slice(2, 4);
                year = cleanedInput.slice(4, 8);
                dateFormat = 'MMDDYYYY';
            } else if (cleanedInput.length === 6) {
                // MMDDYY
                month = cleanedInput.slice(0, 2);
                day = cleanedInput.slice(2, 4);
                year = cleanedInput.slice(4, 6);
                year = (parseInt(year, 10) >= 50 ? '19' : '20') + year;
                dateFormat = 'MMDDYY';
            } else {
                return null;
            }
        }

        // check is valid date
        const date = new Date(`${year}-${month}-${day}`);
        if (isNaN(date.getTime())) {
            return null;
        }
        if (!this.isDateValidStrict(year, month, day)) {
            return null;
        }

        return { day, month, year, dateFormat };
    }

    /**
     * Validates the given date as string.
     * @param {string} value time string, formatted by actual browser locale
     * @param {boolean} manageSeconds if manage seconds
     * @returns {boolean} true if time string in input is a valid time
     */
    isValidFormattedStringTime(value: string, manageSeconds: boolean): boolean {
        let format = this.getTimeFormat(manageSeconds);
        return this.isValid(value, format, true);
    }

    /**
     * Converts the input in a Date object.
     * @param {dayjs.ConfigType} input - Input date.
     * @param {string} format - Format of the input date.
     * @returns {Date} Date object.
     */
    toDate(input: dayjs.ConfigType, format?: string): Date {
        if (format && format != null) {
            return dayjs.utc(input, format).toDate();
        } else {
            return dayjs.utc(input).toDate();
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
        // array e for-each con contains
        const allowedChars: Array<string> = [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
        ];
        let inputCleaned = '';
        for (let i = 0; i < input.length; i++) {
            let ch: string = input.charAt(i);
            if (allowedChars.includes(ch)) {
                inputCleaned += ch;
            }
        }
        input = inputCleaned;
        switch (type) {
            case KupDatesNormalize.TIME:
                const time = normalizeTime();
                return dayjs(time);
            case KupDatesNormalize.TIMESTAMP:
                return dayjs(input);
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
                //input = '0' + input; // continue into case 4
                case 4:
                    sub1 = parseInt(input.substring(0, 2));
                    sub2 = parseInt(input.substring(2, 4));
                    if (mIndex === 0) {
                        today.setDate(sub2);
                        today.setMonth(sub1 - 1); // -1 because it's 0 based
                    } else if (dIndex === 0) {
                        today.setDate(sub1);
                        today.setMonth(sub2 - 1); // -1 because it's 0 based
                    }
                    break;
                case 5:
                //input = '0' + input; // continue into case 6
                case 6:
                    sub1 = parseInt(input.substring(0, 2));
                    sub2 = parseInt(input.substring(2, 4));
                    year = today.getFullYear().toString();
                    year = year.substring(0, 2) + input.substring(4);
                    if (mIndex === 0) {
                        today.setFullYear(parseInt(year), sub1 - 1, sub2);
                    } else if (dIndex === 0) {
                        today.setFullYear(parseInt(year), sub2 - 1, sub1);
                    }
                    break;
                case 7:
                //input = '0' + input; // continue into case 8
                case 8:
                    sub1 = parseInt(input.substring(0, 2));
                    sub2 = parseInt(input.substring(2, 4));
                    year = input.substring(4);
                    if (mIndex === 0) {
                        today.setFullYear(parseInt(year), sub1 - 1, sub2);
                    } else if (dIndex === 0) {
                        today.setFullYear(parseInt(year), sub2 - 1, sub1);
                    }
                    break;
                default:
                    break;
            }
            return today;
        }

        function normalizeTime(): Date {
            const today = new Date();
            let hh = 0,
                mm = 0,
                ss = 0,
                ms = 0;
            switch (input.length) {
                case 1:
                case 2:
                    hh = parseInt(input);
                    today.setHours(hh, 0, 0, 0);
                    break;
                case 3:
                //input = '0' + input; // continue into case 4
                case 4:
                    hh = parseInt(input.substring(0, 2));
                    mm = parseInt(input.substring(2, 4));
                    today.setHours(hh, mm, 0, 0);
                    break;
                case 5:
                //input = '0' + input; // continue into case 6
                case 6:
                    hh = parseInt(input.substring(0, 2));
                    mm = parseInt(input.substring(2, 4));
                    ss = parseInt(input.substring(4, 6));
                    today.setHours(hh, mm, ss, 0);
                    break;
                case 7:
                //input = '0' + input; // continue into case 8
                case 8:
                    hh = parseInt(input.substring(0, 2));
                    mm = parseInt(input.substring(2, 4));
                    ss = parseInt(input.substring(4, 6));
                    ms = parseInt(input.substring(6, 8));
                    today.setHours(hh, mm, ss, ms);
                    break;
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
     * Adds the given amount of time to the input date.
     * @param {dayjs.ConfigType} input - Input date.
     * @param {number} value - The value of the addition (i.e.: 7).
     * @param {dayjs.OpUnitType} unit - The unit of the addition (i.e.: "year").
     * @returns {dayjs.Dayjs} Computed date.
     * @see https://day.js.org/docs/en/manipulate/add
     */
    add(
        input: dayjs.ConfigType,
        value: number,
        unit?: dayjs.ManipulateType
    ): dayjs.Dayjs {
        return dayjs(input).add(value, unit);
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
        unit?: dayjs.ManipulateType
    ): dayjs.Dayjs {
        return dayjs(input).subtract(value, unit);
    }

    /**
     * Gets the month formatted
     * @param {number} month month id
     * @param {KupDateTimeFormatOptionsMonth} format format
     * @returns {string} the month formatted, by browser locale
     */
    getMonthAsString(
        month: number,
        format: KupDateTimeFormatOptionsMonth
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
            this.getLocale(),
            options
        );
        return dateTimeFormat.format(dateTmp);
    }

    /**
     * Gets the year months formatted
     * @param {KupDateTimeFormatOptionsMonth} format format
     * @returns {string[]} the months formatted, by browser locale
     */
    getMonthsAsString(format?: KupDateTimeFormatOptionsMonth): string[] {
        if (format == null || format.trim() == '') {
            format = KupDateTimeFormatOptionsMonth.LONG;
        }
        var months: string[] = [];
        for (var i = 0; i < 12; i++) {
            months[i] = this.getMonthAsString(i + 1, format);
        }

        return months;
    }

    /**
     * Gets the day formatted
     * @param {Date} date date
     * @returns {string} the day formatted, by browser locale
     */
    getDayAsString(date: Date): string {
        if (date == null) {
            return '';
        }
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'narrow',
            /** weekday: 'narrow' 'short' 'long' */
        };
        const dateTimeFormat = new Intl.DateTimeFormat(
            this.getLocale(),
            options
        );
        return dateTimeFormat.format(date);
    }

    /**
     * First day of current week
     * @param {number} firstDayIndex first day of week index
     * @returns {Date} the first day of current week
     */
    firstDayThisWeek(firstDayIndex?: number): Date {
        var d = new Date();
        const day = d.getDay();
        // dayIndex0
        d.setDate(d.getDate() - day);
        // dayIndexX
        d.setDate(d.getDate() + firstDayIndex);
        return d;
    }

    /**
     * Dates of current week
     * @param {number} firstDayIndex first day of week index
     * @returns { startDate: Date; endDate: Date } the dates of current week
     */
    thisWeek(firstDayIndex?: number): { startDate: Date; endDate: Date } {
        const firstDay = this.firstDayThisWeek(firstDayIndex);
        return {
            startDate: firstDay,
            endDate: offsetDate(firstDay, 6),
        };

        function offsetDate(base: Date, count: number): Date {
            const date = new Date(base);
            date.setDate(base.getDate() + count);
            return date;
        }
    }

    /**
     * Gets the days of current week as string
     * @param {number} firstDayIndex first day of week index
     * @returns {string[]} the days of current week as string
     */
    getDaysOfWeekAsString(firstDayIndex?: number): string[] {
        var thisWeekDays: { startDate: Date; endDate: Date } =
            this.thisWeek(firstDayIndex);
        var monday: Date = thisWeekDays.startDate;
        var days: string[] = [];
        for (var i = 0; i < 7; i++) {
            var date: Date = new Date(monday.toISOString());
            date.setDate(date.getDate() + i);
            days[i] = this.getDayAsString(date);
        }
        return days;
    }

    /**
     * Gets the timestamp formatted
     * @param {string} value date/time as string, formatted ISO
     * @returns {string} date/time as string, formatted by actual browser locale
     **/
    timestampStringToFormattedString(value: string): string {
        const options: Intl.DateTimeFormatOptions = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        };
        let date = this.toDate(
            this.normalize(value, KupDatesNormalize.TIMESTAMP)
        );
        return date.toLocaleString(this.getLocale() + '-u-hc-h23', options);
    }

    /**
     * Gets ISO date/time from formatted string, as string
     * @param {string} value date/time as string, formatted by actual browser locale
     * @returns {string} date/time as string, formatted ISO
     **/
    formattedStringToTimestampString(value: string): string {
        return this.formattedStringToCustomDateTime(
            value,
            KupDatesFormats.ISO_DATE_TIME,
            true
        );
    }

    /**
     * Gets formatted dateTime as customed ISO (see KupDatesFormats)
     * @param {string} value time as string, formatted by actual browser locale
     * @param {string} outputFormat time format to return (see KupDatesFormats)
     * @param {boolean} manageSeconds flag to set seconds managing
     * @returns {string} time as string, formatted
     **/
    formattedStringToCustomDateTime(
        value: string,
        outputFormat: string,
        manageSeconds: boolean
    ): string {
        let inputFormat: string = this.getTimeFormat(manageSeconds);
        if (this.isValid(value, inputFormat)) {
            return this.format(
                this.normalize(value, KupDatesNormalize.TIME),
                outputFormat
            );
        } else {
            return '';
        }
    }

    /**
     * Gets the time formatted
     * @param {string} value time as string, formatted ISO
     * @param {boolean} manageSeconds flag to set seconds managing
     * @param {string} customedFormat time format from smeupObject
     * @returns {string} time as string, formatted by actual browser locale
     **/
    timeStringToFormattedString(
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
        let date = this.toDate(this.normalize(value, KupDatesNormalize.TIME));

        return formatByCustomedOutputTimeFormat(
            value,
            date,
            options,
            customedFormat,
            this
        );

        function formatByCustomedOutputTimeFormat(
            valueStr: string,
            date: Date,
            options: Intl.DateTimeFormatOptions,
            customedFormat: string,
            kupDates: KupDates
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

            return date.toLocaleTimeString(
                kupDates.getLocale() + '-u-hc-h23',
                options
            );
        }
    }

    /**
     * Registers a KupComponent in KupDates, in order to be properly handled whenever the locale changes.
     * @param {any} component - The Ketchup component to be registered.
     */
    register(component: any): void {
        this.managedComponents.add(
            component.rootElement ? component.rootElement : component
        );
    }
    /**
     * Unregisters a KupComponent, so it won't be refreshed when the locale changes.
     *
     * @param {any} component - The component calling this function.
     */
    unregister(component: any): void {
        if (this.managedComponents) {
            this.managedComponents.delete(
                component.rootElement ? component.rootElement : component
            );
        }
    }
    /**
     * Formats a JS Date Object to ISO String
     *
     * @param {Date} date - The date to be formatted to ISO.
     */
    formatToIsoDate = (date: Date) => {
        return dayjs(date).toISOString() ?? undefined;
    };

    /**
     * Parses a Date string to JS Date Object
     *
     * @param {string} ymd - The string to be converted to Date.
     */
    parseToDayStart = (ymd: string) => {
        return dayjs(ymd).toDate();
    };

    parseToDayEnd = (endDate: string) => {
        return dayjs(endDate)
            .set('hour', 23)
            .set('minute', 59)
            .set('second', 59)
            .toDate();
    };

    /**
     * Returns Start and end date of given dates
     *
     * @param {string} startDate - The start date string.
     * @param {string} endDate - The end date string.
     * @param {string} _name
     */
    validDates = (startDate: string, endDate: string, _name: string) => {
        let start = this.parseToDayStart(startDate);
        const end = this.parseToDayEnd(endDate);
        if (start?.getTime() > end?.getTime()) {
            start = this.parseToDayStart(endDate);
        }
        return { start, end };
    };

    formatToLocaleSimple = (date: Date) => dayjs(date).format('DD/MM/YYYY');

    sortDates = (
        firstDate: string,
        secondDate: string,
        order: KupDatesOrder = KupDatesOrder.ASC
    ) => {
        return order === 'asc'
            ? dayjs(firstDate).diff(dayjs(secondDate))
            : dayjs(secondDate).diff(dayjs(firstDate));
    };

    sortTimes = (
        firstTime: string,
        secondTime: string,
        order: KupDatesOrder = KupDatesOrder.ASC,
        format: string = 'HH:mm:ss'
    ) => {
        const timeA = dayjs(firstTime, format);
        const timeB = dayjs(secondTime, format);
        return order === 'asc' ? timeA.diff(timeB) : timeB.diff(timeA);
    };
}
