import type { FComponent } from '../../types/GenericTypes';
/**
 * Props of the f-switch component.
 */
export interface FSwitchProps extends FComponent {
    checked?: boolean;
    disabled?: boolean;
    label?: string;
    leadingLabel?: boolean;
    onBlur?: (event: FocusEvent) => void;
    onClick?: (event: MouseEvent) => void;
    onChange?: (event: Event) => void;
    onFocus?: (event: FocusEvent) => void;
    sizing?: FSwitchSizing;
}

/**
 * Types of the f-chip component.
 * @enum {string}
 * @property {string} SMALL - Small size: height = 24px
 * @property {string} MEDIUM - Medium size: height = 32px (default)
 */

export enum FSwitchSizing { // GenericTypes to be studied because small chips goes with small button/textfield but has different sizes
    SMALL = 'small',
    MEDIUM = 'medium',
}
