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
import { MDCSwitch } from '@material/switch';
import { MDCFormField } from '@material/form-field';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theme-manager';
import { logLoad, logRender } from '../../utils/debug-manager';
import { FSwitch } from '../../f-components/f-switch/f-switch';

@Component({
    tag: 'kup-switch',
    styleUrl: 'kup-switch.scss',
    shadow: true,
})
export class KupSwitch {
    @Element() rootElement: HTMLElement;
    @State() value: string = '';
    @State() customStyleTheme: string = undefined;
    /**
     * Defaults at false. When set to true, the component will be set to 'checked'.
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
     * Defaults at null. When specified, its content will be shown as a label.
     */
    @Prop() label: string = null;
    /**
     * Defaults at false. When set to true, the label will be on the left of the component.
     */
    @Prop() leadingLabel: boolean = false;

    @Event({
        eventName: 'kupSwitchBlur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<{
        value: string;
    }>;

    @Event({
        eventName: 'kupSwitchChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<{
        value: string;
    }>;

    @Event({
        eventName: 'kupSwitchClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        value: string;
    }>;

    @Event({
        eventName: 'kupSwitchFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<{
        value: string;
    }>;

    @Event({
        eventName: 'kupSwitchInput',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInput: EventEmitter<{
        value: string;
    }>;

    //---- Methods ----

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    onKupBlur() {
        this.kupBlur.emit({
            value: this.value,
        });
    }

    onKupChange() {
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

    onKupClick() {
        this.kupClick.emit({
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

    private setEvents(root: ShadowRoot) {
        let inputEl = root.querySelector('input');
        if (inputEl) {
            inputEl.onblur = () => this.onKupBlur();
            inputEl.onchange = () => this.onKupChange();
            inputEl.onclick = () => this.onKupClick();
            inputEl.onfocus = () => this.onKupFocus();
            inputEl.oninput = () => this.onKupInput();
        }
        let labelEl = root.querySelector('label');
        if (labelEl) {
            labelEl.onclick = () => this.onKupClick();
        }
    }

    private setMDC(root: ShadowRoot) {
        const component = MDCSwitch.attachTo(root.querySelector('.mdc-switch'));
        const formField = MDCFormField.attachTo(
            root.querySelector('.mdc-form-field')
        );
        formField.input = component;
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
        if (this.checked) {
            this.value = 'on';
        } else {
            this.value = 'off';
        }
    }

    componentDidRender() {
        const root = this.rootElement.shadowRoot;
        if (root) {
            this.setEvents(root);
            this.setMDC(root);
        }
        logRender(this, true);
    }

    render() {
        let props = {
            checked: this.checked,
            disabled: this.disabled,
            label: this.label,
            leadingLabel: this.leadingLabel,
        };

        return (
            <Host>
                <style>{setCustomStyle(this)}</style>
                <div id="kup-component">
                    <FSwitch {...props} />
                </div>
            </Host>
        );
    }
}
