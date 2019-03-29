# ketchup-fld



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                                           | Type               | Default     |
| -------- | --------- | ----------------------------------------------------------------------------------------------------- | ------------------ | ----------- |
| `config` | `config`  | Data the FLD must parse to fully be configured. It must be either an Object or a JSON parsable string | `object \| string` | `''`        |
| `data`   | `data`    | Effective data to pass to the component                                                               | `any`              | `undefined` |


## Events

| Event               | Description                                                                 | Type                                 |
| ------------------- | --------------------------------------------------------------------------- | ------------------------------------ |
| `ketchupFldChanged` | Launched when the value of the current FLD changes.                         | `CustomEvent<KetchupFldChangeEvent>` |
| `ketchupFldSubmit`  | Launched when the FLD values are confirmed and a submit event is triggered. | `CustomEvent<KetchupFldSubmitEvent>` |


## Methods

### `getCurrentValue() => Promise<string | object>`

Provides an interface to get the current value programmatically

#### Returns

Type: `Promise<string | object>`




## CSS Custom Properties

| Name                                            | Description                                                                  |
| ----------------------------------------------- | ---------------------------------------------------------------------------- |
| `--fld_comp-margin, --kup-fld_component-margin` | Specifies internal margin between label, submit button and dynamic component |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
