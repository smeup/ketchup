import { SortMode } from '../components/kup-data-table/kup-data-table-declarations';
import {
    stringToNumber,
    unformattedStringToFormattedStringNumber,
    unformattedStringToFormattedStringTime,
    unformattedStringToFormattedStringTimestamp,
} from './utils';
import { ValueDisplayedValue } from './filters/filters-declarations';
import { KupDom } from '../managers/kup-manager/kup-manager-declarations';
import { KupDatesFormats } from '../managers/kup-dates/kup-dates-declarations';
import {
    KupDataCell,
    KupDataColumn,
} from '../managers/kup-data/kup-data-declarations';

const dom: KupDom = document.documentElement as KupDom;

// -------------
// COMMONS
// -------------

export function getCellValueForDisplay(
    column: KupDataColumn,
    cell: KupDataCell
): string {
    if (cell != null) {
        if (cell.displayedValue != null) {
            return cell.displayedValue;
        }
    }
    let formattedValue = _getCellValueForDisplay(cell.value, column, cell);
    if (cell != null) {
        cell.displayedValue = formattedValue;
    }
    return formattedValue;
}

export function getValueForDisplay2(
    values: ValueDisplayedValue,
    column?: KupDataColumn
): string {
    if (values == null) {
        return '';
    }
    if (values.displayedValue == null || values.displayedValue.trim() == '') {
        values.displayedValue = _getCellValueForDisplay(
            values.value,
            column,
            null
        );
    }
    return values.displayedValue;
}

export function formatToNumber(cell: KupDataCell): number {
    if (cell.obj) {
        return dom.ketchup.math.numberify(cell.obj.k);
    }

    return dom.ketchup.math.numberify(cell.value);
}

function _getCellValueForDisplay(
    value,
    column: KupDataColumn,
    cell: KupDataCell
): string {
    let obj = column != null ? column.obj : null;
    if (cell != null) {
        obj = cell.obj ? cell.obj : obj;
    }
    return getValueForDisplay(
        value,
        obj,
        column != null ? column.decimals : null
    );
}

export function getValueForDisplay(value, obj, decimals: number): string {
    if (value == null || value.trim() == '') {
        return value;
    }
    if (dom.ketchup.objects.isNumber(obj)) {
        return unformattedStringToFormattedStringNumber(
            value,
            decimals ? decimals : -1,
            obj ? obj.p : ''
        );
    }
    if (
        dom.ketchup.objects.isDate(obj) &&
        dom.ketchup.dates.isValid(value, KupDatesFormats.ISO_DATE)
    ) {
        return dom.ketchup.dates.format(value);
    }
    if (dom.ketchup.objects.isTime(obj)) {
        return unformattedStringToFormattedStringTime(
            value,
            dom.ketchup.objects.isTimeWithSeconds(obj),
            obj.t + obj.p
        );
    }
    if (dom.ketchup.objects.isTimestamp(obj)) {
        return unformattedStringToFormattedStringTimestamp(value);
    }
    return value;
}

export function getColumnByName(
    columns: KupDataColumn[],
    name: string
): KupDataColumn {
    if (columns == null) {
        return null;
    }
    for (let column of columns) {
        if (column.name === name) {
            return column;
        }
    }

    return null;
}

export function compareCell(
    cell1: KupDataCell,
    cell2: KupDataCell,
    sortMode: SortMode
): number {
    return compareValues(
        cell1.obj,
        cell1.value,
        cell2.obj,
        cell2.value,
        sortMode
    );
}

export function compareValues(
    obj1: any,
    value1: any,
    obj2: any,
    value2: any,
    sortMode: SortMode
): number {
    const sm = sortMode === 'A' ? 1 : -1;

    if (obj1 == null || obj2 == null) {
        return sm * localCompareAsInJava(value1, value2);
    }

    // If either the type or the parameter of the current object are not equal.
    if (!(obj1.t === obj2.t && obj1.p === obj2.p)) {
        let compare = localCompareAsInJava(obj1.t, obj2.t);
        if (compare === 0) {
            compare = localCompareAsInJava(obj1.p, obj2.p);
        }
        return compare * sm;
    }

    let s1: string = value1;
    let s2: string = value2;

    if (s1 == s2) {
        return 0;
    }

    if (s1 == '') {
        return sm * -1;
    }

    if (s2 == '') {
        return sm * 1;
    }

    let v1: any = s1;
    let v2: any = s2;
    if (dom.ketchup.objects.isNumber(obj1)) {
        v1 = stringToNumber(s1);
        v2 = stringToNumber(s2);
    } else if (dom.ketchup.objects.isDate(obj1)) {
        v1 = dom.ketchup.dates.toDate(
            dom.ketchup.dates.format(s1, KupDatesFormats.ISO_DATE)
        );
        v2 = dom.ketchup.dates.toDate(
            dom.ketchup.dates.format(s2, KupDatesFormats.ISO_DATE)
        );
    } else if (dom.ketchup.objects.isTime(obj1)) {
        let manageSeconds = dom.ketchup.objects.isTimeWithSeconds(obj1);
        v1 = dom.ketchup.dates.toDate(
            dom.ketchup.dates.format(
                s1,
                manageSeconds
                    ? KupDatesFormats.ISO_TIME
                    : KupDatesFormats.ISO_TIME_WITHOUT_SECONDS
            )
        );
        v2 = dom.ketchup.dates.toDate(
            dom.ketchup.dates.format(
                s2,
                manageSeconds
                    ? KupDatesFormats.ISO_TIME
                    : KupDatesFormats.ISO_TIME_WITHOUT_SECONDS
            )
        );
    } else if (dom.ketchup.objects.isTimestamp(obj1)) {
        v1 = dom.ketchup.dates.toDate(
            dom.ketchup.dates.format(s1, KupDatesFormats.ISO_DATE_TIME)
        );
        v2 = dom.ketchup.dates.toDate(
            dom.ketchup.dates.format(s2, KupDatesFormats.ISO_DATE_TIME)
        );
    }
    if (v1 > v2) {
        return sm * 1;
    }
    if (v1 < v2) {
        return sm * -1;
    }
    return 0;
}

/**
 * Given two strings to compare, the functions decides which string comes before the other or if they are equal.
 * This is meant as a replacement for the JavaScript function localCompare() which produces a slightly different result from
 * the Java version of compareTo().
 *
 * Re-implemented from java source method compareTo() of java.lang.String
 * @param t1 firstString the first string to be compared
 * @param t2 anotherString the another string to be compared to the first one
 * @returns the value 0 if the anotherString is equal to
 *          firstString; a value less than 0 if firstString
 *          is lexicographically less than the anotherString; and a
 *          value greater than 0 if firstString is
 *          lexicographically greater than the anotherString.
 */
function localCompareAsInJava(t1: string, t2: string): number {
    let t1Length = t1 == null ? 0 : t1.length;
    let t2Length = t2 == null ? 0 : t2.length;
    const lim = Math.min(t1Length, t2Length);

    let k = 0;
    while (k < lim) {
        const c1 = t1[k];
        const c2 = t2[k];
        if (c1 !== c2) {
            return c1.charCodeAt(0) - c2.charCodeAt(0);
        }
        k++;
    }
    return t1Length - t2Length;
}
