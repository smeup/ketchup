import type { FComponent } from '../../types/GenericTypes';
/**
 * Props of the f-rating component.
 */
export interface FRatingProps extends FComponent {
    disabled?: boolean;
    maxValue?: number;
    value?: number;
    onClick?: (i: number, event: MouseEvent) => void;
}
