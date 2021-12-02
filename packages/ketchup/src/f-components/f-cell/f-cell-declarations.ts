import type { VNode } from '@stencil/core';
import type {
    Cell,
    Column,
    Row,
} from '../../components/kup-data-table/kup-data-table-declarations';
import type { FComponent, KupEventPayload } from '../../types/GenericTypes';

export const cellUpdateEvent = 'kup-cell-update';
/**
 * Props of the f-cell component.
 */
export interface FCellProps extends FComponent {
    cell?: Cell;
    column?: Column;
    component?: unknown;
    density?: FCellPadding;
    editable?: boolean;
    indents?: VNode[];
    previousValue?: string;
    renderKup?: boolean;
    row?: Row;
    setSizes?: boolean;
    shape?: FCellShapes;
}
/**
 * Information about the cell, displayed before the content.
 */
export interface FCellInfo {
    color?: string;
    icon?: string;
    message: string;
}
/**
 * Supported cell padding.
 */
export enum FCellPadding {
    DENSE = 'dense',
    MEDIUM = 'medium',
    NONE = '',
    WIDE = 'wide',
}
/**
 * Supported cell CSS classes.
 */
export enum FCellClasses {
    BG_DANGER = 'danger-bg',
    BG_GREEN = 'green-bg',
    BG_GREY = 'grey-bg',
    BG_ORANGE = 'orange-bg',
    BG_PURPLE = 'purple-bg',
    BG_SUCCESS = 'success-bg',
    BG_TEAL = 'teal-bg',
    BG_WARNING = 'warning-bg',
    C_BG_DANGER = 'c-danger-bg',
    C_BG_GREEN = 'c-green-bg',
    C_BG_GREY = 'c-grey-bg',
    C_BG_ORANGE = 'c-orange-bg',
    C_BG_PURPLE = 'c-purple-bg',
    C_BG_SUCCESS = 'c-success-bg',
    C_BG_TEAL = 'c-teal-bg',
    C_BG_WARNING = 'c-warning-bg',
    C_CENTERED = 'c-centered',
    C_FITTED = 'c-fitted',
    C_PADDED = 'c-padded',
    C_PADDED_HOR = 'c-padded-hor',
    C_PADDED_VER = 'c-padded-ver',
    C_ROUND = 'c-round',
    C_RIGHT_ALIGNED = 'c-right-aligned',
    C_SHAPED = 'c-shaped',
    C_TEXT_VERTICAL = 'c-vertical-text',
    CLICKABLE = 'clickable',
    HOVER_DISPLAY = 'display-on-hover',
    HOVER_EXPAND = 'expand-on-hover',
    HOVER_REDUCE = 'reduce-on-hover',
    INDICATOR_TOPRIGHT = 'top-right-indicator',
    LINK = 'link',
    MONOSPACE = 'monospace',
    OBJ = 'obj',
    SHAPED = 'shaped',
    TEXT_DANGER = 'danger-text',
    TEXT_INFO = 'info-text',
    TEXT_PRIMARY = 'primary-text',
    TEXT_PURPLE = 'purple-text',
    TEXT_SECONDARY = 'secondary-text',
    TEXT_STRONG = 'strong-text',
    TEXT_SUCCESS = 'success-text',
    TEXT_WARNING = 'warning-text',
    UNDERLINED = 'underlined',
}
/**
 * Supported cell shapes.
 */
export enum FCellShapes {
    AUTOCOMPLETE = 'ACP',
    BUTTON_LIST = 'BTN',
    CHART = 'GRA',
    CHIP = 'CHI',
    COLOR_PICKER = 'CLP',
    COMBOBOX = 'CMB',
    EDITOR = 'EDT',
    GAUGE = 'GAU',
    IMAGE = 'IMG',
    KNOB = 'KNB',
    PROGRESS_BAR = 'PGB',
    RADIO = 'RAD',
    RATING = 'RTG',
    TEXT_FIELD = 'ITX',
}
/**
 * Supported cell types.
 */
export enum FCellTypes {
    AUTOCOMPLETE = 'autocomplete',
    BAR = 'bar',
    BUTTON = 'button',
    BUTTON_LIST = 'button-list',
    CHART = 'chart',
    CHECKBOX = 'checkbox',
    CHIP = 'chips',
    COLOR_PICKER = 'color-picker',
    COMBOBOX = 'combobox',
    DATE = 'date',
    DATETIME = 'datetime',
    EDITOR = 'editor',
    GAUGE = 'gauge',
    ICON = 'icon',
    IMAGE = 'image',
    KNOB = 'knob',
    LINK = 'link',
    NUMBER = 'number',
    PROGRESS_BAR = 'progress-bar',
    RADIO = 'radio',
    RATING = 'rating',
    STRING = 'string',
    TIME = 'time',
}
export const editableTypes = [
    FCellTypes.AUTOCOMPLETE,
    FCellTypes.CHECKBOX,
    FCellTypes.COLOR_PICKER,
    FCellTypes.COMBOBOX,
    FCellTypes.DATE,
    FCellTypes.NUMBER,
    FCellTypes.RATING,
    FCellTypes.STRING,
    FCellTypes.TIME,
];
export const kupTypes = [
    FCellTypes.BAR,
    FCellTypes.BUTTON,
    FCellTypes.BUTTON_LIST,
    FCellTypes.CHART,
    FCellTypes.CHIP,
    FCellTypes.COLOR_PICKER,
    FCellTypes.GAUGE,
    FCellTypes.KNOB,
    FCellTypes.PROGRESS_BAR,
    FCellTypes.RADIO,
    FCellTypes.RATING,
];
/**
 * Payload of the event fired when a cell is updated.
 */
export interface FCellEventPayload extends KupEventPayload {
    cell: Cell;
    column: Column;
    event: CustomEvent | InputEvent;
    row: Row;
    type: FCellTypes;
}
