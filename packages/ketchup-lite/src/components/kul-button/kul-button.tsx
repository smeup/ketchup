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
import type { GenericObject, KulComponent } from '../../types/GenericTypes';
import { kulManagerInstance } from '../../managers/kul-manager/kul-manager';
import {
    KulButtonEventPayload,
    KulButtonEvents,
    KulButtonProps,
    KulButtonStates,
    KulButtonStyling,
} from './kul-button-declarations';
import { KulDebugCategory } from '../../managers/kul-debug/kul-debug-declarations';
import { getProps, setProps } from '../../utils/utils';
import { KUL_WRAPPER_ID } from '../../variables/GenericVariables';

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
     * The value of the component ("on" or "off").
     * @default ""
     *
     * @see KulButtonStates - For a list of possible states.
     */
    @State() value: KulButtonStates = 'off';

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/
    /**
     * Sets the type of the button.
     * @default "button"
     */
    @Prop({ mutable: true, reflect: true }) kulType:
        | 'button'
        | 'reset'
        | 'submit' = 'button';
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
     * When set to true, the button show a spinner received in slot.
     * @default false
     */
    @Prop({ mutable: true, reflect: true }) kulShowSpinner = false;
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
     * When set to true, the icon button state will be on.
     * @default false
     */
    @Prop({ mutable: false }) kulValue = false;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KulManager class.
     */
    #kulManager = kulManagerInstance();

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

    onKulEvent(e: Event, eventType: KulButtonEvents) {
        if (eventType === 'click' && this.kulToggable) {
            if (this.value === 'on') {
                this.value = 'off';
            } else {
                this.value = 'on';
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
     * @returns {Promise<KulButtonStates>} Promise resolved with the current state of the component.
     */
    @Method()
    async getValue(): Promise<KulButtonStates> {
        return this.value;
    }
    /**
     * Sets the component's state.
     * @param {KulButtonStates} value - The new state to be set on the component.
     * @returns {Promise<void>}
     */
    @Method()
    async setValue(value: KulButtonStates): Promise<void> {
        if (value === 'off' || value === 'on') {
            this.value = value;
        }
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * Sets the this to the component.
     * @param {GenericObject} this - Object containing this that will be set to the component.
     */
    @Method()
    async setProps(this: GenericObject): Promise<void> {
        setProps(this, KulButtonProps, this);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    renderButton(): VNode {
        const buttonStyling = this.kulStyling.toLowerCase() as KulButtonStyling;
        const isFlat: boolean = buttonStyling === 'flat';
        const isFloating: boolean = buttonStyling === 'floating';
        const isIcon: boolean = buttonStyling === 'icon';
        const isOutlined: boolean = buttonStyling === 'outlined';
        const isRaised: boolean =
            !isFlat && !isFloating && !isOutlined && !isIcon ? true : false;

        const imageProps = {
            color: this.kulDisabled
                ? `var(--kul_button_disabled_color)`
                : isOutlined || isFlat
                ? `var(--kul_button_primary_color)`
                : `var(--kul_button_text_on_primary_color)`,
            resource: this.kulIcon,
            sizeX: isFloating ? '1.75em' : '1.475em',
            sizeY: isFloating ? '1.75em' : '1.475em',
            wrapperClass: 'button__icon kul-icon',
        };
        if (this.kulShowSpinner) imageProps.wrapperClass += ' content--hidden';

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
            '--kul_button_spinner_height': imageProps.sizeY,
        };

        return (
            <button
                type={this.kulType ? this.kulType : 'button'}
                class={classObj}
                disabled={this.kulDisabled}
                onBlur={(e) => this.onKulEvent(e, 'blur')}
                onClick={(e) => this.onKulEvent(e, 'click')}
                onFocus={(e) => this.onKulEvent(e, 'focus')}
                style={styleSpinnerContainer}
                aria-label={this.rootElement.title}
            >
                {this.kulTrailingIcon
                    ? [
                          <span class={classLabelObj}>{this.kulLabel}</span>,
                          this.kulIcon ? (
                              <kul-image {...imageProps} />
                          ) : undefined,
                      ]
                    : [
                          this.kulIcon ? (
                              <kul-image {...imageProps} />
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
        const imageProps = {
            color: this.kulDisabled
                ? `var(--kul_button_disabled_color)`
                : `var(--kul_button_primary_color)`,
            sizeX: isLarge ? 'calc(1.75em * 1.5)' : '1.75em',
            sizeY: isLarge ? 'calc(1.75em * 1.5)' : '1.75em',
        };

        const classObj: Record<string, boolean> = {
            'icon-button': true,
            'button--disabled': this.kulDisabled ? true : false,
            'icon-button--on': this.kulToggable && this.kulValue ? true : false,
            toggable: this.kulToggable ? true : false,
            'button--with-spinner':
                this.kulShowSpinner && !this.kulDisabled ? true : false,
        };

        const styleSpinnerContainer: Record<string, string> = {
            '--kul_button_spinner_height': imageProps.sizeY,
            '--kul_button_spinner_width': imageProps.sizeX,
        };

        const iconOff: string = this.kulIconOff
            ? this.kulIconOff
            : this.kulIcon + '_border';

        return (
            <button
                type={this.kulType ? this.kulType : 'button'}
                class={classObj}
                disabled={this.kulDisabled}
                onClick={(e) => this.onKulEvent(e, 'click')}
                style={styleSpinnerContainer}
                value={this.value}
                aria-label={this.rootElement.title}
            >
                {!this.kulShowSpinner || this.kulDisabled ? (
                    <kul-image
                        {...imageProps}
                        resource={
                            this.kulToggable && !this.kulValue
                                ? iconOff
                                : this.kulIcon
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

        this.#kulManager.debug.logLoad(this, false);
        this.#kulManager.theme.register(this);
    }

    componentDidLoad() {
        this.#kulManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.#kulManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.#kulManager.debug.logRender(this, true);
    }

    render() {
        const buttonStyling = this.kulStyling.toLowerCase() as KulButtonStyling;

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
                KulDebugCategory.WARNING
            );
            return;
        }

        return (
            <Host>
                <style>
                    {this.#kulManager.theme.setKulStyle(
                        this.rootElement as KulComponent
                    )}
                </style>
                <div id={KUL_WRAPPER_ID}>
                    <div class={`button`}>
                        {isIconButton
                            ? this.renderIconButton()
                            : this.renderButton()}
                        <slot></slot>
                    </div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kulManager.theme.unregister(this);
    }
}
