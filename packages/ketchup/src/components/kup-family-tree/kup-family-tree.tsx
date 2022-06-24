import {
    Component,
    Element,
    forceUpdate,
    h,
    Host,
    Method,
    Prop,
    VNode,
} from '@stencil/core';
import {
    KupDataNode,
    KupDataNodeDrilldownInfo,
} from '../../managers/kup-data/kup-data-declarations';
import { KupLanguageGeneric } from '../../managers/kup-language/kup-language-declarations';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import {
    KupFamilyTreeData,
    KupFamilyTreeProps,
} from './kup-family-tree-declarations';

@Component({
    tag: 'kup-family-tree',
    styleUrl: 'kup-family-tree.scss',
    shadow: true,
})
export class KupFamilyTree {
    /**
     * References the root HTML element of the component (<kup-family-tree>).
     */
    @Element() rootElement: HTMLElement;

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
     * Actual data of the component.
     * @default null
     */
    @Prop() data: KupFamilyTreeData = null;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #kupManager: KupManager = kupManagerInstance();

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
        return getProps(this, KupFamilyTreeProps, descriptions);
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
        setProps(this, KupFamilyTreeProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #createTree(): VNode {
        const content: VNode[] = [];
        const itemsList: {
            [index: string]: {
                brothers: number;
                children: number;
                maxChildren: number;
                jsxNode: VNode;
            }[];
        } = {};
        const recursive = (
            nodes: KupDataNode[],
            brothers: number,
            depth: number
        ) => {
            for (let index = 0; index < nodes.length; index++) {
                const node = nodes[index];
                if (!itemsList[depth]) {
                    itemsList[depth] = [];
                }
                itemsList[depth].push({
                    brothers,
                    children: node.children?.length || 0,
                    maxChildren: node.children?.length
                        ? this.#kupManager.data.node.getDrilldownInfo(
                              node.children
                          ).maxChildren
                        : 0,
                    jsxNode: <div class="family-tree__item">{node.value}</div>,
                });
                if (node.children && index < node.children.length) {
                    recursive(node.children, node.children.length, depth + 1);
                }
            }
        };

        if (!this.data || !this.data.rows || !this.data.rows.length) {
            content.push(
                <div>
                    {this.#kupManager.language.translate(
                        KupLanguageGeneric.EMPTY_DATA
                    )}
                </div>
            );
        } else {
            recursive(this.data.rows, this.data.rows.length, 0);
            console.log(itemsList);
            const rows = [];
            for (const key in itemsList) {
                const items = itemsList[key];
                const cells = [];
                for (let index = 0; index < items.length; index++) {
                    const item = items[index];
                    const maxColumns = item.maxChildren || item.children;
                    cells.push(<td colSpan={maxColumns}>{item.jsxNode}</td>);
                }
                rows.push(<tr>{cells}</tr>);
            }
            content.push(<table>{rows}</table>);
        }
        return <div class="family-tree">{content}</div>;
    }

    #createNode() {}

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.language.register(this);
        this.#kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.#kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.#kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.#kupManager.debug.logRender(this, true);
    }

    render() {
        return (
            <Host>
                <style>
                    {this.#kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>{this.#createTree()}</div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kupManager.language.unregister(this);
        this.#kupManager.theme.unregister(this);
    }
}
