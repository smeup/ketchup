import { h, VNode } from '@stencil/core';
import type { KupCard } from '../kup-card';
/**
 * 1st dialog card layout, used to display information in string format.
 * @param {KupCard}  comp - Card component.
 * @returns {VNode} 1st standard layout virtual node.
 */
export function create1(component: KupCard): VNode {
    //Title, subtitle and description
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    const divs: VNode[] = [];
    //For loop starting from 1: occurence [0] is the dialog's title
    for (let index = 1; index < textArray.length; index++) {
        const isEven: boolean = index % 2 == 0;
        divs.push(
            <span class={`text ${isEven ? 'label' : ''}`}>
                {textArray[index]}
            </span>
        );
    }
    return (
        <div class={`dialog-layout-${component.layoutNumber}`}>
            <div class="section-1">
                {textArray[0] ? (
                    <div id="dialog-title">{textArray[0]}</div>
                ) : null}
                <kup-button icon="clear" id="dialog-close"></kup-button>
            </div>
            <div class="section-2">{divs}</div>
        </div>
    );
}
