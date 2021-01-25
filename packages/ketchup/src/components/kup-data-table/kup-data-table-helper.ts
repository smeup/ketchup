import numeral from 'numeral';

import {
    Row,
    SortObject,
    Cell,
    SortMode,
    GroupObject,
    TotalMode,
    TotalsMap,
    Column,
    GenericFilter,
    Filter,
    RowGroup,
    FilterInterval,
} from './kup-data-table-declarations';

import { isNumber, isDate } from '../../utils/object-utils';
import {
    isEmpty,
    ISO_DEFAULT_DATE_FORMAT,
    isValidStringDate,
    getCurrentDateFormatFromBrowserLocale,
    stringToNumber,
    changeDateTimeFormat,
    unformatDateTime,
    unformattedStringToFormattedStringDate,
    unformattedStringToFormattedStringNumber,
    isValidFormattedStringDate,
    formattedStringToDefaultUnformattedStringDate,
    formattedStringToUnformattedStringNumber,
    isValidFormattedStringNumber,
    unformattedStringNumberToNumber,
    isNumber as isNumberThisString,
} from '../../utils/utils';
import {
    isFilterCompliantForValue,
    filterIsNegative,
} from '../../utils/filters';
import { logMessage } from '../../utils/debug-manager';

export function sortRows(
    rows: Array<Row> = [],
    sort: Array<SortObject> = []
): Array<Row> {
    if (!rows || rows.length === 0) {
        return [];
    }

    // check if row is group
    if (rows[0].group) {
        return sortGroupRows(rows, sort);
    }

    // sorting rows
    if (!sort || sort.length === 0) {
        // no sort -> return rows as they are
        return rows;
    }

    // check multiple sort
    const isMultiSort = sort.length > 1;

    // sorting rows
    return rows.slice(0).sort((r1: Row, r2: Row) => {
        if (isMultiSort) {
            for (let i = 0; i < sort.length; i++) {
                const compare = compareRows(r1, r2, sort[i]);

                if (compare !== 0) {
                    // not same row
                    return compare;
                }
            }

            // same row
            return 0;
        } else {
            return compareRows(r1, r2, sort[0]);
        }
    });
}

function sortGroupRows(
    rows: Array<Row> = [],
    sort: Array<SortObject> = []
): Array<Row> {
    if (!rows || rows.length === 0) {
        return [];
    }

    // getting columm group
    const groupColumn = rows[0].group.column;

    // check if column is in sort
    let sortObject = getSortOnColumn(groupColumn, sort);

    if (!sortObject) {
        sortObject = {
            column: groupColumn,
            sortMode: SortMode.A,
        };
    }

    // sorting rows
    rows.sort((r1, r2) => {
        // creating fake cells
        const cell1: Cell = {
            obj: r1.group.obj,
            value: r1.group.label,
        };

        const cell2: Cell = {
            obj: r2.group.obj,
            value: r2.group.label,
        };

        return compareCell(cell1, cell2, sortObject.sortMode);
    });

    // sorting children
    rows.forEach((row) => {
        row.group.children = sortRows(row.group.children, sort);
    });

    return rows;
}

function getSortOnColumn(
    column: string = '',
    sort: Array<SortObject> = []
): SortObject {
    if (!column || !sort || sort.length === 0) {
        return null;
    }

    for (let sortObject of sort) {
        if (sortObject.column === column) {
            return sortObject;
        }
    }

    return null;
}

function compareRows(r1: Row, r2: Row, sortObj: SortObject): number {
    const cell1: Cell = r1.cells[sortObj.column];
    const cell2: Cell = r2.cells[sortObj.column];

    if (!cell1 || !cell2) {
        return 0;
    }

    return compareCell(cell1, cell2, sortObj.sortMode);
}

