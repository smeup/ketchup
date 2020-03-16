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

    describe('with badges', async () => {
        let page, element, boxes;

        beforeEach(async () => {
            page = await newE2EPage();

            await page.setContent('<kup-box></kup-box>');

            element = await page.find('kup-box');

            element.setProperty('data', badgeData);

            await page.waitForChanges();

            boxes = await page.findAll(boxSelector);
        });

        it('match badge content', async () => {
            expect(boxes).toHaveLength(3);

            for (let i = 0; i < boxes.length; i++) {
                const box = boxes[i];

                const badges = await box.findAll('kup-badge >>> #badge');
                expect(badges).toHaveLength(1);

                const badge = badges[0];

                switch (i) {
                    case 0:
                        expect(badge).toEqualText('1');
                        break;

                    case 1:
                        expect(badge).toHaveClass('mdi');
                        expect(badge).toHaveClass('mdi-account');
                        break;

                    default:
                        expect(badge).toEqualText('long teeeeeeeeeeeeext');
                        break;
                }
            }
        });

        it('match badge class', async () => {
            const kupBadges = await page.findAll('kup-box >>> kup-badge');

            expect(kupBadges).toHaveLength(3);

            for (let i = 0; i < kupBadges.length; i++) {
                switch (i) {
                    case 0:
                        expect(kupBadges[i]).toHaveClass('top-right');
                        break;

                    case 1:
                        expect(kupBadges[i]).toHaveClass('top-left');
                        break;

                    default:
                        expect(kupBadges[i]).toHaveClass('top-right');
                        break;
                }
            }
        });
    });
});
