# wup-template

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                                                            | Type     | Default                   |
| ------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------- |
| `color`       | `color`        | The color of the icon, defaults to the main color of the app.                                                          | `string` | `'var(--kup-icon-color)'` |
| `customStyle` | `custom-style` | Custom style to be passed to the component.                                                                            | `string` | `undefined`               |
| `dimensions`  | `dimensions`   | The width and height of the icon, defaults to 100%. They are bound together because icons should generally be squared. | `string` | `'100%'`                  |
| `name`        | `name`         | The name of the icon.                                                                                                  | `string` | `undefined`               |
| `type`        | `type`         | The type of the icon, defaults to "svg".                                                                               | `string` | `'svg'`                   |


## Dependencies

### Used by

 - [kup-box](../kup-box)
 - [kup-button](../kup-button)
 - [kup-checkbox-menu](../kup-checkbox-menu)
 - [kup-chip](../kup-chip)
 - [kup-data-table](../kup-data-table)
 - [kup-tab-bar](../kup-tab-bar)
 - [kup-text-field](../kup-text-field)
 - [kup-tree](../kup-tree)

### Graph
```mermaid
graph TD;
  kup-box --> kup-icon
  kup-button --> kup-icon
  kup-checkbox-menu --> kup-icon
  kup-chip --> kup-icon
  kup-data-table --> kup-icon
  kup-tab-bar --> kup-icon
  kup-text-field --> kup-icon
  kup-tree --> kup-icon
  style kup-icon fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
