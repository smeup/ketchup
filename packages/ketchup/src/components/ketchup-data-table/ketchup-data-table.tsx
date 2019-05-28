import {
    Component,
    Event,
    EventEmitter,
    Prop,
    State,
    Watch,
    JSXElements,
} from '@stencil/core';

import {
    Column,
    PaginatorPos,
    SortMode,
    SortObject,
    Row,
    Cell,
    TotalMode,
    GenericMap,
    GroupObject,
} from './ketchup-data-table-declarations';

import numeral from 'numeral';
import moment from 'moment';

@Component({
    tag: 'kup-data-table',
    styleUrl: 'ketchup-data-table.scss',
    shadow: true,
})
export class KetchupDataTable {
    @Prop() data: { columns?: Array<Column>; rows?: Array<Row> };

    @Prop()
    showFilters = false;

    @Prop({ mutable: true })
    filters: GenericMap = {};

    @Prop()
    totals: {
        [index: string]: TotalMode;
    };

    @Prop()
    globalFilter = false;

    @Prop()
    sortEnabled = true;

    @Prop({ mutable: true })
    sort: Array<SortObject> = [];

    @Prop()
    rowsPerPage = 10;

    @Prop()
    paginatorPos: PaginatorPos = PaginatorPos.TOP;

    @Prop()
    columnsWidth: Array<{
        column: string;
        width: number;
    }> = [];

    @Prop()
    showHeader = true;

    @Prop()
    showGrid = true;

    @Prop()
    selectRow: number;

    @Prop()
    groups: Array<GroupObject> = [];

    @State()
    private globalFilterValue = '';

    @State()
    private currentPage = 1;

    @State()
    private currentRowsPerPage = 10;

    @State()
    private selectedRow: Row = null;

    @State()
    private groupState: {
        [index: string]: {
            expanded: boolean;
        };
    } = {};

    @Watch('rowsPerPage')
    rowsPerPageHandler(newValue: number) {
        this.currentRowsPerPage = newValue;
    }

