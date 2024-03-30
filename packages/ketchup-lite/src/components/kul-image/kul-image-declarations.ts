export type KulImageEvents = 'click' | 'load';

export enum KulImageProps {
    kulBadgeData = 'Sets the data of badges.',
    kulColor = 'The color of the icon, defaults to the CSS variable --kup-icon-color.',
    kulShowSpinner = 'When set to true, a spinner will be displayed until the image finished loading. Not compatible with SVGs.',
    kulSizeX = 'The width of the icon, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).',
    kulSizeY = 'The height of the icon, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).',
    kulStyle = 'Custom style of the component.',
    kulValue = 'Defines the source URL of the image. This property is used to set the image resource that the component should display.',
}

export interface KulImagePropsInterface {
    kulBadgeData?: unknown[];
    kulColor?: string;
    kulShowSpinner?: boolean;
    kulSizeX?: string;
    kulSizeY?: string;
    kulStyle?: string;
    kulValue?: string;
}
