# wup-paginator



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

### Depends on

- [kup-combo](../kup-combo)

### Graph
```mermaid
graph TD;
  wup-paginator --> kup-combo
  kup-combo --> kup-text-input
  kup-combo --> kup-portal
  kup-portal --> kup-portal-instance
  style wup-paginator fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
