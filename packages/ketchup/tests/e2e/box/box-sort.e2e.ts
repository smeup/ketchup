import { newE2EPage, E2EElement } from '@stencil/core/testing';

import { defaultData } from './mocked-data';

import { sortSelector, boxSelector } from './box-selectors';

describe('box sort', () => {
    it("doesn't have sort", async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-box></kup-box>');

        await page.waitForChanges();

        const sort = await page.find(sortSelector);

        expect(sort).toBeNull();
    });

    it('has sort', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-box></kup-box>');

        const elm = await page.find('kup-box');
        elm.setProperty('data', defaultData);
        elm.setProperty('sortEnabled', true);

        await page.waitForChanges();

        const sort = await page.find(sortSelector);

        expect(sort).not.toBeNull();
    });

    it('has sort with initial value', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-box></kup-box>');

        const elm = await page.find('kup-box');
        elm.setProperty('data', defaultData);
        elm.setProperty('sortEnabled', true);
        elm.setProperty('sortBy', 'FLD1');

        await page.waitForChanges();

        const sort = await page.find(sortSelector);

        expect(sort).not.toBeNull();

        const objects = await page.findAll(boxSelector);

        expect(objects).toHaveLength(4);

        await testObjectValue(objects[0], 'CASFRA');
        await testObjectValue(objects[1], 'DELGIO');
        await testObjectValue(objects[2], 'PARFRA');
        await testObjectValue(objects[3], 'SANCOS');
    });
});

async function testObjectValue(obj: E2EElement, expectedValue: string) {
    const boxObjects = await obj.findAll('.box-object');

    expect(boxObjects[1]).toEqualText(expectedValue);
}
