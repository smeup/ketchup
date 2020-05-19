import numeral from 'numeral';
import moment from 'moment';

import { Cell } from '../components/kup-data-table/kup-data-table-declarations';

export function formatToNumber(cell: Cell): number {
    if (cell.obj) {
        return numeral(cell.obj.k).value();
    }

    return numeral(cell.value).value();
}

export function formatToMomentDate(cell: Cell): any {
    let format = 'YYYYMMDD';

    if (cell.obj) {
        const obj = cell.obj;

        if ('D8' === obj.t && '*DMYY' === obj.p) {
            format = 'DDMMYYYY';
        }

        return moment(cell.obj.k, format);
    }

    return moment(cell.value, 'DD/MM/YYYY');
}
