import { KupDataDataset } from '../../managers/kup-data/kup-data-declarations';
import { KupManager } from '../../managers/kup-manager/kup-manager';
import { KupDom } from '../../managers/kup-manager/kup-manager-declarations';
import { KupChart } from './kup-chart';
import { convertColumns, convertRows } from './kup-chart-builder';

const dataMock: KupDataDataset = {
    columns: [
        {
            name: 'Col1',
            title: 'Person',
        },
        {
            name: 'Col2',
            title: 'Value1',
        },
        {
            name: 'Col3',
            title: 'Value2',
        },
    ],
    rows: [
        {
            cells: {
                Col1: {
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: 'CASFRA',
                    },
                    value: 'CASFRA',
                },
                Col2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '10',
                    },
                    value: '10',
                },
                Col3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '100.60',
                    },
                    value: '100.60',
                },
            },
        },
        {
            cells: {
                Col1: {
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: 'DELGIO',
                    },
                    value: 'DELGIO',
                },
                Col2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '6',
                    },
                    value: '6',
                },
                Col3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '67.8',
                    },
                    value: '67.8',
                },
            },
        },
        {
            cells: {
                Col1: {
                    obj: {
                        t: 'CN',
                        p: 'COL',
                        k: 'PARFRA',
                    },
                    value: 'PARFRA',
                },
                Col2: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '5',
                    },
                    value: '5',
                },
                Col3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '120.06',
                    },
                    value: '120.06',
                },
            },
        },
    ],
};

const axis = 'Col1';
const series = [
    { code: 'Col2', decode: 'Decode Col2' },
    { code: 'Col3', decode: 'Decode Col3' },
];

if (!(document.documentElement as KupDom).ketchup) {
    (document.documentElement as KupDom).ketchup = new KupManager();
}

describe('data conversion', () => {
    it('can convert null', () => {
        const columns = convertColumns(null, { axis: null, series: null });
        const rows = convertRows(null, null, false);

        expect(columns).toEqual([]);
        expect(rows).toEqual([]);
    });

    it('can convert empty objects', () => {
        const columns = convertColumns(
            {},
            {
                series: null,
                axis: null,
            }
        );
        const rows = convertRows({}, [], false);

        expect(columns).toEqual([]);
        expect(rows).toEqual([]);
    });

    it('columns conversion', () => {
        const columns = convertColumns(dataMock, {
            axis: axis,
            series,
        });

        expect(columns).toEqual(dataMock.columns);
    });

    it('rows conversion (one serie)', () => {
        const columns = convertColumns(dataMock, {
            axis: axis,
            series: [{ code: 'Col2', decode: 'Decode Col2' }],
        });
        const rows = convertRows(dataMock, columns, false);

        expect(rows).toEqual([
            ['CASFRA', 10],
            ['DELGIO', 6],
            ['PARFRA', 5],
        ]);
    });

    it('rows conversion (two series)', () => {
        const columns = convertColumns(dataMock, { axis: axis, series });
        const rows = convertRows(dataMock, columns, true);

        expect(rows).toEqual([
            ['CASFRA', 10, '10', 100.6, '100.6'],
            ['DELGIO', 6, '6', 67.8, '67.8'],
            ['PARFRA', 5, '5', 120.06, '120.06'],
        ]);
    });
});

describe('kup-chart', () => {
    it('builds', () => {
        expect(new KupChart()).toBeTruthy();
    });
});
