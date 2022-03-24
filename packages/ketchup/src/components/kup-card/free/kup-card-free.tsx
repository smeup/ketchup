import { h, VNode } from '@stencil/core';
import type { KupCard } from '../kup-card';
import { compList } from '../kup-card-helper';
/**
 * 1st free card layout, dropdown menu look.
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
/**
 * 2nd free card layout, dropdown menu look with no padding.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 1st standard layout virtual node.
 */
export function create2(component: KupCard): VNode {
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
