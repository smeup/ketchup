# kup-planner-renderer

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type           | Default     |
| -------- | --------- | ----------- | -------------- | ----------- |
| `props`  | --        |             | `PlannerProps` | `undefined` |


## Methods

### `refresh() => Promise<void>`

This method is used to trigger a new render of the component.

#### Returns

Type: `Promise<void>`




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
