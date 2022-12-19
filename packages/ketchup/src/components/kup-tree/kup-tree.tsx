import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    getAssetPath,
    h,
    Host,
    JSX,
    Method,
    Prop,
    State,
    Watch,
} from '@stencil/core';
import type { PointerEvent } from '@interactjs/types/index';
import {
    TotalLabel,
    TotalMode,
    TotalsMap,
} from './../kup-data-table/kup-data-table-declarations';
import {
    KupTreeProps,
    TreeNodePath,
    treeMainColumnName,
    KupTreeEventHandlerDetails,
    KupTreeNodeCollapseEventPayload,
    KupTreeNodeExpandEventPayload,
    KupTreeNodeSelectedEventPayload,
    KupTreeNodeButtonClickEventPayload,
    KupTreeContextMenuEventPayload,
    KupTreeColumnMenuEventPayload,
    KupTreeDynamicMassExpansionEventPayload,
    KupTreeExpansionMode,
    KupTreeColumnRemoveEventPayload,
    KupTreeNode,
} from './kup-tree-declarations';
import { MDCRipple } from '@material/ripple';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import {
    calcTotals,
    normalizeRows,
} from '../kup-data-table/kup-data-table-helper';
import { KupTreeState } from './kup-tree-state';
import { KupStore } from '../kup-state/kup-store';
import { getColumnByName } from '../../utils/cell-utils';
import {
    getProps,
    numberToFormattedStringNumber,
    setProps,
} from '../../utils/utils';
import { KupColumnMenu } from '../../utils/kup-column-menu/kup-column-menu';
import { FiltersColumnMenu } from '../../utils/filters/filters-column-menu';
import {
    GenericFilter,
    KupGlobalFilterMode,
    ValueDisplayedValue,
} from '../../utils/filters/filters-declarations';
import { FiltersTreeItems } from '../../utils/filters/filters-tree-items';
import { KupListNode } from '../kup-list/kup-list-declarations';
import {
    GenericObject,
    KupComponent,
    KupEventPayload,
} from '../../types/GenericTypes';
import {
    kupDynamicPositionAttribute,
    KupDynamicPositionCoordinates,
    KupDynamicPositionElement,
} from '../../managers/kup-dynamic-position/kup-dynamic-position-declarations';
import { KupScrollOnHoverElement } from '../../managers/kup-scroll-on-hover/kup-scroll-on-hover-declarations';
import {
    KupLanguageGeneric,
    KupLanguageSearch,
    KupLanguageTotals,
} from '../../managers/kup-language/kup-language-declarations';
import { KupCardEventPayload } from '../kup-card/kup-card-declarations';
import { componentWrapperId } from '../../variables/GenericVariables';
import { KupThemeIconValues } from '../../managers/kup-theme/kup-theme-declarations';
import { KupPointerEventTypes } from '../../managers/kup-interact/kup-interact-declarations';
import { KupManagerClickCb } from '../../managers/kup-manager/kup-manager-declarations';
import {
    FCellPadding,
    FCellProps,
} from '../../f-components/f-cell/f-cell-declarations';
import { FCell } from '../../f-components/f-cell/f-cell';
import {
    KupDataCell,
    KupDataColumn,
    KupDataDataset,
    KupDataRow,
} from '../../managers/kup-data/kup-data-declarations';
import { KupDebugCategory } from '../../managers/kup-debug/kup-debug-declarations';
import { FTextFieldMDC } from '../../f-components/f-text-field/f-text-field-mdc';
@Component({
    tag: 'kup-tree',
    styleUrl: 'kup-tree.scss',
    shadow: true,
})
export class KupTree {
    /**
     * References the root HTML element of the component (<kup-tree>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    state: KupTreeState = new KupTreeState();

    @State() private treeColumnVisible = true;
    /**
     * name of the column with the opened total menu
     */
    @State() private openedTotalMenu: string = null;
    @State() private columnMenuAnchor: string = null;
    @State() stateSwitcher: boolean = false;
    /**
     * An array of integers containing the path to a selected child.\
     * Groups up the properties SelFirst, SelItem, SelName.
     */
    @State()
    private selectedNode: TreeNodePath = [];

    initWithPersistedState(): void {
        if (this.store && this.stateId) {
            const state = this.store.getState(this.stateId);
            if (state != null) {
                this.density = state.density;
                this.showFilters = state.showFilters;
                this.showFooter = state.showFooter;
                this.globalFilter = state.globalFilter;
                this.globalFilterValue = state.globalFilterValue;
                this.filters = { ...state.filters };
                this.totals = { ...state.totals };
            }
        }
    }

