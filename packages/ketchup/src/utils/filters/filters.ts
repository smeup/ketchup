import { KupTagNames } from '../../types/GenericTypes';
import { KupDataTable } from '../../components/kup-data-table/kup-data-table';
import { KupTree } from '../../components/kup-tree/kup-tree';
import {
    KupDatesFormats,
    KupDatesNormalize,
} from '../../managers/kup-dates/kup-dates-declarations';
import { KupDom } from '../../managers/kup-manager/kup-manager-declarations';
import {
    formattedStringToCustomUnformattedStringTime,
    formattedStringToDefaultUnformattedStringTimestamp,
    formattedStringToUnformattedStringNumber,
    isValidFormattedStringNumber,
    isValidFormattedStringTime,
    stringToNumber,
    unformattedStringNumberToNumber,
    isNumber as isNumberThisString,
} from '../utils';
import {
    FilterInterval,
    FILTER_ANALIZER,
    ValueDisplayedValue,
} from './filters-declarations';

const dom: KupDom = document.documentElement as KupDom;

/**
 * Filtering algorithms.
 * @module Filters
 * @todo Should contain EVERY filtering method in common between filtering types (i.e.: global filters and column menu filters).
 */
export class Filters {
    /**
     * Function used to check whether the component is a KupTree or KupDataTable.
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @returns {comp is KupTree} Returns true when the component is KupTree.
     */
    static isTree(comp: KupDataTable | KupTree): comp is KupTree {
        return (comp as KupTree).rootElement.tagName === KupTagNames.TREE;
    }

    isObjFiltrableByInterval(obj): boolean {
        if (dom.ketchup.objects.isDate(obj)) {
            return true;
        }
        if (dom.ketchup.objects.isTime(obj)) {
            return true;
        }
        if (dom.ketchup.objects.isTimestamp(obj)) {
            return true;
        }
        if (dom.ketchup.objects.isNumber(obj)) {
            return true;
        }
        return false;
    }

    normalizeValue(value: string, smeupObj: any): string {
        let newValue = value != null ? value.trim() : value;
        if (newValue == null || newValue == '' || smeupObj == null) {
            return newValue;
        }
        if (dom.ketchup.objects.isDate(smeupObj)) {
            if (dom.ketchup.dates.isValid(value, KupDatesFormats.ISO_DATE)) {
                return newValue;
            }
            if (dom.ketchup.dates.isValid(value)) {
                return dom.ketchup.dates.format(
                    dom.ketchup.dates.normalize(value, KupDatesNormalize.DATE),
                    KupDatesFormats.ISO_DATE
                );
            }
        } else if (dom.ketchup.objects.isTime(smeupObj)) {
            let manageSeconds = dom.ketchup.objects.isTimeWithSeconds(smeupObj);
            if (
                dom.ketchup.dates.isValid(
                    value,
                    manageSeconds
                        ? KupDatesFormats.ISO_TIME
                        : KupDatesFormats.ISO_TIME_WITHOUT_SECONDS
                )
            ) {
                return newValue;
            }
            if (isValidFormattedStringTime(value, manageSeconds)) {
                return formattedStringToCustomUnformattedStringTime(
                    value,
                    manageSeconds
                        ? KupDatesFormats.ISO_TIME
                        : KupDatesFormats.ISO_TIME_WITHOUT_SECONDS,
                    manageSeconds
                );
            }
        } else if (dom.ketchup.objects.isTimestamp(smeupObj)) {
            if (
                dom.ketchup.dates.isValid(value, KupDatesFormats.ISO_DATE_TIME)
            ) {
                return newValue;
            }
            if (isValidFormattedStringTime(value, true)) {
                return formattedStringToDefaultUnformattedStringTimestamp(
                    value
                );
            }
        } else if (dom.ketchup.objects.isNumber(smeupObj)) {
            if (
                isValidFormattedStringNumber(value, smeupObj ? smeupObj.p : '')
            ) {
                return formattedStringToUnformattedStringNumber(
                    value,
                    smeupObj ? smeupObj.p : ''
                );
            }
        }
        return newValue;
    }

