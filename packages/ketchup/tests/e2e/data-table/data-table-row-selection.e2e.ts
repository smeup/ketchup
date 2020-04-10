import { newE2EPage } from '@stencil/core/testing';
import { staticData } from './mocked-data';
import {
    cellsSelector,
    headerCellsSelector,
    rowsSelector,
} from './data-table-selectors';

describe('row selection', () => {
    it.skip('auto select row', async () => {
        const page = await newE2EPage();

        await page.setContent(`<kup-data-table></kup-data-table>`);

        const element = await page.find('kup-data-table');

        const kupAutoRowSelect = await element.spyOnEvent('kupAutoRowSelect');

        element.setProperty('data', staticData);
        element.setProperty('selectRow', 1);

        await page.waitForChanges();

        expect(kupAutoRowSelect).toHaveLength(1);
    });

    it('single selection', async () => {
        const page = await newE2EPage();

        await page.setContent(`<kup-data-table></kup-data-table>`);

        const element = await page.find('kup-data-table');

        const kupRowSelected = await element.spyOnEvent('kupRowSelected');

        element.setProperty('data', staticData);

        await page.waitForChanges();

        const cells = await page.findAll(cellsSelector);

        await cells[0].click();

        await page.waitForChanges();

        expect(kupRowSelected).toHaveLength(1);

        const detail = kupRowSelected.firstEvent.detail;

        expect(detail.clickedColumn).toEqual('FLD1');
        expect(detail.selectedRows).toHaveLength(1);
        expect(detail.selectedRows[0]).toEqual(staticData.rows[0]);
    });

    it('multiple selection', async () => {
        const page = await newE2EPage();

        await page.setContent(`<kup-data-table></kup-data-table>`);

        const dataTable = await page.find('kup-data-table');

        dataTable.setProperty('data', staticData);
        dataTable.setProperty('multiSelection', true);

        const kupRowSelected = await dataTable.spyOnEvent('kupRowSelected');

        await page.waitForChanges();

        // testing header
        const headerCells = await page.findAll(headerCellsSelector);
        expect(headerCells).toHaveLength(4);

        const headerCheckbox = await headerCells[0].findAll(
            'kup-checkbox'
        );
        expect(headerCheckbox).toHaveLength(1);

        // getting rows
        const rows = await page.findAll(rowsSelector);

        const checkboxPromises = rows.map((row) =>
            row.findAll('kup-checkbox')
        );

        const checkboxesMatrix = await Promise.all(checkboxPromises);

        expect(checkboxesMatrix).toHaveLength(3);

        const checkboxes = checkboxesMatrix.map((value) => {
            expect(value).toHaveLength(1);

            return value[0];
        });

        await checkboxes[1].click();
        await checkboxes[2].click();

        await page.waitForChanges();

        expect(kupRowSelected).toHaveLength(2);

        let detail = kupRowSelected.events[1].detail;

        // expect(detail.clickedColumn).toBeNull();
        expect(detail.selectedRows).toHaveLength(2);
        expect(detail.selectedRows[0]).toEqual(staticData.rows[1]);
        expect(detail.selectedRows[1]).toEqual(staticData.rows[2]);

        // select all rows
        await headerCheckbox[0].click();

        await page.waitForChanges();

        expect(kupRowSelected).toHaveLength(3);

        detail = kupRowSelected.events[2].detail;

        expect(detail.clickedColumn).toBeNull();
        expect(detail.selectedRows).toHaveLength(3);
        expect(detail.selectedRows[0]).toEqual(staticData.rows[0]);
        expect(detail.selectedRows[1]).toEqual(staticData.rows[1]);
        expect(detail.selectedRows[2]).toEqual(staticData.rows[2]);

        // unselect all rows
        await headerCheckbox[0].click();

        await page.waitForChanges();

        expect(kupRowSelected).toHaveLength(4);

        detail = kupRowSelected.events[3].detail;

        expect(detail.clickedColumn).toBeNull();
        expect(detail.selectedRows).toHaveLength(0);
    });
});
