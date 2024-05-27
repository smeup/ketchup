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

### Depends on

- [kul-upload](../../../kul-upload)
- [kul-article](../../../kul-article)

### Graph
```mermaid
graph TD;
  kul-showcase-upload --> kul-upload
  kul-showcase-upload --> kul-article
  kul-upload --> kul-image
  kul-upload --> kul-button
  kul-image --> kul-spinner
  kul-image --> kul-badge
  kul-badge --> kul-image
  kul-button --> kul-image
  kul-button --> kul-list
  style kul-showcase-upload fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
