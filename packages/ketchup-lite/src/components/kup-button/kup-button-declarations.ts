import { KupEventPayload } from '../../types/GenericTypes';

export interface KupButtonEventPayload extends KupEventPayload {
    originalEvent: Event;
    value: string;
}

export type KupButtonEvents = 'blur' | 'click' | 'focus';

export enum KupButtonProps {
    buttonType = 'Defines the button type attribute.',
    checked = 'If true, the button is marked as checked.',
    customStyle = 'Sets a custom CSS style for the component.',
    disabled = 'When true, the component is disabled.',
    icon = 'Specifies an icon to display.',
    iconOff = 'Icon to be used for the off state when the button is toggable.',
    label = 'Defines text to display on the button.',
    showSpinner = 'When true, a spinner will be shown on the button.',
    styling = 'Defines the button appearance. Possible values are "flat", "floating", "icon", "outlined", and "raised". The default is "raised".',
    toggable = 'Makes the button toggable between an on and off state.',
    trailingIcon = 'If set, displays an icon after the text.',
}

export type KupButtonStates = 'off' | 'on';

export type KupButtonStyling =
    | 'flat'
    | 'floating'
    | 'icon'
    | 'outlined'
    | 'raised';
