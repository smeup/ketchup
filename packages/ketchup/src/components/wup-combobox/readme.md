# wup-select

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute      | Description                                 | Type               | Default     |
| --------------- | -------------- | ------------------------------------------- | ------------------ | ----------- |
| `customStyle`   | `custom-style` | Custom style to be passed to the component. | `string`           | `undefined` |
| `listData`      | --             | Props of the list.                          | `ComponentProps[]` | `[]`        |
| `textfieldData` | --             | Props of the text field.                    | `ComponentProps[]` | `[]`        |


## Events

| Event                  | Description    | Type                           |
| ---------------------- | -------------- | ------------------------------ |
| `kupComboboxBlur`      | Event example. | `CustomEvent<{ value: any; }>` |
| `kupComboboxChange`    |                | `CustomEvent<{ value: any; }>` |
| `kupComboboxClick`     |                | `CustomEvent<{ value: any; }>` |
| `kupComboboxFocus`     |                | `CustomEvent<{ value: any; }>` |
| `kupComboboxIconClick` |                | `CustomEvent<{ value: any; }>` |
| `kupComboboxInput`     |                | `CustomEvent<{ value: any; }>` |
| `kupComboboxItemClick` |                | `CustomEvent<{ value: any; }>` |


## Dependencies

### Depends on

- [kup-text-field](../kup-text-field)
- [kup-list](../kup-list)

### Graph
```mermaid
graph TD;
  wup-combobox --> kup-text-field
  wup-combobox --> kup-list
  kup-text-field --> wup-icon
  kup-list --> wup-radio
  kup-list --> wup-checkbox
  style wup-combobox fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
