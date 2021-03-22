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
}
