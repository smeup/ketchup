# kul-badge



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                                     | Type                | Default |
| ---------- | ----------- | ----------------------------------------------- | ------------------- | ------- |
| `kulData`  | --          | The actual data of the article.                 | `KulArticleDataset` | `null`  |
| `kulStyle` | `kul-style` | Enables customization of the component's style. | `string`            | `''`    |


## Events

| Event               | Description              | Type                           |
| ------------------- | ------------------------ | ------------------------------ |
| `kul-article-event` | Describes event emitted. | `CustomEvent<KulEventPayload>` |


## Methods

### `getDebugInfo() => Promise<KulDebugComponentInfo>`

Retrieves the debug information reflecting the current state of the component.

#### Returns

Type: `Promise<KulDebugComponentInfo>`

A promise that resolves to a KulDebugComponentInfo object containing debug information.

### `getProps(descriptions?: boolean) => Promise<GenericObject>`

Retrieves the properties of the component, with optional descriptions.

#### Parameters

| Name           | Type      | Description                                                                          |
| -------------- | --------- | ------------------------------------------------------------------------------------ |
| `descriptions` | `boolean` | - If true, returns properties with descriptions; otherwise, returns properties only. |

#### Returns

Type: `Promise<GenericObject<unknown>>`

A promise that resolves to an object where each key is a property name, optionally with its description.

### `refresh() => Promise<void>`

Triggers a re-render of the component to reflect any state changes.

#### Returns

Type: `Promise<void>`



### `setProps(props: GenericObject) => Promise<void>`

Assigns a set of properties to the component, triggering updates if necessary.

#### Parameters

| Name    | Type                     | Description                                                   |
| ------- | ------------------------ | ------------------------------------------------------------- |
| `props` | `GenericObject<unknown>` | - An object containing properties to be set on the component. |

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                            | Description                  |
| ------------------------------- | ---------------------------- |
| `--kul-article-article-padding` | Padding of the article tag.  |
| `--kul-article-section-padding` | Padding of the section tags. |


## Dependencies

### Used by

 - [kul-showcase-article](../kul-showcase/components/article)

### Graph
```mermaid
graph TD;
  kul-showcase-article --> kul-article
  style kul-article fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
