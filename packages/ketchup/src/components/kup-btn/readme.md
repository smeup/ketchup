

# ketchup-btn



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type           | Default     |
| --------- | --------- | ----------- | -------------- | ----------- |
| `buttons` | --        |             | `any[]`        | `undefined` |
| `config`  | --        |             | `ButtonConfig` | `{}`        |


## Events

| Event         | Description | Type                           |
| ------------- | ----------- | ------------------------------ |
| `kupBtnClick` |             | `CustomEvent<{ id: number; }>` |


## Dependencies

### Depends on

- [kup-button](../kup-button)

### Graph
```mermaid
graph TD;
  kup-btn --> kup-button
  kup-button --> kup-image
  kup-image --> kup-badge
  kup-image --> kup-badge
  kup-badge --> kup-image
  kup-badge --> kup-image
  style kup-btn fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
