import { KupDataDataset } from '../../../../src/managers/kup-data/kup-data-declarations';
import { KupManager } from '../../../../src/managers/kup-manager/kup-manager';
import { KupDom } from '../../../../src/managers/kup-manager/kup-manager-declarations';
import {
    convertColumns,
    convertRows,
} from '../../../../src/components/kup-chart/kup-chart-builder';
import sampleKupDataDataset from '../../../resources/mock/kup-data-dataset-with-people-and-nrs.json';

const dataMock: KupDataDataset = sampleKupDataDataset;

const axis = 'Col1';
const series = [
    { code: 'Col2', decode: 'Decode Col2' },
    { code: 'Col3', decode: 'Decode Col3' },
];

if (!(document.documentElement as KupDom).ketchup) {
    (document.documentElement as KupDom).ketchup = new KupManager();
}

describe('kup chart cols/rows conversion', () => {
    it('can convert null', () => {
        const columns = convertColumns({}, { axis: null, series: null });
        const rows = convertRows(null, [], false);

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

    it('converts columns', () => {
        const columns = convertColumns(dataMock, {
            axis: axis,
            series,
        });

        expect(columns).toEqual(dataMock.columns);
    });

    it('converts rows for one serie', () => {
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

    it('converts rows for two series', () => {
        const columns = convertColumns(dataMock, { axis: axis, series });
        const rows = convertRows(dataMock, columns, true);

        expect(rows).toEqual([
            ['CASFRA', 10, '10', 100.6, '100.6'],
            ['DELGIO', 6, '6', 67.8, '67.8'],
            ['PARFRA', 5, '5', 120.06, '120.06'],
        ]);
    });
});
