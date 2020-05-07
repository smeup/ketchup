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

- [kup-checkbox](../kup-checkbox)
- [kup-image](../kup-image)
- [kup-menu](../kup-menu)
- [kup-text-field](../kup-text-field)

### Graph
```mermaid
graph TD;
  kup-checkbox-menu --> kup-checkbox
  kup-checkbox-menu --> kup-image
  kup-checkbox-menu --> kup-menu
  kup-checkbox-menu --> kup-text-field
  kup-image --> kup-badge
  kup-image --> kup-spinner
  kup-badge --> kup-image
  kup-text-field --> kup-image
  style kup-checkbox-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
