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

        // Test for mixed format D/MM/YYYY and DD/MM/YYYY (Italian format)
        expect(dom.ketchup.dates.isValidFormattedStringDate('1/12/2023')).toBe(
            true
        );
        expect(dom.ketchup.dates.isValidFormattedStringDate('01/12/2023')).toBe(
            true
        );
        expect(dom.ketchup.dates.isValidFormattedStringDate('1/1/2023')).toBe(
            true
        );
        expect(dom.ketchup.dates.isValidFormattedStringDate('01/01/2023')).toBe(
            true
        );
        expect(dom.ketchup.dates.isValidFormattedStringDate('15/1/2023')).toBe(
            true
        );
        expect(dom.ketchup.dates.isValidFormattedStringDate('15/01/2023')).toBe(
            true
        );

        expect(dom.ketchup.dates.isValidFormattedStringDate('333333')).toBe(
            false
        );
        expect(dom.ketchup.dates.isValidFormattedStringDate('2024-09-30')).toBe(
            false
        );
    });

    it('KupDates cleanInputDateString handles various formats correctly', () => {
        // Test with separators - Italian format (DD/MM/YYYY)
        // Expected result order: DD + MM + YYYY (respecting Italian locale format)
        expect(dom.ketchup.dates.cleanInputDateString('1/12/2023')).toBe(
            '01122023'
        );
        expect(dom.ketchup.dates.cleanInputDateString('01/12/2023')).toBe(
            '01122023'
        );
        expect(dom.ketchup.dates.cleanInputDateString('15/1/2023')).toBe(
            '15012023'
        );
        expect(dom.ketchup.dates.cleanInputDateString('1/1/2023')).toBe(
            '01012023'
        );
        expect(dom.ketchup.dates.cleanInputDateString('15/01/2023')).toBe(
            '15012023'
        );

        // Test with 2-digit years
        expect(dom.ketchup.dates.cleanInputDateString('1/12/23')).toBe(
            '01122023'
        );
        expect(dom.ketchup.dates.cleanInputDateString('15/1/85')).toBe(
            '15011985'
        );

        // Test with different separators
        expect(dom.ketchup.dates.cleanInputDateString('1-12-2023')).toBe(
            '01122023'
        );
        expect(dom.ketchup.dates.cleanInputDateString('1.12.2023')).toBe(
            '01122023'
        );

        // Test with partial dates (day/month only)
        expect(dom.ketchup.dates.cleanInputDateString('1/12')).toBe('0112');
        expect(dom.ketchup.dates.cleanInputDateString('15/1')).toBe('1501');

        // Test without separators
        expect(dom.ketchup.dates.cleanInputDateString('1122023')).toBe(
            '01122023'
        );
        expect(dom.ketchup.dates.cleanInputDateString('112023')).toBe(
            '0112023'
        );
        expect(dom.ketchup.dates.cleanInputDateString('01122023')).toBe(
            '01122023'
        );
        expect(dom.ketchup.dates.cleanInputDateString('123')).toBe('0123');

        // Test edge cases
        expect(dom.ketchup.dates.cleanInputDateString('')).toBe('');
        expect(dom.ketchup.dates.cleanInputDateString('  1/12/2023  ')).toBe(
            '01122023'
        );
        expect(dom.ketchup.dates.cleanInputDateString('1a/12b/2023c')).toBe(
            '01122023'
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
