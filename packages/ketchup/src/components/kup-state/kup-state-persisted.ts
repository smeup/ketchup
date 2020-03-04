import {
    KupStateEvent
} from './kup-state-event';

import {
    KupStateModel
} from './kup-state-model';

// This is the interface that defines the required attributes
// for a component wishing to be persisted by us.
// It's a good candidate for an abstract class, but Stencil.js
// does not allow to extend abstract classes.
export interface KupStatePersisted<T extends KupStateModel> {
    state: T;

    // Event emitter.
    stateChange: KupStateEvent<T>;

    // Add a listener on our state changes.
    registerState(state: T): void;

    // Trigger an event through our event emitter.
    stateChanged(state: KupStateEvent<T>): void;
}