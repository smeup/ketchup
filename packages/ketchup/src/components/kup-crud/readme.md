# kup-crud

<!-- Auto Generated Below -->


## Properties

| Property                             | Attribute  | Description | Type                                                                                                     | Default     |
| ------------------------------------ | ---------- | ----------- | -------------------------------------------------------------------------------------------------------- | ----------- |
| `actions`                            | --         |             | `FormActions`                                                                                            | `undefined` |
| `autocompleteCallBackOnFilterUpdate` | --         |             | `(detail: { filter: string; matchesMinimumCharsRequired: boolean; el: EventTarget; }) => Promise<any[]>` | `undefined` |
| `config`                             | --         |             | `CrudConfig`                                                                                             | `undefined` |
| `crudCallBackOnFormActionSubmitted`  | --         |             | `(detail: FormActionEventDetail) => Promise<CrudCallBackOnFormEventResult>`                              | `undefined` |
| `crudCallBackOnFormFieldChanged`     | --         |             | `(detail: FormFieldEventDetail) => Promise<CrudCallBackOnFormEventResult>`                               | `undefined` |
| `disabled`                           | `disabled` |             | `boolean`                                                                                                | `false`     |
| `extra`                              | `extra`    |             | `any`                                                                                                    | `undefined` |
| `extraMessages`                      | --         |             | `FormMessage[]`                                                                                          | `[]`        |
| `fields`                             | --         |             | `FormFields`                                                                                             | `undefined` |
| `records`                            | --         |             | `CrudRecord[]`                                                                                           | `undefined` |
| `refid`                              | `refid`    |             | `string`                                                                                                 | `undefined` |
| `searchCallBackOnFilterSubmitted`    | --         |             | `(detail: SearchFilterSubmittedEventDetail) => Promise<TableData>`                                       | `undefined` |
| `sections`                           | --         |             | `FormSection`                                                                                            | `undefined` |


## Events

| Event                        | Description | Type                                 |
| ---------------------------- | ----------- | ------------------------------------ |
| `kupCrudBlurred`             |             | `CustomEvent<any>`                   |
| `kupCrudFocused`             |             | `CustomEvent<any>`                   |
| `kupCrudFormActionSubmitted` |             | `CustomEvent<FormActionEventDetail>` |
| `kupCrudFormFieldChanged`    |             | `CustomEvent<FormFieldEventDetail>`  |
| `kupCrudRecordsChanged`      |             | `CustomEvent<CrudRecordsChanged>`    |


## Methods

### `closeForm() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `openForm() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [kup-form](../kup-form)

### Depends on

- [kup-button](../kup-button)
- [kup-modal](../kup-modal)
- [kup-form](../kup-form)

### Graph
```mermaid
graph TD;
  kup-crud --> kup-button
  kup-crud --> kup-modal
  kup-crud --> kup-form
  kup-button --> kup-image
  kup-image --> kup-spinner
  kup-image --> kup-badge
  kup-badge --> kup-image
  kup-form --> kup-crud
  kup-combobox --> kup-text-field
  kup-combobox --> kup-list
  kup-text-field --> kup-image
  kup-list --> kup-image
  kup-list --> kup-radio
  kup-list --> kup-checkbox
  kup-autocomplete --> kup-text-field
  kup-autocomplete --> kup-list
  kup-search --> kup-text-field
  kup-search --> kup-button
  kup-search --> kup-modal
  kup-search --> kup-data-table
  kup-data-table --> kup-checkbox
  kup-data-table --> kup-button
  kup-data-table --> kup-image
  kup-data-table --> kup-text-field
  kup-data-table --> kup-lazy
  kup-data-table --> kup-progress-bar
  kup-data-table --> kup-radio
  kup-data-table --> kup-tooltip
  kup-data-table --> kup-paginator
  kup-data-table --> kup-combobox
  kup-data-table --> kup-chip
  kup-progress-bar --> kup-image
  kup-tooltip --> kup-button
  kup-tooltip --> kup-image
  kup-paginator --> kup-button
  kup-paginator --> kup-combobox
  kup-chip --> kup-image
  style kup-crud fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
