# kup-list

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                | Type                     | Default                |
| -------------- | --------------- | -------------------------------------------------------------------------- | ------------------------ | ---------------------- |
| `data`         | --              |                                                                            | `ComponentListElement[]` | `[]`                   |
| `isFilterable` | `is-filterable` | Marks the list as filterable, allowing an input text to filter the options | `boolean`                | `false`                |
| `listId`       | `list-id`       |                                                                            | `string`                 | `'KupList-myId'`       |
| `roleType`     | `role-type`     |                                                                            | `string`                 | `KupList.ROLE_LISTBOX` |
| `selectable`   | `selectable`    |                                                                            | `boolean`                | `true`                 |
| `twoLine`      | `two-line`      |                                                                            | `boolean`                | `false`                |


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

 - [kup-combobox](../kup-combobox)

### Depends on

- [kup-radio](../kup-radio)
- [wup-checkbox](../wup-checkbox)

### Graph
```mermaid
graph TD;
  kup-list --> kup-radio
  kup-list --> wup-checkbox
  kup-combobox --> kup-list
  style kup-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
