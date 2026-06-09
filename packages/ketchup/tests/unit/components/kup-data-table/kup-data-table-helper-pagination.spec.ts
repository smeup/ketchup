import {
    getLazyLoadRowsIncrement,
    groupRows,
    hasMoreLazyLoadRows,
    paginateRows,
} from '../../../../src/components/kup-data-table/kup-data-table-helper';
import { KupManager } from '../../../../src/managers/kup-manager/kup-manager';
import { KupDom } from '../../../../src/managers/kup-manager/kup-manager-declarations';
import {
    KupDataColumn,
    KupDataRow,
} from '../../../../src/managers/kup-data/kup-data-declarations';
import { KupDataTableRow } from '../../../../src/components/kup-data-table/kup-data-table-declarations';
import sampleKupDataDataset from '../../../resources/mock/kup-data-dataset-with-places-and-nrs.json';

const dom: KupDom = document.documentElement as KupDom;
if (!dom.ketchup) {
    dom.ketchup = new KupManager();
}

const columns: KupDataColumn[] = sampleKupDataDataset.columns;
const rows: KupDataRow[] = sampleKupDataDataset.rows;

function countRenderedRows(groupedRows: KupDataTableRow[] = []): number {
    let count = 0;

    groupedRows.forEach((row) => {
        if (!row) {
            return;
        }

        count += 1;

        if (row.group?.children?.length) {
            count += countRenderedRows(row.group.children);
        }
    });

    return count;
}

describe('kup datatable pagination helpers', () => {
    it('keeps lazy-load checks on total filtered rows when grouped rows render extra group headers', () => {
        const groupedRows = groupRows(columns, rows, [
            { column: 'FLD1', visible: true },
        ]);
        const currentRowsPerPage = 5;
        const paginatedRows = paginateRows(
            groupedRows,
            1,
            currentRowsPerPage,
            true
        );

        expect(groupedRows.length).toBeLessThan(currentRowsPerPage);
        expect(countRenderedRows(paginatedRows)).toBeGreaterThan(
            currentRowsPerPage
        );
        expect(hasMoreLazyLoadRows(rows.length, currentRowsPerPage)).toBe(true);
    });

    it('calculates lazy-load increments from the remaining filtered rows', () => {
        expect(getLazyLoadRowsIncrement(rows.length, 5, 60)).toBe(
            rows.length - 5
        );
        expect(getLazyLoadRowsIncrement(rows.length, 4, 2)).toBe(2);
        expect(getLazyLoadRowsIncrement(rows.length, rows.length, 60)).toBe(0);
        expect(getLazyLoadRowsIncrement(rows.length, rows.length + 1, 60)).toBe(
            0
        );
    });
});