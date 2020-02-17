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
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop({ reflect: true }) disabled: boolean = false;
    /**
     * Defaults at false. When set to true, the button will be rendered with a colored outline.
     */
    @Prop({ reflect: true }) outlined: boolean = false;
    /**
     * Defaults at false. When set to true, the button will be rendered flat.
     */
    @Prop({ reflect: true }) flat: boolean = false;
    /**
     * Defaults at false. When set to true, the button will be rendered with rounded edges.
     */
    @Prop({ reflect: true }) shaped: boolean = false;
    /**
     * Defaults at false. When set to true, the icon button will be toggable on/off.
     */
    @Prop({ reflect: true }) toggable: boolean = false;
    /**
     * Defaults at false. When set to true, the icon button state will be on.
     */
    @Prop({ reflect: true }) checked: boolean = false;
    /**
     * Defaults at null. When set, the button will show this icon.
     */
    @Prop({ reflect: true }) icon: string = null;
    /**
     * Defaults at null. When set, the icon button off state will show this icon. Otherwise, an outlined version of the icon prop will be displayed.
     */
    @Prop({ reflect: true }) iconOff: string = null;
    /**
     * Defaults at null. When set, the icon will be shown after the text.
     */
    @Prop({ reflect: true }) trailingIcon: boolean = false;
    /**
     * Defaults at null. When set, the button will show this text.
     */
    @Prop({ reflect: true }) label: string = null;

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
            const buttonRipple = MDCRipple.attachTo(
                root.querySelector('.kup-button')
            );
            const iconEl = root.querySelector('.kup-button');
            if (iconEl.classList.contains('mdc-icon-button')) {
                buttonRipple.unbounded = true;
                if (iconEl.classList.contains('toggable')) {
                    new MDCIconButtonToggle(iconEl);
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

        if (this.disabled) {
            componentClass += ' mdc-button--disabled';
        }

        if (this.label) {
            componentClass += ' mdc-button';
            labelEl = <span class="mdc-button__label">{this.label}</span>;
            if (this.icon) {
                iconEl = (
                    <i
                        class="material-icons mdc-button__icon"
                        aria-hidden="true"
                    >
                        {this.icon}
                    </i>
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
                <Host>
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
            componentClass += ' mdc-icon-button';
            trailingEl = (
                <i
                    class="material-icons mdc-icon-button__icon"
                    aria-hidden="true"
                >
                    {this.icon}
                </i>
            );
            if (this.toggable) {
                componentClass += ' toggable';
                trailingEl = (
                    <i
                        class="material-icons mdc-icon-button__icon  mdc-icon-button__icon--on"
                        aria-hidden="true"
                    >
                        {this.icon}
                    </i>
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
                    <i
                        class="material-icons mdc-icon-button__icon"
                        aria-hidden="true"
                    >
                        {iconOff}
                    </i>
                );
            }
            return (
                <Host>
                    <div id="kup-component">
                        {/* 
                            // @ts-ignore */}
                        <button
                            type="button"
                            class={componentClass}
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
