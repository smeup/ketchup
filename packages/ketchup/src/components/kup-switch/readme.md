# kup-switch

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                          | Type      | Default |
| -------------- | --------------- | ------------------------------------------------------------------------------------ | --------- | ------- |
| `checked`      | `checked`       | Defaults at false. When set to true, the component will be set to 'checked'.         | `boolean` | `false` |
| `customStyle`  | `custom-style`  | Custom style of the component.                                                       | `string`  | `''`    |
| `disabled`     | `disabled`      | Defaults at false. When set to true, the component is disabled.                      | `boolean` | `false` |
| `label`        | `label`         | Defaults at null. When specified, its content will be shown as a label.              | `string`  | `null`  |
| `leadingLabel` | `leading-label` | Defaults at false. When set to true, the label will be on the left of the component. | `boolean` | `false` |


## Events

| Event               | Description                                       | Type                                 |
| ------------------- | ------------------------------------------------- | ------------------------------------ |
| `kup-switch-blur`   | Triggered when the input element loses focus.     | `CustomEvent<KupSwitchEventPayload>` |
| `kup-switch-change` | Triggered when the input element's value changes. | `CustomEvent<KupSwitchEventPayload>` |
| `kup-switch-focus`  | Triggered when the input element gets focused.    | `CustomEvent<KupSwitchEventPayload>` |


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

| Name                             | Description                                     |
| -------------------------------- | ----------------------------------------------- |
| `--kup-switch-font-family`       | Sets font family of the switch's label.         |
| `--kup-switch-font-size`         | Sets font size of the switch's label.           |
| `--kup-switch-font-weight`       | Sets font weight of the switch's label.         |
| `--kup-switch-label-color`       | Sets text color of the switch's label.          |
| `--kup-switch-primary-color`     | Sets primary color of the component.            |
| `--kup-switch-primary-color-rgb` | Sets primary color RGB values of the component. |
| `--kup-switch-thumb-color`       | Sets thumb color.                               |


## Dependencies

### Used by

 - [kup-card](../kup-card)
 - [kup-data-table](../kup-data-table)
 - [kup-form-editor](../kup-form-editor)

### Depends on

- [kup-card](../kup-card)

### Graph
```mermaid
graph TD;
  kup-switch --> kup-card
  kup-card --> kup-switch
  kup-badge --> kup-badge
  kup-badge --> kup-card
  kup-button --> kup-card
  kup-button --> kup-badge
  kup-chip --> kup-card
  kup-chip --> kup-badge
  kup-list --> kup-list
  kup-list --> kup-radio
  kup-list --> kup-card
  kup-list --> kup-badge
  kup-radio --> kup-card
  kup-combobox --> kup-list
  kup-combobox --> kup-card
  kup-autocomplete --> kup-list
  kup-autocomplete --> kup-card
  kup-checkbox --> kup-card
  kup-date-picker --> kup-card
  kup-text-field --> kup-card
  kup-time-picker --> kup-card
  kup-time-picker --> kup-list
  kup-data-table --> kup-switch
  kup-tooltip --> kup-button
  kup-tooltip --> kup-card
  kup-tooltip --> kup-box
  kup-tooltip --> kup-list
  kup-tooltip --> kup-tree
  kup-box --> kup-card
  kup-box --> kup-checkbox
  kup-box --> kup-badge
  kup-box --> kup-tooltip
  kup-box --> kup-combobox
  kup-box --> kup-text-field
  kup-box --> kup-autocomplete
  kup-box --> kup-color-picker
  kup-box --> kup-date-picker
  kup-box --> kup-rating
  kup-box --> kup-time-picker
  kup-box --> kup-image
  kup-box --> kup-button
  kup-box --> kup-button-list
  kup-box --> kup-chart
  kup-box --> kup-gauge
  kup-box --> kup-progress-bar
  kup-box --> kup-radio
  kup-color-picker --> kup-card
  kup-rating --> kup-card
  kup-image --> kup-spinner
  kup-image --> kup-card
  kup-image --> kup-badge
  kup-spinner --> kup-card
  kup-button-list --> kup-dropdown-button
  kup-button-list --> kup-card
  kup-button-list --> kup-badge
  kup-dropdown-button --> kup-list
  kup-dropdown-button --> kup-card
  kup-dropdown-button --> kup-badge
  kup-chart --> kup-card
  kup-gauge --> kup-card
  kup-progress-bar --> kup-card
  kup-tree --> kup-card
  kup-tree --> kup-tooltip
  kup-tree --> kup-list
  kup-tree --> kup-text-field
  kup-tree --> kup-autocomplete
  kup-tree --> kup-color-picker
  kup-tree --> kup-combobox
  kup-tree --> kup-date-picker
  kup-tree --> kup-rating
  kup-tree --> kup-time-picker
  kup-tree --> kup-image
  kup-tree --> kup-button
  kup-tree --> kup-button-list
  kup-tree --> kup-chart
  kup-tree --> kup-gauge
  kup-tree --> kup-progress-bar
  kup-tree --> kup-radio
  kup-tree --> kup-badge
  kup-tab-bar --> kup-card
  kup-tab-bar --> kup-badge
  kup-form-editor --> kup-switch
  style kup-switch fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
