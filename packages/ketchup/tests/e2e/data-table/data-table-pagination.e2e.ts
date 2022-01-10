import { newE2EPage } from '@stencil/core/testing';

import data from './mocked-data';

const paginatorSelector = 'kup-data-table >>> .f-paginator';
const paginatorSelectSelector =
    'kup-data-table >>> .f-paginator >>> kup-combobox';

describe('paginator position', () => {
    it('should have paginator top', async () => {
        const page = await newE2EPage();

        await page.setContent(
            '<kup-data-table global-filter></kup-data-table>'
        );
        const element = await page.find('kup-data-table');

        element.setProperty('data', data);
        element.setProperty('lazyLoadRows', false);

        await page.waitForChanges();

        const paginators = await page.findAll(paginatorSelector);
        expect(paginators).toHaveLength(1);
        expect(paginators[0]).toEqualAttribute('id', 'top-paginator');
    });

    it('should have paginator bottom', async () => {
        const page = await newE2EPage();

        await page.setContent(
            '<kup-data-table paginator-pos="Bottom"></kup-data-table>'
        );
        const element = await page.find('kup-data-table');

        element.setProperty('data', data);
        element.setProperty('lazyLoadRows', false);

        await page.waitForChanges();

        const paginators = await page.findAll(paginatorSelector);
        expect(paginators).toHaveLength(1);
        expect(paginators[0]).toEqualAttribute('id', 'bottom-paginator');
    });

    it('should have paginator top and bottom', async () => {
        const page = await newE2EPage();

        await page.setContent(
            '<kup-data-table paginator-pos="Both"></kup-data-table>'
        );
        const element = await page.find('kup-data-table');

        element.setProperty('data', data);
        element.setProperty('lazyLoadRows', false);

        await page.waitForChanges();

        const paginators = await page.findAll(paginatorSelector);
        expect(paginators).toHaveLength(2);
        expect(paginators[0]).toEqualAttribute('id', 'top-paginator');
        expect(paginators[1]).toEqualAttribute('id', 'bottom-paginator');
    });
});

describe('paginator values', () => {
    // not working
    it.skip('without config', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-data-table></kup-data-table>');
        const element = await page.find('kup-data-table');

        element.setProperty('data', data);
        element.setProperty('lazyLoadRows', false);

        await page.waitForChanges();

        const selects = await page.findAll(paginatorSelectSelector);
        expect(selects).toHaveLength(2);
    });
});
