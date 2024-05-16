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
    KulTreeProps,
} from './kul-tree-declarations';
import { kulManagerInstance } from '../../managers/kul-manager/kul-manager';
import { getProps } from '../../utils/componentUtils';
import { KUL_WRAPPER_ID } from '../../variables/GenericVariables';
import { KulDebugComponentInfo } from '../../managers/kul-debug/kul-debug-declarations';
import { GenericObject, KulEventPayload } from '../../types/GenericTypes';
import { KulDataDataset, KulDataNode } from '../../components';
import { KulThemeIconValues } from '../../managers/kul-theme/kul-theme-declarations';

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
     * The actual data of the tree.
     * @default null
     */
    @Prop({ mutable: true }) kulData: KulDataDataset = null;
    /**
     * Sets the initial expanded nodes based on the specified depth.
     * If the property is not provided, all nodes in the tree will be expanded.
     * @default null
     */
    @Prop({ mutable: true }) kulInitialExpandedDepth: number;
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
     * @default "" - No custom style applied by default.
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
    kulEvent: EventEmitter<KulEventPayload>;

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
                this.kulInitialExpandedDepth === null ||
                this.kulInitialExpandedDepth === undefined ||
                depth <= this.kulInitialExpandedDepth
            ) {
                this.expandedNodes.add(node);
            }
        }
        const depthString = depth.toString();
        const isExpanded = this.expandedNodes.has(node);
        elements.push(
            <div
                class={`node ${
                    node === this.selectedNode ? 'node--selected' : ''
                }`}
                data-depth={depthString}
                key={node.id}
                onClick={(e) => {
                    this.onKulEvent(e, 'click', { node });
                }}
                onPointerDown={(e) => {
                    this.onKulEvent(e, 'pointerdown', { node });
                }}
                title={node.description}
            >
                <div
                    ref={(el) => {
                        if (el && this.kulRipple) {
                            this.#rippleSurface[node.id] = el;
                        }
                    }}
                ></div>
                <div class="node__content">
                    <div
                        class="node__padding"
                        style={{
                            ['--kul_tree_padding_multiplier']: depthString,
                        }}
                    ></div>
                    {node.children?.length ? (
                        <div
                            class={`node__expand ${
                                isExpanded ? 'node__expand--expanded' : ''
                            }`}
                            onClick={(e) => {
                                e.stopPropagation();
                                this.onKulEvent(e, 'click', {
                                    expansion: true,
                                    node,
                                });
                            }}
                        ></div>
                    ) : (
                        <div class={'node__expand--placeholder'}></div>
                    )}
                    {node.icon ? (
                        <kul-image
                            class={'node__icon'}
                            kulSizeX="1.5em"
                            kulSizeY="1.5em"
                            kulValue={node.icon}
                        ></kul-image>
                    ) : (
                        <div class={'node__expand--placeholder'}></div>
                    )}
                    <div class="node__value">
                        {this.#kulManager.data.cell.stringify(node.value)}
                    </div>
                </div>
            </div>
        );
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
