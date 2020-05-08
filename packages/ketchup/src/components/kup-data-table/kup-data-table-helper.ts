import numeral from 'numeral';
import moment from 'moment';

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
} from './kup-data-table-declarations';

import { isNumber, isDate } from '../../utils/object-utils';
import { isEmpty } from '../../utils/utils';
import { errorLogging } from '../../utils/error-logging';
import {
    isFilterComplientForValue,
    filterIsNegative,
} from '../../utils/filters';

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
export function hasFilters(filters: GenericFilter = {}) {
    if (filters == null) {
        return false;
    }
    let keys = Object.keys(filters);
    if (keys == null || keys.length < 1) {
        return false;
    }
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (hasFiltersForColumn(filters, key)) {
            return true;
        }
    }
    return false;
}

export function hasFiltersForColumn(
    filters: GenericFilter = {},
    column: string
) {
    let textfield = getTextFieldFilterValue(filters, column);
    if (textfield != null && textfield.trim() != '') {
        return true;
    }
    let checkboxes = getCheckBoxFilterValues(filters, column);
    if (checkboxes == null || checkboxes.length < 1) {
        return false;
    }
    for (let i = 0; i < checkboxes.length; i++) {
        let ch = checkboxes[i];
        if (ch.trim() != '') {
            return true;
        }
    }
    return false;
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
        filter = { textField: '', checkBoxes: [] };
        filters[column] = filter;
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
        filter = { textField: '', checkBoxes: [] };
        filters[column] = filter;
    }
    filter.textField = newFilter.trim();
}

