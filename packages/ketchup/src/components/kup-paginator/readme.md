# kup-paginator



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description | Type                                         | Default              |
| ----------------- | ------------------- | ----------- | -------------------------------------------- | -------------------- |
| `currentPage`     | `current-page`      |             | `number`                                     | `1`                  |
| `max`             | `max`               |             | `number`                                     | `0`                  |
| `mode`            | `mode`              |             | `PaginatorMode.FULL \| PaginatorMode.SIMPLE` | `PaginatorMode.FULL` |
| `perPage`         | `per-page`          |             | `number`                                     | `10`                 |
| `selectedPerPage` | `selected-per-page` |             | `number`                                     | `10`                 |


## Events

| Event                   | Description                   | Type                                       |
| ----------------------- | ----------------------------- | ------------------------------------------ |
| `kupPageChanged`        | When the current page change  | `CustomEvent<{ newPage: number; }>`        |
| `kupRowsPerPageChanged` | When the rows per page change | `CustomEvent<{ newRowsPerPage: number; }>` |


## Dependencies

### Used by

 - [kup-box](../kup-box)
 - [kup-data-table](../kup-data-table)

### Depends on

- [kup-button](../kup-button)
- [kup-combobox](../kup-combobox)

### Graph
```mermaid
graph TD;
  kup-paginator --> kup-button
  kup-paginator --> kup-combobox
  kup-button --> kup-badge
  kup-badge --> kup-badge
  kup-combobox --> kup-list
  kup-list --> kup-radio
  kup-list --> kup-checkbox
  kup-box --> kup-paginator
  kup-data-table --> kup-paginator
  style kup-paginator fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
