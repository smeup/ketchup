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

    //-- Not reactive state --
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
     * @method triggerFocus
     */
    @Method()
    triggerFocus() {
        // For focus issues, maybe have a look here
        // https://github.com/ionic-team/stencil/issues/180
        // https://github.com/ionic-team/stencil/issues/1008
        this.inputEl.focus();
        this.textInput.focus();
    }

    //---- Events and handlers ----
    /**
     * Clear the current content inside the the text input
     * @method onClearClick
     */
    onClearClick() {
        this.value = '';
        setTimeout(() => this.triggerFocus(), 10);
    }

    //-- Emitted --
    /**
     * When text field loses focus (blur)
     */
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
            value: target.value,
            oldValue: this.value,
        });
        this.value = target.value;
    }

    /**
     * When the text input gains focus
     */
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
            value: target.value,
            oldValue: this.value,
        });
        this.value = target.value;
    }

    /**
     * When the input text value gets updated
     */
    @Event({
        eventName: 'ketchupTextInputUpdated',
        composed: true,
        cancelable: false,
        bubbles: true
    })
    ketchupTextInputUpdated: EventEmitter;

    onInputUpdated(event: UIEvent & {target: HTMLInputElement}) {
        const { target } = event;
        this.ketchupTextInputUpdated.emit({
            value: target.value,
            oldValue: this.value,
        });
        this.value = target.value;
    }

    //---- Rendering functions ----
    render() {
        const containerClass = this.classInputText + '__container';

        return (
            <div class={containerClass + (this.isClearable ? ' ' + containerClass + '--clearable' : '')}>
                <input
                    class={this.classInputText + (this.isClearable ? ' ' + this.classInputText + '--clearable' : '')}
                    maxlength={this.maxLength}
                    ref={(el) => this.textInput = el as HTMLInputElement}
                    tabindex="0"
                    value={this.value}
                    onBlur={this.onInputBlurred.bind(this)}
                    onInput={this.onInputUpdated.bind(this)}
                    onFocus={this.onInputFocused.bind(this)}
                />
                {this.isClearable ?
                    <button
                        aria-label="Close"
                        class={this.classInputText + '__clear'}
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