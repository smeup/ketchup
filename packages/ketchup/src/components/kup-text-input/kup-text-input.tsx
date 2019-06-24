import {
    Component,
    Element,
    Event,
    EventEmitter,
    Method,
    Prop,
    State,
    Watch,
    h
} from '@stencil/core';
import { KetchupTextInputEvent } from './kup-text-input-declarations';
import { generateUniqueId } from '../../utils/utils';
import { GenericObject } from "../../types/GenericTypes";

import { debounceEvent } from '../../utils/helpers';

@Component({
    tag: 'kup-text-input',
    styleUrl: 'kup-text-input.scss',
    shadow: true,
})
export class KupTextInput {
    /**
     * Marks the field as clearable, allowing an icon to delete its content
     */
    @Prop() initialValue: string = '';
    /**
     * Specify the type of input. Allowed values: password, text.
     */
    @Prop() inputType: string = 'text';
    /**
     * Marks the field as clearable, allowing an icon to delete its content
     */
    @Prop() isClearable: boolean = false;
    /**
     * Label to describe the text-input clear button group
     */
    @Prop() label: string = '';
    /**
     * The max length of the text field.
     * Default value copied from here: https://www.w3schools.com/tags/att_input_maxlength.asp
     */
    @Prop() maxLength: number = 524288;
    /**
     * Set the amount of time, in milliseconds, to wait to trigger the `ketchupTextInputUpdated` event after each keystroke.
     */
    @Prop() debounce: number = 400;
    /**
     * A generic object which can be passed to the component.
     * Once this object is set, it will always be returned inside the info field of the
     * ketchupTextInputUpdated and ketchupTextInputSubmit.
     */
    @Prop() obj?: GenericObject;

    @Watch('debounce')
    protected debounceChanged() {
        this.ketchupTextInputUpdated = debounceEvent(
            this.ketchupTextInputUpdated,
            this.debounce
        );
    }

    //-- Validating props --

    //---- Internal state ----
    @State() value: string = '';

    //-- Not reactive state --
    @Element() inputEl: HTMLElement;
    elementId = generateUniqueId('kup-input');
    textInput!: HTMLInputElement;

    //-- Constants --
    classInputText = 'kup-input-text';

    //---- Lifecycle Hooks  ----
    componentWillLoad() {
        // Sets initial value inside the element
        this.value = this.initialValue;
    }

    componentDidLoad() {
        this.debounceChanged();
    }

    //---- Public Methods ----
    /**
     * Triggers the focus event on the input text
     * @method triggerFocus
     */
    @Method()
    async triggerFocus() {
        // For focus issues, maybe have a look here
        // https://github.com/ionic-team/stencil/issues/180
        // https://github.com/ionic-team/stencil/issues/1008
        this.inputEl.focus();
        this.textInput.focus();
    }

    //---- Events and handlers ----
    /**
     * Clear the current content inside the the text input
     */
    onClearClick() {
        const oldValue = this.value;
        this.value = '';
        this.ketchupTextInputUpdated.emit({
            value: this.value,
            oldValue: oldValue,
            info: {
                obj: this.obj
            }
        });

        setTimeout(() => this.triggerFocus(), 10);
    }

    /**
     * Listens for keydown events to get when 'Enter' is pressed, firing a submit event.
     */
    onKeyDown(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.ketchupTextInputSubmit.emit({
                value: this.value,
                oldValue: this.value,
                info: {
                    obj: this.obj
                }
            });
        }
    }

    //-- Emitted --
    /**
     * When text field loses focus (blur)
     */
    @Event({
        eventName: 'ketchupTextInputBlurred',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    inputBlur: EventEmitter<KetchupTextInputEvent>;

    onInputBlurred(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.inputBlur.emit({
            value: target.value,
            oldValue: this.value,
            info: {
                obj: this.obj
            }
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
        bubbles: true,
    })
    inputFocused: EventEmitter<KetchupTextInputEvent>;

    onInputFocused(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.inputFocused.emit({
            value: target.value,
            oldValue: this.value,
            info: {
                obj: this.obj
            }
        });
        this.value = target.value;
    }

    /**
     * When a keydown enter event occurs it generates
     */
    @Event({
        eventName: 'ketchupTextInputSubmit',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    ketchupTextInputSubmit: EventEmitter<KetchupTextInputEvent>;

    /**
     * When the input text value gets updated
     */
    @Event({
        eventName: 'ketchupTextInputUpdated',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    ketchupTextInputUpdated: EventEmitter<KetchupTextInputEvent>;

    onInputUpdated(event: UIEvent & { target: HTMLInputElement }) {
        const { target } = event;
        this.ketchupTextInputUpdated.emit({
            value: target.value,
            oldValue: this.value,
            info: {
                obj: this.obj
            }
        });
        this.value = target.value;
    }

    //---- Rendering functions ----
    render() {
        const containerClass = this.classInputText + '__container';

        let lbl = null;
        if (this.label) {
            lbl = <label htmlFor={this.elementId}>{this.label}</label>;
        }

        return (
            <div
                class={
                    containerClass +
                    (this.isClearable
                        ? ' ' + containerClass + '--clearable'
                        : '')
                }
            >
                {lbl}
                <input
                    id={this.elementId}
                    class={
                        this.classInputText +
                        (this.isClearable
                            ? ' ' + this.classInputText + '--clearable'
                            : '')
                    }
                    maxlength={this.maxLength}
                    ref={(el) => (this.textInput = el as HTMLInputElement)}
                    tabindex="0"
                    type={this.inputType}
                    value={this.value}
                    onBlur={this.onInputBlurred.bind(this)}
                    onInput={this.onInputUpdated.bind(this)}
                    onFocus={this.onInputFocused.bind(this)}
                    onKeyDown={this.onKeyDown.bind(this)}
                />
                {this.isClearable ? (
                    <button
                        aria-label="Close"
                        class={this.classInputText + '__clear'}
                        role="button"
                        onClick={this.onClearClick.bind(this)}
                    >
                        <svg viewBox="0 0 24 24">
                            <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                        </svg>
                    </button>
                ) : null}
            </div>
        );
    }
}
