import type { FComponent } from '../../types/GenericTypes';
/**
 * Props of the f-checkbox component.
 */
export interface FCheckboxProps extends FComponent {
    checked?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    label?: string;
    leadingLabel?: boolean;
    onClick?: (event: MouseEvent) => void;
    onBlur?: (event: FocusEvent) => void;
    onFocus?: (event: FocusEvent) => void;
    onChange?: (event: Event) => void;
}
