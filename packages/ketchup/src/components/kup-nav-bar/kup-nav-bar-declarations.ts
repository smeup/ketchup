import { FImageProps } from '../../f-components/f-image/f-image-declarations';
import { KupEventPayload } from '../../types/GenericTypes';

/**
 * Props of the kup-nav-bar component.
 * Used to export every prop in an object.
 */
export enum KupNavBarProps {
    customStyle = 'Custom style of the component.',
    data = 'The actual data of the nav bar.',
    image = 'Image displayed by the nav bar.',
    label = 'Text displayed by the nav bar.',
}
/**
 * Styling modes of the nav bar.
 */
export enum KupNavBarStyling {
    DENSE = 'dense',
    FIXED = 'fixed',
    PROMINENT = 'prominent',
    SHORT = 'short',
    SHORT_COLLAPSED = 'short-collapsed',
}
