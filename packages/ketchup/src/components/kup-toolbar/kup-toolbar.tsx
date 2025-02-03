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
    Fragment,
} from '@stencil/core';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import { getProps, setProps } from '../../utils/utils';
import { KupTreeNode } from '../kup-tree/kup-tree-declarations';
import { KupListProps } from '../kup-list/kup-list-declarations';
import {
    KupToolbarClickEventPayload,
    KupToolbarTreeNode,
} from './kup-toolbar-declarations';
import { FImage } from '../../f-components/f-image/f-image';
import {
    KupDataCellOptions,
    KupDataColumn,
    KupDataRow,
} from '../../managers/kup-data/kup-data-declarations';
import { KupLanguageGeneric } from '../../managers/kup-language/kup-language-declarations';
import { componentWrapperId } from '../../variables/GenericVariables';
import { FCell } from '../../f-components/f-cell/f-cell';
import { FCellProps } from '../../f-components/f-cell/f-cell-declarations';

@Component({
    tag: 'kup-toolbar',
    styleUrl: 'kup-toolbar.scss',
    shadow: true,
})
export class KupToolbar {
    /**
     * References the root HTML element of the component (<kup-toolbar>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /**
     * The focused list item.
     * @default null
     */
    @State() focused: number = null;
    /**
     * The selected list items.
     * @default []
     */
    @State() selected: string[] = [];

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Custom style of the component.
     * @default ""
     * @see https://smeup.github.io/ketchup/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * The data of the list.
     * @default []
     */
    @Prop({ mutable: true }) data: KupToolbarTreeNode[] = [];
    /**
     * The data of the list.
     * @default true
     */
    @Prop() showIcons: boolean = true;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    #kupManager: KupManager = kupManagerInstance();

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    @Event({
        eventName: 'kup-toolbar-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<KupToolbarClickEventPayload>;

    onKupClick(index: number, node: KupToolbarTreeNode) {
        this.#handleClick(index, node);
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
        return getProps(this, KupListProps, descriptions);
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
        setProps(this, KupListProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    private generateRowForNode(treeNode: KupToolbarTreeNode): KupDataRow {
        const col: KupDataColumn = this.generateColumnForNode(treeNode);
        const row: KupDataRow = { cells: {} };
        row.cells[col.name] = treeNode;
        return row;
    }

    private generateColumnForNode(treeNode: KupToolbarTreeNode): KupDataColumn {
        const colname: string =
            treeNode.obj && treeNode.obj.t
                ? treeNode.obj.t + ';' + treeNode.obj.p
                : 'KUPCELL';
        const coltitle: string =
            treeNode.obj && treeNode.obj.t
                ? treeNode.obj.t + ';' + treeNode.obj.p
                : this.#kupManager.language.translate(
                      KupLanguageGeneric.EMPTY_OBJECT
                  );

        return {
            name: colname,
            title: coltitle,
        };
    }

    #renderTreeNode(node: KupToolbarTreeNode, index: number): VNode {
        const hasChildren = node.children && node.children.length > 0;
        const isDisabled = node.disabled ?? false;

        // Single item node [icons + value]
        const singleItem = (
            <div
                class={`toolbar-single-value-node ${
                    isDisabled ? 'toolbar-item-disabled' : ''
                }`}
                data-alt={isDisabled ? 'This option is disabled' : ''}
            >
                {node?.icon && this.showIcons ? (
                    <FImage resource={node?.icon} sizeX="14px" sizeY="14px" />
                ) : (
                    <FImage resource="empty" sizeX="14px" sizeY="14px" />
                )}
                {node.value}
            </div>
        );

        if (!hasChildren) {
            const column = this.generateColumnForNode(node);
            const row = this.generateRowForNode(node);

            const cellProps: FCellProps = {
                cell: node,
                column: column,
                component: this,
                editable: node.isEditable,
                renderKup: true,
                row: row,
            };

            return (
                <Fragment>
                    {cellProps.cell.shape ? (
                        <FCell {...cellProps} />
                    ) : (
                        <div
                            id={node.value}
                            class={`parent-class ${
                                isDisabled ? 'toolbar-item-disabled' : ''
                            }`}
                            tabindex={isDisabled ? -1 : 0}
                            onClick={
                                isDisabled ||
                                (cellProps.shape && !cellProps.cell.data)
                                    ? undefined
                                    : () => this.onKupClick(index, node)
                            }
                            data-alt={
                                isDisabled ? 'This option is disabled' : ''
                            }
                        >
                            {singleItem}
                            <div class="chevron-type-wrapper">
                                {node.componentType && (
                                    <div class="component-type-chip">
                                        {node.componentType}
                                    </div>
                                )}
                                <div
                                    style={{ width: '14px', height: '14px' }}
                                ></div>
                            </div>
                        </div>
                    )}
                </Fragment>
            );
        } else {
            return (
                <div
                    class={`parent-class ${
                        isDisabled ? 'toolbar-item-disabled' : ''
                    }`}
                    tabindex={isDisabled ? -1 : 0}
                >
                    {singleItem}
                    <div class="chevron-type-wrapper">
                        {node.componentType && (
                            <div class="component-type-chip">
                                {node.componentType}
                            </div>
                        )}
                        <FImage
                            resource="chevron-right"
                            sizeX="14px"
                            sizeY="14px"
                            color="var(--kup-text-secondary)"
                            wrapperClass="chevron-right"
                        ></FImage>
                    </div>
                    <div class="nested-class">
                        {this.#renderNestedChildren(node.children, index)}
                    </div>
                </div>
            );
        }
    }

    #handleClick(index: number, node: KupToolbarTreeNode): void {
        this.kupClick.emit({
            comp: this,
            id: this.rootElement.id,
            selected: node,
            index,
        });
    }

    #renderNestedChildren(
        children: KupToolbarTreeNode[],
        parentIndex: number
    ): VNode[] {
        return children.map((child, index) =>
            this.#renderTreeNode(child, parentIndex + index)
        );
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.#kupManager.debug.logLoad(this, true);
        this.rootElement.addEventListener(
            'kup-cell-update',
            (event: CustomEvent) => {
                const index = event.detail.cell.value;
                const node = event.detail.cell;
                this.onKupClick(index, node);
            }
        );
    }

    componentWillRender() {
        this.#kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.#kupManager.debug.logRender(this, true);
    }

    render() {
        if (!this.data || this.data.length === 0) {
            return;
        }

        return (
            <Host>
                <style>
                    {this.#kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <div class="toolbar-container">
                        {this.data.map((item, index) =>
                            this.#renderTreeNode(item, index)
                        )}
                    </div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kupManager.theme.unregister(this);
    }
}
