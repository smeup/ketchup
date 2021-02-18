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
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theme-manager';
import { logLoad, logMessage, logRender } from '../../utils/debug-manager';
import { FTextField } from '../../f-components/f-text-field/f-text-field';
import { FTextFieldMDC } from '../../f-components/f-text-field/f-text-field-mdc';

@Component({
    tag: 'kup-text-field',
    styleUrl: 'kup-text-field.scss',
    shadow: true,
})
export class KupTextField {
    @Element() rootElement: HTMLElement;

    //---- States ----

    @State() value: string = '';
    @State() customStyleTheme: string = undefined;

    //---- Props ----

    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = undefined;
    /**
     * Defaults at false. When set to true, the component is disabled.
     */
    @Prop() disabled: boolean = false;
    /**
     * When the text field is part of the autocomplete component and the list is opened, enter key selects the item and doesn't submit.
     */
    @Prop() emitSubmitEventOnEnter: boolean = true;
    /**
     * Defaults at false. When set to true, the component will be rendered at full width.
     */
    @Prop({ reflect: true }) fullWidth: boolean = false;
    /**
     * Defaults at null. When set, its content will be shown as a help text below the field.
     */
    @Prop() helper: string = null;
    /**
     * Defaults at false. When set, the helper will be shown only when the field is focused.
     */
    @Prop() helperWhenFocused: boolean = false;
    /**
     * Defaults at null. When set, the text-field will show this icon.
     */
    @Prop() icon: string = null;
    /**
     * Sets the initial value of the component
     */
    @Prop() initialValue: string = '';
    /**
     * The HTML type of the input element. It has no effect on text areas.
     */
    @Prop() inputType: string = 'text';
    /**
     * Enables a clear trailing icon.
     */
    @Prop() isClearable: boolean = false;
    /**
     * Defaults at null. When set, its content will be shown as a label.
     */
    @Prop() label: string = null;
    /**
     * Defaults at false. When set to true, the label will be on the left of the component.
     */
    @Prop() leadingLabel: boolean = false;
    /**
     * Defaults at null. When set, the helper will display a character counter.
     */
    @Prop() maxLength: number = null;
    /**
     * Defaults at false. When set to true, the component will be rendered as an outlined field.
     */
    @Prop() outlined: boolean = false;
    /**
     * Sets the component to read only state, making it not editable, but interactable. Used in combobox component when it behaves as a select.
     */
    @Prop() readOnly: boolean = false;
    /**
     * The HTML step of the input element. It has effect only with number input type.
     */
    @Prop() step: number = null;
    /**
     * Defaults at false. When set to true, the component will be rendered as a textarea.
     */
    @Prop() textArea: boolean = false;
    /**
     * Defaults at null. When set, the icon will be shown after the text.
     */
    @Prop() trailingIcon: boolean = false;
    /**
     * Defaults at false. When set to true, the label will be on the right of the component.
     */
    @Prop() trailingLabel: boolean = false;

    //---- Internal variables ----

    private inputEl = undefined;

    //---- Events ----

