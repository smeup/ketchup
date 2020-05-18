import {
    Component,
    Event,
    Element,
    EventEmitter,
    h,
    Prop,
    Host,
    State,
    Watch,
    JSX,
} from '@stencil/core';

import { Cell, Column } from './../kup-data-table/kup-data-table-declarations';

import {
    treeExpandedPropName,
    TreeNode,
    TreeNodePath,
} from './kup-tree-declarations';

import {
    isBar,
    isCheckbox,
    isIcon,
    isImage,
    isLink,
    isVoCodver,
    isButton,
    isChart,
    isProgressBar,
    isRadio,
    isNumber,
    hasTooltip,
} from '../../utils/object-utils';

import {
    styleHasBorderRadius,
    styleHasWritingMode,
} from './../kup-data-table/kup-data-table-helper';

import { scrollOnHover } from '../../utils/scroll-on-hover';
import { MDCRipple } from '@material/ripple';
import { errorLogging } from '../../utils/error-logging';
import { isFilterCompliantForValue } from '../../utils/filters';
import {
    buildIconConfig,
    buildProgressBarConfig,
} from '../../utils/cell-utils';
import { buildButtonConfig } from '../../utils/widget-utils';
import { getBoolean } from '../../utils/utils';
import numeral from 'numeral';

@Component({
    tag: 'kup-tree',
    styleUrl: 'kup-tree.scss',
    shadow: true,
})
export class KupTree {
    @Element() rootElement: HTMLElement;

    /**
     * Auto select programmatic selectic node
     */
    @Prop({ reflect: true }) autoSelectionNodeMode: boolean = true;
    /**
     * The columns of the tree when tree visualization is active.
     */
    @Prop() columns?: Column[];
    /**
     * Custom style to be passed to the component.
     */
    @Prop({ reflect: true }) customStyle: string = undefined;
    /**
     * The json data used to populate the tree view: the basic, always visible tree nodes.
     */
    @Prop() data: TreeNode[] = [];
    /**
     * Function that gets invoked when a new set of nodes must be loaded as children of a node.
     * Used in combination with showObjectNavigation.
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
    @Prop({ reflect: true }) expanded: boolean = false;
    /**
     * Allows to set initial filter for tree nodes, manages the filter on tree nodes.
     */
    @Prop({ reflect: true }) filterValue: string = '';
    /**
     * Activates the scroll on hover function
     */
    @Prop({ reflect: true }) hoverScroll: boolean = true;
    /**
     * An array of integers containing the path to a selected child.\
     * Groups up the properties SelFirst, SelItem, SelName.
     */
    @Prop({ mutable: true }) selectedNode: TreeNodePath = [];
    /**
     * Shows the tree data as a table.
     */
    @Prop({ reflect: true }) showColumns: boolean = false;
    /**
     * When set to true enables the tree nodes filter.
     */
    @Prop({ reflect: true }) showFilter: boolean = false;
    /**
     * Flag: shows the header of the tree when the tree is displayed as a table.
     * @see showColumns
     */
    @Prop({ reflect: true }) showHeader: boolean = false;
    /**
     * Shows the icons of the nodes.
     */
    @Prop({ reflect: true }) showIcons: boolean = true;
    /**
     * When a node has options in its data and is on mouse over state while this prop is true,
     * the node must shows the cog wheel to trigger object navigation upon click.
     *
     * This will generate an event to inform the navigation object has been activated.
     */
    @Prop({ reflect: true }) showObjectNavigation: boolean = false;
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
    @Prop({ reflect: true }) useDynamicExpansion: boolean = false;
    /**
     * Nodes of the tree are draggable and can be sorted.
     * Currently this feature is not available.
     */
    // @Prop() draggableNodes: boolean = false;

    //-------- State --------
    visibleColumns: Column[] = [];
    @State() selectedNodeString: string = '';

    @State() stateSwitcher: boolean = false;

    private treeWrapperRef: any;
    private treeRef: any;
    private scrollOnHoverInstance: scrollOnHover;

