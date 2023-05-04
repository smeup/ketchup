import { KupDatesLocales } from '../../../../src/managers/kup-dates/kup-dates-declarations';
import { KupManager } from '../../../../src/managers/kup-manager/kup-manager';
import { KupDom } from '../../../../src/managers/kup-manager/kup-manager-declarations';

const locale = 'it' as KupDatesLocales;
const dom: KupDom = document.documentElement as KupDom;
dom.ketchup = new KupManager({ dates: { locale } });

describe('Test KupDates initialization', () => {
    it('KupDates locales is initialized', () => {
        expect(dom.ketchup.dates.locale).toBe(locale);
    });
});
