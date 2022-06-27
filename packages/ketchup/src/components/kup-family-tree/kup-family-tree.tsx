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
    KupDataColumn,
    KupDataNode,
} from '../../managers/kup-data/kup-data-declarations';
import { KupLanguageGeneric } from '../../managers/kup-language/kup-language-declarations';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { KupBoxData } from '../kup-box/kup-box-declarations';
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

    #buildChildLine(
        first: boolean,
        last: boolean,
        alone: boolean,
        moreTwo: boolean
    ) {
        const content: VNode[] = [];
        content.push(
            <td
                class={{
                    'family-tree__line': true,
                    'family-tree__line--right': !first,
                    'family-tree__line--top': !first,
                }}
            >
                <div class={'family-tree__line--placeholder'}></div>
            </td>
        );
        content.push(
            <td
                class={{
                    'family-tree__line': true,
                    'family-tree__line--left': first,
                    'family-tree__line--top':
                        (first && !alone) || (moreTwo && !last),
                }}
            >
                <div class={'family-tree__line--placeholder'}></div>
            </td>
        );
        return content;
    }

    #buildNode(node: KupDataNode) {
        const hasChildren = node.children && node.children.length > 0;

        const span1 = hasChildren ? node.children.length * 2 : 1;

        const styleVLine = {
            'family-tree__line': true,
            'family-tree__line--placeholder': hasChildren,
            'family-tree__line--vertical': hasChildren,
        };

        const data: KupBoxData = {
            columns: [{ name: 'MOCK' } as KupDataColumn],
            rows: [{ cells: { MOCK: node } }],
        };

        const box: VNode = (
            <div class={'family-tree__item'}>
                <kup-box data={data}></kup-box>
            </div>
        );
        return (
            <table>
                <tr>
                    <td colSpan={span1}>{box}</td>
                </tr>
                <tr>
                    <td colSpan={span1}>
                        <div class={styleVLine}></div>
                    </td>
                </tr>
                <tr>
                    {hasChildren
                        ? node.children.map((inode) =>
                              this.#buildChildLine(
                                  node.children.indexOf(inode) == 0,
                                  node.children.indexOf(inode) ==
                                      node.children.length - 1,
                                  node.children.length == 1,
                                  node.children.length > 2
                              )
                          )
                        : undefined}
                </tr>
                <tr>
                    {hasChildren
                        ? node.children.map((inode) => (
                              <td colSpan={2}>{this.#buildNode(inode)}</td>
                          ))
                        : undefined}
                </tr>
            </table>
        );
    }

    #buildNodes(nodes: KupDataNode[]) {
        return nodes.map((node) => this.#buildNode(node));
    }

    #createTree(): VNode {
        const content: VNode[] = [];

        if (!this.data || !this.data.rows || !this.data.rows.length) {
            content.push(
                <div>
                    {this.#kupManager.language.translate(
                        KupLanguageGeneric.EMPTY_DATA
                    )}
                </div>
            );
        } else {
            content.push(<div>{this.#buildNodes(this.data.rows)}</div>);
        }
        return <div class="family-tree">{content}</div>;
    }

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
