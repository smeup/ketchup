import type { FComponent, KupComponentSizing } from '../../types/GenericTypes';
/**
 * Props of the f-button component.
 */
export interface FButtonProps extends FComponent {
    buttonType?: string;
    checked?: boolean;
    contentAlign?: FButtonAlign;
    disabled?: boolean;
    fullHeight?: boolean;
    fullWidth?: boolean;
    icon?: string;
    iconOff?: string;
    placeholderIcon?: string;
    label?: string;
    large?: boolean;
    blackMode?: boolean;
    neutral?: boolean;
    onClick?: (event: MouseEvent) => void;
    onBlur?: (event: FocusEvent) => void;
    onFocus?: (event: FocusEvent) => void;
    pulsating?: boolean;
    shaped?: boolean;
    slim?: boolean;
    sizing?: KupComponentSizing;
    styling?: FButtonStyling;
    showSpinner?: boolean;
    toggable?: boolean;
    trailingIcon?: boolean;
    invisible?: boolean;
}
/**
 * Styling options for the f-button component.
 * @enum {string}
 * @property {string} FLAT - Flat style: no background nor borders.
 * @property {string} FLOATING - Floating action button (FAB) style: round and large.
 * @property {string} ICON - Icon button style: single icon with backdrop and no background.
 * @property {string} OUTLINED - Outlined style: no background with border.
 * @property {string} RAISED - Raised style: no border with solid background.
 */
export enum FButtonStyling {
    FLAT = 'flat',
    FLOATING = 'floating',
    ICON = 'icon',
    OUTLINED = 'outlined',
    RAISED = 'raised',
}

/**
 * Styling options for the f-button component.
 * @enum {string}
 * @property {string} CENTER - Button content align : center ( Default ).
 * @property {string} LEFT - All the content is left aligned
 * @property {string} RIGHT - All the content is right aligned.
 * @property {string} BETWEEN - The space between the content is the maximum.
 * @property {string} AROUND - The space is more around .
 * @property {string} EVENLY - The space is perfectly divided between borders and content.
 */
export enum FButtonAlign {
    CENTER = 'center',
    LEFT = 'left',
    RIGHT = 'right',
    BETWEEN = 'between',
    AROUND = 'around',
    EVENLY = 'evenly',
}
