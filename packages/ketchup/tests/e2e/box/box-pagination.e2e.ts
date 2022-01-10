import { newE2EPage } from '@stencil/core/testing';

import { defaultData, createData } from './mocked-data';
import { boxSelector } from './box-selectors';

const paginatorSelector = 'kup-box >>> .f-paginator';

describe('box pagination', () => {
    it('without pagination', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-box></kup-box>');

        const element = await page.find('kup-box');

        element.setProperty('data', defaultData);

        await page.waitForChanges();

        const paginators = await page.findAll(paginatorSelector);

        expect(paginators).toHaveLength(0);
    });

    it('with pagination', async () => {
        const page = await newE2EPage();

        await page.setContent(`
            <kup-box
                pagination
                page-size="10"
            ></kup-box>
        `);

        const element = await page.find('kup-box');

        element.setProperty('data', createData(100));

        await page.waitForChanges();

        const paginators = await page.findAll(paginatorSelector);

        expect(paginators).toHaveLength(1);

        const boxes = await page.findAll(boxSelector);

        expect(boxes).toHaveLength(10);
    });
});
