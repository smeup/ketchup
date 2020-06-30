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

/** unformat string date DD/MM/YYYY; return Date object */
export function unformatDate(value: string): Date {
    value = value.replace(/\//g, '');
    let format = 'DDMMYYYY';
    if (value.length < 8) {
        format = 'DDMMYY';
    }

    return moment(value, format).toDate();

    /*
    value = value.replace(/\//g, '');
    let day: number = Number(value.substr(0, 2));
    let month: number = Number(value.substr(2, 2)) - 1;
    let year: number = Number(value.substr(4));
    if (year < 100) {
        if (year > 50) {
            year += 1900;
        } else {
            year += 2000;
        }
    }
    return new Date(year, month, day);
    */
}
