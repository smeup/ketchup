import { newE2EPage } from '@stencil/core/testing';
import { dataTableCheckboxFactory } from './mocked-data';
import { cellsSelector } from './data-table-selectors';
import { KupObjects } from '../../../src/managers/kup-objects/kup-objects';

describe.each([
    ['checkbox', 'kup-checkbox'],
    ['radio', 'kup-radio-element'],
])('data-table with a %s column', (compType, compElement) => {
    let objects = new KupObjects();
    const checkObjectTypeFunction =
        compType === 'checkbox' ? objects.isCheckbox : objects.isRadio;

    const { config, data } = dataTableCheckboxFactory(
        compType === 'radio' ? 'rad' : undefined
    );
    const { columns, rows } = data;

    // gets which column holds the buttons
    const componentColumnName = columns.reduce(
        (result, col) => (col.title === 'Si/No' ? col.name : result),
        ''
    );
    const componentColumnIndex = columns.reduce(
        (result, col, index) =>
            col.name === componentColumnName ? index : result,
        -1
    );

    let page;
    let tableCheckboxCells;

    beforeEach(async () => {
        page = await newE2EPage();
        await page.setContent(
            `<kup-data-table rows-per-page="${config.rowsPerPage}"></kup-data-table>`
        );
        const element = await page.find('kup-data-table');

        element.setProperty('data', data);
        await page.waitForChanges();

        tableCheckboxCells = await page.findAll(
            cellsSelector + `:nth-of-type(${componentColumnIndex + 1})`
        );
        return;
    });

    it.skip(`renders ${compType} element only when specified by the cell`, async () => {
        await Promise.all(
            rows.map(async ({ cells }, index) => {
                let cellCheckbox = await tableCheckboxCells[index].find(
                    compElement
                );
                expect(!!cellCheckbox).toBe(
                    checkObjectTypeFunction(cells[componentColumnName].obj)
                );
            })
        );
    });

    it.skip('has disabled attribute if row is readOnly', async () => {
        await Promise.all(
            rows.map(async (row, index) => {
                let cellCheckbox = await tableCheckboxCells[index].find(
                    compElement
                );
                if (cellCheckbox) {
                    if (row.readOnly) {
                        expect(cellCheckbox).toHaveAttribute('disabled');
                    } else {
                        expect(cellCheckbox).not.toHaveAttribute('disabled');
                    }
                }
            })
        );
    });

    it.skip('has checked attribute if cell[name].obj.k is set', async () => {
        await Promise.all(
            rows.map(async ({ cells }, index) => {
                let checkedValue = !!cells[componentColumnName].obj.k;
                let cellCheckbox = await tableCheckboxCells[index].find(
                    compElement
                );
                if (cellCheckbox) {
                    if (checkedValue) {
                        expect(cellCheckbox).toHaveAttribute('checked');
                    } else {
                        expect(cellCheckbox).not.toHaveAttribute('checked');
                    }
                }
            })
        );
    });
});
