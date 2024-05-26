import { KulEventPayload } from '../../types/GenericTypes';

export type KulSwitchEvent =
    | 'blur'
    | 'change'
    | 'focus'
    | 'pointerdown'
    | 'ready';

export interface KulSwitchEventPayload extends KulEventPayload {
    value: string;
}

export enum KulSwitchProps {
    kulDisabled = 'When true, the component is disabled.',
    kulLabel = 'Defines text to display along with the switch.',
    kulLeadingLabel = ' Defaults at false. When set to true, the label will be displayed before the component',
    kulRipple = 'When set to true, the pointerdown event will trigger a ripple effect.',
    kulStyle = 'Sets a custom CSS style for the component.',
    kulValue = 'If true, the button is marked as checked.',
}

export interface KulSwitchPropsInterface {
    kulDisabled?: boolean;
    kulLabel?: string;
    kulLeadingLabel?: boolean;
    kulRipple?: boolean;
    kulStyle?: string;
    kulValue?: boolean;
}

export type KulSwitchState = 'off' | 'on';
