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

    @Element() rootElement: HTMLElement;

    @Event({
        eventName: 'widgetChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    widgetChange: EventEmitter<{
        checked: boolean;
    }>;

    //---- Methods ----

    onWidgetChange(e: UIEvent) {
        const newValue = !!(e.target as HTMLInputElement).checked;
        if (newValue !== this.checked) {
            this.checked = newValue;
            this.widgetChange.emit({
                checked: newValue,
            });
        }
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
        let widgetClass: string = 'mdc-radio';
        let widgetLabel: string = '';

        if (this.custom) {
            widgetClass += ' custom';
        }

        if (this.disabled) {
            widgetClass += ' mdc-radio--disabled';
        }

        if (this.checked) {
            widgetClass += ' mdc-radio--checked';
        }

        if (this.labelleft) {
            formClass += ' mdc-form-field--align-end';
            widgetLabel = this.labelleft;
        } else if (this.labelright) {
            widgetLabel = this.labelright;
        }

        return (
            <Host checked={this.checked}>
                <div class={formClass}>
                    <div class={widgetClass}>
                        <input
                            class="mdc-radio__native-control"
                            type="radio"
                            id="radio-id"
                            checked={this.checked}
                            disabled={this.disabled}
                            onChange={this.onWidgetChange.bind(this)}
                        ></input>
                        <div class="mdc-radio__background">
                            <div class="mdc-radio__outer-circle"></div>
                            <div class="mdc-radio__inner-circle"></div>
                        </div>
                        <div class="mdc-radio__ripple"></div>
                    </div>
                    <label htmlFor="radio-id">{widgetLabel}</label>
                </div>
            </Host>
        );
    }
}
