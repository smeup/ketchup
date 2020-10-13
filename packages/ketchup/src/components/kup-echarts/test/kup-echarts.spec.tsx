import { newSpecPage } from '@stencil/core/testing';
import { KupEcharts } from '../kup-echarts';

describe('kup-echarts', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KupEcharts],
      html: `<kup-echarts></kup-echarts>`,
    });
    expect(page.root).toEqualHtml(`
      <kup-echarts>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kup-echarts>
    `);
  });
});
