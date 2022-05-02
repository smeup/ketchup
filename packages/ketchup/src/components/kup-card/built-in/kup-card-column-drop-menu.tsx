import { h, VNode } from '@stencil/core';
import {
    KupChipEventPayload,
    KupChipNode,
} from '../../kup-chip/kup-chip-declarations';
import {
    KupListNode,
    KupListEventPayload,
} from '../../kup-list/kup-list-declarations';
import { FButtonStyling } from '../../../f-components/f-button/f-button-declarations';
import {
    KupLanguageColumn,
    KupLanguageGeneric,
    KupLanguageTotals,
} from '../../../managers/kup-language/kup-language-declarations';
import { KupDom } from '../../../managers/kup-manager/kup-manager-declarations';
import { KupCard } from '../kup-card';
import { KupCardColumnDropMenuOptions } from '../kup-card-declarations';
import { KupDataNewColumnTypes } from '../../../managers/kup-data/kup-data-declarations';

const dom: KupDom = document.documentElement as KupDom;

const premadeFormulas = [
    KupLanguageTotals.AVERAGE,
    KupLanguageTotals.DIFFERENCE,
    KupLanguageTotals.PRODUCT,
    KupLanguageTotals.SUM,
];

export function prepareColumnDropMenu(component: KupCard) {
    const options = component.data.options as KupCardColumnDropMenuOptions;
    const chipData: KupChipNode[] = [];
    let list: VNode, combobox: VNode, button: VNode, chipSet: VNode;
    for (let index = 0; index < options.data.columns.length; index++) {
        const column = options.data.columns[index];
        if (
            column.visible !== false &&
            column.obj &&
            dom.ketchup.objects.isNumber(column.obj)
        ) {
            chipData.push({
                obj: column.obj,
                value: column.name,
                title: column.title,
                id: column.name,
            });
        }
    }
    const numericalColumnsExist = !!(chipData.length > 0);
    if (options.enableMerge || options.enableMove) {
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
    const listData: KupListNode[] = [];

    if (options.enableMerge) {
        listData.push({
            icon: 'library_add',
            id: KupLanguageGeneric.MERGE,
            value: dom.ketchup.language.translate(KupLanguageGeneric.MERGE),
        });
    }
    if (options.enableMove) {
        listData.push({
            icon: 'swap_horiz',
            id: KupLanguageGeneric.MOVE,
            value: dom.ketchup.language.translate(KupLanguageGeneric.MOVE),
        });
    }

    return listData.length > 0 ? (
        <kup-list
            data={listData}
            showIcons={true}
            onkup-list-click={(e: CustomEvent<KupListEventPayload>) =>
                listClick(e, options)
            }
        ></kup-list>
    ) : null;
}

function prepareCombobox(
    options: KupCardColumnDropMenuOptions,
    numericalColumnsExist: boolean
): VNode {
    const comboListData: KupListNode[] = [];
    const numeric: boolean =
        dom.ketchup.objects.isNumber(options.receivingColumn.obj) &&
        dom.ketchup.objects.isNumber(options.starterColumn.obj);
    if (numeric) {
        comboListData.push(
            {
                id: KupLanguageTotals.AVERAGE,
                value: dom.ketchup.language.translate(
                    KupLanguageTotals.AVERAGE
                ),
            },
            {
                id: KupLanguageTotals.DIFFERENCE,
                value: dom.ketchup.language.translate(
                    KupLanguageTotals.DIFFERENCE
                ),
            },
            {
                id: KupLanguageTotals.PRODUCT,
                value: dom.ketchup.language.translate(
                    KupLanguageTotals.PRODUCT
                ),
            },
            {
                id: KupLanguageTotals.SUM,
                value: dom.ketchup.language.translate(KupLanguageTotals.SUM),
            },
            {
                id: `([${options.starterColumn.name}]/[${options.receivingColumn.name}])*100`,
                value: `[${options.starterColumn.name}] / [${options.receivingColumn.name}] * 100`,
            },
            {
                id: `([${options.receivingColumn.name}]/[${options.starterColumn.name}])*100`,
                value: `[${options.receivingColumn.name}] / [${options.starterColumn.name}] * 100`,
            }
        );
    } else {
        comboListData.push({
            id: KupLanguageColumn.NO_FORMULA,
            value: dom.ketchup.language.translate(KupLanguageColumn.NO_FORMULA),
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
    const value = e.detail.chip.value;
    combobox.getValue().then((res) => {
        let currentFormula = res;
        currentFormula += '[' + value + ']';
        combobox.setValue(currentFormula);
    });
}

function listClick(
    e: CustomEvent<KupListEventPayload>,
    options: KupCardColumnDropMenuOptions
) {
    switch (e.detail.selected.id) {
        case KupLanguageGeneric.MERGE:
            if (options.mergeCb) {
                options.mergeCb();
            }
            break;
        case KupLanguageGeneric.MOVE:
            if (options.moveCb) {
                options.moveCb();
            }
            break;
    }
}

async function applyFormula(component: KupCard) {
    const options = component.data.options as KupCardColumnDropMenuOptions;
    const combobox = getCombobox(component);
    if (combobox) {
        const value = (await combobox.getValue()) as KupLanguageTotals;
        if (premadeFormulas.includes(value)) {
            dom.ketchup.data.column.new(
                options.data,
                KupDataNewColumnTypes.MATH,
                {
                    columns: [
                        options.receivingColumn.name,
                        options.starterColumn.name,
                    ],
                    operation: value,
                }
            );
            if (options.formulaCb !== undefined) {
                options.formulaCb();
            }
        } else {
            const result = dom.ketchup.data.column.new(
                options.data,
                KupDataNewColumnTypes.MATH,
                {
                    operation: value,
                }
            );
            if (typeof result === 'string' || result instanceof String) {
                combobox.classList.add('kup-danger');
                combobox.data['kup-text-field'].helper = result as string;
                combobox.refresh();
            } else if (options.formulaCb !== undefined) {
                options.formulaCb();
            }
        }
    }
}
