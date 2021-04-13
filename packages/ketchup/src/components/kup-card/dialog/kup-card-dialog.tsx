import { h, VNode } from '@stencil/core';
import type { KupCard } from '../kup-card';
import type { GenericObject } from '../../../types/GenericTypes';
import { FImage } from '../../../f-components/f-image/f-image';
import { compList, dialogHeader } from '../kup-card-helper';
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
    //Loop starts from 1: occurence [0] is the dialog's title
    for (let index = 1; index < textArray.length; index++) {
        const isEven: boolean = index % 2 == 0;
        divs.push(
            <span class={`text ${!isEven ? 'label' : ''}`}>
                {textArray[index]}
            </span>
        );
    }
    return (
        <div class={`dialog-layout-${component.layoutNumber} dialog-element`}>
            {dialogHeader(textArray[0])}
            <div class="section-1">{divs}</div>
        </div>
    );
}
/**
 * 2d dialog card layout, used to display information in string format and features an highlighted row on top.
 * @param {KupCard}  comp - Card component.
 * @returns {VNode} 1st standard layout virtual node.
 */
export function create2(component: KupCard): VNode {
    //Title, subtitle and description
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
    const divs: VNode[] = [];
    //Loop starts from 3: occurence [0] is the dialog's title, [1] and [2] are the highlighted strings
    for (let index = 3; index < textArray.length; index++) {
        const isEven: boolean = index % 2 == 0;
        divs.push(
            <span class={`text ${!isEven ? 'label' : ''}`}>
                {textArray[index]}
            </span>
        );
    }
    return (
        <div class={`dialog-layout-${component.layoutNumber} dialog-element`}>
            {textArray[0] ? dialogHeader(textArray[0]) : dialogHeader('')}
            {textArray[1] && textArray[2] ? (
                <div class="section-1">
                    <div class="text label">{textArray[1]}</div>
                    <div class="text ">{textArray[2]}</div>
                </div>
            ) : null}
            <div class="section-2">{divs}</div>
        </div>
    );
}
/**
 * 3rd dialog card layout, buttons and text lines, used for debug window.
 * @param {KupCard}  comp - Card component.
 * @returns {VNode} 1st standard layout virtual node.
 */
export function create3(component: KupCard): VNode {
    //Action buttons
    const buttonArray: GenericObject[] = component.data['button']
        ? component.data['button']
        : [];
    //Combobox list
    const comboboxArray: GenericObject[] = component.data['combobox']
        ? component.data['combobox']
        : [];
    //Slot list
    const slots: Array<HTMLElement> = Array.prototype.slice.call(
        component.rootElement.children,
        0
    );
    //Textfield list
    const textfieldArray: GenericObject[] = component.data['textfield']
        ? component.data['textfield']
        : [];
    return (
        <div class={`dialog-layout-${component.layoutNumber}`}>
            <div>
                {buttonArray.length > 0 || textfieldArray.length > 0 ? (
                    <div class="section-1">
                        <FImage
                            id="drag-handle"
                            resource="drag_handle"
                            sizeX="32px"
                            sizeY="32px"
                        />
                        {compList(buttonArray, 'button')}
                        {compList(textfieldArray, 'textfield')}
                        {compList(comboboxArray, 'combobox')}
                    </div>
                ) : null}
                {slots.length > 0 ? (
                    <div class="section-2">{compList(slots, 'slot')}</div>
                ) : null}
            </div>
        </div>
    );
}
