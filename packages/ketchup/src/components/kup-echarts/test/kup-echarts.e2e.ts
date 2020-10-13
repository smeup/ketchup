import { newE2EPage } from '@stencil/core/testing';

describe('kup-echarts', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kup-echarts></kup-echarts>');

    const element = await page.find('kup-echarts');
    expect(element).toHaveClass('hydrated');
  });
});
