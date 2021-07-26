import type { KupComponent } from '../../types/GenericTypes';
import dayjs from 'dayjs';

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
    formatDate(input: dayjs.ConfigType, format: string): dayjs.ConfigType {
        return dayjs(input).format(format);
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
