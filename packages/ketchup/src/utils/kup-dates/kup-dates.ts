import type { KupComponent } from '../../types/GenericTypes';
import dayjs from 'dayjs';
import minMax from 'dayjs/plugin/minMax';

/**
 * Handles operations and formatting of dates.
 * @module KupDates
 */
export class KupDates {
    locale: HTMLScriptElement;
    managedComponents: Set<KupComponent>;
    /**
     * Initializes KupDates.
     */
    constructor(locale?: string) {
        if (locale) {
            this.setLocale(locale);
        }
        dayjs.extend(minMax);
        this.managedComponents = new Set();
    }
    /**
     * Sets the locale.
     * @todo this method is a draft/mockup - find a way to handle locales correctly.
     * @param {any} component - The component calling this function.
     */
    setLocale(locale: string): void {
        if (!this.locale) {
            this.locale = document.createElement('script');
            document.head.appendChild(this.locale);
            //const localizedFormat = require('dayjs/plugin/localizedFormat');
            //dayjs.extend(localizedFormat);
        }
        this.locale.src = locale; // i.e.: https://unpkg.com/dayjs@1.8.21/locale/zh-cn.js (this should be improved, dayjs by default ships english only)
        //const lang: string = locale.substr(
        //    locale.indexOf('locale/'),
        //    locale.indexOf('.js')
        //);
        // dayjs.locale(lang);
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
     * @returns {Date} Date object.
     */
    toDate(input: dayjs.ConfigType): Date {
        return dayjs(input).toDate();
    }
    /**
     * Converts the input in a Dayjs object.
     * @param {dayjs.ConfigType} input - Input date.
     * @returns {dayjs.Dayjs} Dayjs object.
     */
    toDayjs(input: dayjs.ConfigType): dayjs.Dayjs {
        return dayjs(input);
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
