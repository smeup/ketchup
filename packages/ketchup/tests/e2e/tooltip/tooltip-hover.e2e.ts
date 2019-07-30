import { newE2EPage } from '@stencil/core/testing';

const tooltipSelector = 'kup-tooltip >>> #wrapper #tooltip';
const detailSelector = 'kup-tooltip >>> #wrapper #detail';

describe('kup-tooltip', () => {
    it('tooltip is hidden', async () => {
        const page = await newE2EPage();

        await page.setContent(`
          <kup-tooltip>
            <p>hover me</p>
          </kup-tooltip>
        `);

        const tooltip = await page.find(tooltipSelector);

        expect(tooltip).toHaveAttribute('hidden');

        const detail = await page.find(detailSelector);

        expect(detail).not.toHaveClass('visible');
    });

    it('hover on wrapper', async () => {
        const page = await newE2EPage();

        await page.setContent(`
          <kup-tooltip>
            <p>hover me</p>
          </kup-tooltip>
        `);

        const kupTooltipLoadDetail = await page.spyOnEvent(
            'kupTooltipLoadDetail'
        );

        await page.hover('kup-tooltip');

        // waiting for settimeout to be done
        await page.waitFor(550);

        const tooltip = await page.find(tooltipSelector);

        expect(tooltip).not.toHaveAttribute('hidden');

        const detail = await page.find(detailSelector);

        expect(detail).not.toHaveClass('visible');

        // waiting for event
        await page.waitFor(200);

        expect(kupTooltipLoadDetail).toHaveLength(1);

        // setting detail data
        await page.$eval('kup-tooltip', (el: any) => {
            el.detailData = {
                columns: [
                    {
                        name: 'label',
                        title: 'Label',
                        size: '10',
                    },
                    {
                        name: 'value',
                        title: 'Value',
                        size: '10',
                    },
                ],
                rows: [
                    {
                        cells: {
                            label: {
                                value: 'Born to die',
                            },
                            value: {
                                value: '4:46',
                            },
                        },
                    },
                    {
                        cells: {
                            label: {
                                value: 'Off to the races',
                            },
                            value: {
                                value: '5:00',
                            },
                        },
                    },
                    {
                        cells: {
                            label: {
                                value: 'Blue jeans',
                            },
                            value: {
                                value: '3:29',
                            },
                        },
                    },
                ],
            };
        });

        await page.waitForChanges();

        expect(detail).toHaveClass('visible');

        expect(detail).toEqualHtml(`
            <div id="detail" class="visible">
                <div class="detail-row">
                    <div class="detail-row__label">Born to die</div>
                    <div class="detail-row__value">4:46</div>
                </div>
                <div class="detail-row">
                    <div class="detail-row__label">Off to the races</div>
                    <div class="detail-row__value">5:00</div>
                </div>
                <div class="detail-row">
                    <div class="detail-row__label">Blue jeans</div>
                    <div class="detail-row__value">3:29</div>
                </div>
            </div>
        `);
    });
});
