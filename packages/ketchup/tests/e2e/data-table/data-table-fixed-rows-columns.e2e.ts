import {newE2EPage} from '@stencil/core/testing';

import {groupingData, d8Data} from './mocked-data';

import {
    rowsSelector,
    headerCellsSelector,
    expanderSelector,
    rowExpanderSelector,
} from './data-table-selectors';

import {
    FixedCellsClasses,
    FixedCellsCSSVarsBase
} from '../../../src/components/kup-data-table/kup-data-table-declarations';

let page;
let tableElement;

function getPropDirectionFromCurrent(direction: string): string {
    return 'fixed' + direction.slice(0,1).toUpperCase() + direction.slice(1, direction.length);
}

// TODO edit function which creates data for table: edit the GroupingDataFactory or improve it (mocked-data.ts of the data table)

describe.each([
    ['rows', 'left'],
    ['columns', 'top'],
])('kup-data-table with fixed %s', (currentDirection: string, startDirection: string) => {
    beforeEach(async () => {
        page = await newE2EPage();
        await page.setContent(`<kup-data-table></kup-data-table>`);
        tableElement = await page.find('kup-data-table');
        await tableElement.setProperty('data', groupingData);
        await page.waitForChanges();
    });

    it.each([
        ['0', 0],
        ['a negative number', -2],
    ])(`set to %s does not sticky position any ${currentDirection}`, async (label: string, fixedDirectionValue: number) => {
        await tableElement.setProperty(getPropDirectionFromCurrent(currentDirection), fixedDirectionValue);
        await page.waitForChanges();
        const allCells = await page.findAll('kup-data-table >>> td');
        const allHeaderCells = await page.findAll('kup-data-table >>> th');

        for (let cell of allCells.concat(allHeaderCells)) {
            expect(cell).not.toHaveClass(FixedCellsClasses[currentDirection]);
        }
    });

    it(`set to a non integer value warns the user and behaves as if fixed ${currentDirection} is set to 0`, async (done) => {
        const nonIntegerValue = 'notInt';
        const propDirection = getPropDirectionFromCurrent(currentDirection);
        page.on('console', consoleMessage => {
            if (consoleMessage.text().indexOf(propDirection + ' property is not valid') >= 0 && consoleMessage.type() === 'warning') {
                done();// Use the done callback
            } else {
                done('The console did not emit the correct message');
            }
        });

        await tableElement.setProperty(propDirection, nonIntegerValue);
        await page.waitForChanges();
    });

    it.each([
        [1],
        [2],
        [3],
    ])(`set to a value > 0 and < columns.number, sticky position the correct number (currently %i) of ${currentDirection} starting from the ${startDirection} of the table`, async () => {
        expect(false).toBeTruthy();
    });

    it(`and with grouping activated does not position sticky any ${currentDirection}`, async () => {
        const propDirection = getPropDirectionFromCurrent(currentDirection);
        const currentlyFixedCount = currentDirection === 'rows' ? 3 : 1;
        await tableElement.setProperty('groups', [{ column: 'FLD1', visible: true }]);
        await tableElement.setProperty(propDirection, currentlyFixedCount);

        await page.waitForChanges();
        const allCells = await page.findAll('kup-data-table >>> td');
        const allHeaderCells = await page.findAll('kup-data-table >>> th');

        for (let cell of allCells.concat(allHeaderCells)) {
            expect(cell).not.toHaveClass(FixedCellsClasses[currentDirection]);
        }
    });
});

it.skip(`kup-data-table with fixed rows and columns both > 0 have a matrix of cells with both fixed behaviors`, async () => {
    // TODO check if there are other things to test
    const fixedRows = 3;
    const fixedColumns = 2;
    expect(false).toBeTruthy();
});
