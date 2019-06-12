# kup-radio



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                                                              | Type                    | Default                        |
| ---------------- | ----------------- | ---------------------------------------------------------------------------------------- | ----------------------- | ------------------------------ |
| `direction`      | `direction`       | Direction in which the radio elements must be placed                                     | `string`                | `'horizontal'`                 |
| `displayedField` | `displayed-field` | Chooses which field of an item object should be used to create the list and be filtered. | `string`                | `'id'`                         |
| `initialValue`   | --                | Allows to pass an initial selected item for the Radio group                              | `KetchupRadioElement`   | `KetchupRadioElementFactory()` |
| `items`          | --                | Radio elements to display                                                                | `KetchupRadioElement[]` | `[]`                           |
| `label`          | `label`           | Label to describe the radio group                                                        | `string`                | `''`                           |
| `radioName`      | `radio-name`      | Radio elements value                                                                     | `string`                | `''`                           |
| `valueField`     | `value-field`     | Chooses which field of an item object should be used to create the list and be filtered. | `string`                | `'id'`                         |


## Events

| Event                 | Description                                            | Type                                    |
| --------------------- | ------------------------------------------------------ | --------------------------------------- |
| `ketchupRadioChanged` | When currently selected radio button has been changed. | `CustomEvent<KupPayloadEvent<any,any>>` |


## CSS Custom Properties

| Name                                                    | Description                                                |
| ------------------------------------------------------- | ---------------------------------------------------------- |
| `--rad_border-color, --kup-radio_border-color`          | Set default color of external border of the radio element  |
| `--rad_border-color--selected --kup-radio_border-color` | Set selected color of external border of the radio element |
| `--rad_color, --kup-radio_color`                        | Sets radio element color when selected radio appears       |
| `--rad_font-size, --kup-radio_font-size`                | Sets font size and icon radio button size (size * 1.4)     |
| `--rad_tr-duration, --kup-radio_transition-duration`    | Sets all components transitions duration                   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
