# kup-lazy



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                                                                                     | Type      | Default     |
| ----------------- | ------------------ | --------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `componentName`   | `component-name`   | Sets the tag name of the component to be lazy loaded.                                                           | `string`  | `undefined` |
| `customStyle`     | `custom-style`     | Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization | `string`  | `''`        |
| `data`            | --                 | Sets the data of the component to be lazy loaded.                                                               | `{}`      | `undefined` |
| `showPlaceholder` | `show-placeholder` | Displays an animated SVG placeholder until the component is loaded.                                             | `boolean` | `true`      |


## Methods

### `getProps(descriptions?: boolean) => Promise<GenericObject>`

Used to retrieve component's props values.

#### Returns

Type: `Promise<GenericObject>`



### `refresh() => Promise<void>`

This method is used to trigger a new render of the component.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
