import { newE2EPage } from '@stencil/core/testing';

import { multiSortMockData } from './mocked-data';

const footerCellsSelector = 'kup-data-table >>> table > tfoot > tr > td';

describe('totals', () => {
    it('count', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-data-table></kup-data-table>');
        const element = await page.find('kup-data-table');

        element.setProperty('data', multiSortMockData);
        element.setProperty('totals', {
            FLD1: 'Count',
            FLD2: 'Count',
            FLD3: 'Count',
        });

        await page.waitForChanges();

        const footerCells = await page.findAll(footerCellsSelector);
        expect(footerCells).toHaveLength(3);

        expect(footerCells[0]).toEqualText('9');
        expect(footerCells[1]).toEqualText('9');
        expect(footerCells[2]).toEqualText('9');
    });

    it('sums', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-data-table></kup-data-table>');
        const element = await page.find('kup-data-table');

        element.setProperty('data', multiSortMockData);
        element.setProperty('totals', {
            FLD1: 'Sum',
            FLD2: 'Sum',
            FLD3: 'Sum',
        });

        await page.waitForChanges();

        const footerCells = await page.findAll(footerCellsSelector);
        expect(footerCells).toHaveLength(3);

        expect(footerCells[0]).toEqualText('');
        expect(footerCells[1]).toEqualText('72');
        expect(footerCells[2]).toEqualText('865.38');
    });

    it('avarage', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-data-table></kup-data-table>');
        const element = await page.find('kup-data-table');

        element.setProperty('data', multiSortMockData);
        element.setProperty('totals', {
            FLD1: 'Avarage',
            FLD2: 'Avarage',
            FLD3: 'Avarage',
        });

        await page.waitForChanges();

        const footerCells = await page.findAll(footerCellsSelector);
        expect(footerCells).toHaveLength(3);

        expect(footerCells[0]).toEqualText('');
        expect(footerCells[1]).toEqualText('8');
        expect(footerCells[2]).toEqualText('96.15333333333334');
    });

    it('mixed', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-data-table></kup-data-table>');
        const element = await page.find('kup-data-table');

        element.setProperty('data', multiSortMockData);
        element.setProperty('totals', {
            FLD1: 'Count',
            FLD2: 'Sum',
            FLD3: 'Avarage',
        });

        await page.waitForChanges();

        const footerCells = await page.findAll(footerCellsSelector);
        expect(footerCells).toHaveLength(3);

        expect(footerCells[0]).toEqualText('9');
        expect(footerCells[1]).toEqualText('72');
        expect(footerCells[2]).toEqualText('96.15333333333334');
    });
});
