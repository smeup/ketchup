import {newE2EPage} from '@stencil/core/testing';
import {tableButtonData} from './mocked-data';
import {cellsSelector} from './data-table-selectors';
import { isButton } from "../../../src/utils/object-utils";

const {columns, rows} = tableButtonData;

// gets which column holds the buttons
const buttonColumnName = 'BTN';
const btnColumnIndex = columns.reduce((result, col, index) => col.name === buttonColumnName ? index : result, -1);


describe('data-table with a button column', () => {

  it('renders button only when specified', async () => {
    const page = await newE2EPage();

    await page.setContent('<kup-data-table rows-per-page="50"></kup-data-table>');

    const element = await page.find('kup-data-table');

    element.setProperty('data', tableButtonData);

    await page.waitForChanges();

    const tableButtonCells = await page.findAll(cellsSelector + `:nth-of-type(${btnColumnIndex + 1})`);

    expect(tableButtonCells).toHaveLength(rows.length);

    await Promise.all(
      rows.map(async ({cells}, index) => {
        const cellButton = await tableButtonCells[index].find('kup-button');

        expect(!!cellButton).toBe(isButton(cells[buttonColumnName].obj));
      })
    );


    const dataTableButtonClicked = await page.spyOnEvent('kupCellButtonClicked');

    /*const boxObjects = await boxes[0].findAll('.box-object');

    expect(boxObjects).toHaveLength(4);

    const kupButton = await boxObjects[3].find('kup-button');

    await kupButton.click();

    expect(dataTableButtonClicked).toHaveLength(1);

    const detail = dataTableButtonClicked.events[0].detail;

    expect(detail.column).toBe('FLD4');

    expect(detail.row).toEqual(j4btnData.rows[0]);*/
  });
});
