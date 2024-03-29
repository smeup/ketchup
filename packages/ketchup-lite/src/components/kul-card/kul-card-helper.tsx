import { h, VNode } from '@stencil/core';
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
            case 'autocomplete':
                list.push(
                    <kul-autocomplete
                        {...(compArray as GenericObject[])[index]}
                    />
                );
                break;
            case 'button':
                list.push(
                    <kul-button {...(compArray as GenericObject[])[index]} />
                );
                break;
            case 'checkbox':
                list.push(
                    <kul-checkbox {...(compArray as GenericObject[])[index]} />
                );
                break;
            case 'combobox':
                list.push(
                    <kul-combobox {...(compArray as GenericObject[])[index]} />
                );
                break;
            case 'datepicker':
                list.push(
                    <kul-date-picker
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
                    <kul-text-field
                        {...(compArray as GenericObject[])[index]}
                    />
                );
                break;
            case 'timepicker':
                list.push(
                    <kul-time-picker
                        {...(compArray as GenericObject[])[index]}
                    />
                );
                break;
        }
    }
    return list;
}
