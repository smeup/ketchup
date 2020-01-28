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
    @Prop() disabled: boolean = false;
    /**
     * Defaults at false. When set to true, the button will be rendered with a colored outline.
     */
    @Prop() transparent: boolean = false;
    /**
     * Defaults at false. When set to true, the button will be rendered flat.
     */
    @Prop() flat: boolean = false;
    /**
     * Defaults at false. When set to true, the button will be rendered with rounded edges.
     */
    @Prop() rounded: boolean = false;
    /**
     * Defaults at false. When set to true, the icon button will be toggable on/off.
     */
    @Prop() toggable: boolean = false;
    /**
     * Defaults at false. When set to true, the icon button state will be on.
     */
    @Prop() checked: boolean = false;
    /**
     * Defaults at null. When set, the button will show this icon.
     */
    @Prop() icon: string = null;
    /**
     * Defaults at null. When set, the icon will be shown after the text.
     */
    @Prop() trailingicon: boolean = false;
    /**
     * Defaults at null. When set, the button will show this text.
     */
    @Prop() text: string = null;

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
        eventName: 'kupButtonChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<{
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

    @Event({
        eventName: 'kupButtonInput',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInput: EventEmitter<{
        value: any;
    }>;

    //---- Methods ----

    onKupBlur() {
        this.kupBlur.emit({
            value: this.value,
        });
    }

    onKupChange() {
        this.kupClick.emit({
            value: this.value,
        });
    }

    onKupClick() {
        if (this.checked) {
            this.checked = false;
            this.value = 'off';
        } else {
            this.checked = true;
            this.value = 'on';
        }
        this.kupChange.emit({
            value: this.value,
        });
    }

    onKupFocus() {
        this.kupFocus.emit({
            value: this.value,
        });
    }

    onKupInput() {
        this.kupInput.emit({
            value: this.value,
        });
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        if (this.checked && this.text === null && this.icon !== null) {
            this.value = 'on';
        } else {
            this.value = 'off';
        }
    }

    componentDidLoad() {
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
        let widgetClass: string = 'kup-button';
        let iconEl: HTMLElement = null;
        let textEl: HTMLElement = null;
        let leadingEl: HTMLElement = null;
        let trailingEl: HTMLElement = null;

        if (this.disabled) {
            widgetClass += ' mdc-button--disabled';
        }

        if (this.text) {
            widgetClass += ' mdc-button';
            textEl = <span class="mdc-button__label">{this.text}</span>;
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

            if (this.transparent) {
                widgetClass += ' mdc-button--outlined';
            } else if (!this.flat) {
                widgetClass += ' mdc-button--raised';
            }

            if (this.rounded) {
                widgetClass += ' button-shaped';
            }

            if (this.trailingicon && this.icon) {
                leadingEl = textEl;
                trailingEl = iconEl;
            } else {
                leadingEl = iconEl;
                trailingEl = textEl;
            }
            return (
                <Host>
                    <div id="kup-component">
                        <button
                            type="button"
                            class={widgetClass}
                            disabled={this.disabled}
                            onBlur={() => this.onKupBlur()}
                            onChange={() => this.onKupChange()}
                            onClick={() => this.onKupClick()}
                            onFocus={() => this.onKupFocus()}
                            onInput={() => this.onKupInput()}
                        >
                            <div class="mdc-button__ripple"></div>
                            {leadingEl}
                            {trailingEl}
                        </button>
                    </div>
                </Host>
            );
        } else if (this.icon) {
            widgetClass += ' mdc-icon-button';
            trailingEl = (
                <i
                    class="material-icons mdc-icon-button__icon"
                    aria-hidden="true"
                >
                    {this.icon}
                </i>
            );
            if (this.toggable) {
                widgetClass += ' toggable';
                trailingEl = (
                    <i
                        class="material-icons mdc-icon-button__icon  mdc-icon-button__icon--on"
                        aria-hidden="true"
                    >
                        {this.icon}
                    </i>
                );
                if (this.checked) {
                    widgetClass += ' mdc-icon-button--on';
                }
                let iconOff = this.icon + '_border';
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
                            class={widgetClass}
                            checked={this.checked}
                            disabled={this.disabled}
                            value={this.value}
                            onBlur={() => this.onKupBlur()}
                            onChange={() => this.onKupChange()}
                            onClick={() => this.onKupClick()}
                            onFocus={() => this.onKupFocus()}
                            onInput={() => this.onKupInput()}
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
