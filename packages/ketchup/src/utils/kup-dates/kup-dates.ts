import type { KupComponent } from '../../types/GenericTypes';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import minMax from 'dayjs/plugin/minMax';
import 'dayjs/locale/es';
import 'dayjs/locale/fr';
import 'dayjs/locale/it';
import 'dayjs/locale/pl';
import 'dayjs/locale/ru';
import 'dayjs/locale/zh';

/**
 * Handles operations and formatting of dates.
 * @module KupDates
 */
export class KupDates {
    dayjs: Function;
    locale: string;
    managedComponents: Set<KupComponent>;
    /**
     * Initializes KupDates.
     */
    constructor(locale?: string) {
        this.dayjs = dayjs;
        // this.locale = locale ? locale : this.setLocale(); -- TODO: find better approach to set locale from the browser
        this.locale = locale ? locale : 'it';
        dayjs.extend(customParseFormat);
        dayjs.extend(minMax);
        if (this.locale && this.locale !== 'en' && this.locale !== 'en-us') {
            dayjs.locale(this.locale);
        }
        this.managedComponents = new Set();
    }
    /**
     * Sets the locale from the browser.
     * @returns {string} Locale string.
     */
    setLocale(): string {
        const navLangs: false | readonly string[] =
            navigator.languages ||
            (navigator.language ? [navigator.language] : false);
        if (!navLangs || !navLangs.length) {
            return 'en';
        }
        return navLangs[0].split('-')[0];
    }
    /**
     * Formats the given date.
     * @param {dayjs.ConfigType} input - Date to be formatted.
     * @param {string} format - Output format.
     */
    format(input: dayjs.ConfigType, format?: string): string {
        if (!format) {
            format = 'DD/MM/YYYY'; // Should default to locale's
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
    toDate(input: dayjs.ConfigType, format: string): Date {
        return dayjs(input, format, this.locale).toDate();
    }
    /**
     * Converts the input in a Dayjs object.
     * @param {dayjs.ConfigType} input - Input date.
     * @param {string} format - Format of the input date.
     * @returns {dayjs.Dayjs} Dayjs object.
     */
    toDayjs(input: dayjs.ConfigType, format: string): dayjs.Dayjs {
        return dayjs(input, format, this.locale);
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
     * Registers a KupComponent in KupDates.
     * @param {any} component - The component calling this function.
     */
    register(component: any): void {
        this.managedComponents.add(component.rootElement);
    }
    /**
     * Unregisters a KupComponent.
     *
     * @param {any} component - The component calling this function.
     */
    unregister(component: any): void {
        if (this.managedComponents) {
            this.managedComponents.delete(component.rootElement);
        }
    }
}
