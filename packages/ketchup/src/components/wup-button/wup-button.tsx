import {
    Component,
    Prop,
    Element,
    Host,
    Event,
    EventEmitter,
    State,
    h,
} from '@stencil/core';
import { MDCRipple } from '@material/ripple';
import { MDCIconButtonToggle } from '@material/icon-button';

@Component({
    tag: 'wup-button',
    styleUrl: 'wup-button.scss',
    shadow: true,
})
export class WupButton {
    @Element() rootElement: HTMLElement;
    @State() value: string = '';
    /**
     * Defaults at false. When set to true, the icon button state will be on.
     */
    @Prop({ reflect: true }) checked: boolean = false;
    /**
     * Custom style to be passed to the component.
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
     * Defaults at false. When set to true fill all the available horizontal space.
     */
    @Prop({ reflect: true }) fullHeight = false;
    /**
     * Defaults at false. When set to true fill all the available horizontal space.
     */
    @Prop({ reflect: true }) fullWidth = false;
    /**
     * Defaults at null. When set, the button will show this icon.
     */
    @Prop({ reflect: true }) icon: string = null;
    /**
     * If not set, it will be managed by the component.
     */
    @Prop({ reflect: true }) iconColor: string = null;
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
     * When set, this tooltip will be displayed on mouse over (using the HTML attribute title).
     */
    @Prop({ reflect: true }) tooltip: string = undefined;
    /**
     * Defaults at null. When set, the icon will be shown after the text.
     */
    @Prop({ reflect: true }) trailingIcon: boolean = false;

    @Event({
        eventName: 'kupButtonBlur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupButtonClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupButtonFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<{
        value: any;
    }>;

    //---- Methods ----

    onKupBlur() {
        this.kupBlur.emit({
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
            value: this.value,
        });
    }

    onKupFocus() {
        this.kupFocus.emit({
            value: this.value,
        });
    }

    //---- Lifecycle hooks ----

    componentWillRender() {
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

        if (root != null) {
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
    }

    render() {
        // It renders in two different ways because two different Material layouts are used.
        // If only the icon is present, with no text, an "icon button" will be rendered.
        let componentClass: string = 'kup-button';
        let iconEl: HTMLElement = null;
        let labelEl: HTMLElement = null;
        let leadingEl: HTMLElement = null;
        let trailingEl: HTMLElement = null;
        let elStyle = undefined;
        let iconColor = undefined;
        let customStyle = undefined;
        if (this.customStyle) {
            customStyle = <style>{this.customStyle}</style>;
        }

        if (this.disabled) {
            componentClass += ' mdc-button--disabled';
            iconColor = 'var(--kup-disabled-text-color)';
        } else {
            iconColor = this.iconColor;
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
                    <wup-icon
                        color={iconColor}
                        class="material-icons mdc-button__icon"
                        dimensions="18px"
                        name={this.icon}
                    ></wup-icon>
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

            if (this.fullWidth) {
                componentClass += ' fullwidth';
                elStyle = {
                    width: '100%',
                };
            }

            if (this.fullHeight) {
                componentClass += ' fullheight';
                elStyle = {
                    ...elStyle,
                    height: '100%',
                };
            }

            if (this.trailingIcon && this.icon) {
                leadingEl = labelEl;
                trailingEl = iconEl;
            } else {
                leadingEl = iconEl;
                trailingEl = labelEl;
            }
            return (
                <Host style={elStyle}>
                    {customStyle}
                    <div id="kup-component" style={elStyle}>
                        <button
                            type="button"
                            class={componentClass}
                            disabled={this.disabled}
                            title={this.tooltip}
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
                <wup-icon
                    color={iconColor}
                    class="material-icons mdc-icon-button__icon"
                    dimensions="18px"
                    name={this.icon}
                ></wup-icon>
            );
            if (this.toggable) {
                componentClass += ' toggable';
                trailingEl = (
                    <wup-icon
                        color={iconColor}
                        class="material-icons mdc-icon-button__icon  mdc-icon-button__icon--on"
                        dimensions="18px"
                        name={this.icon}
                    ></wup-icon>
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
                    <wup-icon
                        color={this.iconColor}
                        class="material-icons mdc-icon-button__icon"
                        dimensions="18px"
                        name={iconOff}
                    ></wup-icon>
                );
            }
            return (
                <Host>
                    {customStyle}
                    <div id="kup-component">
                        {/* 
                            // @ts-ignore */}
                        <button
                            type="button"
                            class={componentClass}
                            checked={this.checked}
                            disabled={this.disabled}
                            value={this.value}
                            title={this.tooltip}
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
