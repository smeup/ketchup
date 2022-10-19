import type {
    GenericFilter,
    ValueDisplayedValue,
} from './filters-declarations';
import type { KupDataTable } from '../../components/kup-data-table/kup-data-table';
import type { KupTree } from '../../components/kup-tree/kup-tree';
import {
    getCellValueForDisplay,
    getColumnByName,
    getValueForDisplay,
} from '../cell-utils';
import { Filters } from './filters';
import { FiltersColumnMenu } from './filters-column-menu';
import { treeMainColumnName } from '../../components/kup-tree/kup-tree-declarations';
import { KupObjects } from '../../managers/kup-objects/kup-objects';
import { KupDom } from '../../managers/kup-manager/kup-manager-declarations';
import {
    KupDataCell,
    KupDataColumn,
    KupDataRow,
    KupDataRowCells,
} from '../../managers/kup-data/kup-data-declarations';
import { KupData } from '../../managers/kup-data/kup-data';

const dom: KupDom = document.documentElement as KupDom;
const kupObjects: KupObjects = dom.ketchup
    ? dom.ketchup.objects
    : new KupObjects();
const kupData: KupData = dom.ketchup ? dom.ketchup.data : new KupData();

/**
 * Filtering algorithms related to data-table rows.
 * @module FiltersRows
 * @todo Should contain EVERY row-specific filtering method.
 */
export class FiltersRows extends Filters {
    isFilterCompliantForCell(
        cellValue: KupDataCell,
        filterValue: string,
        interval: string[]
    ) {
        if (!cellValue) {
            return false;
        }

        return this.isFilterCompliantForSimpleValue(
            cellValue.value,
            cellValue.obj,
            filterValue,
            interval
        );
    }

    isFilterCompliantForCellObj(
        cellValue: KupDataCell,
        filterValue: string,
        interval: string[]
    ) {
        if (!cellValue) {
            return false;
        }
        if (!cellValue.obj) {
            return false;
        }
        return this.isFilterCompliantForSimpleValue(
            cellValue.obj.k,
            cellValue.obj,
            filterValue,
            interval
        );
    }

    isRowCompliant(
        r: KupDataRow,
        filters: GenericFilter = {},
        globalFilter: string = '',
        isUsingGlobalFilter: boolean = false,
        columns: KupDataColumn[] = [],
        columnFilters?: FiltersColumnMenu
    ): boolean {
        return this.areCellsCompliant(
            r.cells,
            filters,
            globalFilter,
            isUsingGlobalFilter,
            columns,
            columnFilters
        );
    }

    areCellsCompliant(
        cells: KupDataRowCells,
        filters: GenericFilter = {},
        globalFilter: string = '',
        isUsingGlobalFilter: boolean = false,
        columns: KupDataColumn[] = [],
        columnFilters?: FiltersColumnMenu
    ): boolean {
        if (isUsingGlobalFilter) {
            let retValue = true;
            // There are no columns -> display element
            if (columns && columns != null && columns.length > 0) {
                retValue = false;
                let _filterIsNegative = this.filterIsNegative(globalFilter);

                // Search among all visible columns for the global filter
                for (let i = 0; i < columns.length; i++) {
                    if (columns[i].visible == false) {
                        continue;
                    }
                    const cell = cells[columns[i].name];
                    if (cell == null) {
                        continue;
                    }
                    retValue = this.isFilterCompliantForValue(
                        cell.value,
                        globalFilter
                    );
                    let displayedValue = getCellValueForDisplay(
                        columns[i],
                        cell
                    );
                    if (displayedValue != cell.value) {
                        retValue =
                            retValue ||
                            this.isFilterCompliantForValue(
                                displayedValue,
                                globalFilter
                            );
                    }
                    if (retValue == true && !_filterIsNegative) {
                        break;
                    }
                    if (retValue == false && _filterIsNegative) {
                        break;
                    }
                }
            }
            if (!retValue) {
                return false;
            }
        }

        if (columnFilters == null) {
            columnFilters = new FiltersColumnMenu();
        }
        // There are no filters to check -> the element is valid
        if (!this.hasFilters(filters, columns, columnFilters)) {
            return true;
        }

        let keys = Object.keys(filters);
        // Filters
        for (let i = 0; i < keys.length; i++) {
            let key: string = keys[i];

            const cell = cells[key];
            if (!cell) {
                return false;
            }

            let filterValue = columnFilters.getTextFilterValue(filters, key);
            let interval = columnFilters.getIntervalTextFieldFilterValues(
                filters,
                getColumnByName(columns, key)
            );

            const _filterIsNegative: boolean =
                this.filterIsNegative(filterValue);
            let b1 = this.isFilterCompliantForCell(cell, filterValue, interval);
            let b2 = _filterIsNegative;
            if (
                !kupObjects.isNumber(cell.obj) &&
                !kupObjects.isDate(cell.obj) &&
                !kupObjects.isTime(cell.obj) &&
                !kupObjects.isTimestamp(cell.obj)
            ) {
                b2 = this.isFilterCompliantForCellObj(
                    cell,
                    filterValue,
                    interval
                );
            }

            if (_filterIsNegative) {
                if (!b1 || !b2) {
                    return false;
                }
            } else {
                if (!b1 && !b2) {
                    return false;
                }
            }

            let filterValues = columnFilters.getCheckBoxFilterValues(
                filters,
                key
            );
            if (filterValues.length == 0) {
                continue;
            }
            let retValue = false;
            for (let i = 0; i < filterValues.length; i++) {
                let fv = filterValues[i];
                if (fv == null || fv.value == null) {
                    continue;
                }
                if (cell.value != null) {
                    if (
                        cell.value.toLowerCase().trim() ==
                        fv.value.toLowerCase().trim()
                    ) {
                        retValue = true;
                        break;
                    }
                }
                if (cell.obj != null) {
                    if (
                        cell.obj.k.toLowerCase().trim() ==
                        fv.value.toLowerCase().trim()
                    ) {
                        retValue = true;
                        break;
                    }
                }
            }
            if (!retValue) {
                return false;
            }
        }
        return true;
    }

