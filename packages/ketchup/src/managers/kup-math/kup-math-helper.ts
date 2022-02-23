import { KupDebugCategory } from '../kup-debug/kup-debug-declarations';
import { KupDom } from '../kup-manager/kup-manager-declarations';

const dom: KupDom = document.documentElement as KupDom;

/**
 * Takes a mathematical formula as string in input, with column names between brackets, and returns the result as a number.
 * @param {string} formula - Mathematical operation (i.e.: ([COL1] - [COL2]) * 100 / [COL3]).
 * @param {{ [index: string]: number }} row - Object containing column names as indexes and the related values as keys.
 * @returns {number} Result of the formula.
 */
export function customFormula(
    formula: string,
    row: { [index: string]: number }
): number {
    const keys = Object.keys(row);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let value: number = row[key];
        if (value != null && !isNaN(value)) {
            let re: RegExp = new RegExp(key, 'g');
            formula = formula.replace(re, value.toString());
        }
    }
    formula = formula.replace(/[\[\]']+/g, '');
    try {
        const result = Function(
            '"use strict"; return (' + formula + ')'
        )() as number;
        return result;
    } catch (e) {
        dom.ketchup.debug.logMessage(
            'kup-data',
            'Error while evaluating the following formula!(' + formula + ')',
            KupDebugCategory.ERROR
        );
        return NaN;
    }
}
/**
 * Calculates a single Y point of a normal distribution.
 * @param {number} average - Average.
 * @param {number} variance - Variance.
 * @param {number} x - X coordinate.
 * @returns {number} Result.
 */
export function normalDistributionFormula(
    average: number,
    variance: number,
    x: number
): number {
    return (
        (1 / Math.sqrt(variance * 2 * Math.PI)) *
        Math.exp(-Math.pow(x - average, 2) / (2 * variance))
    );
}
