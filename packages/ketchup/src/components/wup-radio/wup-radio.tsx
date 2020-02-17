import {
    Component,
    Event,
    EventEmitter,
    Prop,
    Element,
    Host,
    h,
} from '@stencil/core';
import { MDCRadio } from '@material/radio';
import { MDCFormField } from '@material/form-field';

@Component({
    tag: 'wup-radio',
    styleUrl: 'wup-radio.scss',
    shadow: true,
})
export class WupRadio {
    @Element() rootElement: HTMLElement;
    @Prop() name: string = '';
    @Prop() value: string = '';
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
        eventName: 'kupRadioBlur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<{
        value: string;
        checked: boolean;
    }>;

    @Event({
        eventName: 'kupRadioChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<{
        value: string;
        checked: boolean;
    }>;

    @Event({
        eventName: 'kupRadioClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        value: string;
        checked: boolean;
    }>;

    @Event({
        eventName: 'kupRadioFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<{
        value: string;
        checked: boolean;
    }>;

    @Event({
        eventName: 'kupRadioInput',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInput: EventEmitter<{
        value: string;
        checked: boolean;
    }>;

    //---- Methods ----

    onKupBlur(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupBlur.emit({
            value: target.value,
            checked: target.checked,
        });
    }

    onKupChange(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupChange.emit({
            value: target.value,
            checked: target.checked,
        });
    }

    onKupClick(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupClick.emit({
            value: target.value,
            checked: target.checked,
        });
    }

    onKupFocus(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupFocus.emit({
            value: target.value,
            checked: target.checked,
        });
    }

    onKupInput(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupInput.emit({
            value: target.value,
            checked: target.checked,
        });
    }

    //---- Lifecycle hooks ----

    componentDidLoad() {
        const root = this.rootElement.shadowRoot;

        if (root != null) {
            const component = MDCRadio.attachTo(
                root.querySelector('.mdc-radio')
            );
            const formField = MDCFormField.attachTo(
                root.querySelector('.mdc-form-field')
            );
            formField.input = component;
        }
    }

    render() {
        let formClass: string = 'mdc-form-field';
        let componentClass: string = 'mdc-radio';
        let componentLabel: string = '';

        if (this.disabled) {
            componentClass += ' mdc-radio--disabled';
        }

        if (this.checked) {
            componentClass += ' mdc-radio--checked';
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
                            <input
                                class="mdc-radio__native-control"
                                type="radio"
                                id={this.name}
                                name={this.name}
                                value={this.value}
                                checked={this.checked}
                                disabled={this.disabled}
                                onBlur={(e: any) => this.onKupBlur(e)}
                                onChange={(e: any) => this.onKupChange(e)}
                                onClick={(e: any) => this.onKupClick(e)}
                                onFocus={(e: any) => this.onKupFocus(e)}
                                onInput={(e: any) => this.onKupInput(e)}
                            ></input>
                            <div class="mdc-radio__background">
                                <div class="mdc-radio__outer-circle"></div>
                                <div class="mdc-radio__inner-circle"></div>
                            </div>
                            <div class="mdc-radio__ripple"></div>
                        </div>
                        <label htmlFor={this.name}>{componentLabel}</label>
                    </div>
                    <div class={formClass}>
                        <div class={componentClass}>
                            <input
                                class="mdc-radio__native-control"
                                type="radio"
                                id={this.name}
                                name={this.name}
                                value={this.value}
                                checked={this.checked}
                                disabled={this.disabled}
                                onBlur={(e: any) => this.onKupBlur(e)}
                                onChange={(e: any) => this.onKupChange(e)}
                                onClick={(e: any) => this.onKupClick(e)}
                                onFocus={(e: any) => this.onKupFocus(e)}
                                onInput={(e: any) => this.onKupInput(e)}
                            ></input>
                            <div class="mdc-radio__background">
                                <div class="mdc-radio__outer-circle"></div>
                                <div class="mdc-radio__inner-circle"></div>
                            </div>
                            <div class="mdc-radio__ripple"></div>
                        </div>
                        <label htmlFor={this.name}>{componentLabel}aa</label>
                    </div>
                </div>
            </Host>
        );
    }
}
