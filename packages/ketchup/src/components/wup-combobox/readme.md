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

- [wup-text-field](../wup-text-field)
- [wup-list](../wup-list)

### Graph
```mermaid
graph TD;
  wup-combobox --> wup-text-field
  wup-combobox --> wup-list
  wup-text-field --> wup-icon
  wup-list --> wup-radio
  wup-list --> wup-checkbox
  style wup-combobox fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
