import { calcTotals } from '../../../../src/components/kup-data-table/kup-data-table-helper';
import { TotalMode } from '../../../../src/components/kup-data-table/kup-data-table-declarations';
import { KupDom } from '../../../../src/managers/kup-manager/kup-manager-declarations';
import { KupManager } from '../../../../src/managers/kup-manager/kup-manager';
import sampleKupDataDataset from '../../../resources/mock/kup-data-dataset-with-people-nrs-dates.json';
import { KupDatesLocales } from '../../../../src/managers/kup-dates/kup-dates-declarations';

const locale = 'it' as KupDatesLocales;
const dom: KupDom = document.documentElement as KupDom;
dom.ketchup = new KupManager({ dates: { locale } });

const mockedRows = sampleKupDataDataset.rows;
const mockedColumns = sampleKupDataDataset.columns;

describe('kup datatable totalizations', () => {
    it('handles error without parameters', () => {
        const totals = calcTotals();
        expect(totals).toEqual({});
    });

    it('handles error with undefined rows', () => {
        const totals = calcTotals(undefined);
        expect(totals).toEqual({});
    });

    it('handles error with empty rows', () => {
        const totals = calcTotals([]);
        expect(totals).toEqual({});
    });

    it('handles error with rows without total', () => {
        const totals = calcTotals(mockedColumns, mockedRows);
        expect(totals).toEqual({});
    });

    it('handles error with undefined total', () => {
        const totals = calcTotals(mockedColumns, mockedRows, undefined);
        expect(totals).toEqual({});
    });

    it('handles error with empty total', () => {
        const totals = calcTotals(mockedColumns, mockedRows, {});
        expect(totals).toEqual({});
    });

    it('calculates count', () => {
        const totals = calcTotals(mockedColumns, mockedRows, {
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

    it('calculates sum', () => {
        const totals = calcTotals(mockedColumns, mockedRows, {
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

    it('calculates average', () => {
        const totals = calcTotals(mockedColumns, mockedRows, {
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

    it('calculates mixed', () => {
        const totals = calcTotals(mockedColumns, mockedRows, {
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
