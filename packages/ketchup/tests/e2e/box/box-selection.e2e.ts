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

        // testing first object (patch with document.querySelector to avoid Node is either not visible or not an HTMLElement)
        await page.evaluate(() => {
            document
                .querySelector('kup-box:nth-child(1)')
                .shadowRoot.querySelector(
                    '#box-container .box-wrapper .box .box-object:nth-child(1) '
                )
                .click();
        });

        let event = kupBoxClicked.events[kupBoxClicked.events.length - 1];

        expect(event.detail.row).toEqual(defaultData.rows[0]);

        expect(event.detail.column).toBe('FLD1');

        // testing second object
        const obj = objects[1];

        await obj.click();

        event = kupBoxClicked.events[kupBoxClicked.events.length - 1];

        expect(event.detail.row).toEqual(defaultData.rows[0]);

        expect(event.detail.column).toBe('FLD2');

        // testing selected class
        // const boxes = await page.findAll(boxSelector + '.selected');

        // expect(boxes).toHaveLength(1);
    });

    it('multiple selection', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-box></kup-box>');

        const elm = await page.find('kup-box');
        elm.setProperty('data', defaultData);
        elm.setProperty('multiSelection', true);

        await page.waitForChanges();

        let boxes = await page.findAll(boxSelector);

        const kupBoxSelected = await page.spyOnEvent('kupBoxSelected');

        //const checkboxSelector = '.box-selection input[type="checkbox"]';
        const checkboxSelector =
            'div > div > kup-checkbox';

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

        // testing selected class
        boxes = await page.findAll(boxSelector + '.selected');

        expect(boxes).toHaveLength(2);

        // deselect first row
        chk = await boxes[0].find(checkboxSelector);

        await chk.click();

        expect(kupBoxSelected).toHaveLength(3);

        detail = kupBoxSelected.lastEvent.detail;

        expect(detail.rows).toHaveLength(1);
        expect(detail.rows[0]).toEqual(defaultData.rows[2]);

        // testing selected class
        boxes = await page.findAll(boxSelector + '.selected');

        expect(boxes).toHaveLength(1);
    });

    it('automatic box selection', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-box></kup-box>');

        const elm = await page.find('kup-box');

        const kupAutoBoxSelect = await page.spyOnEvent('kupAutoBoxSelect');

        elm.setProperty('data', defaultData);

        elm.setProperty('selectBox', 2);

        await page.waitForChanges();

        expect(kupAutoBoxSelect).toHaveLength(1);

        const row = kupAutoBoxSelect.firstEvent.detail.row;

        expect(row).toEqual(defaultData.rows[1]);
    });

    it('no box highlight', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-box></kup-box>');

        const elm = await page.find('kup-box');

        elm.setProperty('data', defaultData);

        elm.setProperty('showSelection', false);

        await page.waitForChanges();

        const firstBox = await page.find(boxSelector);

        // testing first object (patch with document.querySelector to avoid Node is either not visible or not an HTMLElement)
        await page.evaluate(() => {
            document
                .querySelector('kup-box:nth-child(1)')
                .shadowRoot.querySelector(
                    '#box-container .box-wrapper .box .box-object:nth-child(1) '
                )
                .click();
        });

        // testing selected class
        const boxes = await page.findAll(boxSelector + '.selected');

        expect(boxes).toHaveLength(0);
    });
});
