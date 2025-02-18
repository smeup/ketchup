import {
    SortObject,
    SortMode,
    GroupObject,
    TotalMode,
    TotalsMap,
    KupDataTableRow,
    KupDataTableRowGroup,
    KupDataTableCell,
    KupDataTableDataset,
} from './kup-data-table-declarations';
import { GenericFilter } from '../../utils/filters/filters-declarations';
import { FiltersColumnMenu } from '../../utils/filters/filters-column-menu';
import {
    getCellValueForDisplay,
    getColumnByName,
    compareCell,
    CMBandACPAdapter,
    RADAdapter,
    CHKAdapter,
    CHIAdapter,
    SWTAdapter,
} from '../../utils/cell-utils';
import { FiltersRows } from '../../utils/filters/filters-rows';
import { KupDom } from '../../managers/kup-manager/kup-manager-declarations';
import {
    KupDataColumn,
    KupDataDataset,
} from '../../managers/kup-data/kup-data-declarations';
import { KupDatesFormats } from '../../managers/kup-dates/kup-dates-declarations';
import { FCellShapes } from '../../f-components/f-cell/f-cell-declarations';
import { getRegExpFromString } from '../../utils/utils';

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
        const cell = addedRow.cells[key];

        if (cell) {
            const _isNumber = dom.ketchup.objects.isNumber(cell.obj);
            const totalMode = totals[key];

            switch (totalMode) {
                case TotalMode.COUNT:
                    let currentTotalValue: number =
                        groupRow.group.totals[key] || 0;
                    groupRow.group.totals[key] = ++currentTotalValue;
                    // updating parents
                    let parent = groupRow.group.parent;
                    while (parent != null) {
                        let currentParentCount: number =
                            parent.group.totals[key] || 0;
                        parent.group.totals[key] = ++currentParentCount;
                        parent = parent.group.parent;
                    }
                    break;
                case TotalMode.DISTINCT:
                    let cellValue;
                    if (_isNumber) {
                        cellValue = dom.ketchup.math.numberify(
                            dom.ketchup.math.numberifySafe(cell.value)
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
                    if (_isNumber && cell.value) {
                        const cellValue = dom.ketchup.math.numberify(
                            dom.ketchup.math.numberifySafe(cell.value)
                        );

                        const currentTotalValue: number =
                            groupRow.group.totals[key] || 0;
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
                    if (_isNumber && cell.value) {
                        const currentMinValue = groupRow.group.totals[key];
                        const cellValue = dom.ketchup.math.numberify(
                            dom.ketchup.math.numberifySafe(cell.value)
                        );
                        if (currentMinValue) {
                            groupRow.group.totals[key] = Math.min(
                                currentMinValue,
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
                    } else if (
                        cell.value &&
                        dom.ketchup.objects.isDate(cell.obj)
                    ) {
                        if (
                            dom.ketchup.dates.isValidFormattedStringDate(
                                cell.value
                            )
                        ) {
                            const currentMinValue = groupRow.group.totals[key];
                            if (currentMinValue) {
                                let moments = [];
                                moments.push(cellValue);
                                moments.push(
                                    dom.ketchup.dates.toDayjs(currentMinValue)
                                );
                                groupRow.group.totals[key] =
                                    dom.ketchup.dates.format(
                                        dom.ketchup.dates.min(moments),
                                        KupDatesFormats.ISO_DATE
                                    );
                            } else {
                                groupRow.group.totals[key] =
                                    dom.ketchup.dates.format(
                                        cellValue,
                                        KupDatesFormats.ISO_DATE
                                    );
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
                                        dom.ketchup.dates.toDayjs(
                                            currentParentMin
                                        )
                                    );
                                    parent.group.totals[key] =
                                        dom.ketchup.dates.format(
                                            dom.ketchup.dates.min(moments),
                                            KupDatesFormats.ISO_DATE
                                        );
                                } else {
                                    // first round
                                    parent.group.totals[key] =
                                        dom.ketchup.dates.format(
                                            cellValue,
                                            KupDatesFormats.ISO_DATE
                                        );
                                }
                                parent = parent.group.parent;
                            }
                        }
                    }
                    break;
                // TODO DRY the MIN and MAX functions
                case TotalMode.MAX:
                    if (_isNumber && cell.value) {
                        const currentMaxValue = groupRow.group.totals[key];
                        const cellValue = dom.ketchup.math.numberify(
                            dom.ketchup.math.numberifySafe(cell.value)
                        );
                        if (currentMaxValue) {
                            groupRow.group.totals[key] = Math.max(
                                currentMaxValue,
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
                    } else if (
                        cell.value &&
                        dom.ketchup.objects.isDate(cell.obj)
                    ) {
                        if (
                            dom.ketchup.dates.isValidFormattedStringDate(
                                cell.value
                            )
                        ) {
                            const currentMaxValue = groupRow.group.totals[key];
                            if (currentMaxValue) {
                                let moments = [];
                                moments.push(cellValue);
                                moments.push(
                                    dom.ketchup.dates.toDayjs(currentMaxValue)
                                );
                                groupRow.group.totals[key] =
                                    dom.ketchup.dates.format(
                                        dom.ketchup.dates.max(moments),
                                        KupDatesFormats.ISO_DATE
                                    );
                            } else {
                                groupRow.group.totals[key] =
                                    dom.ketchup.dates.format(
                                        cellValue,
                                        KupDatesFormats.ISO_DATE
                                    );
                            }
                            // updating parents
                            let parent = groupRow.group.parent;
                            while (parent != null) {
                                const currentParentMax =
                                    parent.group.totals[key];
                                if (currentParentMax) {
                                    let moments = [];
                                    moments.push(cellValue);
                                    moments.push(
                                        dom.ketchup.dates.toDayjs(
                                            currentParentMax
                                        )
                                    );
                                    parent.group.totals[key] =
                                        dom.ketchup.dates.format(
                                            dom.ketchup.dates.max(moments),
                                            KupDatesFormats.ISO_DATE
                                        );
                                } else {
                                    // first round
                                    parent.group.totals[key] =
                                        dom.ketchup.dates.format(
                                            cellValue,
                                            KupDatesFormats.ISO_DATE
                                        );
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
            row.group.totals[key] = row.group.totals[key] / numberOfLeaf;
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
    totals: TotalsMap,
    columns: KupDataColumn[],
    rows: Array<KupDataTableRow>
): { [index: string]: string } {
    if (
        dom.ketchup.objects.isEmptyJsObject(rows) ||
        dom.ketchup.objects.isEmptyJsObject(totals)
    ) {
        return {};
    }

    const footerRow: { [columnName: string]: string } = {};
    const totalsEntriesWithFormula: [string, string][] = [];

    const filteredTotalsColumns = columns.reduce<
        {
            totalOperation: string;
            totalColumn: KupDataColumn;
            columnValues: string[];
        }[]
    >((filteredTotalsColumns, column) => {
        if (!totals[column.name]) {
            return filteredTotalsColumns;
        }
        const totalOperation = totals[column.name];
        // Calc COUNT
        if (totalOperation === TotalMode.COUNT) {
            footerRow[column.name] = rows.length.toString();
            return filteredTotalsColumns;
        }

        // Populate MATH operations array
        if (totalOperation.indexOf(TotalMode.MATH) === 0) {
            totalsEntriesWithFormula.push([column.name, totalOperation]);
            return filteredTotalsColumns;
        }

        // Get totals columns
        filteredTotalsColumns.push({
            totalOperation,
            totalColumn: column,
            columnValues: rows.map((row) => row.cells[column.name].value),
        });
        return filteredTotalsColumns;
    }, []);

    if (!filteredTotalsColumns && !totalsEntriesWithFormula) {
        return footerRow;
    }

    // Calc SUM, AVERAGE, MIN, MAX and DISTINCT
    filteredTotalsColumns?.forEach(
        ({ totalOperation, totalColumn, columnValues }) => {
            if (dom.ketchup.objects.isNumber(totalColumn.obj)) {
                if (totalOperation === TotalMode.SUM) {
                    footerRow[totalColumn.name] = columnValues
                        .reduce((sum, value) => {
                            sum += dom.ketchup.math.numberifySafe(value);
                            return sum;
                        }, 0)
                        .toString();
                    return;
                }

                if (totalOperation === TotalMode.AVERAGE) {
                    footerRow[totalColumn.name] = (
                        columnValues.reduce((sum, value) => {
                            sum += dom.ketchup.math.numberifySafe(value);
                            return sum;
                        }, 0) / rows.length
                    ).toString();
                    return;
                }

                if (totalOperation === TotalMode.MIN) {
                    footerRow[totalColumn.name] = Math.min(
                        ...columnValues.map((value) =>
                            dom.ketchup.math.numberifySafe(value)
                        )
                    ).toString();
                    return;
                }

                if (totalOperation === TotalMode.MAX) {
                    footerRow[totalColumn.name] = Math.max(
                        ...columnValues.map((value) =>
                            dom.ketchup.math.numberifySafe(value)
                        )
                    ).toString();
                    return;
                }
            }

            if (dom.ketchup.objects.isDate(totalColumn.obj)) {
                const dates = columnValues
                    .filter((value) => dom.ketchup.dates.isIsoDate(value))
                    .map((value) =>
                        dom.ketchup.dates.toDate(
                            value,
                            KupDatesFormats.ISO_DATE
                        )
                    );
                if (!dates) {
                    return;
                }

                if (totalOperation === TotalMode.MIN) {
                    footerRow[totalColumn.name] = dom.ketchup.dates.format(
                        dom.ketchup.dates.min(dates),
                        KupDatesFormats.ISO_DATE
                    );
                    return;
                }
                if (totalOperation === TotalMode.MAX) {
                    footerRow[totalColumn.name] = dom.ketchup.dates.format(
                        dom.ketchup.dates.max(dates),
                        KupDatesFormats.ISO_DATE
                    );
                    return;
                }
            }

            if (totalOperation === TotalMode.DISTINCT) {
                footerRow[totalColumn.name] = new Set(
                    columnValues
                ).size.toString();
            }
        }
    );

    // Calc MATH
    totalsEntriesWithFormula?.forEach(([columnName, totalOperation]) => {
        const formula = totalOperation?.replace(
            getRegExpFromString(TotalMode.MATH, 'g'),
            ''
        );

        footerRow[columnName] = dom.ketchup.math.formulas
            .custom(formula, getFooterRowOnlyNumbers(footerRow))
            .toString();
    });

    return footerRow;
}

export function getFooterRowOnlyNumbers(footerRow: {
    [index: string]: string;
}): { [index: string]: number } {
    return Object.fromEntries(
        Object.entries(footerRow)?.reduce<[string, number][]>(
            (footerRowOnlyNumbers, [columnName, totalResult]) => {
                if (dom.ketchup.math.isNumber(totalResult)) {
                    footerRowOnlyNumbers.push([
                        columnName,
                        Number(totalResult),
                    ]);
                }
                return footerRowOnlyNumbers;
            },
            []
        )
    );
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
    } else {
        return {
            id: row.id,
            cells: { ...row.cells },
            actions: row.actions ? [...row.actions] : null,
            group: cloneRowGroup(row.group),
            clonedFrom: row,
            readOnly: row.readOnly,
            cssClass: row.cssClass,
        };
    }
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

/**
 * Returns a KupDataDataset obtained as the difference between originalData and modifiedData
 * The checked data are cell.value and cell.obj.k with the same column and row
 * @param originalData
 * @param modifiedData
 * @param includesAlsoEmptyRows
 * @returns
 */
export function getDiffData(
    originalData: KupDataDataset,
    modifiedData: KupDataDataset,
    includesAlsoEmptyRows: boolean = false
): KupDataDataset {
    const diffDataTable = {
        columns: modifiedData.columns.filter((col) => col.visible),
        rows: [],
    };

    for (const modifiedRow of modifiedData.rows) {
        const newRow = { cells: {}, id: modifiedRow.id };

        for (const column of diffDataTable.columns) {
            const cellKey = column.name;
            const modifiedCell = modifiedRow.cells[cellKey];

            const originalRow = originalData.rows.find(
                (row) => row.id === modifiedRow.id
            );
            const originalCell = originalRow
                ? originalRow.cells[cellKey]
                : null;

            if (
                (!originalCell && !!modifiedCell.value) ||
                (originalCell && modifiedCell.value !== originalCell.value)
            ) {
                newRow.cells[cellKey] = modifiedCell;
            }
        }

        if (Object.keys(newRow.cells).length > 0 || includesAlsoEmptyRows) {
            diffDataTable.rows.push(newRow);
        }
    }

    return diffDataTable;
}

export function decorateDataTable(data: KupDataTableDataset) {
    data.rows?.forEach((row) => {
        Object.keys(row.cells).forEach((cellKey) => {
            let cell: KupDataTableCell = row.cells[cellKey];

            const value = cell.value;
            const decode = cell.decode;
            const options = cell['options'];
            cell.isEditable = cell.isEditable ?? cell['editable'];
            const shapeAdapters = {
                [FCellShapes.AUTOCOMPLETE]: () =>
                    CMBandACPAdapter(value, '', options),
                [FCellShapes.COMBOBOX]: () =>
                    CMBandACPAdapter(value, '', options),
                [FCellShapes.RADIO]: () => RADAdapter(value, options),
                [FCellShapes.CHECKBOX]: () => CHKAdapter(value, ''),
                [FCellShapes.CHIP]: () => CHIAdapter(value, decode),
                [FCellShapes.SWITCH]: () => SWTAdapter(value, ''),
                [FCellShapes.MULTI_AUTOCOMPLETE]: () =>
                    CHIAdapter(value, decode),
                [FCellShapes.MULTI_COMBOBOX]: () => CHIAdapter(value, decode),
            };

            const adapterFunction = shapeAdapters[cell.shape];

            if (adapterFunction) {
                cell.data = { ...adapterFunction(), ...cell.data };
            }
        });
    });
}
