import { newSpecPage } from '@stencil/core/testing';
import { KupDrawer } from '../kup-drawer';

describe('kup-drawer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KupDrawer],
      html: `<kup-drawer></kup-drawer>`,
    });
    expect(page.root).toEqualHtml(`
      <kup-drawer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kup-drawer>
    `);
  });
});
