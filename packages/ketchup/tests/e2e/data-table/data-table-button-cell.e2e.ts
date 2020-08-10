import {newE2EPage} from '@stencil/core/testing';
import {tableButtonData} from './mocked-data';
import {cellsSelector} from './data-table-selectors';
import { isButton } from "../../../src/utils/object-utils";

const {columns, rows} = tableButtonData;

// gets which column holds the buttons
const buttonColumnName = 'BTN';
const btnColumnIndex = columns.reduce((result, col, index) => col.name === buttonColumnName ? index : result, -1);


describe.skip('data-table with a button column', () => {
  let page;
  let tableButtonCells;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<kup-data-table rows-per-page="50"></kup-data-table>');
    const element = await page.find('kup-data-table');

    element.setProperty('data', tableButtonData);
    await page.waitForChanges();

    tableButtonCells = await page.findAll(cellsSelector + `:nth-of-type(${btnColumnIndex + 1})`);
    return;
  });

  it('renders all the provided rows', async () => {
    expect(tableButtonCells).toHaveLength(rows.length);
  });

  it('renders button element only when specified by the cell', async() => {
    await Promise.all(
      rows.map(async ({cells}, index) => {
        let cellButton = await tableButtonCells[index].find('kup-button');
        expect(!!cellButton).toBe(isButton(cells[buttonColumnName].obj));
      })
    );
  });

  it('fires kupCellButtonClicked event when button inside the cell is clicked with correct payload', async () => {
    const dataTableButtonClicked = await page.spyOnEvent('kupCellButtonClicked');
    const firstButton = await tableButtonCells[0].find('kup-button');
    await firstButton.click();

    expect(dataTableButtonClicked).toHaveLength(1);

    const eventDetail = dataTableButtonClicked.events[0].detail;

    expect(eventDetail.column).toEqual(columns[btnColumnIndex]);
    expect(eventDetail.row).toEqual(rows[0]);
    expect(eventDetail.cell).toEqual(rows[0].cells[buttonColumnName]);
  });
});
