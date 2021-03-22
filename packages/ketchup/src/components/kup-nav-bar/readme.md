# kup-nav-bar

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                                                     | Type                                                                                                                                                                                         | Default                                   |
| ------------- | -------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `customStyle` | `custom-style` | Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization | `string`                                                                                                                                                                                     | `undefined`                               |
| `data`        | --             | The actual data of the nav bar.                                                                                 | `ComponentNavBarData`                                                                                                                                                                        | `{         title: 'default title',     }` |
| `mode`        | `mode`         | Defines how the bar will be displayed.                                                                          | `ComponentNavBarMode.DEFAULT \| ComponentNavBarMode.DENSE \| ComponentNavBarMode.FIXED \| ComponentNavBarMode.PROMINENT \| ComponentNavBarMode.SHORT \| ComponentNavBarMode.SHORT_COLLAPSED` | `ComponentNavBarMode.DEFAULT`             |


## Events

| Event                      | Description | Type                           |
| -------------------------- | ----------- | ------------------------------ |
| `kupNavbarMenuItemClick`   |             | `CustomEvent<{ value: any; }>` |
| `kupNavbarOptionItemClick` |             | `CustomEvent<{ value: any; }>` |


## Methods

### `themeChangeCallback(customStyleTheme: string) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [kup-list](../kup-list)
- [kup-button](../kup-button)

### Graph
```mermaid
graph TD;
  kup-nav-bar --> kup-list
  kup-nav-bar --> kup-button
  kup-list --> kup-radio
  kup-list --> kup-checkbox
  kup-button --> kup-badge
  kup-badge --> kup-badge
  style kup-nav-bar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
