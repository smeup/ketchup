# kup-date-picker

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute         | Description                                                                                                     | Type      | Default     |
| --------------- | ----------------- | --------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `customStyle`   | `custom-style`    | Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization | `string`  | `undefined` |
| `data`          | --                | Props of the sub-components.                                                                                    | `Object`  | `undefined` |
| `disabled`      | `disabled`        | Defaults at false. When set to true, the component is disabled.                                                 | `boolean` | `false`     |
| `firstDayIndex` | `first-day-index` | First day number (0 - sunday, 1 - monday, ...)                                                                  | `number`  | `1`         |
| `initialValue`  | `initial-value`   | Sets the initial value of the component                                                                         | `string`  | `''`        |


## Events

| Event                          | Description | Type                           |
| ------------------------------ | ----------- | ------------------------------ |
| `kupDatePickerBlur`            |             | `CustomEvent<{ value: any; }>` |
| `kupDatePickerChange`          |             | `CustomEvent<{ value: any; }>` |
| `kupDatePickerClearIconClick`  |             | `CustomEvent<{ id: any; }>`    |
| `kupDatePickerClick`           |             | `CustomEvent<{ value: any; }>` |
| `kupDatePickerFocus`           |             | `CustomEvent<{ value: any; }>` |
| `kupDatePickerIconClick`       |             | `CustomEvent<{ value: any; }>` |
| `kupDatePickerInput`           |             | `CustomEvent<{ value: any; }>` |
| `kupDatePickerItemClick`       |             | `CustomEvent<{ value: any; }>` |
| `kupDatePickerTextFieldSubmit` |             | `CustomEvent<{ value: any; }>` |


## Methods

### `getValue() => Promise<string>`



#### Returns

Type: `Promise<string>`



### `refreshCustomStyle(customStyleTheme: string) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `setFocus() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `setValue(value: string) => Promise<void>`



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
