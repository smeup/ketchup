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
} from '@stencil/core';
import { KupRadio } from '../kup-radio/kup-radio';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import { getProps, setProps } from '../../utils/utils';
import { KupTreeNode } from '../kup-tree/kup-tree-declarations';
import { KupListProps } from '../kup-list/kup-list-declarations';
import { FCellShapes } from '../../f-components/f-cell/f-cell-declarations';
import { KupToolbarItemClickEventPayload } from './kup-toolbar-declarations';

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
    @Prop({ mutable: true }) data: KupTreeNode[] = [];

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    #kupManager: KupManager = kupManagerInstance();

    #radios: KupRadio[] = [];
    #listItems: HTMLElement[] = [];

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    @Event({
        eventName: 'kup-toolbar-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<KupToolbarItemClickEventPayload>;

    onKupClick(index: number) {
        console.log('CLICK', index);
    }

    /*-------------------------------------------------*/
    /*                L i s t e n e r s                */
    /*-------------------------------------------------*/

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
     * Calls handleSelection internal method to select the given item.
     * @param {number} index - Based zero index of the item that must be selected, when not provided the list will attempt to select the focused element.
     */
    // @Method()
    // async select(index?: number): Promise<void> {
    //     if (index === undefined) {
    //         index = this.focused;
    //     }
    //     this.#handleSelection(index);
    // }
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

    #renderTreeNode(node: KupTreeNode, index: number): VNode {
        const hasChildren = node.children && node.children.length > 0;

        const handleClick = () => {
            console.log('Nodo cliccato:', node.value); // Stampa il valore del nodo
            this.onKupClick(index);
            this.kupClick.emit({
                comp: this,
                id: this.rootElement.id,
                node: node,
                value: node.value, // Emetti anche il valore del nodo
            });
        };

        if (!hasChildren) {
            // If there are no children, render the specific component based on shape
            return (
                <div id={node.value} class="parent-class">
                    {node.shape === FCellShapes.RADIO ? (
                        <kup-radio
                            onKup-radio-change={() => handleClick}
                            data={node.options.map((opt: GenericObject) => ({
                                value: opt.id,
                                label: opt.label,
                                checked: opt.id === opt.value,
                            }))}
                        />
                    ) : (
                        <span onClick={handleClick}>{node.value}</span> // Render just the value if no shape is provided
                    )}
                </div>
            );
        } else {
            // If there are children, render the node and apply nested-class to the container of children
            return (
                <div class="parent-class">
                    <span>{node.value}</span>
                    <div class="nested-class">
                        {this.#renderNestedChildren(node.children, index)}
                    </div>
                </div>
            );
        }
    }

    #renderNestedChildren(
        children: KupTreeNode[],
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
    }

    componentWillRender() {
        this.#kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.#kupManager.debug.logRender(this, true);
    }

    render() {
        this.#listItems = [];
        let componentClass: string = 'list';

        if (!this.data || this.data.length === 0) {
            componentClass += ' list--empty';
        }

        this.#radios = [];

        return (
            <Host>
                <style>
                    {this.#kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id="kup-component">
                    <ul>
                        {this.data.map((item, index) =>
                            this.#renderTreeNode(item, index)
                        )}
                    </ul>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kupManager.theme.unregister(this);
    }
}
