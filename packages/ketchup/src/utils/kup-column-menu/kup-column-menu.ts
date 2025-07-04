import type { KupCardData } from '../../components/kup-card/kup-card-declarations';
import { KupChipNode } from '../../components/kup-chip/kup-chip-declarations';
import type { KupDataTable } from '../../components/kup-data-table/kup-data-table';
import type { GroupObject } from '../../components/kup-data-table/kup-data-table-declarations';
import { KupTabBarNode } from '../../components/kup-tab-bar/kup-tab-bar-declarations';
import type { KupTextField } from '../../components/kup-text-field/kup-text-field';
import type { KupTextFieldEventPayload } from '../../components/kup-text-field/kup-text-field-declarations';
import type { KupTree } from '../../components/kup-tree/kup-tree';
import { FButtonStyling } from '../../f-components/f-button/f-button-declarations';
import {
    FChipsProps,
    FChipType,
} from '../../f-components/f-chip/f-chip-declarations';
import {
    KupDataColumn,
    KupDataNewColumnTypes,
} from '../../managers/kup-data/kup-data-declarations';
import { KupDebugCategory } from '../../managers/kup-debug/kup-debug-declarations';
import {
    KupDynamicPositionElement,
    KupDynamicPositionPlacement,
} from '../../managers/kup-dynamic-position/kup-dynamic-position-declarations';
import {
    KupLanguageCheckbox,
    KupLanguageColumn,
    KupLanguageGeneric,
    KupLanguageGrouping,
    KupLanguageRow,
    KupLanguageSearch,
    KupLanguageTotals,
} from '../../managers/kup-language/kup-language-declarations';
import type {
    KupDom,
    KupManagerClickCb,
} from '../../managers/kup-manager/kup-manager-declarations';
import { KupObj } from '../../managers/kup-objects/kup-objects-declarations';
import type { GenericObject } from '../../types/GenericTypes';
import { getValueForDisplay, getValueForDisplay2 } from '../cell-utils';
import { Filters } from '../filters/filters';
import { FiltersColumnMenu } from '../filters/filters-column-menu';
import {
    FILTER_ANALYZER,
    GenericFilter,
    ValueDisplayedValue,
} from '../filters/filters-declarations';
import { FiltersRows } from '../filters/filters-rows';
import { KupColumnMenuIds } from './kup-column-menu-declarations';

const dom: KupDom = document.documentElement as KupDom;

/**
 * Definition and events of the column menu card.
 * @module KupColumnMenu
 */
