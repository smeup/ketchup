# kup-task-gantt



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute      | Description | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Default     |
| ----------------- | -------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| `barProps`        | --             |             | `{ dependencies: KupPlannerDependency[]; tasks: KupPlannerBarTask[]; dates: Date[]; ganttEvent: KupPlannerGanttEvent; selectedTask: KupPlannerBarTask; rowHeight: number; columnWidth: number; timeStep: number; svg?: SVGSVGElement; svgWidth: number; taskHeight: number; arrowColor: string; arrowIndent: number; fontSize: string; fontFamily: string; rtl: boolean; ganttHeight: number; hideLabel?: boolean; showSecondaryDates?: boolean; currentDateIndicator?: KupPlannerCurrentDateIndicator; projection?: { x0: number; xf: number; color: string; }; readOnly: boolean; setGanttEvent: (value: KupPlannerGanttEvent) => void; setFailedTask: (value: KupPlannerBarTask) => void; setSelectedTask: (taskId: string) => void; } & KupPlannerEventOption` | `undefined` |
| `calendarProps`   | --             |             | `{ dateSetup: KupPlannerDateSetup; locale: string; viewMode: KupPlannerViewMode; rtl: boolean; headerHeight: number; columnWidth: number; fontFamily: string; fontSize: string; dateTimeFormatters?: KupPlannerDateTimeFormatters; singleLineHeader: boolean; currentDateIndicator?: KupPlannerCurrentDateIndicator; }`                                                                                                                                                                                                                                                                                                                                                                                                                                            | `undefined` |
| `ganttHeight`     | `gantt-height` |             | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `undefined` |
| `gridProps`       | --             |             | `{ tasks: KupPlannerTask[]; dates: Date[]; svgWidth: number; rowHeight: number; columnWidth: number; todayColor: string; rtl: boolean; }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `undefined` |
| `phaseDragScroll` | --             |             | `(scrollY: number) => void`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `undefined` |
| `scrollX`         | `scroll-x`     |             | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `undefined` |
| `scrollY`         | `scroll-y`     |             | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `undefined` |
| `taskGanttRef`    | --             |             | `HTMLDivElement`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `undefined` |


## Dependencies

### Used by

 - [kup-gantt](../kup-gantt)

### Depends on

- [kup-gantt-calendar](../kup-gantt-calendar)
- [kup-grid-renderer](../kup-grid-renderer)

### Graph
```mermaid
graph TD;
  kup-task-gantt --> kup-gantt-calendar
  kup-task-gantt --> kup-grid-renderer
  kup-gantt --> kup-task-gantt
  style kup-task-gantt fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
