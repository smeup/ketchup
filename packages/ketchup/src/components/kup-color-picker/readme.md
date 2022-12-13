# kup-color-picker



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                                                           | Type      | Default |
| -------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `customStyle`  | `custom-style`  | Custom style of the component.                                                                                                        | `string`  | `''`    |
| `data`         | --              | Props of the text field.                                                                                                              | `Object`  | `null`  |
| `disabled`     | `disabled`      | Defaults at false. When set to true, the component is disabled.                                                                       | `boolean` | `false` |
| `initialValue` | `initial-value` | Sets the initial value of the component. Can be css color name, hex code or rgb code (sample: "red" or rgb(255, 0, 0) or "#FF0000" ). | `string`  | `''`    |
| `swatchOnly`   | `swatch-only`   | When true, the component's text field will be replaced by a swatch.                                                                   | `boolean` | `false` |


## Events

| Event                    | Description | Type                                      |
| ------------------------ | ----------- | ----------------------------------------- |
| `kup-colorpicker-change` |             | `CustomEvent<KupColorPickerEventPayload>` |


## Methods

### `getProps(descriptions?: boolean) => Promise<GenericObject>`

Used to retrieve component's props values.

#### Returns

Type: `Promise<GenericObject>`

List of props as object, each key will be a prop.

### `getValue() => Promise<string>`

Retrieves the component's value.

#### Returns

Type: `Promise<string>`

Value of the component.

### `refresh() => Promise<void>`

This method is used to trigger a new render of the component.

#### Returns

Type: `Promise<void>`



### `setFocus() => Promise<void>`

Sets the focus to the component.

#### Returns

Type: `Promise<void>`



### `setProps(props: GenericObject) => Promise<void>`

Sets the props to the component.

#### Returns

Type: `Promise<void>`



### `setValue(value: string) => Promise<void>`

Sets the component's value.

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

- [kup-card](../kup-card)

### Graph
```mermaid
graph TD;
  kup-color-picker --> kup-card
  kup-card --> kup-color-picker
  kup-autocomplete --> kup-list
  kup-autocomplete --> kup-card
  kup-list --> kup-list
  kup-list --> kup-radio
  kup-list --> kup-card
  kup-list --> kup-badge
  kup-radio --> kup-card
  kup-badge --> kup-badge
  kup-badge --> kup-card
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
  kup-form --> kup-color-picker
  kup-checkbox --> kup-card
  kup-text-field --> kup-card
  kup-data-table --> kup-color-picker
  kup-switch --> kup-card
  kup-tab-bar --> kup-card
  kup-tab-bar --> kup-badge
  kup-tree --> kup-color-picker
  kup-box --> kup-color-picker
  kup-cell --> kup-color-picker
  kup-image-list --> kup-color-picker
  style kup-color-picker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
