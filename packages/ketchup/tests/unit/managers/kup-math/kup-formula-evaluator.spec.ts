import { parseAndEvaluate } from '../../../../src/managers/kup-math/kup-formula-evaluator';
import { customFormula } from '../../../../src/managers/kup-math/kup-math-helper';
import { KupDom } from '../../../../src/managers/kup-manager/kup-manager-declarations';
import { KupManager } from '../../../../src/managers/kup-manager/kup-manager';

const dom: KupDom = document.documentElement as KupDom;
if (!dom.ketchup) {
    dom.ketchup = new KupManager();
}

const row1 = { A: 8, B: 2, C: 5 };

describe('kup formula evaluator with simple formula', () => {
    it('check 1 + 2 = 3', () => {
        const result: number = parseAndEvaluate('1 + 2');
        expect(result == 3);
    });
    it('check 0.1 + 0.2 = 0.3', () => {
        const result: number = parseAndEvaluate('0.1 + 0.2');
        expect(result == 0.3);
    });
    it('check 0.3 - 0.2 = 0.1', () => {
        const result: number = parseAndEvaluate('0.3 - 0.2');
        expect(result == 0.1);
    });
    it('check 100000 - 100000 = 0', () => {
        const result: number = parseAndEvaluate('100000-100000');
        expect(result == 0);
    });
    it('check 10000/10000 = 1', () => {
        const result: number = parseAndEvaluate('10000/10000');
        expect(result == 1);
    });
    it('check (((10/10000)+100)-100)*10000 = 10', () => {
        const result: number = parseAndEvaluate('(((10/10000)+100)-100)*10000');
        expect(result == 10);
    });
    it('check ([A] + [B])/[C] = 2 with A=8, B=2, C=5', () => {
        const result: number = customFormula('([A] + [B])/[C]', row1);
        expect(result == 2);
    });

    //it('finds numbers if present', () => {
    //    const cells: KupDataCell[] = dom.ketchup.data.cell.find(dataDataset, {
    //        value: '51',
    //    });
    //    expect(cells.length).toEqual(3);
    //    expect(cells[0].value).toEqual('51');
    //    expect(cells[1].value).toEqual('51');
    //    expect(cells[2].value).toEqual('51');
    //});
});
