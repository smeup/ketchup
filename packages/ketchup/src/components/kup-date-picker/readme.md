# kup-date-picker

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute         | Description                                                                                   | Type      | Default |
| --------------- | ----------------- | --------------------------------------------------------------------------------------------- | --------- | ------- |
| `customStyle`   | `custom-style`    | Custom style of the component.                                                                | `string`  | `''`    |
| `data`          | --                | Props of the sub-components.                                                                  | `Object`  | `null`  |
| `disabled`      | `disabled`        | Defaults at false. When set to true, the component is disabled.                               | `boolean` | `false` |
| `firstDayIndex` | `first-day-index` | First day number (0 - sunday, 1 - monday, ...) TODO: manage with kupDates.locale, remove prop | `number`  | `1`     |
| `initialValue`  | `initial-value`   | Sets the initial value of the component                                                       | `string`  | `''`    |


## Events

| Event                            | Description | Type                                     |
| -------------------------------- | ----------- | ---------------------------------------- |
| `kup-datepicker-blur`            |             | `CustomEvent<KupDatePickerEventPayload>` |
| `kup-datepicker-change`          |             | `CustomEvent<KupDatePickerEventPayload>` |
| `kup-datepicker-cleariconclick`  |             | `CustomEvent<KupEventPayload>`           |
| `kup-datepicker-click`           |             | `CustomEvent<KupDatePickerEventPayload>` |
| `kup-datepicker-focus`           |             | `CustomEvent<KupDatePickerEventPayload>` |
| `kup-datepicker-iconclick`       |             | `CustomEvent<KupDatePickerEventPayload>` |
| `kup-datepicker-input`           |             | `CustomEvent<KupDatePickerEventPayload>` |
| `kup-datepicker-itemclick`       |             | `CustomEvent<KupDatePickerEventPayload>` |
| `kup-datepicker-textfieldsubmit` |             | `CustomEvent<KupDatePickerEventPayload>` |


## Methods

### `getProps(descriptions?: boolean) => Promise<GenericObject>`

Used to retrieve component's props values.

#### Returns

Type: `Promise<GenericObject>`

List of props as object, each key will be a prop.

### `getValue() => Promise<string>`

Retrieves the component's value.

#### Returns

Type: `Promise<string>`

Value of the component.

### `refresh() => Promise<void>`

This method is used to trigger a new render of the component.

#### Returns

Type: `Promise<void>`



### `setFocus() => Promise<void>`

Sets the focus to the component.

#### Returns

Type: `Promise<void>`



### `setValue(value: string) => Promise<void>`

Sets the component's value.

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

### Graph
```mermaid
graph TD;
  kup-date-picker --> kup-card
  kup-card --> kup-date-picker
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
  kup-rating --> kup-card
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
  kup-form --> kup-date-picker
  kup-checkbox --> kup-card
  kup-text-field --> kup-card
  kup-data-table --> kup-date-picker
  kup-switch --> kup-card
  kup-tab-bar --> kup-card
  kup-tab-bar --> kup-badge
  kup-tree --> kup-date-picker
  kup-box --> kup-date-picker
  kup-cell --> kup-date-picker
  kup-image-list --> kup-date-picker
  style kup-date-picker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
