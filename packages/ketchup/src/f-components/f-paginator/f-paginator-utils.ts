import { KupDom } from '../../managers/kup-manager/kup-manager-declarations';

const dom: KupDom = document.documentElement as KupDom;

export function pageChange(pageNumber: number, max: number, perPage: number) {
    if (dom.ketchup.math.isNumber(pageNumber)) {
        const numberOfPages = Math.ceil(max / perPage);
        let tmpNewPage: number = pageNumber;
        if (tmpNewPage > numberOfPages) {
            tmpNewPage = numberOfPages;
        }
        if (tmpNewPage < 1) {
            tmpNewPage = 1;
        }
        return tmpNewPage;
    }
    return null;
}

export function rowsPerPageChange(rowsNumber: number, max: number) {
    if (dom.ketchup.math.isNumber(rowsNumber)) {
        let tmpRowsPerPage: number = rowsNumber;
        if (tmpRowsPerPage > max) {
            tmpRowsPerPage = max;
        }
        if (tmpRowsPerPage < 1) {
            tmpRowsPerPage = 1;
        }
        return tmpRowsPerPage;
    }
    return null;
}
