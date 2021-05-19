import type { CardData } from '../../components/kup-card/kup-card-declarations';
import type { GenericObject } from '../../types/GenericTypes';
import type { KupCard } from '../../components/kup-card/kup-card';
import type { KupDataTable } from '../../components/kup-data-table/kup-data-table';
import type { KupDynamicPositionElement } from '../kup-dynamic-position/kup-dynamic-position-declarations';
import type { KupDom } from '../kup-manager/kup-manager-declarations';
import type { KupTooltip } from '../../components/kup-tooltip/kup-tooltip';
import type { KupTree } from '../../components/kup-tree/kup-tree';
import { treeMainColumnName } from '../../components/kup-tree/kup-tree-declarations';
import type {
    Column,
    ColumnChild,
    GroupObject,
} from '../../components/kup-data-table/kup-data-table-declarations';
import { unsetTooltip } from '../helpers';
import { FiltersColumnMenu } from '../filters/filters-column-menu';
import {
    FilterInterval,
    GenericFilter,
    ValueDisplayedValue,
} from '../filters/filters-declarations';
import {
    changeDateTimeFormat,
    ISO_DEFAULT_DATE_FORMAT,
    ISO_DEFAULT_DATE_TIME_FORMAT,
} from '../utils';
import { getValueForDisplay, getValueForDisplay2 } from '../cell-utils';
import { FiltersRows } from '../filters/filters-rows';
import { Filters } from '../filters/filters';
import {
    KupLanguageColumn,
    KupLanguageSearch,
    KupLanguageGrouping,
    KupLanguageCheckbox,
    KupLanguageGeneric,
} from '../kup-language/kup-language-declarations';
import { ComponentTabBarElement } from '../../components/kup-tab-bar/kup-tab-bar-declarations';
import { FButtonStyling } from '../../f-components/f-button/f-button-declarations';
import { KupColumnMenuIds } from './kup-column-menu-declarations';
import { KupDebugCategory } from '../kup-debug/kup-debug-declarations';
import {
    FChipData,
    FChipsProps,
    FChipType,
} from '../../f-components/f-chip/f-chip-declarations';

const dom: KupDom = document.documentElement as KupDom;
/**
 * Definition and events of the column menu card.
 * @module KupColumnMenu
 */
