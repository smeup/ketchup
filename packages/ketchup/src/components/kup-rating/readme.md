# kup-rating



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                     | Type      | Default |
| ------------- | -------------- | --------------------------------------------------------------- | --------- | ------- |
| `customStyle` | `custom-style` | Custom style of the component.                                  | `string`  | `''`    |
| `disabled`    | `disabled`     | Defaults at false. When set to true, the component is disabled. | `boolean` | `false` |
| `maxValue`    | `max-value`    | Max number of stars (default 5).                                | `number`  | `5`     |
| `value`       | `value`        | Rated stars.                                                    | `number`  | `0`     |


## Events

| Event              | Description | Type                                      |
| ------------------ | ----------- | ----------------------------------------- |
| `kup-rating-click` |             | `CustomEvent<KupRatingClickEventPayload>` |


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

| Name                     | Description                      |
| ------------------------ | -------------------------------- |
| `--kup-rating-color`     | Sets color of the component.     |
| `--kup-rating-font-size` | Sets font size of the component. |


## Dependencies

### Used by

 - [kup-box](../kup-box)
 - [kup-card](../kup-card)
 - [kup-cell](../kup-cell)
 - [kup-data-table](../kup-data-table)
 - [kup-form](../kup-form)
 - [kup-image-list](../kup-image-list)
 - [kup-tree](../kup-tree)

### Depends on

- [kup-card](../kup-card)

### Graph
```mermaid
graph TD;
  kup-rating --> kup-card
  kup-card --> kup-rating
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
  kup-time-picker --> kup-card
  kup-time-picker --> kup-list
  kup-image --> kup-spinner
  kup-image --> kup-card
  kup-image --> kup-badge
  kup-spinner --> kup-card
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
  kup-form --> kup-rating
  kup-checkbox --> kup-card
  kup-text-field --> kup-card
  kup-data-table --> kup-rating
  kup-switch --> kup-card
  kup-tab-bar --> kup-card
  kup-tab-bar --> kup-badge
  kup-tree --> kup-rating
  kup-box --> kup-rating
  kup-cell --> kup-rating
  kup-image-list --> kup-rating
  style kup-rating fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
