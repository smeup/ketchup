import { KupCard } from '../../components/kup-card/kup-card';
import { KupDataTable } from '../../components/kup-data-table/kup-data-table';
import {
    Column,
    GenericFilter,
    GroupObject,
} from '../../components/kup-data-table/kup-data-table-declarations';
import {
    getValueForDisplay,
    isColumnFiltrableByInterval,
    normalizeValue,
    setTextFieldFilterValue,
} from '../../components/kup-data-table/kup-data-table-helper';
import { KupTooltip } from '../../components/kup-tooltip/kup-tooltip';
import { KupTree } from '../../components/kup-tree/kup-tree';
import { GenericObject } from '../../types/GenericTypes';
import { unsetTooltip } from '../helpers';
import { isCheckbox, isStringObject } from '../object-utils';
import { positionRecalc } from '../recalc-position';
import { FiltersColumnMenu } from '../filters/filters-column-menu';
import { CardData } from '../../components/kup-card/kup-card-declarations';
/**
 * Definition and events of the column menu card.
 * @module ColumnMenu
 */
export class ColumnMenu {
    filters = new FiltersColumnMenu();
    /**
     * Function used to check whether the component is a KupTree or KupDataTable.
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @returns {comp is KupTree} Returns true when the component is KupTree.
     */
    isTree(comp: KupDataTable | KupTree): comp is KupTree {
        return (comp as KupTree).rootElement.tagName === 'KUP-TREE';
    }
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
            const card: any = root.querySelector('#column-menu');
            if (card) {
                const column: string = card.dataset.column;
                const wrapper: HTMLElement = root.querySelector(
                    'th[data-column="' + column + '"]'
                );
                positionRecalc(card, wrapper);
                card.classList.add('dynamic-position-active');
                card.menuVisible = true;
                card.focus();
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
            textfield: !isColumnFiltrableByInterval(column)
                ? this.prepTextfield(comp, column)
                : [],
        };
    }
    /**
     * Handles the column menu's button prop.
     * @param {KupDataTable | KupTree} comp - Component using the column menu.
     * @param {Column} column - Column of the menu.
     * @returns {GenericObject[]} Buttons props.
     */
    prepButton(comp: KupDataTable | KupTree, column: Column): GenericObject[] {
        let props: GenericObject[] = [];
        if (!this.isTree(comp)) {
            props.push({
                'data-storage': {
                    columnName: column.name,
                },
                icon: 'book',
                id: 'group',
                title:
                    comp.getGroupByName(column.name) != null
                        ? 'Disable grouping'
                        : 'Enable grouping',
            });
        }
        if (comp.removableColumns) {
            props.push({
                'data-storage': {
                    column: column,
                },
                icon: 'table-column-remove',
                id: 'remove',
                title: 'Hide column',
            });
        }
        props.push({
            'data-storage': {
                columnName: column.name,
            },
            icon: 'table-column-plus-after',
            id: 'add',
            title: 'Add column',
        });
        props.push({
            'data-storage': {
                columnName: column.name,
            },
            icon: 'label',
            id: 'description',
            title: 'Add code/description column',
        });
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
        let props: GenericObject[] = [];
        if (
            comp.showFilters &&
            (isStringObject(column.obj) || isCheckbox(column.obj))
        ) {
            const checkBoxesFilter: string[] = comp.getCheckBoxFilterValues(
                column.name
            );
            const columnValues: {
                value: string;
                displayedValue: string;
            }[] = comp.getColumnValues(column);

            if (columnValues.length > 0) {
                props.push({
                    checked: checkBoxesFilter.length == 0,
                    'data-storage': {
                        column: column,
                        value: null,
                    },
                    id: 'global-checkbox',
                    label: '(*All)',
                });
            }
            for (let index = 0; index < columnValues.length; index++) {
                let label = columnValues[index].displayedValue;
                if (isCheckbox(column.obj)) {
                    if (columnValues[index].value == '1') {
                        label = 'Checked';
                    } else {
                        label = 'Unchecked';
                    }
                }
                props.push({
                    checked: checkBoxesFilter.includes(
                        columnValues[index].value
                    ),
                    'data-storage': {
                        column: column,
                        value: columnValues[index].value,
                    },
                    label: label,
                });
            }
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
        if (comp.showFilters && isStringObject(column.obj)) {
            let filterInitialValue = this.filters.getTextFilterValue(
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
                    id: 'filter',
                    initialValue: filterInitialValue,
                    isClearable: true,
                    label: 'Search...',
                },
            ];
        }
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
        switch (compEvent.type) {
            case 'kupCheckboxChange':
                dataStorage = cardData['checkbox'].find((x) => x.id === compID)[
                    'data-storage'
                ];
                this.checkboxChange(
                    comp,
                    compEvent.detail.checked,
                    dataStorage['column'],
                    dataStorage['value']
                );
                break;
            case 'kupButtonClick':
                dataStorage = cardData['button'].find((x) => x.id === compID)[
                    'data-storage'
                ];
                switch (compID) {
                    case 'add':
                        this.addColumn(comp, dataStorage['columnName']);
                        break;
                    case 'description':
                        this.addDescriptionColumn(
                            comp,
                            dataStorage['columnName']
                        );
                        break;
                    case 'group':
                        this.toggleGroup(
                            comp as KupDataTable,
                            dataStorage['columnName']
                        );
                        break;
                    case 'remove':
                        this.removeColumn(comp, dataStorage['column']);
                        break;
                }
                break;
            case 'kupTextFieldClearIconClick':
                dataStorage = cardData['textfield'].find(
                    (x) => x.id === compID
                )['data-storage'];
                this.textfieldChange(comp, null, dataStorage['column']);
                break;
            case 'kupTextFieldInput':
                dataStorage = cardData['textfield'].find(
                    (x) => x.id === compID
                )['data-storage'];
                window.clearTimeout(comp.columnFilterTimeout);
                comp.columnFilterTimeout = window.setTimeout(
                    () =>
                        this.textfieldChange(
                            comp,
                            compEvent.detail.value,
                            dataStorage['column']
                        ),
                    300
                );
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
        if (!this.isTree(comp)) {
            comp.resetCurrentPage();
        }
        let newFilter = '';
        if (value) {
            newFilter = normalizeValue(value.trim(), column.obj);
        }
        const newFilters: GenericFilter = { ...comp.filters };
        setTextFieldFilterValue(newFilters, column.name, newFilter);
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
        filterValue: string
    ): void {
        if (!this.isTree(comp)) {
            comp.resetCurrentPage();
        }

        const newFilters = { ...comp.filters };

        if (checked || filterValue == null) {
            this.filters.addCheckboxFilter(
                newFilters,
                column.name,
                filterValue
            );
        } else {
            this.filters.removeCheckboxFilter(
                newFilters,
                column.name,
                filterValue
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
        column.visible = false;
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
