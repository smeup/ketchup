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
import { MDCCheckbox } from '@material/checkbox';
import { MDCFormField } from '@material/form-field';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theming';

@Component({
    tag: 'kup-checkbox',
    styleUrl: 'kup-checkbox.scss',
    shadow: true,
})
export class KupCheckbox {
    @Element() rootElement: HTMLElement;
    @State() value: string = '';
    @State() customStyleTheme: string = undefined;

    /**
     * Defaults at false. When set to true, the component will be set to 'checked'.
     */
    @Prop({ reflect: true }) checked: boolean = false;
    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop({ reflect: true }) customStyle: string = undefined;
    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop({ reflect: true }) disabled: boolean = false;
    /**
     * Defaults at false. When set to true, the component will be set to 'indeterminate'.
     */
    @Prop({ reflect: true }) indeterminate: boolean = false;
    /**
     * Defaults at null. When specified, its content will be shown as a label.
     */
    @Prop({ reflect: true }) label: string = null;
    /**
     * Defaults at false. When set to true, the label will be on the left of the component.
     */
    @Prop({ reflect: true }) leadingLabel: boolean = false;

    @Event({
        eventName: 'kupCheckboxBlur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<{
        value: string;
        checked: boolean;
    }>;

    @Event({
        eventName: 'kupCheckboxChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<{
        value: string;
        checked: boolean;
    }>;

    @Event({
        eventName: 'kupCheckboxClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        value: string;
        checked: boolean;
    }>;

    @Event({
        eventName: 'kupCheckboxFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<{
        value: string;
        checked: boolean;
    }>;

    @Event({
        eventName: 'kupCheckboxInput',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInput: EventEmitter<{
        value: string;
        checked: boolean;
    }>;

    //---- Methods ----

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    onKupBlur() {
        this.kupBlur.emit({
            value: this.value,
            checked: this.checked == true ? true : false,
        });
    }

    onKupChange() {
        if (this.checked == true) {
            this.checked = false;
            this.value = 'off';
        } else {
            this.checked = true;
            this.value = 'on';
        }
        this.kupChange.emit({
            value: this.value,
            checked: this.checked,
        });
    }

    onKupClick() {
        this.kupClick.emit({
            value: this.value,
            checked: this.checked == true ? true : false,
        });
    }

    onKupFocus() {
        this.kupFocus.emit({
            value: this.value,
            checked: this.checked == true ? true : false,
        });
    }

    onKupInput() {
        this.kupInput.emit({
            value: this.value,
            checked: this.checked == true ? true : false,
        });
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        setThemeCustomStyle(this);
    }

    componentWillRender() {
        if (this.checked) {
            this.value = 'on';
        } else {
            this.value = 'off';
        }
    }

    componentDidRender() {
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
        let componentLabel: string = this.label;

        if (this.disabled) {
            componentClass += ' mdc-checkbox--disabled';
        }

        if (this.checked) {
            componentClass += ' mdc-checkbox--checked';
        }

        if (this.leadingLabel) {
            formClass += ' mdc-form-field--align-end';
        }

        return (
            <Host class="handles-custom-style">
                <style>{setCustomStyle(this)}</style>
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
