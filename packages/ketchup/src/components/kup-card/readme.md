# kup-card

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                                     | Type                                                                                                                                                                         | Default                  |
| -------------- | --------------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `customStyle`  | `custom-style`  | Custom style of the component.                                                                                  | `string`                                                                                                                                                                     | `''`                     |
| `data`         | --              | The actual data of the card.                                                                                    | `KupCardData`                                                                                                                                                                | `null`                   |
| `isMenu`       | `is-menu`       | Defines whether the card is a menu or not. Works together with menuVisible.                                     | `boolean`                                                                                                                                                                    | `false`                  |
| `layoutFamily` | `layout-family` | Sets the type of the card.                                                                                      | `KupCardFamily.BOX \| KupCardFamily.BUILT_IN \| KupCardFamily.COLLAPSIBLE \| KupCardFamily.DIALOG \| KupCardFamily.FREE \| KupCardFamily.SCALABLE \| KupCardFamily.STANDARD` | `KupCardFamily.STANDARD` |
| `layoutNumber` | `layout-number` | Sets the number of the layout.                                                                                  | `number`                                                                                                                                                                     | `1`                      |
| `menuVisible`  | `menu-visible`  | Sets the status of the card as menu, when false it's hidden otherwise it's visible. Works together with isMenu. | `boolean`                                                                                                                                                                    | `false`                  |
| `sizeX`        | `size-x`        | The width of the card, defaults to 100%. Accepts any valid CSS format (px, %, vw, etc.).                        | `string`                                                                                                                                                                     | `'100%'`                 |
| `sizeY`        | `size-y`        | The height of the card, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).                       | `string`                                                                                                                                                                     | `'100%'`                 |


## Events

| Event            | Description                                                | Type                               |
| ---------------- | ---------------------------------------------------------- | ---------------------------------- |
| `kup-card-click` | Triggered when the card is clicked.                        | `CustomEvent<KupCardClickPayload>` |
| `kup-card-close` | Triggered when a dialog card is closed with the "X".       | `CustomEvent<KupEventPayload>`     |
| `kup-card-event` | Triggered when a sub-component of the card emits an event. | `CustomEvent<KupCardEventPayload>` |
| `kup-card-ready` | Triggered when the component is ready.                     | `CustomEvent<KupEventPayload>`     |


## Methods

### `getProps(descriptions?: boolean) => Promise<GenericObject>`

Used to retrieve component's props values.

#### Parameters

| Name           | Type      | Description                                                                            |
| -------------- | --------- | -------------------------------------------------------------------------------------- |
| `descriptions` | `boolean` | - When provided and true, the result will be the list of props with their description. |

#### Returns

Type: `Promise<GenericObject>`

List of props as object, each key will be a prop.

### `refresh() => Promise<void>`

This method is used to trigger a new render of the component.

#### Returns

Type: `Promise<void>`



### `resizeCallback() => Promise<void>`

This method is invoked by KupManager whenever the component changes size.

#### Returns

Type: `Promise<void>`



### `setProps(props: GenericObject) => Promise<void>`

Sets the props to the component.

#### Parameters

| Name    | Type            | Description                                                  |
| ------- | --------------- | ------------------------------------------------------------ |
| `props` | `GenericObject` | - Object containing props that will be set to the component. |

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                                     | Description                                         |
| ---------------------------------------- | --------------------------------------------------- |
| `--kup-card-backdrop`                    | Backdrop of the component when is visible.          |
| `--kup-card-ripple-color`                | Sets color of ripple effect (for Material layouts). |
| `--kup-card-scalable-box-shadow`         | Box shadow of the scalable layouts.                 |
| `--kup-card-scalable-starting-font-size` | Starting font size for scalable cards.              |


## Dependencies

