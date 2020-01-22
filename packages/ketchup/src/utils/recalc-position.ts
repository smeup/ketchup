// Element repositioning function
//
// Arguments:
//
// - el       = element to reposition
// - anchorEl = "el" position will be anchored to this element
// - margin   = "el" distance from its parent in pixels
//
export class positionRecalc {
    positionRecalcSetup(el: HTMLElement) {
        el.classList.add('dynamic-position');
    }

    setPosition(el: HTMLElement, anchorEl: HTMLElement, margin: number = 0) {
        let offsetH: number = el.clientHeight;
        let offsetW: number = el.clientWidth;
        const rect = anchorEl.getBoundingClientRect();

        if (window.innerHeight - rect.bottom < offsetH) {
            el.style.bottom = `${window.innerHeight - rect.top + margin}px`;
        } else {
            el.style.top = `${rect.bottom + margin}px`;
        }
        if (window.innerWidth - rect.left < offsetW) {
            el.style.right = `${window.innerWidth - rect.right}px`;
        } else {
            el.style.left = `${rect.left}px`;
        }
    }
}
