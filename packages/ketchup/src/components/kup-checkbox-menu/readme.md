# kup-checkbox-menu



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                                                              | Type                    | Default        |
| ---------------- | ----------------- | ---------------------------------------------------------------------------------------- | ----------------------- | -------------- |
| `disabled`       | `disabled`        | Sets if the checkbox menu should be disabled                                             | `boolean`               | `false`        |
| `displayedField` | `displayed-field` | Chooses which field of an item object should be used to create the list and be filtered. | `string`                | `'id'`         |
| `filterLabel`    | `filter-label`    | The label to show as a placeholder inside the filter input                               | `string`                | `'Filtra per'` |
| `isFilterable`   | `is-filterable`   | Marks the field as filterable, allowing an input text to filter the options              | `boolean`               | `true`         |
| `items`          | --                | Sets the checkbox to be disabled  Must have reflect into the attribute                   | `KupCheckboxMenuItem[]` | `[]`           |
| `label`          | `label`           | The label to set to the component                                                        | `string`                | `'Scegli'`     |
| `valueField`     | `value-field`     | Chooses which field of an item object should be used to create the list and be filtered. | `string`                | `'id'`         |


## Events

| Event                     | Description                                     | Type                                 |
| ------------------------- | ----------------------------------------------- | ------------------------------------ |
| `kupCheckboxMenuSelected` | Fired when the checkbox input changes its value | `CustomEvent<KupCheckboxMenuItem[]>` |


## Dependencies

### Depends on

- [wup-checkbox](../wup-checkbox)
- [kup-icon](../kup-icon)
- [kup-menu](../kup-menu)
- [kup-text-input](../kup-text-input)

### Graph
```mermaid
graph TD;
  kup-checkbox-menu --> wup-checkbox
  kup-checkbox-menu --> kup-icon
  kup-checkbox-menu --> kup-menu
  kup-checkbox-menu --> kup-text-input
  style kup-checkbox-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
