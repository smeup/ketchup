import { E2EPage, newE2EPage, E2EElement } from '@stencil/core/testing';

import { staticData } from './mocked-data';

/**
 * To Travel through two layers of shadow dom, Stencil 'piercing' selector is no more sufficient.
 * The issue seems more related to Puppeteer than anything else.
 * Take a look [here]{@link https://github.com/GoogleChrome/puppeteer/issues/858#issuecomment-438540596}and
 * [here]{@link https://github.com/ionic-team/stencil/issues/1530} for current solutions.
 *
 * @param page - the current test page
 * @return A promise whose payload is the E2EElement of the global filter
 */
async function globalFilterSelector(page: E2EPage): Promise<E2EElement> {
    const temp = ((await page.evaluateHandle(
        `document.querySelector("kup-data-table").shadowRoot.querySelector("#global-filter > kup-text-field").shadowRoot.querySelector("input")`
    )) as unknown) as E2EElement;
    return temp;
}

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}

const filtersSelector = 'kup-data-table >>> table > thead kup-text-field';

describe('kup-data-table with global filter', () => {
    it.skip('should have global filter', async () => {
        const page = await newE2EPage();

        await page.setContent(
            '<kup-data-table global-filter></kup-data-table><kup-text-field></kup-text-field>'
        );
        const element = await page.find('kup-data-table');

        element.setProperty('data', staticData);
        element.setProperty('globalFilterValue', 'DEL');

        await page.waitForChanges();

        // no column filters
        const filters = await page.findAll(filtersSelector);
        expect(filters).toHaveLength(0);

        // testing table rows
        let bodyRows = await page.findAll(
            'kup-data-table >>> table tbody > tr'
        );
        expect(bodyRows).toHaveLength(1);

        // getting global filter input and changing value
        let globalFilterInput = await globalFilterSelector(page);

        // Read inside the read me for explanations on the different methods of typing characters with puppeteer API
        await globalFilterInput.press('Backspace');
        await globalFilterInput.press('Backspace');
        await globalFilterInput.press('Backspace');
        await globalFilterInput.type('FRA', { delay: 1000 });

        await globalFilterInput.click();

        await page.waitForChanges();

        // testing table rows
        bodyRows = await page.findAll('kup-data-table >>> table tbody > tr');
        expect(bodyRows).toHaveLength(2);
    }, 20000); // Raised default time out to allow computing of filtered table and user keypress
});

describe('kup-data-table with filters', () => {
    it.skip('should have filters', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-data-table show-filters></kup-data-table>');
        const element = await page.find('kup-data-table');

        element.setProperty('data', staticData);

        await page.waitForChanges();

        let globalFilterInput;
        // no global filter -> we use the try catch statement since the promise must fail in order for the test to be correct.
        try {
            globalFilterInput = await globalFilterSelector(page);
        } catch (e) {
            expect(globalFilterInput).toBeFalsy();
        } finally {
            expect(globalFilterInput).toBeFalsy();
        }

        // testing filters
        const filters = await page.findAll(filtersSelector);
        expect(filters).toHaveLength(3);
    });
});

describe('kup-data-table with filters and global filter', () => {
    it.skip('should have filters', async () => {
        const page = await newE2EPage();

        await page.setContent(
            '<kup-data-table show-filters global-filter></kup-data-table>'
        );
        const element = await page.find('kup-data-table');

        element.setProperty('data', staticData);

        await page.waitForChanges();

        // getting filters
        const filters = await page.findAll(filtersSelector);
        expect(filters).toHaveLength(3);

        // getting global filter input
        const globalFilterInput = await globalFilterSelector(page);
        expect(globalFilterInput).toBeTruthy();
    });
});
