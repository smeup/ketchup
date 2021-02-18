import { MDCRipple } from '@material/ripple';
import { MDCIconButtonToggle } from '@material/icon-button';

export function FButtonMDC(el: HTMLElement): void {
    const button = el.querySelector('button');
    const ripple = MDCRipple.attachTo(button);
    if (button.classList.contains('mdc-icon-button')) {
        ripple.unbounded = true;
        if (button.classList.contains('toggable')) {
            new MDCIconButtonToggle(button);
        }
    }
}
