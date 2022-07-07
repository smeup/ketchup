import { newE2EPage } from '@stencil/core/testing';

import { defaultData } from './mocked-data';

import { boxSelector, containerSelector } from './box-selectors';

describe('kup-box', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-box></kup-box>');

        await page.waitForChanges();

        const element = await page.find('kup-box');

        expect(element).toHaveClass('hydrated');
    });

    it('renders with data', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-box></kup-box>');

        const element = await page.find('kup-box');

        element.setProperty('data', defaultData);

        await page.waitForChanges();

        const container = await page.find(containerSelector);

        const containerStyle = await container.getComputedStyle();

        expect(containerStyle.gridTemplateColumns.split(' ')).toHaveLength(1);

        const boxes = await page.findAll(boxSelector);

        expect(boxes).toHaveLength(4);

        for (let box of boxes) {
            // test default layout
            const sections = await box.findAll('.box-section');

            expect(sections).toHaveLength(1);

            const boxObjects = await sections[0].findAll('.box-object');

            expect(boxObjects).toHaveLength(4);
        }
    });

    it('box on 3 columns', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-box></kup-box>');

        const element = await page.find('kup-box');

        element.setProperty('data', defaultData);

        element.setProperty('columns', 3);

        await page.waitForChanges();

        const container = await page.find(containerSelector);

        const containerStyle = await container.getComputedStyle();

        expect(containerStyle.gridTemplateColumns.split(' ')).toHaveLength(3);
    });
});
