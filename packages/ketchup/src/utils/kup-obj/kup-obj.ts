import type { KupDom } from '../kup-manager/kup-manager-declarations';
import { KupObject } from './kup-obj-declarations';
import * as objJson from './obj.json';

const dom: KupDom = document.documentElement as KupDom;

/**
 * Handles objects definition and validation.
 * @module KupObj
 */
export class KupObj {
    list: JSON =
        dom.ketchupInit && dom.ketchupInit.obj && dom.ketchupInit.obj.list
            ? dom.ketchupInit.obj.list
            : objJson['default'];
    /**
     * Checks whether the object represents a bar or not.
     * @param {KupObject} kupObj - Object to check.
     * @returns {boolean} True when the object is a bar.
     */
    isBar(kupObj: KupObject): boolean {
        if (!kupObj) return false;
        return 'J4' === kupObj.t && 'BAR' === kupObj.p;
    }
    /**
     * Checks whether the object represents a button or not.
     * @param {KupObject} kupObj - Object to check.
     * @returns {boolean} True when the object is a button.
     */
    isButton(kupObj: KupObject): boolean {
        if (!kupObj) return false;
        return 'J4' === kupObj.t && 'BTN' === kupObj.p;
    }
    /**
     * Checks whether the object represents a chart or not.
     * @param {KupObject} kupObj - Object to check.
     * @returns {boolean} True when the object is a chart.
     */
    isChart(kupObj: KupObject): boolean {
        if (!kupObj) return false;
        return (
            'J4' === kupObj.t && kupObj.p.toLocaleUpperCase().startsWith('GRA_')
        );
    }
    /**
     * Checks whether the object represents a checkbox or not.
     * @param {KupObject} kupObj - Object to check.
     * @returns {boolean} True when the object is a checkbox.
     */
    isCheckbox(kupObj: KupObject): boolean {
        if (!kupObj) return false;
        return 'V2' === kupObj.t && 'SI/NO' === kupObj.p.toUpperCase();
    }
    /**
     * Checks whether the object represents a color or not.
     * @param {KupObject} kupObj - Object to check.
     * @returns {boolean} True when the object is a color.
     */
    isColor(kupObj: KupObject): boolean {
        if (!kupObj) return false;
        return 'J1' === kupObj.t && 'COL' === kupObj.p;
    }
    /**
     * Checks whether the object represents a date or not.
     * @param {KupObject} kupObj - Object to check.
     * @returns {boolean} True when the object is a date.
     */
    isDate(kupObj: KupObject): boolean {
        if (!kupObj) return false;
        return 'D8' === kupObj.t;
    }
    /**
     * Checks whether the object represents an icon or not.
     * @param {KupObject} kupObj - Object to check.
     * @returns {boolean} True when the object is an icon.
     */
    isIcon(kupObj: KupObject): boolean {
        if (!kupObj) return false;
        return 'J4' === kupObj.t && 'ICO' === kupObj.p;
    }
    /**
     * Checks whether the object represents an image or not.
     * @param {KupObject} kupObj - Object to check.
     * @returns {boolean} True when the object is an image.
     */
    isImage(kupObj: KupObject): boolean {
        if (!kupObj) return false;
        return 'J4' === kupObj.t && 'IMG' === kupObj.p;
    }
    /**
     * Checks whether the object represents an object list or not.
     * @param {KupObject} kupObj - Object to check.
     * @returns {boolean} True when the object is an object list.
     */
    isKupObjectList(kupObj: KupObject): boolean {
        if (!kupObj) return false;
        return 'JL' === kupObj.t;
    }
    /**
     * Checks whether the object represents a link or not.
     * @param {KupObject} kupObj - Object to check.
     * @returns {boolean} True when the object is a link.
     */
    isLink(kupObj: KupObject): boolean {
        if (!kupObj) return false;
        return 'J1' === kupObj.t && 'URL' === kupObj.p;
    }
    /**
     * Checks whether the object represents a number or not.
     * @param {KupObject} kupObj - Object to check.
     * @returns {boolean} True when the object is a number.
     */
    isNumber(kupObj: KupObject): boolean {
        if (!kupObj) return false;
        return 'NR' === kupObj.t;
    }
    /**
     * Checks whether the object represents a password or not.
     * @param {KupObject} kupObj - Object to check.
     * @returns {boolean} True when the object is a password.
     */
    isPassword(kupObj: KupObject): boolean {
        if (!kupObj) return false;
        return 'J1' === kupObj.t && 'PWD' === kupObj.p;
    }
    /**
     * Checks whether the object represents a percentage or not.
     * @param {KupObject} kupObj - Object to check.
     * @returns {boolean} True when the object is a percentage.
     */
    isPercentage(kupObj: KupObject): boolean {
        if (!kupObj) return false;
        const obj = kupObj.t + kupObj.p;
        return 'NRP' === obj;
    }
    /**
     * Checks whether the object represents a progress bar or not.
     * @param {KupObject} kupObj - Object to check.
     * @returns {boolean} True when the object is a progress bar.
     */
    isProgressBar(kupObj: KupObject): boolean {
        if (!kupObj) return false;
        return 'J4' === kupObj.t && 'PGB' === kupObj.p;
    }
    /**
     * Checks whether the object represents a radio button or not.
     * @param {KupObject} kupObj - Object to check.
     * @returns {boolean} True when the object is a radio button.
     */
    isRadio(kupObj: KupObject): boolean {
        if (!kupObj) return false;
        return 'V2' === kupObj.t && 'RADIO' === kupObj.p;
    }
    /**
     * Checks whether the object represents a text field or not.
     * @param {KupObject} kupObj - Object to check.
     * @returns {boolean} True when the object is a text field.
     */
    isTextField(kupObj: KupObject): boolean {
        if (!kupObj) return false;
        return 'J4' === kupObj.t && 'TEXTFIELD' === kupObj.p;
    }
    /**
     * Checks whether the object represents a time or not.
     * @param {KupObject} kupObj - Object to check.
     * @returns {boolean} True when the object is a time.
     */
    isTime(kupObj: KupObject): boolean {
        if (!kupObj) return false;
        return 'I1' === kupObj.t || 'I2' === kupObj.t;
    }
    /**
     * Checks whether the object represents a timestamp or not.
     * @param {KupObject} kupObj - Object to check.
     * @returns {boolean} True when the object is a timestamp.
     */
    isTimestamp(kupObj: KupObject): boolean {
        if (!kupObj) return false;
        return 'I3' === kupObj.t && '2' === kupObj.p;
    }
    /**
     * Checks whether the object represents a time and handles seconds or not.
     * @param {KupObject} kupObj - Object to check.
     * @returns {boolean} True when the object is a time and handles seconds.
     */
    isTimeWithSeconds(kupObj: KupObject): boolean {
        if (!this.isTime(kupObj)) {
            return false;
        }
        return '2' === kupObj.p;
    }
    /**
     * Checks whether the object represents a verb or not.
     * @param {KupObject} kupObj - Object to check.
     * @returns {boolean} True when the object is a verb.
     */
    isVoCodver(kupObj: KupObject): boolean {
        if (!kupObj) return false;
        return 'VO' === kupObj.t && 'COD_VER' === kupObj.p;
    }
}
