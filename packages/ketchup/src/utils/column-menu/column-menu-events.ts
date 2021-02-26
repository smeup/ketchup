import { KupCard } from '../../components/kup-card/kup-card';
import { KupDataTable } from '../../components/kup-data-table/kup-data-table';
import {
    Column,
    GenericFilter,
} from '../../components/kup-data-table/kup-data-table-declarations';
import {
    addCheckBoxFilterValue,
    normalizeValue,
    removeCheckBoxFilterValue,
    setTextFieldFilterValue,
} from '../../components/kup-data-table/kup-data-table-helper';
import { KupTree } from '../../components/kup-tree/kup-tree';
import { GenericObject } from '../../types/GenericTypes';
import { isTree } from './column-menu';
/**
 * Function called by the column menu card when a kupCardEvent is received.
 * @param {CustomEvent} cardEvent - kupCardEvent emitted by the column menu.
 * @param {KupDataTable | KupTree}  comp - Component using the column menu.
 */
export function columnMenuEvents(
    cardEvent: CustomEvent,
    comp: KupDataTable | KupTree
): void {
    const card: KupCard = cardEvent.detail.card;
    const cardData = card.data;
    const compEvent = cardEvent.detail.event;
    const compID = compEvent.detail.id;
    if (!isTree(comp)) {
        let dataStorage: GenericObject[];
        switch (compEvent.type) {
            case 'kupCheckboxChange':
                dataStorage = cardData['checkbox'].find((x) => x.id === compID)[
                    'data-storage'
                ];
                checkboxFilterChange(
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
                        comp.addColumn(cardEvent.target);
                        break;
                    case 'description':
                        comp.onAddCodeDecodeColumnClick(cardEvent);
                        break;
                    case 'group':
                        comp.switchColumnGroup(dataStorage['columnName']);
                        break;
                    case 'remove':
                        comp.removeColumn(dataStorage['column']);
                        break;
                }
                break;
            case 'kupTextFieldInput':
                dataStorage = cardData['textfield'].find(
                    (x) => x.id === compID
                )['data-storage'];
                window.clearTimeout(comp.columnFilterTimeout);
                comp.columnFilterTimeout = window.setTimeout(
                    () =>
                        textFilterChange(
                            comp,
                            compEvent.value,
                            dataStorage['column']
                        ),
                    300
                );
                break;
        }
    }
}
/**
 * Triggered when the text filter changes.
 * @param {KupDataTable | KupTree}  comp - Component using the column menu.
 * @param {string} value - New value of the filter.
 * @param {Column} column - Column of the menu.
 */
function textFilterChange(
    comp: KupDataTable | KupTree,
    value: string,
    column: Column
): void {
    if (!isTree(comp)) {
        comp.resetCurrentPage();
        let newFilter = '';
        if (value) {
            newFilter = normalizeValue(value.trim(), column.obj);
        }
        const newFilters: GenericFilter = { ...comp.filters };
        setTextFieldFilterValue(newFilters, column.name, newFilter);
        comp.filters = newFilters;
    }
}
/**
 * Triggered when the checkbox list changes.
 * @param {KupDataTable | KupTree}  comp - Component using the column menu.
 * @param {boolean} checked - State of the changed checkbox.
 * @param {Column} column - Column of the menu.
 * @param {string} filterValue - Value used to filter.
 */
function checkboxFilterChange(
    comp: KupDataTable | KupTree,
    checked: boolean,
    column: Column,
    filterValue: string
): void {
    if (!isTree(comp)) {
        comp.resetCurrentPage();

        const newFilters = { ...comp.filters };

        if (checked || filterValue == null) {
            addCheckBoxFilterValue(newFilters, column.name, filterValue);
        } else {
            removeCheckBoxFilterValue(newFilters, column.name, filterValue);
        }

        comp.filters = newFilters;
    }
}
