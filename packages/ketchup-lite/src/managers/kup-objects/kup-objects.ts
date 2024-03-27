import type { Dayjs } from 'dayjs';
import type { GenericObject } from '../../types/GenericTypes';
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
        return 'NR' === obj.t || 'NP' === obj.t;
    }
    /**
     * Checks whether the object represents a positive number or not.
     * @param {KupObj} obj - Object to check.
     * @returns {boolean} True when the object is a positive number.
     */
    isPositiveNumber(obj: KupObj): boolean {
        if (!obj) return false;
        return 'NP' === obj.t;
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
     * Checks whether the object represents a switch or not.
     * @param {KupObj} obj - Object to check.
     * @returns {boolean} True when the object is a switch.
     */
    isSwitch(obj: KupObj): boolean {
        if (!obj) return false;
        return 'V2' === obj.t && 'ONOFF' === obj.p;
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
        if (this.isEmptyJsObject(obj)) {
            return true;
        }
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
     * Check whether two JS objects are deeply equal. When the arguments aren't objects, they are tested directly for equity.
     * @param {GenericObject} object1 - First object to test.
     * @param {GenericObject} object2 - Second object to test.
     * @returns {boolean} True if the objects are equal.
     * @see https://dmitripavlutin.com/how-to-compare-objects-in-javascript/#4-deep-equality
     */
    deepEqual(object1: any, object2: any): boolean {
        if (!(this.isJsObject(object1) && this.isJsObject(object2))) {
            return object1 === object2;
        }
        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (const key of keys1) {
            const val1 = object1[key];
            const val2 = object2[key];
            const areObjects = this.isJsObject(val1) && this.isJsObject(val2);
            if (
                (areObjects && !this.deepEqual(val1, val2)) ||
                (!areObjects && val1 !== val2)
            ) {
                return false;
            }
        }
        return true;
    }
    /**
     * Check whether the argument is a JavaScript object.
     * @param {GenericObject} object - Object to test.
     * @returns {boolean} True if the argument is a JavaScript object.
     * @see https://dmitripavlutin.com/how-to-compare-objects-in-javascript/#4-deep-equality
     */
    isJsObject(object: any): boolean {
        return object != null && typeof object === 'object';
    }
    /**
     * Check whether the object is empty or not.
     * @param {GenericObject} object - Object to check.
     * @returns {boolean} True if the object is empty.
     */
    isEmptyJsObject(obj: GenericObject): boolean {
        return (
            !obj ||
            obj === null ||
            (Object.keys(obj).length === 0 && obj.constructor === Object)
        );
    }
}
