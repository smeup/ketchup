import { KupManager } from '../../../../src/managers/kup-manager/kup-manager';

describe('KupManager.data.cell.getObjectRelatedStyleClasses', () => {
    let kupManager: KupManager;

    beforeEach(() => {
        kupManager = new KupManager();
    });

    it('should return the correct CSS class from ParameterRelatedStylesMap', () => {
        let expectedClasses: string[] = [
            'c-fitted',
            'c-shaped',
            'c-hor-padded',
        ];

        let result = kupManager.data.cell.getObjectRelatedStyleClasses({
            t: 'TA',
            p: 'B£W',
            k: 'value1',
        });

        expectedClasses.forEach((cls) => {
            expect(result).toContain(cls);
        });

        result = kupManager.data.cell.getObjectRelatedStyleClasses({
            t: 'TA',
            p: 'B£Waaa',
            k: 'value1',
        });

        expectedClasses.forEach((cls) => {
            expect(result).toContain(cls);
        });

        expectedClasses = ['strong-text'];

        result = kupManager.data.cell.getObjectRelatedStyleClasses({
            t: 'TA',
            p: 'B§A',
            k: 'value1',
        });

        expectedClasses.forEach((cls) => {
            expect(result).toContain(cls);
        });
    });

    it('should return the correct CSS class from CodeRelatedStylesMap', () => {
        let codeValue = '10';
        let expectedClass = 'c-teal-bg';

        let result = kupManager.data.cell.getObjectRelatedStyleClasses({
            t: 'TA',
            p: 'B£W',
            k: codeValue,
        });

        expect(result).toContain(expectedClass);

        codeValue = '80';
        expectedClass = 'c-grey-bg';

        result = kupManager.data.cell.getObjectRelatedStyleClasses({
            t: 'TA',
            p: 'B£W',
            k: codeValue,
        });

        expect(result).toContain(expectedClass);
    });

    it('should return an empty array if no matching CSS class is found', () => {
        const result = kupManager.data.cell.getObjectRelatedStyleClasses({
            t: 'XX',
            p: 'XXX',
            k: 'value1',
        });

        expect(result).toEqual('');
    });

    it('should return multiple CSS classes if both maps have matching entries', () => {
        const expectedClasses = [
            'c-fitted',
            'c-shaped',
            'c-hor-padded',
            'c-orange-bg',
        ];

        const result = kupManager.data.cell.getObjectRelatedStyleClasses({
            t: 'TA',
            p: 'B£W',
            k: '70',
        });

        expectedClasses.forEach((cls) => {
            expect(result).toContain(cls);
        });
    });
});
