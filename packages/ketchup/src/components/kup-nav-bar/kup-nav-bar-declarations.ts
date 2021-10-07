export const navbarClass = 'nav-bar';
/**
 * Props of the kup-nav-bar component.
 * Used to export every prop in an object.
 */
export enum KupNavBarProps {
    customStyle = 'Custom style of the component.',
    image = "Image displayed by the nav bar, uses the kup-image component's props.",
    label = 'Text displayed by the nav bar.',
    showMenuButton = 'When true, the menu button will be displayed on the left of the nav bar.',
    styling = 'Defines the style of the nav bar',
}
/**
 * Styling modes of the nav bar.
 */
export enum KupNavBarStyling {
    SHORT = 'short',
    STANDARD = 'standard',
}