    //-------- Events --------
    /**
     * When a cell option is clicked.
     * If the cell option is the one of the TreeNodeCell,
     * then column will be set to the fixed value {name: "TreeNodeCell", title: "TreeNodeCell"}.
     */
    @Event({
        eventName: 'kupOptionClicked',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupOptionClicked: EventEmitter<{
        cell: Cell;
        column: Column;
        treeNode: TreeNode;
    }>;

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
        auto: boolean;
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
    }>;

    /**
     * When a tooltip request initial data
     */
    @Event({
        eventName: 'kupLoadRequest',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupLoadRequest: EventEmitter<{
        cell: Cell;
        tooltip: EventTarget;
    }>;

    /**
     * When a tooltip request detail data
     */
    @Event({
        eventName: 'kupDetailRequest',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDetailRequest: EventEmitter<{
        cell: Cell;
        tooltip: EventTarget;
    }>;

    //-------- Lifecycle hooks --------
    componentWillLoad() {
        if (this.data) {
            // When the nodes must be expanded upon loading and the tree is not using a dynamicExpansion (and the current TreeNode is not disabled)
            // the default value of the treeExpandedPropName is set to true
            this.data.forEach((rootNode) => {
                this.expandCollapseAllNodes(
                    rootNode,
                    this.expanded && !this.useDynamicExpansion
                );
            });
        }

        // Initializes the selectedNodeString
        if (Array.isArray(this.selectedNode)) {
            this.selectedNodeString = this.selectedNode.toString();
        }
    }

    componentWillRender() {
        this.filterNodes();
    }

    componentDidRender() {
        const root = this.rootElement.shadowRoot;

        if (root != null) {
            let rippleCells: any = root.querySelectorAll('.mdc-ripple-surface');
            if (rippleCells) {
                for (let i = 0; i < rippleCells.length; i++) {
                    MDCRipple.attachTo(rippleCells[i]);
                }
            }
        }
    }

    componentDidLoad() {
        this.scrollOnHoverInstance = new scrollOnHover();
        this.scrollOnHoverInstance.scrollOnHoverSetup(this.treeWrapperRef);
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
    }

    //-------- Watchers --------
    @Watch('data')
    enrichDataWhenChanged(newData, oldData) {
        if (newData !== oldData) {
            newData.forEach((rootNode) => {
                this.expandCollapseAllNodes(
                    rootNode,
                    this.expanded && !this.useDynamicExpansion
                );
            });
            this.filterNodes();
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
        }
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
        });
    }

    // When a TreeNode can be selected
    hdlTreeNodeClicked(
        treeNodeData: TreeNode,
        treeNodePath: string,
        auto: boolean
    ) {
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
                auto: auto,
            });
        }
    }

