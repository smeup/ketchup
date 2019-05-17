import { Component, Prop, State } from '@stencil/core';
import { DataTableConfig, SortObject } from './ketchup-data-table-declarations';

@Component({
    tag: 'kup-data-table',
    styleUrl: 'ketchup-data-table.scss',
    shadow: true,
})
export class KetchupDataTable {
    @Prop() data: { data?: { columns?: Array<any>; rows?: Array<any> } };

    @Prop({
        mutable: true,
    })
    config: DataTableConfig = {};

    @State()
    private globalFilter = '';

    @State()
    private sort: Array<SortObject> = [];

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

    private getFilteredRows(): Array<any> {
        if (
            (this.filters && Object.keys(this.filters).length > 0) ||
            this.globalFilter
        ) {
            const keys = Object.keys(this.filters);

            // filtering rows
            return this.getRows().filter((r) => {
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
                sortMode: sortObj.sortMode === 'A' ? 'D' : 'A',
            };

            const newSort = [...this.sort];
            newSort[i] = newSortObj;
            this.sort = newSort;
        } else {
            const sortObj: SortObject = {
                column: columnName,
                sortMode: 'A',
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

    // render methods
    private renderHeader() {
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

            return (
                <th>
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

        // 3) jsx
        let rows = null;
        if (sortedRows.length === 0) {
            rows = (
                <tr>
                    <td colSpan={this.getColumns().length}>Empty data</td>
                </tr>
            );
        } else {
            rows = sortedRows.map((row) => {
                const cells = this.getColumns().map(({ name }) => {
                    return <td>{row.cells[name].value}</td>;
                });

                return <tr>{cells}</tr>;
            });
        }

        let globalFilter = null;
        if (this.config && this.config.globalFilter) {
            globalFilter = (
                <div class="globalFilter">
                    <kup-text-input
                        label="Global filter"
                        onKetchupTextInputUpdated={(event) =>
                            this.onGlobalFilterChange(event)
                        }
                    />
                </div>
            );
        }

        return [
            <div>
                {globalFilter}
                <table>
                    <thead>
                        <tr>{header}</tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>,
        ];
    }
}
