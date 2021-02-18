import { MDCCheckbox } from '@material/checkbox';
import { MDCFormField } from '@material/form-field';

export function FCheckboxMDC(el: HTMLElement): void {
    const component = MDCCheckbox.attachTo(el.querySelector('.mdc-checkbox'));
    const formField = MDCFormField.attachTo(
        el.querySelector('.mdc-form-field')
    );
    formField.input = component;
}
