import { h, VNode } from '@stencil/core';
import { KupChipEventPayload } from 'components/kup-chip/kup-chip-declarations';
import { KupListData } from 'components/kup-list/kup-list-declarations';
import { FButtonStyling } from 'f-components/f-button/f-button-declarations';
import { FChipData } from 'f-components/f-chip/f-chip-declarations';
import {
    KupLanguageColumn,
    KupLanguageGeneric,
    KupLanguageTotals,
} from 'managers/kup-language/kup-language-declarations';
import { KupDom } from 'managers/kup-manager/kup-manager-declarations';
import { KupCard } from '../kup-card';
import { KupCardColumnDropMenuOptions } from '../kup-card-declarations';

const dom: KupDom = document.documentElement as KupDom;

export function prepareColumnDropMenu(component: KupCard) {
    const options = component.data.options as KupCardColumnDropMenuOptions;
    const chipData: FChipData[] = [];
    let list: VNode, combobox: VNode, button: VNode, chipSet: VNode;
    for (let index = 0; index < options.columns.length; index++) {
        const column = options.columns[index];
        if (
            column.visible !== false &&
            column.obj &&
            dom.ketchup.objects.isNumber(column.obj)
        ) {
            chipData.push({
                obj: column.obj,
                label: column.name,
                title: column.title,
                value: column.name,
            });
        }
    }
    const numericalColumnsExist = !!(chipData.length > 0);
    if (options.enableMerge || options.enableSort) {
        list = prepareList(options);
    }
    if (options.enableFormula) {
        combobox = prepareCombobox(options, numericalColumnsExist);
        if (numericalColumnsExist) {
            button = (
                <kup-button
                    onKup-button-click={() => applyFormula(component)}
                    label={dom.ketchup.language.translate(
                        KupLanguageTotals.CALCULATE
                    )}
                    styling={FButtonStyling.OUTLINED}
                ></kup-button>
            );
            chipSet = (
                <div class="sub-chip">
                    <kup-chip
                        data={chipData}
                        onKup-chip-click={(
                            e: CustomEvent<KupChipEventPayload>
                        ) => typeColumn(e, component)}
                    ></kup-chip>
                </div>
            );
        }
    }

    return [list, combobox, button, chipSet];
}

function prepareList(options: KupCardColumnDropMenuOptions): VNode {
    const listData: KupListData[] = [];

    if (options.enableMerge) {
        listData.push({
            text: dom.ketchup.language.translate(KupLanguageGeneric.MERGE),
            value: KupLanguageGeneric.MERGE,
            icon: 'library_add',
        });
    }
    if (options.enableSort) {
        listData.push({
            text: dom.ketchup.language.translate(KupLanguageGeneric.MOVE),
            value: KupLanguageGeneric.MOVE,
            icon: 'swap_horiz',
        });
    }

    return listData.length > 0 ? (
        <kup-list data={listData} showIcons={true}></kup-list>
    ) : null;
}

function prepareCombobox(
    options: KupCardColumnDropMenuOptions,
    numericalColumnsExist: boolean
): VNode {
    const comboListData: KupListData[] = [];
    const numeric: boolean =
        dom.ketchup.objects.isNumber(options.receivingColumn.obj) &&
        dom.ketchup.objects.isNumber(options.starterColumn.obj);
    if (numeric) {
        comboListData.push(
            {
                text: dom.ketchup.language.translate(KupLanguageTotals.AVERAGE),
                value: KupLanguageTotals.AVERAGE,
            },
            {
                text: dom.ketchup.language.translate(
                    KupLanguageTotals.DIFFERENCE
                ),
                value: KupLanguageTotals.DIFFERENCE,
            },
            {
                text: dom.ketchup.language.translate(KupLanguageTotals.PRODUCT),
                value: KupLanguageTotals.PRODUCT,
            },
            {
                text: dom.ketchup.language.translate(KupLanguageTotals.SUM),
                value: KupLanguageTotals.SUM,
            },
            {
                text: `[${options.starterColumn.name}] / [${options.receivingColumn.name}] * 100`,
                value: `([${options.starterColumn.name}]/[${options.receivingColumn.name}])*100`,
            },
            {
                text: `[${options.receivingColumn.name}] / [${options.starterColumn.name}] * 100`,
                value: `([${options.receivingColumn.name}]/[${options.starterColumn.name}])*100`,
            }
        );
    } else {
        comboListData.push({
            text: dom.ketchup.language.translate(KupLanguageColumn.NO_FORMULA),
            value: KupLanguageColumn.NO_FORMULA,
        });
    }
    const comboData = {
        'kup-list': {
            data: comboListData,
            selectable: numeric ? true : false,
        },
        'kup-text-field': {
            helper: !numericalColumnsExist
                ? dom.ketchup.language.translate(
                      KupLanguageColumn.NON_NUMERICAL_IN_TABLE
                  )
                : numeric
                ? `i.e.: [${options.receivingColumn.name}] - [${options.starterColumn.name}] + 1`
                : dom.ketchup.language.translate(
                      KupLanguageColumn.NON_NUMERICAL
                  ),
            label: dom.ketchup.language.translate(KupLanguageTotals.FORMULA),
            outlined: true,
        },
    };
    return (
        <kup-combobox
            data={comboData}
            disabled={!numericalColumnsExist}
        ></kup-combobox>
    );
}

function getCombobox(component: KupCard): HTMLKupComboboxElement {
    return component.rootElement.shadowRoot.querySelector('kup-combobox');
}

function typeColumn(e: CustomEvent<KupChipEventPayload>, component: KupCard) {
    const combobox = getCombobox(component);
    const value = e.detail.value;
    combobox.getValue().then((res) => {
        let currentFormula = res;
        currentFormula += '[' + value + ']';
        combobox.setValue(currentFormula);
    });
}

async function applyFormula(component: KupCard) {
    const combobox = getCombobox(component);
    if (combobox) {
        const value = await combobox.getValue();
        console.log('This is the value', value);
        component.onKupClick(component.rootElement.id, value);
    }
}
