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
    Cell,
    RowAction,
    ShowGrid,
} from './ketchup-data-table-declarations';

import {
    calcTotals,
    filterRows,
    groupRows,
    sortRows,
} from './ketchup-data-table-helper';

import { isIcon, isImage, isLink } from '../../utils/object-utils';

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
    showGrid: ShowGrid = ShowGrid.NONE;

    @Prop()
    selectRow: number;

    @Prop({ mutable: true })
    groups: Array<GroupObject> = [];

    @Prop()
    multiSelection = false;

    @Prop()
    rowActions: Array<RowAction>;

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

    @Watch('data')
    @Watch('sort')
    @Watch('filters')
    @Watch('globalFilterValue')
    @Watch('rowsPerPage')
    @Watch('groups')
    @Watch('totals')
    recalculateRows() {
        this.initRows();
    }

    private rows: Array<Row>;

    private footer: { [index: string]: number };

    private renderedRows: Array<Row> = [];

    private columnOverTimeout: NodeJS.Timeout;

    // private theadRef: HTMLTableSectionElement;

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

    /**
     * When cell option is clicked
     */
    @Event({
        eventName: 'kupOptionClicked',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupOptionClicked: EventEmitter<{
        column: string;
        row: Row;
    }>;

    /**
     * When 'add column' menu item is clicked
     */
    @Event({
        eventName: 'kupAddColumn',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupAddColumn: EventEmitter<{ column: string }>;

    /**
     * When a row action is clicked
     */
    @Event({
        eventName: 'kupRowActionClicked',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupRowActionClicked: EventEmitter<{
        type: 'default' | 'variable' | 'expander';
        row: Row;
        action?: RowAction;
        index?: number;
    }>;

    // private theadObserver = new IntersectionObserver(
    //     (entries) => {
    //         entries.forEach((entry) => {
    //             if (entry.intersectionRatio === 1) {
    //                 // fully visible
    //                 console.log('fully visible', entry.target);
    //             } else if (entry.intersectionRatio === 0) {
    //                 // hidden
    //                 console.log('hidden', entry.target);
    //             }
    //         });
    //     },
    //     {
    //         threshold: [0, 0.5, 1],
    //         rootMargin: '-100px 0px 0px 0px',
    //     }
    // );

    // lifecycle
    componentWillLoad() {
        this.rowsPerPageHandler(this.rowsPerPage);
        this.initRows();
    }

    componentDidLoad() {
        // observing table
        // this.theadObserver.observe(this.theadRef);

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

    private initRows(): void {
        const filteredRows = this.getFilteredRows();

        const sortedRows = this.sortRows(filteredRows);

        this.footer = calcTotals(sortedRows, this.totals);

        const grouped = this.groupRows(sortedRows);

        this.rows = this.paginateRows(grouped);
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

    private hasRowActions() {
        return this.rowActions !== undefined;
    }

    private removeGroup(group: GroupObject) {
        // resetting group state
        this.groupState = {};

        const index = this.groups.indexOf(group);

        if (index >= 0) {
            // removing group from prop
            this.groups.splice(index, 1);
            this.groups = [...this.groups];
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

    private onDefaultRowActionClick(
        e: MouseEvent,
        { action, row, type, index }
    ) {
        e.stopPropagation();

        this.kupRowActionClicked.emit({
            action,
            index,
            row,
            type,
        });
    }

    private onRowActionExpanderClick(e: MouseEvent, row: Row) {
        e.stopPropagation();

        this.kupRowActionClicked.emit({
            row,
            type: 'expander',
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

        // reset group state
        this.groupState = {};

        if (group !== null) {
            // remove from grouping
            const index = this.groups.indexOf(group);
            this.groups.splice(index, 1);
            this.groups = [...this.groups];
        } else {
            // add to groups
            this.groups = [...this.groups, { column, visible: true }];
        }
    }

    private onOptionClicked(column: string, row: Row) {
        this.kupOptionClicked.emit({
            column,
            row,
        });
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

        if (this.hasRowActions()) {
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
                        <span
                            role="button"
                            aria-label="Sort column" // TODO
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
                    <span class="mdi mdi-book" />
                    {groupLabel}
                </li>
            );

            columnMenuItems.push(
                <li
                    role="menuitem"
                    onClick={() =>
                        this.kupAddColumn.emit({ column: column.name })
                    }
                >
                    <span class="mdi mdi-table-column-plus-after" />
                    Aggiungi colonna
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

        let actionsColumn = null;
        if (this.hasRowActions()) {
            actionsColumn = <th />;
        }

        return [multiSelectColumn, groupColumn, actionsColumn, ...dataColumns];
    }

    renderFooter(): JSXElements.HTMLAttributes<HTMLTableSectionElement> | null {
        if (!this.hasTotals()) {
            // no footer
            return null;
        }

        const footerCells = this.getVisibleColumns().map(({ name }) => (
            <td>{this.footer[name]}</td>
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
                        <span
                            role="button"
                            aria-label="Row expander" // TODO change this label
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
                            <span
                                role="button"
                                aria-label="Row expander" // TODO change this label
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

                let options = null;
                if (cell.options) {
                    options = (
                        <span
                            class="options"
                            role="button"
                            aria-label="Opzioni oggetto"
                            title="Opzioni oggetto"
                            onClick={() => this.onOptionClicked(name, row)}
                        >
                            <i class="mdi mdi-settings" />
                        </span>
                    );
                }

                const jsxCell = this.renderCell(cell);

                return (
                    <td data-column={name} style={cell.style}>
                        {indend}
                        {jsxCell}
                        {options}
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

            let rowActionsCell = null;
            if (this.hasRowActions()) {
                const defaultRowActions = this.rowActions.map(
                    (action, index) => {
                        return (
                            <span
                                title={action.text}
                                class={`row-action ${action.icon}`}
                                onClick={(e) =>
                                    this.onDefaultRowActionClick(e, {
                                        action,
                                        index,
                                        row,
                                        type: 'default',
                                    })
                                }
                                role="button"
                                aria-label={action.text}
                                aria-pressed="false"
                            />
                        );
                    }
                );

                let rowActionExpander = null;
                let variableActions = null;
                if (row.actions) {
                    // adding variable actions
                    // TODO refactor with default actions
                    variableActions = row.actions.map((action, index) => {
                        return (
                            <span
                                title={action.text}
                                class={`row-action ${action.icon}`}
                                onClick={(e) =>
                                    this.onDefaultRowActionClick(e, {
                                        action,
                                        index,
                                        row,
                                        type: 'variable',
                                    })
                                }
                                role="button"
                                aria-label={action.text}
                                aria-pressed="false"
                            />
                        );
                    });
                } else {
                    // adding expander
                    rowActionExpander = (
                        <span
                            title="Espandi voci"
                            class={`row-action mdi mdi-chevron-right`}
                            onClick={(e) =>
                                this.onRowActionExpanderClick(e, row)
                            }
                            role="button"
                            aria-label="Espandi voci"
                            aria-pressed="false"
                        />
                    );
                }

                rowActionsCell = (
                    <td>
                        {defaultRowActions}
                        {rowActionExpander}
                        {variableActions}
                    </td>
                );
            }

            return (
                <tr class={rowClass} onClick={(e) => this.onRowClick(e, row)}>
                    {selectRowCell}
                    {groupingCell}
                    {rowActionsCell}
                    {cells}
                </tr>
            );
        }
    }

    private renderCell(
        cell: Cell
    ): JSXElements.HTMLAttributes<HTMLSpanElement> {
        let content: any = cell.value;

        if (isIcon(cell.obj)) {
            content = <span class={cell.value} />;
        } else if (isImage(cell.obj)) {
            content = <img src={cell.value} alt="" width="64" height="64" />;
        } else if (isLink(cell.obj)) {
            content = (
                <a href={cell.value} target="_blank">
                    {cell.value}
                </a>
            );
        }

        return <span class="cell-content">{content}</span>;
    }

    render() {
        // resetting rows
        this.renderedRows = [];

        let rows = null;
        if (this.rows.length === 0) {
            rows = (
                <tr>
                    <td colSpan={this.calculateColspan()}>Empty data</td>
                </tr>
            );
        } else {
            rows = [];
            this.rows
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

        // footer
        const footer = this.renderFooter();

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
                    max={this.rows.length}
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
                    max={this.rows.length}
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

        if (ShowGrid.COMPLETE === this.showGrid) {
            tableClass += ' column-separation row-separation';
        } else if (ShowGrid.ROW === this.showGrid) {
            tableClass += ' row-separation';
        } else if (ShowGrid.COL === this.showGrid) {
            tableClass += ' column-separation';
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
                            <span class="mdi mdi-close-circle" />
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
                    class={this.density === 'small' ? 'active' : ''}
                    iconClass="mdi mdi-format-align-justify"
                    onClick={() => (this.density = 'small')}
                />

                <kup-button
                    class={this.density === 'medium' ? 'active' : ''}
                    iconClass="mdi mdi-menu"
                    onClick={() => (this.density = 'medium')}
                />

                <kup-button
                    class={this.density === 'big' ? 'active' : ''}
                    iconClass="mdi mdi-view-sequential"
                    onClick={() => (this.density = 'big')}
                />
            </div>
        );

        return (
            <div id="data-table-wrapper">
                <div class="above-wrapper">
                    {paginatorTop}
                    {globalFilter}
                    {densityPanel}
                </div>
                <div class="below-wrapper">
                    {groupChips}
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
