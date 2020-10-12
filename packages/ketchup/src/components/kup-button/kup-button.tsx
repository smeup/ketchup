import {
    Component,
    Prop,
    Element,
    Host,
    Event,
    EventEmitter,
    State,
    h,
    Method,
} from '@stencil/core';
import { MDCRipple } from '@material/ripple';
import { MDCIconButtonToggle } from '@material/icon-button';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theme-manager';
import { logMessage } from '../../utils/debug-manager';

@Component({
    tag: 'kup-button',
    styleUrl: 'kup-button.scss',
    shadow: true,
})
export class KupButton {
    @Element() rootElement: HTMLElement;
    @State() value: string = '';
    @State() customStyleTheme: string = undefined;

    /**
     * Defaults at false. When set to true, the icon button state will be on.
     */
    @Prop({ reflect: true }) checked: boolean = false;
    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop({ reflect: true }) customStyle: string = undefined;
    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop({ reflect: true }) disabled: boolean = false;
    /**
     * Defaults at false. When set to true, the button will be rendered flat.
     */
    @Prop({ reflect: true }) flat: boolean = false;
    /**
     * Defaults at null. When set, the button will show this icon.
     */
    @Prop({ reflect: true }) icon: string = null;
    /**
     * Defaults at null. When set, the icon button off state will show this icon. Otherwise, an outlined version of the icon prop will be displayed.
     */
    @Prop({ reflect: true }) iconOff: string = null;
    /**
     * Defaults at null. When set, the button will show this text.
     */
    @Prop({ reflect: true }) label: string = null;
    /**
     * Defaults at false. When set to true, the button will be rendered with a colored outline.
     */
    @Prop({ reflect: true }) outlined: boolean = false;
    /**
     * Defaults at false. When set to true, the button will be rendered with rounded edges.
     */
    @Prop({ reflect: true }) shaped: boolean = false;
    /**
     * Defaults at false. When set to true, the icon button will be toggable on/off.
     */
    @Prop({ reflect: true }) toggable: boolean = false;
    /**
     * Defaults at null. When set, the icon will be shown after the text.
     */
    @Prop({ reflect: true }) trailingIcon: boolean = false;

    private startTime: number = 0;
    private endTime: number = 0;
    private renderCount: number = 0;
    private renderStart: number = 0;
    private renderEnd: number = 0;

