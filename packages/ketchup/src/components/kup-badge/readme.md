# kup-badge

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                                                     | Type     | Default     |
| ------------- | -------------- | --------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `customStyle` | `custom-style` | Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization | `string` | `undefined` |
| `imageData`   | --             | The data of the image displayed inside the badge.                                                               | `{}`     | `undefined` |
| `text`        | `text`         | The text displayed inside the badge.                                                                            | `string` | `undefined` |


## Events

| Event           | Description | Type                                |
| --------------- | ----------- | ----------------------------------- |
| `kupBadgeClick` |             | `CustomEvent<{ el: EventTarget; }>` |


## Methods

### `refreshCustomStyle(customStyleTheme: string) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [kup-badge](.)
 - [kup-box](../kup-box)
 - [kup-card](../kup-card)
 - [kup-chip](../kup-chip)
 - [kup-data-table](../kup-data-table)
 - [kup-image](../kup-image)

### Depends on

- [kup-badge](.)

### Graph
```mermaid
graph TD;
  kup-badge --> kup-badge
  kup-box --> kup-badge
  kup-card --> kup-badge
  kup-chip --> kup-badge
  kup-data-table --> kup-badge
  kup-image --> kup-badge
  style kup-badge fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