    /**
     * Given a filter value, check if is a negative filter
     * @param filterValue the filter value to use for check
     */
    filterIsNegative(filterValue: string) {
        const analyzedFilter = filterValue.match(FILTER_ANALIZER);
        const filterIsNegative: boolean = analyzedFilter
            ? analyzedFilter[1].indexOf('!') >= 0
            : false;
        return filterIsNegative;
    }
    /**
     * Given a value and a filter value, returns if that value matches the filter.
     *
     * Web filters can also be expressions: by putting strings between single quotes (') it's possible to activate filter expressions.
     * Valid syntax:
     * 'filter' = search for exact phrase;
     * '' = match when value is empty;
     * 'filter%' = match when a string starts with "filter";
     * '%filter' = match when a string ends with "filter";
     * '%filter%' = match when a string contains "filter".
     *
     * It is also possible to negate the expression by prepending "!" in front of the expression.
     * For example: !'' = value in the cell must not be empty.
     *
     * With no expression set, the filter is by default set to '%filter%'.
     *
     * @param value - The current value to check.
     * @param filterValue - The value of the current filter.
     * @returns false if value or filterValue are empty; 
                true if value contains filterValue; 
                true if value matches special filter created on filterValue; 
                false otherwise.
     */
    isFilterCompliantForValue(value: string, filterValue: string): boolean {
        if (value == null) {
            return false;
        }
        if (filterValue == null) {
            return false;
        }

        const _filterIsNegative: boolean = this.filterIsNegative(filterValue);

        // checks if the value of the filter is contained inside value of the object
        // Or is if the filter is a special filter to be matched.
        if (
            value.toLowerCase().includes(filterValue.toLowerCase()) ||
            this.matchSpecialFilter(
                value.toLowerCase(),
                filterValue.toLowerCase().match(FILTER_ANALIZER),
                true
            )
        ) {
            // the element matches the field filter
            if (_filterIsNegative) {
                return false;
            }
            return true;
        }
        if (_filterIsNegative) {
            return true;
        }
        return false;
    }

    /**
     * Given a value and a filter value, returns if that value matches the filter.
     *
     * Web filters can also be expressions: by putting strings between single quotes (') it's possible to activate filter expressions.
     * Valid syntax:
     * 'filter' = search for exact phrase;
     * '' = match when value is empty;
     * 'filter%' = match when a string starts with "filter";
     * '%filter' = match when a string ends with "filter";
     * '%filter%' = match when a string contains "filter".
     *
     * It is also possible to negate the expression by prepending "!" in front of the expression.
     * For example: !'' = value in the cell must not be empty.
     *
     * With no expression set, the filter is by default set to '%filter%'.
     *
     * @param value - The current value to check.
     * @param parsedFilter - The value of the current filter.
     * @param ignoreNegativeFlag = false - When set to true, the matcher will ignore the (!) operator; useful for global filter.
     * @returns True if the filter is empty and the value of the cell is empty, false otherwise.
     */
    matchSpecialFilter(
        value: string,
        parsedFilter: RegExpMatchArray | null,
        ignoreNegativeFlag: boolean = false
    ): boolean {
        if (parsedFilter != null) {
            // endsWith and startWith are not supported by IE 11
            // Check here https://www.w3schools.com/jsref/jsref_endswith.asp
            const toRet: boolean =
                (parsedFilter[3] === '' && !value.trim()) ||
                (!parsedFilter[2] &&
                    parsedFilter[4] &&
                    value.startsWith(parsedFilter[3])) ||
                (parsedFilter[2] &&
                    !parsedFilter[4] &&
                    value.endsWith(parsedFilter[3])) ||
                (!parsedFilter[2] &&
                    !parsedFilter[4] &&
                    value === parsedFilter[3]) ||
                (parsedFilter[2] &&
                    parsedFilter[4] &&
                    value.indexOf(parsedFilter[3]) >= 0);
            return !ignoreNegativeFlag
                ? parsedFilter[1].indexOf('!') < 0
                    ? toRet
                    : !toRet
                : toRet;
        }
        return false;
    }

