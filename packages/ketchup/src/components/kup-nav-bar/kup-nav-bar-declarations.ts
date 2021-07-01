import { KupEventPayload } from "../../types/GenericTypes";

/**
 * Props of the kup-nav-bar component.
 * Used to export every prop in an object.
 */
export enum KupNavBarProps {
    customStyle = 'Custom style of the component.',
    data = 'The actual data of the nav bar.',
    mode = 'Defines how the bar will be displayed.',
}
export interface ComponentNavBarData {
    title: string;
    menuAction?: ComponentNavBarElement;
    menuActions?: ComponentNavBarElement[];
    optionActions?: ComponentNavBarElement[];
}

export interface ComponentNavBarElement {
    icon: string;
    tooltip?: string;
    text?: string;
    value: string;
    visible?: boolean;
}

export enum ComponentNavBarMode {
    DEFAULT = '',
    SHORT = 'short',
    SHORT_COLLAPSED = 'short-collapsed',
    FIXED = 'fixed',
    PROMINENT = 'prominent',
    DENSE = 'dense',
}

export function getClassNameByComponentMode(mode: string) {
    let value: string = '';

    switch (mode) {
        case ComponentNavBarMode.DEFAULT: {
            break;
        }
        case ComponentNavBarMode.SHORT_COLLAPSED: {
            value = 'mdc-top-app-bar--short mdc-top-app-bar--short-collapsed';
            break;
        }
        default: {
            value = 'mdc-top-app-bar--' + mode;
            break;
        }
    }
    return value;
}

export interface KupNavbarEventPayload extends KupEventPayload {
    value: any;
}