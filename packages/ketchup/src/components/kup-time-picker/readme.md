# kup-date-picker

<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description                                                                                                     | Type      | Default     |
| ----------------- | ------------------- | --------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `clockVariant`    | `clock-variant`     | When set to true, the drop down menu will display a clock.                                                      | `boolean` | `true`      |
| `customStyle`     | `custom-style`      | Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization | `string`  | `undefined` |
| `data`            | --                  | Props of the sub-components (time input text field)                                                             | `Object`  | `{}`        |
| `disabled`        | `disabled`          | Defaults at false. When set to true, the component is disabled.                                                 | `boolean` | `false`     |
| `initialValue`    | `initial-value`     | Sets the initial value of the component                                                                         | `string`  | `''`        |
| `manageSeconds`   | `manage-seconds`    | Manage seconds                                                                                                  | `boolean` | `false`     |
| `timeMinutesStep` | `time-minutes-step` | Minutes step                                                                                                    | `number`  | `10`        |


## Events

| Event                          | Description | Type                           |
| ------------------------------ | ----------- | ------------------------------ |
| `kupTimePickerBlur`            |             | `CustomEvent<{ value: any; }>` |
| `kupTimePickerChange`          |             | `CustomEvent<{ value: any; }>` |
| `kupTimePickerClick`           |             | `CustomEvent<{ value: any; }>` |
| `kupTimePickerFocus`           |             | `CustomEvent<{ value: any; }>` |
| `kupTimePickerIconClick`       |             | `CustomEvent<{ value: any; }>` |
| `kupTimePickerInput`           |             | `CustomEvent<{ value: any; }>` |
| `kupTimePickerItemClick`       |             | `CustomEvent<{ value: any; }>` |
| `kupTimePickerTextFieldSubmit` |             | `CustomEvent<{ value: any; }>` |


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

### Depends on

- [kup-text-field](../kup-text-field)
- [kup-button](../kup-button)
- [kup-list](../kup-list)

### Graph
```mermaid
graph TD;
  kup-time-picker --> kup-text-field
  kup-time-picker --> kup-button
  kup-time-picker --> kup-list
  kup-list --> kup-radio
  kup-list --> kup-checkbox
  style kup-time-picker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
