# kup-echarts



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description                                                                                                                                                            | Type     | Default     |
| ----------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `graphTitle`      | `graph-title`       | Title of the graph.                                                                                                                                                    | `string` | `''`        |
| `graphTitleColor` | `graph-title-color` | Title of the graph's color.                                                                                                                                            | `string` | `undefined` |
| `graphTitleSize`  | `graph-title-size`  | Size of title of the graph (in pixels).                                                                                                                                | `number` | `undefined` |
| `legend`          | `legend`            | Sets the position of the legend. Supported values: bottom, left, right, top. Keep in mind that legend types are tied to chart types, some combinations might not work. | `string` | `undefined` |
| `mapType`         | `map-type`          | choose which map you want to view. europe, africa, asia, oceania, america, world. you can also switch to json data to form a custom map                                | `any`    | `undefined` |
| `objectData`      | --                  | The actual data of the chart.                                                                                                                                          | `object` | `{}`        |
| `types`           | `types`             | The type of the chart. Supported formats: Line, Pie, Map, Scatter                                                                                                      | `string` | `undefined` |


## Events

| Event               | Description | Type               |
| ------------------- | ----------- | ------------------ |
| `kupEchartsClicked` |             | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
