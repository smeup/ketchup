# kup-date-picker

<!-- Auto Generated Below -->


## Properties

| Property            | Attribute            | Description                                                                                                     | Type     | Default     |
| ------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `customStyle`       | `custom-style`       | Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization | `string` | `undefined` |
| `dateInitialValue`  | `date-initial-value` | The initial value of the date picker.                                                                           | `string` | `''`        |
| `dateTextfieldData` | --                   | Props of the date text field.                                                                                   | `Object` | `{}`        |


## Events

| Event                    | Description | Type                                                        |
| ------------------------ | ----------- | ----------------------------------------------------------- |
| `kupDatePickerBlur`      |             | `CustomEvent<{ value: any; source: PICKER_SOURCE_EVENT; }>` |
| `kupDatePickerChange`    |             | `CustomEvent<{ value: any; source: PICKER_SOURCE_EVENT; }>` |
| `kupDatePickerClick`     |             | `CustomEvent<{ value: any; source: PICKER_SOURCE_EVENT; }>` |
| `kupDatePickerFocus`     |             | `CustomEvent<{ value: any; source: PICKER_SOURCE_EVENT; }>` |
| `kupDatePickerIconClick` |             | `CustomEvent<{ value: any; source: PICKER_SOURCE_EVENT; }>` |
| `kupDatePickerInput`     |             | `CustomEvent<{ value: any; source: PICKER_SOURCE_EVENT; }>` |
| `kupDatePickerItemClick` |             | `CustomEvent<{ value: any; source: PICKER_SOURCE_EVENT; }>` |


## Methods

### `refreshCustomStyle(customStyleTheme: string) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [kup-text-field](../kup-text-field)
- [kup-button](../kup-button)

### Graph
```mermaid
graph TD;
  kup-date-picker --> kup-text-field
  kup-date-picker --> kup-button
  style kup-date-picker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
