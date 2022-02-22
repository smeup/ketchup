/**
 * Interface related to the formulas factory function.
 */
export interface KupMathFormulas {
    custom: (formula: string, row: { [index: string]: number }) => number;
    normalDistribution: (
        average: number,
        variance: number,
        x: number
    ) => number;
}
/**
 * Locales available for KupMath.
 */
export enum KupMathLocales {
    cn = 'chs',
    en = 'en',
    es = 'es',
    it = 'it',
    fr = 'fr',
    pl = 'pl',
    ru = 'ru',
}
