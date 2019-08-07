import {
    Component,
    Event,
    EventEmitter,
    h,
    JSX,
    Method,
    Prop,
    State,
    Watch,
} from '@stencil/core';

import {
    Cell,
    Column,
    KupDataTableCellButtonClick,
    GenericMap,
    GroupObject,
    LoadMoreMode,
    PaginatorPos,
    Row,
    RowAction,
    ShowGrid,
    SortMode,
    SortObject,
    TableData,
    TotalsMap,
    KupDataTableColumnDragType,
    KupDataTableSortedColumnIndexes,
} from './kup-data-table-declarations';

import {
    calcTotals,
    filterRows,
    groupRows,
    sortRows,
    getColumnByName,
    paginateRows,
} from './kup-data-table-helper';

import {
    isBar,
    isButton,
    isCheckbox,
    isIcon,
    isImage,
    isLink,
    isNumber,
    isVoCodver,
    createJ4objButtonConfig,
} from '../../utils/object-utils';

@Component({
    tag: 'kup-data-table',
    styleUrl: 'kup-data-table.scss',
    shadow: true,
})
export class KupDataTable {
    @Prop()
    columnsWidth: Array<{
        column: string;
        width: number;
    }> = [];

    @Prop() data: TableData;

    /**
     * Enables sorting of the columns by dragging them into different columns
     */
    @Prop() enableSortableColumns: boolean = false;

    @Prop()
    expandGroups = false;

    @Prop({ mutable: true })
    filters: GenericMap = {};

    @Prop()
    globalFilter = false;

    @Prop({ mutable: true })
    groups: Array<GroupObject> = [];

    /**
     * If table header is visible and this prop is set to true, the header will be visible while scrolling the table.
     * To make this work, it must be configured together with the data-table CSS property --kup-data-table_header-offset.
     * It uses CSS position: sticky.
     * @version 1.0
     * @namespace KupDataTable.headerIsPersistent
     * @see KupDataTable.showHeader
     * @see https://caniuse.com/#feat=css-sticky
     */
    @Prop({ reflect: true })
    headerIsPersistent = false;

    @Prop()
    multiSelection = false;

    /**
     * Sets a maximum limit of new records which can be required by the load more functionality.
     */
    @Prop() loadMoreLimit: number = 1000;

    /**
     * The number of records which will be requested to be downloaded when clicking on the load more button.
     *
     * This property is regulated also by loadMoreMode.
     * @see loadMoreMode
     * @see loadMoreLimit
     */
    @Prop() loadMoreStep: number = 60;

    /**
     * Establish the modality of how many new records will be downloaded.
     *
     * This property is regulated also by loadMoreStep.
     * @see loadMoreStep
     * @see loadMoreLimit
     */
    @Prop() loadMoreMode: LoadMoreMode = LoadMoreMode.PROGRESSIVE_THRESHOLD;

    @Prop()
    paginatorPos: PaginatorPos = PaginatorPos.TOP;

    @Prop()
    rowsPerPage = 10;

    @Prop()
    rowActions: Array<RowAction>;

    @Prop()
    selectRow: number;

    /**
     * Enables rendering of the table header.
     * @namespace KupDataTable.showHeader
     */
    @Prop({ reflect: true })
    showHeader = true;

    @Prop()
    showFilters = false;

    @Prop()
    showGrid: ShowGrid = ShowGrid.COMPLETE;

    /**
     * If set to true, displays the button to load more records.
     */
    @Prop({ reflect: true }) showLoadMore: boolean = false;

    @Prop()
    sortEnabled = true;

    @Prop({ mutable: true })
    sort: Array<SortObject> = [];

    /**
     * If set to true, when a column is dragged to be sorted the component directly mutates the data.columns property
     * and then fires the event
     */
    @Prop() sortableColumnsMutateData: boolean = true;

    @Prop()
    totals: TotalsMap;

    //---- State ----

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

    @Watch('expandGroups')
    expandGroupsHandler() {
        // reset group state
        this.groupState = {};
        this.forceGroupExpansion();
    }

    @Watch('data')
    @Watch('sort')
    @Watch('filters')
    @Watch('globalFilterValue')
    @Watch('rowsPerPage')
    @Watch('groups')
    @Watch('totals')
    @Watch('currentPage')
    @Watch('currentRowsPerPage')
    recalculateRows() {
        this.initRows();
    }

