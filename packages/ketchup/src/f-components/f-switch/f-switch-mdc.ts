import { MDCSwitch } from '@material/switch';
import { MDCFormField } from '@material/form-field';

export function FSwitchMDC(el: HTMLElement): void {
    const component = MDCSwitch.attachTo(el.querySelector('.mdc-switch'));
    const formField = MDCFormField.attachTo(
        el.querySelector('.mdc-form-field')
    );
    formField.input = component;
}