### Used by

 - [kup-accordion](../kup-accordion)
 - [kup-activity-timeline](../kup-activity-timeline)
 - [kup-autocomplete](../kup-autocomplete)
 - [kup-badge](../kup-badge)
 - [kup-box](../kup-box)
 - [kup-button](../kup-button)
 - [kup-button-list](../kup-button-list)
 - [kup-calendar](../kup-calendar)
 - [kup-card](.)
 - [kup-card-list](../kup-card-list)
 - [kup-cell](../kup-cell)
 - [kup-chart](../kup-chart)
 - [kup-checkbox](../kup-checkbox)
 - [kup-chip](../kup-chip)
 - [kup-color-picker](../kup-color-picker)
 - [kup-combobox](../kup-combobox)
 - [kup-dashboard](../kup-dashboard)
 - [kup-data-table](../kup-data-table)
 - [kup-date-picker](../kup-date-picker)
 - [kup-dialog](../kup-dialog)
 - [kup-drawer](../kup-drawer)
 - [kup-dropdown-button](../kup-dropdown-button)
 - [kup-echart](../kup-echart)
 - [kup-editor](../kup-editor)
 - [kup-family-tree](../kup-family-tree)
 - [kup-file-upload](../kup-file-upload)
 - [kup-form](../kup-form)
 - [kup-gauge](../kup-gauge)
 - [kup-grid](../kup-grid)
 - [kup-htm](../kup-htm)
 - [kup-iframe](../kup-iframe)
 - [kup-image](../kup-image)
 - [kup-image-list](../kup-image-list)
 - [kup-input-panel](../kup-input-panel)
 - [kup-lazy](../kup-lazy)
 - [kup-list](../kup-list)
 - [kup-magic-box](../kup-magic-box)
 - [kup-nav-bar](../kup-nav-bar)
 - [kup-numeric-picker](../kup-numeric-picker)
 - [kup-object-field](../kup-object-field)
 - [kup-pdf](../kup-pdf)
 - [kup-planner](../kup-planner)
 - [kup-probe](../kup-probe)
 - [kup-progress-bar](../kup-progress-bar)
 - [kup-qlik](../kup-qlik)
 - [kup-radio](../kup-radio)
 - [kup-rating](../kup-rating)
 - [kup-snackbar](../kup-snackbar)
 - [kup-spinner](../kup-spinner)
 - [kup-switch](../kup-switch)
 - [kup-tab-bar](../kup-tab-bar)
 - [kup-text-field](../kup-text-field)
 - [kup-time-picker](../kup-time-picker)
 - [kup-toolbar](../kup-toolbar)
 - [kup-tree](../kup-tree)
 - [kup-txt](../kup-txt)
 - [kup-typography](../kup-typography)
 - [kup-typography-list](../kup-typography-list)

### Depends on

- [kup-image](../kup-image)
- [kup-autocomplete](../kup-autocomplete)
- [kup-chip](../kup-chip)
- [kup-text-field](../kup-text-field)
- [kup-color-picker](../kup-color-picker)
- [kup-combobox](../kup-combobox)
- [kup-date-picker](../kup-date-picker)
- [kup-file-upload](../kup-file-upload)
- [kup-rating](../kup-rating)
- [kup-time-picker](../kup-time-picker)
- [kup-image-list](../kup-image-list)
- [kup-button-list](../kup-button-list)
- [kup-chart](../kup-chart)
- [kup-gauge](../kup-gauge)
- [kup-progress-bar](../kup-progress-bar)
- [kup-badge](../kup-badge)
- [kup-toolbar](../kup-toolbar)
- [kup-card](.)
- [kup-dialog](../kup-dialog)
- [kup-button](../kup-button)
- [kup-list](../kup-list)
- [kup-spinner](../kup-spinner)
- [kup-checkbox](../kup-checkbox)
- [kup-data-table](../kup-data-table)
- [kup-dropdown-button](../kup-dropdown-button)
- [kup-tree](../kup-tree)
- [kup-tab-bar](../kup-tab-bar)
- [kup-switch](../kup-switch)

### Graph
```mermaid
graph TD;
  kup-card --> kup-card
  kup-image --> kup-card
  kup-dialog --> kup-card
  kup-badge --> kup-card
  kup-spinner --> kup-card
  kup-autocomplete --> kup-card
  kup-list --> kup-card
  kup-radio --> kup-card
  kup-chip --> kup-card
  kup-text-field --> kup-card
  kup-color-picker --> kup-card
  kup-combobox --> kup-card
  kup-date-picker --> kup-card
  kup-file-upload --> kup-card
  kup-rating --> kup-card
  kup-time-picker --> kup-card
  kup-image-list --> kup-card
  kup-button-list --> kup-card
  kup-dropdown-button --> kup-card
  kup-chart --> kup-card
  kup-gauge --> kup-card
  kup-progress-bar --> kup-card
  kup-toolbar --> kup-card
  kup-button --> kup-card
  kup-checkbox --> kup-card
  kup-data-table --> kup-card
  kup-switch --> kup-card
  kup-form --> kup-card
  kup-tree --> kup-card
  kup-tab-bar --> kup-card
  kup-accordion --> kup-card
  kup-activity-timeline --> kup-card
  kup-box --> kup-card
  kup-calendar --> kup-card
  kup-card-list --> kup-card
  kup-cell --> kup-card
  kup-dashboard --> kup-card
  kup-drawer --> kup-card
  kup-echart --> kup-card
  kup-editor --> kup-card
  kup-family-tree --> kup-card
  kup-grid --> kup-card
  kup-htm --> kup-card
  kup-iframe --> kup-card
  kup-input-panel --> kup-card
  kup-lazy --> kup-card
  kup-magic-box --> kup-card
  kup-nav-bar --> kup-card
  kup-numeric-picker --> kup-card
  kup-object-field --> kup-card
  kup-pdf --> kup-card
  kup-planner --> kup-card
  kup-probe --> kup-card
  kup-qlik --> kup-card
  kup-snackbar --> kup-card
  kup-txt --> kup-card
  kup-typography --> kup-card
  kup-typography-list --> kup-card
  style kup-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