    persistState(): void {
        if (this.store && this.stateId) {
            let somethingChanged = false;

            if (
                !this.kupManager.objects.deepEqual(
                    this.state.filters,
                    this.filters
                )
            ) {
                this.state.filters = { ...this.filters };
                somethingChanged = true;
            }
            if (
                !this.kupManager.objects.deepEqual(
                    this.state.density,
                    this.density
                )
            ) {
                this.state.density = this.density;
                somethingChanged = true;
            }
            if (
                !this.kupManager.objects.deepEqual(
                    this.state.showFilters,
                    this.showFilters
                )
            ) {
                this.state.showFilters = this.showFilters;
                somethingChanged = true;
            }
            if (
                !this.kupManager.objects.deepEqual(
                    this.state.showFooter,
                    this.showFooter
                )
            ) {
                this.state.showFooter = this.showFooter;
                somethingChanged = true;
            }
            if (
                !this.kupManager.objects.deepEqual(
                    this.state.totals,
                    this.totals
                )
            ) {
                this.state.totals = { ...this.totals };
                somethingChanged = true;
            }
            if (
                !this.kupManager.objects.deepEqual(
                    this.state.globalFilter,
                    this.globalFilter
                )
            ) {
                this.state.globalFilter = this.globalFilter;
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
            if (!this.state.load) {
                this.state.load = true;
                return;
            }
            if (somethingChanged) {
                this.store.persistState(this.stateId, this.state);
            }
        }
    }

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * When enabled, the first level of depth will give an accordion look to nodes.
     * @default false
     */
    @Prop({ reflect: true }) asAccordion: boolean = false;
    /**
     * The columns of the tree when tree visualization is active.
     */
    @Prop({ mutable: true }) columns?: KupDataColumn[];
    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * The json data used to populate the tree view: the basic, always visible tree nodes.
     */
    @Prop({ mutable: true }) data: KupTreeNode[] = [];
    /**
     * The density of the rows, defaults at 'medium' and can also be set to 'dense' or 'wide'.
     */
    @Prop() density: FCellPadding = FCellPadding.MEDIUM;
    /**
     * Function that gets invoked when a new set of nodes must be loaded as children of a node.
     *
     * When useDynamicExpansion is set, the tree component will have two different behaviors depending on the value of this prop.
     * 1 - If this prop is set to null, no callback to download data is available:
     *    the component will emit an event requiring the parent to load the children of the given node.
     * 2 - If this prop is set to have a callback, then the component will automatically make requests to load children of
     *    a given node. After the load has been completed, a different event will be fired to alert the parent of the change.
     *
     * @see useDynamicExpansion
     */
    @Prop() dynamicExpansionCallback: (
        treeNodeToExpand: KupTreeNode,
        treeNodePath: TreeNodePath
    ) => Promise<KupTreeNode[]> | undefined = undefined;
    /**
     * When set to true, editable cells will be rendered using input components.
     * @default false
     */
    @Prop() editableData: boolean = false;
    /**
     * Enables the extracolumns add buttons.
     */
    @Prop() enableExtraColumns: boolean = true;
    /**
     * Flag: the nodes of the whole tree must be already expanded upon loading. Disabled nodes do NOT get expanded.
     */
    @Prop() expanded: boolean = false;
    /**
     * Behavior of nodes' expansion: it can be chosen between expanding a node by clicking on the dropdown icon, or by clicking on the whole node.
     * @default KupTreeExpansionMode.DROPDOWN
     */
    @Prop() expansionMode: KupTreeExpansionMode = KupTreeExpansionMode.DROPDOWN;
    /**
     * List of filters set by the user.
     */
    @Prop({ mutable: true }) filters: GenericFilter = {};
    /**
     * When set to true it activates the global filter.
     */
    @Prop() globalFilter: boolean = false;
    /**
     * The value of the global filter.
     */
    @Prop({ reflect: true, mutable: true }) globalFilterValue = '';

    /**
     * The mode of the global filter (default SIMPLE)
     */
    @Prop() globalFilterMode: KupGlobalFilterMode = KupGlobalFilterMode.SIMPLE;
    /**
     * Experimental feature: when active, the tree will try to prevent horizontal overflowing elements by setting a width on the content of the table cells.
     * It works only on cells of the main column.
     * @default false;
     */
    @Prop({ reflect: true }) preventXScroll: boolean = false;
    /**
     * Sets the possibility to remove the selected column.
     */
    @Prop() removableColumns: boolean = true;
    /**
     * When enabled displays Material's ripple effect on nodes (only when no columns are displayed).
     * @default true
     */
    @Prop() ripple: boolean = true;
    /**
     * Activates the scroll on hover function.
     */
    @Prop() scrollOnHover: boolean = false;
    /**
     * Shows the tree data as a table.
     */
    @Prop({ mutable: true }) showColumns: boolean = false;
    /**
     * When set to true enables the column filters.
     */
    @Prop() showFilters: boolean = true;
    /**
     * When set to true shows the footer.
     */
    @Prop() showFooter: boolean = false;
    /**
     * Flag: shows the header of the tree when the tree is displayed as a table.
     * @see showColumns
     */
    @Prop({ mutable: true }) showHeader: boolean = false;
    /**
     * Shows the icons of the nodes.
     */
    @Prop() showIcons: boolean = true;
    @Prop() stateId: string = '';
    @Prop() store: KupStore;
    /**
     * When the component must use the dynamic expansion feature to open its nodes, it means that not all the nodes of the
     * tree have been passed inside the data property.
     *
     * Therefore, when expanding a node, the tree must emit an event (or run a given callback)
     * and wait for the child nodes to be downloaded from the server.
     *
     * For more information:
     * @see dynamicExpansionCallback
     */
    @Prop() useDynamicExpansion: boolean = false;
    /**
     * Defines the current totals options.
     */
    @Prop({ mutable: true }) totals: TotalsMap;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();
    /**
     * Reference to the column menu card.
     */
    private columnMenuCard: HTMLKupCardElement = null;
    private treeWrapperRef: KupScrollOnHoverElement;
    private clickTimeout: any[] = [];
    private globalFilterTimeout: number;
    private footer: { [index: string]: number };
    private sizedColumns: KupDataColumn[] = undefined;
    columnFilterTimeout: number;
    private columnMenuInstance: KupColumnMenu;
    private filtersColumnMenuInstance: FiltersColumnMenu =
        new FiltersColumnMenu();
    private filtersTreeItemsInstance: FiltersTreeItems = new FiltersTreeItems();
    private totalMenuCoords: KupDynamicPositionCoordinates = null;
    private visibleNodes: number;
    private contentRefs: HTMLElement[] = [];
    private oldWidth: number = null;
    private hold: boolean = false;
    private interactableTouch: HTMLElement[] = [];
    private clickCb: KupManagerClickCb = null;
    /**
     * Used to prevent too many resizes callbacks at once.
     */
    private resizeTimeout: number;

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Fired when a KupTreeNode gets collapsed (closed).
     */
    @Event({
        eventName: 'kup-tree-nodecollapse',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTreeNodeCollapse: EventEmitter<KupTreeNodeCollapseEventPayload>;

    /**
     * Fired when a node expansion ion has been triggered.
     * Contains additional data when the tree is using the dynamicExpansion feature.
     * @event kup-tree-nodeexpand
     * @type {object}
     * @property {TreeNodePath} treeNodePath - The array of indexes to retrieve the current treeNode inside the data prop.
     * @property {KupTreeNode} treeNode - Reference to the KupTreeNode data object which is being expanded (passed through the data prop).
     * @property {boolean} usesDynamicExpansion - Flag to notify that the component is running in dynamicExpansion mode.
     * @property {boolean} dynamicExpansionRequireChildren - Flag to notify that the current dynamicExpansion event
     *  requires the parent component to add KupTreeNode children to the given KupTreeNode.
     * @see useDynamicExpansion
     * @see dynamicExpansionCallback
     * @since 1.0.0
     */
    @Event({
        eventName: 'kup-tree-nodeexpand',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTreeNodeExpand: EventEmitter<KupTreeNodeExpandEventPayload>;

    /**
     * Fired when a node of the tree has been selected
     */
    @Event({
        eventName: 'kup-tree-nodeselected',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTreeNodeSelected: EventEmitter<KupTreeNodeSelectedEventPayload>;

    @Event({
        eventName: 'kup-tree-buttonclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTreeNodeButtonClick: EventEmitter<KupTreeNodeButtonClickEventPayload>;

    /**
     * Generic right click event on tree.
     */
    @Event({
        eventName: 'kup-tree-contextmenu',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTreeContextMenu: EventEmitter<KupTreeContextMenuEventPayload>;
    /**
     * When the column menu is being opened/closed.
     */
    @Event({
        eventName: 'kup-tree-columnmenu',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTreeColumnMenu: EventEmitter<KupTreeColumnMenuEventPayload>;

    @Event({
        eventName: 'kup-tree-didload',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDidLoad: EventEmitter<KupEventPayload>;

    /**
     * Triggered when stop propagation event
     */

    @Event({
        eventName: 'kup-tree-didunload',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDidUnload: EventEmitter<KupEventPayload>;

    @Event({
        eventName: 'kup-tree-nodedblclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTreeNodeDblClick: EventEmitter<KupTreeNodeCollapseEventPayload>;

    @Event({
        eventName: 'kup-tree-dynamicmassexpansion',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTreeDynamicMassExpansion: EventEmitter<KupTreeDynamicMassExpansionEventPayload>;
    /**
     * Event fired when columns are removed (set to hidden).
     */
    @Event({
        eventName: 'kup-tree-columnremove',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupColumnRemove: EventEmitter<KupTreeColumnRemoveEventPayload>;

    /**
     * This method will get the selected nodes of the component.
     */
    @Method()
    async getSelectedNode(): Promise<TreeNodePath> {
        return this.selectedNode;
    }

    /**
     * This method will set the selected rows of the component.
     * @param {string|number[]} rowsIdentifiers - Array of ids (dataset) or indexes (rendered rows).
     * @param {boolean} emitEvent - The event will always be emitted unless emitEvent is set to false.
     */
    @Method()
    async setSelectedNode(
        treeNodePath: string,
        emitEvent?: boolean
    ): Promise<void> {
        this.selectedNode = treeNodePath
            .split(',')
            .map((treeNodeIndex) => parseInt(treeNodeIndex));
        if (emitEvent !== false) {
            this.kupTreeNodeSelected.emit({
                comp: this,
                id: this.rootElement.id,
                treeNodePath: this.selectedNode,
                treeNode: this.getTreeNode(this.selectedNode),
                columnName: null,
            });
        }
    }
    /*-------------------------------------------------*/
    /*                  W a t c h e r s                */
    /*-------------------------------------------------*/

    @Watch('data')
    enrichDataWhenChanged(
        newData: KupTreeNode[] | KupDataDataset,
        oldData: KupTreeNode[]
    ) {
        if (!newData) {
            newData = [];
        }
        if (newData !== oldData) {
            this.refreshStructureState();
        }
    }

    @Watch('expanded')
    enrichStructureStateWhenChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.refreshStructureState();
        }
    }

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * True if there aren't visible nodes
     */
    @Method()
    async isEmpty(): Promise<boolean> {
        return this.visibleNodes == 0;
    }

    /**
     * Closes any opened column menu.
     */
    @Method()
    async closeColumnMenu(): Promise<void> {
        this.columnMenuAnchor = null;
        if (this.columnMenuCard) {
            this.columnMenuCard.data = null;
        }
        this.columnMenuInstance.close(this.columnMenuCard);
        this.kupTreeColumnMenu.emit({
            comp: this,
            id: this.rootElement.id,
            card: this.columnMenuCard,
            event: null,
            open: false,
        });
    }
    /**
     * Collapses all nodes.
     */
    @Method()
    async collapseAll() {
        if (!this.useDynamicExpansion) {
            for (let index = 0; index < this.data.length; index++) {
                this.data[index].isExpanded = false;
                this.handleChildren(this.data[index], false);
            }
        } else {
            this.kupTreeDynamicMassExpansion.emit({
                comp: this,
                id: this.rootElement.id,
                expandAll: false,
            });
        }
        this.refresh();
    }
    /**
     * Expands all nodes.
     */
    @Method()
    async expandAll() {
        if (!this.useDynamicExpansion) {
            for (let index = 0; index < this.data.length; index++) {
                this.data[index].isExpanded = true;
                this.handleChildren(this.data[index], true);
            }
        } else {
            this.kupTreeDynamicMassExpansion.emit({
                comp: this,
                id: this.rootElement.id,
                expandAll: true,
            });
        }
        this.refresh();
    }
    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KupTreeProps, descriptions);
    }
    /**
     * Hides the given column.
     * @param {KupDataColumn} column - Column to hide.
     */
    @Method()
    async hideColumn(column: KupDataColumn): Promise<void> {
        this.kupManager.data.column.hide(this.columns, [column.name]);
        this.kupColumnRemove.emit({
            comp: this,
            id: this.rootElement.id,
            column: column,
        });
        this.refresh();
    }
    /**
     * Opens the column menu of the given column.
     * @param {string} column - Name of the column.
     */
    @Method()
    async openColumnMenu(column: string): Promise<void> {
        this.columnMenuAnchor = column;
        if (!this.columnMenuCard) {
            this.columnMenuCard = document.createElement('kup-card');
            this.columnMenuCard.isMenu = true;
            this.columnMenuCard.layoutNumber = 12;
            this.columnMenuCard.sizeX = 'auto';
            this.columnMenuCard.sizeY = 'auto';
            this.columnMenuCard.addEventListener(
                'kup-card-click',
                (e: CustomEvent<KupEventPayload>) => {
                    this.kupTreeColumnMenu.emit({
                        comp: this,
                        id: this.rootElement.id,
                        card: this.columnMenuCard,
                        event: e,
                        open: this.columnMenuCard.menuVisible,
                    });
                }
            );
            this.columnMenuCard.addEventListener(
                'kup-card-event',
                (e: CustomEvent<KupCardEventPayload>) => {
                    this.columnMenuInstance.eventHandlers(e, this);
                    this.kupTreeColumnMenu.emit({
                        comp: this,
                        id: this.rootElement.id,
                        card: this.columnMenuCard,
                        event: e,
                        open: this.columnMenuCard.menuVisible,
                    });
                }
            );
        }
        this.columnMenuCard.setAttribute('data-column', column);
        this.columnMenuCard.data = this.columnMenuInstance.prepData(
            this,
            getColumnByName(this.getVisibleColumns(), column)
        );
        this.columnMenuInstance.open(this, column);
        this.columnMenuInstance.reposition(this, this.columnMenuCard);
        this.kupTreeColumnMenu.emit({
            comp: this,
            id: this.rootElement.id,
            card: this.columnMenuCard,
            event: null,
            open: true,
        });
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * This method is invoked by KupManager whenever the component changes size.
     */
    @Method()
    async resizeCallback(): Promise<void> {
        if (this.rootElement.clientWidth !== this.oldWidth) {
            window.clearTimeout(this.resizeTimeout);
            this.resizeTimeout = window.setTimeout(() => this.refresh(), 300);
        }
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupTreeProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    setTreeColumnVisibility(value: boolean) {
        this.treeColumnVisible = value;
    }

    isTreeColumnVisible(): boolean {
        return this.treeColumnVisible;
    }

    private checkScrollOnHover() {
        if (!this.kupManager.scrollOnHover.isRegistered(this.treeWrapperRef)) {
            if (this.scrollOnHover) {
                this.kupManager.scrollOnHover.register(this.treeWrapperRef);
            }
        } else {
            if (!this.scrollOnHover) {
                this.kupManager.scrollOnHover.unregister(this.treeWrapperRef);
            }
        }
    }

    onKupTreeNodeDblClick(treeNodeData: KupTreeNode, treeNodePath: string) {
        for (let index = 0; index < this.clickTimeout.length; index++) {
            clearTimeout(this.clickTimeout[index]);
            this.kupManager.debug.logMessage(
                this,
                'Cleared hdlTreeNodeClick timeout(' +
                    this.clickTimeout[index] +
                    ').'
            );
        }
        this.clickTimeout = [];
        this.kupTreeNodeDblClick.emit({
            comp: this,
            id: this.rootElement.id,
            treeNodePath: treeNodePath
                .split(',')
                .map((treeNodeIndex) => parseInt(treeNodeIndex)),
            treeNode: treeNodeData,
        });
    }

    nodesToRows(): KupDataRow[] {
        function children(TreeNode: KupTreeNode) {
            for (let index = 0; index < TreeNode.children.length; index++) {
                const node: KupTreeNode = TreeNode.children[index];
                rows.push({
                    cells: TreeNode.children[index].cells,
                });
                if (node.children) {
                    children(node);
                }
            }
        }
        let rows: KupDataRow[] = [];
        for (let index = 0; index < this.data.length; index++) {
            const node: KupTreeNode = this.data[index];
            rows.push({
                cells: this.data[index].cells,
            });
            if (node.children) {
                children(this.data[index]);
            }
        }
        return rows;
    }

    private setDynPosElements() {
        // Column menu
        if (this.columnMenuCard && this.columnMenuCard.data) {
            this.columnMenuCard.data = this.columnMenuInstance.prepData(
                this,
                getColumnByName(
                    this.getVisibleColumns(),
                    this.columnMenuAnchor
                ),
                this.columnMenuCard.data
            );
        }
    }

    expandCollapseNode(treeNode: KupTreeNode, expandNode: boolean = false) {
        this.filtersTreeItemsInstance.expandCollapseNode(treeNode, expandNode);
    }

    expandCollapseAllNodes(treeNode: KupTreeNode, expandNode: boolean = false) {
        this.filtersTreeItemsInstance.expandCollapseAllNodes(
            treeNode,
            expandNode
        );
    }

    getColumns(): Array<KupDataColumn> {
        return this.columns ? this.columns : [{ title: '', name: '' }];
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

    getVisibleColumns(): Array<KupDataColumn> {
        return this.getColumns().filter((column) =>
            column.hasOwnProperty('visible') ? column.visible : true
        );
    }

    getHeadingColumns(): Array<KupDataColumn> {
        const firstColum: KupDataColumn = {
            name: treeMainColumnName,
            title: '',
        };
        const visibleColumns = this.getVisibleColumns();
        return [firstColum, ...visibleColumns];
    }

    /*
     *For launch the event when selected node
     */
    launchNodeEvent(treeNodePath: TreeNodePath, treeNode: KupTreeNode) {
        if (treeNodePath && treeNodePath.length > 0) {
            if (treeNodePath[0] != -1) {
                var tn = treeNode.children[treeNodePath[0]];
                if (!tn) {
                    tn = treeNode;
                }
                if (treeNodePath.length > 1) {
                    treeNodePath = treeNodePath.slice(1);
                    this.launchNodeEvent(treeNodePath, tn);
                } else {
                    this.hdlTreeNodeClick(
                        null,
                        tn,
                        this.selectedNodeToString(this.selectedNode)
                    );
                }
            }
        }
    }

    private openTotalMenu(column: KupDataColumn) {
        this.openedTotalMenu = column.name;
    }

    private onTotalMenuOpen(column: KupDataColumn) {
        this.closeTotalMenu();
        this.openTotalMenu(column);
    }

    private getEventDetails(
        path: HTMLElement[],
        e?: PointerEvent
    ): KupTreeEventHandlerDetails {
        let isHeader: boolean,
            isBody: boolean,
            isFooter: boolean,
            td: HTMLElement,
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
                        if (
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
        let cell: KupDataCell = null,
            column: KupDataColumn = null,
            row: KupDataRow = null;
        if (isBody) {
            if (td) {
                cell = td['data-cell'];
            }
            if (tr) {
                row = tr['data-row'];
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
            originalEvent: e,
            row: row ? row : null,
            td: td ? td : null,
            th: th ? th : null,
            tr: tr ? tr : null,
        };
    }

    private contextMenuHandler(e: PointerEvent): KupTreeEventHandlerDetails {
        e.preventDefault();
        const details = this.getEventDetails(this.getEventPath(e.target), e);
        if (details.area === 'header') {
            if (details.th && details.column) {
                this.openColumnMenu(details.column.name);
                return details;
            }
        } else if (details.area === 'footer') {
            if (details.td && details.column) {
                this.totalMenuCoords = { x: e.clientX, y: e.clientY };
                this.onTotalMenuOpen(details.column);
                return details;
            }
        }
        return details;
    }

    private getEventPath(currentEl: unknown): HTMLElement[] {
        const path: HTMLElement[] = [];

        while (
            currentEl &&
            currentEl !== this.rootElement &&
            currentEl !== document.body
        ) {
            path.push(currentEl as HTMLElement);
            currentEl = (currentEl as HTMLElement).parentNode
                ? (currentEl as HTMLElement).parentNode
                : (currentEl as ShadowRoot).host;
        }

        return path;
    }

    // When a TreeNode can be selected
    hdlTreeNodeClick(
        e: MouseEvent,
        treeNodeData: KupTreeNode,
        treeNodePath: string
    ) {
        if (
            this.expansionMode.toLowerCase() ===
                KupTreeExpansionMode.DROPDOWN ||
            (this.expansionMode.toLowerCase() === KupTreeExpansionMode.NODE &&
                !treeNodeData.expandable)
        ) {
            const td = e
                ? this.getEventPath(e.target).find((el) => {
                      if (el.tagName === 'TD') return el;
                  })
                : null;
            // If this TreeNode is not disabled, then it can be selected and an event is emitted
            if (treeNodeData && !treeNodeData.disabled) {
                this.selectedNode = treeNodePath
                    .split(',')
                    .map((treeNodeIndex) => parseInt(treeNodeIndex));

                this.kupTreeNodeSelected.emit({
                    comp: this,
                    id: this.rootElement.id,
                    treeNodePath: this.selectedNode,
                    treeNode: treeNodeData,
                    columnName: td ? td.dataset.column : null,
                });
            }
        }

        // If KupTreeExpansionMode.NODE then click is a collapse/expand click
        if (this.expansionMode.toLowerCase() === KupTreeExpansionMode.NODE) {
            this.hdlTreeNodeExpanderClick(
                treeNodeData,
                treeNodePath,
                e ? e.ctrlKey : false
            );
        }
    }

    // When a TreeNode must be expanded or closed.
    hdlTreeNodeExpanderClick(
        treeNodeData: KupTreeNode,
        treeNodePath: string,
        ctrlKey: boolean
    ) {
        // If the node is expandable
        if (treeNodeData.expandable) {
            // Always composes the tree node path as an array
            const arrayTreeNodePath: TreeNodePath = treeNodePath
                .split(',')
                .map((index) => parseInt(index));

            // There are already children set in this TreeNode -> expand or collapse node and emit appropriate event
            if (treeNodeData.children && treeNodeData.children.length) {
                // Updates expanded state and force rerender
                treeNodeData.isExpanded = !treeNodeData.isExpanded;
                if (ctrlKey) {
                    this.handleChildren(treeNodeData, treeNodeData.isExpanded);
                }
                this.refresh();
                if (treeNodeData.isExpanded) {
                    // TreeNode is now expanded -> Fires expanded event
                    this.kupTreeNodeExpand.emit({
                        comp: this,
                        id: this.rootElement.id,
                        treeNodePath: arrayTreeNodePath,
                        treeNode: treeNodeData,
                        usesDynamicExpansion: this.useDynamicExpansion,
                    });
                } else {
                    // TreeNode is now collapsed -> Fires collapsed event
                    this.kupTreeNodeCollapse.emit({
                        comp: this,
                        id: this.rootElement.id,
                        treeNodePath: arrayTreeNodePath,
                        treeNode: treeNodeData,
                    });
                }
            } else if (this.useDynamicExpansion) {
                if (ctrlKey) {
                    this.kupTreeDynamicMassExpansion.emit({
                        comp: this,
                        id: this.rootElement.id,
                        treeNodePath: arrayTreeNodePath,
                        treeNode: treeNodeData,
                    });
                }
                // When the component must use the dynamic expansion feature
                // Currently it does not support the expanded prop

                // Checks if we have a dynamicExpansionCallback or not
                if (this.dynamicExpansionCallback) {
                    // We have a callback: invokes it and after the result is returned updates the tree
                    this.dynamicExpansionCallback(
                        treeNodeData,
                        arrayTreeNodePath
                    )
                        .then((childrenTreeNodes) => {
                            // Children returned successfully
                            treeNodeData.children = childrenTreeNodes;
                            treeNodeData.isExpanded = !treeNodeData.isExpanded;
                            this.refresh();

                            // TreeNode is now expanded -> Fires expanded event
                            this.kupTreeNodeExpand.emit({
                                comp: this,
                                id: this.rootElement.id,
                                treeNodePath: arrayTreeNodePath,
                                treeNode: treeNodeData,
                                usesDynamicExpansion: true,
                            });
                        })
                        .catch((err) => {
                            console.error(
                                'KupTree: An error occurred when trying to fetch dynamicExpansion nodes data',
                                err,
                                treeNodeData
                            );
                        });
                } else {
                    // we do NOT have a callback set.
                    // Fires the expand request for the given TreeNode and set the appropriate flag
                    this.kupTreeNodeExpand.emit({
                        comp: this,
                        id: this.rootElement.id,
                        treeNode: treeNodeData,
                        treeNodePath: arrayTreeNodePath,
                        usesDynamicExpansion: true,
                        dynamicExpansionRequireChildren: true,
                    });

                    treeNodeData.isExpanded = !treeNodeData.isExpanded;
                }
            }
        }
    }

    private hasTotals() {
        return this.totals && Object.keys(this.totals).length > 0;
    }

    private handleChildren(treeNode: KupTreeNode, expand: boolean) {
        for (let index = 0; index < treeNode.children.length; index++) {
            let node = treeNode.children[index];
            if (!node.disabled) {
                node.isExpanded = expand;
                if (node.children) {
                    this.handleChildren(node, expand);
                }
            }
        }
    }

    /**
     * Given a nodePath, transform that array into
     * @param nodePath
     */
    selectedNodeToString(nodePath: TreeNodePath) {
        let strToRet = '';
        if (nodePath && nodePath.length) {
            strToRet = nodePath[0].toString();
            for (let i = 1; i < nodePath.length; i++) {
                strToRet += `,${nodePath[i]}`;
            }
        }
        return strToRet;
    }

    private getFilterValueForTooltip(column: KupDataColumn): string {
        return this.filtersColumnMenuInstance.getFilterValueForTooltip(
            this.filters,
            column
        );
    }

    private getTreeNode(nodePath: TreeNodePath): KupTreeNode {
        if (!nodePath || nodePath.length == 0) {
            return null;
        }
        let father = this.data;
        let node: KupTreeNode = null;
        for (let index = 0; index < nodePath.length; index++) {
            if (node) {
                father = node.children;
            }
            const nodeIndex = nodePath[index];
            node = father[nodeIndex];
        }
        return node;
    }

    private onRemoveFilter(column: KupDataColumn) {
        const newFilters: GenericFilter = { ...this.filters };
        this.filtersColumnMenuInstance.removeFilter(newFilters, column.name);
        this.filters = newFilters;
    }

    onGlobalFilterChange({ detail }) {
        let value = '';
        if (detail && detail.value) {
            value = detail.value;
        }
        this.globalFilterValue = value;
    }

    getColumnValues(column: KupDataColumn): ValueDisplayedValue[] {
        return this.filtersTreeItemsInstance.getColumnValues(
            this,
            column,
            this.globalFilterValue,
            this.filtersColumnMenuInstance
        );
    }

    getRows(): Array<KupTreeNode> {
        return this.data ? this.data : [];
    }

    private filterNodes() {
        let items: KupTreeNode[] = this.filtersTreeItemsInstance.filterRows(
            this.getRows(),
            this.filters,
            this.globalFilterValue,
            this.getColumns(),
            this.filtersColumnMenuInstance
        );

        this.visibleNodes = this.calculateVisibleNodes(items);
    }

    private calculateVisibleNodes(items: KupTreeNode[]): number {
        let count = 0;
        if (items) {
            items.forEach((element) => {
                if (element.visible) {
                    count++;
                }
                count += this.calculateVisibleNodes(element.children);
            });
        }
        return count;
    }

    private refreshStructureState() {
        if (this.data) {
            if ((this.data as KupDataDataset).columns) {
                this.kupManager.debug.logMessage(
                    this,
                    'Detected KupDataDataset: setting up tree as grid.',
                    KupDebugCategory.WARNING
                );
                const data = this.data as KupDataDataset;
                this.columns = data.columns;
                this.data = this.kupManager.data.row.toNode(data);
                this.showColumns = true;
                this.showHeader = true;
            }
            // When the nodes must be expanded upon loading and the tree is not using a dynamicExpansion (and the current TreeNode is not disabled)
            // the default value of the treeExpandedPropName is set to true
            this.data.forEach((rootNode) => {
                this.expandCollapseAllNodes(
                    rootNode,
                    this.expanded && !this.useDynamicExpansion
                );
            });
            this.selectedNode = [];
        }
    }

    private createIconElement(
        CSSClass: string,
        icon: string,
        iconColor: string
    ) {
        if (
            icon.indexOf('.') > -1 ||
            icon.indexOf('/') > -1 ||
            icon.indexOf('\\') > -1
        ) {
            CSSClass += ' is-image';
            return (
                <span class={CSSClass}>
                    <img src={icon}></img>
                </span>
            );
        } else {
            let svg: string = `url('${getAssetPath(
                `./assets/svg/${icon}.svg`
            )}') no-repeat center`;
            CSSClass += ' kup-icon';
            let iconStyle = {
                ...(iconColor ? { background: iconColor } : {}),
                mask: svg,
                webkitMask: svg,
            };
            return <span style={iconStyle} class={CSSClass}></span>;
        }
    }
    private getCellStyle(colName: string, cellStyle: any): any {
        // Controls if there are columns with a specified width
        if (this.sizedColumns) {
            let colWidth: string = '';

            // Search if this column has a specified width
            for (let j = 0; j < this.sizedColumns.length; j++) {
                if (colName === this.sizedColumns[j].name) {
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
                cellStyle['max-width'] = colWidth;
                cellStyle['min-width'] = colWidth;
                cellStyle['width'] = colWidth;
                cellStyle['overflow'] = 'hidden';
            }
        }
        return cellStyle;
    }

    /**
     * Renders the header of the tree when it must be displayed as a table.
     * @returns An array of table header cells.
     */
    renderHeader(): JSX.Element[] {
        return this.getHeadingColumns().map((column) => {
            if (
                !this.isTreeColumnVisible() &&
                column.name === treeMainColumnName
            )
                return;

            //---- Filter ----
            let filter = null;

            if (
                this.filtersColumnMenuInstance.hasFiltersForColumn(
                    this.filters,
                    column
                )
            ) {
                const svgLabel =
                    this.kupManager.language.translate(
                        KupLanguageGeneric.REMOVE_FILTERS
                    ) + `: '${this.getFilterValueForTooltip(column)}'`;
                /**
                 * When column has a filter but filters must not be displayed, shows an icon to remove the filter.
                 * Upon click, the filter gets removed.
                 */
                filter = (
                    <span
                        title={svgLabel}
                        class={`kup-icon ${KupThemeIconValues.FILTER_REMOVE.replace(
                            '--',
                            ''
                        )}`}
                        onClick={(e: MouseEvent) => {
                            e.stopPropagation();
                            this.onRemoveFilter(column);
                        }}
                    ></span>
                );
            }

            return (
                <th
                    data-column={column.name}
                    style={this.getCellStyle(column.name, null)}
                >
                    <span class="column-title">{column.title}</span>
                    {filter}
                </th>
            );
        });
    }

    /**
     * Renders a content with a part highlighted.
     * NOTE: same in kup-accordion and in kup-tree
     */
    private renderHighlightedContent(
        content: string,
        highlight: string,
        styleClass: string
    ) {
        let contentSlices = [];
        if (highlight && content) {
            let contentPart = content;
            let end = contentPart
                .toLowerCase()
                .indexOf(highlight.toLowerCase());
            while (end > -1) {
                contentSlices.push(contentPart.substring(0, end));
                contentSlices.push(
                    <span class={styleClass + '--highlighted'}>
                        {contentPart.substring(end, end + highlight.length)}
                    </span>
                );
                contentPart = contentPart.substring(
                    end + highlight.length,
                    contentPart.length
                );
                end = contentPart
                    .toLowerCase()
                    .indexOf(highlight.toLowerCase());
            }
            if (end < contentPart.length) {
                contentSlices.push(
                    contentPart.substring(end, contentPart.length)
                );
            }
        } else {
            contentSlices.push(content);
        }
        return (
            <span
                class={styleClass}
                ref={(el: HTMLElement) => this.contentRefs.push(el)}
                title={this.preventXScroll ? content : null}
            >
                {contentSlices}
            </span>
        );
    }

    /**
     * Given a KupTreeNode, reads through its data then composes and returns its JSX object.
     * @param treeNodeData - The KupTreeNode object to parse.
     * @param treeNodePath - A string containing the comma(,) separated indexes of the KupTreeNodes to use,
     *    sorted from left to right, to access the current KupTreeNode starting from the data prop children object.
     * @param treeNodeDepth - An integer to keep track of the depth level of the current KupTreeNode. Used for indentation.
     * @returns The the JSX created from the current tree node.
     */
    renderTreeNode(
        treeNodeData: KupTreeNode,
        treeNodePath: string,
        treeNodeDepth: number = 0
    ): JSX.Element {
        // Creates the indentation of the current element. Use a css variable to specify padding.
        let indent = treeNodeDepth ? (
            <span
                class="kup-tree__indent"
                style={{
                    ['--kup_tree_node_depth']: this.asAccordion
                        ? (treeNodeDepth - 1).toString()
                        : treeNodeDepth.toString(),
                }}
            />
        ) : null;

        // If the tree node is expandable, adds the icon to show the expansion.
        // If expandable, also add the callback on the click action.
        // If it is not expandable, we simply add a placeholder with no icons.
        const hasExpandIcon: boolean = !!(
            treeNodeData.expandable &&
            ((treeNodeData.children && treeNodeData.children.length) ||
                this.useDynamicExpansion)
        );
        let expandClass = 'expand-icon kup-tree__icon kup-tree__node__expander';
        if (hasExpandIcon) {
            expandClass += ' kup-icon';
            if (this.asAccordion && treeNodeDepth === 0) {
                expandClass += ` ${KupThemeIconValues.DROPDOWN.replace(
                    '--',
                    ''
                )}`;
            } else if (treeNodeData.isExpanded) {
                expandClass += ` ${KupThemeIconValues.EXPANDED.replace(
                    '--',
                    ''
                )}`;
            } else {
                expandClass += ` ${KupThemeIconValues.COLLAPSED.replace(
                    '--',
                    ''
                )}`;
            }
        }
        let treeExpandIcon = (
            <span
                title={
                    this.kupManager.language.translate(
                        KupLanguageGeneric.EXPAND
                    ) +
                    '/' +
                    this.kupManager.language.translate(
                        KupLanguageGeneric.COLLAPSE
                    ) +
                    ' (CTRL + Click)'
                }
                class={expandClass}
                onClick={
                    this.expansionMode.toLowerCase() ===
                        KupTreeExpansionMode.DROPDOWN && !treeNodeData.disabled
                        ? (event: MouseEvent) => {
                              event.stopPropagation();
                              this.hdlTreeNodeExpanderClick(
                                  treeNodeData,
                                  treeNodePath,
                                  event.ctrlKey
                              );
                          }
                        : null
                }
            ></span>
        );

        // When TreeNode icons are visible, creates the icon if one is specified
        let treeNodeIcon: any = null;
        if (this.showIcons) {
            if (treeNodeData.icon) {
                if (treeNodeData.icon === '') {
                    treeNodeIcon = <span class="kup-tree__icon" />;
                } else {
                    treeNodeIcon = this.createIconElement(
                        'kup-tree__icon',
                        treeNodeData.icon,
                        treeNodeData.iconColor
                    );
                }
            } else {
                treeNodeIcon = null;
            }
        }

        // Composes additional options for the tree node element
        let treeNodeOptions = {};
        if (
            treeNodeData.hasOwnProperty('isExpanded') &&
            treeNodeData.isExpanded &&
            hasExpandIcon
        ) {
            // If the node is expanded it has this attribute set to if this node is expanded or not.
            treeNodeOptions['data-is-expanded'] = treeNodeData.isExpanded;
        }

        // When can be expanded OR selected
        if (!treeNodeData.disabled) {
            treeNodeOptions['onClick'] = (e: MouseEvent) => {
                // Note: event must be cloned
                // otherwise inside setTimeout will be exiting the Shadow DOM scope(causing loss of information, including target).
                const clone: GenericObject = {};
                for (const key in e) {
                    clone[key] = e[key];
                }
                this.clickTimeout.push(
                    setTimeout(
                        () =>
                            this.hdlTreeNodeClick(
                                clone as MouseEvent,
                                treeNodeData,
                                treeNodePath
                            ),
                        300
                    )
                );
            };
        }

        // When a tree node is displayed as a table
        let treeNodeCells: JSX.Element[] | null = null;
        let visibleCols = this.getVisibleColumns();
        if (this.showColumns && visibleCols && visibleCols.length) {
            treeNodeCells = [];
            // Renders all the cells
            for (let j = 0; j < visibleCols.length; j++) {
                const column = visibleCols[j];
                if (treeNodeData.cells && treeNodeData.cells[column.name]) {
                    const cell = treeNodeData.cells[column.name]
                        ? treeNodeData.cells[column.name]
                        : null;
                    const cellProps: FCellProps = {
                        cell: cell,
                        column: column,
                        component: this,
                        density: this.density,
                        editable: this.editableData,
                        renderKup: true,
                        row: treeNodeData,
                        setSizes: true,
                    };
                    treeNodeCells.push(
                        <td
                            class={`grid-cell`}
                            data-cell={cell}
                            data-column={column.name}
                        >
                            <FCell {...cellProps}></FCell>
                        </td>
                    );
                } else {
                    treeNodeCells.push(<td class={`grid-cell`}></td>);
                }
            }
        }
        let title: string = undefined;
        if (
            !this.kupManager.objects.isEmptyKupObj(treeNodeData.obj) &&
            this.kupManager.debug.isDebug()
        ) {
            title =
                treeNodeData.obj.t +
                '; ' +
                treeNodeData.obj.p +
                '; ' +
                treeNodeData.obj.k +
                ';';
        }

        let treeNodeCell = null;
        if (this.isTreeColumnVisible()) {
            let content = '';
            if (KupGlobalFilterMode.HIGHLIGHT === this.globalFilterMode) {
                content = this.renderHighlightedContent(
                    treeNodeData.value,
                    this.globalFilterValue,
                    'cell-content'
                );
            } else {
                content = (
                    <span
                        ref={(el: HTMLElement) => this.contentRefs.push(el)}
                        class="cell-content"
                        title={this.preventXScroll ? treeNodeData.value : null}
                    >
                        {treeNodeData.value}
                    </span>
                );
            }

            treeNodeCell = (
                <td
                    class={{
                        'first-node': treeNodeDepth === 0 ? true : false,
                        'mdc-ripple-surface':
                            this.ripple &&
                            !this.showColumns &&
                            !treeNodeData.disabled,
                        'is-obj': !this.kupManager.objects.isEmptyKupObj(
                            treeNodeData.obj
                        ),
                    }}
                    style={treeNodeData.style || null}
                    title={title}
                    onDblClick={() => {
                        this.onKupTreeNodeDblClick(treeNodeData, treeNodePath);
                    }}
                >
                    {this.asAccordion && !treeNodeDepth
                        ? [
                              treeNodeIcon,
                              content,
                              hasExpandIcon ? treeExpandIcon : null,
                          ]
                        : [indent, treeExpandIcon, treeNodeIcon, content]}
                </td>
            );
        }

        return (
            <tr
                class={{
                    'kup-tree__node': true,
                    'with-dyn': !treeNodeData.disabled,
                    'kup-tree__node--disabled': treeNodeData.disabled,
                    'kup-tree__node--first': treeNodeDepth ? false : true,
                    'kup-tree__node--selected':
                        !treeNodeData.disabled &&
                        treeNodePath ===
                            this.selectedNodeToString(this.selectedNode),
                }}
                data-row={treeNodeData}
                data-tree-path={treeNodePath}
                {...treeNodeOptions}
            >
                {treeNodeCell}
                {treeNodeCells}
            </tr>
        );
    }

    private closeTotalMenu() {
        this.openedTotalMenu = null;
        this.kupManager.removeClickCallback(this.clickCb);
    }

    private isOpenedTotalMenuForColumn(column: string): boolean {
        return this.openedTotalMenu === column;
    }

    onTotalsChange(event, column) {
        // close menu
        this.closeTotalMenu();
        if (column) {
            // must do this
            // otherwise does not fire the watcher
            const totalsCopy = { ...this.totals };
            const value = event.detail.selected.id;
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

    renderFooter() {
        const nodesCell: HTMLElement = <td></td>;
        const footerCells = this.getVisibleColumns().map(
            (column: KupDataColumn) => {
                let totalMenu = undefined;
                let menuLabel = TotalLabel.CALC;
                const translation = {
                    [TotalLabel.AVERAGE]: this.kupManager.language.translate(
                        KupLanguageTotals.AVERAGE
                    ),
                    [TotalLabel.CALC]: this.kupManager.language.translate(
                        KupLanguageTotals.CALCULATE
                    ),
                    [TotalLabel.CANC]: this.kupManager.language.translate(
                        KupLanguageTotals.CANCEL
                    ),
                    [TotalLabel.COUNT]: this.kupManager.language.translate(
                        KupLanguageTotals.COUNT
                    ),
                    [TotalLabel.DISTINCT]: this.kupManager.language.translate(
                        KupLanguageTotals.DISTINCT
                    ),
                    [TotalLabel.MATH]: this.kupManager.language.translate(
                        KupLanguageTotals.FORMULA
                    ),
                    [TotalLabel.MAX]: this.kupManager.language.translate(
                        KupLanguageTotals.MAXIMUM
                    ),
                    [TotalLabel.MIN]: this.kupManager.language.translate(
                        KupLanguageTotals.MINIMUM
                    ),
                    [TotalLabel.SUM]: this.kupManager.language.translate(
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

                if (this.isOpenedTotalMenuForColumn(column.name)) {
                    let listData: KupListNode[] = [
                        {
                            id: TotalMode.COUNT,
                            value: translation[TotalLabel.COUNT],
                        },
                        {
                            id: TotalMode.DISTINCT,
                            value: translation[TotalLabel.DISTINCT],
                        },
                    ];
                    if (this.kupManager.objects.isNumber(column.obj)) {
                        listData.push(
                            {
                                id: TotalMode.SUM,
                                value: translation[TotalLabel.SUM],
                            },
                            {
                                id: TotalMode.AVERAGE,
                                value: translation[TotalLabel.AVERAGE],
                            },
                            {
                                id: TotalMode.MIN,
                                value: translation[TotalLabel.MIN],
                            },
                            {
                                id: TotalMode.MAX,
                                value: translation[TotalLabel.MAX],
                            }
                        );
                    }
                    let selectedItem = listData.find(
                        (item) => item.value === menuLabel
                    );
                    if (selectedItem) {
                        selectedItem.selected = true;
                        listData.push({
                            id: TotalLabel.CANC,
                            separator: true,
                            value: translation[TotalLabel.CANC],
                        });
                    }

                    totalMenu = (
                        <kup-list
                            class={`total-menu`}
                            data={...listData}
                            id="totals-menu"
                            is-menu
                            keyboardNavigation={true}
                            menu-visible
                            onkup-list-click={(event) =>
                                this.onTotalsChange(event, column)
                            }
                        ></kup-list>
                    );
                }

                let value;
                if (
                    menuLabel === TotalLabel.COUNT ||
                    menuLabel === TotalLabel.DISTINCT
                ) {
                    value = this.footer[column.name];
                } else {
                    value = numberToFormattedStringNumber(
                        this.footer[column.name],
                        column.decimals,
                        column.obj ? column.obj.p : ''
                    );
                }

                return (
                    <td data-column={column.name}>
                        {totalMenu}
                        <span
                            class="totals-value"
                            title={translation[menuLabel]}
                        >
                            {value}
                        </span>
                    </td>
                );
            }
        );

        return (
            <tfoot>
                <tr>
                    {nodesCell}
                    {footerCells}
                </tr>
            </tfoot>
        );
    }

    didLoadInteractables() {
        this.interactableTouch.push(this.treeWrapperRef);
        const tapCb = (e: PointerEvent) => {
            if (this.hold) {
                this.hold = false;
                return;
            }
            switch (e.button) {
                // right click
                case 2:
                    this.kupTreeContextMenu.emit({
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
                this.kupTreeContextMenu.emit({
                    comp: this,
                    id: this.rootElement.id,
                    details: this.contextMenuHandler(e),
                });
            }
        };
        this.kupManager.interact.on(
            this.treeWrapperRef,
            KupPointerEventTypes.TAP,
            tapCb
        );
        this.kupManager.interact.on(
            this.treeWrapperRef,
            KupPointerEventTypes.HOLD,
            holdCb
        );
    }

    private totalMenuPosition() {
        if (this.rootElement.shadowRoot) {
            const menu: HTMLKupListElement =
                this.rootElement.shadowRoot.querySelector('#totals-menu');
            if (menu) {
                this.kupManager.dynamicPosition.register(
                    menu as unknown as KupDynamicPositionElement,
                    this.totalMenuCoords
                );
                if (!this.clickCb) {
                    this.clickCb = {
                        cb: () => {
                            this.closeTotalMenu();
                            this.kupManager.dynamicPosition.stop(
                                menu as unknown as KupDynamicPositionElement
                            );
                        },
                        el: menu,
                    };
                }
                this.kupManager.addClickCallback(this.clickCb, true);
                this.kupManager.dynamicPosition.start(
                    menu as unknown as KupDynamicPositionElement
                );
                menu.menuVisible = true;
            }
        }
    }

    /**
     * Given a KupTreeNode, reads through its data to compose and return the KupTreeNodes of the root of this KupTreeNode
     * and its children nodes, composing an array of JSX KupTreeNodes.
     * @param treeNodeData - The KupTreeNode object to parse.
     * @param treeNodePath - A string containing the comma(,) separated indexes of the KupTreeNodes to use,
     *    sorted from left to right, to access the current KupTreeNode starting from the data prop children object.
     * @param treeNodeDepth - An integer to keep track of the depth level of the current KupTreeNode. Used for indentation.
     * @returns An array of JSX KupTreeNodes created from the given treeNodeData.
     */
    renderTree(
        treeNodeData: KupTreeNode,
        treeNodePath: string,
        treeNodeDepth: number = 0
    ): JSX.Element[] {
        let treeNodes = [];

        if (treeNodeData && treeNodeData.visible == true) {
            // Creates and adds the root of the current tree
            treeNodes.push(
                this.renderTreeNode(treeNodeData, treeNodePath, treeNodeDepth)
            );

            // Checks if the current node can be expanded, has children object, has children and is expanded
            if (
                treeNodeData.expandable &&
                treeNodeData.children &&
                treeNodeData.children.length &&
                treeNodeData.isExpanded
            ) {
                for (let i = 0; i < treeNodeData.children.length; i++) {
                    treeNodes = treeNodes.concat(
                        this.renderTree(
                            treeNodeData.children[i],
                            treeNodePath + ',' + i,
                            treeNodeDepth + 1
                        )
                    );
                }
            }
        }

        return treeNodes;
    }

    private setEllipsis(): void {
        const treeRect: DOMRect = this.rootElement.getBoundingClientRect();
        for (let index = 0; index < this.contentRefs.length; index++) {
            const content: HTMLElement = this.contentRefs[index];
            if (content) {
                const cell = content.parentNode as HTMLElement;
                if (this.asAccordion && cell.classList.contains('first-node')) {
                    cell.style.width = treeRect.width + 'px';
                } else {
                    content.classList.remove('cell-content--ellipsis');
                    content.style.setProperty('--kup_tree_content_width', ``);
                    const rect: DOMRect = content.getBoundingClientRect();
                    if (rect.right > treeRect.right) {
                        const failsafeOffset: number = 5;
                        const delta: number = rect.right - treeRect.right;
                        content.classList.add('cell-content--ellipsis');
                        content.style.setProperty(
                            '--kup_tree_content_width',
                            `${rect.width - delta - failsafeOffset}px`
                        );
                    }
                }
            }
        }
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.language.register(this);
        this.kupManager.theme.register(this);
        this.columnMenuInstance = new KupColumnMenu();
        this.refreshStructureState();
    }

    componentDidLoad() {
        this.didLoadInteractables();
        this.kupDidLoad.emit({ comp: this, id: this.rootElement.id });
        this.kupManager.resize.observe(this.rootElement);
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
        if (this.showFooter && this.columns) {
            this.footer = calcTotals(
                normalizeRows(this.getColumns(), this.nodesToRows()),
                this.totals
            );
        }
        this.filterNodes();
    }

    componentDidRender() {
        const root = this.rootElement.shadowRoot;
        if (root && this.ripple) {
            const rippleCells = root.querySelectorAll(
                '.mdc-ripple-surface:not(.mdc-ripple-upgraded)'
            );
            if (rippleCells) {
                for (let i = 0; i < rippleCells.length; i++) {
                    MDCRipple.attachTo(rippleCells[i]);
                }
            }
        }
        if (root) {
            const fs: NodeListOf<HTMLElement> =
                root.querySelectorAll('.f-text-field');
            for (let index = 0; index < fs.length; index++) {
                FTextFieldMDC(fs[index]);
            }
        }
        if (this.preventXScroll) {
            this.setEllipsis();
        }
        this.totalMenuPosition();
        this.checkScrollOnHover();
        this.setDynPosElements();

        // *** Store
        this.persistState();
        // ***
        this.oldWidth = this.rootElement.clientWidth;
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        this.contentRefs = [];

        this.sizedColumns = this.getSizedColumns();
        let wrapperClass: string = 'density-medium';
        switch (this.density) {
            case FCellPadding.DENSE:
                wrapperClass = 'density-dense';
                break;
            case FCellPadding.WIDE:
                wrapperClass = 'density-wide';
                break;
        }

        // Composes TreeNodes
        let treeNodes: JSX.Element[] = [];
        if (this.data && this.data.length) {
            this.data.forEach((zeroDepthNode, index) => {
                treeNodes = treeNodes.concat(
                    this.renderTree(zeroDepthNode, index.toString())
                );
            });
        } else {
            // There are no TreeNodes, so we print a single cell with a caption
            treeNodes.push(
                <tr>
                    <td>
                        {this.kupManager.language.translate(
                            KupLanguageGeneric.EMPTY_DATA
                        )}
                    </td>
                </tr>
            );
        }

        // Calculates if header must be shown or not
        const visibleHeader = this.showHeader && this.showColumns;

        let filterField = null;
        if (
            this.globalFilter &&
            this.data &&
            this.data.length &&
            this.data.length > 0
        ) {
            filterField = (
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

        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId} class={wrapperClass}>
                    {filterField}
                    <div
                        class="wrapper"
                        ref={(el: HTMLElement) =>
                            (this.treeWrapperRef =
                                el as KupScrollOnHoverElement)
                        }
                    >
                        <table
                            class="kup-tree"
                            data-show-columns={this.showColumns}
                            onContextMenu={(e: MouseEvent) => {
                                e.preventDefault();
                            }}
                        >
                            <thead
                                class={{
                                    'header--is-visible': visibleHeader,
                                }}
                            >
                                <tr>
                                    {visibleHeader ? this.renderHeader() : null}
                                </tr>
                            </thead>
                            <tbody>{treeNodes}</tbody>
                            {(this.showFooter || this.hasTotals()) &&
                            this.columns
                                ? this.renderFooter()
                                : null}
                        </table>
                    </div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.language.register(this);
        this.kupManager.resize.unobserve(this.rootElement);
        this.kupManager.theme.unregister(this);
        const dynamicPositionElements: NodeListOf<KupDynamicPositionElement> =
            this.rootElement.shadowRoot.querySelectorAll(
                '[' + kupDynamicPositionAttribute + ']'
            );
        if (dynamicPositionElements.length > 0) {
            this.kupManager.dynamicPosition.unregister(
                Array.prototype.slice.call(dynamicPositionElements)
            );
        }
        if (this.columnMenuCard) {
            this.columnMenuCard.remove();
        }
        if (this.scrollOnHover) {
            this.kupManager.scrollOnHover.unregister(this.treeWrapperRef);
        }
        this.kupDidUnload.emit({ comp: this, id: this.rootElement.id });
    }
}
