// A concrete implementation of the kup-state using redux.
import { createStore } from 'redux';
import { KupTextInputState } from '../kup-text-input/kup-text-input-state';
import { KupState } from './kup-state';

// TODO: This is the actual store implementation (fictional, for
// example purposes, you probably want a better structured store).
function reduxStore(state = {}, action): object {
    switch (action.type) {
        case 'STORE':
            return action.payload;
        default:
            return state;
    }
}

// Basic implementation of KupState using a Redux backend.
// TODO: add persist layer as described here:
// https://github.com/rt2zz/redux-persist#nested-persists
export class KupStateRedux implements KupState {
    protected stateId: string;

    protected store: any;

    constructor() {
        // TODO: fictional purposes, the stateId is static.
        // You probably want to separate it for each component or
        // move it to `persist()` - e.g. via kupStateModel -
        // for a dynamic set, such as a KV.
        console.log('kupState enabled');
        this.stateId = 'stateId';

        // Init your backend store, in this case it's redux.
        this.store = createStore(reduxStore);
    }

    // Redux specific persist implementation.
    persist(newState: KupTextInputState): void {
        console.log(
            `Persisting in ${this.stateId}: ${newState.toDebugString()}`
        );
        this.store.dispatch({ type: 'STORE', payload: newState });
    }

    // Redux specific rehydrate implementation.
    rehydrate(): object {
        console.log(`Rehydrate called on: ${this.stateId}`);
        return this.store.getState();
    }
}
