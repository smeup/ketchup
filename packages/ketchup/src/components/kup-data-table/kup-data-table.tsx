import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    h,
    Host,
    Listen,
    Method,
    Prop,
    State,
    Watch,
} from '@stencil/core';
import type {
    DropEvent,
    InteractEvent,
    PointerEvent,
} from '@interactjs/types/index';
import type { ResizeEvent } from '@interactjs/actions/resize/plugin';
import type { KupComboboxEventPayload } from '../kup-combobox/kup-combobox-declarations';
import {
    FixedCellsClasses,
    FixedCellsCSSVarsBase,
    GroupLabelDisplayMode,
    GroupObject,
    LoadMoreMode,
    PaginatorPos,
    ShowGrid,
    SortMode,
    SortObject,
    TotalsMap,
    TotalMode,
    TotalLabel,
    KupDatatableEventHandlerDetails,
    KupDataTableProps,
    fieldColumn,
    iconColumn,
    keyColumn,
    SelectionMode,
    KupDatatableRowSelectedEventPayload,
    KupDatatableClickEventPayload,
    KupDatatableColumnMenuEventPayload,
    KupDatatableLoadMoreClickEventPayload,
    KupDatatableColumnRemoveEventPayload,
    KupDatatableColumnMoveEventPayload,
    KupDataTableDataset,
    KupDataTableRow,
    KupDataTableRowCells,
    KupDataTableCell,
    KupDatatableDeleteRowEventPayload,
    KupDatatableInsertRowEventPayload,
    KupDataTableInsertMode,
    KupDatatableHistoryEventPayload,
    KupDatatableRowActionItemClickEventPayload,
    KupDatatableUpdatePayload,
    DataTableAreasEnum,
    KupDatatableCellCheckPayload,
    TypesToDuplicate,
} from './kup-data-table-declarations';
import {
    getColumnByName,
    getValueForDisplay,
    isNegativeNumber,
} from '../../utils/cell-utils';
import {
    calcTotals,
    normalizeRows,
    filterRows,
    groupRows,
    paginateRows,
    sortRows,
    getDiffData,
    decorateDataTable,
} from './kup-data-table-helper';
import {
    GenericObject,
    KupComponent,
    KupComponentSizing,
    KupEventPayload,
} from '../../types/GenericTypes';
import {
    identify,
    getProps,
    setProps,
    getRegExpFromString,
} from '../../utils/utils';
import {
    KupListNode,
    ItemsDisplayMode,
} from '../kup-list/kup-list-declarations';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { KupDataTableState } from './kup-data-table-state';
import { KupStore } from '../kup-state/kup-store';
import { FImage } from '../../f-components/f-image/f-image';
import { FTextField } from '../../f-components/f-text-field/f-text-field';
import { FChip } from '../../f-components/f-chip/f-chip';
import { FTextFieldMDC } from '../../f-components/f-text-field/f-text-field-mdc';
import {
    FChipsProps,
    FChipType,
} from '../../f-components/f-chip/f-chip-declarations';
import { FCheckbox } from '../../f-components/f-checkbox/f-checkbox';
import { FCheckboxProps } from '../../f-components/f-checkbox/f-checkbox-declarations';
import {
    GenericFilter,
    ValueDisplayedValue,
} from '../../utils/filters/filters-declarations';
import { KupColumnMenu } from '../../utils/kup-column-menu/kup-column-menu';
import { FiltersColumnMenu } from '../../utils/filters/filters-column-menu';
import { FiltersRows } from '../../utils/filters/filters-rows';
import {
    KupDynamicPositionAnchor,
    kupDynamicPositionAttribute,
    KupDynamicPositionElement,
    KupDynamicPositionPlacement,
} from '../../managers/kup-dynamic-position/kup-dynamic-position-declarations';
import { KupScrollOnHoverElement } from '../../managers/kup-scroll-on-hover/kup-scroll-on-hover-declarations';
import {
    KupCardData,
    KupCardFamily,
    KupCardEventPayload,
    KupCardColumnDropMenuOptions,
} from '../kup-card/kup-card-declarations';
import { KupDebugCategory } from '../../managers/kup-debug/kup-debug-declarations';
import {
    KupLanguageDensity,
    KupLanguageFontsize,
    KupLanguageGeneric,
    KupLanguageGrid,
    KupLanguageKey,
    KupLanguageRow,
    KupLanguageSearch,
    KupLanguageTotals,
} from '../../managers/kup-language/kup-language-declarations';
import { FImageProps } from '../../f-components/f-image/f-image-declarations';
import { KupDynamicPositionCoordinates } from '../../managers/kup-dynamic-position/kup-dynamic-position-declarations';
import {
    KupThemeColorValues,
    KupThemeIconValues,
} from '../../managers/kup-theme/kup-theme-declarations';
import { componentWrapperId } from '../../variables/GenericVariables';
import {
    kupDragActiveAttr,
    KupDragCallbacks,
    KupDragDataTransferCallback,
    KupDragEffect,
    kupDraggableCellAttr,
    kupDraggableColumnAttr,
    KupDraggableElement,
    KupDropCallbacks,
    KupDropDataTransferCallback,
    KupDropEventPayload,
    KupDropEventTypes,
    KupPointerEventTypes,
    KupResizeCallbacks,
} from '../../managers/kup-interact/kup-interact-declarations';
import {
    KupDom,
    KupManagerClickCb,
} from '../../managers/kup-manager/kup-manager-declarations';
import {
    FCellClasses,
    FCellEventPayload,
    FCellPadding,
    FCellProps,
    FCellShapes,
} from '../../f-components/f-cell/f-cell-declarations';
import { FCell } from '../../f-components/f-cell/f-cell';
import { FPaginator } from '../../f-components/f-paginator/f-paginator';
import {
    pageChange,
    rowsPerPageChange,
} from '../../f-components/f-paginator/f-paginator-utils';
import {
    KupCommand,
    KupDataCell,
    KupDataColumn,
    KupDataCommand,
    KupDataDataset,
    KupDataNewColumnOptions,
    KupDataNewColumnTypes,
    KupDataRow,
    KupDataRowAction,
    KupDataRowCells,
    UseAsValue,
} from '../../managers/kup-data/kup-data-declarations';
import { FButton } from '../../f-components/f-button/f-button';
import { FButtonStyling } from '../../f-components/f-button/f-button-declarations';
import { KupFormRow } from '../kup-form/kup-form-declarations';
import { KupColumnMenuIds } from '../../utils/kup-column-menu/kup-column-menu-declarations';
import { KupList } from '../kup-list/kup-list';
import { KupDropdownButtonEventPayload } from '../kup-dropdown-button/kup-dropdown-button-declarations';
import { FObjectFieldEventPayload } from '../../f-components/f-object-field/f-object-field-declarations';

const dom: KupDom = document.documentElement as KupDom;
@Component({
    tag: 'kup-data-table',
    styleUrl: 'kup-data-table.scss',
    shadow: true,
})
export class KupDataTable {
    @Prop() stateId: string = '';
    @Prop() store: KupStore;

    state: KupDataTableState = new KupDataTableState();

