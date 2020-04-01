# kup-list

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                     | Type                                                                                             | Default                        |
| ------------- | -------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------ |
| `data`        | --             |                                                                                 | `ComponentListElement[]`                                                                         | `[]`                           |
| `displayMode` | `display-mode` | Selects how the items must display their label and how they can be filtered for | `ItemsDisplayMode.CODE \| ItemsDisplayMode.DESCRIPTION \| ItemsDisplayMode.DESCRIPTION_AND_CODE` | `ItemsDisplayMode.DESCRIPTION` |
| `fieldId`     | `field-id`     |                                                                                 | `string`                                                                                         | `'list-id'`                    |
| `filter`      | `filter`       |                                                                                 | `string`                                                                                         | `''`                           |
| `roleType`    | `role-type`    |                                                                                 | `string`                                                                                         | `KupList.ROLE_LISTBOX`         |
| `selectable`  | `selectable`   |                                                                                 | `boolean`                                                                                        | `true`                         |
| `twoLine`     | `two-line`     |                                                                                 | `boolean`                                                                                        | `false`                        |


## Events

| Event           | Description | Type                                                                |
| --------------- | ----------- | ------------------------------------------------------------------- |
| `kupListBlur`   | Events.     | `CustomEvent<{ selected: ComponentListElement; el: EventTarget; }>` |
| `kupListChange` |             | `CustomEvent<{ selected: ComponentListElement; el: EventTarget; }>` |
| `kupListClick`  |             | `CustomEvent<{ selected: ComponentListElement; el: EventTarget; }>` |
| `kupListFocus`  |             | `CustomEvent<{ selected: ComponentListElement; el: EventTarget; }>` |
| `kupListInput`  |             | `CustomEvent<{ selected: ComponentListElement; el: EventTarget; }>` |


## Dependencies

### Used by

 - [kup-autocomplete](../kup-autocomplete)
 - [kup-combobox](../kup-combobox)

### Depends on

- [kup-radio](../kup-radio)
- [kup-checkbox](../kup-checkbox)

### Graph
```mermaid
graph TD;
  kup-list --> kup-radio
  kup-list --> kup-checkbox
  kup-autocomplete --> kup-list
  kup-combobox --> kup-list
  style kup-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
