# kup-lazy



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                                                                                     | Type      | Default     |
| ----------------- | ------------------ | --------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `componentName`   | `component-name`   | Sets the tag name of the component to be lazy loaded.                                                           | `string`  | `undefined` |
| `customStyle`     | `custom-style`     | Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization | `string`  | `undefined` |
| `data`            | --                 | Sets the data of the component to be lazy loaded.                                                               | `{}`      | `undefined` |
| `showPlaceholder` | `show-placeholder` | Displays an animated SVG placeholder until the component is loaded.                                             | `boolean` | `true`      |


## Methods

### `refreshCustomStyle(customStyleTheme: string) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [kup-data-table](../kup-data-table)

### Depends on

- [kup-image](../kup-image)

### Graph
```mermaid
graph TD;
  kup-lazy --> kup-image
  kup-image --> kup-spinner
  kup-image --> kup-badge
  kup-badge --> kup-image
  kup-data-table --> kup-lazy
  style kup-lazy fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
