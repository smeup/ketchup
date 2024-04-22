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
import { KulToastEvents, KulToastProps } from './kul-toast-declarations';
import { kulManagerInstance } from '../../managers/kul-manager/kul-manager';
import { getProps, setProps } from '../../utils/componentUtils';
import { KUL_WRAPPER_ID } from '../../variables/GenericVariables';
import { KulDebugComponentInfo } from '../../managers/kul-debug/kul-debug-declarations';
import { GenericObject, KulEventPayload } from '../../types/GenericTypes';
import { KulImagePropsInterface } from '../kul-image/kul-image-declarations';

@Component({
    tag: 'kul-toast',
    styleUrl: 'kul-toast.scss',
    shadow: true,
})
export class KulToast {
    /**
     * References the root HTML element of the component (<kul-toast>).
     */
    @Element() rootElement: HTMLKulToastElement;

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
     * Sets the props of the clickable icon used to close the toast.
     * @default { kulSizeX: '18px', kulSizeY: '18px', kulValue: 'clear' }
     */
    @Prop({ mutable: true })
    kulCloseIcon: KulImagePropsInterface = {
        kulSizeX: '18px',
        kulSizeY: '18px',
        kulValue: 'clear',
    };
    /**
     * Callback invoked when the toast is closed.
     * @default () => void
     */
    @Prop() kulCloseCallback: () => void = () => {
        const e = new CustomEvent('close');
        this.onKulEvent(e, 'close');
        this.kulEvent.emit({
            comp: this,
            eventType: 'close',
            id: this.rootElement.id,
            originalEvent: e,
        });
        this.rootElement.remove();
    };
    /**
     *  Sets the props of an optional icon that will be displayed along with the message.
     * @default { kulSizeX: '18px', kulSizeY: '18px', kulValue: 'info' }
     */
    @Prop({ mutable: true, reflect: true }) kulIcon: KulImagePropsInterface = {
        kulSizeX: '18px',
        kulSizeY: '18px',
        kulValue: 'info',
    };
    /**
     * When kulTimer is set with a number, the toast will close itself after the specified amount of time (in ms).
     * @default ''
     */
    @Prop() kulTimer: number = null;
    /**
     * Sets the message of the toast.
     * @default 'Wow, such empty.'
     */
    @Prop({ mutable: true, reflect: true }) kulMessage = 'Wow, such empty.';
    /**
     * Enables customization of the component's style.
     * @default "" - No custom style applied by default.
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
     * Describes event emitted.
     */
    @Event({
        eventName: 'kul-toast-event',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kulEvent: EventEmitter<KulEventPayload>;

    onKulEvent(e: Event | CustomEvent, eventType: KulToastEvents) {
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
        return getProps(this, KulToastProps, descriptions);
    }
    /**
     * Triggers a re-render of the component to reflect any state changes.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * Assigns a set of properties to the component, triggering updates if necessary.
     * @param {GenericObject} props - An object containing properties to be set on the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KulToastProps, props);
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
        if (this.kulTimer) {
            setTimeout(() => {}, this.kulTimer);
        }
        this.#kulManager.debug.updateDebugInfo(this, 'did-render');
    }

    render() {
        return (
            <Host>
                <style>{this.#kulManager.theme.setKulStyle(this)}</style>
                <div id={KUL_WRAPPER_ID}>
                    <div class="toast">
                        <div
                            class={`toast__accent ${
                                this.kulTimer ? 'toast__accent--temporary' : ''
                            }`}
                        ></div>
                        <div class="toast__message-wrapper">
                            {this.kulIcon ? (
                                <div class="toast__icon">
                                    <kul-image {...this.kulIcon}></kul-image>
                                </div>
                            ) : undefined}
                            {this.kulMessage ? (
                                <div class="toast__message">
                                    {this.kulMessage}
                                </div>
                            ) : undefined}
                            {this.kulCloseIcon ? (
                                <div
                                    class="toast__icon toast__icon--close"
                                    onClick={() => this.kulCloseCallback()}
                                >
                                    <kul-image
                                        {...this.kulCloseIcon}
                                    ></kul-image>
                                </div>
                            ) : undefined}
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
