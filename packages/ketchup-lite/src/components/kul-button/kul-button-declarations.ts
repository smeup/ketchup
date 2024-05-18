import { KulEventPayload } from '../../types/GenericTypes';

export interface KulButtonEventPayload extends KulEventPayload {
    value: string;
}

export type KulButtonEvent =
    | 'blur'
    | 'click'
    | 'focus'
    | 'pointerdown'
    | 'ready';

export enum KulButtonProps {
    kulDisabled = 'When true, the component is disabled.',
    kulIcon = 'Specifies an icon to display.',
    kulIconOff = 'Icon to be used for the off state when the button is toggable.',
    kulLabel = 'Defines text to display on the button.',
    kulRipple = 'When set to true, the pointerdown event will trigger a ripple effect.',
    kulShowSpinner = 'When true, a spinner will be shown on the button.',
    kulStyle = 'Sets a custom CSS style for the component.',
    kulStyling = 'Defines the button appearance. Possible values are "flat", "floating", "icon", "outlined", and "raised". The default is "raised".',
    kulToggable = 'Makes the button toggable between an on and off state.',
    kulTrailingIcon = 'If set, displays an icon after the text.',
    kulType = 'Defines the button type attribute.',
    kulValue = 'If true, the button is marked as checked.',
}

export interface KulButtonPropsInterface {
    kulDisabled?: boolean;
    kulIcon?: string;
    kulIconOff?: string;
    kulLabel?: string;
    kulRipple?: boolean;
    kulShowSpinner?: boolean;
    kulStyle?: string;
    kulStyling?: KulButtonStyling;
    kulToggable?: boolean;
    kulTrailingIcon?: boolean;
    kulType?: 'button' | 'submit' | 'reset';
    kulValue?: boolean;
}

export type KulButtonState = 'off' | 'on';

export type KulButtonStyling =
    | 'flat'
    | 'floating'
    | 'icon'
    | 'outlined'
    | 'raised';
