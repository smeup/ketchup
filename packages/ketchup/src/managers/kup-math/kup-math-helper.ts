import Mexp from 'math-expression-evaluator';
import { KupDebugCategory } from '../kup-debug/kup-debug-declarations';
import { KupDom } from '../kup-manager/kup-manager-declarations';
import { getRegExpFromString } from '../../utils/utils';

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
    // Replace formula column names with the actual values
    Object.entries(row).forEach(([formulaColumnName, value]) => {
        if (value == null) {
            dom.ketchup.debug.logMessage(
                'kup-data',
                `Evaluating the formula ("${formula}"): ${formulaColumnName} is null`,
                KupDebugCategory.WARNING
            );
            return;
        }
        if (isNaN(value)) {
            dom.ketchup.debug.logMessage(
                'kup-data',
                `Evaluating the formula ("${formula}"): ${formulaColumnName} is not a number.`,
                KupDebugCategory.WARNING
            );
            return;
        }

        const sanitizedValue =
            value == null || isNaN(value) ? 'NaN' : value.toString();
        const regex = getRegExpFromString(formulaColumnName, 'g');
        formula = formula.replace(regex, `(${value.toString()})`);
    });

    // Remove any leftover brackets (in case there are unmatched ones)
    formula = formula.replace(/[\[\]']+/g, '');

    // Evaluate the formula
    try {
        // Use a simple parser to handle comma and negative numbers properly
        const sanitizedExpression = formula
            // Replace commas with dots
            .replace(/,/g, '.')
            .replace(
                /(^|[+\-*/(])(-\d+(\.\d+)?)/g,
                (_, before, number) => `${before}(${number})`
            );
        const mexp = new Mexp();
        const lexedFormula = mexp.lex(sanitizedExpression);
        const postFixedFormula = mexp.toPostfix(lexedFormula);
        const result = mexp.postfixEval(postFixedFormula);
        if (result === Infinity) {
            throw Error('Result yielded infinity');
        }
        return result;
    } catch (error: any) {
        dom.ketchup.debug.logMessage(
            'kup-data',
            `Error while evaluating the formula ("${formula}"): ${error.message}`,
            KupDebugCategory.WARNING
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
