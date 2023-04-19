import { KupManager } from '../../../../src/managers/kup-manager/kup-manager';
import { KupDom } from '../../../../src/managers/kup-manager/kup-manager-declarations';
import customTheme from '../../../resources/mock/kup-theme-custom-theme.json';

const theme = 'test';
const dom: KupDom = document.documentElement as KupDom;
dom.ketchup = new KupManager({ theme: { list: customTheme, name: theme } });

describe('Test KupTheme initialization', () => {
    it('KupTheme custom json is initialized', () => {
        expect(dom.ketchup.theme.list).toBe(customTheme);
    });

    it('KupTheme name is initialized', () => {
        expect(dom.ketchup.theme.name).toBe(theme);
    });

    it('KupTheme document attribute reflects current theme', () => {
        dom.ketchup.theme.set(theme);
        expect(dom.getAttribute('kup-theme')).toBe(theme);
    });
});
