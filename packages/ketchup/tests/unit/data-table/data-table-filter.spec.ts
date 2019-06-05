import { filterRows } from '../../../src/components/kup-data-table/kup-data-table-helper';

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
                value: '01/01/2018',
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
                value: '02/01/2018',
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
                value: '03/01/2018',
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
                value: '01/01/2018',
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
                value: '02/01/2018',
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
                value: '03/01/2018',
            },
        },
    },
];

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

        expect(filtered).toHaveLength(4);
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

        expect(filtered).toHaveLength(4);
    });

    it('global filter + column filter', () => {
        const filtered = filterRows(
            mockedRows,
            { FLD1: 'cas', FLD2: '12' },
            'fra',
            ['FLD1', 'FLD2', 'FLD3', 'FLD4']
        );

        expect(filtered).not.toEqual(mockedRows);

        expect(filtered).toHaveLength(1);
    });
});