    initWithPersistedState(): void {
        if (this.store && this.stateId) {
            this.state.load = true;
            const state = this.store.getState(this.stateId);
            if (state != null) {
                this.#kupManager.debug.logMessage(
                    this,
                    'Initializing stateId ' + this.stateId
                );
                // *** PROPS ***
                this.filters = { ...state.filters };
                this.groups = [...state.groups];
                this.expandGroups = state.expandGroups;
                this.groupLabelDisplay = state.groupLabelDisplay;
                this.density = state.density;
                this.enableExtraColumns = state.enableExtraColumns;
                this.enableSortableColumns = state.enableSortableColumns;
                this.forceOneLine = state.forceOneLine;
                this.globalFilter = state.globalFilter;
                this.globalFilterValue = state.globalFilterValue;
                this.headerIsPersistent = state.headerIsPersistent;
                this.lazyLoadRows = state.lazyLoadRows;
                this.loadMoreLimit = state.loadMoreLimit;
                this.selection = state.selection;
                this.rowsPerPage = state.rowsPerPage;
                this.showFilters = state.showFilters;
                this.showGroups = state.showGroups;
                this.showHeader = state.showHeader;
                this.showLoadMore = state.showLoadMore;
                this.showPaginator = state.showPaginator;
                this.hiddenSubmitButton = state.hiddenSubmitButton;
                this.sortEnabled = state.sortEnabled;
                this.sort = [...state.sort];
                this.pageSelected = state.pageSelected;
                this.sortableColumnsMutateData =
                    state.sortableColumnsMutateData;
                this.dragEnabled = state.dragEnabled;
                this.dropEnabled = state.dropEnabled;
                this.showFooter = state.showFooter;
                this.totals = { ...state.totals };
                this.visibleColumns = state.visibleColumns
                    ? [...state.visibleColumns]
                    : undefined;
            }
        }
    }

    persistState(): void {
        if (this.store && this.stateId) {
            let somethingChanged = this.#checkUpdateState();
            if (!this.state.load) {
                this.state.load = true;
                return;
            }
            if (somethingChanged) {
                this.#kupManager.debug.logMessage(
                    this,
                    'Persisting stateId ' + this.stateId
                );
                this.store.persistState(this.stateId, this.state);
            }
        }
    }

    #checkUpdateState(): boolean {
        let somethingChanged = false;
        if (
            !this.#kupManager.objects.deepEqual(
                this.state.filters,
                this.filters
            )
        ) {
            this.state.filters = { ...this.filters };
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(this.state.groups, this.groups)
        ) {
            this.state.groups = [...this.groups];
            somethingChanged = true;
        }
        if (!this.#kupManager.objects.deepEqual(this.state.sort, this.sort)) {
            this.state.sort = [...this.sort];
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(
                this.state.expandGroups,
                this.expandGroups
            )
        ) {
            this.state.expandGroups = this.expandGroups;
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(
                this.state.groupLabelDisplay,
                this.groupLabelDisplay
            )
        ) {
            this.state.groupLabelDisplay = this.groupLabelDisplay;
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(
                this.state.density,
                this.density
            )
        ) {
            this.state.density = this.density;
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(
                this.state.enableExtraColumns,
                this.enableExtraColumns
            )
        ) {
            this.state.enableExtraColumns = this.enableExtraColumns;
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(
                this.state.enableSortableColumns,
                this.enableSortableColumns
            )
        ) {
            this.state.enableSortableColumns = this.enableSortableColumns;
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(
                this.state.forceOneLine,
                this.forceOneLine
            )
        ) {
            this.state.forceOneLine = this.forceOneLine;
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(
                this.state.globalFilter,
                this.globalFilter
            )
        ) {
            this.state.globalFilter = this.globalFilter;
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(
                this.state.globalFilterValue,
                this.globalFilterValue
            )
        ) {
            this.state.globalFilterValue = this.globalFilterValue;
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(
                this.state.headerIsPersistent,
                this.headerIsPersistent
            )
        ) {
            this.state.headerIsPersistent = this.headerIsPersistent;
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(
                this.state.lazyLoadRows,
                this.lazyLoadRows
            )
        ) {
            this.state.lazyLoadRows = this.lazyLoadRows;
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(
                this.state.loadMoreLimit,
                this.loadMoreLimit
            )
        ) {
            this.state.loadMoreLimit = this.loadMoreLimit;
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(
                this.state.selection,
                this.selection
            )
        ) {
            this.state.selection = this.selection;
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(
                this.state.rowsPerPage,
                this.currentRowsPerPage
            )
        ) {
            this.state.rowsPerPage = this.currentRowsPerPage;
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(
                this.state.showFilters,
                this.showFilters
            )
        ) {
            this.state.showFilters = this.showFilters;
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(
                this.state.showGroups,
                this.showGroups
            )
        ) {
            this.state.showGroups = this.showGroups;
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(
                this.state.showHeader,
                this.showHeader
            )
        ) {
            this.state.showHeader = this.showHeader;
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(
                this.state.showLoadMore,
                this.showLoadMore
            )
        ) {
            this.state.showLoadMore = this.showLoadMore;
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(
                this.state.showPaginator,
                this.showPaginator
            )
        ) {
            this.state.showPaginator = this.showPaginator;
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(
                this.state.hiddenSubmitButton,
                this.hiddenSubmitButton
            )
        ) {
            this.state.hiddenSubmitButton = this.hiddenSubmitButton;
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(
                this.state.sortEnabled,
                this.sortEnabled
            )
        ) {
            this.state.sortEnabled = this.sortEnabled;
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(
                this.state.sortableColumnsMutateData,
                this.sortableColumnsMutateData
            )
        ) {
            this.state.sortableColumnsMutateData =
                this.sortableColumnsMutateData;
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(
                this.state.pageSelected,
                this.currentPage
            )
        ) {
            this.state.pageSelected = this.currentPage;
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(
                this.state.dragEnabled,
                this.dragEnabled
            )
        ) {
            this.state.dragEnabled = this.dragEnabled;
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(
                this.state.dropEnabled,
                this.dropEnabled
            )
        ) {
            this.state.dropEnabled = this.dropEnabled;
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(
                this.state.showFooter,
                this.showFooter
            )
        ) {
            this.state.showFooter = this.showFooter;
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(this.state.totals, this.totals)
        ) {
            this.state.totals = { ...this.totals };
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(
                this.state.selectRowsById,
                this.selectedRows.reduce((accumulator, row, currentIndex) => {
                    const prefix = currentIndex > 0 ? ';' : '';
                    return accumulator + prefix + row.id;
                }, '')
            )
        ) {
            this.state.selectRowsById = this.selectedRows.reduce(
                (accumulator, row, currentIndex) => {
                    const prefix = currentIndex > 0 ? ';' : '';
                    return accumulator + prefix + row.id;
                },
                ''
            );
            somethingChanged = true;
        }
        if (
            !this.#kupManager.objects.deepEqual(
                this.state.visibleColumns,
                this.visibleColumns
            )
        ) {
            this.state.visibleColumns = [...this.visibleColumns];
            somethingChanged = true;
        }
        return somethingChanged;
    }
    //////////////////////////////
    // End state stuff
    //////////////////////////////

    @Element() rootElement: HTMLElement;

    /**
     * When true and when a row is missing some columns, the missing cells will be autogenerated.
     * @default false
     */
    @Prop() autoFillMissingCells: boolean = false;
    /**
     * Custom style of the component. For more information: https://smeup.github.io/ketchup/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * The data of the table.
     */
    @Prop({ mutable: true }) data: KupDataTableDataset;
    /**
     * The density of the rows, defaults at 'medium' and can be also set to 'large' or 'small'.
     */
    @Prop() density: FCellPadding = FCellPadding.EXTRA_DENSE;
    /**
     * Enables drag.
     */
    @Prop({ mutable: true, reflect: true }) dragEnabled: boolean = false;
    /**
     * Enables drop.
     */
    @Prop({ reflect: true }) dropEnabled: boolean = false;
    /**
     * When set to true, editable cells will be rendered using input components.
     * @default false
     */
    @Prop({ mutable: true }) editableData: boolean = false;
    /**
     * Defines the label to show when the table is empty.
     */
    @Prop({ mutable: true }) emptyDataLabel: string = null;
    /**
     * Enables the choice to set formulas on columns by dragging them into different columns.
     * @default true
     */
    @Prop() enableColumnsFormula: boolean = true;
    /**
     * Enables the extracolumns add buttons.
     */
    @Prop() enableExtraColumns: boolean = true;
    /**
     * Enables the merging of columns by dragging them into different columns.
     * @default true
     */
    @Prop() enableMergeColumns: boolean = true;
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
     * Fixes the given number of columns to the right so that they stay visible when horizontally scrolling the data-table.
     * If grouping is active or the value of the prop is <= 0, this prop will have no effect.
     * Can be combined with fixedRows.
     * @see fixedRows
     */
    @Prop() fixedColumnsR: number = 0;
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
     * Enables insert mode.
     * @default '''
     */
    @Prop() insertMode: KupDataTableInsertMode = '';
    /**
     * When set to true, clicked-on rows will have a visual feedback.
     * @default false
     */
    @Prop() isFocusable: boolean = false;
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
     * Current selected page set on component load
     */
    @Prop() pageSelected: number = -1;
    /**
     * Sets the position of the paginator. Available positions: top, bottom or both.
     */
    @Prop() paginatorPos: PaginatorPos = PaginatorPos.TOP;
    /**
     * When enabled, the extra whitespaces will be displayed and the font will be set to monospace by default.
     */
    @Prop({ reflect: true }) legacyLook = false;
    /**
     * When enabled, the table wrapper won't have overflow in order to make the fixed column and footer adapt to the webupjs dsh mode
     */
    @Prop({ reflect: true }) isDashboardMode = false;
    /**
     * Sets the possibility to remove the selected column.
     */
    @Prop() removableColumns: boolean = false;
    /**
     * Gives the possibility to resize columns by dragging on their right edge.
     */
    @Prop() resizableColumns: boolean = true;
    /**
     * Sets the actions of the rows.
     */
    @Prop() rowActions: Array<KupDataRowAction>;
    /**
     * Sets the commands for the rows
     */
    @Prop() commands: Array<KupCommand>;
    /**
     * Sets the number of rows per page to display.
     */
    @Prop({ mutable: true }) rowsPerPage = 1000;
    /**
     * Activates the scroll on hover function.
     */
    @Prop() scrollOnHover: boolean = false;
    /**
     * Set the type of the rows selection.
     */
    @Prop() selection: SelectionMode = SelectionMode.SINGLE;
    /**
     * If set to true, displays the button to open the customization panel.
     */
    @Prop() showCustomization: boolean = true;
    /**
     * Enables the delete row button.
     */
    @Prop() showDeleteButton: boolean = false;
    /**
     * Enables the history button.
     */
    @Prop() showHistoryButton: boolean = false;
    /**
     * When set to true enables the column filters.
     */
    @Prop() showFilters: boolean = true;
    /**
     * When set to true shows the footer.
     */
    @Prop() showFooter: boolean = true;
    /**
     * Can be used to customize the grid view of the table.
     */
    @Prop() showGrid: ShowGrid = ShowGrid.ROW;
    /**
     * When set to true enables the column grouping.
     */
    @Prop() showGroups: boolean = false;
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
     * Set the paginator visibility
     */
    @Prop() showPaginator: boolean = true;
    /**
     * When set to true, the subimt button is hidden
     * @default false
     */
    @Prop() hiddenSubmitButton: boolean = false;
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
     * When set to true enables the sorting of the columns by clicking on the column header.
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
     * Defines the current totals options
     */
    @Prop({ mutable: true }) totals: TotalsMap;
    /**
     * Transposes the data of the data table
     */
    @Prop({ mutable: true }) transpose: boolean = false;
    /**
     * List of the visible columns
     */
    @Prop({ mutable: true }) visibleColumns: string[];

    /**
     * When set to true, editable cells will be rendered using input components
     * and an update button will appear below the matrix
     * @default false
     */
    @Prop({ mutable: true, reflect: true }) updatableData: boolean = false;

    /**
     * When set to true, editable checkbox will call update
     * @default false
     */
    @Prop() updateOnClick: boolean = false;

    //-------- State --------

    @State()
    private lazyLoadCells = false;

    @State()
    private currentPage = 1;

    @State()
    private currentRowsPerPage = 50;

    @State()
    private selectedRows: Array<KupDataTableRow> = [];

    @State()
    private selectedColumn: string;

    @State()
    private columnMenuAnchor: string = null;

    @State()
    private groupState: {
        [index: string]: {
            expanded: boolean;
        };
    } = {};

    /**
     * name of the column with the opened total menu
     */
    @State()
    private openedTotalMenu: string = null;

    @State()
    private openedCustomSettings: boolean = false;

    @State()
    private fontsize: string = 'small';

    @Watch('rowsPerPage')
    rowsPerPageHandler(newValue: number) {
        this.currentRowsPerPage = newValue;
    }

    @Watch('expandGroups')
    expandGroupsHandler() {
        if (!this.#isRestoringState) {
            this.recalculateRows();
            // reset group state
            this.groupState = {};
            this.#forceGroupExpansion();
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
        if (!this.#isRestoringState) {
            this.#initRows();
        }
    }

    @Watch('data')
    identifyAndInitRows() {
        if (this.data.rows.filter((r) => r.id == undefined).length) {
            identify(this.getRows());
        }
        this.expandGroupsHandler();
        this.#resetSelectedRows();
    }

    @Watch('data')
    decorateAndInitForUpdTable() {
        if (this.data['type'] === 'SmeupDataTable') {
            decorateDataTable(this.data);
            this.#lastFocusedRow = this.data.rows[0];
        }
        if (this.updatableData) {
            this.#originalDataLoaded = JSON.parse(JSON.stringify(this.data));
            this.selection = this.data.setup?.operations?.delete
                ? SelectionMode.MULTIPLE_CHECKBOX
                : this.selection;

            this.#insertedRowIds = [];

            this.#originalDataLoadedMaxId =
                this.#originalDataLoaded.rows?.length > 0
                    ? Math.max(
                          ...this.#originalDataLoaded.rows.map((r) =>
                              parseInt(r.id)
                          )
                      )
                    : -1;
        }
    }

    @Watch('data')
    @Watch('visibleColumns')
    computeMaxRowsPerPage() {
        if (this.data?.columns?.length > 0 && this.data?.rows?.length > 0) {
            const columnsNumber = this.getVisibleColumns().length;
            const rowsNumber = this.data.rows.length;
            const perfTuning = this.#kupManager.perfTuning;

            perfTuning.maxRowsPerPageProvider(
                columnsNumber,
                rowsNumber,
                (maxRows) => {
                    this.#maxRowsPerPage = maxRows;
                }
            );

            if (this.rowsPerPage > this.#maxRowsPerPage)
                this.rowsPerPage = this.#maxRowsPerPage;
        }
    }

    @Watch('groups')
    recalculateRowsAndUndoSelections() {
        if (!this.#isRestoringState) {
            this.recalculateRows();
            // reset group state
            this.groupState = {};
            this.#forceGroupExpansion();
            this.#resetSelectedRows();
        }
    }

    @Watch('fixedColumns')
    @Watch('fixedColumnsR')
    @Watch('fixedRows')
    controlFixedRowsColumns() {
        let warnMessage = '';

        if (isNaN(this.fixedColumns) || this.fixedColumns < 0) {
            warnMessage += `The value ${this.fixedColumns} set on fixedColumns property is not valid.`;
        }

        if (isNaN(this.fixedColumnsR) || this.fixedColumnsR < 0) {
            warnMessage += `The value ${this.fixedColumnsR} set on fixedColumnsR property is not valid.`;
        }

        if (isNaN(this.fixedRows) || this.fixedRows < 0) {
            warnMessage += `The value ${this.fixedRows} set on fixedRows property is not valid.`;
        }

        if (warnMessage && console) {
            console.warn(warnMessage + 'Any fixed rule will be ignored.');
        }
    }

    @Watch('transpose')
    recalculateData() {
        if (this.#initialized) {
            this.#calculateData();
        }
    }

    #initialized = false;
    #rows: Array<KupDataTableRow>;
    #rowsLength: number = 0;

    #paginatedRows: Array<KupDataTableRow>;
    #paginatedRowsLength: number = 0;

    #footer: { [index: string]: string };
    /**
     * Instance of the KupManager class.
     */
    #kupManager: KupManager = kupManagerInstance();
    #renderedRows: Array<KupDataTableRow> = [];

    #loadMoreEventCounter: number = 0;

    #loadMoreEventPreviousQuantity: number = 0;

    /**
     * Reference for the thead element
     */
    #theadRef: any;
    #tableRef: HTMLTableElement;

    /**
     * contains the original data, used in transposed function
     */
    #originalData: KupDataTableDataset = undefined;

    /**
     * contains the original data when the component is
     * loaded the first time
     */
    #originalDataLoaded: KupDataDataset = undefined;

    /**
     * contains the id greater value in #originalDataLoaded
     */
    #originalDataLoadedMaxId: number;
    /**
     * contains the id greater value in #originalDataLoaded
     */
    #insertedRowIds: string[] = [];

    /**
     * Reference to the working area of the table. This is the below-wrapper reference.
     */
    #tableAreaRef: KupScrollOnHoverElement;
    #stickyTheadRef: any;
    #lastPointerDetails: KupDatatableEventHandlerDetails;
    #customizeTopButtonRef: any;
    #customizeTopPanelRef: HTMLKupCardElement;
    #sizedColumns: KupDataColumn[] = undefined;
    #intObserver: IntersectionObserver = undefined;
    #navBarHeight: number = 0;
    #theadIntersecting: boolean = false;
    #tableIntersecting: boolean = false;
    #isSafariBrowser: boolean = false;
    #isRestoringState: boolean = false;
    #globalFilterTimeout: number;
    #totalMenuCoords: KupDynamicPositionCoordinates = null;
    columnFilterTimeout: number;
    #clickTimeout: ReturnType<typeof setTimeout>[] = [];
    #thRefs: HTMLElement[] = [];
    #rowsRefs: HTMLElement[] = [];
    #oldWidth: number = null;
    #hold: boolean = false;
    #interactableDrag: HTMLElement[] = [];
    #interactableDrop: HTMLElement[] = [];
    #interactableResize: HTMLElement[] = [];
    #interactableTouch: HTMLElement[] = [];
    #dropareaRef: HTMLElement = null;
    #removeDropareaRef: HTMLElement = null;
    #groupsDropareaRef: HTMLElement = null;
    #clickCb: KupManagerClickCb = null;
    #clickCbCustomPanel: KupManagerClickCb = null;
    #clickCbDropCard: KupManagerClickCb = null;
    /**
     * Used to prevent too many resizes callbacks at once.
     */
    #resizeTimeout: number;
    #columnMenuInstance: KupColumnMenu;
    #filtersColumnMenuInstance: FiltersColumnMenu;
    #filtersRowsInstance: FiltersRows;
    #detailCard: HTMLKupCardElement = null;
    #insertCard: HTMLKupCardElement = null;
    #actionsCard: HTMLKupCardElement = null;
    #confirmDeleteCard: HTMLKupCardElement = null;
    #confirmDeleteDialog: HTMLKupDialogElement = null;
    #columnMenuCard: HTMLKupCardElement = null;
    #columnDropCard: HTMLKupCardElement = null;
    #columnDropCardAnchor: HTMLElement = null;
    #dropDownActionCardAnchor: HTMLElement = null;
    #insertCount = 0;
    #lastFocusedColumn: KupDataColumn = null;
    #lastFocusedCell: KupDataTableCell = null;
    #lastFocusedRow: KupDataTableRow = null;
    #maxRowsPerPage: number;

    #readyPromise: Promise<void>;
    #readyResolve: () => void;

    #BUTTON_CANCEL_ID: string = 'cancel';
    #BUTTON_SUBMIT_ID: string = 'submit';
    #FIELDS_FORM_ID: string = 'fieldsForm';
    #MESSAGE_ID: string = 'message';
    #MESSAGE_WRAPPER_ID: string = 'messageWrapper';
    #INSERT_PREFIX = 'insert_';

    #DEFAULT_ROWS_FOR_GLOBAL_FILTER: number = 50;

    /**
     * When component unload is complete
     */
    @Event({
        eventName: 'kup-datatable-didunload',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDidUnload: EventEmitter<KupEventPayload>;

    /**
     * When component load is complete
     */
    @Event({
        eventName: 'kup-datatable-didload',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDidLoad: EventEmitter<KupEventPayload>;

    /**
     * When rows selections reset
     */
    @Event({
        eventName: 'kup-datatable-resetselectedrows',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupResetSelectedRows: EventEmitter<KupEventPayload>;

    /**
     * When a row is selected
     */
    @Event({
        eventName: 'kup-datatable-rowselected',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupRowSelected: EventEmitter<KupDatatableRowSelectedEventPayload>;
    /**
     * Generic click event on data table.
     */
    @Event({
        eventName: 'kup-datatable-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDataTableClick: EventEmitter<KupDatatableClickEventPayload>;
    /**
     * Generic right click event on data table.
     */
    @Event({
        eventName: 'kup-datatable-contextmenu',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDataTableContextMenu: EventEmitter<KupDatatableClickEventPayload>;
    /**
     * Generic right click event on a cell in data table.
     */
    @Event({
        eventName: 'kup-datatable-cell-actions-menu',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDataTableCellActionsMenu: EventEmitter<KupDatatableClickEventPayload>;
    /**
     * Generic double click event on data table.
     */
    @Event({
        eventName: 'kup-datatable-dblclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDataTableDblClick: EventEmitter<KupDatatableClickEventPayload>;
    /**
     * Emitted by the column menu card when opened/closed or when a kup-card-event is fired.
     */
    @Event({
        eventName: 'kup-datatable-columnmenu',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDataTableColumnMenu: EventEmitter<KupDatatableColumnMenuEventPayload>;

    @Event({
        eventName: 'kup-datatable-loadmoreclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupLoadMoreClick: EventEmitter<KupDatatableLoadMoreClickEventPayload>;
    /**
     * Event fired when columns are moved (sorted).
     */
    @Event({
        eventName: 'kup-datatable-columnmove',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupColumnMove: EventEmitter<KupDatatableColumnMoveEventPayload>;
    /**
     * Event fired when columns are removed (set to hidden).
     */
    @Event({
        eventName: 'kup-datatable-columnremove',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupColumnRemove: EventEmitter<KupDatatableColumnRemoveEventPayload>;
    /**
     * Event fired when the delete row button is pressed.
     */
    @Event({
        eventName: 'kup-datatable-delete-row',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDeleteRow: EventEmitter<KupDatatableDeleteRowEventPayload>;
    /**
     * Event fired when the save button is pressed.
     */
    @Event({
        eventName: 'kup-datatable-save',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupSave: EventEmitter<KupDatatableInsertRowEventPayload>;
    /**
     * Event fired when the insert row confirm button is pressed.
     */
    @Event({
        eventName: 'kup-datatable-insert-row',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInsertRow: EventEmitter<KupDatatableInsertRowEventPayload>;

    /**
     * Event fired when the history confirm button is pressed.
     */
    @Event({
        eventName: 'kup-datatable-history',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupHistory: EventEmitter<KupDatatableHistoryEventPayload>;

    /**
     * Event fired when the history confirm button is pressed.
     */
    @Event({
        eventName: 'kup-datatable-rowaction-item-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupRowActionItemClick: EventEmitter<KupDatatableRowActionItemClickEventPayload>;

    /**
     * Event fired when the cell action icon is pressed
     */
    @Event({
        eventName: 'kup-datatable-cell-action-icon-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCellActionIconClick: EventEmitter<KupDatatableClickEventPayload>;

    /**
     * Event fired when the user click on update button or on one
     * of the command buttons.
     * Update button and commands are visible when the props updatableData is true
     */
    @Event({
        eventName: 'kup-datatable-update',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupUpdate: EventEmitter<KupDatatableUpdatePayload>;

    @Event({
        eventName: 'kup-datatable-check',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupCellCheck: EventEmitter<KupDatatableCellCheckPayload>;

    @Event({
        eventName: 'kup-datatable-cell-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDataTableCellClick: EventEmitter<FCellEventPayload>;

    @Event({
        eventName: 'kup-datatable-drop',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDataTableDrop: EventEmitter<KupDropEventPayload>;

    @Event({
        eventName: 'kup-datatable-cell-iconclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDataTableCellIconClick: EventEmitter<FCellEventPayload>;

    @Event({
        eventName: 'kup-datatable-cell-input',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDataTableCellInput: EventEmitter<FCellEventPayload>;

    @Event({
        eventName: 'kup-datatable-objectfield-searchpayload',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDataTableObjectFieldSearchPayload: EventEmitter<FObjectFieldEventPayload>;

    @Event({
        eventName: 'kup-datatable-objectfield-opensearchmenu',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDataTableObjectFieldOpenSearchMenu: EventEmitter<FObjectFieldEventPayload>;

    @Event({
        eventName: 'kup-datatable-objectfield-selectedmenuitem',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDataTableObjectFieldSelectedMenuItem: EventEmitter<FObjectFieldEventPayload>;

    /**
     * Closes any opened column menu.
     */
    @Method()
    async closeColumnMenu(): Promise<void> {
        this.columnMenuAnchor = null;
        if (this.#columnMenuCard) {
            this.#columnMenuCard.data = null;
        }
        this.#columnMenuInstance.close(this.#columnMenuCard);
        this.kupDataTableColumnMenu.emit({
            comp: this,
            id: this.rootElement.id,
            card: this.#columnMenuCard,
            event: null,
            open: false,
        });
    }

    /**
     * Collapses all groups.
     */
    @Method()
    async collapseAll(): Promise<void> {
        if (!this.expandGroups) {
            this.expandGroupsHandler();
        }
        this.expandGroups = false;
    }
    /**
     * This method will delete rows by id from the data table dataset.
     * @param {string[]} ids - Array of row ids to delete.
     * @returns {Promise<Array<KupDataTableRow>>} Deleted rows.
     */
    @Method()
    async deleteRows(ids: string[] = []): Promise<Array<KupDataTableRow>> {
        const deletedRows: KupDataTableRow[] = [];
        const newRows: KupDataTableRow[] = [];
        const currentRows = this.getRows();
        for (let index = 0; index < currentRows.length; index++) {
            const row = currentRows[index];
            if (ids.includes(row.id)) {
                const r = row.clonedFrom ? row.clonedFrom : row;
                deletedRows.push(r);
                if (this.selectedRows.includes(row)) {
                    this.selectedRows.splice(this.selectedRows.indexOf(row), 1);
                }
            } else {
                newRows.push(row);
            }
        }
        if (deletedRows.length > 0) {
            this.data.rows = newRows;
            await this.refresh(true);
        }
        return deletedRows;
    }

    /**
     * Closes the insert new record card (called by backend, on success)
     */
    @Method()
    async closeInsertCard() {
        if (this.#insertCard) {
            this.#insertCard.remove();
            this.#insertCard = null;
        }
    }
    /**
     * Closes the delete confirm card (called by backend, on success)
     */
    @Method()
    async closeConfirmDeleteCard() {
        if (this.#confirmDeleteDialog) {
            this.#confirmDeleteDialog.close();
            this.#confirmDeleteCard = null;
            this.#confirmDeleteDialog = null;
        }
    }

    /**
     * Returns cards and sub components
     */
    @Method()
    async getCards(): Promise<any> {
        const obj = {};

        if (this.#insertCard) {
            obj['insertCard'] = {
                el: this.#insertCard,
                messageWrapper: this.#insertCard.querySelector(
                    '#' + this.#MESSAGE_WRAPPER_ID
                ),
                message: this.#insertCard.querySelector('#' + this.#MESSAGE_ID),
                submitButton: this.#insertCard.querySelector(
                    '#' + this.#BUTTON_SUBMIT_ID
                ),
                cancelButton: this.#insertCard.querySelector(
                    '#' + this.#BUTTON_CANCEL_ID
                ),
                form: this.#insertCard.querySelector(
                    '#' + this.#FIELDS_FORM_ID
                ),
            };
        }
        if (this.#confirmDeleteCard) {
            obj['confirmDeleteCard'] = {
                el: this.#confirmDeleteCard,
                messageWrapper: this.#insertCard.querySelector(
                    '#' + this.#MESSAGE_WRAPPER_ID
                ),
                message: this.#confirmDeleteCard.querySelector(
                    '#' + this.#MESSAGE_ID
                ),
                submitButton: this.#confirmDeleteCard.querySelector(
                    '#' + this.#BUTTON_SUBMIT_ID
                ),
                cancelButton: this.#confirmDeleteCard.querySelector(
                    '#' + this.#BUTTON_CANCEL_ID
                ),
            };
        }
        /*
        #detailCard: HTMLKupCardElement = null;
        #columnMenuCard: HTMLKupCardElement = null;
        #columnDropCard: HTMLKupCardElement = null;
        */
        return obj;
    }

    /**
     * Adds a new row to the list data
     * @param row new row
     */
    @Method()
    async insertNewRow(row: KupDataTableRow, unshift: boolean = false) {
        if (row) {
            if (unshift) {
                this.data.rows.unshift(row);
            } else {
                this.data.rows.push(row);
            }
            await this.refresh(true);
        }
    }

    /**
     * Expands all groups.
     */
    @Method()
    async expandAll(): Promise<void> {
        if (this.expandGroups) {
            this.expandGroupsHandler();
        }
        this.expandGroups = true;
    }
    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KupDataTableProps, descriptions);
    }
    /**
     * This method will get the selected rows of the component.
     */
    @Method()
    async getSelectedRows(): Promise<Array<KupDataTableRow>> {
        const selRows: KupDataTableRow[] = [];
        this.selectedRows.forEach((row) => {
            if (row.clonedFrom) {
                selRows.push(row.clonedFrom);
            } else {
                selRows.push(row);
            }
        });
        return selRows;
    }
    /**
     * Hides the given column.
     * @param {KupDataColumn} column - Column to hide.
     */
    @Method()
    async hideColumn(column: KupDataColumn): Promise<void> {
        this.#kupManager.data.column.hide(this.data, [column.name]);
        this.visibleColumns = this.getVisibleColumns().map((col) => col.name);
        this.visibleColumns = this.visibleColumns.filter(
            (colName) => colName != column.name
        );
        this.kupColumnRemove.emit({
            comp: this,
            id: this.rootElement.id,
            column: column,
        });
        this.refresh();
    }

    /**
     * Adds/subtracts the input number from the first group's depth level.
     */

    @Method()
    async setGroupExpansionByDepth(modifier: number) {
        const toStream = () => {
            const streamlined: KupDataTableRow[] = [];
            for (let index = 0; index < this.#paginatedRows.length; index++) {
                const row = this.#paginatedRows[index];
                const group = row.group;
                if (group) {
                    recursive(row);
                }

                function recursive(row: KupDataTableRow) {
                    const group = row.group;
                    streamlined.push(row);
                    for (
                        let index = 0;
                        group?.children && index < group.children.length;
                        index++
                    ) {
                        recursive(group.children[index]);
                    }
                }
            }
            return streamlined;
        };
        const handleChildren = (
            row: KupDataTableRow,
            expand: boolean,
            maxDepth?: number,
            depth?: number
        ) => {
            const group = row.group;

            if (row.hasOwnProperty('group')) {
                const shouldExpand = depth < maxDepth;

                group.expanded = shouldExpand;
                this.groupState[group.id] = { expanded: shouldExpand };
                const paginated = paginatedStream?.find(
                    (r) => r.group?.id === group.id
                )?.group;
                if (paginated) {
                    paginated.expanded = shouldExpand;
                }
                if (group.children) {
                    for (
                        let index = 0;
                        index < group.children.length;
                        index++
                    ) {
                        const child = group.children[index];
                        handleChildren(child, expand, maxDepth, depth + 1);
                    }
                }
            }
        };
        const getGroupDepth = (): number => {
            const firstGroup = this.#rows[0];
            let maxDepth = 0;

            const traverseGroup = (
                row: KupDataTableRow,
                currentDepth: number
            ): void => {
                const group = row.group;
                if (row.hasOwnProperty('group')) {
                    if (group.expanded) {
                        maxDepth = Math.max(maxDepth, currentDepth);
                        maxDepth += 1;
                    }
                    traverseGroup(group.children[0], currentDepth + 1);
                }
            };

            if (firstGroup) {
                traverseGroup(firstGroup, 0);
            }

            return maxDepth;
        };
        const paginatedStream = toStream();

        let maxDepth = getGroupDepth() + modifier;

        for (let index = 0; index < this.#rows.length; index++) {
            const row = this.#rows[index];
            const group = row.group;
            if (group) {
                handleChildren(row, false, maxDepth, 0);
            }
        }

        this.#adjustGroupState();
        this.refresh();
    }

    /**
     * Invokes the KupData API for column creation, then refreshes the component in case no errors were catched.
     * @param {KupDataNewColumnTypes} type - Type of the column creation.
     * @param {KupDataNewColumnOptions} options - Options of the creation.
     * @returns {string|KupDataColumn} Returns the new column created or a string containing the error message if something went wrong.
     */
    @Method()
    async newColumn(
        type: KupDataNewColumnTypes,
        options: KupDataNewColumnOptions
    ): Promise<string | KupDataColumn> {
        const result = this.#kupManager.data.column.new(
            this.data,
            type,
            options
        );
        this.#insertNewColumnInVisibleColumnsList(result, options.columns[1]);
        this.refresh();
        return result;
    }
    /**
     * Opens the column menu of the given column.
     * @param {string} column - Name of the column.
     */
    @Method()
    async openColumnMenu(
        columnName: string,
        wrapperClass: string
    ): Promise<void> {
        if (this.#columnMenuCard) {
            this.#closeColumnMenuCard();
        }

        this.#columnMenuCard = document.createElement('kup-card');
        this.#columnMenuCard.isMenu = true;
        this.#columnMenuCard.layoutNumber = 12;
        this.#columnMenuCard.sizeX = 'auto';
        this.#columnMenuCard.sizeY = 'auto';
        this.#columnMenuCard.addEventListener(
            'kup-card-click',
            (e: CustomEvent<KupEventPayload>) => {
                this.kupDataTableColumnMenu.emit({
                    comp: this,
                    id: this.rootElement.id,
                    card: this.#columnMenuCard,
                    event: e,
                    open: this.#columnMenuCard.menuVisible,
                });
            }
        );

        this.#columnMenuCard.addEventListener(
            'kup-card-event',
            (e: CustomEvent<KupCardEventPayload>) => {
                this.#columnMenuInstance.eventHandlers(e, this);
                this.kupDataTableColumnMenu.emit({
                    comp: this,
                    id: this.rootElement.id,
                    card: this.#columnMenuCard,
                    event: e,
                    open: this.#columnMenuCard.menuVisible,
                });
            }
        );

        this.#clickCbDropCard = {
            cb: () => {
                this.#closeColumnMenuCard();
            },
            el: this.#columnMenuCard,
        };

        this.#kupManager.addClickCallback(this.#clickCbDropCard, true);

        this.#columnMenuCard.setAttribute('data-column', columnName);
        this.#columnMenuCard.data = this.#columnMenuInstance.prepData(
            this,
            getColumnByName(this.getColumns(), columnName)
        );
        this.#columnMenuInstance.open(this, columnName);
        this.#columnMenuInstance.reposition(
            this,
            this.#columnMenuCard,
            wrapperClass
        );
        this.kupDataTableColumnMenu.emit({
            comp: this,
            id: this.rootElement.id,
            card: this.#columnMenuCard,
            event: null,
            open: true,
        });
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(recalcRows?: boolean): Promise<void> {
        if (recalcRows) {
            this.#initRows();
        }
        forceUpdate(this);
    }
    /**
     * This method is invoked by KupManager whenever the component changes size.
     */
    @Method()
    async resizeCallback(): Promise<void> {
        if (
            this.lazyLoadCells &&
            this.rootElement.clientWidth !== this.#oldWidth
        ) {
            window.clearTimeout(this.#resizeTimeout);
            this.#resizeTimeout = window.setTimeout(() => this.refresh(), 300);
        }
    }

    /**
     * Sets the cell value in a table cell.
     * @param {string} columnName - Name of the column.
     * @param {string} rowId - Id of the row.
     * @param {string} value - Value to set.
     */
    @Method()
    async setCellValue(
        columnName: string,
        rowId: string,
        value: string
    ): Promise<void> {
        const column = getColumnByName(this.data.columns, columnName);
        if (!column) {
            return;
        }
        const row = this.#getRow(rowId);
        if (!row) {
            return;
        }
        const cell = row.cells[columnName];
        if (!cell) {
            return;
        }
        cell.value = value;
        cell.displayedValue = null;
        if (cell.data) {
            cell.data.key = new Date().getTime() + column.name;
            cell.data.initialValue = value;
        }

        this.refresh();
    }

    /**
     * Sets the focus on an editable table cell.
     * @param {string} column - Name of the column.
     * @param {string} rowId - Id of the row.
     */
    @Method()
    async setFocus(column: string, rowId: string): Promise<void> {
        const cells = this.rootElement.shadowRoot.querySelectorAll(
            'td[data-column="' + column + '"]'
        );
        for (let index = 0; cells && index < cells.length; index++) {
            const cell = cells[index];
            if (cell['data-row'] && cell['data-row'].id == rowId) {
                const input = cell.querySelector('input');
                if (input) {
                    input.focus();
                } else {
                    const kupInput = cell.querySelector('.hydrated');
                    if (kupInput) {
                        try {
                            (kupInput as any).setFocus();
                        } catch (error) {}
                    }
                }
            }
        }
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupDataTableProps, props);
    }

    /**
     * This method will set the selected rows of the component.
     * @param {string|number[]} rowsIdentifiers - Array of ids (dataset) or indexes (rendered rows).
     * @param {boolean} emitEvent - The event will always be emitted unless emitEvent is set to false.
     * @param {boolean} scrollIntoView - If true, the component will scroll to the first selected row.
     */
    @Method()
    async setSelectedRows(
        rowsIdentifiers: string[] | number[],
        emitEvent?: boolean,
        scrollIntoView?: boolean
    ): Promise<void> {
        let firstRowSelectedId = undefined;
        this.selectedRows = [];
        for (let index = 0; index < rowsIdentifiers.length; index++) {
            const id = rowsIdentifiers[index];
            const row = this.#getRow(id);
            if (row) {
                if (!firstRowSelectedId) {
                    firstRowSelectedId = id;
                }
                this.selectedRows.push(row);
            }
        }

        if (scrollIntoView && firstRowSelectedId) {
            this.scrollToRow(firstRowSelectedId);
        }

        if (emitEvent !== false) {
            this.kupRowSelected.emit({
                comp: this,
                id: this.rootElement.id,
                selectedRows: this.selectedRows,
                clickedColumn: null,
                clickedRow: null,
            });
        }
    }

    /**
     * This method will scroll the component to rowIdentifier row.
     * @param {string|number} rowIdentifier - Id (dataset) or indexe (rendered rows).
     */
    @Method()
    async scrollToRow(rowIdentifier: string | number): Promise<void> {
        const id = rowIdentifier;
        const row = this.#getRow(id);

        if (row) {
            const start = (this.currentPage - 1) * this.currentRowsPerPage;
            const end = this.currentPage * this.currentRowsPerPage;
            const index = this.#rows.indexOf(row) % (end - start);
            const scrollableContainer = this.#tableAreaRef;
            const target = this.#rowsRefs[index];

            if (index >= 1) {
                const headerHeight = parseInt(
                    getComputedStyle(this.#theadRef).height.replace('px', '')
                );
                const targetRect = target.getBoundingClientRect();
                const scrollableContainerRect =
                    scrollableContainer.getBoundingClientRect();
                const scrollOffset =
                    scrollableContainer.scrollTop -
                    headerHeight +
                    (targetRect.top - scrollableContainerRect.top);

                scrollableContainer.scrollTo({
                    top: scrollOffset,
                    behavior: 'instant',
                });
            }
        }
    }

    /**
     * Public method to wait until the component is fully ready.
     */
    @Method()
    async waitForReady(): Promise<void> {
        return this.#readyPromise;
    }
    /**
     * This method is used to retrieve last focused row or the first if there's no row focused
     */
    @Method()
    async getLastFocusedRow(): Promise<KupDataTableRow> {
        return this.#lastFocusedRow;
    }
    /**
     * This method is used to retrieve last focused cell
     */
    @Method()
    async getLastFocusedCell(): Promise<KupDataTableCell> {
        return this.#lastFocusedCell;
    }

    /**
     * This method is used to retrieve last focused column
     */
    @Method()
    async getLastFocusedColumn(): Promise<KupDataColumn> {
        return this.#lastFocusedColumn;
    }

    /**
     * This method is used to force tooltip request for current focused cell
     */
    @Method()
    async tooltipRequest(): Promise<void> {
        if (!this.#lastFocusedCell && !this.#lastFocusedColumn) {
            return;
        }

        this.kupDataTableContextMenu.emit({
            comp: this,
            id: this.rootElement.id,
            details: this.#tooltipRequestHandler(),
        });
    }
    /**
     * Trigger update from outside
     * @param {string} commandId - When provided, will trigger onclick event of command instead of *UPDATE
     */
    @Method()
    async update(commandId?: string): Promise<void> {
        if (!commandId) {
            this.#handleUpdateClick();
        }

        const command =
            this.data?.setup?.commands?.find(
                (cmd) => cmd.obj?.k === commandId
            ) ??
            this.data?.setup?.commands
                ?.flatMap((cmd) => cmd.children)
                .find((child) => child?.obj?.k === commandId) ??
            null;

        if (command) {
            this.#handleUpdateClick(command);
        }
    }

    //#region LISTENERS
    /*-------------------------------------------------*/
    /*                L i s t e n e r s                */
    /*-------------------------------------------------*/

    @Listen('keydown')
    listenEnterKeydown(e: KeyboardEvent) {
        if (this.updatableData && e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();

            const bc = this.rootElement.shadowRoot
                .activeElement as HTMLInputElement;
            if (bc) {
                bc.blur();
                this.#handleUpdateClick();
            }
        }
    }

    @Listen('keydown')
    listenCopyCellValueInColumnListener(e: KeyboardEvent) {
        if (
            this.updatableData &&
            e.key.toLowerCase() === 'd' &&
            e.ctrlKey === true
        ) {
            const input = this.rootElement.shadowRoot
                .activeElement as HTMLInputElement;
            if (input) {
                this.#copyCellValueInColumnHandler(e, input);
            }
        }
    }

    //#endregion

    #insertNewColumnInVisibleColumnsList(
        result: string | KupDataColumn,
        afterColumn: string
    ) {
        this.visibleColumns = this.getVisibleColumns().map((col) => col.name);
        if (typeof result !== 'string') {
            if (this.visibleColumns.findIndex((c) => c === result.name) < 0) {
                this.#kupManager.debug.logMessage(
                    this,
                    'New column [' +
                        result.name +
                        '] not present in visibleColumns!',
                    KupDebugCategory.WARNING
                );
                const previousColumnIndex = this.visibleColumns.findIndex(
                    (c) => c == afterColumn
                );
                if (previousColumnIndex >= 0) {
                    this.#kupManager.debug.logMessage(
                        this,
                        'New column [' +
                            result.name +
                            '] added in visibleColumns at index [' +
                            (previousColumnIndex + 1) +
                            ']!',
                        KupDebugCategory.WARNING
                    );
                    this.visibleColumns.splice(
                        previousColumnIndex + 1,
                        0,
                        result.name
                    );
                }
            }
        }
    }

    #closeDropCard() {
        this.#kupManager.dynamicPosition.stop(
            this.#columnDropCard as KupDynamicPositionElement
        );
        this.#kupManager.removeClickCallback(this.#clickCbDropCard);
        this.#columnDropCard.remove();
        this.#columnDropCard = null;
    }

    #createDropCard(starter: KupDataColumn, receiving: KupDataColumn) {
        if (this.#columnDropCard) {
            this.#closeDropCard();
        }
        this.#columnDropCard = document.createElement('kup-card');
        this.#columnDropCard.data = {
            options: {
                data: this.data,
                enableFormula: this.enableColumnsFormula,
                enableMerge: this.enableMergeColumns,
                enableMove: this.enableSortableColumns,
                receivingColumn: receiving,
                starterColumn: starter,
                formulaCb: (result) => {
                    this.#insertNewColumnInVisibleColumnsList(
                        result,
                        starter.name
                    );
                    this.#closeDropCard();
                    this.refresh();
                },
                mergeCb: () => {
                    this.newColumn(KupDataNewColumnTypes.CONCATENATE, {
                        columns: [receiving.name, starter.name],
                    });
                    this.#closeDropCard();
                },
                moveCb: () => {
                    this.#handleColumnSort(receiving, starter);
                    this.#closeDropCard();
                },
            } as KupCardColumnDropMenuOptions,
        };
        this.#columnDropCard.layoutFamily = KupCardFamily.BUILT_IN;
        this.#columnDropCard.layoutNumber = 3;
        this.#columnDropCard.isMenu = true;
        this.#columnDropCard.sizeX = '280px';
        this.#columnDropCard.sizeY = 'auto';
        this.#kupManager.dynamicPosition.register(
            this.#columnDropCard,
            this.#columnDropCardAnchor as KupDynamicPositionAnchor,
            0,
            KupDynamicPositionPlacement.AUTO,
            true
        );
        this.#kupManager.dynamicPosition.start(
            this.#columnDropCard as unknown as KupDynamicPositionElement
        );
        this.#clickCbDropCard = {
            cb: () => {
                this.#closeDropCard();
            },
            el: this.#columnDropCard,
        };
        this.#kupManager.addClickCallback(this.#clickCbDropCard, true);
        this.#columnDropCard.menuVisible = true;
    }

    #calculateData() {
        if (!this.transpose) {
            // restore
            if (this.#originalData) {
                this.data = { ...this.#originalData };
            }
        } else {
            // transpose
            this.#setTransposedData();
        }
    }

    #getRow(id: string | number): KupDataRow {
        if (this.#isGrouping() && typeof id === 'string') {
            return this.#_getRow(id, this.#paginatedRows);
        } else {
            return this.#_getRow(id, this.#rows);
        }
    }

    #_getRow(id: string | number, rows: KupDataTableRow[]): KupDataTableRow {
        if (!rows || rows.length == 0) {
            return null;
        }
        if (typeof id === 'number') {
            return rows[id];
        } else {
            for (let i = 0; i < rows.length; i++) {
                let r = rows[i];
                if (r.id === id) {
                    return r;
                }
                if (r.group) {
                    r = this.#_getRow(id, r.group.children);
                    if (r) {
                        return r;
                    }
                }
            }
        }
        return null;
    }

    #getTransposedData(column?: string): KupDataDataset {
        if (column) {
            this.filters = {};
        }
        return this.#kupManager.data.transpose(this.data, column);
    }

    #setTransposedData(): void {
        // transpose
        this.#originalData = { ...this.data };
        if (this.data.columns.length > 0) {
            this.data = this.#getTransposedData(this.data.columns[0].name);
        }
    }

    #switchToTotalsMatrix(): void {
        if (this.#rows.length === 0 || !this.#rows[0].group) return;
        // calc totals matrix data
        const totalsMatrixData: KupDataDataset = {};
        // calc columns id
        // note that the sorting of the columns depends on the totals selection
        // the first column is the one that is selected first in the totals, and so on...
        const ids: Array<string> = [];
        ids.push(this.#rows[0].group.column);
        Object.keys(this.#rows[0].group.totals).forEach((columnKey) => {
            if (this.#rows[0].group.column !== columnKey) ids.push(columnKey);
        });
        // calc columns
        const totalsMatrixColumns: Array<KupDataColumn> = [];
        ids.forEach((id) => {
            this.data.columns.forEach((column) => {
                if (column.name === id) {
                    const currentColumn = { ...column };
                    const totalMode = this.totals[currentColumn.name];
                    if (totalMode) {
                        if (totalMode.startsWith(TotalMode.MATH)) {
                            currentColumn.title =
                                TotalLabel[TotalMode.MATH] +
                                ' ' +
                                currentColumn.title;
                        } else {
                            const totalModeKey = Object.keys(TotalMode).find(
                                (key) => TotalMode[key] === totalMode
                            );
                            if (totalModeKey) {
                                currentColumn.title =
                                    TotalLabel[totalModeKey] +
                                    ' ' +
                                    currentColumn.title;
                            } else {
                                currentColumn.title =
                                    totalMode + ' ' + currentColumn.title;
                            }
                        }
                        this.#setObjForTotalsMatrix(currentColumn, this.totals);
                    }
                    totalsMatrixColumns.push(currentColumn);
                }
            });
        });
        // set columns
        totalsMatrixData.columns = totalsMatrixColumns;
        // calc rows
        const totalsMatrixRows: Array<KupDataTableRow> = [];
        let index = 0;
        this.#rows.forEach((row) => {
            const cells: KupDataTableRowCells = {};
            ids.forEach((id) => {
                let totalValue = row.group.totals[id];
                if (!totalValue) {
                    totalValue = row.group.id;
                }
                if (this.#kupManager.dates.isIsoDate(totalValue)) {
                    totalValue = this.#kupManager.dates.format(totalValue);
                }
                cells[id] = {
                    value: String(totalValue),
                };
            });
            totalsMatrixRows.push({
                id: String(index),
                cells,
            });
            index++;
        });
        // set rows
        totalsMatrixData.rows = totalsMatrixRows;
        // reset groups
        this.groups = [];
        // update data
        this.data = { ...totalsMatrixData };
        // calc totals
        // distinct becomes count
        // count becomes sum
        const updatedTotals: TotalsMap = {};
        Object.keys(this.totals).forEach((key) => {
            switch (this.totals[key]) {
                case TotalMode.DISTINCT:
                    updatedTotals[key] = TotalMode.COUNT;
                    break;
                case TotalMode.COUNT:
                    updatedTotals[key] = TotalMode.SUM;
                    break;
                default:
                    updatedTotals[key] = this.totals[key];
                    break;
            }
        });
        // update totals
        this.totals = { ...updatedTotals };
    }

    // TODO
    // this is momentary
    #setObjForTotalsMatrix(column: KupDataColumn, totals: TotalsMap): void {
        const obj = column.obj;
        const totalMode = totals[column.name];
        if (this.#kupManager.objects.isDate(obj)) {
            // check if min or max totals mode
            if (totalMode === TotalMode.MAX || totalMode === TotalMode.MIN) {
                return;
            }
        } else if (this.#kupManager.objects.isNumber(obj)) {
            // check if percentage
            if (obj.p && obj.p.toUpperCase() === 'P') {
                if (
                    totalMode !== TotalMode.COUNT &&
                    totalMode !== TotalMode.DISTINCT
                ) {
                    return;
                }
            }
        }
        // force obj number
        column.obj = {
            t: 'NR',
            p: '',
            k: '',
        };
        if (column.icon) {
            delete column.icon;
        }
    }

    #stickyHeaderPosition = () => {
        if (this.#tableRef) {
            if (this.#tableIntersecting) {
                if (!this.#theadIntersecting) {
                    this.#updateStickyHeaderSize();
                    this.#stickyTheadRef.classList.add('activated');
                } else {
                    this.#stickyTheadRef.classList.remove('activated');
                }
            } else {
                this.#stickyTheadRef.classList.remove('activated');
            }
        }
    };

    #updateStickyHeaderSize() {
        const navBar = document.querySelector('.header') as HTMLElement;
        const topBar = document.querySelector('.topbar') as HTMLElement;
        if (navBar) {
            this.#navBarHeight = navBar.clientHeight;
        } else {
            this.#navBarHeight = 0;
        }
        if (topBar) {
            this.#navBarHeight += topBar.clientHeight;
        }
        if (this.#stickyTheadRef) {
            this.#stickyTheadRef.style.top = this.#navBarHeight + 'px';
            const widthTable = this.#tableAreaRef.offsetWidth;
            this.#stickyTheadRef.style.maxWidth = widthTable + 'px';
            const thCollection: NodeListOf<HTMLElement> =
                this.#theadRef.querySelectorAll('th');
            const thStickyCollection: NodeListOf<HTMLElement> =
                this.#stickyTheadRef.querySelectorAll('th-sticky');
            for (let i = 0; i < thCollection.length; i++) {
                const widthTH = thCollection[i].offsetWidth;
                thStickyCollection[i].style.width = widthTH + 'px';
            }
        }
    }

    #setObserver() {
        const callback: IntersectionObserverCallback = (
            entries: IntersectionObserverEntry[]
        ) => {
            entries.forEach((entry) => {
                if (entry.target.tagName === 'TR') {
                    if (entry.isIntersecting) {
                        this.#kupManager.debug.logMessage(
                            this,
                            'Last row entering the viewport, loading more elements.'
                        );
                        const delta =
                            this.#rows.length - this.currentRowsPerPage;
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
                        this.#theadIntersecting = true;
                    } else if (
                        entry.boundingClientRect.bottom > this.#navBarHeight
                    ) {
                        //If the thead is not intersecting but it still is inside the viewport, is to be considered intersected
                        this.#theadIntersecting = true;
                    } else {
                        this.#theadIntersecting = false;
                    }
                }
                if (entry.target.tagName === 'TABLE') {
                    if (entry.isIntersecting) {
                        this.#tableIntersecting = true;
                    } else {
                        this.#tableIntersecting = false;
                    }
                }
                if (
                    this.tableHeight === undefined &&
                    this.tableWidth === undefined &&
                    this.headerIsPersistent
                ) {
                    this.#stickyHeaderPosition();
                }
            });
        };
        const options: IntersectionObserverInit = {
            threshold: 0,
            rootMargin: '-' + this.#navBarHeight + 'px 0px 0px 0px',
        };
        this.#intObserver = new IntersectionObserver(callback, options);
    }

    #didLoadInteractables() {
        this.#interactableTouch.push(this.#tableRef);
        const tapCb = (e: PointerEvent) => {
            if (this.#hold) {
                this.#hold = false;
                return;
            }
            switch (e.button) {
                // left click
                case 0:
                    // Note: event must be cloned
                    // otherwise inside setTimeout will be exiting the Shadow DOM scope(causing loss of information, including target).
                    const clone: GenericObject = {};
                    for (const key in e) {
                        clone[key] = e[key];
                    }

                    // in case an icon is clicked
                    if (
                        (e.target as HTMLElement).classList.contains(
                            'f-image__icon'
                        )
                    ) {
                        const details = this.#getEventDetails(
                            this.#kupManager.getEventPath(
                                e.target,
                                this.rootElement
                            ),
                            e
                        );

                        // in case a cell action icon is clicked
                        if (
                            details?.cell?.obj?.t !== 'J4' &&
                            details?.cell?.obj?.p !== 'ICO'
                        ) {
                            break;
                        }
                    }

                    this.#clickTimeout.push(
                        setTimeout(() => {
                            this.kupDataTableClick.emit({
                                comp: this,
                                id: this.rootElement.id,
                                details: this.#clickHandler(
                                    clone as PointerEvent
                                ),
                            });
                        }, 300)
                    );
                    break;
                // right click
                case 2:
                    this.kupDataTableContextMenu.emit({
                        comp: this,
                        id: this.rootElement.id,
                        details: this.#contextMenuHandler(e),
                    });
                    break;
            }
        };
        const doubletapCb = (e: PointerEvent) => {
            switch (e.button) {
                // left click
                case 0:
                    for (
                        let index = 0;
                        index < this.#clickTimeout.length;
                        index++
                    ) {
                        clearTimeout(this.#clickTimeout[index]);
                        this.#kupManager.debug.logMessage(
                            this,
                            'Cleared clickHandler timeout(' +
                                this.#clickTimeout[index] +
                                ').'
                        );
                    }
                    this.#clickTimeout = [];
                    this.kupDataTableDblClick.emit({
                        comp: this,
                        id: this.rootElement.id,
                        details: this.#dblClickHandler(e),
                    });
                    break;
            }
        };
        const holdCb = (e: PointerEvent) => {
            if (e.pointerType === 'pen' || e.pointerType === 'touch') {
                this.#hold = true;
                this.kupDataTableContextMenu.emit({
                    comp: this,
                    id: this.rootElement.id,
                    details: this.#contextMenuHandler(e),
                });
            }
        };
        this.#kupManager.interact.on(
            this.#tableRef,
            KupPointerEventTypes.TAP,
            tapCb
        );
        this.#kupManager.interact.on(
            this.#tableRef,
            KupPointerEventTypes.DOUBLETAP,
            doubletapCb
        );
        this.#kupManager.interact.on(
            this.#tableRef,
            KupPointerEventTypes.HOLD,
            holdCb
        );
    }

    #didRenderInteractables() {
        if (this.showGroups) {
            if (!this.#interactableDrop.includes(this.#groupsDropareaRef)) {
                this.#interactableDrop.push(this.#groupsDropareaRef);
                this.#kupManager.interact.dropzone(
                    this.#groupsDropareaRef,
                    {
                        accept: `[${kupDraggableColumnAttr}]`,
                    },
                    null,
                    {
                        drop: (e: DropEvent) => {
                            const draggedTh = e.relatedTarget as HTMLElement;
                            const grouped = getColumnByName(
                                this.getColumns(),
                                draggedTh.dataset.column
                            );
                            this.#handleColumnGroup(grouped);
                            this.#tableRef.removeAttribute(kupDragActiveAttr);
                        },
                    }
                );
            }
        }
        if (this.removableColumns) {
            if (!this.#interactableDrop.includes(this.#removeDropareaRef)) {
                this.#interactableDrop.push(this.#removeDropareaRef);
                this.#kupManager.interact.dropzone(
                    this.#removeDropareaRef,
                    {
                        accept: `[${kupDraggableColumnAttr}]`,
                    },
                    null,
                    {
                        drop: (e: DropEvent) => {
                            const draggedTh = e.relatedTarget as HTMLElement;
                            const deleted = getColumnByName(
                                this.getColumns(),
                                draggedTh.dataset.column
                            );
                            this.hideColumn(deleted);
                            this.#tableRef.removeAttribute(kupDragActiveAttr);
                        },
                    }
                );
            }
        }
        if (
            this.enableSortableColumns ||
            this.enableMergeColumns ||
            this.enableColumnsFormula
        ) {
            const dataCb: KupDragDataTransferCallback = (e) => {
                const draggable = e.target as KupDraggableElement;
                return {
                    cell: null,
                    column: getColumnByName(
                        this.getVisibleColumns(),
                        draggable.dataset.column
                    ),
                    id: this.rootElement.id,
                    multiple: !!(
                        this.selection === SelectionMode.MULTIPLE ||
                        this.selection === SelectionMode.MULTIPLE_CHECKBOX
                    ),
                    row: null,
                    selectedRows: this.selectedRows,
                };
            };
            const dropCb = (e: DropEvent) => {
                const onlyMerge = !!(
                    !this.enableSortableColumns &&
                    !this.enableColumnsFormula &&
                    this.enableMergeColumns
                );
                const onlySort = !!(
                    this.enableSortableColumns &&
                    !this.enableColumnsFormula &&
                    !this.enableMergeColumns
                );
                const draggable = e.relatedTarget as KupDraggableElement;
                const isSameComponent = !!(
                    this.rootElement.id === draggable.kupDragDrop.id
                );
                const starter = draggable.kupDragDrop.column;
                const receiving = getColumnByName(
                    this.getColumns(),
                    e.target.dataset.column
                );
                this.#columnDropCardAnchor = e.target as HTMLElement;
                if (isSameComponent && receiving && starter) {
                    if (onlySort) {
                        this.#handleColumnSort(receiving, starter);
                    } else if (onlyMerge) {
                        this.newColumn(KupDataNewColumnTypes.CONCATENATE, {
                            columns: [receiving.name, starter.name],
                        });
                    } else {
                        this.#createDropCard(starter, receiving);
                    }
                }
                this.#tableRef.removeAttribute(kupDragActiveAttr);
            };
            const startCb = (e: InteractEvent) => {
                const draggable = e.target as KupDraggableElement;
                this.#hideShowColumnDropArea(true, draggable);
            };
            const endCb = () => {
                this.#hideShowColumnDropArea(false);
            };
            const dropCallbacks: KupDropCallbacks = {
                drop: dropCb,
            };
            const dragCallbacks: KupDragCallbacks = {
                start: startCb,
                end: endCb,
            };
            for (let index = 0; index < this.#thRefs.length; index++) {
                const th = this.#thRefs[index];
                if (th && !this.#interactableDrag.includes(th)) {
                    this.#interactableDrag.push(th);
                    this.#kupManager.interact.dropzone(
                        th,
                        {
                            accept: `[${kupDraggableColumnAttr}]`,
                        },
                        null,
                        dropCallbacks
                    );
                    this.#kupManager.interact.draggable(
                        th,
                        {
                            cursorChecker() {
                                return null;
                            },
                            ignoreFrom: '.header-cell__drag-handler',
                        },
                        {
                            callback: dataCb,
                        },
                        KupDragEffect.CLONE,
                        dragCallbacks
                    );
                }
            }
        }
        if (this.resizableColumns) {
            const moveCb = (e: ResizeEvent) => {
                const column = getColumnByName(
                    this.getVisibleColumns(),
                    (e.target as HTMLElement).dataset.column
                );
                column.size = e.rect.width + 'px';
                this.refresh();
            };
            const callbacks: KupResizeCallbacks = {
                move: moveCb,
            };
            for (let index = 0; index < this.#thRefs.length; index++) {
                const th = this.#thRefs[index];
                if (th && !this.#interactableResize.includes(th)) {
                    this.#interactableResize.push(th);
                    this.#kupManager.interact.resizable(
                        th,
                        {
                            allowFrom: '.header-cell__drag-handler',
                            edges: {
                                left: false,
                                right: true,
                                bottom: false,
                                top: false,
                            },
                            ignoreFrom: '.header-cell__content',
                        },
                        callbacks
                    );
                }
            }
        }
        if (this.dragEnabled) {
            for (let index = 0; index < this.#rowsRefs.length; index++) {
                const row = this.#rowsRefs[index];
                const dataCb: KupDragDataTransferCallback = () => {
                    const cell = this.#lastPointerDetails?.cell;
                    const column = this.#lastPointerDetails?.column;
                    const row = this.#lastPointerDetails?.row;
                    if (!cell) {
                        this.#kupManager.debug.logMessage(
                            this,
                            "Couldn't find cell to retrieve drag informations!",
                            KupDebugCategory.WARNING
                        );
                        return {
                            id: this.rootElement.id,
                        };
                    }
                    return {
                        cell,
                        column,
                        id: this.rootElement.id,
                        multiple: !!(
                            this.selection === SelectionMode.MULTIPLE ||
                            this.selection === SelectionMode.MULTIPLE_CHECKBOX
                        ),
                        row,
                        selectedRows: this.selectedRows,
                    };
                };
                if (row && !this.#interactableDrag.includes(row)) {
                    this.#interactableDrag.push(row);
                    this.#kupManager.interact.draggable(
                        row,
                        {
                            allowFrom: 'td',
                            cursorChecker() {
                                return null;
                            },
                        },
                        {
                            callback: dataCb,
                        },
                        KupDragEffect.BADGE
                    );
                }
            }
        }
        if (this.dropEnabled) {
            const dataCb: KupDropDataTransferCallback = () => {
                const cell = this.#lastPointerDetails?.cell;
                const column = this.#lastPointerDetails?.column;
                const row = this.#lastPointerDetails?.row;
                if (!cell) {
                    this.#kupManager.debug.logMessage(
                        this,
                        "Couldn't find cell to retrieve dropzone informations!",
                        KupDebugCategory.WARNING
                    );
                    return {
                        id: this.rootElement.id,
                    };
                }
                return {
                    cell,
                    column,
                    id: this.rootElement.id,
                    row,
                };
            };
            for (let index = 0; index < this.#rowsRefs.length; index++) {
                const row = this.#rowsRefs[index];
                if (row && !this.#interactableDrop.includes(row)) {
                    this.#interactableDrop.push(row);
                    this.#kupManager.interact.dropzone(
                        row,
                        {
                            accept: `[${kupDraggableCellAttr}]`,
                        },
                        {
                            callback: dataCb,
                            dispatcher: this.rootElement,
                            type: KupDropEventTypes.DATATABLE,
                        }
                    );
                }
            }
        }
    }

    #didLoadObservers() {
        if (
            this.headerIsPersistent &&
            this.tableHeight === undefined &&
            this.tableWidth === undefined
        ) {
            this.#intObserver.observe(this.#tableRef);
            this.#intObserver.observe(this.#theadRef);
        }
    }

    #didRenderObservers() {
        if (this.#paginatedRowsLength < this.#rowsLength && this.lazyLoadRows) {
            this.#intObserver.observe(
                this.#rowsRefs[this.#paginatedRowsLength - 1]
            );
        }
    }

    #didLoadEventHandling() {
        this.#tableAreaRef.addEventListener('scroll', () =>
            this.#scrollStickyHeader()
        );
    }

    #scrollStickyHeader() {
        if (!this.#stickyTheadRef) {
            return;
        }
        this.#stickyTheadRef.scrollLeft = this.#tableAreaRef.scrollLeft;
    }

    #checkScrollOnHover() {
        if (!this.#kupManager.scrollOnHover.isRegistered(this.#tableAreaRef)) {
            if (this.scrollOnHover) {
                this.#kupManager.scrollOnHover.register(this.#tableAreaRef);
            }
        } else {
            if (!this.scrollOnHover) {
                this.#kupManager.scrollOnHover.unregister(this.#tableAreaRef);
            }
        }
    }

    #customizePanelPosition() {
        if (
            this.#customizeTopButtonRef &&
            !this.#kupManager.dynamicPosition.isRegistered(
                this.#customizeTopPanelRef
            )
        ) {
            this.#kupManager.dynamicPosition.register(
                this.#customizeTopPanelRef,
                this.#customizeTopButtonRef,
                0,
                KupDynamicPositionPlacement.BOTTOM,
                true
            );
        }
    }

    #rowsPointLength(): number {
        return this.#_rowsLength(this.#rows);
    }

    #paginatedRowsPointLength(): number {
        return this.#_rowsLength(this.#paginatedRows);
    }

    #_rowsLength(r: Array<KupDataTableRow>): number {
        if (r == null) {
            return 0;
        }
        let count = 0;
        for (let i: number = 0; i < r.length; i++) {
            const row = r[i];
            if (row == null) {
                continue;
            }
            count += 1;
            if (row.group != null) {
                count += this.#_rowsLength(row.group.children);
            }
        }
        return count;
    }

    //---- Lifecycle hooks ----

    connectedCallback() {
        this.#readyPromise = new Promise((resolve) => {
            this.#readyResolve = resolve;
        });
    }

    componentWillLoad() {
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.language.register(this);
        this.#kupManager.theme.register(this);
        this.#kupManager.toolbar.register(this.rootElement);
        if (!this.emptyDataLabel) {
            this.emptyDataLabel = this.#kupManager.language.translate(
                KupLanguageGeneric.EMPTY_DATA
            );
        }
        this.#columnMenuInstance = new KupColumnMenu();
        this.#filtersColumnMenuInstance = new FiltersColumnMenu();
        this.#filtersRowsInstance = new FiltersRows();

        this.#isRestoringState = true;
        // *** Store
        this.initWithPersistedState();
        // ***
        if (this.pageSelected > 0) {
            this.currentPage = this.pageSelected;
        }
        this.computeMaxRowsPerPage();
        this.currentRowsPerPage = this.rowsPerPage;
        this.#isRestoringState = false;

        //this.identifyAndInitRows();
        identify(this.getRows());
        this.expandGroupsHandler();

        if (document.querySelector('.header')) {
            this.#navBarHeight = document.querySelector('.header').clientHeight;
        } else {
            this.#navBarHeight = 0;
        }
        if (document.querySelector('.topbar')) {
            this.#navBarHeight +=
                document.querySelector('.topbar').clientHeight;
        }
        this.#setObserver();

        //this.recalculateRows();

        // Detects is the browser is Safari. If needed, this function can be moved into an external file and then imported into components
        this.#isSafariBrowser =
            CSS.supports('position', '-webkit-sticky') ||
            !!(window && (window as Window & { safari?: object }).safari);

        this.#calculateData();
        this.#initialized = true;

        this.decorateAndInitForUpdTable();
    }

    componentWillRender() {
        this.#kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.#kupManager.perfMonitoring.mark('componentDidRender');
        // If the component is not connected this method must not be executed
        if (!this.rootElement.isConnected) {
            return;
        }
        const root: ShadowRoot = this.rootElement.shadowRoot;
        if (root) {
            const fs: NodeListOf<HTMLElement> =
                root.querySelectorAll('.f-text-field');
            for (let index = 0; index < fs.length; index++) {
                FTextFieldMDC(fs[index]);
            }
        }
        requestAnimationFrame(async () => {
            if (root && this.#readyResolve) {
                this.#readyResolve();
                this.#readyResolve = null;
            }
        });
        if (this.showCustomization) {
            this.#customizePanelPosition();
        }
        this.#totalMenuPosition();
        this.#checkScrollOnHover();
        this.#didRenderObservers();
        this.#didRenderInteractables();
        this.#hideShowColumnDropArea(false);

        // scroll to row if current page contains selected rows
        if (this.state.rowsPerPage != this.currentRowsPerPage) {
            this.#paginatedRows.forEach((row) => {
                if (this.selectedRows.includes(row)) {
                    this.scrollToRow(row.id);
                }
            });
        }

        if (
            this.headerIsPersistent &&
            this.tableHeight === undefined &&
            this.tableWidth === undefined
        ) {
            this.#updateStickyHeaderSize();
        }

        setTimeout(() => this.#updateFixedRowsAndColumnsCssVariables(), 50);
        // *** Store
        this.persistState();
        // ***
        this.#oldWidth = this.rootElement.clientWidth;
        this.#kupManager.debug.logRender(this, true);
        this.#kupManager.perfMonitoring.measure(
            'componentDidRender',
            'kup-data-table'
        );
    }

    componentDidLoad() {
        this.#kupManager.perfMonitoring.mark('componentDidLoad');
        this.#didLoadObservers();
        this.#didLoadEventHandling();
        this.#didLoadInteractables();
        this.lazyLoadCells = true;
        this.kupDidLoad.emit({ comp: this, id: this.rootElement.id });
        this.#kupManager.resize.observe(this.rootElement);
        this.#kupManager.debug.logLoad(this, true);
        this.#kupManager.perfMonitoring.measure(
            'componentDidLoad',
            'kup-data-table'
        );
    }

    //======== Utility methods ========

    #resetSelectedRows(emit: boolean = false) {
        if (this.getRows().length === 0) return;
        this.selectedRows = [];
        if (emit) {
            this.kupResetSelectedRows.emit({
                comp: this,
                id: this.rootElement.id,
            });
        }
    }

    resetCurrentPage() {
        this.currentPage = 1;
        this.#resetSelectedRows();
    }

    getColumns(): Array<KupDataColumn> {
        return this.data && this.data.columns
            ? this.data.columns
            : [{ title: '', name: '' }];
    }

    #getSizedColumns() {
        const columns = this.getColumns();
        const sizedColumns = [];
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
    /**
     * Opens a card containing the detail of the given row.
     * @param {KupDataTableRow} row - Row for which the detail was requested.
     * @param {number} x - Initial x coordinates of the card.
     * @param {number} y - Initial y coordinates of the card.
     * @private
     * @memberof KupDataTable
     */
    #rowDetail(row: KupDataTableRow, x: number, y: number): void {
        const transposedData: KupDataDataset = this.#getTransposedData();
        const cardData: KupCardData = {
            button: [
                {
                    disabled: parseInt(row.id) === 0 ? true : false,
                    icon: 'chevron_left',
                },
                {
                    disabled:
                        parseInt(row.id) === this.getRows().length - 1
                            ? true
                            : false,
                    icon: 'chevron_right',
                },
            ],
            datatable: [
                {
                    customStyle:
                        '#kup-component .below-wrapper{overflow: visible} #kup-component td[data-column="' +
                        iconColumn.toUpperCase() +
                        `"]{background-color: rgba(var(${KupThemeColorValues.TEXT}-rgb), 0.15); width: 10px;}`,
                    data: transposedData,
                    density: 'medium',
                    editableData: true,
                    headerIsPersistent: false,
                    id: this.rootElement.id ? this.rootElement.id : '',
                    rowsPerPage: 1000,
                    showGrid: ShowGrid.NONE,
                    showHeader: false,
                },
            ],
            text: [this.#kupManager.language.translate(KupLanguageRow.DETAIL)],
        };
        const columns: KupDataColumn[] = cardData.datatable[0].data.columns;
        const rows: KupDataTableRow[] = cardData.datatable[0].data.rows;
        // Placing the key and icon columns before any other column
        columns.unshift(
            {
                name: iconColumn.toUpperCase(),
                title: iconColumn,
            },
            {
                name: keyColumn.toUpperCase(),
                title: keyColumn,
            }
        );
        // Setting all columns to not visible
        for (let index = 0; index < columns.length; index++) {
            columns[index].visible = false;
        }
        // Setting Field column and current record column to visible
        columns.find((x) => x.name === fieldColumn.toUpperCase()).visible =
            true;
        const currentColumn = columns.find((x) => x.name === row.id);
        if (currentColumn) {
            currentColumn.visible = true;
        } else {
            this.#kupManager.debug.logMessage(
                this,
                'Invalid column name on row ID (' +
                    row.id +
                    "), couldn't set current record!",
                KupDebugCategory.WARNING
            );
        }
        // Setting up icons
        let keyCell: KupDataTableCell = null;
        for (let index = 0; index < rows.length; index++) {
            const column: KupDataColumn = this.data.columns.find(
                (x) => x.name === rows[index].transposedColumnName
            );
            if (!column) {
                this.#kupManager.debug.logMessage(
                    this,
                    'Column not found on row name (' + column + ')!',
                    KupDebugCategory.WARNING
                );
                return;
            }
            const editable: boolean = rows[index].cells[row.id].isEditable
                ? true
                : false;
            let iconCell: KupDataTableCell = null;
            if (column.isKey || editable) {
                columns.find(
                    (x) => x.name === iconColumn.toUpperCase()
                ).visible = true;
            }
            if (column.isKey) {
                // Key should always be the first row
                keyCell = row.cells[column.name];
                iconCell = {
                    obj: {
                        t: 'J4',
                        p: 'ICO',
                        k: 'OG_OG_KF',
                    },
                    data: {
                        color: `var(${KupThemeColorValues.TEXT})`,
                        resource: editable ? 'edit-key' : 'key-variant',
                    },
                    title: editable
                        ? this.#kupManager.language.translate(
                              KupLanguageRow.EDITABLE_KEY
                          )
                        : this.#kupManager.language.translate(
                              KupLanguageRow.KEY
                          ),
                    value: editable ? 'edit-key' : 'key-variant',
                };
            } else if (editable) {
                iconCell = {
                    obj: {
                        t: 'VO',
                        p: 'COD_VER',
                        k: '000051',
                    },
                    data: {
                        color: `var(${KupThemeColorValues.TEXT})`,
                        resource: 'pencil',
                    },
                    title: this.#kupManager.language.translate(
                        KupLanguageGeneric.EDITABLE_FIELD
                    ),
                    value: 'pencil',
                };
            } else {
                iconCell = {
                    obj: {
                        t: '',
                        p: '',
                        k: '',
                    },
                    value: '',
                };
            }
            if (keyCell) {
                rows[index].cells[keyColumn.toUpperCase()] = keyCell;
            } else {
                rows[index].cells[keyColumn.toUpperCase()] = { value: null };
            }
            rows[index].cells[iconColumn.toUpperCase()] = iconCell;
        }
        if (!this.#detailCard) {
            this.#detailCard = document.createElement('kup-card');
            this.#detailCard.layoutFamily = KupCardFamily.DIALOG;
            this.#detailCard.layoutNumber = 4;
            this.#detailCard.sizeX = 'auto';
            this.#detailCard.sizeY = 'auto';
        } else {
            const children: HTMLCollection = Array.prototype.slice.call(
                this.#detailCard.children,
                0
            );
            for (let index = 0; index < children.length; index++) {
                children[index].remove();
            }
        }
        this.#detailCard.data = cardData;
        this.#detailCard.style.position = 'fixed';
        this.#detailCard.style.left = '0';
        this.#detailCard.style.top = '0';
        this.#detailCard.setAttribute('data-x', x.toString());
        this.#detailCard.setAttribute('data-y', y.toString());
        this.#detailCard.style.transform = 'translate(' + x + 'px,' + y + 'px)';
        this.rootElement.shadowRoot.append(this.#detailCard);
    }
    /**
     * Opens a card containing the actions of the given row.
     * @param {KupDataRowAction[]} dropDownActions - Actions for the row.
     * @private
     * @memberof KupDataTable
     */
    #dropDownActions(
        dropDownActions: KupDataRowAction[],
        row: KupDataTableRow
    ) {
        this.#createDropDownActionsCard(dropDownActions, row);
    }

    #createDropDownActionsCard(
        dropDownActions: KupDataRowAction[],
        row: KupDataTableRow
    ) {
        if (this.#actionsCard) {
            this.#closeRowActionsCard();
        }
        this.#actionsCard = document.createElement('kup-card');
        this.#actionsCard.layoutFamily = KupCardFamily.STANDARD;
        this.#actionsCard.layoutNumber = 17;
        this.#actionsCard.menuVisible = true;
        this.#actionsCard.sizeX = 'auto';
        this.#actionsCard.sizeY = 'auto';
        this.#actionsCard.data =
            this.#prepareDataForActionsCard(dropDownActions);
        this.#clickCbDropCard = {
            cb: () => {
                this.#closeRowActionsCard();
            },
            el: this.#actionsCard,
        };
        this.#kupManager.addClickCallback(this.#clickCbDropCard, true);
        this.#actionsCard.style.position = 'absolute';
        this.#actionsCard.style.left = '0';
        this.#actionsCard.style.top = '0';
        this.#actionsCard.isMenu = true;
        this.rootElement.shadowRoot.append(this.#actionsCard);
        this.#kupManager.dynamicPosition.register(
            this.#actionsCard,
            this.#dropDownActionCardAnchor
                .parentElement as KupDynamicPositionAnchor,
            0,
            KupDynamicPositionPlacement.AUTO,
            true
        );
        this.#kupManager.dynamicPosition.start(
            this.#actionsCard as unknown as KupDynamicPositionElement
        );
        this.#actionsCard.addEventListener(
            'kup-card-event',
            (e: CustomEvent<KupCardEventPayload>) => {
                switch (e.detail.event.type) {
                    case 'kup-textfield-input':
                        const input = e.detail.event.detail.value;

                        this.#filterRowActionsCard(
                            this.#actionsCard,
                            dropDownActions,
                            input
                        );
                        break;
                    case 'kup-textfield-cleariconclick':
                        this.#clearSearchActionsCard(
                            this.#actionsCard,
                            dropDownActions
                        );
                        break;
                    case 'kup-list-click':
                        const selectedObjectIndex = e.detail.event.detail.index;
                        const selectedObject =
                            dropDownActions[selectedObjectIndex];

                        const dispatchSelection = () => {
                            this.kupRowActionItemClick.emit({
                                comp: this,
                                id: this.rootElement.id,
                                row: row,
                                obj: selectedObject.obj,
                                cell: selectedObject.cell,
                                type: selectedObject.type,
                                index: selectedObject.index,
                                column: selectedObject.column,
                            });
                            setTimeout(() => {
                                this.#closeRowActionsCard();
                            }, 0);
                        };

                        const rowId = row.id;
                        if (rowId) {
                            this.setSelectedRows([row.id], true).then(() => {
                                // event should be dispatched
                                dispatchSelection();
                            });
                        } else {
                            // fallback in case the row has no id (should never happen)
                            dispatchSelection();
                        }
                }
            }
        );
    }

    #clearSearchActionsCard(
        card: HTMLKupCardElement,
        dropDownActions: KupDataRowAction[]
    ) {
        const rowActionsList: Pick<KupList, 'showIcons' | 'data'> = {
            showIcons: true,
            data: dropDownActions.map((r) => ({
                value: r.text,
                ...r,
            })),
        };
        card.data.list[0].data = rowActionsList.data;
        card.refresh();
    }

    #filterRowActionsCard(
        card: HTMLKupCardElement,
        dropDownActions: KupDataRowAction[],
        input: string
    ) {
        const rowActionsList: Pick<KupList, 'showIcons' | 'data'> = {
            showIcons: true,
            data: dropDownActions.map((r) => ({
                value: r.text,
                ...r,
            })),
        };
        const filteredList: KupListNode[] = rowActionsList.data.filter(
            (action: KupListNode) =>
                action.value.toLowerCase().includes(input.toLowerCase())
        );
        card.data.list[0].data = filteredList;
        card.refresh();
    }

    #closeRowActionsCard() {
        this.#kupManager.dynamicPosition.stop(
            this.#actionsCard as KupDynamicPositionElement
        );
        this.#kupManager.removeClickCallback(this.#clickCbDropCard);
        this.#actionsCard.remove();
        this.#actionsCard = null;
    }

    #closeColumnMenuCard() {
        this.#kupManager.dynamicPosition.stop(
            this.#columnMenuCard as KupDynamicPositionElement
        );
        this.#kupManager.dynamicPosition.unregister([this.#columnMenuCard]);
        this.#kupManager.removeClickCallback(this.#clickCbDropCard);
        this.#columnMenuInstance.close(this.#columnMenuCard);
        this.#columnMenuCard.remove();
        this.#columnMenuCard = null;
    }

    #prepareDataForActionsCard(
        dropDownActions: KupDataRowAction[]
    ): KupCardData {
        const hasAlmostTenElements = dropDownActions.length >= 10;

        const textfield = hasAlmostTenElements
            ? [
                  {
                      fullWidth: true,
                      icon: 'magnify',
                      isClearable: true,
                      label: 'Search...',
                      key: KupColumnMenuIds.TEXTFIELD_FILTER,
                      id: KupColumnMenuIds.TEXTFIELD_FILTER,
                  },
              ]
            : [];

        const data: KupCardData = {
            list: [
                {
                    showIcons: true,
                    data: dropDownActions.map((r) => ({
                        value: r.text,
                        ...r,
                    })),
                },
            ],
            textfield,
        };

        return data;
    }
    #rowInsertForm() {
        const CARD_WIDTH = 400;
        const CARD_HEIGHT = 400;
        this.#insertCard = document.createElement('kup-card');
        this.#insertCard.layoutFamily = KupCardFamily.FREE;
        this.#insertCard.layoutNumber = 1;
        this.#insertCard.sizeX = CARD_WIDTH + 'px';
        this.#insertCard.sizeY = CARD_HEIGHT + 'px';

        const style = document.createElement('style');
        style.innerText =
            'kup-form { max-height: 40vh; overflow: auto; } .page-wrapper { display: grid; } ' +
            '.button-wrapper { padding-top: 20px; display: flex; justify-content: space-around; z-index: var(--kup-card-zindex); } ' +
            '.message-wrapper { display: none; justify-content: start; padding-top: 5px; padding-bottom: 5px; } ' +
            '.errorIcon { --kup-icon-color: var(--kup-danger-color-60); } ' +
            '.message { background-color: var(--kup-danger-color-60); color: white; padding: 3px; } ';
        this.#insertCard.append(style);

        const pageWrapper = document.createElement('div');
        pageWrapper.className = 'page-wrapper';

        const buttonWrapper = document.createElement('div');
        buttonWrapper.className = 'button-wrapper';
        const cancel = document.createElement('kup-button');
        const confirm = document.createElement('kup-button');
        cancel.id = this.#BUTTON_CANCEL_ID;
        cancel.icon = 'clear';
        cancel.label = this.#kupManager.language.translate(
            KupLanguageGeneric.ABORT
        );
        cancel.styling = FButtonStyling.FLAT;
        cancel.addEventListener('kup-button-click', () => {
            this.#insertCard.remove();
            this.#insertCard = null;
        });
        confirm.id = this.#BUTTON_SUBMIT_ID;
        confirm.icon = 'check';
        confirm.label = this.#kupManager.language.translate(
            KupLanguageGeneric.CONFIRM
        );
        let innerComp = document.createElement('kup-spinner');
        innerComp.slot = 'spinner';
        innerComp.dimensions = '0.6em';
        innerComp.active = true;
        confirm.appendChild(innerComp);
        confirm.addEventListener('kup-button-click', () => {
            messageWrapper.style.display = 'none';
            confirm.showSpinner = true;
            cancel.disabled = true;
            this.kupInsertRow.emit({
                comp: this,
                id: this.rootElement.id,
                selectedRows: [row],
            });
        });
        buttonWrapper.append(cancel);
        buttonWrapper.append(confirm);

        const form = document.createElement('kup-form');
        form.id = this.#FIELDS_FORM_ID;
        const row: KupFormRow = {
            cells: {},
            id: '0',
        };
        this.data.columns.forEach((column) => {
            if (column.isEditable || column.isKey) {
                row.cells[column.name] = {
                    isEditable: column.isEditable,
                    shape: column.shape,
                    value: '',
                };
            }
        });
        form.data = {
            columns: this.data.columns,
            rows: [row],
        };

        const messageWrapper = document.createElement('div');
        messageWrapper.className = 'message-wrapper';
        messageWrapper.id = this.#MESSAGE_WRAPPER_ID;
        const icon = document.createElement('kup-image');
        icon.className = 'errorIcon';
        icon.resource = 'cancel';
        icon.sizeX = '20px';
        icon.sizeY = '20px';
        messageWrapper.append(icon);

        const message = document.createElement('span');
        message.className = 'message';
        message.id = this.#MESSAGE_ID;
        let msg = '';
        message.innerText = msg;
        messageWrapper.append(message);

        pageWrapper.append(messageWrapper);
        pageWrapper.append(form);
        pageWrapper.append(buttonWrapper);

        this.#insertCard.append(pageWrapper);
        this.#insertCard.data = {};
        this.rootElement.shadowRoot.append(this.#insertCard);
    }

    #rowsDelete() {
        const createDeleteCard = () => {
            this.#confirmDeleteDialog = document.createElement('kup-dialog');
            this.#confirmDeleteCard = document.createElement('kup-card');
            this.#confirmDeleteCard.layoutFamily = KupCardFamily.FREE;
            this.#confirmDeleteCard.layoutNumber = 1;
            this.#confirmDeleteCard.sizeX = 'auto';
            this.#confirmDeleteCard.sizeY = 'auto';
            const style = document.createElement('style');
            style.innerText =
                '.button-wrapper, .message-wrapper { display: flex; justify-content: space-around; z-index: var(--kup-card-zindex); } .message-wrapper { padding-bottom: 20px; }';
            const messageWrapper = document.createElement('div');
            messageWrapper.className = 'message-wrapper';
            messageWrapper.id = this.#MESSAGE_WRAPPER_ID;
            const message = document.createElement('span');
            message.className = 'message';
            message.id = this.#MESSAGE_ID;
            let msg = this.#kupManager.language.translate(
                KupLanguageGeneric.CONFIRM_DELETE_X_ROWS
            );
            msg = msg.replace('{0}', this.selectedRows.length + '');
            message.innerText = msg;
            messageWrapper.append(message);
            const buttonWrapper = document.createElement('div');
            buttonWrapper.className = 'button-wrapper';
            const confirm = document.createElement('kup-button');
            confirm.id = this.#BUTTON_SUBMIT_ID;
            confirm.icon = 'check';
            confirm.label = this.#kupManager.language.translate(
                KupLanguageGeneric.CONFIRM
            );
            let innerComp = document.createElement('kup-spinner');
            innerComp.slot = 'spinner';
            innerComp.dimensions = '0.6em';
            innerComp.active = true;
            confirm.appendChild(innerComp);
            confirm.addEventListener('kup-button-click', () => {
                confirm.showSpinner = true;
                this.kupDeleteRow.emit({
                    comp: this,
                    id: this.rootElement.id,
                    selectedRows: this.selectedRows,
                });
            });
            buttonWrapper.append(confirm);
            this.#confirmDeleteCard.append(style);
            this.#confirmDeleteCard.append(messageWrapper);
            this.#confirmDeleteCard.append(buttonWrapper);
            this.#confirmDeleteCard.data = {};
            this.#confirmDeleteDialog.append(this.#confirmDeleteCard);
            document.querySelector('body').append(this.#confirmDeleteDialog);
        };

        const insertRowsIds: string[] = [];
        const startingRows: KupDataTableRow[] = [];
        this.selectedRows.forEach((row) => {
            if (row.id.indexOf(this.#INSERT_PREFIX) > -1) {
                insertRowsIds.push(row.id);
            } else {
                startingRows.push(row);
            }
        });
        this.deleteRows(insertRowsIds).then(() => {
            if (startingRows.length > 0) {
                this.selectedRows = startingRows;
                createDeleteCard();
            }
        });
    }

    #getEventDetails(
        path: HTMLElement[],
        e?: PointerEvent
    ): KupDatatableEventHandlerDetails {
        let isHeader: boolean,
            isBody: boolean,
            isFooter: boolean,
            td: HTMLElement,
            textfield: HTMLElement,
            th: HTMLElement,
            tr: HTMLElement,
            filterRemove: HTMLSpanElement;
        if (path) {
            for (let i = path.length - 1; i >= 0; i--) {
                let p = path[i];
                if (!p.tagName) {
                    continue;
                }
                switch (p.tagName.toUpperCase()) {
                    case 'THEAD': {
                        isHeader = true;
                        break;
                    }
                    case 'TBODY': {
                        isBody = true;
                        break;
                    }
                    case 'TFOOT': {
                        isFooter = true;
                        break;
                    }
                    case 'TD': {
                        td = p;
                        break;
                    }
                    case 'TH': {
                        th = p;
                        break;
                    }
                    case 'TR': {
                        tr = p;
                        break;
                    }
                    default: {
                        if (p.classList.contains('f-text-field')) {
                            textfield = p;
                        } else if (
                            p.classList.contains(
                                KupThemeIconValues.FILTER_REMOVE.replace(
                                    '--',
                                    ''
                                )
                            )
                        ) {
                            filterRemove = p;
                        }
                        break;
                    }
                }
            }
        }

        let cell: KupDataTableCell = null,
            column: KupDataColumn = null,
            isGroupRow: boolean = false,
            row: KupDataTableRow = null;
        if (isBody) {
            if (tr) {
                if (tr.classList.contains('group')) {
                    isGroupRow = true;
                }
                row = tr['data-row'];
            }
        }
        if (isHeader || isBody) {
            if (td) {
                cell = td['data-cell'];
            }
            if (th) {
                cell = th['data-cell'];
            }
        }
        if (isHeader || isBody || isFooter) {
            const columnName = td
                ? td.dataset.column
                : th
                ? th.dataset.column
                : null;
            if (columnName) {
                column = getColumnByName(this.getColumns(), columnName);
            }
        }

        return {
            area: isHeader
                ? 'header'
                : isBody
                ? 'body'
                : isFooter
                ? 'footer'
                : null,
            cell: cell ? cell : null,
            column: column ? column : null,
            filterRemove: filterRemove ? filterRemove : null,
            isGroupRow: isGroupRow,
            originalEvent: e,
            row: row ? row : null,
            td: td ? td : null,
            textfield: textfield ? textfield : null,
            th: th ? th : null,
            tr: tr ? tr : null,
        };
    }

    #getEventDetailsForCurrentSelection(): KupDatatableEventHandlerDetails {
        let isHeader: boolean,
            isBody: boolean,
            isFooter: boolean,
            td: HTMLElement,
            textfield: HTMLElement,
            th: HTMLElement,
            tr: HTMLElement,
            filterRemove: HTMLSpanElement;

        isBody =
            !!this.#lastFocusedRow &&
            !!this.#lastFocusedCell &&
            !!this.#lastFocusedColumn;
        isHeader =
            !this.#lastFocusedRow &&
            !!this.#lastFocusedCell &&
            !!this.#lastFocusedColumn;
        isFooter =
            !this.#lastFocusedRow &&
            !this.#lastFocusedCell &&
            !!this.#lastFocusedColumn;

        let cell: KupDataTableCell = null,
            column: KupDataColumn = null,
            isGroupRow: boolean = false,
            row: KupDataTableRow = null;
        if (isBody) {
            row = this.#lastFocusedRow;
        }
        if (isHeader || isBody) {
            cell = this.#lastFocusedCell;
        }
        if (isHeader || isBody || isFooter) {
            const columnName = this.#lastFocusedColumn.name;
            if (columnName) {
                column = getColumnByName(this.getColumns(), columnName);
            }
        }

        return {
            area: isHeader
                ? 'header'
                : isBody
                ? 'body'
                : isFooter
                ? 'footer'
                : null,
            cell: cell ? cell : null,
            column: column ? column : null,
            filterRemove: filterRemove ? filterRemove : null,
            isGroupRow: isGroupRow,
            originalEvent: undefined,
            row: row ? row : null,
            td: td ? td : null,
            textfield: textfield ? textfield : null,
            th: th ? th : null,
            tr: tr ? tr : null,
        };
    }

    #getSourceElementCoordsForCurrentSelection(
        details: KupDatatableEventHandlerDetails
    ): KupDynamicPositionCoordinates {
        let x = 0,
            y = 0;

        if (details.area == 'footer') {
            const elCoords = this.#tableRef
                .querySelector(
                    `tfoot tr td[data-column='${details.column.name}']`
                )
                ?.getBoundingClientRect() ?? {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            };
            x = elCoords.x + elCoords.width / 2;
            y = elCoords.y + elCoords.height / 2;
        } else {
            const elCoords = details.cell?.element?.getBoundingClientRect() ?? {
                x: 0,
                y: 0,
            };
            x = elCoords.x;
            y = elCoords.y;
        }
        return { x, y };
    }

    #clickHandler(e: PointerEvent): KupDatatableEventHandlerDetails {
        const details: KupDatatableEventHandlerDetails = this.#getEventDetails(
            this.#kupManager.getEventPath(e.target, this.rootElement),
            e
        );

        const { cell, column } = details;
        this.#lastFocusedCell = cell;
        this.#lastFocusedColumn = column;
        this.#lastFocusedRow = undefined;

        if (details.area === 'header') {
            if (details.th && details.column) {
                if (details.filterRemove) {
                    this.#onRemoveFilter(details.column);
                    return details;
                } else if (this.sortEnabled) {
                    this.#onColumnSort(e, details.column.name);
                    return details;
                }
            }
        } else if (details.area === 'body') {
            this.#lastFocusedRow = details.row;
            if (
                (this.isFocusable || e.ctrlKey || e.metaKey) &&
                details.tr &&
                !details.isGroupRow
            ) {
                const focusEl: HTMLElement =
                    this.rootElement.shadowRoot.querySelector('tr.focus');
                if (focusEl) {
                    focusEl.classList.remove('focus');
                }
                details.tr.classList.add('focus');
                if (e.ctrlKey || e.metaKey) {
                    this.#rowDetail({ ...details.row }, e.clientX, e.clientY);
                    return details;
                }
            }
            if (details.tr && details.row && details.isGroupRow) {
                this.#onRowExpand(details.row);
                return details;
            }
            if (details.td && details.row && !details.textfield) {
                this.#onRowClick(details.row, details.td, true);
                return details;
            }
        }
        return details;
    }

    #cellActionsMenuHandler(e: PointerEvent): KupDatatableEventHandlerDetails {
        e.stopPropagation();
        const details: KupDatatableEventHandlerDetails = this.#getEventDetails(
            this.#kupManager.getEventPath(e.target, this.rootElement),
            e
        );
        if (details.cell) {
            const cellActions = this.#kupManager.data.cell.buildCellActions(
                details.row,
                details.column,
                this.commands ?? []
            );
            this.#onRowActionExpanderClick(e, details.row, cellActions);
        }
        return details;
    }

    #contextMenuHandler(e: PointerEvent): KupDatatableEventHandlerDetails {
        const details: KupDatatableEventHandlerDetails = this.#getEventDetails(
            this.#kupManager.getEventPath(e.target, this.rootElement),
            e
        );
        return this.#contextMenuHandlerDetailsManager(details, {
            x: e.pageX,
            y: e.pageY,
        });
    }

    #tooltipRequestHandler(): KupDatatableEventHandlerDetails {
        const details: KupDatatableEventHandlerDetails =
            this.#getEventDetailsForCurrentSelection();
        const elCoords =
            this.#getSourceElementCoordsForCurrentSelection(details);
        return this.#contextMenuHandlerDetailsManager(details, {
            x: elCoords.x,
            y: elCoords.y,
        });
    }

    #contextMenuHandlerDetailsManager(
        details: KupDatatableEventHandlerDetails,
        eventCoords: KupDynamicPositionCoordinates
    ): KupDatatableEventHandlerDetails {
        if (details.area === DataTableAreasEnum.HEADER) {
            if (details.column) {
                const colName = details.column.name;
                this.openColumnMenu(colName, `th[data-column="${colName}"]`);
                return details;
            }
        } else if (details.area === DataTableAreasEnum.FOOTER) {
            if (details.column) {
                this.#totalMenuCoords = eventCoords;
                this.#onTotalMenuOpen(details.column);
                return details;
            }
        }
        return details;
    }

    #dblClickHandler(e: PointerEvent): KupDatatableEventHandlerDetails {
        const details: KupDatatableEventHandlerDetails = this.#getEventDetails(
            this.#kupManager.getEventPath(e.target, this.rootElement),
            e
        );
        if (details.area === 'body') {
            if (this.selection == SelectionMode.MULTIPLE) {
                this.#resetSelectedRows();
            }
            if (
                this.selection == SelectionMode.SINGLE ||
                this.selection == SelectionMode.MULTIPLE
            ) {
                this.#onRowClick(details.row, details.td, false);
            }
        }
        return details;
    }

    getVisibleColumns({ includeCodVer = false } = {}): Array<KupDataColumn> {
        if (includeCodVer) {
            return this.getColumns().filter((col) => {
                if (this.visibleColumns) {
                    return this.visibleColumns.includes(col.name);
                } else {
                    return !('visible' in col) || col.visible;
                }
            });
        }
        // Starting columns filter
        let resultVisibleColumns = this.getColumns().filter((col) => {
            const isNotCodVer = !this.#kupManager.data.column.isCodVer(col);

            if (this.visibleColumns) {
                // if visible columns is specified, include only those columns
                return isNotCodVer && this.visibleColumns.includes(col.name);
            } else {
                return isNotCodVer && (!('visible' in col) || col.visible);
            }
        });

        // order based on `visibleColumns`
        if (this.visibleColumns) {
            resultVisibleColumns = resultVisibleColumns.sort(
                (a, b) =>
                    this.visibleColumns.indexOf(a.name) -
                    this.visibleColumns.indexOf(b.name)
            );
        }
        // Check grouping e filter based on group visibility
        if (this.#isGrouping()) {
            return resultVisibleColumns.filter((column) => {
                let group = null;
                for (let currentGroup of this.groups) {
                    if (currentGroup.column === column.name) {
                        group = currentGroup;
                        break;
                    }
                }
                if (group) {
                    return !group.hasOwnProperty('visible') || group.visible;
                }
                return true; // Not in a group -> visible
            });
        }
        return resultVisibleColumns;
    }

    getGroupByName(column: string): GroupObject {
        if (!this.#isGrouping()) {
            return null;
        }

        for (let group of this.groups) {
            if (group.column === column) {
                return group;
            }
        }

        return null;
    }

    getColumnValues(column: KupDataColumn): ValueDisplayedValue[] {
        return this.#filtersRowsInstance.getColumnValues(
            this,
            column,
            this.globalFilterValue,
            this.#filtersColumnMenuInstance
        );
    }

    getRows(): Array<KupDataTableRow> {
        return this.data && this.data.rows ? this.data.rows : [];
    }

    #initRows(): void {
        this.#filterRows();

        this.#footer = calcTotals(
            this.totals,
            this.getColumns(),
            normalizeRows(this.getColumns(), this.#rows)
        );

        this.#groupRows();
        this.#sortRows();
        this.#adjustPaginator();

        this.#paginatedRows = paginateRows(
            this.#rows,
            this.currentPage,
            this.currentRowsPerPage,
            this.#isGrouping()
        );
        this.#paginatedRowsLength = this.#paginatedRowsPointLength();
    }

    #filterRows(): void {
        this.#rows = filterRows(
            this.getRows(),
            this.filters,
            this.globalFilterValue,
            this.getColumns(),
            undefined,
            undefined,
            this.visibleColumns
        );
        this.#rowsLength = this.#rowsPointLength();
    }

    #isGrouping() {
        return this.groups && this.groups.length > 0;
    }

    #hasRowActions() {
        return this.rowActions?.length > 0;
    }

    #removeGroup(index: number) {
        if (index >= 0) {
            // removing group from prop
            this.groups.splice(index, 1);
            this.groups = [...this.groups];
        }
    }

    #hasTotals() {
        return this.totals && Object.keys(this.totals).length > 0;
    }

    #copyCellValueInColumnHandler(e: KeyboardEvent, el: HTMLInputElement) {
        const details = this.#getEventDetails(
            this.#kupManager.getEventPath(el, this.rootElement)
        );

        const { cell, column, row } = details;
        const cellType = dom.ketchup.data.cell.getType(cell, cell.shape);

        if (!TypesToDuplicate.includes(cellType)) {
            return;
        }

        e.preventDefault();
        e.stopPropagation();
        el.blur();

        const filteredRowIds = this.#rows.map((row) => row.id);
        this.data.rows = this.data.rows.map((currRow) => {
            if (filteredRowIds.includes(currRow.id) && currRow.id !== row.id) {
                currRow.cells[column.name].value = cell.value;
                currRow.cells[column.name].obj = cell.obj;
                currRow.cells[column.name].decode = cell.decode;
                currRow.cells[column.name].data = cell.data;
            }
            return currRow;
        });
        this.refresh();
    }

    /**
     * Returns if the current data table must have the with set to auto to make table as large as the sum
     * of the table columns fixed width.
     * Table margin gets set to auto to center it.
     */
    #tableHasAutoWidth(): boolean {
        if (!this.#sizedColumns) {
            return;
        }
        const visibleCols = this.getVisibleColumns();
        // Before checking each column, controls that visible columns are as many as items with custom sizes.
        // If there are more visible columns, it means that the width of the table will be set to auto.
        if (visibleCols.length <= this.#sizedColumns.length) {
            let found = false;

            // Each visible column must have its own width for the table to have a auto width
            for (let i = 0; i < visibleCols.length; i++) {
                found = false;
                for (let j = 0; j < this.#sizedColumns.length; j++) {
                    if (visibleCols[i].name === this.#sizedColumns[j].name) {
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

    #forceGroupExpansion() {
        this.#rows.forEach((row) => this.#forceRowGroupExpansion(row));
        this.#paginatedRows.forEach((row) => this.#forceRowGroupExpansion(row));
    }

    #forceRowGroupExpansion(row: KupDataTableRow) {
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
                this.#forceRowGroupExpansion(childRow)
            );
        }
    }

    #adjustPaginator() {
        this.computeMaxRowsPerPage();

        const numberOfRows = this.#rowsLength;
        // check if current page is valid
        const numberOfPages = Math.ceil(numberOfRows / this.currentRowsPerPage);
        if (this.currentPage > numberOfPages) {
            // reset page
            this.currentPage = 1;
        }
    }

    #setCellEditability(
        column: KupDataColumn,
        row: KupDataTableRow,
        cell: KupDataTableCell
    ): boolean {
        if (column.useAs) {
            if (
                this.#insertedRowIds.includes(row.id) &&
                column.useAs === UseAsValue.DEC
            ) {
                return false;
            } else if (
                !this.#insertedRowIds.includes(row.id) &&
                (column.useAs === UseAsValue.DEC ||
                    column.useAs === UseAsValue.KEY)
            ) {
                return false;
            }
        }

        if (cell.isEditable !== null && cell.isEditable !== undefined) {
            return cell.isEditable;
        }

        if (column.isEditable !== null && column.isEditable !== undefined) {
            return column.isEditable;
        }

        return false;
    }

    //==== Fixed columns and rows methods ====
    #composeFixedCellStyleAndClass(
        columnCssIndex: number,
        columnCssIndexR: number,
        rowCssIndex: number,
        extraCellsCount: number = 0
    ):
        | undefined
        | {
              fixedCellClasses: GenericObject;
              fixedCellStyle: GenericObject;
          } {
        if (this.#isGrouping()) {
            return undefined;
        }

        //-- Controls if there are fixed rows or columns --
        const validFixedColumn: boolean =
            Number.isInteger(this.fixedColumns) &&
            columnCssIndex <= this.fixedColumns + extraCellsCount;
        const validFixedColumnR: boolean =
            this.fixedColumnsR &&
            Number.isInteger(this.fixedColumnsR) &&
            columnCssIndexR >=
                this.getVisibleColumns().length - this.fixedColumnsR;
        const validFixedRowIndex =
            Number.isInteger(this.fixedRows) &&
            rowCssIndex > 0 &&
            rowCssIndex <= this.fixedRows;

        // When the cell is not valid to be either into a fixed column or into a fixed row, returns null.
        if (!validFixedRowIndex && !validFixedColumn && !validFixedColumnR) {
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

        if (validFixedColumnR) {
            const idx = this.getVisibleColumns().length - columnCssIndexR;
            fixedCellClasses[FixedCellsClasses.columnsR] = validFixedColumnR;
            fixedCellClasses['show-column-separator'] =
                ShowGrid.COMPLETE === this.showGrid ||
                ShowGrid.COL === this.showGrid;
            fixedCellStyle['right'] =
                'var(' + (FixedCellsCSSVarsBase.columnsR + idx) + ')'; // right value assignment must be reversed
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

    #updateFixedRowsAndColumnsCssVariables(): boolean {
        // [ffbf] - Using getBoundingClientRect is mandatory since Firefox return a wrong value for ele.offsetHeight and witdh values

        // When grouping, the fixed rows and columns are not sticky
        if (this.#isGrouping() || !this.#tableRef) return false;
        let toRet: boolean = false;

        if (this.fixedRows >= 1) {
            let currentRow: HTMLTableRowElement = this.#tableRef.querySelector(
                'tbody > tr:first-of-type'
            );
            // The height must start from the height of the header. BUT not on Safari.
            // Safari handles the sticky position on the tables in a different way, making it start from the tbody element
            // and not on the table with a specified position of sticky. There fore in that case we must set initial height to 0.
            let previousHeight: number = !this.#isSafariBrowser
                ? (
                      this.#tableRef.querySelector(
                          'thead > tr:first-of-type > th:first-of-type'
                      ) as HTMLTableCellElement
                  ).getBoundingClientRect().height // [ffbf]
                : 0;

            // [CSSCount] - I must start from 1 since we are referencing html elements e not array (with CSS selectors starting from 1)
            for (let i = 1; i <= this.fixedRows && currentRow; i++) {
                this.#tableAreaRef.style.setProperty(
                    FixedCellsCSSVarsBase.rows + i,
                    previousHeight + 'px'
                );
                previousHeight += (
                    currentRow.children[0] as HTMLTableCellElement
                ).getBoundingClientRect().height; // [ffbf]
                currentRow =
                    currentRow.nextElementSibling as HTMLTableRowElement;
            }
            toRet = true;
        }

        if (this.fixedColumns >= 1) {
            let currentCell: HTMLTableCellElement =
                this.#tableRef.querySelector(
                    'tbody > tr:first-of-type > td:first-of-type'
                );
            let previousWidth: number = 0;
            const totalFixedColumns =
                this.fixedColumns +
                (this.#hasRowActions() ||
                this.#kupManager.data.column.hasCodVer(this.data.columns)
                    ? 1
                    : 0) +
                (this.selection === SelectionMode.MULTIPLE_CHECKBOX ? 1 : 0);

            // @See [CSSCount]
            for (let i = 1; i <= totalFixedColumns && currentCell; i++) {
                this.#tableAreaRef.style.setProperty(
                    FixedCellsCSSVarsBase.columns + i,
                    previousWidth + 'px'
                );
                previousWidth += currentCell.getBoundingClientRect().width; // [ffbf]
                currentCell =
                    currentCell.nextElementSibling as HTMLTableCellElement;
            }
            toRet = true;
        }

        if (this.fixedColumnsR >= 1) {
            let currentCell: HTMLTableCellElement =
                this.#tableRef.querySelector(
                    'tbody > tr:first-of-type > td:last-of-type'
                );
            let previousWidth = 0;

            for (let i = 1; i <= this.fixedColumnsR && currentCell; i++) {
                this.#tableAreaRef.style.setProperty(
                    FixedCellsCSSVarsBase.columnsR + i,
                    previousWidth + 'px'
                );
                previousWidth += currentCell.getBoundingClientRect().width;
                currentCell =
                    currentCell.previousElementSibling as HTMLTableCellElement;
            }
            toRet = true;
        }

        return toRet;
    }

    //======== Event Listeners ========
    #horNav = (isRight: boolean) => {
        if (
            !this.#lastFocusedCell ||
            this.selection == SelectionMode.MULTIPLE
        ) {
            return;
        }
        //this.#resetSelectedRows(true);

        const tr = this.#lastFocusedCell.element.closest('tr:not(.group)');
        const cells = tr.querySelectorAll('.f-cell');

        const oldIndex = Array.from(cells).indexOf(
            this.#lastFocusedCell.element
        );

        let newIndex = isRight ? oldIndex + 1 : oldIndex - 1;
        if (newIndex < 0) {
            newIndex = cells.length - 1;
        } else if (newIndex >= cells.length) {
            newIndex = 0;
        }

        const focused = cells[newIndex];
        const focusedProps: FCellProps = focused['kup-get-cell-props']();

        this.#onRowClick(focusedProps.row, focused.closest('td'), true, true);
        this.#lastFocusedCell = focusedProps.cell;
    };

    #verNav = (isDown: boolean) => {
        if (
            !this.#lastFocusedCell ||
            this.selection == SelectionMode.MULTIPLE
        ) {
            return;
        }
        //this.#resetSelectedRows(true);

        const tr = this.#lastFocusedCell.element.closest('tr:not(.group)');
        const cellXIndex = Array.from(tr.querySelectorAll('.f-cell')).indexOf(
            this.#lastFocusedCell.element
        );
        const rows = tr.parentElement.querySelectorAll('tr:not(.group)');
        const index = Array.from(rows).indexOf(tr);

        let newIndex = isDown ? index + 1 : index - 1;
        if (newIndex < 0) {
            newIndex = rows.length - 1;
        } else if (newIndex >= rows.length) {
            newIndex = 0;
        }

        const focusedRow = rows[newIndex];
        const focusedCells = focusedRow.querySelectorAll('.f-cell');
        const focused = focusedCells[cellXIndex];
        const focusedProps: FCellProps = focused['kup-get-cell-props']();
        this.#lastFocusedCell = focusedProps.cell;

        this.#onRowClick(focusedProps.row, focused.closest('td'), true, true);
    };

    #onKupKeyDown = (e: KeyboardEvent) => {
        const isHorizontal = e.key === 'ArrowLeft' || e.key === 'ArrowRight';
        const isVertical = e.key === 'ArrowDown' || e.key === 'ArrowUp';

        // Only for non-editable matrix
        if (!this.editableData && !this.updatableData) {
            // If horizontal navigation, select next/previous column
            if (isHorizontal) {
                e.preventDefault();
                this.#horNav(e.key === 'ArrowRight');
            }

            // If vertical navigation, select next/previous row
            if (isVertical) {
                e.preventDefault();
                this.#verNav(e.key === 'ArrowDown');
            }
        }
    };

    #onColumnSort({ ctrlKey }: PointerEvent, columnName: string) {
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

    #onRemoveFilter(column: KupDataColumn) {
        // resetting current page
        this.resetCurrentPage();
        const newFilters: GenericFilter = { ...this.filters };
        this.#filtersColumnMenuInstance.removeFilter(newFilters, column.name);
        this.filters = newFilters;
    }

    #getFilterValueForTooltip(column: KupDataColumn): string {
        return this.#filtersColumnMenuInstance.getFilterValueForTooltip(
            this.filters,
            column
        );
    }

    #onGlobalFilterChange(inputEl: EventTarget) {
        this.resetCurrentPage();
        if (inputEl) {
            const el = inputEl as HTMLInputElement;
            this.globalFilterValue = el.value;
        } else {
            this.globalFilterValue = '';
        }
    }

    #handlePageChange(pageNumber: number) {
        const newPage = pageChange(
            pageNumber,
            this.#rowsLength,
            this.currentRowsPerPage
        );
        if (newPage) {
            this.currentPage = newPage;

            // scroll to row if current page contains selected rows
            this.#paginatedRows.forEach((row) => {
                if (this.selectedRows.includes(row)) {
                    this.scrollToRow(row.id);
                }
            });
        }
    }

    #handleRowsPerPageChange(rowsNumber: number) {
        const newRows = rowsPerPageChange(rowsNumber, this.#rowsLength);
        if (newRows) {
            this.currentRowsPerPage = newRows;
            this.#adjustPaginator();
        }
    }

    #onRowClick(
        row: KupDataTableRow,
        td: HTMLElement,
        emitEvent?: boolean,
        isKeyboardNav = false
    ) {
        // selecting row
        if (!row.unselectable) {
            switch (this.selection) {
                case SelectionMode.MULTIPLE:
                    if (this.selectedRows.includes(row)) {
                        const selectedRowsCopy = [...this.selectedRows];
                        var index = selectedRowsCopy.indexOf(row);
                        if (index !== -1) {
                            selectedRowsCopy.splice(index, 1);
                        }
                        this.selectedRows = [...selectedRowsCopy];
                    } else {
                        this.selectedRows = [...this.selectedRows, row];
                    }
                    break;
                case SelectionMode.SINGLE:
                    this.selectedRows = [row];
                    break;
                default:
                    break;
            }
        }

        // find clicked column
        const clickedColumn: string = td.dataset.column;

        // selecting clicked column
        if (
            !row.unselectable &&
            this.selection !== SelectionMode.NONE &&
            clickedColumn
        ) {
            this.#deselectColumn(this.selectedColumn);
            this.selectedColumn = clickedColumn;
            this.#selectColumn(this.selectedColumn);

            if (emitEvent !== false) {
                // emit event
                this.kupRowSelected.emit({
                    comp: this,
                    id: this.rootElement.id,
                    selectedRows: this.selectedRows,
                    clickedRow: row,
                    clickedColumn,
                    isKeyboardNav,
                });
            }
        }
    }

    #selectColumn(selectedColumn: string) {
        const columnCells = this.rootElement.shadowRoot.querySelectorAll(
            'td[data-column="' + selectedColumn + '"]'
        );
        for (let i = 0; i < columnCells.length; i++) {
            columnCells[i].classList.add('selected');
        }
        const column = this.rootElement.shadowRoot.querySelector(
            'th[data-column="' + selectedColumn + '"]'
        );
        if (column) {
            column.classList.add('selected');
        }
    }

    #deselectColumn(selectedColumn: string) {
        const columnCells = this.rootElement.shadowRoot.querySelectorAll(
            'td[data-column="' + selectedColumn + '"]'
        );
        for (let i = 0; i < columnCells.length; i++) {
            columnCells[i].classList.remove('selected');
        }
        const column = this.rootElement.shadowRoot.querySelector(
            'th[data-column="' + selectedColumn + '"]'
        );
        if (column) {
            column.classList.remove('selected');
        }
    }

    #onRowActionExpanderClick(
        e: MouseEvent | PointerEvent,
        row: KupDataTableRow,
        dropDownActions: KupDataRowAction[]
    ) {
        e.stopPropagation();
        this.#dropDownActionCardAnchor = e.target as HTMLElement;
        this.#dropDownActions(dropDownActions, row);
    }

    #handleRowSelect(row: KupDataTableRow) {
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
            comp: this,
            id: this.rootElement.id,
            selectedRows: this.selectedRows,
            clickedRow: null,
            clickedColumn: null,
        });
    }

    #onRowExpand(row: KupDataTableRow) {
        // row should be a 'group' row
        row.group.expanded = !row.group.expanded;

        // updating group map
        this.groupState[row.group.id].expanded = row.group.expanded;

        // changing group state to trigger rendering
        this.groupState = { ...this.groupState };
    }

    #onSelectAll({ target }) {
        if (target.checked) {
            // select all rows
            this.selectedRows = this.#renderedRows;
            // triggering event
            this.kupRowSelected.emit({
                comp: this,
                id: this.rootElement.id,
                selectedRows: this.selectedRows,
                clickedColumn: null,
                clickedRow: null,
            });
        } else {
            // deselect all rows
            this.#resetSelectedRows(true);
        }
    }

    #openTotalMenu(column: KupDataColumn) {
        this.openedTotalMenu = column.name;
    }

    #closeTotalMenu() {
        this.openedTotalMenu = null;
        this.#kupManager.removeClickCallback(this.#clickCb);
    }

    #isOpenedTotalMenuForColumn(column: string): boolean {
        return this.openedTotalMenu === column;
    }

    // utility methods
    #groupRows(): void {
        if (!this.#isGrouping()) {
            return;
        }

        this.#rows = groupRows(
            this.getColumns(),
            this.#rows,
            this.groups,
            this.totals
        );

        this.#adjustGroupState();
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
    #onLoadMoreClick() {
        let loadItems: number = 0;

        switch (this.loadMoreMode) {
            case LoadMoreMode.CONSTANT:
                loadItems = this.loadMoreStep;
                break;
            case LoadMoreMode.CONSTANT_INCREMENT:
                loadItems =
                    this.loadMoreStep * (this.#loadMoreEventCounter + 1);
                break;
            case LoadMoreMode.PROGRESSIVE_THRESHOLD:
                loadItems =
                    Math.max(
                        this.#loadMoreEventPreviousQuantity,
                        this.loadMoreStep
                    ) * Math.min(this.#loadMoreEventCounter + 1, 2);
                break;
        }

        if (loadItems > this.loadMoreLimit) {
            loadItems = this.loadMoreLimit;
        }

        this.kupLoadMoreClick.emit({
            comp: this,
            id: this.rootElement.id,
            loadItems: loadItems,
        });

        this.#loadMoreEventPreviousQuantity = loadItems;
        this.#loadMoreEventCounter++;
    }

    #adjustGroupState(): void {
        if (
            !this.#rows ||
            this.#rowsLength === 0 ||
            !this.#rows[0].hasOwnProperty('group')
        ) {
            // no grouping
            return;
        }
        this.#rows.forEach((r) => this.#adjustGroupStateFromRow(r));
    }

    #adjustGroupStateFromRow(row: KupDataTableRow): void {
        if (!row || !row.hasOwnProperty('group')) {
            // not a groping row, nothing to do
            return;
        }

        const group = row.group;

        // check if already in group state
        const groupFromState = this.groupState[group.id];

        if (!groupFromState) {
            // add to state
            this.groupState[group.id] = group;
        } else {
            // update expanded
            group.expanded = groupFromState.expanded;
        }

        group.children.forEach((child) => this.#adjustGroupStateFromRow(child));
    }

    #sortRows(): void {
        this.#rows = sortRows(this.#rows, this.sort);
    }

    #getSortIcon(columnName: string): string {
        // check if column in sort array
        for (let sortObj of this.sort) {
            if (sortObj.column === columnName) {
                return 'A' === sortObj.sortMode
                    ? `kup-icon ${KupThemeIconValues.DESCENDING.replace(
                          '--',
                          ''
                      )}`
                    : `kup-icon ${KupThemeIconValues.ASCENDING.replace(
                          '--',
                          ''
                      )}`;
            }
        }

        // default
        return '';
    }

    #getSortDecode(columnName: string): string {
        // check if column in sort array
        for (let sortObj of this.sort) {
            if (sortObj.column === columnName) {
                return 'A' === sortObj.sortMode ? 'Ascending' : 'Descending';
            }
        }

        // default
        return 'Sort column';
    }

    #calculateColspan() {
        let colSpan = this.getVisibleColumns().length;

        if (this.selection === SelectionMode.MULTIPLE_CHECKBOX) {
            colSpan += 1;
        }

        if (
            this.#hasRowActions() ||
            this.#kupManager.data.column.hasCodVer(this.data.columns)
        ) {
            colSpan += 1;
        }

        return colSpan;
    }

    #isGroupExpanded({ group }: KupDataTableRow): boolean {
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
    #handleColumnSort(
        receivingColumn: KupDataColumn,
        sortedColumn: KupDataColumn
    ) {
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
            this.kupColumnMove.emit({
                comp: this,
                id: this.rootElement.id,
                sourceColumn: this.data.columns[sortedColIndex],
                targetColumn: this.data.columns[receivingColIndex],
            });
            this.#moveSortedColumns(
                this.data.columns,
                receivingColIndex,
                sortedColIndex
            );
        }

        // Rearrange visibleColumns to match the new sort order
        if (this.visibleColumns) {
            const sIdx = this.visibleColumns.findIndex(
                (c) => c === sortedColumn.name
            );
            const rIdx = this.visibleColumns.findIndex(
                (c) => c === receivingColumn.name
            );

            const sortedName = this.visibleColumns.splice(sIdx, 1)[0];
            this.visibleColumns.splice(rIdx, 0, sortedName);
        } else {
            // Adds the sorted column to visibleColumns to preserve the current column order.
            this.visibleColumns = this.getVisibleColumns().map((c) => c.name);
        }
    }

    /**
     * After a drop of a column header, if the table can update its own data, does so and triggers rerender.
     * @param columns - The columns to sort
     * @param receivingColumnIndex - The index where the column will be inserted
     * @param sortedColumnIndex - The index where the column will be removed
     */
    #moveSortedColumns(
        columns: KupDataColumn[],
        receivingColumnIndex: number,
        sortedColumnIndex: number
    ) {
        const remove = columns.splice(sortedColumnIndex, 1);
        columns.splice(receivingColumnIndex, 0, remove[0]);
        this.refresh();
    }

    #handleUpdateClick = (command?: KupDataCell) => {
        this.kupUpdate.emit({
            comp: this,
            id: this.rootElement.id,
            originalData: this.#originalDataLoaded,
            updatedData: getDiffData(this.#originalDataLoaded, this.data, true),
            command: command,
        });
    };

    #onBlurHandler({
        detail: { cell, column, row },
    }: CustomEvent<FCellEventPayload>) {
        if (
            this.updatableData &&
            cell.isEditable &&
            cell.inputSettings?.checkValueOnExit &&
            cell.shape !== FCellShapes.CHECKBOX &&
            cell.shape !== FCellShapes.SWITCH &&
            this.#originalDataLoaded.rows.find((r) => r.id == row.id)?.cells[
                column.name
            ]?.value !== cell.value
        ) {
            this.kupCellCheck.emit({
                comp: this,
                id: this.rootElement.id,
                originalData: this.#originalDataLoaded,
                updatedData: getDiffData(
                    this.#originalDataLoaded,
                    this.data,
                    true
                ),
                cell: cell,
            });
        }
    }

    @Method() async defaultSortingFunction(
        columns: KupDataColumn[],
        receivingColumnIndex: number,
        sortedColumnIndex: number,
        useNewObject: boolean = false
    ) {
        const toSort = !useNewObject ? columns : [...columns];

        this.#moveSortedColumns(
            toSort,
            receivingColumnIndex,
            sortedColumnIndex
        );

        return toSort;
    }

    #applyLineBreaks(content: string) {
        if (!content) {
            return '';
        }
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
    #composeHeaderCellClassAndStyle(
        columnIndex: number,
        extraCells: number = 0,
        column: KupDataColumn
    ): {
        columnClass: GenericObject;
        thStyle: GenericObject;
    } {
        let columnClass: GenericObject = { ['header-cell']: true },
            thStyle: GenericObject = column.style ? { ...column.style } : {};

        if (
            this.#kupManager.objects.isBar(column.obj) ||
            this.#kupManager.objects.isButton(column.obj) ||
            this.#kupManager.objects.isChart(column.obj) ||
            this.#kupManager.objects.isCheckbox(column.obj) ||
            this.#kupManager.objects.isImage(column.obj) ||
            this.#kupManager.objects.isIcon(column.obj) ||
            this.#kupManager.objects.isProgressBar(column.obj) ||
            this.#kupManager.objects.isRadio(column.obj) ||
            this.#kupManager.objects.isVoCodver(column.obj)
        ) {
            columnClass['header-cell--centered'] = true;
        }

        if (this.#kupManager.objects.isNumber(column.obj)) {
            columnClass['header-cell--is-number'] = true;
        }

        if (this.#kupManager.objects.isIcon(column.obj)) {
            columnClass['header-cell--is-icon'] = true;
        }
        // For fixed cells styles and classes
        const fixedCellStyle = this.#composeFixedCellStyleAndClass(
            columnIndex + 1 + extraCells,
            columnIndex,
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

    #renderHeader() {
        let specialExtraCellsCount: number = 0;

        // Renders multiple selection column
        let multiSelectColumn = null;
        if (this.selection === SelectionMode.MULTIPLE_CHECKBOX) {
            specialExtraCellsCount++;
            const selectionStyleAndClass = this.#composeFixedCellStyleAndClass(
                specialExtraCellsCount,
                0,
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
                    <FCheckbox
                        onChange={(e) => this.#onSelectAll(e)}
                        sizing={KupComponentSizing.EXTRA_SMALL}
                        title={
                            this.#kupManager.language.translate(
                                KupLanguageRow.SELECTED
                            ) +
                            `: ${this.selectedRows.length},` +
                            this.#kupManager.language.translate(
                                KupLanguageRow.RENDERED
                            ) +
                            `: ${this.#renderedRows.length}`
                        }
                        checked={
                            this.selectedRows.length > 0 &&
                            this.selectedRows.length ===
                                this.#renderedRows.length
                        }
                    />
                </th>
            );
        }

        // Renders action column
        let actionsColumn = null;
        if (
            this.#hasRowActions() ||
            this.#kupManager.data.column.hasCodVer(this.data.columns)
        ) {
            specialExtraCellsCount++;
            const selectionStyleAndClass = this.#composeFixedCellStyleAndClass(
                specialExtraCellsCount,
                0,
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
                const { columnClass, thStyle } =
                    this.#composeHeaderCellClassAndStyle(
                        columnIndex,
                        specialExtraCellsCount,
                        column
                    );

                let filter = null;

                if (
                    this.#filtersColumnMenuInstance.hasFiltersForColumn(
                        this.filters,
                        column
                    )
                ) {
                    const svgLabel =
                        this.#kupManager.language.translate(
                            KupLanguageGeneric.REMOVE_FILTERS
                        ) + `: '${this.#getFilterValueForTooltip(column)}'`;
                    filter = (
                        <span
                            title={svgLabel}
                            class={`kup-icon ${KupThemeIconValues.FILTER_REMOVE.replace(
                                '--',
                                ''
                            )}`}
                        ></span>
                    );
                }

                let sortIcon = null;

                let iconClass = this.#getSortIcon(column.name);
                if (iconClass !== '') {
                    sortIcon = (
                        <span
                            class={iconClass}
                            title={this.#getSortDecode(column.name)}
                        ></span>
                    );
                }
                columnClass['header-cell--sortable'] = true;

                let keyIcon: HTMLSpanElement = null;
                if (column.isKey) {
                    keyIcon = (
                        <span
                            class={`kup-icon ${KupThemeIconValues.KEY.replace(
                                '--',
                                ''
                            )}`}
                            title={this.#kupManager.language.translate(
                                KupLanguageRow.KEY
                            )}
                        ></span>
                    );
                }

                // Sets custom columns width
                if (this.#sizedColumns) {
                    for (let i = 0; i < this.#sizedColumns.length; i++) {
                        const currentCol = this.#sizedColumns[i];

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

                return (
                    <th
                        ref={(el: HTMLElement) => this.#thRefs.push(el)}
                        data-cell={column}
                        data-column={column.name}
                        class={columnClass}
                        style={thStyle}
                        title={column.name}
                    >
                        <div class="header-cell__content">
                            <span class="header-cell__title">
                                {this.#applyLineBreaks(column.title)}
                            </span>
                            <span class="header-cell__icons">
                                {keyIcon}
                                {sortIcon}
                                {filter}
                            </span>
                        </div>
                        {this.resizableColumns ? (
                            <span class="header-cell__drag-handler"></span>
                        ) : null}
                    </th>
                );
            }
        );

        return [multiSelectColumn, actionsColumn, ...dataColumns];
        //  return [multiSelectColumn, groupColumn, actionsColumn, ...dataColumns];
    }

    #renderStickyHeader() {
        let specialExtraCellsCount: number = 0;

        let multiSelectColumn = null;
        if (this.selection === SelectionMode.MULTIPLE_CHECKBOX) {
            specialExtraCellsCount++;
            const selectionStyleAndClass = this.#composeFixedCellStyleAndClass(
                specialExtraCellsCount,
                0,
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
                        onkup-checkbox-change={(e) => this.#onSelectAll(e)}
                        title={
                            this.#kupManager.language.translate(
                                KupLanguageRow.SELECTED
                            ) +
                            `: ${this.selectedRows.length},` +
                            this.#kupManager.language.translate(
                                KupLanguageRow.RENDERED
                            ) +
                            `: ${this.#renderedRows.length}`
                        }
                        checked={
                            this.selectedRows.length > 0 &&
                            this.selectedRows.length ===
                                this.#renderedRows.length
                        }
                    />
                </th-sticky>
            );
        }

        // Empty cell for the actions
        let actionsColumn = null;
        if (
            this.#hasRowActions() ||
            this.#kupManager.data.column.hasCodVer(this.data.columns)
        ) {
            specialExtraCellsCount++;
            const selectionStyleAndClass = this.#composeFixedCellStyleAndClass(
                specialExtraCellsCount,
                0,
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
                const { columnClass, thStyle } =
                    this.#composeHeaderCellClassAndStyle(
                        columnIndex,
                        specialExtraCellsCount,
                        column
                    );

                return (
                    <th-sticky class={columnClass} style={thStyle}>
                        <div class="header-cell__content">
                            <span class="header-cell__title">
                                {this.#applyLineBreaks(column.title)}
                            </span>
                        </div>
                    </th-sticky>
                );
            }
        );

        return [multiSelectColumn, actionsColumn, ...dataColumns];
    }

    areTotalsSelected(column: KupDataColumn): boolean {
        return this.totals && this.totals[column.name] ? true : false;
    }

    onTotalsChange(event, column) {
        this.#closeTotalMenu();
        if (!column) {
            return;
        }

        const selectedElementId = event.detail.selected.id;
        const newTotals = this.totals ?? {};

        // Delete column from totals
        if (selectedElementId === TotalLabel.CANC) {
            delete newTotals[column.name];
            this.totals = Object.keys(newTotals).length
                ? { ...newTotals } // Trigger totals watcher
                : undefined;
            return;
        }

        // Add/update total operation for the specified column
        newTotals[column.name] = selectedElementId;
        this.totals = { ...newTotals }; // Trigger totals watcher
    }

    #totalMenuPosition() {
        if (this.rootElement.shadowRoot) {
            const menu: HTMLKupListElement =
                this.rootElement.shadowRoot.querySelector('#totals-menu');
            if (menu) {
                this.#kupManager.dynamicPosition.register(
                    menu as unknown as KupDynamicPositionElement,
                    this.#totalMenuCoords,
                    0,
                    undefined,
                    true
                );
                this.#clickCb = {
                    cb: () => {
                        this.#closeTotalMenu();
                    },
                    el: menu,
                };
                this.#kupManager.addClickCallback(this.#clickCb, true);
                this.#kupManager.dynamicPosition.start(
                    menu as unknown as KupDynamicPositionElement
                );
                menu.menuVisible = true;
            }
        }
    }

    #onTotalMenuOpen(column: KupDataColumn) {
        this.#closeTotalMenu();
        this.#openTotalMenu(column);
    }

    renderFooter() {
        let extraCells = 0;

        // Composes initial cells if necessary
        let selectRowCell = null;
        if (this.selection === SelectionMode.MULTIPLE_CHECKBOX) {
            extraCells++;
            const fixedCellStyle = this.#composeFixedCellStyleAndClass(
                extraCells,
                0,
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

        // Action cell
        let actionsCell = null;
        if (
            this.#hasRowActions() ||
            this.#kupManager.data.column.hasCodVer(this.data.columns)
        ) {
            extraCells++;
            const selectionStyleAndClass = this.#composeFixedCellStyleAndClass(
                extraCells,
                0,
                0,
                extraCells
            );
            actionsCell = (
                <td
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

        const footerCells = this.getVisibleColumns().map(
            (column: KupDataColumn, columnIndex) => {
                const fixedCellStyle = this.#composeFixedCellStyleAndClass(
                    columnIndex + 1 + extraCells,
                    columnIndex,
                    0,
                    extraCells
                );

                let totalMenu = undefined;
                let menuLabel = TotalLabel.CALC;
                const translation = {
                    [TotalLabel.AVERAGE]: this.#kupManager.language.translate(
                        KupLanguageTotals.AVERAGE
                    ),
                    [TotalLabel.CALC]: this.#kupManager.language.translate(
                        KupLanguageTotals.CALCULATE
                    ),
                    [TotalLabel.CANC]: this.#kupManager.language.translate(
                        KupLanguageTotals.CANCEL
                    ),
                    [TotalLabel.COUNT]: this.#kupManager.language.translate(
                        KupLanguageTotals.COUNT
                    ),
                    [TotalLabel.DISTINCT]: this.#kupManager.language.translate(
                        KupLanguageTotals.DISTINCT
                    ),
                    [TotalLabel.MATH]: this.#kupManager.language.translate(
                        KupLanguageTotals.FORMULA
                    ),
                    [TotalLabel.MAX]: this.#kupManager.language.translate(
                        KupLanguageTotals.MAXIMUM
                    ),
                    [TotalLabel.MIN]: this.#kupManager.language.translate(
                        KupLanguageTotals.MINIMUM
                    ),
                    [TotalLabel.SUM]: this.#kupManager.language.translate(
                        KupLanguageTotals.SUM
                    ),
                };

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
                                case TotalMode.DISTINCT:
                                    menuLabel = TotalLabel.DISTINCT;
                                    break;
                                case TotalMode.SUM:
                                    menuLabel = TotalLabel.SUM;
                                    break;
                                case TotalMode.AVERAGE:
                                    menuLabel = TotalLabel.AVERAGE;
                                    break;
                                case TotalMode.MIN:
                                    menuLabel = TotalLabel.MIN;
                                    break;
                                case TotalMode.MAX:
                                    menuLabel = TotalLabel.MAX;
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                }

                if (this.#isOpenedTotalMenuForColumn(column.name)) {
                    const getTotalsListElements = (
                        formula = ''
                    ): Record<TotalMode | TotalLabel.CANC, KupListNode> => {
                        return {
                            [TotalMode.COUNT]: {
                                id: TotalMode.COUNT,
                                value: translation[TotalLabel.COUNT],
                            },
                            [TotalMode.DISTINCT]: {
                                id: TotalMode.DISTINCT,
                                value: translation[TotalLabel.DISTINCT],
                            },
                            [TotalMode.SUM]: {
                                id: TotalMode.SUM,
                                value: translation[TotalLabel.SUM],
                            },
                            [TotalMode.AVERAGE]: {
                                id: TotalMode.AVERAGE,
                                value: translation[TotalLabel.AVERAGE],
                            },
                            [TotalMode.MIN]: {
                                id: TotalMode.MIN,
                                value: translation[TotalLabel.MIN],
                            },
                            [TotalMode.MAX]: {
                                id: TotalMode.MAX,
                                value: translation[TotalLabel.MAX],
                            },
                            [TotalLabel.CANC]: {
                                id: TotalLabel.CANC,
                                value: translation[TotalLabel.CANC],
                            },
                            [TotalMode.MATH]: {
                                id: formula
                                    ? `${TotalMode.MATH}${formula}`
                                    : TotalMode.MATH,
                                value: formula
                                    ? `${
                                          translation[TotalLabel.MATH]
                                      }: ${formula}`
                                    : translation[TotalLabel.MATH],
                            },
                        };
                    };

                    // Add list elements
                    const listData: KupListNode[] = [];
                    if (column.formula) {
                        /* Formula cloumn */
                        const formula = (
                            (this.#hasTotals() && this.totals[column.name]) ||
                            column.formula
                        )?.replace(
                            getRegExpFromString(TotalMode.MATH, 'g'),
                            ''
                        );
                        const totalsListElements =
                            getTotalsListElements(formula);
                        // Add formula
                        listData.push(
                            {
                                ...totalsListElements[TotalMode.MATH],
                                selected: this.#hasTotals()
                                    ? !!this.totals[column.name]
                                    : false,
                            },
                            {
                                ...totalsListElements[TotalLabel.CANC],
                                separator: true,
                            }
                        );
                    } else {
                        /* Standard column */
                        // Add default operations
                        const totalsListElements = getTotalsListElements();
                        listData.push(
                            totalsListElements[TotalMode.COUNT],
                            totalsListElements[TotalMode.DISTINCT]
                        );

                        if (this.#kupManager.objects.isNumber(column.obj)) {
                            // Add number operations
                            listData.push(
                                {
                                    ...totalsListElements[TotalMode.SUM],
                                    separator: true,
                                },
                                totalsListElements[TotalMode.AVERAGE],
                                totalsListElements[TotalMode.MIN],
                                totalsListElements[TotalMode.MAX]
                            );
                        } else if (
                            this.#kupManager.objects.isDate(column.obj)
                        ) {
                            // Add date operations
                            listData.push(
                                {
                                    ...totalsListElements[TotalMode.MIN],
                                    separator: true,
                                },
                                totalsListElements[TotalMode.MAX]
                            );
                        }

                        if (this.#hasTotals()) {
                            const selectedItem: KupListNode = listData.find(
                                (item) => item.id === this.totals[column.name]
                            );
                            if (selectedItem) {
                                selectedItem.selected = true;
                                listData.push({
                                    ...totalsListElements[TotalLabel.CANC],
                                    separator: true,
                                });
                            }
                        }
                    }

                    totalMenu = (
                        <kup-list
                            class={`total-menu`}
                            data={listData}
                            id="totals-menu"
                            is-menu
                            keyboardNavigation={true}
                            menu-visible
                            onkup-list-click={(event) =>
                                this.onTotalsChange(event, column)
                            }
                            tabindex={0}
                        ></kup-list>
                    );
                }

                const totalValue =
                    this.#footer[column.name] != null
                        ? getValueForDisplay(
                              this.#footer[column.name],
                              dom.ketchup.objects.isNumber(column.obj) ||
                                  dom.ketchup.objects.isDate(column.obj)
                                  ? column.obj
                                  : { t: 'NR', p: '', k: '' },
                              column.decimals
                          )
                        : '';
                const totalsClass = `totals-value ${
                    isNegativeNumber(this.#footer[column.name])
                        ? FCellClasses.TEXT_DANGER
                        : ''
                }`;

                return (
                    <td
                        data-column={column.name}
                        class={
                            fixedCellStyle && fixedCellStyle.fixedCellClasses
                                ? fixedCellStyle.fixedCellClasses
                                : ''
                        }
                        style={
                            fixedCellStyle
                                ? fixedCellStyle.fixedCellStyle
                                : null
                        }
                    >
                        {totalMenu}
                        <div class={totalsClass} title={translation[menuLabel]}>
                            {totalValue}
                        </div>
                    </td>
                );
            }
        );

        const footer = (
            <tfoot>
                <tr>
                    {selectRowCell}
                    {actionsCell}
                    {footerCells}
                </tr>
            </tfoot>
        );

        return footer;
    }

    #renderRow(
        row: KupDataTableRow,
        level = 0,
        rowCssIndex: number = 0,
        previousRow?: KupDataTableRow
    ) {
        const visibleColumns = this.getVisibleColumns();
        let rowActionsCount: number = 0;

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
                ? `kup-icon ${KupThemeIconValues.EXPANDED.replace('--', '')}`
                : `kup-icon ${KupThemeIconValues.COLLAPSED.replace('--', '')}`;

            const jsxRows = [];

            const indent = [];
            for (let i = 0; i < level; i++) {
                indent.push(<span class="indent" />);
            }

            if (this.#hasTotals()) {
                //const colSpan = this.multiSelection ? 2 : 1;
                const cells = [];
                if (
                    this.#hasRowActions() ||
                    this.#kupManager.data.column.hasCodVer(this.data.columns)
                ) {
                    cells.push(<td></td>);
                }
                if (this.selection === SelectionMode.MULTIPLE_CHECKBOX) {
                    cells.push(<td></td>);
                }
                // adding 'grouping' cell
                const grouplabelcell = (
                    <td colSpan={this.#calculateColspan()}>
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
                    // TODO please use getValueForDisplay
                    let value;
                    const totalValue = row.group.totals[column.name];
                    if (
                        this.totals[column.name] === TotalMode.COUNT ||
                        this.totals[column.name] === TotalMode.DISTINCT
                    ) {
                        value = totalValue;
                    } else {
                        if (this.#kupManager.objects.isDate(column.obj)) {
                            if (totalValue) {
                                if (
                                    this.#kupManager.dates.isIsoDate(totalValue)
                                ) {
                                    value =
                                        this.#kupManager.dates.format(
                                            totalValue
                                        );
                                } else {
                                    console.warn(`invalid date: ${totalValue}`);
                                }
                            }
                        } else {
                            value =
                                this.#kupManager.math.numberToFormattedString(
                                    totalValue,
                                    column.decimals,
                                    column.obj ? column.obj.p : ''
                                );
                        }
                    }
                    cells.push(<td class={totalClass}>{value}</td>);
                }

                jsxRows.push(
                    <tr
                        ref={(el: HTMLElement) => this.#rowsRefs.push(el)}
                        data-row={row}
                        class="group group-label"
                    >
                        {grouplabelcell}
                    </tr>
                );

                jsxRows.push(
                    <tr
                        ref={(el: HTMLElement) => this.#rowsRefs.push(el)}
                        data-row={row}
                        class="group group-total"
                    >
                        {cells}
                    </tr>
                );

                // if group is expanded, add children

                if (this.#isGroupExpanded(row)) {
                    row.group.children
                        // We must pass the previous element of the array to check if we must hide or display the value of the cell
                        // When the column has specified the parameter hideValuesRepetitions
                        .map((row, groupRowIndex, currentArray) =>
                            this.#renderRow(
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
            } else {
                jsxRows.push(
                    <tr
                        ref={(el: HTMLElement) => this.#rowsRefs.push(el)}
                        data-id={row.id}
                        data-row={row}
                        class="group"
                    >
                        <td colSpan={this.#calculateColspan()}>
                            <span class="group-cell-content">
                                {indent}
                                <span class={iconClass}></span>
                                <span class="text">{composedGroupLabel}</span>
                            </span>
                        </td>
                    </tr>
                );
                if (this.#isGroupExpanded(row)) {
                    row.group.children
                        // We must pass the previous element of the array to check if we must hide or display the value of the cell
                        // When the column has specified the parameter hideValuesRepetitions
                        .map((row, groupRowIndex, currentArray) =>
                            this.#renderRow(
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
            if (this.selection === SelectionMode.MULTIPLE_CHECKBOX) {
                specialExtraCellsCount++;
                const selectionStyleAndClass =
                    this.#composeFixedCellStyleAndClass(
                        specialExtraCellsCount,
                        0,
                        rowCssIndex,
                        specialExtraCellsCount - 1
                    );
                const props: FCheckboxProps = {
                    checked: this.selectedRows.includes(row),
                    sizing: KupComponentSizing.EXTRA_SMALL,
                    onChange: () => {
                        this.#handleRowSelect(row);
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
            if (
                this.#hasRowActions() ||
                this.#kupManager.data.column.hasCodVer(this.data.columns)
            ) {
                // Increments
                specialExtraCellsCount++;
                const actionsStyleAndClass =
                    this.#composeFixedCellStyleAndClass(
                        specialExtraCellsCount,
                        0,
                        rowCssIndex,
                        specialExtraCellsCount - 1
                    );

                rowActionsCount += this.rowActions?.length || 0;

                const actionsOnRow: FImageProps[] = [];
                if (row.actions) {
                    rowActionsCount += row.actions.length;
                } else {
                    const rowActions =
                        this.#kupManager.data.row.buildRowActions(
                            row,
                            this.getVisibleColumns({ includeCodVer: true }),
                            this.rowActions,
                            this.commands ?? []
                        );
                    if (
                        this.#kupManager.data.action.checkEveryActionHasOnlyIcon(
                            rowActions
                        ) ||
                        (rowActions.length === 1 && rowActions[0].icon)
                    ) {
                        rowActions.forEach((action, index) => {
                            const imageProp: FImageProps =
                                this.#kupManager.data.action.buildImageProp(
                                    action.icon,
                                    action.text || action.column?.title || '',
                                    'action',
                                    () => {
                                        this.kupRowActionItemClick.emit({
                                            comp: this,
                                            id: this.rootElement.id,
                                            row: row,
                                            obj: action.obj,
                                            cell: action.cell,
                                            type: action.type,
                                            index: index,
                                            column: action.column,
                                        });
                                    }
                                );

                            actionsOnRow.push(imageProp);
                        });
                    } else {
                        const textPopulatedRowActions =
                            this.#kupManager.data.action.createActionsWithText(
                                rowActions
                            );
                        const imageProp: FImageProps =
                            this.#kupManager.data.action.buildImageProp(
                                'chevron-down',
                                this.#kupManager.language.translate(
                                    KupLanguageGeneric.EXPAND
                                ),
                                'expander',
                                (e) => {
                                    this.#onRowActionExpanderClick(
                                        e,
                                        row,
                                        textPopulatedRowActions
                                    );
                                }
                            );

                        actionsOnRow.push(imageProp);
                    }
                    rowActionsCount++;
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
                        {actionsOnRow.map((action) => (
                            <FImage
                                {...action}
                                color="var(--kup-text-secondary)"
                            ></FImage>
                        ))}
                    </td>
                );
            }

            // Renders plain rows cells
            const cells = visibleColumns.map((currentColumn, cellIndex) => {
                const { name, hideValuesRepetitions } = currentColumn;
                const indend = [];
                if (cellIndex === 0) {
                    for (let i = 0; i < level; i++) {
                        indend.push(<span class="indent" />);
                    }
                }
                const cell = row.cells[name] ? row.cells[name] : null;

                if (!cell) {
                    if (this.autoFillMissingCells) {
                        return <td data-column={name} data-row={row}></td>;
                    } else {
                        return null;
                    }
                }
                cell.isEditable = this.#setCellEditability(
                    currentColumn,
                    row,
                    cell
                );
                cell.data = {
                    ...cell.data,
                    legacyLook: this.legacyLook,
                    sizing:
                        this.density === 'extra_dense'
                            ? 'extra-small'
                            : cell.data?.sizing,
                };
                if (!cell.isEditable) {
                    cell.cssClass =
                        this.#kupManager.data.cell.getObjectRelatedStyleClasses(
                            cell.obj,
                            cell.cssClass
                        );
                }
                const fcell = {
                    ...this.#kupManager.data.cell.buildFCell(
                        cell,
                        currentColumn,
                        row
                    ),
                    component: this,
                    density: this.density,
                    editable: this.editableData || this.updatableData,
                    indents: indend,
                    previousValue:
                        hideValuesRepetitions && previousRow
                            ? previousRow.cells[name].value
                            : undefined,
                    renderKup: this.lazyLoadCells,
                    cellActionIcon: this.#kupManager.data.cell.hasActionCell(
                        cell,
                        this.commands ?? []
                    )
                        ? {
                              onClick: (e: PointerEvent) => {
                                  this.kupCellActionIconClick.emit({
                                      comp: this,
                                      id: this.rootElement.id,
                                      details: this.#cellActionsMenuHandler(e),
                                  });
                              },
                          }
                        : null,
                };

                const jsxCell = <FCell {...fcell}></FCell>;

                // Classes which will be set onto the single data-table cell;

                let cellClass: GenericObject = null;
                let cellStyle: GenericObject = { ...cell.style };

                //-- For fixed cells --
                const fixedStyles = this.#composeFixedCellStyleAndClass(
                    cellIndex + 1 + specialExtraCellsCount,
                    cellIndex,
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
                if (this.#sizedColumns) {
                    let colWidth: string = '';

                    // Search if this column has a specified width
                    for (let j = 0; j < this.#sizedColumns.length; j++) {
                        if (name === this.#sizedColumns[j].name) {
                            colWidth = this.#sizedColumns[j].size;
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
                let eventHandlers = undefined;
                let title: string = undefined;

                cellClass = {
                    ...cellClass,
                };

                return (
                    <td
                        tabIndex={-1}
                        title={title}
                        colSpan={
                            cell.span && cell.span.col ? cell.span.col : null
                        }
                        rowSpan={
                            cell.span && cell.span.row ? cell.span.row : null
                        }
                        data-cell={cell}
                        data-column={name}
                        data-row={row}
                        style={cellStyle}
                        class={cellClass}
                        {...eventHandlers}
                    >
                        {jsxCell}
                    </td>
                );
            });
            // adding row to rendered rows
            this.#renderedRows.push(row);

            const rowClass = {
                selected: this.selectedRows.includes(row),
            };

            if (row.cssClass) {
                rowClass[row.cssClass] = true;
            }

            return (
                <tr
                    ref={(el: HTMLElement) => this.#rowsRefs.push(el)}
                    data-id={row.id}
                    data-row={row}
                    class={rowClass}
                >
                    {selectRowCell}
                    {rowActionsCell}
                    {cells}
                </tr>
            );
        }
    }

    #onCustomSettingsClick() {
        if (!this.openedCustomSettings) {
            this.#openCustomSettings();
        } else {
            this.#closeCustomSettings();
        }
    }

    #openCustomSettings() {
        this.#customizeTopPanelRef.menuVisible = true;
        this.#customizeTopButtonRef.classList.add('toggled');
        this.#kupManager.dynamicPosition.start(
            this.#customizeTopPanelRef as KupDynamicPositionElement
        );
        this.openedCustomSettings = true;
        if (!this.#clickCbCustomPanel) {
            this.#clickCbCustomPanel = {
                cb: () => {
                    this.#closeCustomSettings();
                },
                el: this.#customizeTopPanelRef,
            };
        }
        this.#kupManager.addClickCallback(this.#clickCbCustomPanel, true);
    }

    #closeCustomSettings() {
        this.#customizeTopButtonRef.classList.remove('toggled');
        if (this.#customizeTopPanelRef == null) {
            return;
        }
        this.#customizeTopPanelRef.menuVisible = false;
        this.openedCustomSettings = false;
        this.#kupManager.removeClickCallback(this.#clickCbCustomPanel);
    }

    #renderPaginator(top: boolean) {
        return (
            <div class="paginator-wrapper">
                <div class="paginator-tabs">
                    {this.showLoadMore ||
                    (!this.lazyLoadRows &&
                        this.#rowsLength > this.rowsPerPage) ? (
                        <FPaginator
                            id={top ? 'top-paginator' : 'bottom-paginator'}
                            currentPage={this.currentPage}
                            max={this.#rowsLength}
                            perPage={
                                this.currentRowsPerPage
                                    ? this.currentRowsPerPage
                                    : this.rowsPerPage
                            }
                            maxRowsPerPage={
                                this.#maxRowsPerPage ?? this.#rowsLength
                            }
                            onLoadMore={
                                this.showLoadMore
                                    ? () => {
                                          this.#onLoadMoreClick();
                                      }
                                    : null
                            }
                            onNextPage={() =>
                                this.#handlePageChange(this.currentPage + 1)
                            }
                            onPrevPage={() =>
                                this.#handlePageChange(this.currentPage - 1)
                            }
                            onPageChange={(
                                e: CustomEvent<KupComboboxEventPayload>
                            ) => this.#handlePageChange(e.detail.value)}
                            onRowsChange={(
                                e: CustomEvent<KupComboboxEventPayload>
                            ) => this.#handleRowsPerPageChange(e.detail.value)}
                            showMaxPages={true}
                        />
                    ) : null}
                </div>
            </div>
        );
    }

    renderCustomizePanel() {
        let density: HTMLElement = undefined;
        let fontsize: HTMLElement = undefined;
        let grid: HTMLElement = undefined;
        let transpose: HTMLElement = undefined;
        let totalsMatrix: HTMLElement = undefined;
        if (this.openedCustomSettings) {
            density = this.#renderDensityPanel();
            fontsize = this.#renderFontSizePanel();
            grid = this.#renderGridPanel();
            transpose = this.#renderTransposeSwitch();
            if (this.totals && this.groups.length > 0) {
                totalsMatrix = this.#renderTotalsMatrix();
            }
        }

        return (
            <kup-card
                customStyle="::slotted(kup-switch) { width: max-content !important; } ::slotted(*) { margin: auto !important; } ::slotted(.customize-element) { margin: auto !important; padding: 0 1em 1em 1em !important; width: max-content !important; } ::slotted(.customize-element):nth-child(1) { padding-top: 1em !important; }"
                isMenu={true}
                layoutFamily={KupCardFamily.FREE}
                ref={(el) => {
                    this.#customizeTopPanelRef = el;
                }}
                sizeX="360px"
                sizeY="300px"
            >
                {density}
                {grid}
                {fontsize}
                {transpose}
                <kup-switch
                    class="customize-element"
                    checked={this.dragEnabled}
                    label={this.#kupManager.language.translate(
                        KupLanguageGeneric.DRAG_AND_DROP
                    )}
                    leadingLabel={true}
                    onkup-switch-change={() =>
                        (this.dragEnabled = !this.dragEnabled)
                    }
                ></kup-switch>
                <kup-switch
                    class="customize-element"
                    checked={this.editableData}
                    label={this.#kupManager.language.translate(
                        KupLanguageGeneric.EDITABLE
                    )}
                    leadingLabel={true}
                    onkup-switch-change={() =>
                        (this.editableData = !this.editableData)
                    }
                ></kup-switch>
                <div
                    style={{
                        display: 'grid',
                        'grid-template-columns': 'repeat(2, auto)',
                        width: 'max-content',
                    }}
                >
                    <kup-button
                        title={
                            this.#kupManager.language.translate(
                                KupLanguageGeneric.TOGGLE
                            ) +
                            ' Magic Box ' +
                            '(' +
                            this.#kupManager.language.translate(
                                KupLanguageGeneric.EXPERIMENTAL_FEAT
                            ) +
                            ')'
                        }
                        icon="auto-fix"
                        onkup-button-click={() =>
                            this.#kupManager.toggleMagicBox()
                        }
                    />
                    {this.#kupManager.enableExperimentalFeatures &&
                    this.#kupManager.openAI &&
                    this.#kupManager.openAI.url ? (
                        <kup-button
                            title={
                                this.#kupManager.language.translate(
                                    KupLanguageGeneric.TOGGLE
                                ) +
                                ' ' +
                                this.#kupManager.language.translate(
                                    KupLanguageGeneric.AI_ASSISTANT
                                ) +
                                ' (' +
                                this.#kupManager.language.translate(
                                    KupLanguageGeneric.EXPERIMENTAL_FEAT
                                ) +
                                ')'
                            }
                            icon="smeup-ai"
                            onkup-button-click={() => {
                                this.#kupManager.openAI.show({
                                    context: this.rootElement.tagName,
                                    dataset: this.data,
                                });
                                this.#closeCustomSettings();
                            }}
                        />
                    ) : null}
                </div>
                {totalsMatrix}
            </kup-card>
        );
    }

    #columnRemoveArea(): HTMLDivElement {
        return (
            <div
                class="droparea__remove"
                ref={(el) => (this.#removeDropareaRef = el)}
            >
                <FImage
                    resource="delete"
                    color={`var(${KupThemeColorValues.DANGER})`}
                    sizeX="30px"
                    sizeY="50px"
                />
                <FImage
                    resource="delete-empty"
                    color={`var(${KupThemeColorValues.DANGER})`}
                    sizeX="30px"
                    sizeY="50px"
                />
            </div>
        );
    }

    #columnGroupArea(): HTMLDivElement {
        return (
            <div
                class="droparea__groups"
                ref={(el) => (this.#groupsDropareaRef = el)}
            >
                <FImage
                    resource="bookmark"
                    color={`var(${KupThemeColorValues.TEXT})`}
                    sizeX="30px"
                    sizeY="50px"
                />
                <FImage
                    resource="book"
                    color={`var(${KupThemeColorValues.TEXT})`}
                    sizeX="30px"
                    sizeY="50px"
                />
            </div>
        );
    }

    #hideShowColumnDropArea(show: boolean, th?: HTMLElement) {
        if (show && th && (this.removableColumns || this.showGroups)) {
            this.#dropareaRef.classList.add('droparea--visible');
            this.#kupManager.dynamicPosition.register(
                this.#dropareaRef as KupDynamicPositionElement,
                th,
                10,
                KupDynamicPositionPlacement.TOP
            );
            this.#kupManager.dynamicPosition.start(
                this.#dropareaRef as KupDynamicPositionElement
            );
            this.#dropareaRef.style.marginLeft =
                th.clientWidth / 2 - this.#dropareaRef.clientWidth / 2 + 'px';
        } else {
            this.#dropareaRef.classList.remove('droparea--visible');
            +this.#kupManager.dynamicPosition.stop(
                this.#dropareaRef as KupDynamicPositionElement
            );
        }
    }

    #handleColumnGroup(column2group: KupDataColumn) {
        // Get sorted column current position
        const columnX = this.getVisibleColumns().find(
            (col) =>
                col.name === column2group.name &&
                col.title === column2group.title
        );
        if (columnX) {
            let found: boolean = false;
            for (let i = 0; i < this.groups.length; i++) {
                if (this.groups[i].column == columnX.name) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                this.groups.push({ column: columnX.name, visible: true });
                this.groups = [...this.groups];
                this.refresh();
            }
        }
    }

    #transcodeItem(
        item: string | ShowGrid,
        searchIn: Array<string>,
        returnFrom: Array<string>
    ): string {
        for (let i = 0; i < searchIn.length; i++) {
            const tmpCode = searchIn[i];
            if (tmpCode == item && i < returnFrom.length) {
                return returnFrom[i];
            }
        }
        return item;
    }

    #createListData(
        codes: Array<string>,
        icons: Array<string>,
        selectedCode: string
    ): KupListNode[] {
        const listItems: KupListNode[] = [];
        for (let i = 0; i < codes.length; i++) {
            let value: KupLanguageKey = null;
            switch (codes[i]) {
                //This whole customization panel thingy must be purged, for now -- it's ugly
                case 'big':
                    value = KupLanguageFontsize.BIG;
                    break;
                case 'Col':
                    value = KupLanguageGrid.COLUMN;
                    break;
                case 'Complete':
                    value = KupLanguageGrid.COMPLETE;
                    break;
                case 'extra_dense':
                    value = KupLanguageDensity.EXTRA_DENSE;
                    break;
                case 'dense':
                    value = KupLanguageDensity.DENSE;
                    break;
                case 'medium':
                    value = KupLanguageDensity.MEDIUM;
                    break;
                case 'None':
                    value = KupLanguageGrid.NONE;
                    break;
                case 'small':
                    value = KupLanguageFontsize.SMALL;
                    break;
                case 'Row':
                    value = KupLanguageGrid.ROW;
                    break;
                case 'wide':
                    value = KupLanguageDensity.WIDE;
                    break;
            }
            if (value) {
                listItems[i] = {
                    icon: icons[i],
                    id: codes[i],
                    selected: selectedCode == codes[i],
                    value: this.#kupManager.language.translate(value),
                };
            }
        }
        return listItems;
    }

    #FONTSIZE_CODES: Array<string> = ['small', 'medium', 'big'];
    #FONTSIZE_DECODES: Array<string> = ['Small', 'Medium', 'Big'];
    #FONTSIZE_ICONS: Array<string> = [
        'format-font-size-decrease',
        'format-color-text',
        'format-font-size-increase',
    ];

    #getFontSizeCodeFromDecode(decode: string): string {
        return this.#transcodeItem(
            decode,
            this.#FONTSIZE_DECODES,
            this.#FONTSIZE_CODES
        );
    }

    #renderFontSizePanel() {
        const listItems: KupListNode[] = this.#createListData(
            this.#FONTSIZE_CODES,
            this.#FONTSIZE_ICONS,
            this.fontsize
        );

        const listData = { data: listItems, showIcons: true };

        const textfieldData = {
            trailingIcon: true,
            label: this.#kupManager.language.translate(
                KupLanguageFontsize.LABEL
            ),
            icon: 'arrow_drop_down',
        };
        const data = { 'kup-text-field': textfieldData, 'kup-list': listData };
        let text: KupLanguageFontsize = null;
        switch (this.fontsize) {
            //This whole customization panel thingy must be purged, for now -- it's ugly
            case 'big':
                text = KupLanguageFontsize.BIG;
                break;
            case 'medium':
                text = KupLanguageFontsize.MEDIUM;
                break;
            case 'small':
                text = KupLanguageFontsize.SMALL;
                break;
        }
        return (
            <div class="customize-element fontsize-panel">
                <kup-combobox
                    isSelect={true}
                    data={data}
                    initialValue={this.#kupManager.language.translate(text)}
                    onkup-combobox-itemclick={(
                        e: CustomEvent<KupComboboxEventPayload>
                    ) => {
                        e.stopPropagation();
                        this.fontsize = this.#getFontSizeCodeFromDecode(
                            e.detail.node.id
                        );
                    }}
                />
            </div>
        );
    }

    #DENSITY_DECODES: Array<string> = [
        'Extra_Dense',
        'Dense',
        'Medium',
        'Wide',
    ];
    #DENSITY_ICONS: Array<string> = [
        'format-align-justify',
        'reorder-horizontal',
        'view-sequential',
    ];

    #getDensityCodeFromDecode(decode: string): string {
        return this.#transcodeItem(decode, this.#DENSITY_DECODES, [
            'extra_dense',
            'dense',
            'medium',
            'wide',
        ]);
    }

    #renderDensityPanel() {
        const listItems: KupListNode[] = this.#createListData(
            ['extra_dense', 'dense', 'medium', 'wide'],
            this.#DENSITY_ICONS,
            this.density
        );

        const listData = { data: listItems, showIcons: true };

        const textfieldData = {
            trailingIcon: true,
            label: this.#kupManager.language.translate(
                KupLanguageDensity.LABEL
            ),
            icon: 'arrow_drop_down',
        };
        const data = { 'kup-text-field': textfieldData, 'kup-list': listData };
        let text: KupLanguageDensity = null;
        switch (this.density) {
            //This whole customization panel thingy must be purged, for now -- it's ugly
            case 'extra_dense':
                text = KupLanguageDensity.EXTRA_DENSE;
                break;
            case 'dense':
                text = KupLanguageDensity.DENSE;
                break;
            case 'medium':
                text = KupLanguageDensity.MEDIUM;
                break;
            case 'wide':
                text = KupLanguageDensity.WIDE;
                break;
        }
        return (
            <div class="customize-element density-panel">
                <kup-combobox
                    isSelect={true}
                    initialValue={this.#kupManager.language.translate(text)}
                    selectMode={ItemsDisplayMode.DESCRIPTION}
                    data={data}
                    onkup-combobox-itemclick={(
                        e: CustomEvent<KupComboboxEventPayload>
                    ) => {
                        e.stopPropagation();
                        this.density = this.#getDensityCodeFromDecode(
                            e.detail.node.id
                        ) as FCellPadding;
                    }}
                />
            </div>
        );
    }

    #GRID_CODES: Array<string> = ['Complete', 'Col', 'Row', 'None'];
    #GRID_DECODES: Array<string> = ['Complete', 'Columns', 'Rows', 'None'];
    #GRID_ICONS: Array<string> = [
        'grid_on',
        'view_column',
        'view_headline',
        'grid_off',
    ];

    #getGridCodeFromDecode(decode: string): string {
        return this.#transcodeItem(
            decode,
            this.#GRID_DECODES,
            this.#GRID_CODES
        );
    }

    #renderTransposeSwitch() {
        return (
            <div class="customize-element grid-panel">
                <kup-switch
                    checked={this.transpose}
                    label={this.#kupManager.language.translate(
                        KupLanguageGeneric.TRANSPOSE_DATA
                    )}
                    leadingLabel={true}
                    onkup-switch-change={(e: CustomEvent) => {
                        e.stopPropagation();
                        if (e.detail.value === 'on') {
                            this.transpose = true;
                        } else {
                            this.transpose = false;
                        }
                    }}
                />
            </div>
        );
    }

    #renderTotalsMatrix() {
        return (
            <div class="customize-element grid-panel">
                <kup-button
                    title={
                        this.#kupManager.language.translate(
                            KupLanguageGeneric.TOTALS_TABLE
                        ) +
                        ' (' +
                        this.#kupManager.language.translate(
                            KupLanguageGeneric.EXPERIMENTAL_FEAT
                        ) +
                        ')'
                    }
                    label={this.#kupManager.language.translate(
                        KupLanguageGeneric.TOTALS_TABLE
                    )}
                    icon="exposure"
                    onkup-button-click={() => this.#switchToTotalsMatrix()}
                />
            </div>
        );
    }

    #renderGridPanel() {
        const listItems: KupListNode[] = this.#createListData(
            this.#GRID_CODES,
            this.#GRID_ICONS,
            this.showGrid
        );

        const listData = { data: listItems, showIcons: true };

        const textfieldData = {
            trailingIcon: true,
            label: this.#kupManager.language.translate(KupLanguageGrid.LABEL),
            icon: 'arrow_drop_down',
        };
        const data = { 'kup-text-field': textfieldData, 'kup-list': listData };
        let text: KupLanguageGrid = null;
        switch (this.showGrid) {
            //This whole customization panel thingy must be purged, for now -- it's ugly
            case ShowGrid.COL:
                text = KupLanguageGrid.COLUMN;
                break;
            case ShowGrid.COMPLETE:
                text = KupLanguageGrid.COMPLETE;
                break;
            case ShowGrid.NONE:
                text = KupLanguageGrid.NONE;
                break;
            case ShowGrid.ROW:
                text = KupLanguageGrid.ROW;
                break;
        }
        return (
            <div class="customize-element grid-panel">
                <kup-combobox
                    isSelect={true}
                    initialValue={this.#kupManager.language.translate(text)}
                    data={data}
                    onkup-combobox-itemclick={(e: CustomEvent) => {
                        e.stopPropagation();
                        const grid: any = this.#getGridCodeFromDecode(
                            e.detail.value
                        );
                        this.showGrid = grid;
                    }}
                />
            </div>
        );
    }

    #renderCommandButton(commandObj: KupDataCommand, styling: FButtonStyling) {
        return (
            <kup-button
                styling={styling}
                onKup-button-click={() => this.#handleUpdateClick(commandObj)}
                icon={commandObj.icon}
                placeholderIcon={commandObj.placeholderIcon}
                label={commandObj.value}
            />
        );
    }

    #handleChipsContextMenu(chipColumnName: string, e) {
        e.preventDefault();

        this.openColumnMenu(
            chipColumnName,
            `.chip[data-value="${chipColumnName}"]`
        );
    }

    #renderCommandDropDownButton(
        commandObj: KupDataCommand,
        styling: FButtonStyling
    ) {
        const data = {
            'kup-list': {
                showIcons: true,
                data: commandObj.children.map((c) => {
                    return {
                        ...c,
                        data: {
                            label: c.value,
                            ...c.data,
                        },
                        id: c.obj.k,
                    };
                }),
            },
        };
        return (
            <kup-dropdown-button
                {...commandObj.data}
                styling={styling}
                sizing={KupComponentSizing.MEDIUM}
                label={commandObj.value}
                data={data}
                onkup-dropdownbutton-itemclick={(
                    e: CustomEvent<KupDropdownButtonEventPayload>
                ) => {
                    this.#handleUpdateClick(e.detail.node);
                }}
            ></kup-dropdown-button>
        );
    }

    #renderUpdateButtons() {
        const styling: FButtonStyling = FButtonStyling.FLAT;

        const createRowWithInputFields = (): KupDataRow => {
            let row: KupDataRow = { cells: {} };
            this.#originalDataLoaded?.columns.forEach((c) => {
                (row.cells[c.name] as Omit<KupDataCell, 'value'>) = {
                    shape: c.shape ?? FCellShapes.INPUT_FIELD,
                    obj: { ...c.obj },
                    isEditable: true,
                };
            });
            return row;
        };

        const addRowHandler = async () => {
            let newRow: KupDataRow;
            const selectedRows = await this.getSelectedRows();
            if (selectedRows.length > 0) {
                newRow = JSON.parse(JSON.stringify(selectedRows[0]));
            } else if (this.#originalDataLoaded?.rows?.length > 0) {
                newRow = JSON.parse(
                    JSON.stringify(this.#originalDataLoaded.rows[0])
                );
            } else {
                newRow = createRowWithInputFields();
            }
            Object.values(newRow.cells).forEach((cell) => {
                if (selectedRows.length == 0) {
                    cell.value = '';
                }
            });
            newRow.id = (
                this.#originalDataLoadedMaxId + ++this.#insertCount
            ).toString();

            this.#insertedRowIds.push(newRow.id);
            this.insertNewRow(newRow, true);
        };

        const deleteRowHandler = async () => {
            const ids: string[] = (await this.getSelectedRows()).map(
                (row) => row.id
            );
            this.deleteRows(ids);
        };

        const addConfirmButton = () => {
            if (this.hiddenSubmitButton) {
                return;
            }
            commandButtons.push(
                <kup-button
                    styling={styling}
                    icon="check"
                    onKup-button-click={() => {
                        this.#handleUpdateClick();
                    }}
                    label={this.#kupManager.language.translate(
                        KupLanguageGeneric.CONFIRM
                    )}
                />
            );
        };

        const addCommands = () => {
            this.data?.setup?.commands?.forEach((commandObj) => {
                commandButtons.push(
                    commandObj?.children && commandObj?.children.length > 0
                        ? this.#renderCommandDropDownButton(commandObj, styling)
                        : this.#renderCommandButton(commandObj, styling)
                );
            });
        };

        const addOperations = () => {
            const operationList = this.data?.setup?.operations;
            const operations = {
                insert: {
                    enabled: operationList?.insert,
                    icon: 'add',
                    title: this.#kupManager.language.translate(
                        KupLanguageGeneric.ROW_ADD
                    ),
                    onClickHandler: () => addRowHandler(),
                },
                delete: {
                    enabled: operationList?.delete,
                    icon: 'minus',
                    title: this.#kupManager.language.translate(
                        KupLanguageGeneric.ROW_DELETE
                    ),
                    onClickHandler: () => deleteRowHandler(),
                },
            };

            Object.values(operations)
                .filter((op) => op.enabled)
                .forEach((op) => {
                    commandButtons.push(
                        <kup-button
                            styling={styling}
                            icon={op.icon}
                            title={op.title}
                            onKup-button-click={op.onClickHandler}
                        />
                    );
                });
        };

        let commandButtons = [];

        addConfirmButton();
        addCommands();
        addOperations();
        return (
            !!commandButtons.length && (
                <div class="commands">{commandButtons}</div>
            )
        );
    }

    calculateScrollToRowOffset(): number {
        let maxNewlines = 0;

        this.data.columns.forEach((column) => {
            const newlineCount = (column.title.match(/\n/g) || []).length;
            maxNewlines = Math.max(maxNewlines, newlineCount);
        });

        return maxNewlines + 1;
    }

    componentShouldUpdate(_newValue: any, _oldValue: any, propName: string) {
        switch (propName) {
            case 'columnMenuAnchor':
                return false;

            default:
                return true;
        }
    }

    render() {
        this.#kupManager.perfMonitoring.mark('componentRender');
        this.#thRefs = [];
        this.#rowsRefs = [];
        this.#renderedRows = [];
        let elStyle = undefined;
        let actionWrapperWidth = undefined;
        this.#sizedColumns = this.#getSizedColumns();

        let rows = null;
        if (this.#paginatedRowsLength === 0) {
            rows = (
                <tr ref={(el: HTMLElement) => this.#rowsRefs.push(el)}>
                    <td colSpan={this.#calculateColspan()}>
                        {this.emptyDataLabel}
                    </td>
                </tr>
            );
        } else {
            rows = [];
            this.#paginatedRows
                // We must pass the previous element of the array to check if we must hide or display the value of the cell
                // When the column has specified the parameter hideValuesRepetitions
                .map((row, rowIndex, currentArray) =>
                    this.#renderRow(
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
        const header = this.#renderHeader();
        const stickyHeader = this.#renderStickyHeader();

        let paginatorTop = undefined;
        let paginatorBottom = undefined;
        if (
            this.showPaginator &&
            ((!this.lazyLoadRows && this.#rowsLength > this.rowsPerPage) ||
                this.showCustomization ||
                this.showLoadMore)
        ) {
            if (
                PaginatorPos.TOP === this.paginatorPos ||
                PaginatorPos.BOTH === this.paginatorPos
            ) {
                paginatorTop = this.#renderPaginator(true);
            }

            if (
                PaginatorPos.BOTTOM === this.paginatorPos ||
                PaginatorPos.BOTH === this.paginatorPos
            ) {
                paginatorBottom = this.#renderPaginator(false);
            }
        }

        let groupChips = null;
        if (this.#isGrouping()) {
            const chipsData = [];
            for (let index = 0; index < this.groups.length; index++) {
                const group = this.groups[index];
                const column = getColumnByName(this.getColumns(), group.column);
                if (column) {
                    chipsData.push({
                        value: column.title,
                        id: column.name,
                        checked: true,
                    });
                } else {
                    this.#kupManager.debug.logMessage(
                        this,
                        'Grouped for a non-existent column! (' +
                            group.column +
                            ')',
                        KupDebugCategory.WARNING
                    );
                }
            }
            if (chipsData.length > 0) {
                const props: FChipsProps = {
                    data: chipsData,
                    id: 'group-chips',
                    onIconClick: [],
                    onClearFilterClick: [],
                    type: FChipType.INPUT,
                    onContextMenu: [],
                    hasFilter: [],
                };
                for (let i = 0; i < chipsData.length; i++) {
                    const column = getColumnByName(
                        this.getColumns(),
                        chipsData[i].id
                    );
                    const hasFilterColumn =
                        this.#filtersColumnMenuInstance.hasFiltersForColumn(
                            this.filters,
                            column
                        );
                    props.hasFilter.push(hasFilterColumn);
                    this.#filtersColumnMenuInstance.hasFiltersForColumn(
                        this.filters,
                        column
                    );
                    props.onClearFilterClick.push(() =>
                        this.#onRemoveFilter(column)
                    );

                    props.onIconClick.push(() => this.#removeGroup(i));
                    props.onContextMenu.push((chipArg, e) => {
                        this.#handleChipsContextMenu(chipArg.id, e);
                    });
                }
                groupChips = <FChip {...props}></FChip>;
            }
        }

        const tableClass = {
            // Class to specify whether the table should have width: auto or not.
            // Mandatory to check with custom column size.
            'auto-width': this.#tableHasAutoWidth(),
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

            'custom-size': !!this.tableHeight || !!this.tableWidth,

            'border-top': !this.showHeader,
        };

        const wrapClass = tableClass['auto-width'] ? 'auto-width' : '';

        tableClass[`density-${this.density}`] = true;
        tableClass[`fontsize-${this.fontsize}`] = true;

        if (this.tableHeight && this.tableHeight !== '100%') {
            elStyle = {
                ...elStyle,
                maxHeight: this.tableHeight,
                ...(!this.isDashboardMode ? { overflow: 'auto' } : {}),
            };
        }

        if (this.tableWidth && this.tableHeight !== '100%') {
            elStyle = {
                ...elStyle,
                width: this.tableWidth,
                ...(!this.isDashboardMode ? { overflow: 'auto' } : {}),
            };
            actionWrapperWidth = {
                ...actionWrapperWidth,
                width: this.tableWidth,
                ...(!this.isDashboardMode ? { overflow: 'auto' } : {}),
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
                        (this.#stickyTheadRef = el as any)
                    }
                >
                    <thead-sticky>
                        <tr-sticky>{stickyHeader}</tr-sticky>
                    </thead-sticky>
                </sticky-header>
            );
        }

        let belowClass = 'below-wrapper';
        if (!!this.tableHeight || !!this.tableWidth) {
            belowClass += ' custom-size';
        }

        const autoselectOnAction = (e: CustomEvent<FCellEventPayload>) => {
            if (!this.updatableData) {
                if (e && e.detail && e.detail.row) {
                    const row = e.detail.row;
                    if (!this.selectedRows.includes(row)) {
                        if (
                            this.selection ===
                                SelectionMode.MULTIPLE_CHECKBOX ||
                            this.selection === SelectionMode.MULTIPLE
                        ) {
                            this.selectedRows.push(row);
                        } else {
                            this.selectedRows = [row];
                        }
                    }
                    if (e.type === 'kup-cell-input') {
                        this.refresh();
                    }
                }
            }

            if (
                this.updatableData &&
                (e.detail.cell?.shape === FCellShapes.CHECKBOX ||
                    e.detail.cell?.shape === FCellShapes.SWITCH)
            ) {
                if (this.updateOnClick) {
                    this.#handleUpdateClick(e.detail.cell);
                } else if (e.detail.cell?.inputSettings?.checkValueOnExit) {
                    this.kupCellCheck.emit({
                        comp: this,
                        id: this.rootElement.id,
                        originalData: this.#originalDataLoaded,
                        updatedData: getDiffData(
                            this.#originalDataLoaded,
                            this.data,
                            true
                        ),
                        cell: e.detail.cell,
                    });
                }
            }
        };

        const useGlobalFilter: boolean =
            !this.legacyLook &&
            (this.globalFilter ||
                this.getRows().length > this.#DEFAULT_ROWS_FOR_GLOBAL_FILTER);

        const compCreated = (
            <Host
                onKup-drop={(e: CustomEvent<KupDropEventPayload>) => {
                    this.kupDataTableDrop.emit(e.detail);
                }}
                onKup-cell-input={(e: CustomEvent<FCellEventPayload>) => {
                    autoselectOnAction(e);
                    this.kupDataTableCellInput.emit(e.detail);
                }}
                onKup-cell-update={autoselectOnAction}
                onKup-cell-blur={this.#onBlurHandler}
                onKup-cell-click={(e: CustomEvent<FCellEventPayload>) => {
                    this.kupDataTableCellClick.emit(e.detail);
                }}
                onKup-cell-iconclick={(e: CustomEvent<FCellEventPayload>) => {
                    this.kupDataTableCellIconClick.emit(e.detail);
                }}
                onKup-objectfield-searchpayload={(
                    e: CustomEvent<FObjectFieldEventPayload>
                ) => {
                    this.kupDataTableObjectFieldSearchPayload.emit(e.detail);
                }}
                onKup-objectfield-opensearchmenu={(
                    e: CustomEvent<FObjectFieldEventPayload>
                ) => {
                    this.kupDataTableObjectFieldOpenSearchMenu.emit(e.detail);
                }}
                onKup-objectfield-selectedmenuitem={(
                    e: CustomEvent<FObjectFieldEventPayload>
                ) => {
                    this.kupDataTableObjectFieldSelectedMenuItem.emit(e.detail);
                }}
            >
                <style>
                    {this.#kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                {this.updatableData ? this.#renderUpdateButtons() : null}
                <div id={componentWrapperId} class={wrapClass}>
                    <div class="group-wrapper">{groupChips}</div>
                    <div class="actions-wrapper" style={actionWrapperWidth}>
                        {useGlobalFilter ? (
                            <div id="global-filter">
                                <FTextField
                                    fullWidth={true}
                                    icon={KupThemeIconValues.SEARCH}
                                    label={this.#kupManager.language.translate(
                                        KupLanguageSearch.SEARCH
                                    )}
                                    sizing={KupComponentSizing.EXTRA_SMALL}
                                    value={this.globalFilterValue}
                                    onInput={(event) => {
                                        const t: EventTarget = event.target;
                                        window.clearTimeout(
                                            this.#globalFilterTimeout
                                        );
                                        this.#globalFilterTimeout =
                                            window.setTimeout(
                                                () =>
                                                    this.#onGlobalFilterChange(
                                                        t
                                                    ),
                                                600,
                                                t
                                            );
                                    }}
                                />
                            </div>
                        ) : null}
                        {paginatorTop && (
                            <div class="above-wrapper paginator-top">
                                {paginatorTop}
                            </div>
                        )}
                        {this.insertMode !== '' &&
                        this.selectedRows.length > 0 ? (
                            <FButton
                                icon="save"
                                onClick={() => {
                                    this.kupSave.emit({
                                        comp: this,
                                        id: this.rootElement.id,
                                        selectedRows: this.selectedRows,
                                    });
                                }}
                                styling={FButtonStyling.FLAT}
                                sizing={KupComponentSizing.MEDIUM}
                                title="Save"
                                wrapperClass="save-button"
                            ></FButton>
                        ) : null}
                        {this.showDeleteButton &&
                        this.selectedRows.length > 0 ? (
                            <FButton
                                icon="delete"
                                onClick={() => {
                                    this.#rowsDelete();
                                }}
                                styling={FButtonStyling.FLAT}
                                sizing={KupComponentSizing.MEDIUM}
                                title="Delete selected rows"
                                wrapperClass="delete-button"
                            ></FButton>
                        ) : null}
                        {this.showHistoryButton ? (
                            <FButton
                                icon="history"
                                onClick={() => {
                                    this.kupHistory.emit({
                                        comp: this,
                                        id: this.rootElement.id,
                                        selectedRows: this.selectedRows,
                                    });
                                }}
                                styling={FButtonStyling.FLAT}
                                sizing={KupComponentSizing.MEDIUM}
                                title="History"
                                wrapperClass="history-button"
                            ></FButton>
                        ) : null}
                        {this.insertMode !== '' ? (
                            <FButton
                                label="Crea nuovo"
                                // icon="plus"
                                onClick={async () => {
                                    if (this.insertMode === 'form') {
                                        this.#rowInsertForm();
                                    } else {
                                        this.#insertCount++;
                                        const cells: KupDataRowCells = {};
                                        for (
                                            let index = 0;
                                            index < this.data.columns.length;
                                            index++
                                        ) {
                                            const column =
                                                this.data.columns[index];
                                            cells[column.name] = {
                                                data: column.cellData
                                                    ? JSON.parse(
                                                          JSON.stringify(
                                                              column.cellData
                                                          )
                                                      )
                                                    : undefined,
                                                slotData: column.cellSlotData
                                                    ? JSON.parse(
                                                          JSON.stringify(
                                                              column.cellSlotData
                                                          )
                                                      )
                                                    : undefined,
                                                isEditable:
                                                    column.isKey ||
                                                    column.isEditable,
                                                obj: { ...column.obj },
                                                shape: column.shape,
                                                value: '',
                                            };
                                        }
                                        const row = {
                                            cells,
                                            id:
                                                this.#INSERT_PREFIX +
                                                this.#insertCount,
                                        };
                                        this.data.rows.unshift(row);
                                        await this.refresh(true);
                                    }
                                }}
                                sizing={KupComponentSizing.MEDIUM}
                                styling={FButtonStyling.RAISED}
                                title="Insert row"
                                wrapperClass="insert-button"
                            ></FButton>
                        ) : null}
                    </div>
                    <div
                        class="droparea"
                        ref={(el) => (this.#dropareaRef = el)}
                    >
                        {this.showGroups ? this.#columnGroupArea() : null}
                        {this.removableColumns
                            ? this.#columnRemoveArea()
                            : null}
                    </div>
                    <div
                        style={elStyle}
                        class={belowClass}
                        ref={(el: HTMLElement) =>
                            (this.#tableAreaRef = el as KupScrollOnHoverElement)
                        }
                    >
                        {this.showCustomization
                            ? [
                                  <div
                                      class="settings-trigger"
                                      onClick={() => {
                                          this.#onCustomSettingsClick();
                                      }}
                                      ref={(el) => {
                                          this.#customizeTopButtonRef =
                                              el as any;
                                      }}
                                  >
                                      <FImage
                                          color={`var(${KupThemeColorValues.TITLE})`}
                                          resource="settings"
                                          sizeX="10px"
                                      />
                                  </div>,
                                  this.renderCustomizePanel(),
                              ]
                            : null}
                        <table
                            class={tableClass}
                            ref={(el: HTMLTableElement) =>
                                (this.#tableRef = el)
                            }
                            onKeyDown={(e) => this.#onKupKeyDown(e)}
                            onMouseLeave={(ev) => {
                                ev.stopPropagation();
                            }}
                            onPointerDown={(e) => {
                                this.#lastPointerDetails =
                                    this.#getEventDetails(
                                        this.#kupManager.getEventPath(
                                            e.target,
                                            this.rootElement
                                        ),
                                        e as unknown as Interact.PointerEvent
                                    );
                            }}
                            onPointerUp={(e) => {
                                this.#lastPointerDetails =
                                    this.#getEventDetails(
                                        this.#kupManager.getEventPath(
                                            e.target,
                                            this.rootElement
                                        ),
                                        e as unknown as Interact.PointerEvent
                                    );
                            }}
                            onContextMenu={(e: MouseEvent) => {
                                e.preventDefault();
                            }}
                        >
                            <thead
                                hidden={!this.showHeader}
                                ref={(el) => (this.#theadRef = el as any)}
                            >
                                <tr>{header}</tr>
                            </thead>
                            <tbody>{rows}</tbody>
                            {this.showFooter && this.renderFooter()}
                        </table>
                        {stickyEl}
                    </div>
                    {paginatorBottom}
                </div>
            </Host>
        );
        this.#kupManager.perfMonitoring.measure(
            'componentRender',
            'kup-data-table'
        );
        return compCreated;
    }

    disconnectedCallback() {
        this.#kupManager.interact.unregister(
            this.#interactableDrag.concat(
                this.#interactableDrop,
                this.#interactableResize,
                this.#interactableTouch
            )
        );
        this.#kupManager.language.unregister(this);
        this.#kupManager.theme.unregister(this);
        this.#kupManager.toolbar.unregister([this.rootElement]);
        if (this.#customizeTopPanelRef)
            this.#kupManager.dynamicPosition.unregister([
                this.#customizeTopPanelRef,
            ]);
        const dynamicPositionElements: NodeListOf<KupDynamicPositionElement> =
            this.rootElement.shadowRoot.querySelectorAll(
                '[' + kupDynamicPositionAttribute + ']'
            );
        if (dynamicPositionElements.length > 0) {
            this.#kupManager.dynamicPosition.unregister(
                Array.prototype.slice.call(dynamicPositionElements)
            );
        }
        if (this.#customizeTopPanelRef) {
            this.#customizeTopPanelRef.remove();
        }
        if (this.#columnMenuCard) {
            this.#columnMenuCard.remove();
        }
        if (this.scrollOnHover) {
            this.#kupManager.scrollOnHover.unregister(this.#tableAreaRef);
        }
        this.#kupManager.resize.unobserve(this.rootElement);
        this.kupDidUnload.emit({ comp: this, id: this.rootElement.id });
    }
}
