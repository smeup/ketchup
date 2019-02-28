import {
    Component,
    Element,
    Event,
    EventEmitter,
    Method,
    Prop,
    State,
    //Watch
} from '@stencil/core'

@Component({
    tag: 'ketchup-text-input',
    styleUrl: 'ketchup-text-input.scss',
    shadow: true
})
export class KetchupTextInput {
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

    //-- not reactive --
    @Element() inputEl: HTMLElement;
    textInput!: HTMLInputElement;

    //-- Constants --
    classInputText = 'ketchup-input-text';

    //---- Lifecycle Hooks  ----
    componentWillLoad() {
        // Sets initial value inside the element
        this.value = this.initialValue;
    }

    //---- Public Methods ----
    /**
     * Triggers the focus event on the input text
     */
    @Method()
    triggerFocus() {
        console.log("focus", this.textInput, this.inputEl);
        this.textInput.focus();
    }

    //---- Events and handlers ----

    //-- Emitted --
    // When field is blurred
    @Event({
        eventName: 'ketchupTextInputBlurred',
        composed: true,
        cancelable: false,
        bubbles: true
    })
    inputBlur: EventEmitter;

    onInputBlurred(event: UIEvent & {target: HTMLInputElement}) {
        const { target } = event;
        this.inputBlur.emit({
            newValue: target.value,
            oldValue: this.value,
        });
        this.value = target.value;
    }

    // Component focus handler
    @Event({
        eventName: 'ketchupTextInputFocused',
        composed: true,
        cancelable: false,
        bubbles: true
    })
    inputFocused: EventEmitter;

    onInputFocused(event: UIEvent & {target: HTMLInputElement}) {
        const { target } = event;
        this.inputFocused.emit({
            newValue: target.value,
            oldValue: this.value,
        });
        this.value = target.value;
    }

    // Component updated handler
    @Event({
        eventName: 'ketchupTextInputUpdated',
        composed: true,
        cancelable: false,
        bubbles: true
    })
    inputUpdated: EventEmitter;

    onInputUpdated(event: UIEvent & {target: HTMLInputElement}) {
        const { target } = event;
        this.inputUpdated.emit({
            newValue: target.value,
            oldValue: this.value,
        });
        this.value = target.value;
    }

    //---- Rendering functions ----
    render() {
        const containerClass = this.classInputText + '__container';

        return (
            <div class={containerClass + this.isClearable ? ' ' + containerClass + '--clearable' : ''}>
                <input
                    class={this.classInputText}
                    maxlength={this.maxLength}
                    ref={(el) => this.textInput = el as HTMLInputElement}
                    tabindex="0"
                    value={this.value}
                    onBlur={this.onInputBlurred.bind(this)}
                    onInput={this.onInputUpdated.bind(this)}
                    onFocus={this.onInputFocused.bind(this)}
                />
                {this.isClearable ?
                    <button role="button" aria-label="Close">
                        <svg viewBox="0 0 24 24">
                            <path fill="#000000" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                        </svg>
                    </button>:
                    null
                }
            </div>
        );
    }
}