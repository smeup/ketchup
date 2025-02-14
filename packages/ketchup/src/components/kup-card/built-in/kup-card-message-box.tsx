import { h, VNode } from '@stencil/core';
import { FButton } from '../../../f-components/f-button/f-button';
import { FButtonStyling } from '../../../f-components/f-button/f-button-declarations';
import { KupLanguageGeneric } from '../../../managers/kup-language/kup-language-declarations';
import { KupDom } from '../../../managers/kup-manager/kup-manager-declarations';
import { KupCard } from '../kup-card';
import { KupCardBuiltInMessageBoxOptions } from '../kup-card-declarations';

const dom: KupDom = document.documentElement as KupDom;

export function prepareMessageBox(component: KupCard): VNode[] {
    const options = component.data.options as KupCardBuiltInMessageBoxOptions;
    const confirmCancelButtonsExist = !!(options.cancelCb || options.confirmCb);
    return (
        <div class="message-box">
            {options.text ? <div class="text">{options.text}</div> : null}
            {confirmCancelButtonsExist && (
                <div class="button-wrapper">
                    {options.cancelCb ? (
                        <FButton
                            icon="clear"
                            label={
                                options.cancelLabel
                                    ? options.cancelLabel
                                    : dom.ketchup.language.translate(
                                          KupLanguageGeneric.ABORT
                                      )
                            }
                            onClick={options.cancelCb}
                            styling={FButtonStyling.FLAT}
                        ></FButton>
                    ) : null}
                    {options.confirmCb ? (
                        <FButton
                            icon="check"
                            label={
                                options.confirmLabel
                                    ? options.confirmLabel
                                    : dom.ketchup.language.translate(
                                          KupLanguageGeneric.CONFIRM
                                      )
                            }
                            onClick={options.confirmCb}
                        ></FButton>
                    ) : null}
                </div>
            )}
        </div>
    );
}
