import { KupBadge } from '../kup-badge/kup-badge';
import { KupEventPayload } from '../../types/GenericTypes';
import { FCellShapes } from '../../f-components/f-cell/f-cell-declarations';
import {
    KupDataCell,
    KupDataColumn,
    KupDataRow,
    KupDataRowAction,
} from '../../managers/kup-data/kup-data-declarations';
import type { PointerEvent } from '@interactjs/types/index';
/**
 * Props of the kup-box component.
 * Used to export every prop in an object.
 */
export enum KupBoxProps {
    cardData = "Data of the card linked to the box when the latter's layout must be a premade template.",
    columns = 'Number of columns.',
    customStyle = 'Custom style of the component.',
    data = 'Actual data of the box.',
    dragEnabled = 'Enable dragging.',
    dropEnabled = 'Enable dropping.',
    dropOnSection = 'Drop can be done in section.',
    enableRowActions = 'If enabled, a button to load / display the row actions will be displayed on the right of every box.',
    globalFilter = 'When set to true it activates the global filter.',
    globalFilterValue = 'The value of the global filter.',
    kanban = 'Displays the boxlist as a Kanban.',
    layout = 'How the field will be displayed. If not present, a default one will be created.',
    lazyLoadRows = 'When set to true, extra rows will be automatically loaded once the last row enters the viewport.',
    loadMoreLimit = 'Sets a maximum limit of new records which can be required by the load more functionality.',
    loadMoreMode = 'Establish the modality of how many new records will be downloaded. This property is regulated also by loadMoreStep.',
    loadMoreStep = 'The number of records which will be requested to be downloaded when clicking on the load more button. This property is regulated also by loadMoreMode.',
    multiSelection = 'Enable multi selection.',
    pageSelected = 'Current page number.',
    pagination = 'Enables pagination.',
    rowsPerPage = 'Number of current rows per page.',
    scrollOnHover = 'Activates the scroll on hover function.',
    selectBox = 'Automatically selects the box at the specified index.',
    selectedRowsState = 'Multiple selection.',
    showLoadMore = 'If set to true, displays the button to load more records.',
    showSelection = 'If enabled, highlights the selected box/boxes.',
    sortBy = 'If sorting is enabled, specifies which column to sort.',
    sortEnabled = 'Enable sorting.',
    stateId = '',
    store = '',
    swipeDisabled = 'Disable swipe.',
}

//---- *NEXT functionality AKA load more ----
export enum LoadMoreMode {
    CONSTANT = 'constant',
    CONSTANT_INCREMENT = 'constant_increment',
    PROGRESSIVE_THRESHOLD = 'progressive_threshold',
}
export interface KupBoxData {
    columns?: KupDataColumn[];
    rows?: KupBoxRow[];
}
export interface KupBoxRow extends KupDataRow {
    layout?: KupBoxLayout;
    badgeData?: KupBadge[];
    style?: { [index: string]: string };
}

export interface KupBoxLayout {
    horizontal?: boolean;
    sections?: KupBoxSection[];
}

export interface KupBoxSection {
    collapsible?: boolean;
    columns?: string;
    content?: KupBoxObject[];
    dim?: string;
    horizontal?: boolean;
    id?: string;
    sections?: KupBoxSection[];
    style?: { [index: string]: string };
    title?: string;
}

export interface KupBoxObject {
    column?: string;
    value?: string;
    shape?: FCellShapes;
    config?: any;
}

export interface CollapsedSectionsState {
    [index: string]: {
        [index: string]: boolean;
    };
}
/**
 * Interface for a kanban-displayed boxlist.
 */
export interface KupBoxKanban {
    columns: string[];
    isStacked?: boolean;
    labels?: Array<Array<string>>;
    size?: string;
}
/**
 * Contains all the data of an event.
 */
export interface KupBoxEventHandlerDetails {
    boxObject: HTMLElement;
    cell: KupDataCell;
    column: KupDataColumn;
    originalEvent: PointerEvent;
    row: KupBoxRow;
}

export interface KupBoxClickEventPayload extends KupEventPayload {
    row: KupBoxRow;
    column?: string;
}

export interface KupBoxSelectedEventPayload extends KupEventPayload {
    rows: KupBoxRow[];
}

export interface KupBoxAutoSelectEventPayload extends KupEventPayload {
    row: KupBoxRow;
}

export interface KupBoxRowActionClickEventPayload extends KupEventPayload {
    row: KupBoxRow;
    action: KupDataRowAction;
    index: number;
}
export interface KupBoxContextMenuEventPayload extends KupEventPayload {
    details: KupBoxEventHandlerDetails;
}

export interface KupBoxLoadMoreClickEventPayload extends KupEventPayload {
    loadItems: number;
}
