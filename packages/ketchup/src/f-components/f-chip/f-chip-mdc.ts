import { MDCChipSet } from '@material/chips';

export function FChipMDC(el: HTMLElement): void {
    const chipSetEl = el.querySelector('.mdc-chip-set');
    if (chipSetEl) {
        new MDCChipSet(chipSetEl);
    }
}
