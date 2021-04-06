/**
 * Props of the kup-tab-bar component.
 * Used to export every prop in an object.
 */
export enum KupTabBarProps {
    customStyle = 'Custom style of the component.',
    data = 'List of elements.',
}
export interface ComponentTabBarElement {
    text?: string;
    icon?: string;
    active?: boolean;
    title?: string;
}
