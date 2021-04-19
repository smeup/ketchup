import { h, VNode } from '@stencil/core';
import { FImage } from '../../f-components/f-image/f-image';
import type { GenericObject } from '../../types/GenericTypes';
/**
 * This function returns a list of components.
 * @param {GenericObject[]} compArray - Components' props.
 * @param {string} compType - Components' type.
 * @returns {JSX.Element[]} List of components.
 */
export function compList(
    compArray: GenericObject[] | string[] | HTMLElement[],
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
            case 'slot':
                list.push(<slot></slot>);
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
/**
 * Called by the layouts method to return the header bar of the dialog.
 * @param {string} title - Title of the dialog.
 * @returns {VNode} Virtual node of the dialog's header bar.
 */
export function dialogHeader(title: string): VNode {
    return (
        <div id="drag-handle" class="header-bar">
            {title ? <div class="dialog-title">{title}</div> : null}
            <FImage
                sizeX="2em"
                sizeY="2em"
                resource="clear"
                id="dialog-close"
            />
        </div>
    );
}
/**
 * Creates the bar used to expand/collapse the card.
 * @returns {VNode} Expansion bar virtual node.
 */
export function collapsibleBar(): VNode {
    return (
        <div class="collapsible-trigger">
            <kup-button
                id="expand-action"
                toggable
                iconOff="keyboard_arrow_down"
                icon="keyboard_arrow_up"
            ></kup-button>
        </div>
    );
}
