# kup-box



<!-- Auto Generated Below -->


## Properties

| Property                  | Attribute                     | Description                                                                                                     | Type                                       | Default     |
| ------------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ----------- |
| `cardData`                | --                            | Number of columns                                                                                               | `ComponentCardElement`                     | `undefined` |
| `columns`                 | `columns`                     | Number of columns                                                                                               | `number`                                   | `1`         |
| `customStyle`             | `custom-style`                | Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization | `string`                                   | `undefined` |
| `data`                    | --                            | Data                                                                                                            | `{ columns?: Column[]; rows?: BoxRow[]; }` | `undefined` |
| `dragEnabled`             | `drag-enabled`                | Enable dragging                                                                                                 | `boolean`                                  | `false`     |
| `dropEnabled`             | `drop-enabled`                | Enable dropping                                                                                                 | `boolean`                                  | `false`     |
| `dropOnSection`           | `drop-on-section`             | Drop can be done in section                                                                                     | `boolean`                                  | `false`     |
| `enableRowActions`        | `enable-row-actions`          | If enabled, a button to load / display the row actions will be displayed on the right of every box              | `boolean`                                  | `false`     |
| `globalFilter`            | `global-filter`               | When set to true it activates the global filter.                                                                | `boolean`                                  | `false`     |
| `globalFilterValue`       | `global-filter-value`         | The value of the global filter.                                                                                 | `string`                                   | `''`        |
| `layout`                  | --                            | How the field will be displayed. If not present, a default one will be created.                                 | `Layout`                                   | `undefined` |
| `multiSelection`          | `multi-selection`             | Enable multi selection                                                                                          | `boolean`                                  | `false`     |
| `pageSelected`            | `page-selected`               | Current page number                                                                                             | `number`                                   | `1`         |
| `pageSize`                | `page-size`                   | Number of boxes per page                                                                                        | `number`                                   | `10`        |
| `pagination`              | `pagination`                  | Enables pagination                                                                                              | `boolean`                                  | `false`     |
| `rowsPerPage`             | `rows-per-page`               | Number of current rows per page                                                                                 | `number`                                   | `undefined` |
| `selectBox`               | `select-box`                  | Automatically selects the box at the specified index                                                            | `number`                                   | `undefined` |
| `selectedRowsState`       | `selected-rows-state`         | Multiple selection                                                                                              | `string`                                   | `undefined` |
| `showSelection`           | `show-selection`              | If enabled, highlights the selected box/boxes                                                                   | `boolean`                                  | `true`      |
| `showTooltipOnRightClick` | `show-tooltip-on-right-click` | If set to true, displays tooltip on right click; if set to false, displays tooltip on mouseOver.                | `boolean`                                  | `true`      |
| `sortBy`                  | `sort-by`                     | If sorting is enabled, specifies which column to sort                                                           | `string`                                   | `undefined` |
| `sortEnabled`             | `sort-enabled`                | Enable sorting                                                                                                  | `boolean`                                  | `false`     |
| `stateId`                 | `state-id`                    |                                                                                                                 | `string`                                   | `''`        |
| `store`                   | --                            |                                                                                                                 | `KupStore`                                 | `undefined` |
| `swipeDisabled`           | `swipe-disabled`              | Disable swipe                                                                                                   | `boolean`                                  | `false`     |
| `tooltipDetailTimeout`    | `tooltip-detail-timeout`      | Defines the timeout for tooltip detail                                                                          | `number`                                   | `undefined` |
| `tooltipLoadTimeout`      | `tooltip-load-timeout`        | Defines the timeout for tooltip load                                                                            | `number`                                   | `undefined` |


## Events

| Event                     | Description                                               | Type                                                                             |
| ------------------------- | --------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `kupAutoBoxSelect`        | Triggered when a box is auto selected via selectBox prop  | `CustomEvent<{ row: BoxRow; }>`                                                  |
| `kupBoxClicked`           | Triggered when a box is clicked                           | `CustomEvent<{ row: BoxRow; column?: string; }>`                                 |
| `kupBoxDragEnded`         | Triggered when a box dragging is ended                    | `CustomEvent<{ fromId: string; fromRow: BoxRow; fromSelectedRows?: BoxRow[]; }>` |
| `kupBoxDragStarted`       | Triggered when a box dragging is started                  | `CustomEvent<{ fromId: string; fromRow: BoxRow; fromSelectedRows?: BoxRow[]; }>` |
| `kupBoxSelected`          | Triggered when the multi selection checkbox changes value | `CustomEvent<{ rows: BoxRow[]; }>`                                               |
| `kupDidLoad`              |                                                           | `CustomEvent<void>`                                                              |
| `kupDidUnload`            | Triggered when stop propagation event                     | `CustomEvent<void>`                                                              |
| `kupRowActionClicked`     | When the row menu action icon is clicked                  | `CustomEvent<{ row: BoxRow; action: RowAction; index: number; }>`                |
| `kupRowActionMenuClicked` | When the row menu action icon is clicked                  | `CustomEvent<{ row: BoxRow; }>`                                                  |


## Methods

### `loadRowActions(row: BoxRow, actions: RowAction[]) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `refreshCustomStyle(customStyleTheme: string) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [kup-card](../kup-card)
- [kup-checkbox](../kup-checkbox)
- [kup-badge](../kup-badge)
- [kup-button](../kup-button)
- [kup-chart](../kup-chart)
- [kup-editor](../kup-editor)
- [kup-image](../kup-image)
- [kup-text-field](../kup-text-field)
- [kup-progress-bar](../kup-progress-bar)
- [kup-radio](../kup-radio)
- [kup-gauge](../kup-gauge)
- [kup-tooltip](../kup-tooltip)
- [kup-combobox](../kup-combobox)
- [kup-paginator](../kup-paginator)

### Graph
```mermaid
graph TD;
  kup-box --> kup-card
  kup-box --> kup-checkbox
  kup-box --> kup-badge
  kup-box --> kup-button
  kup-box --> kup-chart
  kup-box --> kup-editor
  kup-box --> kup-image
  kup-box --> kup-text-field
  kup-box --> kup-progress-bar
  kup-box --> kup-radio
  kup-box --> kup-gauge
  kup-box --> kup-tooltip
  kup-box --> kup-combobox
  kup-box --> kup-paginator
  kup-card --> kup-chip
  kup-card --> kup-image
  kup-card --> kup-button
  kup-card --> kup-progress-bar
  kup-card --> kup-chart
  kup-card --> kup-badge
  kup-image --> kup-spinner
  kup-image --> kup-badge
  kup-badge --> kup-image
  kup-tooltip --> kup-button
  kup-tooltip --> kup-tree
  kup-tree --> kup-image
  kup-tree --> kup-button
  kup-tree --> kup-chart
  kup-tree --> kup-checkbox
  kup-tree --> kup-chip
  kup-tree --> kup-color-picker
  kup-tree --> kup-gauge
  kup-tree --> kup-progress-bar
  kup-tree --> kup-rating
  kup-tree --> kup-radio
  kup-tree --> kup-text-field
  kup-color-picker --> kup-text-field
  kup-combobox --> kup-text-field
  kup-combobox --> kup-list
  kup-list --> kup-radio
  kup-list --> kup-checkbox
  kup-paginator --> kup-button
  kup-paginator --> kup-combobox
  style kup-box fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
