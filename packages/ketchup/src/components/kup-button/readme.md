# kup-button

<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                                                                                                 | Type                                                                                                                                                    | Default                    |
| ----------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `blackMode`       | `black-mode`       | When set to true, the label will be on the left of the component.                                                           | `boolean`                                                                                                                                               | `false`                    |
| `buttonType`      | `button-type`      | Sets the type of the button.                                                                                                | `string`                                                                                                                                                | `null`                     |
| `checked`         | `checked`          | When set to true, the icon button state will be on.                                                                         | `boolean`                                                                                                                                               | `false`                    |
| `contentAlign`    | `content-align`    | Sets the type of the button.                                                                                                | `FButtonAlign.AROUND \| FButtonAlign.BETWEEN \| FButtonAlign.CENTER \| FButtonAlign.EVENLY \| FButtonAlign.LEFT \| FButtonAlign.RIGHT`                  | `FButtonAlign.CENTER`      |
| `customStyle`     | `custom-style`     | Custom style of the component.                                                                                              | `string`                                                                                                                                                | `''`                       |
| `disabled`        | `disabled`         | Defaults at false. When set to true, the component is disabled.                                                             | `boolean`                                                                                                                                               | `false`                    |
| `icon`            | `icon`             | When set, the button will show this icon.                                                                                   | `string`                                                                                                                                                | `null`                     |
| `iconOff`         | `icon-off`         | When set, the icon button off state will show this icon. Otherwise, an outlined version of the icon prop will be displayed. | `string`                                                                                                                                                | `null`                     |
| `keyShortcut`     | `key-shortcut`     |                                                                                                                             | `string`                                                                                                                                                | `undefined`                |
| `label`           | `label`            | When set, the button will show this text.                                                                                   | `string`                                                                                                                                                | `null`                     |
| `placeholderIcon` | `placeholder-icon` | When set, the button will show this icon, if icon/image not found.                                                          | `string`                                                                                                                                                | `null`                     |
| `showSpinner`     | `show-spinner`     | When set to true, the button show a spinner received in slot.                                                               | `boolean`                                                                                                                                               | `false`                    |
| `sizing`          | `sizing`           | Sets the type of the button                                                                                                 | `KupComponentSizing.EXTRA_LARGE \| KupComponentSizing.EXTRA_SMALL \| KupComponentSizing.LARGE \| KupComponentSizing.MEDIUM \| KupComponentSizing.SMALL` | `KupComponentSizing.SMALL` |
| `styling`         | `styling`          | Defines the style of the button. Styles available: "flat", "outlined" and "raised" which is also the default.               | `FButtonStyling.FLAT \| FButtonStyling.FLOATING \| FButtonStyling.ICON \| FButtonStyling.OUTLINED \| FButtonStyling.RAISED`                             | `FButtonStyling.RAISED`    |
| `toggable`        | `toggable`         | When set to true, the icon button will be toggable on/off.                                                                  | `boolean`                                                                                                                                               | `false`                    |
| `trailingIcon`    | `trailing-icon`    | When set, the icon will be shown after the text.                                                                            | `boolean`                                                                                                                                               | `false`                    |


## Events

| Event              | Description                            | Type                                      |
| ------------------ | -------------------------------------- | ----------------------------------------- |
| `kup-button-blur`  | Triggered when the button loses focus. | `CustomEvent<KupButtonClickEventPayload>` |
| `kup-button-click` | Triggered when the button is clicked.  | `CustomEvent<KupButtonClickEventPayload>` |
| `kup-button-focus` | Triggered when the button is focused.  | `CustomEvent<KupButtonClickEventPayload>` |


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

| Name                                 | Description                                                                           |
| ------------------------------------ | ------------------------------------------------------------------------------------- |
| `--kup-button-border-radius`         | Sets border radius of the button.                                                     |
| `--kup-button-disabled-color`        | Sets disabled color of the button.                                                    |
| `--kup-button-font-family`           | Sets font family of the button.                                                       |
| `--kup-button-font-size`             | Sets font size of the button.                                                         |
| `--kup-button-font-weight`           | Sets font weight of the button.                                                       |
| `--kup-button-height`                | Sets height of the button.                                                            |
| `--kup-button-padding`               | Sets padding of the button.                                                           |
| `--kup-button-primary-color`         | Sets the primary color of the button.                                                 |
| `--kup-button-primary-color-h`       | Sets the primary color Hue value of the button (used for focus/hover effects).        |
| `--kup-button-primary-color-l`       | Sets the primary color Lightness value of the button (used for focus/hover effects).  |
| `--kup-button-primary-color-rgb`     | Sets the primary color RGB values of the button (used for shaders).                   |
| `--kup-button-primary-color-s`       | Sets the primary color Saturation value of the button (used for focus/hover effects). |
| `--kup-button-text-on-primary-color` | Sets text and icon color for raised buttons.                                          |
| `--kup-button-text-transform`        | Set the label case, default is uppercase.                                             |


