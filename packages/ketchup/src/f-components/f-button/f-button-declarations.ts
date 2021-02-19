/**
 * Props of the f-button component.
 */
export interface FButtonProps {
    checked?: boolean;
    disabled?: boolean;
    fullHeight?: boolean;
    fullWidth?: boolean;
    icon?: string;
    iconOff?: string;
    label?: string;
    shaped?: boolean;
    styling?: FButtonStyling;
    toggable?: boolean;
    trailingIcon?: boolean;
}
/**
 * Styling prop of the button component.
 * @property {string} FLAT - Flat style: no background nor borders.
 * @property {string} OUTLINED - Outlined style: no background with border.
 * @property {string} RAISED - Raised style: no border with solid background.
 */
export enum FButtonStyling {
    FLAT = 'flat',
    OUTLINED = 'outlined',
    RAISED = 'raised',
}
