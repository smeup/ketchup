# kup-dropdown-button



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                                     | Type                                                                                             | Default                        |
| -------------- | --------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------ |
| `customStyle`  | `custom-style`  | Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization | `string`                                                                                         | `''`                           |
| `data`         | --              | Props of the sub-components.                                                                                    | `Object`                                                                                         | `undefined`                    |
| `disabled`     | `disabled`      | Defaults at false. When set to true, the component is disabled.                                                 | `boolean`                                                                                        | `false`                        |
| `displayMode`  | `display-mode`  | Sets how to show the selected item value. Suported values: "code", "description", "both".                       | `ItemsDisplayMode.CODE \| ItemsDisplayMode.DESCRIPTION \| ItemsDisplayMode.DESCRIPTION_AND_CODE` | `ItemsDisplayMode.DESCRIPTION` |
| `icon`         | `icon`          | Defaults at null. When set, the button will show this icon.                                                     | `string`                                                                                         | `null`                         |
| `initialValue` | `initial-value` | Sets the initial value of the component.                                                                        | `string`                                                                                         | `''`                           |
| `label`        | `label`         | Defaults at null. When set, the button will show this text.                                                     | `string`                                                                                         | `null`                         |
| `selectMode`   | `select-mode`   | Sets how to return the selected item value. Suported values: "code", "description", "both".                     | `ItemsDisplayMode.CODE \| ItemsDisplayMode.DESCRIPTION \| ItemsDisplayMode.DESCRIPTION_AND_CODE` | `ItemsDisplayMode.CODE`        |
| `styling`      | `styling`       | Defines the style of the button. Styles available: "flat", "outlined" and "raised" which is also the default.   | `FButtonStyling.FLAT \| FButtonStyling.OUTLINED \| FButtonStyling.RAISED`                        | `FButtonStyling.RAISED`        |
| `trailingIcon` | `trailing-icon` | Defaults at null. When set, the icon will be shown after the text.                                              | `boolean`                                                                                        | `false`                        |


## Events

| Event                           | Description | Type                                          |
| ------------------------------- | ----------- | --------------------------------------------- |
| `kupDropdownButtonBlur`         |             | `CustomEvent<{ id: string; value: string; }>` |
| `kupDropdownButtonClick`        |             | `CustomEvent<{ id: string; value: string; }>` |
| `kupDropdownButtonFocus`        |             | `CustomEvent<{ id: string; value: string; }>` |
| `kupDropdownSelectionChange`    |             | `CustomEvent<{ value: any; }>`                |
| `kupDropdownSelectionItemClick` |             | `CustomEvent<{ value: any; }>`                |


## Methods

### `getProps(descriptions?: boolean) => Promise<GenericObject>`

Used to retrieve component's props values.

#### Returns

Type: `Promise<GenericObject>`



### `getValue() => Promise<string>`



#### Returns

Type: `Promise<string>`



### `refresh() => Promise<void>`

This method is used to trigger a new render of the component.

#### Returns

Type: `Promise<void>`



### `setValue(value: string) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [kup-btn](../kup-btn)

### Depends on

- [kup-list](../kup-list)

### Graph
```mermaid
graph TD;
  kup-dropdown-button --> kup-list
  kup-list --> kup-radio
  kup-list --> kup-checkbox
  kup-list --> kup-badge
  kup-badge --> kup-badge
  kup-btn --> kup-dropdown-button
  style kup-dropdown-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
