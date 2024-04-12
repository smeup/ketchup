# kul-showcase



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                    | Type     | Default |
| ---------- | ----------- | ------------------------------ | -------- | ------- |
| `kulStyle` | `kul-style` | Custom style of the component. | `string` | `''`    |


## Events

| Event                | Description                                                         | Type                           |
| -------------------- | ------------------------------------------------------------------- | ------------------------------ |
| `kul-showcase-event` | Describes event emitted for various button interactions like click. | `CustomEvent<KulEventPayload>` |


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



### `setProps(props: GenericObject) => Promise<void>`

Sets the props to the component.

#### Parameters

| Name    | Type                     | Description                                                  |
| ------- | ------------------------ | ------------------------------------------------------------ |
| `props` | `GenericObject<unknown>` | - Object containing props that will be set to the component. |

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [kul-card](../kul-card)
- [kul-showcase-debug](./utilities/debug)
- [kul-showcase-probe](./utilities/probe)
- [kul-showcase-badge](./components/badge)
- [kul-showcase-button](./components/button)
- [kul-showcase-card](./components/card)
- [kul-showcase-image](./components/image)
- [kul-showcase-splash](./components/splash)
- [kul-showcase-spinner](./components/spinner)
- [kul-button](../kul-button)

### Graph
```mermaid
graph TD;
  kul-showcase --> kul-card
  kul-showcase --> kul-showcase-debug
  kul-showcase --> kul-showcase-probe
  kul-showcase --> kul-showcase-badge
  kul-showcase --> kul-showcase-button
  kul-showcase --> kul-showcase-card
  kul-showcase --> kul-showcase-image
  kul-showcase --> kul-showcase-splash
  kul-showcase --> kul-showcase-spinner
  kul-showcase --> kul-button
  kul-card --> kul-image
  kul-card --> kul-button
  kul-image --> kul-spinner
  kul-image --> kul-badge
  kul-badge --> kul-image
  kul-button --> kul-image
  kul-showcase-badge --> kul-badge
  kul-showcase-button --> kul-button
  kul-showcase-button --> kul-spinner
  kul-showcase-card --> kul-card
  kul-showcase-image --> kul-image
  kul-showcase-splash --> kul-button
  kul-showcase-splash --> kul-splash
  kul-showcase-splash --> kul-spinner
  kul-showcase-spinner --> kul-spinner
  style kul-showcase fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
