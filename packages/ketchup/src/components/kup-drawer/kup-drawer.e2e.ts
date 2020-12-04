import { newE2EPage } from '@stencil/core/testing';

describe('kup-drawer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kup-drawer></kup-drawer>');

    const element = await page.find('kup-drawer');
    expect(element).toHaveClass('hydrated');
  });
});
