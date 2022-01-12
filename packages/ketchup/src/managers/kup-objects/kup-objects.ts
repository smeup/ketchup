import {
    Cell,
    Column,
    DataTable,
} from '../../components/kup-data-table/kup-data-table-declarations';
import type { Dayjs } from 'dayjs';
import { KupDebugCategory } from '../../managers/kup-debug/kup-debug-declarations';
import { KupLanguageTotals } from '../../managers/kup-language/kup-language-declarations';
import { getColumnByName } from '../../utils/cell-utils';
import { stringToNumber } from '../../utils/utils';
import type { KupDom } from '../kup-manager/kup-manager-declarations';
import type { KupObj, KupObjectsJSON } from './kup-objects-declarations';
import * as objJson from './obj.json';

const dom: KupDom = document.documentElement as KupDom;

/**
 * Handles objects definition and validation.
 * @module KupObjects
 */
export class KupObjects {
    list: KupObjectsJSON;
    /**
     * Initializes KupObjects.
     * @param {KupObjectsJSON} list - Overrides the default obj.json.
     */
    constructor(list?: KupObjectsJSON) {
        this.list = list ? list : objJson['default'];
    }
    /**
     * Checks whether the object can automatically derive columns.
     * @param {KupObj} obj - Object to check.
     * @returns {boolean} True when columns can be automatically derived from the object.
     */
    canHaveAutomaticDerivedColumn(obj: KupObj): boolean {
        if (!this.canObjHaveExtraColumns(obj)) {
            return false;
        }
        return (
            !this.isNumber(obj) &&
            !this.isTime(obj) &&
            !this.isTimestamp(obj) &&
            !this.isPercentage(obj)
        );
    }

    /**
     * Checks whether the objects can have extra columns or not.
     * @param {KupObj} obj - Object to check.
     * @returns {boolean} True when the object has extra columns.
     */
    canObjsHaveExtraColumns(objs: KupObj[]): boolean {
        if (!objs) return false;
        let result: boolean = false;
        for (let i = 0; i < objs.length; i++) {
            result = result || this.canObjHaveExtraColumns(objs[i]);
        }
        return result;
    }

    /**
     * Checks whether the object can have extra columns or not.
     * @param {KupObj} obj - Object to check.
     * @returns {boolean} True when the object has extra columns.
     */
    canObjHaveExtraColumns(obj: KupObj): boolean {
        if (this.isEmptyKupObj(obj)) {
            return false;
        }

        if ((obj.t as string).trim() == '**') {
            return false;
        }
        return (
            !this.isBar(obj) &&
            !this.isButton(obj) &&
            !this.isCheckbox(obj) &&
            !this.isIcon(obj) &&
            !this.isImage(obj) &&
            !this.isLink(obj) &&
            !this.isProgressBar(obj) &&
            !this.isRadio(obj) &&
            !this.isVoCodver(obj) &&
            !this.isChart(obj)
        );
    }

