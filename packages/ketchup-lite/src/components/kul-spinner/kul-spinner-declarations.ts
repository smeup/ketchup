export type KulSpinnerEvent = 'ready';

export enum KulSpinnerProps {
    kulActive = 'Specifies if the spinner is animating.',
    kulBarVariant = 'Controls if the component displays as a bar or a spinner.',
    kulDimensions = 'Defines the width and height of the spinner. In the bar variant, it specifies only the height.',
    kulFader = 'Applies a blending modal over the component to darken or lighten the view, based on the theme.',
    kulFaderTimeout = 'Duration needed for the fader to become active.',
    kulFullScreen = 'Fills the entire viewport when enabled.',
    kulLayout = 'Selects the spinner layout.',
    kulStyle = 'Sets a custom style for the component.',
}

export interface KulSpinnerPropsInterface {
    kulActive: boolean;
    kulBarVariant: boolean;
    kulDimensions: string;
    kulFader: boolean;
    kulFaderTimeout: number;
    kulFullScreen: boolean;
    kulLayout: number;
    kulStyle: string;
}
