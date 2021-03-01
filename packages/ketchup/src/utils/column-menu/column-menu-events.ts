import { KupCard } from '../../components/kup-card/kup-card';
import { KupDataTable } from '../../components/kup-data-table/kup-data-table';
import {
    Column,
    GenericFilter,
    GroupObject,
} from '../../components/kup-data-table/kup-data-table-declarations';
import {
    addCheckBoxFilterValue,
    normalizeValue,
    removeCheckBoxFilterValue,
    setTextFieldFilterValue,
} from '../../components/kup-data-table/kup-data-table-helper';
import { KupTooltip } from '../../components/kup-tooltip/kup-tooltip';
import { KupTree } from '../../components/kup-tree/kup-tree';
import { GenericObject } from '../../types/GenericTypes';
import { unsetTooltip } from '../helpers';
import { positionRecalc } from '../recalc-position';
import { isTree } from './column-menu';
/**
 * Function called by the component when the column menu must be opened.
 * @param {Event} event - The event itself.
 * @param {KupDataTable | KupTree} comp - Component using the column menu.
 * @param {string} column - Name of the column.
 * @param {KupTooltip} tooltip - Tooltip of the component, when present.
 */
export function openColumnMenu(
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
 * Function called by the component when the column menu must be opened.
 * @param {Event} event - The event itself.
 * @param {KupDataTable | KupTree} comp - Component using the column menu.
 */
export function closeColumnMenu(
    event: Event,
    comp: KupDataTable | KupTree
): void {
    if (event) {
        event.stopPropagation();
    }
    comp.setColumnMenu(null);
}
/**
 * Function called to reposition the column menu card to the appropriate column.
 * @param {KupDataTable | KupTree} comp - Component using the column menu.
 */
export function positionColumnMenu(comp: KupDataTable | KupTree): void {
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
 * Function called by the column menu card when a kupCardEvent is received.
 * @param {CustomEvent} cardEvent - kupCardEvent emitted by the column menu.
 * @param {KupDataTable | KupTree} comp - Component using the column menu.
 */
export function columnMenuEvents(
    cardEvent: CustomEvent,
    comp: KupDataTable | KupTree
): void {
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
                    addColumn(comp, dataStorage['columnName']);
                    break;
                case 'description':
                    addDescriptionColumn(comp, dataStorage['columnName']);
                    break;
                case 'group':
                    toggleGroup(
                        comp as KupDataTable,
                        dataStorage['columnName']
                    );
                    break;
                case 'remove':
                    removeColumn(comp, dataStorage['column']);
                    break;
            }
            break;
        case 'kupTextFieldClearIconClick':
            dataStorage = cardData['textfield'].find((x) => x.id === compID)[
                'data-storage'
            ];
            textFilterChange(comp, null, dataStorage['column']);
            break;
        case 'kupTextFieldInput':
            dataStorage = cardData['textfield'].find((x) => x.id === compID)[
                'data-storage'
            ];
            window.clearTimeout(comp.columnFilterTimeout);
            comp.columnFilterTimeout = window.setTimeout(
                () =>
                    textFilterChange(
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
export function textFilterChange(
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
 * @param {KupDataTable | KupTree} comp - Component using the column menu.
 * @param {boolean} checked - State of the changed checkbox.
 * @param {Column} column - Column of the menu.
 * @param {string} filterValue - Value used to filter.
 */
export function checkboxFilterChange(
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
/**
 * Toggles the grouping of the given column.
 * @param {KupDataTable} comp - Component using the column menu.
 * @param {Column} column - Column of the menu.
 */
function toggleGroup(comp: KupDataTable, column: string): void {
    const group: GroupObject = comp.getGroupByName(column);
    if (group !== null) {
        const index = comp.groups.indexOf(group);
        comp.groups.splice(index, 1);
        comp.groups = [...comp.groups];
    } else {
        comp.groups = [...comp.groups, { column, visible: true }];
    }
    closeColumnMenu(null, comp);
}
/**
 * Emits the kupAddColumn event on the given component.
 * @param {KupDataTable | KupTree} comp - Component using the column menu.
 * @param {Column} column - Column of the menu.
 */
function addColumn(comp: KupDataTable | KupTree, column: string): void {
    comp.kupAddColumn.emit({
        column: column,
    });
    closeColumnMenu(null, comp);
}
/**
 * The given column will be set to be hidden.
 * @param {KupDataTable | KupTree} comp - Component using the column menu.
 * @param {Column} column - Column of the menu.
 */
function removeColumn(comp: KupDataTable | KupTree, column: Column): void {
    column.visible = false;
    closeColumnMenu(null, comp);
}
/**
 * Adds the description column (or code column, if it is a description).
 * @param {KupDataTable | KupTree} comp - Component using the column menu.
 * @param {string} column - Name of the column.
 */
function addDescriptionColumn(
    comp: KupDataTable | KupTree,
    column: string
): void {
    comp.kupAddCodeDecodeColumn.emit({
        column: column,
    });
    closeColumnMenu(null, comp);
}
