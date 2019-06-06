import { newE2EPage } from '@stencil/core/testing';

import { staticData, hiddenColumns } from './mocked-data';

const globalFilterSelector = 'kup-data-table >>> .globalFilter';
const sortIconSelector = 'kup-data-table >>> table thead .column-sort icon';

describe('kup-data-table', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-data-table></kup-data-table>');
        const element = await page.find('kup-data-table');
        expect(element).toHaveClass('hydrated');
    });

    it('renders without data', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-data-table></kup-data-table>');

        // testing header
        const headerRows = await page.findAll(
            'kup-data-table >>> table thead > tr'
        );
        expect(headerRows).toHaveLength(1);

        const headerCells = await headerRows[0].findAll('th .column-title');
        expect(headerCells).toHaveLength(1);
        expect(headerCells[0]).toEqualText('');

        // testing body
        const bodyRows = await page.findAll(
            'kup-data-table >>> table tbody > tr'
        );
        expect(bodyRows).toHaveLength(1);

        const bodyCells = await bodyRows[0].findAll('td');
        expect(bodyCells).toHaveLength(1);
        expect(bodyCells[0]).toEqualAttribute('colSpan', 1);
        expect(bodyCells[0]).toEqualText('Empty data');

        // no config
        // -> no filters
        const inputs = await headerCells[0].findAll('input');
        expect(inputs).toHaveLength(0);

        // -> no global filter
        const globalFilter = await page.findAll(globalFilterSelector);
        expect(globalFilter).toHaveLength(0);

        // -> yes sort
        const sorts = await page.findAll(sortIconSelector);
        expect(sorts).toHaveLength(1);
    });

    it('renders with data', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-data-table></kup-data-table>');

        const element = await page.find('kup-data-table');
        element.setProperty('data', staticData);

        await page.waitForChanges();

        // testing header
        const headerRows = await page.findAll(
            'kup-data-table >>> table thead > tr'
        );
        expect(headerRows).toHaveLength(1);

        const headerCells = await headerRows[0].findAll('th .column-title');
        expect(headerCells).toHaveLength(staticData.columns.length);
        for (let i = 0; i < headerCells.length; i++) {
            expect(headerCells[i]).toEqualText(staticData.columns[i].title);
        }

        // testing body
        const bodyRows = await page.findAll(
            'kup-data-table >>> table tbody > tr'
        );
        expect(bodyRows).toHaveLength(3);

        // testing first row
        const firstRowCells = await bodyRows[0].findAll('td');
        expect(firstRowCells).toHaveLength(3);
        expect(firstRowCells[0]).toEqualText('CASFRA');
        expect(firstRowCells[1]).toEqualText('10');
        expect(firstRowCells[2]).toEqualText('100.60');
    });

    it('hidden columns', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-data-table></kup-data-table>');

        const element = await page.find('kup-data-table');
        element.setProperty('data', hiddenColumns);

        await page.waitForChanges();

        // testing header
        const headerRows = await page.findAll(
            'kup-data-table >>> table thead > tr'
        );
        expect(headerRows).toHaveLength(1);

        const headerCells = await headerRows[0].findAll('th .column-title');
        expect(headerCells).toHaveLength(1);
        expect(headerCells[0]).toEqualText(hiddenColumns.columns[1].title);

        // testing body
        const bodyRows = await page.findAll(
            'kup-data-table >>> table tbody > tr'
        );
        expect(bodyRows).toHaveLength(3);

        // testing first row
        const firstRowCells = await bodyRows[0].findAll('td');
        expect(firstRowCells).toHaveLength(1);
        expect(firstRowCells[0]).toEqualText('10');
    });
});
