import { FComponent } from '../../types/GenericTypes';

/**
 * Props of the f-switch component.
 */
export interface FSwitchProps extends FComponent {
    checked?: boolean;
    disabled?: boolean;
    label?: string;
    leadingLabel?: boolean;
}
