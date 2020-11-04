# kup-rating



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                                                     | Type      | Default     |
| ------------- | -------------- | --------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `customStyle` | `custom-style` | Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization | `string`  | `undefined` |
| `disabled`    | `disabled`     | Defaults at false. When set to true, the component is disabled.                                                 | `boolean` | `false`     |
| `maxValue`    | `max-value`    | Max number of stars (default 5)                                                                                 | `number`  | `5`         |
| `value`       | `value`        | Rated stars                                                                                                     | `number`  | `0`         |


## Events

| Event              | Description | Type               |
| ------------------ | ----------- | ------------------ |
| `kupRatingClicked` |             | `CustomEvent<any>` |


## Methods

### `refreshCustomStyle(customStyleTheme: string) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [kup-data-table](../kup-data-table)

### Graph
```mermaid
graph TD;
  kup-data-table --> kup-rating
  style kup-rating fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
