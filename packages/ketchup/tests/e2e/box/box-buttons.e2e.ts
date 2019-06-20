import { newE2EPage } from '@stencil/core/testing';

import { j4btnData } from './mocked-data';

import { boxSelector } from './box-selectors';

it('box with buttons', async () => {
    const page = await newE2EPage();

    await page.setContent('<kup-box></kup-box>');

    const element = await page.find('kup-box');

    element.setProperty('data', j4btnData);

    await page.waitForChanges();

    const boxes = await page.findAll(boxSelector);

    expect(boxes).toHaveLength(4);

    const kupBoxClicked = await page.spyOnEvent('kupBoxClicked');

    const boxObjects = await boxes[0].findAll('.box-object');

    expect(boxObjects).toHaveLength(4);

    const kupButton = await boxObjects[3].find('kup-button');

    await kupButton.click();

    expect(kupBoxClicked).toHaveLength(1);

    const detail = kupBoxClicked.events[0].detail;

    expect(detail.column).toBe('FLD4');

    expect(detail.row).toEqual(j4btnData.rows[0]);
});
