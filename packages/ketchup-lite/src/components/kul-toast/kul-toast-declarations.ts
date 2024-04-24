import { KulImagePropsInterface } from '../kul-image/kul-image-declarations';

export type KulToastEvents = 'ready' | 'unmount';

export enum KulToastProps {
    kulCloseCallback = 'Callback invoked when the toast is closed.',
    kulCloseIcon = 'Sets the props of the clickable icon used to close the toast.',
    kulIcon = 'Sets the props of an optional icon that will be displayed along with the message.',
    kulMessage = 'Sets the message of the toast.',
    kulStyle = "Enables customization of the component's style.",
    kulTimer = 'When kulTimer is set with a number, the toast will close itself after the specified amount of time (in ms).',
}

export interface KulToastPropsInterface {
    kulCloseCallback?: () => void;
    kulCloseIcon?: KulImagePropsInterface;
    kulIcon?: KulImagePropsInterface;
    kulMessage?: string;
    kulStyle?: string;
    kulTimer?: number;
}
