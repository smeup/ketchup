/**
 * Generic KupComponent.
 */
export interface KupComponent extends HTMLElement {
    customStyle: string;
    customStyleTheme: string;
    debugInfo: {
        endTime: number;
        renderCount: number;
        renderEnd: number;
        renderStart: number;
        startTime: number;
    };
    getProps?: (descriptions?: boolean) => Promise<GenericObject>;
    refresh?: () => Promise<void>;
    rootElement: KupComponent;
    themeChangeCallback: Function;
}
/**
 * Resizable KupComponent.
 */
export interface ResizableKupComponent extends KupComponent {
    resizeCallback: () => {};
}
/**
 * Props in common with every f-component.
 */
export interface FComponent {
    danger?: boolean;
    dataSet?: GenericObject;
    id?: string;
    info?: boolean;
    secondary?: boolean;
    success?: boolean;
    title?: string;
    warning?: boolean;
    wrapperClass?: string;
}
/**
 * Generic map.
 */
export interface GenericMap {
    [index: string]: string;
}
/**
 * Generic object.
 */
export interface GenericObject {
    [index: string]: any;
}
/**
 * Generic payload of a kup event.
 */
export interface KupEventPayload {
    comp: any;
    id: string;
}
/**
 * Ketchup elements tag names.
 */
export enum KupTagNames {
    ACCORDION = 'KUP-ACCORDION',
    ACTIVITY_TIMELINE = 'KUP-ACTIVITY-TIMELINE',
    AUTOCOMPLETE = 'KUP-AUTOCOMPLETE',
    BADGE = 'KUP-BADGE',
    BOX = 'KUP-BOX',
    BUTTON = 'KUP-BUTTON',
    BUTTON_LIST = 'KUP-BUTTON-LIST',
    CALENDAR = 'KUP-CALENDAR',
    CARD = 'KUP-CARD',
    CARD_LIST = 'KUP-CARD-LIST',
    CELL = 'KUP-CELL',
    CHART = 'KUP-CHART',
    CHECKBOX = 'KUP-CHECKBOX',
    CHIP = 'KUP-CHIP',
    COLOR_PICKER = 'KUP-COLOR-PICKER',
    COMBOBOX = 'KUP-COMBOBOX',
    DASHBOARD = 'KUP-DASHBOARD',
    DATA_TABLE = 'KUP-DATA-TABLE',
    DATE_PICKER = 'KUP-DATE-PICKER',
    DIALOG = 'KUP-DIALOG',
    DRAWER = 'KUP-DRAWER',
    DROPDOWN_BUTTON = 'KUP-DROPDOWN-BUTTON',
    FAMILY_TREE = 'KUP-FAMILY-TREE',
    FORM = 'KUP-FORM',
    GAUGE = 'KUP-GAUGE',
    GRID = 'KUP-GRID',
    IFRAME = 'KUP-IFRAME',
    IMAGE = 'KUP-IMAGE',
    IMAGE_LIST = 'KUP-IMAGE-LIST',
    INPUT_PANEL = 'KUP-INPUT-PANEL',
    LAZY = 'KUP-LAZY',
    LIST = 'KUP-LIST',
    MAGIC_BOX = 'KUP-MAGIC-BOX',
    NAV_BAR = 'KUP-NAV-BAR',
    NUMERIC_PICKER = 'KUP-NUMERIC-PICKER',
    PLANNER = 'KUP-PLANNER',
    PROBE = 'KUP-PROBE',
    PROGRESS_BAR = 'KUP-PROGRESS-BAR',
    QLIK = 'KUP-QLIK',
    RADIO = 'KUP-RADIO',
    RATING = 'KUP-RATING',
    SNACKBAR = 'KUP-SNACKBAR',
    SPINNER = 'KUP-SPINNER',
    SWITCH = 'KUP-SWITCH',
    TAB_BAR = 'KUP-TAB-BAR',
    TEXT_FIELD = 'KUP-TEXT-FIELD',
    TOOLBAR = 'KUP-TOOLBAR',
    TYPOGRAPHY = 'KUP-TYPOGRAPHY',
    TYPOGRAPHY_LIST = 'KUP-TYPOGRAPHY-LIST',
    TIME_PICKER = 'KUP-TIME-PICKER',
    TOOLTIP = 'KUP-TOOLTIP',
    TREE = 'KUP-TREE',
    OBJECT_FIELD = 'KUP-OBJECT-FIELD',
}

/**
 * Sizing options for the button/text-field components.
 * @enum {string}
 * @property {string} EXTRA_SMALL - Small size: height = 20px
 * @property {string} SMALL - Small size: height = 32px
 * @property {string} MEDIUM - Medium size: height = 40px (default)
 * @property {string} LARGE - Large size: height = 48px
 * @property {string} EXTRA_LARGE - Max large size: height = 64px
 */
export enum KupComponentSizing {
    EXTRA_SMALL = 'extra-small',
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    EXTRA_LARGE = 'extra-large',
}
