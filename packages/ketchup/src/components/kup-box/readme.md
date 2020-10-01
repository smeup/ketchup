# kup-box



<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute                   | Description                                                                                                     | Type                                       | Default     |
| ------------------------ | --------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ----------- |
| `cardData`               | --                          | Number of columns                                                                                               | `ComponentCardElement`                     | `undefined` |
| `columns`                | `columns`                   | Number of columns                                                                                               | `number`                                   | `1`         |
| `contentAlign`           | `content-align`             | Alignment of the content. Can be set to left, right or center.                                                  | `string`                                   | `'center'`  |
| `customStyle`            | `custom-style`              | Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization | `string`                                   | `undefined` |
| `data`                   | --                          | Data                                                                                                            | `{ columns?: Column[]; rows?: BoxRow[]; }` | `undefined` |
| `dragEnabled`            | `drag-enabled`              | Enable dragging                                                                                                 | `boolean`                                  | `false`     |
| `dropEnabled`            | `drop-enabled`              | Enable dropping                                                                                                 | `boolean`                                  | `false`     |
| `dropOnSection`          | `drop-on-section`           | Drop can be done in section                                                                                     | `boolean`                                  | `undefined` |
| `enableRowActions`       | `enable-row-actions`        | If enabled, a button to load / display the row actions will be displayed on the right of every box              | `boolean`                                  | `false`     |
| `filterEnabled`          | `filter-enabled`            | Enable filtering                                                                                                | `boolean`                                  | `false`     |
| `globalFilterValueState` | `global-filter-value-state` | Global filter value state                                                                                       | `string`                                   | `undefined` |
| `layout`                 | --                          | How the field will be displayed. If not present, a default one will be created.                                 | `Layout`                                   | `undefined` |
| `multiSelection`         | `multi-selection`           | Enable multi selection                                                                                          | `boolean`                                  | `false`     |
| `noBorder`               | `no-border`                 | Removes border                                                                                                  | `boolean`                                  | `false`     |
| `noPadding`              | `no-padding`                | Removes padding                                                                                                 | `boolean`                                  | `false`     |
| `pageSelected`           | `page-selected`             | current number page                                                                                             | `number`                                   | `1`         |
| `pageSize`               | `page-size`                 | Number of boxes per page                                                                                        | `number`                                   | `10`        |
| `pagination`             | `pagination`                | Enables pagination                                                                                              | `boolean`                                  | `false`     |
| `rowsPerPage`            | `rows-per-page`             | current rows per page                                                                                           | `number`                                   | `undefined` |
| `selectBox`              | `select-box`                | Automatically selects the box at the specified index                                                            | `number`                                   | `undefined` |
| `selectedRowsState`      | --                          | Multiple selection                                                                                              | `BoxRow[]`                                 | `[]`        |
| `showSelection`          | `show-selection`            | If enabled, highlights the selected box/boxes                                                                   | `boolean`                                  | `true`      |
| `sortBy`                 | `sort-by`                   | If sorting is enabled, specifies which column to sort                                                           | `string`                                   | `undefined` |
| `sortEnabled`            | `sort-enabled`              | Enable sorting                                                                                                  | `boolean`                                  | `false`     |
| `stateId`                | `state-id`                  |                                                                                                                 | `string`                                   | `''`        |
| `store`                  | --                          |                                                                                                                 | `KupStore`                                 | `undefined` |
| `swipeDisabled`          | `swipe-disabled`            | Disable swipe                                                                                                   | `boolean`                                  | `false`     |
| `tooltipDetailTimeout`   | `tooltip-detail-timeout`    | Defines the timeout for tooltip detail                                                                          | `number`                                   | `undefined` |
| `tooltipLoadTimeout`     | `tooltip-load-timeout`      | Defines the timeout for tooltip load                                                                            | `number`                                   | `undefined` |


## Events

| Event                     | Description                                               | Type                                                                                                                                     |
| ------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `kupAutoBoxSelect`        | Triggered when a box is auto selected via selectBox prop  | `CustomEvent<{ row: BoxRow; }>`                                                                                                          |
| `kupBoxClicked`           | Triggered when a box is clicked                           | `CustomEvent<{ row: BoxRow; column?: string; }>`                                                                                         |
| `kupBoxDragEnded`         | Triggered when a box dragging is ended                    | `CustomEvent<{ fromId: string; fromRow: BoxRow; fromSelectedRows?: BoxRow[]; }>`                                                         |
| `kupBoxDragStarted`       | Triggered when a box dragging is started                  | `CustomEvent<{ fromId: string; fromRow: BoxRow; fromSelectedRows?: BoxRow[]; }>`                                                         |
| `kupBoxDropped`           | Triggered when a box is dropped                           | `CustomEvent<{ fromId: string; fromRow: BoxRow; fromSelectedRows?: BoxRow[]; toId: string; toRow: BoxRow; toSelectedRows?: BoxRow[]; }>` |
| `kupBoxSelected`          | Triggered when the multi selection checkbox changes value | `CustomEvent<{ rows: BoxRow[]; }>`                                                                                                       |
| `kupDidLoad`              | Triggered when start propagation event                    | `CustomEvent<{ EventEmitter: Boolean; }>`                                                                                                |
| `kupDidUnload`            | Triggered when stop propagation event                     | `CustomEvent<{ EventEmitter: Boolean; }>`                                                                                                |
| `kupRowActionClicked`     | When the row menu action icon is clicked                  | `CustomEvent<{ row: BoxRow; action: RowAction; index: number; }>`                                                                        |
| `kupRowActionMenuClicked` | When the row menu action icon is clicked                  | `CustomEvent<{ row: BoxRow; }>`                                                                                                          |


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
- [kup-lazy](../kup-lazy)
- [kup-editor](../kup-editor)
- [kup-image](../kup-image)
- [kup-text-field](../kup-text-field)
- [kup-progress-bar](../kup-progress-bar)
- [kup-radio](../kup-radio)
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
  kup-box --> kup-lazy
  kup-box --> kup-editor
  kup-box --> kup-image
  kup-box --> kup-text-field
  kup-box --> kup-progress-bar
  kup-box --> kup-radio
  kup-box --> kup-tooltip
  kup-box --> kup-combobox
  kup-box --> kup-paginator
  kup-card --> kup-image
  kup-card --> kup-chip
  kup-card --> kup-button
  kup-card --> kup-progress-bar
  kup-card --> kup-chart
  kup-image --> kup-spinner
  kup-image --> kup-badge
  kup-badge --> kup-image
  kup-chip --> kup-image
  kup-button --> kup-image
  kup-progress-bar --> kup-image
  kup-text-field --> kup-image
  kup-tooltip --> kup-button
  kup-tooltip --> kup-image
  kup-tooltip --> kup-tree
  kup-tree --> kup-button
  kup-tree --> kup-lazy
  kup-tree --> kup-checkbox
  kup-tree --> kup-image
  kup-tree --> kup-progress-bar
  kup-tree --> kup-radio
  kup-tree --> kup-text-field
  kup-combobox --> kup-text-field
  kup-combobox --> kup-list
  kup-list --> kup-image
  kup-list --> kup-radio
  kup-list --> kup-checkbox
  kup-paginator --> kup-button
  kup-paginator --> kup-combobox
  style kup-box fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
