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
import { MDCSwitch } from '@material/switch';
import { MDCFormField } from '@material/form-field';

@Component({
    tag: 'wup-switch',
    styleUrl: 'wup-switch.scss',
    shadow: true,
})
export class WupSwitch {
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
            const component = MDCSwitch.attachTo(
                root.querySelector('.mdc-switch')
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
        let componentClass: string = 'mdc-switch';
        let componentLabel: string = '';

        if (this.custom) {
            componentClass += ' custom';
        }

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
            <Host checked={this.checked}>
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
                                    onChange={this.onComponentChange.bind(this)}
                                ></input>
                            </div>
                        </div>
                    </div>
                    <label htmlFor="switch-id">{componentLabel}</label>
                </div>
            </Host>
        );
    }
}
