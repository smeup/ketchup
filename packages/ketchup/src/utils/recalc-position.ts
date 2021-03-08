// Element repositioning function - it starts when "el" class list gets updated and the class "dynamic-position-active" is found
//
// Arguments:
//
// - el       = element to reposition
// - anchorEl = "el" position will be anchored to this element
// - margin   = "el" distance from its parent in pixels
// - above    = when true "el" will be always placed above its wrapper
// - right    = when true "el" will be always placed on the right of its wrapper
//
declare global {
    interface HTMLElement {
        anchorEl: HTMLElement;
    }
}

export function positionRecalc(
    el: any,
    anchorEl: HTMLElement,
    margin?: number,
    above?: boolean,
    right?: boolean
) {
    el.classList.add('dynamic-position');
    anchorEl.classList.add('dynamic-position-anchor');
    if (!margin) {
        margin = 0;
    }
    el['recalcPosition'] = {
        ['anchor']: anchorEl,
        ['margin']: margin ? margin : 0,
        ['above']: above ? true : false,
        ['right']: right ? true : false,
    };

    var mutObserver = new MutationObserver(function (mutations) {
        let target: any = mutations[0].target;
        if (target.classList.contains('dynamic-position-active')) {
            runRecalc(el);
        }
    });
    mutObserver.observe(el, {
        attributes: true,
        attributeFilter: ['class'],
    });
}

export async function runRecalc(el: HTMLElement) {
    if (!el.isConnected || !el.classList.contains('dynamic-position-active')) {
        return;
    }
    let offsetH: number = el.clientHeight;
    let offsetW: number = el.clientWidth;
    const rect = el['recalcPosition']['anchor'].getBoundingClientRect();
    el.style.top = ``;
    el.style.right = ``;
    el.style.bottom = ``;
    el.style.left = ``;
    if (
        window.innerHeight - rect.bottom < offsetH ||
        el['recalcPosition']['above']
    ) {
        el.style.bottom = `${
            window.innerHeight - rect.top + el['recalcPosition']['margin']
        }px`;
    } else {
        el.style.top = `${rect.bottom + el['recalcPosition']['margin']}px`;
    }
    if (
        window.innerWidth - rect.left < offsetW ||
        el['recalcPosition']['right']
    ) {
        //01-27-2021 Experimental: subtracting from window.innerWidth the scrollbar's width - if it's too large something's wrong so it will be set to 0
        let scrollbarWidth =
            window.innerWidth - document.documentElement.offsetWidth;
        if (scrollbarWidth > 30) {
            scrollbarWidth = 0;
        }
        el.style.right = `${window.innerWidth - scrollbarWidth - rect.right}px`;
    } else {
        el.style.left = `${rect.left}px`;
    }
    setTimeout(runRecalc, 10, el);
}
