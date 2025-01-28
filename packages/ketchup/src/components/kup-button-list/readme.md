# ketchup-btn

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                                                                          | Type                                                                                                                                                    | Default                    |
| --------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `blackMode`     | `black-mode`     | Sets the type of the button.                                                                                         | `boolean`                                                                                                                                               | `false`                    |
| `columns`       | `columns`        | Number of columns.                                                                                                   | `number`                                                                                                                                                | `0`                        |
| `contentAlign`  | `content-align`  | Sets the type of the button.                                                                                         | `FButtonAlign.AROUND \| FButtonAlign.BETWEEN \| FButtonAlign.CENTER \| FButtonAlign.EVENLY \| FButtonAlign.LEFT \| FButtonAlign.RIGHT`                  | `FButtonAlign.CENTER`      |
| `customStyle`   | `custom-style`   | Custom style of the component.                                                                                       | `string`                                                                                                                                                | `''`                       |
| `data`          | --               | Props of the sub-components.                                                                                         | `KupButtonListNode[]`                                                                                                                                   | `[]`                       |
| `disabled`      | `disabled`       | When set to true, the sub-components are disabled.                                                                   | `boolean`                                                                                                                                               | `false`                    |
| `showSelection` | `show-selection` | When set to true, highlights the selected button with the secondary color of KupTheme.                               | `boolean`                                                                                                                                               | `true`                     |
| `sizing`        | `sizing`         | Defines the size of the buttons. Available styles are from "extra-small" to "extra-large". Small will be the default | `KupComponentSizing.EXTRA_LARGE \| KupComponentSizing.EXTRA_SMALL \| KupComponentSizing.LARGE \| KupComponentSizing.MEDIUM \| KupComponentSizing.SMALL` | `KupComponentSizing.SMALL` |
| `styling`       | `styling`        | Defines the style of the buttons. Available styles are "outlined" of "flat" (which is the default).                  | `FButtonStyling.FLAT \| FButtonStyling.FLOATING \| FButtonStyling.ICON \| FButtonStyling.OUTLINED \| FButtonStyling.RAISED`                             | `FButtonStyling.RAISED`    |


## Events

| Event                  | Description | Type                                          |
| ---------------------- | ----------- | --------------------------------------------- |
| `kup-buttonlist-click` |             | `CustomEvent<KupButtonListClickEventPayload>` |


## Methods

### `getProps(descriptions?: boolean) => Promise<GenericObject>`

Used to retrieve component's props values.

#### Parameters

| Name           | Type      | Description                                                                            |
| -------------- | --------- | -------------------------------------------------------------------------------------- |
| `descriptions` | `boolean` | - When provided and true, the result will be the list of props with their description. |

#### Returns

Type: `Promise<GenericObject>`

List of props as object, each key will be a prop.

### `refresh() => Promise<void>`

This method is used to trigger a new render of the component.

#### Returns

Type: `Promise<void>`



### `setProps(props: GenericObject) => Promise<void>`

Sets the props to the component.

#### Parameters

| Name    | Type            | Description                                                  |
| ------- | --------------- | ------------------------------------------------------------ |
| `props` | `GenericObject` | - Object containing props that will be set to the component. |

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                                              | Description                                                      |
| ------------------------------------------------- | ---------------------------------------------------------------- |
| `--kup-buttonlist-grid-gap`                       | Sets gap between each button.                                    |
| `--kup-buttonlist-selected-primary-color`         | Sets the primary color of a selected button.                     |
| `--kup-buttonlist-selected-primary-color-h`       | Sets the hue value of primary color of a selected button.        |
| `--kup-buttonlist-selected-primary-color-l`       | Sets the lightness value of primary color of a selected button.  |
| `--kup-buttonlist-selected-primary-color-rgb`     | Sets the RGB values of primary color of a selected button.       |
| `--kup-buttonlist-selected-primary-color-s`       | Sets the saturation value of primary color of a selected button. |
| `--kup-buttonlist-selected-text-on-primary-color` | Sets the text on primary color of a selected button.             |


