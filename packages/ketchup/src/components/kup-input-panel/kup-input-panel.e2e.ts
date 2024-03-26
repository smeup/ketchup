import { newE2EPage } from '@stencil/core/testing';

describe('kup-input-panel', () => {
    it('it runs', () => {
        expect(true).toBeTruthy();
    });

    //TODO: riparti da qui
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-input-panel></kup-input-panel>');
        const element = await page.find('kup-input-panel');
        expect(element).toHaveClass('hydrated');
    });
});
