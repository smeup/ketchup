import { KupState } from '../kup-state/kup-state';
import { BoxRow } from './kup-box-declarations';

export class KupBoxState implements KupState {
    globalFilterValue: string = '';
    sortBy: string = '';
    selectedRowsState: string = '';
    pageSelected: number = 1;
    rowsPerPage: number = 0;

    /*Add attribute*/

    public toDebugString() {
        // TODO
        return 'state';
    }
}
