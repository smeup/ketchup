import { KupButton } from './kup-button';

describe('kup-button', () => {
    it('builds', () => {
        expect(new KupButton()).toBeTruthy();
    });

    it('button default props values', () => {
        const btn = new KupButton();

        expect(btn.flat).toBeFalsy();
        expect(btn.label).toBeFalsy();
        expect(btn.buttonClass).toBeFalsy();
        expect(btn.iconClass).toBeFalsy();
        expect(btn.fillspace).toBeFalsy();
        expect(btn.rounded).toBeFalsy();
        expect(btn.textmode).toBeFalsy();
        expect(btn.transparent).toBeFalsy();
        expect(btn.align).toBeFalsy();

        expect(btn.showtext).toBeTruthy();
        expect(btn.showicon).toBeTruthy();

        expect(btn.iconUrl).toEqual(
            'https://cdn.materialdesignicons.com/3.2.89/css/materialdesignicons.min.css'
        );

        // testing methods
        expect(btn._isHint()).toBeFalsy();
    });

    it('test hints', () => {
        const btn = new KupButton();
        btn.textmode = 'Hint';

        expect(btn._isHint()).toBeTruthy();
    });
});
