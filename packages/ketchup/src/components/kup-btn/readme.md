

# ketchup-btn



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                                                                                          | Type         | Default |
| ------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------- |
| `columns`     | `columns`      | Number of columns for draw sub-components.                                                                                                           | `number`     | `0`     |
| `customStyle` | `custom-style` | Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization                                      | `string`     | `''`    |
| `data`        | --             | Props of the sub-components.                                                                                                                         | `TreeNode[]` | `[]`    |
| `disabled`    | `disabled`     | Default at false. When set to true, the sub-components are disabled.                                                                                 | `boolean`    | `false` |
| `styling`     | `styling`      | Defines the style of the buttons. Available styles are "flat" and "outlined", "raised" is the default. If set, will be valid for all sub-components. | `string`     | `''`    |


## Events

| Event         | Description | Type                                                    |
| ------------- | ----------- | ------------------------------------------------------- |
| `kupBtnClick` |             | `CustomEvent<{ id: string; subId: string; obj: any; }>` |


## Methods

### `getProps(descriptions?: boolean) => Promise<GenericObject>`

Used to retrieve component's props values.

#### Returns

Type: `Promise<GenericObject>`



### `themeChangeCallback(customStyleTheme: string) => Promise<void>`

This method is invoked by the theme manager.
Whenever the current Ketch.UP theme changes, every component must be re-rendered with the new component-specific customStyle.

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [kup-dropdown-button](../kup-dropdown-button)
- [kup-badge](../kup-badge)

### Graph
```mermaid
graph TD;
  kup-btn --> kup-dropdown-button
  kup-btn --> kup-badge
  kup-dropdown-button --> kup-list
  kup-list --> kup-radio
  kup-list --> kup-checkbox
  kup-list --> kup-badge
  kup-badge --> kup-badge
  style kup-btn fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
