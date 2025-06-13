import type { FComponent } from '../../types/GenericTypes';
/**
 * Props of the f-one-button component.
 */
export interface FOneButtonProps extends FComponent {
    data?: FOneButtonData[];
    onBlur?: (index: number, event: FocusEvent) => void;
    onChange?: (index: number, event: Event) => void;
    onFocus?: (index: number, event: FocusEvent) => void;
}
/**
 * The object of a single one button.
 */
export interface FOneButtonData {
    label: string;
    icon?: string;
}
