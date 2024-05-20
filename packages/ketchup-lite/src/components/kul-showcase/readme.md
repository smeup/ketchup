# kul-showcase



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                    | Type     | Default |
| ---------- | ----------- | ------------------------------ | -------- | ------- |
| `kulStyle` | `kul-style` | Custom style of the component. | `string` | `''`    |


## Events

| Event                | Description              | Type                           |
| -------------------- | ------------------------ | ------------------------------ |
| `kul-showcase-event` | Describes event emitted. | `CustomEvent<KulEventPayload>` |


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




## Dependencies

### Depends on

- [kul-card](../kul-card)
- [kul-showcase-article](./components/article)
- [kul-showcase-badge](./components/badge)
- [kul-showcase-button](./components/button)
- [kul-showcase-card](./components/card)
- [kul-showcase-chart](./components/chart)
- [kul-showcase-code](./components/code)
- [kul-showcase-image](./components/image)
- [kul-showcase-lazy](./components/lazy)
- [kul-showcase-photoframe](./components/photoframe)
- [kul-showcase-splash](./components/splash)
- [kul-showcase-spinner](./components/spinner)
- [kul-showcase-tabbar](./components/tabbar)
- [kul-showcase-textfield](./components/textfield)
- [kul-showcase-toast](./components/toast)
- [kul-showcase-tree](./components/tree)
- [kul-showcase-upload](./components/upload)
- [kul-showcase-kulmanager](./framework/manager)
- [kul-showcase-drawer](./layout/drawer)
- [kul-showcase-header](./layout/header)
- [kul-showcase-debug](./utilities/debug)
- [kul-showcase-probe](./utilities/probe)
- [kul-button](../kul-button)

### Graph
```mermaid
graph TD;
  kul-showcase --> kul-card
  kul-showcase --> kul-showcase-article
  kul-showcase --> kul-showcase-badge
  kul-showcase --> kul-showcase-button
  kul-showcase --> kul-showcase-card
  kul-showcase --> kul-showcase-chart
  kul-showcase --> kul-showcase-code
  kul-showcase --> kul-showcase-image
  kul-showcase --> kul-showcase-lazy
  kul-showcase --> kul-showcase-photoframe
  kul-showcase --> kul-showcase-splash
  kul-showcase --> kul-showcase-spinner
  kul-showcase --> kul-showcase-tabbar
  kul-showcase --> kul-showcase-textfield
  kul-showcase --> kul-showcase-toast
  kul-showcase --> kul-showcase-tree
  kul-showcase --> kul-showcase-upload
  kul-showcase --> kul-showcase-kulmanager
  kul-showcase --> kul-showcase-drawer
  kul-showcase --> kul-showcase-header
  kul-showcase --> kul-showcase-debug
  kul-showcase --> kul-showcase-probe
  kul-showcase --> kul-button
  kul-card --> kul-button
  kul-card --> kul-image
  kul-button --> kul-image
  kul-image --> kul-spinner
  kul-image --> kul-badge
  kul-badge --> kul-image
  kul-showcase-article --> kul-article
  kul-showcase-badge --> kul-badge
  kul-showcase-badge --> kul-article
  kul-showcase-button --> kul-button
  kul-showcase-button --> kul-spinner
  kul-showcase-button --> kul-article
  kul-showcase-card --> kul-card
  kul-showcase-card --> kul-article
  kul-showcase-chart --> kul-chart
  kul-showcase-chart --> kul-article
  kul-showcase-code --> kul-code
  kul-showcase-code --> kul-article
  kul-code --> kul-button
  kul-showcase-image --> kul-image
  kul-showcase-image --> kul-article
  kul-showcase-lazy --> kul-lazy
  kul-showcase-lazy --> kul-article
  kul-showcase-photoframe --> kul-photoframe
  kul-showcase-photoframe --> kul-article
  kul-showcase-splash --> kul-button
  kul-showcase-splash --> kul-splash
  kul-showcase-splash --> kul-spinner
  kul-showcase-splash --> kul-article
  kul-showcase-spinner --> kul-spinner
  kul-showcase-spinner --> kul-article
  kul-showcase-tabbar --> kul-tabbar
  kul-showcase-tabbar --> kul-article
  kul-tabbar --> kul-image
  kul-showcase-textfield --> kul-textfield
  kul-showcase-textfield --> kul-article
  kul-showcase-toast --> kul-toast
  kul-showcase-toast --> kul-article
  kul-toast --> kul-image
  kul-showcase-tree --> kul-tree
  kul-showcase-tree --> kul-article
  kul-showcase-upload --> kul-upload
  kul-showcase-upload --> kul-article
  kul-upload --> kul-image
  kul-upload --> kul-button
  kul-showcase-kulmanager --> kul-article
  kul-showcase-drawer --> kul-article
  kul-showcase-header --> kul-article
  style kul-showcase fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
