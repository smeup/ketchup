import { KupDataColumn } from '../../../src/managers/kup-data/kup-data-declarations';

const mockedColumns: KupDataColumn[] = [
    {
        name: 'FLD1',
        title: 'Column A',
        size: '',
    },
    {
        name: 'FLD2',
        title: 'Column B',
        size: '10',
        obj: {
            t: 'NR',
            p: '',
            k: '',
        },
    },
    {
        name: 'FLD3',
        title: 'Column C',
        size: '10',
        obj: {
            t: 'NR',
            p: '',
            k: '',
        },
    },
    {
        name: 'FLD4',
        title: 'Column D',
        size: '10',
        obj: {
            t: 'D8',
            p: '*YYMD',
            k: '',
        },
        icon: 'calendar',
    },
];

export function MockedRowsFactory() {
    let mockedRows = [
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
                        k: '',
                    },
                    value: '',
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
                        k: '',
                    },
                    value: '',
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
                        k: 'SANCOS',
                    },
                    value: 'SANCOS',
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
                        k: '',
                    },
                    value: '',
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
                        k: '',
                    },
                    value: '',
                },
                FLD3: {
                    obj: {
                        t: 'NR',
                        p: '',
                        k: '46.06',
                    },
                    value: '46.06',
                },
                FLD4: {
                    obj: {
                        t: 'D8',
                        p: '*YYMD',
                        k: '20190103',
                    },
                    value: '2019-01-03',
                },
            },
        },
    ];
    return {
        columns: mockedColumns,
        rows: mockedRows,
    };
}
