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

- [kup-text-input](../kup-text-input)
- [kup-button](../kup-button)
- [kup-modal](../kup-modal)
- [kup-data-table](../kup-data-table)

### Graph
```mermaid
graph TD;
  kup-search --> kup-text-input
  kup-search --> kup-button
  kup-search --> kup-modal
  kup-search --> kup-data-table
  kup-data-table --> kup-text-input
  kup-data-table --> kup-icon
  kup-data-table --> kup-image
  kup-data-table --> kup-checkbox
  kup-data-table --> kup-button
  kup-data-table --> kup-graphic-cell
  kup-data-table --> kup-chart-cell
  kup-data-table --> kup-progress-bar
  kup-data-table --> kup-radio-element
  kup-data-table --> kup-tooltip
  kup-data-table --> kup-paginator
  kup-data-table --> kup-chip
  kup-image --> kup-badge
  kup-tooltip --> kup-button
  kup-paginator --> kup-combo
  kup-combo --> kup-text-input
  kup-combo --> kup-portal
  kup-portal --> kup-portal-instance
  kup-form --> kup-search
  style kup-search fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
