import { newE2EPage } from '@stencil/core/testing';

import { groupingData, d8Data } from './mocked-data';

import {
  rowsSelector,
  headerCellsSelector,
  expanderSelector,
  rowExpanderSelector,
} from './data-table-selectors';

import { GroupLabelDisplayMode } from '../../../src/components/kup-data-table/kup-data-table-declarations';

const sortIconSelector = 'kup-data-table >>> table thead .column-sort span';

//const collapseIcon = 'M19,13H5V11H19V13Z';
//const expandIcon = 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z';
const expandClass = 'collapsed';
const collapseClass = 'expanded';

// TODO edit function which creates data for table: edit the GroupingDataFactory or improve it (mocked-data.ts of the data table)

describe.skip.each([
  ['rows', 'left'],
  ['columns', 'top'],
])('kup-data-table with fixed %i', (currentDirection: string, startDirection: string) => {
  beforeEach(async () => {
    // TODO common setup for each test
  });

  it.each([
    ['0', 0],
    ['a negative number', -2],
  ])(`set to %i does not sticky position any ${currentDirection}`, async (label: string, fixedDirectionValue: number) => {

  });

  it(`set to a non integer value warns the user and behaves as if fixed ${currentDirection} is set to 0`, async () => {

  });

  it.each([
    [1],
    [2],
    [3],
  ])(`set to a value > 0 and < columns.number, sticky position the correct number (currently %i) of ${currentDirection} starting from the ${startDirection} of the table`, async () => {

  });

  it(`and with grouping activated does not position sticky any ${currentDirection}`, async () => {
    const currentlyFixedCount = 3;
  });
});

it.skip(`kup-data-table with fixed rows and columns both > 0 have a matrix of cells with both fixed behaviors`, async() => {
  // TODO check if there are other things to test
  const fixedRows = 3;
  const fixedColumns = 2;

});
