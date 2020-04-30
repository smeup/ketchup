import { KupStateModel } from '../kup-state/kup-state-model';

export class KupTextInputState implements KupStateModel {
    public detail = this;

    public name: string = 'Ale';

    public toDebugString() {
        return `name=${this.name}`;
    }
}
