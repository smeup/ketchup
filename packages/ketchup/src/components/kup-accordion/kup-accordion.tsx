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
import {
    Cell,
    CellData,
    Column,
} from '../kup-data-table/kup-data-table-declarations';
import {
    KupAccordionData,
    KupAccordionProps,
    KupAccordionTreeNodeSelectedEventPayload,
    KupAccordionItemSelectedEventPayload,
} from './kup-accordion-declarations';
import {
    KupTreeNodeSelectedEventPayload,
    TreeNode,
} from './../kup-tree/kup-tree-declarations';
import { componentWrapperId } from '../../variables/GenericVariables';
import { KupTree } from '../kup-tree/kup-tree';
import { FImage } from '../../f-components/f-image/f-image';
import { KupTextFieldEventPayload } from '../kup-text-field/kup-text-field-declarations';

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

    /**
     * Names of the selected items
     * @default []
     */
    @State() private selectedItemsNames: string[] = [];

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
    /**
     * References the item elements of the component (<div class="accordion-item">).
     */
    private itemElements: { [key: number]: HTMLElement } = {};
    /**
     * References the tree subcomponents of the component (<kup-tree>).
     */
    private treeElements: { [key: number]: KupTree } = {};

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
        eventName: 'kup-accordion-treenodeselected',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupAccordionTreeNodeSelected: EventEmitter<KupAccordionTreeNodeSelectedEventPayload>;

    /*-------------------------------------------------*/
    /*                  W a t c h e r s                */
    /*-------------------------------------------------*/

    @Watch('globalFilterValue')
    onGlobalFilterValueChange(newValue: string, oldValue: string) {
        if (newValue && newValue != oldValue) {
            this.expandAll();
        } else {
            this.collapseAll();
        }
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
     * This method activates or deactivates an item
     * @param {string} itemName - Name of the item.
     */
    @Method()
    async toggleItem(itemName: string) {
        const isItemExpandible = this.isItemExpandible(itemName);

        const ids: string[] = [...this.selectedItemsNames];
        if (ids.includes(itemName)) {
            if (isItemExpandible) {
                ids.splice(ids.indexOf(itemName), 1);
            }
        } else {
            ids.splice(0, ids.length);
            ids.push(itemName);
        }
        this.selectedItemsNames = ids;

        if (!isItemExpandible) {
            this.kupAccordionItemSelected.emit({
                comp: this,
                id: this.rootElement.id,
                itemName: itemName,
            });
        }
    }

    /**
     * This method expand all items
     */
    @Method()
    async expandAll(): Promise<void> {
        const ids: string[] = [...this.selectedItemsNames];
        ids.splice(0, ids.length);

        for (var i = 0; i < this.data.columns.length; i++) {
            const column = this.data.columns[i];
            const itemName: string = column.name;
            ids.push(itemName);
        }

        this.selectedItemsNames = ids;
    }

    /**
     * This method collapse all items
     */
    @Method()
    async collapseAll(): Promise<void> {
        const ids: string[] = [...this.selectedItemsNames];
        ids.splice(0, ids.length);
        this.selectedItemsNames = ids;
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    private isItemSelected(itemName: string): boolean {
        return this.selectedItemsNames.includes(itemName);
    }

    private isItemExpandible(itemName: string): boolean {
        const cell: Cell = this.data.rows[0].cells[itemName];
        return cell != null;
    }

    private onKupTreeNodeSelected(
        e: CustomEvent<KupTreeNodeSelectedEventPayload>,
        itemName: string
    ): void {
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
    private onGlobalFilterChange(
        e: CustomEvent<KupTextFieldEventPayload>
    ): void {
        const detail: GenericObject = e.detail;
        let value: string = '';
        if (detail && detail.value) {
            value = detail.value;
        }
        this.globalFilterValue = value;
    }

    private renderKupTree(
        i: number,
        cellData: CellData,
        itemName: string
    ): VNode[] {
        const kupTree: VNode[] = [];
        const tree: TreeNode[] = [];

        for (let m = 0; m < cellData.data.length; m++) {
            const treeNode: TreeNode = cellData.data[m];
            tree.push(treeNode);
        }

        kupTree.push(
            <kup-tree
                class="kup-full-width"
                data={tree}
                globalFilterValue={this.globalFilterValue}
                onkup-tree-nodeselected={(
                    e: CustomEvent<KupTreeNodeSelectedEventPayload>
                ) => this.onKupTreeNodeSelected(e, itemName)}
                ref={(el: any) => (this.treeElements[i] = el as KupTree)}
            ></kup-tree>
        );
        return kupTree;
    }

    private renderSubComponent(
        i: number,
        cell: Cell,
        itemName: string
    ): VNode[] {
        const shape: string = cell.shape;

        switch (shape) {
            case 'TRE': {
                return this.renderKupTree(i, cell.data, itemName);
            }
            default:
                return;
        }
    }

    private renderAccordion(): VNode[] {
        const items: VNode[] = [];

        for (var i = 0; i < this.data.columns.length; i++) {
            const column: Column = this.data.columns[i];
            const itemName: string = column.name;
            const cell: Cell = this.data.rows[0].cells[itemName];
            const isItemExpandible: boolean = this.isItemExpandible(itemName);
            const isItemSelected: boolean = this.isItemSelected(itemName);

            // subcomponent
            let subComponent: VNode[] = [];
            if (isItemExpandible) {
                subComponent = this.renderSubComponent(i, cell, itemName);
            }

            const itemHeaderClass: GenericObject = {
                'accordion-item__header': true,
                'accordion-item__header--selected':
                    !isItemExpandible && isItemSelected ? true : false,
                'accordion-item__header--expanded':
                    isItemExpandible && isItemSelected ? true : false,
            };

            const itemContentClass: GenericObject = {
                'accordion-item__content': true,
                'accordion-item__content--selected': isItemSelected
                    ? true
                    : false,
            };

            const ic: number = i;
            items.push(
                <div
                    class="accordion-item"
                    ref={(el: HTMLElement) => (this.itemElements[ic] = el)}
                >
                    <div
                        title={column.title}
                        class={itemHeaderClass}
                        onClick={() => this.toggleItem(itemName)}
                    >
                        {column.icon ? (
                            <FImage
                                color="var(--kup-icon-color)"
                                resource={column.icon}
                                sizeX="1.5em"
                                sizeY="1.5em"
                                wrapperClass="accordion-item__icon"
                            />
                        ) : null}
                        <span class="accordion-item__text">{column.title}</span>
                        {isItemExpandible ? (
                            <span class="accordion-item__dropdown icon-container dropdown" />
                        ) : null}
                    </div>

                    <div class={itemContentClass}>{subComponent}</div>
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
    }

    componentDidLoad() {
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        // logic conditioned from subcomponents filtering result
        for (let i = 0; i < this.data.columns.length; i++) {
            const treeElement: KupTree = this.treeElements[i];
            const column: Column = this.data.columns[i];
            const itemTitle: string = column.title;
            const isItemTitleFiltered: boolean =
                itemTitle && itemTitle.includes(this.globalFilterValue);
            if (this.itemElements[i]) {
                if (treeElement) {
                    treeElement.isEmpty().then((treeIsEmpty: boolean) => {
                        if (isItemTitleFiltered || !treeIsEmpty) {
                            this.itemElements[i].classList.add(
                                'accordion-item--visible'
                            );
                        } else {
                            this.itemElements[i].classList.remove(
                                'accordion-item--visible'
                            );
                        }
                        if (isItemTitleFiltered) {
                            treeElement.globalFilterValue = '';
                        }
                    });
                } else if (isItemTitleFiltered) {
                    this.itemElements[i].classList.add(
                        'accordion-item--visible'
                    );
                } else {
                    this.itemElements[i].classList.remove(
                        'accordion-item--visible'
                    );
                }
            }
        }

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
                        onkup-textfield-input={(
                            event: CustomEvent<KupTextFieldEventPayload>
                        ) => {
                            window.clearTimeout(this.globalFilterTimeout);
                            this.globalFilterTimeout = window.setTimeout(
                                () => this.onGlobalFilterChange(event),
                                600
                            );
                        }}
                        onkup-textfield-cleariconclick={(
                            event: CustomEvent<KupTextFieldEventPayload>
                        ) => this.onGlobalFilterChange(event)}
                    ></kup-text-field>
                </div>
            );
        }

        return (
            <Host>
                {customStyle ? <style>{customStyle}</style> : null}
                <div id={componentWrapperId}>
                    {filterPanel}
                    <div class="accordion">{content}</div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
    }
}
