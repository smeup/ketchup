import { Column } from '../../components/kup-data-table/kup-data-table-declarations';
import { getValueForDisplay } from '../cell-utils';
import { Filters } from './filters';
import { Filter, FilterInterval, GenericFilter } from './filters-declarations';
/**
 * Filtering algorithms related to column menus.
 * @module FiltersColumnMenu
 * @todo Should contain EVERY column-specific filtering method.
 */
export class FiltersColumnMenu extends Filters {
    /**
     * Gets the value of the filter prop.
     * @param {GenericFilter} filters - Filters of the component.
     * @param {Column} column - Name of the column.
     * @returns {string} Value of the filter.
     */
    getTextFilterValue(filters: GenericFilter = {}, column: string): string {
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
    hasFiltersForColumn(filters: GenericFilter = {}, column: Column): boolean {
        if (!column) {
            return false;
        }
        let textfield: string = this.getTextFilterValue(filters, column.name);
        if (textfield != null && textfield.trim() != '') {
            return true;
        }
        if (this.hasIntervalTextFieldFilterValues(filters, column)) {
            return true;
        }
        let checkboxes = this.getCheckBoxFilterValues(filters, column.name);
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
    getCheckBoxFilterValues(
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
    hasIntervalTextFieldFilterValues(
        filters: GenericFilter = {},
        column: Column
    ): boolean {
        if (column == null) {
            return false;
        }
        if (!this.isColumnFiltrableByInterval(column)) {
            return false;
        }
        let intervalFrom = this.getIntervalTextFieldFilterValue(
            filters,
            column.name,
            FilterInterval.FROM
        );
        if (intervalFrom != null && intervalFrom.trim() != '') {
            return true;
        }
        let intervalTo = this.getIntervalTextFieldFilterValue(
            filters,
            column.name,
            FilterInterval.TO
        );
        if (intervalTo != null && intervalTo.trim() != '') {
            return true;
        }
        return false;
    }
    /**
     * Triggers when a new filter checkbox becomes checked.
     * @param {GenericFilter} filters - Filters of the component.
     * @param {string} column - Name of the column.
     * @param {string} newFilter - Added filter.
     */
    addCheckboxFilter(
        filters: GenericFilter = {},
        column: string,
        newFilter: string
    ): void {
        if (filters == null) {
            return;
        }
        let filter: Filter = filters[column];
        if (filter == null) {
            filter = { textField: '', checkBoxes: [], interval: null };
            filters[column] = filter;
        }
        if (filter.checkBoxes == null) {
            filter.checkBoxes = [];
        }
        if (newFilter == null) {
            filter.checkBoxes = [];
        } else {
            if (!filter.checkBoxes.includes(newFilter)) {
                filter.checkBoxes[filter.checkBoxes.length] = newFilter.trim();
            }
        }
    }
    /**
     * Triggers when a filter checkbox becomes unchecked.
     * @param {GenericFilter} filters - Filters of the component.
     * @param {string} column - Name of the column.
     * @param {string} remFilter - Removed filter.
     */
    removeCheckboxFilter(
        filters: GenericFilter = {},
        column: string,
        remFilter: string
    ) {
        if (filters == null) {
            return;
        }
        let filter: Filter = filters[column];
        if (filter == null) {
            return;
        }
        if (filter.checkBoxes == null) {
            filter.checkBoxes = [];
        }
        let index = filter.checkBoxes.indexOf(remFilter.trim());
        if (index >= 0) {
            let chs = [];
            for (let i = 0; i < filter.checkBoxes.length; i++) {
                if (i != index) {
                    chs[chs.length] = filter.checkBoxes[i];
                }
            }
            filter.checkBoxes = [...chs];
        }
    }

    isColumnFiltrableByInterval(column: Column): boolean {
        return this.isObjFiltrableByInterval(column.obj);
    }

    getIntervalTextFieldFilterValues(
        filters: GenericFilter = {},
        column: Column
    ): Array<string> {
        if (!this.hasIntervalTextFieldFilterValues(filters, column)) {
            return ['', ''];
        }

        let values = [
            this.getIntervalTextFieldFilterValue(
                filters,
                column.name,
                FilterInterval.FROM
            ),
            this.getIntervalTextFieldFilterValue(
                filters,
                column.name,
                FilterInterval.TO
            ),
        ];
        return values;
    }

    getIntervalTextFieldFilterValue(
        filters: GenericFilter = {},
        column: string,
        index: FilterInterval
    ): string {
        let value = '';

        if (filters == null) {
            return value;
        }
        let filter: Filter = filters[column];
        if (filter == null) {
            return value;
        }
        if (filter.interval == null) {
            return value;
        }
        value = filter.interval[index];
        return value;
    }

    setTextFieldFilterValue(
        filters: GenericFilter = {},
        column: string,
        newFilter: string
    ) {
        if (filters == null) {
            return;
        }
        let filter: Filter = filters[column];
        if (filter == null) {
            filter = { textField: '', checkBoxes: [], interval: null };
            filters[column] = filter;
        }
        filter.textField = newFilter != null ? newFilter.trim() : newFilter;
    }

    setIntervalTextFieldFilterValue(
        filters: GenericFilter = {},
        column: string,
        newFilter: string,
        index: FilterInterval
    ) {
        if (filters == null) {
            return;
        }
        let filter: Filter = filters[column];
        if (filter == null) {
            filter = { textField: '', checkBoxes: [], interval: null };
            filters[column] = filter;
        }
        if (filter.interval == null) {
            filter.interval = [];
            filter.interval.push('', '');
        }
        filter.interval[index] =
            newFilter != null ? newFilter.trim() : newFilter;
    }

    getFilterValueForTooltip(
        filters: GenericFilter = {},
        column: Column
    ): string {
        let txtFilter = this.getTextFilterValue(filters, column.name);
        let interval = this.getIntervalTextFieldFilterValues(filters, column);
        let chkFilters = this.getCheckBoxFilterValues(filters, column.name);

        let separator = '';

        let txtFiterRis = getValueForDisplay(
            txtFilter,
            column.obj,
            column.decimals
        );
        if (txtFilter != '') {
            separator = ' AND ';
        }
        if (interval[FilterInterval.FROM] != '') {
            txtFiterRis +=
                separator +
                '(>= ' +
                getValueForDisplay(
                    interval[FilterInterval.FROM],
                    column.obj,
                    column.decimals
                ) +
                ')';
            separator = ' AND ';
        }
        if (interval[FilterInterval.TO] != '') {
            txtFiterRis +=
                separator +
                '(<= ' +
                getValueForDisplay(
                    interval[FilterInterval.TO],
                    column.obj,
                    column.decimals
                ) +
                ')';
            separator = ' AND ';
        }

        separator = '';
        let ris = '';
        chkFilters.forEach((f) => {
            ris +=
                separator + getValueForDisplay(f, column.obj, column.decimals);
            separator = ' OR ';
        });

        if (ris != '') {
            ris = '(' + ris + ')';
            if (txtFiterRis != '') {
                ris = ' AND ' + ris;
            }
        }
        ris = txtFiterRis + ris;
        return ris;
    }
}
