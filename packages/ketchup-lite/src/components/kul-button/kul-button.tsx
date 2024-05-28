import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    Fragment,
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
    KulButtonEvent,
    KulButtonProps,
    KulButtonState,
    KulButtonStyling,
} from './kul-button-declarations';
import { KulDebugComponentInfo } from '../../managers/kul-debug/kul-debug-declarations';
import { getProps } from '../../utils/componentUtils';
import { KUL_STYLE_ID, KUL_WRAPPER_ID } from '../../variables/GenericVariables';
import { KulImagePropsInterface } from '../kul-image/kul-image-declarations';
import {
    KulDataDataset,
    KulDataNode,
} from '../../managers/kul-data/kul-data-declarations';
import { KulDynamicPositionPlacement } from '../../managers/kul-dynamic-position/kul-dynamic-position-declarations';
import { KulManagerClickCb } from '../../managers/kul-manager/kul-manager-declarations';
import { KulListEventPayload } from '../kul-list/kul-list-declarations';

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
     * Actual data of the button, used to render dropdown buttons.
     * @default null
     */
    @Prop({ mutable: true }) kulData: KulDataDataset = null;
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

    #clickCb: KulManagerClickCb;
    #dropdown: HTMLButtonElement;
    #dropdownRippleSurface: HTMLDivElement;
    #list: HTMLKulListElement;
    #kulManager = kulManagerInstance();
    #rippleSurface: HTMLDivElement;

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

    onKulEvent(
        e: Event | CustomEvent,
        eventType: KulButtonEvent,
        isDropdown = false
    ) {
        switch (eventType) {
            case 'click':
                this.#updateState(this.#isOn() ? 'off' : 'on');
                break;
            case 'pointerdown':
                if (this.kulRipple) {
                    this.#kulManager.theme.ripple.trigger(
                        e as PointerEvent,
                        isDropdown
                            ? this.#dropdownRippleSurface
                            : this.#rippleSurface
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
        return getProps(this, KulButtonProps, descriptions);
    }
    /**
     * Used to retrieve the component's current state.
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
        this.#updateState(value);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #listManager() {
        return {
            close: () => {
                this.#list.classList.remove('list--visible');
                this.#kulManager.dynamicPosition.stop(this.#list);
                this.#kulManager.removeClickCallback(this.#clickCb);
            },
            isOpened: () => {
                return this.#list.classList.contains('list--visible');
            },
            open: () => {
                if (this.#kulManager.dynamicPosition.isRegistered(this.#list)) {
                    this.#kulManager.dynamicPosition.changeAnchor(
                        this.#list,
                        this.#dropdown
                    );
                } else {
                    this.#kulManager.dynamicPosition.register(
                        this.#list,
                        this.#dropdown,
                        0,
                        KulDynamicPositionPlacement.RIGHT,
                        true
                    );
                }
                this.#kulManager.dynamicPosition.start(this.#list);
                this.#list.classList.add('list--visible');
                if (!this.#clickCb) {
                    this.#clickCb = {
                        cb: () => {
                            this.#listManager().close();
                        },
                        el: this.#list,
                    };
                }
                this.#kulManager.addClickCallback(this.#clickCb, true);
            },
            toggle: () => {
                if (this.#listManager().isOpened()) {
                    this.#listManager().close();
                } else {
                    this.#listManager().open();
                }
            },
        };
    }

    #isDropdown() {
        return this.kulData?.nodes?.[0]?.children?.length;
    }

    #isOn() {
        return this.value === 'on' ? true : false;
    }

    #updateState(value: KulButtonState) {
        if (
            this.kulToggable &&
            !this.kulDisabled &&
            (value === 'off' || value === 'on')
        ) {
            this.value = value;
        }
    }

    #prepIcon(image: KulImagePropsInterface) {
        return this.kulIcon ? (
            <kul-image class="button__icon kul-icon" {...image} />
        ) : undefined;
    }

    #prepLabel(className: { [className: string]: boolean }) {
        return <span class={className}>{this.kulLabel}</span>;
    }

    #prepNode(node: KulDataNode): VNode {
        const currentNode = <div>{node.value}</div>;

        if (Array.isArray(node.children) && node.children.length > 0) {
            const childrenNodes = node.children.map((childNode) =>
                this.#prepNode(childNode)
            );
            return (
                <Fragment>
                    {currentNode}
                    {childrenNodes}
                </Fragment>
            );
        } else {
            return currentNode;
        }
    }

    #prepRipple(isDropdown = false) {
        return this.kulRipple ? (
            <div
                ref={(el) => {
                    if (el && this.kulRipple) {
                        if (isDropdown) {
                            this.#dropdownRippleSurface = el;
                        } else {
                            this.#rippleSurface = el;
                        }
                    }
                }}
            ></div>
        ) : undefined;
    }

    #prepSpinner() {
        return this.kulShowSpinner ? (
            <div class="button__spinner-container">
                <slot name="spinner"></slot>
            </div>
        ) : undefined;
    }

    #normalizedStyling() {
        return this.kulStyling
            ? (this.kulStyling.toLowerCase() as KulButtonStyling)
            : 'raised';
    }

    #renderButton(): VNode[] {
        const buttonStyling = this.#normalizedStyling();

        const image: KulImagePropsInterface = {
            kulColor: this.kulDisabled
                ? `var(--kul_button_disabled_color)`
                : `var(--kul_button_primary_color)`,
            kulValue: this.kulIcon,
            kulSizeX: buttonStyling === 'floating' ? '1.75em' : '1.475em',
            kulSizeY: buttonStyling === 'floating' ? '1.75em' : '1.475em',
        };

        const className: Record<string, boolean> = {
            button: true,
            'button--disabled': this.kulDisabled ? true : false,
            [`button--${buttonStyling}`]: true,
            'button--no-label':
                !this.kulLabel || this.kulLabel === ' ' ? true : false,
            'button--with-spinner':
                this.kulShowSpinner && !this.kulDisabled ? true : false,
        };

        const labelClassName: Record<string, boolean> = {
            button__label: true,
            'content--hidden':
                this.kulShowSpinner && !this.kulDisabled ? true : false,
        };

        const styleSpinnerContainer: Record<string, string> = {
            '--kul_button_spinner_height': image.kulSizeY,
        };

        return [
            <button
                aria-label={this.rootElement.title}
                class={className}
                disabled={this.kulDisabled}
                onBlur={(e) => this.onKulEvent(e, 'blur')}
                onClick={(e) => this.onKulEvent(e, 'click')}
                onFocus={(e) => this.onKulEvent(e, 'focus')}
                onPointerDown={(e) => this.onKulEvent(e, 'pointerdown')}
                style={styleSpinnerContainer}
                type={this.kulType ? this.kulType : 'button'}
            >
                {this.#prepRipple()}
                {this.kulTrailingIcon
                    ? [this.#prepLabel(labelClassName), this.#prepIcon(image)]
                    : [this.#prepIcon(image), this.#prepLabel(labelClassName)]}
                {this.#prepSpinner()}
            </button>,
            this.#renderDropdown(image, buttonStyling),
        ];
    }

    #renderIconButton(): VNode[] {
        const isLarge = this.rootElement.classList.contains('large');
        const isOn = this.#isOn();

        const image: KulImagePropsInterface = {
            kulColor: this.kulDisabled
                ? `var(--kul_button_disabled_color)`
                : `var(--kul_button_primary_color)`,
            kulSizeX: isLarge ? 'calc(1.75em * 1.5)' : '1.75em',
            kulSizeY: isLarge ? 'calc(1.75em * 1.5)' : '1.75em',
        };

        const className: Record<string, boolean> = {
            'icon-button': true,
            'button--disabled': this.kulDisabled ? true : false,
            'icon-button--on': this.kulToggable && isOn ? true : false,
            toggable: this.kulToggable ? true : false,
            'button--with-spinner':
                this.kulShowSpinner && !this.kulDisabled ? true : false,
        };

        const styleSpinnerContainer: Record<string, string> = {
            '--kul_button_spinner_height': image.kulSizeY,
            '--kul_button_spinner_width': image.kulSizeX,
        };

        const iconOff: string = this.kulIconOff
            ? this.kulIconOff
            : this.kulIcon + '_border';

        return [
            <button
                aria-label={this.rootElement.title}
                class={className}
                disabled={this.kulDisabled}
                onBlur={(e) => this.onKulEvent(e, 'blur')}
                onClick={(e) => this.onKulEvent(e, 'click')}
                onFocus={(e) => this.onKulEvent(e, 'focus')}
                onPointerDown={(e) => this.onKulEvent(e, 'pointerdown')}
                style={styleSpinnerContainer}
                value={this.value}
                type={this.kulType ? this.kulType : 'button'}
            >
                {this.#prepRipple()}
                {!this.kulShowSpinner || this.kulDisabled ? (
                    <kul-image
                        {...image}
                        kulValue={
                            this.kulToggable && !isOn ? iconOff : this.kulIcon
                        }
                    />
                ) : null}
                {this.#prepSpinner()}
            </button>,
            this.#renderDropdown(image, 'icon'),
        ];
    }

    #renderDropdown(image: KulImagePropsInterface, styling: string) {
        if (!this.#isDropdown()) {
            return;
        }

        const className: Record<string, boolean> = {
            button: true,
            [`button--${styling}`]: true,
            ['button--dropdown']: true,
            'button--disabled': this.kulDisabled ? true : false,
        };

        const eventHandler = (e: CustomEvent<KulListEventPayload>) => {
            if (e.detail.eventType === 'click') {
                this.onKulEvent(e, 'kul-event');
                this.#listManager().close();
            }
        };

        return (
            <button
                class={className}
                disabled={this.kulDisabled}
                onClick={() => {
                    this.#listManager().toggle();
                }}
                onPointerDown={(e) => this.onKulEvent(e, 'pointerdown', true)}
                ref={(el) => {
                    if (el) {
                        this.#dropdown = el;
                    }
                }}
            >
                {this.#prepRipple(true)}
                <kul-image {...image} kulValue={'--kul-dropdown-icon'} />
                <kul-list
                    class="list"
                    kulData={{ nodes: this.kulData.nodes[0].children }}
                    kulStyle="
                        :host(.list) {
                            display: none;
                            height: max-content;
                            max-height: 40vh;
                            width: max-content;
                        }
                        :host(.list--visible) {
                            display: block;
                         }
                        "
                    onKul-list-event={eventHandler}
                    ref={(el) => (this.#list = el)}
                ></kul-list>
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
        const firstNode = this.kulData?.nodes?.[0];
        if (firstNode) {
            if (!this.kulIcon) {
                this.kulIcon = firstNode.icon;
            }
            if (!this.kulLabel) {
                this.kulLabel = this.#kulManager.data.cell.stringify(
                    firstNode.value
                );
            }
        }

        this.#kulManager.theme.register(this);
    }

    componentDidLoad() {
        if (this.#rippleSurface) {
            this.#kulManager.theme.ripple.setup(this.#rippleSurface);
        }
        if (this.#dropdownRippleSurface) {
            this.#kulManager.theme.ripple.setup(this.#dropdownRippleSurface);
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
                {this.kulStyle ? (
                    <style id={KUL_STYLE_ID}>
                        {this.#kulManager.theme.setKulStyle(this)}
                    </style>
                ) : undefined}
                <div id={KUL_WRAPPER_ID}>
                    {isIconButton
                        ? this.#renderIconButton()
                        : this.#renderButton()}
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        if (this.#list) {
            this.#kulManager.dynamicPosition.unregister([this.#list]);
        }
        this.#kulManager.theme.unregister(this);
    }
}
