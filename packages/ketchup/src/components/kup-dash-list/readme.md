# kup-dash-list



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type             | Default     |
| --------------- | ---------------- | ----------- | ---------------- | ----------- |
| `active`        | `active`         |             | `boolean`        | `false`     |
| `columnsNumber` | `columns-number` |             | `number`         | `1`         |
| `data`          | --               |             | `KupDataDataset` | `undefined` |
| `fontsize`      | `fontsize`       |             | `string`         | `''`        |
| `fullWidth`     | `full-width`     |             | `boolean`        | `true`      |
| `horizontal`    | `horizontal`     |             | `boolean`        | `false`     |
| `iconColor`     | --               |             | `any[]`          | `[]`        |
| `layout`        | `layout`         |             | `string`         | `'1'`       |
| `textColor`     | --               |             | `any[]`          | `[]`        |
| `valueColor`    | --               |             | `any[]`          | `[]`        |


## Events

| Event            | Description | Type                            |
| ---------------- | ----------- | ------------------------------- |
| `kup-dash-click` |             | `CustomEvent<{ idx: number; }>` |


## Dependencies

### Depends on

- [kup-dash](../kup-dash)
- [kup-grid](../kup-grid)
- [kup-card](../kup-card)

### Graph
```mermaid
graph TD;
  kup-dash-list --> kup-dash
  kup-dash-list --> kup-grid
  kup-dash-list --> kup-card
  kup-dash --> kup-card
  kup-card --> kup-badge
  kup-card --> kup-button
  kup-card --> kup-chip
  kup-card --> kup-list
  kup-card --> kup-combobox
  kup-card --> kup-autocomplete
  kup-card --> kup-checkbox
  kup-card --> kup-date-picker
  kup-card --> kup-text-field
  kup-card --> kup-time-picker
  kup-card --> kup-data-table
  kup-card --> kup-spinner
  kup-card --> kup-progress-bar
  kup-card --> kup-chart
  kup-card --> kup-tab-bar
  kup-card --> kup-tree
  kup-card --> kup-switch
  kup-card --> kup-card
  kup-badge --> kup-badge
  kup-badge --> kup-card
  kup-button --> kup-card
  kup-button --> kup-badge
  kup-chip --> kup-card
  kup-chip --> kup-badge
  kup-list --> kup-list
  kup-list --> kup-radio
  kup-list --> kup-card
  kup-list --> kup-badge
  kup-radio --> kup-card
  kup-combobox --> kup-list
  kup-combobox --> kup-card
  kup-autocomplete --> kup-list
  kup-autocomplete --> kup-card
  kup-checkbox --> kup-card
  kup-date-picker --> kup-card
  kup-text-field --> kup-card
  kup-time-picker --> kup-card
  kup-time-picker --> kup-list
  kup-data-table --> kup-card
  kup-data-table --> kup-checkbox
  kup-data-table --> kup-tooltip
  kup-data-table --> kup-list
  kup-data-table --> kup-switch
  kup-data-table --> kup-button
  kup-data-table --> kup-combobox
  kup-data-table --> kup-badge
  kup-data-table --> kup-autocomplete
  kup-data-table --> kup-color-picker
  kup-data-table --> kup-date-picker
  kup-data-table --> kup-rating
  kup-data-table --> kup-time-picker
  kup-data-table --> kup-image
  kup-data-table --> kup-button-list
  kup-data-table --> kup-chart
  kup-data-table --> kup-gauge
  kup-data-table --> kup-progress-bar
  kup-data-table --> kup-radio
  kup-tooltip --> kup-button
  kup-tooltip --> kup-card
  kup-tooltip --> kup-box
  kup-tooltip --> kup-list
  kup-tooltip --> kup-tree
  kup-box --> kup-card
  kup-box --> kup-checkbox
  kup-box --> kup-badge
  kup-box --> kup-tooltip
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
  kup-color-picker --> kup-card
  kup-rating --> kup-card
  kup-image --> kup-spinner
  kup-image --> kup-card
  kup-image --> kup-badge
  kup-spinner --> kup-card
  kup-button-list --> kup-dropdown-button
  kup-button-list --> kup-card
  kup-button-list --> kup-badge
  kup-dropdown-button --> kup-list
  kup-dropdown-button --> kup-card
  kup-dropdown-button --> kup-badge
  kup-chart --> kup-card
  kup-gauge --> kup-card
  kup-progress-bar --> kup-card
  kup-tree --> kup-card
  kup-tree --> kup-tooltip
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
  kup-switch --> kup-card
  kup-tab-bar --> kup-card
  kup-tab-bar --> kup-badge
  kup-grid --> kup-card
  style kup-dash-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
