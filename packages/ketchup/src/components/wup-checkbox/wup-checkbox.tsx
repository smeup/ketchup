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
import { MDCCheckbox } from '@material/checkbox';
import { MDCFormField } from '@material/form-field';

@Component({
    tag: 'wup-checkbox',
    styleUrl: 'wup-checkbox.scss',
    shadow: true,
})
export class WupCheckbox {
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
     * Defaults at false. When set to true, the component will be set to 'indeterminate'.
     */
    @Prop() indeterminate: boolean = false;
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
            const component = MDCCheckbox.attachTo(
                root.querySelector('.mdc-checkbox')
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
        let componentClass: string = 'mdc-checkbox';
        let componentLabel: string = '';

        if (this.custom) {
            componentClass += ' custom';
        }

        if (this.disabled) {
            componentClass += ' mdc-checkbox--disabled';
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
                    <div id="checkbox-wrapper" class={componentClass}>
                        {/* 
                          // @ts-ignore */}
                        <input
                            type="checkbox"
                            class="mdc-checkbox__native-control"
                            checked={this.checked}
                            disabled={this.disabled}
                            indeterminate={this.indeterminate}
                            onChange={this.onComponentChange.bind(this)}
                        />
                        <div class="mdc-checkbox__background">
                            <svg
                                class="mdc-checkbox__checkmark"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    class="mdc-checkbox__checkmark-path"
                                    fill="none"
                                    d="M1.73,12.91 8.1,19.28 22.79,4.59"
                                />
                            </svg>
                            <div class="mdc-checkbox__mixedmark"></div>
                        </div>
                        <div class="mdc-checkbox__ripple"></div>
                    </div>
                    <label htmlFor="checkbox-wrapper">{componentLabel}</label>
                </div>
            </Host>
        );
    }
}
