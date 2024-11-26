# kup-input-panel



<!-- Auto Generated Below -->


## Properties

| Property                   | Attribute              | Description                                                            | Type                                                                                                           | Default     |
| -------------------------- | ---------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------- |
| `buttonPosition`           | `button-position`      | Select the position of the buttons related to the input panel          | `"BOTTOM" \| "CENTER" \| "LEFT" \| "RIGHT" \| "TOP"`                                                           | `undefined` |
| `checkValidObjCallback`    | --                     | Sets the callback for valid the object when cell checkObject is true   | `(event: { obj: KupObj; currentState: KupInputPanelData; fun?: string; }) => Promise<ValidCheckObjResponse>`   | `null`      |
| `checkValidValueCallback`  | --                     | Sets the callback for valid the object when cell checkObject is true   | `(currentState: KupInputPanelSubmitValue, cellId: string) => void`                                             | `null`      |
| `customButtonClickHandler` | --                     | Sets the handler to use when click on custom buttons                   | `(event: { fun: string; cellId: string; currentState: KupInputPanelData; }) => void`                           | `null`      |
| `customStyle`              | `custom-style`         | Custom style of the component.                                         | `string`                                                                                                       | `''`        |
| `dashboardMode`            | `dashboard-mode`       | Sets verical layout if dashboardMode is true                           | `boolean`                                                                                                      | `false`     |
| `data`                     | --                     | Actual data of the form.                                               | `KupInputPanelData`                                                                                            | `null`      |
| `hiddenSubmitButton`       | `hidden-submit-button` | Creates a hidden submit button in order to submit the form with enter. | `boolean`                                                                                                      | `false`     |
| `inputPanelPosition`       | `input-panel-position` | Dispositions of the whole input panel elements                         | `"COLUMNS" \| "INLINE" \| "STRETCHED" \| "UPCOLUMNS" \| "UPINLINE" \| "WATERMARK"`                             | `undefined` |
| `optionsHandler`           | --                     | Sets the callback function on loading options via FUN                  | `(fun: string, inputValue: string, currentState: KupInputPanelData, cellId: string) => Promise<GenericObject>` | `null`      |
| `submitCb`                 | --                     | Sets the callback function on submit form                              | `(e: KupInputPanelSubmit) => unknown`                                                                          | `null`      |


## Events

| Event                        | Description                               | Type                                          |
| ---------------------------- | ----------------------------------------- | --------------------------------------------- |
| `kup-input-panel-ready`      | When component load is complete           | `CustomEvent<KupEventPayload>`                |
| `kup-inputpanel-contextmenu` | Generic right click event on input panel. | `CustomEvent<KupInputPanelClickEventPayload>` |


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



### `setProps(props: GenericObject) => Promise<void>`

Sets the props to the component.

#### Parameters

| Name    | Type            | Description                                                  |
| ------- | --------------- | ------------------------------------------------------------ |
| `props` | `GenericObject` | - Object containing props that will be set to the component. |

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                                 | Description                          |
| ------------------------------------ | ------------------------------------ |
| `--kup-input-panel-background-color` | Sets background of the component.    |
| `--kup-input-panel-color`            | Sets text color of the component.    |
| `--kup-input-panel-font-family`      | Sets font family of the component.   |
| `--kup-input-panel-font-size`        | Sets font size of the component.     |
| `--kup-input-panel-label-alignment`  | Sets the text alignment of labels.   |
| `--kup-input-panel-label-width`      | Sets the width of labels.            |
| `--kup-input-panel-padding`          | Sets the padding of the input panel. |


## Dependencies

### Depends on

