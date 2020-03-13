import {newE2EPage} from '@stencil/core/testing';

import {staticData} from './mocked-data';
import {cellsSelector} from './data-table-selectors';

const globalFilterSelector = 'kup-data-table >>> .globalFilter';
const sortIconSelector = 'kup-data-table >>> table thead .column-sort span';

let page;
let tableElement;
let menuElements;

describe('kup-data-table thead column context menu', () => {

    beforeEach(async () => {
        // Sets data
        page = await newE2EPage();
        await page.setContent('<span id="external-span">external cell content</span><kup-data-table></kup-data-table><div id="external-div">external div content</div>');
        tableElement = await page.find('kup-data-table');
        await tableElement.setProperty('data', staticData);
        await page.waitForChanges();

        // Opens menu on the first column
        const coordinates = await page.evaluate( () => {
            let clientRect = document.querySelector('kup-data-table').shadowRoot.querySelector('thead > tr > th').getBoundingClientRect();

            return {
                x: clientRect.left + clientRect.width / 2,
                y: clientRect.top + clientRect.height / 2
            };
        });

        await page.mouse.click(coordinates.x, coordinates.y, {button: 'right'});
        await page.waitForChanges();

        menuElements = await page.findAll('kup-data-table >>> thead .column-menu');
    });

    it('is opened by left click on th cells', async () => {
        // Controls the number of menus equals the number of columns
        expect(menuElements).toHaveLength(staticData.columns.length);

        // ONly the first menu must be open, the other must be closed
        for (let i = 0; i < menuElements.length; i++) {
            expect(menuElements[i]).toHaveClass(i === 0 ? 'open' : 'closed');
        }
    });

    describe('once opened,', () => {
        const firstMenuSelector = 'thead > tr > th:first-of-type .column-menu';

        it('is not automatically closed by a left click from within the open menu', async () => {
            // Checks that the first menu is open
            const openMenuBefore = await page.find(`kup-data-table >>> ${firstMenuSelector}`);
            expect(openMenuBefore).toHaveClass('open');

            await page.evaluate((menuSelector) => {
                (document.querySelector('kup-data-table').shadowRoot.querySelector(menuSelector) as HTMLDivElement).click();
                return true;
            }, firstMenuSelector);

            await page.waitForChanges();

            const openMenuAfter = await page.find(`kup-data-table >>> ${firstMenuSelector}`);
            expect(openMenuAfter).toHaveClass('open');
        });

        describe('is closed by a left click', () => {
            it.each([
                ['thead > tr:first-of-type > th:first-of-type'],
                ['thead > tr:first-of-type > th:last-of-type'],
                ['tbody > tr:first-of-type > td:first-of-type'],
                ['tbody > tr:last-of-type > td:last-of-type'],
            ])('anywhere from within the table but not from within the menu itself (selector: %s)', async (currentSelector) => {
                // Checks that the first menu is open
                const openMenu = await page.find('kup-data-table >>> thead .column-menu');
                expect(openMenu).toHaveClass('open');

                await page.evaluate( (currentClickSelector) => {
                    (document.querySelector('kup-data-table').shadowRoot.querySelector(currentClickSelector) as HTMLTableCellElement).click();
                    return true;
                }, currentSelector);

                await  page.waitForChanges();

                // Checks that each menu now is closed
                menuElements = await page.findAll('kup-data-table >>> thead .column-menu');
                for (let i = 0; i < menuElements.length; i++) {
                    expect(menuElements[i]).toHaveClass('closed');
                }
            });

            it.each([
                ['span element placed before the table', '#external-span'],
                ['div element placed after the table', '#external-div']
            ])('from anywhere outside the kup-data-table (%s)', async(description, selector) => {
                // Checks that the first menu is open
                const openMenuBefore = await page.find(`kup-data-table >>> ${firstMenuSelector}`);
                expect(openMenuBefore).toHaveClass('open');

                await page.evaluate( (currentClickSelector) => {
                    (document.querySelector(currentClickSelector) as HTMLElement).click();
                    return true;
                }, selector);

                await page.waitForChanges();

                const openMenuAfter = await page.find(`kup-data-table >>> ${firstMenuSelector}`);
                expect(openMenuAfter).toHaveClass('closed');
            });
        });
    });
});