    hasFilters(
        filters: GenericFilter = {},
        columns: KupDataColumn[],
        columnFilters?: FiltersColumnMenu
    ) {
        if (filters == null) {
            return false;
        }
        let keys = Object.keys(filters);
        if (keys == null || keys.length < 1) {
            return false;
        }
        if (columnFilters == null) {
            columnFilters = new FiltersColumnMenu();
        }
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let col: KupDataColumn = null;
            if (key === treeMainColumnName) {
                col = {
                    name: treeMainColumnName,
                    title: '',
                };
            } else {
                col = getColumnByName(columns, key);
            }
            if (columnFilters.hasFiltersForColumn(filters, col)) {
                return true;
            }
        }
        return false;
    }

    /**
     * Filters the rows data of a data-table component according to the parameters
     *
     * @param rows - The data of the rows to filter.
     * @param filters - The the filters for each column.
     * @param globalFilter - A global filter applied to all columns.
     * @param columns - The colmns on which the filter will take effect.
     * @todo This function can be improved in its speed by a refactor in which from two different cycles of execution for
     *    single filters and global filter, all controls on a single column are done in a single cycle.
     */
    filterRows(
        rows: Array<KupDataRow> = [],
        filters: GenericFilter = {},
        globalFilter: string = '',
        columns: KupDataColumn[] = [],
        columnFilters?: FiltersColumnMenu
    ): Array<KupDataRow> {
        if (!rows || rows == null) {
            return [];
        }

        // There are rows to filter
        let filteredRows: Array<KupDataRow> = [];
        const isUsingGlobalFilter: boolean = !!(globalFilter && columns);

        if (
            this.hasFilters(filters, columns, columnFilters) ||
            isUsingGlobalFilter
        ) {
            for (let i = 0; i < rows.length; i++) {
                let r: KupDataRow = rows[i];
                if (
                    this.isRowCompliant(
                        r,
                        filters,
                        globalFilter,
                        isUsingGlobalFilter,
                        columns,
                        columnFilters
                    )
                ) {
                    filteredRows[filteredRows.length] = r;
                }
            }
        } else {
            filteredRows = [...rows];
        }

        return filteredRows;
    }

    getColumnValues(
        comp: KupDataTable | KupTree,
        column: KupDataColumn,
        globalFilterValue: string,
        columnFilters?: FiltersColumnMenu
    ): ValueDisplayedValue[] {
        let values: ValueDisplayedValue[] = new Array();
        if (columnFilters == null) {
            columnFilters = new FiltersColumnMenu();
        }
        let value = columnFilters.getTextFilterValueTmp(
            comp.filters,
            column.name
        );
        let interval = columnFilters.getIntervalTextFieldFilterValuesTmp(
            comp.filters,
            column
        );
        let checkboxes = columnFilters.getCheckBoxFilterValues(
            comp.filters,
            column.name
        );

        if (
            column.valuesForFilter != null &&
            column.valuesForFilter.length > 0
        ) {
            column.valuesForFilter.forEach((element) => {
                let v = element;
                if (
                    Filters.valuesArrayContainsValue(checkboxes, v) ||
                    value == '' ||
                    columnFilters.isFilterCompliantForSimpleValue(
                        v,
                        column.obj,
                        value,
                        interval
                    )
                ) {
                    values.push({
                        value: v,
                        displayedValue: getValueForDisplay(
                            v,
                            column.obj,
                            column.decimals
                        ),
                    });
                }
            });
            return values;
        }

        /** è necessario estrarre i valori della colonna di tutte le righe
         * filtrate SENZA il filtro della colonna stessa corrente */
        let tmpFilters: GenericFilter = { ...comp.filters };

        tmpFilters[column.name] = {
            textField: value,
            textFieldTmp: value,
            checkBoxes: [],
            interval: interval,
            intervalTmp: interval,
        };

        let tmpRows = this.filterRows(
            comp.getRows(),
            tmpFilters,
            globalFilterValue,
            comp.getVisibleColumns(),
            columnFilters
        );

        for (let i = 0; i < checkboxes.length; i++) {
            values.push(checkboxes[i]);
        }

        return kupData.cell.getUnivocalValue({ rows: tmpRows }, column, true);
    }
}
