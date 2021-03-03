import {
    Component,
    Event,
    getAssetPath,
    EventEmitter,
    h,
    JSX,
    Method,
    Prop,
    Element,
    State,
    Watch,
    Host,
} from '@stencil/core';

import { scrollOnHover } from '../../utils/scroll-on-hover';
import { positionRecalc } from '../../utils/recalc-position';

import {
    Cell,
    Column,
    FixedCellsClasses,
    FixedCellsCSSVarsBase,
    GroupLabelDisplayMode,
    GroupObject,
    KupDataTableCellButtonClick,
    KupDataTableColumnDragType,
    KupDataTableRowDragType,
    KupDataTableColumnDragRemoveType,
    LoadMoreMode,
    PaginatorPos,
    Row,
    RowAction,
    ShowGrid,
    SortMode,
    SortObject,
    TableData,
    TotalsMap,
    GenericFilter,
    FilterInterval,
    TotalMode,
    totalMenuOpenID,
    TotalLabel,
} from './kup-data-table-declarations';

import { isRating, isGauge, isKnob, getCellType } from '../../utils/cell-utils';

import {
    calcTotals,
    compareValues,
    normalizeRows,
    filterRows,
    getColumnByName,
    groupRows,
    paginateRows,
    sortRows,
    styleHasBorderRadius,
    styleHasWritingMode,
    setTextFieldFilterValue,
    addCheckBoxFilterValue,
    removeCheckBoxFilterValue,
    getTextFieldFilterValue,
    getCheckBoxFilterValues,
    hasFiltersForColumn,
    getCellValueForDisplay,
    normalizeValue,
    setIntervalTextFieldFilterValue,
    isColumnFiltrableByInterval,
    isFilterCompliantForSimpleValue,
    getIntervalTextFieldFilterValues,
    hasIntervalTextFieldFilterValues,
    getValueForDisplay,
    dropHandlersCell,
} from './kup-data-table-helper';

import {
    isBar,
    isChart,
    isButton,
    isIcon,
    isImage,
    isNumber,
    isDate,
    isProgressBar as isProgressBarObj,
    isVoCodver,
    isStringObject,
    isCheckbox,
    hasTooltip,
    isRadio as isRadioObj,
    isTimestamp,
    isTime,
    isTimeWithSeconds,
    canHaveDerivedColumn,
} from '../../utils/object-utils';
import { GenericObject } from '../../types/GenericTypes';

import {
    stringToNumber,
    numberToFormattedStringNumber,
    identify,
    ISO_DEFAULT_DATE_TIME_FORMAT,
    ISO_DEFAULT_DATE_FORMAT,
    changeDateTimeFormat,
} from '../../utils/utils';

import {
    ComponentListElement,
    ItemsDisplayMode,
} from '../kup-list/kup-list-declarations';
import { logLoad, logMessage, logRender } from '../../utils/debug-manager';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theme-manager';

import { KupDataTableState } from './kup-data-table-state';
import { KupStore } from '../kup-state/kup-store';
import { KupTooltip } from '../kup-tooltip/kup-tooltip';
import { setTooltip, unsetTooltip } from '../../utils/helpers';
import { KupButton } from '../kup-button/kup-button';

import {
    setDragEffectAllowed,
    setKetchupDraggable,
    setKetchupDroppable,
    DragHandlers,
    DropHandlers,
    setDragDropPayload,
    getDragDropPayload,
} from '../../utils/drag-and-drop';
import { dragMultipleImg } from '../../assets/images/drag-multiple';
import { ResizeObserver } from 'resize-observer';
import { ResizeObserverCallback } from 'resize-observer/lib/ResizeObserverCallback';
import { ResizeObserverEntry } from 'resize-observer/lib/ResizeObserverEntry';
import { FChip } from '../../f-components/f-chip/f-chip';
import { FImage } from '../../f-components/f-image/f-image';
import { FTextField } from '../../f-components/f-text-field/f-text-field';
import { FChipMDC } from '../../f-components/f-chip/f-chip-mdc';
import { FTextFieldMDC } from '../../f-components/f-text-field/f-text-field-mdc';
import {
    FChipData,
    FChipType,
} from '../../f-components/f-chip/f-chip-declarations';
import {
    FButtonProps,
    FButtonStyling,
} from '../../f-components/f-button/f-button-declarations';
import { FButton } from '../../f-components/f-button/f-button';
import { FButtonMDC } from '../../f-components/f-button/f-button-mdc';
import { FCheckbox } from '../../f-components/f-checkbox/f-checkbox';
import { FCheckboxMDC } from '../../f-components/f-checkbox/f-checkbox-mdc';
import { FCheckboxProps } from '../../f-components/f-checkbox/f-checkbox-declarations';

@Component({
    tag: 'kup-data-table',
    styleUrl: 'kup-data-table.scss',
    shadow: true,
})
export class KupDataTable {
    //////////////////////////////
    // Begin state stuff
    //////////////////////////////

    @Prop() stateId: string = '';
    @Prop() store: KupStore;

    state: KupDataTableState = new KupDataTableState();

    initWithPersistedState(): void {
        if (this.store && this.stateId) {
            const state = this.store.getState(this.stateId);
            if (state != null) {
                logMessage(this, 'Initializing stateId ' + this.stateId);
                // *** PROPS ***
                this.filters = state.filters;
                this.groups = state.groups;
                this.expandGroups = state.expandGroups;
                this.groupLabelDisplay = state.groupLabelDisplay;
                this.density = state.density;
                this.enableSortableColumns = state.enableSortableColumns;
                this.forceOneLine = state.forceOneLine;
                this.globalFilter = state.globalFilter;
                this.globalFilterValue = state.globalFilterValue;
                this.headerIsPersistent = state.headerIsPersistent;
                this.lazyLoadRows = state.lazyLoadRows;
                this.loadMoreLimit = state.loadMoreLimit;
                this.multiSelection = state.multiSelection;
                this.rowsPerPage = state.rowsPerPage;
                this.showFilters = state.showFilters;
                this.showHeader = state.showHeader;
                this.showLoadMore = state.showLoadMore;
                this.sortEnabled = state.sortEnabled;
                this.sort = state.sort;
                this.pageSelected = state.pageSelected;
                this.sortableColumnsMutateData =
                    state.sortableColumnsMutateData;
                this.selectRow = state.selectRow;
                this.selectRowsById = state.selectRowsById;
                this.dragEnabled = state.dragEnabled;
                this.dropEnabled = state.dropEnabled;
                this.showFooter = state.showFooter;
                this.totals = state.totals;
                //
            }
        }
    }

    persistState(): void {
        if (this.store && this.stateId) {
            // *** PROPS ***
            this.state.filters = this.filters;
            this.state.groups = this.groups;
            this.state.expandGroups = this.expandGroups;
            this.state.groupLabelDisplay = this.groupLabelDisplay;
            this.state.density = this.density;
            this.state.enableSortableColumns = this.enableSortableColumns;
            this.state.forceOneLine = this.forceOneLine;
            this.state.globalFilter = this.globalFilter;
            this.state.globalFilterValue = this.globalFilterValue;
            this.state.headerIsPersistent = this.headerIsPersistent;
            this.state.lazyLoadRows = this.lazyLoadRows;
            this.state.loadMoreLimit = this.loadMoreLimit;
            this.state.multiSelection = this.multiSelection;
            this.state.rowsPerPage = this.currentRowsPerPage;
            this.state.showFilters = this.showFilters;
            this.state.showHeader = this.showHeader;
            this.state.showLoadMore = this.showLoadMore;
            this.state.sortEnabled = this.sortEnabled;
            this.state.sort = this.sort;
            this.state.sortableColumnsMutateData = this.sortableColumnsMutateData;
            this.state.pageSelected = this.currentPage;
            this.state.dragEnabled = this.dragEnabled;
            this.state.dropEnabled = this.dropEnabled;
            this.state.showFooter = this.showFooter;
            this.state.totals = this.totals;
            this.state.selectRowsById = this.selectedRows.reduce(
                (accumulator, row, currentIndex) => {
                    const prefix = currentIndex > 0 ? ';' : '';
                    return accumulator + prefix + row.id;
                },
                ''
            );

            logMessage(this, 'Persisting stateId ' + this.stateId);
            this.store.persistState(this.stateId, this.state);
        }
    }

    //////////////////////////////
    // End state stuff
    //////////////////////////////

    @Element() rootElement: HTMLElement;
    @State() customStyleTheme: string = undefined;

    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = undefined;
    /**
     * The data of the table.
     */
    @Prop() data: TableData;
    /**
     * The density of the rows, defaults at 'medium' and can be also set to 'large' or 'small'.
     */
    @Prop() density: string = 'dense';
    /**
     * Defines the label to show when the table is empty.
     */
    @Prop() emptyDataLabel: string = 'Empty data';
    /**
     * Enables the sorting of columns by dragging them into different columns.
     */
    @Prop() enableSortableColumns: boolean = true;
    /**
     * Expands groups when set to true.
     */
    @Prop() expandGroups: boolean = false;
    /**
     * List of filters set by the user.
     */
    @Prop({ mutable: true }) filters: GenericFilter = {};
    /**
     * Fixes the given number of columns so that they stay visible when horizontally scrolling the data-table.
     * If grouping is active or the value of the prop is <= 0, this prop will have no effect.
     * Can be combined with fixedRows.
     * @see fixedRows
     */
    @Prop() fixedColumns: number = 0;
    /**
     * Fixes the given number of rows so that they stay visible when vertically scrolling the data-table.
     * If grouping is active or the value of the prop is <= 0, this prop will have no effect.
     * Can be combined with fixedColumns.
     * @see fixedColumns
     */
    @Prop() fixedRows: number = 0;
    /**
     * Forces cells with long text and a fixed column size to have an ellipsis set on their text.
     * The reflect attribute is mandatory to allow styling.
     */
    @Prop({ reflect: true }) forceOneLine: boolean = false;
    /**
     * When set to true it activates the global filter.
     */
    @Prop() globalFilter: boolean = false;
    /**
     * The value of the global filter.
     */
    @Prop({ reflect: true, mutable: true }) globalFilterValue = '';
    /**
     * How the label of a group must be displayed.
     * For available values [see here]{@link GroupLabelDisplayMode}
     */
    @Prop() groupLabelDisplay: GroupLabelDisplayMode =
        GroupLabelDisplayMode.BOTH;
    /**
     * The list of groups.
     */
    @Prop({ mutable: true }) groups: Array<GroupObject> = [];
    /**
     * When set to true the header will stick on top of the table when scrolling.
     */
    @Prop() headerIsPersistent = true;
    /**
     * When set to true, extra rows will be automatically loaded once the last row enters the viewport. When groups are present, the number of rows is referred to groups and not to their content. Paginator is disabled.
     */
    @Prop() lazyLoadRows: boolean = false;
    /**
     * Defines the placeholder character which will be replaced by a line break inside table header cells, normal or sticky.
     */
    @Prop() lineBreakCharacter: string = '\n';
    /**
     * Sets a maximum limit of new records which can be required by the load more functionality.
     */
    @Prop() loadMoreLimit: number = 1000;
    /**
     * Establish the modality of how many new records will be downloaded.
     *
     * This property is regulated also by loadMoreStep.
     * @see loadMoreStep
     * @see loadMoreLimit
     */
    @Prop() loadMoreMode: LoadMoreMode = LoadMoreMode.PROGRESSIVE_THRESHOLD;
    /**
     * The number of records which will be requested to be downloaded when clicking on the load more button.
     *
     * This property is regulated also by loadMoreMode.
     * @see loadMoreMode
     * @see loadMoreLimit
     */
    @Prop() loadMoreStep: number = 60;
    /**
     * When set to true enables rows multi selection.
     */
    @Prop() multiSelection: boolean = false;
    /**
     * Current selected page set on component load
     */
    @Prop() pageSelected: number = -1;
    /**
     * Sets the position of the paginator. Available positions: top, bottom or both.
     */
    @Prop() paginatorPos: PaginatorPos = PaginatorPos.TOP;
    /**
     * Sets the possibility to remove the selected column.
     */
    @Prop() removableColumns: boolean = false;
    /**
     * Sets the actions of the rows.
     */
    @Prop() rowActions: Array<RowAction>;
    /**
     * Sets the number of rows per page to display.
     */
    @Prop() rowsPerPage = 10;
    /**
     * Activates the scroll on hover function.
     */
    @Prop() scrollOnHover: boolean = false;
    /**
     * Selects the row at the specified rendered rows prosition (base 1).
     */
    @Prop() selectRow: number;
    /**
     * Semicolon separated rows id to select.
     */
    @Prop() selectRowsById: string;
    /**
     * If set to true, displays the button to open the customization panel.
     */
    @Prop() showCustomization: boolean = false;
    /**
     * When set to true enables the column filters.
     */
    @Prop() showFilters: boolean = false;
    /**
     * When set to true shows the footer.
     */
    @Prop() showFooter: boolean = false;
    /**
     * Can be used to customize the grid view of the table.
     */
    @Prop() showGrid: ShowGrid = ShowGrid.ROW;
    /**
     * Enables rendering of the table header.
     * @namespace KupDataTable.showHeader
     */
    @Prop() showHeader: boolean = true;
    /**
     * If set to true, displays the button to load more records.
     */
    @Prop() showLoadMore: boolean = false;
    /**
     * If set to true, displays tooltip on right click; if set to false, displays tooltip on mouseOver.
     */
    @Prop() showTooltipOnRightClick: boolean = true;
    /**
     * Defines the current sorting options.
     */
    @Prop({ mutable: true }) sort: Array<SortObject> = [];
    /**
     * If set to true, when a column is dragged to be sorted, the component directly mutates the data.columns property
     * and then fires the event
     */
    @Prop() sortableColumnsMutateData: boolean = true;
    /**
     * When set to true enables the sorting of the columns.
     */
    @Prop() sortEnabled = true;
    /**
     * Sets the height of the table.
     */
    @Prop() tableHeight: string = undefined;
    /**
     * Sets the width of the table.
     */
    @Prop() tableWidth: string = undefined;
    /**
     * Defines the timeout for tooltip detail
     */
    @Prop() tooltipDetailTimeout: number;
    /**
     * Defines the timeout for tooltip load
     */
    @Prop() tooltipLoadTimeout: number;
    /**
     * Defines the current totals options.
     */
    @Prop() totals: TotalsMap;
    /**
     * Enable row dragging
     */
    @Prop() dragEnabled: boolean = false;
    /**
     * Enable record dropping
     */
    @Prop() dropEnabled: boolean = false;

    //-------- State --------

    @State()
    private lazyLoadCells = false;

    @State()
    private currentPage = 1;

    @State()
    private currentRowsPerPage = 10;

    @State()
    private selectedRows: Array<Row> = [];

    @State()
    private selectedColumn: string;

    @State()
    private groupState: {
        [index: string]: {
            expanded: boolean;
        };
    } = {};

    /**
     * name of the column with an open menu
     */
    @State()
    private openedMenu: string = null;

    /**
     * name of the column with the opened total menu
     */
    @State()
    private openedTotalMenu: string = null;

    @State()
    private openedCustomSettings: boolean = false;

    @State()
    private fontsize: string = 'medium';

    @State()
    private stateSwitcher: boolean = false;

    /**
     * This is a flag to be used for the draggable columns to force rerender
     * by changing the internal state.
     */
    @State()
    private triggerColumnSortRerender = false;

    @Watch('rowsPerPage')
    rowsPerPageHandler(newValue: number) {
        this.currentRowsPerPage = newValue;
    }

    @Watch('expandGroups')
    expandGroupsHandler() {
        if (!this.isRestoringState) {
            this.recalculateRows();
            // reset group state
            this.groupState = {};
            this.forceGroupExpansion();
        }
    }

    @Watch('filters')
    @Watch('globalFilterValue')
    filtersChanged() {
        this.expandGroupsHandler();
    }

    @Watch('sort')
    @Watch('rowsPerPage')
    @Watch('totals')
    @Watch('currentPage')
    @Watch('currentRowsPerPage')
    recalculateRows() {
        if (!this.isRestoringState) {
            this.initRows();
        }
    }

    @Watch('data')
    identifyAndInitRows() {
        identify(this.getRows());
        this.expandGroupsHandler();
        this.resetSelectedRows();
    }

    @Watch('groups')
    recalculateRowsAndUndoSelections() {
        if (!this.isRestoringState) {
            this.recalculateRows();
            // reset group state
            this.groupState = {};
            this.forceGroupExpansion();
            this.resetSelectedRows();
        }
    }

    @Watch('fixedColumns')
    @Watch('fixedRows')
    controlFixedRowsColumns() {
        let warnMessage = '';

        if (isNaN(this.fixedColumns) || this.fixedColumns < 0) {
            warnMessage += `The value ${this.fixedColumns} set on fixedColumns property is not valid.`;
        }

        if (isNaN(this.fixedRows) || this.fixedRows < 0) {
            warnMessage += `The value ${this.fixedRows} set on fixedRows property is not valid.`;
        }

        if (warnMessage && console) {
            console.warn(warnMessage + 'Any fixed rule will be ignored.');
        }
    }

    /**
     * The reference for the function used to close the menu of the header cells
     */
    private documentHandlerCloseHeaderMenu;

    private rows: Array<Row>;
    private rowsLength: number = 0;

