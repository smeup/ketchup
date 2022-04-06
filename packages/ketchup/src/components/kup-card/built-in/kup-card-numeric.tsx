import { h, JSX } from '@stencil/core';
import { KupCard } from '../kup-card';
import { FButton } from '../../../f-components/f-button/f-button';
import {
    FButtonProps,
    FButtonStyling,
} from '../../../f-components/f-button/f-button-declarations';
import { KupDom } from '../../../managers/kup-manager/kup-manager-declarations';
import {
    KupCardBuiltInNumeric,
    KupCardBuiltInNumericOptions,
} from '../kup-card-declarations';
import { KupObj } from '../../../managers/kup-objects/kup-objects-declarations';

const dom: KupDom = document.documentElement as KupDom;
const maximumFractionDigits: number = 14;

export function prepareNumeric(component: KupCard) {
    const el = component.rootElement as KupCardBuiltInNumeric;
    if (!el.kupData)
        el.kupData = {
            value: null,
            localeValue: '',
        };

    let decimals = false;
    let negative = false;
    const options = getOptions(component);

    if (options.resetStatus) {
        el.kupData = {
            value: null,
            localeValue: '',
        };
        const obj = options.initialValue as KupObj;
        if (options.initialValue) {
            if (obj && obj.k) el.kupData.value = obj.k;
            else el.kupData.value = options.initialValue.toString();
            el.kupData.localeValue = dom.ketchup.math.numbers.toLocaleString(
                el.kupData.value
            );
        }
        options.resetStatus = false;
    }
    if (options.negative) negative = true;
    if (options.decimals) decimals = true;

    const clearButtonProp: FButtonProps = {
        icon: 'cancel',
        onClick: () => clearValue(component),
    };
    const saveButtonProp: FButtonProps = {
        icon: 'save',
        onClick: () => saveValue(component),
    };

    const decChar = getDecimalChar();

    return (
        <table>
            <tr>
                <td colSpan={3}>
                    <div class="value">{el.kupData.localeValue}</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div
                        class="number"
                        onClick={() => setValue(component, '1')}
                    >
                        1
                    </div>
                </td>
                <td>
                    <div
                        class="number"
                        onClick={() => setValue(component, '2')}
                    >
                        2
                    </div>
                </td>
                <td>
                    <div
                        class="number"
                        onClick={() => setValue(component, '3')}
                    >
                        3
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div
                        class="number"
                        onClick={() => setValue(component, '4')}
                    >
                        4
                    </div>
                </td>
                <td>
                    <div
                        class="number"
                        onClick={() => setValue(component, '5')}
                    >
                        5
                    </div>
                </td>
                <td>
                    <div
                        class="number"
                        onClick={() => setValue(component, '6')}
                    >
                        6
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div
                        class="number"
                        onClick={() => setValue(component, '7')}
                    >
                        7
                    </div>
                </td>
                <td>
                    <div
                        class="number"
                        onClick={() => setValue(component, '8')}
                    >
                        8
                    </div>
                </td>
                <td>
                    <div
                        class="number"
                        onClick={() => setValue(component, '9')}
                    >
                        9
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    {negative
                        ? [
                              <div
                                  class="number"
                                  onClick={() => setSign(component)}
                              >
                                  -
                              </div>,
                          ]
                        : []}
                </td>
                <td>
                    <div
                        class="number"
                        onClick={() => setValue(component, '0')}
                    >
                        0
                    </div>
                </td>
                <td>
                    {decimals
                        ? [
                              <div
                                  class="number"
                                  onClick={() => setValue(component, '.')}
                              >
                                  {decChar}
                              </div>,
                          ]
                        : []}
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <FButton {...clearButtonProp} />
                </td>
                <td>
                    <FButton {...saveButtonProp} />
                </td>
            </tr>
        </table>
    );
}

function getOptions(component: KupCard): KupCardBuiltInNumericOptions {
    if (component.data.options)
        return component.data.options as KupCardBuiltInNumericOptions;
    else return { resetStatus: false };
}

function setSign(component: KupCard) {
    const el = component.rootElement as KupCardBuiltInNumeric;
    let strVal = el.kupData.value ? el.kupData.value : '0';
    if (strVal.startsWith('-')) return;
    strVal = '-' + strVal;
    el.kupData.value = strVal;
    el.kupData.localeValue = dom.ketchup.math.numbers.toLocaleString(strVal);
    component.refresh();
}

function setValue(component: KupCard, value: string) {
    const options = getOptions(component);
    const el = component.rootElement as KupCardBuiltInNumeric;
    const decChar = '.';
    let strVal = el.kupData.value ? el.kupData.value.toString() : '0';

    // if the first value is 0 and the character you want to insert is not a comma, I clear the field.
    if (strVal == '0' && value != decChar) {
        strVal = '';
    }
    // if I have already entered a decimal sign I stop.
    if (value == decChar && strVal.includes(decChar)) return;
    // if the text field contains the maximum number entered, excluding the comma, I stop.
    if (
        options.maxLength &&
        strVal.replace(decChar, '').length == options.maxLength
    )
        return;
    // if a maximum number of integers is required, and I don't have the comma, I check to be right with the values.
    if (
        options.maxIntegers &&
        value != decChar &&
        !strVal.includes(decChar) &&
        strVal.length == options.maxIntegers
    )
        return;
    // if a maximum number of decimals has been requested, check where we are.
    if (
        options.maxDecimals &&
        strVal.includes(decChar) &&
        strVal.substring(strVal.indexOf(decChar) + 1).length ==
            options.maxDecimals
    )
        return;
    // if the maximum number of decimals in JS has been reached, I stop.
    if (
        strVal.includes(decChar) &&
        strVal.substring(strVal.indexOf(decChar) + 1).length == 14
    )
        return;

    strVal += value;
    el.kupData.value = strVal;
    el.kupData.localeValue = dom.ketchup.math.numbers.toLocaleString(strVal);
    component.refresh();
}

function clearValue(component: KupCard) {
    const el = component.rootElement as KupCardBuiltInNumeric;
    el.kupData.value = null;
    el.kupData.localeValue = '';
    component.refresh();
}

function getDecimalChar() {
    return (0.1).toLocaleString(dom.ketchup.math.locale).substring(1, 2);
}

function saveValue(component: KupCard) {
    const el = component.rootElement as KupCardBuiltInNumeric;
    component.onKupClick(
        component.rootElement.id,
        el.kupData.value ? Number(el.kupData.value).toString() : ''
    );
}
