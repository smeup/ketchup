# ketchup-combo



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                                                                | Type          | Default |
| ---------------- | ----------------- | ------------------------------------------------------------------------------------------ | ------------- | ------- |
| `displayedField` | `displayed-field` | * Chooses which field of an item object should be used to create the list and be filtered. | `string`      | `'id'`  |
| `initialValue`   | `initial-value`   | Allows to pass an initial selected item for the combobox                                   | `string`      | `''`    |
| `isClearable`    | `is-clearable`    | Marks the field as clearable, allowing an icon to delete its content                       | `boolean`     | `false` |
| `items`          | --                | Items which can be selected                                                                | `ComboItem[]` | `[]`    |
| `label`          | `label`           | Label to describe the radio group                                                          | `string`      | `''`    |


## Events

| Event                  | Description | Type                |
| ---------------------- | ----------- | ------------------- |
| `ketchupComboSelected` |             | `CustomEvent<void>` |


## Methods

### `closeCombo() => void`

Opens the combo box

#### Returns

Type: `void`



### `openCombo() => void`

Opens the combo box

#### Returns

Type: `void`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
