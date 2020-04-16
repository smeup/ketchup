import { KupChart } from './kup-chart';

import { convertColumns, convertRows } from './kup-chart-builder';
import { DataTable } from '../kup-data-table/kup-data-table-declarations';

const dataMock: DataTable = {
    columns: [
        {
            name: 'Col1',
            title: 'Person',
            size: 10,
        },
        {
            name: 'Col2',
            title: 'Value1',
            size: 10,
        },
        {
            name: 'Col3',
            title: 'Value2',
            size: 10,
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
const series = ['Col2', 'Col3'];

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

    it.skip('rows conversion (one serie)', () => {
        const columns = convertColumns(dataMock, {
            axis: axis,
            series: ['Col2'],
        });
        const rows = convertRows(dataMock, columns, true);

        expect(rows).toEqual([
            ['CASFRA', 10],
            ['DELGIO', 6],
            ['PARFRA', 5],
        ]);
    });

    it.skip('rows conversion (two series)', () => {
        const columns = convertColumns(dataMock, { axis: axis, series });
        const rows = convertRows(dataMock, columns, true);

        expect(rows).toEqual([
            ['CASFRA', 10, 100.6],
            ['DELGIO', 6, 67.8],
            ['PARFRA', 5, 120.06],
        ]);
    });
});

describe('kup-chart', () => {
    it('builds', () => {
        expect(new KupChart()).toBeTruthy();
    });
});
