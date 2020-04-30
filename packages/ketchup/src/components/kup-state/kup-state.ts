// KupState provides an abstract definition of how a persistent concrete implementation
// should look like. Every implementation must conform to this interface.
export interface KupState {
    // Persist makes sure to persist data in a supported backend.
    persist(state: any): void;

    // Rehydrate makes sure to restore the state from a supported backend.
    rehydrate(): object;
}
