# kul-chat



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description                                               | Type             | Default                                                                                 |
| ---------------- | ------------------ | --------------------------------------------------------- | ---------------- | --------------------------------------------------------------------------------------- |
| `kulEndpointUrl` | `kul-endpoint-url` | Enables customization of the component's style.           | `string`         | `'http://localhost:5001'`                                                               |
| `kulMaxTokens`   | `kul-max-tokens`   | The maximum amount of tokens allowed in the LLM's answer. | `number`         | `250`                                                                                   |
| `kulSeed`        | `kul-seed`         | The seed of the LLM's answer.                             | `number`         | `-1`                                                                                    |
| `kulStyle`       | `kul-style`        | Enables customization of the component's style.           | `string`         | `''`                                                                                    |
| `kulSystem`      | `kul-system`       | System message for the LLM.                               | `string`         | `'You are a helpful and cheerful assistant eager to help the user out with his tasks.'` |
| `kulTemperature` | `kul-temperature`  | Sets the creative boundaries of the LLM.                  | `number`         | `0.7`                                                                                   |
| `kulValue`       | --                 | Sets the initial history of the chat.                     | `KulChatState[]` | `[]`                                                                                    |


## Events

| Event            | Description              | Type                           |
| ---------------- | ------------------------ | ------------------------------ |
| `kul-chat-event` | Describes event emitted. | `CustomEvent<KulEventPayload>` |


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




## Dependencies

### Used by

 - [kul-showcase-chat](../kul-showcase/components/chat)

### Depends on

- [kul-button](../kul-button)
- [kul-spinner](../kul-spinner)
- [kul-image](../kul-image)
- [kul-code](../kul-code)
- [kul-textfield](../kul-textfield)

### Graph
```mermaid
graph TD;
  kul-chat --> kul-button
  kul-chat --> kul-spinner
  kul-chat --> kul-image
  kul-chat --> kul-code
  kul-chat --> kul-textfield
  kul-button --> kul-image
  kul-button --> kul-list
  kul-image --> kul-spinner
  kul-image --> kul-badge
  kul-badge --> kul-image
  kul-code --> kul-button
  kul-showcase-chat --> kul-chat
  style kul-chat fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
