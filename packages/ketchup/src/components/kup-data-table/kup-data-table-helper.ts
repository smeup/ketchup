import {
    SortObject,
    SortMode,
    GroupObject,
    TotalMode,
    TotalsMap,
    KupDataTableRow,
    KupDataTableRowGroup,
    KupDataTableCell,
} from './kup-data-table-declarations';
import { isNumber, stringToNumber } from '../../utils/utils';
import { GenericFilter } from '../../utils/filters/filters-declarations';
import { FiltersColumnMenu } from '../../utils/filters/filters-column-menu';
import {
    getCellValueForDisplay,
    getColumnByName,
    compareCell,
} from '../../utils/cell-utils';
import { FiltersRows } from '../../utils/filters/filters-rows';
import { KupDom } from '../../managers/kup-manager/kup-manager-declarations';
import { KupDataColumn } from '../../managers/kup-data/kup-data-declarations';
import { KupDatesFormats } from '../../managers/kup-dates/kup-dates-declarations';

const dom: KupDom = document.documentElement as KupDom;

export function sortRows(
    rows: Array<KupDataTableRow> = [],
    sort: Array<SortObject> = []
): Array<KupDataTableRow> {
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
    return rows.slice(0).sort((r1: KupDataTableRow, r2: KupDataTableRow) => {
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
    rows: Array<KupDataTableRow> = [],
    sort: Array<SortObject> = []
): Array<KupDataTableRow> {
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
        const cell1: KupDataTableCell = {
            obj: r1.group.obj,
            value: r1.group.id,
        };

        const cell2: KupDataTableCell = {
            obj: r2.group.obj,
            value: r2.group.id,
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

function compareRows(
    r1: KupDataTableRow,
    r2: KupDataTableRow,
    sortObj: SortObject
): number {
    const cell1: KupDataTableCell = r1.cells[sortObj.column];
    const cell2: KupDataTableCell = r2.cells[sortObj.column];

    if (!cell1 && !cell2) {
        return 0;
    }

    if (!cell1) {
        return 1;
    }

    if (!cell2) {
        return -1;
    }

    return compareCell(cell1, cell2, sortObj.sortMode);
}

//-------- FILTER FUNCTIONS --------
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
    rows: Array<KupDataTableRow> = [],
    filters: GenericFilter = {},
    globalFilter: string = '',
    columns: KupDataColumn[] = [],
    columnFilters?: FiltersColumnMenu,
    filtersRows?: FiltersRows
): Array<KupDataTableRow> {
    if (filtersRows == null) {
        filtersRows = new FiltersRows();
    }

    return filtersRows.filterRows(
        rows,
        filters,
        globalFilter,
        columns,
        columnFilters
    );
}

export function groupRows(
    columns: KupDataColumn[] = [],
    rows: KupDataTableRow[] = [],
    groups: GroupObject[] = [],
    totals: TotalsMap = {}
): Array<KupDataTableRow> {
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
    const groupRows: Array<KupDataTableRow> = [];

    // obj used to calculate the group distinct value
    let distinctObj = {};

    rows.forEach((row: KupDataTableRow) => {
        // getting column name from first group
        const columnName = validGroups[0].column;
        // getting row value
        const cell = row.cells[columnName];

        if (cell) {
            const column = getColumnByName(columns, columnName);
            const cellValueForDisplay = getCellValueForDisplay(column, cell);
            const cellValue = cell.value;
            let groupRow: KupDataTableRow = null;
            // check in already in groupedRow
            for (let currentGroupRow of groupRows) {
                if (currentGroupRow.group.label === cellValueForDisplay) {
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
                        label: cellValueForDisplay,
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
                    const tempCellValueForDisplay = getCellValueForDisplay(
                        column,
                        tempCell
                    );
                    const tempCellValue = tempCell.value;
                    // check if group already exists
                    let tempGroupingRow: KupDataTableRow = null;
                    for (let j = 0; j < groupRow.group.children.length; j++) {
                        const childGroup = groupRow.group.children[j];
                        const groupLabel = childGroup.group.label;

                        if (groupLabel === tempCellValueForDisplay) {
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
                                label: tempCellValueForDisplay,
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

            updateGroupTotal(groupRow, totals, row, distinctObj);
        }
    });

    adjustGroupsDistinct(groupRows, totals, distinctObj);
    adjustGroupsAverageOrFormula(groupRows, TotalMode.AVERAGE, totals);
    adjustGroupsAverageOrFormula(groupRows, TotalMode.MATH, totals);

    return groupRows;
}

function updateGroupTotal(
    groupRow: KupDataTableRow,
    totals: TotalsMap,
    addedRow: KupDataTableRow,
    distinctObj: Object
): void {
    if (!groupRow || !totals) {
        return;
    }

    const keys = Object.keys(totals);

    if (keys.length === 0) {
        return;
    }

    keys.forEach((key) => {
        const currentTotalValue = dom.ketchup.math.numberify(
            groupRow.group.totals[key] || 0
        );

        const cell = addedRow.cells[key];

        if (cell) {
            let _isNumber = dom.ketchup.objects.isNumber(cell.obj);

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
                case TotalMode.DISTINCT:
                    let cellValue;
                    if (_isNumber) {
                        cellValue = dom.ketchup.math.numberify(
                            stringToNumber(cell.value)
                        );
                    } else {
                        cellValue = cell.value;
                    }
                    let distinctGroup = distinctObj[groupRow.group.id];
                    if (!distinctGroup) {
                        distinctObj[groupRow.group.id] = {};
                        distinctObj[groupRow.group.id][key] = [];
                        distinctObj[groupRow.group.id][key].push(cellValue);
                    } else {
                        let distinctList = distinctObj[groupRow.group.id][key];
                        if (!distinctList) {
                            // first round
                            distinctObj[groupRow.group.id][key] = [];
                            distinctObj[groupRow.group.id][key].push(cellValue);
                        } else {
                            // update the list
                            distinctList.push(cellValue);
                        }
                    }
                    // updating parents
                    let distinctParent = groupRow.group.parent;
                    while (distinctParent != null) {
                        // get parent value
                        let distinctGroupParent =
                            distinctObj[distinctParent.group.id];
                        if (!distinctGroupParent) {
                            distinctObj[distinctParent.group.id] = {};
                            distinctObj[distinctParent.group.id][key] = [];
                            distinctObj[distinctParent.group.id][key].push(
                                cellValue
                            );
                        } else {
                            let distinctParentList =
                                distinctObj[distinctParent.group.id][key];
                            if (!distinctParentList) {
                                // first round
                                distinctObj[distinctParent.group.id][key] = [];
                                distinctObj[distinctParent.group.id][key].push(
                                    cellValue
                                );
                            } else {
                                // update the list
                                distinctParentList.push(cellValue);
                            }
                        }
                        // continue
                        distinctParent = distinctParent.group.parent;
                    }
                    break;
                case TotalMode.SUM:
                case TotalMode.AVERAGE:
                    if (_isNumber) {
                        const cellValue = dom.ketchup.math.numberify(
                            stringToNumber(cell.value)
                        );

                        groupRow.group.totals[key] =
                            cellValue + currentTotalValue;
                        // updating parents
                        let parent = groupRow.group.parent;
                        while (parent != null) {
                            const currentParentSum = dom.ketchup.math.numberify(
                                parent.group.totals[key] || 0
                            );
                            parent.group.totals[key] =
                                cellValue + currentParentSum;

                            parent = parent.group.parent;
                        }
                    }
                    break;
                // TODO DRY the MIN and MAX functions
                case TotalMode.MIN:
                    if (_isNumber) {
                        const currentTotalValue = groupRow.group.totals[key];
                        const cellValue = dom.ketchup.math.numberify(
                            stringToNumber(cell.value)
                        );
                        if (currentTotalValue) {
                            groupRow.group.totals[key] = Math.min(
                                currentTotalValue,
                                cellValue
                            );
                        } else {
                            // first round
                            groupRow.group.totals[key] = cellValue;
                        }
                        // updating parents
                        let parent = groupRow.group.parent;
                        while (parent != null) {
                            const currentParentMin = parent.group.totals[key];
                            if (currentParentMin) {
                                parent.group.totals[key] = Math.min(
                                    currentParentMin,
                                    cellValue
                                );
                            } else {
                                // first round
                                parent.group.totals[key] = cellValue;
                            }
                            parent = parent.group.parent;
                        }
                    } else if (dom.ketchup.objects.isDate(cell.obj)) {
                        const momentValue = cell.obj
                            ? dom.ketchup.objects.parseDate(cell.obj)
                            : dom.ketchup.dates.toDayjs(cell.value);
                        if (dom.ketchup.dates.isValid(momentValue)) {
                            const cellValue =
                                dom.ketchup.dates.toDate(momentValue);
                            const currentTotalValue =
                                groupRow.group.totals[key];
                            if (currentTotalValue) {
                                let moments = [];
                                moments.push(cellValue);
                                moments.push(
                                    dom.ketchup.dates.format(currentTotalValue)
                                );
                                groupRow.group.totals[key] =
                                    dom.ketchup.dates.format(
                                        dom.ketchup.dates.min(moments)
                                    );
                            } else {
                                groupRow.group.totals[key] = cellValue;
                            }
                            // updating parents
                            let parent = groupRow.group.parent;
                            while (parent != null) {
                                const currentParentMin =
                                    parent.group.totals[key];
                                if (currentParentMin) {
                                    let moments = [];
                                    moments.push(cellValue);
                                    moments.push(
                                        dom.ketchup.dates.format(
                                            currentParentMin
                                        )
                                    );
                                    parent.group.totals[key] =
                                        dom.ketchup.dates.format(
                                            dom.ketchup.dates.min(moments)
                                        );
                                } else {
                                    // first round
                                    parent.group.totals[key] = cellValue;
                                }
                                parent = parent.group.parent;
                            }
                        }
                    }
                    break;
                // TODO DRY the MIN and MAX functions
                case TotalMode.MAX:
                    if (_isNumber) {
                        const currentTotalValue = groupRow.group.totals[key];
                        const cellValue = dom.ketchup.math.numberify(
                            stringToNumber(cell.value)
                        );
                        if (currentTotalValue) {
                            groupRow.group.totals[key] = Math.max(
                                currentTotalValue,
                                cellValue
                            );
                        } else {
                            // first round
                            groupRow.group.totals[key] = cellValue;
                        }
                        // updating parents
                        let parent = groupRow.group.parent;
                        while (parent != null) {
                            const currentParentMax = parent.group.totals[key];
                            if (currentParentMax) {
                                parent.group.totals[key] = Math.max(
                                    currentParentMax,
                                    cellValue
                                );
                            } else {
                                // first round
                                parent.group.totals[key] = cellValue;
                            }
                            parent = parent.group.parent;
                        }
                    } else if (dom.ketchup.objects.isDate(cell.obj)) {
                        const momentValue = cell.obj
                            ? dom.ketchup.objects.parseDate(cell.obj)
                            : dom.ketchup.dates.toDayjs(cell.value);
                        if (dom.ketchup.dates.isValid(momentValue)) {
                            const cellValue =
                                dom.ketchup.dates.toDate(momentValue);
                            const currentTotalValue =
                                groupRow.group.totals[key];
                            if (currentTotalValue) {
                                let moments = [];
                                moments.push(cellValue);
                                moments.push(
                                    dom.ketchup.dates.format(currentTotalValue)
                                );
                                groupRow.group.totals[key] =
                                    dom.ketchup.dates.format(
                                        dom.ketchup.dates.max(moments)
                                    );
                            } else {
                                groupRow.group.totals[key] = cellValue;
                            }
                            // updating parents
                            let parent = groupRow.group.parent;
                            while (parent != null) {
                                const currentParentMin =
                                    parent.group.totals[key];
                                if (currentParentMin) {
                                    let moments = [];
                                    moments.push(cellValue);
                                    moments.push(
                                        dom.ketchup.dates.format(
                                            currentParentMin
                                        )
                                    );
                                    parent.group.totals[key] =
                                        dom.ketchup.dates.format(
                                            dom.ketchup.dates.max(moments)
                                        );
                                } else {
                                    // first round
                                    parent.group.totals[key] = cellValue;
                                }
                                parent = parent.group.parent;
                            }
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

function adjustGroupsDistinct(
    groupRows: Array<KupDataTableRow>,
    totals: TotalsMap,
    distinctObj: Object
) {
    if (!groupRows || !totals) {
        return;
    }

    const keys = Object.keys(totals);

    if (groupRows.length === 0 || !groupRows[0].group || keys.length === 0) {
        return;
    }

    let toAdjustKeys = keys.filter((key) => TotalMode.DISTINCT === totals[key]);

    if (toAdjustKeys.length > 0) {
        groupRows
            .filter((groupRow) => groupRow.group.children.length > 0)
            .forEach((groupRow) =>
                adjustGroupDistinct(groupRow, toAdjustKeys, distinctObj)
            );
    }
}

function adjustGroupsAverageOrFormula(
    groupRows: Array<KupDataTableRow>,
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

function adjustGroupDistinct(
    groupRow: KupDataTableRow,
    toAdjustKeys: Array<string>,
    distinctObj: Object
) {
    const children = groupRow.group.children;

    if (children.length === 0) {
        return;
    }

    if (children[0].group) {
        children.forEach((child) => {
            adjustGroupDistinct(child, toAdjustKeys, distinctObj);
        });
    }

    toAdjustKeys.forEach((key) => {
        const distinctList = distinctObj[groupRow.group.id][key];
        groupRow.group.totals[key] = new Set(distinctList).size;
    });
}

/**
 * @returns number of 'leaf' of group
 */
function adjustGroupAverageOrFormula(
    row: KupDataTableRow,
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
            row.group.totals[key] =
                dom.ketchup.math.numberify(row.group.totals[key]) /
                numberOfLeaf;
        }
        if (type == TotalMode.MATH) {
            let formula = totals[key].substring(TotalMode.MATH.length);
            row.group.totals[key] = dom.ketchup.math.formulas.custom(
                formula,
                row.group.totals
            );
        }
    });

    return numberOfLeaf;
}

export function normalizeRows(
    columns: Array<KupDataColumn>,
    rows: Array<KupDataTableRow>
): Array<KupDataTableRow> {
    if (rows) {
        const normalizedrows = Object.assign(rows);
        rows.forEach((row: KupDataTableRow) => {
            columns.forEach((column) => {
                if (row.cells) {
                    const cell = row.cells[column.name];
                    if (cell && column.obj && !cell.obj) {
                        // cell.obj = Object.assign(column.obj);
                        cell.obj = {
                            t: column.obj.t,
                            p: column.obj.p,
                            k: cell.value,
                        };
                    }
                }
            });
        });
        return normalizedrows;
    } else {
        return undefined;
    }
}

export function calcTotals(
    rows: Array<KupDataTableRow> = [],
    totals: { [index: string]: TotalMode } = {}
): { [index: string]: number } {
    if (
        dom.ketchup.objects.isEmptyJsObject(rows) ||
        dom.ketchup.objects.isEmptyJsObject(totals)
    ) {
        return {};
    }
    const keys = Object.keys(totals);
    const footerRow: { [index: string]: any } = {};
    const dateColumns: string[] = new Array();

    // if there are only COUNT, no need to loop on rows
    let onlyCount =
        keys.length === 0 ||
        keys.every((key) => totals[key] === TotalMode.COUNT);
    if (onlyCount) {
        keys.forEach((columnName) => (footerRow[columnName] = rows.length));
    } else {
        let distinctObj = {};
        rows.forEach((r, index, array) => {
            keys.filter(
                (key) =>
                    TotalMode.COUNT !== totals[key] &&
                    totals[key].indexOf(TotalMode.MATH) != 0
            ).forEach((key) => {
                // getting cell
                const cell = r.cells[key];
                if (cell) {
                    if (totals[key] === TotalMode.DISTINCT) {
                        let cellValue;
                        if (dom.ketchup.objects.isNumber(cell.obj)) {
                            cellValue = dom.ketchup.math.numberify(
                                stringToNumber(cell.value)
                            );
                        } else {
                            cellValue = cell.value;
                        }
                        let distinctList = distinctObj[key];
                        if (!distinctList) {
                            // first round
                            distinctObj[key] = [];
                            distinctObj[key].push(cellValue);
                        } else {
                            // update the list
                            distinctList.push(cellValue);
                        }
                    } else if (dom.ketchup.objects.isNumber(cell.obj)) {
                        const cellValue = dom.ketchup.math.numberify(
                            stringToNumber(cell.value)
                        );
                        let currentFooterValue = footerRow[key];
                        switch (true) {
                            // TODO DRY the MIN and MAX functions
                            case totals[key] === TotalMode.MIN:
                                if (currentFooterValue) {
                                    footerRow[key] = Math.min(
                                        currentFooterValue,
                                        cellValue
                                    );
                                } else {
                                    footerRow[key] = cellValue;
                                }
                                break;
                            case totals[key] === TotalMode.MAX:
                                if (currentFooterValue) {
                                    footerRow[key] = Math.max(
                                        currentFooterValue,
                                        cellValue
                                    );
                                } else {
                                    footerRow[key] = cellValue;
                                }
                                break;
                            default:
                                // SUM
                                currentFooterValue = footerRow[key] || 0;
                                footerRow[key] =
                                    cellValue +
                                    dom.ketchup.math.numberify(
                                        currentFooterValue
                                    );
                        }
                        // TODO DRY the MIN and MAX functions
                    } else if (dom.ketchup.objects.isDate(cell.obj)) {
                        if (dateColumns.indexOf(key) == -1) {
                            dateColumns.push(key);
                        }
                        const momentValue = dom.ketchup.dates.toDayjs(
                            cell.value
                        );
                        if (dom.ketchup.dates.isValid(momentValue)) {
                            const cellValue =
                                dom.ketchup.dates.toDate(momentValue);
                            const currentFooterValue = footerRow[key]
                                ? dom.ketchup.dates.toDate(
                                      dom.ketchup.dates.toDayjs(footerRow[key])
                                  )
                                : null;
                            switch (true) {
                                case totals[key] === TotalMode.MIN:
                                    if (currentFooterValue) {
                                        let moments = [];
                                        moments.push(cellValue);
                                        moments.push(currentFooterValue);
                                        footerRow[key] =
                                            dom.ketchup.dates.format(
                                                dom.ketchup.dates.min(moments),
                                                KupDatesFormats.ISO_DATE
                                            );
                                    } else {
                                        footerRow[key] =
                                            dom.ketchup.dates.format(
                                                cellValue,
                                                KupDatesFormats.ISO_DATE
                                            );
                                    }
                                    break;
                                case totals[key] === TotalMode.MAX:
                                    if (currentFooterValue) {
                                        let moments = [];
                                        moments.push(cellValue);
                                        moments.push(currentFooterValue);
                                        footerRow[key] =
                                            dom.ketchup.dates.format(
                                                dom.ketchup.dates.max(moments),
                                                KupDatesFormats.ISO_DATE
                                            );
                                    } else {
                                        footerRow[key] =
                                            dom.ketchup.dates.format(
                                                cellValue,
                                                KupDatesFormats.ISO_DATE
                                            );
                                    }
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                }
                if (
                    index === array.length - 1 &&
                    totals[key] === TotalMode.DISTINCT
                ) {
                    // last round
                    footerRow[key] = new Set(distinctObj[key]).size;
                    distinctObj[key] = [];
                }
            });
        });
    }
    // fixing MATH, AVERAGE and COUNT
    for (let key of keys) {
        switch (true) {
            case totals[key] === TotalMode.AVERAGE:
                const sum: number = footerRow[key];
                if (sum && rows.length > 0) {
                    footerRow[key] = sum / rows.length;
                }
                break;
            case totals[key] === TotalMode.COUNT:
                footerRow[key] = rows.length;
                break;
            case totals[key].indexOf(TotalMode.MATH) == 0:
                footerRow[key] = dom.ketchup.math.formulas.custom(
                    totals[key].substring(TotalMode.MATH.length),
                    footerRow
                );
                break;
            default:
                break;
        }
        if (footerRow[key]) {
            if (dateColumns.indexOf(key) != -1) {
                footerRow[key] = dom.ketchup.dates.format(footerRow[key]);
            } else if (isNumber(footerRow[key])) {
                footerRow[key] = +footerRow[key].toFixed(2);
            }
        }
    }
    return footerRow;
}

function adjustGroupId(row: KupDataTableRow): void {
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

export function paginateRows(
    rows: KupDataTableRow[],
    currentPage: number,
    rowsPerPage: number,
    areGrouped: boolean
) {
    const start: number = currentPage * rowsPerPage - rowsPerPage;
    const end: number = start + Number(rowsPerPage);
    if (areGrouped == false) {
        return rows.slice(start, end);
    }
    let pagRows: Array<KupDataTableRow> = [];

    _paginateRows(rows, pagRows, start, Number(rowsPerPage), 0);

    return pagRows;
}

function _paginateRows(
    rows: KupDataTableRow[],
    pagRows: KupDataTableRow[],
    start: number,
    rowsPerPage: number,
    ci: number
): { ci: number; added: boolean } {
    let added: boolean = false;
    for (let i: number = 0; i < rows.length; i++) {
        let originalRow = rows[i];
        let row: KupDataTableRow = cloneRow(rows[i]);
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

function cloneRow(row: KupDataTableRow): KupDataTableRow {
    if (row == null) {
        return null;
    }
    let cloned: KupDataTableRow = {
        id: row.id,
        cells: { ...row.cells },
        actions: row.actions ? [...row.actions] : null,
        group: cloneRowGroup(row.group),
        readOnly: row.readOnly,
        cssClass: row.cssClass,
    };

    return cloned;
}

function cloneRows(rows: Array<KupDataTableRow>): Array<KupDataTableRow> {
    if (rows == null) {
        return null;
    }
    let cloned: Array<KupDataTableRow> = [];
    for (let i: number = 0; i < rows.length; i++) {
        cloned[cloned.length] = cloneRow(rows[i]);
    }
    return cloned;
}

function cloneRowGroup(group: KupDataTableRowGroup): KupDataTableRowGroup {
    if (group == null) {
        return null;
    }
    let cloned: KupDataTableRowGroup = {
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
