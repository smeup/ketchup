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
} from '@stencil/core';
import { KulCodeEvent, KulCodeProps } from './kul-code-declarations';
import { kulManagerInstance } from '../../managers/kul-manager/kul-manager';
import { getProps } from '../../utils/componentUtils';
import { KUL_STYLE_ID, KUL_WRAPPER_ID } from '../../variables/GenericVariables';
import { KulDebugComponentInfo } from '../../managers/kul-debug/kul-debug-declarations';
import { GenericObject, KulEventPayload } from '../../types/GenericTypes';
import Prism from 'prismjs';
import 'prismjs/components/';
import { KulButton } from '../kul-button/kul-button';
import { KulButtonEventPayload } from '../kul-button/kul-button-declarations';

@Component({
    assetsDirs: ['assets/prism'],
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
    /**
     * Value.
     */
    @State() value = '';

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Automatically formats the value.
     * @default true
     */
    @Prop({ mutable: true, reflect: true }) kulFormat = true;
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
    @Prop({ mutable: true, reflect: false }) kulValue = '';

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #copyTimeoutId: NodeJS.Timeout;
    #el: HTMLPreElement;
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

    onKulEvent(e: Event | CustomEvent, eventType: KulCodeEvent) {
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

    #copy(e: CustomEvent<KulButtonEventPayload>) {
        if (e.detail.eventType === 'pointerdown') {
            const button = e.detail.comp as KulButton;
            navigator.clipboard.writeText(this.kulValue);

            button.kulLabel = 'Copied!';
            button.kulIcon = 'check';

            if (this.#copyTimeoutId) {
                clearTimeout(this.#copyTimeoutId);
            }

            this.#copyTimeoutId = setTimeout(() => {
                button.kulLabel = 'Copy';
                button.kulIcon = 'content_copy';
                this.#copyTimeoutId = null;
            }, 1000);
        }
    }

    #format(value: string) {
        if (typeof value === 'string' && /^[\{\}]\s*$/i.test(value)) {
            return value.trim();
        } else if (this.#isJson(value)) {
            const parsed = JSON.parse(value);
            return JSON.stringify(parsed, null, 2);
        } else {
            return this.#kulManager.data.cell.stringify(value);
        }
    }

    async #highlightCode(): Promise<void> {
        try {
            await this.#loadLanguage();
            Prism.highlightElement(this.#el);
        } catch (error) {
            console.error('Failed to highlight code:', error);
            this.#el.innerHTML = this.value;
        }
    }

    #isObjectLike(
        obj: unknown
    ): obj is Record<string | number | symbol, unknown> {
        return typeof obj === 'object' && obj !== null;
    }

    #isDictionary(
        obj: unknown
    ): obj is Record<string | number | symbol, unknown> {
        return (
            this.#isObjectLike(obj) &&
            Object.values(obj).every((value) => value != null)
        );
    }

    #isJson(value: string | Record<string, unknown>) {
        return (
            this.kulLanguage?.toLowerCase() === 'json' ||
            this.#isDictionary(value)
        );
    }

    async #loadLanguage() {
        try {
            const module = getAssetPath(
                `./assets/prism/prism-${this.kulLanguage}.min.js`
            );
            await import(module);
            Prism.highlightAll();
        } catch (error) {
            console.error(
                `Failed to load Prism.js component for ${this.kulLanguage}:`,
                error
            );
        }
    }

    #updateValue() {
        this.value = this.kulFormat
            ? this.#format(this.kulValue)
            : this.kulValue;
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kulManager.theme.register(this);
        this.#updateValue();
    }

    componentDidLoad() {
        this.onKulEvent(new CustomEvent('ready'), 'ready');
        this.#kulManager.debug.updateDebugInfo(this, 'did-load');
    }

    componentWillUpdate() {
        this.value = this.#format(this.kulValue);
    }

    componentWillRender() {
        this.#kulManager.debug.updateDebugInfo(this, 'will-render');
    }

    componentDidRender() {
        if (this.#el) {
            this.#highlightCode();
        }
        this.#kulManager.debug.updateDebugInfo(this, 'did-render');
    }

    render() {
        return (
            <Host>
                {this.kulStyle && (
                    <style id={KUL_STYLE_ID}>
                        {this.#kulManager.theme.setKulStyle(this)}
                    </style>
                )}
                <div id={KUL_WRAPPER_ID}>
                    <div class="container">
                        <div class="header">
                            <span class="title">{this.kulLanguage}</span>
                            <kul-button
                                class={'kul-slim kul-full-height'}
                                kulIcon="content_copy"
                                kulLabel="Copy"
                                kulStyling="flat"
                                onKul-button-event={(
                                    e: CustomEvent<KulButtonEventPayload>
                                ) => this.#copy(e)}
                            ></kul-button>
                        </div>
                        <pre
                            class={'language-' + this.kulLanguage}
                            key={this.value}
                            ref={(el: HTMLPreElement) => {
                                if (el) {
                                    this.#el = el;
                                }
                            }}
                        >
                            <code>{this.value}</code>
                        </pre>
                    </div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kulManager.theme.unregister(this);
    }
}
