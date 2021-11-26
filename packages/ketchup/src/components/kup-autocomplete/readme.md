# kup-autocomplete

<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute               | Description                                                                                                                                          | Type                                                                                                     | Default                        |
| ------------------------ | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------ |
| `callBackOnFilterUpdate` | --                      | Function that can be invoked when the filter is updated, but only if in serverHandledFilter mode. It returns the items filtered.                     | `(detail: { filter: string; matchesMinimumCharsRequired: boolean; el: EventTarget; }) => Promise<any[]>` | `undefined`                    |
| `customStyle`            | `custom-style`          | Custom style of the component.                                                                                                                       | `string`                                                                                                 | `''`                           |
| `data`                   | --                      | Props of the sub-components.                                                                                                                         | `Object`                                                                                                 | `undefined`                    |
| `disabled`               | `disabled`              | Defaults at false. When set to true, the component is disabled.                                                                                      | `boolean`                                                                                                | `false`                        |
| `displayMode`            | `display-mode`          | Sets how to show the selected item value. Suported values: "code", "description", "both".                                                            | `ItemsDisplayMode.CODE \| ItemsDisplayMode.DESCRIPTION \| ItemsDisplayMode.DESCRIPTION_AND_CODE`         | `ItemsDisplayMode.DESCRIPTION` |
| `initialValue`           | `initial-value`         | Sets the initial value of the component.                                                                                                             | `string`                                                                                                 | `''`                           |
| `minimumChars`           | `minimum-chars`         | The minimum number of chars to trigger the autocomplete                                                                                              | `number`                                                                                                 | `1`                            |
| `selectMode`             | `select-mode`           | Sets how to return the selected item value. Suported values: "code", "description", "both".                                                          | `ItemsDisplayMode.CODE \| ItemsDisplayMode.DESCRIPTION \| ItemsDisplayMode.DESCRIPTION_AND_CODE`         | `ItemsDisplayMode.CODE`        |
| `serverHandledFilter`    | `server-handled-filter` | When true, it will emit events to inform the listener of the change of the current filter value. Also the component builtin filter will be disabled. | `boolean`                                                                                                | `false`                        |


## Events

| Event                            | Description | Type                                                    |
| -------------------------------- | ----------- | ------------------------------------------------------- |
| `kup-autocomplete-blur`          |             | `CustomEvent<KupAutocompleteEventPayload>`              |
| `kup-autocomplete-change`        |             | `CustomEvent<KupAutocompleteEventPayload>`              |
| `kup-autocomplete-click`         |             | `CustomEvent<KupAutocompleteEventPayload>`              |
| `kup-autocomplete-filterchanged` |             | `CustomEvent<kupAutocompleteFilterChangedEventPayload>` |
| `kup-autocomplete-focus`         |             | `CustomEvent<KupAutocompleteEventPayload>`              |
| `kup-autocomplete-iconclick`     |             | `CustomEvent<KupAutocompleteEventPayload>`              |
| `kup-autocomplete-input`         |             | `CustomEvent<KupAutocompleteEventPayload>`              |
| `kup-autocomplete-itemclick`     |             | `CustomEvent<KupAutocompleteEventPayload>`              |


## Methods

### `getProps(descriptions?: boolean) => Promise<GenericObject>`

Used to retrieve component's props values.

#### Returns

Type: `Promise<GenericObject>`

List of props as object, each key will be a prop.

### `getValue() => Promise<string>`

Used to retrieve the value of the component.

#### Returns

Type: `Promise<string>`

Value of the component.

### `refresh() => Promise<void>`

This method is used to trigger a new render of the component.

#### Returns

Type: `Promise<void>`



### `setFocus() => Promise<void>`

Sets the focus to the component.

#### Returns

Type: `Promise<void>`



### `setProps(props: GenericObject) => Promise<void>`

Sets the props to the component.

#### Returns

Type: `Promise<void>`



### `setValue(value: string) => Promise<void>`

Sets the value of the component.

#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [kup-box](../kup-box)
 - [kup-card](../kup-card)
 - [kup-cell](../kup-cell)
 - [kup-data-table](../kup-data-table)
 - [kup-tree](../kup-tree)

### Depends on

- [kup-list](../kup-list)

### Graph
```mermaid
graph TD;
  kup-autocomplete --> kup-list
  kup-list --> kup-radio
  kup-list --> kup-badge
  kup-badge --> kup-badge
  kup-box --> kup-autocomplete
  kup-card --> kup-autocomplete
  kup-cell --> kup-autocomplete
  kup-data-table --> kup-autocomplete
  kup-tree --> kup-autocomplete
  style kup-autocomplete fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