    /**
     * Checks whether the object represents a bar or not.
     * @param {KupObj} obj - Object to check.
     * @returns {boolean} True when the object is a bar.
     */
    isBar(obj: KupObj): boolean {
        if (!obj) return false;
        return 'J4' === obj.t && 'BAR' === obj.p;
    }
    /**
     * Checks whether the object represents a button or not.
     * @param {KupObj} obj - Object to check.
     * @returns {boolean} True when the object is a button.
     */
    isButton(obj: KupObj): boolean {
        if (!obj) return false;
        return 'J4' === obj.t && 'BTN' === obj.p;
    }
    /**
     * Checks whether the object represents a chart or not.
     * @param {KupObj} obj - Object to check.
     * @returns {boolean} True when the object is a chart.
     */
    isChart(obj: KupObj): boolean {
        if (!obj) return false;
        return 'J4' === obj.t && obj.p.toLocaleUpperCase().startsWith('GRA_');
    }
    /**
     * Checks whether the object represents a checkbox or not.
     * @param {KupObj} obj - Object to check.
     * @returns {boolean} True when the object is a checkbox.
     */
    isCheckbox(obj: KupObj): boolean {
        if (!obj) return false;
        return 'V2' === obj.t && 'SI/NO' === obj.p.toUpperCase();
    }
    /**
     * Checks whether the object represents a color or not.
     * @param {KupObj} obj - Object to check.
     * @returns {boolean} True when the object is a color.
     */
    isColor(obj: KupObj): boolean {
        if (!obj) return false;
        return 'J1' === obj.t && 'COL' === obj.p;
    }
    /**
     * Checks whether the object represents a date or not.
     * @param {KupObj} obj - Object to check.
     * @returns {boolean} True when the object is a date.
     */
    isDate(obj: KupObj): boolean {
        if (!obj) return false;
        return 'D8' === obj.t;
    }
    /**
     * Checks whether the object represents an icon or not.
     * @param {KupObj} obj - Object to check.
     * @returns {boolean} True when the object is an icon.
     */
    isIcon(obj: KupObj): boolean {
        if (!obj) return false;
        return 'J4' === obj.t && 'ICO' === obj.p;
    }
    /**
     * Checks whether the object represents an image or not.
     * @param {KupObj} obj - Object to check.
     * @returns {boolean} True when the object is an image.
     */
    isImage(obj: KupObj): boolean {
        if (!obj) return false;
        return 'J4' === obj.t && 'IMG' === obj.p;
    }
    /**
     * Checks whether the object represents an object list or not.
     * @param {KupObj} obj - Object to check.
     * @returns {boolean} True when the object is an object list.
     */
    isKupObjList(obj: KupObj): boolean {
        if (!obj) return false;
        return 'JL' === obj.t;
    }
    /**
     * Checks whether the object represents a link or not.
     * @param {KupObj} obj - Object to check.
     * @returns {boolean} True when the object is a link.
     */
    isLink(obj: KupObj): boolean {
        if (!obj) return false;
        return 'J1' === obj.t && 'URL' === obj.p;
    }
    /**
     * Checks whether the object represents a number or not.
     * @param {KupObj} obj - Object to check.
     * @returns {boolean} True when the object is a number.
     */
    isNumber(obj: KupObj): boolean {
        if (!obj) return false;
        return 'NR' === obj.t;
    }
    /**
     * Checks whether the object represents a password or not.
     * @param {KupObj} obj - Object to check.
     * @returns {boolean} True when the object is a password.
     */
    isPassword(obj: KupObj): boolean {
        if (!obj) return false;
        return 'J1' === obj.t && 'PWD' === obj.p;
    }
    /**
     * Checks whether the object represents a percentage or not.
     * @param {KupObj} obj - Object to check.
     * @returns {boolean} True when the object is a percentage.
     */
    isPercentage(obj: KupObj): boolean {
        if (!obj) return false;
        return 'NRP' === obj.t + obj.p;
    }
    /**
     * Checks whether the object represents a progress bar or not.
     * @param {KupObj} obj - Object to check.
     * @returns {boolean} True when the object is a progress bar.
     */
    isProgressBar(obj: KupObj): boolean {
        if (!obj) return false;
        return 'J4' === obj.t && 'PGB' === obj.p;
    }
    /**
     * Checks whether the object represents a radio button or not.
     * @param {KupObj} obj - Object to check.
     * @returns {boolean} True when the object is a radio button.
     */
    isRadio(obj: KupObj): boolean {
        if (!obj) return false;
        return 'V2' === obj.t && 'RADIO' === obj.p;
    }
    /**
     * Checks whether the object can be identifiable as a string.
     * @param {KupObj} obj - Object to check.
     * @returns {boolean} True when the object can be considered as a string.
     */
    isStringObject(obj: any): boolean {
        if (!obj) return true;

        return (
            !this.isVoCodver(obj) &&
            !this.isIcon(obj) &&
            !this.isImage(obj) &&
            !this.isCheckbox(obj) &&
            !this.isRadio(obj) &&
            !this.isChart(obj)
        );
    }
    /**
     * Checks whether the object represents a text field or not.
     * @param {KupObj} obj - Object to check.
     * @returns {boolean} True when the object is a text field.
     */
    isTextField(obj: KupObj): boolean {
        if (!obj) return false;
        return 'J4' === obj.t && 'TEXTFIELD' === obj.p;
    }
    /**
     * Checks whether the object represents a time or not.
     * @param {KupObj} obj - Object to check.
     * @returns {boolean} True when the object is a time.
     */
    isTime(obj: KupObj): boolean {
        if (!obj) return false;
        return 'I1' === obj.t || 'I2' === obj.t;
    }
    /**
     * Checks whether the object represents a timestamp or not.
     * @param {KupObj} obj - Object to check.
     * @returns {boolean} True when the object is a timestamp.
     */
    isTimestamp(obj: KupObj): boolean {
        if (!obj) return false;
        return 'I3' === obj.t && '2' === obj.p;
    }
    /**
     * Checks whether the object represents a time and handles seconds or not.
     * @param {KupObj} obj - Object to check.
     * @returns {boolean} True when the object is a time and handles seconds.
     */
    isTimeWithSeconds(obj: KupObj): boolean {
        if (!this.isTime(obj)) {
            return false;
        }
        return '2' === obj.p;
    }
    /**
     * Checks whether the object represents a verb or not.
     * @param {KupObj} obj - Object to check.
     * @returns {boolean} True when the object is a verb.
     */
    isVoCodver(obj: KupObj): boolean {
        if (!obj) return false;
        return 'VO' === obj.t && 'COD_VER' === obj.p;
    }
    /**
     * Checks whether the object is null or empty
     * @param {KupObj} obj - Object to check.
     * @returns {boolean} True when the object is null or empty.
     */
    isEmptyKupObj(obj: KupObj): boolean {
        if (!obj) return true;
        return (
            (!obj.t || obj.t.trim() == '') &&
            (!obj.p || obj.p.trim() == '') &&
            (!obj.k || obj.k.trim() == '')
        );
    }
    /**
     * Checks whether the arguments have the same object or not.
     * @param {KupObj[]} objs - Array of KupObj.
     * @returns {boolean} True when it's the same object.
     */
    isSameKupObj(objs: KupObj[]): boolean {
        return objs.every((obj, _, array) => {
            if (!this.isEmptyKupObj(obj)) {
                return obj.t == array[0].t && obj.p == array[0].p;
            } else {
                return false;
            }
        });
    }
    /**
     * Parses a date depending on the object's type.
     * @param {KupObj} obj - Object to check.
     * @returns {Dayjs} Dayjs object.
     */
    parseDate(obj: KupObj): Dayjs {
        if (obj.t === 'D8' && obj.p === '*DMYY') {
            return dom.ketchup.dates.toDayjs(obj.k, 'DDMMYYYY');
        }
        return dom.ketchup.dates.toDayjs(obj.k);
    }
    /**
     * Takes a mathematical formula as string in input, with column names between brackets, and returns the result as a number.
     * @param {string} formula - Mathematical operation (i.e.: ([COL1] - [COL2]) * 100 / [COL3]).
     * @param {{ [index: string]: number }} row - Object containing column names as indexes and the related values as keys.
     * @returns {number} Result of the formula.
     */
    evaluateFormula(formula: string, row: { [index: string]: number }): number {
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
                'kup-objects',
                'Error while evaluating the following formula!(' +
                    formula +
                    ')',
                KupDebugCategory.ERROR
            );
            return NaN;
        }
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
                if (!this.isNumber(col.obj)) {
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
            const value = this.evaluateFormula(formula, formulaRow).toString();
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
}
