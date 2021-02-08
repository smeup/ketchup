import { Identifiable } from '../../types/GenericTypes';

export interface DataTable {
    columns?: Array<Column>;
    rows?: Array<Row>;
}

export interface CellData {
    [index: string]: any;
}

export interface Cell {
    obj?: {
        t: string;
        p: string;
        k: string;
    };
    value: string;
    displayedValue?: string;
    style?: GenericMap;
    shape?: string;
    data?: CellData;
    cardID?: string;
    cssClass?: string;
    icon?: string;
    title?: string;
}

export interface CellsHolder {
    [index: string]: Cell;
}

export interface Column {
    name: string;
    title: string;
    size?: string;
    visible?: boolean;
    clickable?: boolean;
    hideValuesRepetitions?: boolean;
    obj?: {
        t: string;
        p: string;
        k: string;
    };
    shape?: string;
    decimals?: number;
    icon?: string;
    formula?: string;
    valuesForFilter?: string[];
}

export interface Row extends Identifiable {
    cells: CellsHolder;

    actions?: Array<RowAction>;

    group?: RowGroup;

    readOnly?: boolean;

    cssClass?: string;
}

export interface RowGroup {
    id: string;
    parent: Row;
    column: string;
    columnLabel: string; // Saves the column label in case either LABEL or BOTH modes for the groupLabelDisplay are activated
    expanded: boolean; // not sure if this is needed
    label: string;
    children: Array<Row>;
    obj: {
        t: string;
        p: string;
        k: string;
    };
    totals: { [index: string]: number };
}

export interface TableData {
    columns?: Array<Column>;
    rows?: Array<Row>;
}

export interface GenericMap {
    [index: string]: string;
}

export interface GenericFilter {
    [index: string]: Filter;
}

export interface Filter {
    textField: string;
    checkBoxes: Array<string>;
    interval: string[];
}

export interface SortObject {
    column: string;
    sortMode: SortMode;
}

export enum SortMode {
    A = 'A',
    D = 'D',
}

export enum FilterInterval {
    FROM = 0,
    TO = 1,
}

export interface TotalsMap {
    [index: string]: TotalMode;
}

export enum TotalMode {
    COUNT = 'Count',
    SUM = 'Sum',
    AVERAGE = 'Average',
    MATH = 'MATH',
}

export enum PaginatorPos {
    TOP = 'Top',
    BOTTOM = 'Bottom',
    BOTH = 'Both',
}

export interface GroupObject {
    column: string;
    visible: boolean;
}

export interface RowAction {
    text: string;
    icon: string;
}

export enum ShowGrid {
    NONE = 'None',
    ROW = 'Row',
    COL = 'Col',
    COMPLETE = 'Complete',
}

// export enum RowActionType {
//     DEFAULT = 'Default',
//     VARIABLE = 'Variable',
// }

export interface KupDataTableCellButtonClick {
    cell: Cell;
    column: Column;
    row: Row;
}

//---- *NEXT functionality AKA load more ----
export enum LoadMoreMode {
    CONSTANT = 'constant',
    CONSTANT_INCREMENT = 'constant_increment',
    PROGRESSIVE_THRESHOLD = 'progressive_threshold',
}

//---- Sortable Columns Functionality ----
export const KupDataTableColumnDragType = 'text/kup-data-table-column-drag';
export const KupDataTableColumnDragRemoveType =
    'text/kup-data-table-column-drag-remove';
export const KupDataTableRowDragType = 'text/kup-data-table-row-drag';

export interface KupDataTableSortedColumnIndexes {
    receivingColumnIndex: number;
    sortedColumnIndex: number;
}

//---- Group label display functionality ----
/**
 * The possible values the display property can have.
 * @enum
 * @property {string} BOTH - Shows both the column label and the value. This is the default.
 * @property {string} LABEL - Shows only the columns label.
 * @property {string} VALUE - Shows only the value.
 * @readonly
 */
export enum GroupLabelDisplayMode {
    BOTH = 'Both',
    LABEL = 'Label',
    VALUE = 'Value',
}

