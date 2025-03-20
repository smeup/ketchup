import type { FComponent, KupComponentSizing } from '../../types/GenericTypes';
/**
 * Props of the f-checkbox component.
 */
export interface FCheckboxProps extends FComponent {
    alert?: string;
    checked?: boolean;
    disabled?: boolean;
    error?: string;
    indeterminate?: boolean;
    label?: string;
    leadingLabel?: boolean;
    sizing?: KupComponentSizing;
    legacyLook?: boolean;
    onClick?: (event: MouseEvent) => void;
    onBlur?: (event: FocusEvent) => void;
    onFocus?: (event: FocusEvent) => void;
    onChange?: (event: Event) => void;
}
