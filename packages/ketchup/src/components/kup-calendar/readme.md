# kup-calendar

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                                                | Type                                                                                                               | Default                      |
| ---------------- | ----------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| `currentDate`    | `current-date`    | Sets the initial date of the calendar. Must be in ISO format (YYYY-MM-DD). | `string`                                                                                                           | `null`                       |
| `customStyle`    | `custom-style`    | Custom style of the component.                                             | `string`                                                                                                           | `''`                         |
| `data`           | --                | Actual data of the calendar.                                               | `KupCalendarData`                                                                                                  | `null`                       |
| `editableEvents` | `editable-events` | When true, events are editable.                                            | `boolean`                                                                                                          | `true`                       |
| `hideNavigation` | `hide-navigation` | When disabled, the navigation toolbar won't be displayed.                  | `boolean`                                                                                                          | `false`                      |
| `viewType`       | `view-type`       | Type of the view.                                                          | `KupCalendarViewTypes.DAY \| KupCalendarViewTypes.LIST \| KupCalendarViewTypes.MONTH \| KupCalendarViewTypes.WEEK` | `KupCalendarViewTypes.MONTH` |


## Events

| Event                     | Description                | Type                                             |
| ------------------------- | -------------------------- | ------------------------------------------------ |
| `kup-calendar-dateclick`  | When a date is clicked.    | `CustomEvent<KupCalendarDateClickEventPayload>`  |
| `kup-calendar-eventclick` | When an event is clicked.  | `CustomEvent<KupCalendarEventClickEventPayload>` |
| `kup-calendar-eventdrop`  | When a date is dropped.    | `CustomEvent<KupCalendarEventDropEventPayload>`  |
| `kup-calendar-viewchange` | When the navigation change | `CustomEvent<KupCalendarViewChangeEventPayload>` |


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

| Name                                          | Description                                         |
| --------------------------------------------- | --------------------------------------------------- |
| `--kup-calendar-background-color`             | Background of the component.                        |
| `--kup-calendar-border-color`                 | Sets borders color of the calendar.                 |
| `--kup-calendar-event-background-color`       | Sets background color of events.                    |
| `--kup-calendar-event-border-color`           | Sets border color of events.                        |
| `--kup-calendar-event-border-radius`          | Sets border radius of events.                       |
| `--kup-calendar-event-color`                  | Sets text color of events.                          |
| `--kup-calendar-font-family`                  | Sets the font family of the component.              |
| `--kup-calendar-font-size`                    | Sets the font size of the component.                |
| `--kup-calendar-header-background-color`      | Sets background color of the header cell.           |
| `--kup-calendar-header-color`                 | Sets text color of the header cell.                 |
| `--kup-calendar-navigator-border`             | Sets the border of the navigator.                   |
| `--kup-calendar-no-work-day-background-color` | Sets background color of sunday and saturday cells. |
| `--kup-calendar-no-work-day-color`            | Sets text color of sunday and saturday cells.       |
| `--kup-calendar-today-background-color`       | Sets background color of today's cell.              |


## Dependencies

### Depends on

- [kup-card](../kup-card)
- [kup-dialog](../kup-dialog)
- [kup-badge](../kup-badge)

### Graph
```mermaid
graph TD;
  kup-calendar --> kup-card
  kup-calendar --> kup-dialog
  kup-calendar --> kup-badge
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
  kup-list --> kup-list
  kup-list --> kup-radio
  kup-list --> kup-card
  kup-list --> kup-dialog
  kup-list --> kup-badge
  kup-radio --> kup-card
  kup-radio --> kup-dialog
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
  kup-dropdown-button --> kup-list
  kup-dropdown-button --> kup-card
  kup-dropdown-button --> kup-dialog
  kup-dropdown-button --> kup-badge
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
  kup-tab-bar --> kup-list
  kup-tab-bar --> kup-card
  kup-tab-bar --> kup-dialog
  kup-tab-bar --> kup-badge
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
  style kup-calendar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
