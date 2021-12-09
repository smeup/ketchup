# kup-nav-bar

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                       | Type                                                  | Default                     |
| ------------- | -------------- | --------------------------------- | ----------------------------------------------------- | --------------------------- |
| `customStyle` | `custom-style` | Custom style of the component.    | `string`                                              | `''`                        |
| `styling`     | `styling`      | Defines the style of the nav bar. | `KupNavBarStyling.SHORT \| KupNavBarStyling.STANDARD` | `KupNavBarStyling.STANDARD` |


## Events

| Event               | Description                             | Type                           |
| ------------------- | --------------------------------------- | ------------------------------ |
| `kup-navbar-ready`  | Triggered when the component is ready.  | `CustomEvent<KupEventPayload>` |
| `kup-navbar-resize` | Triggered when the component is resize. | `CustomEvent<KupEventPayload>` |


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



### `resizeCallback() => Promise<void>`

This method is invoked by KupManager whenever the component changes size.

#### Returns

Type: `Promise<void>`



### `setProps(props: GenericObject) => Promise<void>`

Sets the props to the component.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