    private rows: Array<Row>;

    private paginatedRows: Array<Row>;

    private footer: { [index: string]: number };

    private renderedRows: Array<Row> = [];

    private columnOverTimeout: NodeJS.Timeout;

    private loadMoreEventCounter: number = 0;

    private loadMoreEventPreviousQuantity: number = 0;

    /**
     * Internal not reactive state used to keep track if a column is being dragged.
     * @private
     */
    private columnsAreBeingDragged: boolean = false;

    /**
     * Attribute to set when a column is being dragged on the whole thead element
     * @const
     * @default 'columns-dragging'
     * @private
     */
    private dragFlagAttribute: string = 'columns-dragging';

    /**
     * The string representing the drag over attribute
     * @const
     * @default 'drag-over'
     * @private
     */
    private dragOverAttribute: string = 'drag-over';

    /**
     * The string representing the drag starter attribute to set onto the element
     * @const
     * @default 'drag-starter'
     * @private
     */
    private dragStarterAttribute: string = 'drag-starter';

    /**
     * Reference for the thead element
     * @private
     */
    private theadRef: HTMLTableSectionElement;

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

    @Event({
        eventName: 'kupLoadMoreClicked',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupLoadMoreClicked: EventEmitter<{
        loadItems: number;
    }>;

    @Event({
        eventName: 'kupCellButtonClicked',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCellButtonClicked: EventEmitter<KupDataTableCellButtonClick>;

    @Event({
        eventName: 'kupDataTableSortedColumn',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDataTableSortedColumn: EventEmitter<KupDataTableSortedColumnIndexes>;

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

        if (this.expandGroups) {
            this.forceGroupExpansion();
        }
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
        this.filterRows();

        this.footer = calcTotals(this.rows, this.totals);

        this.groupRows();

        this.sortRows();

        this.paginatedRows = paginateRows(
            this.rows,
            this.currentPage,
            this.currentRowsPerPage
        );
    }

    private filterRows(): void {
        this.rows = filterRows(
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

    private forceGroupExpansion() {
        this.rows.forEach((row) => this.forceRowGroupExpansion(row));
    }

    private forceRowGroupExpansion(row: Row) {
        // check if row is group
        if (!row.group) {
            return;
        }

        // forcing row expanded
        row.group.expanded = true;

        // updating group state
        // check if already present
        let groupState = this.groupState[row.group.id];
        if (!groupState) {
            groupState = {
                expanded: this.expandGroups,
            };
        } else {
            groupState.expanded = this.expandGroups;
        }

        this.groupState[row.group.id] = groupState;

        if (row.group.children) {
            row.group.children.forEach((childRow) =>
                this.forceRowGroupExpansion(childRow)
            );
        }
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
            if (target.tagName !== 'TR') {
                let currentElement = target;
                while (currentElement.tagName !== 'TD') {
                    currentElement = currentElement.parentElement;
                }

                clickedColumn = currentElement.dataset.column;
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
        } else {
            const index = this.selectedRows.indexOf(row);

            if (index >= 0) {
                this.selectedRows.splice(index, 1);
                this.selectedRows = [...this.selectedRows];
            }
        }

        this.kupRowSelected.emit({
            selectedRows: this.selectedRows,
            clickedColumn: null,
        });
    }

    private onRowExpand(row: Row) {
        // row should be a 'group' row
        row.group.expanded = !row.group.expanded;

        // updating group map
        this.groupState[row.group.id].expanded = row.group.expanded;

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

    private onJ4btnClicked(row, column, cell) {
        // Since this function is called with bind, the event from the kup-button gets passed into the arguments array
        const buttonEvent = arguments[3] as UIEvent;
        if (buttonEvent) {
            // Prevents double events to be fired.
            buttonEvent.stopPropagation();
        } else {
            throw 'kup-data-table error: missing event';
        }
        this.kupCellButtonClicked.emit({
            cell,
            column,
            row,
        });
    }

    // utility methods
    private groupRows(): void {
        if (!this.isGrouping()) {
            return;
        }

        this.rows = groupRows(
            this.getColumns(),
            this.rows,
            this.groups,
            this.totals
        );

        this.adjustGroupState();
    }

    // Handler for loadMore button is clicked.
    private onLoadMoreClick() {
        let loadItems: number = 0;

        switch (this.loadMoreMode) {
            case LoadMoreMode.CONSTANT:
                loadItems = this.loadMoreStep;
                break;
            case LoadMoreMode.CONSTANT_INCREMENT:
                loadItems = this.loadMoreStep * (this.loadMoreEventCounter + 1);
                break;
            case LoadMoreMode.PROGRESSIVE_THRESHOLD:
                loadItems =
                    Math.max(
                        this.loadMoreEventPreviousQuantity,
                        this.loadMoreStep
                    ) * Math.min(this.loadMoreEventCounter + 1, 2);
                break;
        }

        if (loadItems > this.loadMoreLimit) {
            loadItems = this.loadMoreLimit;
        }

        this.kupLoadMoreClicked.emit({
            loadItems,
        });

        this.loadMoreEventPreviousQuantity = loadItems;
        this.loadMoreEventCounter++;
    }

    private adjustGroupState(): void {
        if (
            !this.rows ||
            this.rows.length === 0 ||
            !this.rows[0].hasOwnProperty('group')
        ) {
            // no grouping
            return;
        }

        this.rows.forEach((r) => this.adjustGroupStateFromRow(r));
    }

    private adjustGroupStateFromRow(row: Row): void {
        if (!row || !row.hasOwnProperty('group')) {
            // not a groping row, nothing to do
            return;
        }

        const group = row.group;

        // check if already in group state
        let groupFromState = this.groupState[group.id];

        if (!groupFromState) {
            // add to state
            this.groupState[group.id] = group;
        } else {
            // update expanded
            group.expanded = groupFromState.expanded;
        }

        group.children.forEach((child) => this.adjustGroupStateFromRow(child));
    }

    private sortRows(): void {
        this.rows = sortRows(this.rows, this.sort);
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

    private isGroupExpanded({ group }: Row): boolean {
        if (!group) {
            return false;
        }

        // check if in group state
        if (this.groupState[group.id]) {
            return this.groupState[group.id].expanded;
        } else {
            return false;
        }
    }

    private styleHasBorderRadius(cell: Cell): boolean {
        if (cell && cell.style && cell.style.borderRadius) {
            return true;
        }

        return false;
    }

    //==== Column sort order methods ====
    private handleColumnSort(receivingColumn: Column, sortedColumn: Column) {
        // Get receiving column position
        const receivingColIndex = this.data.columns.findIndex(
            (col) =>
                col.name === receivingColumn.name &&
                col.title === receivingColumn.title
        );
        // Get sorted column current position
        const sortedColIndex = this.data.columns.findIndex(
            (col) =>
                col.name === sortedColumn.name &&
                col.title === sortedColumn.title
        );

        // Moves the sortedColumn into the correct position
        if (this.sortableColumnsMutateData) {
            this.moveSortedColumns(
                this.data.columns,
                receivingColIndex,
                sortedColIndex
            );
        }
        // fires event
        this.kupDataTableSortedColumn.emit({
            receivingColumnIndex: receivingColIndex,
            sortedColumnIndex: sortedColIndex,
        });
    }

    private moveSortedColumns(
        columns: Column[],
        receivingColumnIndex: number,
        sortedColumnIndex: number
    ) {
        const remove = columns.splice(sortedColumnIndex, 1);
        columns.splice(receivingColumnIndex, 0, remove[0]);
    }

    @Method() async defaultSortingFunction(
        columns: Column[],
        receivingColumnIndex: number,
        sortedColumnIndex: number,
        useNewObject: boolean = false
    ) {
        const toSort = !useNewObject ? columns : [...columns];

        this.moveSortedColumns(toSort, receivingColumnIndex, sortedColumnIndex);

        return toSort;
    }

    //======== render methods ========
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
                    <div
                        onMouseEnter={() =>
                            this.onColumnMouseLeave(column.name)
                        }
                        onMouseLeave={() =>
                            this.onColumnMouseEnter(column.name)
                        }
                    >
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
                    <span
                        class="column-sort"
                        onMouseEnter={() =>
                            this.onColumnMouseLeave(column.name)
                        }
                        onMouseLeave={() =>
                            this.onColumnMouseEnter(column.name)
                        }
                    >
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

            // Check if columns are droppable and sets their handlers
            // TODO set better typing.
            let dragHandlers: any = {};
            if (this.enableSortableColumns) {
                // Reference for drag events and what they permit or not
                // https://html.spec.whatwg.org/multipage/dnd.html#concept-dnd-p

                dragHandlers = {
                    draggable: true,
                    onDragStart: (e: DragEvent) => {
                        // Sets drag data and the type of drag
                        e.dataTransfer.setData(
                            KupDataTableColumnDragType,
                            JSON.stringify(column)
                        );
                        e.dataTransfer.effectAllowed = 'move';

                        // Remember that the current target is different from the one print out in the console
                        // Sets which element has started the drag
                        (e.target as HTMLElement).setAttribute(
                            this.dragStarterAttribute,
                            ''
                        );
                        this.theadRef.setAttribute(this.dragFlagAttribute, '');
                        this.columnsAreBeingDragged = true;
                    },
                    onDragLeave: (e: DragEvent) => {
                        if (
                            e.dataTransfer.types.indexOf(
                                KupDataTableColumnDragType
                            ) >= 0
                        ) {
                            (e.target as HTMLElement).removeAttribute(
                                this.dragOverAttribute
                            );
                        }
                    },
                    onDragOver: (e: DragEvent) => {
                        if (
                            e.dataTransfer.types.indexOf(
                                KupDataTableColumnDragType
                            ) >= 0
                        ) {
                            const overElement = e.target as HTMLElement;
                            overElement.setAttribute(
                                this.dragOverAttribute,
                                ''
                            );
                            // If element can have a drop effect
                            if (
                                !overElement.hasAttribute(
                                    this.dragStarterAttribute
                                ) &&
                                this.columnsAreBeingDragged
                            ) {
                                e.preventDefault(); // Mandatory to allow drop
                                e.dataTransfer.effectAllowed = 'move';
                            } else {
                                e.dataTransfer.effectAllowed = 'none';
                            }
                        }
                    },
                    onDragEnd: (e: DragEvent) => {
                        // When the drag has ended, checks if the element still exists or it was destroyed by the JSX
                        const dragStarter = e.target as HTMLElement;
                        if (dragStarter) {
                            // IF it still exists, removes the attribute so that it can perform a new drag again
                            dragStarter.removeAttribute(
                                this.dragStarterAttribute
                            );
                        }
                        this.theadRef.removeAttribute(this.dragFlagAttribute);
                        this.columnsAreBeingDragged = false;
                    },
                    onDrop: (e: DragEvent) => {
                        if (
                            e.dataTransfer.types.indexOf(
                                KupDataTableColumnDragType
                            ) >= 0
                        ) {
                            const transferredData = JSON.parse(
                                e.dataTransfer.getData(
                                    KupDataTableColumnDragType
                                )
                            ) as Column;
                            e.preventDefault();
                            (e.target as HTMLElement).removeAttribute(
                                this.dragOverAttribute
                            );

                            // We are sure the tables have been dropped in a valid location -> starts sorting the columns
                            this.handleColumnSort(column, transferredData);
                        }
                    },
                };
            }

            return (
                <th
                    style={thStyle}
                    onMouseEnter={() => this.onColumnMouseEnter(column.name)}
                    onMouseLeave={() => this.onColumnMouseLeave(column.name)}
                    {...dragHandlers}
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

    renderFooter() {
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

    private renderRow(row: Row, level = 0, previousRow?: Row) {
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
                            onClick={(e) => {
                                e.stopPropagation();
                                this.onRowExpand(row);
                            }}
                        />
                        {row.group.label}
                    </td>
                );

                for (let column of visibleColumns) {
                    cells.push(
                        <td class="total">{row.group.totals[column.name]}</td>
                    );
                }

                jsxRows.push(
                    <tr class="group" onClick={() => this.onRowExpand(row)}>
                        {cells}
                    </tr>
                );
            } else {
                jsxRows.push(
                    <tr class="group" onClick={() => this.onRowExpand(row)}>
                        <td colSpan={this.calculateColspan()}>
                            {indent}
                            <span
                                role="button"
                                aria-label="Row expander" // TODO change this label
                                class={`row-expander ${icon}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    this.onRowExpand(row);
                                }}
                            />
                            {row.group.label}
                        </td>
                    </tr>
                );
            }

            // if group is expanded, add children
            if (this.isGroupExpanded(row)) {
                row.group.children
                    // We must pass the previous element of the array to check if we must hide or display the value of the cell
                    // When the column has specified the parameter hideValuesRepetitions
                    .map((row, groupRowIndex, currentArray) =>
                        this.renderRow(
                            row,
                            level + 1,
                            groupRowIndex > 0
                                ? currentArray[groupRowIndex - 1]
                                : null
                        )
                    )
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
            const cells = visibleColumns.map((currentColumn, index) => {
                const { name, hideValuesRepetitions } = currentColumn;
                let indend = [];
                if (index === 0 && !(this.isGrouping() && this.hasTotals())) {
                    for (let i = 0; i < level; i++) {
                        indend.push(<span class="indent" />);
                    }
                }

                const cell = row.cells[name];

                let options = null;
                /**
                 * Options must be rendered when the option field is specified AND (one of the following):
                 * 1 - Column do not have to hide repetitions
                 * 2 - Column has to hide repetitions but we are printing the first row.
                 * 3 - Column has to hide repetitions but the value of the previous row is not equal to the current row cell.
                 * @todo Move this rendering, if possible, inside renderCell()
                 */
                if (
                    cell.options &&
                    (!hideValuesRepetitions ||
                        (hideValuesRepetitions &&
                            (!previousRow ||
                                previousRow.cells[name].value !== cell.value)))
                ) {
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

                const jsxCell = this.renderCell(
                    cell,
                    name,
                    // The previous value must be passed only if repeated values can be hidden and we have a previous row.
                    {
                        row,
                        column: currentColumn,
                    },
                    hideValuesRepetitions && previousRow
                        ? previousRow.cells[name].value
                        : null
                );

                const cellClass = {
                    number: isNumber(cell.obj),
                };

                let cellStyle = null;
                if (!this.styleHasBorderRadius(cell)) {
                    cellStyle = cell.style;
                }

                return (
                    <td data-column={name} style={cellStyle} class={cellClass}>
                        {indend}
                        {jsxCell}
                        {options}
                    </td>
                );
            });

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
                const defaultRowActions = this.renderActions(
                    this.rowActions,
                    row,
                    'default'
                );

                let rowActionExpander = null;
                let variableActions = null;
                if (row.actions) {
                    // adding variable actions
                    variableActions = this.renderActions(
                        row.actions,
                        row,
                        'variable'
                    );
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

            const rowClass = {
                selected: this.selectedRows.includes(row),
            };

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

    private renderActions(
        actions: Array<RowAction>,
        row: Row,
        type: string
    ): JSX.Element[] {
        return actions.map((action, index) => {
            return (
                <span
                    title={action.text}
                    class={`row-action ${action.icon}`}
                    onClick={(e) =>
                        this.onDefaultRowActionClick(e, {
                            action,
                            index,
                            row,
                            type,
                        })
                    }
                    role="button"
                    aria-label={action.text}
                    aria-pressed="false"
                />
            );
        });
    }

    /**
     * FActory function for cells.
     * @param cell - cell object
     * @param column - the cell's column name
     * @param previousRowCellValue - An optional value of the previous cell on the same column. If set and equal to the value of the current cell, makes the value of the current cell go blank.
     * @param cellData - Additional data for the current cell.
     * @param cellData.column - The column object to which the cell belongs.
     * @param cellData.row - The row object to which the cell belongs.
     */
    private renderCell(
        cell: Cell,
        column: string,
        cellData: {
            column: Column;
            row: Row;
        },
        previousRowCellValue?: string
    ) {
        // When the previous row value is different from the current value, we can show the current value.
        const valueToDisplay =
            previousRowCellValue !== cell.value ? cell.value : '';

        // Sets the default value
        let content: any = valueToDisplay;

        if (isIcon(cell.obj) || isVoCodver(cell.obj)) {
            content = <span class={valueToDisplay} />;
        } else if (isImage(cell.obj)) {
            content = (
                <img src={valueToDisplay} alt="" width="64" height="64" />
            );
        } else if (isLink(cell.obj)) {
            content = (
                <a href={valueToDisplay} target="_blank">
                    {valueToDisplay}
                </a>
            );
        } else if (isCheckbox(cell.obj)) {
            content = (
                <kup-checkbox
                    checked={!!cell.obj.k}
                    disabled={
                        cellData &&
                        cellData.row &&
                        cellData.row.hasOwnProperty('readOnly')
                            ? cellData.row.readOnly
                            : true
                    }
                />
            );
        } else if (isButton(cell.obj)) {
            /**
             * Here either using .bind() or () => {} function would bring more or less the same result.
             * Both those syntax would create at run time a new function for each cell on which they're rendered.
             * (See references below.)
             *
             * Another solution would be to simply bind an event handler like this:
             * onKupButtonClicked={this.onJ4btnClicked}
             *
             * The problem here is that, by using that syntax:
             * 1 - Each time a cell is rendered with an object item, either the cell or button must have a data-row,
             *      data-column and data-cell-name attributes which stores the index of cell's and the name of the clicked cell;
             * 2 - each time a click event is triggered, the handler reads the row and column index set on the element;
             * 3 - searches those column and row inside the current data for the table;
             * 4 - once the data is found, creates the custom event with the data to be sent.
             *
             * Currently there is no reason to perform such a search, but it may arise if on large data tables
             * there is a significant performance loss.
             * @see https://reactjs.org/docs/handling-events.html
             */
            content = (
                <kup-button
                    {...createJ4objButtonConfig(cell)}
                    onKupButtonClicked={this.onJ4btnClicked.bind(
                        this,
                        cellData ? cellData.row : null,
                        cellData ? cellData.column : null,
                        cell
                    )}
                />
            );
        } else if (isBar(cell.obj)) {
            const props: { value: string; width?: number } = {
                value: cell.value,
            };

            // check if column has width
            if (this.columnsWidth && this.columnsWidth[column]) {
                props.width = this.columnsWidth[column];
            }

            // Controls if we should display this cell value
            content = valueToDisplay ? <kup-graphic-cell {...props} /> : null;
        }

        // TODO
        // else if (isProgressBar(cell.obj)) {
        //     content = <kup-progress-bar />;
        // }

        // if cell.style has border, apply style to cellcontent
        let style = null;
        if (this.styleHasBorderRadius(cell)) {
            style = cell.style;
        }

        return (
            <span class="cell-content" style={style}>
                {content}
            </span>
        );
    }

    private renderLoadMoreButton(isSlotted: boolean = true) {
        const label = 'Carica altri dati';
        return (
            <button
                aria-label={label}
                class="load-more-records mdi mdi-plus-circle"
                role="button"
                slot={isSlotted ? 'more-results' : null}
                tabindex="0"
                title={label}
                onClick={() => this.onLoadMoreClick()}
            />
        );
    }

    render() {
        // resetting rows
        this.renderedRows = [];

        let rows = null;
        if (this.paginatedRows.length === 0) {
            rows = (
                <tr>
                    <td colSpan={this.calculateColspan()}>Empty data</td>
                </tr>
            );
        } else {
            rows = [];
            this.paginatedRows
                // We must pass the previous element of the array to check if we must hide or display the value of the cell
                // When the column has specified the parameter hideValuesRepetitions
                .map((row, rowIndex, currentArray) =>
                    this.renderRow(
                        row,
                        0,
                        rowIndex > 0 ? currentArray[rowIndex - 1] : null
                    )
                )
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
                >
                    {this.showLoadMore ? this.renderLoadMoreButton() : null}
                </kup-paginator>
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
                >
                    {this.showLoadMore ? this.renderLoadMoreButton() : null}
                </kup-paginator>
            );
        }

        let groupChips = null;
        if (this.isGrouping()) {
            const chips = this.groups.map((group) => {
                const column = getColumnByName(this.getColumns(), group.column);

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
                    class={{ active: this.density === 'small' }}
                    iconClass="mdi mdi-format-align-justify"
                    onClick={() => (this.density = 'small')}
                />

                <kup-button
                    class={{ active: this.density === 'medium' }}
                    iconClass="mdi mdi-menu"
                    onClick={() => (this.density = 'medium')}
                />

                <kup-button
                    class={{ active: this.density === 'big' }}
                    iconClass="mdi mdi-view-sequential"
                    onClick={() => (this.density = 'big')}
                />
            </div>
        );

        const tableClass = {
            'column-separation':
                ShowGrid.COMPLETE === this.showGrid ||
                ShowGrid.COL === this.showGrid,

            'row-separation':
                ShowGrid.COMPLETE === this.showGrid ||
                ShowGrid.ROW === this.showGrid,

            'persistent-header': this.headerIsPersistent,
        };

        tableClass[`density-${this.density}`] = true;

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
                        <thead
                            hidden={!this.showHeader}
                            ref={(el) =>
                                (this.theadRef = el as HTMLTableSectionElement)
                            }
                        >
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
