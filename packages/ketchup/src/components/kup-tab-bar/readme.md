# kup-tab-bar

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                 | Type                       | Default     |
| ------------- | -------------- | ------------------------------------------- | -------------------------- | ----------- |
| `customStyle` | `custom-style` | Custom style to be passed to the component. | `string`                   | `undefined` |
| `data`        | --             | List of elements.                           | `ComponentTabBarElement[]` | `[]`        |


## Events

| Event            | Description | Type                                               |
| ---------------- | ----------- | -------------------------------------------------- |
| `kupTabBarBlur`  |             | `CustomEvent<{ index: number; el: EventTarget; }>` |
| `kupTabBarClick` |             | `CustomEvent<{ index: number; el: EventTarget; }>` |
| `kupTabBarFocus` |             | `CustomEvent<{ index: number; el: EventTarget; }>` |


## Dependencies

### Depends on

- [kup-image](../kup-image)

### Graph
```mermaid
graph TD;
  kup-tab-bar --> kup-image
  kup-image --> kup-badge
  kup-image --> kup-spinner
  kup-badge --> kup-image
  style kup-tab-bar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
