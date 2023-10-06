# kup-planner-renderer



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description | Type                                                  | Default     |
| ----------------- | ------------------ | ----------- | ----------------------------------------------------- | ----------- |
| `plannerChange`   | --                 |             | `(data: PlannerProps, selectedValue: string) => void` | `undefined` |
| `props`           | --                 |             | `PlannerProps`                                        | `undefined` |
| `selectedPlanner` | `selected-planner` |             | `string`                                              | `undefined` |


## Dependencies

### Used by

 - [kup-planner](..)

### Depends on

- [kup-switcher](kup-switcher)
- [kup-gantt](kup-gantt)

### Graph
```mermaid
graph TD;
  kup-planner-renderer --> kup-switcher
  kup-planner-renderer --> kup-gantt
  kup-switcher --> kup-dropdown-button
  kup-dropdown-button --> kup-list
  kup-dropdown-button --> kup-card
  kup-dropdown-button --> kup-badge
  kup-list --> kup-list
  kup-list --> kup-radio
  kup-list --> kup-card
  kup-list --> kup-badge
  kup-radio --> kup-card
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
  kup-card --> kup-radio
  kup-card --> kup-badge
  kup-card --> kup-card
  kup-card --> kup-button
  kup-card --> kup-list
  kup-card --> kup-checkbox
  kup-card --> kup-data-table
  kup-card --> kup-spinner
  kup-card --> kup-tab-bar
  kup-card --> kup-tree
  kup-card --> kup-switch
  kup-card --> kup-dropdown-button
  kup-autocomplete --> kup-list
  kup-autocomplete --> kup-card
  kup-chip --> kup-card
  kup-chip --> kup-badge
  kup-badge --> kup-badge
  kup-badge --> kup-card
  kup-text-field --> kup-card
  kup-color-picker --> kup-card
  kup-combobox --> kup-list
  kup-combobox --> kup-card
  kup-date-picker --> kup-card
  kup-rating --> kup-card
  kup-time-picker --> kup-card
  kup-time-picker --> kup-list
  kup-image --> kup-spinner
  kup-image --> kup-card
  kup-image --> kup-badge
  kup-spinner --> kup-card
  kup-button-list --> kup-dropdown-button
  kup-button-list --> kup-card
  kup-button-list --> kup-badge
  kup-chart --> kup-card
  kup-gauge --> kup-card
  kup-progress-bar --> kup-card
  kup-button --> kup-card
  kup-button --> kup-badge
  kup-checkbox --> kup-card
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
  kup-data-table --> kup-radio
  kup-switch --> kup-card
  kup-form --> kup-card
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
  kup-form --> kup-radio
  kup-form --> kup-badge
  kup-dialog --> kup-badge
  kup-dialog --> kup-card
  kup-tab-bar --> kup-card
  kup-tab-bar --> kup-badge
  kup-tree --> kup-card
  kup-tree --> kup-list
  kup-tree --> kup-text-field
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
  kup-tree --> kup-radio
  kup-tree --> kup-badge
  kup-gantt --> kup-standard-tooltip
  kup-gantt --> kup-task-list-header
  kup-gantt --> kup-task-list-table
  kup-gantt --> kup-task-list
  kup-gantt --> kup-task-gantt
  kup-gantt --> kup-tooltip
  kup-gantt --> kup-vertical-scroll
  kup-gantt --> kup-horizontal-scroll
  kup-task-list --> kup-custom-task-list-header
  kup-task-list --> kup-custom-task-list-table
  kup-task-gantt --> kup-gantt-calendar
  kup-task-gantt --> kup-grid-renderer
  kup-planner --> kup-planner-renderer
  style kup-planner-renderer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
