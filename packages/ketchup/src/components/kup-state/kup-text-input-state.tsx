import { KupState } from './kup-state';

export class KupTextInputState implements KupState {
    public detail = this;

    public name: string = '';

    public toDebugString() {
        return `name=${this.name}`;
    }
}
