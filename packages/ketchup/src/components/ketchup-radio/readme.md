# ketchup-radio



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                                                              | Type                    | Default        |
| ---------------- | ----------------- | ---------------------------------------------------------------------------------------- | ----------------------- | -------------- |
| `direction`      | `direction`       | Direction in which the radio elements must be placed                                     | `string`                | `'horizontal'` |
| `displayedField` | `displayed-field` | Chooses which field of an item object should be used to create the list and be filtered. | `string`                | `'id'`         |
| `items`          | --                | Radio elements to display                                                                | `KetchupRadioElement[]` | `[]`           |
| `label`          | `label`           | Label to describe the radio group                                                        | `string`                | `''`           |
| `radioName`      | `radio-name`      | Radio elements value                                                                     | `string`                | `''`           |
| `valueField`     | `value-field`     | Chooses which field of an item object should be used to create the list and be filtered. | `string`                | `'id'`         |


## Events

| Event                 | Description | Type                |
| --------------------- | ----------- | ------------------- |
| `ketchupRadioChanged` |             | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