    /**
     * Triggered when the input element loses focus.
     */
    @Event({
        eventName: 'kupTextFieldBlur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<{
        id: any;
        value: string;
    }>;
    /**
     * Triggered when the input element changes.
     */
    @Event({
        eventName: 'kupTextFieldChange',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<{
        id: any;
        value: string;
    }>;
    /**
     * Triggered when the input element is clicked.
     */
    @Event({
        eventName: 'kupTextFieldClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        id: any;
        value: string;
    }>;
    /**
     * Triggered when the input element gets focused.
     */
    @Event({
        eventName: 'kupTextFieldFocus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<{
        id: any;
        value: string;
    }>;
    /**
     * Triggered when the input element receives an input.
     */
    @Event({
        eventName: 'kupTextFieldInput',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInput: EventEmitter<{
        id: any;
        value: string;
    }>;
    /**
     * Triggered when the text field's icon is clicked.
     */
    @Event({
        eventName: 'kupTextFieldIconClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupIconClick: EventEmitter<{
        id: any;
        value: string;
    }>;
    /**
     * Triggered when the text field's clear icon is clicked.
     */
    @Event({
        eventName: 'kupTextFieldClearIconClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClearIconClick: EventEmitter<{
        id: any;
    }>;
    /**
     * Triggered when the Enter key is pressed.
     */
    @Event({
        eventName: 'kupTextFieldSubmit',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTextFieldSubmit: EventEmitter<{
        id: any;
        value: string;
    }>;

    onKupBlur(event: FocusEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupBlur.emit({
            id: this.rootElement.id,
            value: target.value,
        });
    }

    onKupChange(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupChange.emit({
            id: this.rootElement.id,
            value: target.value,
        });
    }

    onKupClick(event: MouseEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupClick.emit({
            id: this.rootElement.id,
            value: target.value,
        });
    }

    onKupFocus(event: FocusEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupFocus.emit({
            id: this.rootElement.id,
            value: target.value,
        });
    }

    onKupInput(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupInput.emit({
            id: this.rootElement.id,
            value: target.value,
        });
    }

    onKupIconClick(event: MouseEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupIconClick.emit({
            id: this.rootElement.id,
            value: target.value,
        });
    }

    onKupClearIconClick() {
        this.value = '';
        this.inputEl.value = '';
        this.kupClearIconClick.emit({
            id: this.rootElement.id,
        });
    }

    onKeyDown(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            if (this.emitSubmitEventOnEnter == true) {
                event.preventDefault();
                this.kupTextFieldSubmit.emit({
                    id: this.rootElement.id,
                    value: this.inputEl.value,
                });
            }
        }
    }

    //---- Public methods ----

    @Method()
    async getValue(): Promise<string> {
        return this.value;
    }

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    @Method()
    async setFocus() {
        this.inputEl.focus();
    }

    @Method()
    async setValue(value: string) {
        this.value = value;
        try {
            this.inputEl.value = value;
        } catch (error) {
            let message =
                "Couldn't set value on input element: '" + value + "'";
            logMessage(this, message, 'warning');
        }
    }

    //---- Private methods ----

    private setEvents() {
        const root: ShadowRoot = this.rootElement.shadowRoot;
        if (root) {
            const f: HTMLElement = root.querySelector('.f-text-field--wrapper');
            if (f) {
                const inputEl:
                    | HTMLInputElement
                    | HTMLTextAreaElement = f.querySelector(
                    '.mdc-text-field__input'
                );
                const icon: HTMLElement = f.querySelector('.action');
                const clearIcon: HTMLElement = f.querySelector('.clear');
                if (inputEl) {
                    inputEl.onblur = (
                        e: FocusEvent & { target: HTMLInputElement }
                    ) => this.onKupBlur(e);
                    inputEl.onchange = (
                        e: UIEvent & { target: HTMLInputElement }
                    ) => this.onKupChange(e);
                    inputEl.onclick = (
                        e: MouseEvent & { target: HTMLInputElement }
                    ) => this.onKupClick(e);
                    inputEl.onfocus = (
                        e: FocusEvent & { target: HTMLInputElement }
                    ) => this.onKupFocus(e);
                    inputEl.oninput = (
                        e: UIEvent & { target: HTMLInputElement }
                    ) => this.onKupInput(e);
                    inputEl.onkeydown = (e: KeyboardEvent) => this.onKeyDown(e);
                    this.inputEl = inputEl;
                }
                if (icon) {
                    icon.onclick = (
                        e: MouseEvent & { target: HTMLInputElement }
                    ) => this.onKupIconClick(e);
                }
                if (clearIcon) {
                    clearIcon.onclick = () => this.onKupClearIconClick();
                }
                FTextFieldMDC(f);
            }
        }
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        logLoad(this, false);
        setThemeCustomStyle(this);
        this.value = this.initialValue;
    }

    componentDidLoad() {
        logLoad(this, true);
    }

    componentWillRender() {
        logRender(this, false);
    }

    componentDidRender() {
        this.setEvents();
        logRender(this, true);
    }

    render() {
        let props = {
            disabled: this.disabled,
            fullHeight: this.rootElement.classList.contains('full-height')
                ? true
                : false,
            fullWidth: this.fullWidth,
            helper: this.helper,
            helperWhenFocused: this.helperWhenFocused,
            icon: this.icon,
            initialValue: this.initialValue,
            inputType: this.inputType,
            isClearable: this.isClearable,
            label: this.label,
            leadingLabel: this.leadingLabel,
            maxLength: this.maxLength,
            outlined: this.outlined,
            readOnly: this.readOnly,
            shaped: this.rootElement.classList.contains('shaped')
                ? true
                : false,
            step: this.step,
            textArea: this.textArea,
            trailingIcon: this.trailingIcon,
            trailingLabel: this.trailingLabel,
            value: this.value,
        };

        return (
            <Host>
                <style>{setCustomStyle(this)}</style>
                <div id="kup-component">
                    <FTextField {...props} />
                </div>
            </Host>
        );
    }
}
