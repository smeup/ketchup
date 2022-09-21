import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    h,
    Host,
    Method,
    Prop,
    State,
} from '@stencil/core';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { FTextField } from '../../f-components/f-text-field/f-text-field';
import { FTextFieldMDC } from '../../f-components/f-text-field/f-text-field-mdc';
import { FTextFieldProps } from '../../f-components/f-text-field/f-text-field-declarations';
import {
    GenericObject,
    KupComponent,
    KupEventPayload,
} from '../../types/GenericTypes';
import {
    KupTextFieldEventPayload,
    KupTextFieldProps,
} from './kup-text-field-declarations';
import { KupDebugCategory } from '../../managers/kup-debug/kup-debug-declarations';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';

@Component({
    tag: 'kup-text-field',
    styleUrl: 'kup-text-field.scss',
    shadow: true,
})
export class KupTextField {
    /**
     * References the root HTML element of the component (<kup-text-field>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /**
     * The value of the component.
     * @default ""
     */
    @State() value: string = '';

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * Number of decimals (should be used when inputType is number).
     * @default null
     */
    @Prop() decimals: number = null;
    /**
     * When set to true, the component is disabled.
     * @default false
     */
    @Prop() disabled: boolean = false;
    /**
     * When the text field is part of the autocomplete component and the list is opened, enter key selects the item and doesn't submit.
     * @default true
     */
    @Prop() emitSubmitEventOnEnter: boolean = true;
    /**
     * When set to true, the component will be rendered at full width.
     * @default false
     */
    @Prop({ reflect: true }) fullWidth: boolean = false;
    /**
     * When set, its content will be shown as a help text below the field.
     * @default null
     */
    @Prop() helper: string = null;
    /**
     * When true, the helper will be displayed.
     * @default true
     */
    @Prop() helperEnabled: boolean = true;
    /**
     * When set, the helper will be shown only when the field is focused.
     * @default false
     */
    @Prop() helperWhenFocused: boolean = false;
    /**
     * When set, the text-field will show this icon.
     * @default null
     */
    @Prop() icon: string = null;
    /**
     * Sets the initial value of the component
     * @default ""
     */
    @Prop() initialValue: string = '';
    /**
     * The HTML inputmode of the input element.
     * @default null
     */
    @Prop() inputMode: string = null;
    /**
     * The HTML type of the input element. It has no effect on text areas.
     * @default "text"
     */
    @Prop() inputType: string = 'text';
    /**
     * Enables a clear trailing icon.
     * @default false
     */
    @Prop() isClearable: boolean = false;
    /**
     * When set, its content will be shown as a label.
     * @default null
     */
    @Prop() label: string = null;
    /**
     * When set to true, the label will be on the left of the component.
     * @default false
     */
    @Prop() leadingLabel: boolean = false;
    /**
     * The HTML max attribute specifies the maximum value for the input element.
     * Works with the following input types: number, range, date, datetime-local, month, time and week.
     * @default null
     */
    @Prop() max: number = null;
    /**
     * When set, the helper will display a character counter.
     * @default null
     */
    @Prop() maxLength: number = null;
    /**
     * The HTML min attribute specifies the minimum value for the input element.
     * Works with the following input types: number, range, date, datetime-local, month, time and week.
     * @default null
     */
    @Prop() min: number = null;
    /**
     * The HTML name attribute used for form autocomplete.
     * @default null
     */
    @Prop() name: string = null;
    /**
     * When set to true, the component will be rendered as an outlined field.
     * @default false
     */
    @Prop() outlined: boolean = false;
    /**
     * Sets the component to read only state, making it not editable, but interactable. Used in combobox component when it behaves as a select.
     * @default false
     */
    @Prop() readOnly: boolean = false;
    /**
     * The HTML step of the input element. It has effect only with number input type.
     * @default null
     */
    @Prop() step: number = null;
    /**
     * When set to true, the component will be rendered as a textarea.
     * @default false
     */
    @Prop() textArea: boolean = false;
    /**
     * When set, the icon will be shown after the text.
     * @default false
     */
    @Prop() trailingIcon: boolean = false;
    /**
     * When set to true, the label will be on the right of the component.
     * @default false
     */
    @Prop() trailingLabel: boolean = false;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Reference to the input element.
     */
    private inputEl: HTMLInputElement | HTMLTextAreaElement;
    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Triggered when the input element loses focus.
     */
    @Event({
        eventName: 'kup-textfield-blur',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupBlur: EventEmitter<KupTextFieldEventPayload>;
    /**
     * Triggered when the input element changes.
     */
    @Event({
        eventName: 'kup-textfield-change',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupChange: EventEmitter<KupTextFieldEventPayload>;
    /**
     * Triggered when the input element is clicked.
     */
    @Event({
        eventName: 'kup-textfield-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<KupTextFieldEventPayload>;
    /**
     * Triggered when the input element gets focused.
     */
    @Event({
        eventName: 'kup-textfield-focus',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupFocus: EventEmitter<KupTextFieldEventPayload>;
    /**
     * Triggered when the input element receives an input.
     */
    @Event({
        eventName: 'kup-textfield-input',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupInput: EventEmitter<KupTextFieldEventPayload>;
    /**
     * Triggered when the text field's icon is clicked.
     */
    @Event({
        eventName: 'kup-textfield-iconclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupIconClick: EventEmitter<KupTextFieldEventPayload>;
    /**
     * Triggered when the text field's clear icon is clicked.
     */
    @Event({
        eventName: 'kup-textfield-cleariconclick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClearIconClick: EventEmitter<KupEventPayload>;
    /**
     * Triggered when the Enter key is pressed.
     */
    @Event({
        eventName: 'kup-textfield-submit',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupTextFieldSubmit: EventEmitter<KupTextFieldEventPayload>;

    onKupBlur(event: FocusEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupBlur.emit({
            comp: this,
            id: this.rootElement.id,
            value: target.value,
        });
    }

    onKupChange(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.value = target.value;
        this.kupChange.emit({
            comp: this,
            id: this.rootElement.id,
            value: target.value,
        });
    }

    onKupClick(event: MouseEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupClick.emit({
            comp: this,
            id: this.rootElement.id,
            value: target.value,
        });
    }

    onKupFocus(event: FocusEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupFocus.emit({
            comp: this,
            id: this.rootElement.id,
            value: target.value,
        });
    }

    onKupInput(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupInput.emit({
            comp: this,
            id: this.rootElement.id,
            value: target.value,
        });
    }

    onKupIconClick(event: MouseEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.kupIconClick.emit({
            comp: this,
            id: this.rootElement.id,
            value: target.value,
        });
    }

    onKupClearIconClick() {
        this.value = '';
        this.inputEl.value = '';
        this.kupClearIconClick.emit({
            comp: this,
            id: this.rootElement.id,
        });
    }

    onKeyDown(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            if (this.emitSubmitEventOnEnter == true) {
                this.kupTextFieldSubmit.emit({
                    comp: this,
                    id: this.rootElement.id,
                    value: this.inputEl.value,
                });
            }
        }
    }

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KupTextFieldProps, descriptions);
    }
    /**
     * Returns the component's internal value.
     */
    @Method()
    async getValue(): Promise<string> {
        return this.value;
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * Focuses the input element.
     */
    @Method()
    async setFocus(): Promise<void> {
        this.inputEl.focus();
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupTextFieldProps, props);
    }
    /**
     * Sets the internal value of the component.
     */
    @Method()
    async setValue(value: string): Promise<void> {
        this.value = value;
        try {
            this.inputEl.value = value;
        } catch (error) {
            this.kupManager.debug.logMessage(
                this,
                "Couldn't set value on input element: '" + value + "'",
                KupDebugCategory.WARNING
            );
        }
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
        this.value = this.initialValue;
    }

    componentDidLoad() {
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        const root: ShadowRoot = this.rootElement.shadowRoot;
        if (root) {
            const f: HTMLElement = root.querySelector('.f-text-field');
            if (f) {
                const inputEl: HTMLInputElement | HTMLTextAreaElement =
                    f.querySelector('.mdc-text-field__input');
                if (inputEl) {
                    this.inputEl = inputEl;
                }
                FTextFieldMDC(f);
            }
        }
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        const props: FTextFieldProps = {
            danger: this.rootElement.classList.contains('kup-danger')
                ? true
                : false,
            decimals: this.decimals,
            disabled: this.disabled,
            fullHeight: this.rootElement.classList.contains('kup-full-height')
                ? true
                : false,
            fullWidth: this.fullWidth,
            helper: this.helper,
            helperEnabled: this.helperEnabled,
            helperWhenFocused: this.helperWhenFocused,
            icon: this.icon,
            info: this.rootElement.classList.contains('kup-info')
                ? true
                : false,
            inputMode: this.inputMode,
            inputType: this.inputType,
            isClearable: this.isClearable,
            label: this.label,
            leadingLabel: this.leadingLabel,
            max: this.max,
            maxLength: this.maxLength,
            min: this.min,
            name: this.name,
            outlined: this.outlined,
            readOnly: this.readOnly,
            secondary: this.rootElement.classList.contains('kup-secondary')
                ? true
                : false,
            shaped: this.rootElement.classList.contains('kup-shaped')
                ? true
                : false,
            step: this.step,
            success: this.rootElement.classList.contains('kup-success')
                ? true
                : false,
            textArea: this.textArea,
            trailingIcon: this.trailingIcon,
            trailingLabel: this.trailingLabel,
            value: this.value,
            warning: this.rootElement.classList.contains('kup-warning')
                ? true
                : false,
            onBlur: (e: FocusEvent & { target: HTMLInputElement }) =>
                this.onKupBlur(e),
            onChange: (e: UIEvent & { target: HTMLInputElement }) =>
                this.onKupChange(e),
            onClick: (e: MouseEvent & { target: HTMLInputElement }) =>
                this.onKupClick(e),
            onFocus: (e: FocusEvent & { target: HTMLInputElement }) =>
                this.onKupFocus(e),
            onInput: (e: UIEvent & { target: HTMLInputElement }) =>
                this.onKupInput(e),
            onKeyDown: (e: KeyboardEvent) => this.onKeyDown(e),
            onIconClick: (e: MouseEvent & { target: HTMLInputElement }) =>
                this.onKupIconClick(e),
            onClearIconClick: () => this.onKupClearIconClick(),
        };

        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <FTextField {...props} />
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
    }
}
