import { KupState } from '../kup-state/kup-state';
export class KupTreeState implements KupState {
    density: string = 'small';
    globalFilterValue: string = '';

    public toDebugString() {
        // TODO
        return 'tree state';
    }
}
