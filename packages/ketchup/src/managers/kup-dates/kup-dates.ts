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
            .map((key) => KupDatesLocales[key as keyof typeof KupDatesLocales])
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
     **/
    format(input: dayjs.ConfigType, format?: string): string {
        if (!format) {
            format = 'L'; // MM/DD/YYYY, DD/MM/YYYY depending on locale
        }

        // Check if input is an ISO date string with early year (0001-0999)
        if (typeof input === 'string' && /^0\d{3}-/.test(input)) {
            const yearStr = input.substring(0, 4);
            const year = Number(yearStr);
            if (year >= 1 && year <= 999) {
                // Use native Date for early years
                const nativeDate = new Date(input);
                if (!isNaN(nativeDate.getTime())) {
                    // Manual formatting for common ISO formats
                    if (
                        format === 'YYYY-MM-DD' ||
                        format === KupDatesFormats.ISO_DATE
                    ) {
                        return nativeDate.toISOString().substring(0, 10);
                    } else if (
                        format === 'YYYY-MM-DD HH:mm:ss' ||
                        format === KupDatesFormats.ISO_DATE_TIME
                    ) {
                        return nativeDate
                            .toISOString()
                            .substring(0, 19)
                            .replace('T', ' ');
                    }
                    // For other formats, convert to dayjs but be aware of year issues
                    return dayjs.utc(nativeDate).format(format);
                }
            }
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

    isIsoDate(dateString: string): boolean {
        // Extract year from the string
        const yearStr = dateString.substring(0, 4);
        const year = Number(yearStr);

        // Year 0 doesn't exist in Gregorian calendar (goes from 1 BC to 1 AD)
        if (year === 0) {
            return false;
        }

        // For years 0001-0999, dayjs misinterprets them, so use native Date parsing
        if (year >= 1 && year <= 999) {
            try {
                const nativeDate = new Date(dateString);
                if (isNaN(nativeDate.getTime())) {
                    return false;
                }
                // Validate the parsed components match the input
                const isoString = nativeDate.toISOString();
                if (Number(isoString.substring(0, 4)) != year) {
                    return false;
                }
                if (
                    Number(dateString.substring(5, 7)) !=
                    nativeDate.getUTCMonth() + 1
                ) {
                    return false;
                }
                if (
                    Number(dateString.substring(8, 10)) !=
                    nativeDate.getUTCDate()
                ) {
                    return false;
                }
                return true;
            } catch {
                return false;
            }
        }

        // For years 1000 and above, use dayjs as usual
        const isoDate = dayjs(dateString, [
            KupDatesFormats.ISO_DATE,
            KupDatesFormats.ISO_DATE_TIME,
            'YYYY-MM-DDTHH:mm:ss.SSSZ',
        ]);
        if (!isoDate.isValid()) {
            return false;
        }

        if (Number(dateString.substring(0, 4)) != isoDate.year()) {
            return false;
        }
        if (Number(dateString.substring(5, 7)) != isoDate.month() + 1) {
            return false;
        }
        if (Number(dateString.substring(8, 10)) != isoDate.date()) {
            return false;
        }
        return true;
    }
    /**
     * Validates the given date.
     * @param {dayjs.ConfigType} date - Date to be validated.
     * @param {string} format - Format of the input date.
     * @param {boolean} strict - Strict parsing requires that the format and input match exactly, including delimiters.
     * @returns {boolean} Returns whether the argument is a valid date or not.
     */
    isValidFormattedStringDate(
        date: string,
        format?: string,
        strict?: boolean,
        isJustTime: boolean = false,
        manageSeconds: boolean = false
    ): boolean {
        let isValidDate = false;
        let parsedDate = null;
        if (format) {
            const nDate = strict ? date : this.normalize(date, format);
            parsedDate = dayjs(nDate, format, strict);
            isValidDate = parsedDate.isValid();
            if (!isValidDate && isJustTime && !strict) {
                const formatNotStrict = format.replace(/:/g, '');
                parsedDate = dayjs(nDate, formatNotStrict, strict);
                isValidDate = parsedDate.isValid();
            }
        } else {
            parsedDate = this.normalize(date);
            isValidDate = parsedDate.isValid();
        }
        if (!isValidDate) {
            return false;
        }
        let formattedDate = null;
        const cleanedDate = this.cleanInputDateString(date);

        if (format) {
            formattedDate = dayjs(parsedDate).format(format);
        } else {
            const options: Intl.DateTimeFormatOptions = {};

            if (
                format == KupDatesFormats.ISO_TIME ||
                format == KupDatesFormats.ISO_TIME_WITHOUT_SECONDS ||
                format == KupDatesFormats.ISO_DATE_TIME
            ) {
                options.hour = '2-digit';
                options.minute = '2-digit';
                options.hour12 = false;
                if (manageSeconds == true) {
                    options.second = '2-digit';
                }
            }
            if (
                format != KupDatesFormats.ISO_TIME &&
                format != KupDatesFormats.ISO_TIME_WITHOUT_SECONDS
            ) {
                options.year = 'numeric'; // Always use 4-digit year for consistency
                options.month = '2-digit';
                options.day = '2-digit';
            }

            const formatObj = new Intl.DateTimeFormat(
                this.getLocale() + '-u-hc-h23',
                options
            );

            formattedDate = formatObj.format(parsedDate.toDate());
        }
        const cleanedDateNew = this.cleanInputDateString(formattedDate);

        // For dates with 2-digit years, we need to expand the original cleaned date for comparison
        // But only for date formats, not time formats
        let expandedCleanedDate = cleanedDate;
        if (
            !isJustTime &&
            cleanedDate.length === 6 &&
            /^\d{6}$/.test(cleanedDate)
        ) {
            // This is likely DDMMYY format, expand the year part
            const day = cleanedDate.substring(0, 2);
            const month = cleanedDate.substring(2, 4);
            const year = cleanedDate.substring(4, 6);
            const yearNum = parseInt(year);
            const fullYear = yearNum > 50 ? '19' + year : '20' + year;
            expandedCleanedDate = day + month + fullYear;
        }

        isValidDate = cleanedDateNew == expandedCleanedDate;
        return isValidDate;
    }

    /**
     * Validates the given date as string.
     * @param {string} value time string, formatted by actual browser locale
     * @param {boolean} manageSeconds if manage seconds
     * @returns {boolean} true if time string in input is a valid time
     */
    isValidFormattedStringTime(
        value: string,
        manageSeconds: boolean,
        strict: boolean = true
    ): boolean {
        let format = this.getTimeFormat(manageSeconds);
        return this.isValidFormattedStringDate(
            value,
            format,
            strict,
            true,
            manageSeconds
        );
    }

    /**
     * Converts the input in a Date object.
     * @param {dayjs.ConfigType} input - Input date.
     * @param {string} format - Format of the input date.
     * @returns {Date} Date object.
     */
    toDate(input: dayjs.ConfigType, format?: string): Date | null {
        // Check if input is an ISO date string with early year (0001-0999)
        if (typeof input === 'string' && /^0\d{3}-/.test(input)) {
            const yearStr = input.substring(0, 4);
            const year = Number(yearStr);
            if (year >= 1 && year <= 999) {
                // Use native Date for early years
                const nativeDate = new Date(input);
                if (!isNaN(nativeDate.getTime())) {
                    return nativeDate;
                }
            }
        }

        const parsed = format ? dayjs.utc(input, format) : dayjs.utc(input);
        return parsed.isValid() ? parsed.toDate() : null;
    }
    /**
     * Converts the input in a Dayjs object.
     * @param {dayjs.ConfigType} input - Input date.
     * @param {string} format - Format of the input date.
     * @returns {dayjs.Dayjs} Dayjs object.
     */
    toDayjs(input: dayjs.ConfigType, format?: string): dayjs.Dayjs | null {
        // Check if input is an ISO date string with early year (0001-0999)
        if (typeof input === 'string' && /^0\d{3}-/.test(input)) {
            const yearStr = input.substring(0, 4);
            const year = Number(yearStr);
            if (year >= 1 && year <= 999) {
                // Use native Date for early years, then convert to dayjs
                const nativeDate = new Date(input);
                if (!isNaN(nativeDate.getTime())) {
                    return dayjs(nativeDate);
                }
            }
        }

        const dayJsResult = format ? dayjs(input, format) : dayjs(input);
        return dayJsResult.isValid() ? dayJsResult : null;
    }

    /**
     * Removes undesired characters in input string, for manage as date
     * Handles dates with or without leading zeros by standardizing the format
     * based on current locale (D/MM/YYYY, DD/MM/YYYY, etc.)
     * @param input - Input date string (e.g., "1/12/2023", "01/12/2023", "1/1/23")
     * @returns Cleaned string with standardized format for further processing
     */
    cleanInputDateString(input: string): string {
        if (!input) {
            return '';
        }
        if (this.isIsoDate(input)) {
            return input;
        }

        // Get browser locale format to understand expected structure
        const localeFormat = this.getDateFormat();

        // Check if input contains separators (slash, dash, dot)
        const separatorRegex = /[\/\-\.]/;
        const hasSeparators = separatorRegex.test(input);

        if (hasSeparators) {
            // Split by separators to get individual parts
            const parts = input.split(separatorRegex);

            if (parts.length >= 2) {
                // We have at least day and month (and possibly year)
                const dayIndex = localeFormat.indexOf('DD');
                const monthIndex = localeFormat.indexOf('MM');
                const yearIndex = localeFormat.indexOf('YYYY');

                // Create array to hold [day, month, year] in correct order based on locale
                let orderedParts: string[] = ['', '', ''];

                // Determine the order based on locale format positions
                const positions = [
                    { type: 'day', index: dayIndex, pos: 0 },
                    { type: 'month', index: monthIndex, pos: 1 },
                    { type: 'year', index: yearIndex, pos: 2 },
                ].sort((a, b) => a.index - b.index);

                // Map input parts to correct positions
                for (let i = 0; i < Math.min(parts.length, 3); i++) {
                    const targetPos = positions[i].pos;
                    orderedParts[targetPos] = parts[i].replace(/[^0-9]/g, '');
                }

                let [day, month, year] = orderedParts;

                // Pad day and month with leading zeros if necessary
                if (day && day.length === 1) {
                    day = '0' + day;
                }
                if (month && month.length === 1) {
                    month = '0' + month;
                }

                // Handle 2-digit years (convert to 4-digit)
                if (year && year.length === 2) {
                    const yearNum = parseInt(year);
                    if (yearNum > 50) {
                        year = '19' + year;
                    } else {
                        year = '20' + year;
                    }
                }

                // Build result string based on locale format order, not logical order
                let result = '';
                // Create a map of components for easy access
                const componentMap = {
                    day: day || '',
                    month: month || '',
                    year: year || '',
                };

                // Rebuild the string in the order they appear in locale format
                for (let i = 0; i < positions.length; i++) {
                    const position = positions[i];
                    const component =
                        componentMap[
                            position.type as keyof typeof componentMap
                        ];
                    if (component) {
                        result += component;
                    }
                }

                return result;
            }
        }

        // If no separators found, clean and return as before
        const cleanedNumbers = input.replace(/[^0-9]/g, '').trim();

        // For unseparated input, try to add padding based on common patterns
        if (cleanedNumbers.length >= 3 && cleanedNumbers.length <= 8) {
            // This handles cases like "1122023" -> should become "01122023"
            // or "112023" -> should become "011203" (with 2-digit year handling)
            return this.padUnseparatedDate(cleanedNumbers);
        }

        return cleanedNumbers;
    }

    /**
     * Helper method to pad unseparated date strings (e.g., "1122023" -> "01122023")
     * @param input - Clean numeric string
     * @returns Padded string with leading zeros where appropriate
     */
    private padUnseparatedDate(input: string): string {
        const length = input.length;

        switch (length) {
            case 3: // e.g., "123" -> "0123" (day=01, month=23 - invalid, but let validation handle it)
                return '0' + input;
            case 5: // e.g., "11223" -> "011223" (day=01, month=12, year=23)
                return '0' + input;
            case 6: // e.g., "112023" -> "01122023" OR "300924" -> "300924" (DDMMYY format, don't pad)
                // Check if the last 4 characters could be a year (19xx or 20xx)
                const lastFour = input.substring(2);
                const yearCandidate = parseInt(lastFour);
                if (yearCandidate >= 1900 && yearCandidate <= 2099) {
                    // This looks like DMYYYY format (e.g., "112023" = 1-12-2023)
                    return '0' + input;
                } else {
                    // This looks like DDMMYY format (e.g., "300924" = 30-09-24)
                    return input;
                }
            case 7: // e.g., "1122023" -> "01122023" (day=01, month=12, year=2023)
                return '0' + input;
            default:
                return input;
        }
    }

    /**
     * Returns a computed ISO date/time from a partial string.
     * @param {string} input - Input string containing a partial date/time (i.e.: 011221).
     * @param {KupDatesFormats} type - Type of the input string.
     * @returns {dayjs.Dayjs} Dayjs object of the normalized date.
     */
    normalize(input: string, type?: KupDatesFormats | string): dayjs.Dayjs {
        const l = type ?? dayjs.Ls[this.locale].formats.L;
        input = this.cleanInputDateString(input);
        switch (type) {
            case KupDatesFormats.ISO_TIME:
            case KupDatesFormats.ISO_TIME_WITHOUT_SECONDS:
                const time = normalizeTime();
                return dayjs(time);
            case KupDatesFormats.ISO_DATE_TIME:
                return dayjs(input);
            case KupDatesFormats.ISO_DATE:
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
                    if (Number(input.substring(4)) > 50) {
                        year = '19' + input.substring(4);
                    } else {
                        year = '20' + input.substring(4);
                    }
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
            this.normalize(value, KupDatesFormats.ISO_DATE_TIME)
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
        if (this.isValidFormattedStringTime(value, manageSeconds, false)) {
            return this.format(
                this.normalize(value, KupDatesFormats.ISO_TIME),
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
        let date = this.toDate(this.normalize(value, KupDatesFormats.ISO_TIME));

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
