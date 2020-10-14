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


## CSS Custom Properties

| Name                                                     | Description                       |
| -------------------------------------------------------- | --------------------------------- |
| `--int_box-shadow, --kup-paginator_box-shadow`           | Set box shadow of groups          |
| `--int_font-size, --kup-paginator_font-size`             | Set size of the font              |
| `--int_icon-background, --kup-paginator_icon-background` | Set the background color of icons |
| `--int_icon-color, --kup-paginator_icon-color`           | Set the color of icons            |
| `--int_text-color, --kup-paginator_text-color`           | Set color of text                 |


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
  kup-combobox --> kup-text-field
  kup-combobox --> kup-list
  kup-text-field --> kup-image
  kup-image --> kup-spinner
  kup-image --> kup-badge
  kup-badge --> kup-image
  kup-list --> kup-radio
  kup-list --> kup-checkbox
  kup-box --> kup-paginator
  kup-data-table --> kup-paginator
  style kup-paginator fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
