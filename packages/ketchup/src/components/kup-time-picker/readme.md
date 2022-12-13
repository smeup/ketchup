# kup-date-picker

<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description                                                     | Type      | Default |
| ----------------- | ------------------- | --------------------------------------------------------------- | --------- | ------- |
| `clockVariant`    | `clock-variant`     | When set to true, the drop down menu will display a clock.      | `boolean` | `true`  |
| `customStyle`     | `custom-style`      | Custom style of the component.                                  | `string`  | `''`    |
| `data`            | --                  | Props of the sub-components (time input text field)             | `Object`  | `{}`    |
| `disabled`        | `disabled`          | Defaults at false. When set to true, the component is disabled. | `boolean` | `false` |
| `initialValue`    | `initial-value`     | Sets the initial value of the component.                        | `string`  | `''`    |
| `manageSeconds`   | `manage-seconds`    | Manage seconds.                                                 | `boolean` | `false` |
| `timeMinutesStep` | `time-minutes-step` | Minutes step.                                                   | `number`  | `10`    |


## Events

| Event                            | Description | Type                                     |
| -------------------------------- | ----------- | ---------------------------------------- |
| `kup-timepicker-blur`            |             | `CustomEvent<KupTimePickerEventPayload>` |
| `kup-timepicker-change`          |             | `CustomEvent<KupTimePickerEventPayload>` |
| `kup-timepicker-cleariconclick`  |             | `CustomEvent<KupEventPayload>`           |
| `kup-timepicker-click`           |             | `CustomEvent<KupTimePickerEventPayload>` |
| `kup-timepicker-focus`           |             | `CustomEvent<KupTimePickerEventPayload>` |
| `kup-timepicker-iconclick`       |             | `CustomEvent<KupTimePickerEventPayload>` |
| `kup-timepicker-input`           |             | `CustomEvent<KupTimePickerEventPayload>` |
| `kup-timepicker-itemclick`       |             | `CustomEvent<KupTimePickerEventPayload>` |
| `kup-timepicker-textfieldsubmit` |             | `CustomEvent<KupTimePickerEventPayload>` |


## Methods

### `getProps(descriptions?: boolean) => Promise<GenericObject>`

Used to retrieve component's props values.

#### Returns

Type: `Promise<GenericObject>`

List of props as object, each key will be a prop.

### `getValue() => Promise<string>`

Returns the component's internal value.

#### Returns

Type: `Promise<string>`



### `refresh() => Promise<void>`

This method is used to trigger a new render of the component.

#### Returns

Type: `Promise<void>`



### `setFocus() => Promise<void>`

Focuses the input element.

#### Returns

Type: `Promise<void>`



### `setProps(props: GenericObject) => Promise<void>`

Sets the props to the component.

#### Returns

Type: `Promise<void>`



### `setValue(value: string) => Promise<void>`

Sets the internal value of the component.

#### Returns

Type: `Promise<void>`




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
- [kup-list](../kup-list)

### Graph
```mermaid
graph TD;
  kup-time-picker --> kup-card
  kup-time-picker --> kup-list
  kup-card --> kup-time-picker
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
  kup-form --> kup-time-picker
  kup-checkbox --> kup-card
  kup-text-field --> kup-card
  kup-data-table --> kup-time-picker
  kup-switch --> kup-card
  kup-tab-bar --> kup-card
  kup-tab-bar --> kup-badge
  kup-tree --> kup-time-picker
  kup-box --> kup-time-picker
  kup-cell --> kup-time-picker
  kup-image-list --> kup-time-picker
  style kup-time-picker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
