# kup-magic-box



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                    | Type                                                                                                                                                | Default                                                                                                                                                                                           |
| ------------- | -------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `customStyle` | `custom-style` | Custom style of the component. | `string`                                                                                                                                            | `''`                                                                                                                                                                                              |
| `features`    | --             | Specify features to test.      | `{ debug: boolean; language: boolean; longCycleProp: boolean; longCycleVar: boolean; objects: boolean; objectsFunction: boolean; theme: boolean; }` | `{         debug: false,         language: false,         longCycleProp: false,         longCycleVar: false,         objects: false,         objectsFunction: false,         theme: false,     }` |


## Methods

### `printLifecycleTime() => Promise<{ id: string; featuresTime: number; fullTime: number; }>`

This method is used to trigger a new render of the component.

#### Returns

Type: `Promise<{ id: string; featuresTime: number; fullTime: number; }>`



### `refresh() => Promise<void>`

This method is used to trigger a new render of the component.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
