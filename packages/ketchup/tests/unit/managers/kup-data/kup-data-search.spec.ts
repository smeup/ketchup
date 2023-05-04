import { KupManager } from '../../../../src/managers/kup-manager/kup-manager';
import { KupDom } from '../../../../src/managers/kup-manager/kup-manager-declarations';

import sampleKupDataDataset from '../../../resources/mock/kup-data-dataset-luckynrs.json';
import {
    KupDataCell,
    KupDataDataset,
} from '../../../../src/managers/kup-data/kup-data-declarations';

const dom: KupDom = document.documentElement as KupDom;
if (!dom.ketchup) {
    dom.ketchup = new KupManager();
}

const dataDataset: KupDataDataset = sampleKupDataDataset;

describe('kup dataset searching for', () => {
    it('does not find a number if not present', () => {
        const cells: KupDataCell[] = dom.ketchup.data.cell.find(dataDataset, {
            value: '81',
        });
        expect(cells.length).toEqual(0);
    });

    it('finds numbers if present', () => {
        const cells: KupDataCell[] = dom.ketchup.data.cell.find(dataDataset, {
            value: '51',
        });
        expect(cells.length).toEqual(3);
        expect(cells[0].value).toEqual('51');
        expect(cells[1].value).toEqual('51');
        expect(cells[2].value).toEqual('51');
    });
});
