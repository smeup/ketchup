# kul-badge



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                       | Type      | Default        |
| ------------- | -------------- | ------------------------------------------------- | --------- | -------------- |
| `kulFormat`   | `kul-format`   | Automatically formats the value.                  | `boolean` | `true`         |
| `kulLanguage` | `kul-language` | Sets the language of the snippet.                 | `string`  | `'javascript'` |
| `kulStyle`    | `kul-style`    | Enables customization of the component's style.   | `string`  | `''`           |
| `kulValue`    | `kul-value`    | String containing the snippet of code to display. | `string`  | `''`           |


## Events

| Event            | Description              | Type                           |
| ---------------- | ------------------------ | ------------------------------ |
| `kul-code-event` | Describes event emitted. | `CustomEvent<KulEventPayload>` |


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




## CSS Custom Properties

| Name                                    | Description                                                                                                           |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `--kul-code-background-color`           | Sets the background color of the component. Defaults to rgba(var(--kul-background-color-rgb) 0.275)                   |
| `--kul-code-font-family`                | Sets the font family of the component. Defaults to var(--kul-font-family-monospace)                                   |
| `--kul-code-header-background-color`    | Sets the background color of the header. Defaults to var(--kul-title-background-color)                                |
| `--kul-code-header-color`               | Sets the color of the header. Defaults to var(--kul-title-color)                                                      |
| `--kul-code-selection-background-color` | Sets the background color of selected text. Defaults to rgba(var(--kul-border-color-rgb, 0.275))                      |
| `--kul-code-text-color`                 | Sets the color of the text. Defaults to var(--kul-text-color)                                                         |
| `--kul-code-token-color-1`              | Sets the background color of: boolean, constant, deleted, number, property, symbol, tag. Defaults to rgb(231, 0, 127) |
| `--kul-code-token-color-2`              | Sets the background color of: attr-name, builtin, char, inserted, selector, string. Defaults to rgb(146, 219, 0)      |
| `--kul-code-token-color-3`              | Sets the background color of: atrule, attr-value, keyword. Defaults to rgb(0, 165, 236)                               |
| `--kul-code-token-color-4`              | Sets the background color of: class-name, function. Defaults to #ff6363                                               |
| `--kul-code-token-color-5`              | Sets the background color of: important, regex, variable. Defaults to rgb(255, 196, 86)                               |


## Dependencies

### Used by

 - [kul-showcase-code](../kul-showcase/components/code)

### Depends on

- [kul-button](../kul-button)

### Graph
```mermaid
graph TD;
  kul-code --> kul-button
  kul-button --> kul-image
  kul-button --> kul-list
  kul-image --> kul-spinner
  kul-image --> kul-badge
  kul-badge --> kul-image
  kul-showcase-code --> kul-code
  style kul-code fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
