import { h, VNode } from '@stencil/core';
import { FButton } from '../../../f-components/f-button/f-button';
import { FButtonStyling } from '../../../f-components/f-button/f-button-declarations';
import { KupDom } from '../../../managers/kup-manager/kup-manager-declarations';
import { KupCard } from '../kup-card';
import { KupCardFormOptions } from '../kup-card-declarations';

const dom: KupDom = document.documentElement as KupDom;

export function prepareForm(component: KupCard): VNode[] {
    const options = component.data.options as KupCardFormOptions;
    return [
        <kup-form></kup-form>,
        <div class="button-wrapper">
            <FButton icon="clear" label="Cancel" styling={FButtonStyling.FLAT}></FButton>
            <FButton icon="check" label="Confirm"></FButton>
        </div>,
    ];
}
