# kup-switch

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                                     | Type      | Default     |
| -------------- | --------------- | --------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `checked`      | `checked`       | Defaults at false. When set to true, the component will be set to 'checked'.                                    | `boolean` | `false`     |
| `customStyle`  | `custom-style`  | Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization | `string`  | `undefined` |
| `disabled`     | `disabled`      | Defaults at false. When set to true, the component is disabled.                                                 | `boolean` | `false`     |
| `label`        | `label`         | Defaults at null. When specified, its content will be shown as a label.                                         | `string`  | `null`      |
| `leadingLabel` | `leading-label` | Defaults at false. When set to true, the label will be on the left of the component.                            | `boolean` | `false`     |


## Events

| Event             | Description | Type                              |
| ----------------- | ----------- | --------------------------------- |
| `kupSwitchBlur`   |             | `CustomEvent<{ value: string; }>` |
| `kupSwitchChange` |             | `CustomEvent<{ value: string; }>` |
| `kupSwitchClick`  |             | `CustomEvent<{ value: string; }>` |
| `kupSwitchFocus`  |             | `CustomEvent<{ value: string; }>` |
| `kupSwitchInput`  |             | `CustomEvent<{ value: string; }>` |


## Methods

### `refreshCustomStyle(customStyleTheme: string) => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
