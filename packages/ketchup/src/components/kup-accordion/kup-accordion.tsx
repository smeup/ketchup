import {
    Component,
    Element,
    forceUpdate,
    Host,
    h,
    Method,
    Prop,
    VNode,
    State,
    Listen,
    Event,
    EventEmitter,
    Watch,
} from '@stencil/core';

import { KupLanguageSearch } from '../../utils/kup-language/kup-language-declarations';

import type { GenericObject, KupComponent } from '../../types/GenericTypes';
import {
    KupManager,
    kupManagerInstance,
} from '../../utils/kup-manager/kup-manager';
import { getProps, setProps } from '../../utils/utils';
import { Cell, CellData } from '../kup-data-table/kup-data-table-declarations';
import {
    KupAccordionData,
    KupAccordionProps,
} from './kup-accordion-declarations';

import {
    TreeNode,
    KupTreeNodeSelectedEventPayload,
} from './../kup-tree/kup-tree-declarations';

@Component({
    tag: 'kup-accordion',
    styleUrl: 'kup-accordion.scss',
    shadow: true,
})
export class KupAccordion {
    /**
     * References the root HTML element of the component (<kup-accordion>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    // flag of the expanded categories
    @State() expandedCategoryIds: string[] = [];

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * Data of the accordion.
     * @default null
     */
    @Prop() data: KupAccordionData = null;
    /**
     * When set to true it activates the global filter.
     */
    @Prop() globalFilter: boolean = false;

    /**
     * The value of the global filter.
     */
    @Prop({ reflect: true, mutable: true }) globalFilterValue = '';

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();

    private globalFilterTimeout: number;

    @State()
    private actualData: KupAccordionData = null;

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Fired when a TreeNode is selected
     */
    @Event({
        eventName: 'kup-accordion-selectedNode',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupAccordionSelectedNode: EventEmitter<KupTreeNodeSelectedEventPayload>;

    /**
     * Catch kup-tree-nodeselected event and emits a new kup-accordion-selectedNode event
     * @Param event
     */
    @Listen('kup-tree-nodeselected', { target: 'body' })
    kupTreeNodeSelectedHandler(event: CustomEvent) {
        var selectedNodeEvent: KupTreeNodeSelectedEventPayload =
            {} as KupTreeNodeSelectedEventPayload;
        selectedNodeEvent.treeNode = event.detail.treeNode;
        selectedNodeEvent.treeNodePath = event.detail.treeNodePath;
        this.kupAccordionSelectedNode.emit(selectedNodeEvent);
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
        return getProps(this, KupAccordionProps, descriptions);
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupAccordionProps, props);
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }

    /**
     * This method is called by button and set or unset the expanded category id
     * @param e event
     * @param columnId name of category
     */
    expandCategory(e: MouseEvent, columnId: string) {
        let el: HTMLButtonElement = null;

        if ((e.target as HTMLElement).tagName === 'BUTTON') {
            el = e.target as HTMLButtonElement;
        } else {
            el = (e.target as HTMLElement).closest('button');
        }

        if (el.className == 'accordion-button--active') {
            const index = this.expandedCategoryIds.indexOf(columnId, 0);
            if (index > -1) {
                this.expandedCategoryIds.splice(index, 1);
            }
        } else {
            this.expandedCategoryIds.push(columnId);
        }
        this.refresh();
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    @Watch('data')
    @Watch('globalFilterValue')
    recalculateData() {
        this.actualData = this.data;
    }

    private onGlobalFilterChange({ detail }) {
        let value = '';
        if (detail && detail.value) {
            value = detail.value;
        }
        this.globalFilterValue = value;
    }

    /**
     * This method is used to build TreeNode structure and create kup-tree component
     * @param cellData
     * @param columnName category id
     * @returns VNode[]
     */
    private renderKupTree(cellData: CellData): VNode[] {
        const kupTree: VNode[] = [];
        const tree: TreeNode[] = [];

        for (var i = 0; i < cellData.data.length; i++) {
            const treeNode: TreeNode = cellData.data[i];
            tree.push(treeNode);
        }

        kupTree.push(
            <kup-tree
                data={tree}
                globalFilterValue={this.globalFilterValue}
            ></kup-tree>
        );

        return kupTree;
    }

    /**
     * This method is used to create the sub component structure
     * @param cell
     * @param columnName category id
     * @returns VNode[]
     */
    private renderSubComponent(cell: Cell): VNode[] {
        const shape = cell.shape;

        switch (shape) {
            case 'TRE': {
                return this.renderKupTree(cell.data);
            }
            default:
                return;
        }
    }

    /**
     * This method is used to trigger a new render of the component.
     * @returns VNode[]
     */
    private renderAccordion(): VNode[] {
        const categories: VNode[] = [];

        for (var i = 0; i < this.actualData.columns.length; i++) {
            const columnName = this.actualData.columns[i].name;
            const cell = this.actualData.rows[0].cells[columnName];

            var subComponent: VNode[] = [];
            if (cell != null) {
                subComponent = this.renderSubComponent(cell);
            }

            var buttonCssClass;
            var divCssClass;
            const index = this.expandedCategoryIds.indexOf(columnName, 0);
            if (index > -1) {
                buttonCssClass = 'accordion-button--active';
                divCssClass = 'accordion-subcomponent--active';
            } else {
                buttonCssClass = 'accordion-button';
                divCssClass = 'accordion-subcomponent';
            }

            categories.push(
                <div class="accordion-category-wrapper">
                    <button
                        class={buttonCssClass}
                        onClick={(e: MouseEvent) =>
                            this.expandCategory(e, columnName)
                        }
                    >
                        {this.actualData.columns[i].title}
                    </button>
                    <div class={divCssClass}>{subComponent}</div>
                </div>
            );
        }
        return categories;
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
        this.recalculateData();
    }

    componentDidLoad() {
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        const content: VNode[] = this.renderAccordion();
        const customStyle: string = this.kupManager.theme.setCustomStyle(
            this.rootElement as KupComponent
        );

        let filterPanel = null;
        if (this.globalFilter) {
            filterPanel = (
                <div id="global-filter">
                    <kup-text-field
                        fullWidth={true}
                        isClearable={true}
                        label={this.kupManager.language.translate(
                            KupLanguageSearch.SEARCH
                        )}
                        icon="magnify"
                        initialValue={this.globalFilterValue}
                        onkup-textfield-input={(event) => {
                            window.clearTimeout(this.globalFilterTimeout);
                            this.globalFilterTimeout = window.setTimeout(
                                () => this.onGlobalFilterChange(event),
                                600
                            );
                        }}
                        onkup-textfield-cleariconclick={(event) =>
                            this.onGlobalFilterChange(event)
                        }
                    ></kup-text-field>
                </div>
            );
        }

        return (
            <Host>
                {customStyle ? <style>{customStyle}</style> : null}
                <div id="kup-component">
                    {filterPanel}
                    {content}
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
    }
}
