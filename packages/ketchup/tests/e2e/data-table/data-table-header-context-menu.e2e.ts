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
        await page.setContent('<kup-data-table></kup-data-table>');
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

        console.log("dentro la callback", coordinates);

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

    it('once opened, is closed by left click anywhere but from within the menu itself', async () => {
        // Checks that the first menu is open
        const openMenu = await page.find('kup-data-table >>> thead .column-menu');
        expect(openMenu).toHaveClass('open');

        await page.evaluate( () => {
            (document.querySelector('kup-data-table').shadowRoot.querySelector('tbody > tr:first-of-type > td:first-of-type') as HTMLTableCellElement).click();
            return true;
        });

        await  page.waitForChanges();

        // Checks that each menu now is closed
        menuElements = await page.findAll('kup-data-table >>> thead .column-menu');
        for (let i = 0; i < menuElements.length; i++) {
            expect(menuElements[i]).toHaveClass('closed');
        }
    });
});
