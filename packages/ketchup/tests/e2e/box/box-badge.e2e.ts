import { newE2EPage } from '@stencil/core/testing';

import { defaultData, badgeData } from './mocked-data';

import { boxSelector } from './box-selectors';

describe('box and badges', () => {
    it('without badges', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-box></kup-box>');

        const element = await page.find('kup-box');

        element.setProperty('data', defaultData);

        await page.waitForChanges();

        const boxes = await page.findAll(boxSelector);

        expect(boxes).toHaveLength(4);

        for (let box of boxes) {
            const badge = await box.findAll('kup-badge');

            expect(badge).toHaveLength(0);
        }
    });

    it('with badges', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-box></kup-box>');

        const element = await page.find('kup-box');

        element.setProperty('data', badgeData);

        await page.waitForChanges();

        const boxes = await page.findAll(boxSelector);

        expect(boxes).toHaveLength(3);

        for (let i = 0; i < boxes.length; i++) {
            const box = boxes[i];

            const badges = await box.findAll('kup-badge >>> #badge');

            expect(badges).toHaveLength(1);

            const badge = badges[0];

            switch (i) {
                case 0:
                    expect(badge).toEqualText('1');
                    expect(badge).toHaveClass('topRight');
                    break;

                case 1:
                    expect(badge).toHaveClass('mdi');
                    expect(badge).toHaveClass('mdi-account');
                    expect(badge).toHaveClass('topLeft');
                    break;

                default:
                    expect(badge).toEqualText('long teeeeeeeeeeeeext');
                    expect(badge).toHaveClass('topRight');
                    break;
            }
        }
    });
});
