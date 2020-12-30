import { newE2EPage } from '@stencil/core/testing';

import { defaultData } from './mocked-data';

import { filterSelector } from './box-selectors';

describe('box filters', () => {
    it("doesn't have filters", async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-box></kup-box>');

        await page.waitForChanges();

        const filter = await page.find(filterSelector);

        expect(filter).toBeNull();
    });

    it('has filters', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-box></kup-box>');

        const elm = await page.find('kup-box');
        elm.setProperty('data', defaultData);
        elm.setProperty('globalFilter', true);

        // await page.$eval('kup-box', (elm: any) => {
        //     elm.setProperty('data', defaultData);
        //     elm.setProperty('globalFilter', true);
        // });

        await page.waitForChanges();

        const filter = await page.find(filterSelector);

        expect(filter).not.toBeNull();

        // TODO
        // const ketchupTextInputUpdated = await page.spyOnEvent(
        //     'ketchupTextInputUpdated'
        // );

        // await filter.press('F');
        // await filter.press('R');
        // await filter.press('A');

        // expect(ketchupTextInputUpdated).toHaveLength(1);
    });
});
