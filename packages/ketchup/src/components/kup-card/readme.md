# kup-card

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                                     | Type                                                                   | Default               |
| -------------- | --------------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | --------------------- |
| `customStyle`  | `custom-style`  | Custom style of the component.                                                                                  | `string`                                                               | `''`                  |
| `data`         | --              | The actual data of the card.                                                                                    | `CardData`                                                             | `null`                |
| `isMenu`       | `is-menu`       | Defines whether the card is a menu or not. Works together with menuVisible.                                     | `boolean`                                                              | `false`               |
| `layoutFamily` | `layout-family` | Sets the type of the card.                                                                                      | `CardFamily.COLLAPSIBLE \| CardFamily.SCALABLE \| CardFamily.STANDARD` | `CardFamily.STANDARD` |
| `layoutNumber` | `layout-number` | Sets the number of the layout.                                                                                  | `number`                                                               | `1`                   |
| `menuVisible`  | `menu-visible`  | Sets the status of the card as menu, when false it's hidden otherwise it's visible. Works together with isMenu. | `boolean`                                                              | `false`               |
| `sizeX`        | `size-x`        | The width of the card, defaults to 100%. Accepts any valid CSS format (px, %, vw, etc.).                        | `string`                                                               | `'100%'`              |
| `sizeY`        | `size-y`        | The height of the card, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).                       | `string`                                                               | `'100%'`              |


## Events

| Event          | Description                                                | Type                                          |
| -------------- | ---------------------------------------------------------- | --------------------------------------------- |
| `kupCardClick` | Triggered when the card is clicked.                        | `CustomEvent<{ card: KupCard; }>`             |
| `kupCardEvent` | Triggered when a sub-component of the card emits an event. | `CustomEvent<{ card: KupCard; event: any; }>` |


## Methods

### `refreshCustomStyle(customStyleTheme: string) => Promise<void>`

This method is invoked by the theme manager.
Whenever the current Ketch.UP theme changes, every component must be re-rendered with the new component-specific customStyle.

#### Returns

Type: `Promise<void>`



### `resizeCallback() => Promise<void>`

This method is invoked by KupManager whenever the component changes size.

#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [kup-box](../kup-box)
 - [kup-data-table](../kup-data-table)
 - [kup-tree](../kup-tree)

### Depends on

- [kup-chip](../kup-chip)
- [kup-button](../kup-button)
- [kup-badge](../kup-badge)
- [kup-progress-bar](../kup-progress-bar)
- [kup-chart](../kup-chart)
- [kup-checkbox](../kup-checkbox)
- [kup-date-picker](../kup-date-picker)
- [kup-text-field](../kup-text-field)
- [kup-time-picker](../kup-time-picker)

### Graph
```mermaid
graph TD;
  kup-card --> kup-chip
  kup-card --> kup-button
  kup-card --> kup-badge
  kup-card --> kup-progress-bar
  kup-card --> kup-chart
  kup-card --> kup-checkbox
  kup-card --> kup-date-picker
  kup-card --> kup-text-field
  kup-card --> kup-time-picker
  kup-chip --> kup-badge
  kup-badge --> kup-badge
  kup-button --> kup-badge
  kup-date-picker --> kup-text-field
  kup-date-picker --> kup-button
  kup-time-picker --> kup-text-field
  kup-time-picker --> kup-button
  kup-time-picker --> kup-list
  kup-list --> kup-radio
  kup-list --> kup-checkbox
  kup-box --> kup-card
  kup-data-table --> kup-card
  kup-tree --> kup-card
  style kup-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