//-------- FILTER FUNCTIONS --------
export function hasFilters(filters: GenericFilter = {}, columns: Column[]) {
    if (filters == null) {
        return false;
    }
    let keys = Object.keys(filters);
    if (keys == null || keys.length < 1) {
        return false;
    }
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        const col = getColumnByName(columns, key);
        if (hasFiltersForColumn(filters, col)) {
            return true;
        }
    }
    return false;
}

export function hasFiltersForColumn(
    filters: GenericFilter = {},
    column: Column
): boolean {
    if (!column) {
        return false;
    }
    let textfield = getTextFieldFilterValue(filters, column.name);
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

export function addCheckBoxFilterValue(
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

export function removeCheckBoxFilterValue(
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

export function getTextFieldFilterValue(
    filters: GenericFilter = {},
    column: string
): string {
    let value = '';

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

export function setTextFieldFilterValue(
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

export function setIntervalTextFieldFilterValue(
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
    filter.interval[index] = newFilter != null ? newFilter.trim() : newFilter;
}

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

export function getIntervalTextFieldFilterValues(
    filters: GenericFilter = {},
    column: string
): Array<string> {
    let values = [
        getIntervalTextFieldFilterValue(filters, column, FilterInterval.FROM),
        getIntervalTextFieldFilterValue(filters, column, FilterInterval.TO),
    ];
    return values;
}

export function getIntervalTextFieldFilterValue(
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

export function isColumnFiltrableByInterval(column: Column): boolean {
    if (isDate(column.obj)) {
        return true;
    }
    if (isNumber(column.obj)) {
        return true;
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
export function filterRows(
    rows: Array<Row> = [],
    filters: GenericFilter = {},
    globalFilter: string = '',
    columns: Column[] = []
): Array<Row> {
    if (!rows || rows == null) {
        return [];
    }

    // There are rows to filter
    let filteredRows: Array<Row> = [];
    const isUsingGlobalFilter: boolean = !!(globalFilter && columns);

    if (hasFilters(filters, columns) || isUsingGlobalFilter) {
        for (let i = 0; i < rows.length; i++) {
            let r: Row = rows[i];
            if (
                isRowCompliant(
                    r,
                    filters,
                    globalFilter,
                    isUsingGlobalFilter,
                    columns
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

export function isRowCompliant(
    r: Row,
    filters: GenericFilter = {},
    globalFilter: string = '',
    isUsingGlobalFilter: boolean = false,
    columns: Column[] = []
) {
    if (isUsingGlobalFilter) {
        let retValue = true;
        // There are no columns -> display element
        if (columns && columns != null && columns.length > 0) {
            retValue = false;
            let _filterIsNegative = filterIsNegative(globalFilter);

            // Search among all columns for the global filter
            for (let i = 0; i < columns.length; i++) {
                const cell = r.cells[columns[i].name];
                retValue = isFilterCompliantForValue(cell.value, globalFilter);
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

    // There are no filters to check -> the element is valid
    if (!hasFilters(filters, columns)) {
        return true;
    }

    let keys = Object.keys(filters);

    // Filters
    for (let i = 0; i < keys.length; i++) {
        let key: string = keys[i];

        const cell = r.cells[key];
        if (!cell) {
            return false;
        }

        let filterValue = getTextFieldFilterValue(filters, key);
        let interval = getIntervalTextFieldFilterValues(filters, key);

        let b1 = isFilterCompliantForCell(cell, filterValue, interval);
        let b2 = isFilterCompliantForCellObj(cell, filterValue, interval);

        const _filterIsNegative: boolean = filterIsNegative(filterValue);
        if (_filterIsNegative) {
            if (!b1 || !b2) {
                return false;
            }
        } else {
            if (!b1 && !b2) {
                return false;
            }
        }

        let filterValues = getCheckBoxFilterValues(filters, key);
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
                    cell.value.toLowerCase().trim() == fv.toLowerCase().trim()
                ) {
                    retValue = true;
                    break;
                }
            }
            if (cell.obj != null) {
                if (
                    cell.obj.k.toLowerCase().trim() == fv.toLowerCase().trim()
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

export function isFilterCompliantForSimpleValue(
    valueToCheck: string,
    obj: any,
    filterValue: string,
    interval: string[]
) {
    if (valueToCheck == null) {
        return false;
    }

    filterValue = normalizeValue(filterValue, obj);
    let value = valueToCheck;

    let from: string = '';
    let to: string = '';
    if (interval != null) {
        from = interval[FilterInterval.FROM];
        to = interval[FilterInterval.TO];
    }
    let checkByRegularExpression = true;
    if (isNumber(obj)) {
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
    if (isDate(obj)) {
        let valueDate: Date = null;
        if (isValidStringDate(value, ISO_DEFAULT_DATE_FORMAT)) {
            valueDate = unformatDateTime(value, ISO_DEFAULT_DATE_FORMAT);
        }
        if (from != '') {
            if (
                valueDate != null &&
                isValidStringDate(from, ISO_DEFAULT_DATE_FORMAT)
            ) {
                checkByRegularExpression = false;
                let fromDate: Date = unformatDateTime(
                    from,
                    ISO_DEFAULT_DATE_FORMAT
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
                isValidStringDate(to, ISO_DEFAULT_DATE_FORMAT)
            ) {
                checkByRegularExpression = false;
                let toDate: Date = unformatDateTime(
                    to,
                    ISO_DEFAULT_DATE_FORMAT
                );
                if (valueDate > toDate) {
                    return false;
                }
            } else {
                filterValue = to;
            }
        }
        if (
            !isValidStringDate(filterValue, ISO_DEFAULT_DATE_FORMAT) &&
            !isValidStringDate(filterValue)
        ) {
            value = changeDateTimeFormat(
                value,
                ISO_DEFAULT_DATE_FORMAT,
                getCurrentDateFormatFromBrowserLocale()
            );
        }
    }
    if (checkByRegularExpression) {
        return isFilterCompliantForValue(value, filterValue);
    }
    return true;
}

export function isFilterCompliantForCell(
    cellValue: Cell,
    filterValue: string,
    interval: string[]
) {
    if (!cellValue) {
        return false;
    }

    return isFilterCompliantForSimpleValue(
        cellValue.value,
        cellValue.obj,
        filterValue,
        interval
    );
}

export function isFilterCompliantForCellObj(
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
    return isFilterCompliantForSimpleValue(
        cellValue.obj.k,
        cellValue.obj,
        filterValue,
        interval
    );
}

export function groupRows(
    columns: Column[] = [],
    rows: Row[] = [],
    groups: GroupObject[] = [],
    totals: TotalsMap = {}
): Array<Row> {
    if (!rows) {
        return [];
    }

    if (!groups || groups.length === 0 || !columns || columns.length === 0) {
        return rows;
    }

    // Keeps label of the valid columns
    const columnLabels: { [index: string]: string } = {};

    // remove invalid groups and store column labels
    const validGroups = groups.filter(({ column }) => {
        for (let { name, title } of columns) {
            if (name === column) {
                // Store label of the columns
                columnLabels[name] = title;
                return true;
            }
        }

        return false;
    });

    if (validGroups.length === 0) {
        // no valid groups
        return rows;
    }

    // creating root
    const groupRows: Array<Row> = [];

    rows.forEach((row: Row) => {
        // getting column name from first group
        const columnName = validGroups[0].column;

        // getting row value
        const cell = row.cells[columnName];

        if (cell) {
            const column = getColumnByName(columns, columnName);
            const cellValue = getCellValueForDisplay(cell.value, column, cell);
            let groupRow: Row = null;

            // check in already in groupedRow
            for (let currentGroupRow of groupRows) {
                if (currentGroupRow.group.label === cellValue) {
                    groupRow = currentGroupRow;
                    break;
                }
            }

            if (groupRow === null) {
                // create group row
                groupRow = {
                    group: {
                        id: cellValue,
                        parent: null,
                        column: columnName,
                        columnLabel: columnLabels[columnName],
                        expanded: false,
                        label: cellValue,
                        children: [],
                        obj: cell.obj,
                        totals: {},
                    },
                    cells: {},
                };

                // add group to list
                groupRows.push(groupRow);
            }

            for (let i = 1; i < validGroups.length; i++) {
                const group = validGroups[i];

                // getting cell value
                const tempCell = row.cells[group.column];
                if (tempCell) {
                    const column = getColumnByName(columns, group.column);
                    const tempCellValue = getCellValueForDisplay(
                        tempCell.value,
                        column,
                        tempCell
                    );

                    // check if group already exists
                    let tempGroupingRow: Row = null;
                    for (let j = 0; j < groupRow.group.children.length; j++) {
                        const childGroup = groupRow.group.children[j];
                        const groupLabel = childGroup.group.label;

                        if (groupLabel === tempCellValue) {
                            tempGroupingRow = childGroup;
                            break;
                        }
                    }

                    if (!tempGroupingRow) {
                        tempGroupingRow = {
                            cells: {},
                            group: {
                                id: tempCellValue,
                                parent: groupRow,
                                column: group.column,
                                columnLabel: columnLabels[group.column],
                                children: [],
                                expanded: false,
                                label: tempCellValue,
                                totals: {},
                                obj: tempCell.obj,
                            },
                        };
                        adjustGroupId(tempGroupingRow);
                        groupRow.group.children.push(tempGroupingRow);
                    }
                    groupRow = tempGroupingRow;
                }
            }

            // adding row
            groupRow.group.children.push(row);

            updateGroupTotal(groupRow, totals, row);
        }
    });

    adjustGroupsAverageOrFormula(groupRows, TotalMode.AVERAGE, totals);
    adjustGroupsAverageOrFormula(groupRows, TotalMode.MATH, totals);

    return groupRows;
}

function updateGroupTotal(
    groupRow: Row,
    totals: TotalsMap,
    addedRow: Row
): void {
    if (!groupRow || !totals) {
        return;
    }

    const keys = Object.keys(totals);

    if (keys.length === 0) {
        return;
    }

    keys.forEach((key) => {
        const currentTotalValue = groupRow.group.totals[key] || 0;

        const cell = addedRow.cells[key];

        if (cell) {
            let _isNumber = isNumber(cell.obj);

            const totalMode = totals[key];

            switch (totalMode) {
                case TotalMode.COUNT:
                    groupRow.group.totals[key] = currentTotalValue + 1;

                    // updating parents
                    let parent = groupRow.group.parent;
                    while (parent != null) {
                        const currentParentCount =
                            parent.group.totals[key] || 0;

                        parent.group.totals[key] = currentParentCount + 1;

                        parent = parent.group.parent;
                    }
                    break;

                case TotalMode.SUM:
                case TotalMode.AVERAGE:
                    if (_isNumber) {
                        const cellValue = numeral(stringToNumber(cell.value));

                        groupRow.group.totals[key] = numeral(cellValue)
                            .add(currentTotalValue)
                            .value();

                        // updating parents
                        let parent = groupRow.group.parent;
                        while (parent != null) {
                            const currentParentSum =
                                parent.group.totals[key] || 0;

                            parent.group.totals[key] = numeral(cellValue)
                                .add(currentParentSum)
                                .value();

                            parent = parent.group.parent;
                        }
                    }
                    break;

                default: {
                    if (totalMode.indexOf(TotalMode.MATH) != 0) {
                        console.warn(`invalid total mode: ${totalMode}`);
                    }
                    break;
                }
            }
        }
    });
}

function adjustGroupsAverageOrFormula(
    groupRows: Array<Row>,
    type: TotalMode,
    totals: TotalsMap
): void {
    if (!groupRows || !totals) {
        return;
    }

    const keys = Object.keys(totals);

    if (groupRows.length === 0 || !groupRows[0].group || keys.length === 0) {
        return;
    }

    let toAdjustKeys;

    if (type == TotalMode.AVERAGE) {
        toAdjustKeys = keys.filter((key) => TotalMode.AVERAGE === totals[key]);
    }
    if (type == TotalMode.MATH) {
        toAdjustKeys = keys.filter(
            (key) => totals[key].indexOf(TotalMode.MATH) == 0
        );
    }

    if (toAdjustKeys.length > 0) {
        groupRows
            .filter((groupRow) => groupRow.group.children.length > 0)
            .forEach((groupRow) =>
                adjustGroupAverageOrFormula(
                    groupRow,
                    type,
                    toAdjustKeys,
                    totals
                )
            );
    }
}

/**
 * @returns number of 'leaf' of group
 */
function adjustGroupAverageOrFormula(
    row: Row,
    type: TotalMode,
    toAdjustKeys: Array<string>,
    totals: TotalsMap
): number {
    const children = row.group.children;

    if (children.length === 0) {
        return 0;
    }

    let numberOfLeaf = 0;

    // check if child is a grouping row
    if (children[0].group) {
        children.forEach((child) => {
            numberOfLeaf += adjustGroupAverageOrFormula(
                child,
                type,
                toAdjustKeys,
                totals
            );
        });
    } else {
        numberOfLeaf = children.length;
    }
    // adjust average/formulas
    toAdjustKeys.forEach((key) => {
        if (type == TotalMode.AVERAGE) {
            row.group.totals[key] = numeral(row.group.totals[key])
                .divide(numberOfLeaf)
                .value();
        }
        if (type == TotalMode.MATH) {
            let formula = totals[key].substring(TotalMode.MATH.length);
            row.group.totals[key] = evaluateFormula(formula, row.group.totals);
        }
    });

    return numberOfLeaf;
}

export function evaluateFormula(
    formula: string,
    row: { [index: string]: number }
): number {
    let formula1: string = formula;
    const keys = Object.keys(row);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let value: number = row[key];
        if (value != null && !isNaN(value)) {
            let re: RegExp = new RegExp(key, 'g');
            formula1 = formula1.replace(re, value.toString());
        }
    }
    try {
        return evaluateString(formula1);
    } catch (e) {
        logMessage(
            'kup-data-table-helper',
            'Error during evaluate formula [' + formula1 + ']',
            'error'
        );
        return NaN;
    }
}

export function evaluateString(f: string) {
    return Function('"use strict"; return (' + f + ')')();
}

export function normalizeValue(value: string, smeupObj: any): string {
    let newValue = value != null ? value.trim() : value;
    if (newValue == null || newValue == '') {
        return newValue;
    }
    if (isDate(smeupObj)) {
        if (isValidFormattedStringDate(value)) {
            newValue = formattedStringToDefaultUnformattedStringDate(value);
        }
    }
    if (isNumber(smeupObj)) {
        if (isValidFormattedStringNumber(value, smeupObj ? smeupObj.p : '')) {
            newValue = formattedStringToUnformattedStringNumber(
                value,
                smeupObj ? smeupObj.p : ''
            );
        }
    }
    return newValue;
}

export function normalizeRows(
    columns: Array<Column>,
    rows: Array<Row>
): Array<Row> {
    if (rows) {
        const normalizedrows = Object.assign(rows);
        rows.forEach((row: Row) => {
            columns.forEach((column) => {
                const cell = row.cells[column.name];
                if (cell && column.obj && !cell.obj) {
                    // cell.obj = Object.assign(column.obj);
                    cell.obj = {
                        t: column.obj.t,
                        p: column.obj.p,
                        k: cell.value,
                    };
                }
            });
        });
        return normalizedrows;
    } else {
        return undefined;
    }
}

export function normalizeTotals(
    columns: Array<Column>,
    totals: TotalsMap
): TotalsMap {
    if (isEmpty(columns) || isEmpty(totals)) {
        return {};
    }

    let rettotals: TotalsMap = {};
    const k = Object.keys(totals);

    k.forEach((key) => {
        if (key === '*ALL') {
            columns.forEach((c) => {
                if (isNumber(c.obj)) {
                    let colCustomTotal: TotalMode = totals[c.name];
                    if (colCustomTotal != null) {
                        rettotals[c.name] = colCustomTotal;
                    } else {
                        rettotals[c.name] = totals[key];
                    }
                }
            });
        } else {
            rettotals[key] = totals[key];
        }
    });

    return rettotals;
}

export function calcTotals(
    rows: Array<Row> = [],
    totals: { [index: string]: TotalMode } = {}
): { [index: string]: number } {
    if (isEmpty(rows) || isEmpty(totals)) {
        return {};
    }
    const keys = Object.keys(totals);

    const footerRow: { [index: string]: number } = {};

    // if there are only COUNT, no need to loop on rows
    let onlyCount =
        keys.length === 0 &&
        keys.every((key) => totals[key] === TotalMode.COUNT);

    if (onlyCount) {
        keys.forEach((columnName) => (footerRow[columnName] = rows.length));
    } else {
        rows.forEach((r) => {
            keys.filter(
                (key) =>
                    TotalMode.COUNT !== totals[key] &&
                    totals[key].indexOf(TotalMode.MATH) != 0
            ).forEach((key) => {
                // getting column
                const cell = r.cells[key];

                // check if number
                if (cell && isNumber(cell.obj)) {
                    const cellValue = numeral(stringToNumber(cell.value));

                    const currentFooterValue = footerRow[key] || 0;

                    footerRow[key] = cellValue.add(currentFooterValue).value();
                }
            });
        });

        // fixing count and avg
        for (let key of keys) {
            if (totals[key] === TotalMode.AVERAGE) {
                const sum: number = footerRow[key];

                if (sum && rows.length > 0) {
                    footerRow[key] = numeral(sum).divide(rows.length).value();
                }
            } else if (totals[key] === TotalMode.COUNT) {
                footerRow[key] = rows.length;
            } else if (totals[key].indexOf(TotalMode.MATH) == 0) {
                let formula = totals[key].substring(TotalMode.MATH.length);
                footerRow[key] = evaluateFormula(formula, footerRow);
            }
        }
    }

    return footerRow;
}

function compareCell(cell1: Cell, cell2: Cell, sortMode: SortMode): number {
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
    if (isNumber(obj1)) {
        v1 = stringToNumber(s1);
        v2 = stringToNumber(s2);
    } else if (isDate(obj1)) {
        v1 = unformatDateTime(s1, ISO_DEFAULT_DATE_FORMAT);
        v2 = unformatDateTime(s2, ISO_DEFAULT_DATE_FORMAT);
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
 * This function has been taken from the link below, but it is slightly improved.
 * @param t1
 * @param t2
 * @see https://stackoverflow.com/questions/60300935/javascript-localecompare-returns-different-result-than-java-compareto
 */
function localCompareAsInJava(t1: string, t2: string): number {
    const lim = Math.min(t1.length, t2.length);

    let k = 0;
    while (k < lim) {
        const c1 = t1[k];
        const c2 = t2[k];
        if (c1 !== c2) {
            if (c1.charCodeAt(0) === 32) {
                return c1.charCodeAt(0) + c2.charCodeAt(0);
            } else {
                return c1.charCodeAt(0) - c2.charCodeAt(0);
            }
        }
        k++;
    }
    return t1.length - t2.length;
}

function adjustGroupId(row: Row): void {
    if (!row.group) {
        return;
    }

    let groupID = row.group.id;

    let parentRow = row.group.parent;

    while (parentRow !== null) {
        groupID = `${parentRow.group.id};${groupID}`;
        parentRow = parentRow.group.parent;
    }

    row.group.id = groupID;
}

export function getColumnByName(columns: Column[], name: string): Column {
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

export function paginateRows(
    rows: Row[],
    currentPage: number,
    rowsPerPage: number,
    areGrouped: boolean
) {
    const start: number = currentPage * rowsPerPage - rowsPerPage;
    const end: number = start + Number(rowsPerPage);
    if (areGrouped == false) {
        return rows.slice(start, end);
    }
    let pagRows: Array<Row> = [];

    _paginateRows(rows, pagRows, start, Number(rowsPerPage), 0);

    return pagRows;
}

function _paginateRows(
    rows: Row[],
    pagRows: Row[],
    start: number,
    rowsPerPage: number,
    ci: number
): { ci: number; added: boolean } {
    let added: boolean = false;
    for (let i: number = 0; i < rows.length; i++) {
        let originalRow = rows[i];
        let row: Row = cloneRow(rows[i]);
        if (
            originalRow.group != null &&
            originalRow.group.children != null &&
            originalRow.group.children.length > 0
        ) {
            row.group.children = [];
            let retValue: { ci: number; added: boolean } = _paginateRows(
                originalRow.group.children,
                row.group.children,
                start,
                rowsPerPage,
                ci
            );
            ci = retValue.ci;
            added = retValue.added;
            if (added == true) {
                pagRows[pagRows.length] = row;
            }
        } else {
            if (ci >= start) {
                pagRows[pagRows.length] = row;
                added = true;
            }
            ci++;
        }

        if (ci >= start + rowsPerPage) {
            break;
        }
    }
    return { ci: ci, added: added };
}

function cloneRow(row: Row): Row {
    if (row == null) {
        return null;
    }
    let cloned: Row = {
        id: row.id,
        cells: { ...row.cells },
        actions: row.actions ? [...row.actions] : null,
        group: cloneRowGroup(row.group),
        readOnly: row.readOnly,
        cssClass: row.cssClass,
    };

    return cloned;
}

function cloneRows(rows: Array<Row>): Array<Row> {
    if (rows == null) {
        return null;
    }
    let cloned: Array<Row> = [];
    for (let i: number = 0; i < rows.length; i++) {
        cloned[cloned.length] = cloneRow(rows[i]);
    }
    return cloned;
}

function cloneRowGroup(group: RowGroup): RowGroup {
    if (group == null) {
        return null;
    }
    let cloned: RowGroup = {
        id: group.id,
        parent: { ...group.parent },
        column: group.column,
        columnLabel: group.columnLabel,
        expanded: group.expanded,
        label: group.label,
        children: cloneRows(group.children),
        obj: { ...group.obj },
        totals: { ...group.totals },
    };

    return cloned;
}

/**
 * Given a cell object, determines if the style object has also a border radius
 * @param cell - The cell to check
 * @returns {boolean} - true if borderRadius is present, false otherwise.
 */
export function styleHasBorderRadius(cell: Cell): boolean {
    return !!(
        cell &&
        cell.style &&
        (cell.style.borderRadius || cell.style['border-radius'])
    );
}

/**
 * Given a cell object, determines if the style object has also a writing mode
 * @param cell - The cell to check
 * @returns {boolean} - true if writingMode is present, false otherwise.
 */

export function styleHasWritingMode(cell: Cell): boolean {
    return !!(
        cell &&
        cell.style &&
        (cell.style.writingMode || cell.style['writing-mode'])
    );
}

export function getValueForDisplay(value, obj, decimals: number): string {
    if (value != null && value != '' && isNumber(obj)) {
        return unformattedStringToFormattedStringNumber(
            value,
            decimals ? decimals : -1,
            obj ? obj.p : ''
        );
    }
    if (
        value != null &&
        value != '' &&
        isDate(obj) &&
        isValidStringDate(value, ISO_DEFAULT_DATE_FORMAT)
    ) {
        return unformattedStringToFormattedStringDate(value, null, obj.p);
    }
    return value;
}

export function getCellValueForDisplay(
    value,
    column: Column,
    cell: Cell
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
