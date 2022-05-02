# kup-lazy



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute      | Description                                                              | Type            | Default |
| ------------------ | -------------- | ------------------------------------------------------------------------ | --------------- | ------- |
| `customStyle`      | `custom-style` | Custom style of the component.                                           | `string`        | `''`    |
| `placeholderAttrs` | --             | Html attributes of the picture before the component enters the viewport. | `GenericObject` | `{}`    |
| `resourceAttrs`    | --             | Html attributes of the picture after the component enters the viewport.  | `GenericObject` | `{}`    |
| `threshold`        | `threshold`    | Percentage of the component dimensions entering the viewport (0.1 => 1). | `number`        | `0.25`  |


## Events

| Event                            | Description                               | Type                           |
| -------------------------------- | ----------------------------------------- | ------------------------------ |
| `kup-photoframe-placeholderload` | Triggered when the placeholder is loaded. | `CustomEvent<KupEventPayload>` |
| `kup-photoframe-resourceload`    | Triggered when the resource is loaded.    | `CustomEvent<KupEventPayload>` |


## Methods

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

| Name                             | Description                                             |
| -------------------------------- | ------------------------------------------------------- |
| `--kup-photoframe-border`        | Sets the border of the component.                       |
| `--kup-photoframe-fade-out-time` | Sets the time of the plcaeholder's fade out transition. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
