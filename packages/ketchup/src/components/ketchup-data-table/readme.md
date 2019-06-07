# kup-data-table



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description | Type                                                           | Default            |
| ---------------- | ----------------- | ----------- | -------------------------------------------------------------- | ------------------ |
| `columnsWidth`   | --                |             | `{ column: string; width: number; }[]`                         | `[]`               |
| `data`           | --                |             | `{ columns?: Column[]; rows?: Row[]; }`                        | `undefined`        |
| `filters`        | --                |             | `GenericMap`                                                   | `{}`               |
| `globalFilter`   | `global-filter`   |             | `boolean`                                                      | `false`            |
| `groups`         | --                |             | `GroupObject[]`                                                | `[]`               |
| `multiSelection` | `multi-selection` |             | `boolean`                                                      | `false`            |
| `paginatorPos`   | `paginator-pos`   |             | `PaginatorPos.BOTH \| PaginatorPos.BOTTOM \| PaginatorPos.TOP` | `PaginatorPos.TOP` |
| `rowsPerPage`    | `rows-per-page`   |             | `number`                                                       | `10`               |
| `selectRow`      | `select-row`      |             | `number`                                                       | `undefined`        |
| `showFilters`    | `show-filters`    |             | `boolean`                                                      | `false`            |
| `showGrid`       | `show-grid`       |             | `boolean`                                                      | `true`             |
| `showHeader`     | `show-header`     |             | `boolean`                                                      | `true`             |
| `sort`           | --                |             | `SortObject[]`                                                 | `[]`               |
| `sortEnabled`    | `sort-enabled`    |             | `boolean`                                                      | `true`             |
| `totals`         | --                |             | `TotalsMap`                                                    | `undefined`        |


## Events

| Event              | Description                                    | Type                                                                                    |
| ------------------ | ---------------------------------------------- | --------------------------------------------------------------------------------------- |
| `kupAddColumn`     | When 'add column' menu item is clicked         | `CustomEvent<{ column: string }>`                                                       |
| `kupAutoRowSelect` | When a row is auto selected via selectRow prop | `CustomEvent<{         selectedRow: Row;     }>`                                        |
| `kupOptionClicked` | When cell option is clicked                    | `CustomEvent<{         column: string;         row: Row;     }>`                        |
| `kupRowSelected`   | When a row is selected                         | `CustomEvent<{         selectedRows: Array<Row>;         clickedColumn: string;     }>` |


## CSS Custom Properties

| Name                                                                    | Description                            |
| ----------------------------------------------------------------------- | -------------------------------------- |
| `--int_color, --kup-data-table_color`                                   | Set text color                         |
| `--int_hover-background-color, --kup-data-table_hover-background-color` | Set background color when hover on row |
| `--int_hover-color, --kup-data-table_hover-color`                       | Set text color when hover on row       |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
