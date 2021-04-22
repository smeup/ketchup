import { GenericFilter } from '../../utils/filters/filters-declarations';
import { TotalsMap } from '../kup-data-table/kup-data-table-declarations';
import { KupState } from '../kup-state/kup-state';
export class KupTreeState implements KupState {
    density: string = 'small';
    globalFilter = false;
    globalFilterValue: string = '';
    showFilters: boolean = false;
    showFooter: boolean = false;
    totals: TotalsMap;
    filters: GenericFilter = {};
    load: boolean = false;

    public toDebugString() {
        // TODO
        return 'tree state';
    }
}
