# kup-data-table



## About persistent header

A persistent header is when the header of the table remains positioned fixedly and is visible when a user
scrolls the window until the whole table has disappeared from view.

The current implementation, based on the features of the currently used SmeUP data table component,
make use of the CSS property `position: sticky;`.
[Here](https://caniuse.com/#feat=css-sticky) you can see the support fot this feature.

The implementation of this feature makes use of pure CSS because its current behavior is quite simple.

More details about the component's modification to allow sticky positioning can be found inside the comments
left in the component itself.

To see how to configure this behavior, check out the `header-is-persistent` property.

#### Known limitations

##### Table headers borders

Browsers tables has always been problematic.
Due to how browsers implements the `sticky` feature, when applied to a `<th>` element inside a `<thead>`,
the borders do not get scrolled down: they stay in their original position.

In other words, if you need to set border between header cells, your best call would be to either use the
`:before` or `after` pseudo elements positioned absolutely inside each cell.
Or set the border to a wrapper which is also the first children of the cell itself.

This helps you solve also other problems with `<th>` elements having a transparent border set when scrolling.
A border you cannot get rid of.

##### The `sticky` behavior is relative to an element first scrollable ancestor

The `sticky` behavior gets triggered when the first ancestor element with a scrollable content gets scrolled.

If the `sticky` element would be hidden by the scroll, after having specified a threshold (top, bottom, left, right),
the element gets positioned fixedly until its ancestor is fully scrolled: in that moment it stops from being fixed and disappears.


<!-- Auto Generated Below -->


## Properties

| Property                    | Attribute                      | Description                                                                                                                                                                                                                                                     | Type                                                                                             | Default                              |
| --------------------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------ |
| `columnsWidth`              | --                             |                                                                                                                                                                                                                                                                 | `{ column: string; width: number; }[]`                                                           | `[]`                                 |
| `data`                      | --                             |                                                                                                                                                                                                                                                                 | `TableData`                                                                                      | `undefined`                          |
| `enableSortableColumns`     | `enable-sortable-columns`      | Enables sorting of the columns by dragging them into different columns                                                                                                                                                                                          | `boolean`                                                                                        | `false`                              |
| `expandGroups`              | `expand-groups`                |                                                                                                                                                                                                                                                                 | `boolean`                                                                                        | `false`                              |
| `filters`                   | --                             |                                                                                                                                                                                                                                                                 | `GenericMap`                                                                                     | `{}`                                 |
| `globalFilter`              | `global-filter`                |                                                                                                                                                                                                                                                                 | `boolean`                                                                                        | `false`                              |
| `groups`                    | --                             |                                                                                                                                                                                                                                                                 | `GroupObject[]`                                                                                  | `[]`                                 |
| `headerIsPersistent`        | `header-is-persistent`         | If table header is visible and this prop is set to true, the header will be visible while scrolling the table. To make this work, it must be configured together with the data-table CSS property --kup-data-table_header-offset. It uses CSS position: sticky. | `boolean`                                                                                        | `false`                              |
| `loadMoreLimit`             | `load-more-limit`              | Sets a maximum limit of new records which can be required by the load more functionality.                                                                                                                                                                       | `number`                                                                                         | `1000`                               |
| `loadMoreMode`              | `load-more-mode`               | Establish the modality of how many new records will be downloaded.  This property is regulated also by loadMoreStep.                                                                                                                                            | `LoadMoreMode.CONSTANT \| LoadMoreMode.CONSTANT_INCREMENT \| LoadMoreMode.PROGRESSIVE_THRESHOLD` | `LoadMoreMode.PROGRESSIVE_THRESHOLD` |
| `loadMoreStep`              | `load-more-step`               | The number of records which will be requested to be downloaded when clicking on the load more button.  This property is regulated also by loadMoreMode.                                                                                                         | `number`                                                                                         | `60`                                 |
| `multiSelection`            | `multi-selection`              |                                                                                                                                                                                                                                                                 | `boolean`                                                                                        | `false`                              |
| `paginatorPos`              | `paginator-pos`                |                                                                                                                                                                                                                                                                 | `PaginatorPos.BOTH \| PaginatorPos.BOTTOM \| PaginatorPos.TOP`                                   | `PaginatorPos.TOP`                   |
| `rowActions`                | --                             |                                                                                                                                                                                                                                                                 | `RowAction[]`                                                                                    | `undefined`                          |
| `rowsPerPage`               | `rows-per-page`                |                                                                                                                                                                                                                                                                 | `number`                                                                                         | `10`                                 |
| `selectRow`                 | `select-row`                   |                                                                                                                                                                                                                                                                 | `number`                                                                                         | `undefined`                          |
| `showFilters`               | `show-filters`                 |                                                                                                                                                                                                                                                                 | `boolean`                                                                                        | `false`                              |
| `showGrid`                  | `show-grid`                    |                                                                                                                                                                                                                                                                 | `ShowGrid.COL \| ShowGrid.COMPLETE \| ShowGrid.NONE \| ShowGrid.ROW`                             | `ShowGrid.COMPLETE`                  |
| `showHeader`                | `show-header`                  | Enables rendering of the table header.                                                                                                                                                                                                                          | `boolean`                                                                                        | `true`                               |
| `showLoadMore`              | `show-load-more`               | If set to true, displays the button to load more records.                                                                                                                                                                                                       | `boolean`                                                                                        | `false`                              |
| `sort`                      | --                             |                                                                                                                                                                                                                                                                 | `SortObject[]`                                                                                   | `[]`                                 |
| `sortEnabled`               | `sort-enabled`                 |                                                                                                                                                                                                                                                                 | `boolean`                                                                                        | `true`                               |
| `sortableColumnsMutateData` | `sortable-columns-mutate-data` | If set to true, when a column is dragged to be sorted the component directly mutates the data.columns property and then fires the event                                                                                                                         | `boolean`                                                                                        | `true`                               |
| `totals`                    | --                             |                                                                                                                                                                                                                                                                 | `TotalsMap`                                                                                      | `undefined`                          |


## Events

| Event                      | Description                                    | Type                                                                                                          |
| -------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `kupAddColumn`             | When 'add column' menu item is clicked         | `CustomEvent<{ column: string; }>`                                                                            |
| `kupAutoRowSelect`         | When a row is auto selected via selectRow prop | `CustomEvent<{ selectedRow: Row; }>`                                                                          |
| `kupCellButtonClicked`     |                                                | `CustomEvent<KupDataTableCellButtonClick>`                                                                    |
| `kupDataTableSortedColumn` |                                                | `CustomEvent<KupDataTableSortedColumnIndexes>`                                                                |
| `kupLoadMoreClicked`       |                                                | `CustomEvent<{ loadItems: number; }>`                                                                         |
| `kupOptionClicked`         | When cell option is clicked                    | `CustomEvent<{ column: string; row: Row; }>`                                                                  |
| `kupRowActionClicked`      | When a row action is clicked                   | `CustomEvent<{ type: "default" \| "variable" \| "expander"; row: Row; action?: RowAction; index?: number; }>` |
| `kupRowSelected`           | When a row is selected                         | `CustomEvent<{ selectedRows: Row[]; clickedColumn: string; }>`                                                |


## Methods

### `defaultSortingFunction(columns: Column[], receivingColumnIndex: number, sortedColumnIndex: number, useNewObject?: boolean) => Promise<Column[]>`



#### Returns

Type: `Promise<Column[]>`




## CSS Custom Properties

| Name                                                                      | Description                                                                  |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `--int_background-color, --kup-data-table_background-color`               | background-color of the whole component (paginator and table).               |
| `--int_border-color, --kup-data-table_border-color`                       | border-color for the whole table.                                            |
| `--int_box-shadow, --kup-data-table_box-shadow`                           | common box-shadow used by the table.                                         |
| `--int_color, --kup-data-table_color`                                     | Text color of the column menu when hovering a header cell.                   |
| `--int_drag-over--allowed, --kup-data-table_drag-over--allowed`           | the color of the cell when the drop of the drag is allowed.                  |
| `--int_drag-over--forbidden, --kup-data-table_drag-over--forbidden`       | the color of the cell when the drop of the drag is forbidden.                |
| `--int_filter-background-color, --kup-data-table_filter-background-color` | Sets background color onto kup-text-input elements used to filter rows.      |
| `--int_filter-border-color, --kup-data-table_filter-border-color`         | Sets border color onto kup-text-input elements used to filter rows.          |
| `--int_font-size, --kup-data-table_font-size`                             | Sets basic font size.                                                        |
| `--int_group-background-color, --kup-data-table_group-background-color`   | background-color when grouping elements.                                     |
| `--int_group-border-color, --kup-data-table_group-border-color`           | TODO check where used.                                                       |
| `--int_head-background-color, --kup-data-table_head-background-color`     | Background color of the table header.                                        |
| `--int_header-offset, --kup-data-table_header-offset`                     | Top offset of the thead when table header must be persistent. Default: 50px; |
| `--int_hover-background-color, --kup-data-table_hover-background-color`   | background-color of a row when it's selected or hovered.                     |
| `--int_hover-color, --kup-data-table_hover-color`                         | text color of a row when it's selected or hovered.                           |
| `--int_icons-color, --kup-data-table_icons-color`                         | Color of a table icon.                                                       |
| `--int_icons-hover-color, --kup-data-table_icons-hover-color`             | Color of a hovered icon.                                                     |
| `--int_main-color, --kup-data-table_main-color`                           | Set text color. Has the precedence.                                          |
| `--int_stronger-color, --kup-data-table_stronger-color`                   | Set text color on the whole table element.                                   |
| `--int_text-on-main-color, --kup-data-table_text-on-main-color`           | Color of the grouping chips of a column.                                     |


## Dependencies

### Depends on

- [kup-text-input](../kup-text-input)
- [kup-checkbox](../kup-checkbox)
- [kup-button](../kup-button)
- [kup-graphic-cell](../kup-graphic-cell)
- [kup-paginator](../kup-paginator)

### Graph
```mermaid
graph TD;
  kup-data-table --> kup-text-input
  kup-data-table --> kup-checkbox
  kup-data-table --> kup-button
  kup-data-table --> kup-graphic-cell
  kup-data-table --> kup-paginator
  style kup-data-table fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
