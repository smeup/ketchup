import type { Dayjs } from 'dayjs';
import type { GenericObject } from '../../types/GenericTypes';
import type { KulDom } from '../kul-manager/kul-manager-declarations';
import type { KulObj, KulObjectsJSON } from './kul-objects-declarations';
import * as objJson from './obj.json';

const dom: KulDom = document.documentElement as KulDom;

/**
 * Handles objects definition and validation.
 * @module KulObjects
 */
export class KulObjects {
    list: KulObjectsJSON;
    /**
     * Initializes KulObjects.
     * @param {KulObjectsJSON} list - Overrides the default obj.json.
     */
    constructor(list?: KulObjectsJSON) {
        this.list = list ? list : objJson['default'];
    }
    /**
     * Checks whether the object can automatically derive columns.
     * @param {KulObj} obj - Object to check.
     * @returns {boolean} True when columns can be automatically derived from the object.
     */
    canHaveAutomaticDerivedColumn(obj: KulObj): boolean {
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
     * @param {KulObj} obj - Object to check.
     * @returns {boolean} True when the object has extra columns.
     */
    canObjsHaveExtraColumns(objs: KulObj[]): boolean {
        if (!objs) return false;
        let result: boolean = false;
        for (let i = 0; i < objs.length; i++) {
            result = result || this.canObjHaveExtraColumns(objs[i]);
        }
        return result;
    }

    /**
     * Checks whether the object can have extra columns or not.
     * @param {KulObj} obj - Object to check.
     * @returns {boolean} True when the object has extra columns.
     */
    canObjHaveExtraColumns(obj: KulObj): boolean {
        if (this.isEmptyKulObj(obj)) {
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
     * @param {KulObj} obj - Object to check.
     * @returns {boolean} True when the object is a bar.
     */
    isBar(obj: KulObj): boolean {
        if (!obj) return false;
        return 'J4' === obj.t && 'BAR' === obj.p;
    }
    /**
     * Checks whether the object represents a button or not.
     * @param {KulObj} obj - Object to check.
     * @returns {boolean} True when the object is a button.
     */
    isButton(obj: KulObj): boolean {
        if (!obj) return false;
        return 'J4' === obj.t && 'BTN' === obj.p;
    }
    /**
     * Checks whether the object represents a chart or not.
     * @param {KulObj} obj - Object to check.
     * @returns {boolean} True when the object is a chart.
     */
    isChart(obj: KulObj): boolean {
        if (!obj) return false;
        return 'J4' === obj.t && obj.p.toLocaleUpperCase().startsWith('GRA_');
    }
    /**
     * Checks whether the object represents a checkbox or not.
     * @param {KulObj} obj - Object to check.
     * @returns {boolean} True when the object is a checkbox.
     */
    isCheckbox(obj: KulObj): boolean {
        if (!obj) return false;
        return 'V2' === obj.t && 'SI/NO' === obj.p.toUpperCase();
    }
    /**
     * Checks whether the object represents a color or not.
     * @param {KulObj} obj - Object to check.
     * @returns {boolean} True when the object is a color.
     */
    isColor(obj: KulObj): boolean {
        if (!obj) return false;
        return 'J1' === obj.t && 'COL' === obj.p;
    }
    /**
     * Checks whether the object represents a date or not.
     * @param {KulObj} obj - Object to check.
     * @returns {boolean} True when the object is a date.
     */
    isDate(obj: KulObj): boolean {
        if (!obj) return false;
        return 'D8' === obj.t;
    }
    /**
     * Checks whether the object represents an icon or not.
     * @param {KulObj} obj - Object to check.
     * @returns {boolean} True when the object is an icon.
     */
    isIcon(obj: KulObj): boolean {
        if (!obj) return false;
        return 'J4' === obj.t && 'ICO' === obj.p;
    }
    /**
     * Checks whether the object represents an image or not.
     * @param {KulObj} obj - Object to check.
     * @returns {boolean} True when the object is an image.
     */
    isImage(obj: KulObj): boolean {
        if (!obj) return false;
        return 'J4' === obj.t && 'IMG' === obj.p;
    }
    /**
     * Checks whether the object represents an object list or not.
     * @param {KulObj} obj - Object to check.
     * @returns {boolean} True when the object is an object list.
     */
    isKulObjList(obj: KulObj): boolean {
        if (!obj) return false;
        return 'JL' === obj.t;
    }
    /**
     * Checks whether the object represents a link or not.
     * @param {KulObj} obj - Object to check.
     * @returns {boolean} True when the object is a link.
     */
    isLink(obj: KulObj): boolean {
        if (!obj) return false;
        return 'J1' === obj.t && 'URL' === obj.p;
    }
    /**
     * Checks whether the object represents a number or not.
     * @param {KulObj} obj - Object to check.
     * @returns {boolean} True when the object is a number.
     */
    isNumber(obj: KulObj): boolean {
        if (!obj) return false;
        return 'NR' === obj.t || 'NP' === obj.t;
    }
    /**
     * Checks whether the object represents a positive number or not.
     * @param {KulObj} obj - Object to check.
     * @returns {boolean} True when the object is a positive number.
     */
    isPositiveNumber(obj: KulObj): boolean {
        if (!obj) return false;
        return 'NP' === obj.t;
    }
    /**
     * Checks whether the object represents a password or not.
     * @param {KulObj} obj - Object to check.
     * @returns {boolean} True when the object is a password.
     */
    isPassword(obj: KulObj): boolean {
        if (!obj) return false;
        return 'J1' === obj.t && 'PWD' === obj.p;
    }
    /**
     * Checks whether the object represents a percentage or not.
     * @param {KulObj} obj - Object to check.
     * @returns {boolean} True when the object is a percentage.
     */
    isPercentage(obj: KulObj): boolean {
        if (!obj) return false;
        return 'NRP' === obj.t + obj.p;
    }
    /**
     * Checks whether the object represents a progress bar or not.
     * @param {KulObj} obj - Object to check.
     * @returns {boolean} True when the object is a progress bar.
     */
    isProgressBar(obj: KulObj): boolean {
        if (!obj) return false;
        return 'J4' === obj.t && 'PGB' === obj.p;
    }
    /**
     * Checks whether the object represents a radio button or not.
     * @param {KulObj} obj - Object to check.
     * @returns {boolean} True when the object is a radio button.
     */
    isRadio(obj: KulObj): boolean {
        if (!obj) return false;
        return 'V2' === obj.t && 'RADIO' === obj.p;
    }
    /**
     * Checks whether the object can be identifiable as a string.
     * @param {KulObj} obj - Object to check.
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
     * @param {KulObj} obj - Object to check.
     * @returns {boolean} True when the object is a switch.
     */
    isSwitch(obj: KulObj): boolean {
        if (!obj) return false;
        return 'V2' === obj.t && 'ONOFF' === obj.p;
    }
    /**
     * Checks whether the object represents a text field or not.
     * @param {KulObj} obj - Object to check.
     * @returns {boolean} True when the object is a text field.
     */
    isTextField(obj: KulObj): boolean {
        if (!obj) return false;
        return 'J4' === obj.t && 'TEXTFIELD' === obj.p;
    }
    /**
     * Checks whether the object represents a time or not.
     * @param {KulObj} obj - Object to check.
     * @returns {boolean} True when the object is a time.
     */
    isTime(obj: KulObj): boolean {
        if (!obj) return false;
        return 'I1' === obj.t || 'I2' === obj.t;
    }
    /**
     * Checks whether the object represents a timestamp or not.
     * @param {KulObj} obj - Object to check.
     * @returns {boolean} True when the object is a timestamp.
     */
    isTimestamp(obj: KulObj): boolean {
        if (!obj) return false;
        return 'I3' === obj.t && '2' === obj.p;
    }
    /**
     * Checks whether the object represents a time and handles seconds or not.
     * @param {KulObj} obj - Object to check.
     * @returns {boolean} True when the object is a time and handles seconds.
     */
    isTimeWithSeconds(obj: KulObj): boolean {
        if (!this.isTime(obj)) {
            return false;
        }
        return '2' === obj.p;
    }
    /**
     * Checks whether the object represents a verb or not.
     * @param {KulObj} obj - Object to check.
     * @returns {boolean} True when the object is a verb.
     */
    isVoCodver(obj: KulObj): boolean {
        if (!obj) return false;
        return 'VO' === obj.t && 'COD_VER' === obj.p;
    }
    /**
     * Checks whether the object is null or empty
     * @param {KulObj} obj - Object to check.
     * @returns {boolean} True when the object is null or empty.
     */
    isEmptyKulObj(obj: KulObj): boolean {
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
     * @param {KulObj[]} objs - Array of KulObj.
     * @returns {boolean} True when it's the same object.
     */
    isSameKulObj(objs: KulObj[]): boolean {
        return objs.every((obj, _, array) => {
            if (!this.isEmptyKulObj(obj)) {
                return obj.t == array[0].t && obj.p == array[0].p;
            } else {
                return false;
            }
        });
    }
    /**
     * Parses a date depending on the object's type.
     * @param {KulObj} obj - Object to check.
     * @returns {Dayjs} Dayjs object.
     */
    parseDate(obj: KulObj): Dayjs {
        if (obj.t === 'D8' && obj.p === '*DMYY') {
            return dom.ketchupLite.dates.toDayjs(obj.k, 'DDMMYYYY');
        }
        return dom.ketchupLite.dates.toDayjs(obj.k);
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
    isEmptyJsObject(obj: unknown): boolean {
        return (
            !obj ||
            obj === null ||
            (Object.keys(obj).length === 0 && obj.constructor === Object)
        );
    }
}
