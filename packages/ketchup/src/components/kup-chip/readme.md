# kup-chip

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                    | Type                                                                            | Default              |
| ------------- | -------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- | -------------------- |
| `customStyle` | `custom-style` | Custom style of the component.                                                 | `string`                                                                        | `''`                 |
| `data`        | --             | List of elements.                                                              | `FChipData[]`                                                                   | `[]`                 |
| `dataNew`     | --             | List of elements.                                                              | `TreeNode[]`                                                                    | `[]`                 |
| `type`        | `type`         | The type of chip. Available types: input, filter, choice or empty for default. | `FChipType.CHOICE \| FChipType.FILTER \| FChipType.INPUT \| FChipType.STANDARD` | `FChipType.STANDARD` |


## Events

| Event                | Description                                                | Type                               |
| -------------------- | ---------------------------------------------------------- | ---------------------------------- |
| `kup-chip-blur`      | Triggered when a chip loses focus.                         | `CustomEvent<KupChipEventPayload>` |
| `kup-chip-click`     | Triggered when a chip is clicked.                          | `CustomEvent<KupChipEventPayload>` |
| `kup-chip-focus`     | Triggered when a chip gets focused.                        | `CustomEvent<KupChipEventPayload>` |
| `kup-chip-iconclick` | Triggered when the removal icon on input chips is clicked. | `CustomEvent<KupChipEventPayload>` |


## Methods

### `getProps(descriptions?: boolean) => Promise<GenericObject>`

Used to retrieve component's props values.

#### Returns

Type: `Promise<GenericObject>`

List of props as object, each key will be a prop.

### `refresh() => Promise<void>`

This method is used to trigger a new render of the component.

#### Returns

Type: `Promise<void>`



### `setProps(props: GenericObject) => Promise<void>`

Sets the props to the component.

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                           | Description                                                        |
| ------------------------------ | ------------------------------------------------------------------ |
| `--kup-chip-background-color`  | Sets background color of the component.                            |
| `--kup-chip-border-radius`     | Sets border radius of the chips.                                   |
| `--kup-chip-font-family`       | Sets font family of the chips.                                     |
| `--kup-chip-font-size`         | Sets font size of the chips.                                       |
| `--kup-chip-font-weight`       | Sets font weight of the chips.                                     |
| `--kup-chip-height`            | Sets height of the chips.                                          |
| `--kup-chip-margin`            | Sets margin of the chips.                                          |
| `--kup-chip-padding`           | Sets padding of the chips.                                         |
| `--kup-chip-primary-color`     | Sets primary color of the component.                               |
| `--kup-chip-primary-color-rgb` | Sets primary color RGB values of the component (used for shaders). |
| `--kup-chip-text-color`        | Sets text color of the component.                                  |
| `--kup-chip-text-color-rgb`    | Sets text color RGB values of the component (used for shaders).    |


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
