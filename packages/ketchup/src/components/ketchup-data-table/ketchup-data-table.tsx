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
    GenericMap,
    GroupObject,
    TotalsMap,
} from './ketchup-data-table-declarations';

import {
    calcTotals,
    filterRows,
    groupRows,
    sortRows,
} from './ketchup-data-table-helper';

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
    totals: TotalsMap;

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

    @Prop({ mutable: true })
    groups: Array<GroupObject> = [];

    @Prop()
    multiSelection = false;

    @State()
    private globalFilterValue = '';

    @State()
    private currentPage = 1;

    @State()
    private currentRowsPerPage = 10;

    @State()
    private selectedRows: Array<Row> = [];

    @State()
    private groupState: {
        [index: string]: {
            expanded: boolean;
        };
    } = {};

    /**
     * name of the column with an open menu
     */
    @State()
    private openedMenu: string = null;

    @State()
    private density: string = 'medium';

    @Watch('rowsPerPage')
    rowsPerPageHandler(newValue: number) {
        this.currentRowsPerPage = newValue;
    }

    private renderedRows: Array<Row> = [];

    /**
     * When a row is auto selected via selectRow prop
     */
    @Event({
        eventName: 'kupAutoRowSelect',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupAutoRowSelect: EventEmitter<{
        selectedRow: Row;
    }>;

    /**
     * When a row is selected
     */
    @Event({
        eventName: 'kupRowSelected',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupRowSelected: EventEmitter<{
        selectedRows: Array<Row>;
        clickedColumn: string;
    }>;

    // lifecycle
    componentWillLoad() {
        this.rowsPerPageHandler(this.rowsPerPage);
    }

    componentDidLoad() {
        // automatic row selection
        if (this.selectRow && this.selectRow > 0) {
            if (this.selectRow <= this.renderedRows.length) {
                this.selectedRows = [];
                this.selectedRows.push(this.renderedRows[this.selectRow - 1]);
                this.kupAutoRowSelect.emit({
                    selectedRow: this.selectedRows[0],
                });
            }
        }
    }

    private getColumns(): Array<Column> {
        return this.data && this.data.columns
            ? this.data.columns
            : [{ title: '', name: '', size: 0 }];
    }

    private getVisibleColumns(): Array<Column> {
        const visibleColumns = this.getColumns().filter((column) => {
            if (column.hasOwnProperty('visible')) {
                return column.visible;
            }

            return true;
        });

        // check grouping
        if (this.isGrouping()) {
            // filtering column based on group visibility
            return visibleColumns.filter((column) => {
                // check if in group
                let group = null;
                for (let currentGroup of this.groups) {
                    if (currentGroup.column === column.name) {
                        group = currentGroup;
                        break;
                    }
                }

                if (group) {
                    // return true if
                    // 1) group obj has not the 'visible' property or
                    // 2) group has 'visible' property and it is true
                    return !group.hasOwnProperty('visible') || group.visible;
                }

                // not in group -> visible
                return true;
            });
        }

        return visibleColumns;
    }

    private getColumnByName(name: string): Column {
        for (let column of this.getColumns()) {
            if (column.name === name) {
                return column;
            }
        }

        return null;
    }

    private getGroupByName(column: string): GroupObject {
        if (!this.isGrouping()) {
            return null;
        }

        for (let group of this.groups) {
            if (group.column === column) {
                return group;
            }
        }

        return null;
    }

    private getRows(): Array<Row> {
        return this.data && this.data.rows ? this.data.rows : [];
    }

    private getFilteredRows(): Array<any> {
        return filterRows(
            this.getRows(),
            this.filters,
            this.globalFilterValue,
            this.getVisibleColumns().map((c) => c.name)
        );
    }

    private isGrouping() {
        return this.groups && this.groups.length > 0;
    }

    private removeGroup(group: GroupObject) {
        const index = this.groups.indexOf(group);

        if (index >= 0) {
            // removing group from prop
            this.groups.splice(index, 1);
            this.groups = [...this.groups];

            // resetting group state
            this.groupState = {};
        }
    }

    private hasTotals() {
        return this.totals && Object.keys(this.totals).length > 0;
    }

    // event listeners
    private onColumnSort({ ctrlKey }: MouseEvent, columnName: string) {
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

            if (ctrlKey) {
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
            if (ctrlKey) {
                this.sort = [...this.sort, sortObj];
            } else {
                this.sort = [sortObj];
            }
        }
    }

    private onFilterChange({ detail }, column: string) {
        // resetting current page
        this.currentPage = 1;

        const newFilters = { ...this.filters };
        if (detail.value.length === 0) {
            delete newFilters[column];
        } else {
            newFilters[column] = detail.value;
        }

        this.filters = newFilters;
    }

    private onGlobalFilterChange({ detail }) {
        // resetting current page
        this.currentPage = 1;

        this.globalFilterValue = detail.value;
    }

    private handlePageChanged({ detail }) {
        this.currentPage = detail.newPage;
    }

    private handleRowsPerPageChanged({ detail }) {
        this.currentRowsPerPage = detail.newRowsPerPage;
    }

    private onRowClick(event: MouseEvent, row: Row) {
        // selecting row
        this.handleRowSelect(row, event.ctrlKey);

        // checking target
        const target = event.target;

        let clickedColumn: string = null;
        if (target instanceof HTMLElement) {
            if (target.tagName === 'TD') {
                // checking column
                clickedColumn = target.dataset.column;
            }
        }

        this.kupRowSelected.emit({
            selectedRows: this.selectedRows,
            clickedColumn,
        });
    }

    private handleRowSelect(row: Row, ctrlKey: boolean) {
        if (this.multiSelection) {
            if (ctrlKey && this.selectedRows) {
                const index = this.selectedRows.indexOf(row);

                if (index < 0) {
                    // adding
                    this.selectedRows = [...this.selectedRows, row];
                } else {
                    // removing
                    this.selectedRows.splice(index, 1);
                    this.selectedRows = [...this.selectedRows];
                }
            } else {
                this.selectedRows = [row];
            }
        } else {
            this.selectedRows = [row];
        }
    }

    private onRowCheckboxSelection({ target }, row: Row) {
        if (target.checked) {
            if (this.selectedRows.length > 0) {
                this.selectedRows = [...this.selectedRows, row];
            } else {
                this.selectedRows = [row];
            }

            this.kupRowSelected.emit({
                selectedRows: this.selectedRows,
                clickedColumn: null,
            });
        } else {
            const index = this.selectedRows.indexOf(row);

            if (index >= 0) {
                this.selectedRows.splice(index, 1);
                this.selectedRows = [...this.selectedRows];
            }
        }
    }

    private onRowExpand(row: Row) {
        // row should be a 'group' row
        row.group.expanded = !row.group.expanded;

        // updating group map
        this.groupState[row.group.label].expanded = row.group.expanded;

        // changing group state to trigger rendering
        this.groupState = { ...this.groupState };
    }

    private onSelectAll({ target }) {
        if (target.checked) {
            // select all rows
            this.selectedRows = this.renderedRows;
        } else {
            // deselect all rows
            this.selectedRows = [];
        }

        // triggering event
        this.kupRowSelected.emit({
            selectedRows: this.selectedRows,
            clickedColumn: null,
        });
    }

    private columnOverTimeout: NodeJS.Timeout;

    private onColumnMouseEnter(column: string) {
        this.columnOverTimeout = setTimeout(() => {
            this.openedMenu = column;
        }, 500);
    }

    private onColumnMouseLeave(column: string) {
        // clearing timeout
        clearTimeout(this.columnOverTimeout);

        if (this.openedMenu === column) {
            this.openedMenu = null;
        }
    }

    private switchColumnGroup(group: GroupObject, column: string) {
        // resetting opened menu
        this.openedMenu = null;

        if (group !== null) {
            // remove from grouping
            const index = this.groups.indexOf(group);
            this.groups.splice(index, 1);
            this.groups = [...this.groups];

            // reset group state
            this.groupState = {};
        } else {
            // add to groups
            this.groups = [...this.groups, { column, visible: true }];

            // reset group state
            this.groupState = {};
        }
    }

    // utility methods
    private groupRows(rows: Array<any>): Array<Row> {
        if (!this.isGrouping()) {
            return rows;
        }

        const groupedRows = groupRows(rows, this.groups, this.totals);

        this.adjustGroupState(groupedRows);

        return groupedRows;
    }

    private adjustGroupState(rows: Array<Row>): void {
        if (!rows || rows.length === 0 || !rows[0].hasOwnProperty('group')) {
            // no grouping
            return;
        }

        rows.forEach((r) => this.adjustGroupStateFromRow(r));
    }

    private adjustGroupStateFromRow(row: Row): void {
        if (!row || !row.hasOwnProperty('group')) {
            // not a groping row, nothing to do
            return;
        }

        const group = row.group;

        // check if already in group state
        let groupFromState = this.groupState[group.label];

        if (!groupFromState) {
            // add to state
            this.groupState[group.label] = group;
        } else {
            // update expanded
            group.expanded = groupFromState.expanded;
        }

        group.children.forEach((child) => this.adjustGroupStateFromRow(child));
    }

    private sortRows(rows: Array<any>): Array<any> {
        return sortRows(rows, this.sort);
    }

    private paginateRows(rows: Array<any>): Array<any> {
        const start =
            this.currentPage * this.currentRowsPerPage -
            this.currentRowsPerPage;

        return rows.slice(start, start + this.currentRowsPerPage);
    }

    private getSortIcon(columnName: string): string {
        // check if column in sort array
        for (let sortObj of this.sort) {
            if (sortObj.column === columnName) {
                return 'A' === sortObj.sortMode
                    ? 'mdi-sort-ascending'
                    : 'mdi-sort-descending';
            }
        }

        // default
        return 'mdi-sort';
    }

    private calculateColspan() {
        let colSpan = this.getVisibleColumns().length;

        if (this.multiSelection) {
            colSpan += 1;
        }

        if (this.isGrouping() && this.hasTotals()) {
            colSpan += 1;
        }

        return colSpan;
    }

    // render methods
    private renderHeader() {
        const hasCustomColumnsWidth = this.columnsWidth.length > 0;

        const dataColumns = this.getVisibleColumns().map((column) => {
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
                            class="datatable-filter"
                            initialValue={filterValue}
                            data-col={column.name}
                            onKetchupTextInputUpdated={(e) => {
                                this.onFilterChange(e, column.name);
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
                            onClick={(e: MouseEvent) =>
                                this.onColumnSort(e, column.name)
                            }
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

            const columnMenuItems: JSX.Element[] = [];

            // adding grouping
            const group = this.getGroupByName(column.name);
            const groupLabel =
                group != null
                    ? 'Disattiva raggruppamento'
                    : 'Attiva raggruppamento';

            columnMenuItems.push(
                <li
                    role="menuitem"
                    onClick={() => this.switchColumnGroup(group, column.name)}
                >
                    <icon class="mdi mdi-book" /> {groupLabel}
                </li>
            );

            let columnMenu = null;
            if (columnMenuItems.length !== 0) {
                const menuClass =
                    this.openedMenu === column.name ? 'open' : 'closed';

                columnMenu = (
                    <div class={`column-menu ${menuClass}`}>
                        <ul role="menubar">{columnMenuItems}</ul>
                    </div>
                );
            }

            return (
                <th
                    style={thStyle}
                    onMouseEnter={() => this.onColumnMouseEnter(column.name)}
                    onMouseLeave={() => this.onColumnMouseLeave(column.name)}
                >
                    <span class="column-title">{column.title}</span>
                    {sort}
                    {filter}
                    {columnMenu}
                </th>
            );
        });

        let multiSelectColumn = null;
        if (this.multiSelection) {
            const style = {
                width: '30px',
                margin: '0 auto',
            };
            multiSelectColumn = (
                <th style={style}>
                    <input
                        type="checkbox"
                        onChange={(e) => this.onSelectAll(e)}
                        title={`selectedRow: ${
                            this.selectedRows.length
                        } - renderedRows: ${this.renderedRows.length}`}
                        checked={
                            this.selectedRows.length > 0 &&
                            this.selectedRows.length ===
                                this.renderedRows.length
                        }
                    />
                </th>
            );
        }

        let groupColumn = null;
        if (this.isGrouping() && this.hasTotals()) {
            groupColumn = <th />;
        }

        return [multiSelectColumn, groupColumn, ...dataColumns];
    }

    renderFooter(
        rows: Array<Row>
    ): JSXElements.HTMLAttributes<HTMLTableSectionElement> | null {
        if (!this.hasTotals()) {
            // no footer
            return null;
        }

        const footerRow = calcTotals(rows, this.totals);

        const footerCells = this.getVisibleColumns().map(({ name }) => (
            <td>{footerRow[name]}</td>
        ));

        let selectRowCell = null;
        if (this.multiSelection) {
            selectRowCell = <td />;
        }

        let groupingCell = null;
        if (this.isGrouping() && this.hasTotals()) {
            groupingCell = <td />;
        }

        const footer = (
            <tfoot>
                <tr>
                    {selectRowCell}
                    {groupingCell}
                    {footerCells}
                </tr>
            </tfoot>
        );

        return footer;
    }

    private renderRow(row: Row, level = 0) {
        const visibleColumns = this.getVisibleColumns();

        if (row.group) {
            if (row.group.children.length === 0) {
                // empty group
                return null;
            }

            let icon =
                'mdi mdi-chevron-' + (row.group.expanded ? 'right' : 'down');

            const jsxRows = [];

            let indent = [];
            for (let i = 0; i < level; i++) {
                indent.push(<span class="indent" />);
            }

            if (this.hasTotals()) {
                const cells = [];

                // adding 'grouping' cell
                const colSpan = this.multiSelection ? 2 : 1;
                cells.push(
                    <td colSpan={colSpan}>
                        {indent}
                        <icon
                            class={icon}
                            onClick={() => this.onRowExpand(row)}
                        />
                        {row.group.label}
                    </td>
                );

                for (let column of visibleColumns) {
                    cells.push(<td>{row.group.totals[column.name]}</td>);
                }

                jsxRows.push(<tr>{cells}</tr>);
            } else {
                jsxRows.push(
                    <tr class="group">
                        <td colSpan={this.calculateColspan()}>
                            {indent}
                            <icon
                                class={`row-expander ${icon}`}
                                onClick={() => this.onRowExpand(row)}
                            />
                            {row.group.label}
                        </td>
                    </tr>
                );
            }

            // if group is expanded, add children
            if (row.group.expanded) {
                row.group.children
                    .map((r) => {
                        return this.renderRow(r, level + 1);
                    })
                    .forEach((jsxRow) => {
                        if (Array.isArray(jsxRow)) {
                            jsxRow.forEach((jr) => jsxRows.push(jr));
                        } else {
                            jsxRows.push(jsxRow);
                        }
                    });
            }

            // grouping row
            return jsxRows;
        } else {
            const cells = visibleColumns.map(({ name }, index) => {
                let indend = [];
                if (index === 0 && !(this.isGrouping() && this.hasTotals())) {
                    for (let i = 0; i < level; i++) {
                        indend.push(<span class="indent" />);
                    }
                }

                const cell = row.cells[name];

                return (
                    <td data-column={name} style={cell.style}>
                        {indend}
                        {cell.value}
                    </td>
                );
            });

            let rowClass = null;
            if (this.selectedRows.includes(row)) {
                rowClass = 'selected';
            }

            let selectRowCell = null;
            if (this.multiSelection) {
                selectRowCell = (
                    <td>
                        <input
                            type="checkbox"
                            checked={this.selectedRows.includes(row)}
                            onClick={(e) => e.stopPropagation()}
                            onChange={(e) =>
                                this.onRowCheckboxSelection(e, row)
                            }
                        />
                    </td>
                );
            }

            let groupingCell = null;
            if (this.isGrouping() && this.hasTotals()) {
                groupingCell = <td />;
            }

            // adding row to rendered rows
            this.renderedRows.push(row);

            return (
                <tr class={rowClass} onClick={(e) => this.onRowClick(e, row)}>
                    {selectRowCell}
                    {groupingCell}
                    {cells}
                </tr>
            );
        }
    }

    render() {
        // resetting rows
        this.renderedRows = [];

        // rows
        const filteredRows = this.getFilteredRows();

        const sortedRows = this.sortRows(filteredRows);

        const footer = this.renderFooter(sortedRows);

        const grouped = this.groupRows(sortedRows);

        const paginatedRows = this.paginateRows(grouped);

        let rows = null;
        if (paginatedRows.length === 0) {
            rows = (
                <tr>
                    <td colSpan={this.calculateColspan()}>Empty data</td>
                </tr>
            );
        } else {
            rows = [];
            paginatedRows
                .map((row: Row) => this.renderRow(row))
                .forEach((jsxRow) => {
                    if (Array.isArray(jsxRow)) {
                        jsxRow.forEach((jr) => rows.push(jr));
                    } else {
                        rows.push(jsxRow);
                    }
                });
        }

        // header
        // for multi selection purposes, this should be called before this.renderedRows has been evaluated
        const header = this.renderHeader();

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
                    id="top-paginator"
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
                    id="bottom-paginator"
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

        let tableClass = `density-${this.density}`;
        if (!this.showGrid) {
            tableClass += ' noGrid';
        }

        let groupChips = null;
        if (this.isGrouping()) {
            const chips = this.groups.map((group) => {
                const column = this.getColumnByName(group.column);

                if (column) {
                    return (
                        <div
                            class="group-chip"
                            tabIndex={0}
                            onClick={() => this.removeGroup(group)}
                        >
                            <icon class="mdi mdi-close-circle" />
                            {column.title}
                        </div>
                    );
                } else {
                    return null;
                }
            });

            groupChips = <div id="group-chips">{chips}</div>;
        }

        const densityPanel = (
            <div id="density-panel">
                <kup-button
                    flat
                    iconClass="mdi mdi-format-align-justify"
                    onClick={() => (this.density = 'small')}
                />

                <kup-button
                    flat
                    iconClass="mdi mdi-menu"
                    onClick={() => (this.density = 'medium')}
                />

                <kup-button
                    flat
                    iconClass="mdi mdi-view-sequential"
                    onClick={() => (this.density = 'big')}
                />
            </div>
        );

        return (
            <div>
                {groupChips}
                {paginatorTop}
                {globalFilter}
                {densityPanel}
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
