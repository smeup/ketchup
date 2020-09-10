import { KupState } from '../kup-state/kup-state';
import {
    BoxRow
} from './kup-box-declarations';


export class KupBoxState implements KupState {

    globalFilterValueState: string = '';
    sortBy: string = '';
    selectedRowsState: BoxRow[] = [];

    /*Add attribute*/

    public toDebugString() {
        // TODO
        return 'state';
    }
}
