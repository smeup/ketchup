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
import type { GenericObject } from '../../types/GenericTypes';
import { kulManagerInstance } from '../../managers/kul-manager/kul-manager';
import { KulDebugComponentInfo } from '../../managers/kul-debug/kul-debug-declarations';
import { getProps } from '../../utils/componentUtils';
import { KUL_STYLE_ID, KUL_WRAPPER_ID } from '../../variables/GenericVariables';
import {
    KulSwitchEvent,
    KulSwitchEventPayload,
    KulSwitchProps,
    KulSwitchState,
} from './kul-switch-declarations';

@Component({
    tag: 'kul-switch',
    styleUrl: 'kul-switch.scss',
    shadow: true,
})
export class KulSwitch {
    /**
     * References the root HTML element of the component (<kul-switch>).
     */
    @Element() rootElement: HTMLKulSwitchElement;

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
     * The value of the component ("on" or "off").
     * @default ""
     *
     * @see KulSwitchState - For a list of possible states.
     */
    @State() value: KulSwitchState = 'off';

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Defaults at false. When set to true, the component is disabled.
     * @default false
     */
    @Prop({ mutable: true, reflect: true }) kulDisabled = false;
    /**
     * Defines text to display along with the switch.
     * @default ""
     */
    @Prop({ mutable: true, reflect: true }) kulLabel = '';
    /**
     * Defaults at false. When set to true, the label will be displayed before the component.
     * @default false
     */
    @Prop({ mutable: true, reflect: true }) kulLeadingLabel = false;
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
    /**
     * Sets the initial boolean state of the switch.
     * @default false
     */
    @Prop({ mutable: false }) kulValue = false;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #kulManager = kulManagerInstance();
    #rippleSurface: HTMLElement;

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Describes event emitted for various switch interactions like click, focus, blur.
     */
    @Event({
        eventName: 'kul-switch-event',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kulEvent: EventEmitter<KulSwitchEventPayload>;

    onKulEvent(e: Event | CustomEvent, eventType: KulSwitchEvent) {
        switch (eventType) {
            case 'change':
                this.#updateState(this.#isOn() ? 'off' : 'on');
                break;
            case 'pointerdown':
                if (this.kulRipple) {
                    this.#kulManager.theme.ripple.trigger(
                        e as PointerEvent,
                        this.#rippleSurface
                    );
                }
                break;
        }

        this.kulEvent.emit({
            comp: this,
            eventType,
            id: this.rootElement.id,
            originalEvent: e,
            value: this.value,
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
        return getProps(this, KulSwitchProps, descriptions);
    }
    /**
     * Used to retrieve component's current state.
     * @returns {Promise<KulSwitchState>} Promise resolved with the current state of the component.
     */
    @Method()
    async getValue(): Promise<KulSwitchState> {
        return this.value;
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * Sets the component's state.
     * @param {KulSwitchState} value - The new state to be set on the component.
     * @returns {Promise<void>}
     */
    @Method()
    async setValue(value: KulSwitchState): Promise<void> {
        this.#updateState(value);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #isOn() {
        return this.value === 'on' ? true : false;
    }

    #updateState(value: KulSwitchState) {
        if (!this.kulDisabled && (value === 'off' || value === 'on')) {
            this.value = value;
        }
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        if (this.kulValue) {
            this.value = 'on';
        }

        this.#kulManager.theme.register(this);
    }

    componentDidLoad() {
        if (this.#rippleSurface) {
            this.#kulManager.theme.ripple.setup(this.#rippleSurface);
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
        const className: Record<string, boolean> = {
            switch: true,
            'switch--checked': this.#isOn(),
            'switch--disabled': this.kulDisabled,
        };
        const formClassName: Record<string, boolean> = {
            'form-field': true,
            'form-field--align-end': this.kulLeadingLabel,
        };
        return (
            <Host>
                <style id={KUL_STYLE_ID}>
                    {this.#kulManager.theme.setKulStyle(this)}
                </style>
                <div id={KUL_WRAPPER_ID}>
                    <div class={formClassName}>
                        <div class={className}>
                            <div class="switch__track"></div>
                            <div class="switch__thumb-underlay">
                                <div class="switch__thumb">
                                    <div
                                        ref={(el) => {
                                            if (this.kulRipple) {
                                                this.#rippleSurface = el;
                                            }
                                        }}
                                    ></div>
                                    <input
                                        type="checkbox"
                                        class="switch__native-control"
                                        role="switch"
                                        checked={this.#isOn()}
                                        disabled={this.kulDisabled}
                                        value={this.value ? 'on' : 'off'}
                                        onBlur={(e) => {
                                            this.onKulEvent(e, 'blur');
                                        }}
                                        onChange={(e) => {
                                            this.onKulEvent(e, 'change');
                                        }}
                                        onFocus={(e) => {
                                            this.onKulEvent(e, 'focus');
                                        }}
                                        onPointerDown={(e) => {
                                            this.onKulEvent(e, 'pointerdown');
                                        }}
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <label
                            class="switch__label"
                            onClick={(e) => {
                                this.onKulEvent(e, 'change');
                            }}
                        >
                            {this.kulLabel}
                        </label>
                    </div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kulManager.theme.unregister(this);
    }
}
