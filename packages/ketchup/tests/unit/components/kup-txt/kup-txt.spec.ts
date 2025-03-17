import { newSpecPage } from '@stencil/core/testing';
import { KupTxt } from '../../../../../ketchup/src/components/kup-txt/kup-txt';
describe('kup-txt', () => {
    it('Test rendering', async () => {
        const page = await newSpecPage({
            components: [KupTxt],
            html: `<kup-txt></kup-txt>`,
        });

        const props = {
          data: {
              value: `Welcome to the kup-txt component demo.\r\nThis component handles text transformations,\r\nsuch as replacing custom line breaks.\r\nIt's useful for displaying formatted content\r\nin a web application.`,
              obj: { t: '', p: '', k: '' },
          },
      };

      page.rootInstance.data = props.data;
      await page.waitForChanges();

      const shadowRoot = page.root?.shadowRoot;
      expect(shadowRoot?.innerHTML).toContain("Benvenuto nella demo del componente kup-txt");              
    });
});
