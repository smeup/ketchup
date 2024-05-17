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
import {
    KulTextfieldEvent,
    KulTextfieldProps,
    KulTextfieldStatus,
} from './kul-textfield-declarations';
import { kulManagerInstance } from '../../managers/kul-manager/kul-manager';
import { getProps } from '../../utils/componentUtils';
import { KUL_WRAPPER_ID } from '../../variables/GenericVariables';
import { KulDebugComponentInfo } from '../../managers/kul-debug/kul-debug-declarations';
import { GenericObject, KulEventPayload } from '../../types/GenericTypes';

@Component({
    tag: 'kul-textfield',
    styleUrl: 'kul-textfield.scss',
    shadow: true,
})
export class KulTextfield {
    /**
     * References the root HTML element of the component (<kul-textfield>).
     */
    @Element() rootElement: HTMLKulTextfieldElement;

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
     * UI Status of the text field.
     */
    @State() status: Set<KulTextfieldStatus> = new Set();
    /**
     * Value of the text field.
     */
    @State() value = '';

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Icon of the text field.
     * @default ""
     */
    @Prop({ mutable: true, reflect: true }) kulIcon = 'widgets';
    /**
     * Label of the text field.
     * @default ""
     */
    @Prop({ mutable: true, reflect: true }) kulLabel = 'Label';
    /**
     * Custom style of the component.
     * @default ""
     */
    @Prop({ mutable: true, reflect: true }) kulStyle = '';
    /**
     * Sets the initial value of the text field.
     * @default ""
     */
    @Prop({ mutable: false }) kulValue = 'initial';

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #input: HTMLInputElement;
    #label: HTMLLabelElement;
    #kulManager = kulManagerInstance();

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Describes event emitted.
     */
    @Event({
        eventName: 'kul-textfield-event',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kulEvent: EventEmitter<KulEventPayload>;

    onKulEvent(e: Event | CustomEvent, eventType: KulTextfieldEvent) {
        const target = e.target as HTMLInputElement;
        switch (eventType) {
            case 'blur':
                this.status.delete('focused');
                this.status = new Set(this.status);
                break;
            case 'change':
                if (!target.value) {
                    this.status.delete('filled');
                    this.status = new Set(this.status);
                } else {
                    this.status.add('filled');
                    this.status = new Set(this.status);
                }
                this.value = target.value;
                break;
            case 'focus':
                this.status.add('focused');
                this.status = new Set(this.status);
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
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KulTextfieldProps, descriptions);
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    #createIcon() {
        const path = getAssetPath(`./assets/svg/${this.kulIcon}.svg`);
        const style = {
            mask: `url('${path}') no-repeat center`,
            webkitMask: `url('${path}') no-repeat center`,
        };
        return <div class="textfield__icon" style={style}></div>;
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kulManager.theme.register(this);
        if (this.kulValue) {
            this.status.add('filled');
            this.value = this.kulValue;
        }
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
        const classes = ['textfield'];
        this.status.forEach((status) => {
            classes.push(`textfield--${status}`);
        });
        return (
            <Host>
                <style>{this.#kulManager.theme.setKulStyle(this)}</style>
                <div id={KUL_WRAPPER_ID}>
                    <div class={classes.join(' ')}>
                        {this.kulLabel && (
                            <label
                                class="textfield__label"
                                htmlFor="input"
                                ref={(el) => (this.#label = el)}
                            >
                                {this.kulLabel}
                            </label>
                        )}
                        {this.kulIcon && this.#createIcon()}
                        <input
                            class="textfield__input"
                            id="input"
                            onBlur={(e) => {
                                this.onKulEvent(e, 'blur');
                            }}
                            onChange={(e) => {
                                this.onKulEvent(e, 'change');
                            }}
                            onClick={(e) => {
                                this.onKulEvent(e, 'click');
                            }}
                            onFocus={(e) => {
                                this.onKulEvent(e, 'focus');
                            }}
                            onInput={(e) => {
                                this.onKulEvent(e, 'input');
                            }}
                            ref={(el) => (this.#input = el)}
                            type="text"
                            value={this.value}
                        />
                    </div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kulManager.theme.unregister(this);
    }
}
