# kup-cell



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                   | Type      | Default |
| ------------- | -------------- | --------------------------------------------- | --------- | ------- |
| `customStyle` | `custom-style` | Custom style of the component.                | `string`  | `''`    |
| `data`        | --             | The data of the cell.                         | `Cell`    | `null`  |
| `dragEnabled` | `drag-enabled` | When set to true, the component is draggable. | `boolean` | `false` |


## Events

| Event            | Description                            | Type                               |
| ---------------- | -------------------------------------- | ---------------------------------- |
| `kup-cell-click` | Triggered when the element is clicked. | `CustomEvent<KupCellEventPayload>` |


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




## Dependencies

### Depends on

- [kup-autocomplete](../kup-autocomplete)
- [kup-color-picker](../kup-color-picker)
- [kup-combobox](../kup-combobox)
- [kup-date-picker](../kup-date-picker)
- [kup-rating](../kup-rating)
- [kup-time-picker](../kup-time-picker)
- [kup-image](../kup-image)
- [kup-button](../kup-button)
- [kup-button-list](../kup-button-list)
- [kup-chart](../kup-chart)
- [kup-gauge](../kup-gauge)
- [kup-progress-bar](../kup-progress-bar)
- [kup-radio](../kup-radio)
- [kup-badge](../kup-badge)

### Graph
```mermaid
graph TD;
  kup-cell --> kup-autocomplete
  kup-cell --> kup-color-picker
  kup-cell --> kup-combobox
  kup-cell --> kup-date-picker
  kup-cell --> kup-rating
  kup-cell --> kup-time-picker
  kup-cell --> kup-image
  kup-cell --> kup-button
  kup-cell --> kup-button-list
  kup-cell --> kup-chart
  kup-cell --> kup-gauge
  kup-cell --> kup-progress-bar
  kup-cell --> kup-radio
  kup-cell --> kup-badge
  kup-autocomplete --> kup-list
  kup-list --> kup-radio
  kup-list --> kup-badge
  kup-badge --> kup-badge
  kup-combobox --> kup-list
  kup-date-picker --> kup-button
  kup-button --> kup-badge
  kup-time-picker --> kup-button
  kup-time-picker --> kup-list
  kup-image --> kup-spinner
  kup-image --> kup-badge
  kup-button-list --> kup-dropdown-button
  kup-button-list --> kup-badge
  kup-dropdown-button --> kup-list
  kup-dropdown-button --> kup-badge
  style kup-cell fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
