/**
 * Interface related to the formulas factory function.
 */
export interface KulMathFormulas {
    custom: (formula: string, row: { [index: string]: number }) => number;
    normalDistribution: (
        average: number,
        variance: number,
        x: number
    ) => number;
}
/**
 * Locales available for KulMath.
 */
export enum KulMathLocales {
    cn = 'chs',
    en = 'en',
    es = 'es',
    it = 'it',
    fr = 'fr',
    pl = 'pl',
    ru = 'ru',
}
/**
 * Interface related to the numbers factory function.
 */
export interface KulMathNumbers {
    toLocaleString: (value: string) => string;
}

export interface NumericFieldFormatOptions {
    integer: number;
    decimal: number;
    allowNegative: boolean;
    group: boolean;
}
