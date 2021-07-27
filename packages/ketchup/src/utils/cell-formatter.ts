import numeral from 'numeral';

import { Cell } from '../components/kup-data-table/kup-data-table-declarations';

export function formatToNumber(cell: Cell): number {
    if (cell.obj) {
        return numeral(cell.obj.k).value();
    }

    return numeral(cell.value).value();
}
