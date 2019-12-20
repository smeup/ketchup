import { Component, Prop, Element, Host, h } from '@stencil/core';
import { MDCTextField } from '@material/textfield';
import { MDCFormField } from '@material/form-field';
import { MDCTextFieldHelperText } from '@material/textfield/helper-text';
import { MDCTextFieldCharacterCounter } from '@material/textfield/character-counter';
import { MDCTextFieldIcon } from '@material/textfield/icon';

@Component({
    tag: 'wup-text-field',
    styleUrl: 'wup-text-field.scss',
    shadow: true,
})
export class WupTextField {
    /**
     * Defaults at false. When set to true, mixins and classes of customization are enabled.
     */
    @Prop() custom: boolean = false;
    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop() disabled: boolean = false;
    /**
     * Defaults at false. When set to true, the component will be rendered at full width.
     */
    @Prop() fullwidth: boolean = false;
    /**
     * Defaults at false. When set to true, the component will be rendered as a textarea.
     */
    @Prop() textarea: boolean = false;
    /**
     * Defaults at false. When set to true, the component will be rendered as an outlined field.
     */
    @Prop() outlined: boolean = false;
    /**
     * Defaults at null. When set, its content will be shown as a label.
     */
    @Prop() label: string = null;
    /**
     * Defaults at null. When set, its content will be shown as a label to the left in a form.
     */
    @Prop() labelleft: string = null;
    /**
     * Defaults at null. When set, its content will be shown as a label to the right in a form.
     */
    @Prop() labelright: string = null;
    /**
     * Defaults at null. When set, its content will be shown as a help text below the field.
     */
    @Prop() helper: string = null;
    /**
     * Defaults at false. When set to true, the button will be rendered with rounded edges.
     */
    @Prop() rounded: boolean = false;
    /**
     * Defaults at false. When set, the helper will be shown only when the field is focused.
     */
    @Prop() helperwhenfocus: boolean = false;
    /**
     * Defaults at null. When set, the helper will display a character counter.
     */
    @Prop() maxlength: number = null;
    /**
     * Defaults at null. When set, the text-field will show this icon.
     */
    @Prop() icon: string = null;
    /**
     * Defaults at null. When set, the icon will be shown after the text.
     */
    @Prop() trailingicon: boolean = false;

    @Element() rootElement: HTMLElement;

    //---- Methods ----

    //---- Lifecycle hooks ----

    componentDidLoad() {
        const root = this.rootElement.shadowRoot;

        if (root != null) {
            const component = new MDCTextField(
                root.querySelector('.mdc-text-field')
            );
            if (root.querySelector('.mdc-form-field')) {
                const formField = MDCFormField.attachTo(
                    root.querySelector('.mdc-form-field')
                );
                formField.input = component;
            }
            if (root.querySelector('.mdc-text-field-helper-text')) {
                new MDCTextFieldHelperText(
                    document.querySelector('.mdc-text-field-helper-text')
                );
            }
            if (root.querySelector('.mdc-text-field-character-counter')) {
                new MDCTextFieldCharacterCounter(
                    document.querySelector('.mdc-text-field-character-counter')
                );
            }
            if (root.querySelector('.mdc-text-field-icon')) {
                new MDCTextFieldIcon(
                    document.querySelector('.mdc-text-field-icon')
                );
            }
        }
    }

    //---- Rendering ----

