import numeral from 'numeral';
import {
    Cell,
    Column,
    DataTable,
    Row,
} from '../../components/kup-data-table/kup-data-table-declarations';
import { KupDebugCategory } from '../kup-debug/kup-debug-declarations';
import type { KupDom } from '../kup-manager/kup-manager-declarations';
import {
    KupDataDatasetOperations,
    KupDataFindCellFilters,
    KupDataFormulas,
    KupDataNewColumn,
} from './kup-data-declarations';
import {
    distinctDataset,
    newDataset,
    rangedDistinctDataset,
    transposeDataset,
} from './kup-data-dataset-helper';
import { KupDatesLocales } from '../kup-dates/kup-dates-declarations';
import { findCell, getCellValue, replaceCell } from './kup-data-cell-helper';
import {
    findColumns,
    hideColumns,
    mergeColumns,
    newColumn,
} from './kup-data-column-helper';
import { findRow } from './kup-data-row-helper';

const dom: KupDom = document.documentElement as KupDom;

/**
 * Handles data operations.
 * @module KupData
 */
export class KupData {
    datasetOperations: KupDataDatasetOperations = null;
    formulas: KupDataFormulas = null;
    /**
     * Initializes KupData.
     */
    constructor() {
        this.datasetOperations = {
            cell: {
                find(
                    dataset: DataTable,
                    filters: KupDataFindCellFilters
                ): Cell[] {
                    return findCell(dataset, filters);
                },
                getValue(dataset: DataTable, columns?: string[]): string[] {
                    return getCellValue(dataset, columns);
                },
                replace(
                    dataset: DataTable,
                    cell: Cell,
                    columns?: string[]
                ): Cell[] {
                    return replaceCell(dataset, cell, columns);
                },
            },
            column: {
                find(
                    dataset: DataTable | Column[],
                    filters: Partial<Column>
                ): Column[] {
                    return findColumns(dataset, filters);
                },
                hide(
                    dataset: DataTable | Column[],
                    columns2hide: string[]
                ): Column[] {
                    return hideColumns(dataset, columns2hide);
                },
                merge(
                    dataset: DataTable,
                    columns2merge: string[],
                    newColumn: Column
                ): Column {
                    return mergeColumns(dataset, columns2merge, newColumn);
                },
                new(
                    dataset: DataTable,
                    operation: string,
                    columns?: string[]
                ): string | Column {
                    return newColumn(dataset, operation, columns);
                },
            },
            row: {
                find(
                    dataset: DataTable,
                    filters: KupDataFindCellFilters
                ): Row[] {
                    return findRow(dataset, filters);
                },
            },
            distinct(
                dataset: DataTable,
                columns?: string[],
                valuesColumn?: Column
            ): DataTable {
                return distinctDataset(dataset, columns, valuesColumn);
            },
            new(dataset: DataTable, newColumns: KupDataNewColumn[]): DataTable {
                return newDataset(dataset, newColumns);
            },
            rangedDistinct(
                dataset: DataTable,
                rangeColumns: KupDataNewColumn[],
                resultingColumn: Column,
                valuesColumn?: Column
            ): DataTable {
                return rangedDistinctDataset(
                    dataset,
                    rangeColumns,
                    resultingColumn,
                    valuesColumn
                );
            },
            transpose(dataset: DataTable, headerColumn?: string): DataTable {
                return transposeDataset(dataset, headerColumn);
            },
        };
        this.formulas = {
            /**
             * Takes a mathematical formula as string in input, with column names between brackets, and returns the result as a number.
             * @param {string} formula - Mathematical operation (i.e.: ([COL1] - [COL2]) * 100 / [COL3]).
             * @param {{ [index: string]: number }} row - Object containing column names as indexes and the related values as keys.
             * @returns {number} Result of the formula.
             */
            custom(formula: string, row: { [index: string]: number }): number {
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
                        'Error while evaluating the following formula!(' +
                            formula +
                            ')',
                        KupDebugCategory.ERROR
                    );
                    return NaN;
                }
            },
            /**
             * Calculates a single Y point of a normal distribution.
             * @param {number} average - Average.
             * @param {number} variance - Variance.
             * @param {number} x - X coordinate.
             * @returns {number} Result.
             */
            normalDistribution(
                average: number,
                variance: number,
                x: number
            ): number {
                return (
                    (1 / Math.sqrt(variance * 2 * Math.PI)) *
                    Math.exp(-Math.pow(x - average, 2) / (2 * variance))
                );
            },
        };
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
     * Returns a number from a non specified input type between string, number, or String.
     * @param {string | String | number} input - Input value to numberify.
     * @param {KupDatesLocales} locale - Input format locale. Defaults to ENGLISH.
     * @returns {number} Resulting number.
     */
    numberify(
        input: string | String | number,
        locale?: KupDatesLocales
    ): number {
        if (typeof input === 'string' || input instanceof String) {
            if (!locale) {
                locale = KupDatesLocales.ENGLISH;
            }
            const numberWithGroupAndDecimalSeparator = 1000.1;
            const decimalSeparator = Intl.NumberFormat(locale)
                .formatToParts(numberWithGroupAndDecimalSeparator)
                .find((part) => part.type === 'decimal').value;
            const groupSeparator = Intl.NumberFormat(locale)
                .formatToParts(numberWithGroupAndDecimalSeparator)
                .find((part) => part.type === 'group').value;
            input = input.replace(new RegExp('\\' + groupSeparator, 'g'), '');
            input = input.replace(
                new RegExp('\\' + decimalSeparator, 'g'),
                '.'
            );
        }
        const n = numeral(input).value();
        if (n === null) {
            return NaN;
        }
        return n;
    }

    format(input: number, locale?: KupDatesLocales): string {
        // TODO pascar da completare
        if (!locale) {
            locale = KupDatesLocales.ENGLISH;
        }
        const numberWithGroupAndDecimalSeparator = 1000.1;
        const decimalSeparator = Intl.NumberFormat(locale)
            .formatToParts(numberWithGroupAndDecimalSeparator)
            .find((part) => part.type === 'decimal').value;
        const groupSeparator = Intl.NumberFormat(locale)
            .formatToParts(numberWithGroupAndDecimalSeparator)
            .find((part) => part.type === 'group').value;
        let customFormat =
            '0' + groupSeparator + '000' + decimalSeparator + '00';
        numeral(input).format(customFormat);
        return '';
    }
}
