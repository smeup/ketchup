# kup-button

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                                                 | Type                                                                                                                        | Default                 |
| -------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| `buttonType`   | `button-type`   | Sets the type of the button.                                                                                                | `string`                                                                                                                    | `null`                  |
| `checked`      | `checked`       | When set to true, the icon button state will be on.                                                                         | `boolean`                                                                                                                   | `false`                 |
| `customStyle`  | `custom-style`  | Custom style of the component.                                                                                              | `string`                                                                                                                    | `''`                    |
| `disabled`     | `disabled`      | Defaults at false. When set to true, the component is disabled.                                                             | `boolean`                                                                                                                   | `false`                 |
| `icon`         | `icon`          | When set, the button will show this icon.                                                                                   | `string`                                                                                                                    | `null`                  |
| `iconOff`      | `icon-off`      | When set, the icon button off state will show this icon. Otherwise, an outlined version of the icon prop will be displayed. | `string`                                                                                                                    | `null`                  |
| `label`        | `label`         | When set, the button will show this text.                                                                                   | `string`                                                                                                                    | `null`                  |
| `showSpinner`  | `show-spinner`  | When set to true, the button show a spinner received in slot.                                                               | `boolean`                                                                                                                   | `false`                 |
| `styling`      | `styling`       | Defines the style of the button. Styles available: "flat", "outlined" and "raised" which is also the default.               | `FButtonStyling.FLAT \| FButtonStyling.FLOATING \| FButtonStyling.ICON \| FButtonStyling.OUTLINED \| FButtonStyling.RAISED` | `FButtonStyling.RAISED` |
| `toggable`     | `toggable`      | When set to true, the icon button will be toggable on/off.                                                                  | `boolean`                                                                                                                   | `false`                 |
| `trailingIcon` | `trailing-icon` | When set, the icon will be shown after the text.                                                                            | `boolean`                                                                                                                   | `false`                 |


## Events

| Event              | Description                            | Type                                      |
| ------------------ | -------------------------------------- | ----------------------------------------- |
| `kup-button-blur`  | Triggered when the button loses focus. | `CustomEvent<KupButtonClickEventPayload>` |
| `kup-button-click` | Triggered when the button is clicked.  | `CustomEvent<KupButtonClickEventPayload>` |
| `kup-button-focus` | Triggered when the button is focused.  | `CustomEvent<KupButtonClickEventPayload>` |


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

 - [kup-box](../kup-box)
 - [kup-card](../kup-card)
 - [kup-cell](../kup-cell)
 - [kup-data-table](../kup-data-table)
 - [kup-form](../kup-form)
 - [kup-iframe](../kup-iframe)
 - [kup-image-list](../kup-image-list)
 - [kup-magic-box](../kup-magic-box)
 - [kup-tree](../kup-tree)

### Depends on

- [kup-card](../kup-card)
- [kup-badge](../kup-badge)

### Graph
```mermaid
graph TD;
  kup-button --> kup-card
  kup-button --> kup-badge
  kup-card --> kup-button
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
  kup-chip --> kup-card
  kup-chip --> kup-badge
  kup-form --> kup-button
  kup-checkbox --> kup-card
  kup-text-field --> kup-card
  kup-data-table --> kup-button
  kup-switch --> kup-card
  kup-tab-bar --> kup-card
  kup-tab-bar --> kup-badge
  kup-tree --> kup-button
  kup-box --> kup-button
  kup-cell --> kup-button
  kup-iframe --> kup-button
  kup-image-list --> kup-button
  kup-magic-box --> kup-button
  style kup-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
