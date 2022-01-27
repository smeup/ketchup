import {
    Cell,
    Column,
    DataTable,
} from '../../components/kup-data-table/kup-data-table-declarations';
import { KupDebugCategory } from '../kup-debug/kup-debug-declarations';
import { KupLanguageTotals } from '../kup-language/kup-language-declarations';
import { getColumnByName } from '../../utils/cell-utils';
import { stringToNumber } from '../../utils/utils';
import type { KupDom } from '../kup-manager/kup-manager-declarations';
import {
    KupDataDatasetOperations,
    KupDataFindCellFilters,
    KupDataFormulas,
    KupDataNewColumn,
} from './kup-data-declarations';
import {
    distinctDataset,
    findCell,
    getCellValue,
    mergeColumns,
    newDataset,
    rangedDistinctDataset,
    replaceCell,
} from './kup-data-helper';

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
                ): DataTable {
                    return replaceCell(dataset, cell, columns);
                },
            },
            column: {
                merge(
                    dataset: DataTable,
                    columns2merge: string[],
                    newColumn: Column
                ): DataTable {
                    return mergeColumns(dataset, columns2merge, newColumn);
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
     * This method is used to apply math formulas to columns.
     * @param {DataTable} data - The dataset that must be updated with the new columns.
     * @param {string} operation - Mathematical operation to apply (i.e.: "sum", "average", ([COL1] - [COL2]) * 100 / [COL3]).
     * @param {string[]} columns - Column names. If missing, they will be extracted from the formula.
     * @returns {string|Column} Returns the new column created or a string containing the error message if something went wrong.
     */
    applyFormulaToColumns(
        data: DataTable,
        operation: string,
        columns?: string[]
    ): string | Column {
        if (!columns) {
            columns = [];
        }
        if (columns.length === 0) {
            const names = operation.split('[');
            for (let i = 1; i < names.length; i++) {
                columns.push(names[i].split(']')[0]);
            }
        }
        if (columns.length === 0) {
            const message =
                "Can't apply math formulas without columns!(" + columns + ')';
            dom.ketchup.debug.logMessage(
                this,
                message,
                KupDebugCategory.WARNING
            );
            return message;
        }
        const titles: string[] = [];
        const formulaRow: { [index: string]: number } = {};
        let firstColumn: Column = null;
        let formula = '';
        switch (operation) {
            case KupLanguageTotals.AVERAGE:
                formula = `(${columns.join(' + ')}) / ${columns.length}`;
                break;
            case KupLanguageTotals.DIFFERENCE:
                formula = columns.join(' - ');
                break;
            case KupLanguageTotals.PRODUCT:
                formula = columns.join(' * ');
                break;
            case KupLanguageTotals.SUM:
                formula = columns.join(' + ');
                break;
            default:
                formula = operation;
        }
        for (let index = 0; index < data.columns.length; index++) {
            const col = data.columns[index];
            if (columns.includes(col.name)) {
                titles[columns.indexOf(col.name)] = col.title;
                if (!dom.ketchup.objects.isNumber(col.obj)) {
                    const message =
                        "Can't apply math formulas on non-numerical columns!(" +
                        columns +
                        ')';
                    dom.ketchup.debug.logMessage(
                        this,
                        message,
                        KupDebugCategory.WARNING
                    );
                    return message;
                }
            }
            if (columns[0] === col.name) {
                firstColumn = col;
            }
            if (col.resultOf && col.resultOf === formula) {
                const message =
                    'This mathematical operation on these columns was already performed!(' +
                    formula +
                    ')';
                dom.ketchup.debug.logMessage(
                    this,
                    message,
                    KupDebugCategory.WARNING
                );
                return message;
            }
        }
        let prog = 0;
        let newName = 'MATH_';
        while (getColumnByName(data.columns, newName + prog)) {
            prog++;
        }
        newName = newName + prog;
        const newObj = firstColumn.obj;
        let newTitle = formula;
        for (let i = 0; i < columns.length; i++) {
            const column = columns[i];
            let re: RegExp = new RegExp(column, 'g');
            newTitle = newTitle.replace(re, titles[i]);
        }
        data.rows.forEach((row) => {
            const cells = row.cells;
            let base: Cell = null;
            if (cells) {
                for (let index = 0; index < columns.length; index++) {
                    const column = columns[index];
                    const cell = cells[column];
                    if (cell) {
                        if (!base) {
                            base = cell;
                        }
                        formulaRow[column] = stringToNumber(cell.value);
                    }
                }
            }
            const value = this.formulas.custom(formula, formulaRow).toString();
            cells[newName] = {
                ...base,
                displayedValue: null,
                obj: { ...newObj, k: value },
                value: value,
            };
        });
        const newColumn: Column = {
            ...firstColumn,
            name: newName,
            title: newTitle,
            obj: newObj,
            resultOf: formula,
        };
        data.columns.splice(
            data.columns.indexOf(firstColumn) + 1,
            0,
            newColumn
        );
        return newColumn;
    }
    /**
     * Calculates the normal distribution on a set of values.
     * @param {string[]} values - Array of values.
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
     * @returns {number} Resulting number.
     */
    numberify(input: string | String | number): number {
        return typeof input === 'string' || input instanceof String
            ? parseFloat(
                  (input as String).valueOf()
                      ? input.valueOf()
                      : (input as string)
              )
            : input;
    }
}
