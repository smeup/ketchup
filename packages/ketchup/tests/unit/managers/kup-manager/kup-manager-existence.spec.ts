import { KupManager } from '../../../../src/managers/kup-manager/kup-manager';
import { KupDom } from '../../../../src/managers/kup-manager/kup-manager-declarations';

const dom: KupDom = document.documentElement as KupDom;
if (!dom.ketchup) {
    dom.ketchup = new KupManager();
}

describe('Test KupManager APIs existence', () => {
    it('KupManager exists', () => {
        expect(dom.ketchup).toBeDefined();
    });

    it('KupData exists', () => {
        expect(dom.ketchup.data).toBeDefined();
    });

    it('KupDates exists', () => {
        expect(dom.ketchup.dates).toBeDefined();
    });

    it('KupDebug exists', () => {
        expect(dom.ketchup.debug).toBeDefined();
    });

    it('KupDynamicPosition exists', () => {
        expect(dom.ketchup.dynamicPosition).toBeDefined();
    });

    it('KupInteract exists', () => {
        expect(dom.ketchup.interact).toBeDefined();
    });

    it('KupLanguage exists', () => {
        expect(dom.ketchup.language).toBeDefined();
    });

    it('KupMath exists', () => {
        expect(dom.ketchup.math).toBeDefined();
    });

    it('KupObjects exists', () => {
        expect(dom.ketchup.objects).toBeDefined();
    });

    it('KupScrollOnHover exists', () => {
        expect(dom.ketchup.scrollOnHover).toBeDefined();
    });

    it('KupSearch exists', () => {
        expect(dom.ketchup.search).toBeDefined();
    });

    it('KupTheme exists', () => {
        expect(dom.ketchup.theme).toBeDefined();
    });

    it('KupToolbar exists', () => {
        expect(dom.ketchup.toolbar).toBeDefined();
    });

    it('KupTooltip exists', () => {
        expect(dom.ketchup.tooltip).toBeDefined();
    });
});
