import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    h,
    Host,
    Method,
    Prop,
    State,
    VNode,
    Watch,
} from '@stencil/core';
import type { PointerEvent } from '@interactjs/types/index';
import {
    SortObject,
    SortMode,
} from '../kup-data-table/kup-data-table-declarations';
import {
    KupBoxRow,
    KupBoxLayout,
    Section,
    CollapsedSectionsState,
    BoxObject,
    KupBoxKanban,
    KupBoxProps,
    KupBoxClickEventPayload,
    KupBoxSelectedEventPayload,
    KupBoxAutoSelectEventPayload,
    KupBoxRowActionClickEventPayload,
    KupBoxContextMenuEventPayload,
    KupBoxData,
    KupBoxEventHandlerDetails,
} from './kup-box-declarations';
import { getColumnByName } from '../../utils/cell-utils';
import {
    filterRows,
    sortRows,
    paginateRows,
} from '../kup-data-table/kup-data-table-helper';
import { KupCardData } from '../kup-card/kup-card-declarations';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { KupBoxState } from './kup-box-state';
import { KupStore } from '../kup-state/kup-store';
import { getProps, identify, setProps } from '../../utils/utils';
import {
    GenericObject,
    KupComponent,
    KupEventPayload,
} from '../../types/GenericTypes';
import { FImage } from '../../f-components/f-image/f-image';
import { FChip } from '../../f-components/f-chip/f-chip';
import { FChipsProps } from '../../f-components/f-chip/f-chip-declarations';
import { KupScrollOnHoverElement } from '../../managers/kup-scroll-on-hover/kup-scroll-on-hover-declarations';
import { KupDebugCategory } from '../../managers/kup-debug/kup-debug-declarations';
import {
    KupLanguageGeneric,
    KupLanguageSearch,
} from '../../managers/kup-language/kup-language-declarations';
import { componentWrapperId } from '../../variables/GenericVariables';
import { KupThemeIconValues } from '../../managers/kup-theme/kup-theme-declarations';
import {
    KupDragDataTransferCallback,
    KupDragEffect,
    kupDraggableCellAttr,
    KupDropDataTransferCallback,
    KupDropEventTypes,
    KupPointerEventTypes,
} from '../../managers/kup-interact/kup-interact-declarations';
import { FCell } from '../../f-components/f-cell/f-cell';
import { FCellProps } from '../../f-components/f-cell/f-cell-declarations';
import { FPaginator } from '../../f-components/f-paginator/f-paginator';
import { KupComboboxEventPayload } from '../kup-combobox/kup-combobox-declarations';
import { FPaginatorMode } from '../../f-components/f-paginator/f-paginator-declarations';
import {
    pageChange,
    rowsPerPageChange,
} from '../../f-components/f-paginator/f-paginator-utils';
import {
    KupDataCell,
    KupDataColumn,
    KupDataRowAction,
} from '../../managers/kup-data/kup-data-declarations';
import { FTextFieldMDC } from '../../f-components/f-text-field/f-text-field-mdc';

@Component({
    tag: 'kup-box',
    styleUrl: 'kup-box.scss',
    shadow: true,
})
export class KupBox {
    /**
     * References the root HTML element of the component (<kup-box>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    @State()
    private collapsedSection: CollapsedSectionsState = {};

    @State()
    private selectedRows: Array<KupBoxRow> = [];

    /**
     * Row that has the row object menu open
     */
    @State()
    private rowActionMenuOpened: KupBoxRow;

    @State()
    private currentPage = 1;

    @State()
    private currentRowsPerPage = 10;

    state: KupBoxState = new KupBoxState();

    initWithPersistedState(): void {
        if (this.store && this.stateId) {
            const state = this.store.getState(this.stateId);
            if (state != null) {
                this.kupManager.debug.logMessage(
                    this,
                    'Initialize with state for stateId ' +
                        this.stateId +
                        ': ' +
                        state
                );
                // *** PROPS ***
                this.sortBy = this.state.sortBy;
                this.globalFilterValue = this.state.globalFilterValue;
                this.selectedRowsState = this.state.selectedRowsState;
                this.pageSelected = this.state.pageSelected;
                this.rowsPerPage = this.state.rowsPerPage;
            }
        }
    }

