import {
    Component,
    Event,
    EventEmitter,
    Prop,
    State,
    Watch,
} from '@stencil/core';

import {
    Column,
    DataTableConfig,
    PaginatorPos,
    SortMode,
    SortObject,
    Row,
} from './ketchup-data-table-declarations';

@Component({
    tag: 'kup-data-table',
    styleUrl: 'ketchup-data-table.scss',
    shadow: true,
})
export class KetchupDataTable {
    @Prop() data: { data?: { columns?: Array<Column>; rows?: Array<Row> } };

    @Prop({
        mutable: true,
    })
    config: DataTableConfig = {};

    @State()
    private globalFilter = '';

    @State()
    private currentPage = 1;

    @State()
    private currentRowsPerPage = 10;

    @State()
    private selectedRow = -1;

    @Watch('config')
    configHandler(newValue: DataTableConfig) {
        if (!newValue) {
            return;
        }

        if (newValue.rowsPerPage) {
            this.currentRowsPerPage = newValue.rowsPerPage;
        }

        if (newValue.selFirst) {
            this.selectedRow = 0;
        } else if (newValue.selectRow) {
            this.selectedRow = newValue.selectRow - 1;
        }
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
    kupRowSelected: EventEmitter<{ row: any }>;

    // lifecycle
    componentWillLoad() {
        this.configHandler(this.config);
    }

    private getColumns(): Array<any> {
        return this.data && this.data.data && this.data.data.columns
            ? this.data.data.columns
            : [{ title: '' }];
    }

    private getRows(): Array<any> {
        return this.data && this.data.data && this.data.data.rows
            ? this.data.data.rows
            : [];
    }

    get filters() {
        if (this.config && this.config.filter) {
            return this.config.filter;
        }

        return {};
    }

    set filters(value) {
        if (this.config) {
            this.config = {
                ...this.config,
                filter: value,
            };
        } else {
            this.config = {
                showFilter: true,
                filter: value,
            };
        }
    }

    get sort(): Array<SortObject> {
        if (this.config && this.config.sort) {
            return this.config.sort;
        }

        return [];
    }

    set sort(sort: Array<SortObject>) {
        if (this.config) {
            this.config = {
                ...this.config,
                sort,
            };
        } else {
            this.config = {
                sort,
            };
        }
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

                    for (let i = 0; i < this.data.data.columns.length; i++) {
                        const c = this.data.data.columns[i];
                        const cellValue = r.cells[c.name].value;

                        if (
                            cellValue
                                .toLowerCase()
                                .includes(this.globalFilter.toLocaleLowerCase())
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

    private showFilters(): boolean {
        return this.config && this.config.showFilter;
    }

    private showGrid(): boolean {
        if (this.config) {
            return (
                !this.config.hasOwnProperty('showGrid') || this.config.showGrid
            );
        }
        return true;
    }

    private showHeader(): boolean {
        if (this.config) {
            return (
                !this.config.hasOwnProperty('showHeader') ||
                this.config.showHeader
            );
        }
        return true;
    }

    private showSort(): boolean {
        if (this.config) {
            return (
                !this.config.hasOwnProperty('enableSort') ||
                this.config.enableSort
            );
        }
        return true;
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

            const newSort = [...this.sort];
            newSort[i] = newSortObj;
            this.sort = newSort;
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

        this.globalFilter = event.detail.value;
    }

    private sortRows(rows: Array<any>): Array<any> {
        if (this.sort.length === 0) {
            // no sort -> return rows as they are
            return rows;
        }

        // check multiple sort
        const isMultiSort = this.sort.length > 1;

        // sorting rows
        return rows.sort((r1, r2) => {
            if (isMultiSort) {
                for (let i = 0; i < this.sort.length; i++) {
                    const sortObj = this.sort[i];

                    // getting cell value
                    const value1: string = r1.cells[sortObj.column].value;
                    const value2: string = r2.cells[sortObj.column].value;

                    if (value1 === value2) {
                        // same value -> next column
                        continue;
                    }

                    const sortMode = sortObj.sortMode === 'A' ? 1 : -1;

                    return sortMode * value1.localeCompare(value2);
                }

                // same row
                return 0;
            } else {
                const sortObj = this.sort[0];

                // getting cell value
                const value1: string = r1.cells[sortObj.column].value;
                const value2: string = r2.cells[sortObj.column].value;

                const sortMode = sortObj.sortMode === 'A' ? 1 : -1;

                return sortMode * value1.localeCompare(value2);
            }
        });
    }

    get rowsPerPage(): number {
        return this.config && this.config.rowsPerPage
            ? this.config.rowsPerPage
            : 10;
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
    }

    // render methods
    private renderHeader() {
        const hasCustomColumnsWidth =
            this.config &&
            this.config.columnsWidth &&
            this.config.columnsWidth.length > 0;

        return this.getColumns().map((column) => {
            // filter
            let filter = null;
            if (this.showFilters()) {
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
            if (this.showSort()) {
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
                for (let i = 0; i < this.config.columnsWidth.length; i++) {
                    const currentCol = this.config.columnsWidth[i];

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
    }

    render() {
        // header
        const header = this.renderHeader();

        // rows
        // 1) filters
        const filteredRows = this.getFilteredRows();

        // 2) sort
        const sortedRows = this.sortRows(filteredRows);

        // 3) pagination
        const paginatedRows = this.paginateRows(sortedRows);

        // 4) jsx
        let rows = null;
        if (paginatedRows.length === 0) {
            rows = (
                <tr>
                    <td colSpan={this.getColumns().length}>Empty data</td>
                </tr>
            );
        } else {
            rows = paginatedRows.map((row, index) => {
                const cells = this.getColumns().map(({ name }) => {
                    return <td>{row.cells[name].value}</td>;
                });

                let rowClass = null;
                if (this.selectedRow === index) {
                    rowClass = 'selected';
                }

                return (
                    <tr class={rowClass} onClick={() => this.onRowClick(row)}>
                        {cells}
                    </tr>
                );
            });
        }

        let globalFilter = null;
        if (this.config && this.config.globalFilter) {
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
            !this.config ||
            !this.config.paginatorPos ||
            PaginatorPos.TOP === this.config.paginatorPos ||
            PaginatorPos.BOTH === this.config.paginatorPos
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
            this.config &&
            (PaginatorPos.BOTTOM === this.config.paginatorPos ||
                PaginatorPos.BOTH === this.config.paginatorPos)
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
        if (!this.showGrid()) {
            tableClass = 'noGrid';
        }

        return (
            <div>
                {paginatorTop}
                {globalFilter}
                <table class={tableClass}>
                    <thead hidden={!this.showHeader()}>
                        <tr>{header}</tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
                {paginatorBottom}
            </div>
        );
    }
}
