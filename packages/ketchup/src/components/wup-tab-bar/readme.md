# wup-tab-bar



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

- [wup-icon](../wup-icon)

### Graph
```mermaid
graph TD;
  wup-tab-bar --> wup-icon
  style wup-tab-bar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
