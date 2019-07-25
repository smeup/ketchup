import {newE2EPage} from '@stencil/core/testing';
import {dataTableCheckboxFactory} from './mocked-data';
import {cellsSelector} from './data-table-selectors';
import { isCheckbox } from "../../../src/utils/object-utils";

const {config, data} = dataTableCheckboxFactory();
const {columns, rows} = data;

// gets which column holds the buttons
const checkboxColumnName = columns.reduce((result, col) => col.title === 'Si/No' ? col.name: result, '');
const btnColumnIndex = columns.reduce((result, col, index) => col.name === checkboxColumnName ? index : result, -1);


describe('data-table with a checkbox column', () => {
  let page;
  let tableCheckboxCells;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent(`<kup-data-table rows-per-page="${config.rowsPerPage}"></kup-data-table>`);
    const element = await page.find('kup-data-table');

    element.setProperty('data', data);
    await page.waitForChanges();

    tableCheckboxCells = await page.findAll(cellsSelector + `:nth-of-type(${btnColumnIndex + 1})`);
    return;
  });

  it('renders checkbox element only when specified by the cell', async() => {
    await Promise.all(
      rows.map(async ({cells}, index) => {
        let cellCheckbox = await tableCheckboxCells[index].find('kup-checkbox');
        expect(!!cellCheckbox).toBe(isCheckbox(cells[checkboxColumnName].obj));
      })
    );
  });

  it('has disabled attribute if row is readOnly', async() => {
    await Promise.all(
      rows.map(async (row, index) => {
        let cellCheckbox = await tableCheckboxCells[index].find('kup-checkbox');
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

  it('has checked attribute if cell[name].obj.k is set', async() => {
    await Promise.all(
      rows.map(async ({cells}, index) => {
        let checkedValue = !!cells[checkboxColumnName].obj.k;
        let cellCheckbox = await tableCheckboxCells[index].find('kup-checkbox');
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