    render() {
        let componentClass: string = 'mdc-text-field';
        let labelEl: HTMLElement = null;
        let helperEl: HTMLElement = null;
        let iconEl: HTMLElement = null;
        let charEl: HTMLElement = null;
        let componentEl: HTMLElement = null;
        let placeholderLabel: string = null;

        //If there is a form, "label" attribute doesn't make sense and it should be empty, so we override its content with null
        if (this.labelleft || this.labelright) {
            this.label = null;
        }

        if (!this.label) {
            componentClass += ' mdc-text-field--no-label';
        }

        if (this.custom) {
            componentClass += ' custom';
        }

        if (this.disabled) {
            componentClass += ' mdc-text-field--disabled';
        }

        if (this.rounded) {
            componentClass += ' shaped';
        }

        if (this.fullwidth) {
            componentClass += ' mdc-text-field--fullwidth';
            placeholderLabel = this.label;
        } else if (this.label) {
            labelEl = (
                <label class="mdc-floating-label" htmlFor="wup-input">
                    {this.label}
                </label>
            );
        }

        if (this.icon) {
            iconEl = (
                <i
                    class="material-icons mdc-text-field__icon"
                    tabindex="0"
                    role="button"
                >
                    {this.icon}
                </i>
            );
            if (this.trailingicon) {
                componentClass += ' mdc-text-field--with-trailing-icon';
            } else {
                componentClass += ' mdc-text-field--with-leading-icon';
            }
        }

        if (this.helper) {
            let helperClass: string = 'mdc-text-field-helper-text';

            if (!this.helperwhenfocus) {
                helperClass += ' mdc-text-field-helper-text--persistent';
            }

            if (this.maxlength && !this.textarea) {
                let charString = '0 / ' + this.maxlength;
                charEl = (
                    <div class="mdc-text-field-character-counter">
                        {charString}
                    </div>
                );
            }

            helperEl = (
                <div class="mdc-text-field-helper-line">
                    <div class={helperClass}>{this.helper}</div>
                    {charEl}
                </div>
            );
        } else {
            if (this.maxlength && !this.textarea) {
                let charString = '0 / ' + this.maxlength;
                charEl = (
                    <div class="mdc-text-field-character-counter">
                        {charString}
                    </div>
                );
                helperEl = (
                    <div class="mdc-text-field-helper-line">{charEl}</div>
                );
            }
        }

        if (this.textarea || this.outlined) {
            componentEl = this.outlinedStyling(
                componentClass,
                labelEl,
                placeholderLabel,
                iconEl
            );
        } else {
            componentEl = this.defaultStyling(
                componentClass,
                labelEl,
                placeholderLabel,
                iconEl
            );
        }

        if (this.labelleft || this.labelright) {
            componentEl = this.renderForm(componentEl, helperEl);
        } else {
            componentEl = this.renderTextField(componentEl, helperEl);
        }
        return componentEl;
    }

    outlinedStyling(
        componentClass: string,
        labelEl: HTMLElement,
        placeholderLabel: string,
        iconEl: HTMLElement
    ) {
        let charEl: HTMLElement = null;
        let inputEl: HTMLElement = null;
        let leadingIconEl: HTMLElement = null;
        let trailingIconEl: HTMLElement = null;
        componentClass += '  mdc-text-field--outlined';

        if (this.icon) {
            if (this.trailingicon) {
                trailingIconEl = iconEl;
            } else {
                leadingIconEl = iconEl;
            }
        }

        if (this.textarea) {
            componentClass += ' mdc-text-field--textarea';
            if (this.maxlength) {
                let charString = '0 / ' + this.maxlength;
                charEl = (
                    <div class="mdc-text-field-character-counter">
                        {charString}
                    </div>
                );
            }
            inputEl = (
                <textarea
                    id="wup-input"
                    class="mdc-text-field__input"
                    disabled={this.disabled}
                    maxlength={this.maxlength}
                ></textarea>
            );
        } else {
            inputEl = (
                <input
                    type="text"
                    id="wup-input"
                    class="mdc-text-field__input"
                    placeholder={placeholderLabel}
                    disabled={this.disabled}
                    maxlength={this.maxlength}
                ></input>
            );
        }

        return (
            <div class={componentClass}>
                {charEl}
                {leadingIconEl}
                {inputEl}
                {trailingIconEl}
                <div class="mdc-notched-outline">
                    <div class="mdc-notched-outline__leading"></div>
                    <div class="mdc-notched-outline__notch">{labelEl}</div>
                    <div class="mdc-notched-outline__trailing"></div>
                </div>
            </div>
        );
    }

    defaultStyling(
        componentClass: string,
        labelEl: HTMLElement,
        placeholderLabel: string,
        iconEl: HTMLElement
    ) {
        let leadingIconEl: HTMLElement = null;
        let trailingIconEl: HTMLElement = null;

        if (this.icon) {
            if (this.trailingicon) {
                trailingIconEl = iconEl;
            } else {
                leadingIconEl = iconEl;
            }
        }

        return (
            <div class={componentClass}>
                {leadingIconEl}
                <input
                    type="text"
                    id="wup-input"
                    class="mdc-text-field__input"
                    disabled={this.disabled}
                    placeholder={placeholderLabel}
                    maxlength={this.maxlength}
                ></input>
                {trailingIconEl}
                {labelEl}
                <div class="mdc-line-ripple"></div>
            </div>
        );
    }

    renderForm(componentEl: HTMLElement, helperEl: HTMLElement) {
        let formClass: string = 'mdc-form-field';
        let labelEl: HTMLElement = null;

        if (this.labelright) {
            labelEl = <label htmlFor="wup-input">{this.labelright}</label>;
        } else {
            labelEl = <label htmlFor="wup-input">{this.labelleft}</label>;
            formClass += ' mdc-form-field--align-end';
        }

        return (
            <Host>
                <div class={formClass}>
                    {componentEl}
                    {helperEl}
                    {labelEl}
                </div>
            </Host>
        );
    }

    renderTextField(componentEl: HTMLElement, helperEl: HTMLElement) {
        return (
            <Host>
                {componentEl}
                {helperEl}
            </Host>
        );
    }
}
