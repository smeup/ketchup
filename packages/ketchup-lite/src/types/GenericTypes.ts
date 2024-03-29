import { ComponentInterface } from '@stencil/core';
import { KulButtonEvents } from '../components/kul-button/kul-button-declarations';
import { KulImageEvents } from '../components/kul-image/kul-image-declarations';
import { KulCardEvents } from '../components/kul-card/kul-card-declarations';
import { KulBadgeEvents } from '../components/kul-badge/kul-badge-declarations';

/**
 * Generic KulComponent.
 */
export interface KulComponent extends ComponentInterface {
    kulStyle: string;
    debugInfo?: {
        endTime: number;
        renderCount: number;
        renderEnd: number;
        renderStart: number;
        startTime: number;
    };
    rootElement?: unknown;
    getProps?: (descriptions?: boolean) => Promise<GenericObject>;
    refresh?: () => Promise<void>;
}
/**
 * Resizable KulComponent.
 */
export interface ResizableKulComponent extends KulComponent {
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
export interface GenericObject<T = unknown> {
    [index: string]: T;
}
/**
 * Generic payload of a kul event.
 */
export interface KulEventPayload {
    comp: unknown;
    eventType:
        | KulBadgeEvents
        | KulButtonEvents
        | KulCardEvents
        | KulImageEvents;
    id: string;
    originalEvent: Event;
}
/**
 * Ketchup elements tag names.
 */
export enum KulTagNames {
    ACCORDION = 'KUP-ACCORDION',
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
    TIME_PICKER = 'KUP-TIME-PICKER',
    TOOLTIP = 'KUP-TOOLTIP',
    TREE = 'KUP-TREE',
}
