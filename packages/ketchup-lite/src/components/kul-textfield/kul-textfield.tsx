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
import {
    KulTextfieldEvent,
    KulTextfieldEventPayload,
    KulTextfieldHelper,
    KulTextfieldProps,
    KulTextfieldStatus,
    KulTextfieldStyling,
} from './kul-textfield-declarations';
import { kulManagerInstance } from '../../managers/kul-manager/kul-manager';
import { getProps } from '../../utils/componentUtils';
import { KUL_STYLE_ID, KUL_WRAPPER_ID } from '../../variables/GenericVariables';
import { KulDebugComponentInfo } from '../../managers/kul-debug/kul-debug-declarations';
import { GenericObject } from '../../types/GenericTypes';

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
     * Enables or disables the text field to prevent user interaction.
     * @default false
     */
    @Prop({ mutable: true, reflect: true }) kulDisabled = false;
    /**
     * Applies a full-width styling to the text field, making it occupy all available horizontal space.
     * @default false
     */
    @Prop({ mutable: true, reflect: true }) kulFullWidth = false;
    /**
     * Specifies helper text to display alongside the text field.
     * Helper text can provide additional context or instructions to the user.
     * @default ""
     */
    @Prop({ mutable: true, reflect: true }) kulHelper: KulTextfieldHelper =
        null;
    /**
     * Allows customization of the input or textarea element through additional HTML attributes.
     * This can include attributes like 'readonly', 'placeholder', etc., to further customize the behavior or appearance of the input.
     * @default {}
     */
    @Prop({ mutable: true, reflect: true }) kulHtmlAttributes: GenericObject =
        {};
    /**
     * Defines the icon to be displayed within the text field.
     * Icons can indicate actions such as search, clear, or provide visual cues related to the input's purpose.
     * @default ""
     */
    @Prop({ mutable: true, reflect: true }) kulIcon = '';
    /**
     * Assigns a label to the text field, improving accessibility and providing context to the user about what kind of input is expected.
     * Labels are especially important for screen readers and users navigating with keyboard-only controls.
     * @default ""
     */
    @Prop({ mutable: true, reflect: true }) kulLabel = '';
    /**
     * Accepts custom CSS styles to apply directly to the text field component.
     * This allows for fine-grained control over the appearance of the component beyond predefined styling options.
     * @default ""
     */
    @Prop({ mutable: true, reflect: true }) kulStyle = '';
    /**
     * Determines the overall styling theme of the text field, affecting its shape and border.
     * Options include 'default', 'outlined', or 'textarea', each offering a distinct visual presentation.
     * @default "raised"
     */
    @Prop({ mutable: true, reflect: true }) kulStyling: KulTextfieldStyling =
        'raised';
    /**
     * Controls whether the icon should appear after the text input, typically used for action buttons like clear or search.
     * @default false
     */
    @Prop({ mutable: true, reflect: true }) kulTrailingIcon = false;
    /**
     * Initializes the text field with a default value when the component is first rendered.
     * This can be used to pre-fill forms or set a starting point for user input.
     * @default ""
     */
    @Prop({ mutable: false }) kulValue = '';

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #hasOutline: boolean;
    #kulManager = kulManagerInstance();
    #maxLength: number;

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
    kulEvent: EventEmitter<KulTextfieldEventPayload>;

    onKulEvent(e: Event | CustomEvent, eventType: KulTextfieldEvent) {
        const target = e.target as HTMLInputElement;
        const inputValue = target?.value;
        switch (eventType) {
            case 'blur':
                this.status.delete('focused');
                this.status = new Set(this.status);
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
            inputValue,
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
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KulTextfieldProps, descriptions);
    }
    /**
     * Used to retrieve the component's current state.
     * @returns {Promise<string>} Promise resolved with the current state of the component.
     */
    @Method()
    async getValue(): Promise<string> {
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
     * @param {string} value - The new state to be set on the component.
     * @returns {Promise<void>}
     */
    @Method()
    async setValue(value: string): Promise<void> {
        this.#updateState(value);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #updateState(
        value: string,
        e: CustomEvent<unknown> | Event = new CustomEvent('change')
    ) {
        if (!this.kulDisabled) {
            this.value = value;
            this.onKulEvent(e, 'change');
        }
    }

    #outlineCheck() {
        return this.kulStyling === 'outlined' || this.kulStyling === 'textarea';
    }

    #prepCounter() {
        if (!this.#maxLength) {
            return;
        }

        return (
            <div class="textfield__character-counter">
                '0 / ' + {this.#maxLength.toString()}
            </div>
        );
    }

    #prepHelper() {
        if (!this.kulHelper) {
            return;
        }

        const classList: Record<string, boolean> = {
            'textfield__helper-text': true,
            'textfield__helper-text--persistent':
                !this.kulHelper.showWhenFocused,
        };
        return (
            <div class="textfield__helper-line">
                <div class={classList}>{this.kulHelper.value}</div>
                {this.kulStyling !== 'textarea'
                    ? this.#prepCounter()
                    : undefined}
            </div>
        );
    }

    #prepIcon() {
        if (!this.kulIcon) {
            return;
        }

        const path = getAssetPath(`./assets/svg/${this.kulIcon}.svg`);
        const style = {
            mask: `url('${path}') no-repeat center`,
            webkitMask: `url('${path}') no-repeat center`,
        };
        return (
            <div class="textfield__icon" onClick={() => {}} style={style}></div>
        );
    }

    #prepInput() {
        return (
            <input
                {...this.kulHtmlAttributes}
                class="textfield__input"
                disabled={this.kulDisabled}
                placeholder={this.kulFullWidth ? this.kulLabel : undefined}
                onBlur={(e) => {
                    this.onKulEvent(e, 'blur');
                }}
                onChange={(e) => {
                    this.#updateState(
                        (e.currentTarget as HTMLInputElement).value
                    );
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
                value={this.kulValue}
            ></input>
        );
    }

    #prepLabel() {
        if (this.kulFullWidth) {
            return;
        }

        const labelEl: VNode = (
            <label class="textfield__label" htmlFor="input">
                {this.kulLabel}
            </label>
        );
        if (this.#hasOutline) {
            return (
                <div class="textfield__notched-outline">
                    <div class="textfield__notched-outline__leading"></div>
                    <div class="textfield__notched-outline__notch">
                        {labelEl}
                    </div>
                    <div class="textfield__notched-outline__trailing"></div>
                </div>
            );
        }

        return labelEl;
    }

    #prepRipple() {
        return (
            !this.#hasOutline && <span class="textfield__line-ripple"></span>
        );
    }

    #prepTextArea() {
        return (
            <span class="textfield__resizer">
                <textarea
                    {...this.kulHtmlAttributes}
                    class="textfield__input"
                    disabled={this.kulDisabled}
                    id="input"
                    onBlur={(e) => {
                        this.onKulEvent(e, 'blur');
                    }}
                    onChange={(e) => {
                        this.#updateState(
                            (e.currentTarget as HTMLInputElement).value
                        );
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
                    value={this.kulValue}
                ></textarea>
            </span>
        );
    }

    #updateStatus() {
        const propertiesToUpdateStatus: {
            prop: string;
            status: KulTextfieldStatus;
        }[] = [
            { prop: 'value', status: 'filled' },
            { prop: 'kulDisabled', status: 'disabled' },
            { prop: 'kulFullWidth', status: 'full-width' },
            { prop: 'kulIcon', status: 'has-icon' },
            { prop: 'kulLabel', status: 'has-label' },
        ];

        propertiesToUpdateStatus.forEach(({ prop, status }) => {
            const propName = prop as keyof KulTextfield;
            const propValue = this[propName];
            if (propValue) {
                this.status.add(status);
            } else {
                this.status.delete(status);
            }
        });
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
        this.#hasOutline = this.#outlineCheck();
        this.#maxLength = this.kulHtmlAttributes?.maxLength as number;
        this.#updateStatus();
    }

    componentDidRender() {
        this.#kulManager.debug.updateDebugInfo(this, 'did-render');
    }

    render() {
        const classList = ['textfield', 'textfield--' + this.kulStyling];
        this.status.forEach((status) => {
            classList.push(`textfield--${status}`);
        });
        return (
            <Host>
                {this.kulStyle ? (
                    <style id={KUL_STYLE_ID}>
                        {this.#kulManager.theme.setKulStyle(this)}
                    </style>
                ) : undefined}
                <div id={KUL_WRAPPER_ID}>
                    <div class={classList.join(' ')}>
                        {this.kulStyling === 'textarea'
                            ? [
                                  this.#prepCounter(),
                                  this.#prepIcon(),
                                  this.#prepTextArea(),
                                  this.#prepLabel(),
                              ]
                            : [
                                  this.#prepIcon(),
                                  this.#prepInput(),
                                  this.#prepLabel(),
                                  this.#prepRipple(),
                                  this.kulFullWidth
                                      ? undefined
                                      : this.#prepHelper(),
                              ]}
                    </div>
                    {this.kulFullWidth ? this.#prepHelper() : undefined}
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kulManager.theme.unregister(this);
    }
}
