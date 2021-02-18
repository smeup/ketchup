import { newE2EPage } from '@stencil/core/testing';

import { multiSortMockData } from './mocked-data';

const footerCellsSelector = 'kup-data-table >>> table > tfoot > tr > td';

// TODO when the footer is considered stable, please remove this function
// and maybe use a tag (ex.span) to encapsulate the td value and use that tag to do the comparison
function getValueFromTd(value) {
    try {
        return value.match(/\d+\,?\d*/g)[0];
    } catch (error) {
        return '';
    }
}

describe('totals', () => {
    it.skip('count', async () => {
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

        expect(getValueFromTd(footerCells[0].innerText)).toEqualText('9');
        expect(getValueFromTd(footerCells[1].innerText)).toEqualText('9');
        // expect(getValueFromTd(footerCells[2].innerText)).toEqualText('9,00');
        const cellValue = '9,00';
        expect(
            getValueFromTd(footerCells[2].textContent) ==
                cellValue.replace(RegExp(/\./g), ',') ||
                getValueFromTd(footerCells[2].textContent) ==
                    cellValue.replace(RegExp(/,/g), '.')
        ).toBeTruthy();
    });

    it.skip('sums', async () => {
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

        expect(getValueFromTd(footerCells[0].innerText)).toEqualText('');
        expect(getValueFromTd(footerCells[1].innerText)).toEqualText('72');
        //expect(footerCells[2]).toEqualText('865,38');
        const cellValue = '865,38';
        expect(
            getValueFromTd(footerCells[2].textContent) ==
                cellValue.replace(RegExp(/\./g), ',') ||
                getValueFromTd(footerCells[2].textContent) ==
                    cellValue.replace(RegExp(/,/g), '.')
        ).toBeTruthy();
    });

    it.skip('average', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-data-table></kup-data-table>');
        const element = await page.find('kup-data-table');

        element.setProperty('data', multiSortMockData);
        element.setProperty('totals', {
            FLD1: 'Average',
            FLD2: 'Average',
            FLD3: 'Average',
        });

        await page.waitForChanges();

        const footerCells = await page.findAll(footerCellsSelector);
        expect(footerCells).toHaveLength(3);

        expect(getValueFromTd(footerCells[0].innerText)).toEqualText('');
        expect(getValueFromTd(footerCells[1].innerText)).toEqualText('8');
        //expect(footerCells[2]).toEqualText('96,15');
        const cellValue = '96,15';
        expect(
            getValueFromTd(footerCells[2].textContent) ==
                cellValue.replace(RegExp(/\./g), ',') ||
                getValueFromTd(footerCells[2].textContent) ==
                    cellValue.replace(RegExp(/,/g), '.')
        ).toBeTruthy();
    });

    it.skip('mixed', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-data-table></kup-data-table>');
        const element = await page.find('kup-data-table');

        element.setProperty('data', multiSortMockData);
        element.setProperty('totals', {
            FLD1: 'Count',
            FLD2: 'Sum',
            FLD3: 'Average',
        });

        await page.waitForChanges();

        const footerCells = await page.findAll(footerCellsSelector);
        expect(footerCells).toHaveLength(3);

        expect(getValueFromTd(footerCells[0].innerText)).toEqualText('9');
        expect(getValueFromTd(footerCells[1].innerText)).toEqualText('72');
        //expect(footerCells[2]).toEqualText('96,15');
        const cellValue = '96,15';
        expect(
            getValueFromTd(footerCells[2].textContent) ==
                cellValue.replace(RegExp(/\./g), ',') ||
                getValueFromTd(footerCells[2].textContent) ==
                    cellValue.replace(RegExp(/,/g), '.')
        ).toBeTruthy();
    });
});
