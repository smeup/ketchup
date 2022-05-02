import { calcTotals } from '../../../src/components/kup-data-table/kup-data-table-helper';
import { TotalMode } from '../../../src/components/kup-data-table/kup-data-table-declarations';
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

describe('can handle errors', () => {
    it('without parameters', () => {
        const totals = calcTotals();
        expect(totals).toEqual({});
    });

    it('null rows', () => {
        const totals = calcTotals(null);
        expect(totals).toEqual({});
    });

    it('empty rows', () => {
        const totals = calcTotals([]);
        expect(totals).toEqual({});
    });

    it('rows without total', () => {
        const totals = calcTotals(mockedRows);
        expect(totals).toEqual({});
    });

    it('rows with null total', () => {
        const totals = calcTotals(mockedRows, null);
        expect(totals).toEqual({});
    });

    it('rows with empty total', () => {
        const totals = calcTotals(mockedRows, {});
        expect(totals).toEqual({});
    });
});

describe('it calc totals', () => {
    it('count', () => {
        const totals = calcTotals(mockedRows, {
            FLD1: TotalMode.COUNT,
            FLD2: TotalMode.COUNT,
            FLD3: TotalMode.COUNT,
            FLD4: TotalMode.COUNT,
        });
        expect(totals).toEqual({
            FLD1: 9,
            FLD2: 9,
            FLD3: 9,
            FLD4: 9,
        });
    });

    it('sum', () => {
        const totals = calcTotals(mockedRows, {
            FLD1: TotalMode.SUM,
            FLD2: TotalMode.SUM,
            FLD3: TotalMode.SUM,
            FLD4: TotalMode.SUM,
        });
        expect(totals).toEqual({
            FLD2: 72,
            FLD3: 865.38,
        });
    });

    it('average', () => {
        const totals = calcTotals(mockedRows, {
            FLD1: TotalMode.AVERAGE,
            FLD2: TotalMode.AVERAGE,
            FLD3: TotalMode.AVERAGE,
            FLD4: TotalMode.AVERAGE,
        });
        expect(totals).toEqual({
            FLD2: 8,
            FLD3: 96.15,
        });
    });

    it('mixed', () => {
        const totals = calcTotals(mockedRows, {
            FLD1: TotalMode.SUM,
            FLD2: TotalMode.AVERAGE,
            FLD3: TotalMode.SUM,
            FLD4: TotalMode.COUNT,
        });
        expect(totals).toEqual({
            FLD2: 8,
            FLD3: 865.38,
            FLD4: 9,
        });
    });
});
