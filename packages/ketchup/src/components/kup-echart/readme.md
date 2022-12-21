# kup-echart



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description                                                                                                                                                                                            | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Default                          |
| ------------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| `axis`             | `axis`              | Sets the axis of the chart.                                                                                                                                                                            | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `''`                             |
| `chartTitle`       | --                  | Title of the graph.                                                                                                                                                                                    | `KupEchartTitle`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `null`                           |
| `colors`           | --                  | Overrides theme's colors.                                                                                                                                                                              | `string[]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `[]`                             |
| `consistencyCheck` | `consistency-check` | When true, performs checks in order to properly initialize props which could be missing (i.e.: axis). For performances purposes, this prop will run only once when the component is initially created. | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `false`                          |
| `customStyle`      | `custom-style`      | Custom style of the component.                                                                                                                                                                         | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `''`                             |
| `data`             | --                  | The actual data of the chart.                                                                                                                                                                          | `KupDataDataset`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `null`                           |
| `legend`           | `legend`            | Sets the position of the legend. Supported values: bottom, left, right, top, hidden. Keep in mind that legend types are tied to chart types, some combinations might not work.                         | `KupEchartLegendPlacement.BOTTOM \| KupEchartLegendPlacement.HIDDEN \| KupEchartLegendPlacement.LEFT \| KupEchartLegendPlacement.RIGHT \| KupEchartLegendPlacement.TOP`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `KupEchartLegendPlacement.RIGHT` |
| `map`              | `map`               | Choose which map you want to view, supported values: "europe", "africa", "asia", "oceania", "america", "italy" and "world". It's possible to supply a custom JSON too.                                 | `Feature<Geometry, { [name: string]: any; }> \| FeatureCollection<Geometry, { [name: string]: any; }> \| GeometryCollection \| LineString \| MultiLineString \| MultiPoint \| MultiPolygon \| Point \| Polygon \| string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `null`                           |
| `series`           | --                  | The data series to be displayed. They must be of the same type.                                                                                                                                        | `string[]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `[]`                             |
| `sizeX`            | `size-x`            | The width of the chart, defaults to 100%. Accepts any valid CSS format (px, %, vw, etc.).                                                                                                              | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `'100%'`                         |
| `sizeY`            | `size-y`            | The height of the chart, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).                                                                                                             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `'100%'`                         |
| `types`            | --                  | The type of the chart. Supported formats: Bar, Gaussian, Line, Pie, Map and Scatter.                                                                                                                   | `KupEchartTypes[]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `[KupEchartTypes.LINE]`          |
| `xAxis`            | --                  | Customization options for the x Axis.                                                                                                                                                                  | `AxisBaseOptionCommon & { gridIndex?: number; gridId?: string; position?: CartesianAxisPosition; offset?: number; categorySortInfo?: OrdinalSortInfo; } & { mainType?: "xAxis"; } \| CategoryAxisBaseOption & { gridIndex?: number; gridId?: string; position?: CartesianAxisPosition; offset?: number; categorySortInfo?: OrdinalSortInfo; } & { mainType?: "xAxis"; } \| LogAxisBaseOption & { gridIndex?: number; gridId?: string; position?: CartesianAxisPosition; offset?: number; categorySortInfo?: OrdinalSortInfo; } & { mainType?: "xAxis"; } \| TimeAxisBaseOption & { gridIndex?: number; gridId?: string; position?: CartesianAxisPosition; offset?: number; categorySortInfo?: OrdinalSortInfo; } & { mainType?: "xAxis"; } \| ValueAxisBaseOption & { gridIndex?: number; gridId?: string; position?: CartesianAxisPosition; offset?: number; categorySortInfo?: OrdinalSortInfo; } & { mainType?: "xAxis"; }` | `null`                           |
| `yAxis`            | --                  | Customization options for the y Axis.                                                                                                                                                                  | `AxisBaseOptionCommon & { gridIndex?: number; gridId?: string; position?: CartesianAxisPosition; offset?: number; categorySortInfo?: OrdinalSortInfo; } & { mainType?: "yAxis"; } \| CategoryAxisBaseOption & { gridIndex?: number; gridId?: string; position?: CartesianAxisPosition; offset?: number; categorySortInfo?: OrdinalSortInfo; } & { mainType?: "yAxis"; } \| LogAxisBaseOption & { gridIndex?: number; gridId?: string; position?: CartesianAxisPosition; offset?: number; categorySortInfo?: OrdinalSortInfo; } & { mainType?: "yAxis"; } \| TimeAxisBaseOption & { gridIndex?: number; gridId?: string; position?: CartesianAxisPosition; offset?: number; categorySortInfo?: OrdinalSortInfo; } & { mainType?: "yAxis"; } \| ValueAxisBaseOption & { gridIndex?: number; gridId?: string; position?: CartesianAxisPosition; offset?: number; categorySortInfo?: OrdinalSortInfo; } & { mainType?: "yAxis"; }` | `null`                           |


## Events

| Event              | Description | Type                                      |
| ------------------ | ----------- | ----------------------------------------- |
| `kup-echart-click` |             | `CustomEvent<KupEchartClickEventPayload>` |


## Methods

### `getProps(descriptions?: boolean) => Promise<GenericObject>`

Used to retrieve component's props values.

#### Returns

Type: `Promise<GenericObject>`

List of props as object, each key will be a prop.

### `refresh() => Promise<void>`

This method is used to trigger a new render of the component.

#### Returns

Type: `Promise<void>`



### `resizeCallback() => Promise<void>`

This method is invoked by KupManager whenever the component changes size.

#### Returns

Type: `Promise<void>`



### `setProps(props: GenericObject) => Promise<void>`

Sets the props to the component.

#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [kup-magic-box](../kup-magic-box)

### Depends on

- [kup-card](../kup-card)

### Graph
```mermaid
graph TD;
  kup-echart --> kup-card
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
  kup-magic-box --> kup-echart
  style kup-echart fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
