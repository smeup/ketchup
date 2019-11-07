# kup-calendar



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description | Type        | Default     |
| ---------------- | ----------------- | ----------- | ----------- | ----------- |
| `data`           | --                |             | `DataTable` | `undefined` |
| `dateCol`        | `date-col`        |             | `string`    | `undefined` |
| `descrCol`       | `descr-col`       |             | `string`    | `undefined` |
| `endCol`         | `end-col`         |             | `string`    | `undefined` |
| `hideNavigation` | `hide-navigation` |             | `boolean`   | `false`     |
| `iconCol`        | `icon-col`        |             | `string`    | `undefined` |
| `imageCol`       | `image-col`       |             | `string`    | `undefined` |
| `initialDate`    | `initial-date`    |             | `string`    | `undefined` |
| `startCol`       | `start-col`       |             | `string`    | `undefined` |
| `styleCol`       | `style-col`       |             | `string`    | `undefined` |
| `weekView`       | `week-view`       |             | `boolean`   | `false`     |


## Events

| Event                     | Description                | Type                                                                                           |
| ------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------- |
| `kupCalendarDateClicked`  | When a date is clicked     | `CustomEvent<Date>`                                                                            |
| `kupCalendarEventClicked` | When an event is clicked   | `CustomEvent<Row>`                                                                             |
| `kupCalendarEventDropped` | When a date is dropped     | `CustomEvent<{ fromDate: { start: Date; end: Date; }; toDate: { start: Date; end: Date; }; }>` |
| `kupCalendarViewChanged`  | When the navigation change | `CustomEvent<{ from: Date; to: Date; }>`                                                       |


## CSS Custom Properties

| Name                                                               | Description                    |
| ------------------------------------------------------------------ | ------------------------------ |
| `--cal_border-color, --kup-cal_background-color`                   | Set border color               |
| `--cal_event-background-color, --kup-cal_event-background-color`   | Set background color of events |
| `--cal_event-color, --kup-cal_event-color`                         | Set text color of events       |
| `--cal_header-background-color, --kup-cal_header-background-color` | Set background color of header |
| `--cal_header-color, --kup-cal_header-color`                       | Set text color of header       |


## Dependencies

### Depends on

- [kup-button](..\kup-button)

### Graph
```mermaid
graph TD;
  kup-calendar --> kup-button
  style kup-calendar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
