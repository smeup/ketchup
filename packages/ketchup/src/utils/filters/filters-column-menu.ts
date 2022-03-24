import { KupDataColumn } from '../../managers/kup-data/kup-data-declarations';
import { getValueForDisplay, getValueForDisplay2 } from '../cell-utils';
import { Filters } from './filters';
import {
    Filter,
    FilterInterval,
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
        if (this._hasIntervalTextFieldFilterValues(filters, column, tmp)) {
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
     * Returns whether a text field should be a date or time picker.
     * @param {GenericFilter} filters - Filters of the component.
     * @param {KupDataColumn} column - Name of the column.
     * @returns {boolean} True when the text field is a date or time picker.
     */
    hasIntervalTextFieldFilterValues(
        filters: GenericFilter = {},
        column: KupDataColumn
    ): boolean {
        return this._hasIntervalTextFieldFilterValues(filters, column, false);
    }

    hasIntervalTextFieldFilterValuesTmp(
        filters: GenericFilter = {},
        column: KupDataColumn
    ): boolean {
        return this._hasIntervalTextFieldFilterValues(filters, column, true);
    }

    private _hasIntervalTextFieldFilterValues(
        filters: GenericFilter = {},
        column: KupDataColumn,
        tmp: boolean
    ): boolean {
        if (column == null) {
            return false;
        }
        if (!this.isColumnFiltrableByInterval(column)) {
            return false;
        }
        let intervalFrom = this._getIntervalTextFieldFilterValue(
            filters,
            column.name,
            FilterInterval.FROM,
            tmp
        );
        if (intervalFrom != null && intervalFrom.trim() != '') {
            return true;
        }
        let intervalTo = this._getIntervalTextFieldFilterValue(
            filters,
            column.name,
            FilterInterval.TO,
            tmp
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
                interval: null,
                intervalTmp: null,
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
    ) {
        if (filters == null || remFilter == null) {
            return;
        }
        let filter: Filter = filters[column];
        if (filter == null) {
            return;
        }
        if (filter.checkBoxes == null) {
            filter.checkBoxes = [];
        }
        let index = Filters.indexOfValueInValuesArray(
            filter.checkBoxes,
            remFilter
        );
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

    isColumnFiltrableByInterval(column: KupDataColumn): boolean {
        return this.isObjFiltrableByInterval(column.obj);
    }

    getIntervalTextFieldFilterValues(
        filters: GenericFilter = {},
        column: KupDataColumn
    ): Array<string> {
        return this._getIntervalTextFieldFilterValues(filters, column, false);
    }
    getIntervalTextFieldFilterValuesTmp(
        filters: GenericFilter = {},
        column: KupDataColumn
    ): Array<string> {
        return this._getIntervalTextFieldFilterValues(filters, column, true);
    }

    private _getIntervalTextFieldFilterValues(
        filters: GenericFilter = {},
        column: KupDataColumn,
        tmp: boolean
    ): Array<string> {
        if (!this._hasIntervalTextFieldFilterValues(filters, column, tmp)) {
            return ['', ''];
        }

        let values = [
            this._getIntervalTextFieldFilterValue(
                filters,
                column.name,
                FilterInterval.FROM,
                tmp
            ),
            this._getIntervalTextFieldFilterValue(
                filters,
                column.name,
                FilterInterval.TO,
                tmp
            ),
        ];
        return values;
    }

    getIntervalTextFieldFilterValue(
        filters: GenericFilter = {},
        column: string,
        index: FilterInterval
    ): string {
        return this._getIntervalTextFieldFilterValue(
            filters,
            column,
            index,
            false
        );
    }
    getIntervalTextFieldFilterValueTmp(
        filters: GenericFilter = {},
        column: string,
        index: FilterInterval
    ): string {
        return this._getIntervalTextFieldFilterValue(
            filters,
            column,
            index,
            true
        );
    }
    private _getIntervalTextFieldFilterValue(
        filters: GenericFilter = {},
        column: string,
        index: FilterInterval,
        tmp: boolean
    ): string {
        let value = '';

        if (filters == null) {
            return value;
        }
        let filter: Filter = filters[column];
        if (filter == null) {
            return value;
        }
        if (tmp && filter.intervalTmp == null) {
            return value;
        }
        if (!tmp && filter.interval == null) {
            return value;
        }
        value = tmp ? filter.intervalTmp[index] : filter.interval[index];
        return value;
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
                interval: null,
                intervalTmp: null,
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

    setIntervalTextFieldFilterValue(
        filters: GenericFilter = {},
        column: string,
        newFilter: string,
        index: FilterInterval
    ) {
        this._setIntervalTextFieldFilterValue(
            filters,
            column,
            newFilter,
            index,
            true
        );
    }

    private _setIntervalTextFieldFilterValue(
        filters: GenericFilter = {},
        column: string,
        newFilter: string,
        index: FilterInterval,
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
                interval: null,
                intervalTmp: null,
            };
            filters[column] = filter;
        }
        if (filter.interval == null) {
            filter.interval = [];
            filter.interval.push('', '');
        }
        if (filter.intervalTmp == null) {
            filter.intervalTmp = [];
            filter.intervalTmp.push('', '');
        }
        if (tmp) {
            filter.intervalTmp[index] =
                newFilter != null ? newFilter.trim() : newFilter;
        } else {
            filter.interval[index] =
                newFilter != null ? newFilter.trim() : newFilter;
        }
    }

    saveTextualFilters(filters: GenericFilter = {}, column: string) {
        this._setTextFieldFilterValue(
            filters,
            column,
            this.getTextFilterValueTmp(filters, column),
            false
        );
        this._setIntervalTextFieldFilterValue(
            filters,
            column,
            this.getIntervalTextFieldFilterValueTmp(
                filters,
                column,
                FilterInterval.FROM
            ),
            FilterInterval.FROM,
            false
        );
        this._setIntervalTextFieldFilterValue(
            filters,
            column,
            this.getIntervalTextFieldFilterValueTmp(
                filters,
                column,
                FilterInterval.TO
            ),
            FilterInterval.TO,
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
        this._setIntervalTextFieldFilterValue(
            filters,
            column,
            this.getIntervalTextFieldFilterValue(
                filters,
                column,
                FilterInterval.FROM
            ),
            FilterInterval.FROM,
            true
        );
        this._setIntervalTextFieldFilterValue(
            filters,
            column,
            this.getIntervalTextFieldFilterValue(
                filters,
                column,
                FilterInterval.TO
            ),
            FilterInterval.TO,
            true
        );
    }

    getFilterValueForTooltip(
        filters: GenericFilter = {},
        column: KupDataColumn
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
        filters[column] = {
            textField: '',
            textFieldTmp: '',
            checkBoxes: [],
            interval: null,
            intervalTmp: null,
        };
    }
}
