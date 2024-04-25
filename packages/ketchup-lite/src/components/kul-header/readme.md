# kup-nav-bar

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                                                                                                   | Type     | Default |
| ---------- | ----------- | ------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| `kulStyle` | `kul-style` | Customizes the style of the component. This property allows you to apply a custom CSS style to the component. | `string` | `''`    |


## Events

| Event              | Description              | Type                           |
| ------------------ | ------------------------ | ------------------------------ |
| `kul-header-event` | Describes event emitted. | `CustomEvent<KulEventPayload>` |


## Methods

### `getDebugInfo() => Promise<KulDebugComponentInfo>`

Fetches debug information of the component's current state.

#### Returns

Type: `Promise<KulDebugComponentInfo>`

A promise that resolves with the debug information object.

### `getProps(descriptions?: boolean) => Promise<GenericObject>`

Used to retrieve component's props values.

#### Parameters

| Name           | Type      | Description                                                                            |
| -------------- | --------- | -------------------------------------------------------------------------------------- |
| `descriptions` | `boolean` | - When provided and true, the result will be the list of props with their description. |

#### Returns

Type: `Promise<GenericObject<unknown>>`

List of props as object, each key will be a prop.

### `refresh() => Promise<void>`

This method is used to trigger a new render of the component.

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                      | Description                                                                                    |
| ------------------------- | ---------------------------------------------------------------------------------------------- |
| `--kul-header-box-shadow` | Sets the box shadow of the header component. Defaults to a combination of shadows for depth.   |
| `--kul-header-padding`    | Sets the padding of the header component. Defaults to 8px top and bottom, 12px left and right. |
| `--kul-header-position`   | Sets the CSS positioning of the header component. Defaults to fixed.                           |
| `--kul-header-transition` | Sets the transition time of the header component. Defaults to 250ms.                           |
| `--kul-header-width`      | Sets the width of the header component. Defaults to 100%.                                      |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
