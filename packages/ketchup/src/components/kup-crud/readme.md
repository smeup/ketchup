# kup-crud

Kup-crud is a web component that allows to configure a record or a set of records, in a classic CRUD style (create, read, update, delete).

## Callbacks and events

When a crud form action is submitted or a crud form field is changed you can use related callback function for your backend logic. In this way you can update directly the CRUD component related to that events.

You can also use kupCrudFormFieldChanged and kupCrudFormActionSubmitted events but you have to find the related CRUD component starting from your root crud component if you can have a crud inside a crud. You can find it setting refid prop for each crud field and reading them from events.

<!-- Auto Generated Below -->


## Properties

| Property                             | Attribute | Description | Type                                                                               | Default     |
| ------------------------------------ | --------- | ----------- | ---------------------------------------------------------------------------------- | ----------- |
| `actions`                            | --        |             | `FormActions`                                                                      | `undefined` |
| `autocompleteCallBackOnFilterUpdate` | --        |             | `(detail: KupAutocompleteFilterUpdatePayload) => Promise<KupAutocompleteOption[]>` | `undefined` |
| `config`                             | --        |             | `CrudConfig`                                                                       | `{}`        |
| `crudCallBackOnFormActionSubmitted`  | --        |             | `(detail: FormActionEventDetail) => Promise<CrudCallBackOnFormEventResult>`        | `undefined` |
| `crudCallBackOnFormFieldChanged`     | --        |             | `(detail: FormFieldEventDetail) => Promise<CrudCallBackOnFormEventResult>`         | `undefined` |
| `extra`                              | `extra`   |             | `any`                                                                              | `undefined` |
| `extraMessages`                      | --        |             | `FormMessage[]`                                                                    | `[]`        |
| `fields`                             | --        |             | `FormFields`                                                                       | `undefined` |
| `records`                            | --        |             | `FormRecord[]`                                                                     | `undefined` |
| `refid`                              | `refid`   |             | `string`                                                                           | `undefined` |
| `sections`                           | --        |             | `FormSection`                                                                      | `undefined` |


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

**************************************************************
PUBLIC METHODS                                              *
**************************************************************

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
- [kup-form](../kup-form)

### Graph
```mermaid
graph TD;
  kup-crud --> kup-button
  kup-crud --> kup-modal
  kup-crud --> kup-form
  kup-crud --> kup-form
  kup-form --> kup-text-input
  kup-form --> kup-combo
  kup-form --> kup-crud
  kup-form --> kup-autocomplete
  kup-form --> kup-button
  kup-form --> kup-crud
  kup-combo --> kup-text-input
  kup-combo --> kup-portal
  kup-portal --> kup-portal-instance
  kup-autocomplete --> kup-chip
  kup-autocomplete --> kup-text-input
  kup-autocomplete --> kup-menu
  kup-autocomplete --> kup-icon
  style kup-crud fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
