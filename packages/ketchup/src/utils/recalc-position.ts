// Element repositioning function on scroll and/or resize
//
// Arguments:
//
// - el       = element to reposition
// - anchorEl = "el" position will be anchored to this element
// - margin (As of February 2020 this is disabled, it can no longer be set and it defaults to 0. Still kept in code for potential future implementations)  = "el" distance from its parent in pixels
//
export function positionRecalc(el: HTMLElement, anchorEl: HTMLElement) {
    el.classList.add('dynamic-position');
    anchorEl.classList.add('dynamic-position-anchor');
    var positionEl = function(el: HTMLElement, anchorEl: HTMLElement) {
        let offsetH: number = el.clientHeight;
        let offsetW: number = el.clientWidth;
        let margin: number = 0;
        const rect = anchorEl.getBoundingClientRect();

        el.style.top = ``;
        el.style.right = ``;
        el.style.bottom = ``;
        el.style.left = ``;

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
    };
    positionEl(el, anchorEl);
    document.addEventListener('scroll', function() {
        positionEl(el, anchorEl);
    });
    document.addEventListener('resize', function() {
        positionEl(el, anchorEl);
    });
}
