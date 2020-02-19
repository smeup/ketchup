# wup-radio



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                          | Type                      | Default        |
| -------------- | --------------- | ------------------------------------------------------------------------------------ | ------------------------- | -------------- |
| `data`         | --              | List of elements.                                                                    | `ComponentRadioElement[]` | `[]`           |
| `disabled`     | `disabled`      | Defaults at false. When set to true, the component is disabled.                      | `boolean`                 | `false`        |
| `leadingLabel` | `leading-label` | Defaults at false. When set to true, the label will be on the left of the component. | `boolean`                 | `false`        |
| `name`         | `name`          | Defaults at null. It's the name that binds the radio buttons together.               | `string`                  | `'radio-list'` |


## Events

| Event            | Description | Type                              |
| ---------------- | ----------- | --------------------------------- |
| `kupRadioBlur`   |             | `CustomEvent<{ value: string; }>` |
| `kupRadioChange` |             | `CustomEvent<{ value: string; }>` |
| `kupRadioClick`  |             | `CustomEvent<{ value: string; }>` |
| `kupRadioFocus`  |             | `CustomEvent<{ value: string; }>` |
| `kupRadioInput`  |             | `CustomEvent<{ value: string; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
