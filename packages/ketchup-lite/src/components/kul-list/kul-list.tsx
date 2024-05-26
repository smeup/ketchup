import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    getAssetPath,
    h,
    Host,
    Listen,
    Method,
    Prop,
    State,
} from '@stencil/core';
import {
    KulDataDataset,
    KulDataNode,
} from '../../managers/kul-data/kul-data-declarations';
import {
    KulListEvent,
    KulListEventPayload,
    KulListProps,
} from './kul-list-declarations';
import { kulManagerInstance } from '../../managers/kul-manager/kul-manager';
import { GenericObject } from '../../types/GenericTypes';
import { getProps } from '../../utils/componentUtils';
import { KulDebugComponentInfo } from '../../managers/kul-debug/kul-debug-declarations';
import { KUL_STYLE_ID, KUL_WRAPPER_ID } from '../../variables/GenericVariables';

@Component({
    tag: 'kul-list',
    styleUrl: 'kul-list.scss',
    shadow: true,
})
export class KulList {
    /**
     * References the root HTML element of the component (<kul-list>).
     */
    @Element() rootElement: HTMLElement;

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
     * The focused list item.
     * @default undefined
     */
    @State() focused: number;
    /**
     * The selected list items.
     * @default undefined
     */
    @State() selected: number;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * The data of the list.
     * @default []
     */
    @Prop({ mutable: true }) kulData: KulDataDataset = null;
    /**
     * When true, enables items' navigation through arrow keys.
     * @default true
     */
    @Prop() kulNavigation = true;
    /**
     * When set to true, the pointerdown event will trigger a ripple effect.
     * @default true
     */
    @Prop({ mutable: true, reflect: true }) kulRipple = true;
    /**
     * Defines whether items are selectable or not.
     * @default true
     */
    @Prop() kulSelectable = true;
    /**
     * Custom style of the component.
     * @default ""
     */
    @Prop({ mutable: true }) kulStyle = '';

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #kulManager = kulManagerInstance();
    #listItems: HTMLLIElement[] = [];
    #rippleSurface: HTMLElement[] = [];

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Describes event emitted.
     */
    @Event({
        eventName: 'kul-list-event',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kulEvent: EventEmitter<KulListEventPayload>;

    onKulEvent(
        e: Event | CustomEvent,
        eventType: KulListEvent,
        node?: KulDataNode,
        index = 0
    ) {
        switch (eventType) {
            case 'blur':
                this.focused = null;
                break;
            case 'click':
                this.focused = index;
                this.#handleSelection(index);
                break;
            case 'focus':
                this.focused = index;
                break;
            case 'pointerdown':
                if (this.kulRipple) {
                    this.#kulManager.theme.ripple.trigger(
                        e as PointerEvent,
                        this.#rippleSurface[index]
                    );
                }
                break;
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
    /*                L i s t e n e r s                */
    /*-------------------------------------------------*/

    @Listen('keydown')
    listenKeydown(e: KeyboardEvent) {
        if (this.kulNavigation) {
            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    e.stopPropagation();
                    this.focusNext();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    e.stopPropagation();
                    this.focusPrevious();
                    break;
                case 'Enter':
                    e.preventDefault();
                    e.stopPropagation();
                    this.#handleSelection(this.focused);
                    break;
            }
        }
    }

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * Focuses the next element of the list.
     */
    @Method()
    async focusNext(): Promise<void> {
        if (
            isNaN(this.focused) ||
            this.focused === null ||
            this.focused === undefined
        ) {
            this.focused = this.selected;
        } else {
            this.focused++;
        }
        if (this.focused > this.#listItems.length - 1) {
            this.focused = 0;
        }
        this.#listItems[this.focused].focus();
    }
    /**
     * Focuses the previous element of the list.
     */
    @Method()
    async focusPrevious(): Promise<void> {
        if (
            isNaN(this.focused) ||
            this.focused === null ||
            this.focused === undefined
        ) {
            this.focused = this.selected;
        } else {
            this.focused--;
        }
        if (this.focused < 0) {
            this.focused = this.#listItems.length - 1;
        }
        this.#listItems[this.focused].focus();
    }
    /**
     * Fetches debug information of the component's current state.
     * @returns {Promise<KulDebugComponentInfo>} A promise that resolves with the debug information object.
     */
    @Method()
    async getDebugInfo(): Promise<KulDebugComponentInfo> {
        return this.debugInfo;
    }
    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KulListProps, descriptions);
    }
    /**
     * Returns the selected node.
     * @returns {Promise<KulListNode>} Selected node.
     */
    @Method()
    async getSelected(): Promise<KulDataNode> {
        return this.kulData.nodes[this.selected];
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * Calls handleSelection private method to select the given item.
     * @param {number} index - Zero-based index of the item that must be selected, when not provided the list will attempt to select the focused element.
     */
    @Method()
    async selectNode(index?: number): Promise<void> {
        if (index === undefined) {
            index = this.focused;
        }
        this.#handleSelection(index);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #handleSelection(index: number): void {
        if (
            this.kulSelectable &&
            index !== null &&
            index !== undefined &&
            !isNaN(index)
        ) {
            this.selected = index;
        }
    }

    #prepSubtitle(node: KulDataNode) {
        return node.description ? (
            <div class="node__subtitle">{node.description}</div>
        ) : undefined;
    }

