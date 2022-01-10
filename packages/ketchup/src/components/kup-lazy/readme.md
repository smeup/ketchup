# kup-lazy



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                                                                                                             | Type                                                                  | Default              |
| ----------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | -------------------- |
| `componentName`   | `component-name`   | Sets the tag name of the component to be lazy loaded.                                                                                   | `string`                                                              | `null`               |
| `customStyle`     | `custom-style`     | Custom style of the component.                                                                                                          | `string`                                                              | `''`                 |
| `data`            | --                 | Sets the data of the component to be lazy loaded.                                                                                       | `GenericObject`                                                       | `null`               |
| `renderMode`      | `render-mode`      | Decides when the sub-component should be rendered. By default when both the component props exist and the component is in the viewport. | `KupLazyRender.BOTH \| KupLazyRender.PROPS \| KupLazyRender.VIEWPORT` | `KupLazyRender.BOTH` |
| `showPlaceholder` | `show-placeholder` | Displays an animated SVG placeholder until the component is loaded.                                                                     | `boolean`                                                             | `true`               |


## Events

| Event             | Description                             | Type                           |
| ----------------- | --------------------------------------- | ------------------------------ |
| `kup-lazy-loaded` | Triggered when the component is loaded. | `CustomEvent<KupEventPayload>` |


## Methods

### `getComponent() => Promise<HTMLElement>`

Returns the HTMLElement of the component to lazy load.

#### Returns

Type: `Promise<HTMLElement>`

Lazy loaded component.

### `getProps(descriptions?: boolean) => Promise<GenericObject>`

Used to retrieve component's props values.

#### Returns

Type: `Promise<GenericObject>`

List of props as object, each key will be a prop.

### `refresh() => Promise<void>`

This method is used to trigger a new render of the component.

#### Returns

Type: `Promise<void>`



### `setProps(props: GenericObject) => Promise<void>`

Sets the props to the component.

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                           | Description                                        |
| ------------------------------ | -------------------------------------------------- |
| `--kup-lazy-animation-time`    | Sets the duration of the animation.                |
| `--kup-lazy-hor-alignment`     | Sets the horizontal alignment of the subcomponent. |
| `--kup-lazy-placeholder-color` | Sets color of the placeholder icon.                |
| `--kup-lazy-ver-alignment`     | Sets the vertical alignment of the subcomponent.   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
