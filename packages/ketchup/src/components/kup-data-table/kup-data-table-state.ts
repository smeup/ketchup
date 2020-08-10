import { KupState } from '../kup-state/kup-state';

import {
    GenericFilter,
    GroupObject,
    SortObject,
} from './kup-data-table-declarations';

export class KupDataTableState implements KupState {
    filters: GenericFilter = {};
    expandGroups = false;
    density: string = 'small';
    enableSortableColumns: boolean = false;
    forceOneLine: boolean = false;
    globalFilter = false;
    globalFilterValue = '';
    groups: Array<GroupObject> = [];
    headerIsPersistent = true;
    loadMoreLimit: number = 1000;
    multiSelection = false;
    rowsPerPage = 10;
    showFilters = false;
    showHeader = true;
    showLoadMore: boolean = false;
    sortEnabled = true;
    sort: Array<SortObject> = [];
    sortableColumnsMutateData: boolean = true;

    public toDebugString() {
        // TODO
        return 'state';
    }
}
