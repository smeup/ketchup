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
    inputType?: string;
    max?: number;
    maxLength?: number;
    min?: number;
    isClearable?: boolean;
    label?: string;
    leadingLabel?: boolean;
    outlined?: boolean;
    readOnly?: boolean;
    shaped?: boolean;
    step?: number;
    textArea?: boolean;
    trailingIcon?: boolean;
    trailingLabel?: boolean;
    value?: string;
    onBlur?: (event: FocusEvent) => void;
    onClick?: (event: MouseEvent) => void;
    onChange?: (event: UIEvent) => void;
    onFocus?: (event: FocusEvent) => void;
    onInput?: (event: UIEvent) => void;
    onKeyDown?: (event: KeyboardEvent) => void;
    onIconClick?:(event: MouseEvent)=>void;
    onClearIconClick?: (event:MouseEvent)=>void;
}
