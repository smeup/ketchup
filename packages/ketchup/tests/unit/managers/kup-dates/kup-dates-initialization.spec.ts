import {
    KupDatesFormats,
    KupDatesLocales,
} from '../../../../src/managers/kup-dates/kup-dates-declarations';
import { KupManager } from '../../../../src/managers/kup-manager/kup-manager';
import { KupDom } from '../../../../src/managers/kup-manager/kup-manager-declarations';

const locale = 'it' as KupDatesLocales;
const dom: KupDom = document.documentElement as KupDom;
dom.ketchup = new KupManager({ dates: { locale } });

describe('Test KupDates initialization', () => {
    it('KupDates locales is initialized', () => {
        expect(dom.ketchup.dates.locale).toBe(locale);
    });

    it('KupDates isIsoDate', () => {
        expect(dom.ketchup.dates.isIsoDate('2024-09-30')).toBe(true);
        expect(dom.ketchup.dates.isIsoDate('2024-09-33')).toBe(false);
        expect(dom.ketchup.dates.isIsoDate('20240930')).toBe(false);

        expect(dom.ketchup.dates.isValidFormattedStringDate('30/09/2024')).toBe(
            true
        );
        expect(dom.ketchup.dates.isValidFormattedStringDate('30/09/24')).toBe(
            true
        );
        expect(dom.ketchup.dates.isValidFormattedStringDate('300924')).toBe(
            true
        );
        expect(dom.ketchup.dates.isValidFormattedStringDate('30092024')).toBe(
            true
        );

        expect(dom.ketchup.dates.isValidFormattedStringDate('333333')).toBe(
            false
        );
        expect(dom.ketchup.dates.isValidFormattedStringDate('2024-09-30')).toBe(
            false
        );

        expect(
            dom.ketchup.dates.isValidFormattedStringDate(
                '30/09/2024',
                undefined,
                true
            )
        ).toBe(true);
        expect(
            dom.ketchup.dates.isValidFormattedStringDate(
                '09/30/2024',
                'MM/DD/YYYY',
                true
            )
        ).toBe(true);
        expect(
            dom.ketchup.dates.isValidFormattedStringDate(
                '30092024',
                'MM/DD/YYYY',
                true
            )
        ).toBe(false);

        expect(
            dom.ketchup.dates.isValidFormattedStringDate(
                '10:30:35',
                KupDatesFormats.ISO_TIME,
                undefined,
                true,
                true
            )
        ).toBe(true);
        expect(
            dom.ketchup.dates.isValidFormattedStringDate(
                '10:30:35',
                KupDatesFormats.ISO_TIME,
                true,
                true,
                true
            )
        ).toBe(true);
        expect(
            dom.ketchup.dates.isValidFormattedStringDate(
                '103035',
                KupDatesFormats.ISO_TIME,
                undefined,
                true,
                true
            )
        ).toBe(true);
        expect(
            dom.ketchup.dates.isValidFormattedStringDate(
                '103035',
                KupDatesFormats.ISO_TIME,
                true,
                true,
                true
            )
        ).toBe(false);
        expect(
            dom.ketchup.dates.isValidFormattedStringDate(
                '10:30',
                KupDatesFormats.ISO_TIME_WITHOUT_SECONDS,
                undefined,
                true,
                false
            )
        ).toBe(true);
        expect(
            dom.ketchup.dates.isValidFormattedStringDate(
                '10:30',
                KupDatesFormats.ISO_TIME_WITHOUT_SECONDS,
                true,
                true,
                false
            )
        ).toBe(true);
        expect(
            dom.ketchup.dates.isValidFormattedStringDate(
                '1030',
                KupDatesFormats.ISO_TIME_WITHOUT_SECONDS,
                undefined,
                true,
                false
            )
        ).toBe(true);
        expect(
            dom.ketchup.dates.isValidFormattedStringDate(
                '1030',
                KupDatesFormats.ISO_TIME_WITHOUT_SECONDS,
                true,
                true,
                false
            )
        ).toBe(false);
    });
});
