import { KupDataTable } from '../../components/kup-data-table/kup-data-table';
import {
    Column,
    Filter,
    GenericFilter,
} from '../../components/kup-data-table/kup-data-table-declarations';
import {
    addCheckBoxFilterValue,
    getIntervalTextFieldFilterValue,
    isColumnFiltrableByInterval,
    normalizeValue,
    removeCheckBoxFilterValue,
    setTextFieldFilterValue,
} from '../../components/kup-data-table/kup-data-table-helper';
import { KupTree } from '../../components/kup-tree/kup-tree';
import { isTree } from './column-menu';
import { FilterInterval } from './column-menu-declarations';
/**
 * Triggered when the text filter changes.
 * @param {KupDataTable | KupTree}  comp - Component using the column menu.
 * @param {string} value - New value of the filter.
 * @param {Column} column - Column of the menu.
 */
export function textFilterChange(
    comp: KupDataTable | KupTree,
    value: string,
    column: Column
): void {
    if (!isTree(comp)) {
        comp.resetCurrentPage();
        let newFilter = '';
        if (value) {
            newFilter = normalizeValue(value.trim(), column.obj);
        }
        const newFilters: GenericFilter = { ...comp.filters };
        setTextFieldFilterValue(newFilters, column.name, newFilter);
        comp.filters = newFilters;
    }
}
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
 * Triggered when the checkbox list changes.
 * @param {KupDataTable | KupTree}  comp - Component using the column menu.
 * @param {boolean} checked - State of the changed checkbox.
 * @param {Column} column - Column of the menu.
 * @param {string} filterValue - Value used to filter.
 */
export function checkboxFilterChange(
    comp: KupDataTable | KupTree,
    checked: boolean,
    column: Column,
    filterValue: string
): void {
    if (!isTree(comp)) {
        comp.resetCurrentPage();

        const newFilters = { ...comp.filters };

        if (checked || filterValue == null) {
            addCheckBoxFilterValue(newFilters, column.name, filterValue);
        } else {
            removeCheckBoxFilterValue(newFilters, column.name, filterValue);
        }

        comp.filters = newFilters;
    }
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
