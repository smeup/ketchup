# wup-text-field



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute         | Description                                                                               | Type      | Default |
| ----------------- | ----------------- | ----------------------------------------------------------------------------------------- | --------- | ------- |
| `disabled`        | `disabled`        | Defaults at false. When set to true, the component is disabled.                           | `boolean` | `false` |
| `fullwidth`       | `fullwidth`       | Defaults at false. When set to true, the component will be rendered at full width.        | `boolean` | `false` |
| `helper`          | `helper`          | Defaults at null. When set, its content will be shown as a help text below the field.     | `string`  | `null`  |
| `helperwhenfocus` | `helperwhenfocus` | Defaults at false. When set, the helper will be shown only when the field is focused.     | `boolean` | `false` |
| `icon`            | `icon`            | Defaults at null. When set, the text-field will show this icon.                           | `string`  | `null`  |
| `initialvalue`    | `initialvalue`    | Sets the initial value of the component                                                   | `string`  | `''`    |
| `label`           | `label`           | Defaults at null. When set, its content will be shown as a label.                         | `string`  | `null`  |
| `labelleft`       | `labelleft`       | Defaults at null. When set, its content will be shown as a label to the left in a form.   | `string`  | `null`  |
| `labelright`      | `labelright`      | Defaults at null. When set, its content will be shown as a label to the right in a form.  | `string`  | `null`  |
| `maxlength`       | `maxlength`       | Defaults at null. When set, the helper will display a character counter.                  | `number`  | `null`  |
| `outlined`        | `outlined`        | Defaults at false. When set to true, the component will be rendered as an outlined field. | `boolean` | `false` |
| `rounded`         | `rounded`         | Defaults at false. When set to true, the button will be rendered with rounded edges.      | `boolean` | `false` |
| `textarea`        | `textarea`        | Defaults at false. When set to true, the component will be rendered as a textarea.        | `boolean` | `false` |
| `trailingicon`    | `trailingicon`    | Defaults at null. When set, the icon will be shown after the text.                        | `boolean` | `false` |


## Events

| Event                | Description | Type                              |
| -------------------- | ----------- | --------------------------------- |
| `kupTextFieldBlur`   |             | `CustomEvent<{ value: string; }>` |
| `kupTextFieldChange` |             | `CustomEvent<{ value: string; }>` |
| `kupTextFieldClick`  |             | `CustomEvent<{ value: string; }>` |
| `kupTextFieldFocus`  |             | `CustomEvent<{ value: string; }>` |
| `kupTextFieldInput`  |             | `CustomEvent<{ value: string; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
