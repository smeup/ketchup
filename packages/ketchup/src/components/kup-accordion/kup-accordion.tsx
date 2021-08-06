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
import type { GenericObject, KupComponent } from '../../types/GenericTypes';
import { KupLanguageSearch } from '../../utils/kup-language/kup-language-declarations';
import {
    KupManager,
    kupManagerInstance,
} from '../../utils/kup-manager/kup-manager';
import { getProps, setProps } from '../../utils/utils';
import { Cell, CellData } from '../kup-data-table/kup-data-table-declarations';
import {
    KupAccordionData,
    KupAccordionProps,
    KupAccordionTreeNodeSelectedEventPayload,
    KupAccordionItemSelectedEventPayload,
} from './kup-accordion-declarations';
import { TreeNode } from './../kup-tree/kup-tree-declarations';

@Component({
    tag: 'kup-accordion',
    styleUrl: 'kup-accordion.scss',
    shadow: true,
})
export class KupAccordion {
    /**
     * References the root HTML element of the component (<kup-button>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /**
     * Ids of the expanded categories.
     * @default []
     */
    @State() private expandedCategoryIds: string[] = [];
    /**
     * Treated data prop.
     * @default null
     */
    @State() private actualData: KupAccordionData = null;

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
     * @default false
     */
    @Prop() globalFilter: boolean = false;

    /**
     * The value of the global filter.
     * @default ""
     */
    @Prop({ reflect: true, mutable: true }) globalFilterValue = '';

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();
    /**
     * Timeout to debounce global filter.
     */
    private globalFilterTimeout: number;

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Fired when a item is selected
     */
    @Event({
        eventName: 'kup-accordion-itemselected',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupAccordionItemSelected: EventEmitter<KupAccordionItemSelectedEventPayload>;

    /**
     * Fired when a TreeNode is selected
     */
    @Event({
        eventName: 'kup-accordion-tree-nodeselected',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupAccordionTreeNodeSelected: EventEmitter<KupAccordionTreeNodeSelectedEventPayload>;

    /*-------------------------------------------------*/
    /*                  W a t c h e r s                */
    /*-------------------------------------------------*/

    @Watch('data')
    @Watch('globalFilterValue')
    recalculateData() {
        this.actualData = this.data;
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
        setProps(this, KupAccordionProps, props);
    }
    /**
     * This method expands or collapses the given item.
     * @param {string} itemName - Name of the item.
     */
    @Method()
    async toggleItem(itemName: string): Promise<void> {
        const ids: string[] = [...this.expandedCategoryIds];
        if (ids.includes(itemName)) {
            ids.splice(ids.indexOf(itemName), 1);
        } else {
            ids.push(itemName);
        }
        this.expandedCategoryIds = ids;
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    private onItemClicked(itemName: string, hasSubComponent: boolean) {
        if (hasSubComponent) {
            this.toggleItem(itemName);
        } else {
            this.kupAccordionItemSelected.emit({
                comp: this,
                id: this.rootElement.id,
                itemName: itemName,
            });
        }
    }

    private onKupTreeNodeSelected(e: CustomEvent, itemName: string): void {
        e.stopPropagation();

        this.kupAccordionTreeNodeSelected.emit({
            comp: this,
            id: this.rootElement.id,
            treeNodePath: e.detail.treeNodePath,
            treeNode: e.detail.treeNode,
            columnName: e.detail.columnName,
            auto: e.detail.auto,
            itemName: itemName,
        });
    }
    private onGlobalFilterChange({ detail }): void {
        let value = '';
        if (detail && detail.value) {
            value = detail.value;
        }
        this.globalFilterValue = value;
    }

    private renderKupTree(cellData: CellData, itemName: string): VNode[] {
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
                onkup-tree-nodeselected={(e) =>
                    this.onKupTreeNodeSelected(e, itemName)
                }
            ></kup-tree>
        );

        return kupTree;
    }

    private renderSubComponent(cell: Cell, itemName: string): VNode[] {
        const shape: string = cell.shape;

        switch (shape) {
            case 'TRE': {
                return this.renderKupTree(cell.data, itemName);
            }
            default:
                return;
        }
    }

    private renderAccordion(): VNode[] {
        const items: VNode[] = [];

        for (var i = 0; i < this.actualData.columns.length; i++) {
            const column = this.actualData.columns[i];
            const itemName: string = column.name;
            const cell: Cell = this.actualData.rows[0].cells[itemName];
            const isItemExpanded: boolean =
                this.expandedCategoryIds.includes(itemName);

            let subComponent: VNode[] = [];
            if (cell != null) {
                subComponent = this.renderSubComponent(cell, itemName);
            }

            const buttonClass: GenericObject = {
                'accordion-button': true,
                'accordion-button--active': isItemExpanded ? true : false,
            };
            const contentClass: GenericObject = {
                'accordion-content': true,
                'accordion-content--active': isItemExpanded ? true : false,
            };

            items.push(
                <div class="accordion-item">
                    <button
                        class={buttonClass}
                        onClick={() =>
                            this.onItemClicked(itemName, cell != null)
                        }
                    >
                        {column.title}
                    </button>
                    <div class={contentClass}>{subComponent}</div>
                </div>
            );
        }
        return items;
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

        let filterPanel: VNode = null;
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
                    <div class="accordion--wrapper">{content}</div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
    }
}
