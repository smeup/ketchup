import numeral from 'numeral';
import 'numeral/locales/chs';
import 'numeral/locales/es';
import 'numeral/locales/fr';
import 'numeral/locales/it';
import 'numeral/locales/pl';
import 'numeral/locales/ru';
import { KupComponent } from '../../types/GenericTypes';
import { KupDebugCategory } from '../kup-debug/kup-debug-declarations';
import { KupDom } from '../kup-manager/kup-manager-declarations';
import {
    KupMathFormulas,
    KupMathLocales,
    KupMathNumbers,
} from './kup-math-declarations';
import { customFormula, normalDistributionFormula } from './kup-math-helper';

const dom: KupDom = document.documentElement as KupDom;

/**
 * Handles mathematical operations and number formatting/conversion.
 * @module KupMath
 */
export class KupMath {
    formulas: KupMathFormulas = {
        custom(formula: string, row: { [index: string]: number }): number {
            return customFormula(formula, row);
        },
        normalDistribution(
            average: number,
            variance: number,
            x: number
        ): number {
            return normalDistributionFormula(average, variance, x);
        },
    };
    locale: KupMathLocales;
    managedComponents: Set<KupComponent>;
    numbers: KupMathNumbers = {
        toLocaleString(value: string): string {
            const maximumFractionDigits: number = 14;
            if (value == null || value == '') return value;
            return Number(value).toLocaleString(dom.ketchup.math.locale, {
                maximumFractionDigits: maximumFractionDigits,
            });
        },
    };
    numeral: typeof numeral;

    /**
     * Initializes KupMath.
     */
    constructor(locale?: KupMathLocales) {
        this.locale = locale ? locale : KupMathLocales.en;
        this.managedComponents = new Set();
        this.numeral = numeral;
        this.numeral.locale(this.locale);
    }
    /**
     * Sets the locale of the numeral instance. The locales available must be tied to the KupDates locales.
     * @param {KupMathLocales} locale - Numeraljs locale string.
     */
    setLocale(locale: KupMathLocales): void {
        if (!Object.values(KupMathLocales).includes(locale)) {
            locale = KupMathLocales.en;
            dom.ketchup.debug.logMessage(
                'kup-math',
                'Invalid locale (' + locale + ')! Defaulting to english.',
                KupDebugCategory.WARNING
            );
        }
        this.locale = locale;
        this.numeral.locale(locale);
        this.managedComponents.forEach(function (comp) {
            if (comp.isConnected) {
                comp.refresh();
            }
        });
        document.dispatchEvent(new CustomEvent('kup-math-localechange'));
    }
    /**
     * Calculates the normal distribution on a set of values.
     * @param {string[] | number[] | String[]} values - Array of values.
     * @param {number} precision - Number of iterations to run (points). When not specified, defaults to 201.
     * @returns {number[][]} Returns an array of arrays containing numbers, which are the representation of the calculated normal distribution.
     */
    normalDistribution(
        values: string[] | number[] | String[],
        precision?: number
    ): number[][] {
        if (!precision) {
            precision = 201;
        }
        const data: number[][] = [];
        let max = Math.max.apply(Math, values);
        let min = Math.min.apply(Math, values);
        let average = 0;
        let variance = 0;
        for (let index = 0; index < values.length; index++) {
            const value = values[index];
            average += this.numberify(value);
        }
        average = average / values.length;
        for (let index = 0; index < values.length; index++) {
            const value = values[index];
            variance += Math.pow(this.numberify(value) - average, 2);
        }
        variance = variance / values.length;
        if (!variance) {
            variance = 0.001;
        }
        max = max + ((average / 100) * 50 + (variance / average) * 3);
        min = min - ((average / 100) * 50 + (variance / average) * 3);
        for (let i = 0; i < precision; i++) {
            const x = ((max - min) * i) / precision + min;
            data.push([
                x,
                this.formulas.normalDistribution(average, variance, x),
            ]);
        }
        return data;
    }
    /**
     * Formats the input number with the specified format of the currently set locale.
     * @param {string | String | number} input - Input number which will be automatically "numberified".
     * @param {string} format - Desired format. Defaults to '0,0.00' (i.e.: 2,000,000.51).
     * @returns {string} Formatted number.
     */
    format(input: string | String | number, format?: string): string {
        const n = this.numberify(input);
        if (!format) {
            const positiveN = Math.abs(n);
            const decimals = positiveN - Math.floor(positiveN);
            if (decimals) {
                format = '0,0.00';
            } else {
                format = '0,0';
            }
        }
        const formatted = this.numeral(n).format(format);
        return formatted;
    }
    /**
     * Returns a number from a non-specified input type between string, number, or String.
     * @param {string | String | number} input - Input value to numberify.
     * @param {boolean} inputIsLocalized - Numberifies assuming the input string is in the current KupMath locale's format.
     * @returns {number} Resulting number or NaN (when not a number).
     */
    numberify(
        input: string | String | number,
        inputIsLocalized?: boolean
    ): number {
        let n = NaN;
        if (inputIsLocalized) {
            n = this.numeral(input).value();
        } else {
            const locale = this.numeral.locale();
            this.numeral.locale(KupMathLocales.en);
            n = this.numeral(input).value();
            this.numeral.locale(locale);
        }
        if (n === null) {
            return NaN;
        }
        return n;
    }
    /**
     * Registers a KupComponent in KupMath, in order to be properly handled whenever the locale changes.
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
}
