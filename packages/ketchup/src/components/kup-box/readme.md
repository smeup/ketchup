# kup-box



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                                                     | Type                                    | Default     |
| ---------------- | ----------------- | ------------------------------------------------------------------------------- | --------------------------------------- | ----------- |
| `columns`        | `columns`         | Number of columns                                                               | `number`                                | `1`         |
| `data`           | --                | Data                                                                            | `{ columns?: Column[]; rows?: Row[]; }` | `undefined` |
| `filterEnabled`  | `filter-enabled`  | Enable filtering                                                                | `boolean`                               | `false`     |
| `layout`         | --                | How the field will be displayed. If not present, a default one will be created. | `Layout`                                | `undefined` |
| `multiSelection` | `multi-selection` | Enable multi selection                                                          | `boolean`                               | `false`     |
| `sortBy`         | `sort-by`         | If sorting is enabled, specifies which column to sort                           | `string`                                | `undefined` |
| `sortEnabled`    | `sort-enabled`    | Enable sorting                                                                  | `boolean`                               | `false`     |


## Events

| Event            | Description                                             | Type                                                              |
| ---------------- | ------------------------------------------------------- | ----------------------------------------------------------------- |
| `kupBoxClicked`  | Lauched when a box is clicked                           | `CustomEvent<{         row: Row;         column?: string;     }>` |
| `kupBoxSelected` | Lauched when the multi selection checkbox changes value | `CustomEvent<{         rows: Row[];     }>`                       |


## CSS Custom Properties

| Name                                                     | Description                          |
| -------------------------------------------------------- | ------------------------------------ |
| `--int_border-color, --kup-box_border-color`             | single box border color              |
| `--int_border-radius, --kup-box_border-radius`           | single box border radius             |
| `--int_color, --kup-box_color`                           | text color                           |
| `--int_expand-panel-color, --kup-box_expand-panel-color` | text color for collapse header panel |
| `--int_img-border-radius, --kup-box_img-border-radius`   | box image border radius              |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
