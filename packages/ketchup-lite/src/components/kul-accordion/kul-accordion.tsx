import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    getAssetPath,
    h,
    Host,
    Method,
    Prop,
    State,
    VNode,
} from '@stencil/core';
import type { GenericObject, KulEventPayload } from '../../types/GenericTypes';
import { kulManagerInstance } from '../../managers/kul-manager/kul-manager';
import {
    KulDataDataset,
    KulDataNode,
} from '../../managers/kul-data/kul-data-declarations';
import { KulDebugComponentInfo } from '../../managers/kul-debug/kul-debug-declarations';
import { getProps } from '../../utils/componentUtils';
import { KUL_STYLE_ID, KUL_WRAPPER_ID } from '../../variables/GenericVariables';
import {
    KulAccordionEvent,
    KulAccordionProps,
} from './kul-accordion-declarations';

@Component({
    tag: 'kul-accordion',
    styleUrl: 'kul-accordion.scss',
    shadow: true,
})
export class KulAccordion {
    /**
     * References the root HTML element of the component (<kul-accordion>).
     */
    @Element() rootElement: HTMLKulAccordionElement;

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
     * Selected nodes.
     */
    @State() selectedNodes: Set<KulDataNode> = new Set();

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Actual data of the accordion.
     * @default null
     */
    @Prop({ mutable: true }) kulData: KulDataDataset = null;
    /**
     * When set to true, the pointerdown event will trigger a ripple effect.
     * @default true
     */
    @Prop({ mutable: true, reflect: true }) kulRipple = true;
    /**
     * Custom style of the component.
     * @default ""
     */
    @Prop({ mutable: true, reflect: true }) kulStyle = '';

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #kulManager = kulManagerInstance();
    #rippleSurface: { [id: string]: HTMLElement } = {};
    #slotsNames: string[] = [];

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Describes event emitted.
     */
    @Event({
        eventName: 'kul-accordion-event',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kulEvent: EventEmitter<KulEventPayload>;

    onKulEvent(
        e: Event | CustomEvent,
        eventType: KulAccordionEvent,
        node?: KulDataNode
    ) {
        switch (eventType) {
            case 'pointerdown':
                if (this.kulRipple) {
                    this.#kulManager.theme.ripple.trigger(
                        e as PointerEvent,
                        this.#rippleSurface[node.id]
                    );
                }
                break;
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
     * Fetches debug information of the component's current state.
     * @returns {Promise<KulDebugComponentInfo>} A promise that resolves with the debug information object.
     */
    @Method()
    async getDebugInfo(): Promise<KulDebugComponentInfo> {
        return this.debugInfo;
    }
    /**
     * Used to retrieve component's properties and descriptions.
     * @param {boolean} descriptions - When true, includes descriptions for each property.
     * @returns {Promise<GenericObject>} Promise resolved with an object containing the component's properties.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KulAccordionProps, descriptions);
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * This method activates or deactivates an node.
     * @param {string} id - Id of the node.
     */
    @Method()
    async toggleNode(id: string, e?: Event) {
        const node = this.kulData.nodes.find((n) => n.id === id);
        if (!node) {
            return;
        }
        if (this.#isExpandible(node)) {
            if (this.#isExpanded(node)) {
                this.expandedNodes.delete(node);
            } else {
                this.expandedNodes.add(node);
            }
        } else if (this.#isSelected(node)) {
            this.selectedNodes.delete(node);
        } else {
            this.selectedNodes.add(node);
        }

        if (!this.#isExpandible(node)) {
            this.onKulEvent(e || new CustomEvent('click'), 'click');
        }
        this.refresh();
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #isExpanded(node: KulDataNode): boolean {
        return this.expandedNodes.has(node);
    }

    #isExpandible(node: KulDataNode): boolean {
        return this.#slotsNames.includes(node.id);
    }

    #isSelected(node: KulDataNode): boolean {
        return this.selectedNodes.has(node);
    }

    #prepIcon(icon: string) {
        const path = getAssetPath(`./assets/svg/${icon}.svg`);
        const style = {
            mask: `url('${path}') no-repeat center`,
            webkitMask: `url('${path}') no-repeat center`,
        };
        return <div class={'node__icon'} style={style}></div>;
    }

    #prepAccordion(): VNode[] {
        const nodes: VNode[] = [];
        const slots: Array<HTMLElement> = Array.prototype.slice.call(
            this.rootElement.children,
            0
        );
        this.#slotsNames = [];
        for (let index = 0; index < slots.length; index++) {
            const slot = slots[index];
            this.#slotsNames.push(slot.slot);
        }

        for (let i = 0; i < this.kulData.nodes.length; i++) {
            const node = this.kulData.nodes[i];
            const isExpanded = this.#isExpanded(node);
            const isExpandible = this.#isExpandible(node);
            const isSelected = this.#isSelected(node);
            const headerClassName = {
                node__header: true,
                'node__header--selected':
                    !isExpandible && isSelected ? true : false,
                'node__header--expanded':
                    isExpandible && isExpanded ? true : false,
            };
            const contentClassname: { [className: string]: boolean } = {
                node__content: true,
                'node__content--selected': isSelected ? true : false,
            };
            nodes.push(
                <div class="node">
                    <div
                        tabindex="1"
                        title={node.description}
                        class={headerClassName}
                        onClick={(e) => this.toggleNode(node.id, e)}
                        onPointerDown={(e) => {
                            this.onKulEvent(e, 'pointerdown', node);
                        }}
                    >
                        <div
                            ref={(el) => {
                                if (el && this.kulRipple) {
                                    this.#rippleSurface[node.id] = el;
                                }
                            }}
                        ></div>
                        {node.icon ? this.#prepIcon(node.icon) : null}
                        <span class="node__text">{node.value}</span>
                        {isExpandible ? (
                            <div
                                class={`node__expand ${
                                    isExpanded ? 'node__expand--expanded' : ''
                                } `}
                            ></div>
                        ) : null}
                    </div>
                    {isExpanded ? (
                        <div class={contentClassname}>
                            <slot name={node.id}></slot>
                        </div>
                    ) : null}
                </div>
            );
        }
        return nodes;
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
                {this.kulStyle ? (
                    <style id={KUL_STYLE_ID}>
                        {this.#kulManager.theme.setKulStyle(this)}
                    </style>
                ) : undefined}
                <div id={KUL_WRAPPER_ID}>
                    <div class="accordion">{this.#prepAccordion()}</div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kulManager.theme.unregister(this);
    }
}
