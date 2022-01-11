import { sortRows } from '../../../src/components/kup-data-table/kup-data-table-helper';
import { SortMode } from '../../../src/components/kup-data-table/kup-data-table-declarations';
import { KupDom } from '../../../src/managers/kup-manager/kup-manager-declarations';
import { KupManager } from '../../../src/managers/kup-manager/kup-manager';
const dom: KupDom = document.documentElement as KupDom;
if (!dom.ketchup) {
    dom.ketchup = new KupManager();
}

const mockedRows = [
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: 'CASFRA',
                },
                value: 'CASFRA',
            },
            FLD2: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '12',
                },
                value: '12',
            },
            FLD3: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '100.60',
                },
                value: '100.60',
            },
            FLD4: {
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '20180101',
                },
                value: '2018-01-01',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: 'DELGIO',
                },
                value: 'DELGIO',
            },
            FLD2: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '8',
                },
                value: '8',
            },
            FLD3: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '67.8',
                },
                value: '67.8',
            },
            FLD4: {
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '20180102',
                },
                value: '2018-01-02',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: 'PARFRA',
                },
                value: 'PARFRA',
            },
            FLD2: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '7',
                },
                value: '7',
            },
            FLD3: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '120.06',
                },
                value: '120.06',
            },
            FLD4: {
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '20180103',
                },
                value: '2018-01-03',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: 'CASFRA',
                },
                value: 'CASFRA',
            },
            FLD2: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '10',
                },
                value: '10',
            },
            FLD3: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '100.60',
                },
                value: '100.60',
            },
            FLD4: {
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '20180101',
                },
                value: '2018-01-01',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: 'DELGIO',
                },
                value: 'DELGIO',
            },
            FLD2: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '6',
                },
                value: '6',
            },
            FLD3: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '67.8',
                },
                value: '67.8',
            },
            FLD4: {
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '20180102',
                },
                value: '2018-01-02',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: 'PARFRA',
                },
                value: 'PARFRA',
            },
            FLD2: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '5',
                },
                value: '5',
            },
            FLD3: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '120.06',
                },
                value: '120.06',
            },
            FLD4: {
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '20180103',
                },
                value: '2018-01-03',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: 'CASFRA',
                },
                value: 'CASFRA',
            },
            FLD2: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '11',
                },
                value: '11',
            },
            FLD3: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '100.60',
                },
                value: '100.60',
            },
            FLD4: {
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '20180101',
                },
                value: '2018-01-01',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: 'DELGIO',
                },
                value: 'DELGIO',
            },
            FLD2: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '7',
                },
                value: '7',
            },
            FLD3: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '67.8',
                },
                value: '67.8',
            },
            FLD4: {
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '20180102',
                },
                value: '2018-01-02',
            },
        },
    },
    {
        cells: {
            FLD1: {
                obj: {
                    t: 'CN',
                    p: 'COL',
                    k: 'PARFRA',
                },
                value: 'PARFRA',
            },
            FLD2: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '6',
                },
                value: '6',
            },
            FLD3: {
                obj: {
                    t: 'NR',
                    p: '',
                    k: '120.06',
                },
                value: '120.06',
            },
            FLD4: {
                obj: {
                    t: 'D8',
                    p: '*YYMD',
                    k: '20180103',
                },
                value: '2018-01-03',
            },
        },
    },
];

