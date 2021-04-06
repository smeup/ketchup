import type { FComponent } from '../../types/GenericTypes';
/**
 * Props of the f-text-field component.
 */
export interface FTextFieldProps extends FComponent {
    disabled?: boolean;
    fullHeight?: boolean;
    fullWidth?: boolean;
    helper?: string;
    helperWhenFocused?: boolean;
    icon?: string;
    initialValue?: string;
    inputType?: string;
    step?: number;
    min?: number;
    max?: number;
    isClearable?: boolean;
    label?: string;
    leadingLabel?: boolean;
    maxLength?: number;
    outlined?: boolean;
    readOnly?: boolean;
    shaped?: boolean;
    textArea?: boolean;
    trailingIcon?: boolean;
    trailingLabel?: boolean;
    value?: string;
}
