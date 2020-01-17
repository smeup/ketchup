import {
    Component,
    Event,
    EventEmitter,
    Prop,
    Element,
    State,
    Host,
    h,
} from '@stencil/core';
import { MDCSwitch } from '@material/switch';
import { MDCFormField } from '@material/form-field';

@Component({
    tag: 'wup-switch',
    styleUrl: 'wup-switch.scss',
    shadow: true,
})
export class WupSwitch {
    @Element() rootElement: HTMLElement;
    @State() value: string = '';
    /**
     * Defaults at false. When set to true, mixins and classes of customization are enabled.
     */
    @Prop() custom: boolean = false;
    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop() disabled: boolean = false;
    /**
     * Defaults at false. When set to true, the component will be set to 'checked'.
     */
    @Prop() checked: boolean = false;
    /**
     * Defaults at null. When specified, its content is shown to the left of the component as a label.
     */
    @Prop() labelleft: string = null;
    /**
     * Defaults at null. When specified, its content is shown to the right of the component as a label.
     */
    @Prop() labelright: string = null;

    @Event({
        eventName: 'kupSwitchBlur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupSwitchChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupSwitchClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupSwitchFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<{
        value: any;
    }>;

    @Event({
        eventName: 'kupSwitchInput',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInput: EventEmitter<{
        value: any;
    }>;

    //---- Methods ----

    onKupBlur(e: UIEvent & { target: HTMLInputElement }) {
        const { target } = e;
        this.kupBlur.emit({
            value: target.value,
        });
        this.value = target.value;
    }

    onKupChange(e: UIEvent & { target: HTMLInputElement }) {
        const { target } = e;
        this.kupChange.emit({
            value: target.value,
        });
        this.value = target.value;
    }

    onKupClick(e: UIEvent & { target: HTMLInputElement }) {
        const { target } = e;
        this.kupClick.emit({
            value: target.value,
        });
        this.value = target.value;
    }

    onKupFocus(e: UIEvent & { target: HTMLInputElement }) {
        const { target } = e;
        this.kupFocus.emit({
            value: target.value,
        });
        this.value = target.value;
    }

    onKupInput(e: UIEvent & { target: HTMLInputElement }) {
        const { target } = e;
        this.kupInput.emit({
            value: target.value,
        });
        this.value = target.value;
    }

    //---- Lifecycle hooks ----

    componentDidLoad() {
        const root = this.rootElement.shadowRoot;

        if (root != null) {
            const component = MDCSwitch.attachTo(
                root.querySelector('.mdc-switch')
            );
            const formField = MDCFormField.attachTo(
                root.querySelector('.mdc-form-field')
            );
            formField.input = component;
        }
    }

    render() {
        let formClass: string = 'mdc-form-field';
        let widgetClass: string = 'mdc-switch';
        let widgetLabel: string = '';

        if (this.custom) {
            widgetClass += ' custom';
        }

        if (this.disabled) {
            widgetClass += ' mdc-switch--disabled';
        }

        if (this.checked) {
            widgetClass += ' mdc-switch--checked';
        }

        if (this.labelleft) {
            formClass += ' mdc-form-field--align-end';
            widgetLabel = this.labelleft;
        } else if (this.labelright) {
            widgetLabel = this.labelright;
        }

        return (
            <Host>
                <div class={formClass}>
                    <div class={widgetClass}>
                        <div class="mdc-switch__track"></div>
                        <div class="mdc-switch__thumb-underlay">
                            <div class="mdc-switch__thumb">
                                <input
                                    type="checkbox"
                                    id="switch-id"
                                    class="mdc-switch__native-control"
                                    role="switch"
                                    checked={this.checked}
                                    disabled={this.disabled}
                                    onBlur={this.onKupBlur.bind(this)}
                                    onChange={this.onKupChange.bind(this)}
                                    onClick={this.onKupClick.bind(this)}
                                    onFocus={this.onKupFocus.bind(this)}
                                    onInput={this.onKupInput.bind(this)}
                                ></input>
                            </div>
                        </div>
                    </div>
                    <label htmlFor="switch-id">{widgetLabel}</label>
                </div>
            </Host>
        );
    }
}
