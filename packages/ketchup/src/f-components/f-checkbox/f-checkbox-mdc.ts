import { MDCCheckbox } from '@material/checkbox';
import { MDCFormField } from '@material/form-field';

/**
 * Instantiates Material Design checkbox component.
 * @param el - Must be the f-component wrapper (.f-checkbox--wrapper)
 * @see https://material-components.github.io/material-components-web-catalog/#/component/checkbox
 */
export function FCheckboxMDC(el: HTMLElement): void {
    const component = MDCCheckbox.attachTo(el.querySelector('.mdc-checkbox'));
    const formField = MDCFormField.attachTo(
        el.querySelector('.mdc-form-field')
    );
    formField.input = component;
}
