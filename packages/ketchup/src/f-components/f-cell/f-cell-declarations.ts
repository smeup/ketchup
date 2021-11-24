import type { VNode } from '@stencil/core';
import type {
    Cell,
    Column,
    Row,
} from '../../components/kup-data-table/kup-data-table-declarations';
import type { FComponent } from '../../types/GenericTypes';
/**
 * Props of the f-cell component.
 */
export interface FCellProps extends FComponent {
    cell?: Cell;
    column?: Column;
    density?: FCellPadding;
    editable?: boolean;
    indents?: VNode[];
    onUpdate?: (event: Event | CustomEvent) => void;
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
    WIDE = 'wide',
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
    BAR = 'bar',
    BUTTON = 'button',
    BUTTON_LIST = 'button-list',
    CHART = 'chart',
    CHECKBOX = 'checkbox',
    CHIP = 'chips',
    COLOR_PICKER = 'color-picker',
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
