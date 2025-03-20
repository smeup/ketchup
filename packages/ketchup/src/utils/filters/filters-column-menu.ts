import { KupDataColumn } from '../../managers/kup-data/kup-data-declarations';
import { getValueForDisplay, getValueForDisplay2 } from '../cell-utils';
import { Filters } from './filters';
import {
    Filter,
    GenericFilter,
    ValueDisplayedValue,
} from './filters-declarations';
/**
 * Filtering algorithms related to column menus.
 * @module FiltersColumnMenu
 * @todo Should contain EVERY column-specific filtering method.
 */
export class FiltersColumnMenu extends Filters {
    /**
     * Gets the value of the filter prop.
     * @param {GenericFilter} filters - Filters of the component.
     * @param {string} column - Name of the column.
     * @returns {string} Value of the filter.
     */
    getTextFilterValue(filters: GenericFilter = {}, column: string): string {
        return this._getTextFilterValue(filters, column, false);
    }
    /**
     * Gets the value of the filter prop, set temporarly.
     * @param {GenericFilter} filters - Filters of the component.
     * @param {string} column - Name of the column.
     * @returns {string} Value of the filter.
     */
    getTextFilterValueTmp(filters: GenericFilter = {}, column: string): string {
        return this._getTextFilterValue(filters, column, true);
    }

    private _getTextFilterValue(
        filters: GenericFilter = {},
        column: string,
        tmp: boolean
    ): string {
        let value: string = '';

        if (filters == null) {
            return value;
        }
        let filter: Filter = filters[column];
        if (filter == null) {
            return value;
        }
        value = tmp ? filter.textFieldTmp : filter.textField;
        return value;
    }

    /**
     * Returns whether a column has filters or not.
     * @param {GenericFilter} filters - Filters of the component.
     * @param {KupDataColumn} column - Name of the column.
     * @returns {boolean} True when a given column has filters.
     */
    hasFiltersForColumn(
        filters: GenericFilter = {},
        column: KupDataColumn
    ): boolean {
        return this._hasFiltersForColumn(filters, column, false);
    }
    /**
     * Returns whether a column has filters or not.
     * @param {GenericFilter} filters - Filters of the component.
     * @param {KupDataColumn} column - Name of the column.
     * @returns {boolean} True when a given column has filters.
     */
    hasFiltersForColumnTmp(
        filters: GenericFilter = {},
        column: KupDataColumn
    ): boolean {
        return this._hasFiltersForColumn(filters, column, true);
    }
    /**
     * Returns whether a column has filters or not.
     * @param {GenericFilter} filters - Filters of the component.
     * @param {KupDataColumn} column - Name of the column.
     * @returns {boolean} True when a given column has filters.
     */
    private _hasFiltersForColumn(
        filters: GenericFilter = {},
        column: KupDataColumn,
        tmp: boolean
    ): boolean {
        if (!column) {
            return false;
        }
        let textfield: string = this._getTextFilterValue(
            filters,
            column.name,
            tmp
        );
        if (textfield != null && textfield.trim() != '') {
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
     * @param {string} column - Name of the column.
     * @returns {Array<string>} Array of checkboxes values.
     */
    getCheckBoxFilterValues(
        filters: GenericFilter = {},
        column: string
    ): ValueDisplayedValue[] {
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
     * Triggers when a new filter checkbox becomes checked.
     * @param {GenericFilter} filters - Filters of the component.
     * @param {string} column - Name of the column.
     * @param {ValueDisplayedValue} newFilter - Added filter.
     */
    addCheckboxFilter(
        filters: GenericFilter = {},
        column: string,
        newFilterItem: ValueDisplayedValue
    ): void {
        if (filters == null) {
            return;
        }
        let filter: Filter = filters[column];
        if (filter == null) {
            filter = {
                textField: '',
                textFieldTmp: '',
                checkBoxes: [],
            };
            filters[column] = filter;
        }
        if (filter.checkBoxes == null) {
            filter.checkBoxes = [];
        }
        if (newFilterItem == null || newFilterItem.value == null) {
            filter.checkBoxes = [];
        } else {
            if (
                !Filters.valuesArrayContainsValue(
                    filter.checkBoxes,
                    newFilterItem.value
                )
            ) {
                filter.checkBoxes[filter.checkBoxes.length] = newFilterItem;
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
    ): void {
        // if remFilter is '' it is a perfectly fine value, explicitly target undefined value
        if (!filters || remFilter == undefined || !filters[column]) {
            return;
        }

        const filter = filters[column];
        filter.checkBoxes = filter.checkBoxes ?? [];

        filter.checkBoxes = filter.checkBoxes.filter(
            (item) => item.value !== remFilter
        );

        if (filter.checkBoxes.length === 0) {
            delete filters[column];
        }
    }

    isColumnNumeric(column: KupDataColumn): boolean {
        return this.isObjNumeric(column.obj);
    }

    setTextFieldFilterValue(
        filters: GenericFilter = {},
        column: string,
        newFilter: string
    ) {
        this._setTextFieldFilterValue(filters, column, newFilter, true);
    }
    private _setTextFieldFilterValue(
        filters: GenericFilter = {},
        column: string,
        newFilter: string,
        tmp: boolean
    ) {
        if (filters == null) {
            return;
        }
        let filter: Filter = filters[column];
        if (filter == null) {
            filter = {
                textField: '',
                textFieldTmp: '',
                checkBoxes: [],
            };
            filters[column] = filter;
        }
        if (tmp) {
            filter.textFieldTmp =
                newFilter != null ? newFilter.trim() : newFilter;
        } else {
            filter.textField = newFilter != null ? newFilter.trim() : newFilter;
        }
    }

    saveTextualFilters(filters: GenericFilter = {}, column: string) {
        this._setTextFieldFilterValue(
            filters,
            column,
            this.getTextFilterValueTmp(filters, column),
            false
        );
    }

    resetTextualFilters(filters: GenericFilter = {}, column: string) {
        this._setTextFieldFilterValue(
            filters,
            column,
            this.getTextFilterValue(filters, column),
            true
        );
    }

    getFilterValueForTooltip(
        filters: GenericFilter = {},
        column: KupDataColumn
    ): string {
        let txtFilter = this.getTextFilterValue(filters, column.name);
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

        separator = '';
        let ris = '';
        chkFilters.forEach((f) => {
            ris += separator + getValueForDisplay2(f, column);
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

    /**
     * Triggers when a filter must be removed, for column.
     * @param {GenericFilter} filters - Filters of the component.
     * @param {string} column - Name of the column.
     */
    removeFilter(filters: GenericFilter = {}, column: string) {
        delete filters[column];
    }
}
