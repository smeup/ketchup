import { KupState } from '../kup-state/kup-state';
export class KupImageListState implements KupState {
    selectedTreeNodePath: string;
    load: boolean = false;

    public toDebugString() {
        // TODO
        return 'image-list state';
    }
}
