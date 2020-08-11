# kup-button

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                                                                   | Type      | Default     |
| -------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `checked`      | `checked`       | Defaults at false. When set to true, the icon button state will be on.                                                                        | `boolean` | `false`     |
| `customStyle`  | `custom-style`  | Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization                               | `string`  | `undefined` |
| `disabled`     | `disabled`      | Defaults at false. When set to true, the component is disabled.                                                                               | `boolean` | `false`     |
| `flat`         | `flat`          | Defaults at false. When set to true, the button will be rendered flat.                                                                        | `boolean` | `false`     |
| `fullHeight`   | `full-height`   | Defaults at false. When set to true fill all the available horizontal space.                                                                  | `boolean` | `false`     |
| `fullWidth`    | `full-width`    | Defaults at false. When set to true fill all the available horizontal space.                                                                  | `boolean` | `false`     |
| `icon`         | `icon`          | Defaults at null. When set, the button will show this icon.                                                                                   | `string`  | `null`      |
| `iconColor`    | `icon-color`    | If not set, it will be managed by the component.                                                                                              | `string`  | `null`      |
| `iconOff`      | `icon-off`      | Defaults at null. When set, the icon button off state will show this icon. Otherwise, an outlined version of the icon prop will be displayed. | `string`  | `null`      |
| `label`        | `label`         | Defaults at null. When set, the button will show this text.                                                                                   | `string`  | `null`      |
| `outlined`     | `outlined`      | Defaults at false. When set to true, the button will be rendered with a colored outline.                                                      | `boolean` | `false`     |
| `shaped`       | `shaped`        | Defaults at false. When set to true, the button will be rendered with rounded edges.                                                          | `boolean` | `false`     |
| `toggable`     | `toggable`      | Defaults at false. When set to true, the icon button will be toggable on/off.                                                                 | `boolean` | `false`     |
| `tooltip`      | `tooltip`       | When set, this tooltip will be displayed on mouse over (using the HTML attribute title).                                                      | `string`  | `undefined` |
| `trailingIcon` | `trailing-icon` | Defaults at null. When set, the icon will be shown after the text.                                                                            | `boolean` | `false`     |


## Events

| Event            | Description | Type                                          |
| ---------------- | ----------- | --------------------------------------------- |
| `kupButtonBlur`  |             | `CustomEvent<{ id: string; value: string; }>` |
| `kupButtonClick` |             | `CustomEvent<{ id: string; value: string; }>` |
| `kupButtonFocus` |             | `CustomEvent<{ id: string; value: string; }>` |


## Methods

### `refreshCustomStyle(customStyleTheme: string) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [kup-box](../kup-box)
 - [kup-btn](../kup-btn)
 - [kup-calendar](../kup-calendar)
 - [kup-card](../kup-card)
 - [kup-crud](../kup-crud)
 - [kup-data-table](../kup-data-table)
 - [kup-field](../kup-field)
 - [kup-form](../kup-form)
 - [kup-iframe](../kup-iframe)
 - [kup-nav-bar](../kup-nav-bar)
 - [kup-paginator](../kup-paginator)
 - [kup-search](../kup-search)
 - [kup-tooltip](../kup-tooltip)
 - [kup-tree](../kup-tree)

### Depends on

- [kup-image](../kup-image)

### Graph
```mermaid
graph TD;
  kup-button --> kup-image
  kup-image --> kup-spinner
  kup-image --> kup-badge
  kup-badge --> kup-image
  kup-box --> kup-button
  kup-btn --> kup-button
  kup-calendar --> kup-button
  kup-card --> kup-button
  kup-crud --> kup-button
  kup-data-table --> kup-button
  kup-field --> kup-button
  kup-form --> kup-button
  kup-iframe --> kup-button
  kup-nav-bar --> kup-button
  kup-paginator --> kup-button
  kup-search --> kup-button
  kup-tooltip --> kup-button
  kup-tree --> kup-button
  style kup-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
