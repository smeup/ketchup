import { filterRows } from '../../../src/components/kup-data-table/kup-data-table-helper';
import { MockedRowsFactory } from './mocked-data';

const mockedRows = MockedRowsFactory();

const mockedRowsWithEmptyValues = MockedRowsFactory();
mockedRowsWithEmptyValues[0].cells.FLD1.value = '';
mockedRowsWithEmptyValues[2].cells.FLD1.value = '';

const displayedColumnsNames = ['FLD1', 'FLD2', 'FLD3', 'FLD4'];

describe('it filters rows', () => {
    it('filter without parameters', () => {
        const filtered = filterRows();

        expect(filtered).toEqual([]);
    });

    it('filter null rows', () => {
        const filtered = filterRows(null);

        expect(filtered).toEqual([]);
    });

    it('if no / null / empty filter, return rows as they are', () => {
        let filtered = filterRows(mockedRows);

        expect(filtered).toEqual(mockedRows);

        filtered = filterRows(mockedRows, null);

        expect(filtered).toEqual(mockedRows);

        filtered = filterRows(mockedRows, {});

        expect(filtered).toEqual(mockedRows);
    });

    it('returns empty array if no row matches', () => {
        const filtered = filterRows(mockedRows, {
            FLD1: 'clearly fake filter',
        });

        expect(filtered).not.toEqual(mockedRows);

        expect(filtered).toHaveLength(0);
    });

    it('filter on FLD1', () => {
        const filtered = filterRows(mockedRows, { FLD1: 'fra' });

        expect(filtered).not.toEqual(mockedRows);

        expect(filtered).toHaveLength(5);
    });

    it('filter on FLD1 and FLD2', () => {
        const filtered = filterRows(mockedRows, { FLD1: 'fra', FLD2: '12' });

        expect(filtered).not.toEqual(mockedRows);

        expect(filtered).toHaveLength(1);
    });

    it('global filter without columns', () => {
        let filtered = filterRows(mockedRows, null, 'fra');

        expect(filtered).toEqual(mockedRows);

        filtered = filterRows(mockedRows, null, 'fra', null);

        expect(filtered).toEqual(mockedRows);

        filtered = filterRows(mockedRows, null, 'fra', []);

        expect(filtered).toEqual(mockedRows);
    });

    it('global filter with columns', () => {
        const filtered = filterRows(mockedRows, null, 'fra', [
            'FLD1',
            'FLD2',
            'FLD3',
            'FLD4',
        ]);

        expect(filtered).not.toEqual(mockedRows);

        expect(filtered).toHaveLength(5);
    });

    it('global filter + column filter', () => {
        const filtered = filterRows(
            mockedRows,
            { FLD1: 'cas', FLD2: '12' },
            'fra',
          displayedColumnsNames
        );

        expect(filtered).not.toEqual(mockedRows);

        expect(filtered).toHaveLength(1);
    });

    describe(`with filter set to ''`, () => {

        const columnToFilterOn = 'FLD1';

        it('on column filter', () => {
            const filtered = filterRows(
              mockedRowsWithEmptyValues,
              {[columnToFilterOn]: "''"}
            );

            expect(filtered).toHaveLength(3);
            filtered.forEach(row => {
                expect(row.cells[columnToFilterOn].value).toBe('');
            })

        });

        it('on global column filter', () => {
            const filtered = filterRows(
              mockedRowsWithEmptyValues,
              {},
              "''",
              displayedColumnsNames
            );

            // Expect to match the given number of items
            expect(filtered).toHaveLength(5);
            filtered.forEach(row => {
                // Checks if there is at least a '' value in one of the displayed columns
                expect(displayedColumnsNames.reduce((whiteSpaceFound, col) => row.cells[col] && row.cells[col].value === '' ? true : whiteSpaceFound, false))
                  .toBeTruthy();
            })

        });
    });
});
