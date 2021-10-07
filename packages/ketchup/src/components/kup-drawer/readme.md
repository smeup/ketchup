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



### `isOpened() => Promise<boolean>`

Returns the state of the drawer.

#### Returns

Type: `Promise<boolean>`



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




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
