import { KupCard } from '../../components/kup-card/kup-card';
import { KupDataTable } from '../../components/kup-data-table/kup-data-table';
import { KupTree } from '../../components/kup-tree/kup-tree';
import { GenericObject } from '../../types/GenericTypes';
import { isTree } from './column-menu';

export function columnMenuEvents(
    cardEvent: CustomEvent,
    comp: KupDataTable | KupTree
) {
    console.log(cardEvent, comp);
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
                comp.onFilterChange2(
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
                        comp.onFilterChange(
                            compEvent.value,
                            dataStorage['column']
                        ),
                    300
                );
                break;
        }
    }
}
