import {
    Component,
    Prop,
    Element,
    Host,
    Event,
    getAssetPath,
    EventEmitter,
    State,
    h,
    Method,
} from '@stencil/core';
import { MDCRipple } from '@material/ripple';
import { MDCIconButtonToggle } from '@material/icon-button';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theme-manager';
import { logLoad, logMessage, logRender } from '../../utils/debug-manager';

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
    @Prop() checked: boolean = false;
    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = undefined;
    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop() disabled: boolean = false;
    /**
     * Defaults at null. When set, the button will show this icon.
     */
    @Prop() icon: string = null;
    /**
     * Defaults at null. When set, the icon button off state will show this icon. Otherwise, an outlined version of the icon prop will be displayed.
     */
    @Prop() iconOff: string = null;
    /**
     * Defaults at null. When set, the button will show this text.
     */
    @Prop() label: string = null;
    /**
     * Defines the style of the button. Available style are "flat" and "outlined", "raised" is the default.
     */
    @Prop() styling: string = '';
    /**
     * Defaults at false. When set to true, the icon button will be toggable on/off.
     */
    @Prop() toggable: boolean = false;
    /**
     * Defaults at null. When set, the icon will be shown after the text.
     */
    @Prop() trailingIcon: boolean = false;

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

    private createRippleElement() {
        if (this.disabled) {
            return undefined;
        }
        return <div class="mdc-button__ripple"></div>;
    }

    private createLabelElement() {
        if (!this.label) {
            return undefined;
        }
        return <span class="mdc-button__label">{this.label}</span>;
    }

    private createIconElement(CSSClass: string, icon: string) {
        if (!this.icon) {
            return undefined;
        }

        if (
            this.icon.indexOf('.') > -1 ||
            this.icon.indexOf('/') > -1 ||
            this.icon.indexOf('\\') > -1
        ) {
            return (
                <span class={CSSClass}>
                    <img src={this.icon}></img>
                </span>
            );
        } else {
            let svg: string = `url('${getAssetPath(
                `./assets/svg/${icon}.svg`
            )}') no-repeat center`;
            CSSClass += ' icon-container material-icons';
            let iconStyle = {
                mask: svg,
                webkitMask: svg,
            };
            return <span style={iconStyle} class={CSSClass}></span>;
        }
    }

    private renderButton() {
        let componentClass: string = 'mdc-button';
        let leadingEl: HTMLElement = undefined;
        let trailingEl: HTMLElement = undefined;

        if (this.disabled) {
            componentClass += ' mdc-button--disabled';
        }

        if (this.label) {
            if (this.styling === 'outlined') {
                componentClass += ' mdc-button--outlined';
            } else if (this.styling !== 'flat') {
                componentClass += ' mdc-button--raised';
            }

            if (this.trailingIcon && this.icon) {
                leadingEl = this.createLabelElement();
                trailingEl = this.createIconElement(
                    'mdc-button__icon',
                    this.icon
                );
            } else {
                leadingEl = this.createIconElement(
                    'mdc-button__icon',
                    this.icon
                );
                trailingEl = this.createLabelElement();
            }
            return (
                <button
                    type="button"
                    class={componentClass}
                    disabled={this.disabled}
                    onBlur={() => this.onKupBlur()}
                    onClick={() => this.onKupClick()}
                    onFocus={() => this.onKupFocus()}
                >
                    {this.createRippleElement()}
                    {leadingEl}
                    {trailingEl}
                </button>
            );
        }
    }

    private renderIconButton() {
        let componentClass: string = 'mdc-icon-button';
        let leadingEl: HTMLElement = undefined;
        let trailingEl: HTMLElement = undefined;

        if (this.disabled) {
            componentClass += ' mdc-button--disabled';
        }

        trailingEl = this.createIconElement('mdc-icon-button__icon', this.icon);
        if (this.toggable) {
            componentClass += ' toggable';
            trailingEl = this.createIconElement(
                'mdc-icon-button__icon mdc-icon-button__icon--on',
                this.icon
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

            leadingEl = this.createIconElement(
                'mdc-icon-button__icon',
                iconOff
            );
        }
        return (
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
                {this.createRippleElement()}
                {leadingEl}
                {trailingEl}
            </button>
        );
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        logLoad(this, false);
        setThemeCustomStyle(this);
    }

    componentDidLoad() {
        logLoad(this, true);
    }

    componentWillRender() {
        logRender(this, false);
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
            let button = root.querySelector('button');
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
        logRender(this, true);
    }

    render() {
        // It renders in two different ways because two different Material layouts are used.
        // If only the icon is present, with no text, an "icon button" will be rendered.
        let comp: HTMLElement = undefined;
        if (this.label) {
            comp = this.renderButton();
        } else {
            comp = this.renderIconButton();
        }
        return (
            <Host>
                <style>{setCustomStyle(this)}</style>
                <div id="kup-component">{comp}</div>
            </Host>
        );
    }
}