export function log(methodName: string, msg: string) {
    errorLogging(
        'kup-data-table-helper',
        methodName + '()' + ' - ' + msg,
        'log'
    );
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
    columns: Array<string> = []
): Array<Row> {
    if (!rows || rows == null) {
        return [];
    }

    // There are rows to filter
    let filteredRows: Array<Row> = [];
    const isUsingGlobalFilter: boolean = !!(globalFilter && columns);

    if (hasFilters(filters) || isUsingGlobalFilter) {
        for (let i = 0; i < rows.length; i++) {
            let r: Row = rows[i];
            if (
                isRowComplient(
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

export function isRowComplient(
    r: Row,
    filters: GenericFilter = {},
    globalFilter: string = '',
    isUsingGlobalFilter: boolean = false,
    columns: Array<string> = []
) {
    if (isUsingGlobalFilter) {
        let retValue = true;
        // There are no columns -> display element
        if (columns && columns != null && columns.length > 0) {
            retValue = false;
            let _filterIsNegative = filterIsNegative(globalFilter);

            // Search among all columns for the global filter
            for (let i = 0; i < columns.length; i++) {
                const cell = r.cells[columns[i]];
                retValue = isFilterComplientForCell(cell, globalFilter);
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
    if (!hasFilters(filters)) {
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
        if (!isFilterComplientForCell(cell, filterValue)) {
            return false;
        }

        let filterValues = getCheckBoxFilterValues(filters, key);
        if (filterValues.length == 0) {
            continue;
        }
        for (let i = 0; i < filterValues.length; i++) {
            let fv = filterValues[i];
            if (!isFilterComplientForCell(cell, fv)) {
                return false;
            }
        }
    }
    return true;
}

export function isFilterComplientForCell(cellValue: Cell, filterValue: string) {
    if (!cellValue) {
        return false;
    }
    return isFilterComplientForValue(cellValue.value, filterValue);
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
            const cellValue = cell.value;
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
                    const tempCellValue = tempCell.value;

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

    adjustGroupsAvarage(groupRows, totals);

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
                case TotalMode.AVARAGE:
                    if (_isNumber) {
                        const cellValue = numeral(cell.obj.k);

                        groupRow.group.totals[key] = cellValue
                            .add(currentTotalValue)
                            .value();

                        // updating parents
                        let parent = groupRow.group.parent;
                        while (parent != null) {
                            const currentParentSum =
                                parent.group.totals[key] || 0;

                            parent.group.totals[key] = cellValue
                                .add(currentParentSum)
                                .value();

                            parent = parent.group.parent;
                        }
                    }
                    break;

                default:
                    console.warn(`invalid total mode: ${totalMode}`);
                    break;
            }
        }
    });
}

function adjustGroupsAvarage(groupRows: Array<Row>, totals: TotalsMap): void {
    if (!groupRows || !totals) {
        return;
    }

    const keys = Object.keys(totals);

    if (groupRows.length === 0 || !groupRows[0].group || keys.length === 0) {
        return;
    }

    const avarageKeys = keys.filter((key) => TotalMode.AVARAGE === totals[key]);

    if (avarageKeys.length > 0) {
        groupRows
            .filter((groupRow) => groupRow.group.children.length > 0)
            .forEach((groupRow) => adjustGroupAvarage(groupRow, avarageKeys));
    }
}

/**
 * @returns number of 'leaf' of group
 */
function adjustGroupAvarage(row: Row, avarage: Array<string>): number {
    const children = row.group.children;

    if (children.length === 0) {
        return 0;
    }

    let numberOfLeaf = 0;

    // check if child is a grouping row
    if (children[0].group) {
        children.forEach((child) => {
            numberOfLeaf += adjustGroupAvarage(child, avarage);
        });

        // adjust avarage
        avarage.forEach((avarageKey) => {
            row.group.totals[avarageKey] = numeral(row.group.totals[avarageKey])
                .divide(numberOfLeaf)
                .value();
        });
    } else {
        numberOfLeaf = children.length;

        // adjust avarage
        avarage.forEach((avarageKey) => {
            row.group.totals[avarageKey] = numeral(row.group.totals[avarageKey])
                .divide(row.group.children.length)
                .value();
        });
    }

    return numberOfLeaf;
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
                    rettotals[c.name] = totals[key];
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
            keys.filter((key) => TotalMode.COUNT !== totals[key]).forEach(
                (key) => {
                    // getting column
                    const cell = r.cells[key];

                    // check if number
                    if (cell && isNumber(cell.obj)) {
                        const cellValue = numeral(cell.obj.k);

                        const currentFooterValue = footerRow[key] || 0;

                        footerRow[key] = cellValue
                            .add(currentFooterValue)
                            .value();
                    }
                }
            );
        });

        // fixing count and avg
        for (let key of keys) {
            if (totals[key] === TotalMode.AVARAGE) {
                const sum: number = footerRow[key];

                if (sum && rows.length > 0) {
                    footerRow[key] = numeral(sum).divide(rows.length).value();
                }
            } else if (totals[key] === TotalMode.COUNT) {
                footerRow[key] = rows.length;
            }
        }
    }

    return footerRow;
}

function compareCell(cell1: Cell, cell2: Cell, sortMode: SortMode): number {
    const sm = sortMode === 'A' ? 1 : -1;

    const obj1 = cell1.obj;
    const obj2 = cell2.obj;

    if (obj1 == null || obj2 == null) {
        return localCompareAsInJava(cell1.value, cell2.value);
    }

    // If either the type or the parameter of the current object are not equal.
    if (!(obj1.t === obj2.t && obj1.p === obj2.p)) {
        let compare = localCompareAsInJava(obj1.t, obj2.t);
        if (compare === 0) {
            compare = localCompareAsInJava(obj1.p, obj2.p);
        }
        return compare * sm;
    }

    // number
    if (isNumber(obj1)) {
        const n1: number = numeral(obj1.k).value();
        const n2: number = numeral(obj2.k).value();

        if (n1 === n2) {
            return 0;
        }

        return sm * (n1 > n2 ? 1 : -1);
    }

    // date
    if (isDate(obj1)) {
        let m1: moment.Moment;
        let m2: moment.Moment;

        if (obj1.p === '*YYMD') {
            m1 = moment(obj1.k, 'YYYYMMDD');
            m2 = moment(obj2.k, 'YYYYMMDD');
        } else if (obj1.p === '*DMYY') {
            m1 = moment(obj1.k, 'DDMMYYYY');
            m2 = moment(obj2.k, 'DDMMYYYY');
        } else {
            // no valid format -> check via k
            return sm * localCompareAsInJava(obj1.k, obj2.k);
        }

        if (m1.isSame(m2)) {
            return 0;
        }

        if (m1.isBefore(m2)) {
            return sm * -1;
        } else {
            return sm * 1;
        }
    }

    return (
        sm *
        (obj1.k && obj2.k
            ? localCompareAsInJava(obj1.k, obj2.k) // If there is k set sort by it
            : localCompareAsInJava(cell1.value, cell2.value)) // otherwise use cell value
    );
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
    rowsPerPage: number
) {
    const start = currentPage * rowsPerPage - rowsPerPage;

    return rows.slice(start, start + rowsPerPage);
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
