# kup-box

<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description                                                                                        | Type            | Default     |
| ------------------- | --------------------- | -------------------------------------------------------------------------------------------------- | --------------- | ----------- |
| `cardData`          | --                    | Data of the card linked to the box when the latter's layout must be a premade template.            | `GenericObject` | `null`      |
| `columns`           | `columns`             | Number of columns                                                                                  | `number`        | `1`         |
| `customStyle`       | `custom-style`        | Custom style of the component.                                                                     | `string`        | `''`        |
| `data`              | --                    | Actual data of the box.                                                                            | `KupBoxData`    | `null`      |
| `dragEnabled`       | `drag-enabled`        | Enable dragging                                                                                    | `boolean`       | `false`     |
| `dropEnabled`       | `drop-enabled`        | Enable dropping                                                                                    | `boolean`       | `false`     |
| `dropOnSection`     | `drop-on-section`     | Drop can be done in section                                                                        | `boolean`       | `false`     |
| `editableData`      | `editable-data`       | When set to true, editable cells will be rendered using input components.                          | `boolean`       | `false`     |
| `enableRowActions`  | `enable-row-actions`  | If enabled, a button to load / display the row actions will be displayed on the right of every box | `boolean`       | `false`     |
| `globalFilter`      | `global-filter`       | When set to true it activates the global filter.                                                   | `boolean`       | `false`     |
| `globalFilterValue` | `global-filter-value` | The value of the global filter.                                                                    | `string`        | `''`        |
| `kanban`            | --                    | Displays the boxlist as a Kanban.                                                                  | `KupBoxKanban`  | `null`      |
| `layout`            | --                    | How the field will be displayed. If not present, a default one will be created.                    | `KupBoxLayout`  | `undefined` |
| `multiSelection`    | `multi-selection`     | Enable multi selection                                                                             | `boolean`       | `false`     |
| `pageSelected`      | `page-selected`       | Current page number                                                                                | `number`        | `1`         |
| `pageSize`          | `page-size`           | Number of boxes per page                                                                           | `number`        | `10`        |
| `pagination`        | `pagination`          | Enables pagination                                                                                 | `boolean`       | `false`     |
| `rowsPerPage`       | `rows-per-page`       | Number of current rows per page                                                                    | `number`        | `undefined` |
| `scrollOnHover`     | `scroll-on-hover`     | Activates the scroll on hover function.                                                            | `boolean`       | `false`     |
| `selectBox`         | `select-box`          | Automatically selects the box at the specified index                                               | `number`        | `undefined` |
| `selectedRowsState` | `selected-rows-state` | Multiple selection                                                                                 | `string`        | `undefined` |
| `showSelection`     | `show-selection`      | If enabled, highlights the selected box/boxes                                                      | `boolean`       | `true`      |
| `sortBy`            | `sort-by`             | If sorting is enabled, specifies which column to sort                                              | `string`        | `undefined` |
| `sortEnabled`       | `sort-enabled`        | Enable sorting                                                                                     | `boolean`       | `false`     |
| `stateId`           | `state-id`            |                                                                                                    | `string`        | `''`        |
| `store`             | --                    |                                                                                                    | `KupStore`      | `undefined` |
| `swipeDisabled`     | `swipe-disabled`      | Disable swipe                                                                                      | `boolean`       | `false`     |


## Events

| Event                        | Description                                               | Type                                            |
| ---------------------------- | --------------------------------------------------------- | ----------------------------------------------- |
| `kup-box-autoselect`         | Triggered when a box is auto selected via selectBox prop  | `CustomEvent<KupBoxAutoSelectEventPayload>`     |
| `kup-box-click`              | Triggered when a box is clicked                           | `CustomEvent<KupBoxClickEventPayload>`          |
| `kup-box-contextmenu`        | Generic right click event on box.                         | `CustomEvent<KupBoxContextMenuEventPayload>`    |
| `kup-box-didload`            |                                                           | `CustomEvent<KupEventPayload>`                  |
| `kup-box-didunload`          | Triggered when stop propagation event                     | `CustomEvent<KupEventPayload>`                  |
| `kup-box-rowactionclick`     | When the row menu action icon is click                    | `CustomEvent<KupBoxRowActionClickEventPayload>` |
| `kup-box-rowactionmenuclick` | When the row menu action icon is click                    | `CustomEvent<KupBoxAutoSelectEventPayload>`     |
| `kup-box-selected`           | Triggered when the multi selection checkbox changes value | `CustomEvent<KupBoxSelectedEventPayload>`       |


## Methods

### `getProps(descriptions?: boolean) => Promise<GenericObject>`

Used to retrieve component's props values.

#### Returns

Type: `Promise<GenericObject>`

List of props as object, each key will be a prop.

### `loadRowActions(row: KupBoxRow, actions: KupDataRowAction[]) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `refresh() => Promise<void>`

This method is used to trigger a new render of the component.

#### Returns

Type: `Promise<void>`



### `setProps(props: GenericObject) => Promise<void>`

Sets the props to the component.

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                          | Description                                                   |
| ----------------------------- | ------------------------------------------------------------- |
| `--kup-box-background-color`  | Sets background of the component.                             |
| `--kup-box-color`             | Sets text color of the component.                             |
| `--kup-box-font-family`       | Sets font family of the component.                            |
| `--kup-box-font-size`         | Sets font size of the component.                              |
| `--kup-box-grid-gap`          | Sets gap between each box.                                    |
| `--kup-box-hover-box-shadow`  | Sets box shadow for the hover effect.                         |
| `--kup-box-primary-color-rgb` | Sets RGB values of primary color (used for box selection) .   |
| `--kup-box-transition`        | Sets transition duration for box-shadow and background-color. |


## Dependencies

