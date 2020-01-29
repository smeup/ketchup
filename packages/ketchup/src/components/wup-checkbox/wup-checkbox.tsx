import {
    Component,
    Event,
    EventEmitter,
    Prop,
    Element,
    Host,
    State,
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
    @Element() rootElement: HTMLElement;
    @State() value: string = '';
    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop() disabled: boolean = false;
    /**
     * Defaults at false. When set to true, the component will be set to 'checked'.
     */
    @Prop() checked: boolean = false;
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

    @Event({
        eventName: 'kupCheckboxBlur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<{
        value: string;
    }>;

    @Event({
        eventName: 'kupCheckboxChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<{
        value: string;
    }>;

    @Event({
        eventName: 'kupCheckboxClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        value: string;
    }>;

    @Event({
        eventName: 'kupCheckboxFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<{
        value: string;
    }>;

    @Event({
        eventName: 'kupCheckboxInput',
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
            const component = MDCCheckbox.attachTo(
                root.querySelector('.mdc-checkbox')
            );
            const formField = MDCFormField.attachTo(
                root.querySelector('.mdc-form-field')
            );
            formField.input = component;
        }
    }

    render() {
        let formClass: string = 'mdc-form-field';
        let componentClass: string = 'mdc-checkbox';
        let componentLabel: string = '';

        if (this.disabled) {
            componentClass += ' mdc-checkbox--disabled';
        }

        if (this.checked) {
            componentClass += ' mdc-checkbox--checked';
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
                        <div id="checkbox-wrapper" class={componentClass}>
                            {/* 
                            // @ts-ignore */}
                            <input
                                type="checkbox"
                                class="mdc-checkbox__native-control"
                                checked={this.checked}
                                disabled={this.disabled}
                                indeterminate={this.indeterminate}
                                value={this.value}
                                onBlur={() => this.onKupBlur()}
                                onChange={() => this.onKupChange()}
                                onClick={() => this.onKupClick()}
                                onFocus={() => this.onKupFocus()}
                                onInput={() => this.onKupInput()}
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
                        <label htmlFor="checkbox-wrapper">
                            {componentLabel}
                        </label>
                    </div>
                </div>
            </Host>
        );
    }
}