## Dependencies

### Used by

 - [kup-box](../kup-box)
 - [kup-card](../kup-card)
 - [kup-cell](../kup-cell)
 - [kup-data-table](../kup-data-table)
 - [kup-form](../kup-form)
 - [kup-image-list](../kup-image-list)
 - [kup-input-panel](../kup-input-panel)
 - [kup-magic-box](../kup-magic-box)
 - [kup-toolbar](../kup-toolbar)
 - [kup-tree](../kup-tree)

### Depends on

- [kup-dropdown-button](../kup-dropdown-button)
- [kup-card](../kup-card)
- [kup-dialog](../kup-dialog)
- [kup-badge](../kup-badge)

### Graph
```mermaid
graph TD;
  kup-button-list --> kup-dropdown-button
  kup-button-list --> kup-card
  kup-button-list --> kup-dialog
  kup-button-list --> kup-badge
  kup-dropdown-button --> kup-list
  kup-dropdown-button --> kup-card
  kup-dropdown-button --> kup-dialog
  kup-dropdown-button --> kup-badge
  kup-list --> kup-list
  kup-list --> kup-radio
  kup-list --> kup-text-field
  kup-list --> kup-card
  kup-list --> kup-dialog
  kup-list --> kup-badge
  kup-radio --> kup-card
  kup-radio --> kup-dialog
  kup-radio --> kup-badge
  kup-card --> kup-button-list
  kup-image --> kup-card
  kup-image --> kup-image
  kup-image --> kup-dialog
  kup-image --> kup-spinner
  kup-image --> kup-badge
  kup-dialog --> kup-badge
  kup-dialog --> kup-card
  kup-dialog --> kup-dialog
  kup-badge --> kup-badge
  kup-badge --> kup-card
  kup-badge --> kup-dialog
  kup-spinner --> kup-card
  kup-spinner --> kup-dialog
  kup-autocomplete --> kup-list
  kup-autocomplete --> kup-card
  kup-autocomplete --> kup-dialog
  kup-autocomplete --> kup-badge
  kup-chip --> kup-card
  kup-chip --> kup-dialog
  kup-chip --> kup-badge
  kup-text-field --> kup-card
  kup-text-field --> kup-dialog
  kup-text-field --> kup-badge
  kup-color-picker --> kup-card
  kup-color-picker --> kup-dialog
  kup-color-picker --> kup-badge
  kup-combobox --> kup-list
  kup-combobox --> kup-card
  kup-combobox --> kup-dialog
  kup-combobox --> kup-badge
  kup-date-picker --> kup-card
  kup-date-picker --> kup-dialog
  kup-date-picker --> kup-badge
  kup-rating --> kup-card
  kup-rating --> kup-dialog
  kup-time-picker --> kup-card
  kup-time-picker --> kup-list
  kup-time-picker --> kup-dialog
  kup-time-picker --> kup-badge
  kup-chart --> kup-card
  kup-chart --> kup-dialog
  kup-gauge --> kup-card
  kup-gauge --> kup-dialog
  kup-progress-bar --> kup-card
  kup-progress-bar --> kup-dialog
  kup-toolbar --> kup-button-list
  kup-button --> kup-card
  kup-button --> kup-dialog
  kup-button --> kup-badge
  kup-checkbox --> kup-card
  kup-checkbox --> kup-dialog
  kup-checkbox --> kup-badge
  kup-data-table --> kup-button-list
  kup-switch --> kup-card
  kup-switch --> kup-dialog
  kup-form --> kup-button-list
  kup-tab-bar --> kup-toolbar
  kup-tab-bar --> kup-card
  kup-tab-bar --> kup-dialog
  kup-tab-bar --> kup-badge
  kup-tree --> kup-button-list
  kup-box --> kup-button-list
  kup-cell --> kup-button-list
  kup-image-list --> kup-button-list
  kup-input-panel --> kup-button-list
  kup-magic-box --> kup-button-list
  style kup-button-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
