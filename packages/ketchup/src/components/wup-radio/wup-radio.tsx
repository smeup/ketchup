// >   R  E  A  D  M  E <
//
// --> M A T E R I A L    D E S I G N
//
//     This component is a form field, it should be managed as such.
//     For more info: https://material.io/develop/web/components/input-controls/form-fields/
//

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
     * Defaults at false. When set to true, the component will be set to 'checked'.
     */
    @Prop() checked: boolean = false;
    /**
     * Defaults at false. When set to true, mixins and classes of customization are enabled.
     */
    @Prop() custom: boolean = false;
    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop() disabled: boolean = false;
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
        eventName: 'componentChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    componentChange: EventEmitter<{
        checked: boolean;
    }>;

    //---- Methods ----

    onComponentChange(e: UIEvent) {
        const newValue = !!(e.target as HTMLInputElement).checked;
        if (newValue !== this.checked) {
            this.checked = newValue;
            this.componentChange.emit({
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

    //---- Rendering ----

    render() {
        let formClass: string = 'mdc-form-field';
        let componentClass: string = 'mdc-radio';
        let componentLabel: string = '';

        if (this.custom) {
            componentClass += ' custom';
        }

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
            <Host checked={this.checked}>
                <div class={formClass}>
                    <div class={componentClass}>
                        <input
                            class="mdc-radio__native-control"
                            type="radio"
                            id="radio-id"
                            checked={this.checked}
                            disabled={this.disabled}
                            onChange={this.onComponentChange.bind(this)}
                        ></input>
                        <div class="mdc-radio__background">
                            <div class="mdc-radio__outer-circle"></div>
                            <div class="mdc-radio__inner-circle"></div>
                        </div>
                        <div class="mdc-radio__ripple"></div>
                    </div>
                    <label htmlFor="radio-id">{componentLabel}</label>
                </div>
            </Host>
        );
    }
}
