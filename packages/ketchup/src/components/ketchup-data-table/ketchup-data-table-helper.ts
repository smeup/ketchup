import numeral from 'numeral';
import moment from 'moment';

import {
    Row,
    SortObject,
    Cell,
    SortMode,
    GenericMap,
    GroupObject,
    TotalMode,
    TotalsMap,
} from './ketchup-data-table-declarations';

export function sortRows(
    rows: Array<Row> = [],
    sort: Array<SortObject> = []
): Array<Row> {
    if (!rows) {
        return [];
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
                const sortObj = sort[i];

                // TODO refactor with single sort
                // check if grouping row
                if (r1.group) {
                    // sort children
                    r1.group.children = sortRows(r1.group.children);
                    r2.group.children = sortRows(r2.group.children);

                    // check if valid group
                    if (r1.group.column !== sortObj.column) {
                        return 0;
                    }

                    // comparing group
                    const group1 = r1.group.label;
                    const group2 = r2.group.label;

                    const sm = sortObj.sortMode === 'A' ? 1 : -1;

                    return sm * group1.localeCompare(group2);
                } else {
                    const cell1: Cell = r1.cells[sortObj.column];
                    const cell2: Cell = r2.cells[sortObj.column];

                    const compare = compareCell(cell1, cell2, sortObj.sortMode);

                    if (compare !== 0) {
                        return compare;
                    }
                }
            }

            // same row
            return 0;
        } else {
            const sortObj = sort[0];

            // check if grouping row
            if (r1.group) {
                // sort children
                r1.group.children = sortRows(r1.group.children);
                r2.group.children = sortRows(r2.group.children);

                // check if valid group
                if (r1.group.column !== sortObj.column) {
                    return 0;
                }

                // comparing group
                const group1 = r1.group.label;
                const group2 = r2.group.label;

                const sm = sortObj.sortMode === 'A' ? 1 : -1;

                return sm * group1.localeCompare(group2);
            } else {
                const cell1: Cell = r1.cells[sortObj.column];
                const cell2: Cell = r2.cells[sortObj.column];

                return compareCell(cell1, cell2, sortObj.sortMode);
            }
        }
    });
}

export function filterRows(
    rows: Array<Row> = [],
    filters: GenericMap = {},
    globalFilter: string = '',
    columns: Array<string> = []
) {
    if (!rows) {
        return [];
    }

    if (
        (filters && Object.keys(filters).length > 0) ||
        (globalFilter && columns)
    ) {
        let keys: Array<string>;
        if (filters) {
            keys = Object.keys(filters);
        } else {
            keys = [];
        }

        // filtering rows
        return rows.filter((r: Row) => {
            // check global filter
            if (globalFilter && columns) {
                if (columns.length === 0) {
                    return true;
                }

                let found = false;

                for (let i = 0; i < columns.length; i++) {
                    const c = columns[i];
                    const cellValue = r.cells[c].value;

                    if (
                        cellValue
                            .toLowerCase()
                            .includes(globalFilter.toLocaleLowerCase())
                    ) {
                        found = true;
                        break;
                    }
                }

                if (!found) {
                    return false;
                }
            }

            if (keys.length === 0) {
                return true;
            }

            return (
                keys.filter((key) => {
                    const filterValue = filters[key];

                    // getting cell value
                    const cellValue = r.cells[key];
                    if (!cellValue || !cellValue.value) {
                        return false;
                    }

                    if (
                        cellValue.value
                            .toLowerCase()
                            .includes(filterValue.toLowerCase())
                    ) {
                        return true;
                    }
                }).length === keys.length
            );
        });
    }

    return rows;
}

export function groupRows(
    rows: Array<Row> = [],
    groups: Array<GroupObject> = [],
    totals: TotalsMap = {}
): Array<Row> {
    if (!rows) {
        return [];
    }

    if (!groups || groups.length === 0) {
        return rows;
    }

    // creating root
    const groupRows: Array<Row> = [];

    rows.forEach((row: Row) => {
        // getting column name from first group
        const columnName = groups[0].column;

        // getting row value
        const cellValue = row.cells[columnName].value;

        // check in already in groupedRow
        let groupRow: Row = null;
        for (let i = 0; i < groupRows.length; i++) {
            const currentGroupRow = groupRows[i];

            if (currentGroupRow.group.label === cellValue) {
                groupRow = currentGroupRow;
                break;
            }
        }

        if (groupRow === null) {
            // create group row
            groupRow = {
                group: {
                    parent: null,
                    column: columnName,
                    expanded: false,
                    label: cellValue,
                    children: [],
                    totals: {},
                },
                cells: {},
            };

            // add group to list
            groupRows.push(groupRow);
        }

        for (let i = 1; i < groups.length; i++) {
            const group = groups[i];

            // getting cell value
            const tempCellValue = row.cells[group.column].value;

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
                        parent: groupRow,
                        column: group.column,
                        children: [],
                        expanded: false,
                        label: tempCellValue,
                        totals: {},
                    },
                };
                groupRow.group.children.push(tempGroupingRow);
            }

            groupRow = tempGroupingRow;
        }

        // adding row
        groupRow.group.children.push(row);

        updateGroupTotal(groupRow, totals, row);
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

        const isNumber = cell.obj.t === 'NR';

        const totalMode = totals[key];

        switch (totalMode) {
            case TotalMode.COUNT:
                groupRow.group.totals[key] = currentTotalValue + 1;

                // updating parents
                let parent = groupRow.group.parent;
                while (parent != null) {
                    const currentParentCount = parent.group.totals[key] || 0;

                    parent.group.totals[key] = currentParentCount + 1;

                    parent = parent.group.parent;
                }
                break;

            case TotalMode.SUM:
            case TotalMode.AVARAGE:
                if (isNumber) {
                    const cellValue = numeral(cell.obj.k);

                    groupRow.group.totals[key] = cellValue
                        .add(currentTotalValue)
                        .value();

                    // updating parents
                    let parent = groupRow.group.parent;
                    while (parent != null) {
                        const currentParentSum = parent.group.totals[key] || 0;

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

export function calcTotals(
    rows: Array<Row> = [],
    totals: { [index: string]: TotalMode } = {}
): { [index: string]: number } {
    if (!rows || !totals) {
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
                    if (cell.obj.t === 'NR') {
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
                    footerRow[key] = numeral(sum)
                        .divide(rows.length)
                        .value();
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

    if (!(obj1.t === obj2.t && obj1.p === obj2.p)) {
        let compare = obj1.t.localeCompare(obj2.t);
        if (compare === 0) {
            compare = obj1.p.localeCompare(obj2.p);
        }
        return compare;
    }

    // number
    if ('NR' === obj1.t) {
        const n1: number = numeral(obj1.k).value();
        const n2: number = numeral(obj2.k).value();

        if (n1 === n2) {
            return 0;
        }

        if (n1 > n2) {
            return sm * 1;
        } else {
            return sm * -1;
        }
    }

    // date
    if ('D8' === obj1.t) {
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
            return obj1.k.localeCompare(obj2.k);
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

    // sort by cell value
    let value1 = cell1.value;
    let value2 = cell2.value;

    return sm * value1.localeCompare(value2);
}
