import type { FComponent, KupComponentSizing } from '../../types/GenericTypes';
/**
 * Props of the f-text-field component.
 */
export interface FTextFieldProps extends FComponent {
    alert?: string;
    allowNegative?: boolean;
    decimals?: number;
    disabled?: boolean;
    error?: string;
    fullHeight?: boolean;
    fullWidth?: boolean;
    group?: boolean;
    helper?: string;
    helperIcon?: boolean;
    helperEnabled?: boolean;
    helperWhenFocused?: boolean;
    showCounter?: boolean;
    icon?: string;
    inputMode?: string;
    inputType?: string;
    precision?: number;
    max?: number;
    maxLength?: number;
    min?: number;
    isClearable?: boolean;
    label?: string;
    leadingLabel?: boolean;
    legacyLook?: boolean;
    lightMode?: boolean;
    name?: string;
    placeholder?: string;
    outlined?: boolean;
    quantityButtons?: boolean;
    readOnly?: boolean;
    isSelect?: boolean;
    shaped?: boolean;
    size?: number;
    sizing?: KupComponentSizing;
    step?: number;
    textArea?: boolean;
    trailingIcon?: boolean;
    trailingLabel?: boolean;
    value?: string;
    showMarker?: boolean;
    autocomplete?: string;
    onBlur?: (event: FocusEvent) => void;
    onClick?: (event: MouseEvent) => void;
    onChange?: (event: UIEvent) => void;
    onFocus?: (event: FocusEvent) => void;
    onInput?: (event: UIEvent) => void;
    onKeyDown?: (event: KeyboardEvent) => void;
    onIconClick?: (event: MouseEvent) => void;
    onClearIconClick?: (event: MouseEvent) => void;
    onMinusClick?: (event: MouseEvent) => void;
    onPlusClick?: (event: MouseEvent) => void;
}
