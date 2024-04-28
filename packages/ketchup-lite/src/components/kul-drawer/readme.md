# kul-drawer



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                    | Type     | Default |
| ---------- | ----------- | ------------------------------ | -------- | ------- |
| `kulStyle` | `kul-style` | Custom style of the component. | `string` | `''`    |


## Events

| Event              | Description                               | Type                           |
| ------------------ | ----------------------------------------- | ------------------------------ |
| `kul-drawer-event` | Describes event emitted by the component. | `CustomEvent<KulEventPayload>` |


## Methods

### `close() => Promise<void>`

Closes the drawer.

#### Returns

Type: `Promise<void>`



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

### `isOpened() => Promise<boolean>`

Returns the state of the drawer.

#### Returns

Type: `Promise<boolean>`

True when opened, false when closed.

### `open() => Promise<void>`

Opens the drawer.

#### Returns

Type: `Promise<void>`



### `refresh() => Promise<void>`

This method is used to trigger a new render of the component.

#### Returns

Type: `Promise<void>`



### `toggle() => Promise<void>`

Opens the drawer when closed and vice-versa.

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                            | Description                                          |
| ------------------------------- | ---------------------------------------------------- |
| `--kul-drawer-backdrop`         | Backdrop of the component when in slide mode.        |
| `--kul-drawer-box-shadow`       | Box shadow of the component when in slide mode.      |
| `--kul-drawer-permanent-border` | Border of the drawer in permanent mode.              |
| `--kul-drawer-slide-transition` | Horizontal transition's duration when in slide mode. |
| `--kul-drawer-transition`       | Transitions duration.                                |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
