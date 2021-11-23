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
    editable?: boolean;
    indents?: VNode[];
    oneLine?: boolean;
    onUpdate?: (event: Event | CustomEvent) => void;
    previousValue?: string;
    renderKup?: boolean;
    row?: Row;
    setSizes?: boolean;
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
 * Supported cell types.
 */
export enum FCellTypes {
    BAR = 'bar',
    BTN = 'btn',
    BUTTON = 'button',
    CHART = 'chart',
    CHECKBOX = 'checkbox',
    CHIPS = 'chips',
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
