# kup-data-table



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                                                | Default     |
| -------- | --------- | ----------- | --------------------------------------------------- | ----------- |
| `config` | --        |             | `DataTableConfig`                                   | `{}`        |
| `data`   | --        |             | `{ data?: { columns?: Column[]; rows?: Row[]; }; }` | `undefined` |
| `totals` | --        |             | `{ [index: string]: TotalMode; }`                   | `undefined` |


## Events

| Event            | Description            | Type                        |
| ---------------- | ---------------------- | --------------------------- |
| `kupRowSelected` | When a row is selected | `CustomEvent<{ row: Row }>` |


## CSS Custom Properties

| Name                                                                    | Description                            |
| ----------------------------------------------------------------------- | -------------------------------------- |
| `--int_color, --kup-data-table_color`                                   | Set text color                         |
| `--int_hover-background-color, --kup-data-table_hover-background-color` | Set background color when hover on row |
| `--int_hover-color, --kup-data-table_hover-color`                       | Set text color when hover on row       |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
