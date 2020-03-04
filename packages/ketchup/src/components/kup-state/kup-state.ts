
// KupState provides an abstract definition of how a persistent concrete implementation
// should look like. Every implementation must conform to this interface.
export abstract class KupState {
    protected stateId: string;

    // Your real store object (redux, flux, vuex, a remote connection or whatever makes sense to you)
    protected store: any;

    constructor(stateId: string) {
        console.log('kupState enabled');
        this.stateId = stateId;
    }

    // Persist makes sure to persist data in a supported backend.
    abstract persist(state: any): void;

    // Rehydrate makes sure to restore the state from a supported backend.
    abstract rehydrate(): object;
}