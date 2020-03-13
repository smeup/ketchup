import { newE2EPage } from '@stencil/core/testing';

import { staticData} from './mocked-data';

import { cellsSelector, rowsSelector } from './data-table-selectors';
import {consoleError} from "@stencil/core/dist/testing/task-queue";

const sortIconSelector = 'kup-data-table >>> table thead .column-sort span';

// Data to calculate before the test is run
const columnData = {
    columns: staticData.columns,
    visibleColumns() {
        return this.columns.reduce((total, column) => !column.hasOwnProperty(column.visible) || column.visible ? total + 1 : total, 0);
    }
};

let draggableItems, page;

describe('data-table with sort column enabled', () => {


    beforeEach(async () => {
        page = await newE2EPage();
        await page.setContent('<kup-data-table enable-sortable-columns></kup-data-table>');

        const table = await page.find('kup-data-table');
        table.setProperty('data', staticData);

        await page.waitForChanges();

        draggableItems = await page.findAll('kup-data-table >>> thead [draggable]');
    });

    it('can drag columns', async () => {
        expect(draggableItems).toHaveLength(columnData.visibleColumns())
    });

    // TODO fix
    it.skip('drags the first column', async () => {
        page = await newE2EPage();
        await page.setContent('<kup-data-table enable-sortable-columns></kup-data-table>');

        const table = await page.find('kup-data-table');
        await table.setProperty('data', staticData);

        await page.waitForChanges();

        draggableItems = await page.findAll('kup-data-table >>> thead [draggable]');

        const dragStartListener = page.spyOnEvent('dragstart');
        expect(dragStartListener).toHaveLength(1);
    }, 30000);
});