- [kup-dropdown-button](../kup-dropdown-button)
- [kup-editor](../kup-editor)
- [kup-data-table](../kup-data-table)
- [kup-tab-bar](../kup-tab-bar)
- [kup-badge](../kup-badge)
- [kup-autocomplete](../kup-autocomplete)
- [kup-chip](../kup-chip)
- [kup-text-field](../kup-text-field)
- [kup-color-picker](../kup-color-picker)
- [kup-combobox](../kup-combobox)
- [kup-date-picker](../kup-date-picker)
- [kup-rating](../kup-rating)
- [kup-time-picker](../kup-time-picker)
- [kup-image](../kup-image)
- [kup-button-list](../kup-button-list)
- [kup-chart](../kup-chart)
- [kup-gauge](../kup-gauge)
- [kup-progress-bar](../kup-progress-bar)
- [kup-card](../kup-card)
- [kup-dialog](../kup-dialog)

### Graph
```mermaid
graph TD;
  kup-input-panel --> kup-dropdown-button
  kup-input-panel --> kup-editor
  kup-input-panel --> kup-data-table
  kup-input-panel --> kup-tab-bar
  kup-input-panel --> kup-badge
  kup-input-panel --> kup-autocomplete
  kup-input-panel --> kup-chip
  kup-input-panel --> kup-text-field
  kup-input-panel --> kup-color-picker
  kup-input-panel --> kup-combobox
  kup-input-panel --> kup-date-picker
  kup-input-panel --> kup-rating
  kup-input-panel --> kup-time-picker
  kup-input-panel --> kup-image
  kup-input-panel --> kup-button-list
  kup-input-panel --> kup-chart
  kup-input-panel --> kup-gauge
  kup-input-panel --> kup-progress-bar
  kup-input-panel --> kup-card
  kup-input-panel --> kup-dialog
  kup-dropdown-button --> kup-list
  kup-dropdown-button --> kup-card
  kup-dropdown-button --> kup-dialog
  kup-dropdown-button --> kup-badge
  kup-list --> kup-list
  kup-list --> kup-radio
  kup-list --> kup-card
  kup-list --> kup-dialog
  kup-list --> kup-badge
  kup-radio --> kup-card
  kup-radio --> kup-dialog
  kup-radio --> kup-badge
  kup-card --> kup-autocomplete
  kup-card --> kup-chip
  kup-card --> kup-text-field
  kup-card --> kup-color-picker
  kup-card --> kup-combobox
  kup-card --> kup-date-picker
  kup-card --> kup-rating
  kup-card --> kup-time-picker
  kup-card --> kup-image
  kup-card --> kup-button-list
  kup-card --> kup-chart
  kup-card --> kup-gauge
  kup-card --> kup-progress-bar
  kup-card --> kup-badge
  kup-card --> kup-card
  kup-card --> kup-dialog
  kup-card --> kup-button
  kup-card --> kup-list
  kup-card --> kup-spinner
  kup-card --> kup-checkbox
  kup-card --> kup-data-table
  kup-card --> kup-tab-bar
  kup-card --> kup-tree
  kup-card --> kup-switch
  kup-card --> kup-dropdown-button
  kup-autocomplete --> kup-list
  kup-autocomplete --> kup-card
  kup-autocomplete --> kup-dialog
  kup-autocomplete --> kup-badge
  kup-dialog --> kup-badge
  kup-dialog --> kup-card
  kup-dialog --> kup-dialog
  kup-badge --> kup-badge
  kup-badge --> kup-card
  kup-badge --> kup-dialog
  kup-chip --> kup-card
  kup-chip --> kup-dialog
  kup-chip --> kup-badge
  kup-text-field --> kup-card
  kup-text-field --> kup-dialog
  kup-text-field --> kup-badge
  kup-color-picker --> kup-card
  kup-color-picker --> kup-dialog
  kup-color-picker --> kup-badge
  kup-combobox --> kup-list
  kup-combobox --> kup-card
  kup-combobox --> kup-dialog
  kup-combobox --> kup-badge
  kup-date-picker --> kup-card
  kup-date-picker --> kup-dialog
  kup-date-picker --> kup-badge
  kup-rating --> kup-card
  kup-rating --> kup-dialog
  kup-time-picker --> kup-card
  kup-time-picker --> kup-list
  kup-time-picker --> kup-dialog
  kup-time-picker --> kup-badge
  kup-image --> kup-card
  kup-image --> kup-image
  kup-image --> kup-dialog
  kup-image --> kup-spinner
  kup-image --> kup-badge
  kup-spinner --> kup-card
  kup-spinner --> kup-dialog
  kup-button-list --> kup-dropdown-button
  kup-button-list --> kup-card
  kup-button-list --> kup-dialog
  kup-button-list --> kup-badge
  kup-chart --> kup-card
  kup-chart --> kup-dialog
  kup-gauge --> kup-card
  kup-gauge --> kup-dialog
  kup-progress-bar --> kup-card
  kup-progress-bar --> kup-dialog
  kup-button --> kup-card
  kup-button --> kup-dialog
  kup-button --> kup-badge
  kup-checkbox --> kup-card
  kup-checkbox --> kup-dialog
  kup-checkbox --> kup-badge
  kup-data-table --> kup-card
  kup-data-table --> kup-list
  kup-data-table --> kup-switch
  kup-data-table --> kup-button
  kup-data-table --> kup-spinner
  kup-data-table --> kup-form
  kup-data-table --> kup-image
  kup-data-table --> kup-dialog
  kup-data-table --> kup-checkbox
  kup-data-table --> kup-combobox
  kup-data-table --> kup-dropdown-button
  kup-data-table --> kup-badge
  kup-data-table --> kup-autocomplete
  kup-data-table --> kup-chip
  kup-data-table --> kup-text-field
  kup-data-table --> kup-color-picker
  kup-data-table --> kup-date-picker
  kup-data-table --> kup-rating
  kup-data-table --> kup-time-picker
  kup-data-table --> kup-button-list
  kup-data-table --> kup-chart
  kup-data-table --> kup-gauge
  kup-data-table --> kup-progress-bar
  kup-switch --> kup-card
  kup-switch --> kup-dialog
  kup-form --> kup-card
  kup-form --> kup-dialog
  kup-form --> kup-autocomplete
  kup-form --> kup-chip
  kup-form --> kup-text-field
  kup-form --> kup-color-picker
  kup-form --> kup-combobox
  kup-form --> kup-date-picker
  kup-form --> kup-rating
  kup-form --> kup-time-picker
  kup-form --> kup-image
  kup-form --> kup-button-list
  kup-form --> kup-chart
  kup-form --> kup-gauge
  kup-form --> kup-progress-bar
  kup-form --> kup-badge
  kup-tab-bar --> kup-toolbar
  kup-tab-bar --> kup-card
  kup-tab-bar --> kup-dialog
  kup-tab-bar --> kup-badge
  kup-toolbar --> kup-card
  kup-toolbar --> kup-dialog
  kup-toolbar --> kup-badge
  kup-toolbar --> kup-autocomplete
  kup-toolbar --> kup-chip
  kup-toolbar --> kup-text-field
  kup-toolbar --> kup-color-picker
  kup-toolbar --> kup-combobox
  kup-toolbar --> kup-date-picker
  kup-toolbar --> kup-rating
  kup-toolbar --> kup-time-picker
  kup-toolbar --> kup-image
  kup-toolbar --> kup-button-list
  kup-toolbar --> kup-chart
  kup-toolbar --> kup-gauge
  kup-toolbar --> kup-progress-bar
  kup-tree --> kup-card
  kup-tree --> kup-list
  kup-tree --> kup-text-field
  kup-tree --> kup-dialog
  kup-tree --> kup-autocomplete
  kup-tree --> kup-chip
  kup-tree --> kup-color-picker
  kup-tree --> kup-combobox
  kup-tree --> kup-date-picker
  kup-tree --> kup-rating
  kup-tree --> kup-time-picker
  kup-tree --> kup-image
  kup-tree --> kup-button-list
  kup-tree --> kup-chart
  kup-tree --> kup-gauge
  kup-tree --> kup-progress-bar
  kup-tree --> kup-badge
  kup-editor --> kup-card
  kup-editor --> kup-dialog
  style kup-input-panel fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
