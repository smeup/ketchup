import { KupManager } from '../../../../src/managers/kup-manager/kup-manager';
import { KupDom } from '../../../../src/managers/kup-manager/kup-manager-declarations';

import sampleKupDataDataset from '../../../resources/mock/kup-data-dataset-luckynrs.json';
import sampleNewColumns from '../../../resources/mock/kup-data-new-columns-luckynrs.json';
import {
    KupDataCell,
    KupDataColumn,
    KupDataDataset,
    KupDataNewColumn,
} from '../../../../src/managers/kup-data/kup-data-declarations';

const dom: KupDom = document.documentElement as KupDom;
if (!dom.ketchup) {
    dom.ketchup = new KupManager();
}

const dataDataset: KupDataDataset = sampleKupDataDataset;
const dataNewColumns: KupDataNewColumn[] = sampleNewColumns;

describe('kup dataset manipulation', () => {
    it('groups and counts with specific ranges and filters for a resulting column', () => {
        const inpDataDataset = { ...dataDataset };

        const resultingColumn: KupDataColumn = {
            name: '2099',
            title: 'Lucky numbers 20-99',
        };

        const outDataDataset: KupDataDataset = dom.ketchup.data.rangedDistinct(
            inpDataDataset,
            dataNewColumns,
            resultingColumn
        );

        expect(outDataDataset.rows && outDataDataset.rows.length).toEqual(3);

        expect(
            outDataDataset.rows &&
                outDataDataset.rows[0] &&
                outDataDataset.rows[0].cells &&
                outDataDataset.rows[0].cells['2099'].value
        ).toEqual('5');
        expect(
            outDataDataset.rows &&
                outDataDataset.rows[1] &&
                outDataDataset.rows[1].cells &&
                outDataDataset.rows[1].cells['2099'].value
        ).toEqual('5');
        expect(
            outDataDataset.rows &&
                outDataDataset.rows[2] &&
                outDataDataset.rows[2].cells &&
                outDataDataset.rows[2].cells['2099'].value
        ).toEqual('2');
    });
});
