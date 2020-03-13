import { newE2EPage } from '@stencil/core/testing';

import { boxDataFactory } from './mocked-data';

import { boxSelector } from './box-selectors';

const perfTest = async (): Promise<number> => {
    const numberOfRows = 500;

    const data = boxDataFactory(4, numberOfRows);

    const page = await newE2EPage();

    await page.setContent('<kup-box></kup-box>');

    const element = await page.find('kup-box');

    const start = performance.now();

    element.setProperty('data', data);

    await page.waitForChanges();

    const boxes = await page.findAll(boxSelector);

    expect(boxes).toHaveLength(numberOfRows);

    const end = performance.now();

    const diff = end - start;

    return diff;
};

it('kup-box performance logger', async (done) => {
    const MAX_ITER = 5;

    let iter = MAX_ITER;

    let sum = 0;

    while (iter-- > 0) {
        const time = await perfTest();

        sum += time;
    }

    const avarage = Math.floor(sum / MAX_ITER);

    done();
});
