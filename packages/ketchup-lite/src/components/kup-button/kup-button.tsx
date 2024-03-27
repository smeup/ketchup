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
import type { GenericObject, KupComponent } from '../../types/GenericTypes';
import { kupManagerInstance } from '../../managers/kup-manager/kup-manager';
import {
    KupButtonEventPayload,
    KupButtonEvents,
    KupButtonProps,
    KupButtonStates,
    KupButtonStyling,
} from './kup-button-declarations';
import { KupDebugCategory } from '../../managers/kup-debug/kup-debug-declarations';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';

@Component({
    tag: 'kup-button',
    styleUrl: 'kup-button.scss',
    shadow: true,
})
export class KupButton {
    /**
     * References the root HTML element of the component (<kup-button>).
     */
    @Element() rootElement: HTMLKupButtonElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /**
     * The value of the component ("on" or "off").
     * @default ""
     *
     * @see KupButtonStates - For a list of possible states.
     */
    @State() value: KupButtonStates = 'off';

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/
    /**
     * Sets the type of the button.
     * @default ""
     * @example
     * // To set the button type to "submit"
     * <kup-button buttonType="submit"></kup-button>
     */
    @Prop({ mutable: true }) buttonType = '';
    /**
     * When set to true, the icon button state will be on.
     * @default false
     * @example
     * // To set the initial button's checked state to true
     * <kup-button checked={true}></kup-button>
     */
    @Prop({ mutable: false }) checked = false;
    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     * @example
     * // To apply a custom style to the button
     * <kup-button customStyle="your-custom-style"></kup-button>
     */
    @Prop({ mutable: true }) customStyle = '';
    /**
     * Defaults at false. When set to true, the component is disabled.
     * @default false
     * @example
     * // To disable the button
     * <kup-button disabled={true}></kup-button>
     */
    @Prop({ mutable: true, reflect: true }) disabled: boolean = false;
    /**
     * When set, the button will show this icon.
     * @default ""
     * @example
     * // To set an icon for the button
     * <kup-button icon="your-icon-name"></kup-button>
     */
    @Prop({ mutable: true }) icon = '';
    /**
     * When set, the icon button off state will show this icon. Otherwise, an outlined version of the icon prop will be displayed.
     * @default ""
     * @example
     * // To set a specific icon for the button's off state
     * <kup-button iconOff="your-icon-name-off"></kup-button>
     */
    @Prop({ mutable: true, reflect: true }) iconOff = '';
    /**
     * When set, the button will show this text.
     * @default ""
     * @example
     * // To set text for the button
     * <kup-button label="Click Me"></kup-button>
     */
    @Prop({ mutable: true, reflect: true }) label = '';
    /**
     * Defines the style of the button. This property controls the visual appearance of the button.
     *
     * @default "raised"
     * @example
     * // To set the button to have an outlined style
     * <kup-button styling="outlined"></kup-button>
     *
     * @see KupButtonStyling - For a list of available styles.
     */
    @Prop({ mutable: true, reflect: true }) styling: KupButtonStyling =
        'raised';
    /**
     * When set to true, the button show a spinner received in slot.
     * @default false
     * @example
     * // To show a spinner within the button
     * <kup-button showSpinner={true}></kup-button>
     */
    @Prop({ mutable: true, reflect: true }) showSpinner = false;
    /**
     * When set to true, the icon button will be toggable on/off.
     * @default false
     * @example
     * // To make the button toggable
     * <kup-button toggable={true}></kup-button>
     */
    @Prop({ mutable: true, reflect: true }) toggable = false;
    /**
     * When set, the icon will be shown after the text.
     * @default false
     * @example
     * // To set the icon to show after the text
     * <kup-button trailingIcon={true}></kup-button>
     */
    @Prop({ mutable: true, reflect: true }) trailingIcon = false;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    #kupManager = kupManagerInstance();

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Describes event emitted when button loses focus.
     */
    @Event({
        eventName: 'kup-button-event',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupEvent: EventEmitter<KupButtonEventPayload>;

    onKupEvent(eventType: KupButtonEvents, e: Event) {
        if (eventType === 'click' && this.toggable) {
            if (this.value === 'on') {
                this.value = 'off';
            } else {
                this.value = 'on';
            }
        }

        this.kupEvent.emit({
            comp: this,
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
        return getProps(this, KupButtonProps, descriptions);
    }
    /**
     * Used to retrieve component's current state.
     * @returns {Promise<KupButtonStates>} Promise resolved with the current state of the component.
     */
    @Method()
    async getValue(): Promise<KupButtonStates> {
        return this.value;
    }
    /**
     * Sets the component's state.
     * @param {KupButtonStates} value - The new state to be set on the component.
     * @returns {Promise<void>}
     */
    @Method()
    async setValue(value: KupButtonStates): Promise<void> {
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
        setProps(this, KupButtonProps, this);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    renderButton(): VNode {
        const buttonStyling = this.styling.toLowerCase() as KupButtonStyling;
        const isFlat: boolean = buttonStyling === 'flat';
        const isFloating: boolean = buttonStyling === 'floating';
        const isIcon: boolean = buttonStyling === 'icon';
        const isOutlined: boolean = buttonStyling === 'outlined';
        const isRaised: boolean =
            !isFlat && !isFloating && !isOutlined && !isIcon ? true : false;

        const imageProps = {
            color: this.disabled
                ? `var(--kup_button_disabled_color)`
                : isOutlined || isFlat
                ? `var(--kup_button_primary_color)`
                : `var(--kup_button_text_on_primary_color)`,
            resource: this.icon,
            sizeX: isFloating ? '1.75em' : '1.475em',
            sizeY: isFloating ? '1.75em' : '1.475em',
            wrapperClass: 'button__icon kup-icon',
        };
        if (this.showSpinner) imageProps.wrapperClass += ' content--hidden';

        const classObj: Record<string, boolean> = {
            button: true,
            'button--disabled': this.disabled ? true : false,
            'button--floating': isFloating ? true : false,
            'button--outlined': isOutlined ? true : false,
            'button--raised': isRaised ? true : false,
            'button--no-label':
                !this.label || this.label === ' ' ? true : false,
            'button--with-spinner':
                this.showSpinner && !this.disabled ? true : false,
        };

        const classLabelObj: Record<string, boolean> = {
            button__label: true,
            'content--hidden':
                this.showSpinner && !this.disabled ? true : false,
        };

        const styleSpinnerContainer: Record<string, string> = {
            '--kup_button_spinner_height': imageProps.sizeY,
        };

        return (
            <button
                type={this.buttonType ? this.buttonType : 'button'}
                class={classObj}
                disabled={this.disabled}
                onBlur={(e) => this.onKupEvent('blur', e)}
                onClick={(e) => this.onKupEvent('click', e)}
                onFocus={(e) => this.onKupEvent('focus', e)}
                style={styleSpinnerContainer}
                aria-label={this.rootElement.title}
            >
                {this.trailingIcon
                    ? [
                          <span class={classLabelObj}>{this.label}</span>,
                          this.icon ? <kup-image {...imageProps} /> : undefined,
                      ]
                    : [
                          this.icon ? <kup-image {...imageProps} /> : undefined,
                          <span class={classLabelObj}>{this.label}</span>,
                      ]}
                {this.showSpinner && !this.disabled ? (
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
            color: this.disabled
                ? `var(--kup_button_disabled_color)`
                : `var(--kup_button_primary_color)`,
            sizeX: isLarge ? 'calc(1.75em * 1.5)' : '1.75em',
            sizeY: isLarge ? 'calc(1.75em * 1.5)' : '1.75em',
        };

        const classObj: Record<string, boolean> = {
            'icon-button': true,
            'button--disabled': this.disabled ? true : false,
            'icon-button--on': this.toggable && this.checked ? true : false,
            toggable: this.toggable ? true : false,
            'button--with-spinner':
                this.showSpinner && !this.disabled ? true : false,
        };

        const styleSpinnerContainer: Record<string, string> = {
            '--kup_button_spinner_height': imageProps.sizeY,
            '--kup_button_spinner_width': imageProps.sizeX,
        };

        const iconOff: string = this.iconOff
            ? this.iconOff
            : this.icon + '_border';

        return (
            <button
                type={this.buttonType ? this.buttonType : 'button'}
                class={classObj}
                disabled={this.disabled}
                onClick={(e) => this.onKupEvent('click', e)}
                style={styleSpinnerContainer}
                value={this.value}
                aria-label={this.rootElement.title}
            >
                {!this.showSpinner || this.disabled ? (
                    <kup-image
                        {...imageProps}
                        resource={
                            this.toggable && !this.checked ? iconOff : this.icon
                        }
                    />
                ) : null}
                {this.toggable && !this.showSpinner ? (
                    <kup-image {...imageProps} resource={this.icon} />
                ) : null}
                {this.showSpinner && !this.disabled ? (
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
        if (this.checked) {
            this.value = 'on';
        }

        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.#kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.#kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.#kupManager.debug.logRender(this, true);
    }

    render() {
        const buttonStyling = this.styling.toLowerCase() as KupButtonStyling;

        const isIconButton: boolean = !!(
            buttonStyling === 'icon' ||
            (buttonStyling === 'raised' &&
                this.icon &&
                (this.label === null || this.label === undefined))
        );

        if (!this.label && !this.icon) {
            this.#kupManager.debug.logMessage(
                this,
                'Empty button.',
                KupDebugCategory.WARNING
            );
            return;
        }

        return (
            <Host>
                <style>
                    {this.#kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
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
        this.#kupManager.theme.unregister(this);
    }
}
