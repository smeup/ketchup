import { GenericCallback } from './kup-keys-binding-declarations';

/**
 * Handles keys binding listeners.
 * @module KupKeysBinding
 */
export class KupKeysBinding {
    #SEPARATOR_KEYS_COMBO = '+';
    #pressedKeys: Set<string>;
    #keysEvents: Map<string, { event: GenericCallback; isLunched: boolean }>;

    constructor() {
        this.#keysEvents = new Map();
        this.#pressedKeys = new Set();
        document.addEventListener('keydown', this.#checkEvent.bind(this));
        document.addEventListener('keyup', () => {
            this.#pressedKeys.clear();
            this.#clearKey.bind(this);
        });
        window.addEventListener('blur', () => {
            this.#pressedKeys.clear();
        });
    }

    /**
     * Registers key shortcut (can be also a combination of keys) and associated event.
     * @param {string} key - Key to listen for.
     * @param {GenericCallback} event - Event to start when key is pressed
     */
    register(key: string, event: GenericCallback): void {
        if (!key || !event) {
            return;
        }

        this.#keysEvents.set(key.toLowerCase(), { event, isLunched: false });
    }

    /**
     * Unregisteres key shortcut and associated event.
     * @param {string} key - Key to remove.
     */
    unregister(key: string): void {
        if (!key) {
            return;
        }
        this.#keysEvents.delete(key.toLowerCase());
    }

    #checkEvent(keyboardEvent: KeyboardEvent) {
        const keyPressed = keyboardEvent.key.toLowerCase();
        this.#pressedKeys.add(keyPressed);
        console.log('press key', this.#keysEvents, this.#getKeysCombination());

        const keyEvent = this.#keysEvents.get(this.#getKeysCombination());
        if (keyEvent && !keyEvent.isLunched) {
            keyboardEvent.preventDefault();
            keyEvent.event();
            keyEvent.isLunched = true;
        }
    }

    #clearKey(keyboardEvent: KeyboardEvent) {
        const keyReleased = keyboardEvent.key.toLowerCase();
        const keyEvent = this.#keysEvents.get(this.#getKeysCombination());
        if (keyEvent && keyEvent.isLunched) {
            keyEvent.isLunched = false;
        }
        this.#pressedKeys.delete(keyReleased);
    }

    #getKeysCombination(): string {
        return Array.from(this.#pressedKeys).join(this.#SEPARATOR_KEYS_COMBO);
    }
}