    @Event({
        eventName: 'kupButtonBlur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<{
        id: string;
        value: string;
    }>;

    @Event({
        eventName: 'kupButtonClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        id: string;
        value: string;
    }>;

    @Event({
        eventName: 'kupButtonFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<{
        id: string;
        value: string;
    }>;

    //---- Methods ----

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    onKupBlur() {
        this.kupBlur.emit({
            id: this.rootElement.id,
            value: this.value,
        });
    }

    onKupClick() {
        if (this.label === null && this.icon !== null) {
            if (this.checked) {
                this.checked = false;
                this.value = 'off';
            } else {
                this.checked = true;
                this.value = 'on';
            }
        } else {
            this.value = 'N/A';
        }
        this.kupClick.emit({
            id: this.rootElement.id,
            value: this.value,
        });
    }

    onKupFocus() {
        this.kupFocus.emit({
            id: this.rootElement.id,
            value: this.value,
        });
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        this.startTime = performance.now();
        setThemeCustomStyle(this);
    }

    componentDidLoad() {
        this.endTime = performance.now();
        let timeDiff: number = this.endTime - this.startTime;
        logMessage(this, 'Component ready after ' + timeDiff + 'ms.');
    }

    componentWillRender() {
        this.renderCount++;
        this.renderStart = performance.now();
        if (this.label === null && this.icon !== null) {
            if (this.checked) {
                this.value = 'on';
            } else {
                this.value = 'off';
            }
        } else {
            this.value = 'N/A';
        }
    }

    componentDidRender() {
        const root = this.rootElement.shadowRoot;

        if (root && !this.disabled) {
            let button = root.querySelector('.kup-button');
            if (button != undefined) {
                const buttonRipple = MDCRipple.attachTo(button);
                if (button.classList.contains('mdc-icon-button')) {
                    buttonRipple.unbounded = true;
                    if (button.classList.contains('toggable')) {
                        new MDCIconButtonToggle(button);
                    }
                }
            }
        }
        this.renderEnd = performance.now();
        let timeDiff: number = this.renderEnd - this.renderStart;
        logMessage(
            this,
            'Render #' + this.renderCount + ' took ' + timeDiff + 'ms.'
        );
    }

    render() {
        // It renders in two different ways because two different Material layouts are used.
        // If only the icon is present, with no text, an "icon button" will be rendered.
        let componentClass: string = 'kup-button';
        let iconEl: HTMLElement = null;
        let labelEl: HTMLElement = null;
        let leadingEl: HTMLElement = null;
        let trailingEl: HTMLElement = null;
        let iconColor = undefined;

        if (this.disabled) {
            componentClass += ' mdc-button--disabled';
            iconColor = 'var(--kup-disabled-color)';
        }

        if (this.label) {
            componentClass += ' mdc-button';
            labelEl = <span class="mdc-button__label">{this.label}</span>;
            if (this.icon) {
                if (!iconColor) {
                    if (this.flat || this.outlined) {
                        iconColor = 'var(--kup-main-color)';
                    } else {
                        iconColor = 'var(--kup-text-on-main-color)';
                    }
                }
                iconEl = (
                    <kup-image
                        color={iconColor}
                        class="material-icons mdc-button__icon"
                        sizeX="18px"
                        sizeY="18px"
                        resource={this.icon}
                    ></kup-image>
                );
            }

            if (this.outlined) {
                componentClass += ' mdc-button--outlined';
            } else if (!this.flat) {
                componentClass += ' mdc-button--raised';
            }

            if (this.shaped) {
                componentClass += ' button-shaped';
            }

            if (this.trailingIcon && this.icon) {
                leadingEl = labelEl;
                trailingEl = iconEl;
            } else {
                leadingEl = iconEl;
                trailingEl = labelEl;
            }
            return (
                <Host class="handles-custom-style">
                    <style>{setCustomStyle(this)}</style>
                    <div id="kup-component">
                        <button
                            type="button"
                            class={componentClass}
                            disabled={this.disabled}
                            onBlur={() => this.onKupBlur()}
                            onClick={() => this.onKupClick()}
                            onFocus={() => this.onKupFocus()}
                        >
                            <div class="mdc-button__ripple"></div>
                            {leadingEl}
                            {trailingEl}
                        </button>
                    </div>
                </Host>
            );
        } else if (this.icon) {
            if (!iconColor) {
                iconColor = 'var(--kup-main-color)';
            }
            componentClass += ' mdc-icon-button';
            trailingEl = (
                <kup-image
                    color={iconColor}
                    class="material-icons mdc-icon-button__icon"
                    sizeX="24px"
                    sizeY="24px"
                    resource={this.icon}
                ></kup-image>
            );
            if (this.toggable) {
                componentClass += ' toggable';
                trailingEl = (
                    <kup-image
                        color={iconColor}
                        class="material-icons mdc-icon-button__icon  mdc-icon-button__icon--on"
                        sizeX="24px"
                        sizeY="24px"
                        resource={this.icon}
                    ></kup-image>
                );
                if (this.checked) {
                    componentClass += ' mdc-icon-button--on';
                }
                let iconOff: string;

                if (this.iconOff) {
                    iconOff = this.iconOff;
                } else {
                    iconOff = this.icon + '_border';
                }

                leadingEl = (
                    <kup-image
                        color={iconColor}
                        class="material-icons mdc-icon-button__icon"
                        sizeX="24px"
                        sizeY="24px"
                        resource={iconOff}
                    ></kup-image>
                );
            }
            return (
                <Host class="handles-custom-style">
                    <style>{setCustomStyle(this)}</style>
                    <div id="kup-component">
                        {/* 
                            // @ts-ignore */}
                        <button
                            type="button"
                            class={componentClass}
                            // @ts-ignore
                            checked={this.checked}
                            disabled={this.disabled}
                            value={this.value}
                            onBlur={() => this.onKupBlur()}
                            onClick={() => this.onKupClick()}
                            onFocus={() => this.onKupFocus()}
                        >
                            <div class="mdc-button__ripple"></div>
                            {leadingEl}
                            {trailingEl}
                        </button>
                    </div>
                </Host>
            );
        }
    }
}