    #prepIcon(node: KulDataNode) {
        if (!node.icon) {
            return;
        } else {
            const path = getAssetPath(`./assets/svg/${node.icon}.svg`);
            const style = {
                mask: `url('${path}') no-repeat center`,
                webkitMask: `url('${path}') no-repeat center`,
            };
            return <div class="node__icon" style={style}></div>;
        }
    }

    #prepNode(node: KulDataNode, index: number) {
        const isFocused =
            this.focused ===
            this.kulData.nodes.findIndex((n) => n.id === node.id);
        const isSelected =
            this.selected ===
            this.kulData.nodes.findIndex((n) => n.id === node.id);
        const className = {
            node: true,
            'node--focused': isFocused,
            'node--has-description': !!node.description,
            'node--selected': isSelected,
        };
        return (
            <li
                aria-selected={isSelected}
                aria-checked={isSelected}
                class={className}
                data-index={index.toString()}
                onBlur={(e) => this.onKulEvent(e, 'blur', node, index)}
                onClick={(e) => this.onKulEvent(e, 'click', node, index)}
                onFocus={(e) => this.onKulEvent(e, 'focus', node, index)}
                onPointerDown={(e) =>
                    this.onKulEvent(e, 'pointerdown', node, index)
                }
                ref={(el) => {
                    if (el) {
                        this.#listItems.push(el);
                    }
                }}
                role={'option'}
                tabindex={isSelected ? '0' : '-1'}
            >
                <div
                    ref={(el) => {
                        if (this.kulRipple && el) {
                            this.#rippleSurface.push(el);
                        }
                    }}
                ></div>
                {this.#prepIcon(node)}
                <span class="node__text">
                    {this.#prepTitle(node)}
                    {this.#prepSubtitle(node)}
                </span>
            </li>
        );
    }

    #prepTitle(node: KulDataNode) {
        return node.value ? (
            <div class="node__title">{node.value}</div>
        ) : undefined;
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kulManager.theme.register(this);
    }

    componentDidLoad() {
        if (this.#rippleSurface?.length) {
            this.#rippleSurface.forEach((el) => {
                this.#kulManager.theme.ripple.setup(el);
            });
        }
        this.onKulEvent(new CustomEvent('ready'), 'ready');
        this.#kulManager.debug.updateDebugInfo(this, 'did-load');
    }

    componentWillRender() {
        this.#kulManager.debug.updateDebugInfo(this, 'will-render');
    }

    componentDidRender() {
        this.#kulManager.debug.updateDebugInfo(this, 'did-render');
    }

    render() {
        this.#listItems = [];
        const className = {
            list: true,
            'list--empty': !!!this.kulData?.nodes?.length,
            'list--selectable': this.kulSelectable,
        };

        return (
            <Host>
                <style id={KUL_STYLE_ID}>
                    {this.#kulManager.theme.setKulStyle(this)}
                </style>
                <div id={KUL_WRAPPER_ID}>
                    <ul
                        aria-multiselectable={'false'}
                        class={className}
                        role={'listbox'}
                    >
                        {this.kulData.nodes.map((item, index) =>
                            this.#prepNode(item, index)
                        )}
                    </ul>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kulManager.theme.unregister(this);
    }
}
