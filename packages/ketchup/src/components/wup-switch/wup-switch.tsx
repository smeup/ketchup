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
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop({ reflect: true }) disabled: boolean = false;
    /**
     * Defaults at false. When set to true, the component will be set to 'checked'.
     */
    @Prop({ reflect: true }) checked: boolean = false;
    /**
     * Defaults at null. When specified, its content is shown to the left of the component as a label.
     */
    @Prop({ reflect: true }) labelleft: string = null;
    /**
     * Defaults at null. When specified, its content is shown to the right of the component as a label.
     */
    @Prop({ reflect: true }) labelright: string = null;

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

    //---- Lifecycle hooks ----

    componentWillRender() {
        if (this.checked) {
            this.value = 'on';
        } else {
            this.value = 'off';
        }
    }

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
        let componentClass: string = 'mdc-switch';
        let componentLabel: string = '';

        if (this.disabled) {
            componentClass += ' mdc-switch--disabled';
        }

        if (this.checked) {
            componentClass += ' mdc-switch--checked';
        }

        if (this.labelleft) {
            formClass += ' mdc-form-field--align-end';
            componentLabel = this.labelleft;
        } else if (this.labelright) {
            componentLabel = this.labelright;
        }

        return (
            <Host>
                <div id="kup-component">
                    <div class={formClass}>
                        <div class={componentClass}>
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
                                        value={this.value}
                                        onBlur={() => this.onKupBlur()}
                                        onChange={() => this.onKupChange()}
                                        onClick={() => this.onKupClick()}
                                        onFocus={() => this.onKupFocus()}
                                        onInput={() => this.onKupInput()}
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <label htmlFor="switch-id">{componentLabel}</label>
                    </div>
                </div>
            </Host>
        );
    }
}
