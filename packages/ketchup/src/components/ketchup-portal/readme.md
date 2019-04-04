# ketchup-portal



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute | Description                                                                                  | Type               | Default         |
| ----------------- | --------- | -------------------------------------------------------------------------------------------- | ------------------ | --------------- |
| `cssVarsRef`      | --        | Reference to the html element from which CSS Custom Properties must be derived               | `HTMLElement`      | `undefined`     |
| `mirroredCssVars` | --        | Array of custom css vars which needs to be mirrored. Their value is computed from cssVarsRef | `string[]`         | `[]`            |
| `nodes`           | --        | Virtual node list the KetchupPortalInstance must render                                      | `any[]`            | `undefined`     |
| `portalRootNode`  | --        | The HTML element on which the virtual node must be appended                                  | `HTMLElement`      | `document.body` |
| `refOffset`       | --        | Calculated offset of where the portal must be positioned                                     | `ElementOffset`    | `{}`            |
| `styleNode`       | --        | A style node to be copied into the KetchupPortalInstance                                     | `HTMLStyleElement` | `undefined`     |


## Events

| Event               | Description                                | Type                |
| ------------------- | ------------------------------------------ | ------------------- |
| `ketchupHtmlError`  | When loading the frame has thrown an error | `CustomEvent<void>` |
| `ketchupHtmlLoaded` | When the iframe has been loaded            | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
