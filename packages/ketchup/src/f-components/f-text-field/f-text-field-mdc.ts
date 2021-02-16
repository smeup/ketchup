import {
    MDCTextField,
    MDCTextFieldCharacterCounter,
    MDCTextFieldHelperText,
    MDCTextFieldIcon,
} from '@material/textfield';
import { MDCFormField } from '@material/form-field';

export function FTextFieldMDC(el: HTMLElement): void {
    const component = new MDCTextField(el.querySelector('.mdc-text-field'));
    const form: HTMLElement = el.querySelector('.mdc-form-field');
    const helper: HTMLElement = el.querySelector('.mdc-text-field-helper-text');
    const counter: HTMLElement = el.querySelector(
        '.mdc-text-field-character-counter'
    );
    const icon: HTMLElement = el.querySelector('.mdc-text-field-icon');
    if (form) {
        const formField = MDCFormField.attachTo(form);
        if (formField) {
            formField.input = component;
        }
    }
    if (helper) {
        new MDCTextFieldHelperText(helper);
    }
    if (counter) {
        new MDCTextFieldCharacterCounter(counter);
    }
    if (icon) {
        new MDCTextFieldIcon(icon);
    }
}
