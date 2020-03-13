import {
    Component,
    Prop,
    Element,
    Event,
    EventEmitter,
    State,
    Host,
    Watch,
    h,
} from '@stencil/core';
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
    @Element() rootElement: HTMLElement;
    @State() value: string = '';

    /**
     * Custom style to be passed to the component.
     */
    @Prop({ reflect: true }) customStyle: string = undefined;
    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop({ reflect: true }) disabled: boolean = false;
    /**
     * Defaults at false. When set to true, the component will be rendered at full height.
     */
    @Prop({ reflect: true }) fullHeight: boolean = false;
    /**
     * Defaults at false. When set to true, the component will be rendered at full width.
     */
    @Prop({ reflect: true }) fullWidth: boolean = false;
    /**
     * Defaults at null. When set, its content will be shown as a help text below the field.
     */
    @Prop({ reflect: true }) helper: string = null;
    /**
     * Defaults at false. When set, the helper will be shown only when the field is focused.
     */
    @Prop({ reflect: true }) helperWhenFocused: boolean = false;
    /**
     * Defaults at null. When set, the text-field will show this icon.
     */
    @Prop({ reflect: true }) icon: string = null;
    /**
     * Sets the initial value of the component
     */
    @Prop({ reflect: true }) initialValue: string = '';
    /**
     * The HTML type of the input element. It has no effect on text areas.
     */
    @Prop({ reflect: true }) inputType: string = 'text';
    /**
     * Defaults at null. When set, its content will be shown as a label.
     */
    @Prop({ reflect: true }) label: string = null;
    /**
     * Defaults at false. When set to true, the label will be on the left of the component.
     */
    @Prop({ reflect: true }) leadingLabel: boolean = false;
    /**
     * Defaults at null. When set, the helper will display a character counter.
     */
    @Prop({ reflect: true }) maxLength: number = null;
    /**
     * Defaults at false. When set to true, the component will be rendered as an outlined field.
     */
    @Prop({ reflect: true }) outlined: boolean = false;
    /**
     * Defaults at false. When set to true, the button will be rendered with shaped edges.
     */
    @Prop({ reflect: true }) shaped: boolean = false;
    /**
     * Defaults at false. When set to true, the component will be rendered as a textarea.
     */
    @Prop({ reflect: true }) textArea: boolean = false;
    /**
     * Defaults at null. When set, the icon will be shown after the text.
     */
    @Prop({ reflect: true }) trailingIcon: boolean = false;
    /**
     * Defaults at false. When set to true, the label will be on the right of the component.
     */
    @Prop({ reflect: true }) trailingLabel: boolean = false;

    @Event({
        eventName: 'kupTextFieldBlur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<{
        value: string;
    }>;

    @Event({
        eventName: 'kupTextFieldChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<{
        value: string;
    }>;

    @Event({
        eventName: 'kupTextFieldClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        value: string;
    }>;

    @Event({
        eventName: 'kupTextFieldFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<{
        value: string;
    }>;

    @Event({
        eventName: 'kupTextFieldInput',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInput: EventEmitter<{
        value: string;
    }>;

    @Event({
        eventName: 'kupTextFieldIconClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupIconClick: EventEmitter<{
        value: string;
    }>;

    @Watch('initialValue')
    onInitialValueChanged() {
        this.value = this.initialValue;
    }

    //---- Methods ----

    onKupBlur(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupBlur.emit({
            value: target.value,
        });
    }

    onKupChange(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupChange.emit({
            value: target.value,
        });
    }

    onKupClick(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupClick.emit({
            value: target.value,
        });
    }

    onKupFocus(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupFocus.emit({
            value: target.value,
        });
    }

    onKupInput(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupInput.emit({
            value: target.value,
        });
    }

    onKupIconClick(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupIconClick.emit({
            value: target.value,
        });
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        this.onInitialValueChanged();
    }

    componentDidRender() {
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
        let widgetEl: HTMLElement = null;
        let placeholderLabel: string = null;

        if (!this.label) {
            componentClass += ' mdc-text-field--no-label';
        }

        if (this.disabled) {
            componentClass += ' mdc-text-field--disabled';
        }

        if (this.shaped) {
            componentClass += ' shaped';
        }

        if (this.fullWidth) {
            componentClass += ' mdc-text-field--fullwidth';
            placeholderLabel = this.label;
        } else if (this.label && !this.leadingLabel && !this.trailingLabel) {
            labelEl = (
                <label class="mdc-floating-label" htmlFor="wup-input">
                    {this.label}
                </label>
            );
        }

        if (this.icon) {
            iconEl = (
                <wup-icon
                    tabindex="0"
                    class="material-icons mdc-text-field__icon"
                    dimensions="24px"
                    name={this.icon}
                    onClick={(e: any) => this.onKupIconClick(e)}
                ></wup-icon>
            );
            if (this.trailingIcon) {
                componentClass += ' mdc-text-field--with-trailing-icon';
            } else {
                componentClass += ' mdc-text-field--with-leading-icon';
            }
        }

        if (this.helper) {
            let helperClass: string = 'mdc-text-field-helper-text';

            if (!this.helperWhenFocused) {
                helperClass += ' mdc-text-field-helper-text--persistent';
            }

            if (this.maxLength && !this.textArea) {
                let charString = '0 / ' + this.maxLength;
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
            if (this.maxLength && !this.textArea) {
                let charString = '0 / ' + this.maxLength;
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

        if (this.textArea || this.outlined) {
            widgetEl = this.outlinedStyling(
                componentClass,
                labelEl,
                placeholderLabel,
                iconEl
            );
        } else {
            widgetEl = this.defaultStyling(
                componentClass,
                labelEl,
                placeholderLabel,
                iconEl
            );
        }

        if (this.leadingLabel || this.trailingLabel) {
            widgetEl = this.renderForm(widgetEl, helperEl);
        } else {
            widgetEl = this.renderTextField(widgetEl, helperEl);
        }
        return widgetEl;
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
            if (this.trailingIcon) {
                trailingIconEl = iconEl;
            } else {
                leadingIconEl = iconEl;
            }
        }

        if (this.textArea) {
            componentClass += ' mdc-text-field--textarea';
            if (this.maxLength) {
                let charString = '0 / ' + this.maxLength;
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
                    maxlength={this.maxLength}
                    value={this.value}
                    onBlur={(e: any) => this.onKupBlur(e)}
                    onChange={(e: any) => this.onKupChange(e)}
                    onClick={(e: any) => this.onKupClick(e)}
                    onFocus={(e: any) => this.onKupFocus(e)}
                    onInput={(e: any) => this.onKupInput(e)}
                ></textarea>
            );
        } else {
            inputEl = (
                <input
                    type={this.inputType}
                    id="wup-input"
                    class="mdc-text-field__input"
                    disabled={this.disabled}
                    placeholder={placeholderLabel}
                    maxlength={this.maxLength}
                    value={this.value}
                    onBlur={(e: any) => this.onKupBlur(e)}
                    onChange={(e: any) => this.onKupChange(e)}
                    onClick={(e: any) => this.onKupClick(e)}
                    onFocus={(e: any) => this.onKupFocus(e)}
                    onInput={(e: any) => this.onKupInput(e)}
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
            if (this.trailingIcon) {
                trailingIconEl = iconEl;
            } else {
                leadingIconEl = iconEl;
            }
        }

        return (
            <div class={componentClass}>
                {leadingIconEl}
                <input
                    type={this.inputType}
                    id="wup-input"
                    class="mdc-text-field__input"
                    disabled={this.disabled}
                    placeholder={placeholderLabel}
                    maxlength={this.maxLength}
                    value={this.value}
                    onBlur={(e: any) => this.onKupBlur(e)}
                    onChange={(e: any) => this.onKupChange(e)}
                    onClick={(e: any) => this.onKupClick(e)}
                    onFocus={(e: any) => this.onKupFocus(e)}
                    onInput={(e: any) => this.onKupInput(e)}
                ></input>
                {trailingIconEl}
                {labelEl}
                <div class="mdc-line-ripple"></div>
            </div>
        );
    }

    renderForm(widgetEl: HTMLElement, helperEl: HTMLElement) {
        let formClass: string = 'mdc-form-field';
        let wrapperClass: string = '';
        let customStyle = undefined;
        let elStyle = undefined;
        if (this.customStyle) {
            customStyle = <style>{this.customStyle}</style>;
        }

        if (this.fullWidth) {
            elStyle = {
                width: '100%',
            };
        }

        if (this.fullHeight) {
            wrapperClass += ' full-height';
            elStyle = {
                ...elStyle,
                height: '100%',
            };
        }

        if (this.leadingLabel) {
            formClass += ' mdc-form-field--align-end';
        }

        return (
            <Host style={elStyle}>
                {customStyle}
                <div id="kup-component" class={wrapperClass} style={elStyle}>
                    <div class={formClass}>
                        {widgetEl}
                        {helperEl}
                        <label htmlFor="wup-input">{this.label}</label>
                    </div>
                </div>
            </Host>
        );
    }

    renderTextField(widgetEl: HTMLElement, helperEl: HTMLElement) {
        let wrapperClass: string = '';
        let customStyle = undefined;
        let elStyle = undefined;
        if (this.customStyle) {
            customStyle = <style>{this.customStyle}</style>;
        }

        if (this.fullWidth) {
            elStyle = {
                width: '100%',
            };
        }

        if (this.fullHeight) {
            wrapperClass += ' full-height';
            elStyle = {
                ...elStyle,
                height: '100%',
            };
        }

        return (
            <Host style={elStyle}>
                {customStyle}
                <div id="kup-component" class={wrapperClass} style={elStyle}>
                    {widgetEl}
                    {helperEl}
                </div>
            </Host>
        );
    }
}
