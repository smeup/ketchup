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
} from '@stencil/core';
import { GenericObject, KulEventPayload } from '../../types/GenericTypes';
import { kulManagerInstance } from '../../managers/kul-manager/kul-manager';
import { KUL_STYLE_ID, KUL_WRAPPER_ID } from '../../variables/GenericVariables';
import { KulDrawerEvent, KulDrawerProps } from './kul-drawer-declarations';
import { KulDebugComponentInfo } from '../../components';
import { getProps } from '../../utils/componentUtils';

@Component({
    tag: 'kul-drawer',
    styleUrl: 'kul-drawer.scss',
    shadow: true,
})
export class KulDrawer {
    /**
     * References the root HTML element of the component (<kul-drawer>).
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
     * True when the drawer is open.
     * @default false
     */
    @State() opened = false;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Custom style of the component.
     * @default ""
     */
    @Prop({ mutable: true, reflect: true }) kulStyle = '';

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #kulManager = kulManagerInstance();

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Describes event emitted by the component.
     */
    @Event({
        eventName: 'kul-drawer-event',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kulEvent: EventEmitter<KulEventPayload>;

    onKulEvent(e: Event | CustomEvent, eventType: KulDrawerEvent) {
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
     * Closes the drawer.
     */
    @Method()
    async close(): Promise<void> {
        this.opened = false;
        this.onKulEvent(new CustomEvent('close'), 'close');
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
        return getProps(this, KulDrawerProps, descriptions);
    }
    /**
     * Returns the state of the drawer.
     * @returns {Promise<boolean>} True when opened, false when closed.
     */
    @Method()
    async isOpened(): Promise<boolean> {
        return this.opened;
    }
    /**
     * Opens the drawer.
     */
    @Method()
    async open(): Promise<void> {
        this.opened = true;
        this.onKulEvent(new CustomEvent('open'), 'open');
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * Opens the drawer when closed and vice-versa.
     */
    @Method()
    async toggle(): Promise<void> {
        if (this.opened) {
            this.close();
        } else {
            this.open();
        }
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
        this.#kulManager.debug.updateDebugInfo(this, 'did-render');
    }

    render() {
        return (
            <Host kul-opened={this.opened}>
                <style id={KUL_STYLE_ID}>
                    {this.#kulManager.theme.setKulStyle(this)}
                </style>
                <div
                    class="backdrop"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                    onPointerDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.close();
                    }}
                    onTouchStart={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                />
                <div id={KUL_WRAPPER_ID}>
                    <div class={'drawer'}>
                        <div class={`drawer__content`}>
                            <slot></slot>
                        </div>
                    </div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kulManager.theme.unregister(this);
    }
}
