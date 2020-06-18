export interface ComponentNavBarData {
    title: string;
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
