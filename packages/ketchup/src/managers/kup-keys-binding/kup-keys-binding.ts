import { KupEventPayload } from '../../types/GenericTypes';
import { GenericCallback, KupKey } from './kup-keys-binding-declarations';

/**
 * Handles keys binding listeners.
 * @module KupKeysBinding
 */
export class KupKeysBinding {
    #keysEvents: Map<string, GenericCallback>;

    constructor() {
        this.#keysEvents = new Map();
        document.addEventListener('keydown', this.#checkEvent.bind(this));
    }

    /**
     * Registers key and associated event.
     * @param {KupKey} key - Key to listen for.
     * @param {GenericCallback} event - Event to start when key is pressed
     */
    register(key: KupKey, event: GenericCallback): void {
        console.log('Registered', key, event);
        this.#keysEvents.set(key, event);
    }

    /**
     * Unregisteres key and associated event.
     * @param {KupKey} key - Key to remove.
     */
    unregister(key: KupKey): void {
        this.#keysEvents.delete(key);
    }

    #checkEvent(keyboardEvent: KeyboardEvent) {
        console.log('check event');
        const event = this.#keysEvents.get(keyboardEvent.key);
        if (event) event();
    }
}