### Used by

 - [kup-family-tree](../kup-family-tree)
 - [kup-magic-box](../kup-magic-box)

### Depends on

- [kup-card](../kup-card)
- [kup-checkbox](../kup-checkbox)
- [kup-badge](../kup-badge)
- [kup-combobox](../kup-combobox)
- [kup-text-field](../kup-text-field)
- [kup-autocomplete](../kup-autocomplete)
- [kup-color-picker](../kup-color-picker)
- [kup-date-picker](../kup-date-picker)
- [kup-rating](../kup-rating)
- [kup-time-picker](../kup-time-picker)
- [kup-image](../kup-image)
- [kup-button](../kup-button)
- [kup-button-list](../kup-button-list)
- [kup-chart](../kup-chart)
- [kup-gauge](../kup-gauge)
- [kup-progress-bar](../kup-progress-bar)
- [kup-radio](../kup-radio)

### Graph
```mermaid
graph TD;
  kup-box --> kup-card
  kup-box --> kup-checkbox
  kup-box --> kup-badge
  kup-box --> kup-combobox
  kup-box --> kup-text-field
  kup-box --> kup-autocomplete
  kup-box --> kup-color-picker
  kup-box --> kup-date-picker
  kup-box --> kup-rating
  kup-box --> kup-time-picker
  kup-box --> kup-image
  kup-box --> kup-button
  kup-box --> kup-button-list
  kup-box --> kup-chart
  kup-box --> kup-gauge
  kup-box --> kup-progress-bar
  kup-box --> kup-radio
  kup-card --> kup-autocomplete
  kup-card --> kup-color-picker
  kup-card --> kup-combobox
  kup-card --> kup-date-picker
  kup-card --> kup-rating
  kup-card --> kup-time-picker
  kup-card --> kup-image
  kup-card --> kup-button
  kup-card --> kup-button-list
  kup-card --> kup-chart
  kup-card --> kup-gauge
  kup-card --> kup-progress-bar
  kup-card --> kup-radio
  kup-card --> kup-badge
  kup-card --> kup-chip
  kup-card --> kup-list
  kup-card --> kup-form
  kup-card --> kup-checkbox
  kup-card --> kup-text-field
  kup-card --> kup-data-table
  kup-card --> kup-spinner
  kup-card --> kup-tab-bar
  kup-card --> kup-tree
  kup-card --> kup-switch
  kup-card --> kup-dropdown-button
  kup-card --> kup-card
  kup-autocomplete --> kup-list
  kup-autocomplete --> kup-card
  kup-list --> kup-list
  kup-list --> kup-radio
  kup-list --> kup-card
  kup-list --> kup-badge
  kup-radio --> kup-card
  kup-badge --> kup-badge
  kup-badge --> kup-card
  kup-color-picker --> kup-card
  kup-combobox --> kup-list
  kup-combobox --> kup-card
  kup-date-picker --> kup-card
  kup-rating --> kup-card
  kup-time-picker --> kup-card
  kup-time-picker --> kup-list
  kup-image --> kup-spinner
  kup-image --> kup-card
  kup-image --> kup-badge
  kup-spinner --> kup-card
  kup-button --> kup-card
  kup-button --> kup-badge
  kup-button-list --> kup-dropdown-button
  kup-button-list --> kup-card
  kup-button-list --> kup-badge
  kup-dropdown-button --> kup-list
  kup-dropdown-button --> kup-card
  kup-dropdown-button --> kup-badge
  kup-chart --> kup-card
  kup-gauge --> kup-card
  kup-progress-bar --> kup-card
  kup-chip --> kup-card
  kup-chip --> kup-badge
  kup-form --> kup-card
  kup-form --> kup-autocomplete
  kup-form --> kup-color-picker
  kup-form --> kup-combobox
  kup-form --> kup-date-picker
  kup-form --> kup-rating
  kup-form --> kup-time-picker
  kup-form --> kup-image
  kup-form --> kup-button
  kup-form --> kup-button-list
  kup-form --> kup-chart
  kup-form --> kup-gauge
  kup-form --> kup-progress-bar
  kup-form --> kup-radio
  kup-form --> kup-badge
  kup-checkbox --> kup-card
  kup-text-field --> kup-card
  kup-data-table --> kup-card
  kup-data-table --> kup-list
  kup-data-table --> kup-switch
  kup-data-table --> kup-button
  kup-data-table --> kup-spinner
  kup-data-table --> kup-form
  kup-data-table --> kup-image
  kup-data-table --> kup-checkbox
  kup-data-table --> kup-combobox
  kup-data-table --> kup-badge
  kup-data-table --> kup-autocomplete
  kup-data-table --> kup-color-picker
  kup-data-table --> kup-date-picker
  kup-data-table --> kup-rating
  kup-data-table --> kup-time-picker
  kup-data-table --> kup-button-list
  kup-data-table --> kup-chart
  kup-data-table --> kup-gauge
  kup-data-table --> kup-progress-bar
  kup-data-table --> kup-radio
  kup-switch --> kup-card
  kup-tab-bar --> kup-card
  kup-tab-bar --> kup-badge
  kup-tree --> kup-card
  kup-tree --> kup-list
  kup-tree --> kup-text-field
  kup-tree --> kup-autocomplete
  kup-tree --> kup-color-picker
  kup-tree --> kup-combobox
  kup-tree --> kup-date-picker
  kup-tree --> kup-rating
  kup-tree --> kup-time-picker
  kup-tree --> kup-image
  kup-tree --> kup-button
  kup-tree --> kup-button-list
  kup-tree --> kup-chart
  kup-tree --> kup-gauge
  kup-tree --> kup-progress-bar
  kup-tree --> kup-radio
  kup-tree --> kup-badge
  kup-family-tree --> kup-box
  kup-magic-box --> kup-box
  style kup-box fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