    // When a TreeNode must be expanded or closed.
    hdlTreeNodeExpanderClicked(treeNodeData: TreeNode, treeNodePath: string) {
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
                this.forceUpdate();
                let expandIcon: any;
                expandIcon = this.treeRef.querySelectorAll(
                    "[data-tree-path='" + treeNodePath + "'] .expand-icon"
                )[0];
                if (treeNodeData[treeExpandedPropName]) {
                    // TreeNode is now expanded -> Fires expanded event
                    expandIcon.classList.remove('collapsed');
                    expandIcon.classList.add('expanded');
                    this.kupTreeNodeExpand.emit({
                        treeNodePath: arrayTreeNodePath,
                        treeNode: treeNodeData,
                        usesDynamicExpansion: this.useDynamicExpansion,
                    });
                } else {
                    // TreeNode is now collapsed -> Fires collapsed event
                    expandIcon.classList.remove('expanded');
                    expandIcon.classList.add('collapsed');
                    this.kupTreeNodeCollapse.emit({
                        treeNodePath: arrayTreeNodePath,
                        treeNode: treeNodeData,
                    });
                }
            } else if (this.useDynamicExpansion) {
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
                    });

                    // TODO remove these comments if this behavior will be accepted
                    // Sets the flag for setting the TreeNode as opened, but does not force rerender,
                    // to allow application to execute the update of the tree
                    // treeNodeData[treeExpandedPropName] = !treeNodeData[treeExpandedPropName];
                }
            }
        }
    }

    // Handler for clicking onto the cells option object
    hdlOptionClicked(
        e: CustomEvent,
        cell: Cell,
        column: Column,
        treeNode: TreeNode
    ) {
        // We block propagation of this event to prevent tree node from being expanded or close.
        e.stopPropagation();
        // Emits custom event
        this.kupOptionClicked.emit({
            cell,
            column,
            treeNode,
        });
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

    onFilterChange(event: CustomEvent) {
        this.filterValue = event.detail.value;
    }

    private setAllVisible(items: TreeNode[]) {
        items.forEach((element) => {
            element.visible = true;
            this.setAllVisible(element.children);
        });
    }

    private filterNodes() {
        if (this.data == null || this.data.length == 0) {
            return;
        }
        if (this.filterValue.trim() == '') {
            this.setAllVisible(this.data);
            return;
        }
        for (let i = 0; i < this.data.length; i++) {
            if (this.setNodeVisibility(this.data[i])) {
            }
        }
    }

    private setNodeVisibility(node: TreeNode): boolean {
        let visibility: boolean = isFilterCompliantForValue(
            node.value,
            this.filterValue
        );
        if (node.disabled != true && node.expandable == true) {
            /** se il ramo è compatibile con il filtro, mostro tutto l'albero sottostante */
            if (visibility == true) {
                this.setAllVisible(node.children);
            } else {
                for (let i = 0; i < node.children.length; i++) {
                    if (this.setNodeVisibility(node.children[i])) {
                        visibility = true;
                        this.expandCollapseNode(node, true);
                    }
                }
            }
        }
        node.visible = visibility;
        return visibility;
    }

    log(methodName: string, msg: string) {
        errorLogging(
            'kup-tree',
            methodName + '() ' + this.rootElement.id + ' - ' + msg,
            'log'
        );
    }

    //-------- Rendering --------
    renderOptionElement(cell: Cell, column: Column, treeNode: TreeNode) {
        return (
            <kup-button
                class="options"
                custom-style=":host{transform:scale(0.75)}#kup-component .mdc-icon-button{--mdc-ripple-fg-opacity:0!important; height:1.25rem; width:1.25rem; padding:0}#kup-component .mdc-icon-button:before{display:none}.mdc-button__ripple{display:none}"
                icon="settings"
                tooltip="Options"
                onKupButtonClick={(e: CustomEvent) =>
                    this.hdlOptionClicked(e, cell, column, treeNode)
                }
                onClick={(e: MouseEvent) => e.stopPropagation()}
            />
        );
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
        let showOptions =
            !cellData.treeNode.disabled &&
            cell.options &&
            this.showObjectNavigation;

        const classObj: Record<string, boolean> = {
            'cell-content': true,
            'has-options': showOptions,
            clickable: !!cellData.column.clickable,
        };

        // When the previous row value is different from the current value, we can show the current value.
        const valueToDisplay =
            previousRowCellValue !== cell.value ? cell.value : '';

        // Sets the default value
        let content: any = valueToDisplay;

        if (valueToDisplay) {
            if (isIcon(cell.obj) || isVoCodver(cell.obj)) {
                content = (
                    <kup-image
                        {...buildIconConfig(cell, valueToDisplay)}
                        onKupImageClick={(e: Event) => {
                            e.stopPropagation();
                            this.onJ4btnClicked(
                                cellData.treeNode,
                                cellData.treeNodePath,
                                cellData.column,
                                false
                            );
                        }}
                        onClick={(e: MouseEvent) => e.stopPropagation()}
                    />
                );
            } else if (isNumber(cell.obj)) {
                const cellValue = numeral(cell.obj.k).value();

                if (cellValue < 0) {
                    classObj['negative-number'] = true;
                }
            } else if (isImage(cell.obj)) {
                content = (
                    <kup-image
                        class="cell-image"
                        badgeData={cell.config ? cell.config.badges : undefined}
                        sizeX="auto"
                        sizeY="var(--dtt_cell-image_max-height)"
                        name={valueToDisplay}
                    />
                );
            } else if (isLink(cell.obj)) {
                content = (
                    <a href={valueToDisplay} target="_blank">
                        {valueToDisplay}
                    </a>
                );
            } else if (isCheckbox(cell.obj)) {
                let checked = cell.obj.k == '1';
                // A tree currently is not editable. Checkbox are always disabled.
                content = (
                    <kup-checkbox
                        checked={checked}
                        disabled={
                            cellData.treeNode.hasOwnProperty('readOnly')
                                ? cellData.treeNode.readOnly
                                : true
                        }
                    />
                );
            } else if (isButton(cell.obj)) {
                content = (
                    <kup-button
                        {...buildButtonConfig(cell.value, cell.config)}
                        onKupButtonClick={(e: Event) => {
                            e.stopPropagation();
                            this.onJ4btnClicked(
                                cellData.treeNode,
                                cellData.treeNodePath,
                                cellData.column,
                                false
                            );
                        }}
                        onClick={(e: MouseEvent) => e.stopPropagation()}
                    />
                );
            } else if (isBar(cell.obj)) {
                const props: {
                    isCanvas: boolean;
                    name: string;
                    sizeX?: string;
                    sizeY: string;
                } = {
                    isCanvas: true,
                    name: cell.value,
                    sizeX: '100%',
                    sizeY: '35px',
                };
                content = valueToDisplay ? <kup-image {...props} /> : null;
            } else if (isChart(cell.obj)) {
                const props: {
                    cellConfig: any;
                    value: string;
                    width?: number;
                } = {
                    cellConfig: cell.config,
                    value: cell.value,
                };

                content = <kup-chart-cell {...props} />;
            } else if (isProgressBar(cell.obj)) {
                content = (
                    <kup-progress-bar
                        {...buildProgressBarConfig(
                            cell,
                            null,
                            true,
                            valueToDisplay
                        )}
                    />
                );
            } else if (isRadio(cell.obj)) {
                let radioProp = {
                    data: [
                        {
                            label: '',
                            value: cell.value,
                            checked: getBoolean(cell.obj.k),
                        },
                    ],
                    disabled: cellData.treeNode.hasOwnProperty('readOnly')
                        ? cellData.treeNode.readOnly
                        : true,
                };

                content = <kup-radio {...radioProp} />;
            }
        } else {
            content = null;
        }

        // if cell.style has border, apply style to cellcontent
        let style = null;
        if (styleHasBorderRadius(cell) || styleHasWritingMode(cell)) {
            style = cell.style;
        }
        /**
         * Controls if current cell needs a tooltip and eventually adds it.
         * @todo When the option forceOneLine is active, there is a problem with the current implementation of the tooltip. See documentation in the mauer wiki for better understanding.
         */
        if (hasTooltip(cell.obj)) {
            content = (
                <kup-tooltip
                    class="datatable-tooltip"
                    onKupTooltipLoadData={(ev) =>
                        this.kupLoadRequest.emit({
                            cell,
                            tooltip: ev.srcElement,
                        })
                    }
                    onKupTooltipLoadDetail={(ev) =>
                        this.kupDetailRequest.emit({
                            cell,
                            tooltip: ev.srcElement,
                        })
                    }
                >
                    {content}
                </kup-tooltip>
            );
        }

        // Elements of the cell
        let cellElements = [];

        cellElements.push(
            <span class={classObj} style={style}>
                {content}
            </span>
        );

        /**
         * Renders option object if necessary.
         *
         * Currently to align it on the right side of the cell, it uses the CSS float property.
         * This can lead to some rendering errors.
         * See [this page]{@link https://www.w3schools.com/cssref/pr_class_float.asp} for more details.
         * If this case happens, then the solution is to wrap the content returned by this function into an element with
         * display flex, to use its content property.
         *
         * @namespace KupTree.renderCellOption
         */
        if (showOptions) {
            cellElements.push(
                this.renderOptionElement(
                    cell,
                    cellData.column,
                    cellData.treeNode
                )
            );
        }
        return <td style={style}>{cellElements}</td>;
    }

    /**
     * Renders the header of the tree when it must be displayed as a table.
     * @returns An array of table header cells.
     */
    renderHeader(): JSX.Element[] {
        return this.visibleColumns.map((column) => (
            <th>
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
        let treeExpandIcon;
        if (hasExpandIcon) {
            treeExpandIcon = (
                <kup-image
                    class="expand-icon kup-tree__icon kup-tree__node__expander"
                    sizeX="1.5rem"
                    sizeY="1.5rem"
                    name="menu-right"
                    onClick={
                        hasExpandIcon && !treeNodeData.disabled
                            ? (event) => {
                                  event.stopPropagation();
                                  this.hdlTreeNodeExpanderClicked(
                                      treeNodeData,
                                      treeNodePath
                                  );
                              }
                            : null
                    }
                ></kup-image>
            );
        } else {
            treeExpandIcon = (
                <span
                    class={
                        'expand-icon kup-tree__icon kup-tree__node__expander'
                    }
                    onClick={
                        hasExpandIcon && !treeNodeData.disabled
                            ? (event) => {
                                  event.stopPropagation();
                                  this.hdlTreeNodeExpanderClicked(
                                      treeNodeData,
                                      treeNodePath
                                  );
                              }
                            : null
                    }
                />
            );
        }

        // When TreeNode icons are visible, creates the icon if one is specified
        let treeNodeIcon: any = null;
        if (this.showIcons) {
            if (treeNodeData.icon) {
                if (treeNodeData.icon === '') {
                    treeNodeIcon = <span class="kup-tree__icon" />;
                } else {
                    treeNodeIcon = (
                        <kup-image
                            class="kup-tree__icon"
                            sizeX="1.5rem"
                            sizeY="1.5rem"
                            name={treeNodeData.icon}
                            color={treeNodeData.iconColor}
                        ></kup-image>
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

        // When can be expanded OR selected OR have option handler
        let treeNodeOptionIcon: JSX.Element | null = null;
        if (!treeNodeData.disabled) {
            treeNodeOptions['onClick'] = () => {
                this.hdlTreeNodeClicked(treeNodeData, treeNodePath, false);
            };

            // Controls if there is the necessity to print out options also for the TreeNodeCell
            if (treeNodeData.options && this.showObjectNavigation) {
                treeNodeOptionIcon = this.renderOptionElement(
                    {
                        obj: treeNodeData.obj,
                        value: treeNodeData.value,
                    },
                    // TODO for now creates a fictitious column standard for all TreeNodeCell
                    {
                        name: 'TreeNodeCell',
                        title: 'TreeNodeCell',
                    },
                    treeNodeData
                );
            }
        }

        // When a tree node is displayed as a table
        let treeNodeCells: JSX.Element[] | null = null;
        if (
            this.showColumns &&
            this.visibleColumns &&
            this.visibleColumns.length
        ) {
            treeNodeCells = [];
            // Renders all the cells
            for (let j = 0; j < this.visibleColumns.length; j++) {
                const column = this.visibleColumns[j];
                treeNodeCells.push(
                    this.renderCell(treeNodeData.cells[column.name], {
                        column,
                        treeNode: treeNodeData,
                        treeNodePath: treeNodePath,
                    })
                );
            }
        }

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
                        'mdc-ripple-surface':
                            !this.showColumns && !treeNodeData.disabled,
                    }}
                    style={treeNodeData.style || null}
                >
                    {indent}
                    {treeExpandIcon}
                    {treeNodeIcon}
                    <span class="cell-content">{treeNodeData.value}</span>
                    {treeNodeOptionIcon}
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
        let customStyle = undefined;
        if (this.customStyle) {
            customStyle = <style>{this.customStyle}</style>;
        }

        // Computes the visible columns for later use
        if (this.showColumns && this.columns) {
            this.visibleColumns = this.columns.filter((column) =>
                column.hasOwnProperty('visible') ? column.visible : true
            );
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
            this.showFilter &&
            this.data &&
            this.data.length &&
            this.data.length > 0
        ) {
            filterField = (
                <kup-text-field
                    class="filter"
                    label="Filter"
                    outlined={false}
                    initialValue={this.filterValue}
                    onKupTextFieldSubmit={(e) => {
                        this.onFilterChange(e);
                    }}
                ></kup-text-field>
            );
        }
        return (
            <Host>
                {customStyle}
                <div id="kup-component">
                    <div
                        class="wrapper"
                        ref={(el) => (this.treeWrapperRef = el as any)}
                    >
                        {filterField}
                        <table
                            class="kup-tree"
                            ref={(el) => (this.treeRef = el as any)}
                            data-show-columns={this.showColumns}
                            data-show-object-navigation={
                                this.showObjectNavigation
                            }
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
                </div>
            </Host>
        );
    }
}
