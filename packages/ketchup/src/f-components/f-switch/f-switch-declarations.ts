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
}
