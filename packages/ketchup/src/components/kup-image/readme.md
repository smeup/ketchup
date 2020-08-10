# wup-template

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                                                                                                         | Type        | Default                   |
| ------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------- |
| `badgeData`   | --             | Sets the data of badges.                                                                                                                                            | `Badge[]`   | `undefined`               |
| `color`       | `color`        | The color of the icon, defaults to the main color of the app.                                                                                                       | `string`    | `'var(--kup-icon-color)'` |
| `customStyle` | `custom-style` | Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization                                                     | `string`    | `undefined`               |
| `data`        | --             | When present, the component will be drawn using CSS. Check the 'Drawing with CSS' section of the image showcase for more information.                               | `CssDraw[]` | `undefined`               |
| `feedback`    | `feedback`     | When set to true, a spinner will be displayed until the image finished loading. Not compatible with SVGs.                                                           | `boolean`   | `false`                   |
| `isCanvas`    | `is-canvas`    | The image component will create a canvas element on which it's possible to draw. It's a temporary feature that will be fully replaced by CSS drawing in the future. | `boolean`   | `false`                   |
| `resource`    | `resource`     | The resource used to fetch the image.                                                                                                                               | `string`    | `undefined`               |
| `sizeX`       | `size-x`       | The width of the icon, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).                                                                            | `string`    | `'100%'`                  |
| `sizeY`       | `size-y`       | The height of the icon, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).                                                                           | `string`    | `'100%'`                  |


## Events

| Event           | Description | Type                                |
| --------------- | ----------- | ----------------------------------- |
| `kupImageClick` |             | `CustomEvent<{ el: EventTarget; }>` |
| `kupImageLoad`  |             | `CustomEvent<{ el: EventTarget; }>` |


## Methods

### `refreshCustomStyle(customStyleTheme: string) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [kup-badge](../kup-badge)
 - [kup-box](../kup-box)
 - [kup-button](../kup-button)
 - [kup-card](../kup-card)
 - [kup-checkbox-menu](../kup-checkbox-menu)
 - [kup-chip](../kup-chip)
 - [kup-data-table](../kup-data-table)
 - [kup-form](../kup-form)
 - [kup-lazy](../kup-lazy)
 - [kup-list](../kup-list)
 - [kup-progress-bar](../kup-progress-bar)
 - [kup-tab-bar](../kup-tab-bar)
 - [kup-text-field](../kup-text-field)
 - [kup-tooltip](../kup-tooltip)
 - [kup-tree](../kup-tree)

### Depends on

- [kup-spinner](../kup-spinner)
- [kup-badge](../kup-badge)

### Graph
```mermaid
graph TD;
  kup-image --> kup-spinner
  kup-image --> kup-badge
  kup-badge --> kup-image
  kup-box --> kup-image
  kup-button --> kup-image
  kup-card --> kup-image
  kup-checkbox-menu --> kup-image
  kup-chip --> kup-image
  kup-data-table --> kup-image
  kup-form --> kup-image
  kup-lazy --> kup-image
  kup-list --> kup-image
  kup-progress-bar --> kup-image
  kup-tab-bar --> kup-image
  kup-text-field --> kup-image
  kup-tooltip --> kup-image
  kup-tree --> kup-image
  style kup-image fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