    isFilterCompliantForSimpleValue(
        valueToCheck: string,
        obj: any,
        filterValue: string,
        interval: string[]
    ) {
        if (valueToCheck == null) {
            return false;
        }

        filterValue = this.normalizeValue(filterValue, obj);
        let value = valueToCheck;

        let from: string = '';
        let to: string = '';
        if (interval != null) {
            from = interval[FilterInterval.FROM];
            to = interval[FilterInterval.TO];
        }
        let checkByRegularExpression = true;
        if (dom.ketchup.objects.isNumber(obj)) {
            value = unformattedStringNumberToNumber(value, obj ? obj.p : '');
            let valueNumber: number = stringToNumber(value);
            if (from != '') {
                if (isNumberThisString(from)) {
                    checkByRegularExpression = false;
                    let fromNumber: number = stringToNumber(from);
                    if (valueNumber < fromNumber) {
                        return false;
                    }
                } else {
                    filterValue = from;
                }
            }
            if (to != '') {
                if (isNumberThisString(to)) {
                    checkByRegularExpression = false;
                    let toNumber: number = stringToNumber(to);
                    if (valueNumber > toNumber) {
                        return false;
                    }
                } else {
                    filterValue = to;
                }
            }
        }
        if (
            dom.ketchup.objects.isDate(obj) ||
            dom.ketchup.objects.isTime(obj) ||
            dom.ketchup.objects.isTimestamp(obj)
        ) {
            let valueDate: Date = null;

            let defaultFormat = KupDatesFormats.ISO_DATE;
            if (dom.ketchup.objects.isDate(obj)) {
                defaultFormat = KupDatesFormats.ISO_DATE;
            } else if (dom.ketchup.objects.isTime(obj)) {
                defaultFormat = dom.ketchup.objects.isTimeWithSeconds(obj)
                    ? KupDatesFormats.ISO_TIME
                    : KupDatesFormats.ISO_TIME_WITHOUT_SECONDS;
            } else if (dom.ketchup.objects.isTimestamp(obj)) {
                defaultFormat = KupDatesFormats.ISO_DATE_TIME;
            }

            if (dom.ketchup.dates.isValid(value, defaultFormat, true)) {
                valueDate = dom.ketchup.dates.toDate(value, defaultFormat);
            }

            if (from != '') {
                if (
                    valueDate != null &&
                    dom.ketchup.dates.isValid(from, defaultFormat, true)
                ) {
                    checkByRegularExpression = false;
                    let fromDate: Date = dom.ketchup.dates.toDate(
                        from,
                        defaultFormat
                    );
                    if (valueDate < fromDate) {
                        return false;
                    }
                } else {
                    filterValue = from;
                }
            }
            if (to != '') {
                if (
                    valueDate != null &&
                    dom.ketchup.dates.isValid(to, defaultFormat, true)
                ) {
                    checkByRegularExpression = false;
                    let toDate: Date = dom.ketchup.dates.toDate(
                        to,
                        defaultFormat
                    );
                    if (valueDate > toDate) {
                        return false;
                    }
                } else {
                    filterValue = to;
                }
            }
            if (
                !dom.ketchup.dates.isValid(filterValue, defaultFormat) &&
                !dom.ketchup.dates.isValid(filterValue)
            ) {
                value = dom.ketchup.dates.format(value);
            }
        }
        if (checkByRegularExpression) {
            return this.isFilterCompliantForValue(value, filterValue);
        }
        return true;
    }

    static valuesArrayContainsValue(
        values: ValueDisplayedValue[],
        value: string
    ): boolean {
        return Filters.indexOfValueInValuesArray(values, value) >= 0;
    }

    static indexOfValueInValuesArray(
        values: ValueDisplayedValue[],
        value: string
    ): number {
        if (values == null || values.length < 1) {
            return -1;
        }
        for (let i = 0; i < values.length; i++) {
            if (values[i].value == value) {
                return i;
            }
        }
        return -1;
    }
}
