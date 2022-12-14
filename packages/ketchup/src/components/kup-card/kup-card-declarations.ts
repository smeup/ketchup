import { GenericObject, KupEventPayload } from '../../types/GenericTypes';
import { KupObj } from '../../managers/kup-objects/kup-objects-declarations';
import { SourceEvent } from '../kup-date-picker/kup-date-picker-declarations';
import Picker from 'vanilla-picker';
import {
    KupDataColumn,
    KupDataDataset,
} from '../../managers/kup-data/kup-data-declarations';
import { KupFormData } from '../kup-form/kup-form-declarations';
/**
 * Props of the kup-card component.
 * Used to export every prop in an object.
 */
export enum KupCardProps {
    customStyle = 'Custom style of the component.',
    data = 'The actual data of the card.',
    isMenu = 'Defines whether the card is a menu or not. Works together with menuVisible.',
    layoutFamily = 'Sets the type of the card.',
    layoutNumber = 'Sets the number of the layout.',
    menuVisible = "Sets the status of the card as menu, when false it's hidden otherwise it's visible. Works together with isMenu.",
    sizeX = 'The width of the card, defaults to 100%. Accepts any valid CSS format (px, %, vw, etc.).',
    sizeY = 'The height of the card, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).',
}
/**
 * Options of the built-in calendar.
 */
export interface KupCardBuiltInCalendarOptions {
    initialValue?: string | KupObj;
    firstDayIndex?: number;
    resetStatus: boolean;
}
/**
 * Data of the built-in calendar.
 */
export interface KupCardBuiltInCalendarData {
    value?: Date;
    firstDayIndex?: number;
    calendarView?: SourceEvent;
    day?: number;
    month?: number;
    year?: number;
}
/**
 * Html element of the built-in calendar.
 */
export interface KupCardBuiltInCalendar extends HTMLElement {
    kupData: KupCardBuiltInCalendarData;
}
/**
 * Options of the built-in clock.
 */
export interface KupCardBuiltInClockOptions {
    initialValue?: string | KupObj;
    manageSeconds?: boolean;
    hoursActive?: boolean;
    minutesActive?: boolean;
    secondsActive?: boolean;
}
/**
 * Options of the built-in form.
 */
export interface KupCardFormOptions {
    form: KupFormData;
    errors: boolean;
    cancelCb?: () => void;
    submitCb?: () => void;
}
/**
 * Options of the built-in column drop menu.
 */
export interface KupCardColumnDropMenuOptions {
    data: KupDataDataset;
    enableFormula: boolean;
    enableMerge: boolean;
    enableMove: boolean;
    receivingColumn?: KupDataColumn;
    starterColumn?: KupDataColumn;
    formulaCb?: () => void;
    mergeCb?: () => void;
    moveCb?: () => void;
}
/**
 * Options of the built-in color picker.
 */
export interface KupCardColorPickerOptions {
    initialValue: string;
    changeCb?: (color: any) => void;
    creationCb?: (picker: Picker) => void;
}
/**
 * Element ids for built-in clock.
 */
export enum KupCardBuiltInClockElements {
    CLOCK = 'clockEl',
    HOURS = 'hoursEl',
    MINUTES = 'minutesEl',
    SECONDS = 'secondsEl',
    HOURSCIRCLE = 'hoursCircleEl',
    MINUTESCIRCLE = 'minutesCircleEl',
    SECONDSCIRCLE = 'secondsCircleEl',
}
/**
 * Data prop of the built-in clock.
 */
export interface KupCardBuiltInClockData {
    value?: string;
    manageSeconds?: boolean;
    hoursActive?: boolean;
    minutesActive?: boolean;
    secondsActive?: boolean;
}
/**
 * Html element of the built-in clock
 */
export interface KupCardBuiltInClock extends HTMLElement {
    kupData: KupCardBuiltInClockData;
}
/**
 * Options of the built-in numeric.
 */
export interface KupCardBuiltInNumericOptions {
    decimals?: boolean;
    initialValue?: string | KupObj;
    maxDecimals?: number;
    maxIntegers?: number;
    maxLength?: number;
    negative?: boolean;
    resetStatus: boolean;
}
/**
 * Data prop of the built-in numeric.
 */
export interface KupCardBuiltInNumericData {
    localeValue?: string;
    value: string;
}

/**
 * Html element of the built-in numeric
 */
