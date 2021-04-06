import { h, VNode } from '@stencil/core';
import { FImage } from '../../../f-components/f-image/f-image';
import { GenericObject } from '../../../types/GenericTypes';
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
            {prepHeader(textArray[0])}
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
            {textArray[0] ? prepHeader(textArray[0]) : prepHeader('')}
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
    //String list
    const textArray: string[] = component.data['text']
        ? component.data['text']
        : [];
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
                {textArray.length > 0 ? (
                    <div class="section-2">{compList(textArray, 'text')}</div>
                ) : null}
            </div>
        </div>
    );
}
/**
 * Called by the layouts method to return the header bar of the dialog.
 * @param {string} title - Title of the dialog.
 * @returns {VNode} Virtual node of the dialog's header bar.
 */
function prepHeader(title: string): VNode {
    return (
        <div id="drag-handle" class="header-bar">
            {title ? <div class="dialog-title">{title}</div> : null}
            <kup-button icon="clear" class="dialog-close"></kup-button>
        </div>
    );
}
/**
 * This function returns a list of components.
 * @param {GenericObject[]} compArray - Components' props.
 * @param {string} compType - Components' type.
 * @returns {VNode[]} List of components.
 */
function compList(
    compArray: GenericObject[] | string[],
    compType: string
): VNode[] {
    let list: VNode[] = [];
    for (let index = 0; index < compArray.length; index++) {
        if (
            typeof compArray[0] !== 'string' &&
            !(compArray as GenericObject[])[index].id
        ) {
            (compArray as GenericObject[])[index]['id'] = compType + index;
        }
        switch (compType) {
            case 'button':
                list.push(
                    <kup-button {...(compArray as GenericObject[])[index]} />
                );
                break;
            case 'checkbox':
                list.push(
                    <kup-checkbox {...(compArray as GenericObject[])[index]} />
                );
                break;
            case 'combobox':
                list.push(
                    <kup-combobox {...(compArray as GenericObject[])[index]} />
                );
                break;
            case 'datepicker':
                list.push(
                    <kup-date-picker
                        {...(compArray as GenericObject[])[index]}
                    />
                );
                break;
            case 'text':
                list.push(
                    <div class="text"> {(compArray as string[])[index]}</div>
                );
                break;
            case 'textfield':
                list.push(
                    <kup-text-field
                        {...(compArray as GenericObject[])[index]}
                    />
                );
                break;
            case 'timepicker':
                list.push(
                    <kup-time-picker
                        {...(compArray as GenericObject[])[index]}
                    />
                );
                break;
        }
    }
    return list;
}
