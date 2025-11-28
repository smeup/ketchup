import { newE2EPage } from '@stencil/core/testing';
import { jestDelay } from '../../utils/utils';
import { ItemsDisplayMode } from '../kup-list/kup-list-declarations';

jest.setTimeout(10000);

describe('kup-autocomplete', () => {
    async function setupTest(pageContent) {
        const page = await newE2EPage();
        await page.setContent(pageContent);

        const input = await page.find('kup-autocomplete >>> input');
        expect(input).not.toBeNull();

        return { page, input };
    }

    it('render with minimumChars = 5', async () => {
        const { page, input } = await setupTest(
            '<kup-autocomplete minimum-chars="5"></kup-autocomplete>'
        );

        let value = await input.getProperty('value');
        expect(value).toBe('');

        await input.type('test');
        let suggestions = await page.find('kup-list');
        expect(suggestions).toBeNull();

        await input.type('s');
        await jestDelay(2000);
        suggestions = await page.find('kup-list');
        expect(suggestions).not.toBeNull();

        const hasActiveClass = await suggestions.classList.contains(
            'kup-dynamic-position-active'
        );
        expect(hasActiveClass).toBe(true);
    });

    it(`render with DescrMode = ${ItemsDisplayMode.CODE}`, async () => {
        const { page, input } = await setupTest(
            '<kup-autocomplete display-mode="code"></kup-autocomplete>'
        );

        const data = [
            {
                value: 'Text 1',
                id: 'txt1',
            },
            {
                value: 'Text 2',
                id: 'txt2',
            },
            {
                value: 'Text 3',
                id: 'txt3',
            },
            {
                value: 'Text 4',
                id: 'txt4',
            },
            {
                value: 'Text 5',
                id: 'txt5',
            },
        ];
        await page.$eval(
            'kup-autocomplete',
            (el: any, data) => {
                el.data = {
                    'kup-list': {
                        data,
                    },
                };
            },
            data
        );

        await input.type('txt');
        await jestDelay(2000);
        const suggestions = await page.findAll('kup-list >>> .list-item__text');
        expect(suggestions).not.toBeNull();

        suggestions.forEach((el, index) => {
            const expectedText = `${data[index].id} - ${data[index].value}`;
            const actualText = el.textContent.trim();
            expect(actualText).toBe(expectedText);
        });
    });

    it('render with custom placeholder', async () => {
        const { page, input } = await setupTest(
            '<kup-autocomplete placeholder="Enter text here"></kup-autocomplete>'
        );

        const placeholder = await input.getAttribute('placeholder');
        expect(placeholder).toBe('Enter text here');
    });
});
