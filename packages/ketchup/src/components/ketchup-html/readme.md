# ketchup-html



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                                           | Type      | Default                    |
| ---------- | ----------- | ----------------------------------------------------- | --------- | -------------------------- |
| `isButton` | `is-button` | If true, the ketchup-html takes the shape of a button | `boolean` | `false`                    |
| `label`    | `label`     | The label to show when button isButton is active      | `string`  | `'Apri in nuova finestra'` |
| `src`      | `src`       | The address which must be referenced by the iframe    | `string`  | `''`                       |


## Events

| Event               | Description                                | Type                |
| ------------------- | ------------------------------------------ | ------------------- |
| `ketchupHtmlError`  | When loading the frame has thrown an error | `CustomEvent<void>` |
| `ketchupHtmlLoaded` | When the iframe has been loaded            | `CustomEvent<void>` |


## CSS Custom Properties

| Name                              | Description                                                |
| --------------------------------- | ---------------------------------------------------------- |
| `--htm_height, --kup-html_height` | Specifies the height the frame must have. Default: 600px ; |
| `--htm_width, --kup-html_width`   | Specifies the width of the frame Default: 100% ;           |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