describe('it sorts rows', () => {
    it('sort without parameters', () => {
        const sortedRows = sortRows();

        expect(sortedRows).toEqual([]);
    });

    it('sort null rows', () => {
        const sortedRows = sortRows(null);

        expect(sortedRows).toEqual([]);
    });

    it('if no sort value, return rows in the same order', () => {
        const sortedRows = sortRows(mockedRows);

        expect(sortedRows).toEqual(mockedRows);
    });

    it('if null sort value, return rows in the same order', () => {
        const sortedRows = sortRows(mockedRows, null);

        expect(sortedRows).toEqual(mockedRows);
    });

    it('sort on a single column, ascending', () => {
        const sortedRows = sortRows(mockedRows, [
            { column: 'FLD1', sortMode: SortMode.A },
        ]);

        // not same object
        expect(sortedRows).not.toEqual(mockedRows);

        expect(sortedRows.length).toEqual(9);

        // testing sortedRows values
        let row = sortedRows[0];
        expect(row.cells['FLD1'].value).toEqual('CASFRA');
        expect(row.cells['FLD2'].value).toEqual('12');

        row = sortedRows[1];
        expect(row.cells['FLD1'].value).toEqual('CASFRA');
        expect(row.cells['FLD2'].value).toEqual('10');

        row = sortedRows[2];
        expect(row.cells['FLD1'].value).toEqual('CASFRA');
        expect(row.cells['FLD2'].value).toEqual('11');

        row = sortedRows[3];
        expect(row.cells['FLD1'].value).toEqual('DELGIO');
        expect(row.cells['FLD2'].value).toEqual('8');

        row = sortedRows[4];
        expect(row.cells['FLD1'].value).toEqual('DELGIO');
        expect(row.cells['FLD2'].value).toEqual('6');

        row = sortedRows[5];
        expect(row.cells['FLD1'].value).toEqual('DELGIO');
        expect(row.cells['FLD2'].value).toEqual('7');

        row = sortedRows[6];
        expect(row.cells['FLD1'].value).toEqual('PARFRA');
        expect(row.cells['FLD2'].value).toEqual('7');

        row = sortedRows[7];
        expect(row.cells['FLD1'].value).toEqual('PARFRA');
        expect(row.cells['FLD2'].value).toEqual('5');

        row = sortedRows[8];
        expect(row.cells['FLD1'].value).toEqual('PARFRA');
        expect(row.cells['FLD2'].value).toEqual('6');
    });

    it('sort on a single column, descending', () => {
        const sortedRows = sortRows(mockedRows, [
            { column: 'FLD1', sortMode: SortMode.D },
        ]);

        // not same object
        expect(sortedRows).not.toEqual(mockedRows);

        expect(sortedRows.length).toEqual(9);

        // testing sortedRows values
        let row = sortedRows[0];
        expect(row.cells['FLD1'].value).toEqual('PARFRA');
        expect(row.cells['FLD2'].value).toEqual('7');

        row = sortedRows[1];
        expect(row.cells['FLD1'].value).toEqual('PARFRA');
        expect(row.cells['FLD2'].value).toEqual('5');

        row = sortedRows[2];
        expect(row.cells['FLD1'].value).toEqual('PARFRA');
        expect(row.cells['FLD2'].value).toEqual('6');

        row = sortedRows[3];
        expect(row.cells['FLD1'].value).toEqual('DELGIO');
        expect(row.cells['FLD2'].value).toEqual('8');

        row = sortedRows[4];
        expect(row.cells['FLD1'].value).toEqual('DELGIO');
        expect(row.cells['FLD2'].value).toEqual('6');

        row = sortedRows[5];
        expect(row.cells['FLD1'].value).toEqual('DELGIO');
        expect(row.cells['FLD2'].value).toEqual('7');

        row = sortedRows[6];
        expect(row.cells['FLD1'].value).toEqual('CASFRA');
        expect(row.cells['FLD2'].value).toEqual('12');

        row = sortedRows[7];
        expect(row.cells['FLD1'].value).toEqual('CASFRA');
        expect(row.cells['FLD2'].value).toEqual('10');

        row = sortedRows[8];
        expect(row.cells['FLD1'].value).toEqual('CASFRA');
        expect(row.cells['FLD2'].value).toEqual('11');
    });

    it('sort on two column, descending on both', () => {
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
        expect(row.cells['FLD1'].value).toEqual('PARFRA');
        expect(row.cells['FLD2'].value).toEqual('7');

        row = sortedRows[1];
        expect(row.cells['FLD1'].value).toEqual('PARFRA');
        expect(row.cells['FLD2'].value).toEqual('6');

        row = sortedRows[2];
        expect(row.cells['FLD1'].value).toEqual('PARFRA');
        expect(row.cells['FLD2'].value).toEqual('5');

        row = sortedRows[3];
        expect(row.cells['FLD1'].value).toEqual('DELGIO');
        expect(row.cells['FLD2'].value).toEqual('8');

        row = sortedRows[4];
        expect(row.cells['FLD1'].value).toEqual('DELGIO');
        expect(row.cells['FLD2'].value).toEqual('7');

        row = sortedRows[5];
        expect(row.cells['FLD1'].value).toEqual('DELGIO');
        expect(row.cells['FLD2'].value).toEqual('6');

        row = sortedRows[6];
        expect(row.cells['FLD1'].value).toEqual('CASFRA');
        expect(row.cells['FLD2'].value).toEqual('12');

        row = sortedRows[7];
        expect(row.cells['FLD1'].value).toEqual('CASFRA');
        expect(row.cells['FLD2'].value).toEqual('11');

        row = sortedRows[8];
        expect(row.cells['FLD1'].value).toEqual('CASFRA');
        expect(row.cells['FLD2'].value).toEqual('10');
    });

    it('sort on two column, descending on first, ascending on second', () => {
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
        expect(row.cells['FLD1'].value).toEqual('PARFRA');
        expect(row.cells['FLD2'].value).toEqual('5');

        row = sortedRows[1];
        expect(row.cells['FLD1'].value).toEqual('PARFRA');
        expect(row.cells['FLD2'].value).toEqual('6');

        row = sortedRows[2];
        expect(row.cells['FLD1'].value).toEqual('PARFRA');
        expect(row.cells['FLD2'].value).toEqual('7');

        row = sortedRows[3];
        expect(row.cells['FLD1'].value).toEqual('DELGIO');
        expect(row.cells['FLD2'].value).toEqual('6');

        row = sortedRows[4];
        expect(row.cells['FLD1'].value).toEqual('DELGIO');
        expect(row.cells['FLD2'].value).toEqual('7');

        row = sortedRows[5];
        expect(row.cells['FLD1'].value).toEqual('DELGIO');
        expect(row.cells['FLD2'].value).toEqual('8');

        row = sortedRows[6];
        expect(row.cells['FLD1'].value).toEqual('CASFRA');
        expect(row.cells['FLD2'].value).toEqual('10');

        row = sortedRows[7];
        expect(row.cells['FLD1'].value).toEqual('CASFRA');
        expect(row.cells['FLD2'].value).toEqual('11');

        row = sortedRows[8];
        expect(row.cells['FLD1'].value).toEqual('CASFRA');
        expect(row.cells['FLD2'].value).toEqual('12');
    });
});