export class KupColumnMenu {
    clickCb: KupManagerClickCb = null;
    filtersColumnMenuInstance = new FiltersColumnMenu();
    filtersRowsInstance = new FiltersRows();
    /**
     * Function called by the component when the column menu must be opened.
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @param {string} column - Name of the column.
     */
    open(comp: KupDataTable | KupTree, column: string): void {
        this.filtersColumnMenuInstance.resetTextualFilters(
            comp.filters,
            column
        );
    }
    /**
     * Function called by the component when the column menu must be closed.
     * @param {HTMLKupCardElement} card - Column menu card.
     */
    close(card: HTMLKupCardElement): void {
        card.menuVisible = false;
        dom.ketchup.removeClickCallback(this.clickCb);
        dom.ketchup.dynamicPosition.stop(
            card as unknown as KupDynamicPositionElement
        );
    }
    /**
     * Function called to reposition the column menu card to the appropriate selector.
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     */
    reposition(
        comp: KupDataTable | KupTree,
        card: HTMLKupCardElement,
        wrapperSelector: string
    ): void {
        const root: ShadowRoot = comp.rootElement.shadowRoot;
        if (root) {
            if (card) {
                const wrapper: HTMLElement =
                    root.querySelector(wrapperSelector);
                if (dom.ketchup.dynamicPosition.isRegistered(card as any)) {
                    dom.ketchup.dynamicPosition.changeAnchor(
                        card as any,
                        wrapper
                    );
                } else {
                    dom.ketchup.dynamicPosition.register(
                        card as any,
                        wrapper,
                        0,
                        KupDynamicPositionPlacement.AUTO,
                        true
                    );
                }
                if (!this.clickCb) {
                    this.clickCb = {
                        cb: () => {
                            this.close(card);
                        },
                        el: card,
                    };
                }
                dom.ketchup.addClickCallback(this.clickCb, true);
                dom.ketchup.dynamicPosition.start(card as any);
                card.menuVisible = true;
            }
        }
    }
    /**
     * Function called by the column menu card to prepare its 'data' prop.
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @param {KupDataColumn} column - Column of the menu.
     * @param {KupCardData} currentData - 'data' prop of the column menu card when it's already initialized.
     * @returns {GenericObject} 'data' prop of the column menu card.
     */
    prepData(
        comp: KupDataTable | KupTree,
        column: KupDataColumn,
        currentData?: KupCardData
    ): KupCardData {
        const data: KupCardData = currentData ? { ...currentData } : {};
        this.filtersColumnMenuInstance.resetTextualFilters(
            comp.filters,
            column.name
        );
        data.button = this.prepButton(comp, column);
        data.checkbox = this.prepCheckbox(comp, column);
        data.chip = this.prepChip(comp, column);
        data.datepicker = this.prepDatePicker(comp, column);
        data.object = column.objs
            ? column.objs
            : column.obj
            ? [column.obj]
            : null;
        data.switch = this.prepSwitch(comp, column, data.object);
        if (!currentData) {
            data.tabbar = this.prepTabBar(comp, column);
            data.text = [column.title];
        }
        data.textfield = this.prepTextfield(comp, column);
        data.timepicker = this.prepTimePicker(comp, column);
        return data;
    }
    /**
     * Handles the column menu's button prop.
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @param {KupDataColumn} column - Column of the menu.
     * @returns {GenericObject[]} Buttons props.
     */
    prepButton(
        comp: KupDataTable | KupTree,
        column: KupDataColumn
    ): GenericObject[] {
        const props: GenericObject[] = [];
        if (
            !FiltersColumnMenu.isTree(comp) &&
            (comp as KupDataTable).showGroups
        ) {
            props.push({
                className: 'printable',
                'data-storage': {
                    columnName: column.name,
                },
                icon: 'book',
                id: KupColumnMenuIds.BUTTON_GROUP,
                title:
                    comp.getGroupByName(column.name) != null
                        ? dom.ketchup.language.translate(
                              KupLanguageGrouping.DISABLE
                          )
                        : dom.ketchup.language.translate(
                              KupLanguageGrouping.ENABLE
                          ),
            });
        }
        if (comp.removableColumns) {
            props.push({
                className: 'printable',
                'data-storage': {
                    column: column,
                },
                icon: 'table-column-remove',
                id: KupColumnMenuIds.BUTTON_REMOVE,
                title: dom.ketchup.language.translate(KupLanguageColumn.HIDE),
            });
        }
        if (
            comp.enableExtraColumns &&
            (dom.ketchup.objects.canObjHaveExtraColumns(column.obj) ||
                dom.ketchup.objects.canObjsHaveExtraColumns(column.objs))
        ) {
            props.push({
                className: 'printable',
                'data-storage': {
                    columnName: column.name,
                },
                icon: 'table-column-plus-after',
                id: KupColumnMenuIds.BUTTON_ADD_COLUMNS,
                title: dom.ketchup.language.translate(KupLanguageColumn.ADD),
            });
            props.push({
                className: 'printable',
                label: dom.ketchup.language.translate(KupLanguageGeneric.APPLY),
                id: KupColumnMenuIds.BUTTON_APPLY,
                styling: FButtonStyling.OUTLINED,
                title: dom.ketchup.language.translate(KupLanguageGeneric.APPLY),
            });
        }
        return props;
    }
    /**
     * Handles the column menu's checkbox prop.
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @param {KupDataColumn} column - Column of the menu.
     * @returns {GenericObject[]} Checkboxes props.
     */
    prepCheckbox(
        comp: KupDataTable | KupTree,
        column: KupDataColumn
    ): GenericObject[] {
        const props: GenericObject[] = [];
        if (
            comp.showFilters &&
            (dom.ketchup.objects.isStringObject(column.obj) ||
                dom.ketchup.objects.isCheckbox(column.obj))
        ) {
            const checkBoxesFilter: ValueDisplayedValue[] =
                this.filtersColumnMenuInstance.getCheckBoxFilterValues(
                    comp.filters,
                    column.name
                );
            const columnValues: ValueDisplayedValue[] =
                comp.getColumnValues(column);
            if (columnValues.length > 0) {
                props.push({
                    checked: checkBoxesFilter.length == 0,
                    'data-storage': {
                        column: column,
                        value: null,
                    },
                    id: KupColumnMenuIds.CHECKBOX_GLOBAL,
                    key: KupColumnMenuIds.CHECKBOX_GLOBAL + column.name,
                    label: dom.ketchup.language.translate(
                        KupLanguageCheckbox.ALL
                    ),
                });
            }
            for (let index = 0; index < columnValues.length; index++) {
                let label = getValueForDisplay2(columnValues[index], column);
                if (dom.ketchup.objects.isCheckbox(column.obj)) {
                    if (columnValues[index].value == '1') {
                        label = dom.ketchup.language.translate(
                            KupLanguageCheckbox.CHECKED
                        );
                    } else {
                        label = dom.ketchup.language.translate(
                            KupLanguageCheckbox.UNCHECKED
                        );
                    }
                }
                props.push({
                    checked: Filters.valuesArrayContainsValue(
                        checkBoxesFilter,
                        columnValues[index].value
                    ),
                    'data-storage': {
                        column: column,
                        value: columnValues[index].value,
                        displayedValue: getValueForDisplay2(
                            columnValues[index],
                            column
                        ),
                    },
                    label: label,
                });
            }
        }
        return props;
    }
    /**
     * Handles the column menu's chip prop.
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @param {KupDataColumn} column - Column of the menu.
     * @returns {GenericObject[]} Chips props (only 1 is handled).
     */
    prepChip(
        comp: KupDataTable | KupTree,
        column: KupDataColumn
    ): GenericObject[] {
        let props: GenericObject[] = [];
        const chipProps: FChipsProps = { data: [] };
        if (column.children) {
            const chipData: KupChipNode[] = [];
            for (let index = 0; index < column.children.length; index++) {
                const child = column.children[index];
                let childColumn: KupDataColumn = null;
                try {
                    if (FiltersColumnMenu.isTree(comp)) {
                        (comp as KupTree).columns;
                        childColumn = (comp as KupTree).columns.find(
                            (x: KupDataColumn) => x.name === child.name
                        );
                    } else {
                        childColumn = (comp as KupDataTable).data.columns.find(
                            (x: KupDataColumn) => x.name === child.name
                        );
                    }
                } catch (error) {
                    dom.ketchup.debug.logMessage(
                        this,
                        'Child column not found (' + child.name + ')!' + error,
                        KupDebugCategory.ERROR
                    );
                }
                chipData.push({
                    icon: child.icon ? child.icon : null,
                    value: childColumn ? childColumn.title : '*Not found!',
                    obj: child.obj ? child.obj : null,
                    id: childColumn ? childColumn.name : '*NOTFND',
                });
            }
            chipProps.dataSet = { initialData: [...chipData] };
            chipProps.data = chipData;
        }
        chipProps.type = FChipType.INPUT;
        props.push(chipProps);
        return props;
    }
    /**
     * Handles the column menu's switch prop.
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @param {KupDataColumn} column - Column of the menu.
     * @param {KupObj[]} objs - Column's objs.
     * @returns {GenericObject[]} Switches props.
     */
    prepSwitch(
        comp: KupDataTable | KupTree,
        column: KupDataColumn,
        objs: KupObj[]
    ): GenericObject[] {
        const props: GenericObject[] = [];
        if (!FiltersColumnMenu.isTree(comp)) {
            if (
                objs &&
                objs.length > 0 &&
                !dom.ketchup.objects.isEmptyKupObj(objs[0])
            ) {
                props.push({
                    'data-storage': {
                        columnName: column.name,
                    },
                    checked: column.isKey ? true : false,
                    key: KupColumnMenuIds.SWITCH_KEY + column.name,
                    id: KupColumnMenuIds.SWITCH_KEY,
                    label: dom.ketchup.language.translate(KupLanguageRow.KEY),
                    leadingLabel: true,
                });
            }
            if ((comp as KupDataTable).showGroups) {
                const isGroupActive: boolean =
                    comp.getGroupByName(column.name) != null;
                props.push({
                    'data-storage': {
                        columnName: column.name,
                    },
                    key: KupColumnMenuIds.SWITCH_GROUP + column.name,
                    checked: isGroupActive ? true : false,
                    id: KupColumnMenuIds.SWITCH_GROUP,
                    label: dom.ketchup.language.translate(
                        KupLanguageGrouping.GROUPS
                    ),
                    leadingLabel: true,
                });
            }
        }
        return props;
    }
    /**
     * Handles the column menu's tabbar prop.
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @returns {GenericObject[]} Tab bar props.
     */
    prepTabBar(
        comp: KupDataTable | KupTree,
        column: KupDataColumn
    ): GenericObject[] {
        const props: GenericObject[] = [{ data: [] }];
        const data: KupTabBarNode[] = props[0].data;
        if (comp.showFilters) {
            data.push({
                id: KupLanguageGeneric.FILTERS,
                value: dom.ketchup.language.translate(
                    KupLanguageGeneric.FILTERS
                ),
            });
        }
        if (
            (comp.enableExtraColumns &&
                (dom.ketchup.objects.canObjHaveExtraColumns(column.obj) ||
                    dom.ketchup.objects.canObjsHaveExtraColumns(
                        column.objs
                    ))) ||
            comp.removableColumns
        ) {
            data.push({
                id: KupLanguageColumn.COLUMNS,
                value: dom.ketchup.language.translate(
                    KupLanguageColumn.COLUMNS
                ),
            });
        }
        if (!FiltersColumnMenu.isTree(comp)) {
            data.push({
                icon: 'settings',
                id: KupLanguageGeneric.SETTINGS,
                value: '',
            });
        }

        if (data.length > 0) {
            data[0].active = true;
        }
        return props;
    }
    /**
     * Handles the column menu's textfield prop.
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @param {KupDataColumn} column - Column of the menu.
     * @returns {GenericObject[]} Text fields props.
     */
    prepTextfield(
        comp: KupDataTable | KupTree,
        column: KupDataColumn
    ): GenericObject[] {
        let props: GenericObject[] = [];
        if (comp.showFilters) {
            if (this.filtersColumnMenuInstance.isColumnNumeric(column)) {
                props = props.concat(this.prepNumericTextfield(comp, column));
            } else if (dom.ketchup.objects.isStringObject(column.obj)) {
                let filterInitialValue =
                    this.filtersColumnMenuInstance.getTextFilterValue(
                        comp.filters,
                        column.name
                    );
                filterInitialValue = getValueForDisplay(
                    filterInitialValue,
                    column.obj,
                    column.decimals
                );
                props.push({
                    'data-storage': {
                        column: column,
                    },
                    isClearable: true,
                    size: 30,
                    maxLength: 100,
                    label: dom.ketchup.language.translate(
                        KupLanguageSearch.SEARCH
                    ),
                    id: KupColumnMenuIds.TEXTFIELD_FILTER,
                    initialValue: filterInitialValue,
                    key: KupColumnMenuIds.TEXTFIELD_FILTER + column.name,
                    trailingIcon: true,
                });
            }
        }
        if (!FiltersColumnMenu.isTree(comp)) {
            if (
                dom.ketchup.objects.isNumber(column.obj) &&
                comp.enableColumnsFormula
            ) {
                props.push({
                    fullWidth: true,
                    icon: 'functions',
                    id: KupColumnMenuIds.TEXTFIELD_FORMULA,
                    key: KupColumnMenuIds.TEXTFIELD_FORMULA + column.name,
                    helper: `i.e.: Description;[${column.name}] * 2`,
                    label: dom.ketchup.language.translate(
                        KupLanguageTotals.FORMULA
                    ),
                    trailingIcon: true,
                });
            }
        }
        return props;
    }

