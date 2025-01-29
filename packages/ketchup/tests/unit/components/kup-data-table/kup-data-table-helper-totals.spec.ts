import { calcTotals } from '../../../../src/components/kup-data-table/kup-data-table-helper';
import {
    KupDataTableRow,
    TotalMode,
} from '../../../../src/components/kup-data-table/kup-data-table-declarations';
import { KupDom } from '../../../../src/managers/kup-manager/kup-manager-declarations';
import { KupManager } from '../../../../src/managers/kup-manager/kup-manager';
import sampleDatesetMatWithFormulas from '../../../resources/mock/kup-data-dataset-mat-with-formulas.json';
import { KupDatesLocales } from '../../../../src/managers/kup-dates/kup-dates-declarations';
import { KupDataColumn } from '../../../../src/managers/kup-data/kup-data-declarations';

const locale = 'it' as KupDatesLocales;
const dom: KupDom = document.documentElement as KupDom;
dom.ketchup = new KupManager({ dates: { locale } });

const mockedColumns: KupDataColumn[] = sampleDatesetMatWithFormulas.columns;
const mockedRows: KupDataTableRow[] = sampleDatesetMatWithFormulas.rows;

describe('kup datatable totalizations', () => {
    it('handles error with empty objects', () => {
        const totals: {
            [index: string]: string;
        } = calcTotals({}, []);
        expect(totals).toEqual({});
    });

    it('calculates COUNT', () => {
        const totals: {
            [index: string]: string;
        } = calcTotals(
            {
                XXCODI: TotalMode.COUNT,
                XXDATE: TotalMode.COUNT,
                COL1: TotalMode.COUNT,
                COL2: TotalMode.COUNT,
                COL3: TotalMode.COUNT,
                COL4: TotalMode.COUNT,
            },
            mockedRows,
            mockedColumns
        );
        expect(totals).toEqual({
            XXCODI: '6',
            XXDATE: '6',
            COL1: '6',
            COL2: '6',
            COL3: '6',
            COL4: '6',
        });
    });

    it('calculates DISTINCT', () => {
        const totals: {
            [index: string]: string;
        } = calcTotals(
            {
                XXCODI: TotalMode.DISTINCT,
                XXDATE: TotalMode.DISTINCT,
                COL1: TotalMode.DISTINCT,
                COL2: TotalMode.DISTINCT,
                COL3: TotalMode.DISTINCT,
                COL4: TotalMode.DISTINCT,
            },
            mockedRows,
            mockedColumns
        );
        expect(totals).toEqual({
            XXCODI: '6',
            XXDATE: '5',
            COL1: '5',
            COL2: '5',
            COL3: '5',
            COL4: '1',
        });
    });

    it('calculates SUM', () => {
        const totals: {
            [index: string]: string;
        } = calcTotals(
            {
                XXCODI: TotalMode.SUM,
                XXDATE: TotalMode.SUM,
                COL1: TotalMode.SUM,
                COL2: TotalMode.SUM,
                COL3: TotalMode.SUM,
                COL4: TotalMode.SUM,
            },
            mockedRows,
            mockedColumns
        );
        expect(totals).toEqual({
            COL1: '145000035',
            COL2: '563000150',
            COL3: '76',
            COL4: '0',
        });
    });

    it('calculates without columns object', () => {
        const totals: {
            [index: string]: string;
        } = calcTotals(
            {
                XXCODI: TotalMode.SUM,
                XXDATE: TotalMode.SUM,
                COL1: TotalMode.SUM,
                COL2: TotalMode.SUM,
                COL3: TotalMode.SUM,
                COL4: TotalMode.SUM,
            },
            mockedRows
        );
        expect(totals).toEqual({
            COL1: '145000035',
            COL2: '563000150',
            COL3: '76',
            COL4: '0',
        });
    });

    it('calculates AVERAGE', () => {
        const totals: {
            [index: string]: string;
        } = calcTotals(
            {
                XXCODI: TotalMode.AVERAGE,
                XXDATE: TotalMode.AVERAGE,
                COL1: TotalMode.AVERAGE,
                COL2: TotalMode.AVERAGE,
                COL3: TotalMode.AVERAGE,
                COL4: TotalMode.AVERAGE,
            },
            mockedRows,
            mockedColumns
        );
        expect(totals).toEqual({
            COL1: '24166672.5',
            COL2: '93833358.33333333',
            COL3: '12.666666666666666',
            COL4: '0',
        });
    });

    it('calculates MIN', () => {
        const totals: {
            [index: string]: string;
        } = calcTotals(
            {
                XXCODI: TotalMode.MIN,
                XXDATE: TotalMode.MIN,
                COL1: TotalMode.MIN,
                COL2: TotalMode.MIN,
                COL3: TotalMode.MIN,
                COL4: TotalMode.MIN,
            },
            mockedRows,
            mockedColumns
        );
        expect(totals).toEqual({
            XXDATE: '2024-04-03',
            COL1: '0',
            COL2: '0',
            COL3: '1',
            COL4: '0',
        });
    });

    it('calculates MAX', () => {
        const totals: {
            [index: string]: string;
        } = calcTotals(
            {
                XXCODI: TotalMode.MAX,
                XXDATE: TotalMode.MAX,
                COL1: TotalMode.MAX,
                COL2: TotalMode.MAX,
                COL3: TotalMode.MAX,
                COL4: TotalMode.MAX,
            },
            mockedRows,
            mockedColumns
        );
        expect(totals).toEqual({
            XXDATE: '2025-05-04',
            COL1: '145000000',
            COL2: '563000000',
            COL3: '30',
            COL4: '0',
        });
    });

    it('calculates formulas with COUNT', () => {
        const totals: {
            [index: string]: string;
        } = calcTotals(
            {
                COL1: TotalMode.COUNT,
                COL2: TotalMode.COUNT,
                COL3: TotalMode.COUNT,
                COL4: TotalMode.COUNT,
                DIFF12: `${TotalMode.MATH}${'([COL2]-[COL1])'}`,
                DIV12: `${TotalMode.MATH}${'([COL2]/[COL1])'}`,
                DIFF13: `${TotalMode.MATH}${'([COL3]-[COL1])'}`,
                DIFF14: `${TotalMode.MATH}${'([COL1]-[COL4])'}`,
                COMPL: `${TotalMode.MATH}${'([COL2]-[COL1])*100/[COL2]'}`,
            },
            mockedRows,
            mockedColumns
        );
        expect(totals).toEqual({
            COL1: '6',
            COL2: '6',
            COL3: '6',
            COL4: '6',
            DIFF12: `0`,
            DIV12: `1`,
            DIFF13: `0`,
            DIFF14: `0`,
            COMPL: `0`,
        });
    });

    it('calculates formulas with DISTINCT', () => {
        const totals: {
            [index: string]: string;
        } = calcTotals(
            {
                COL1: TotalMode.DISTINCT,
                COL2: TotalMode.DISTINCT,
                COL3: TotalMode.DISTINCT,
                COL4: TotalMode.DISTINCT,
                DIFF12: `${TotalMode.MATH}${'([COL2]-[COL1])'}`,
                DIV12: `${TotalMode.MATH}${'([COL2]/[COL1])'}`,
                DIFF13: `${TotalMode.MATH}${'([COL3]-[COL1])'}`,
                DIFF14: `${TotalMode.MATH}${'([COL1]-[COL4])'}`,
                COMPL: `${TotalMode.MATH}${'([COL2]-[COL1])*100/[COL2]'}`,
            },
            mockedRows,
            mockedColumns
        );
        expect(totals).toEqual({
            COL1: '5',
            COL2: '5',
            COL3: '5',
            COL4: '1',
            DIFF12: `0`,
            DIV12: `1`,
            DIFF13: `0`,
            DIFF14: `4`,
            COMPL: `0`,
        });
    });

    it('calculates formulas with SUM', () => {
        const totals: {
            [index: string]: string;
        } = calcTotals(
            {
                COL1: TotalMode.SUM,
                COL2: TotalMode.SUM,
                COL3: TotalMode.SUM,
                COL4: TotalMode.SUM,
                DIFF12: `${TotalMode.MATH}${'([COL2]-[COL1])'}`,
                DIV12: `${TotalMode.MATH}${'([COL2]/[COL1])'}`,
                DIFF13: `${TotalMode.MATH}${'([COL3]-[COL1])'}`,
                DIFF14: `${TotalMode.MATH}${'([COL1]-[COL4])'}`,
                COMPL: `${TotalMode.MATH}${'([COL2]-[COL1])*100/[COL2]'}`,
            },
            mockedRows,
            mockedColumns
        );
        expect(totals).toEqual({
            COL1: '145000035',
            COL2: '563000150',
            COL3: '76',
            COL4: '0',
            DIFF12: `418000115`,
            DIV12: `3.882758717954792`,
            DIFF13: `-144999959`,
            DIFF14: `145000035`,
            COMPL: `74.24511609810406`,
        });
    });

    it('calculates formulas with AVERAGE', () => {
        const totals: {
            [index: string]: string;
        } = calcTotals(
            {
                COL1: TotalMode.AVERAGE,
                COL2: TotalMode.AVERAGE,
                COL3: TotalMode.AVERAGE,
                COL4: TotalMode.AVERAGE,
                DIFF12: `${TotalMode.MATH}${'([COL2]-[COL1])'}`,
                DIV12: `${TotalMode.MATH}${'([COL2]/[COL1])'}`,
                DIFF13: `${TotalMode.MATH}${'([COL3]-[COL1])'}`,
                DIFF14: `${TotalMode.MATH}${'([COL1]-[COL4])'}`,
                COMPL: `${TotalMode.MATH}${'([COL2]-[COL1])*100/[COL2]'}`,
            },
            mockedRows,
            mockedColumns
        );
        expect(totals).toEqual({
            COL1: '24166672.5',
            COL2: '93833358.33333333',
            COL3: '12.666666666666666',
            COL4: '0',
            DIFF12: `69666685.83333333`,
            DIV12: `3.882758717954792`,
            DIFF13: '-24166659.833333332',
            DIFF14: '24166672.5',
            COMPL: `74.24511609810406`,
        });
    });

    it('calculates formulas with MIN', () => {
        const totals: {
            [index: string]: string;
        } = calcTotals(
            {
                COL1: TotalMode.MIN,
                COL2: TotalMode.MIN,
                COL3: TotalMode.MIN,
                COL4: TotalMode.MIN,
                DIFF12: `${TotalMode.MATH}${'([COL2]-[COL1])'}`,
                DIV12: `${TotalMode.MATH}${'([COL2]/[COL1])'}`,
                DIFF13: `${TotalMode.MATH}${'([COL3]-[COL1])'}`,
                DIFF14: `${TotalMode.MATH}${'([COL1]-[COL4])'}`,
                COMPL: `${TotalMode.MATH}${'([COL2]-[COL1])*100/[COL2]'}`,
            },
            mockedRows,
            mockedColumns
        );
        expect(totals).toEqual({
            COL1: '0',
            COL2: '0',
            COL3: '1',
            COL4: '0',
            DIFF12: `0`,
            DIV12: `NaN`,
            DIFF13: '1',
            DIFF14: '0',
            COMPL: `NaN`,
        });
    });

    it('calculates formulas with MAX', () => {
        const totals: {
            [index: string]: string;
        } = calcTotals(
            {
                COL1: TotalMode.MAX,
                COL2: TotalMode.MAX,
                COL3: TotalMode.MAX,
                COL4: TotalMode.MAX,
                DIFF12: `${TotalMode.MATH}${'([COL2]-[COL1])'}`,
                DIV12: `${TotalMode.MATH}${'([COL2]/[COL1])'}`,
                DIFF13: `${TotalMode.MATH}${'([COL3]-[COL1])'}`,
                DIFF14: `${TotalMode.MATH}${'([COL1]-[COL4])'}`,
                COMPL: `${TotalMode.MATH}${'([COL2]-[COL1])*100/[COL2]'}`,
            },
            mockedRows,
            mockedColumns
        );
        expect(totals).toEqual({
            COL1: '145000000',
            COL2: '563000000',
            COL3: '30',
            COL4: '0',
            DIFF12: `418000000`,
            DIV12: `3.882758620689655`,
            DIFF13: '-144999970',
            DIFF14: '145000000',
            COMPL: `74.24511545293073`,
        });
    });

    it('calculates mixed', () => {
        const totals: {
            [index: string]: string;
        } = calcTotals(
            {
                XXCODI: TotalMode.COUNT,
                XXDATE: TotalMode.MIN,
                COL1: TotalMode.SUM,
                COL2: TotalMode.AVERAGE,
                COL3: TotalMode.MAX,
                COL4: TotalMode.DISTINCT,
                DIFF12: `${TotalMode.MATH}${'([COL2]-[COL1])'}`,
                DIV12: `${TotalMode.MATH}${'([COL2]/[COL1])'}`,
                DIFF13: `${TotalMode.MATH}${'([COL3]-[COL1])'}`,
                DIFF14: `${TotalMode.MATH}${'([COL1]-[COL4])'}`,
                COMPL: `${TotalMode.MATH}${'([COL2]-[COL1])*100/[COL2]'}`,
            },
            mockedRows,
            mockedColumns
        );
        expect(totals).toEqual({
            XXCODI: '6',
            XXDATE: '2024-04-03',
            COL1: '145000035',
            COL2: '93833358.33333333',
            COL3: '30',
            COL4: '1',
            DIFF12: `-51166676.66666667`,
            DIV12: `0.647126452992465`,
            DIFF13: `-145000005`,
            DIFF14: `145000034`,
            COMPL: `-54.52930341137565`,
        });
    });
});
