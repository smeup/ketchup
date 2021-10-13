# kup-progress-bar

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                                                                         | Type      | Default |
| --------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `centeredLabel` | `centered-label` | Displays the label in the middle of the progress bar. It's the default for the radial variant and can't be changed. | `boolean` | `true`  |
| `customStyle`   | `custom-style`   | Custom style of the component.                                                                                      | `string`  | `''`    |
| `hideLabel`     | `hide-label`     | Flag to show or hide the progress bar's label.                                                                      | `boolean` | `false` |
| `icon`          | `icon`           | Specifies an icon to replace the label.                                                                             | `string`  | `null`  |
| `isRadial`      | `is-radial`      | Radial version.                                                                                                     | `boolean` | `false` |
| `label`         | `label`          | Specifies a text for the bar's label.                                                                               | `string`  | `null`  |
| `value`         | `value`          | The current value the progress bar must display.                                                                    | `number`  | `0`     |


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

| Name                                      | Description                                                     |
| ----------------------------------------- | --------------------------------------------------------------- |
| `--kup-progressbar-border-radius`         | Sets border radius of the component.                            |
| `--kup-progressbar-font-family`           | Sets font family of the component.                              |
| `--kup-progressbar-font-size`             | Sets font size of the component.                                |
| `--kup-progressbar-height`                | Sets height of the component.                                   |
| `--kup-progressbar-primary-color`         | Sets primary color of the component.                            |
| `--kup-progressbar-text-color`            | Sets text color of the component.                               |
| `--kup-progressbar-text-color-rgb`        | Sets text color RGB values of the component (used for shaders). |
| `--kup-progressbar-text-on-primary-color` | Sets text on primary color of the component.                    |
| `--kup-progressbar-track-color`           | Sets track color of the progress bar (empty section).           |
| `--kup-progressbar-width`                 | Sets width of the component.                                    |


## Dependencies

### Used by

 - [kup-box](../kup-box)
 - [kup-card](../kup-card)
 - [kup-data-table](../kup-data-table)
 - [kup-form](../kup-form)
 - [kup-tree](../kup-tree)

### Graph
```mermaid
graph TD;
  kup-box --> kup-progress-bar
  kup-card --> kup-progress-bar
  kup-data-table --> kup-progress-bar
  kup-form --> kup-progress-bar
  kup-tree --> kup-progress-bar
  style kup-progress-bar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
