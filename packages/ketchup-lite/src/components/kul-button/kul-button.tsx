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
import type { GenericObject } from '../../types/GenericTypes';
import { kulManagerInstance } from '../../managers/kul-manager/kul-manager';
import {
    KulButtonEventPayload,
    KulButtonEvents,
    KulButtonProps,
    KulButtonState,
    KulButtonStyling,
} from './kul-button-declarations';
import { KulDebugComponentInfo } from '../../managers/kul-debug/kul-debug-declarations';
import { getProps } from '../../utils/componentUtils';
import { KUL_WRAPPER_ID } from '../../variables/GenericVariables';
import { KulImagePropsInterface } from '../kul-image/kul-image-declarations';

@Component({
    tag: 'kul-button',
    styleUrl: 'kul-button.scss',
    shadow: true,
})
export class KulButton {
    /**
     * References the root HTML element of the component (<kul-button>).
     */
    @Element() rootElement: HTMLKulButtonElement;

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
     * @see KulButtonState - For a list of possible states.
     */
    @State() value: KulButtonState = 'off';

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Defaults at false. When set to true, the component is disabled.
     * @default false
     */
    @Prop({ mutable: true, reflect: true }) kulDisabled = false;
    /**
     * When set, the button will show this icon.
     * @default ""
     */
    @Prop({ mutable: true, reflect: true }) kulIcon = '';
    /**
     * When set, the icon button off state will show this icon. Otherwise, an outlined version of the icon prop will be displayed.
     * @default ""
     */
    @Prop({ mutable: true, reflect: true }) kulIconOff = '';
    /**
     * When set, the button will show this text.
     * @default ""
     */
    @Prop({ mutable: true, reflect: true }) kulLabel = '';
    /**
     * When set to true, the pointerdown event will trigger a ripple effect.
     * @default true
     */
    @Prop({ mutable: true, reflect: true }) kulRipple = true;
    /**
     * When set to true, the button show a spinner received in slot.
     * @default false
     */
    @Prop({ mutable: true, reflect: true }) kulShowSpinner = false;
    /**
     * Custom style of the component.
     * @default ""
     */
    @Prop({ mutable: true, reflect: true }) kulStyle = '';
    /**
     * Defines the style of the button. This property controls the visual appearance of the button.
     *
     * @default "raised"
     *
     * @see KulButtonStyling - For a list of available styles.
     */
    @Prop({ mutable: true, reflect: true }) kulStyling: KulButtonStyling =
        'raised';
    /**
     * When set to true, the icon button will be toggable on/off.
     * @default false
     */
    @Prop({ mutable: true, reflect: true }) kulToggable = false;
    /**
     * When set, the icon will be shown after the text.
     * @default false
     */
    @Prop({ mutable: true, reflect: true }) kulTrailingIcon = false;
    /**
     * Sets the type of the button.
     * @default "button"
     */
    @Prop({ mutable: true, reflect: true }) kulType:
        | 'button'
        | 'reset'
        | 'submit' = 'button';
    /**
     * When set to true, the icon button state will be on.
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
     * Describes event emitted for various button interactions like click, focus, blur.
     */
    @Event({
        eventName: 'kul-button-event',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kulEvent: EventEmitter<KulButtonEventPayload>;

    onKulEvent(e: Event | CustomEvent, eventType: KulButtonEvents) {
        if (eventType === 'pointerdown') {
            if (this.kulRipple && this.kulStyling !== 'icon') {
                this.#kulManager.theme.ripple.trigger(
                    e as PointerEvent,
                    this.#rippleSurface
                );
            }
            if (this.kulToggable) {
                if (this.value === 'on') {
                    this.value = 'off';
                } else {
                    this.value = 'on';
                }
            }
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
        return getProps(this, KulButtonProps, descriptions);
    }
    /**
     * Used to retrieve component's current state.
     * @returns {Promise<KulButtonState>} Promise resolved with the current state of the component.
     */
    @Method()
    async getValue(): Promise<KulButtonState> {
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
     * @param {KulButtonState} value - The new state to be set on the component.
     * @returns {Promise<void>}
     */
    @Method()
    async setValue(value: KulButtonState): Promise<void> {
        if (value === 'off' || value === 'on') {
            this.value = value;
        }
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #normalizedStyling() {
        return this.kulStyling
            ? (this.kulStyling.toLowerCase() as KulButtonStyling)
            : 'raised';
    }

    renderButton(): VNode {
        const buttonStyling = this.#normalizedStyling();
        const isFlat: boolean = buttonStyling === 'flat';
        const isFloating: boolean = buttonStyling === 'floating';
        const isIcon: boolean = buttonStyling === 'icon';
        const isOutlined: boolean = buttonStyling === 'outlined';
        const isRaised: boolean =
            !isFlat && !isFloating && !isOutlined && !isIcon ? true : false;

        const imageProps: KulImagePropsInterface = {
            kulColor: this.kulDisabled
                ? `var(--kul_button_disabled_color)`
                : `var(--kul_button_primary_color)`,
            kulValue: this.kulIcon,
            kulSizeX: isFloating ? '1.75em' : '1.475em',
            kulSizeY: isFloating ? '1.75em' : '1.475em',
        };

        const classObj: Record<string, boolean> = {
            button: true,
            'button--disabled': this.kulDisabled ? true : false,
            'button--floating': isFloating ? true : false,
            'button--outlined': isOutlined ? true : false,
            'button--raised': isRaised ? true : false,
            'button--no-label':
                !this.kulLabel || this.kulLabel === ' ' ? true : false,
            'button--with-spinner':
                this.kulShowSpinner && !this.kulDisabled ? true : false,
        };

        const classLabelObj: Record<string, boolean> = {
            button__label: true,
            'content--hidden':
                this.kulShowSpinner && !this.kulDisabled ? true : false,
        };

        const styleSpinnerContainer: Record<string, string> = {
            '--kul_button_spinner_height': imageProps.kulSizeY,
        };

        return (
            <button
                type={this.kulType ? this.kulType : 'button'}
                class={classObj}
                disabled={this.kulDisabled}
                onBlur={(e) => this.onKulEvent(e, 'blur')}
                onClick={(e) => this.onKulEvent(e, 'click')}
                onPointerDown={(e) => this.onKulEvent(e, 'pointerdown')}
                onFocus={(e) => this.onKulEvent(e, 'focus')}
                style={styleSpinnerContainer}
                aria-label={this.rootElement.title}
            >
                <div
                    ref={(el) => {
                        if (this.kulRipple) {
                            this.#rippleSurface = el;
                        }
                    }}
                ></div>
                {this.kulTrailingIcon
                    ? [
                          <span class={classLabelObj}>{this.kulLabel}</span>,
                          this.kulIcon ? (
                              <kul-image
                                  class="button__icon kul-icon"
                                  {...imageProps}
                              />
                          ) : undefined,
                      ]
                    : [
                          this.kulIcon ? (
                              <kul-image
                                  class="button__icon kul-icon"
                                  {...imageProps}
                              />
                          ) : undefined,
                          <span class={classLabelObj}>{this.kulLabel}</span>,
                      ]}
                {this.kulShowSpinner && !this.kulDisabled ? (
                    <div class="button__spinner-container">
                        <slot name="spinner"></slot>
                    </div>
                ) : undefined}
            </button>
        );
    }

    renderIconButton(): VNode {
        const isLarge = this.rootElement.classList.contains('large');
        const isOn = this.value === 'on';
        const imageProps: KulImagePropsInterface = {
            kulColor: this.kulDisabled
                ? `var(--kul_button_disabled_color)`
                : `var(--kul_button_primary_color)`,
            kulSizeX: isLarge ? 'calc(1.75em * 1.5)' : '1.75em',
            kulSizeY: isLarge ? 'calc(1.75em * 1.5)' : '1.75em',
        };

        const classObj: Record<string, boolean> = {
            'icon-button': true,
            'button--disabled': this.kulDisabled ? true : false,
            'icon-button--on': this.kulToggable && isOn ? true : false,
            toggable: this.kulToggable ? true : false,
            'button--with-spinner':
                this.kulShowSpinner && !this.kulDisabled ? true : false,
        };

        const styleSpinnerContainer: Record<string, string> = {
            '--kul_button_spinner_height': imageProps.kulSizeY,
            '--kul_button_spinner_width': imageProps.kulSizeX,
        };

        const iconOff: string = this.kulIconOff
            ? this.kulIconOff
            : this.kulIcon + '_border';

        return (
            <button
                type={this.kulType ? this.kulType : 'button'}
                class={classObj}
                disabled={this.kulDisabled}
                onBlur={(e) => this.onKulEvent(e, 'click')}
                onClick={(e) => this.onKulEvent(e, 'click')}
                onPointerDown={(e) => this.onKulEvent(e, 'pointerdown')}
                style={styleSpinnerContainer}
                value={this.value}
                aria-label={this.rootElement.title}
            >
                {!this.kulShowSpinner || this.kulDisabled ? (
                    <kul-image
                        {...imageProps}
                        kulValue={
                            this.kulToggable && !isOn ? iconOff : this.kulIcon
                        }
                    />
                ) : null}
                {this.kulToggable && !this.kulShowSpinner ? (
                    <kul-image {...imageProps} resource={this.kulIcon} />
                ) : null}
                {this.kulShowSpinner && !this.kulDisabled ? (
                    <div class="icon-button__spinner-container">
                        <slot name="spinner"></slot>
                    </div>
                ) : undefined}
            </button>
        );
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
        const buttonStyling = this.#normalizedStyling();

        const isIconButton: boolean = !!(
            buttonStyling === 'icon' ||
            (buttonStyling === 'raised' &&
                this.kulIcon &&
                (this.kulLabel === null || this.kulLabel === undefined))
        );

        if (!this.kulLabel && !this.kulIcon) {
            this.#kulManager.debug.logMessage(
                this,
                'Empty button.',
                'informational'
            );
            return;
        }

        return (
            <Host>
                <style>{this.#kulManager.theme.setKulStyle(this)}</style>
                <div id={KUL_WRAPPER_ID}>
                    {isIconButton
                        ? this.renderIconButton()
                        : this.renderButton()}
                    <slot></slot>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kulManager.theme.unregister(this);
    }
}
