import { h, VNode } from '@stencil/core';
import type { KupCard } from '../kup-card';
import type { KupDom } from '../../../utils/kup-manager/kup-manager-declarations';
import { compList } from '../kup-card-helper';

const dom: KupDom = document.documentElement as KupDom;
/**
 * 1st free card layout, only slots.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 1st standard layout virtual node.
 */
export function create1(component: KupCard): VNode {
    //Slot list
    const slots: Array<HTMLElement> = Array.prototype.slice.call(
        component.rootElement.children,
        0
    );
    return (
        <div class={`free-layout-${component.layoutNumber}`}>
            {slots.length > 0 ? compList(slots, 'slot') : null}
        </div>
    );
}
