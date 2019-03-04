import {
    Component,
    Element,
    Event,
    EventEmitter,
    Method,
    Prop,
    State,
} from '@stencil/core'

@Component({
    tag: 'ketchup-combo',
    styleUrl: 'ketchup-combo.scss',
    shadow: true
})
export class KetchupCombo {
    /**
     * Marks the field as clearable, allowing an icon to delete its content
     */
    @Prop() initialValue: string = '';
    /**
     * Marks the field as clearable, allowing an icon to delete its content
     */
    @Prop() isClearable: boolean = false;
    /**
     * Label to describe the radio group
     */
    @Prop() label: string = '';
    /**
     * The max length of the text field.
     * Default value copied from here: https://www.w3schools.com/tags/att_input_maxlength.asp
     */
    @Prop() maxLength: number = 524288;

    //-- Validating props --


    //---- Internal state ----
    @State() value: string = '';
    @State() isOpen: boolean = false;

    //-- Not reactive state --
    @Element() inputEl: HTMLElement;
    textInput!: HTMLInputElement;

    //-- Constants --
    baseClass = 'ketchup-combo';

    //---- Lifecycle Hooks  ----
    componentWillLoad() {
        // Sets initial value inside the element
        this.value = this.initialValue;
    }

    //---- Public Methods ----
    /**
     * Opens the combo box
     * @method closeCombo
     */
    @Method()
    closeCombo() {
        this.isOpen = false;
    }

    /**
     * Opens the combo box
     * @method openCombo
     */
    @Method()
    openCombo() {
        this.isOpen = true;
    }

    //---- Events and handlers ----
    /**
     * Clear the current content inside the the text input
     * @method onClearClick
     */
    onClearClick() {
        this.value = '';
    }

    /**
     * Opens the combo box when clicked
     * @method onComboClick
     */
    onComboClick() {
        this.openCombo();
    }

    //-- Emitted --
    // When field is blurred
    @Event({
        eventName: 'ketchupComboUpdated',
        composed: true,
        cancelable: false,
        bubbles: true
    })
    inputBlur: EventEmitter;

    onComboUpdated(event: UIEvent & {target: HTMLInputElement}) {
        const { target } = event;
        this.inputBlur.emit({
            newValue: target.value,
            oldValue: this.value,
        });
        this.value = target.value;
    }

    //---- Rendering functions ----
    render() {
        const containerClass = this.baseClass + '__container';

        return (
            <div class={containerClass + (this.isClearable ? ' ' + containerClass + '--clearable' : '')}>
                <span
                    class={this.baseClass + '__current-value'}
                    onClick={this.onComboClick.bind(this)}
                >
                    {this.value}
                    <svg
                        class={this.baseClass + '__chevron' + (this.isOpen ? ' ' + this.baseClass + '__chevron--open' : '')}
                        viewBox="0 0 24 24">
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                </span>
                {this.isClearable ?
                    <button
                        aria-label="Close"
                        class={this.baseClass + '__clear'}
                        role="button"
                        onClick={this.onClearClick.bind(this)}>
                        <svg viewBox="0 0 24 24">
                            <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                        </svg>
                    </button>:
                    null
                }
            </div>
        );
    }
}