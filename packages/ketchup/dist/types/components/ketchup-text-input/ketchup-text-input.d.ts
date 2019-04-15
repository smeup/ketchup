import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
import { KetchupTextInputEvent } from './ketchup-text-input-declarations';
export declare class KetchupTextInput {
    /**
     * Marks the field as clearable, allowing an icon to delete its content
     */
    initialValue: string;
    /**
     * Marks the field as clearable, allowing an icon to delete its content
     */
    isClearable: boolean;
    /**
     * Label to describe the radio group
     */
    label: string;
    /**
     * The max length of the text field.
     * Default value copied from here: https://www.w3schools.com/tags/att_input_maxlength.asp
     */
    maxLength: number;
    value: string;
    inputEl: HTMLElement;
    textInput: HTMLInputElement;
    classInputText: string;
    componentWillLoad(): void;
    /**
     * Triggers the focus event on the input text
     * @method triggerFocus
     */
    triggerFocus(): void;
    /**
     * Clear the current content inside the the text input
     */
    onClearClick(): void;
    /**
     * Listens for keydown events to get when 'Enter' is pressed, firing a submit event.
     */
    onKeyDown(event: KeyboardEvent): void;
    /**
     * When text field loses focus (blur)
     */
    inputBlur: EventEmitter<KetchupTextInputEvent>;
    onInputBlurred(event: UIEvent & {
        target: HTMLInputElement;
    }): void;
    /**
     * When the text input gains focus
     */
    inputFocused: EventEmitter<KetchupTextInputEvent>;
    onInputFocused(event: UIEvent & {
        target: HTMLInputElement;
    }): void;
    /**
     * When a keydown enter event occurs it generates
     */
    ketchupTextInputSubmit: EventEmitter<{
        value: string;
    }>;
    /**
     * When the input text value gets updated
     */
    ketchupTextInputUpdated: EventEmitter<KetchupTextInputEvent>;
    onInputUpdated(event: UIEvent & {
        target: HTMLInputElement;
    }): void;
    render(): JSX.Element;
}