    /**
     * When a row is selected
     */
    @Event({
        eventName: 'kupRowSelected',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupRowSelected: EventEmitter<{ row: Row }>;

    // lifecycle
    componentWillLoad() {
        this.rowsPerPageHandler(this.rowsPerPage);

        if (this.selectRow && this.selectRow > 0) {
            const sortedRows = this.sortRows(this.getFilteredRows());

            if (this.selectRow <= sortedRows.length) {
                this.selectedRow = sortedRows[this.selectRow - 1];
                this.kupRowSelected.emit({ row: this.selectedRow });
            }
        }
    }

    private getColumns(): Array<Column> {
        return this.data && this.data.columns
            ? this.data.columns
            : [{ title: '', name: '', size: 0 }];
    }

    private getRows(): Array<Row> {
        return this.data && this.data.rows ? this.data.rows : [];
    }

    private isGrouping() {
        return this.groups && this.groups.length > 0;
    }

    private getFilteredRows(): Array<any> {
        if (
            (this.filters && Object.keys(this.filters).length > 0) ||
            this.globalFilter
        ) {
            const keys = Object.keys(this.filters);

            // filtering rows
            return this.getRows().filter((r: Row) => {
                // check global filter
                if (this.globalFilter) {
                    let found = false;

                    for (let i = 0; i < this.data.columns.length; i++) {
                        const c = this.data.columns[i];
                        const cellValue = r.cells[c.name].value;

                        if (
                            cellValue
                                .toLowerCase()
                                .includes(
                                    this.globalFilterValue.toLocaleLowerCase()
                                )
                        ) {
                            found = true;
                            break;
                        }
                    }

                    if (!found) {
                        return false;
                    }
                }

                return (
                    keys.filter((key) => {
                        const filterValue = this.filters[key];

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

        return this.getRows();
    }

    private onColumnSort(e: MouseEvent) {
        const columnName: string = (e.target as HTMLElement).dataset.col;

        // check if columnName is already in sort array
        let i = 0;
        for (; i < this.sort.length; i++) {
            const sortObj = this.sort[i];
            if (sortObj.column === columnName) {
                break;
            }
        }

        if (i < this.sort.length) {
            // already in array... switching sort
            const sortObj = this.sort[i];

            const newSortObj: SortObject = {
                ...sortObj,
                sortMode:
                    sortObj.sortMode === SortMode.A ? SortMode.D : SortMode.A,
            };

            if (e.ctrlKey) {
                const newSort = [...this.sort];
                newSort[i] = newSortObj;
                this.sort = newSort;
            } else {
                this.sort = [newSortObj];
            }
        } else {
            const sortObj: SortObject = {
                column: columnName,
                sortMode: SortMode.A,
            };

            // if CTRL is pressed, push to array
            // else, replace current array
            if (e.ctrlKey) {
                this.sort = [...this.sort, sortObj];
            } else {
                this.sort = [sortObj];
            }
        }
    }

    private onFilterChange(event: CustomEvent) {
        // resetting current page
        this.currentPage = 1;

        // getting column name from data-col
        const columnName = (event.target as HTMLElement).dataset.col;

        const newFilters = { ...this.filters };
        if (event.detail.value.length === 0) {
            delete newFilters[columnName];
        } else {
            newFilters[columnName] = event.detail.value;
        }

        this.filters = newFilters;
    }

    private onGlobalFilterChange(event: CustomEvent) {
        // resetting current page
        this.currentPage = 1;

        this.globalFilterValue = event.detail.value;
    }

    private groupRows(rows: Array<any>): Array<any> {
        if (!this.isGrouping()) {
            return rows;
        }

        // creating root
        const groupRows: Array<Row> = [];

        this.getRows().forEach((row: Row) => {
            // getting column name from first group
            const columnName = this.groups[0].column;

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
                        expanded: false,
                        label: cellValue,
                        children: [],
                    },
                    cells: {},
                };

                // add group to list
                groupRows.push(groupRow);
            }

            // check if in groupState map
            const isExpanded = this.groupState[cellValue]
                ? this.groupState[cellValue].expanded
                : false;

            groupRow.group.expanded = isExpanded;

            // add to groupState map
            this.groupState[cellValue] = {
                expanded: groupRow.group.expanded,
            };

            // adding row
            groupRow.group.children.push(row);

            // for (let i = 1; i < this.groups.length; i++) {
            // const group = this.groups[i];

            // // getting cell value
            // const tempCellValue = r.cells[group.column].value;

            // // check if group already exists
            // let tempGroupingRow: Row = groupingRow.children[tempCellValue];

            // if (!tempGroupingRow) {
            //     tempGroupingRow = {
            //         cells: {},
            //         children: [],
            //     };
            //     groupingRow.children[tempCellValue] = tempGroupingRow;
            // }

            // groupingRow = tempGroupingRow;
            // }

            // adding row to current group
            // groupingRow.children.push(r);
        });

        return groupRows;
    }

    private sortRows(rows: Array<any>): Array<any> {
        if (this.sort.length === 0) {
            // no sort -> return rows as they are
            return rows;
        }

        // check multiple sort
        const isMultiSort = this.sort.length > 1;

        // sorting rows
        return rows.sort((r1: Row, r2: Row) => {
            if (isMultiSort) {
                for (let i = 0; i < this.sort.length; i++) {
                    const sortObj = this.sort[i];

                    const cell1: Cell = r1.cells[sortObj.column];
                    const cell2: Cell = r2.cells[sortObj.column];

                    const compare = this.compareCell(
                        cell1,
                        cell2,
                        sortObj.sortMode
                    );

                    if (compare !== 0) {
                        return compare;
                    }
                }

                // same row
                return 0;
            } else {
                const sortObj = this.sort[0];

                const cell1: Cell = r1.cells[sortObj.column];
                const cell2: Cell = r2.cells[sortObj.column];

                return this.compareCell(cell1, cell2, sortObj.sortMode);
            }
        });
    }

    private compareCell(cell1: Cell, cell2: Cell, sortMode: SortMode): number {
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

    private paginateRows(rows: Array<any>): Array<any> {
        const start =
            this.currentPage * this.currentRowsPerPage -
            this.currentRowsPerPage;

        return rows.slice(start, start + this.currentRowsPerPage);
    }

    private getSortIcon(columnName: string): string {
        // check if column in sort array
        for (let i = 0; i < this.sort.length; i++) {
            const sortObj = this.sort[i];

            if (sortObj.column === columnName) {
                return 'A' === sortObj.sortMode
                    ? 'mdi-sort-ascending'
                    : 'mdi-sort-descending';
            }
        }

        // default
        return 'mdi-sort';
    }

    private handlePageChanged({ detail }) {
        this.currentPage = detail.newPage;
    }

    private handleRowsPerPageChanged({ detail }) {
        this.currentRowsPerPage = detail.newRowsPerPage;
    }

    private onRowClick(row: Row) {
        this.kupRowSelected.emit({ row });
        this.selectedRow = row;
    }

    private onRowExpand(row: Row) {
        // row should be a 'group' row
        row.group.expanded = !row.group.expanded;

        // updating group map
        this.groupState[row.group.label].expanded = row.group.expanded;

        // forcing rendering... meh
        this.groupState = { ...this.groupState };
    }

    // render methods
    private renderHeader() {
        const hasCustomColumnsWidth = this.columnsWidth.length > 0;

        const dataColumns = this.getColumns().map((column) => {
            // filter
            let filter = null;
            if (this.showFilters) {
                let filterValue = '';
                if (this.filters && this.filters[column.name]) {
                    filterValue = this.filters[column.name];
                }

                filter = (
                    <div>
                        <kup-text-input
                            initialValue={filterValue}
                            data-col={column.name}
                            onKetchupTextInputUpdated={(e) => {
                                this.onFilterChange(e);
                            }}
                        />
                    </div>
                );
            }

            // sort
            let sort = null;
            if (this.sortEnabled) {
                sort = (
                    <span class="column-sort">
                        <icon
                            class={'mdi ' + this.getSortIcon(column.name)}
                            data-col={column.name}
                            onClick={(e: MouseEvent) => this.onColumnSort(e)}
                        />
                    </span>
                );
            }

            let thStyle = null;
            if (hasCustomColumnsWidth) {
                for (let i = 0; i < this.columnsWidth.length; i++) {
                    const currentCol = this.columnsWidth[i];

                    if (currentCol.column === column.name) {
                        const width = currentCol.width.toString() + 'px';
                        thStyle = {
                            width,
                            minWidth: width,
                            maxWidth: width,
                        };
                        break;
                    }
                }
            }

            return (
                <th style={thStyle}>
                    <span class="column-title">{column.title}</span>
                    {sort}
                    {filter}
                </th>
            );
        });

        return dataColumns;
    }

    renderFooter(
        rows: Array<Row>
    ): JSXElements.HTMLAttributes<HTMLTableSectionElement> | null {
        if (!this.totals) {
            // no footer
            return null;
        }

        const keys = Object.keys(this.totals);

        const footerRow = {};

        // if there are only COUNT, no need to loop on rows
        let onlyCount =
            keys.length === 0 ||
            keys.every((key) => this.totals[key] === TotalMode.COUNT);

        if (onlyCount) {
            keys.forEach((columnName) => (footerRow[columnName] = rows.length));
        } else {
            rows.forEach((r) => {
                keys.filter(
                    (key) => TotalMode.COUNT !== this.totals[key]
                ).forEach((key) => {
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
                });
            });

            // fixing count and avg
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];

                if (this.totals[key] === TotalMode.AVARAGE) {
                    const sum: number = footerRow[key];

                    if (sum && rows.length > 0) {
                        footerRow[key] = numeral(sum)
                            .divide(rows.length)
                            .value();
                    }
                } else if (this.totals[key] === TotalMode.COUNT) {
                    footerRow[key] = rows.length;
                }
            }
        }

        const footerCells = this.getColumns().map(({ name }) => (
            <td>{footerRow[name]}</td>
        ));

        const footer = (
            <tfoot>
                <tr>{footerCells}</tr>
            </tfoot>
        );

        return footer;
    }

    private renderRow(row: Row, level = 0) {
        if (row.group) {
            let icon =
                'mdi mdi-chevron-' + (row.group.expanded ? 'right' : 'down');

            const jsxRows = [];

            jsxRows.push(
                <tr class="group">
                    <td colSpan={this.getColumns().length}>
                        <icon
                            class={icon}
                            onClick={() => this.onRowExpand(row)}
                        />
                        {row.group.label}
                    </td>
                </tr>
            );

            // if group is expanded, add children
            if (row.group.expanded) {
                row.group.children
                    .map((r) => this.renderRow(r, level + 1))
                    .forEach((jsxRow) => jsxRows.push(jsxRow));
            }

            // grouping row
            return jsxRows;
        } else {
            const cells = this.getColumns().map(({ name }, index) => {
                let indend = [];
                if (index === 0) {
                    for (let i = 0; i < level; i++) {
                        indend.push(<span class="indent" />);
                    }
                }

                return (
                    <td>
                        {indend}
                        {row.cells[name].value}
                    </td>
                );
            });

            let rowClass = null;
            if (this.selectedRow === row) {
                rowClass = 'selected';
            }

            return (
                <tr class={rowClass} onClick={() => this.onRowClick(row)}>
                    {cells}
                </tr>
            );
        }
    }

    render() {
        // header
        const header = this.renderHeader();

        // rows
        // 1) filters
        const filteredRows = this.getFilteredRows();

        // 2) footer (based on filtered rows)
        const footer = this.renderFooter(filteredRows);

        // 3) sort
        const sortedRows = this.sortRows(filteredRows);

        // 3) grouping
        const grouped = this.groupRows(sortedRows);

        // 4) pagination
        const paginatedRows = this.paginateRows(grouped);

        let rows = null;
        if (paginatedRows.length === 0) {
            rows = (
                <tr>
                    <td colSpan={this.getColumns().length}>Empty data</td>
                </tr>
            );
        } else {
            rows = paginatedRows.map((row: Row) => this.renderRow(row));
        }

        let globalFilter = null;
        if (this.globalFilter) {
            globalFilter = (
                <div id="globalFilter">
                    <kup-text-input
                        label="Global filter"
                        onKetchupTextInputUpdated={(event) =>
                            this.onGlobalFilterChange(event)
                        }
                    />
                </div>
            );
        }

        let paginatorTop = null;
        if (
            PaginatorPos.TOP === this.paginatorPos ||
            PaginatorPos.BOTH === this.paginatorPos
        ) {
            paginatorTop = (
                <kup-paginator
                    max={filteredRows.length}
                    perPage={this.rowsPerPage}
                    selectedPerPage={this.currentRowsPerPage}
                    currentPage={this.currentPage}
                    onKupPageChanged={(e) => this.handlePageChanged(e)}
                    onKupRowsPerPageChanged={(e) =>
                        this.handleRowsPerPageChanged(e)
                    }
                />
            );
        }

        let paginatorBottom = null;
        if (
            PaginatorPos.BOTTOM === this.paginatorPos ||
            PaginatorPos.BOTH === this.paginatorPos
        ) {
            paginatorBottom = (
                <kup-paginator
                    max={filteredRows.length}
                    perPage={this.rowsPerPage}
                    selectedPerPage={this.currentRowsPerPage}
                    currentPage={this.currentPage}
                    onKupPageChanged={(e) => this.handlePageChanged(e)}
                    onKupRowsPerPageChanged={(e) =>
                        this.handleRowsPerPageChanged(e)
                    }
                />
            );
        }

        let tableClass = null;
        if (!this.showGrid) {
            tableClass = 'noGrid';
        }

        return (
            <div>
                {paginatorTop}
                {globalFilter}
                <div id="data-table-wrapper">
                    <table class={tableClass}>
                        <thead hidden={!this.showHeader}>
                            <tr>{header}</tr>
                        </thead>
                        <tbody>{rows}</tbody>
                        {footer}
                    </table>
                </div>
                {paginatorBottom}
            </div>
        );
    }
}