//---- Fixed rows and cells classes ----
export const FixedCellsClasses = {
    columns: 'fixed-column',
    rows: 'fixed-row',
};

export const FixedCellsCSSVarsBase = {
    columns: '--ddt_column-left-',
    rows: '--ddt_row-top-',
};

export const CSSArray = [
    //kup-data-table.scss
    ':host',
    //kup-data-table-classes.scss
    ':host(.layout-fixed) #kup-component table',
    ':host(.hydrated) #kup-component th.selected',
    ':host(.hydrated) #kup-component td.selected',
    ':host(.hydrated) #kup-component td.selected.fixed-column',
    ':host(.hydrated) #kup-component td.selected.fixed-row',
    ':host(.hydrated) #kup-component tr.selected',
    ':host(.hydrated) #kup-component tr.selected td',
    ':host(.hydrated) #kup-component tr.selected td:first-of-type',
    ':host(.hydrated) #kup-component tr.selected td.selected',
    ':host(.hydrated) #kup-component tr.selected td.fixed-column',
    ':host(.hydrated) #kup-component tr.selected td.fixed-row',
    ':host(.hydrated) #kup-component tr.selected td.fixed-column.selected',
    ':host(.hydrated) #kup-component tr.selected td.fixed-row.selected',
    'tr.clickable',
    'td.clickable',
    'td.display-on-hover',
    'td.display-on-hover:hover',
    'td.shaped',
    'td.strong-text',
    'td.success-text',
    'td.warning-text',
    'td.danger-text',
    'td.purple-text',
    'td.success-bg',
    'td.warning-bg',
    'td.danger-bg',
    'td.teal-bg',
    'td.orange-bg',
    'td.green-bg',
    'td.grey-bg',
    'td.purple-bg',
    'td.c-vertical-text *',
    'td.c-right-aligned *',
    'td.c-centered *',
    'td.c-fitted *',
    'td.c-shaped *',
    'td.c-hor-padded *',
    'td.c-ver-padded *',
    'td.c-success-bg *',
    'td.c-warning-bg *',
    'td.c-danger-bg *',
    'td.c-teal-bg *',
    'td.c-orange-bg *',
    'td.c-green-bg *',
    'td.c-grey-bg *',
    'td.c-purple-bg *',
    ':host([force-one-line]) tbody tr > td.c-centered *',
    ':host([force-one-line]) tbody tr > td.c-fitted *',
    ':host([force-one-line]) tbody tr > td.c-right-aligned *',
    //kup-data-table-drag-drop.scss
    '[columns-dragging] th',
    '[columns-dragging] [drag-over]',
    '[columns-dragging] [drag-over] > *',
    '[columns-dragging] [drag-over][drag-starter]',
    //kup-data-table-fixed-rows.scss
    'table.custom-size th',
    'table.custom-size th.fixed-column',
    'tr:hover .fixed-row',
    'tr:hover .fixed-column',
    'tr.selected .fixed-column',
    'tr.selected .fixed-row',
    '.fixed-row',
    'thead .fixed-row',
    'tfoot .fixed-row',
    '.fixed-column',
    'thead .fixed-column',
    'tfoot .fixed-column',
    '.fixed-column.fixed-row',
    //kup-data-table-paginator.scss
    '.paginator-wrapper',
    '.paginator-tabs',
    '.paginator-tabs kup-paginator',
    '.paginator-tabs .customize-panel',
    '.paginator-tabs .customize-element',
    '.paginator-tabs .customize-element:nth-child(1)',
    '.paginator-tabs kup-button',
    '.paginator-tabs .load-more-button',
    //kup-data-table-sticky-header.scss
    'sticky-header',
    '.persistent-header',
    '.persistent-header ~ sticky-header',
    '.persistent-header ~ sticky-header.activated',
    '.persistent-header ~ sticky-header[hidden]',
    '.persistent-header ~ sticky-header tr-sticky',
    '.persistent-header ~ sticky-header th-sticky',
    '.persistent-header ~ sticky-header th-sticky.icon',
    '.persistent-header ~ sticky-header th-sticky.number',
    '.persistent-header ~ sticky-header th-sticky.centered',
    '.persistent-header ~ sticky-header .column-title',
    //kup-data-table-main.scss
    'table',
    'table.auto-width',
    'table > tbody > tr > td:first-of-type',
    'table > tbody > tr > td:last-of-type',
    'table > tbody > tr:last-of-type > td',
    'table > tbody > tr:last-of-type > td',
    'table.border-top > tbody > tr:first-of-type > td',
    'table.row-separation > tbody > tr > td',
    'table.column-separation > tbody > tr > td',
    'table.column-separation > tbody > tr > td',
    'table.noGrid td',
    'table tfoot td',
    'table #global-filter',
    'table .icon-container',
    'table .icon-container.ascending',
    'table .icon-container.descending',
    'table .icon-container.filter-remove',
    'table .icon-container.collapsed',
    'table .icon-container.expanded',
    'table .icon-container.obj-icon',
    ':host([force-one-line]) table .icon-container.obj-icon',
    '.number .icon-container.obj-icon',
    '.below-wrapper',
    '.below-wrapper.custom-size',
    '.below-wrapper:not(.custom-size)',
    '.density-dense tbody > tr > td:not(.is-graphic)',
    '.density-dense tbody > tr.group > td',
    '.density-wide tbody > tr > td:not(.is-graphic)',
    '.density-wide tbody > tr.group > td',
    '.fontsize-small',
    '.fontsize-small .group-cell-content > span:before',
    '.fontsize-big',
    '.fontsize-big .group-cell-content > span:before',
    'thead th',
    'thead th:first-of-type',
    'thead th .column-title',
    'thead th.icon',
    'thead th.number',
    'thead th.centered',
    'thead th.header-cell--sortable',
    'thead th .column-sort',
    'thead th .column-menu',
    'thead th .column-menu ul',
    'thead th .column-menu ul li',
    'thead th .column-menu ul li.textfield-row',
    'thead th .column-menu ul li.button-row',
    'thead th .column-menu ul li.checkbox-row',
    'thead th .column-menu ul li kup-button',
    'tbody',
    'tbody tr kup-button',
    'tbody tr.selected td',
    'tbody tr:not(.group):not(.selected):hover td',
    'tbody tr.group',
    'tbody tr.group.group-label',
    'tbody tr.group.group-total',
    'tbody tr.group > td',
    'tbody tr.group > td .group-cell-content .indent',
    'tbody tr.group > td .group-cell-content > span',
    'tbody tr.group > td.total',
    'tbody tr.group > td.total.negative-number',
    'tbody tr > td',
    'tbody tr > td.number .cell-content',
    'tbody tr > td .row-expander',
    'tbody tr > td .indent',
    'tbody tr > td .row-action',
    'tbody tr > td .cell-content',
    'tbody tr > td .cell-content.has-padding',
    'tbody tr > td .cell-content.has-padding',
    ':host([force-one-line]) tbody tr > td .cell-content',
    ':host([force-one-line]) tbody tr > td .cell-content.is-centered',
    'tbody tr > td .cell-content.is-tooltip',
    'tbody tr > td .cell-content.is-vertical',
    ':host([force-one-line]) tbody tr > td .cell-content.is-vertical',
    ':host([force-one-line]) tbody tr > td .cell-content.is-vertical > *',
    'tbody tr > td .cell-content.negative-number',
    'tbody tr > td .cell-content.negative-number',
    'tbody tr > td .is-graphic',
    'tbody tr > td .indent ~ kup-image',
    'tbody tr > td .indent ~ kup-button',
    'tr kup-checkbox',
    'tr kup-button',
    'tr kup-image',
    'tr kup-progress-bar',
    'tr .indent ~ kup-image',
    'tr .indent ~ kup-button',
    'tr .indent ~ kup-checkbox',
    'tr [row-select-cell]',
    'tr td[row-action-cell] kup-button',
    'above-wrapper',
    'bar-cell-content',
    '.css-step.bottom-aligned',
    '.checkbox-cell-content',
    '.icon-cell-content',
    '.image-cell-content',
    '.image-cell-content',
    'tbody td > *',
];
