import { KupCard } from '../../components/kup-card/kup-card';
import { KupDataTable } from '../../components/kup-data-table/kup-data-table';
import { KupTooltip } from '../../components/kup-tooltip/kup-tooltip';
import { KupTree } from '../../components/kup-tree/kup-tree';
import { GenericObject } from '../../types/GenericTypes';
import { unsetTooltip } from '../helpers';
import { positionRecalc } from '../recalc-position';
import { isTree } from './column-menu';
import { checkboxFilterChange, textFilterChange } from './column-menu-filters';
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
    event.stopPropagation();
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
            case 'kupTextFieldClearIconClick':
                dataStorage = cardData['textfield'].find(
                    (x) => x.id === compID
                )['data-storage'];
                console.log('e');
                textFilterChange(comp, null, dataStorage['column']);
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
                            compEvent.detail.value,
                            dataStorage['column']
                        ),
                    300
                );
                break;
        }
    }
}
