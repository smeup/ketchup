import {newE2EPage} from '@stencil/core/testing';

import {staticData, hiddenColumns, cellStyleDataTable} from './mocked-data';
import {cellsSelector} from './data-table-selectors';

const globalFilterSelector = 'kup-data-table >>> .globalFilter';
const sortIconSelector = 'kup-data-table >>> table thead .column-sort span';

describe.skip('kup-data-table thead column context menu', () => {

    it('is opened by right click on th cells', async () => {});
    it('once opened, is closed by left click anywhere but from within the menu itself or its own th', async () => {});
});
