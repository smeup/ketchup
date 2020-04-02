# kup-autocomplete



<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute               | Description                                                                                                                                          | Type                                                                                                     | Default             |
| ------------------------ | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------- |
| `callBackOnFilterUpdate` | --                      | Function that can be invoked when the filter is updated, but only if in serverHandledFilter mode. It returns the items filtered.                     | `(detail: { filter: string; matchesMinimumCharsRequired: boolean; el: EventTarget; }) => Promise<any[]>` | `undefined`         |
| `customStyle`            | `custom-style`          | Custom style to be passed to the component.                                                                                                          | `string`                                                                                                 | `undefined`         |
| `disabled`               | `disabled`              | Sets if the autocomplete should be enabled or not                                                                                                    | `boolean`                                                                                                | `false`             |
| `fieldId`                | `field-id`              |                                                                                                                                                      | `string`                                                                                                 | `'autocomplete-id'` |
| `listData`               | --                      | Props of the list.                                                                                                                                   | `Object`                                                                                                 | `{}`                |
| `minimumChars`           | `minimum-chars`         | The minimum number of chars to trigger the autocomplete                                                                                              | `number`                                                                                                 | `3`                 |
| `serverHandledFilter`    | `server-handled-filter` | When true, it will emit events to inform the listener of the change of the current filter value. Also the component builtin filter will be disabled. | `boolean`                                                                                                | `false`             |
| `textfieldData`          | --                      | Props of the text field.                                                                                                                             | `Object`                                                                                                 | `{}`                |


## Events

| Event                      | Description    | Type                                                                     |
| -------------------------- | -------------- | ------------------------------------------------------------------------ |
| `kupAutocompleteBlur`      | Event example. | `CustomEvent<{ value: any; }>`                                           |
| `kupAutocompleteChange`    |                | `CustomEvent<{ value: any; }>`                                           |
| `kupAutocompleteClick`     |                | `CustomEvent<{ value: any; }>`                                           |
| `kupAutocompleteFocus`     |                | `CustomEvent<{ value: any; }>`                                           |
| `kupAutocompleteIconClick` |                | `CustomEvent<{ value: any; }>`                                           |
| `kupAutocompleteInput`     |                | `CustomEvent<{ value: any; }>`                                           |
| `kupAutocompleteItemClick` |                | `CustomEvent<{ value: any; }>`                                           |
| `kupFilterChanged`         |                | `CustomEvent<{ filter: string; matchesMinimumCharsRequired: boolean; }>` |


## Dependencies

### Used by

 - [kup-form](../kup-form)

### Depends on

- [kup-text-field](../kup-text-field)
- [kup-list](../kup-list)

### Graph
```mermaid
graph TD;
  kup-autocomplete --> kup-text-field
  kup-autocomplete --> kup-list
  kup-text-field --> kup-icon
  kup-list --> kup-radio
  kup-list --> kup-checkbox
  kup-form --> kup-autocomplete
  style kup-autocomplete fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
