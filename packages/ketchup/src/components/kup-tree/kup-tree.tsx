import {
    Component,
    Prop,
    Element,
    Host,
    Event,
    EventEmitter,
    State,
    h,
    Watch,
    JSX,
    Method,
    getAssetPath,
} from '@stencil/core';

import {
    Cell,
    CellData,
    Column,
    Row,
} from './../kup-data-table/kup-data-table-declarations';

import {
    treeExpandedPropName,
    TreeNode,
    TreeNodePath,
} from './kup-tree-declarations';

import { hasTooltip } from '../../utils/object-utils';

import { scrollOnHover } from '../../utils/scroll-on-hover';
import { MDCRipple } from '@material/ripple';
import { KupDebug } from '../../utils/kup-debug/kup-debug';
import { KupTheme } from '../../utils/kup-theme/kup-theme';
import {
    styleHasBorderRadius,
    styleHasWritingMode,
} from '../kup-data-table/kup-data-table-helper';
import { KupTreeState } from './kup-tree-state';
import { KupStore } from '../kup-state/kup-store';

import { KupTooltip } from '../kup-tooltip/kup-tooltip';
import { setTooltip, unsetTooltip } from '../../utils/helpers';

import {
    getCellType,
    getCellValueForDisplay,
    getColumnByName,
} from '../../utils/cell-utils';
import { stringToNumber } from '../../utils/utils';
import { ColumnMenu } from '../../utils/column-menu/column-menu';
import { FiltersColumnMenu } from '../../utils/filters/filters-column-menu';
import { GenericFilter } from '../../utils/filters/filters-declarations';
import { FiltersRows } from '../../utils/filters/filters-rows';
import { FiltersTreeItems } from '../../utils/filters/filters-tree-items';

@Component({
    tag: 'kup-tree',
    styleUrl: 'kup-tree.scss',
    shadow: true,
})
export class KupTree {
    //////////////////////////////
    // Begin state stuff
    //////////////////////////////

    @Prop() stateId: string = '';
    @Prop() store: KupStore;

    state: KupTreeState = new KupTreeState();

    initWithPersistedState(): void {
        if (this.store && this.stateId) {
            const state = this.store.getState(this.stateId);
            if (state != null) {
                console.log(
                    'Initialize with state for stateId ' + this.stateId,
                    state
                );
                // *** PROPS ***
                this.density = state.density;
                this.globalFilterValue = state.globalFilterValue;
                //
            }
        }
    }

    persistState(): void {
        if (this.store && this.stateId) {
            // *** PROPS ***
            this.state.density = this.density;
            this.state.globalFilterValue = this.globalFilterValue;
            //
            console.log(
                'Persisting state for stateId ' + this.stateId + ': ',
                this.state
            );
            this.store.persistState(this.stateId, this.state);
        }
    }

    //////////////////////////////
    // End state stuff
    //////////////////////////////

    @Element() rootElement: HTMLElement;
    @State() customStyleTheme: string = undefined;
    @State()
    private openedMenu: string = null;

