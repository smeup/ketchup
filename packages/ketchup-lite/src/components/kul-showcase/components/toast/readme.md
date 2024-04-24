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

- [kul-toast](../../../kul-toast)
- [kul-article](../../../kul-article)

### Graph
```mermaid
graph TD;
  kul-showcase-toast --> kul-toast
  kul-showcase-toast --> kul-article
  kul-toast --> kul-image
  kul-image --> kul-spinner
  kul-image --> kul-badge
  kul-badge --> kul-image
  kul-showcase --> kul-showcase-toast
  style kul-showcase-toast fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