export class KupColumnMenu {
    filtersColumnMenuInstance = new FiltersColumnMenu();
    filtersRowsInstance = new FiltersRows();
    /**
     * Function called by the component when the column menu must be opened.
     * @param {Event} event - The event itself.
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @param {string} column - Name of the column.
     * @param {KupTooltip} tooltip - Tooltip of the component, when present.
     */
    open(
        event: Event,
        comp: KupDataTable | KupTree,
        column: string,
        tooltip?: KupTooltip
    ): void {
        event.preventDefault();
        if (tooltip) {
            unsetTooltip(tooltip);
        }
        this.filtersColumnMenuInstance.resetTextualFilters(
            comp.filters,
            column
        );
        comp.setColumnMenu(column);
    }
    /**
     * Function called by the component when the column menu must be closed.
     * @param {Event} event - The event itself.
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     */
    close(event: Event, comp: KupDataTable | KupTree): void {
        if (event) {
            event.stopPropagation();
        }
        comp.setColumnMenu(null);
    }
    /**
     * Function called to reposition the column menu card to the appropriate column.
     * Note that focus() is mandatory in order to properly close the card on blur (along with the tab-index="0" attribute on the element).
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     */
    reposition(comp: KupDataTable | KupTree): void {
        const root: ShadowRoot = comp.rootElement.shadowRoot;
        if (root) {
            const card: HTMLKupCardElement = root.querySelector(
                '#' + KupColumnMenuIds.CARD_COLUMN_MENU
            );
            if (card) {
                const column: string = card.dataset.column;
                const wrapper: HTMLElement = root.querySelector(
                    'th[data-column="' + column + '"]'
                );
                if (dom.ketchup.dynamicPosition.isRegistered(card as any)) {
                    dom.ketchup.dynamicPosition.changeAnchor(
                        card as any,
                        wrapper
                    );
                } else {
                    dom.ketchup.dynamicPosition.register(card as any, wrapper);
                    dom.ketchup.dynamicPosition.start(card as any);
                    card.menuVisible = true;
                    card.focus();
                }
            }
        }
    }
    /**
     * Function called by the column menu card to prepare its 'data' prop.
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @param {Column} column - Column of the menu.
     * @returns {GenericObject} 'data' prop of the column menu card.
     */
    prepData(comp: KupDataTable | KupTree, column: Column): CardData {
        return {
            button: this.prepButton(comp, column),
            checkbox: this.prepCheckbox(comp, column),
            chip: this.prepChip(comp, column),
            datepicker: this.prepIntervalDatePicker(comp, column),
            object: [column.obj],
            tabbar: this.prepTabBar(comp, column),
            textfield:
                !this.filtersColumnMenuInstance.isColumnFiltrableByInterval(
                    column
                )
                    ? this.prepTextfield(comp, column)
                    : this.prepIntervalTextfield(comp, column),
            timepicker: this.prepIntervalTimePicker(comp, column),
        };
    }
    /**
     * Handles the column menu's button prop.
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @param {Column} column - Column of the menu.
     * @returns {GenericObject[]} Buttons props.
     */
    prepButton(comp: KupDataTable | KupTree, column: Column): GenericObject[] {
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
            dom.ketchup.objects.canHaveExtraColumns(column.obj)
        ) {
            if (dom.ketchup.objects.canHaveAutomaticDerivedColumn(column.obj)) {
                props.push({
                    className: 'printable',
                    'data-storage': {
                        columnName: column.name,
                    },
                    icon: 'label',
                    id: KupColumnMenuIds.BUTTON_DESCRIPTION,
                    title: dom.ketchup.language.translate(
                        KupLanguageColumn.ADD_DESCRIPTION
                    ),
                });
            }
            props.push({
                className: 'printable',
                label: dom.ketchup.language.translate(KupLanguageGeneric.APPLY),
                id: KupColumnMenuIds.BUTTON_APPLY,
                styling: FButtonStyling.FLAT,
                title: dom.ketchup.language.translate(KupLanguageGeneric.APPLY),
            });
        }
        return props;
    }
    /**
     * Handles the column menu's checkbox prop.
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @param {Column} column - Column of the menu.
     * @returns {GenericObject[]} Checkboxes props.
     */
    prepCheckbox(
        comp: KupDataTable | KupTree,
        column: Column
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
     * Handles the column menu's button prop.
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @param {Column} column - Column of the menu.
     * @returns {GenericObject[]} Buttons props.
     */
    prepChip(comp: KupDataTable | KupTree, column: Column): GenericObject[] {
        let props: GenericObject[] = [];
        const chipProps: FChipsProps = {};
        if (column.children) {
            const chipData: FChipData[] = [];
            for (let index = 0; index < column.children.length; index++) {
                const child: ColumnChild = column.children[index];
                let childColumn: Column = null;
                try {
                    if (FiltersColumnMenu.isTree(comp)) {
                        (comp as KupTree).columns;
                        childColumn = (comp as KupTree).columns.find(
                            (x: Column) => x.name === child.name
                        );
                    } else {
                        childColumn = (comp as KupDataTable).data.columns.find(
                            (x: Column) => x.name === child.name
                        );
                    }
                } catch (error) {
                    dom.ketchup.debug.logMessage(
                        this,
                        'Child column not found (' + child.name + ')!' + error,
                        KupDebugCategory.WARNING
                    );
                }
                chipData.push({
                    icon: child.icon ? child.icon : null,
                    label: childColumn ? childColumn.name : '*Not found!',
                    value: child.obj.t + ';' + child.obj.p + ';' + child.obj.k,
                });
            }
            chipProps.data = chipData;
        }
        chipProps.type = FChipType.INPUT;
        props.push(chipProps);
        return props;
    }
    /**
     * Handles the column menu's tabbar prop.
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @returns {GenericObject[]} Tab bar props.
     */
    prepTabBar(comp: KupDataTable | KupTree, column: Column): GenericObject[] {
        const props: GenericObject[] = [{ data: [] }];
        const data: ComponentTabBarElement[] = props[0].data;
        if (comp.showFilters) {
            data.push({
                active: true,
                text: dom.ketchup.language.translate(
                    KupLanguageGeneric.FILTERS
                ),
                value: KupLanguageGeneric.FILTERS,
            });
        }
        if (
            !FiltersColumnMenu.isTree(comp) &&
            (comp as KupDataTable).showGroups
        ) {
            data.push({
                text: dom.ketchup.language.translate(
                    KupLanguageGrouping.GROUPS
                ),
                value: KupLanguageGrouping.GROUPS,
            });
        }
        if (
            (comp.enableExtraColumns &&
                dom.ketchup.objects.canHaveExtraColumns(column.obj)) ||
            comp.removableColumns
        ) {
            data.push({
                text: dom.ketchup.language.translate(KupLanguageColumn.COLUMNS),
                value: KupLanguageColumn.COLUMNS,
            });
        }
        return props;
    }
    /**
     * Handles the column menu's textfield prop.
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @param {Column} column - Column of the menu.
     * @returns {GenericObject[]} Text fields props.
     */
    prepTextfield(
        comp: KupDataTable | KupTree,
        column: Column
    ): GenericObject[] {
        let props: GenericObject[] = [];
        if (
            comp.showFilters &&
            dom.ketchup.objects.isStringObject(column.obj)
        ) {
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
            return [
                {
                    'data-storage': {
                        column: column,
                    },
                    fullWidth: true,
                    icon: 'magnify',
                    id: KupColumnMenuIds.TEXTFIELD_FILTER,
                    initialValue: filterInitialValue,
                    isClearable: true,
                    label: dom.ketchup.language.translate(
                        KupLanguageSearch.SEARCH
                    ),
                    trailingIcon: true,
                },
            ];
        }
        return props;
    }

    /**
     * Handles the column menu's interval textfields props (number column type).
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @param {Column} column - Column of the menu.
     * @returns {GenericObject[]} Text fields props.
     */
    prepIntervalTextfield(
        comp: KupDataTable | KupTree,
        column: Column
    ): GenericObject[] {
        let props: GenericObject[] = [];
        if (!comp.showFilters) {
            return props;
        }
        if (!dom.ketchup.objects.isNumber(column.obj)) {
            return props;
        }

        let interval =
            this.filtersColumnMenuInstance.getIntervalTextFieldFilterValues(
                comp.filters,
                column
            );
        let initialValueFrom = interval[FilterInterval.FROM];
        let initialValueTo = interval[FilterInterval.TO];

        props.push({
            'data-storage': {
                column: column,
                intervalIndex: FilterInterval.FROM,
                isInterval: true,
            },
            fullWidth: true,
            helperWhenFocused: true,
            id: KupColumnMenuIds.TEXTFIELD_FROM,
            initialValue: initialValueFrom,
            isClearable: true,
            label: dom.ketchup.language.translate(KupLanguageSearch.FROM),
            icon: 'magnify',
            trailingIcon: true,
        });
        props.push({
            'data-storage': {
                column: column,
                intervalIndex: FilterInterval.TO,
                isInterval: true,
            },
            fullWidth: true,
            helperWhenFocused: true,
            id: KupColumnMenuIds.TEXTFIELD_TO,
            initialValue: initialValueTo,
            isClearable: true,
            label: dom.ketchup.language.translate(KupLanguageSearch.TO),
            icon: 'magnify',
            trailingIcon: true,
        });

        return props;
    }
    /**
     * Handles the column menu's interval timepicker props (time column type).
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @param {Column} column - Column of the menu.
     * @returns {GenericObject[]} Time picker fields props.
     */
    prepIntervalTimePicker(
        comp: KupDataTable | KupTree,
        column: Column
    ): GenericObject[] {
        let props: GenericObject[] = [];
        if (!comp.showFilters) {
            return props;
        }
        if (!dom.ketchup.objects.isTime(column.obj)) {
            return props;
        }

        let interval =
            this.filtersColumnMenuInstance.getIntervalTextFieldFilterValues(
                comp.filters,
                column
            );
        let initialValueFrom = interval[FilterInterval.FROM];
        let initialValueTo = interval[FilterInterval.TO];

        props.push({
            'data-storage': {
                column: column,
                intervalIndex: FilterInterval.FROM,
                isInterval: true,
            },
            data: {
                'kup-text-field': {
                    fullWidth: true,
                    helperWhenFocused: true,
                    id: KupColumnMenuIds.TEXTFIELD_FROM,
                    isClearable: true,
                    label: dom.ketchup.language.translate(
                        KupLanguageSearch.FROM
                    ),
                },
            },
            initialValue: initialValueFrom,
            manageSeconds: dom.ketchup.objects.isTimeWithSeconds(column.obj),
        });
        props.push({
            'data-storage': {
                column: column,
                intervalIndex: FilterInterval.TO,
                isInterval: true,
            },
            data: {
                'kup-text-field': {
                    fullWidth: true,
                    helperWhenFocused: true,
                    id: KupColumnMenuIds.TEXTFIELD_TO,
                    isClearable: true,
                    label: dom.ketchup.language.translate(KupLanguageSearch.TO),
                },
            },
            initialValue: initialValueTo,
            manageSeconds: dom.ketchup.objects.isTimeWithSeconds(column.obj),
        });

        return props;
    }
    /**
     * Handles the column menu's interval datepicker props (date/timestamp column type).
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @param {Column} column - Column of the menu.
     * @returns {GenericObject[]} Date picker fields props.
     */
    prepIntervalDatePicker(
        comp: KupDataTable | KupTree,
        column: Column
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

        let interval =
            this.filtersColumnMenuInstance.getIntervalTextFieldFilterValues(
                comp.filters,
                column
            );
        let initialValueFrom = interval[FilterInterval.FROM];
        let initialValueTo = interval[FilterInterval.TO];

        let suffixFrom = null;
        let suffixTo = null;
        if (dom.ketchup.objects.isTimestamp(column.obj)) {
            suffixFrom = ' 00:00:00';
            suffixTo = ' 23:59:59';
            if (initialValueFrom != '') {
                initialValueFrom = changeDateTimeFormat(
                    initialValueFrom,
                    ISO_DEFAULT_DATE_TIME_FORMAT,
                    ISO_DEFAULT_DATE_FORMAT
                );
            }
            if (initialValueTo != '') {
                initialValueTo = changeDateTimeFormat(
                    initialValueTo,
                    ISO_DEFAULT_DATE_TIME_FORMAT,
                    ISO_DEFAULT_DATE_FORMAT
                );
            }
        }

        props.push({
            'data-storage': {
                column: column,
                suffix: suffixFrom,
                intervalIndex: FilterInterval.FROM,
                isInterval: true,
            },
            data: {
                'kup-text-field': {
                    fullWidth: true,
                    helperWhenFocused: true,
                    id: KupColumnMenuIds.TEXTFIELD_FROM,
                    isClearable: true,
                    label: dom.ketchup.language.translate(
                        KupLanguageSearch.FROM
                    ),
                },
            },
            initialValue: initialValueFrom,
        });
        props.push({
            'data-storage': {
                column: column,
                suffix: suffixTo,
                intervalIndex: FilterInterval.TO,
                isInterval: true,
            },
            data: {
                'kup-text-field': {
                    fullWidth: true,
                    helperWhenFocused: true,
                    id: KupColumnMenuIds.TEXTFIELD_TO,
                    isClearable: true,
                    label: dom.ketchup.language.translate(KupLanguageSearch.TO),
                },
            },
            initialValue: initialValueTo,
        });

        return props;
    }
    /**
     * Function called by the column menu card when a kupCardEvent is received.
     * @param {CustomEvent} cardEvent - kupCardEvent emitted by the column menu.
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     */
    eventHandlers(cardEvent: CustomEvent, comp: KupDataTable | KupTree): void {
        const card: KupCard = cardEvent.detail.card;
        const cardData = card.data;
        const compEvent = cardEvent.detail.event;
        const compID = compEvent.detail.id;
        let dataStorage: GenericObject[];
        let compEventType: string = compEvent.type;
        let isClickEvent = compEventType.toLowerCase().endsWith('click');
        let cardDataId = '';
        if (compEventType.indexOf('kupTextField') == 0) {
            cardDataId = 'textfield';
        } else if (compEventType.indexOf('kupDatePicker') == 0) {
            cardDataId = 'datepicker';
        } else if (compEventType.indexOf('kupTimePicker') == 0) {
            cardDataId = 'timepicker';
        } else if (compEventType.indexOf('kupCheckbox') == 0) {
            cardDataId = 'checkbox';
        } else if (compEventType.indexOf('kupButton') == 0) {
            cardDataId = 'button';
        }
        if (cardDataId != '') {
            dataStorage = cardData[cardDataId].find((x) => x.id === compID)[
                'data-storage'
            ];
        }
        switch (compEvent.type) {
            case 'kupCheckboxChange':
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
            case 'kupButtonClick':
                switch (compID) {
                    case KupColumnMenuIds.BUTTON_DESCRIPTION:
                        this.addDescriptionColumn(
                            comp,
                            dataStorage['columnName']
                        );
                        break;
                    case KupColumnMenuIds.BUTTON_GROUP:
                        this.toggleGroup(
                            comp as KupDataTable,
                            dataStorage['columnName']
                        );
                        break;
                    case KupColumnMenuIds.BUTTON_REMOVE:
                        this.removeColumn(comp, dataStorage['column']);
                        break;
                }
                break;
            case 'kupTextFieldSubmit':
            case 'kupDatePickerTextFieldSubmit':
            case 'kupTimePickerTextFieldSubmit':
                this.saveTextualFilters(comp, dataStorage['column']);
                this.close(compEvent, comp);
                break;
            case 'kupTextFieldClearIconClick':
            case 'kupDatePickerClearIconClick':
            case 'kupTimePickerClearIconClick':
                if (dataStorage['isInterval'] == true) {
                    this.intervalChange(
                        comp,
                        null,
                        dataStorage['column'],
                        dataStorage['intervalIndex'],
                        false
                    );
                } else {
                    this.textfieldChange(comp, null, dataStorage['column']);
                }
                this.saveTextualFilters(comp, dataStorage['column']);
                break;
            case 'kupTextFieldInput':
            case 'kupDatePickerInput':
            case 'kupDatePickerItemClick':
            case 'kupTimePickerInput':
            case 'kupTimePickerItemClick':
                window.clearTimeout(comp.columnFilterTimeout);
                comp.columnFilterTimeout = window.setTimeout(() => {
                    if (dataStorage['isInterval'] == true) {
                        this.intervalChange(
                            comp,
                            compEvent.detail.value,
                            dataStorage['column'],
                            dataStorage['intervalIndex'],
                            !isClickEvent,
                            dataStorage['suffix']
                        );
                    } else {
                        this.textfieldChange(
                            comp,
                            compEvent.detail.value,
                            dataStorage['column']
                        );
                    }
                    if (isClickEvent) {
                        this.saveTextualFilters(comp, dataStorage['column']);
                    }
                }, 300);
                break;
        }
    }
    /**
     * Triggered when the text filter changes.
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @param {string} value - New value of the filter.
     * @param {Column} column - Column of the menu.
     */
    textfieldChange(
        comp: KupDataTable | KupTree,
        value: string,
        column: Column
    ): void {
        if (!FiltersColumnMenu.isTree(comp)) {
            comp.resetCurrentPage();
        }
        let newFilter = '';
        if (value) {
            newFilter = this.filtersColumnMenuInstance.normalizeValue(
                value.trim(),
                column.obj
            );
        }
        const newFilters: GenericFilter = { ...comp.filters };
        this.filtersColumnMenuInstance.setTextFieldFilterValue(
            newFilters,
            column.name,
            newFilter
        );
        comp.filters = newFilters;
    }

    intervalChange(
        comp: KupDataTable | KupTree,
        value: string,
        column: Column,
        index: FilterInterval,
        needNormalize: boolean,
        suffix?: string
    ): void {
        if (!FiltersColumnMenu.isTree(comp)) {
            comp.resetCurrentPage();
        }
        let newFilter = '';
        if (value) {
            newFilter = value.trim();
            if (needNormalize) {
                newFilter = this.filtersColumnMenuInstance.normalizeValue(
                    newFilter,
                    column.obj
                );
            }
            if (suffix != null && newFilter != '') {
                newFilter = newFilter + suffix;
            }
        }

        const newFilters: GenericFilter = { ...comp.filters };
        this.filtersColumnMenuInstance.setIntervalTextFieldFilterValue(
            newFilters,
            column.name,
            newFilter,
            index
        );
        comp.filters = newFilters;
    }

    saveTextualFilters(comp: KupDataTable | KupTree, column: Column) {
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
     * @param {Column} column - Column of the menu.
     * @param {string} filterValue - Value used to filter.
     */
    checkboxChange(
        comp: KupDataTable | KupTree,
        checked: boolean,
        column: Column,
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
            const index = comp.groups.indexOf(group);
            comp.groups.splice(index, 1);
            comp.groups = [...comp.groups];
        } else {
            comp.groups = [...comp.groups, { column, visible: true }];
        }
        this.close(null, comp);
    }
    /**
     * Emits the kupAddColumn event on the given component.
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @param {Column} column - Column of the menu.
     */
    addColumn(comp: KupDataTable | KupTree, column: string): void {
        comp.kupAddColumn.emit({
            column: column,
        });
        this.close(null, comp);
    }
    /**
     * The given column will be set to be hidden.
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @param {Column} column - Column of the menu.
     */
    removeColumn(comp: KupDataTable | KupTree, column: Column): void {
        if (
            FiltersColumnMenu.isTree(comp) &&
            column.name === treeMainColumnName
        ) {
            comp.setTreeColumnVisibility(false);
        } else {
            column.visible = false;
        }
        this.close(null, comp);
    }
    /**
     * Adds the description column (or code column, if it is a description).
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @param {string} column - Name of the column.
     */
    addDescriptionColumn(comp: KupDataTable | KupTree, column: string): void {
        comp.kupAddCodeDecodeColumn.emit({
            column: column,
        });
        this.close(null, comp);
    }
}
