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
    NumericFieldFormatOptions,
} from './kup-math-declarations';
import { customFormula, normalDistributionFormula } from './kup-math-helper';
import { getRegExpFromString } from '../../utils/utils';

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
            return Number(value).toLocaleString(this.locale, {
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
     * @param {boolean} inputIsLocalized Numberifies assuming the input string is in the current KupMath locale's format.
     * @returns {string} Formatted number.
     */
    format(
        input: string | String | number,
        format?: string,
        inputIsLocalized?: boolean
    ): string {
        const n = this.numberify(input, inputIsLocalized);
        if (!format) {
            const positiveN = Math.abs(n);
            const decimals = positiveN - Math.floor(positiveN);
            if (decimals) {
                format = '0,0.00';
            } else {
                format = '0,0';
            }
        }
        return this.numeral(n).format(format);
    }
    /**
     * Create the pattern string for format a number
     * @param {boolean} thousandPoint - show thousandPoint
     * @param {number} decimals - number of decimals
     * @returns {string} - formatter pattern
     */
    createFormatPattern(thousandPoint?: boolean, decimals?: number): string {
        var format = '0';
        if (thousandPoint) {
            format += ',0';
        }
        if (decimals && decimals > 0) {
            format += '.';
            for (let i = 0; i < decimals; i++) {
                format += '0';
            }
        }
        return format;
    }

    /**
     * Returns the decimal separator of current browser
     * @returns {string} current decimal separator, by locale
     */
    decimalSeparator(): string {
        const numberWithGroupAndDecimalSeparator = 1000.1;
        return Intl.NumberFormat(this.locale)
            .formatToParts(numberWithGroupAndDecimalSeparator)
            .find((part) => part.type === 'decimal').value;
    }

    /**
     * Returns the group separator of current browser
     * @returns {string} current group separator, by locale
     */
    groupSeparator(): string {
        const numberWithGroupAndDecimalSeparator = 1000.1;
        return Intl.NumberFormat(this.locale)
            .formatToParts(numberWithGroupAndDecimalSeparator)
            .find((part) => part.type === 'group').value;
    }

    /**
     * Checks if an input string matches options, for desired formatted decimal number (integer digits, decimal digits)
     * @param {string} value the input value to check
     * @param {NumericFieldFormatOptions} options options for customize the check
     * @returns {RegExpMatchArray} an object from applying the regular expression for check
     */
    matchNumericValueWithOptions(
        value: string,
        options: NumericFieldFormatOptions
    ): RegExpMatchArray {
        value = value.replace(
            getRegExpFromString(this.groupSeparator(), 'g'),
            ''
        );
        // see https://github.com/24eme/jquery-input-number-format.git
        let found: RegExpMatchArray = undefined;
        let integerPartSuffix = '+';
        if (options.integer && options.integer > 0) {
            integerPartSuffix = '{0,' + options.integer + '}';
        }

        let regexp: string = '^[0-9]' + integerPartSuffix;
        if (options.allowNegative) {
            regexp = '^-{0,1}[0-9]' + integerPartSuffix;
        }
        if (options.decimal && options.decimal > 0) {
            regexp +=
                '([' +
                this.decimalSeparator() +
                '][0-9]{0,' +
                options.decimal +
                '})?';
            let regexpObj = new RegExp(regexp + '$');
            found = value.match(regexpObj);
            if (!found) {
                regexp =
                    '^[' +
                    this.decimalSeparator() +
                    '][0-9]{0,' +
                    options.decimal +
                    '}';
                regexpObj = new RegExp(regexp + '$');
                found = value.match(regexpObj);
            }
        } else {
            let regexpObj = new RegExp(regexp + '$');
            found = value.match(regexpObj);
        }
        return found;
    }

    /**
     * Returns a number from a non-specified input type between string, number, or String.
     * @param {string | String | number} input - Input value to numberify.
     * @param {boolean} inputIsLocalized - Numberifies assuming the input string is in the current KupMath locale's format.
     * @param {string} type - type of number for calculate suffix
     * @param {string} decFmt - decimal format for the input value.
     * @returns {number} Resulting number or NaN (when not a number).
     */
    numberify(
        input: string | String | number,
        inputIsLocalized?: boolean,
        type?: string,
        decFmt?: string
    ): number {
        if (typeof input != 'number') {
            if (type) {
                let suffix = this.getNumericValueSuffix(type);
                if (suffix != '') {
                    input = input.replace(getRegExpFromString(suffix, 'g'), '');
                }
            }
            if (!decFmt) {
                decFmt = inputIsLocalized ? this.decimalSeparator() : '.';
            }
            const groupSeparator = decFmt == '.' ? ',' : '.';
            input = input.replace(getRegExpFromString(groupSeparator, 'g'), '');
            if (decFmt != '.') {
                input = input.replace(getRegExpFromString(decFmt, 'g'), '.');
            }
        }
        let n = NaN;

        const locale = this.numeral.locale();
        this.numeral.locale(KupMathLocales.en);
        n = this.numeral(input).value();
        this.numeral.locale(locale);
        if (n === null) {
            return NaN;
        }
        return n;
    }
    /**
     * Returns a number from a non-specified input type between string, number, or String.
     * If value in is null, undefined or blank, returns 0
     * @param {string} input number as string, formatted by locale US, decimal separator . (like java decimal numbers)
     * @param {boolean} inputIsLocalized - Numberifies assuming the input string is in the current KupMath locale's format.
     * @param {string} type - type of number for calculate suffix
     * @returns {number} Resulting number
     **/
    numberifySafe(
        input: string,
        inputIsLocalized?: boolean,
        type?: string,
        decFmt?: string
    ): number {
        if (!input || input == null || input.trim() == '') {
            input = '0';
        }
        return this.numberify(input, inputIsLocalized, type, decFmt);
    }

    /**
     * Checks if input is a valid number
     * @param {any} value input value to check
     * @returns {boolean} if input value is valid number
     */
    isNumber(value: any): boolean {
        //return typeof value === 'number';
        return !isNaN(value);
    }

    /**
     * Checks if string in input is a valid formatted number
     * @param {string} value number as string, formatted by actual browser locale
     * @param {string} type - type of number for calculate suffix
     * @returns {boolean} true if number string in input is a valid number
     */
    isStringNumber(value: string, type: string): boolean {
        if (value == null || value.trim() == '') {
            return false;
        }

        let tmpStr = this.formattedStringToNumberString(value, type);

        if (this.isNumber(tmpStr)) {
            return true;
        }
        return false;
    }

    /**
     * Gets number as string, formatted by locale US, decimal separator . (like java decimal numbers)
     * @param {string} input number as string, formatted by actual browser locale (maybe)
     * @param {string} type - type of number for calculate suffix
     * @param {string} decSeparator - decimal serparator of input string
     * @returns {string} number as string, formatted by locale US, decimal separator . (like java decimal numbers), without group separator
     **/
    formattedStringToNumberString(
        input: string,
        type: string,
        decSeparator?: string
    ): string {
        return numberStringToNumberString(input, type, decSeparator, this);

        function numberStringToNumberString(
            input: string,
            type: string,
            decFmt: string,
            kupMath: KupMath
        ): string {
            if (!input || input == null || input.trim() == '') {
                return '';
            }
            let unf: number = kupMath.numberifySafe(
                input,
                !decFmt || decFmt != '.',
                type,
                decFmt
            );
            if (unf == null || isNaN(unf)) {
                return input;
            }

            return numberToString(unf, -1, 'en-US', kupMath);
        }

        function numberToString(
            input: number,
            decimals: number,
            locale: string,
            kupMath: KupMath
        ): string {
            if (input == null) {
                input = 0;
            }
            if (decimals == null || decimals == -1) {
                decimals = kupMath.countDecimals(input);
            }
            let n: Number = Number(input);
            let f: Intl.NumberFormatOptions =
                decimals > -1
                    ? {
                          minimumFractionDigits: decimals,
                          maximumFractionDigits: decimals,
                          useGrouping: false,
                      }
                    : { useGrouping: false };
            return n.toLocaleString(locale, f);
        }
    }
    /**
     * Gets the number of decimals for current number
     * @param {number} value numer input
     * @returns {number} the number of decimals
     */
    countDecimals(value: number): number {
        if (Math.floor(value) === value) return 0;
        let stringValue = value.toString().split('.')[1];
        if (stringValue) {
            return stringValue.length ?? 0;
        } else {
            return 0;
        }
    }

    /**
     * Gets the suffix for number, by type
     * @param {string} type - type of number for calculate suffix
     * @returns {string} suffix for number, by type
     **/
    getNumericValueSuffix(type: string): string {
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
     * Gets the number as string, formatted by actual browser locale, with suffix by type
     * @param {number} input number
     * @param {number} decimals number of significant decimal digits for output
     * @param {string} type - type of number for calculate suffix
     * @returns {string} number as string, formatted by actual browser locale, with suffix by type
     **/
    numberToFormattedString(
        input: number,
        decimals: number,
        type: string
    ): string {
        if (input == null || isNaN(input)) {
            return '';
        }
        if (decimals == null || decimals == -1) {
            decimals = this.countDecimals(input);
        }
        let nstr = this.format(input, this.createFormatPattern(true, decimals));
        nstr = nstr + this.getNumericValueSuffix(type);
        return nstr;
    }

    /**
     * Gets the maximum number size that can be inserted in textfield, counting commas when numbers are more than 4 and a point for decimals
     * @param {value} string value with commas, numbers and point for decimals
     * @param {precision} number total numbers without commas and point for decimals
     * @param {options} NumericFieldFormatOptions options with additional info
     * @returns {number} maximum size of charactes that can fit in field
     */
    getMaximumNumbersSize(
        value: string,
        precision: number,
        options: NumericFieldFormatOptions
    ) {
        const formattedValue = Number(value).toLocaleString(
            navigator.language,
            {
                minimumFractionDigits: options.decimal,
            }
        );
        let commas = 0;

        if (formattedValue) {
            const commmasMatches = formattedValue.match(/(?<=\d),(?=\d)/g);
            commas = commmasMatches ? commmasMatches.length : 0;
        }

        return precision + commas + 1;
    }

    /**
     * Gets the number as string, formatted by actual browser locale, with suffix by type
     * @param {string} input number as string, formatted by locale US, decimal separator . (like java decimal numbers)
     * @param {number} decimals number of significant decimal digits for output
     * @param {string} type - type of number for calculate suffix
     * @param {string} decSeparator decimal separator for output string
     * @returns {string} number as string, formatted by actual browser locale (or using decimal separator param), with suffix by type
     **/
    numberStringToFormattedString(
        input: string,
        decimals: number,
        type: string,
        decSeparator?: string
    ): string {
        let value = this.numberToFormattedString(
            this.numberifySafe(input),
            decimals,
            type
        );

        if (!decSeparator) {
            return value;
        }
        const browserDecSeparator = this.decimalSeparator();
        if (browserDecSeparator == decSeparator) {
            return value;
        }
        const browserGroupSeparator = this.groupSeparator();
        value = value.replace(
            getRegExpFromString(browserGroupSeparator, 'g'),
            ''
        );
        value = value.replace(
            getRegExpFromString(browserDecSeparator, 'g'),
            decSeparator
        );

        return value;
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
