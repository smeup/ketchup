import { h, VNode } from '@stencil/core';
import { FButton } from '../../../f-components/f-button/f-button';
import { FButtonStyling } from '../../../f-components/f-button/f-button-declarations';
import { KupCard } from '../kup-card';
import { KupCardBuiltInMessageBoxOptions } from '../kup-card-declarations';

export function prepareMessageBox(component: KupCard): VNode[] {
    const options = component.data.options as KupCardBuiltInMessageBoxOptions;
    const buttonsExist = !!(options.cancelCb || options.confirmCb);
    return (
        <div class="message-box">
            {options.text ? <div class="text">{options.text}</div> : null}
            {buttonsExist ? (
                <div class="button-wrapper">
                    {options.cancelCb ? (
                        <FButton
                            icon="clear"
                            label="Cancel"
                            onClick={options.cancelCb}
                            styling={FButtonStyling.FLAT}
                        ></FButton>
                    ) : null}
                    {options.confirmCb ? (
                        <FButton
                            icon="check"
                            label="Confirm"
                            onClick={options.confirmCb}
                        ></FButton>
                    ) : null}
                </div>
            ) : null}
        </div>
    );
}
