import { KupDataTable } from '../../components/kup-data-table/kup-data-table';
import {
    Cell,
    Column,
    Row,
    CellsHolder,
    SortMode,
} from '../../components/kup-data-table/kup-data-table-declarations';
import { KupTree } from '../../components/kup-tree/kup-tree';
import {
    compareValues,
    getCellValueForDisplay,
    getColumnByName,
    getValueForDisplay,
} from '../cell-utils';
import { isDate, isNumber, isTime, isTimestamp } from '../object-utils';
import { Filters } from './filters';
import { FiltersColumnMenu } from './filters-column-menu';
import { GenericFilter } from './filters-declarations';

/**
 * Filtering algorithms related to data-table rows.
 * @module FiltersRows
 * @todo Should contain EVERY row-specific filtering method.
 */
export class FiltersRows extends Filters {
    isFilterCompliantForCell(
        cellValue: Cell,
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
        cellValue: Cell,
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
        r: Row,
        filters: GenericFilter = {},
        globalFilter: string = '',
        isUsingGlobalFilter: boolean = false,
        columns: Column[] = [],
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
        cells: CellsHolder,
        filters: GenericFilter = {},
        globalFilter: string = '',
        isUsingGlobalFilter: boolean = false,
        columns: Column[] = [],
        columnFilters?: FiltersColumnMenu
    ): boolean {
        if (isUsingGlobalFilter) {
            let retValue = true;
            // There are no columns -> display element
            if (columns && columns != null && columns.length > 0) {
                retValue = false;
                let _filterIsNegative = this.filterIsNegative(globalFilter);

                // Search among all columns for the global filter
                for (let i = 0; i < columns.length; i++) {
                    const cell = cells[columns[i].name];
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

            const _filterIsNegative: boolean = this.filterIsNegative(
                filterValue
            );
            let b1 = this.isFilterCompliantForCell(cell, filterValue, interval);
            let b2 = _filterIsNegative;
            if (
                !isNumber(cell.obj) &&
                !isDate(cell.obj) &&
                !isTime(cell.obj) &&
                !isTimestamp(cell.obj)
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
                if (fv == null) {
                    continue;
                }
                if (cell.value != null) {
                    if (
                        cell.value.toLowerCase().trim() ==
                        fv.toLowerCase().trim()
                    ) {
                        retValue = true;
                        break;
                    }
                }
                if (cell.obj != null) {
                    if (
                        cell.obj.k.toLowerCase().trim() ==
                        fv.toLowerCase().trim()
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
        columns: Column[],
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
            const col = getColumnByName(columns, key);
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
        rows: Array<Row> = [],
        filters: GenericFilter = {},
        globalFilter: string = '',
        columns: Column[] = [],
        columnFilters?: FiltersColumnMenu
    ): Array<Row> {
        if (!rows || rows == null) {
            return [];
        }

        // There are rows to filter
        let filteredRows: Array<Row> = [];
        const isUsingGlobalFilter: boolean = !!(globalFilter && columns);

        if (
            this.hasFilters(filters, columns, columnFilters) ||
            isUsingGlobalFilter
        ) {
            for (let i = 0; i < rows.length; i++) {
                let r: Row = rows[i];
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
        column: Column,
        globalFilterValue: string,
        columnFilters?: FiltersColumnMenu
    ): { value: string; displayedValue: string }[] {
        let values: { value: string; displayedValue: string }[] = new Array();
        if (columnFilters == null) {
            columnFilters = new FiltersColumnMenu();
        }
        let value = columnFilters.getTextFilterValue(comp.filters, column.name);
        let interval = columnFilters.getIntervalTextFieldFilterValues(
            comp.filters,
            column
        );
        if (
            column.valuesForFilter != null &&
            column.valuesForFilter.length > 0
        ) {
            column.valuesForFilter.forEach((element) => {
                let v = element;
                if (
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
            checkBoxes: [],
            interval: interval,
        };

        let visibleColumns = comp.getVisibleColumns();
        let columnObject = getColumnByName(visibleColumns, column.name);

        let tmpRows = this.filterRows(
            comp.getRows(),
            tmpFilters,
            globalFilterValue,
            comp.getColumns(),
            columnFilters
        );

        if (columnObject != null) {
            tmpRows = tmpRows.sort((n1: Row, n2: Row) => {
                return compareValues(
                    columnObject.obj,
                    n1.cells[column.name].value,
                    columnObject.obj,
                    n2.cells[column.name].value,
                    SortMode.A
                );
            });
        }

        /** il valore delle righe attualmente filtrate, formattato */
        tmpRows.forEach((row) =>
            this.addColumnValueFromRow(values, column, row.cells[column.name])
        );

        return values;
    }

    private addColumnValueFromRow(
        values: { value: string; displayedValue: string }[],
        column: Column,
        cell: Cell
    ) {
        if (cell) {
            let item: { value: string; displayedValue: string } = {
                value: cell.value,
                displayedValue: getCellValueForDisplay(column, cell),
            };
            if (!this.columnValuesContainsValue(values, item)) {
                values.push(item);
            }
        }
    }

    private columnValuesContainsValue(
        values: { value: string; displayedValue: string }[],
        value: { value: string; displayedValue: string }
    ): boolean {
        if (values == null || values.length < 1) {
            return false;
        }
        for (let i = 0; i < values.length; i++) {
            if (values[i].value == value.value) {
                return true;
            }
        }
        return false;
    }
}
