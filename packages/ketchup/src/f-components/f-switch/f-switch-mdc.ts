import { MDCSwitch } from '@material/switch';
import { MDCFormField } from '@material/form-field';

/**
 * Instantiates Material Design switch component.
 * @param el - Must be the f-component wrapper (.f-switch--wrapper)
 * @see https://material-components.github.io/material-components-web-catalog/#/component/switch
 */
export function FSwitchMDC(el: HTMLElement): void {
    const component = MDCSwitch.attachTo(el.querySelector('.mdc-switch'));
    const formField = MDCFormField.attachTo(
        el.querySelector('.mdc-form-field')
    );
    formField.input = component;
}