    /**
     * Handles the column menu's textfields props (number column type).
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @param {Column} column - Column of the menu.
     * @returns {GenericObject[]} Text fields props.
     */
    prepNumericTextfield(
        comp: KupDataTable | KupTree,
        column: KupDataColumn
    ): GenericObject[] {
        let props: GenericObject[] = [];
        if (!comp.showFilters) {
            return props;
        }
        if (!dom.ketchup.objects.isNumber(column.obj)) {
            return props;
        }

        let filterInitialValue =
            this.filtersColumnMenuInstance.getTextFilterValue(
                comp.filters,
                column.name
            );

        props.push({
            'data-storage': {
                column: column,
            },
            helperWhenFocused: true,
            isClearable: true,
            size: 30,
            maxLength: 100,
            label: dom.ketchup.language.translate(KupLanguageSearch.SEARCH),
            id: KupColumnMenuIds.TEXTFIELD_FILTER,
            key: KupColumnMenuIds.TEXTFIELD_FILTER + column.name,
            initialValue: filterInitialValue,
            trailingIcon: true,
        });

        return props;
    }
    /**
     * Handles the column menu's timepicker props (time column type).
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @param {KupDataColumn} column - Column of the menu.
     * @returns {GenericObject[]} Time picker fields props.
     */
    prepTimePicker(
        comp: KupDataTable | KupTree,
        column: KupDataColumn
    ): GenericObject[] {
        let props: GenericObject[] = [];
        if (!comp.showFilters) {
            return props;
        }
        if (!dom.ketchup.objects.isTime(column.obj)) {
            return props;
        }

        let filterInitialValue =
            this.filtersColumnMenuInstance.getTextFilterValue(
                comp.filters,
                column.name
            );

        props.push({
            'data-storage': {
                column: column,
            },
            appendSelection: true,
            data: {
                'kup-text-field': {
                    fullWidth: true,
                    helperWhenFocused: true,
                    isClearable: true,
                    size: 30,
                    maxLength: 100,
                    label: dom.ketchup.language.translate(
                        KupLanguageSearch.SEARCH
                    ),
                },
            },
            id: KupColumnMenuIds.TEXTFIELD_FILTER,
            key: KupColumnMenuIds.TEXTFIELD_FILTER + column.name,
            initialValue: filterInitialValue,
            manageSeconds: dom.ketchup.objects.isTimeWithSeconds(column.obj),
        });

        return props;
    }
    /**
     * Handles the column menu's datepicker props (date/timestamp column type).
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @param {KupDataColumn} column - Column of the menu.
     * @returns {GenericObject[]} Date picker fields props.
     */
    prepDatePicker(
        comp: KupDataTable | KupTree,
        column: KupDataColumn
    ): GenericObject[] {
        let props: GenericObject[] = [];
        if (!comp.showFilters) {
            return props;
        }
        if (
            !dom.ketchup.objects.isDate(column.obj) &&
            !dom.ketchup.objects.isTimestamp(column.obj)
        ) {
            return props;
        }

        let filterInitialValue =
            this.filtersColumnMenuInstance.getTextFilterValue(
                comp.filters,
                column.name
            );

        props.push({
            'data-storage': {
                column: column,
            },
            appendSelection: true,
            data: {
                'kup-text-field': {
                    fullWidth: true,
                    helperWhenFocused: true,
                    isClearable: true,
                    size: 30,
                    maxLength: 100,
                    label: dom.ketchup.language.translate(
                        KupLanguageSearch.SEARCH
                    ),
                },
            },
            id: KupColumnMenuIds.TEXTFIELD_FILTER,
            key: KupColumnMenuIds.TEXTFIELD_FILTER + column.name,
            initialValue: filterInitialValue,
        });

        return props;
    }
    /**
     * Function called by the column menu card when a kup-card-event is received.
     * @param {CustomEvent} cardEvent - kup-card-event emitted by the column menu.
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     */
    eventHandlers(cardEvent: CustomEvent, comp: KupDataTable | KupTree): void {
        const card: HTMLKupCardElement = cardEvent.detail.card
            ? cardEvent.detail.card
            : cardEvent.detail.comp.rootElement;
        const compEvent: CustomEvent = cardEvent.detail.event;
        const compID: string = compEvent.detail.id;
        const subcomp: HTMLElement = compEvent.target as HTMLElement;
        const dataStorage: GenericObject[] = subcomp['data-storage'];
        const compEventType: string = compEvent.type;
        const isClickEvent: boolean = compEventType
            .toLowerCase()
            .endsWith('click');

        switch (compID) {
            //#region Formula handlers
            case KupColumnMenuIds.TEXTFIELD_FORMULA:
                if (compEvent.type === 'kup-textfield-change') {
                    const valueString = (
                        compEvent as CustomEvent<KupTextFieldEventPayload>
                    ).detail.value;
                    const parts = valueString.split(';');
                    const hasDescription = parts.length >= 2;
                    const description = hasDescription ? parts[0].trim() : '';
                    const value = hasDescription
                        ? (parts[1].trim() as KupLanguageTotals)
                        : valueString;
                    (comp as KupDataTable)
                        .newColumn(KupDataNewColumnTypes.MATH, {
                            operation: value,
                            newColumn: hasDescription
                                ? { name: description, title: description }
                                : undefined,
                        })
                        .then((res) => {
                            if (
                                typeof res === 'string' ||
                                res instanceof String
                            ) {
                                const textField = (
                                    compEvent as CustomEvent<KupTextFieldEventPayload>
                                ).detail.comp as KupTextField;
                                textField.rootElement.classList.add(
                                    'kup-danger'
                                );
                                textField.helper = res as string;
                            } else {
                                this.close(card);
                            }
                        });
                }
                break;
            //#endregion

            //#region Filters handlers
            case KupColumnMenuIds.TEXTFIELD_FILTER:
                switch (compEvent.type) {
                    case 'kup-textfield-submit':
                    case 'kup-datepicker-textfieldsubmit':
                    case 'kup-datepicker-change':
                    case 'kup-timepicker-textfieldsubmit':
                        this.saveTextualFilters(comp, dataStorage['column']);
                        this.close(card);
                        break;
                    case 'kup-textfield-cleariconclick':
                    case 'kup-datepicker-cleariconclick':
                    case 'kup-timepicker-cleariconclick':
                        {
                            this.textfieldChange(
                                comp,
                                null,
                                dataStorage['column']
                            );
                        }
                        this.saveTextualFilters(comp, dataStorage['column']);
                        break;
                    case 'kup-datepicker-input':
                    case 'kup-datepicker-itemclick':
                    case 'kup-textfield-input':
                    case 'kup-timepicker-input':
                    case 'kup-timepicker-itemclick':
                        window.clearTimeout(comp.columnFilterTimeout);
                        comp.columnFilterTimeout = window.setTimeout(() => {
                            {
                                this.textfieldChange(
                                    comp,
                                    compEvent.detail.value,
                                    dataStorage['column']
                                );
                            }
                            if (isClickEvent) {
                                this.saveTextualFilters(
                                    comp,
                                    dataStorage['column']
                                );
                            }
                            if (card.data?.checkbox) {
                                card.data.checkbox = this.prepCheckbox(
                                    comp,
                                    dataStorage['column']
                                );
                                card.refresh();
                            }
                        }, 300);
                        break;
                }
            //#endregion
        }

        //#region  Other handlers
        switch (compEvent.type) {
            case 'kup-button-click':
                switch (compID) {
                    case KupColumnMenuIds.BUTTON_GROUP:
                        this.toggleGroup(
                            comp as KupDataTable,
                            dataStorage['columnName']
                        );
                        break;
                    case KupColumnMenuIds.BUTTON_REMOVE:
                        comp.closeColumnMenu().then(() => {
                            comp.hideColumn(dataStorage['column']);
                        });
                        break;
                }
                break;
            case 'kup-checkbox-change':
                this.checkboxChange(
                    comp,
                    compEvent.detail.checked,
                    dataStorage['column'],
                    {
                        value: dataStorage['value'],
                        displayedValue: dataStorage['displayedValue'],
                    }
                );
                break;
            case 'kup-switch-change':
                switch (compID) {
                    case KupColumnMenuIds.SWITCH_GROUP:
                        this.toggleGroup(
                            comp as KupDataTable,
                            dataStorage['columnName']
                        );
                        break;
                    case KupColumnMenuIds.SWITCH_KEY:
                        this.setKey(
                            comp as KupDataTable,
                            dataStorage['columnName'],
                            compEvent.detail.value
                        );
                        break;
                }
                break;
        }
        //#endregion
        if (card.data?.checkbox && dataStorage?.['column']) {
            card.data.checkbox = this.prepCheckbox(comp, dataStorage['column']);
            card.refresh();
        }
    }
    /**
     * Triggered when the text filter changes.
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @param {string} value - New value of the filter.
     * @param {KupDataColumn} column - Column of the menu.
     */
    textfieldChange(
        comp: KupDataTable | KupTree,
        value: string,
        column: KupDataColumn
    ): void {
        if (!FiltersColumnMenu.isTree(comp)) {
            comp.resetCurrentPage();
        }
        let newFilter = '';
        if (value) {
            if (!value.match(FILTER_ANALYZER)) {
                newFilter = this.filtersColumnMenuInstance.normalizeValue(
                    value.trim(),
                    column.obj
                );
            } else {
                newFilter = value;
            }
        }
        const newFilters: GenericFilter = { ...comp.filters };
        this.filtersColumnMenuInstance.setTextFieldFilterValue(
            newFilters,
            column.name,
            newFilter
        );
        comp.filters = newFilters;
    }

