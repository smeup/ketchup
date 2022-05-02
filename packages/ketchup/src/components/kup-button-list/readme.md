

# ketchup-btn



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                                                                    | Type                                                                                                                        | Default                 |
| --------------- | ---------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| `columns`       | `columns`        | Number of columns.                                                                                             | `number`                                                                                                                    | `0`                     |
| `customStyle`   | `custom-style`   | Custom style of the component.                                                                                 | `string`                                                                                                                    | `''`                    |
| `data`          | --               | Props of the sub-components.                                                                                   | `KupButtonListNode[]`                                                                                                       | `[]`                    |
| `disabled`      | `disabled`       | When set to true, the sub-components are disabled.                                                             | `boolean`                                                                                                                   | `false`                 |
| `showSelection` | `show-selection` | When set to true, highlights the selected button with the secondary color of KupTheme.                         | `boolean`                                                                                                                   | `true`                  |
| `styling`       | `styling`        | Defines the style of the buttons. Available styles are "flat", "outlined" and "raised" (which is the default). | `FButtonStyling.FLAT \| FButtonStyling.FLOATING \| FButtonStyling.ICON \| FButtonStyling.OUTLINED \| FButtonStyling.RAISED` | `FButtonStyling.RAISED` |


## Events

| Event                  | Description | Type                                          |
| ---------------------- | ----------- | --------------------------------------------- |
| `kup-buttonlist-click` |             | `CustomEvent<KupButtonListClickEventPayload>` |


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
 - [kup-cell](../kup-cell)
 - [kup-data-table](../kup-data-table)
 - [kup-magic-box](../kup-magic-box)
 - [kup-tree](../kup-tree)

### Depends on

- [kup-dropdown-button](../kup-dropdown-button)
- [kup-badge](../kup-badge)

### Graph
```mermaid
graph TD;
  kup-button-list --> kup-dropdown-button
  kup-button-list --> kup-badge
  kup-dropdown-button --> kup-list
  kup-dropdown-button --> kup-badge
  kup-list --> kup-list
  kup-list --> kup-radio
  kup-list --> kup-badge
  kup-badge --> kup-badge
  kup-box --> kup-button-list
  kup-cell --> kup-button-list
  kup-data-table --> kup-button-list
  kup-magic-box --> kup-button-list
  kup-tree --> kup-button-list
  style kup-button-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
