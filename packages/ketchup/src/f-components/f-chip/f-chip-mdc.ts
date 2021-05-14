import { MDCChipSet } from '@material/chips/deprecated/chip-set';

/**
 * Instantiates Material Design chip component.
 * @param el - Must be the f-component wrapper (.f-chip--wrapper)
 * @see https://material-components.github.io/material-components-web-catalog/#/component/chips
 */
export function FChipMDC(el: HTMLElement): void {
    const chipSetEl = el.querySelector('.mdc-chip-set');
    if (chipSetEl) {
        new MDCChipSet(chipSetEl);
    }
}
