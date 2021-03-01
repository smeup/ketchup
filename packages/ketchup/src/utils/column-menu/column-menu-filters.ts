import {
    Column,
    Filter,
    GenericFilter,
} from '../../components/kup-data-table/kup-data-table-declarations';
import {
    getIntervalTextFieldFilterValue,
    isColumnFiltrableByInterval,
} from '../../components/kup-data-table/kup-data-table-helper';
import { FilterInterval } from './column-menu-declarations';
/**
 * Gets the value of the filter prop.
 * @param {GenericFilter} filters - Filters of the component.
 * @param {Column} column - Name of the column.
 * @returns {string} Value of the filter.
 */
export function getTextFilterValue(
    filters: GenericFilter = {},
    column: string
): string {
    let value: string = '';

    if (filters == null) {
        return value;
    }
    let filter: Filter = filters[column];
    if (filter == null) {
        return value;
    }
    value = filter.textField;
    return value;
}
/**
 * Returns whether a column has filters or not.
 * @param {GenericFilter} filters - Filters of the component.
 * @param {Column} column - Name of the column.
 * @returns {boolean} True when a given column has filters.
 */
export function hasFiltersForColumn(
    filters: GenericFilter = {},
    column: Column
): boolean {
    if (!column) {
        return false;
    }
    let textfield: string = getTextFilterValue(filters, column.name);
    if (textfield != null && textfield.trim() != '') {
        return true;
    }
    if (hasIntervalTextFieldFilterValues(filters, column)) {
        return true;
    }
    let checkboxes = getCheckBoxFilterValues(filters, column.name);
    if (checkboxes == null || checkboxes.length < 1) {
        return false;
    }
    return true;
}
/**
 * Returns the values of column menu's checkboxes.
 * @param {GenericFilter} filters - Filters of the component.
 * @param {Column} column - Name of the column.
 * @returns {Array<string>} Array of checkboxes values.
 */
export function getCheckBoxFilterValues(
    filters: GenericFilter = {},
    column: string
): Array<string> {
    let values = [];
    if (filters == null) {
        return values;
    }
    let filter: Filter = filters[column];
    if (filter == null) {
        return values;
    }
    if (filter.checkBoxes == null) {
        return values;
    }
    values = filter.checkBoxes;
    return values;
}
/**
 * Returns whether a text field should be a date or time picker.
 * @param {GenericFilter} filters - Filters of the component.
 * @param {Column} column - Name of the column.
 * @returns {boolean} True when the text field is a date or time picker.
 */
export function hasIntervalTextFieldFilterValues(
    filters: GenericFilter = {},
    column: Column
): boolean {
    if (column == null) {
        return false;
    }
    if (!isColumnFiltrableByInterval(column)) {
        return false;
    }
    let intervalFrom = getIntervalTextFieldFilterValue(
        filters,
        column.name,
        FilterInterval.FROM
    );
    if (intervalFrom != null && intervalFrom.trim() != '') {
        return true;
    }
    let intervalTo = getIntervalTextFieldFilterValue(
        filters,
        column.name,
        FilterInterval.TO
    );
    if (intervalTo != null && intervalTo.trim() != '') {
        return true;
    }
    return false;
}
