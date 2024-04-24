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
import { KulCodeEvents, KulCodeProps } from './kul-code-declarations';
import { kulManagerInstance } from '../../managers/kul-manager/kul-manager';
import { getProps } from '../../utils/componentUtils';
import { KUL_WRAPPER_ID } from '../../variables/GenericVariables';
import { KulDebugComponentInfo } from '../../managers/kul-debug/kul-debug-declarations';
import { GenericObject, KulEventPayload } from '../../types/GenericTypes';
import Prism from 'prismjs';
import { KulButton } from '../kul-button/kul-button';

@Component({
    tag: 'kul-code',
    styleUrl: 'kul-code.scss',
    shadow: true,
})
export class KulCode {
    /**
     * References the root HTML element of the component (<kul-code>).
     */
    @Element() rootElement: HTMLKulCodeElement;

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

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Sets the language of the snippet.
     * @default "javascript"
     */
    @Prop({ mutable: true, reflect: true }) kulLanguage = 'javascript';

    /**
     * Enables customization of the component's style.
     * @default "" - No custom style applied by default.
     */
    @Prop({ mutable: true, reflect: true }) kulStyle = '';

    /**
     * String containing the snippet of code to display.
     * @default ""
     */
    @Prop({ mutable: true, reflect: true }) kulValue = '';

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #kulManager = kulManagerInstance();

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Describes event emitted.
     */
    @Event({
        eventName: 'kul-code-event',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kulEvent: EventEmitter<KulEventPayload>;

    onKulEvent(e: Event | CustomEvent, eventType: KulCodeEvents) {
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
        return getProps(this, KulCodeProps, descriptions);
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

    #el: HTMLPreElement;

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
        Prism.highlightElement(this.#el);
        this.#kulManager.debug.updateDebugInfo(this, 'did-render');
    }

    render() {
        const isJson = this.kulLanguage.toLowerCase() === 'json';
        const language = isJson ? 'javascript' : this.kulLanguage;
        const value = isJson
            ? JSON.stringify(JSON.parse(this.kulValue), null, 2)
            : this.kulValue;
        return (
            <Host>
                <style>{this.#kulManager.theme.setKulStyle(this)}</style>
                <div id={KUL_WRAPPER_ID}>
                    {
                        <div class="header">
                            <span class="title">{this.kulLanguage}</span>
                            <kul-button
                                class={'kul-slim'}
                                kulIcon="content_copy"
                                kulLabel="Copy"
                                kulStyling="flat"
                                onKul-button-event={(e) => {
                                    if (e.detail.eventType === 'pointerdown') {
                                        const button = e.detail
                                            .comp as KulButton;
                                        navigator.clipboard.writeText(
                                            this.kulValue
                                        );
                                        button.kulLabel = 'Copied!';
                                        button.kulIcon = 'check';
                                    }
                                }}
                            ></kul-button>
                        </div>
                    }
                    <pre
                        class={'language-' + language}
                        ref={(el) => {
                            this.#el = el;
                        }}
                    >
                        <code>{value}</code>
                    </pre>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kulManager.theme.unregister(this);
    }
}
