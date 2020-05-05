import { KupTextInputState } from './kup-text-input-state';

export class KupTextInputStateEvent {
    getEventName(): string {
        return 'KupTextInputStateEvent';
    }

    emit(payload: KupTextInputState) {
        console.log(`Event sent with payload: ${payload.toDebugString()}`);

        const evt = new CustomEvent<KupTextInputState>(
            this.getEventName(),
            payload
        );
        window.dispatchEvent(evt);
    }
}
