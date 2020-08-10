// KupStore provides an abstract definition of how a persistent concrete implementation
// should look like. Every implementation must conform to this interface.
export interface KupStore {
    // PersistState makes sure to persist data in a supported backend.
    persistState(componentId: string, state: any): void;

    // GetState makes sure to restore the state from a supported backend.
    getState(componentId: string): any;
}
