# kup-spinner

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                    | Type      | Default |
| -------------- | --------------- | ---------------------------------------------------------------------------------------------- | --------- | ------- |
| `active`       | `active`        | When set to true the spinner is animating.                                                     | `boolean` | `false` |
| `barVariant`   | `bar-variant`   | Decides whether the component is a bar or a spinner.                                           | `boolean` | `false` |
| `customStyle`  | `custom-style`  | Custom style of the component.                                                                 | `string`  | `''`    |
| `dimensions`   | `dimensions`    | Width and height of the spinner. For the bar variant, only height.                             | `string`  | `null`  |
| `fader`        | `fader`         | Places a blend modal over the wrapper to darken the view (or lighten, when the theme is dark). | `boolean` | `false` |
| `faderTimeout` | `fader-timeout` | The time required for the "fader" to trigger.                                                  | `number`  | `3500`  |
| `fullScreen`   | `full-screen`   | When set to true the component will fill the whole viewport.                                   | `boolean` | `false` |
| `layout`       | `layout`        | Sets the layout of the spinner.                                                                | `number`  | `1`     |


## Events

| Event               | Description                            | Type                           |
| ------------------- | -------------------------------------- | ------------------------------ |
| `kup-spinner-ready` | Triggered when the component is ready. | `CustomEvent<KupEventPayload>` |


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

| Name                         | Description                          |
| ---------------------------- | ------------------------------------ |
| `--kup-spinner-border-color` | Sets borders color of the component. |


## Dependencies

### Used by

 - [kup-card](../kup-card)
 - [kup-data-table](../kup-data-table)
 - [kup-image](../kup-image)

### Depends on

- [kup-card](../kup-card)

### Graph
```mermaid
graph TD;
  kup-spinner --> kup-card
  kup-card --> kup-spinner
  kup-autocomplete --> kup-list
  kup-autocomplete --> kup-card
  kup-list --> kup-list
  kup-list --> kup-radio
  kup-list --> kup-card
  kup-list --> kup-badge
  kup-radio --> kup-card
  kup-badge --> kup-badge
  kup-badge --> kup-card
  kup-color-picker --> kup-card
  kup-combobox --> kup-list
  kup-combobox --> kup-card
  kup-date-picker --> kup-card
  kup-rating --> kup-card
  kup-time-picker --> kup-card
  kup-time-picker --> kup-list
  kup-image --> kup-spinner
  kup-button --> kup-card
  kup-button --> kup-badge
  kup-button-list --> kup-dropdown-button
  kup-button-list --> kup-card
  kup-button-list --> kup-badge
  kup-dropdown-button --> kup-list
  kup-dropdown-button --> kup-card
  kup-dropdown-button --> kup-badge
  kup-chart --> kup-card
  kup-gauge --> kup-card
  kup-progress-bar --> kup-card
  kup-chip --> kup-card
  kup-chip --> kup-badge
  kup-form --> kup-card
  kup-form --> kup-autocomplete
  kup-form --> kup-color-picker
  kup-form --> kup-combobox
  kup-form --> kup-date-picker
  kup-form --> kup-rating
  kup-form --> kup-time-picker
  kup-form --> kup-image
  kup-form --> kup-button
  kup-form --> kup-button-list
  kup-form --> kup-chart
  kup-form --> kup-gauge
  kup-form --> kup-progress-bar
  kup-form --> kup-radio
  kup-form --> kup-badge
  kup-checkbox --> kup-card
  kup-text-field --> kup-card
  kup-data-table --> kup-spinner
  kup-switch --> kup-card
  kup-tab-bar --> kup-card
  kup-tab-bar --> kup-badge
  kup-tree --> kup-card
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
  style kup-spinner fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
