// TODO: I'd probably put this in a separate, specialized, package.
import { KupTextInputStateEvent } from '../kup-text-input/kup-text-input-state-event';
import { KupTextInputState } from '../kup-text-input/kup-text-input-state';
import { KupStore } from './kup-store';

// TODO: cannot enforce generic here, as Typescript singleton pattern is poorly defined.
// KupStateManager decouples components from state management.
export class KupStateManager {
    private static instance: KupStateManager;
    // The `store` property is accessed actually through the singleton instance,
    // so it's safe to skip warnings about it.
    // (XXX: this line seems ignored by the build pipeline, so I had to disable it
    // globally, excercise for the reader is to re-enable the global `noUnusedLocal`).
    // tslint:disable-next-line
    private _store: KupStore; // make sure class extends this one

    // This is a singleton.
    private constructor() {
        console.log('Inited KupStateManager');
    }

    // Get an instance.
    // TODO: maybe allow a dynamic injection of the "_store"
    public static getInstance(store: KupStore): KupStateManager {
        if (!KupStateManager.instance) {
            // TODO: make sure to only init with kup-state derived classes.
            // We must enforce type checking here as typescript does not support generics
            // with the singleton pattern. We must achieve the same as <T extends KupState>.
            KupStateManager.instance = new KupStateManager();

            // TODO: we can do better here to support dynamic instantiation
            // e.g. using a registry.
            KupStateManager.instance._store = store;
        }

        return KupStateManager.instance;
    }

    public registerListener4KupTextInputStateEvent(
        stateId: string,
        event: KupTextInputStateEvent
    ) {
        console.log(`Registered event: ${event.getEventName()}`);

        window.addEventListener(
            event.getEventName(),
            (ev: CustomEvent<KupTextInputState>) => {
                console.log(
                    `Received an event(${event.getEventName()}): ` +
                        ev.detail.toDebugString()
                );
                this._store.persistState(stateId, ev.detail);
            }
        );
    }

    public getState(stateId: string): any {
        return this._store.getState(stateId);
    }
}