    private paginatedRows: Array<Row>;
    private paginatedRowsLength: number = 0;

    private footer: { [index: string]: number };

    private renderedRows: Array<Row> = [];

    private loadMoreEventCounter: number = 0;

    private loadMoreEventPreviousQuantity: number = 0;

    private scrollOnHoverInstance: scrollOnHover;

    /**
     * Internal not reactive state used to keep track if a column is being dragged.
     * @private
     */
    private columnsAreBeingDragged: boolean = false;

    /**
     * Attribute to set when a column is being dragged on the whole thead element
     * @const
     * @default 'columns-dragging'
     * @private
     */
    private dragFlagAttribute: string = 'columns-dragging';

    /**
     * The string representing the drag over attribute
     * @const
     * @default 'drag-over'
     * @private
     */
    private dragOverAttribute: string = 'drag-over';

    /**
     * The string representing the drag starter attribute to set onto the element
     * @const
     * @default 'drag-starter'
     * @private
     */
    private dragStarterAttribute: string = 'drag-starter';

    /**
     * Reference for the thead element
     * @private
     */
    private theadRef: any;
    private tableRef: HTMLTableElement;

    private tooltip: KupTooltip;

    /**
     * Reference to the working area of the table. This is the below-wrapper reference.
     */
    private tableAreaRef: HTMLDivElement;
    private stickyTheadRef: any;
    private customizeTopButtonRef: any;
    private customizeBottomButtonRef: any;
    private customizeTopPanelRef: any;
    private customizeBottomPanelRef: any;
    private sizedColumns: Column[] = undefined;
    private intObserver: IntersectionObserver = undefined;
    private navBarHeight: number = 0;
    private theadIntersecting: boolean = false;
    private tableIntersecting: boolean = false;
    private iconPaths: [{ icon: string; path: string }] = undefined;
    private isSafariBrowser: boolean = false;
    private isRestoringState: boolean = false;
    private globalFilterTimeout: number;
    private columnFilterTimeout: number;
    private resizeTimeout: number;
    private resObserver: ResizeObserver = undefined;

