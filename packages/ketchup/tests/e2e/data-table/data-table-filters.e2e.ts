import { newE2EPage } from '@stencil/core/testing';

import { staticData } from './mocked-data';

const globalFilterSelector =
    'kup-data-table >>> #globalFilter >>> #ketchup-input';

const filtersSelector = 'kup-data-table >>> table > thead kup-input-text';

describe('kup-data-table with global filter', () => {
    it.skip('should have global filter', async () => {
        const page = await newE2EPage();

        await page.setContent(
            '<kup-data-table global-filter></kup-data-table>'
        );
        const element = await page.find('kup-data-table');

        element.setProperty('data', staticData);

        await page.waitForChanges();

        // no column filters
        const filters = await page.findAll(filtersSelector);
        expect(filters).toHaveLength(0);

        // getting global filter input and changing value
        const globalFilterInput = await page.find(globalFilterSelector);

        await globalFilterInput.press('F');
        await globalFilterInput.press('R');
        await globalFilterInput.press('A');

        await page.waitForChanges();

        // testing table rows
        const bodyRows = await page.findAll(
            'kup-data-table >>> table tbody > tr'
        );
        expect(bodyRows).toHaveLength(2);
    });
});

describe('kup-data-table with filters', () => {
    it.skip('should have filters', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-data-table show-filters></kup-data-table>');
        const element = await page.find('kup-data-table');

        element.setProperty('data', staticData);

        await page.waitForChanges();

        // no global filter
        const globalFilterInput = await page.find(globalFilterSelector);
        expect(globalFilterInput).toBeFalsy();

        // testing filters
        const filters = await page.findAll(filtersSelector);
        expect(filters).toHaveLength(3);
    });
});

describe('kup-data-table with filters and global filter', () => {
    it.skip('should have filters', async () => {
        const page = await newE2EPage();

        await page.setContent(
            '<kup-data-table show-filters global-filter></kup-data-table>'
        );
        const element = await page.find('kup-data-table');

        element.setProperty('data', staticData);

        await page.waitForChanges();

        // getting filters
        const filters = await page.findAll(filtersSelector);
        expect(filters).toHaveLength(3);

        // getting global filter input
        const globalFilterInput = await page.find(globalFilterSelector);
        expect(globalFilterInput).toBeTruthy();
    });
});