    /**
     * Auto select programmatic selectic node
     */
    @Prop() autoSelectionNodeMode: boolean = true;
    /**
     * The columns of the tree when tree visualization is active.
     */
    @Prop() columns?: Column[];
    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * The json data used to populate the tree view: the basic, always visible tree nodes.
     */
    @Prop() data: TreeNode[] = [];
    /**
     * The density of the rows, defaults at 'medium' and can also be set to 'dense' or 'wide'.
     */
    @Prop() density: string = 'medium';
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
        treeNodeToExpand: TreeNode,
        treeNodePath: TreeNodePath
    ) => Promise<TreeNode[]> | undefined = undefined;
    /**
     * Flag: the nodes of the whole tree must be already expanded upon loading. Disabled nodes do NOT get expanded.
     */
    @Prop() expanded: boolean = false;
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
     * Sets the possibility to remove the selected column.
     */
    @Prop() removableColumns: boolean = true;
    /**
     * Activates the scroll on hover function.
     */
    @Prop() scrollOnHover: boolean = false;
    /**
     * An array of integers containing the path to a selected child.\
     * Groups up the properties SelFirst, SelItem, SelName.
     */
    @Prop({ mutable: true }) selectedNode: TreeNodePath = [];
    /**
     * Shows the tree data as a table.
     */
    @Prop() showColumns: boolean = false;
    /**
     * When set to true enables the column filters.
     */
    @Prop() showFilters: boolean = true;
    /**
     * Flag: shows the header of the tree when the tree is displayed as a table.
     * @see showColumns
     */
    @Prop() showHeader: boolean = false;
    /**
     * Shows the icons of the nodes.
     */
    @Prop() showIcons: boolean = true;
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
     * If set to true, displays tooltip on right click; if set to false, displays tooltip on mouseOver.
     */
    @Prop() showTooltipOnRightClick: boolean = true;
    /**
     * Defines the timeout for tooltip detail
     */
    @Prop() tooltipDetailTimeout: number;
    /**
     * Defines the timeout for tooltip load
     */
    @Prop() tooltipLoadTimeout: number;

    //-------- State --------
    @State() selectedNodeString: string = '';

    @State() stateSwitcher: boolean = false;

    /**
     * Instance of the KupDebug class.
     */
    private kupDebug: KupDebug = new KupDebug();
    /**
     * Instance of the KupTheme class.
     */
    private kupTheme: KupTheme = new KupTheme();
    private treeWrapperRef: any;
    private scrollOnHoverInstance: scrollOnHover;
    private selectedColumn: string = '';
    private clickTimeout: any[] = [];
    private iconPaths: [{ icon: string; path: string }] = undefined;
    private globalFilterTimeout: number;

    private sizedColumns: Column[] = undefined;

    private tooltip: KupTooltip;
    columnFilterTimeout: number;
    private columnMenuInstance: ColumnMenu;
    private filtersColumnMenuInstance: FiltersColumnMenu;
    private filtersTreeItemsInstance: FiltersTreeItems;

    //-------- Events --------
    /**
     * Fired when a TreeNode gets collapsed (closed).
     */
    @Event({
        eventName: 'kupTreeNodeCollapse',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTreeNodeCollapse: EventEmitter<{
        treeNodePath: TreeNodePath;
        treeNode: TreeNode;
        tree: KupTree;
    }>;

    /**
     * Fired when a node expansion ion has been triggered.
     * Contains additional data when the tree is using the dynamicExpansion feature.
     * @event kupTreeNodeExpand
     * @type {object}
     * @property {TreeNodePath} treeNodePath - The array of indexes to retrieve the current treeNode inside the data prop.
     * @property {TreeNode} treeNode - Reference to the TreeNode data object which is being expanded (passed through the data prop).
     * @property {boolean} usesDynamicExpansion - Flag to notify that the component is running in dynamicExpansion mode.
     * @property {boolean} dynamicExpansionRequireChildren - Flag to notify that the current dynamicExpansion event
     *  requires the parent component to add TreeNode children to the given TreeNode.
     * @see useDynamicExpansion
     * @see dynamicExpansionCallback
     * @since 1.0.0
     */
    @Event({
        eventName: 'kupTreeNodeExpand',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTreeNodeExpand: EventEmitter<{
        treeNodePath: TreeNodePath;
        treeNode: TreeNode;
        usesDynamicExpansion?: boolean;
        dynamicExpansionRequireChildren?: boolean;
        tree: KupTree;
    }>;

    /**
     * Fired when a node of the tree has been selected
     */
    @Event({
        eventName: 'kupTreeNodeSelected',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTreeNodeSelected: EventEmitter<{
        treeNodePath: TreeNodePath;
        treeNode: TreeNode;
        columnName: string;
        auto: boolean;
        tree: KupTree;
    }>;

    @Event({
        eventName: 'kupTreeNodeButtonClicked',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTreeNodeButtonClicked: EventEmitter<{
        treeNodePath: TreeNodePath;
        treeNode: TreeNode;
        column: Column;
        columnName: string;
        auto: boolean;
        tree: KupTree;
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

    @Event({
        eventName: 'kupDidLoad',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDidLoad: EventEmitter<void>;

    /**
     * Triggered when stop propagation event
     */

    @Event({
        eventName: 'kupDidUnload',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDidUnload: EventEmitter<void>;

    @Event({
        eventName: 'kupTreeNodeDblClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTreeNodeDblClick: EventEmitter<{
        treeNodePath: TreeNodePath;
        treeNode: TreeNode;
    }>;

    @Event({
        eventName: 'kupTreeDynamicMassExpansion',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTreeDynamicMassExpansion: EventEmitter<{
        treeNodePath?: TreeNodePath;
        treeNode?: TreeNode;
        expandAll?: boolean;
    }>;

    //---- Methods ----

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    @Method()
    async expandAll() {
        if (!this.useDynamicExpansion) {
            for (let index = 0; index < this.data.length; index++) {
                this.data[index][treeExpandedPropName] = true;
                this.handleChildren(this.data[index], true);
            }
        } else {
            this.kupTreeDynamicMassExpansion.emit({
                expandAll: true,
            });
        }
        this.forceUpdate();
    }

    @Method()
    async collapseAll() {
        if (!this.useDynamicExpansion) {
            for (let index = 0; index < this.data.length; index++) {
                this.data[index][treeExpandedPropName] = false;
                this.handleChildren(this.data[index], false);
            }
        } else {
            this.kupTreeDynamicMassExpansion.emit({
                expandAll: false,
            });
        }
        this.forceUpdate();
    }

    setColumnMenu(column: string) {
        this.openedMenu = column;
    }

    private setScrollOnHover() {
        this.scrollOnHoverInstance = new scrollOnHover();
        this.scrollOnHoverInstance.scrollOnHoverSetup(this.treeWrapperRef);
    }

    private checkScrollOnHover() {
        if (!this.scrollOnHoverInstance) {
            if (this.scrollOnHover) {
                this.setScrollOnHover();
            }
        } else {
            if (!this.scrollOnHover) {
                this.scrollOnHoverInstance.scrollOnHoverDisable(
                    this.treeWrapperRef
                );
                this.scrollOnHoverInstance = undefined;
            }
        }
    }

    onKupTreeNodeDblClick(treeNodeData: TreeNode, treeNodePath: string) {
        for (let index = 0; index < this.clickTimeout.length; index++) {
            clearTimeout(this.clickTimeout[index]);
            this.kupDebug.logMessage(
                this,
                'Cleared hdlTreeNodeClicked timeout(' +
                    this.clickTimeout[index] +
                    ').'
            );
        }
        this.clickTimeout = [];
        this.kupTreeNodeDblClick.emit({
            treeNodePath: treeNodePath
                .split(',')
                .map((treeNodeIndex) => parseInt(treeNodeIndex)),
            treeNode: treeNodeData,
        });
    }

    //-------- Lifecycle hooks --------

    componentWillLoad() {
        this.kupDebug.logLoad(this, false);
        this.kupTheme.setThemeCustomStyle(this);
        this.columnMenuInstance = new ColumnMenu();
        this.filtersColumnMenuInstance = new FiltersColumnMenu();
        this.filtersTreeItemsInstance = new FiltersTreeItems();

        this.refreshStructureState();

        // Initializes the selectedNodeString
        if (Array.isArray(this.selectedNode)) {
            this.selectedNodeString = this.selectedNode.toString();
        }
    }

    componentDidLoad() {
        if (
            this.selectedNode &&
            this.selectedNode.length > 0 &&
            this.selectedNode[0] >= 0
        ) {
            let path = this.selectedNode;
            let tn = this.data[path[0]];
            if (path.length > 1) {
                path = path.slice(1);
                this.launchNodeEvent(path, tn);
            } else {
                this.hdlTreeNodeClicked(tn, this.selectedNodeString, true);
            }
        }
        this.kupDidLoad.emit();
        this.kupDebug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupDebug.logRender(this, false);
        this.filterNodes();
    }

    componentDidRender() {
        const root = this.rootElement.shadowRoot;

        this.columnMenuInstance.reposition(this);
        this.checkScrollOnHover();

        if (root) {
            let rippleCells: any = root.querySelectorAll('.mdc-ripple-surface');
            if (rippleCells) {
                for (let i = 0; i < rippleCells.length; i++) {
                    MDCRipple.attachTo(rippleCells[i]);
                }
            }
        }

        // *** Store
        this.persistState();
        // ***
        this.kupDebug.logRender(this, true);
    }

    componentDidUnload() {
        this.kupDidUnload.emit();
    }

    //-------- Watchers --------
    @Watch('data')
    enrichDataWhenChanged(newData, oldData) {
        if (newData !== oldData) {
            /*
            newData.forEach((rootNode) => {
                this.expandCollapseAllNodes(
                    rootNode,
                    this.expanded && !this.useDynamicExpansion
                );
            });
            this.filterNodes();
            */
            this.refreshStructureState();
        }
    }

    @Watch('expanded')
    enrichStructureStateWhenChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.refreshStructureState();
        }
    }

    @Watch('selectedNode')
    selectedNodeToStr(newData) {
        if (Array.isArray(newData)) {
            this.selectedNodeString = newData.toString();
        }
    }

    //-------- Methods --------
    expandCollapseNode(treeNode: TreeNode, expandNode: boolean = false) {
        this.filtersTreeItemsInstance.expandCollapseNode(
            treeNode,
            expandNode,
            treeExpandedPropName
        );

        /*
        // The node is expandable, which means there are sub trees
        if (treeNode.expandable) {
            // If the node does not already have the property to toggle expansion we add it
            // Notice how, if the property is already set, its first value will be the same value that was provided by the object itself
            // and only if the node must be expanded automatically then [treeExpandedPropName] is set to true forcibly.
            // This is done to allow a TreeNode to force its [treeExpandedPropName] to true so that specific nodes can be already set to open.
            treeNode[treeExpandedPropName] = treeNode.hasOwnProperty(
                treeExpandedPropName
            )
                ? treeNode[treeExpandedPropName] || expandNode
                : expandNode;
        }*/
    }

    expandCollapseAllNodes(treeNode: TreeNode, expandNode: boolean = false) {
        // The node is expandable, which means there are sub trees
        if (treeNode.expandable && !treeNode.disabled) {
            this.expandCollapseNode(treeNode, expandNode);
            // Enriches also direct subtrees recursively (if it has children)
            if (treeNode.children && treeNode.children.length) {
                // To save some function calls, only child elements which are expandable will be enriched
                for (let i = 0; i < treeNode.children.length; i++) {
                    this.expandCollapseAllNodes(
                        treeNode.children[i],
                        expandNode
                    );
                }
            }
        }
    }

    getColumns(): Array<Column> {
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

    getVisibleColumns(): Array<Column> {
        return this.getColumns().filter((column) =>
            column.hasOwnProperty('visible') ? column.visible : true
        );
    }

    /*
     *For launch the event when selected node
     */
    launchNodeEvent(treeNodePath: TreeNodePath, treeNode: TreeNode) {
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
                    this.hdlTreeNodeClicked(tn, this.selectedNodeString, true);
                }
            }
        }
    }

    /**
     * Forces component update with a simple trick.
     * Should be avoided if possible.
     * Thinking about a more clean and functional solution.
     *
     * A possible idea on where to store the expanded flag could be the following:
     * 1. generate an unique id for each tree instance and add a common prefix to it (something like 'kupTree${uniqueId}');
     * 2. store that new string and use it as a key to access the flag for showing if that TreeNode is expanded or not.
     * However there is a problem with this approach.
     * When the necessity of recreating the state of the components after browsing another page away will arise,
     * the fact that each time a new id is generated will make the previously used id invalid and the whole tree will be rendered with its initial state.
     * The only solution to this is to add a prop which will allow the user of the component to pass an id to be used as
     * index for storing and retrieving the expanded state of the current node.
     * Also, when the component will be destroyed, it should emit an event containing the above discussed key to be stored.
     *
     * @todo Find a better way to achieve this. And maybe also where to store the expanded flag.
     * @author Francesco Bonacini f.bonacini@dreamonkey.com
     */
    forceUpdate() {
        this.stateSwitcher = !this.stateSwitcher;
    }

    private onJ4btnClicked(
        treeNodeData: TreeNode,
        treeNodePath: string,
        column: Column,
        auto: boolean
    ) {
        this.kupTreeNodeButtonClicked.emit({
            treeNodePath: treeNodePath
                .split(',')
                .map((treeNodeIndex) => parseInt(treeNodeIndex)),
            treeNode: treeNodeData,
            column: column,
            columnName: column.name,
            auto: auto,
            tree: this,
        });
    }

    // When a TreeNode can be selected
    hdlTreeNodeClicked(
        treeNodeData: TreeNode,
        treeNodePath: string,
        auto: boolean
    ) {
        unsetTooltip(this.tooltip);
        // If this TreeNode is not disabled, then it can be selected and an event is emitted
        if (treeNodeData && !treeNodeData.disabled) {
            if (this.autoSelectionNodeMode)
                this.selectedNode = treeNodePath
                    .split(',')
                    .map((treeNodeIndex) => parseInt(treeNodeIndex));

            this.kupTreeNodeSelected.emit({
                treeNodePath: treeNodePath
                    .split(',')
                    .map((treeNodeIndex) => parseInt(treeNodeIndex)),
                treeNode: treeNodeData,
                columnName: this.selectedColumn,
                auto: auto,
                tree: this,
            });
        }
        this.selectedColumn = '';
    }

    // When a TreeNode must be expanded or closed.
    hdlTreeNodeExpanderClicked(
        treeNodeData: TreeNode,
        treeNodePath: string,
        ctrlKey: boolean
    ) {
        unsetTooltip(this.tooltip);
        // If the node is expandable
        if (treeNodeData.expandable) {
            // Always composes the tree node path as an array
            const arrayTreeNodePath: TreeNodePath = treeNodePath
                .split(',')
                .map((index) => parseInt(index));

            // There are already children set in this TreeNode -> expand or collapse node and emit appropriate event
            if (treeNodeData.children && treeNodeData.children.length) {
                // Updates expanded state and force rerender
                treeNodeData[treeExpandedPropName] = !treeNodeData[
                    treeExpandedPropName
                ];
                if (ctrlKey) {
                    this.handleChildren(
                        treeNodeData,
                        treeNodeData[treeExpandedPropName]
                    );
                }
                this.forceUpdate();
                if (treeNodeData[treeExpandedPropName]) {
                    // TreeNode is now expanded -> Fires expanded event
                    this.kupTreeNodeExpand.emit({
                        treeNodePath: arrayTreeNodePath,
                        treeNode: treeNodeData,
                        usesDynamicExpansion: this.useDynamicExpansion,
                        tree: this,
                    });
                } else {
                    // TreeNode is now collapsed -> Fires collapsed event
                    this.kupTreeNodeCollapse.emit({
                        treeNodePath: arrayTreeNodePath,
                        treeNode: treeNodeData,
                        tree: this,
                    });
                }
            } else if (this.useDynamicExpansion) {
                if (ctrlKey) {
                    this.kupTreeDynamicMassExpansion.emit({
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
                            treeNodeData[treeExpandedPropName] = !treeNodeData[
                                treeExpandedPropName
                            ];
                            this.forceUpdate();

                            // TreeNode is now expanded -> Fires expanded event
                            this.kupTreeNodeExpand.emit({
                                treeNodePath: arrayTreeNodePath,
                                treeNode: treeNodeData,
                                usesDynamicExpansion: true,
                                tree: this,
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
                        treeNode: treeNodeData,
                        treeNodePath: arrayTreeNodePath,
                        usesDynamicExpansion: true,
                        dynamicExpansionRequireChildren: true,
                        tree: this,
                    });

                    treeNodeData[treeExpandedPropName] = !treeNodeData[
                        treeExpandedPropName
                    ];
                }
            }
        }
    }

    private handleChildren(TreeNode: TreeNode, expand: boolean) {
        for (let index = 0; index < TreeNode.children.length; index++) {
            let node = TreeNode.children[index];
            if (!node.disabled) {
                node[treeExpandedPropName] = expand;
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
                strToRet += `,${nodePath[0]}`;
            }
        }
        return strToRet;
    }

    onGlobalFilterChange({ detail }) {
        let value = '';
        if (detail && detail.value) {
            value = detail.value;
        }
        this.globalFilterValue = value;
    }

    getColumnValues(
        column: Column
    ): { value: string; displayedValue: string }[] {
        return this.filtersTreeItemsInstance.getColumnValues(
            this,
            column,
            this.globalFilterValue,
            this.filtersColumnMenuInstance
        );
    }

    getRows(): Array<TreeNode> {
        return this.data ? this.data : [];
    }

    private filterNodes() {
        this.filtersTreeItemsInstance.filterRows(
            this.getRows(),
            this.filters,
            this.globalFilterValue,
            this.getColumns(),
            treeExpandedPropName,
            this.filtersColumnMenuInstance
        );
    }

    private refreshStructureState() {
        if (this.data) {
            // When the nodes must be expanded upon loading and the tree is not using a dynamicExpansion (and the current TreeNode is not disabled)
            // the default value of the treeExpandedPropName is set to true
            this.data.forEach((rootNode) => {
                this.expandCollapseAllNodes(
                    rootNode,
                    this.expanded && !this.useDynamicExpansion
                );
            });
            this.filterNodes();
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
            CSSClass += ' icon-container material-icons';
            let iconStyle = {
                ...(iconColor ? { background: iconColor } : {}),
                mask: svg,
                webkitMask: svg,
            };
            return <span style={iconStyle} class={CSSClass}></span>;
        }
    }

    /**
     * Factory function for cells.
     * @param cell - cell object
     * @param previousRowCellValue - An optional value of the previous cell on the same column. If set and equal to the value of the current cell, makes the value of the current cell go blank.
     * @param cellData - Additional data for the current cell.
     * @param cellData.column - The column object to which the cell belongs.
     * @param cellData.treeNode - The treeNode object to which the cell belongs.
     * @param cellData.treeNodePath - The treeNodePath to which the cell belongs.
     */
    renderCell(
        cell: Cell,
        cellData: {
            column: Column;
            treeNode: TreeNode;
            treeNodePath: string;
        },
        previousRowCellValue?: string
    ) {
        const classObj: Record<string, boolean> = {
            'cell-content': true,
            clickable: !!cellData.column.clickable,
        };

        // When the previous row value is different from the current value, we can show the current value.
        const valueToDisplay =
            previousRowCellValue !== cell.value ? cell.value : '';

        // Sets the default value
        let content: any = valueToDisplay;
        let cellType: string = this.getCellType(cell);
        let props: any = { ...cell.data };
        classObj[cellType + '-cell'] = true;

        if (cell.data) {
            this.setCellSize(cellType, props, cell);
            content = this.setKupCell(
                cellType,
                classObj,
                props,
                cell,
                cellData
            );
        } else {
            content = this.setCell(
                cellType,
                content,
                classObj,
                cell,
                cellData.column
            );
        }

        // Elements of the cell
        let cellElements = [];
        let tdStyle = undefined;
        let style = undefined;
        if (styleHasBorderRadius(cell) || styleHasWritingMode(cell)) {
            style = cell.style;
            if (styleHasBorderRadius(cell) && !style['padding']) {
                style['padding'] = '5px';
            }
            if (style['text-align']) {
                style['float'] = style['text-align'];
            }
        } else {
            tdStyle = cell.style;
        }

        tdStyle = this.getCellStyle(cellData.column.name, tdStyle);

        let icon = undefined;

        if ((cellData.column.icon || cell.icon) && content) {
            let svg: string = '';
            if (cell.icon) {
                svg = cell.icon;
            } else {
                svg = cellData.column.icon;
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

        const _hasTooltip: boolean = hasTooltip(cell.obj);
        let title: string = undefined;
        if (_hasTooltip) {
            classObj['is-obj'] = true;
            if (this.kupDebug.isDebug()) {
                title =
                    cell.obj.t + '; ' + cell.obj.p + '; ' + cell.obj.k + ';';
            }
        }

        let cellClass = undefined;
        if (cell.cssClass) {
            cellClass = cell.cssClass;
        }

        cellElements.push(
            <span title={title} style={style} class={classObj}>
                {icon}
                {content}
            </span>
        );

        return (
            <td
                class={cellClass}
                onClick={() => (this.selectedColumn = cellData.column.name)}
                style={tdStyle}
                {...this.getToolTipEventHandlers(cell, _hasTooltip)}
            >
                {cellElements}
            </td>
        );
    }

    /**
     * Controls if current cell needs a tooltip and eventually adds it.
     * @todo When the option forceOneLine is active, there is a problem with the current implementation of the tooltip. See documentation in the mauer wiki for better understanding.
     */
    private getToolTipEventHandlers(cell: Cell, hasTooltip: boolean) {
        let eventHandlers = undefined;
        if (hasTooltip) {
            if (this.showTooltipOnRightClick) {
                eventHandlers = {
                    onContextMenu: (ev) => {
                        ev.preventDefault();
                        setTooltip(ev, cell, this.tooltip);
                    },
                };
            } else {
                eventHandlers = {
                    onMouseEnter: (ev) => {
                        setTooltip(ev, cell, this.tooltip);
                    },
                    onMouseLeave: () => {
                        unsetTooltip(this.tooltip);
                    },
                };
            }
        }
        return eventHandlers;
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

    private setCellSize(cellType: string, props: any, cell: Cell) {
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
            case 'checkbox':
                if (cell.style) {
                    if (!cell.style.height) {
                        cell.style['minHeight'] = '40px';
                    }
                } else {
                    cell.style = { minHeight: '40px' };
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

    private setCell(
        cellType: string,
        content: string,
        classObj: Record<string, boolean>,
        cell: Cell,
        column: Column
    ) {
        switch (cellType) {
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
                    return <span class="text">{cellValue}</span>;
                }
                return content;
            case 'date':
                if (content && content != '') {
                    const cellValue = getCellValueForDisplay(column, cell);
                    return <span class="text">{cellValue}</span>;
                }
                return content;
            case 'datetime':
                if (content && content != '') {
                    const cellValue = getCellValueForDisplay(column, cell);
                    return <span class="text">{cellValue}</span>;
                }
                return content;
            case 'time':
                if (content && content != '') {
                    const cellValue = getCellValueForDisplay(column, cell);
                    return <span class="text">{cellValue}</span>;
                }
                return content;
            case 'string':
            default:
                return <span class="text">{content}</span>;
        }
    }

    private setKupCell(
        cellType: string,
        classObj: Record<string, boolean>,
        props: any,
        cell: Cell,
        cellData: CellData
    ) {
        switch (cellType) {
            case 'bar':
                return <kup-image {...props} />;
            case 'button':
                classObj['is-centered'] = true;
                props['disabled'] = cellData.treeNode.readOnly;
                props['onKupButtonClick'] = this.onJ4btnClicked.bind(
                    cellData.treeNode,
                    cellData.treeNodePath,
                    cellData.column,
                    false
                );
                return <kup-button {...props}></kup-button>;
            case 'chart':
                classObj['is-centered'] = true;
                return <kup-chart {...props} />;
            case 'checkbox':
                classObj['is-centered'] = true;
                if (props) {
                    props['disabled'] = cellData.treeNode.readOnly;
                } else {
                    props = { disabled: cellData.treeNode.readOnly };
                }
                return <kup-checkbox {...props}></kup-checkbox>;
            case 'chips':
                return <kup-chip {...props}></kup-chip>;
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
                return (
                    <kup-progress-bar
                        class="cell-progress-bar"
                        value={stringToNumber(cell.value)}
                        {...props}
                    ></kup-progress-bar>
                );
            case 'icon':
            case 'image':
                classObj['is-centered'] = true;
                if (props.badgeData) {
                    classObj['has-padding'] = true;
                }
                return <kup-image {...props} />;
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
                props['disabled'] = cellData.treeNode.readOnly;
                return <kup-radio {...props}></kup-radio>;
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

    /**
     * Renders the header of the tree when it must be displayed as a table.
     * @returns An array of table header cells.
     */
    renderHeader(): JSX.Element[] {
        return this.getVisibleColumns().map((column) => (
            <th
                data-column={column.name}
                onContextMenu={(e: MouseEvent) =>
                    this.columnMenuInstance.open(
                        e,
                        this,
                        column.name,
                        this.tooltip
                    )
                }
                style={this.getCellStyle(column.name, null)}
            >
                <span class="column-title">{column.title}</span>
            </th>
        ));
    }

    /**
     * Given a TreeNode, reads through its data then composes and returns its JSX object.
     * @param treeNodeData - The TreeNode object to parse.
     * @param treeNodePath - A string containing the comma(,) separated indexes of the TreeNodes to use,
     *    sorted from left to right, to access the current TreeNode starting from the data prop children object.
     * @param treeNodeDepth - An integer to keep track of the depth level of the current TreeNode. Used for indentation.
     * @returns The the JSX created from the current tree node.
     */
    renderTreeNode(
        treeNodeData: TreeNode,
        treeNodePath: string,
        treeNodeDepth: number = 0
    ): JSX.Element {
        // Creates the indentation of the current element. Use a css variable to specify padding.
        let indent = treeNodeDepth ? (
            <span
                class="kup-tree__indent"
                style={{ ['--tree-node_depth']: treeNodeDepth.toString() }}
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
            expandClass += ' icon-container';
            if (treeNodeData[treeExpandedPropName]) {
                expandClass += ' expanded';
            } else {
                expandClass += ' collapsed';
            }
        }
        let treeExpandIcon = (
            <span
                title="Expand/collapse children (CTRL + Click) "
                class={expandClass}
                onClick={
                    !treeNodeData.disabled
                        ? (event: MouseEvent) => {
                              event.stopPropagation();
                              this.hdlTreeNodeExpanderClicked(
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
                        'kup-tree__icon icon-container',
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
            treeNodeData.hasOwnProperty(treeExpandedPropName) &&
            treeNodeData[treeExpandedPropName] &&
            hasExpandIcon
        ) {
            // If the node is expanded it has this attribute set to if this node is expanded or not.
            treeNodeOptions['data-is-expanded'] =
                treeNodeData[treeExpandedPropName];
        }

        // When can be expanded OR selected
        if (!treeNodeData.disabled) {
            treeNodeOptions['onClick'] = () => {
                this.clickTimeout.push(
                    setTimeout(
                        () =>
                            this.hdlTreeNodeClicked(
                                treeNodeData,
                                treeNodePath,
                                false
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
                treeNodeCells.push(
                    this.renderCell(treeNodeData.cells[column.name], {
                        column,
                        treeNode: treeNodeData,
                        treeNodePath: treeNodePath,
                    })
                );
            }
        }

        const _hasTooltip: boolean = hasTooltip(treeNodeData.obj);
        let title: string = undefined;
        if (_hasTooltip && this.kupDebug.isDebug()) {
            title =
                treeNodeData.obj.t +
                '; ' +
                treeNodeData.obj.p +
                '; ' +
                treeNodeData.obj.k +
                ';';
        }
        const cell: Cell = {
            obj: treeNodeData.obj,
            value: treeNodeData.value,
        };

        return (
            <tr
                class={{
                    'kup-tree__node': true,
                    'with-dyn': !treeNodeData.disabled,
                    'kup-tree__node--disabled': treeNodeData.disabled,
                    'kup-tree__node--selected':
                        !treeNodeData.disabled &&
                        treeNodePath === this.selectedNodeString,
                }}
                data-tree-path={treeNodePath}
                {...treeNodeOptions}
            >
                <td
                    class={{
                        'first-node': treeNodeDepth === 0 ? true : false,
                        'mdc-ripple-surface':
                            !this.showColumns && !treeNodeData.disabled,
                        'is-obj': hasTooltip(treeNodeData.obj),
                    }}
                    style={treeNodeData.style || null}
                    title={title}
                    onDblClick={() => {
                        this.onKupTreeNodeDblClick(treeNodeData, treeNodePath);
                    }}
                    {...this.getToolTipEventHandlers(cell, _hasTooltip)}
                >
                    {indent}
                    {treeExpandIcon}
                    {treeNodeIcon}
                    <span class="cell-content">{treeNodeData.value}</span>
                </td>
                {treeNodeCells}
            </tr>
        );
    }

    /**
     * Given a TreeNode, reads through its data to compose and return the TreeNodes of the root of this TreeNode
     * and its children nodes, composing an array of JSX TreeNodes.
     * @param treeNodeData - The TreeNode object to parse.
     * @param treeNodePath - A string containing the comma(,) separated indexes of the TreeNodes to use,
     *    sorted from left to right, to access the current TreeNode starting from the data prop children object.
     * @param treeNodeDepth - An integer to keep track of the depth level of the current TreeNode. Used for indentation.
     * @returns An array of JSX TreeNodes created from the given treeNodeData.
     */
    renderTree(
        treeNodeData: TreeNode,
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
                treeNodeData[treeExpandedPropName]
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

    render() {
        const tooltip = this.renderTooltip();

        this.sizedColumns = this.getSizedColumns();
        let wrapperClass: string = 'density-medium';
        switch (this.density) {
            case 'dense':
                wrapperClass = 'density-dense';
                break;
            case 'wide':
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
                    <td>Nessun elemento nell'albero</td>
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
                        isClearable={true}
                        label="Search..."
                        icon="magnify"
                        initialValue={this.globalFilterValue}
                        onKupTextFieldInput={(event) => {
                            window.clearTimeout(this.globalFilterTimeout);
                            this.globalFilterTimeout = window.setTimeout(
                                () => this.onGlobalFilterChange(event),
                                300
                            );
                        }}
                        onKupTextFieldClearIconClick={(event) =>
                            this.onGlobalFilterChange(event)
                        }
                    ></kup-text-field>
                </div>
            );
        }
        return (
            <Host>
                <style>{this.kupTheme.setCustomStyle(this)}</style>
                <div id="kup-component" class={wrapperClass}>
                    <div
                        class="wrapper"
                        ref={(el) => (this.treeWrapperRef = el as any)}
                    >
                        {filterField}
                        <table
                            class="kup-tree"
                            data-show-columns={this.showColumns}
                        >
                            <thead
                                class={{
                                    'header--is-visible': visibleHeader,
                                }}
                            >
                                <tr>
                                    <th />
                                    {visibleHeader ? this.renderHeader() : null}
                                </tr>
                            </thead>
                            <tbody>{treeNodes}</tbody>
                        </table>
                    </div>
                    {tooltip}
                    {this.openedMenu ? (
                        <kup-card
                            data={this.columnMenuInstance.prepData(
                                this,
                                getColumnByName(
                                    this.getVisibleColumns(),
                                    this.openedMenu
                                ), false
                            )}
                            data-column={this.openedMenu}
                            id="column-menu"
                            isMenu={true}
                            layoutNumber={12}
                            onBlur={(e) =>
                                this.columnMenuInstance.close(e, this)
                            }
                            onClick={(e) => e.stopPropagation()}
                            onKupCardEvent={(e) => {
                                this.columnMenuInstance.eventHandlers(e, this);
                            }}
                            sizeX="auto"
                            sizeY="auto"
                            tabIndex={0}
                        ></kup-card>
                    ) : null}
                </div>
            </Host>
        );
    }
}