## Dependencies

### Used by

 - [kup-card](../kup-card)
 - [kup-data-table](../kup-data-table)
 - [kup-iframe](../kup-iframe)
 - [kup-magic-box](../kup-magic-box)
 - [kup-multi-select](../kup-multi-select)

### Depends on

- [kup-card](../kup-card)
- [kup-dialog](../kup-dialog)
- [kup-badge](../kup-badge)

### Graph
```mermaid
graph TD;
  kup-button --> kup-card
  kup-button --> kup-dialog
  kup-button --> kup-badge
  kup-card --> kup-button
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
  kup-list --> kup-list
  kup-list --> kup-radio
  kup-list --> kup-card
  kup-list --> kup-dialog
  kup-list --> kup-badge
  kup-radio --> kup-card
  kup-radio --> kup-dialog
  kup-radio --> kup-badge
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
  kup-file-upload --> kup-spinner
  kup-file-upload --> kup-card
  kup-file-upload --> kup-dialog
  kup-file-upload --> kup-badge
  kup-rating --> kup-card
  kup-rating --> kup-dialog
  kup-time-picker --> kup-card
  kup-time-picker --> kup-list
  kup-time-picker --> kup-dialog
  kup-time-picker --> kup-badge
  kup-button-list --> kup-dropdown-button
  kup-button-list --> kup-card
  kup-button-list --> kup-dialog
  kup-button-list --> kup-badge
  kup-dropdown-button --> kup-list
  kup-dropdown-button --> kup-card
  kup-dropdown-button --> kup-dialog
  kup-dropdown-button --> kup-badge
  kup-chart --> kup-card
  kup-chart --> kup-dialog
  kup-gauge --> kup-card
  kup-gauge --> kup-dialog
  kup-progress-bar --> kup-card
  kup-progress-bar --> kup-dialog
  kup-toolbar --> kup-card
  kup-toolbar --> kup-dialog
  kup-toolbar --> kup-badge
  kup-toolbar --> kup-image
  kup-toolbar --> kup-autocomplete
  kup-toolbar --> kup-chip
  kup-toolbar --> kup-text-field
  kup-toolbar --> kup-color-picker
  kup-toolbar --> kup-combobox
  kup-toolbar --> kup-date-picker
  kup-toolbar --> kup-file-upload
  kup-toolbar --> kup-rating
  kup-toolbar --> kup-time-picker
  kup-toolbar --> kup-button-list
  kup-toolbar --> kup-chart
  kup-toolbar --> kup-gauge
  kup-toolbar --> kup-progress-bar
  kup-toolbar --> kup-toolbar
  kup-checkbox --> kup-card
  kup-checkbox --> kup-dialog
  kup-checkbox --> kup-badge
  kup-data-table --> kup-button
  kup-switch --> kup-card
  kup-switch --> kup-dialog
  kup-form --> kup-card
  kup-form --> kup-dialog
  kup-form --> kup-image
  kup-form --> kup-autocomplete
  kup-form --> kup-chip
  kup-form --> kup-text-field
  kup-form --> kup-color-picker
  kup-form --> kup-combobox
  kup-form --> kup-date-picker
  kup-form --> kup-file-upload
  kup-form --> kup-rating
  kup-form --> kup-time-picker
  kup-form --> kup-button-list
  kup-form --> kup-chart
  kup-form --> kup-gauge
  kup-form --> kup-progress-bar
  kup-form --> kup-badge
  kup-form --> kup-toolbar
  kup-tab-bar --> kup-toolbar
  kup-tab-bar --> kup-card
  kup-tab-bar --> kup-dialog
  kup-tab-bar --> kup-badge
  kup-tree --> kup-card
  kup-tree --> kup-list
  kup-tree --> kup-text-field
  kup-tree --> kup-dialog
  kup-tree --> kup-image
  kup-tree --> kup-autocomplete
  kup-tree --> kup-chip
  kup-tree --> kup-color-picker
  kup-tree --> kup-combobox
  kup-tree --> kup-date-picker
  kup-tree --> kup-file-upload
  kup-tree --> kup-rating
  kup-tree --> kup-time-picker
  kup-tree --> kup-button-list
  kup-tree --> kup-chart
  kup-tree --> kup-gauge
  kup-tree --> kup-progress-bar
  kup-tree --> kup-badge
  kup-tree --> kup-toolbar
  kup-iframe --> kup-button
  kup-magic-box --> kup-button
  kup-multi-select --> kup-button
  style kup-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
