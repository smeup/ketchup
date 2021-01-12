# kup-search



<!-- Auto Generated Below -->


## Properties

| Property                          | Attribute               | Description                                                                                                                                                              | Type                                                               | Default     |
| --------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ | ----------- |
| `data`                            | --                      |                                                                                                                                                                          | `TableData`                                                        | `undefined` |
| `disabled`                        | `disabled`              |                                                                                                                                                                          | `boolean`                                                          | `false`     |
| `extra`                           | `extra`                 |                                                                                                                                                                          | `any`                                                              | `undefined` |
| `initialValue`                    | `initial-value`         |                                                                                                                                                                          | `string`                                                           | `''`        |
| `searchCallBackOnFilterSubmitted` | --                      | /** Function that can be invoked when the filter is submitted, but only if in serverHandledFilter mode. It returns the items filtered.                                   | `(detail: SearchFilterSubmittedEventDetail) => Promise<TableData>` | `undefined` |
| `serverHandledFilter`             | `server-handled-filter` | When true it emits events or makes available callbacks useful to obtain and filter data. When false the data inside data prop will be used and filtered in a static way. | `boolean`                                                          | `false`     |
| `valueField`                      | `value-field`           | The field used to obtain value                                                                                                                                           | `string`                                                           | `undefined` |


## Events

| Event                       | Description                                                                 | Type                                             |
| --------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------ |
| `kupSearchFilterSubmitted`  | Fired when the filter is submitted but only if in serverHandledFilter mode. | `CustomEvent<SearchFilterSubmittedEventDetail>`  |
| `kupSearchSelectionUpdated` |                                                                             | `CustomEvent<SearchSelectionUpdatedEventDetail>` |


## Dependencies

### Used by

 - [kup-form](../kup-form)

### Depends on

- [kup-text-field](../kup-text-field)
- [kup-button](../kup-button)
- [kup-modal](../kup-modal)
- [kup-data-table](../kup-data-table)

### Graph
```mermaid
graph TD;
  kup-search --> kup-text-field
  kup-search --> kup-button
  kup-search --> kup-modal
  kup-search --> kup-data-table
  kup-data-table --> kup-checkbox
  kup-data-table --> kup-button
  kup-data-table --> kup-text-field
  kup-data-table --> kup-tooltip
  kup-data-table --> kup-image
  kup-data-table --> kup-chart
  kup-data-table --> kup-chip
  kup-data-table --> kup-color-picker
  kup-data-table --> kup-gauge
  kup-data-table --> kup-progress-bar
  kup-data-table --> kup-rating
  kup-data-table --> kup-radio
  kup-data-table --> kup-paginator
  kup-data-table --> kup-combobox
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
  kup-image --> kup-spinner
  kup-image --> kup-badge
  kup-badge --> kup-image
  kup-color-picker --> kup-text-field
  kup-paginator --> kup-button
  kup-paginator --> kup-combobox
  kup-combobox --> kup-text-field
  kup-combobox --> kup-list
  kup-list --> kup-radio
  kup-list --> kup-checkbox
  kup-form --> kup-search
  style kup-search fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
