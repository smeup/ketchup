# kup-chip

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                                                     | Type                     | Default     |
| ------------- | -------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------ | ----------- |
| `customStyle` | `custom-style` | Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization | `string`                 | `undefined` |
| `data`        | --             | List of elements.                                                                                               | `ComponentChipElement[]` | `[]`        |
| `type`        | `type`         | The type of chip. Available types: input, filter, choice or empty for default.                                  | `string`                 | `undefined` |


## Events

| Event              | Description                                                | Type                                                         |
| ------------------ | ---------------------------------------------------------- | ------------------------------------------------------------ |
| `kupChipBlur`      | Triggered when a chip loses focus.                         | `CustomEvent<{ id: string; index: number; value: string; }>` |
| `kupChipClick`     | Triggered when a chip is clicked.                          | `CustomEvent<{ id: string; index: number; value: string; }>` |
| `kupChipFocus`     | Triggered when a chip gets focused.                        | `CustomEvent<{ id: string; index: number; value: string; }>` |
| `kupChipIconClick` | Triggered when the removal icon on input chips is clicked. | `CustomEvent<{ id: string; index: number; value: string; }>` |


## Methods

### `refreshCustomStyle(customStyleTheme: string) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [kup-card](../kup-card)
 - [kup-tree](../kup-tree)

### Depends on

- [kup-badge](../kup-badge)

### Graph
```mermaid
graph TD;
  kup-chip --> kup-badge
  kup-badge --> kup-badge
  kup-card --> kup-chip
  kup-tree --> kup-chip
  style kup-chip fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
