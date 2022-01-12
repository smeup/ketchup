import { h, VNode } from '@stencil/core';
import { KupCard } from '../kup-card';
import { KupCardCSSClasses } from '../kup-card-declarations';
import { prepareCalendar } from './kup-card-calendar';
import { prepareClock } from './kup-card-clock';
import { prepareColumnDropMenu } from './kup-card-column-drop-menu';

/**
 * 1st builtin card layout, calendar view.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 1st builtin layout virtual node.
 */
export function create1(component: KupCard): VNode {
    return (
        <div
            class={`builtin-layout-${component.layoutNumber} ${KupCardCSSClasses.BUILTIN_CARD}`}
        >
            {prepareCalendar(component)}
        </div>
    );
}
/**
 * 2nd builtin card layout, clock view.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 2st builtin layout virtual node.
 */
export function create2(component: KupCard): VNode {
    return (
        <div
            class={`builtin-layout-${component.layoutNumber} ${KupCardCSSClasses.BUILTIN_CARD}`}
        >
            {prepareClock(component)}
        </div>
    );
}
/**
 * 3rd builtin card layout, column drop menu - used in data table when a column is dropped onto another one.
 * @param {KupCard} component - Card component.
 * @returns {VNode} 2st builtin layout virtual node.
 */
export function create3(component: KupCard): VNode {
    return (
        <div
            class={`builtin-layout-${component.layoutNumber} ${KupCardCSSClasses.BUILTIN_CARD}`}
        >
            {prepareColumnDropMenu(component)}
        </div>
    );
}
