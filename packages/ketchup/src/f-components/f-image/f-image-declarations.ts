import type { KupBadge } from '../../components/kup-badge/kup-badge';
import { FComponent } from '../../types/GenericTypes';
/**
 * Props of the f-image component.
 */
export interface FImageProps extends FComponent {
    badgeData?: KupBadge[];
    color?: string;
    data?: FImageData[];
    fit?: boolean;
    resource?: string;
    sizeX?: string;
    sizeY?: string;
    onClick?: (event: MouseEvent) => void;
}
/**
 * The object of a single step of CSS when the f-image is in CSS-drawing mode.
 * @property {string} shape - Defines the type of the step.
 * @property {string} color - Background color of the step.
 * @property {string} height - Height of the step.
 * @property {boolean} width - Width of the step
 */
export interface FImageData {
    shape?: FImageShape;
    color?: string;
    height?: string;
    width?: string;
}
/**
 * The type of a CSS step in CSS-drawing mode.
 * @property {string} bar - Draws a bar.
 */
export enum FImageShape {
    BAR = 'bar',
}