export interface KupCardBuiltInNumeric extends HTMLElement {
    kupData: KupCardBuiltInNumericData;
}
/**
 * Data prop of the kup-card component.
 */
export interface KupCardData {
    autocomplete?: GenericObject[];
    button?: GenericObject[];
    cell?: GenericObject[];
    chart?: GenericObject[];
    checkbox?: GenericObject[];
    chip?: GenericObject[];
    color?: string[];
    columns?: KupDataColumn[];
    combobox?: GenericObject[];
    datatable?: GenericObject[];
    datepicker?: GenericObject[];
    image?: GenericObject[];
    list?: GenericObject[];
    object?: KupObj[];
    options?:
        | KupCardBuiltInCalendarOptions
        | KupCardBuiltInClockOptions
        | KupCardColumnDropMenuOptions
        | KupCardColorPickerOptions
        | KupCardBuiltInNumericOptions
        | KupCardFormOptions;
    progressbar?: GenericObject[];
    switch?: GenericObject[];
    tabbar?: GenericObject[];
    text?: string[];
    textfield?: GenericObject[];
    timepicker?: GenericObject[];
    tree?: GenericObject[];
}
/**
 * Layout families of the kup-card component.
 * @enum {string}
 * @property {string} BOX - Layouts tailored for kup-box.
 * @property {string} BUILT_IN - Cards belonging to this family will be created automatically by the library and will have premade behaviors.
 * @property {string} COLLAPSIBLE - Cards belonging to this family will display an area usable to expand the content of the card.
 * @property {string} DIALOG - Cards belonging to this family will be movable and usually closable.
 * @property {string} FREE - This family of card will only receive slots, usually already arranged from the outside style.
 * @property {string} SCALABLE - Content will fit its container, resizing itself automatically.
 * @property {string} STANDARD - Stndard layouts.
 */
export enum KupCardFamily {
    BOX = 'box',
    BUILT_IN = 'built-in',
    COLLAPSIBLE = 'collapsible',
    DIALOG = 'dialog',
    FREE = 'free',
    SCALABLE = 'scalable',
    STANDARD = 'standard',
}
/**
 * Recurring IDs.
 */
export enum KupCardIds {
    COLUMNS_LIST = 'columns-list',
    DIALOG_CLOSE = 'dialog-close',
    DRAG_HANDLE = 'drag-handle',
    EXPAND_ACTION = 'expand-action',
    EXTRA_COLUMNS = 'extra-columns',
    NEXT_ROW = 'next-row',
    OBJECT_CHANGE = 'object-change',
    PREVIOUS_ROW = 'previous-row',
    VIEW_SELECTOR = 'view-selector',
}
/**
 * Recurring CSS classes.
 */
export enum KupCardCSSClasses {
    BUILT_IN_CARD = 'built-in-card',
    CARD_VIEW = 'card-view',
    CLICKABLE_LINK = 'clickable-link',
    COLLAPSIBLE_ACTIVE = 'collapsible-active',
    COLLAPSIBLE_CARD = 'collapsible-card',
    COLLAPSIBLE_ELEMENT = 'collapsible-element',
    COLLAPSIBLE_WRAPPER = 'collapsible-wrapper',
    DIALOG_TITLE = 'dialog-title',
    DIALOG_UNRESIZABLE = 'dialog-unresizable',
    EXPANDED = 'expanded',
    HAS_ACTIONS = 'has-actions',
    HAS_CONTENT = 'has-content',
    HEADER_BAR = 'header-bar',
    VIEW_PREFIX = 'view-',
    VISIBLE = 'visible',
}
/**
 * Internally-handled sub-component events.
 */
export enum KupCardSubEvents {
    AUTOCOMPLETE_BLUR = 'kup-autocomplete-blur',
    AUTOCOMPLETE_ITEMCLICK = 'kup-autocomplete-itemclick',
    BUTTON_CLICK = 'kup-button-click',
    CHIP_BLUR = 'kup-chip-blur',
    CHIP_ICONCLICK = 'kup-chip-iconclick',
    TABBAR_CLICK = 'kup-tabbar-click',
    TREE_NODESELECTED = 'kup-tree-nodeselected',
}

export interface KupCardClickPayload extends KupEventPayload {
    value: string;
}

export interface KupCardEventPayload extends KupEventPayload {
    event: any;
}
