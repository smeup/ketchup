import { KupCard } from '../../components/kup-card/kup-card';
import { KupDataTable } from '../../components/kup-data-table/kup-data-table';
import { KupTree } from '../../components/kup-tree/kup-tree';
import { GenericObject } from '../../types/GenericTypes';
import { isTree } from './column-menu';

export function columnMenuEvents(e: CustomEvent, comp: KupDataTable | KupTree) {
    console.log(e, comp);
    const card: KupCard = e.detail.card;
    const cardData = card.data;
    const eventType = e.detail.event.type;
    const compID = e.detail.event.detail.id;
    if (!isTree(comp)) {
        switch (eventType) {
            case 'kupButtonClick':
                const dataStorage: GenericObject[] = cardData['button'].find(
                    (x) => x.id === compID
                )['data-storage'];
                switch (compID) {
                    case 'add':
                        comp.addColumn(e.target);
                        break;
                    case 'description':
                        comp.onAddCodeDecodeColumnClick(e);
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
                window.clearTimeout(this.columnFilterTimeout);
                this.columnFilterTimeout = window.setTimeout(
                    () =>
                        this.onFilterChange(
                            e.detail.value.value,
                            cardData['textfield'][0]['data-storage']['column']
                        ),
                    300
                );
                console.log(e);
                break;
        }
    }
}
