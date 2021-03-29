/**
 * Props of the kup-spinner component.
 * Used to export every prop in an object.
 */
export enum KupSpinnerProps {
    active = 'When set to true the spinner is animating.',
    barVariant = 'Defaults at false. When set to true, the component is disabled.',
    customStyle = 'Max number of stars (default 5)',
    dimensions = 'Width and height of the spinner. For the bar variant, only height.',
    fader = 'Places a blend modal over the wrapper to darken the view (or lighten, when the theme is dark).',
    faderTimeout = 'The time required for the "fader" to trigger.',
    fullScreen = 'When set to true the component will fill the whole viewport.',
    layout = 'Sets the layout of the spinner.',
}
