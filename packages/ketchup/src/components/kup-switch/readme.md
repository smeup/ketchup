# kup-switch

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                          | Type      | Default |
| -------------- | --------------- | ------------------------------------------------------------------------------------ | --------- | ------- |
| `checked`      | `checked`       | Defaults at false. When set to true, the component will be set to 'checked'.         | `boolean` | `false` |
| `customStyle`  | `custom-style`  | Custom style of the component.                                                       | `string`  | `''`    |
| `disabled`     | `disabled`      | Defaults at false. When set to true, the component is disabled.                      | `boolean` | `false` |
| `label`        | `label`         | Defaults at null. When specified, its content will be shown as a label.              | `string`  | `null`  |
| `leadingLabel` | `leading-label` | Defaults at false. When set to true, the label will be on the left of the component. | `boolean` | `false` |


## Events

| Event             | Description                                       | Type                              |
| ----------------- | ------------------------------------------------- | --------------------------------- |
| `kupSwitchBlur`   | Triggered when the input element loses focus.     | `CustomEvent<{ value: string; }>` |
| `kupSwitchChange` | Triggered when the input element's value changes. | `CustomEvent<{ value: string; }>` |
| `kupSwitchClick`  | Triggered when the input element is clicked.      | `CustomEvent<{ value: string; }>` |
| `kupSwitchFocus`  | Triggered when the input element gets focused.    | `CustomEvent<{ value: string; }>` |


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




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
