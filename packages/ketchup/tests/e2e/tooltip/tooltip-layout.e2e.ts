import { newE2EPage } from '@stencil/core/testing';

describe('kup-tooltip', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-tooltip></kup-tooltip>');
        const element = await page.find('kup-tooltip');
        expect(element).toHaveClass('hydrated');
    });

    it('uses default layout', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-tooltip></kup-tooltip>');

        const tooltip = await page.find('kup-tooltip');

        expect(tooltip.shadowRoot).toEqualHtml(`
            <div id="wrapper">
              <slot></slot>
              <div id="tooltip" hidden="">
                <div id="main-content">
                  <div class="left">
                    <slot name="slot1"></slot>
                  </div>
                  <div class="right">
                    <div>
                      <slot name="slot2"></slot>
                    </div>
                    <div class="slot3">
                      <slot name="slot3"></slot>
                    </div>
                    <div>
                      <slot name="slot4"></slot>
                    </div>
                  </div>
                </div>
                <div id="detail"></div>
              </div>
            </div>
        `);
    });

    it('uses layout2', async () => {
        const page = await newE2EPage();

        await page.setContent(`<kup-tooltip layout="2"></kup-tooltip>`);

        const tooltip = await page.find('kup-tooltip');

        expect(tooltip.shadowRoot).toEqualHtml(`
            <div id="wrapper">
              <slot></slot>
              <div id="tooltip" hidden="">
                <div id="main-content" class="layout2">
                  <div>
                    <slot name="slot1" />
                  </div>
                </div>
                <div id="detail"></div>
              </div>
            </div>
        `);
    });

    it('uses layout3', async () => {
        const page = await newE2EPage();

        await page.setContent(`<kup-tooltip layout="3"></kup-tooltip>`);

        const tooltip = await page.find('kup-tooltip');

        expect(tooltip.shadowRoot).toEqualHtml(`
            <div id="wrapper">
              <slot></slot>
              <div id="tooltip" hidden="">
                <div id="main-content" class="layout3">
                  <div class="slot1">
                    <slot name="slot1" />
                  </div>
                  <div class="slot2">
                    <slot name="slot2" />
                  </div>
                  <div class="slot3">
                    <slot name="slot3" />
                  </div>
                </div>
                <div id="detail"></div>
              </div>
            </div>
        `);
    });
});
