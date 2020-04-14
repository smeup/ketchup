# kup-progress-bar



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                                                   | Type      | Default     |
| --------------- | ---------------- | --------------------------------------------------------------------------------------------- | --------- | ----------- |
| `centeredLabel` | `centered-label` | Displays the label in the middle of the progress bar.                                         | `boolean` | `true`      |
| `customStyle`   | `custom-style`   | Custom style to be passed to the component.                                                   | `string`  | `undefined` |
| `hasPadding`    | `has-padding`    | Sets a padding between the bar and its container. Not supported for the radial variant.       | `boolean` | `false`     |
| `hasStripes`    | `has-stripes`    | Sets a striped background. Not supported for the radial variant.                              | `boolean` | `false`     |
| `hideLabel`     | `hide-label`     | Flag to show or hide the progress bar's label.                                                | `boolean` | `false`     |
| `isAnimated`    | `is-animated`    | When striped background is active, it will be animated. Not supported for the radial variant. | `boolean` | `false`     |
| `isRadial`      | `is-radial`      | Radial version.                                                                               | `boolean` | `false`     |
| `isSlim`        | `is-slim`        | Slim version.                                                                                 | `boolean` | `false`     |
| `label`         | `label`          | Specifies a text for the bar's label. Not supported for the radial variant.                   | `string`  | `undefined` |
| `value`         | `value`          | The current value the progress bar must display.                                              | `number`  | `0`         |


## Dependencies

### Used by

 - [kup-box](../kup-box)
 - [kup-data-table](../kup-data-table)
 - [kup-form](../kup-form)

### Graph
```mermaid
graph TD;
  kup-box --> kup-progress-bar
  kup-data-table --> kup-progress-bar
  kup-form --> kup-progress-bar
  style kup-progress-bar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
