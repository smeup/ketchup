import { sortRows } from '../../../../src/components/kup-data-table/kup-data-table-helper';
import { SortMode } from '../../../../src/components/kup-data-table/kup-data-table-declarations';
import { KupDom } from '../../../../src/managers/kup-manager/kup-manager-declarations';
import { KupManager } from '../../../../src/managers/kup-manager/kup-manager';
const dom: KupDom = document.documentElement as KupDom;
if (!dom.ketchup) {
    dom.ketchup = new KupManager();
}
import sampleKupDataDataset from '../../../resources/mock/kup-data-dataset-with-people-nrs-dates.json';

const mockedRows = sampleKupDataDataset.rows;

describe('kup datatable sorting rows', () => {
    it('sorts without parameters', () => {
        const sortedRows = sortRows();

        expect(sortedRows).toEqual([]);
    });

    it('sorts undefined rows', () => {
        const sortedRows = sortRows(undefined);

        expect(sortedRows).toEqual([]);
    });

    it('returns rows in the same order if no sort value', () => {
        const sortedRows = sortRows(mockedRows);

        expect(sortedRows).toEqual(mockedRows);
    });

    it('returns rows in the same order if null sort value', () => {
        const sortedRows = sortRows(mockedRows, undefined);

        expect(sortedRows).toEqual(mockedRows);
    });

    it('sorts on a single column, ascending', () => {
        const sortedRows = sortRows(mockedRows, [
            { column: 'FLD1', sortMode: SortMode.A },
        ]);

        // not same object
        expect(sortedRows).not.toEqual(mockedRows);

        expect(sortedRows.length).toEqual(9);

        // testing sortedRows values
        let row = sortedRows[0];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('CASFRA');
            expect(row.cells['FLD2'].value).toEqual('12');
        }

        row = sortedRows[1];

        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('CASFRA');
            expect(row.cells['FLD2'].value).toEqual('10');
        }

        row = sortedRows[2];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('CASFRA');
            expect(row.cells['FLD2'].value).toEqual('11');
        }
        row = sortedRows[3];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('DELGIO');
            expect(row.cells['FLD2'].value).toEqual('8');
        }
        row = sortedRows[4];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('DELGIO');
            expect(row.cells['FLD2'].value).toEqual('6');
        }
        row = sortedRows[5];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('DELGIO');
            expect(row.cells['FLD2'].value).toEqual('7');
        }
        row = sortedRows[6];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('PARFRA');
            expect(row.cells['FLD2'].value).toEqual('7');
        }
        row = sortedRows[7];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('PARFRA');
            expect(row.cells['FLD2'].value).toEqual('5');
        }
        row = sortedRows[8];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('PARFRA');
            expect(row.cells['FLD2'].value).toEqual('6');
        }
    });

    it('sorts on a single column, descending', () => {
        const sortedRows = sortRows(mockedRows, [
            { column: 'FLD1', sortMode: SortMode.D },
        ]);

        // not same object
        expect(sortedRows).not.toEqual(mockedRows);

        expect(sortedRows.length).toEqual(9);

        // testing sortedRows values
        let row = sortedRows[0];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('PARFRA');
            expect(row.cells['FLD2'].value).toEqual('7');
        }
        row = sortedRows[1];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('PARFRA');
            expect(row.cells['FLD2'].value).toEqual('5');
        }
        row = sortedRows[2];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('PARFRA');
            expect(row.cells['FLD2'].value).toEqual('6');
        }
        row = sortedRows[3];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('DELGIO');
            expect(row.cells['FLD2'].value).toEqual('8');
        }
        row = sortedRows[4];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('DELGIO');
            expect(row.cells['FLD2'].value).toEqual('6');
        }
        row = sortedRows[5];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('DELGIO');
            expect(row.cells['FLD2'].value).toEqual('7');
        }
        row = sortedRows[6];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('CASFRA');
            expect(row.cells['FLD2'].value).toEqual('12');
        }
        row = sortedRows[7];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('CASFRA');
            expect(row.cells['FLD2'].value).toEqual('10');
        }
        row = sortedRows[8];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('CASFRA');
            expect(row.cells['FLD2'].value).toEqual('11');
        }
    });

    it('sorts on two column, descending on both', () => {
        const sortedRows = sortRows(mockedRows, [
            { column: 'FLD1', sortMode: SortMode.D },
            { column: 'FLD2', sortMode: SortMode.D },
        ]);

        // not same object
        expect(sortedRows).not.toEqual(mockedRows);

        // same length and greater than 0
        expect(sortedRows.length).toEqual(9);

        // testing sortedRows values
        let row = sortedRows[0];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('PARFRA');
            expect(row.cells['FLD2'].value).toEqual('7');
        }
        row = sortedRows[1];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('PARFRA');
            expect(row.cells['FLD2'].value).toEqual('6');
        }
        row = sortedRows[2];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('PARFRA');
            expect(row.cells['FLD2'].value).toEqual('5');
        }
        row = sortedRows[3];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('DELGIO');
            expect(row.cells['FLD2'].value).toEqual('8');
        }
        row = sortedRows[4];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('DELGIO');
            expect(row.cells['FLD2'].value).toEqual('7');
        }
        row = sortedRows[5];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('DELGIO');
            expect(row.cells['FLD2'].value).toEqual('6');
        }
        row = sortedRows[6];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('CASFRA');
            expect(row.cells['FLD2'].value).toEqual('12');
        }
        row = sortedRows[7];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('CASFRA');
            expect(row.cells['FLD2'].value).toEqual('11');
        }
        row = sortedRows[8];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('CASFRA');
            expect(row.cells['FLD2'].value).toEqual('10');
        }
    });

    it('sorts on two column, descending on first, ascending on second', () => {
        const sortedRows = sortRows(mockedRows, [
            { column: 'FLD1', sortMode: SortMode.D },
            { column: 'FLD2', sortMode: SortMode.A },
        ]);

        // not same object
        expect(sortedRows).not.toEqual(mockedRows);

        // same length and greater than 0
        expect(sortedRows.length).toEqual(9);

        // testing sortedRows values
        let row = sortedRows[0];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('PARFRA');
            expect(row.cells['FLD2'].value).toEqual('5');
        }
        row = sortedRows[1];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('PARFRA');
            expect(row.cells['FLD2'].value).toEqual('6');
        }
        row = sortedRows[2];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('PARFRA');
            expect(row.cells['FLD2'].value).toEqual('7');
        }
        row = sortedRows[3];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('DELGIO');
            expect(row.cells['FLD2'].value).toEqual('6');
        }
        row = sortedRows[4];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('DELGIO');
            expect(row.cells['FLD2'].value).toEqual('7');
        }
        row = sortedRows[5];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('DELGIO');
            expect(row.cells['FLD2'].value).toEqual('8');
        }
        row = sortedRows[6];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('CASFRA');
            expect(row.cells['FLD2'].value).toEqual('10');
        }
        row = sortedRows[7];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('CASFRA');
            expect(row.cells['FLD2'].value).toEqual('11');
        }
        row = sortedRows[8];
        if (row && row.cells) {
            expect(row.cells['FLD1'].value).toEqual('CASFRA');
            expect(row.cells['FLD2'].value).toEqual('12');
        }
    });
});
