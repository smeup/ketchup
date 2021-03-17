// Element repositioning function - it starts when "el" class list gets updated and the class "dynamic-position-active" is found
//
// Arguments:
//
// - el       = element to reposition
// - anchorEl = "el" position will be anchored to this element
// - margin   = "el" distance from its parent in pixels
// - above    = when true "el" will be always placed above its wrapper
// - right    = when true "el" will be always placed on the right of its wrapper

import type { KupDom } from '../kup-manager/kup-manager-declarations';
import { DynamicallyPositionedElement } from './dynamic-position-declarations';

const dom: KupDom = document.documentElement as KupDom;

export class DynamicPosition {
    managedElements: Array<DynamicallyPositionedElement> = [];

    setup(
        el: DynamicallyPositionedElement,
        anchorEl: HTMLElement,
        margin?: number,
        above?: boolean,
        right?: boolean
    ) {
        el.classList.add('dynamic-position');
        anchorEl.classList.add('dynamic-position-anchor');
        el.dynamicPosition = {
            anchor: anchorEl,
            margin: margin ? margin : 0,
            above: above ? true : false,
            right: right ? true : false,
        };

        const mutObserver: MutationObserver = new MutationObserver(function (
            mutations
        ) {
            const target: Node = mutations[0].target;
            if (
                (target as HTMLElement).classList.contains(
                    'dynamic-position-active'
                )
            ) {
                dom.ketchup.dynamicPosition.run(el);
            }
        });
        mutObserver.observe(el, {
            attributes: true,
            attributeFilter: ['class'],
        });
        this.managedElements.push(el);
    }

    start(el: DynamicallyPositionedElement) {
        el.classList.add('dynamic-position-active');
    }

    stop(el: DynamicallyPositionedElement) {
        el.classList.remove('dynamic-position-active');
    }

    run(el: DynamicallyPositionedElement) {
        if (
            !el.isConnected ||
            !el.classList.contains('dynamic-position-active')
        ) {
            return;
        }
        let offsetH: number = el.clientHeight;
        let offsetW: number = el.clientWidth;
        const rect: DOMRect = el.dynamicPosition.anchor.getBoundingClientRect();
        el.style.top = '';
        el.style.right = '';
        el.style.bottom = '';
        el.style.left = '';
        if (
            window.innerHeight - rect.bottom < offsetH ||
            el.dynamicPosition.above
        ) {
            el.style.bottom = `${
                window.innerHeight - rect.top + el.dynamicPosition.margin
            }px`;
        } else {
            el.style.top = `${rect.bottom + el.dynamicPosition.margin}px`;
        }
        if (
            window.innerWidth - rect.left < offsetW ||
            el.dynamicPosition.right
        ) {
            //01-27-2021 Experimental: subtracting from window.innerWidth the scrollbar's width - if it's too large something's wrong so it will be set to 0
            let scrollbarWidth =
                window.innerWidth - document.documentElement.offsetWidth;
            if (scrollbarWidth > 30) {
                scrollbarWidth = 0;
            }
            el.style.right = `${
                window.innerWidth - scrollbarWidth - rect.right
            }px`;
        } else {
            el.style.left = `${rect.left}px`;
        }
        setTimeout(dom.ketchup.dynamicPosition.run, 10, el);
    }
}
