# wup-select

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                                     | Type                                                                                             | Default                        |
| -------------- | --------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------ |
| `customStyle`  | `custom-style`  | Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization | `string`                                                                                         | `''`                           |
| `data`         | --              | Props of the sub-components (date input text field).                                                            | `Object`                                                                                         | `undefined`                    |
| `disabled`     | `disabled`      | Defaults at false. When set to true, the component is disabled.                                                 | `boolean`                                                                                        | `false`                        |
| `displayMode`  | `display-mode`  | Sets how the show the selected item value. Suported values: "code", "description", "both".                      | `ItemsDisplayMode.CODE \| ItemsDisplayMode.DESCRIPTION \| ItemsDisplayMode.DESCRIPTION_AND_CODE` | `ItemsDisplayMode.DESCRIPTION` |
| `initialValue` | `initial-value` | Sets the initial value of the component                                                                         | `string`                                                                                         | `''`                           |
| `isSelect`     | `is-select`     | Lets the combobox behave as a select element.                                                                   | `boolean`                                                                                        | `false`                        |
| `selectMode`   | `select-mode`   | Sets how the return the selected item value. Suported values: "code", "description", "both".                    | `ItemsDisplayMode.CODE \| ItemsDisplayMode.DESCRIPTION \| ItemsDisplayMode.DESCRIPTION_AND_CODE` | `ItemsDisplayMode.CODE`        |


## Events

| Event                        | Description    | Type                                       |
| ---------------------------- | -------------- | ------------------------------------------ |
| `kupComboboxBlur`            | Event example. | `CustomEvent<{ value: any; }>`             |
| `kupComboboxChange`          |                | `CustomEvent<{ value: any; }>`             |
| `kupComboboxClick`           |                | `CustomEvent<{ id: string; value: any; }>` |
| `kupComboboxFocus`           |                | `CustomEvent<{ value: any; }>`             |
| `kupComboboxIconClick`       |                | `CustomEvent<{ value: any; }>`             |
| `kupComboboxInput`           |                | `CustomEvent<{ value: any; }>`             |
| `kupComboboxItemClick`       |                | `CustomEvent<{ id: string; value: any; }>` |
| `kupComboboxTextFieldSubmit` |                | `CustomEvent<{ value: any; }>`             |


## Methods

### `getProps(descriptions?: boolean) => Promise<GenericObject>`

Used to retrieve component's props values.

#### Returns

Type: `Promise<GenericObject>`



### `getValue() => Promise<string>`



#### Returns

Type: `Promise<string>`



### `setFocus() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `setValue(value: string) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `themeChangeCallback(customStyleTheme: string) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [kup-box](../kup-box)
 - [kup-card](../kup-card)
 - [kup-data-table](../kup-data-table)
 - [kup-form](../kup-form)
 - [kup-magic-box](../kup-magic-box)
 - [kup-paginator](../kup-paginator)

### Depends on

- [kup-list](../kup-list)

### Graph
```mermaid
graph TD;
  kup-combobox --> kup-list
  kup-list --> kup-radio
  kup-list --> kup-checkbox
  kup-box --> kup-combobox
  kup-card --> kup-combobox
  kup-data-table --> kup-combobox
  kup-form --> kup-combobox
  kup-magic-box --> kup-combobox
  kup-paginator --> kup-combobox
  style kup-combobox fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
