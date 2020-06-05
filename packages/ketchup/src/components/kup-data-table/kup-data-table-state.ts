import { KupState } from '../kup-state/kup-state';

import { GenericMap } from './kup-data-table-declarations';

export class KupDataTableState implements KupState {
    filters: GenericMap = {};

    public toDebugString() {
        return 'TODO';
    }
}
