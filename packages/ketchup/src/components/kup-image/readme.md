# wup-template

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                                                                                                         | Type           | Default                              |
| ------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------ |
| `badgeData`   | --             | Sets the data of badges.                                                                                                                                            | `KupBadge[]`   | `null`                               |
| `color`       | `color`        | The color of the icon, defaults to the CSS variable KupThemeColorValues.ICON.                                                                                       | `string`       | ``var(${KupThemeColorValues.ICON})`` |
| `customStyle` | `custom-style` | Custom style of the component.                                                                                                                                      | `string`       | `''`                                 |
| `data`        | --             | When present, the component will be drawn using CSS. Check the 'Drawing with CSS' section of the image showcase for more information.                               | `FImageData[]` | `null`                               |
| `feedback`    | `feedback`     | When set to true, a spinner will be displayed until the image finished loading. Not compatible with SVGs.                                                           | `boolean`      | `false`                              |
| `isCanvas`    | `is-canvas`    | The image component will create a canvas element on which it's possible to draw. It's a temporary feature that will be fully replaced by CSS drawing in the future. | `boolean`      | `false`                              |
| `resource`    | `resource`     | The resource used to fetch the image.                                                                                                                               | `string`       | `null`                               |
| `sizeX`       | `size-x`       | The width of the icon, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).                                                                            | `string`       | `'100%'`                             |
| `sizeY`       | `size-y`       | The height of the icon, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).                                                                           | `string`       | `'100%'`                             |


## Events

| Event             | Description | Type                                     |
| ----------------- | ----------- | ---------------------------------------- |
| `kup-image-click` |             | `CustomEvent<KupImageClickEventPayload>` |


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



### `setProps(props: GenericObject) => Promise<void>`

Sets the props to the component.

#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [kup-box](../kup-box)
 - [kup-card](../kup-card)
 - [kup-cell](../kup-cell)
 - [kup-data-table](../kup-data-table)
 - [kup-form](../kup-form)
 - [kup-image-list](../kup-image-list)
 - [kup-tree](../kup-tree)

### Depends on

- [kup-spinner](../kup-spinner)
- [kup-card](../kup-card)
- [kup-badge](../kup-badge)

### Graph
```mermaid
graph TD;
  kup-image --> kup-spinner
  kup-image --> kup-card
  kup-image --> kup-badge
  kup-spinner --> kup-card
  kup-card --> kup-image
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
  kup-form --> kup-image
  kup-checkbox --> kup-card
  kup-text-field --> kup-card
  kup-data-table --> kup-image
  kup-switch --> kup-card
  kup-tab-bar --> kup-card
  kup-tab-bar --> kup-badge
  kup-tree --> kup-image
  kup-box --> kup-image
  kup-cell --> kup-image
  kup-image-list --> kup-image
  style kup-image fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
