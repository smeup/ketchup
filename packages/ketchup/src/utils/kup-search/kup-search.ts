import type { KupCardEventPayload } from '../../components/kup-card/kup-card-declarations';
import type { KupDataTable } from '../../components/kup-data-table/kup-data-table';
import {
    KupSearchEventPayload,
    searchStartEvent,
} from './kup-search-declarations';

/**
 * Handles operations and formatting of dates.
 * @module KupSearch
 */
export class KupSearch {
    activeCards: Set<HTMLKupCardElement>;
    container: HTMLElement;
    /**
     * Initializes KupSearch.
     */
    constructor() {
        this.container = document.createElement('div');
        this.container.setAttribute('kup-search', '');
        document.body.appendChild(this.container);
        this.activeCards = new Set();
    }
    /**
     * Starts the search process.
     * @param {Function} callback - The callback that must be invoked when the search is over.
     * @param {Partial<KupDataTable>} props - The props of the search data table. When missing, the search dialog will be initialized with a spinner and the kup-search-start event will be fired.
     * @returns {HTMLKupCardElement} The search card created by this method.
     */
    start(
        callback: Function,
        props?: Partial<KupDataTable>
    ): HTMLKupCardElement {
        const card = document.createElement('kup-card');
        card.addEventListener(
            'kup-card-event',
            (e: CustomEvent<KupCardEventPayload>) => {
                if (e.detail.event.type === 'kup-datatable-rowselected') {
                    callback();
                    this.activeCards.delete(card);
                    card.remove();
                }
            }
        );
        if (props) {
            card.data.datatable = [{ ...props }];
        } else {
            const e = new CustomEvent<KupSearchEventPayload>(searchStartEvent, {
                bubbles: true,
                cancelable: true,
                detail: {
                    card: card,
                },
            });
            document.dispatchEvent(e);
        }
        this.activeCards.add(card);
        this.container.appendChild(card);
        return card;
    }
}
