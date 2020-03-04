import {
    KupStateModel
} from './kup-state-model';

// Cannot subclass CustomEvent directly because we would otherwise need to ask the caller
// to resolve the event name (super() must be called before than `this`).
// This way we can auto-generate it from the generic type.
export class KupStateEvent<T extends KupStateModel> {
    private eventName: string;

    constructor(payload: new () => T) {
        this.eventName = payload.name;
    }

    // Resolve <T> generic to a string.
    getEventName(): string {
        return this.eventName;
    }

    // Emit the KupStateEvent with a custom payload.
    emit(payload: T) {
        console.log(`Event sent with payload: ${payload.toDebugString()}`);

        const evt = new CustomEvent<T>(this.getEventName(), payload);
        window.dispatchEvent(evt);
    }
}