import { isNumber } from '../../utils/utils';

export function pageChange(pageNumber: number, max: number, perPage: number) {
    if (isNumber(pageNumber)) {
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
    if (isNumber(rowsNumber)) {
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
