# kul-showcase-badge



<!-- Auto Generated Below -->


## Shadow Parts

| Part               | Description |
| ------------------ | ----------- |
| `"comp-wrapper"`   |             |
| `"description"`    |             |
| `"example"`        |             |
| `"grid"`           |             |
| `"grid-container"` |             |
| `"grid-title"`     |             |


## Dependencies

### Used by

 - [kul-showcase](../..)

### Depends on

- [kul-button](../../../kul-button)
- [kul-spinner](../../../kul-spinner)

### Graph
```mermaid
graph TD;
  kul-showcase-button --> kul-button
  kul-showcase-button --> kul-spinner
  kul-button --> kul-image
  kul-image --> kul-spinner
  kul-image --> kul-badge
  kul-badge --> kul-image
  kul-showcase --> kul-showcase-button
  style kul-showcase-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
