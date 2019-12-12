# kup-menu



<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute              | Description                                                                                                                                                                                                                                                                                                                                            | Type          | Default |
| ------------------------ | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- | ------- |
| `closeOnOuterClick`      | `close-on-outer-click` | When set to true, the menu will automatically close when the user clicks outside of its deactivationRelativeTo prop.                                                                                                                                                                                                                                   | `boolean`     | `true`  |
| `deactivationRelativeTo` | --                     | HTML element ancestor of the current kup-menu instance. When closeOnOuterClick is set to true, the menu will search for this element inside the event path: if found, then the menu will not be closed. If left to null, the component will automatically use the element provided by positionRelativeTo prop.                                         | `HTMLElement` | `null`  |
| `isActive`               | `is-active`            | Open or closes the menu. The menu itself can edit this prop.                                                                                                                                                                                                                                                                                           | `boolean`     | `false` |
| `margin`                 | `margin`               | Specifies how many pixels will be use to separate the menu from its positionRelativeTo element.                                                                                                                                                                                                                                                        | `number`      | `0`     |
| `positionRelativeTo`     | --                     | Forces the menu to open on a given position. The default value allows the menu to open itself in the best position according to its calculation. The element relative to which the menu will be opened in a given position. If left to null, once, when the component menu is mounted, this prop will be automatically set to the parent HTML element. | `HTMLElement` | `null`  |


## Events

| Event              | Description | Type                |
| ------------------ | ----------- | ------------------- |
| `ketchupMenuClose` |             | `CustomEvent<void>` |


## CSS Custom Properties

| Name                                                      | Description                                                         |
| --------------------------------------------------------- | ------------------------------------------------------------------- |
| `--mnu_background, --kup-menu_background`                 | The menu background color.                                          |
| `--mnu_border-radius, --kup-menu_border-radius`           | The border radius of the external menu.                             |
| `--mnu_content-max-height, --kup-menu_content-max-height` | The maximum height of the area reserved to the menu content.        |
| `--mnu_content-max-width, --kup-menu_content-max-width`   | The maximum width of the the area reserved to the menu content.     |
| `--mnu_shadow, --kup-menu_shadow`                         | The shadow box of the menu.                                         |
| `--mnu_tr-duration, --kup-menu_transition-duration`       | The duration of all menu transitions. Does not influence its slots. |
| `--mnu_z-index, --kup-menu_z-index`                       | the z-index of the menu.                                            |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
