import type { FComponent } from '../../types/GenericTypes';
/**
 * Props of the f-progress-bar component.
 */
export interface FProgressBarProps extends FComponent {
    animated?: boolean;
    centeredLabel?: boolean;
    hideLabel?: boolean;
    icon?: string;
    isRadial?: boolean;
    label?: string;
    padded?: boolean;
    slim?: boolean;
    striped?: boolean;
    value?: number;
}
