import { newE2EPage } from '@stencil/core/testing';

import { defaultData } from './mocked-data';

import { boxSelector } from './box-selectors';

describe('box selection', () => {
    it('single selection', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-box></kup-box>');

        const elm = await page.find('kup-box');
        elm.setProperty('data', defaultData);

        await page.waitForChanges();

        const firstBox = await page.find(boxSelector);

        const objects = await firstBox.findAll('.box-object');

        expect(objects).toHaveLength(4);

        const kupBoxClicked = await page.spyOnEvent('kupBoxClicked');

        // testing first object
        let obj = objects[0];

        await obj.click();

        let event = kupBoxClicked.events[kupBoxClicked.events.length - 1];

        expect(event.detail.row).toEqual(defaultData.rows[0]);

        expect(event.detail.column).toBe('FLD1');

        // testing second object
        obj = objects[1];

        await obj.click();

        event = kupBoxClicked.events[kupBoxClicked.events.length - 1];

        expect(event.detail.row).toEqual(defaultData.rows[0]);

        expect(event.detail.column).toBe('FLD2');
    });

    it('multiple selection', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-box></kup-box>');

        const elm = await page.find('kup-box');
        elm.setProperty('data', defaultData);
        elm.setProperty('multiSelection', true);

        await page.waitForChanges();

        const boxes = await page.findAll(boxSelector);

        const kupBoxSelected = await page.spyOnEvent('kupBoxSelected');

        const checkboxSelector = '.box-selection input[type="checkbox"]';

        // selecting first row
        let chk = await boxes[0].find(checkboxSelector);

        await chk.click();

        // selecting third row
        chk = await boxes[2].find(checkboxSelector);

        await chk.click();

        expect(kupBoxSelected).toHaveLength(2);

        let detail = kupBoxSelected.lastEvent.detail;

        expect(detail.rows).toHaveLength(2);
        expect(detail.rows[0]).toEqual(defaultData.rows[0]);
        expect(detail.rows[1]).toEqual(defaultData.rows[2]);

        // deselect first row
        chk = await boxes[0].find(checkboxSelector);

        await chk.click();

        expect(kupBoxSelected).toHaveLength(3);

        detail = kupBoxSelected.lastEvent.detail;

        expect(detail.rows).toHaveLength(1);
        expect(detail.rows[0]).toEqual(defaultData.rows[2]);
    });
});