    persistState(): void {
        if (this.store && this.stateId) {
            let somethingChanged = false;
            if (
                !this.kupManager.objects.deepEqual(
                    this.state.sortBy,
                    this.sortBy
                )
            ) {
                this.state.sortBy = this.sortBy;
                somethingChanged = true;
            }

            if (
                !this.kupManager.objects.deepEqual(
                    this.state.globalFilterValue,
                    this.globalFilterValue
                )
            ) {
                this.state.globalFilterValue = this.globalFilterValue;
                somethingChanged = true;
            }

            if (
                !this.kupManager.objects.deepEqual(
                    this.state.pageSelected,
                    this.currentPage
                )
            ) {
                this.state.pageSelected = this.currentPage;
                somethingChanged = true;
            }

            if (
                !this.kupManager.objects.deepEqual(
                    this.state.rowsPerPage,
                    this.currentRowsPerPage
                )
            ) {
                this.state.rowsPerPage = this.currentRowsPerPage;
                somethingChanged = true;
            }

            const selectedRowsState = this.selectedRows.reduce(
                (accumulator, row, currentIndex) => {
                    const prefix = currentIndex > 0 ? ';' : '';
                    return accumulator + prefix + row.id;
                },
                ''
            );

            if (
                !this.kupManager.objects.deepEqual(
                    this.state.selectedRowsState,
                    selectedRowsState
                )
            ) {
                this.state.selectedRowsState = selectedRowsState;
                somethingChanged = true;
            }

            if (!this.state.load) {
                this.state.load = true;
                return;
            }

            if (somethingChanged) {
                this.kupManager.debug.logMessage(
                    this,
                    'Persisting state for stateId ' +
                        this.stateId +
                        ': ' +
                        this.state
                );
                this.store.persistState(this.stateId, this.state);
            }
        }
    }

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Data of the card linked to the box when the latter's layout must be a premade template.
     * @default null
     */
    @Prop() cardData: GenericObject = null;
    /**
     * Number of columns
     * @default 1
     */
    @Prop() columns: number = 1;
    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * Actual data of the box.
     * @default null
     */
    @Prop() data: KupBoxData = null;
    /**
     * Enable dragging
     * @default false
     */
    @Prop() dragEnabled: boolean = false;
    /**
     * Enable dropping
     * @default false
     */
    @Prop() dropEnabled: boolean = false;
    /**
     * Drop can be done in section
     * @default false
     */
    @Prop() dropOnSection: boolean = false;
    /**
     * When set to true, editable cells will be rendered using input components.
     * @default false
     */
    @Prop() editableData: boolean = false;
    /**
     * If enabled, a button to load / display the row actions
     * will be displayed on the right of every box
     * @default false
     */
    @Prop() enableRowActions: boolean = false;
    /**
     * When set to true it activates the global filter.
     * @default false
     */
    @Prop() globalFilter: boolean = false;
    /**
     * The value of the global filter.
     * @default ""
     */
    @Prop({ reflect: true, mutable: true }) globalFilterValue = '';
    /**
     * Displays the boxlist as a Kanban.
     * @default null
     */
    @Prop() kanban: KupBoxKanban = null;
    /**
     * How the field will be displayed. If not present, a default one will be created.
     * @default undefined
     */
    @Prop() layout: KupBoxLayout;
    /**
     * Enable multi selection
     * @default false
     */
    @Prop() multiSelection: boolean = false;
    /**
     * Current page number
     * @default 1
     */
    @Prop() pageSelected: number = 1;
    /**
     * Number of boxes per page
     * @default 10
     */
    @Prop() pageSize: number = 10;
    /**
     * Enables pagination
     * @default false
     */
    @Prop() pagination: boolean = false;
    /**
     * Number of current rows per page
     * @default undefined
     */
    @Prop() rowsPerPage: number;
    /**
     * Activates the scroll on hover function.
     * @default false
     */
    @Prop() scrollOnHover: boolean = false;
    /**
     * Automatically selects the box at the specified index
     * @default undefined
     */
    @Prop() selectBox: number;
    /**
     * Multiple selection
     * @default undefined
     */
    @Prop({ mutable: true }) selectedRowsState: string;
    /**
     * If enabled, highlights the selected box/boxes
     * @default true
     */
    @Prop() showSelection: boolean = true;
    /**
     * If sorting is enabled, specifies which column to sort
     * @default undefined
     */
    @Prop({ mutable: true }) sortBy: string;
    /**
     * Enable sorting
     * @default false
     */
    @Prop() sortEnabled: boolean = false;
    @Prop() stateId: string = '';
    @Prop() store: KupStore;
    /**
     * Disable swipe
     * @default false
     */
    @Prop() swipeDisabled: boolean = false;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();
    private boxLayout: KupBoxLayout;
    private visibleColumns: KupDataColumn[] = [];
    private rows: KupBoxRow[] = [];
    private filteredRows: KupBoxRow[] = [];
    private globalFilterTimeout: number;
    private boxContainer: KupScrollOnHoverElement;
    private sectionRef: HTMLElement = null;
    private rowsRefs: HTMLElement[] = [];
    private hold: boolean = false;
    private interactableDrag: HTMLElement[] = [];
    private interactableDrop: HTMLElement[] = [];
    private interactableTouch: HTMLElement[] = [];

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Triggered when a box is clicked
     */
    @Event({
        eventName: 'kup-box-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBoxClick: EventEmitter<KupBoxClickEventPayload>;

    /**
     * Triggered when the multi selection checkbox changes value
     */
    @Event({
        eventName: 'kup-box-selected',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBoxSelected: EventEmitter<KupBoxSelectedEventPayload>;

    /**
     * Triggered when a box is auto selected via selectBox prop
     */
    @Event({
        eventName: 'kup-box-autoselect',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupAutoBoxSelect: EventEmitter<KupBoxAutoSelectEventPayload>;

    /**
     * When the row menu action icon is click
     */
    @Event({
        eventName: 'kup-box-rowactionmenuclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupRowActionMenuClick: EventEmitter<KupBoxAutoSelectEventPayload>;

    /**
     * When the row menu action icon is click
     */
    @Event({
        eventName: 'kup-box-rowactionclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupRowActionClick: EventEmitter<KupBoxRowActionClickEventPayload>;

    @Event({
        eventName: 'kup-box-didload',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDidLoad: EventEmitter<KupEventPayload>;

    /**
     * Triggered when stop propagation event
     */
    @Event({
        eventName: 'kup-box-didunload',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDidUnload: EventEmitter<KupEventPayload>;
    /**
     * Generic right click event on box.
     */
    @Event({
        eventName: 'kup-box-contextmenu',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBoxContextMenu: EventEmitter<KupBoxContextMenuEventPayload>;

    /*-------------------------------------------------*/
    /*                  W a t c h e r s                */
    /*-------------------------------------------------*/

    @Watch('pageSize')
    rowsPerPageHandler(newValue: number) {
        this.currentRowsPerPage = newValue;
    }

    @Watch('globalFilterValue')
    @Watch('sortBy')
    @Watch('pagination')
    @Watch('pageSize')
    @Watch('currentPage')
    @Watch('currentRowsPerPage')
    recalculateRows() {
        this.initRows();
    }

    @Watch('data')
    onDataChanged() {
        identify(this.getRows());
        this.initVisibleColumns();
        this.initRows();
        this.checkLayout();
    }

    @Watch('layout')
    onLayoutChanged() {
        this.checkLayout();
    }

    @Watch('selectBox')
    onSelectBoxChanged() {
        this.handleAutomaticBoxSelection();
    }

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KupBoxProps, descriptions);
    }
    @Method()
    async loadRowActions(row: KupBoxRow, actions: KupDataRowAction[]) {
        row.actions = actions;

        // show menu
        this.rowActionMenuOpened = row;
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupBoxProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    private getColumns(): Array<KupDataColumn> {
        return this.data && this.data.columns
            ? this.data.columns
            : [{ title: '', name: '', size: undefined }];
    }

    private initVisibleColumns(): void {
        this.visibleColumns = this.getColumns().filter((column) => {
            if (column.hasOwnProperty('visible')) {
                return column.visible;
            }

            return true;
        });
    }

    private getRows(): KupBoxRow[] {
        return this.data && this.data.rows ? this.data.rows : [];
    }

    private initRows(): void {
        this.filteredRows = this.getRows();

        if (this.globalFilter && this.globalFilterValue) {
            // filtering rows
            this.filteredRows = filterRows(
                this.filteredRows,
                null,
                this.globalFilterValue,
                this.visibleColumns
            );
        }

        this.rows = this.sortRows(this.filteredRows);

        if (this.pagination) {
            this.rows = paginateRows(
                this.rows,
                this.currentPage,
                this.currentRowsPerPage,
                false
            );
        }
    }

    private sortRows(rows: KupBoxRow[]): KupBoxRow[] {
        let sortedRows = rows;

        if (this.sortBy) {
            // create 'fake' sortObject
            const sortObject: SortObject = {
                column: this.sortBy,
                sortMode: SortMode.A,
            };

            sortedRows = sortRows(sortedRows, [sortObject]);
        }

        return sortedRows;
    }

    private checkScrollOnHover() {
        if (!this.kupManager.scrollOnHover.isRegistered(this.boxContainer)) {
            if (this.scrollOnHover) {
                this.kupManager.scrollOnHover.register(this.boxContainer);
            }
        } else {
            if (!this.scrollOnHover) {
                this.kupManager.scrollOnHover.unregister(this.boxContainer);
            }
        }
    }

    private checkLayout() {
        // check if there is a layout.
        // if not, create a default layout
        if (this.layout) {
            this.boxLayout = this.layout;
            return;
        }

        // only one section, containing all visible fields
        const section: Section = {
            horizontal: false,
            sections: [],
        };

        // adding box objects to section
        const visibleColumns = this.visibleColumns;
        let size = visibleColumns.length;
        let content = [];

        let cnt = 0;

        while (size-- > 0) {
            content.push({
                column: visibleColumns[cnt++].name,
            });
        }

        section.content = content;

        // creating a new layout
        this.boxLayout = {
            sections: [section],
        };
    }

    private onSortChange(e: CustomEvent) {
        let column = getColumnByName(this.visibleColumns, e.detail.value);
        this.sortBy = column.name;
    }

    private onGlobalFilterChange({ detail }) {
        let value = '';
        if (detail && detail.value) {
            value = detail.value;
        }
        this.globalFilterValue = value;
    }

    private isSectionExpanded(row: KupBoxRow, section: Section): boolean {
        if (!row.id || !section.id) {
            return false;
        }

        return (
            this.collapsedSection[section.id] &&
            this.collapsedSection[section.id][row.id]
        );
    }

    private handleAutomaticBoxSelection() {
        if (
            this.selectBox &&
            this.selectBox > 0 &&
            this.selectBox <= this.data.rows.length
        ) {
            this.selectedRows = [];

            for (let boxRow of this.data.rows) {
                if (boxRow.id === (this.selectBox - 1).toString()) {
                    this.selectedRows.push(boxRow);
                    break;
                }
            }
            this.kupAutoBoxSelect.emit({
                comp: this,
                id: this.rootElement.id,
                row: this.selectedRows[0],
            });
        }
    }

    private getEventDetails(
        el: HTMLElement,
        e?: PointerEvent
    ): KupBoxEventHandlerDetails {
        let boxObject = null;
        let cell: KupDataCell = null;
        let row: KupBoxRow = null;
        let column: KupDataColumn = null;
        if (el) {
            boxObject =
                el.closest('.box-object') ||
                el.querySelector('.box-object') ||
                el.closest('.f-cell');
        }
        if (boxObject) {
            if (boxObject.classList.contains('f-cell')) {
                const props = boxObject['kup-get-cell-props']();
                cell = props.cell;
                column = props.column;
                row = props.row;
            } else {
                cell = boxObject['data-cell'];
                row = boxObject['data-row'];
                column = getColumnByName(
                    this.visibleColumns,
                    boxObject.dataset.column
                );
            }
        } else {
        }

        return {
            boxObject: boxObject ? boxObject : null,
            column: column ? column : null,
            cell: cell ? cell : null,
            originalEvent: e,
            row: row ? row : null,
        };
    }

    private contextMenuHandler(e: PointerEvent): KupBoxEventHandlerDetails {
        const details = this.getEventDetails(e.target as HTMLElement, e);
        return details;
    }

    /**
     * Checks if the element is the svg that opens the "row actions menu"
     * @param element the element to check
     */
    private checkIfElementIsActionMenuIcon(element: any) {
        if (element.tagName && element.parentElement) {
            return (
                element.tagName === 'svg' &&
                element.parentElement.classList.contains('row-actions-toggler')
            );
        }

        return false;
    }

    // event listeners
    private onBoxClick({ target }: MouseEvent, row: KupBoxRow) {
        if (!(target instanceof HTMLElement)) {
            return;
        }

        // searching parent
        let element = target;
        let classList = element.classList;

        while (
            !classList.contains('box-object') &&
            !classList.contains('box-section') &&
            !classList.contains('box')
        ) {
            element = element.parentElement;

            if (element === null) {
                break;
            }

            classList = element.classList;
        }

        // evaluating column
        let column = null;
        if (classList.contains('box-object')) {
            column = element.dataset.column;
        }

        this.kupBoxClick.emit({
            comp: this,
            id: this.rootElement.id,
            row,
            column,
        });

        // selecting box
        if (this.multiSelection) {
            // triggering multi selection
            this.onSelectionCheckChange(row);
        } else {
            this.selectedRows = [row];
        }
    }

    private onSelectionCheckChange(row: KupBoxRow) {
        var index = -1;
        for (let i = 0; i < this.selectedRows.length; i++) {
            const select = this.selectedRows[i];
            if (select.id === row.id) {
                index = i;
                break;
            }
        }

        if (index >= 0) {
            // remove row
            this.selectedRows.splice(index, 1);
            this.selectedRows = [...this.selectedRows];
        } else {
            // add row
            this.selectedRows = [...this.selectedRows, row];
        }

        this.kupBoxSelected.emit({
            comp: this,
            id: this.rootElement.id,
            rows: this.selectedRows,
        });
    }

    private toggleSectionExpand(row: KupBoxRow, section: Section) {
        // check if section / row has id
        if (!section.id) {
            // error
            console.error('cannot expand / collapse a section withoun an ID');
            return;
        }

        if (!row.id) {
            // error
            console.error(
                'cannot expand / collapse a section of a row without ad id'
            );
            return;
        }

        // check if section already in collapsedSection
        if (!this.collapsedSection[section.id]) {
            // adding element and row, setting it to expanded
            this.collapsedSection[section.id] = {};
            this.collapsedSection[section.id][row.id] = true;
        } else {
            const s = this.collapsedSection[section.id];

            if (!s[row.id]) {
                s[row.id] = true;
            } else {
                s[row.id] = !s[row.id];
            }
        }

        // triggering rendering
        this.collapsedSection = { ...this.collapsedSection };
    }

    private onRowAction(row: KupBoxRow) {
        if (!row) {
            return;
        }

        if (row === this.rowActionMenuOpened) {
            // closing menu
            this.rowActionMenuOpened = null;
            return;
        }

        if (row.actions) {
            // actions already loaded -> show menu
            this.rowActionMenuOpened = row;
        } else {
            // no actions -> triggering event
            this.kupRowActionMenuClick.emit({
                comp: this,
                id: this.rootElement.id,
                row,
            });
        }
    }

    private onRowActionClick(
        row: KupBoxRow,
        action: KupDataRowAction,
        index: number
    ) {
        this.kupRowActionClick.emit({
            comp: this,
            id: this.rootElement.id,
            row,
            action,
            index,
        });
    }

    /**
     * see onDocumentClick in kup-combo
     */
    private clickFunction(event: UIEvent) {
        try {
            const targets = event.composedPath();

            for (let target of targets) {
                if (this.checkIfElementIsActionMenuIcon(target)) {
                    return;
                }
            }
        } catch (err) {
            if (this.checkIfElementIsActionMenuIcon(event.target)) {
                return;
            }
        }

        this.rowActionMenuOpened = null;
    }

    private handlePageChange(pageNumber: number) {
        const newPage = pageChange(
            pageNumber,
            this.filteredRows.length,
            this.currentRowsPerPage
        );
        if (newPage) {
            this.currentPage = newPage;
        }
    }

    private handleRowsPerPageChange(rowsNumber: number) {
        const newRows = rowsPerPageChange(rowsNumber, this.filteredRows.length);
        if (newRows) {
            this.currentRowsPerPage = newRows;
            this.adjustPaginator();
        }
    }

    private adjustPaginator() {
        const numberOfRows = this.rows.length;

        // check if current page is valid
        const numberOfPages = Math.ceil(numberOfRows / this.currentRowsPerPage);
        if (this.currentPage > numberOfPages) {
            // reset page
            this.currentPage = 1;
        }
    }

    // render methods
    private renderSectionAsCard(row: KupBoxRow) {
        let skipPush: boolean = false;
        const cardData: KupCardData = {
            button: [],
            cell: [],
            columns: [],
            image: [],
            progressbar: [],
            text: [],
        };

        for (let index = 0; index < this.data.columns.length; index++) {
            const column = this.data.columns[index];
            if (column.visible !== false) {
                cardData.cell.push(row.cells[column.name]);
                cardData.columns.push(column);
            }
        }

        //First cycle sets specific binds between cardIDs and cells
        for (const key in row.cells) {
            if (row.cells.hasOwnProperty(key)) {
                const cell = row.cells[key];
                if (cell.cardID !== undefined && cell.obj) {
                    switch (cell.obj.p) {
                        case 'BTN':
                            do {
                                cardData.button.push({});
                            } while (cardData.button.length < cell.cardID);
                            cardData.button[cell.cardID] = {
                                label: cell.value,
                            };
                            break;
                        case 'IMG':
                            do {
                                cardData.image.push({});
                            } while (cardData.image.length < cell.cardID);
                            cardData.image[cell.cardID] = {
                                resource: cell.value,
                            };
                            break;
                        case 'PGB':
                            do {
                                cardData.progressbar.push({});
                            } while (cardData.progressbar.length < cell.cardID);
                            cardData.progressbar[cell.cardID] = {
                                value: cell.value,
                            };
                            break;
                        default:
                            do {
                                cardData.text.push('');
                            } while (cardData.text.length < cell.cardID);
                            cardData.text[cell.cardID] = cell.value;
                            break;
                    }
                }
            }
        }

        //Second cycle sets leftover binds automatically
        for (const key in row.cells) {
            if (row.cells.hasOwnProperty(key)) {
                const cell = row.cells[key];
                if (cell.cardID === undefined && cell.obj) {
                    skipPush = false;
                    switch (cell.obj.p) {
                        case 'BTN':
                            for (
                                let index = 0;
                                index < cardData.button.length;
                                index++
                            ) {
                                //If there are empty elements, the first one will be used
                                if (
                                    !Object.keys(cardData.button[index]).length
                                ) {
                                    cardData.button[index] = {
                                        label: cell.value,
                                    };
                                    skipPush = true;
                                    break;
                                }
                            }
                            //Otherwise a new element will be pushed
                            if (!skipPush) {
                                cardData.button.push({
                                    label: cell.value,
                                });
                            }
                            break;
                        case 'IMG':
                            for (
                                let index = 0;
                                index < cardData.image.length;
                                index++
                            ) {
                                //If there are empty elements, the first one will be used
                                if (
                                    !Object.keys(cardData.image[index]).length
                                ) {
                                    cardData.image[index] = {
                                        resource: cell.value,
                                    };
                                    skipPush = true;
                                    break;
                                }
                            }
                            //Otherwise a new element will be pushed
                            if (!skipPush) {
                                cardData.image.push({
                                    resource: cell.value,
                                });
                            }
                            break;
                        case 'PGB':
                            for (
                                let index = 0;
                                index < cardData.progressbar.length;
                                index++
                            ) {
                                //If there are empty elements, the first one will be used
                                if (
                                    !Object.keys(cardData.progressbar[index])
                                        .length
                                ) {
                                    cardData.progressbar[index] = {
                                        value: cell.value,
                                    };
                                    skipPush = true;
                                    break;
                                }
                            }
                            //Otherwise a new element will be pushed
                            if (!skipPush) {
                                cardData.progressbar.push({
                                    value: cell.value,
                                });
                            }
                            break;
                        default:
                            for (
                                let index = 0;
                                index < cardData.text.length;
                                index++
                            ) {
                                //If there are empty elements, the first one will be used
                                if (cardData.text[index] === '') {
                                    cardData.text[index] = cell.value;
                                    skipPush = true;
                                    break;
                                }
                            }
                            //Otherwise a new element will be pushed
                            if (!skipPush) {
                                cardData.text.push(cell.value);
                            }
                            break;
                    }
                }
            }
        }
        return <kup-card data={cardData} {...this.cardData}></kup-card>;
    }

    private renderRow(row: KupBoxRow) {
        const visibleColumns = [...this.visibleColumns];

        let boxContent = null;

        // if layout in row, use that one
        let rowLayout = row.layout;
        if (!rowLayout) {
            // otherwise, use 'default' layout
            rowLayout = this.boxLayout;
        }

        let horizontal = false;
        if (rowLayout) {
            if (rowLayout.horizontal) {
                horizontal = true;
            }

            const sections = rowLayout.sections;
            let size = sections.length;

            let cnt = 0;
            if (size > 0) {
                boxContent = [];
            }

            // create fake parent section
            const parent: Section = {
                horizontal: horizontal,
            };

            while (size-- > 0) {
                if (
                    this.cardData !== null &&
                    this.cardData !== undefined &&
                    typeof this.cardData === 'object'
                ) {
                    boxContent.push(this.renderSectionAsCard(row));
                } else {
                    boxContent.push(
                        this.renderSection(
                            sections[cnt++],
                            parent,
                            row,
                            visibleColumns
                        )
                    );
                }
            }
        }

        var isSelected = false;
        for (let select of this.selectedRows) {
            if (select.id === row.id) {
                isSelected = true;
            }
        }

        let multiSel = null;
        if (this.multiSelection) {
            multiSel = (
                <div class="box-selection">
                    <kup-checkbox checked={isSelected} />
                </div>
            );
        }

        let rowObject = null;
        if (this.enableRowActions && !this.swipeDisabled) {
            const menuClass = {
                'row-action-menu': true,
                open: row === this.rowActionMenuOpened,
            };

            let rowActionMenuContent = null;
            if (row.actions) {
                const actionItems = row.actions.map((item, index) => {
                    const iconClass = `icon ${item.icon}`;

                    return (
                        <li
                            tabindex="0"
                            onClick={() =>
                                this.onRowActionClick(row, item, index)
                            }
                        >
                            <div class={iconClass} />
                            <div class="text">{item.text}</div>
                        </li>
                    );
                });

                rowActionMenuContent = <ul>{actionItems}</ul>;
            }

            rowObject = (
                <div class="row-actions-wrapper">
                    <div class="row-actions-toggler">
                        <svg
                            version="1.1"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            onClick={() => this.onRowAction(row)}
                        >
                            <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
                        </svg>
                        <div class={menuClass}>{rowActionMenuContent}</div>
                    </div>
                </div>
            );
        }

        let badges = null;
        if (row.badgeData && row.badgeData.length > 0) {
            badges = row.badgeData.map((badge) => (
                <kup-badge
                    text={badge.text}
                    class={
                        badge['className']
                            ? `centered ${badge['className']}`
                            : 'centered'
                    }
                    imageData={badge.imageData}
                />
            ));
        }

        const boxClass = {
            box: true,
            draggable: this.dragEnabled,
            selected: this.showSelection && isSelected,
            column: !horizontal,
        };

        const rowStyle: any = row.style || {};

        return (
            <div class="box-wrapper" style={rowStyle}>
                <div
                    class={boxClass}
                    onClick={(e) => this.onBoxClick(e, row)}
                    ref={(el: HTMLElement) => this.rowsRefs.push(el)}
                >
                    {multiSel}
                    {boxContent}
                    {badges}
                </div>
                {rowObject}
            </div>
        );
    }

    private renderSection(
        section: Section,
        parent: Section,
        row: KupBoxRow,
        visibleColumns: KupDataColumn[]
    ) {
        let sectionContent = null;

        if (section.sections && section.sections.length > 0) {
            // rendering child
            const sections = section.sections;
            let size = sections.length;

            let cnt = 0;
            if (size > 0) {
                sectionContent = [];
            }

            while (size-- > 0) {
                sectionContent.push(
                    this.renderSection(
                        sections[cnt++],
                        section,
                        row,
                        visibleColumns
                    )
                );
            }
        } else if (section.content) {
            // rendering box objects
            const content = section.content;
            let size = content.length;

            let cnt = 0;
            if (size > 0) {
                sectionContent = [];
            }

            while (size-- > 0) {
                sectionContent.push(
                    this.renderBoxObject(
                        {
                            boxObject: content[cnt++],
                            row,
                            visibleColumns,
                        },
                        true
                    )
                );
            }
        } else if (visibleColumns.length > 0) {
            const column = visibleColumns[0];
            sectionContent = this.renderBoxObject({
                boxObject: { column: column.name },
                row,
                visibleColumns,
            });
        }

        const sectionExpanded = this.isSectionExpanded(row, section);

        const isGrid = !!section.columns;

        const sectionClass: { [index: string]: boolean } = {
            'box-section': true,
            open: sectionExpanded,
            column: !isGrid && !section.horizontal,
            grid: isGrid,
            titled: !!section.title,
            'last-child': !section.sections || section.sections.length === 0,
        };

        const sectionStyle: any = section.style || {};
        if (section.dim && parent) {
            sectionStyle.flex = `0 0 ${section.dim}`;

            if (parent.horizontal) {
                sectionStyle.maxWidth = section.dim;
            } else {
                sectionStyle.maxHeight = section.dim;
            }
        }

        if (isGrid) {
            sectionStyle[
                'grid-template-columns'
            ] = `repeat(${section.columns}, 1fr)`;
        }

        let sectionContainer = null;
        if (section.collapsible) {
            sectionClass['collapse-section'] = true;

            const contentClass = {
                content: true,
            };

            // TODO I18N
            let headerTitle = '';
            if (section.title) {
                headerTitle = section.title;
            } else if (sectionExpanded) {
                headerTitle = this.kupManager.language.translate(
                    KupLanguageGeneric.COLLAPSE
                );
            } else {
                headerTitle = this.kupManager.language.translate(
                    KupLanguageGeneric.EXPAND
                );
            }

            sectionContainer = (
                <div class={sectionClass} style={sectionStyle}>
                    <div class={contentClass}>{sectionContent}</div>
                    <div
                        class="header"
                        role="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            this.toggleSectionExpand(row, section);
                        }}
                    >
                        <div class="header-content">
                            <span>{headerTitle}</span>
                            <FImage
                                resource={`${KupThemeIconValues.DROPDOWN}`}
                                sizeX="1.25em"
                                sizeY="1.25em"
                                wrapperClass={sectionExpanded ? 'toggled' : ''}
                            />
                        </div>
                    </div>
                </div>
            );
        } else {
            const title = section.title ? <h3>{section.title}</h3> : null;

            sectionContainer = (
                <div class={sectionClass} style={sectionStyle}>
                    {title}
                    {sectionContent}
                </div>
            );
        }

        return sectionContainer;
    }

    private renderBoxObject(
        {
            boxObject,
            row,
            visibleColumns,
        }: {
            boxObject: BoxObject;
            row: KupBoxRow;
            visibleColumns: KupDataColumn[];
        },
        fromSection?: boolean
    ) {
        const classObj: Record<string, boolean> = {
            'box-object': true,
        };
        const boStyle = {};
        let column: KupDataColumn = null;
        let index = -1;
        for (let i = 0; i < visibleColumns.length; i++) {
            const c = visibleColumns[i];

            if (c.name === boxObject.column) {
                index = i;
                break;
            }
        }
        if (index >= 0) {
            column = visibleColumns[index];
            visibleColumns.splice(index, 1);
        } else if (fromSection) {
            column = this.data.columns.find((x) => x.name === boxObject.column);
        }
        const cell = row.cells[boxObject.column];
        let title: string = undefined;
        if (cell && !this.kupManager.objects.isEmptyKupObj(cell.obj)) {
            classObj['is-obj'] = true;
            if (this.kupManager.debug.isDebug()) {
                title =
                    cell.obj.t + '; ' + cell.obj.p + '; ' + cell.obj.k + ';';
            }
        }
        const cellProps: FCellProps = {
            cell: cell,
            column: column,
            component: this,
            editable: this.editableData,
            renderKup: true,
            row: row,
            setSizes: true,
            shape: boxObject.shape,
        };
        return (
            <div
                data-cell={cell}
                data-row={row}
                data-column={boxObject.column}
                class={classObj}
                style={boStyle}
                title={title}
            >
                {cell && column ? (
                    <FCell {...cellProps} />
                ) : (
                    <span>{boxObject.value}</span>
                )}
            </div>
        );
    }

    /**
     * Prepares the kanban sections by sorting the boxlist's data.
     * @returns {{jsx: VNode[], style: { [index: string]: string }}} jsx contains the virtual nodes of the Kanban sections, style contains the grid CSS settings.
     */
    kanbanMode(): { jsx: VNode[]; style: { [index: string]: string } } {
        // Testing whether there are columns to group by
        if (!this.kanban.columns || this.kanban.columns.length === 0) {
            this.kupManager.debug.logMessage(
                this,
                'No columns to group by detected.',
                KupDebugCategory.ERROR
            );
            return {
                jsx: (
                    <div id="empty-data-message" class="box-wrapper">
                        <div
                            ref={(el: HTMLElement) => this.rowsRefs.push(el)}
                        ></div>
                        {this.kupManager.language.translate(
                            KupLanguageGeneric.EMPTY_DATA
                        )}
                    </div>
                ),
                style: { 'grid-template-columns': `repeat(1, 1fr)` },
            };
        }
        const kanbanSections: { labels: string[]; nodes: VNode[] }[] = [];

        // Creating empty sections from prop-defined labels
        if (this.kanban.labels) {
            for (let index = 0; index < this.kanban.labels.length; index++) {
                const key: Array<string> = this.kanban.labels[index];
                kanbanSections.push({ labels: key, nodes: [] });
            }
        }
        // Browsing all rows
        for (let index = 0; index < this.rows.length; index++) {
            let key: Array<string> = [];
            // Creating the key for the current row
            for (let j = 0; j < this.kanban.columns.length; j++) {
                try {
                    key.push(
                        this.rows[index].cells[this.kanban.columns[j]].value
                    );
                } catch (error) {
                    this.kupManager.debug.logMessage(
                        this,
                        error,
                        KupDebugCategory.WARNING
                    );
                }
            }
            const check: { found: boolean; index: number } = {
                found: false,
                index: null,
            };
            // Browsing key array to search whether the current key exists or not
            for (let j = 0; j < kanbanSections.length; j++) {
                let sortingKey = kanbanSections[j].labels;
                let found: boolean = true;
                for (let i = 0; i < sortingKey.length; i++) {
                    if (key[i] !== sortingKey[i]) {
                        found = false;
                        break;
                    }
                }
                if (found) {
                    check.found = true;
                    check.index = j;
                    break;
                }
            }
            // If current key exists, box will be pushed into the existing array of virtual nodes
            if (check.found) {
                kanbanSections[check.index].nodes.push(
                    this.renderRow(this.rows[index])
                );
            } else {
                // Otherwise, a new section will be defined starting with just the current virtal node
                kanbanSections.push({
                    labels: key,
                    nodes: [this.renderRow(this.rows[index])],
                });
            }
        }
        // Once the arrays are set, they need to be emptied into columns
        const kanbanJSX: VNode[] = [];
        for (let index = 0; index < kanbanSections.length; index++) {
            const sortingKey: Array<string> = kanbanSections[index].labels;
            const props: FChipsProps = {
                data: [],
            };
            for (let index = 0; index < sortingKey.length; index++) {
                props.data.push({
                    value: sortingKey[index],
                    id: sortingKey[index],
                });
            }
            kanbanJSX.push(
                <div class="kanban-section">
                    <FChip {...props} />
                    {kanbanSections[index].nodes}
                </div>
            );
        }
        return {
            jsx: kanbanJSX,
            style: {
                'grid-template-columns': this.kanban.isStacked
                    ? 'repeat(1fr)'
                    : this.kanban.size
                    ? `repeat(${Object.keys(kanbanSections).length}, ${
                          this.kanban.size
                      })`
                    : `repeat(${Object.keys(kanbanSections).length}, 1fr)`,
            },
        };
    }

    didLoadInteractables() {
        this.interactableTouch.push(this.boxContainer);
        const tapCb = (e: PointerEvent) => {
            if (this.hold) {
                this.hold = false;
                return;
            }
            switch (e.button) {
                case 2:
                    this.kupBoxContextMenu.emit({
                        comp: this,
                        id: this.rootElement.id,
                        details: this.contextMenuHandler(e),
                    });
                    break;
            }
        };
        const holdCb = (e: PointerEvent) => {
            if (e.pointerType === 'pen' || e.pointerType === 'touch') {
                this.hold = true;
                this.kupBoxContextMenu.emit({
                    comp: this,
                    id: this.rootElement.id,
                    details: this.contextMenuHandler(e),
                });
            }
        };
        this.kupManager.interact.on(
            this.boxContainer,
            KupPointerEventTypes.TAP,
            tapCb
        );
        this.kupManager.interact.on(
            this.boxContainer,
            KupPointerEventTypes.HOLD,
            holdCb
        );
    }

    didRenderInteractables() {
        if (this.dragEnabled) {
            for (let index = 0; index < this.rowsRefs.length; index++) {
                const row = this.rowsRefs[index];
                const dataCb: KupDragDataTransferCallback = () => {
                    const cellEl = this.rootElement.shadowRoot.querySelector(
                        '.box-object:hover'
                    ) as HTMLElement;
                    return {
                        cell: cellEl['data-cell'],
                        column: getColumnByName(
                            this.visibleColumns,
                            cellEl.dataset.column
                        ),
                        id: this.rootElement.id,
                        multiple: this.multiSelection,
                        row: cellEl['data-row'],
                        selectedRows: this.selectedRows,
                    };
                };
                if (row && !this.interactableDrag.includes(row)) {
                    this.interactableDrag.push(row);
                    this.kupManager.interact.draggable(
                        row,
                        {
                            allowFrom: '.box-object',
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
                const receivingDetails = this.getEventDetails(
                    this.rootElement.shadowRoot.querySelector('.box:hover')
                );
                return {
                    cell: receivingDetails.cell,
                    column: receivingDetails.column,
                    id: this.rootElement.id,
                    row: receivingDetails.row,
                };
            };
            if (!this.interactableDrop.includes(this.sectionRef)) {
                this.interactableDrop.push(this.sectionRef);
                this.kupManager.interact.dropzone(
                    this.sectionRef,
                    {
                        accept: `[${kupDraggableCellAttr}]`,
                    },
                    {
                        dispatcher: this.rootElement,
                        type: KupDropEventTypes.BOX,
                    }
                );
            }
            for (let index = 0; index < this.rowsRefs.length; index++) {
                const row = this.rowsRefs[index];
                if (row && !this.interactableDrop.includes(row)) {
                    this.interactableDrop.push(row);
                    this.kupManager.interact.dropzone(
                        row,
                        {
                            accept: `[${kupDraggableCellAttr}]`,
                        },
                        {
                            callback: dataCb,
                            dispatcher: this.rootElement,
                            type: KupDropEventTypes.BOX,
                        }
                    );
                }
            }
        }
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        if (this.rowsPerPage) {
            this.currentRowsPerPage = this.rowsPerPage;
        } else if (this.pageSize) {
            this.currentRowsPerPage = this.pageSize;
        }
        if (
            this.data &&
            this.data.rows &&
            this.currentRowsPerPage > this.data.rows.length
        ) {
            this.currentRowsPerPage = this.data.rows.length;
        }
        this.kupManager.language.register(this);
        this.kupManager.theme.register(this);
        this.onDataChanged();
        this.adjustPaginator();
    }

    componentDidLoad() {
        this.handleAutomaticBoxSelection();

        // When component is created, then the listener is set. @See clickFunction for more details
        document.addEventListener('click', this.clickFunction.bind(this));

        this.currentPage = this.pageSelected;

        if (this.multiSelection && this.selectedRowsState) {
            this.selectedRows = [];
            let selectedIds: Array<string> = this.selectedRowsState.split(';');
            this.selectedRows = this.data.rows.filter((r) => {
                return selectedIds.indexOf(r.id) >= 0;
            });
        }
        this.didLoadInteractables();
        this.kupDidLoad.emit({ comp: this, id: this.rootElement.id });
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        const root: ShadowRoot = this.rootElement.shadowRoot;
        if (root) {
            const fs: NodeListOf<HTMLElement> =
                root.querySelectorAll('.f-text-field');
            for (let index = 0; index < fs.length; index++) {
                FTextFieldMDC(fs[index]);
            }
        }
        this.checkScrollOnHover();
        this.persistState();
        this.didRenderInteractables();
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        const isKanban: boolean = !!(
            typeof this.kanban === 'object' && this.kanban !== null
        );
        let sortPanel = null;
        if (this.sortEnabled) {
            // creating items
            const visibleColumnsItems = this.visibleColumns.map((column) => {
                const item = {
                    value: column.title,
                    id: column.name,
                    selected: column.name === this.sortBy,
                };
                return item;
            });
            const items = [{ value: '', id: '' }, ...visibleColumnsItems];
            let textfieldData = {
                label: this.kupManager.language.translate(
                    KupLanguageGeneric.SORT_BY
                ),
                trailingIcon: true,
            };
            let listData = {
                data: items,
                selectable: true,
            };

            let data = {
                'kup-text-field': textfieldData,
                'kup-list': listData,
            };
            sortPanel = (
                <div id="sort-panel">
                    <kup-combobox
                        data={data}
                        initialValue={this.sortBy}
                        onkup-combobox-itemclick={(e) => this.onSortChange(e)}
                    />
                </div>
            );
        }

        let filterPanel = null;
        if (this.globalFilter) {
            filterPanel = (
                <div id="global-filter">
                    <kup-text-field
                        fullWidth={true}
                        label={this.kupManager.language.translate(
                            KupLanguageSearch.SEARCH
                        )}
                        icon={KupThemeIconValues.SEARCH}
                        initialValue={this.globalFilterValue}
                        onkup-textfield-input={(event) => {
                            window.clearTimeout(this.globalFilterTimeout);
                            this.globalFilterTimeout = window.setTimeout(
                                () => this.onGlobalFilterChange(event),
                                600
                            );
                        }}
                    ></kup-text-field>
                </div>
            );
        }

        let paginator = null;
        if (this.pagination) {
            paginator = (
                <FPaginator
                    id={top ? 'top-paginator' : 'bottom-paginator'}
                    currentPage={this.currentPage}
                    max={this.filteredRows.length}
                    mode={FPaginatorMode.SIMPLE}
                    perPage={
                        this.currentRowsPerPage
                            ? this.currentRowsPerPage
                            : this.pageSize
                    }
                    onPageChange={(e: CustomEvent<KupComboboxEventPayload>) =>
                        this.handlePageChange(e.detail.value)
                    }
                    onRowsChange={(e: CustomEvent<KupComboboxEventPayload>) =>
                        this.handleRowsPerPageChange(e.detail.value)
                    }
                />
            );
        }

        let boxContent = null;

        let containerStyle = {};

        if (this.rows.length === 0) {
            boxContent = (
                <div id="empty-data-message" class="box-wrapper">
                    <div
                        class="box"
                        ref={(el: HTMLElement) => this.rowsRefs.push(el)}
                    >
                        {this.kupManager.language.translate(
                            KupLanguageGeneric.EMPTY_DATA
                        )}
                    </div>
                </div>
            );
            containerStyle = { 'grid-template-columns': `repeat(1, 1fr)` };
        } else if (isKanban) {
            const kanban: {
                jsx: VNode[];
                style: {
                    [index: string]: string;
                };
            } = this.kanbanMode();
            boxContent = kanban.jsx;
            containerStyle = kanban.style;
        } else {
            containerStyle = {
                'grid-template-columns': `repeat(${this.columns}, 1fr)`,
            };
            const rows = this.rows;
            let size = rows.length;

            let cnt = 0;
            boxContent = [];

            while (size-- > 0) {
                boxContent.push(this.renderRow(rows[cnt++]));
            }
        }

        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <div
                        class={'box-component'}
                        ref={(el) => (this.sectionRef = el)}
                    >
                        {sortPanel}
                        {filterPanel}
                        {paginator}
                        <div
                            class={isKanban ? 'is-kanban' : ''}
                            id={'box-container'}
                            style={containerStyle}
                            onContextMenu={(e: MouseEvent) => {
                                e.preventDefault();
                            }}
                            ref={(el: HTMLElement) =>
                                (this.boxContainer =
                                    el as KupScrollOnHoverElement)
                            }
                        >
                            {boxContent}
                        </div>
                    </div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.interact.unregister(
            this.interactableDrag.concat(this.interactableDrop)
        );
        this.kupManager.language.unregister(this);
        this.kupManager.theme.unregister(this);
        if (this.scrollOnHover) {
            this.kupManager.scrollOnHover.unregister(this.boxContainer);
        }
        // When component is destroyed, then the listener is removed. @See clickFunction for more details
        document.removeEventListener('click', this.clickFunction.bind(this));
        this.kupDidUnload.emit({ comp: this, id: this.rootElement.id });
    }
}
