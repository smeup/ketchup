# kup-drawer



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                    | Type     | Default |
| ------------- | -------------- | ------------------------------ | -------- | ------- |
| `customStyle` | `custom-style` | Custom style of the component. | `string` | `''`    |


## Events

| Event              | Description                            | Type                           |
| ------------------ | -------------------------------------- | ------------------------------ |
| `kup-drawer-close` | Fired when the drawer gets closed.     | `CustomEvent<KupEventPayload>` |
| `kup-drawer-open`  | Fired when the drawer gets opened.     | `CustomEvent<KupEventPayload>` |
| `kup-drawer-ready` | Triggered when the component is ready. | `CustomEvent<KupEventPayload>` |


## Methods

### `close() => Promise<void>`

Closes the drawer.

#### Returns

Type: `Promise<void>`



### `getProps(descriptions?: boolean) => Promise<GenericObject>`

Used to retrieve component's props values.

#### Returns

Type: `Promise<GenericObject>`

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



### `setProps(props: GenericObject) => Promise<void>`

Sets the props to the component.

#### Returns

Type: `Promise<void>`



### `toggle() => Promise<void>`

Opens the drawer when closed and vice-versa.

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                            | Description                                          |
| ------------------------------- | ---------------------------------------------------- |
| `--kup-drawer-backdrop`         | Backdrop of the component when in slide mode.        |
| `--kup-drawer-box-shadow`       | Box shadow of the component when in slide mode.      |
| `--kup-drawer-permanent-border` | Border of the drawer in permanent mode.              |
| `--kup-drawer-slide-transition` | Horizontal transition's duration when in slide mode. |
| `--kup-drawer-transition`       | Transitions duration.                                |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
