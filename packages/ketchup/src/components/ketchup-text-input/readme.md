# ketchup-text-input



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                                              | Type      | Default  |
| -------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------ | --------- | -------- |
| `initialValue` | `initial-value` | Marks the field as clearable, allowing an icon to delete its content                                                     | `string`  | `''`     |
| `isClearable`  | `is-clearable`  | Marks the field as clearable, allowing an icon to delete its content                                                     | `boolean` | `false`  |
| `label`        | `label`         | Label to describe the radio group                                                                                        | `string`  | `''`     |
| `maxLength`    | `max-length`    | The max length of the text field. Default value copied from here: https://www.w3schools.com/tags/att_input_maxlength.asp | `number`  | `524288` |


## Events

| Event                     | Description | Type                |
| ------------------------- | ----------- | ------------------- |
| `ketchupTextInputBlurred` |             | `CustomEvent<void>` |
| `ketchupTextInputFocused` |             | `CustomEvent<void>` |
| `ketchupTextInputUpdated` |             | `CustomEvent<void>` |


## Methods

### `triggerFocus() => void`

Triggers the focus event on the input text

#### Returns

Type: `void`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
