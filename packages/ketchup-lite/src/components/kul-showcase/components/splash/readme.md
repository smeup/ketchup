# kul-showcase-badge



<!-- Auto Generated Below -->


## Shadow Parts

| Part               | Description |
| ------------------ | ----------- |
| `"comp-wrapper"`   |             |
| `"description"`    |             |
| `"example"`        |             |
| `"examples-title"` |             |
| `"grid"`           |             |


## Dependencies

### Used by

 - [kul-showcase](../..)

### Depends on

- [kul-button](../../../kul-button)
- [kul-splash](../../../kul-splash)
- [kul-spinner](../../../kul-spinner)
- [kul-article](../../../kul-article)

### Graph
```mermaid
graph TD;
  kul-showcase-splash --> kul-button
  kul-showcase-splash --> kul-splash
  kul-showcase-splash --> kul-spinner
  kul-showcase-splash --> kul-article
  kul-button --> kul-image
  kul-image --> kul-spinner
  kul-image --> kul-badge
  kul-badge --> kul-image
  kul-showcase --> kul-showcase-splash
  style kul-showcase-splash fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
