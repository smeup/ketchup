import {
    Component,
    Prop,
    Element,
    Host,
    Event,
    EventEmitter,
    State,
    h,
    Method,
} from '@stencil/core';
import { MDCTextField } from '@material/textfield';
import { MDCFormField } from '@material/form-field';
import { MDCTextFieldHelperText } from '@material/textfield/helper-text';
import { MDCTextFieldCharacterCounter } from '@material/textfield/character-counter';
import { MDCTextFieldIcon } from '@material/textfield/icon';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theme-manager';
import { logLoad, logMessage, logRender } from '../../utils/debug-manager';
import { FTextField } from '../../f-components/f-text-field/f-text-field';

@Component({
    tag: 'kup-text-field',
    styleUrl: 'kup-text-field.scss',
    shadow: true,
})
export class KupTextField {
    @Element() rootElement: HTMLElement;
    @State() value: string = '';
    @State() customStyleTheme: string = undefined;

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

    private inputEl = undefined;

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
     * When a keydown enter event occurs it generates
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

    //---- Methods ----

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

    onKupBlur(event: UIEvent & { target: HTMLInputElement }) {
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

    onKupClick(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupClick.emit({
            id: this.rootElement.id,
            value: target.value,
        });
    }

    onKupFocus(event: UIEvent & { target: HTMLInputElement }) {
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

    onKupIconClick(event: UIEvent & { target: HTMLInputElement }) {
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

    /**
     * Listens for keydown events to get when 'Enter' is pressed, firing a submit event.
     */
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

    /**
     * Imperatively sets a new value of the input.
     * @method changeValue
     * @param newValue - the new value to be set inside the input
     * @param emitEvent - If true, then also forces the component to emit an updated event
     */
    @Method()
    async changeValue(newValue: string, emitEvent: boolean = false) {
        if (typeof newValue === 'string') {
            if (emitEvent) {
                this.kupInput.emit({
                    id: this.rootElement.id,
                    value: newValue,
                });
            }
            this.value = newValue;
            return true;
        }
        throw new Error(`The value ${newValue} is not a valid string.`);
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
        const root = this.rootElement.shadowRoot;

        if (root) {
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

        logRender(this, true);
    }

    render() {
        let props = {
            disabled: this.disabled,
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
            textArea: this.textArea,
            trailingIcon: this.trailingIcon,
            trailingLabel: this.trailingLabel,
            value: this.value,
            wrapperClass: this.rootElement.classList.contains('shaped')
                ? 'shaped'
                : undefined,
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
