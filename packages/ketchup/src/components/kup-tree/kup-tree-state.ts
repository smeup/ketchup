import { KupState } from '../kup-state/kup-state';

//import {
//GenericFilter,
//GroupObject,
//SortObject,
//} from './kup-tree-declarations';

export class KupTreeState implements KupState {
    density: string = 'small';
    globalFilterValue: string = '';

    public toDebugString() {
        // TODO
        return 'state';
    }
}
