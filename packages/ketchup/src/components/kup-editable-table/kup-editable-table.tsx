import {
    Component,
    Element,
    Event,
    EventEmitter,
    h,
    Host,
    Prop,
    State,
} from '@stencil/core';
import { KupDataTableDataset } from '../kup-data-table/kup-data-table-declarations';
import { KupManager } from '../../managers/kup-manager/kup-manager-declarations';
import { kupManagerInstance } from '../../managers/kup-manager/kup-manager';
import { KupEditableTableUpdatePayload } from './kup-editable-table-declarations';
import { KupDataDataset } from '../../components';

@Component({
    tag: 'kup-editable-table',
    shadow: true,
})
export class KupEditableTable {
    /**
     * References the root HTML element of the component (<kup-editable-table>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    @Prop({ mutable: true }) data: KupDataTableDataset;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();

    /**
     * Events to forward
     */
    private kupDataTableEvents = [];

    private originalData: KupDataTableDataset = null;

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    @Event() kupGenericEvent: EventEmitter<any>;

    /**
     * When the user clicks on Update button
     */
    @Event({
        eventName: 'kup-editable-table-update',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupUpdate: EventEmitter<KupEditableTableUpdatePayload>;

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #forwardAllEvents = (kupDataTable: HTMLElement) => {
        this.kupDataTableEvents.forEach((eventName) => {
            kupDataTable.addEventListener(eventName, (event: CustomEvent) => {
                this.kupGenericEvent.emit({
                    type: eventName,
                    detail: event.detail,
                });
            });
        });
    };

    #handleUpdateClick = () => {
        this.kupUpdate.emit({
            comp: this,
            id: this.rootElement.id,
            originalData: this.originalData,
            updatedData: this.#filterDataTable(this.originalData, this.data),
        });
    };

    #filterDataTable = (
        originalData: KupDataDataset,
        lastData: KupDataDataset
    ) => {
        const updateDataTable = {
            columns: lastData.columns,
            rows: [],
        };

        for (const lastRow of lastData.rows) {
            const newRow = { cells: {}, id: lastRow.id };

            for (const column of lastData.columns) {
                const cellKey = column.name;
                const lastCell = lastRow.cells[cellKey];

                const originalRow = originalData.rows.find(
                    (row) => row.id === lastRow.id
                );
                const originalCell = originalRow
                    ? originalRow.cells[cellKey]
                    : null;

                if (
                    !originalCell ||
                    lastCell.value !== originalCell.value ||
                    lastCell.obj.k !== originalCell.obj.k
                ) {
                    newRow.cells[cellKey] = lastCell; // Mantieni la cella
                }
            }

            updateDataTable.rows.push(newRow);
        }

        return updateDataTable;
    };

    #getPropsFromAttributes = () => {
        const attributes = this.rootElement.attributes;
        const props: { [key: string]: any } = {};

        for (let i = 0; i < attributes.length; i++) {
            const attr = attributes[i];
            props[attr.name] = attr.value;
        }

        return props;
    };

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad = () => {
        this.originalData = JSON.parse(JSON.stringify(this.data));
    };

    componentDidLoad = () => {
        const kupDataTable =
            this.rootElement.shadowRoot.querySelector('kup-data-table');
        if (kupDataTable) {
            this.#forwardAllEvents(kupDataTable);
        }
    };

    render = () => {
        const props = {
            ...this.#getPropsFromAttributes(),
            editableData: true,
            data: this.data,
        };

        return (
            <Host>
                <kup-data-table {...props}></kup-data-table>
                <kup-button
                    onKup-button-click={this.#handleUpdateClick}
                    label="Update"
                ></kup-button>
            </Host>
        );
    };

    disconnectedCallback = () => {
        this.kupManager.theme.unregister(this);
    };
}
