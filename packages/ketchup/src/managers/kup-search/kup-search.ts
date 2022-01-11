import { KupCard } from '../../components/kup-card/kup-card';
import {
    KupCardEventPayload,
    KupCardFamily,
} from '../../components/kup-card/kup-card-declarations';
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
     * @param {Partial<KupCard>} props - The props of the search card. When missing, the search will display a spinner in place of the data table.
     * @returns {HTMLKupCardElement} The search card created by this method.
     */
    start(callback: Function, props?: Partial<KupCard>): HTMLKupCardElement {
        const card = document.createElement('kup-card');
        card.data = {};
        card.isMenu = true;
        card.layoutFamily = KupCardFamily.DIALOG;
        card.layoutNumber = 6;
        card.menuVisible = false;
        card.sizeX = '50vw';
        card.sizeY = '50vh';
        if (props) {
            for (const key in props) {
                const prop = props[key];
                card[key] = prop;
            }
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
        card.style.position = 'fixed';
        card.style.left = '0';
        card.style.top = '0';
        this.activeCards.add(card);
        card.addEventListener('kup-card-close', () => {
            this.activeCards.delete(card);
        });
        card.addEventListener(
            'kup-card-event',
            (e: CustomEvent<KupCardEventPayload>) => {
                const cardDetail = e.detail;
                const datatableDetail = cardDetail.event.detail;
                if (cardDetail.event.type === 'kup-datatable-rowselected') {
                    callback(datatableDetail);
                    this.activeCards.delete(card);
                    card.remove();
                }
            }
        );
        card.addEventListener('kup-card-ready', () => {
            const x = card.clientWidth / 2;
            const y = card.clientHeight / 2;
            card.setAttribute('data-x', x.toString());
            card.setAttribute('data-y', y.toString());
            card.style.transform = 'translate(' + x + 'px,' + y + 'px)';
            card.menuVisible = true;
        });
        this.container.appendChild(card);
        return card;
    }
}
