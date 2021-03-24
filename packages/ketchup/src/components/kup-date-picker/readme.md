# kup-date-picker

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute         | Description                                                                                                     | Type      | Default     |
| --------------- | ----------------- | --------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `customStyle`   | `custom-style`    | Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization | `string`  | `''`        |
| `data`          | --                | Props of the sub-components.                                                                                    | `Object`  | `undefined` |
| `disabled`      | `disabled`        | Defaults at false. When set to true, the component is disabled.                                                 | `boolean` | `false`     |
| `firstDayIndex` | `first-day-index` | First day number (0 - sunday, 1 - monday, ...)                                                                  | `number`  | `1`         |
| `initialValue`  | `initial-value`   | Sets the initial value of the component                                                                         | `string`  | `''`        |


## Events

| Event                          | Description | Type                                    |
| ------------------------------ | ----------- | --------------------------------------- |
| `kupDatePickerBlur`            |             | `CustomEvent<{ id: any; value: any; }>` |
| `kupDatePickerChange`          |             | `CustomEvent<{ id: any; value: any; }>` |
| `kupDatePickerClearIconClick`  |             | `CustomEvent<{ id: any; }>`             |
| `kupDatePickerClick`           |             | `CustomEvent<{ id: any; value: any; }>` |
| `kupDatePickerFocus`           |             | `CustomEvent<{ id: any; value: any; }>` |
| `kupDatePickerIconClick`       |             | `CustomEvent<{ id: any; value: any; }>` |
| `kupDatePickerInput`           |             | `CustomEvent<{ id: any; value: any; }>` |
| `kupDatePickerItemClick`       |             | `CustomEvent<{ id: any; value: any; }>` |
| `kupDatePickerTextFieldSubmit` |             | `CustomEvent<{ id: any; value: any; }>` |


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

 - [kup-card](../kup-card)

### Depends on

- [kup-text-field](../kup-text-field)
- [kup-button](../kup-button)

### Graph
```mermaid
graph TD;
  kup-date-picker --> kup-text-field
  kup-date-picker --> kup-button
  kup-button --> kup-badge
  kup-badge --> kup-badge
  kup-card --> kup-date-picker
  style kup-date-picker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