    saveTextualFilters(comp: KupDataTable | KupTree, column: KupDataColumn) {
        const newFilters: GenericFilter = { ...comp.filters };
        this.filtersColumnMenuInstance.saveTextualFilters(
            newFilters,
            column.name
        );
        comp.filters = newFilters;
    }
    /**
     * Triggered when the checkbox list changes.
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @param {boolean} checked - State of the changed checkbox.
     * @param {KupDataColumn} column - Column of the menu.
     * @param {string} filterValue - Value used to filter.
     */
    checkboxChange(
        comp: KupDataTable | KupTree,
        checked: boolean,
        column: KupDataColumn,
        filterValueItem: ValueDisplayedValue
    ): void {
        if (!FiltersColumnMenu.isTree(comp)) {
            comp.resetCurrentPage();
        }

        const newFilters = { ...comp.filters };

        if (
            checked ||
            filterValueItem == null ||
            filterValueItem.value == null
        ) {
            this.filtersColumnMenuInstance.addCheckboxFilter(
                newFilters,
                column.name,
                filterValueItem
            );
        } else {
            this.filtersColumnMenuInstance.removeCheckboxFilter(
                newFilters,
                column.name,
                filterValueItem.value
            );
        }

        comp.filters = newFilters;
    }
    /**
     * Toggles the grouping of the given column.
     * @param {KupDataTable} comp - Component using the column menu.
     * @param {Column} column - Column of the menu.
     */
    toggleGroup(comp: KupDataTable, column: string): void {
        const group: GroupObject = comp.getGroupByName(column);
        if (group !== null) {
            const index: number = comp.groups.indexOf(group);
            comp.groups.splice(index, 1);
            comp.groups = [...comp.groups];
        } else {
            comp.groups = [...comp.groups, { column, visible: true }];
        }
        comp.refresh();
    }
    /**
     * Sets the given column as key for the table.
     * @param {KupDataTable} comp - Component using the column menu.
     * @param {KupDataColumn} column - Column of the menu.
     * @param {string} value - The status of the switch.
     */
    setKey(comp: KupDataTable, column: string, value: string): void {
        const columns: KupDataColumn[] = comp.data.columns;
        const switchOn: boolean = value === 'on' ? true : false;
        for (let index = 0; index < columns.length; index++) {
            const col: KupDataColumn = columns[index];
            if (col.name === column) {
                col.isKey = switchOn;
            } else if (switchOn) {
                col.isKey = false;
            }
        }
        comp.refresh();
    }
}
