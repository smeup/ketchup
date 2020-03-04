import { KupStateEvent } from './kup-state-event';
import { KupStateModel } from './kup-state-model';

// TODO: I'd probably put this in a separate, specialized, package.
import { KupStateRedux } from './kup-state-redux';

// TODO: cannot enforce generic here, as Typescript singleton pattern is poorly defined.
// KupStateManager decouples components from state management.
export class KupStateManager {
    private static instance: KupStateManager;
    // The `store` property is accessed actually through the singleton instance,
    // so it's safe to skip warnings about it.
    // (XXX: this line seems ignored by the build pipeline, so I had to disable it
    // globally, excercise for the reader is to re-enable the global `noUnusedLocal`).
    // tslint:disable-next-line
    private _store: KupStateRedux; // make sure class extends this one

    // This is a singleton.
    private constructor() {
        console.log("Inited KupStateManager");
    }

    // Get an instance.
    // TODO: maybe allow a dynamic injection of the "_store"
    public static getInstance(): KupStateManager {
        if (!KupStateManager.instance) {
            // TODO: make sure to only init with kup-state derived classes.
            // We must enforce type checking here as typescript does not support generics
            // with the singleton pattern. We must achieve the same as <T extends KupState>.
            KupStateManager.instance = new KupStateManager();

            // TODO: we can do better here to support dynamic instantiation
            // e.g. using a registry.
            KupStateManager.instance._store = new KupStateRedux();
        }

        return KupStateManager.instance;
    }

    // Register a listener to decouple the state management from the component business logic.
    public registerListener(event: KupStateEvent<any>) {
        console.log(`Registered event: ${event.getEventName()}`);

        window.addEventListener(event.getEventName(), (ev: CustomEvent<KupStateModel>) => {
            console.log(`Received an event(${event.getEventName()}): ` + ev.detail.toDebugString());
            this._store.persist(ev.detail);
        });
    }

    // Retrieve the store state.
    public getStore(): object {
        return this._store.rehydrate();
    }
}