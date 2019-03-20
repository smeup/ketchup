# ketchup-combo



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                                                              | Type          | Default |
| ---------------- | ----------------- | ---------------------------------------------------------------------------------------- | ------------- | ------- |
| `displayedField` | `displayed-field` | Chooses which field of an item object should be used to create the list and be filtered. | `string`      | `'id'`  |
| `initialValue`   | `initial-value`   | Allows to pass an initial selected item for the combobox                                 | `any`         | `''`    |
| `isClearable`    | `is-clearable`    | Marks the field as clearable, allowing an icon to delete its content                     | `boolean`     | `false` |
| `items`          | --                | Items which can be selected                                                              | `ComboItem[]` | `[]`    |
| `label`          | `label`           | Label to describe the radio group                                                        | `string`      | `''`    |
| `valueField`     | `value-field`     | Chooses which field of an item object should be used to create the list and be filtered. | `string`      | `'id'`  |


## Events

| Event                  | Description | Type                |
| ---------------------- | ----------- | ------------------- |
| `ketchupComboSelected` |             | `CustomEvent<void>` |


## Methods

### `closeCombo() => void`

Programmatically close the combo box

#### Returns

Type: `void`



### `openCombo() => void`

Programmatically opens the combo box

#### Returns

Type: `void`




## CSS Custom Properties

| Name                                                           | Description                                           |
| -------------------------------------------------------------- | ----------------------------------------------------- |
| `--cmb_border-color, --kup-combo_input_border-color`           | Specifies the border color                            |
| `--cmb_border-color--selected, --kup-combo_input_border-color` | Specifies the border color when focused               |
| `--cmb_font-size, --kup-combo_input_font-size`                 | Regulates sizes of the font and the icon              |
| `--cmb_icon-color, --kup-combo_icon_color`                     | Base icon color                                       |
| `--cmb_icon-color--hover, --kup-combo_icon_color--hover`       | Icon color when hovered                               |
| `--cmb_menu-background, --kup-combo_menu_background`           | Specify menu background                               |
| `--cmb_tr-duration, --kup-combo_input_transition-duration`     | Animation duration of all animations of the component |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
