import {
    Component,
    Event,
    EventEmitter,
    Prop,
    Element,
    Host,
    State,
    h,
    Method,
} from '@stencil/core';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theme-manager';
import { logLoad, logMessage, logRender } from '../../utils/debug-manager';
import { FButton } from '../../f-components/f-button/f-button';
import { FButtonMDC } from '../../f-components/f-button/f-button-mdc';
import { FButtonProps } from '../../f-components/f-button/f-button-declarations';

@Component({
    tag: 'kup-button',
    styleUrl: 'kup-button.scss',
    shadow: true,
})
export class KupButton {
    @Element() rootElement: HTMLElement;

    //---- States ----

    @State() value: string = '';
    @State() customStyleTheme: string = undefined;

    //---- Props ----

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

    //---- Events ----

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

    onKupBlur() {
        this.kupBlur.emit({
            id: this.rootElement.id,
            value: this.value,
        });
    }

    onKupClick() {
        if (!this.label && this.icon) {
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

    //---- Public methods ----

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    //---- Private methods ----

    private setEvents(): void {
        const root: ShadowRoot = this.rootElement.shadowRoot;
        if (root) {
            const f: HTMLElement = root.querySelector('.f-button--wrapper');
            if (f) {
                const buttonEl: HTMLButtonElement = f.querySelector('button');
                if (buttonEl) {
                    buttonEl.onblur = () => this.onKupBlur();
                    buttonEl.onclick = () => this.onKupClick();
                    buttonEl.onfocus = () => this.onKupFocus();
                }
                FButtonMDC(f);
            }
        }
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
        if (!this.label && this.icon) {
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
        this.setEvents();
        logRender(this, true);
    }

    render() {
        let props: FButtonProps = {
            checked: this.checked,
            disabled: this.disabled,
            fullHeight: this.rootElement.classList.contains('full-height')
                ? true
                : false,
            fullWidth: this.rootElement.classList.contains('full-width')
                ? true
                : false,
            icon: this.icon,
            iconOff: this.iconOff,
            label: this.label,
            shaped: this.rootElement.classList.contains('shaped')
                ? true
                : false,
            styling: this.styling,
            toggable: this.toggable,
            trailingIcon: this.trailingIcon,
        };

        if (!this.label && !this.icon) {
            let message = 'Empty button.';
            logMessage(this, message, 'warning');
            return;
        }

        return (
            <Host>
                <style>{setCustomStyle(this)}</style>
                <div id="kup-component">
                    <FButton {...props} />
                </div>
            </Host>
        );
    }
}
