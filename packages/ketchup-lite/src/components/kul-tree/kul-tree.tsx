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
import {
    KulTreeEvent,
    KulTreeEventArguments,
    KulTreeEventPayload,
    KulTreeProps,
} from './kul-tree-declarations';
import { kulManagerInstance } from '../../managers/kul-manager/kul-manager';
import { getProps } from '../../utils/componentUtils';
import { KUL_WRAPPER_ID } from '../../variables/GenericVariables';
import { KulDebugComponentInfo } from '../../managers/kul-debug/kul-debug-declarations';
import { GenericObject } from '../../types/GenericTypes';
import { KulDataDataset, KulDataNode } from '../../components';
import { TreeNode } from './node/kul-tree-node';
import { KulTreeNodeProps } from './node/kul-tree-node-declarations';

@Component({
    tag: 'kul-tree',
    styleUrl: 'kul-tree.scss',
    shadow: true,
})
export class KulTree {
    /**
     * References the root HTML element of the component (<kul-tree>).
     */
    @Element() rootElement: HTMLKulTreeElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /**
     * Debug information.
     */
    @State() debugInfo: KulDebugComponentInfo = {
        endTime: 0,
        renderCount: 0,
        renderEnd: 0,
        renderStart: 0,
        startTime: performance.now(),
    };
    /**
     * Set of expanded nodes.
     */
    @State() expandedNodes: Set<KulDataNode> = new Set();
    /**
     * Selected node.
     */
    @State() selectedNode: KulDataNode = null;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * When enabled, the first level of depth will create an accordion-style appearance for nodes.
     * @default false
     */
    @Prop({ mutable: true, reflect: true }) kulAccordionLayout = true;
    /**
     * The actual data of the tree.
     * @default null
     */
    @Prop({ mutable: true }) kulData: KulDataDataset = null;
    /**
     * Sets the initial expanded nodes based on the specified depth.
     * If the property is not provided, all nodes in the tree will be expanded.
     * @default null
     */
    @Prop({ mutable: true }) kulInitialExpansionDepth: number;
    /**
     * When set to true, the pointerdown event will trigger a ripple effect.
     * @default true
     */
    @Prop({ mutable: true, reflect: true }) kulRipple = true;
    /**
     * When true, nodes can be selected.
     * @default null
     */
    @Prop({ mutable: true, reflect: true }) kulSelectable = true;
    /**
     * Enables customization of the component's style.
     * @default ""
     */
    @Prop({ mutable: true, reflect: true }) kulStyle = '';

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #kulManager = kulManagerInstance();
    #rippleSurface: { [id: string]: HTMLElement } = {};

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Describes event emitted.
     */
    @Event({
        eventName: 'kul-tree-event',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kulEvent: EventEmitter<KulTreeEventPayload>;

    onKulEvent(
        e: Event | CustomEvent,
        eventType: KulTreeEvent,
        args?: KulTreeEventArguments
    ) {
        const { expansion, node } = args || {};
        if (eventType === 'pointerdown') {
            if (this.kulRipple) {
                this.#kulManager.theme.ripple.trigger(
                    e as PointerEvent,
                    this.#rippleSurface[node.id]
                );
            }
        }
        if (eventType === 'click') {
            if (expansion && node.children?.length) {
                if (this.expandedNodes.has(node)) {
                    this.expandedNodes.delete(node);
                } else {
                    this.expandedNodes.add(node);
                }
                this.expandedNodes = new Set(this.expandedNodes);
            } else if (node) {
                this.selectedNode = node;
            }
        }
        this.kulEvent.emit({
            comp: this,
            eventType,
            id: this.rootElement.id,
            originalEvent: e,
            node,
        });
    }

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * Retrieves the debug information reflecting the current state of the component.
     * @returns {Promise<KulDebugComponentInfo>} A promise that resolves to a KulDebugComponentInfo object containing debug information.
     */
    @Method()
    async getDebugInfo(): Promise<KulDebugComponentInfo> {
        return this.debugInfo;
    }
    /**
     * Retrieves the properties of the component, with optional descriptions.
     * @param {boolean} descriptions - If true, returns properties with descriptions; otherwise, returns properties only.
     * @returns {Promise<GenericObject>} A promise that resolves to an object where each key is a property name, optionally with its description.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KulTreeProps, descriptions);
    }
    /**
     * Triggers a re-render of the component to reflect any state changes.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #setExpansion(node: KulDataNode) {
        if (this.expandedNodes.has(node)) {
            this.expandedNodes.delete(node);
        } else {
            this.expandedNodes.add(node);
        }

        if (node.children?.length) {
            node.children.forEach((child) => {
                this.#setExpansion(child);
            });
        }
    }

    #recursive(elements: VNode[], node: KulDataNode, depth: number) {
        if (!this.debugInfo.endTime) {
            if (
                this.kulInitialExpansionDepth === null ||
                this.kulInitialExpansionDepth === undefined ||
                this.kulInitialExpansionDepth > depth
            ) {
                this.expandedNodes.add(node);
            }
        }
        const nodeProps: KulTreeNodeProps = {
            accordionLayout: this.kulAccordionLayout && depth === 0,
            depth,
            elements: {
                ripple: (
                    <div
                        ref={(el) => {
                            if (el && this.kulRipple) {
                                this.#rippleSurface[node.id] = el;
                            }
                        }}
                    ></div>
                ),
                value: (
                    <div class="node__value">
                        {this.#kulManager.data.cell.stringify(node.value)}
                    </div>
                ),
            },
            events: {
                onClick: (e) => {
                    this.onKulEvent(e, 'click', { node });
                },
                onClickExpand: (e) => {
                    this.onKulEvent(e, 'click', { expansion: true, node });
                },
                onPointerDown: (e) => {
                    this.onKulEvent(e, 'pointerdown', { node });
                },
            },
            expanded: this.expandedNodes.has(node),
            node,
            selected: this.selectedNode === node,
        };

        elements.push(<TreeNode {...nodeProps}></TreeNode>);
        if (this.expandedNodes.has(node)) {
            node.children?.map((child) =>
                this.#recursive(elements, child, depth + 1)
            );
        }
    }

    #prepTree(): VNode[] {
        const elements: VNode[] = [];
        const nodes = this.kulData.nodes;
        for (let index = 0; index < nodes.length; index++) {
            const node = nodes[index];
            this.#recursive(elements, node, 0);
        }
        return elements;
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kulManager.theme.register(this);
    }

    componentDidLoad() {
        this.onKulEvent(new CustomEvent('ready'), 'ready');
        this.#kulManager.debug.updateDebugInfo(this, 'did-load');
    }

    componentWillRender() {
        this.#kulManager.debug.updateDebugInfo(this, 'will-render');
    }

    componentDidRender() {
        if (Object.keys(this.#rippleSurface).length) {
            for (const key in this.#rippleSurface) {
                if (
                    Object.prototype.hasOwnProperty.call(
                        this.#rippleSurface,
                        key
                    )
                ) {
                    const surface = this.#rippleSurface[key];
                    this.#kulManager.theme.ripple.setup(surface);
                }
            }
        }

        this.#kulManager.debug.updateDebugInfo(this, 'did-render');
    }

    render() {
        this.#rippleSurface = {};

        return (
            <Host>
                <style>{this.#kulManager.theme.setKulStyle(this)}</style>
                <div id={KUL_WRAPPER_ID}>
                    <div class="tree">
                        {this.kulData?.nodes?.length
                            ? this.#prepTree()
                            : 'Empty data'}
                    </div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kulManager.theme.unregister(this);
    }
}