    /**
     * When component unload is complete
     */
    @Event({
        eventName: 'kupDidUnload',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDidUnload: EventEmitter<{}>;

    /**
     * When component load is complete
     */
    @Event({
        eventName: 'kupDidLoad',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDidLoad: EventEmitter<{}>;

    /**
     * When rows selections reset
     */
    @Event({
        eventName: 'kupResetSelectedRows',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupResetSelectedRows: EventEmitter<{}>;

    /**
     * When a row is auto selected via selectRow prop
     */
    @Event({
        eventName: 'kupAutoRowSelect',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupAutoRowSelect: EventEmitter<{
        selectedRow: Row;
    }>;

    /**
     * When a row is selected
     */
    @Event({
        eventName: 'kupRowSelected',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupRowSelected: EventEmitter<{
        selectedRows: Array<Row>;
        clickedRow: Row;
        clickedColumn: string;
    }>;

    /**
     * When cell option is clicked
     */
    @Event({
        eventName: 'kupOptionClicked',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupOptionClicked: EventEmitter<{
        column: string;
        row: Row;
    }>;

    /**
     * When 'add column' menu item is clicked
     */
    @Event({
        eventName: 'kupAddColumn',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupAddColumn: EventEmitter<{ column: string }>;

    @Event({
        eventName: 'kupAddCodeDecodeColumn',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupAddCodeDecodeColumn: EventEmitter<{ column: string }>;

    /**
     * When a row action is clicked
     */
    @Event({
        eventName: 'kupRowActionClicked',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupRowActionClicked: EventEmitter<{
        type: 'default' | 'variable' | 'expander';
        row: Row;
        action?: RowAction;
        index?: number;
    }>;

    @Event({
        eventName: 'kupLoadMoreClicked',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupLoadMoreClicked: EventEmitter<{
        loadItems: number;
    }>;

    @Event({
        eventName: 'kupCellButtonClicked',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCellButtonClicked: EventEmitter<KupDataTableCellButtonClick>;

    @Event({
        eventName: 'kupDataTableDblClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDataTableDblClick: EventEmitter<{
        obj: {};
    }>;

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    onKupDataTableDblClick(obj: { t: string; p: string; k: string }) {
        this.kupDataTableDblClick.emit({
            obj: obj,
        });
    }

    forceUpdate() {
        this.stateSwitcher = !this.stateSwitcher;
    }

    private stickyHeaderPosition = () => {
        if (this.tableRef) {
            if (this.tableIntersecting) {
                if (!this.theadIntersecting) {
                    this.updateStickyHeaderSize();
                    this.stickyTheadRef.classList.add('activated');
                } else {
                    this.stickyTheadRef.classList.remove('activated');
                }
            } else {
                this.stickyTheadRef.classList.remove('activated');
            }
        }
    };

    private updateStickyHeaderSize() {
        let navBar: Element = document.querySelectorAll('.header')[0];
        if (navBar) {
            this.navBarHeight = navBar.clientHeight;
        } else {
            this.navBarHeight = 0;
        }
        this.stickyTheadRef.style.top = this.navBarHeight + 'px';
        let widthTable: number = this.tableAreaRef.offsetWidth;
        this.stickyTheadRef.style.maxWidth = widthTable + 'px';
        let thCollection: any = this.theadRef.querySelectorAll('th');
        let thStickyCollection: any = this.stickyTheadRef.querySelectorAll(
            'th-sticky'
        );
        for (let i = 0; i < thCollection.length; i++) {
            let widthTH = thCollection[i].offsetWidth;
            thStickyCollection[i].style.width = widthTH + 'px';
        }
    }

    private setObserver() {
        let callback: IntersectionObserverCallback = (
            entries: IntersectionObserverEntry[]
        ) => {
            entries.forEach((entry) => {
                if (entry.target.tagName === 'TR') {
                    if (entry.isIntersecting) {
                        logMessage(
                            this,
                            'Last row entering the viewport, loading more elements.'
                        );
                        let delta = this.rows.length - this.currentRowsPerPage;
                        if (delta < this.loadMoreStep) {
                            this.currentRowsPerPage += delta;
                        } else {
                            this.currentRowsPerPage += this.loadMoreStep;
                        }
                        entry.target.classList.remove('last-row');
                    }
                }
                if (entry.target.tagName === 'THEAD') {
                    if (entry.isIntersecting) {
                        this.theadIntersecting = true;
                    } else if (
                        entry.boundingClientRect.bottom > this.navBarHeight
                    ) {
                        //If the thead is not intersecting but it still is inside the viewport, is to be considered intersected
                        this.theadIntersecting = true;
                    } else {
                        this.theadIntersecting = false;
                    }
                }
                if (entry.target.tagName === 'TABLE') {
                    if (entry.isIntersecting) {
                        this.tableIntersecting = true;
                    } else {
                        this.tableIntersecting = false;
                    }
                }
                if (
                    this.tableHeight === undefined &&
                    this.tableWidth === undefined &&
                    this.headerIsPersistent
                ) {
                    this.stickyHeaderPosition();
                }
            });
        };
        let options: IntersectionObserverInit = {
            threshold: 0,
            rootMargin: '-' + this.navBarHeight + 'px 0px 0px 0px',
        };
        this.intObserver = new IntersectionObserver(callback, options);

        let callbackResize: ResizeObserverCallback = (
            entries: ResizeObserverEntry[]
        ) => {
            entries.forEach((entry) => {
                if (
                    entry.contentRect.height &&
                    entry.contentRect.width &&
                    this.lazyLoadCells
                ) {
                    logMessage(
                        this,
                        'Size changed to x: ' +
                            entry.contentRect.width +
                            ', y: ' +
                            entry.contentRect.height +
                            '.'
                    );
                    window.clearTimeout(this.resizeTimeout);
                    this.resizeTimeout = window.setTimeout(
                        () => this.forceUpdate(),
                        300
                    );
                }
            });
        };
        this.resObserver = new ResizeObserver(callbackResize);
    }

    private columnMenuPosition() {
        if (this.rootElement.shadowRoot) {
            let menu: HTMLElement = this.rootElement.shadowRoot.querySelector(
                '.column-menu'
            );
            if (menu) {
                let wrapper: HTMLElement = menu.closest('th');
                positionRecalc(menu, wrapper);
                menu.classList.add('dynamic-position-active');
                menu.classList.add('visible');
            }
        }
    }

    private didRenderObservers() {
        let rows = this.rootElement.shadowRoot.querySelectorAll('tbody > tr');
        if (this.paginatedRowsLength < this.rowsLength && this.lazyLoadRows) {
            this.intObserver.observe(rows[this.paginatedRowsLength - 1]);
        }
    }

    private didLoadObservers() {
        this.resObserver.observe(this.rootElement);
        if (
            this.headerIsPersistent &&
            this.tableHeight === undefined &&
            this.tableWidth === undefined
        ) {
            this.intObserver.observe(this.tableRef);
            this.intObserver.observe(this.theadRef);
        }
    }

    private didLoadEventHandling() {
        // Attach function to close header menu onto the document
        this.documentHandlerCloseHeaderMenu = this.onHeaderCellContextMenuClose.bind(
            this
        );
        // We use the click event to avoid a menu closing another one
        document.addEventListener('click', this.documentHandlerCloseHeaderMenu);
        this.tableAreaRef.addEventListener('scroll', () =>
            this.scrollStickyHeader()
        );
    }

    private scrollStickyHeader() {
        if (!this.stickyTheadRef) {
            return;
        }
        this.stickyTheadRef.scrollLeft = this.tableAreaRef.scrollLeft;
    }

    private setScrollOnHover() {
        this.scrollOnHoverInstance = new scrollOnHover();
        this.scrollOnHoverInstance.scrollOnHoverSetup(this.tableAreaRef);
    }

    private checkScrollOnHover() {
        if (!this.scrollOnHoverInstance) {
            if (
                this.scrollOnHover &&
                this.tableHeight === undefined &&
                this.tableWidth === undefined
            ) {
                this.setScrollOnHover();
            }
        } else {
            if (
                !this.scrollOnHover &&
                (this.tableHeight !== undefined ||
                    this.tableWidth !== undefined)
            ) {
                this.scrollOnHoverInstance.scrollOnHoverDisable(
                    this.tableAreaRef
                );
                this.scrollOnHoverInstance = undefined;
            }
        }
    }

    private customizePanelPosition() {
        if (this.customizeTopButtonRef) {
            positionRecalc(
                this.customizeTopPanelRef,
                this.customizeTopButtonRef
            );
        }
        if (this.customizeBottomButtonRef) {
            positionRecalc(
                this.customizeBottomPanelRef,
                this.customizeBottomButtonRef
            );
        }
    }

    private rowsPointLength(): number {
        return this._rowsLength(this.rows);
    }

    private paginatedRowsPointLength(): number {
        return this._rowsLength(this.paginatedRows);
    }

    private _rowsLength(r: Array<Row>): number {
        if (r == null) {
            return 0;
        }
        let count = 0;
        for (let i: number = 0; i < r.length; i++) {
            let row = r[i];
            if (row == null) {
                continue;
            }
            count += 1;
            if (row.group != null) {
                count += this._rowsLength(row.group.children);
            }
        }
        return count;
    }

    private setEvents() {
        const root: ShadowRoot = this.rootElement.shadowRoot;

        if (root) {
            //Column menu button: add group
            const columnMenuGroup: HTMLElement = root.querySelector(
                '.column-menu .f-button--wrapper.group'
            );
            if (columnMenuGroup) {
                const buttonEl: HTMLButtonElement = columnMenuGroup.querySelector(
                    'button'
                );
                if (buttonEl) {
                    buttonEl.onclick = (e: MouseEvent) =>
                        this.switchColumnGroup(e.target);
                }
                FButtonMDC(columnMenuGroup);
            }
            //Column menu button: add column
            const columnMenuAdd: HTMLElement = root.querySelector(
                '.column-menu .f-button--wrapper.add'
            );
            if (columnMenuAdd) {
                const buttonEl: HTMLButtonElement = columnMenuAdd.querySelector(
                    'button'
                );
                if (buttonEl) {
                    buttonEl.onclick = (e: MouseEvent) =>
                        this.addColumn(e.target);
                }
                FButtonMDC(columnMenuAdd);
            }
            //Column menu button: remove column
            const columnMenuRemove: HTMLElement = root.querySelector(
                '.column-menu .f-button--wrapper.remove'
            );
            if (columnMenuRemove) {
                const buttonEl: HTMLButtonElement = columnMenuRemove.querySelector(
                    'button'
                );
                if (buttonEl) {
                    buttonEl.onclick = (e: MouseEvent) =>
                        this.removeColumn(e.target);
                }
                FButtonMDC(columnMenuRemove);
            }
            //Column menu button: add code/description
            const columnMenuDescription: HTMLElement = root.querySelector(
                '.column-menu .f-button--wrapper.description'
            );
            if (columnMenuDescription) {
                const buttonEl: HTMLButtonElement = columnMenuDescription.querySelector(
                    'button'
                );
                if (buttonEl) {
                    buttonEl.onclick = (e: MouseEvent) =>
                        this.onAddCodeDecodeColumnClick(e);
                }
                FButtonMDC(columnMenuDescription);
            }
            //Row multiselection checkboxex
            const multiselectionCheckboxes: NodeListOf<Element> = root.querySelectorAll(
                'td[row-select-cell] .f-checkbox--wrapper'
            );
            for (
                let index = 0;
                index < multiselectionCheckboxes.length;
                index++
            ) {
                const checkboxEl: HTMLButtonElement = multiselectionCheckboxes[
                    index
                ].querySelector('input');
                if (checkboxEl) {
                    checkboxEl.onchange = () =>
                        this.handleRowSelect(
                            multiselectionCheckboxes[index]['data-row']
                        );
                }
                FCheckboxMDC(multiselectionCheckboxes[index] as HTMLElement);
            }
            //Row actions: expander
            const expanderRowActions: NodeListOf<Element> = root.querySelectorAll(
                '[row-action-cell] .f-button--wrapper.expander'
            );
            for (let index = 0; index < expanderRowActions.length; index++) {
                const buttonEl: HTMLButtonElement = expanderRowActions[
                    index
                ].querySelector('button');
                if (buttonEl) {
                    buttonEl.onclick = (e: MouseEvent) =>
                        this.onRowActionExpanderClick(
                            e,
                            expanderRowActions[index]['data-row']
                        );
                }
            }

            //Row actions: actions
            const rowActions: NodeListOf<Element> = root.querySelectorAll(
                '[row-action-cell] .f-button--wrapper.action'
            );
            if (rowActions) {
                for (let index = 0; index < rowActions.length; index++) {
                    const buttonEl: HTMLButtonElement = rowActions[
                        index
                    ].querySelector('button');
                    if (buttonEl) {
                        buttonEl.onclick = (e: MouseEvent) =>
                            this.onDefaultRowActionClick(
                                e,
                                rowActions[index]['data-action']
                            );
                    }
                }
            }
            //Groups chip set
            const groupChip: HTMLElement = root.querySelector(
                '#group-chips.f-chip--wrapper'
            );
            if (groupChip) {
                const chips: NodeListOf<HTMLElement> = groupChip.querySelectorAll(
                    '.mdc-chip'
                );
                for (let index = 0; index < chips.length; index++) {
                    const cancelIcon: HTMLElement = chips[index].querySelector(
                        '.mdc-chip__icon.clear'
                    );
                    if (cancelIcon) {
                        cancelIcon.onclick = () => this.removeGroup(index);
                    }
                }
                FChipMDC(groupChip);
            }
            //Global filter text field
            const globalFilter: HTMLElement = root.querySelector(
                '#global-filter .f-text-field--wrapper'
            );
            if (globalFilter) {
                const globalFilterInput: HTMLInputElement = globalFilter.querySelector(
                    'input'
                );
                const globalFilterClear: HTMLElement = globalFilter.querySelector(
                    '.clear'
                );
                globalFilterInput.oninput = (event) => {
                    const t = event.target;
                    window.clearTimeout(this.globalFilterTimeout);
                    this.globalFilterTimeout = window.setTimeout(
                        () => this.onGlobalFilterChange(t),
                        300,
                        t
                    );
                };
                if (globalFilterClear) {
                    globalFilterClear.onclick = () =>
                        this.onGlobalFilterChange(null);
                }
                FTextFieldMDC(globalFilter);
            }
        }
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        logLoad(this, false);

        this.isRestoringState = true;
        // *** Store
        this.initWithPersistedState();
        // ***
        if (this.pageSelected > 0) {
            this.currentPage = this.pageSelected;
        }
        this.currentRowsPerPage = this.rowsPerPage;
        this.isRestoringState = false;

        //this.identifyAndInitRows();
        identify(this.getRows());
        this.expandGroupsHandler();

        if (document.querySelectorAll('.header')[0]) {
            this.navBarHeight = document.querySelectorAll(
                '.header'
            )[0].clientHeight;
        } else {
            this.navBarHeight = 0;
        }
        this.setObserver();

        //this.recalculateRows();

        setThemeCustomStyle(this);

        // Detects is the browser is Safari. If needed, this function can be moved into an external file and then imported into components
        this.isSafariBrowser =
            CSS.supports('position', '-webkit-sticky') ||
            !!(window && (window as Window & { safari?: object }).safari);
    }

    componentWillRender() {
        logRender(this, false);
    }

    componentDidRender() {
        if (this.showCustomization) {
            this.customizePanelPosition();
        }
        this.columnMenuPosition();
        this.totalMenuPosition();
        this.checkScrollOnHover();
        this.didRenderObservers();
        this.hideShowColumnRemoveDropArea(false);
        this.setEvents();

        if (
            this.headerIsPersistent &&
            this.tableHeight === undefined &&
            this.tableWidth === undefined
        ) {
            this.updateStickyHeaderSize();
        }

        setTimeout(() => this.updateFixedRowsAndColumnsCssVariables(), 50);
        // *** Store
        if (this.lazyLoadCells) {
            this.persistState();
        }
        // ***
        logRender(this, true);
    }

    componentDidLoad() {
        this.didLoadObservers();
        this.didLoadEventHandling();

        // automatic row selection
        if (this.selectRowsById) {
            this.selectedRows = [];
            let selectedIds: Array<string> = this.selectRowsById.split(';');
            this.selectedRows = this.renderedRows.filter((r) => {
                return selectedIds.indexOf(r.id) >= 0;
            });

            if (this.selectedRows && this.selectedRows.length > 0) {
                this.kupRowSelected.emit({
                    selectedRows: this.selectedRows,
                    clickedColumn: null,
                    clickedRow: null,
                });
            }
        } else if (this.selectRow && this.selectRow > 0) {
            if (this.selectRow <= this.renderedRows.length) {
                this.selectedRows = [];
                this.selectedRows.push(this.renderedRows[this.selectRow - 1]);
                this.kupAutoRowSelect.emit({
                    selectedRow: this.selectedRows[0],
                });
            }
        }

        this.lazyLoadCells = true;
        this.kupDidLoad.emit();
        logLoad(this, true);
    }

    componentDidUnload() {
        // Remove function to close header menu onto the document
        if (this.documentHandlerCloseHeaderMenu) {
            document.removeEventListener(
                'click',
                this.documentHandlerCloseHeaderMenu
            );
        }
        this.kupDidUnload.emit();
    }

    //======== Utility methods ========

    private resetSelectedRows() {
        this.selectedRows = [];
        this.kupResetSelectedRows.emit();
    }

    private resetCurrentPage() {
        this.currentPage = 1;
        this.resetSelectedRows();
    }

    private _setTooltip(event: MouseEvent, cell: Cell) {
        setTooltip(event, cell, this.tooltip);
    }

    private _unsetTooltip() {
        unsetTooltip(this.tooltip);
    }

    private getColumns(): Array<Column> {
        return this.data && this.data.columns
            ? this.data.columns
            : [{ title: '', name: '' }];
    }

    private getSizedColumns() {
        let columns = this.getColumns();
        let sizedColumns = [];
        for (let j = 0; j < columns.length; j++) {
            if (
                columns[j].size !== null &&
                columns[j].size !== undefined &&
                columns[j].size !== ''
            ) {
                sizedColumns.push(columns[j]);
            }
        }
        if (sizedColumns.length > 0) {
            return sizedColumns;
        } else {
            return undefined;
        }
    }

    private getVisibleColumns(): Array<Column> {
        // TODO: change into `visible ?? true` when TS dependency has been updated
        const visibleColumns = this.getColumns().filter(({ visible }) =>
            visible !== undefined ? visible : true
        );

        // check grouping
        if (this.isGrouping()) {
            // filtering column based on group visibility
            return visibleColumns.filter((column) => {
                // check if in group
                let group = null;
                for (let currentGroup of this.groups) {
                    if (currentGroup.column === column.name) {
                        group = currentGroup;
                        break;
                    }
                }

                if (group) {
                    // return true if
                    // 1) group obj has not the 'visible' property or
                    // 2) group has 'visible' property and it is true
                    return !group.hasOwnProperty('visible') || group.visible;
                }

                // not in group -> visible
                return true;
            });
        }

        return visibleColumns;
    }

    private getGroupByName(column: string): GroupObject {
        if (!this.isGrouping()) {
            return null;
        }

        for (let group of this.groups) {
            if (group.column === column) {
                return group;
            }
        }

        return null;
    }

    private getColumnValues(
        column: Column
    ): { value: string; displayedValue: string }[] {
        let values: { value: string; displayedValue: string }[] = new Array();

        let value = this.getTextFieldFilterValue(column.name);
        let interval = this.getIntervalTextFieldFilterValues(column);
        if (
            column.valuesForFilter != null &&
            column.valuesForFilter.length > 0
        ) {
            column.valuesForFilter.forEach((element) => {
                let v = element;
                if (
                    value == '' ||
                    isFilterCompliantForSimpleValue(
                        v,
                        column.obj,
                        value,
                        interval
                    )
                ) {
                    values.push({
                        value: v,
                        displayedValue: getValueForDisplay(
                            v,
                            column.obj,
                            column.decimals
                        ),
                    });
                }
            });
            return values;
        }

        /** è necessario estrarre i valori della colonna di tutte le righe
         * filtrate SENZA il filtro della colonna stessa corrente */
        let tmpFilters: GenericFilter = { ...this.filters };

        tmpFilters[column.name] = {
            textField: value,
            checkBoxes: [],
            interval: interval,
        };

        let visibleColumns = this.getVisibleColumns();
        let columnObject = getColumnByName(visibleColumns, column.name);

        let tmpRows = filterRows(
            this.getRows(),
            tmpFilters,
            this.globalFilterValue,
            this.getColumns()
        );

        if (columnObject != null) {
            tmpRows = tmpRows.sort((n1: Row, n2: Row) => {
                return compareValues(
                    columnObject.obj,
                    n1.cells[column.name].value,
                    columnObject.obj,
                    n2.cells[column.name].value,
                    SortMode.A
                );
            });
        }

        /** il valore delle righe attualmente filtrate, formattato */
        tmpRows.forEach((row) =>
            this.addColumnValueFromRow(values, column, row)
        );

        return values;
    }

    private addColumnValueFromRow(
        values: { value: string; displayedValue: string }[],
        column: Column,
        row: Row
    ) {
        const cell = row.cells[column.name];
        if (cell) {
            let item: { value: string; displayedValue: string } = {
                value: cell.value,
                displayedValue: getCellValueForDisplay(column, cell),
            };
            if (!this.columnValuesContainsValue(values, item)) {
                values.push(item);
            }
        }
    }

    private columnValuesContainsValue(
        values: { value: string; displayedValue: string }[],
        value: { value: string; displayedValue: string }
    ): boolean {
        if (values == null || values.length < 1) {
            return false;
        }
        for (let i = 0; i < values.length; i++) {
            if (values[i].value == value.value) {
                return true;
            }
        }
        return false;
    }

    private getRows(): Array<Row> {
        return this.data && this.data.rows ? this.data.rows : [];
    }

    // TODO if is not shared, move this in the third parameter of setKetchupDraggable method
    private addMultiSelectDragImageToEvent(event: DragEvent) {
        let dragImage = document.createElement('img');
        dragImage.src = dragMultipleImg;
        event.dataTransfer.setDragImage(dragImage, 0, 0);
    }

    private initRows(): void {
        this.filterRows();

        this.footer = calcTotals(
            normalizeRows(this.getColumns(), this.rows),
            this.totals
        );

        this.groupRows();

        this.sortRows();
        this.adjustPaginator();

        this.paginatedRows = paginateRows(
            this.rows,
            this.currentPage,
            this.currentRowsPerPage,
            this.isGrouping()
        );
        this.paginatedRowsLength = this.paginatedRowsPointLength();
    }

    private filterRows(): void {
        this.rows = filterRows(
            this.getRows(),
            this.filters,
            this.globalFilterValue,
            this.getColumns()
        );
        this.rowsLength = this.rowsPointLength();
    }

    private isGrouping() {
        return this.groups && this.groups.length > 0;
    }

    private hasRowActions() {
        return this.rowActions !== undefined;
    }

    private removeGroup(index: number) {
        if (index >= 0) {
            // removing group from prop
            this.groups.splice(index, 1);
            this.groups = [...this.groups];
        }
    }

    private hasTotals() {
        return this.totals && Object.keys(this.totals).length > 0;
    }

    /**
     * Returns if the current data table must have the with set to auto to make table as large as the sum
     * of the table columns fixed width.
     * Table margin gets set to auto to center it.
     */
    private tableHasAutoWidth(): boolean {
        if (!this.sizedColumns) {
            return;
        }
        const visibleCols = this.getVisibleColumns();
        // Before checking each column, controls that visible columns are as many as items with custom sizes.
        // If there are more visible columns, it means that the width of the table will be set to auto.
        if (visibleCols.length <= this.sizedColumns.length) {
            let found = false;

            // Each visible column must have its own width for the table to have a auto width
            for (let i = 0; i < visibleCols.length; i++) {
                found = false;
                for (let j = 0; j < this.sizedColumns.length; j++) {
                    if (visibleCols[i].name === this.sizedColumns[j].name) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    private forceGroupExpansion() {
        this.rows.forEach((row) => this.forceRowGroupExpansion(row));
        this.paginatedRows.forEach((row) => this.forceRowGroupExpansion(row));
    }

    private forceRowGroupExpansion(row: Row) {
        // check if row is group
        if (!row.group) {
            return;
        }

        // forcing row expanded
        row.group.expanded = this.expandGroups;

        // updating group state
        // check if already present
        let groupState = this.groupState[row.group.id];
        if (!groupState) {
            groupState = {
                expanded: this.expandGroups,
            };
        } else {
            groupState.expanded = this.expandGroups;
        }

        this.groupState[row.group.id] = groupState;

        if (row.group.children) {
            row.group.children.forEach((childRow) =>
                this.forceRowGroupExpansion(childRow)
            );
        }
    }

    private adjustPaginator() {
        const numberOfRows = this.rowsLength;

        // check if current page is valid
        const numberOfPages = Math.ceil(numberOfRows / this.currentRowsPerPage);
        if (this.currentPage > numberOfPages) {
            // reset page
            this.resetCurrentPage();
        }
    }

    //==== Fixed columns and rows methods ====
    private composeFixedCellStyleAndClass(
        columnCssIndex: number,
        rowCssIndex: number,
        extraCellsCount: number = 0
    ):
        | undefined
        | {
              fixedCellClasses: GenericObject;
              fixedCellStyle: GenericObject;
          } {
        if (this.isGrouping()) {
            return undefined;
        }

        //-- Controls if there are fixed rows or columns --
        const validFixedColumn: boolean =
            Number.isInteger(this.fixedColumns) &&
            columnCssIndex <= this.fixedColumns + extraCellsCount;
        const validFixedRowIndex =
            Number.isInteger(this.fixedRows) &&
            rowCssIndex > 0 &&
            rowCssIndex <= this.fixedRows;

        // When the cell is not valid to be either into a fixed column or into a fixed row, returns null.
        if (!validFixedRowIndex && !validFixedColumn) {
            return undefined;
        }

        const fixedCellClasses: GenericObject = {},
            fixedCellStyle: GenericObject = {};

        if (validFixedColumn) {
            fixedCellClasses[FixedCellsClasses.columns] = validFixedColumn;
            fixedCellClasses['show-column-separator'] =
                ShowGrid.COMPLETE === this.showGrid ||
                ShowGrid.COL === this.showGrid;
            fixedCellStyle['left'] =
                'var(' + FixedCellsCSSVarsBase.columns + columnCssIndex + ')';
        }

        if (validFixedRowIndex) {
            fixedCellClasses[FixedCellsClasses.rows] = !!validFixedRowIndex;
            fixedCellClasses['show-row-separator'] =
                ShowGrid.COMPLETE === this.showGrid ||
                ShowGrid.ROW === this.showGrid;
            fixedCellStyle['top'] =
                'var(' + FixedCellsCSSVarsBase.rows + rowCssIndex + ')';
        }

        return {
            fixedCellClasses,
            fixedCellStyle,
        };
    }

    private updateFixedRowsAndColumnsCssVariables(): boolean {
        // [ffbf] - Using getBoundingClientRect is mandatory since Firefox return a wrong value for ele.offsetHeight and witdh values

        // When grouping, the fixed rows and columns are not sticky
        if (this.isGrouping() || !this.tableRef) return false;
        let toRet: boolean = false;

        if (this.fixedRows >= 1) {
            let currentRow: HTMLTableRowElement = this.tableRef.querySelector(
                'tbody > tr:first-of-type'
            );
            // The height must start from the height of the header. BUT not on Safari.
            // Safari handles the sticky position on the tables in a different way, making it start from the tbody element
            // and not on the table with a specified position of sticky. There fore in that case we must set initial height to 0.
            let previousHeight: number = !this.isSafariBrowser
                ? (this.tableRef.querySelector(
                      'thead > tr:first-of-type > th:first-of-type'
                  ) as HTMLTableCellElement).getBoundingClientRect().height // [ffbf]
                : 0;

            // [CSSCount] - I must start from 1 since we are referencing html elements e not array (with CSS selectors starting from 1)
            for (let i = 1; i <= this.fixedRows && currentRow; i++) {
                this.tableAreaRef.style.setProperty(
                    FixedCellsCSSVarsBase.rows + i,
                    previousHeight + 'px'
                );
                previousHeight += (currentRow
                    .children[0] as HTMLTableCellElement).getBoundingClientRect()
                    .height; // [ffbf]
                currentRow = currentRow.nextElementSibling as HTMLTableRowElement;
            }
            toRet = true;
        }

        if (this.fixedColumns >= 1) {
            let currentCell: HTMLTableCellElement = this.tableRef.querySelector(
                'tbody > tr:first-of-type > td:first-of-type'
            );
            let previousWidth: number = 0;
            let totalFixedColumns =
                this.fixedColumns +
                (this.hasRowActions() ? 1 : 0) +
                (this.multiSelection ? 1 : 0);

            // @See [CSSCount]
            for (let i = 1; i <= totalFixedColumns && currentCell; i++) {
                this.tableAreaRef.style.setProperty(
                    FixedCellsCSSVarsBase.columns + i,
                    previousWidth + 'px'
                );
                previousWidth += currentCell.getBoundingClientRect().width; // [ffbf]
                currentCell = currentCell.nextElementSibling as HTMLTableCellElement;
            }
            toRet = true;
        }

        return toRet;
    }

    //======== Event Listeners ========
    private onColumnSort({ ctrlKey }: MouseEvent, columnName: string) {
        // check if columnName is already in sort array
        let i = 0;
        for (; i < this.sort.length; i++) {
            const sortObj = this.sort[i];
            if (sortObj.column === columnName) {
                break;
            }
        }

        if (i < this.sort.length) {
            // already in array... switching sort
            const sortObj = this.sort[i];

            const newSortObj: SortObject = {
                ...sortObj,
                sortMode:
                    sortObj.sortMode === SortMode.A ? SortMode.D : SortMode.A,
            };

            if (ctrlKey) {
                const newSort = [...this.sort];
                newSort[i] = newSortObj;
                this.sort = newSort;
            } else {
                this.sort = [newSortObj];
            }
        } else {
            const sortObj: SortObject = {
                column: columnName,
                sortMode: SortMode.A,
            };

            // if CTRL is pressed, push to array
            // else, replace current array
            if (ctrlKey) {
                this.sort = [...this.sort, sortObj];
            } else {
                this.sort = [sortObj];
            }
        }
    }

    private onRemoveFilter(column: Column) {
        // resetting current page
        this.resetCurrentPage();
        const newFilters: GenericFilter = { ...this.filters };
        newFilters[column.name] = {
            textField: '',
            checkBoxes: [],
            interval: null,
        };
        this.filters = newFilters;
    }

    private onFilterChange({ detail }, column: Column) {
        // resetting current page
        this.resetCurrentPage();
        let newFilter = '';
        if (detail.value) {
            newFilter = normalizeValue(detail.value.trim(), column.obj);
        }
        const newFilters: GenericFilter = { ...this.filters };
        setTextFieldFilterValue(newFilters, column.name, newFilter);
        this.filters = newFilters;
    }

    private onFilterChange2({ detail }, column: Column, filterValue: string) {
        // resetting current page
        this.resetCurrentPage();

        const newFilters = { ...this.filters };

        if (detail.checked == true || filterValue == null) {
            addCheckBoxFilterValue(newFilters, column.name, filterValue);
        } else {
            removeCheckBoxFilterValue(newFilters, column.name, filterValue);
        }

        this.filters = newFilters;
    }

    private onIntervalFilterChange(
        { detail },
        column: Column,
        index: FilterInterval,
        needNormalize: boolean,
        suffixToAdd?: string
    ) {
        // resetting current page
        this.resetCurrentPage();
        let newFilter = '';
        if (detail.value) {
            newFilter = detail.value.trim();
            if (needNormalize) {
                newFilter = normalizeValue(newFilter, column.obj);
            }
            if (suffixToAdd != null && newFilter != '') {
                newFilter = newFilter + suffixToAdd;
            }
        }

        const newFilters: GenericFilter = { ...this.filters };
        setIntervalTextFieldFilterValue(
            newFilters,
            column.name,
            newFilter,
            index
        );
        this.filters = newFilters;
    }

    private hasFiltersForColumn(column: Column): boolean {
        return hasFiltersForColumn(this.filters, column);
    }

    private getTextFieldFilterValue(column: string): string {
        return getTextFieldFilterValue(this.filters, column);
    }

    private getIntervalTextFieldFilterValues(column: Column): Array<string> {
        if (!hasIntervalTextFieldFilterValues(this.filters, column)) {
            return ['', ''];
        }
        return getIntervalTextFieldFilterValues(this.filters, column.name);
    }

    private getCheckBoxFilterValues(column: string): Array<string> {
        return getCheckBoxFilterValues(this.filters, column);
    }

    private getFilterValueForTooltip(column: Column): string {
        let txtFilter = this.getTextFieldFilterValue(column.name);
        let interval = this.getIntervalTextFieldFilterValues(column);
        let chkFilters = this.getCheckBoxFilterValues(column.name);

        let separator = '';

        let txtFiterRis = getValueForDisplay(
            txtFilter,
            column.obj,
            column.decimals
        );
        if (txtFilter != '') {
            separator = ' AND ';
        }
        if (interval[FilterInterval.FROM] != '') {
            txtFiterRis +=
                separator +
                '(>= ' +
                getValueForDisplay(
                    interval[FilterInterval.FROM],
                    column.obj,
                    column.decimals
                ) +
                ')';
            separator = ' AND ';
        }
        if (interval[FilterInterval.TO] != '') {
            txtFiterRis +=
                separator +
                '(<= ' +
                getValueForDisplay(
                    interval[FilterInterval.TO],
                    column.obj,
                    column.decimals
                ) +
                ')';
            separator = ' AND ';
        }

        separator = '';
        let ris = '';
        chkFilters.forEach((f) => {
            ris +=
                separator + getValueForDisplay(f, column.obj, column.decimals);
            separator = ' OR ';
        });

        if (ris != '') {
            ris = '(' + ris + ')';
            if (txtFiterRis != '') {
                ris = ' AND ' + ris;
            }
        }
        ris = txtFiterRis + ris;
        return ris;
    }

    private onGlobalFilterChange(inputEl: EventTarget) {
        this.resetCurrentPage();
        if (inputEl) {
            let el = inputEl as HTMLInputElement;
            this.globalFilterValue = el.value;
        } else {
            this.globalFilterValue = '';
        }
    }

    private handlePageChanged({ detail }) {
        this.currentPage = detail.newPage;
    }

    private handleRowsPerPageChanged({ detail }) {
        this.currentRowsPerPage = detail.newRowsPerPage;
        this.adjustPaginator();
    }

    private onRowClick(event: MouseEvent, row: Row) {
        // checking target
        const target = event.target;

        // selecting row
        if (!this.multiSelection) {
            this.selectedRows = [row];
        }
        // find clicked column
        let clickedColumn: string = null;
        if (target instanceof HTMLElement) {
            if (target.tagName !== 'TR') {
                let currentElement = target;
                while (currentElement.tagName !== 'TD') {
                    currentElement = currentElement.parentElement;
                }

                clickedColumn = currentElement.dataset.column;
            }
        }

        // selecting clicked column
        if (clickedColumn) {
            this.deselectColumn(this.selectedColumn);
            this.selectedColumn = clickedColumn;
            this.selectColumn(this.selectedColumn);

            // emit event
            this.kupRowSelected.emit({
                selectedRows: this.selectedRows,
                clickedRow: row,
                clickedColumn,
            });
        }
    }

    private selectColumn(selectedColumn: string) {
        let columnCells = this.rootElement.shadowRoot.querySelectorAll(
            'td[data-column="' + selectedColumn + '"]'
        );
        for (let i = 0; i < columnCells.length; i++) {
            columnCells[i].classList.add('selected');
        }
        let column = this.rootElement.shadowRoot.querySelector(
            'th[data-column="' + selectedColumn + '"]'
        );
        if (column) {
            column.classList.add('selected');
        }
    }

    private deselectColumn(selectedColumn: string) {
        let columnCells = this.rootElement.shadowRoot.querySelectorAll(
            'td[data-column="' + selectedColumn + '"]'
        );
        for (let i = 0; i < columnCells.length; i++) {
            columnCells[i].classList.remove('selected');
        }
        let column = this.rootElement.shadowRoot.querySelector(
            'th[data-column="' + selectedColumn + '"]'
        );
        if (column) {
            column.classList.remove('selected');
        }
    }

    private onDefaultRowActionClick(
        e: MouseEvent,
        { action, row, type, index }
    ) {
        e.stopPropagation();

        this.kupRowActionClicked.emit({
            action,
            index,
            row,
            type,
        });
    }

    private onRowActionExpanderClick(e: MouseEvent, row: Row) {
        e.stopPropagation();

        this.kupRowActionClicked.emit({
            row,
            type: 'expander',
        });
    }

    private handleRowSelect(row: Row) {
        const index = this.selectedRows.indexOf(row);

        if (index < 0) {
            // adding
            this.selectedRows = [...this.selectedRows, row];
        } else {
            // removing
            this.selectedRows.splice(index, 1);
            this.selectedRows = [...this.selectedRows];
        }

        this.kupRowSelected.emit({
            selectedRows: this.selectedRows,
            clickedRow: null,
            clickedColumn: null,
        });
    }

    private onRowExpand(row: Row) {
        // row should be a 'group' row
        row.group.expanded = !row.group.expanded;

        // updating group map
        this.groupState[row.group.id].expanded = row.group.expanded;

        // changing group state to trigger rendering
        this.groupState = { ...this.groupState };
    }

    private onSelectAll({ target }) {
        if (target.checked) {
            // select all rows
            this.selectedRows = this.renderedRows;
            // triggering event
            this.kupRowSelected.emit({
                selectedRows: this.selectedRows,
                clickedColumn: null,
                clickedRow: null,
            });
        } else {
            // deselect all rows
            this.resetSelectedRows();
        }
    }

    private openMenu(column: Column) {
        this.openedMenu = column.name;
    }

    private closeMenu() {
        this.openedMenu = null;
    }

    private openTotalMenu(column: Column) {
        this.openedTotalMenu = column.name;
    }

    private closeTotalMenu() {
        this.openedTotalMenu = null;
    }

    private closeMenuAndTooltip() {
        this.closeMenu();
        unsetTooltip(this.tooltip);
    }

    private isOpenedMenu(): boolean {
        return this.openedMenu != null;
    }

    private isOpenedTotalMenu(): boolean {
        return this.openedTotalMenu != null;
    }

    private isOpenedMenuForColumn(column: string): boolean {
        return this.openedMenu === column;
    }

    private isOpenedTotalMenuForColumn(column: string): boolean {
        return this.openedTotalMenu === column;
    }

    private onHeaderCellContextMenuOpen(e: MouseEvent, column: Column) {
        this.closeMenuAndTooltip();
        this.openMenu(column);
        // Prevent opening of the default browser menu
        e.preventDefault();
        return false;
    }

    /**
     * Type guard needed to be sure that an object returned from composePath() is an HTMLElement with classes
     * @param node
     */
    private isHTMLElementFromEventTarget(
        node: EventTarget
    ): node is HTMLElement {
        return (node as HTMLElement).classList !== undefined;
    }

    private hasOverlayActions(column: Column): boolean {
        if (column == null || column.obj == null) {
            return false;
        }
        return canHaveDerivedColumn(column.obj);
    }

    private onAddCodeDecodeColumnClick(e: Event, column?: Column) {
        e.stopPropagation();
        let columnName: string;
        if (!column) {
            columnName = (e.target as HTMLElement).closest('th').dataset.column;
        } else {
            columnName = column.name;
        }
        this.kupAddCodeDecodeColumn.emit({
            column: columnName,
        });
        this.closeMenuAndTooltip();
    }

    private onHeaderCellContextMenuClose(event: MouseEvent) {
        // Gets the path of the event (does not work in IE11 or previous)
        const eventPath = event.composedPath();
        let fromMenu = false;
        let fromTotalMenu = false;
        let fromSameTable = false;

        // Examine the path
        for (let elem of eventPath) {
            // TODO When the footer is considered stable please do this in another dedicated method
            // check if is the open menu button the element which fired the event
            // TODO Maybe a better approach would be to use the blur event in order to hide the menu
            if ((elem as HTMLElement).id === totalMenuOpenID) {
                return;
            }

            // If we encounter our table we can stop looping the elements
            if (elem === this.tableAreaRef) {
                fromSameTable = true;
                break;
            }

            // If the event comes from a menu of the table header
            if (
                this.isHTMLElementFromEventTarget(elem) &&
                elem.classList &&
                elem.classList.contains('column-menu')
            ) {
                fromMenu = true;
            }

            // TODO When the footer is considered stable please do this in another dedicated method
            // If the event comes from a menu of the table footer
            if (
                this.isHTMLElementFromEventTarget(elem) &&
                elem.classList &&
                elem.classList.contains('total-menu')
            ) {
                fromTotalMenu = true;
            }
        }

        // When we have an open menu and the event does NOT come from the same table, we close the menu.
        if (this.isOpenedMenu() && !(fromMenu && fromSameTable)) {
            this.closeMenuAndTooltip();
        }

        // TODO When the footer is considered stable please do this in another dedicated method
        if (this.isOpenedTotalMenu() && !(fromTotalMenu && fromSameTable)) {
            this.closeTotalMenu();
        }
    }

    private addColumn(el: EventTarget) {
        const column: string = (el as HTMLElement).closest('th').dataset.column;
        this.kupAddColumn.emit({
            column: column,
        });
        this.closeMenuAndTooltip();
    }

    private removeColumn(el: EventTarget) {
        const columnName: string = (el as HTMLElement).closest('th').dataset
            .column;
        let column = getColumnByName(this.getColumns(), columnName);
        column.visible = false;
        this.closeMenu();
    }

    private switchColumnGroup(el: EventTarget): void {
        const column: string = (el as HTMLElement).closest('th').dataset.column;
        const group: GroupObject = this.getGroupByName(column);
        // resetting opened menu
        this.closeMenuAndTooltip();

        // reset group state
        this.groupState = {};

        if (group !== null) {
            // remove from grouping
            const index = this.groups.indexOf(group);
            this.groups.splice(index, 1);
            this.groups = [...this.groups];
        } else {
            // add to groups
            this.groups = [...this.groups, { column, visible: true }];
        }
    }

    private onJ4btnClicked(row, column, cell) {
        // Since this function is called with bind, the event from the kup-button gets passed into the arguments array
        const buttonEvent = arguments[3] as UIEvent;
        if (buttonEvent) {
            // Prevents double events to be fired.
            buttonEvent.stopPropagation();
        } else {
            throw 'kup-data-table error: missing event';
        }
        this.kupCellButtonClicked.emit({
            cell,
            column,
            row,
        });
    }

    // utility methods
    private groupRows(): void {
        if (!this.isGrouping()) {
            return;
        }

        this.rows = groupRows(
            this.getColumns(),
            this.rows,
            this.groups,
            this.totals
        );

        this.adjustGroupState();
    }

    @Method()
    async getInternalState() {
        // TODO - Just for test
        return {
            groups: this.groups,
            filters: this.filters,
            data: this.data,
        };
    }

    // Handler for loadMore button is clicked.
    private onLoadMoreClick() {
        let loadItems: number = 0;

        switch (this.loadMoreMode) {
            case LoadMoreMode.CONSTANT:
                loadItems = this.loadMoreStep;
                break;
            case LoadMoreMode.CONSTANT_INCREMENT:
                loadItems = this.loadMoreStep * (this.loadMoreEventCounter + 1);
                break;
            case LoadMoreMode.PROGRESSIVE_THRESHOLD:
                loadItems =
                    Math.max(
                        this.loadMoreEventPreviousQuantity,
                        this.loadMoreStep
                    ) * Math.min(this.loadMoreEventCounter + 1, 2);
                break;
        }

        if (loadItems > this.loadMoreLimit) {
            loadItems = this.loadMoreLimit;
        }

        this.kupLoadMoreClicked.emit({
            loadItems,
        });

        this.loadMoreEventPreviousQuantity = loadItems;
        this.loadMoreEventCounter++;
    }

    private adjustGroupState(): void {
        if (
            !this.rows ||
            this.rowsLength === 0 ||
            !this.rows[0].hasOwnProperty('group')
        ) {
            // no grouping
            return;
        }

        this.rows.forEach((r) => this.adjustGroupStateFromRow(r));
    }

    private adjustGroupStateFromRow(row: Row): void {
        if (!row || !row.hasOwnProperty('group')) {
            // not a groping row, nothing to do
            return;
        }

        const group = row.group;

        // check if already in group state
        let groupFromState = this.groupState[group.id];

        if (!groupFromState) {
            // add to state
            this.groupState[group.id] = group;
        } else {
            // update expanded
            group.expanded = groupFromState.expanded;
        }

        group.children.forEach((child) => this.adjustGroupStateFromRow(child));
    }

    private sortRows(): void {
        this.rows = sortRows(this.rows, this.sort);
    }

    private getSortIcon(columnName: string): string {
        // check if column in sort array
        for (let sortObj of this.sort) {
            if (sortObj.column === columnName) {
                return 'A' === sortObj.sortMode ? 'descending' : 'ascending';
            }
        }

        // default
        return '';
    }

    private getSortDecode(columnName: string): string {
        // check if column in sort array
        for (let sortObj of this.sort) {
            if (sortObj.column === columnName) {
                return 'A' === sortObj.sortMode ? 'Ascending' : 'Descending';
            }
        }

        // default
        return 'Sort column';
    }

    private calculateColspan() {
        let colSpan = this.getVisibleColumns().length;

        if (this.multiSelection) {
            colSpan += 1;
        }

        if (this.hasRowActions()) {
            colSpan += 1;
        }

        return colSpan;
    }

    private isGroupExpanded({ group }: Row): boolean {
        if (!group) {
            return false;
        }

        // check if in group state
        if (this.groupState[group.id]) {
            return this.groupState[group.id].expanded;
        } else {
            return false;
        }
    }

    //==== Column sort order methods ====
    private handleColumnSort(receivingColumn: Column, sortedColumn: Column) {
        // Get receiving column position
        const receivingColIndex = this.data.columns.findIndex(
            (col) =>
                col.name === receivingColumn.name &&
                col.title === receivingColumn.title
        );
        // Get sorted column current position
        const sortedColIndex = this.data.columns.findIndex(
            (col) =>
                col.name === sortedColumn.name &&
                col.title === sortedColumn.title
        );

        // Moves the sortedColumn into the correct position
        if (this.sortableColumnsMutateData) {
            this.moveSortedColumns(
                this.data.columns,
                receivingColIndex,
                sortedColIndex
            );
        }
    }

    /**
     * After a drop of a column header, if the table can update its own data, does so and triggers rerender.
     * @param columns - The columns to sort
     * @param receivingColumnIndex - The index where the column will be inserted
     * @param sortedColumnIndex - The index where the column will be removed
     */
    private moveSortedColumns(
        columns: Column[],
        receivingColumnIndex: number,
        sortedColumnIndex: number
    ) {
        const remove = columns.splice(sortedColumnIndex, 1);
        columns.splice(receivingColumnIndex, 0, remove[0]);
        this.triggerColumnSortRerender = !this.triggerColumnSortRerender;
    }

    @Method() async defaultSortingFunction(
        columns: Column[],
        receivingColumnIndex: number,
        sortedColumnIndex: number,
        useNewObject: boolean = false
    ) {
        const toSort = !useNewObject ? columns : [...columns];

        this.moveSortedColumns(toSort, receivingColumnIndex, sortedColumnIndex);

        return toSort;
    }

    private applyLineBreaks(content: string) {
        // We add a break line before every chunk
        return content
            .split(this.lineBreakCharacter)
            .map((chunk, index) => (index !== 0 ? [<br />, chunk] : chunk));
    }

    //======== render methods ========
    /**
     * Given the parameters return the classes and style for each table header cell
     * @param columnName - The name of the columns currently being examinated
     * @param columnIndex - The index of the current column
     * @param extraCells - the extra cells rendered into the table
     */
    private composeHeaderCellClassAndStyle(
        columnIndex: number,
        extraCells: number = 0,
        column: Column
    ): {
        columnClass: GenericObject;
        thStyle: GenericObject;
    } {
        let columnClass: GenericObject = {},
            thStyle: GenericObject = {};

        if (
            isBar(column.obj) ||
            isButton(column.obj) ||
            isChart(column.obj) ||
            isCheckbox(column.obj) ||
            isImage(column.obj) ||
            isIcon(column.obj) ||
            isProgressBarObj(column.obj) ||
            isRadioObj(column.obj) ||
            isVoCodver(column.obj)
        ) {
            columnClass.centered = true;
        }

        if (isNumber(column.obj)) {
            columnClass.number = true;
        }

        if (isIcon(column.obj) || isVoCodver(column.obj)) {
            columnClass.icon = true;
        }
        // For fixed cells styles and classes
        const fixedCellStyle = this.composeFixedCellStyleAndClass(
            columnIndex + 1 + extraCells,
            0,
            extraCells
        );
        if (fixedCellStyle) {
            columnClass = {
                ...columnClass,
                ...fixedCellStyle.fixedCellClasses,
            };
            thStyle = {
                ...thStyle,
                ...fixedCellStyle.fixedCellStyle,
            };
        }

        return {
            columnClass,
            thStyle,
        };
    }

    private getIntervalTextualFilter(column: Column) {
        let textFieldData = {};
        textFieldData['fullWidth'] = true;
        textFieldData['isClearable'] = true;
        textFieldData['helperWhenFocused'] = true;

        let interval = this.getIntervalTextFieldFilterValues(column);
        let initialValueFrom = interval[FilterInterval.FROM];
        let initialValueTo = interval[FilterInterval.TO];

        let comps = [];
        if (isNumber(column.obj)) {
            textFieldData['label'] = 'Search from...';
            comps.push(
                <kup-text-field
                    {...textFieldData}
                    initialValue={initialValueFrom}
                    onKupTextFieldInput={(e) => {
                        window.clearTimeout(this.columnFilterTimeout);
                        this.columnFilterTimeout = window.setTimeout(
                            () =>
                                this.onIntervalFilterChange(
                                    e,
                                    column,
                                    FilterInterval.FROM,
                                    true
                                ),
                            300
                        );
                    }}
                    onKupTextFieldSubmit={() => {
                        this.closeMenuAndTooltip();
                    }}
                    onKupTextFieldClearIconClick={(e) => {
                        this.onIntervalFilterChange(
                            e,
                            column,
                            FilterInterval.FROM,
                            false
                        );
                    }}
                ></kup-text-field>
            );

            textFieldData['label'] = 'Search to...';
            comps.push(
                <kup-text-field
                    {...textFieldData}
                    initialValue={initialValueTo}
                    onKupTextFieldInput={(e) => {
                        window.clearTimeout(this.columnFilterTimeout);
                        this.columnFilterTimeout = window.setTimeout(
                            () =>
                                this.onIntervalFilterChange(
                                    e,
                                    column,
                                    FilterInterval.TO,
                                    true
                                ),
                            300
                        );
                    }}
                    onKupTextFieldSubmit={() => {
                        this.closeMenuAndTooltip();
                    }}
                    onKupTextFieldClearIconClick={(e) => {
                        this.onIntervalFilterChange(
                            e,
                            column,
                            FilterInterval.TO,
                            false
                        );
                    }}
                ></kup-text-field>
            );
        } else if (isTime(column.obj)) {
            textFieldData['label'] = 'Search from...';
            let data = { 'kup-text-field': { ...textFieldData } };
            comps.push(
                <kup-time-picker
                    data={data}
                    initialValue={initialValueFrom}
                    manageSeconds={isTimeWithSeconds(column.obj)}
                    onKupTimePickerItemClick={(e) => {
                        window.clearTimeout(this.columnFilterTimeout);
                        this.columnFilterTimeout = window.setTimeout(
                            () =>
                                this.onIntervalFilterChange(
                                    e,
                                    column,
                                    FilterInterval.FROM,
                                    false
                                ),
                            300
                        );
                    }}
                    onKupTimePickerInput={(e) => {
                        window.clearTimeout(this.columnFilterTimeout);
                        this.columnFilterTimeout = window.setTimeout(
                            () =>
                                this.onIntervalFilterChange(
                                    e,
                                    column,
                                    FilterInterval.FROM,
                                    true
                                ),
                            300
                        );
                    }}
                    onKupTimePickerTextFieldSubmit={() => {
                        this.closeMenuAndTooltip();
                    }}
                    onKupTimePickerClearIconClick={(e) => {
                        this.onIntervalFilterChange(
                            e,
                            column,
                            FilterInterval.FROM,
                            false
                        );
                    }}
                ></kup-time-picker>
            );
            textFieldData['label'] = 'Search to...';
            data = { 'kup-text-field': { ...textFieldData } };
            comps.push(
                <kup-time-picker
                    data={data}
                    initialValue={initialValueTo}
                    manageSeconds={isTimeWithSeconds(column.obj)}
                    onKupTimePickerItemClick={(e) => {
                        window.clearTimeout(this.columnFilterTimeout);
                        this.columnFilterTimeout = window.setTimeout(
                            () =>
                                this.onIntervalFilterChange(
                                    e,
                                    column,
                                    FilterInterval.TO,
                                    false
                                ),
                            300
                        );
                    }}
                    onKupTimePickerInput={(e) => {
                        window.clearTimeout(this.columnFilterTimeout);
                        this.columnFilterTimeout = window.setTimeout(
                            () =>
                                this.onIntervalFilterChange(
                                    e,
                                    column,
                                    FilterInterval.TO,
                                    true
                                ),
                            300
                        );
                    }}
                    onKupTimePickerTextFieldSubmit={() => {
                        this.closeMenuAndTooltip();
                    }}
                    onKupTimePickerClearIconClick={(e) => {
                        this.onIntervalFilterChange(
                            e,
                            column,
                            FilterInterval.TO,
                            false
                        );
                    }}
                ></kup-time-picker>
            );
        } else if (isDate(column.obj) || isTimestamp(column.obj)) {
            let suffixFrom = null;
            let suffixTo = null;
            if (isTimestamp(column.obj)) {
                suffixFrom = ' 00:00:00';
                suffixTo = ' 23:59:59';
                if (initialValueFrom != '') {
                    initialValueFrom = changeDateTimeFormat(
                        initialValueFrom,
                        ISO_DEFAULT_DATE_TIME_FORMAT,
                        ISO_DEFAULT_DATE_FORMAT
                    );
                }
                if (initialValueTo != '') {
                    initialValueTo = changeDateTimeFormat(
                        initialValueTo,
                        ISO_DEFAULT_DATE_TIME_FORMAT,
                        ISO_DEFAULT_DATE_FORMAT
                    );
                }
            }
            textFieldData['label'] = 'Search from...';
            let data = { 'kup-text-field': { ...textFieldData } };
            comps.push(
                <kup-date-picker
                    data={data}
                    initialValue={initialValueFrom}
                    onKupDatePickerItemClick={(e) => {
                        window.clearTimeout(this.columnFilterTimeout);
                        this.columnFilterTimeout = window.setTimeout(
                            () =>
                                this.onIntervalFilterChange(
                                    e,
                                    column,
                                    FilterInterval.FROM,
                                    false,
                                    suffixFrom
                                ),
                            300
                        );
                    }}
                    onKupDatePickerInput={(e) => {
                        window.clearTimeout(this.columnFilterTimeout);
                        this.columnFilterTimeout = window.setTimeout(
                            () =>
                                this.onIntervalFilterChange(
                                    e,
                                    column,
                                    FilterInterval.FROM,
                                    true,
                                    suffixFrom
                                ),
                            300
                        );
                    }}
                    onKupDatePickerTextFieldSubmit={() => {
                        this.closeMenuAndTooltip();
                    }}
                    onKupDatePickerClearIconClick={(e) => {
                        this.onIntervalFilterChange(
                            e,
                            column,
                            FilterInterval.FROM,
                            false,
                            suffixFrom
                        );
                    }}
                ></kup-date-picker>
            );
            textFieldData['label'] = 'Search to...';
            data = { 'kup-text-field': { ...textFieldData } };
            comps.push(
                <kup-date-picker
                    data={data}
                    initialValue={initialValueTo}
                    onKupDatePickerItemClick={(e) => {
                        window.clearTimeout(this.columnFilterTimeout);
                        this.columnFilterTimeout = window.setTimeout(
                            () =>
                                this.onIntervalFilterChange(
                                    e,
                                    column,
                                    FilterInterval.TO,
                                    false,
                                    suffixTo
                                ),
                            300
                        );
                    }}
                    onKupDatePickerInput={(e) => {
                        window.clearTimeout(this.columnFilterTimeout);
                        this.columnFilterTimeout = window.setTimeout(
                            () =>
                                this.onIntervalFilterChange(
                                    e,
                                    column,
                                    FilterInterval.TO,
                                    true,
                                    suffixTo
                                ),
                            300
                        );
                    }}
                    onKupDatePickerTextFieldSubmit={() => {
                        this.closeMenuAndTooltip();
                    }}
                    onKupDatePickerClearIconClick={(e) => {
                        this.onIntervalFilterChange(
                            e,
                            column,
                            FilterInterval.TO,
                            false,
                            suffixTo
                        );
                    }}
                ></kup-date-picker>
            );
        }

        return (
            <li role="menuitem" class="textfield-row">
                {comps}
            </li>
        );
    }

    private getTextualFilter(column: Column) {
        if (isColumnFiltrableByInterval(column)) {
            return this.getIntervalTextualFilter(column);
        }
        let filterInitialValue = this.getTextFieldFilterValue(column.name);
        filterInitialValue = getValueForDisplay(
            filterInitialValue,
            column.obj,
            column.decimals
        );
        return (
            <li role="menuitem" class="textfield-row">
                <kup-text-field
                    fullWidth={true}
                    isClearable={true}
                    label="Search..."
                    icon="magnify"
                    initialValue={filterInitialValue}
                    onKupTextFieldInput={(e) => {
                        window.clearTimeout(this.columnFilterTimeout);
                        this.columnFilterTimeout = window.setTimeout(
                            () => this.onFilterChange(e, column),
                            300
                        );
                    }}
                    onKupTextFieldSubmit={() => {
                        this.closeMenuAndTooltip();
                    }}
                    onKupTextFieldClearIconClick={(e) => {
                        this.onFilterChange(e, column);
                        this.closeMenuAndTooltip();
                    }}
                ></kup-text-field>
            </li>
        );
    }

    private renderHeader() {
        let specialExtraCellsCount: number = 0;

        // Renders multiple selection column
        let multiSelectColumn = null;
        if (this.multiSelection) {
            specialExtraCellsCount++;
            const selectionStyleAndClass = this.composeFixedCellStyleAndClass(
                specialExtraCellsCount,
                0,
                specialExtraCellsCount - 1
            );

            const style = {
                width: '30px',
                margin: '0 auto',
                ...(selectionStyleAndClass
                    ? selectionStyleAndClass.fixedCellStyle
                    : {}),
            };

            multiSelectColumn = (
                <th
                    class={
                        selectionStyleAndClass
                            ? selectionStyleAndClass.fixedCellClasses
                            : {}
                    }
                    style={style}
                >
                    <kup-checkbox
                        onKupCheckboxChange={(e) => this.onSelectAll(e)}
                        title={`selectedRow: ${this.selectedRows.length} - renderedRows: ${this.renderedRows.length}`}
                        checked={
                            this.selectedRows.length > 0 &&
                            this.selectedRows.length ===
                                this.renderedRows.length
                        }
                    />
                </th>
            );
        }

        // Renders action column
        let actionsColumn = null;
        if (this.hasRowActions()) {
            specialExtraCellsCount++;
            const selectionStyleAndClass = this.composeFixedCellStyleAndClass(
                specialExtraCellsCount,
                0,
                specialExtraCellsCount - 1
            );

            actionsColumn = (
                <th
                    class={
                        selectionStyleAndClass
                            ? selectionStyleAndClass.fixedCellClasses
                            : {}
                    }
                    style={
                        selectionStyleAndClass
                            ? selectionStyleAndClass.fixedCellStyle
                            : {}
                    }
                />
            );
        }

        // Renders normal cells
        const dataColumns = this.getVisibleColumns().map(
            (column, columnIndex) => {
                // Composes column cell style and classes
                const {
                    columnClass,
                    thStyle,
                } = this.composeHeaderCellClassAndStyle(
                    columnIndex,
                    specialExtraCellsCount,
                    column
                );

                //---- AddCodeDecodeColumn ----
                let overlay = null;
                /** disabled on release, for now... */
                /*
                if (this.hasOverlayActions(column)) {
                    columnClass['obj'] = true;
                    const svgLabel = 'Add code/decode column';
                    let svg = this.getIconPath('table-column-plus-after');
                    let iconStyle = {
                        mask: svg,
                        webkitMask: svg,
                    };
                    overlay = (
                        <span
                            title={svgLabel}
                            style={iconStyle}
                            class="icon-container overlay-action"
                            onClick={(e) => {
                                this.onAddCodeDecodeColumnClick(e, column);
                            }}
                            onMouseUp={(e) => e.stopPropagation()}
                        ></span>
                    );
                }
                */
                //---- Filter ----
                let filter = null;

                if (this.hasFiltersForColumn(column)) {
                    const svgLabel = `Remove filter(s): '${this.getFilterValueForTooltip(
                        column
                    )}'`;
                    /**
                     * When column has a filter but filters must not be displayed, shows an icon to remove the filter.
                     * Upon click, the filter gets removed.
                     * The payload event is simulated here.
                     */
                    filter = (
                        <span
                            title={svgLabel}
                            class="icon-container filter-remove"
                            onClick={() => {
                                this.onRemoveFilter(column);
                            }}
                        ></span>
                    );
                }

                //---- Sort ----
                let sortIcon = null;
                let sortEventHandler = undefined;

                // When sorting is enabled, there are two things to do:
                // 1 - Add correct icon to the table
                // 2 - stores the handler to be later set onto the whole cell
                if (this.sortEnabled) {
                    let iconClass = this.getSortIcon(column.name);
                    if (iconClass !== '') {
                        iconClass += ' icon-container';
                        sortIcon = <span class={iconClass}></span>;
                    }

                    // The handler for triggering the sorting of a column
                    sortEventHandler = (e: MouseEvent) => {
                        // Sorts column only when currently pressed mouse button is the the left click handler
                        // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
                        if (
                            e.button === 0 &&
                            !(e.target as HTMLTableCellElement).hasAttribute(
                                this.dragStarterAttribute
                            )
                        ) {
                            this.onColumnSort(e, column.name);
                        }
                    };

                    // Adds the sortable class to the header cell
                    columnClass['header-cell--sortable'] = true;
                }

                // Sets custom columns width
                if (this.sizedColumns) {
                    for (let i = 0; i < this.sizedColumns.length; i++) {
                        const currentCol = this.sizedColumns[i];

                        if (currentCol.name === column.name) {
                            const width = currentCol.size + '';
                            if (width.indexOf('ch') < 1) {
                                thStyle.width = width;
                                thStyle.minWidth = width;
                                thStyle.maxWidth = width;
                            }
                            thStyle.overflow = 'hidden';
                            break;
                        }
                    }
                }

                let columnMenu = undefined;
                if (this.isOpenedMenuForColumn(column.name)) {
                    const columnMenuItems: JSX.Element[] = [];
                    let checkboxWrapper: JSX.Element[] = [];

                    let actionHideCol = null;
                    if (this.removableColumns) {
                        actionHideCol = (
                            <FButton
                                icon="table-column-remove"
                                title="Hide column"
                                wrapperClass="remove"
                            />
                        );
                    }
                    columnMenuItems.push(
                        <li role="menuitem" class="button-row">
                            <FButton
                                icon="book"
                                title={
                                    this.getGroupByName(column.name) != null
                                        ? 'Disable grouping'
                                        : 'Enable grouping'
                                }
                                wrapperClass="group"
                            />
                            <FButton
                                icon="table-column-plus-after"
                                title="Add column"
                                wrapperClass="add"
                            />
                            {actionHideCol}
                            <FButton
                                icon="label"
                                title="Add code/description column"
                                wrapperClass="description"
                            />
                        </li>
                    );

                    if (this.showFilters && isStringObject(column.obj)) {
                        columnMenuItems.push(this.getTextualFilter(column));
                    }
                    if (
                        this.showFilters &&
                        (isStringObject(column.obj) || isCheckbox(column.obj))
                    ) {
                        let checkBoxesFilter = this.getCheckBoxFilterValues(
                            column.name
                        );
                        let columnValues: {
                            value: string;
                            displayedValue: string;
                        }[] = this.getColumnValues(column);
                        let checkboxItems: JSX.Element[] = [];
                        if (columnValues.length > 0) {
                            checkboxItems.push(
                                <kup-checkbox
                                    label={'(*All)'}
                                    checked={checkBoxesFilter.length == 0}
                                    onKupCheckboxChange={(e) => {
                                        this.onFilterChange2(e, column, null);
                                    }}
                                ></kup-checkbox>
                            );
                        }
                        columnValues.forEach((v) => {
                            let label = v.displayedValue;
                            if (isCheckbox(column.obj)) {
                                if (v.value == '1') {
                                    label = '(*checked)';
                                } else {
                                    label = '(*unchecked)';
                                }
                            }
                            checkboxItems.push(
                                <kup-checkbox
                                    label={label}
                                    checked={checkBoxesFilter.includes(v.value)}
                                    onKupCheckboxChange={(e) => {
                                        this.onFilterChange2(
                                            e,
                                            column,
                                            v.value
                                        );
                                    }}
                                ></kup-checkbox>
                            );
                        });

                        if (checkboxItems.length > 0) {
                            checkboxWrapper = (
                                <li role="menuitem" class="checkbox-row">
                                    {checkboxItems}
                                </li>
                            );
                        }
                    }

                    if (columnMenuItems.length !== 0) {
                        columnMenu = (
                            <div class={`kup-menu column-menu`}>
                                <ul
                                    role="menubar"
                                    onMouseUp={(e) => e.stopPropagation()}
                                >
                                    {columnMenuItems}
                                    {checkboxWrapper}
                                </ul>
                            </div>
                        );
                    }
                }

                // Reference for drag events and what they permit or not
                // https://html.spec.whatwg.org/multipage/dnd.html#concept-dnd-p
                const dragHandlers: DragHandlers = {
                    onDragStart: (e: DragEvent) => {
                        // Sets the type of drag
                        setDragEffectAllowed(e, 'move');

                        // Remember that the current target is different from the one print out in the console
                        // Sets which element has started the drag
                        (e.target as HTMLElement).setAttribute(
                            this.dragStarterAttribute,
                            ''
                        );

                        this.theadRef.setAttribute(this.dragFlagAttribute, '');
                        this.columnsAreBeingDragged = true;

                        this.hideShowColumnRemoveDropArea(
                            true,
                            e.target as HTMLElement
                        );

                        // TODO set drag payload and get it in the other methods when need it
                        // setDragDropPayload
                        // getDragDropPayload
                        // replace the used flags set with attribute
                    },
                    onDragEnd: (e: DragEvent) => {
                        // When the drag has ended, checks if the element still exists or it was destroyed by JSX
                        const targetElement = e.target as HTMLElement;
                        if (targetElement) {
                            // If it still exists, removes the attribute so that it can perform a new drag again
                            targetElement.removeAttribute(
                                this.dragStarterAttribute
                            );
                        }
                        // Remove the over attribute
                        const dragDropPayload = getDragDropPayload();
                        if (dragDropPayload && dragDropPayload.overElement) {
                            dragDropPayload.overElement.removeAttribute(
                                this.dragOverAttribute
                            );
                        }
                        this.theadRef.removeAttribute(this.dragFlagAttribute);
                        this.columnsAreBeingDragged = false;
                        //
                        this.hideShowColumnRemoveDropArea(false);
                    },
                };
                const dropHandlers: DropHandlers = {
                    onDrop: (e: DragEvent) => {
                        const transferredData = JSON.parse(
                            e.dataTransfer.getData(KupDataTableColumnDragType)
                        ) as Column;
                        // We are sure the tables have been dropped in a valid location -> starts sorting the columns
                        this.handleColumnSort(column, transferredData);

                        return KupDataTableColumnDragType;
                    },
                    onDragLeave: (e: DragEvent) => {
                        if (
                            e.dataTransfer.types.indexOf(
                                KupDataTableColumnDragType
                            ) >= 0
                        ) {
                            /*  */
                            (e.target as HTMLElement).removeAttribute(
                                this.dragOverAttribute
                            );
                        }
                    },
                    onDragOver: (e: DragEvent) => {
                        if (
                            e.dataTransfer.types.indexOf(
                                KupDataTableColumnDragType
                            ) >= 0
                        ) {
                            let overElement = e.target as HTMLElement;
                            if (overElement.tagName !== 'TH') {
                                overElement = overElement.closest('th');
                            }
                            overElement.setAttribute(
                                this.dragOverAttribute,
                                ''
                            );
                            // TODO do it without using the element but with data like id, etc.
                            setDragDropPayload({
                                overElement,
                            });
                            // If element can have a drop effect
                            if (
                                !overElement.hasAttribute(
                                    this.dragStarterAttribute
                                ) &&
                                this.columnsAreBeingDragged
                            ) {
                                setDragEffectAllowed(e, 'move');
                                return true;
                            } else {
                                setDragEffectAllowed(e, 'none');
                                return false;
                            }
                        }
                    },
                };

                columnClass.number = isNumber(column.obj);

                return (
                    <th
                        data-column={column.name}
                        class={columnClass}
                        style={thStyle}
                        onContextMenu={(e: MouseEvent) =>
                            this.onHeaderCellContextMenuOpen(e, column)
                        }
                        onMouseUp={sortEventHandler}
                        {...(this.enableSortableColumns
                            ? setKetchupDraggable(dragHandlers, {
                                  [KupDataTableColumnDragType]: column,
                                  'kup-drag-source-element': {
                                      column: column,
                                      id: this.rootElement.id,
                                  },
                              })
                            : {})}
                        {...(this.enableSortableColumns
                            ? setKetchupDroppable(
                                  dropHandlers,
                                  [KupDataTableColumnDragType],
                                  this.rootElement,
                                  {
                                      column: column,
                                      id: this.rootElement.id,
                                  }
                              )
                            : {})}
                    >
                        <span class="column-title">
                            {this.applyLineBreaks(column.title)}
                        </span>
                        {overlay}
                        {sortIcon}
                        {filter}
                        {columnMenu}
                    </th>
                );
            }
        );

        return [multiSelectColumn, actionsColumn, ...dataColumns];
        //  return [multiSelectColumn, groupColumn, actionsColumn, ...dataColumns];
    }

    private renderStickyHeader() {
        let specialExtraCellsCount: number = 0;

        let multiSelectColumn = null;
        if (this.multiSelection) {
            specialExtraCellsCount++;
            const selectionStyleAndClass = this.composeFixedCellStyleAndClass(
                specialExtraCellsCount,
                0,
                specialExtraCellsCount - 1
            );

            const style = {
                width: '30px',
                margin: '0 auto',
                ...(selectionStyleAndClass
                    ? selectionStyleAndClass.fixedCellStyle
                    : {}),
            };
            multiSelectColumn = (
                <th-sticky
                    class={
                        selectionStyleAndClass
                            ? selectionStyleAndClass.fixedCellClasses
                            : null
                    }
                    style={style}
                >
                    <kup-checkbox
                        onKupCheckboxChange={(e) => this.onSelectAll(e)}
                        title={`selectedRow: ${this.selectedRows.length} - renderedRows: ${this.renderedRows.length}`}
                        checked={
                            this.selectedRows.length > 0 &&
                            this.selectedRows.length ===
                                this.renderedRows.length
                        }
                    />
                </th-sticky>
            );
        }

        let groupColumn = null;

        // Empty cell for the actions
        let actionsColumn = null;
        if (this.hasRowActions()) {
            specialExtraCellsCount++;
            const selectionStyleAndClass = this.composeFixedCellStyleAndClass(
                specialExtraCellsCount,
                0,
                specialExtraCellsCount - 1
            );

            actionsColumn = (
                <th-sticky
                    class={
                        selectionStyleAndClass
                            ? selectionStyleAndClass.fixedCellClasses
                            : null
                    }
                    style={
                        selectionStyleAndClass
                            ? selectionStyleAndClass.fixedCellStyle
                            : null
                    }
                />
            );
        }

        // Composes normal header cells
        const dataColumns = this.getVisibleColumns().map(
            (column, columnIndex) => {
                const {
                    columnClass,
                    thStyle,
                } = this.composeHeaderCellClassAndStyle(
                    columnIndex,
                    specialExtraCellsCount,
                    column
                );

                return (
                    <th-sticky class={columnClass} style={thStyle}>
                        <span class="column-title">
                            {this.applyLineBreaks(column.title)}
                        </span>
                    </th-sticky>
                );
            }
        );

        return [multiSelectColumn, groupColumn, actionsColumn, ...dataColumns];
    }

    renderTooltip() {
        return (
            <kup-tooltip
                class="datatable-tooltip"
                loadTimeout={
                    this.showTooltipOnRightClick == true
                        ? 0
                        : this.tooltipLoadTimeout
                }
                detailTimeout={this.tooltipDetailTimeout}
                ref={(el: any) => (this.tooltip = el as KupTooltip)}
            ></kup-tooltip>
        );
    }

    areTotalsSelected(column: Column): boolean {
        return this.totals && this.totals[column.name] ? true : false;
    }

    onTotalsChange(event, column) {
        // close menu
        this.closeTotalMenu();
        if (column) {
            // must do this
            // otherwise does not fire the watcher
            const totalsCopy = { ...this.totals };
            const value = event.detail.selected.value;
            if (value === TotalLabel.CANC) {
                if (this.totals && this.totals[column.name]) {
                    delete totalsCopy[column.name];
                }
            } else {
                totalsCopy[column.name] = value;
            }
            this.totals = totalsCopy;
        }
    }

    private totalMenuPosition() {
        if (this.rootElement.shadowRoot) {
            let menu: HTMLElement = this.rootElement.shadowRoot.querySelector(
                '.total-menu'
            );
            if (menu) {
                let wrapper = menu.parentElement.querySelector(
                    '#' + totalMenuOpenID
                ) as HTMLElement;
                positionRecalc(menu, wrapper, 10, true);
                menu.classList.add('dynamic-position-active');
                menu.classList.add('visible');
            }
        }
    }

    private onTotalMenuOpen(column: Column) {
        this.closeMenuAndTooltip();
        this.closeTotalMenu();
        this.openTotalMenu(column);
    }

    renderFooter() {
        if (!this.showFooter && !this.hasTotals()) {
            // no footer
            return null;
        }

        let extraCells = 0;

        // Composes initial cells if necessary
        let selectRowCell = null;
        if (this.multiSelection) {
            extraCells++;
            const fixedCellStyle = this.composeFixedCellStyleAndClass(
                extraCells,
                0,
                extraCells
            );

            selectRowCell = (
                <td
                    class={
                        fixedCellStyle ? fixedCellStyle.fixedCellClasses : null
                    }
                    style={
                        fixedCellStyle ? fixedCellStyle.fixedCellStyle : null
                    }
                />
            );
        }

        let groupingCell = null;

        const footerCells = this.getVisibleColumns().map(
            (column: Column, columnIndex) => {
                const fixedCellStyle = this.composeFixedCellStyleAndClass(
                    columnIndex + 1 + extraCells,
                    0,
                    extraCells
                );

                let totalMenu = undefined;
                // TODO Manage the label with different languages
                let menuLabel = TotalLabel.CALC;
                if (this.totals) {
                    const totalValue = this.totals[column.name];
                    if (totalValue) {
                        if (totalValue.startsWith(TotalMode.MATH)) {
                            menuLabel = TotalLabel.MATH;
                        } else {
                            switch (totalValue) {
                                case TotalMode.COUNT:
                                    menuLabel = TotalLabel.COUNT;
                                    break;
                                case TotalMode.SUM:
                                    menuLabel = TotalLabel.SUM;
                                    break;
                                case TotalMode.AVERAGE:
                                    menuLabel = TotalLabel.AVERAGE;
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                }

                if (this.isOpenedTotalMenuForColumn(column.name)) {
                    let listData: ComponentListElement[] = [];
                    if (isNumber(column.obj)) {
                        // TODO Move these objects in declarations
                        listData.push(
                            {
                                text: TotalLabel.COUNT,
                                value: TotalMode.COUNT,
                                selected: false,
                            },
                            {
                                text: TotalLabel.SUM,
                                value: TotalMode.SUM,
                                selected: false,
                            },
                            {
                                text: TotalLabel.AVERAGE,
                                value: TotalMode.AVERAGE,
                                selected: false,
                            }
                        );
                    } else {
                        listData.push({
                            text: TotalLabel.COUNT,
                            value: TotalMode.COUNT,
                            selected: false,
                        });
                    }

                    // TODO replace this with find which is a better approach
                    // Note that this is not supported in older IE
                    let selectedItem = listData.find(
                        (item) => item.text === menuLabel
                    );
                    if (selectedItem) {
                        selectedItem.selected = true;
                        listData.push(
                            {
                                text: null,
                                value: null,
                                isSeparator: true,
                            },
                            {
                                text: TotalLabel.CANC,
                                value: TotalLabel.CANC,
                                selected: false,
                            }
                        );
                    }

                    totalMenu = (
                        <kup-list
                            class={`kup-menu total-menu`}
                            data={...listData}
                            is-menu
                            menu-visible
                            onKupListClick={(event) =>
                                this.onTotalsChange(event, column)
                            }
                        ></kup-list>
                    );
                }

                let footerClasses = {};
                if (fixedCellStyle) {
                    if (fixedCellStyle.fixedCellClasses) {
                        footerClasses = fixedCellStyle.fixedCellClasses;
                    }
                }
                if (!this.areTotalsSelected(column)) {
                    footerClasses['hidden'] = true;
                }

                return (
                    <td
                        class={footerClasses}
                        style={
                            fixedCellStyle
                                ? fixedCellStyle.fixedCellStyle
                                : null
                        }
                    >
                        <div class="totals-wrapper">
                            <span
                                class="totals-open"
                                id={totalMenuOpenID}
                                onClick={() => this.onTotalMenuOpen(column)}
                            >
                                {menuLabel}
                            </span>
                            {totalMenu}
                            <span class="totals-value">
                                {numberToFormattedStringNumber(
                                    this.footer[column.name],
                                    column.decimals,
                                    column.obj ? column.obj.p : ''
                                )}
                            </span>
                        </div>
                    </td>
                );
            }
        );

        const footer = (
            <tfoot>
                <tr>
                    {selectRowCell}
                    {groupingCell}
                    {footerCells}
                </tr>
            </tfoot>
        );

        return footer;
    }

    private renderRow(
        row: Row,
        level = 0,
        rowCssIndex: number = 0,
        previousRow?: Row
    ) {
        const visibleColumns = this.getVisibleColumns();

        if (row.group) {
            // Composes the label the group must display
            let composedGroupLabel: string;
            switch (this.groupLabelDisplay) {
                case GroupLabelDisplayMode.LABEL:
                    composedGroupLabel = row.group.columnLabel;
                    break;
                case GroupLabelDisplayMode.VALUE:
                    composedGroupLabel = row.group.label;
                    break;
                case GroupLabelDisplayMode.BOTH:
                default:
                    composedGroupLabel =
                        row.group.columnLabel + ' = ' + row.group.label;
                    break;
            }

            if (row.group.children.length === 0) {
                // empty group
                return null;
            }

            const iconClass = row.group.expanded
                ? 'icon-container expanded'
                : 'icon-container collapsed';

            const jsxRows = [];

            let indent = [];
            for (let i = 0; i < level; i++) {
                indent.push(<span class="indent" />);
            }

            if (this.hasTotals()) {
                //const colSpan = this.multiSelection ? 2 : 1;
                const cells = [];
                // adding 'grouping' cell
                const grouplabelcell = (
                    <td colSpan={this.calculateColspan()}>
                        <span class="group-cell-content">
                            {indent}
                            <span class={iconClass}></span>
                            <span class="text">{composedGroupLabel}</span>
                        </span>
                    </td>
                );

                // adding 'totals grouping' cells
                for (let column of visibleColumns) {
                    let totalClass = 'total';
                    if (row.group.totals[column.name] < 0) {
                        totalClass += ' negative-number';
                    }
                    cells.push(
                        <td class={totalClass}>
                            {numberToFormattedStringNumber(
                                row.group.totals[column.name],
                                column.decimals,
                                column.obj ? column.obj.p : ''
                            )}
                        </td>
                    );
                }

                jsxRows.push(
                    <tr
                        class="group group-label"
                        onClick={() => this.onRowExpand(row)}
                    >
                        {grouplabelcell}
                    </tr>
                );

                jsxRows.push(
                    <tr
                        class="group group-total"
                        onClick={() => this.onRowExpand(row)}
                    >
                        {cells}
                    </tr>
                );
            } else {
                jsxRows.push(
                    <tr class="group" onClick={() => this.onRowExpand(row)}>
                        <td colSpan={this.calculateColspan()}>
                            <span class="group-cell-content">
                                {indent}
                                <span class={iconClass}></span>
                                <span class="text">{composedGroupLabel}</span>
                            </span>
                        </td>
                    </tr>
                );
            }

            // if group is expanded, add children
            if (this.isGroupExpanded(row)) {
                row.group.children
                    // We must pass the previous element of the array to check if we must hide or display the value of the cell
                    // When the column has specified the parameter hideValuesRepetitions
                    .map((row, groupRowIndex, currentArray) =>
                        this.renderRow(
                            row,
                            level + 1,
                            groupRowIndex,
                            groupRowIndex > 0
                                ? currentArray[groupRowIndex - 1]
                                : undefined
                        )
                    )
                    .forEach((jsxRow) => {
                        if (Array.isArray(jsxRow)) {
                            jsxRow.forEach((jr) => jsxRows.push(jr));
                        } else {
                            jsxRows.push(jsxRow);
                        }
                    });
            }

            // grouping row
            return jsxRows;
        } else {
            //-- The row is normal --
            /**
             * How many control cells there are before the effective cells
             */
            let specialExtraCellsCount: number = 0;

            // Renders selection cell
            // IF active, this must be the first cell
            // This is a special cell
            let selectRowCell = null;
            if (this.multiSelection) {
                specialExtraCellsCount++;
                const selectionStyleAndClass = this.composeFixedCellStyleAndClass(
                    specialExtraCellsCount,
                    rowCssIndex,
                    specialExtraCellsCount - 1
                );

                let props: FCheckboxProps = {
                    checked: this.selectedRows.includes(row),
                    dataSet: {
                        'data-row': row,
                    },
                };

                selectRowCell = (
                    <td
                        row-select-cell
                        class={
                            selectionStyleAndClass
                                ? selectionStyleAndClass.fixedCellClasses
                                : null
                        }
                        style={
                            selectionStyleAndClass
                                ? selectionStyleAndClass.fixedCellStyle
                                : null
                        }
                    >
                        <FCheckbox {...props} />
                    </td>
                );
            }

            // Renders action cell
            // If active, this can be either the first or second cell
            let rowActionsCell = null;
            if (this.hasRowActions()) {
                // Increments
                specialExtraCellsCount++;
                const actionsStyleAndClass = this.composeFixedCellStyleAndClass(
                    specialExtraCellsCount,
                    rowCssIndex,
                    specialExtraCellsCount - 1
                );

                const defaultRowActions = this.renderActions(
                    this.rowActions,
                    row,
                    'default'
                );

                let rowActionExpander = null;
                let variableActions = null;
                if (row.actions) {
                    // adding variable actions
                    variableActions = this.renderActions(
                        row.actions,
                        row,
                        'variable'
                    );
                } else {
                    // adding expander
                    const props: FButtonProps = {
                        dataSet: {
                            'data-row': row,
                        },
                        icon: 'chevron-right',
                        title: 'Expand items',
                        wrapperClass: 'expander',
                    };
                    rowActionExpander = <FButton {...props} />;
                }

                rowActionsCell = (
                    <td
                        row-action-cell
                        class={
                            actionsStyleAndClass
                                ? actionsStyleAndClass.fixedCellClasses
                                : null
                        }
                        style={
                            actionsStyleAndClass
                                ? actionsStyleAndClass.fixedCellStyle
                                : null
                        }
                    >
                        {defaultRowActions}
                        {rowActionExpander}
                        {variableActions}
                    </td>
                );
            }

            // Renders plain rows cells
            const cells = visibleColumns.map((currentColumn, cellIndex) => {
                const { name, hideValuesRepetitions } = currentColumn;
                let indend = [];
                if (cellIndex === 0) {
                    for (let i = 0; i < level; i++) {
                        indend.push(<span class="indent" />);
                    }
                }

                const cell = row.cells[name];

                const jsxCell = this.renderCell(
                    indend,
                    cell,
                    row,
                    currentColumn,
                    hideValuesRepetitions && previousRow
                        ? previousRow.cells[name].value
                        : undefined
                );

                // Classes which will be set onto the single data-table cell
                let cellClass = {
                    //    'has-options': !!options,
                    'is-graphic': isBar(cell.obj),
                    number:
                        isNumber(cell.obj) &&
                        !isRating(cell, null) &&
                        !isGauge(cell, null) &&
                        !isKnob(cell, null),
                };
                if (cell.cssClass) {
                    cellClass[cell.cssClass] = true;
                }

                let cellStyle: GenericObject = null;
                if (!styleHasBorderRadius(cell)) {
                    cellStyle = cell.style;
                }

                //-- For fixed cells --
                const fixedStyles = this.composeFixedCellStyleAndClass(
                    cellIndex + 1 + specialExtraCellsCount,
                    rowCssIndex,
                    specialExtraCellsCount
                );
                if (fixedStyles) {
                    cellStyle = Object.assign(
                        cellStyle ? cellStyle : {},
                        fixedStyles.fixedCellStyle
                    );
                    cellClass = {
                        ...cellClass,
                        ...fixedStyles.fixedCellClasses,
                    };
                }

                // Controls if there are columns with a specified width
                if (this.sizedColumns) {
                    let colWidth: string = '';

                    // Search if this column has a specified width
                    for (let j = 0; j < this.sizedColumns.length; j++) {
                        if (name === this.sizedColumns[j].name) {
                            colWidth = this.sizedColumns[j].size;
                            break;
                        }
                    }

                    // Specific width has been found
                    if (colWidth) {
                        if (!cellStyle) {
                            cellStyle = {};
                        }

                        // Sets the width.
                        // Search for "auto-width" class inside the scss file of this component for more details about this
                        cellStyle['max-width'] = colWidth;
                        cellStyle['min-width'] = colWidth;
                        cellStyle['width'] = colWidth;
                    }
                }

                /**
                 * Controls if current cell needs a tooltip and eventually adds it.
                 * @todo When the option forceOneLine is active, there is a problem with the current implementation of the tooltip. See documentation in the mauer wiki for better understanding.
                 */
                const _hasTooltip: boolean = hasTooltip(cell.obj);
                let eventHandlers = undefined;
                let title: string = undefined;
                if (_hasTooltip) {
                    cellClass['is-obj'] = true;
                    if (document.documentElement.kupDebug) {
                        title =
                            cell.obj.t +
                            '; ' +
                            cell.obj.p +
                            '; ' +
                            cell.obj.k +
                            ';';
                    }
                    if (this.showTooltipOnRightClick) {
                        eventHandlers = {
                            onContextMenu: (ev) => {
                                ev.preventDefault();
                                this._setTooltip(ev, cell);
                            },
                        };
                    } else {
                        eventHandlers = {
                            onMouseEnter: (ev) => {
                                this._setTooltip(ev, cell);
                            },
                            onMouseLeave: () => {
                                this._unsetTooltip();
                            },
                        };
                    }
                }

                return (
                    <td
                        {...(this.dropEnabled
                            ? setKetchupDroppable(
                                  dropHandlersCell,
                                  [KupDataTableRowDragType],
                                  this.rootElement,
                                  {
                                      row: row,
                                      cell: cell,
                                      column: currentColumn,
                                      id: this.rootElement.id,
                                  }
                              )
                            : {})}
                        title={title}
                        data-column={name}
                        style={cellStyle}
                        class={cellClass}
                        {...eventHandlers}
                        onDblClick={() => {
                            this.onKupDataTableDblClick(cell.obj);
                        }}
                    >
                        {jsxCell}
                        {/* {options} */}
                    </td>
                );
            });

            // adding row to rendered rows
            this.renderedRows.push(row);

            const rowClass = {
                selected: this.selectedRows.includes(row),
            };
            if (row.cssClass) {
                rowClass[row.cssClass] = true;
            }

            const dragHandlersRow: DragHandlers = {
                onDragStart: (e: DragEvent) => {
                    // get the tr tag
                    const trElement = e.target as HTMLTableRowElement;
                    let cell = {};
                    let column = {};
                    if (trElement) {
                        // get the elements inside the row that were touched
                        const hoverElements = trElement.querySelectorAll(
                            ':hover'
                        );
                        if (hoverElements) {
                            // the td in position 0 is ALWAYS the last td touched
                            const tdElement = hoverElements[0] as HTMLTableCellElement;
                            if (tdElement) {
                                // get the column name in td element
                                const columnName = tdElement.getAttribute(
                                    'data-column'
                                );
                                if (columnName) {
                                    // finally get the cell
                                    cell = row.cells[columnName];
                                    // and the column
                                    column = getColumnByName(
                                        this.getColumns(),
                                        columnName
                                    );
                                }
                            }
                        }
                    }

                    // because I found the cell and the column inside this method I have to set here the event data
                    // in this scenario it is not necessary pass the data parameter in setKetchupDraggable method
                    const sourceElementData = {
                        id: this.rootElement.id,
                        row,
                        selectedRows: this.selectedRows,
                        cell,
                        column,
                    };
                    // set event data
                    // this is mandatory in order to add the source element data in the kup drop event
                    e.dataTransfer.setData(
                        'kup-drag-source-element',
                        JSON.stringify(sourceElementData)
                    );

                    // Sets the type of drag
                    setDragEffectAllowed(e, 'move');

                    if (
                        this.selectedRows.length > 1 ||
                        (this.selectedRows.length == 1 &&
                            !this.selectedRows.includes(row))
                    ) {
                        this.addMultiSelectDragImageToEvent(e);
                    }
                },
                onDragEnd: (_e: DragEvent) => {
                    // Remove the over class
                    const dragDropPayload = getDragDropPayload();
                    if (dragDropPayload && dragDropPayload.overElement) {
                        dragDropPayload.overElement.classList.remove(
                            'selected'
                        );
                    }
                },
            };

            return (
                <tr
                    class={rowClass}
                    onClick={(e) => this.onRowClick(e, row)}
                    {...(this.dragEnabled
                        ? setKetchupDraggable(dragHandlersRow, {
                              [KupDataTableRowDragType]: row,
                              'kup-drag-source-element': {}, // I put nothing in there because I overwrite the content inside the onDragStart method
                          })
                        : {})}
                >
                    {selectRowCell}
                    {rowActionsCell}
                    {cells}
                </tr>
            );
        }
    }

    private renderActions(
        actions: Array<RowAction>,
        row: Row,
        type: string
    ): JSX.Element[] {
        return actions.map((action, index) => {
            const props: FButtonProps = {
                dataSet: {
                    'data-action': {
                        action,
                        index,
                        row,
                        type,
                    },
                },
                icon: action.icon,
                title: action.text,
                wrapperClass: 'action',
            };
            return <FButton {...props} />;
        });
    }

    /**
     * FActory function for cells.
     * @param cell - cell object
     * @param column - the cell's column name
     * @param previousRowCellValue - An optional value of the previous cell on the same column. If set and equal to the value of the current cell, makes the value of the current cell go blank.
     * @param cellData - Additional data for the current cell.
     * @param cellData.column - The column object to which the cell belongs.
     * @param cellData.row - The row object to which the cell belongs.
     */
    private renderCell(
        indend: any,
        cell: Cell,
        row: Row,
        column: Column,
        previousRowCellValue?: string
    ) {
        const classObj: Record<string, boolean> = {
            'cell-content': true,
            clickable: !!column.clickable,
            'force-one-line': this.forceOneLine == true ? true : null,
        };

        // When the previous row value is different from the current value, we can show the current value.
        const valueToDisplay =
            previousRowCellValue !== cell.value ? cell.value : '';

        // Sets the default value
        let content: any = valueToDisplay;
        let cellType: string = this.getCellType(cell);
        let props: any = { ...cell.data };
        classObj[cellType + '-cell'] = true;

        if (
            cellType === 'checkbox' ||
            cellType === 'date' ||
            cellType === 'time' ||
            cellType === 'datetime' ||
            cellType === 'icon' ||
            cellType === 'image' ||
            cellType === 'link' ||
            cellType === 'number' ||
            cellType === 'string'
        ) {
            this.setCellSize(cellType, props, cell);
            content = this.setCell(
                cellType,
                props,
                content,
                classObj,
                cell,
                column
            );
        } else if (cell.data) {
            this.setCellSizeKup(cellType, props, cell);
            if (!this.lazyLoadCells) {
                content = this.setLazyKupCell(cellType, props);
            } else {
                content = this.setKupCell(
                    cellType,
                    classObj,
                    props,
                    cell,
                    row,
                    column
                );
            }
        }

        let style = cell.style;

        if (styleHasWritingMode(cell)) {
            classObj['is-vertical'] = true;
        }

        let icon = undefined;

        if ((column.icon || cell.icon) && content) {
            let svg: string = '';
            if (cell.icon) {
                svg = cell.icon;
            } else {
                svg = column.icon;
            }
            svg = this.getIconPath(svg);
            let iconStyle = {
                mask: svg,
                webkitMask: svg,
            };
            icon = (
                <span style={iconStyle} class="icon-container obj-icon"></span>
            );
        }

        let cellTitle = null;
        if (cell.title != null && cell.title.trim() != '') {
            cellTitle = cell.title;
        }
        return (
            <span class={classObj} style={style} title={cellTitle}>
                {indend}
                {icon}
                {content}
            </span>
        );
    }

    private getIconPath(icon: string) {
        let svg: string = '';
        if (this.iconPaths) {
            for (
                let index = 0;
                index < this.iconPaths.length || svg !== '';
                index++
            ) {
                if (this.iconPaths[index].icon === icon) {
                    return this.iconPaths[index].path;
                }
            }
        }

        svg = `url('${getAssetPath(
            `./assets/svg/${icon}.svg`
        )}') no-repeat center`;

        if (!this.iconPaths) {
            this.iconPaths = [
                {
                    icon: icon,
                    path: svg,
                },
            ];
        } else {
            this.iconPaths.push({ icon: icon, path: svg });
        }

        return svg;
    }

    // TODO: cell type can depend also from shape (see isRating)
    // NOTE: keep care to change conditions order... shape wins on object .. -> so if isNumber after shape checks.. ->
    // TODO: more clear conditions when refactoring...
    private getCellType(cell: Cell) {
        return getCellType(cell);
    }

    private setLazyKupCell(cellType: string, props: any) {
        let lazyClass = 'cell-' + cellType + ' placeholder';
        let style = { minHeight: props.sizeY };
        return <span style={style} class={lazyClass}></span>;
    }

    private setCellSize(cellType: string, props: any, cell: Cell) {
        switch (cellType) {
            case 'checkbox':
            case 'icon':
                if (!props.sizeX) {
                    props['sizeX'] = '18px';
                }
                if (!props.sizeY) {
                    props['sizeY'] = '18px';
                }
                if (cell.style) {
                    if (!cell.style.height) {
                        cell.style['minHeight'] = props['sizeY'];
                    }
                } else {
                    cell.style = {
                        minHeight: props['sizeY'],
                    };
                }
                break;
            case 'image':
                if (!props.sizeX) {
                    props['sizeX'] = 'auto';
                }
                if (!props.sizeY) {
                    props['sizeY'] = '64px';
                }
                break;
        }
    }

    private setCellSizeKup(cellType: string, props: any, cell: Cell) {
        switch (cellType) {
            case 'bar':
                if (!props.sizeY) {
                    props['sizeY'] = '26px';
                    if (this.density === 'medium') {
                        props['sizeY'] = '36px';
                    }
                    if (this.density === 'wide') {
                        props['sizeY'] = '50px';
                    }
                }
                break;
            case 'button':
                let height: string = '';
                if (props.label) {
                    height = '36px';
                } else {
                    height = '48px';
                }
                if (cell.style) {
                    if (!cell.style.height) {
                        cell.style['minHeight'] = height;
                    }
                } else {
                    cell.style = { minHeight: height };
                }
                break;
            case 'chart':
                if (!props.sizeX) {
                    props['sizeX'] = '100%';
                }
                if (!props.sizeY) {
                    props['sizeY'] = '100%';
                }
                break;
            case 'chips':
                if (cell.style) {
                    if (!cell.style.height) {
                        cell.style['minHeight'] = '53px';
                    }
                } else {
                    cell.style = { minHeight: '53px' };
                }
                break;
            case 'radio':
                if (cell.style) {
                    if (!cell.style.height) {
                        cell.style['minHeight'] = '40px';
                    }
                } else {
                    cell.style = { minHeight: '40px' };
                }
                break;
        }
    }

    private setKupCell(
        cellType: string,
        classObj: Record<string, boolean>,
        props: any,
        cell: Cell,
        row: Row,
        column: Column
    ) {
        switch (cellType) {
            case 'bar':
                if (!props.data) {
                    return <kup-image {...props} />;
                } else {
                    let barStyle = {
                        height: props.sizeY,
                    };
                    return (
                        <div class="bar-cell-content" style={barStyle}>
                            <FImage {...props} />
                        </div>
                    );
                }
            case 'button':
                classObj['is-centered'] = true;
                props['disabled'] = row.readOnly;
                props['onKupButtonClick'] = this.onJ4btnClicked.bind(
                    this,
                    row,
                    column,
                    cell
                );
                return <kup-button {...props}></kup-button>;
            case 'chart':
                classObj['is-centered'] = true;
                return <kup-chart {...props} />;
            case 'chips':
                return <FChip {...props} />;
            case 'color-picker':
                return (
                    <kup-color-picker
                        value={cell.value}
                        {...props}
                        disabled
                    ></kup-color-picker>
                );
            case 'gauge':
                return (
                    <kup-gauge
                        value={stringToNumber(cell.value)}
                        width-component="100%"
                        {...props}
                    ></kup-gauge>
                );
            case 'knob':
            case 'progress-bar':
                return <kup-progress-bar {...props}></kup-progress-bar>;
            case 'rating':
                return (
                    <kup-rating
                        value={stringToNumber(cell.value)}
                        {...props}
                        disabled
                    ></kup-rating>
                );
            case 'radio':
                classObj['is-centered'] = true;
                props['disabled'] = row.readOnly;
                return <kup-radio {...props}></kup-radio>;
        }
    }

    private setCell(
        cellType: string,
        props: any,
        content: string,
        classObj: Record<string, boolean>,
        cell: Cell,
        column: Column
    ) {
        switch (cellType) {
            case 'checkbox':
                classObj['is-centered'] = true;
                props['resource'] = props.checked
                    ? 'check_box'
                    : 'check_box_outline_blank';
                return <FImage {...props} />;
            case 'date':
                if (content && content != '') {
                    const cellValue = getCellValueForDisplay(column, cell);
                    return cellValue;
                }
                return content;
            case 'datetime':
                if (content && content != '') {
                    const cellValue = getCellValueForDisplay(column, cell);
                    return cellValue;
                }
                return content;
            case 'icon':
            case 'image':
                classObj['is-centered'] = true;
                if (props.badgeData) {
                    classObj['has-padding'] = true;
                }
                return <FImage {...props} />;
            case 'link':
                return (
                    <a class="cell-link" href={content} target="_blank">
                        {content}
                    </a>
                );
            case 'number':
                if (content && content != '') {
                    const cellValueNumber: number = stringToNumber(cell.value);
                    const cellValue = getCellValueForDisplay(column, cell);
                    if (cellValueNumber < 0) {
                        classObj['negative-number'] = true;
                    }
                    return cellValue;
                }
                return content;
            case 'time':
                if (content && content != '') {
                    const cellValue = getCellValueForDisplay(column, cell);
                    return cellValue;
                }
                return content;
            case 'string':
            default:
                return content;
        }
    }

    private renderLoadMoreButton(isSlotted: boolean = true) {
        return (
            <kup-button
                styling={FButtonStyling.FLAT}
                class="load-more-button"
                label="Show more data"
                icon="plus"
                slot={isSlotted ? 'more-results' : null}
                onKupButtonClick={() => {
                    this.onLoadMoreClick();
                }}
            />
        );
    }

    private onCustomSettingsClick(top: boolean) {
        if (!this.openedCustomSettings) {
            this.openCustomSettings(top);
        } else {
            this.closeCustomSettings(top);
        }
    }

    private openCustomSettings(top: boolean) {
        this.closeCustomSettings(!top);
        let elPanel = top
            ? this.customizeTopPanelRef
            : this.customizeBottomPanelRef;

        elPanel.classList.add('visible');
        elPanel.classList.add('dynamic-position-active');
        this.openedCustomSettings = true;
    }

    private closeCustomSettings(top: boolean) {
        let elPanel = top
            ? this.customizeTopPanelRef
            : this.customizeBottomPanelRef;
        if (elPanel == null) {
            return;
        }
        elPanel.classList.remove('visible');
        elPanel.classList.remove('dynamic-position-active');
        this.openedCustomSettings = false;
    }

    private renderPaginator(top: boolean) {
        let customizePanel: any[] = undefined;
        let customizeButton: KupButton = undefined;
        if (this.showCustomization) {
            let density: HTMLElement = undefined;
            let fontsize: HTMLElement = undefined;
            let grid: HTMLElement = undefined;
            if (this.openedCustomSettings) {
                density = this.renderDensityPanel();
                fontsize = this.renderFontSizePanel();
                grid = this.renderGridPanel();
            }
            customizeButton = (
                <kup-button
                    class="paginator-button custom-settings"
                    icon="settings"
                    title="Show customization options"
                    onKupButtonClick={() => {
                        this.onCustomSettingsClick(top);
                    }}
                    ref={(el) => {
                        top
                            ? (this.customizeTopButtonRef = el as any)
                            : (this.customizeBottomButtonRef = el as any);
                    }}
                />
            );
            customizePanel = (
                <div
                    class="kup-menu customize-panel"
                    ref={(el) => {
                        top
                            ? (this.customizeTopPanelRef = el as any)
                            : (this.customizeBottomPanelRef = el as any);
                    }}
                >
                    {density}
                    {grid}
                    {fontsize}
                </div>
            );
        }
        return (
            <div class="paginator-wrapper">
                <div class="paginator-tabs">
                    {!this.lazyLoadRows &&
                    this.rowsLength > this.rowsPerPage ? (
                        <kup-paginator
                            id={top ? 'top-paginator' : 'bottom-paginator'}
                            max={this.rowsLength}
                            perPage={this.rowsPerPage}
                            selectedPerPage={this.currentRowsPerPage}
                            currentPage={this.currentPage}
                            onKupPageChanged={(e) => this.handlePageChanged(e)}
                            onKupRowsPerPageChanged={(e) =>
                                this.handleRowsPerPageChanged(e)
                            }
                        />
                    ) : null}
                    {customizeButton}
                    {customizePanel}
                    {this.showLoadMore ? this.renderLoadMoreButton() : null}
                </div>
            </div>
        );
    }

    private columnRemoveArea(): HTMLDivElement {
        const dropHandlersRemoveCols: DropHandlers = {
            onDrop: (e: DragEvent) => {
                const transferredData = JSON.parse(
                    e.dataTransfer.getData(KupDataTableColumnDragType)
                ) as Column;
                let overElement = e.target as HTMLElement;
                if (overElement.id !== 'remove-column-area') {
                    overElement = overElement.closest('#remove-column-area');
                }
                overElement.removeAttribute(this.dragOverAttribute);
                // We are sure the tables have been dropped in a valid location -> starts ...
                this.handleColumnRemove(transferredData);
                return KupDataTableColumnDragRemoveType;
            },
            onDragOver: (e: DragEvent) => {
                let overElement = e.target as HTMLElement;
                if (overElement.id !== 'remove-column-area') {
                    overElement = overElement.closest('#remove-column-area');
                }
                overElement.setAttribute(this.dragOverAttribute, '');
                return true;
            },
            onDragLeave: (e: DragEvent) => {
                let overElement = e.target as HTMLElement;
                if (overElement.id !== 'remove-column-area') {
                    overElement = overElement.closest('#remove-column-area');
                }
                overElement.removeAttribute(this.dragOverAttribute);
                return true;
            },
        };
        return (
            <div
                id="remove-column-area"
                {...setKetchupDroppable(
                    dropHandlersRemoveCols,
                    [
                        KupDataTableColumnDragType,
                        KupDataTableColumnDragRemoveType,
                    ],
                    this.rootElement,
                    {}
                )}
            >
                <FImage
                    resource="delete"
                    color="var(--kup-danger-color)"
                    sizeX="30px"
                    sizeY="50px"
                />
                <FImage
                    resource="delete-empty"
                    color="var(--kup-danger-color)"
                    sizeX="30px"
                    sizeY="50px"
                />
            </div>
        );
    }

    private hideShowColumnRemoveDropArea(show: boolean, th?: HTMLElement) {
        if (!this.removableColumns) {
            return;
        }
        let dropArea: HTMLElement = this.rootElement.shadowRoot.querySelector(
            '#remove-column-area'
        );

        if (show) {
            dropArea.style.marginLeft =
                'calc(' + th.clientWidth / 2 + 'px - 25px)';
            this.tableAreaRef.appendChild(dropArea);
            positionRecalc(dropArea, th, 10, true);
            dropArea.classList.add('dynamic-position-active');
            dropArea.classList.add('visible');
        } else {
            dropArea.classList.remove('visible');
            dropArea.classList.remove('dynamic-position-active');
        }
    }

    private handleColumnRemove(column2remove: Column) {
        // Get sorted column current position
        this.getVisibleColumns();
        const columnX = this.getVisibleColumns().find(
            (col) =>
                col.name === column2remove.name &&
                col.title === column2remove.title
        );
        if (columnX) {
            columnX.visible = false;
            this.triggerColumnSortRerender = !this.triggerColumnSortRerender;
        }
    }

    private transcodeItem(
        item: string | ShowGrid,
        searchIn: Array<string>,
        returnFrom: Array<string>
    ): string {
        for (let i = 0; i < searchIn.length; i++) {
            let tmpCode = searchIn[i];
            if (tmpCode == item && i < returnFrom.length) {
                return returnFrom[i];
            }
        }
        return item;
    }

    private createListData(
        codes: Array<string>,
        decodes: Array<string>,
        icons: Array<string>,
        selectedCode: string
    ): ComponentListElement[] {
        let listItems: ComponentListElement[] = [];
        for (let i = 0; i < codes.length; i++) {
            listItems[i] = {
                text: decodes[i],
                value: codes[i],
                selected: selectedCode == codes[i],
                icon: icons[i],
            };
        }
        return listItems;
    }

    private FONTSIZE_CODES: Array<string> = ['small', 'medium', 'big'];
    private FONTSIZE_DECODES: Array<string> = ['Small', 'Medium', 'Big'];
    private FONTSIZE_ICONS: Array<string> = [
        'format-font-size-decrease',
        'format-color-text',
        'format-font-size-increase',
    ];
    private getFontSizeDecodeFromCode(code: string): string {
        return this.transcodeItem(
            code,
            this.FONTSIZE_CODES,
            this.FONTSIZE_DECODES
        );
    }

    private getFontSizeCodeFromDecode(decode: string): string {
        return this.transcodeItem(
            decode,
            this.FONTSIZE_DECODES,
            this.FONTSIZE_CODES
        );
    }

    private renderFontSizePanel() {
        let listItems: ComponentListElement[] = this.createListData(
            this.FONTSIZE_CODES,
            this.FONTSIZE_DECODES,
            this.FONTSIZE_ICONS,
            this.fontsize
        );

        let listData = { data: listItems, showIcons: true };

        let textfieldData = {
            customStyle: ':host{--kup-field-background-color:transparent}',
            trailingIcon: true,
            initialValue: this.getFontSizeDecodeFromCode(this.fontsize),
            label: 'Font size',
            icon: 'arrow_drop_down',
        };
        let data = { 'text-field': textfieldData, list: listData };
        return (
            <div class="customize-element fontsize-panel">
                <kup-combobox
                    isSelect={true}
                    data={data}
                    onKupComboboxItemClick={(e: CustomEvent) => {
                        e.stopPropagation();
                        this.fontsize = this.getFontSizeCodeFromDecode(
                            e.detail.value
                        );
                    }}
                />
            </div>
        );
    }

    private DENSITY_CODES: Array<string> = ['dense', 'medium', 'wide'];
    private DENSITY_DECODES: Array<string> = ['Dense', 'Normal', 'Wide'];
    private DENSITY_ICONS: Array<string> = [
        'format-align-justify',
        'reorder-horizontal',
        'view-sequential',
    ];
    private getDensityDecodeFromCode(code: string): string {
        return this.transcodeItem(
            code,
            this.DENSITY_CODES,
            this.DENSITY_DECODES
        );
    }

    private getDensityCodeFromDecode(decode: string): string {
        return this.transcodeItem(
            decode,
            this.DENSITY_DECODES,
            this.DENSITY_CODES
        );
    }

    private renderDensityPanel() {
        let listItems: ComponentListElement[] = this.createListData(
            this.DENSITY_CODES,
            this.DENSITY_DECODES,
            this.DENSITY_ICONS,
            this.density
        );

        let listData = { data: listItems, showIcons: true };

        let textfieldData = {
            customStyle: ':host{--kup-field-background-color:transparent}',
            trailingIcon: true,
            initialValue: this.getDensityDecodeFromCode(this.density),
            label: 'Row density',
            icon: 'arrow_drop_down',
        };

        let data = { 'text-field': textfieldData, list: listData };
        return (
            <div class="customize-element density-panel">
                <kup-combobox
                    isSelect={true}
                    selectMode={ItemsDisplayMode.DESCRIPTION}
                    data={data}
                    onKupComboboxItemClick={(e: CustomEvent) => {
                        e.stopPropagation();
                        this.density = this.getDensityCodeFromDecode(
                            e.detail.value
                        );
                    }}
                />
            </div>
        );
    }

    private GRID_CODES: Array<string> = ['Complete', 'Col', 'Row', 'None'];
    private GRID_DECODES: Array<string> = [
        'Complete',
        'Columns',
        'Rows',
        'None',
    ];
    private GRID_ICONS: Array<string> = [
        'grid_on',
        'view_column',
        'view_headline',
        'grid_off',
    ];

    private getGridCodeFromDecode(decode: string): string {
        return this.transcodeItem(decode, this.GRID_DECODES, this.GRID_CODES);
    }

    private renderGridPanel() {
        let listItems: ComponentListElement[] = this.createListData(
            this.GRID_CODES,
            this.GRID_DECODES,
            this.GRID_ICONS,
            this.showGrid
        );

        let listData = { data: listItems, showIcons: true };

        let textfieldData = {
            customStyle: ':host{--kup-field-background-color:transparent}',
            trailingIcon: true,
            initialValue: this.getFontSizeDecodeFromCode(this.showGrid),
            label: 'Grid type',
            icon: 'arrow_drop_down',
        };
        let data = { 'text-field': textfieldData, list: listData };
        return (
            <div class="customize-element grid-panel">
                <kup-combobox
                    isSelect={true}
                    data={data}
                    onKupComboboxItemClick={(e: CustomEvent) => {
                        e.stopPropagation();
                        let grid: any = this.getGridCodeFromDecode(
                            e.detail.value
                        );
                        this.showGrid = grid;
                    }}
                />
            </div>
        );
    }

    render() {
        this.renderedRows = [];
        let elStyle = undefined;
        this.sizedColumns = this.getSizedColumns();

        let rows = null;
        if (this.paginatedRowsLength === 0) {
            rows = (
                <tr>
                    <td
                        {...(this.dropEnabled
                            ? setKetchupDroppable(
                                  dropHandlersCell,
                                  [KupDataTableRowDragType],
                                  this.rootElement,
                                  {
                                      row: null,
                                      cell: null,
                                      column: null,
                                      id: this.rootElement.id,
                                  }
                              )
                            : {})}
                        colSpan={this.calculateColspan()}
                    >
                        {this.emptyDataLabel}
                    </td>
                </tr>
            );
        } else {
            rows = [];
            this.paginatedRows
                // We must pass the previous element of the array to check if we must hide or display the value of the cell
                // When the column has specified the parameter hideValuesRepetitions
                .map((row, rowIndex, currentArray) =>
                    this.renderRow(
                        row,
                        0,
                        rowIndex + 1,
                        rowIndex > 0 ? currentArray[rowIndex - 1] : null
                    )
                )
                .forEach((jsxRow) => {
                    if (Array.isArray(jsxRow)) {
                        jsxRow.forEach((jr) => rows.push(jr));
                    } else {
                        rows.push(jsxRow);
                    }
                });
        }

        // header
        // for multi selection purposes, this should be called before this.renderedRows has been evaluated
        const header = this.renderHeader();
        const stickyHeader = this.renderStickyHeader();

        // footer
        const footer = this.renderFooter();

        const tooltip = this.renderTooltip();

        let globalFilter = null;
        if (this.globalFilter) {
            globalFilter = (
                <div id="global-filter">
                    <FTextField
                        fullWidth={true}
                        icon="magnify"
                        isClearable={true}
                        label="Search..."
                        value={this.globalFilterValue}
                    />
                </div>
            );
        }

        let paginatorTop = undefined;
        let paginatorBottom = undefined;
        if (
            (!this.lazyLoadRows && this.rowsLength > this.rowsPerPage) ||
            this.showCustomization ||
            this.showLoadMore
        ) {
            if (
                PaginatorPos.TOP === this.paginatorPos ||
                PaginatorPos.BOTH === this.paginatorPos
            ) {
                paginatorTop = this.renderPaginator(true);
            }

            if (
                PaginatorPos.BOTTOM === this.paginatorPos ||
                PaginatorPos.BOTH === this.paginatorPos
            ) {
                paginatorBottom = this.renderPaginator(false);
            }
        }

        let groupChips = null;
        if (this.isGrouping()) {
            const chipsData = this.groups.map((group) => {
                const column = getColumnByName(this.getColumns(), group.column);

                if (column) {
                    let a: FChipData = {
                        label: column.title,
                        value: column.name,
                        checked: true,
                    };
                    return a;
                } else {
                    return null;
                }
            });
            if (chipsData.length > 0) {
                let props = {
                    data: chipsData,
                    id: 'group-chips',
                    type: FChipType.INPUT,
                };
                groupChips = <FChip {...props}></FChip>;
            }
        }
        const tableClass = {
            // Class for specifying if the table should have width: auto.
            // Mandatory to check with custom column size.
            'auto-width': this.tableHasAutoWidth(),
            'column-separation':
                ShowGrid.COMPLETE === this.showGrid ||
                ShowGrid.COL === this.showGrid,
            // When there are columns with a specified width, we must add table-layout: fixed to force the table to respect them
            'row-separation':
                ShowGrid.COMPLETE === this.showGrid ||
                ShowGrid.ROW === this.showGrid,

            'persistent-header':
                this.headerIsPersistent &&
                this.tableHeight === undefined &&
                this.tableWidth === undefined,

            'custom-size':
                this.tableHeight !== undefined || this.tableWidth !== undefined,

            'border-top': !this.showHeader,
        };

        tableClass[`density-${this.density}`] = true;
        tableClass[`fontsize-${this.fontsize}`] = true;

        if (this.tableHeight) {
            elStyle = {
                height: this.tableHeight,
                overflow: 'auto',
            };
        }

        if (this.tableWidth) {
            elStyle = {
                ...elStyle,
                width: this.tableWidth,
                overflow: 'auto',
            };
        }

        let stickyEl = undefined;
        if (
            this.headerIsPersistent &&
            this.tableHeight === undefined &&
            this.tableWidth === undefined
        ) {
            stickyEl = (
                <sticky-header
                    class="hover-scrolling-child"
                    hidden={!this.showHeader}
                    ref={(el: HTMLTableSectionElement) =>
                        (this.stickyTheadRef = el as any)
                    }
                >
                    <thead-sticky>
                        <tr-sticky>{stickyHeader}</tr-sticky>
                    </thead-sticky>
                </sticky-header>
            );
        }

        let belowClass = 'below-wrapper';
        if (this.tableHeight !== undefined || this.tableWidth !== undefined) {
            belowClass += ' custom-size';
        }

        let compCreated = (
            <Host>
                <style>{setCustomStyle(this)}</style>
                <div id="kup-component">
                    <div class="above-wrapper">
                        {globalFilter}
                        {paginatorTop}
                    </div>
                    <div
                        style={elStyle}
                        class={belowClass}
                        ref={(el: HTMLDivElement) => (this.tableAreaRef = el)}
                    >
                        {groupChips}
                        <table
                            class={tableClass}
                            ref={(el: HTMLTableElement) => (this.tableRef = el)}
                            onMouseLeave={(ev) => {
                                ev.stopPropagation();
                                this._unsetTooltip();
                            }}
                        >
                            <thead
                                hidden={!this.showHeader}
                                ref={(el) => (this.theadRef = el as any)}
                            >
                                <tr>{header}</tr>
                            </thead>
                            <tbody>{rows}</tbody>
                            {footer}
                        </table>
                        {stickyEl}
                    </div>
                    {tooltip}
                    {this.removableColumns
                        ? this.columnRemoveArea()
                        : undefined}
                    {paginatorBottom}
                </div>
            </Host>
        );
        return compCreated;
    }
}
