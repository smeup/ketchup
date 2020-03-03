import {newE2EPage} from '@stencil/core/testing';

import {createData} from './mocked-data';

import {
    FixedCellsClasses,
    FixedCellsCSSVarsBase
} from '../../../src/components/kup-data-table/kup-data-table-declarations';

import {getElementClientRect} from '../E2eTestUtilities';

/**
 * Page element created before each test by the beforeEach function
 */
let page;
/**
 * tableElement fetched before each test by the beforeEach function
 */
let tableElement;
/**
 * Generated data used to populate the data table for these tests
 */
const testData = createData(12, 30);
/**
 * The custom fixed height of the table
 */
const tableCustomHeight = 300;
/**
 * The CSS var name which enforces the height of the working table area.
 */
const tableCustomHeightCSSVarName = '--dtt_table-wrapper-height';
/**
 * The style content to be injected into the page
 */
const tableCustomHeightStyle = `
kup-data-table {
  ${tableCustomHeightCSSVarName}: ${tableCustomHeight}px;
  width: 800px;
}
`;

function getPropDirectionFromCurrent(direction: string): string {
    return 'fixed' + direction.slice(0,1).toUpperCase() + direction.slice(1, direction.length);
}

it(`kup-data-table table area can be limited by using the CSS property ${tableCustomHeightCSSVarName}`, async () => {
    const page = await newE2EPage();
    await page.setContent(`<kup-data-table></kup-data-table>`);
    const tableElement = await page.find('kup-data-table');
    await tableElement.setProperty('data', testData);

    // Sets height correctly to force a scrollable table
    await page.addStyleTag({content: tableCustomHeightStyle});
    await page.waitForChanges();

    // Gets the element which height must be reduced and checks its height
    const tableArea = await getElementClientRect(page, 'kup-data-table >>> .below-wrapper');
    expect(tableArea.height).toEqual(tableCustomHeight);
});


describe.each([
    ['rows', 'top'],
    ['columns', 'left'],
])('kup-data-table with fixed %s', (currentDirection: string, startDirection: string) => {
    beforeEach(async () => {
        page = await newE2EPage();
        await page.setContent(`<kup-data-table></kup-data-table>`);
        tableElement = await page.find('kup-data-table');
        await tableElement.setProperty('data', testData);
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
    ])(`set to a value > 0 and < columns.number, sticky position the correct number (currently %i) of ${currentDirection} starting from the ${startDirection} of the table`, async (fixedCount: number) => {
        // Gets basic information
        const visibleColumnsCount = testData.columns.filter(col => col.visible === undefined || col.visible).length;
        const rowsCount = testData.rows.length;

        // Sets height correctly to force a scrollable table
        await page.addStyleTag({content: tableCustomHeightStyle});

        // Set the fixed direction elements
        const propDirection = getPropDirectionFromCurrent(currentDirection);
        await tableElement.setProperty(propDirection, fixedCount);
        await page.waitForChanges();
        const allTbodyCells = await page.findAll('kup-data-table >>> td');
        const allHeaderCells = await page.findAll('kup-data-table >>> th');
        const allCells = allTbodyCells.concat(allHeaderCells);

        // Checks that only the correct cells have the necessary fixed related classes
        // Controls both the thead and the tbody
        // For each row
        for (let rowIndex = 0; rowIndex < allCells.length / rowsCount; rowIndex++) {
            //For each column
            for (let colIndex = 0; colIndex < visibleColumnsCount; colIndex++) {
                // Gets the current cell
                const currentCell = allTbodyCells[rowIndex * visibleColumnsCount + colIndex];
                // Checks classes for the rows or for the columns.
                if ((currentDirection === 'rows' ? rowIndex : colIndex) < fixedCount) {
                    expect(currentCell).toHaveClass(FixedCellsClasses[currentDirection]);
                } else {
                    expect(currentCell).not.toHaveClass(FixedCellsClasses[currentDirection]);
                }
            }
        }

        // gets rect positions of all fixed cells inside the table and stores them
        // scrolls the table in the correct direction
        // gets the fixed cells again and controls if they have retained the same positions
        // controls that other cells have been scrolled

    });

    it(`and with grouping activated does not position sticky any ${currentDirection}`, async () => {
        const propDirection = getPropDirectionFromCurrent(currentDirection);
        const currentlyFixedCount = currentDirection === 'rows' ? 3 : 1;
        await tableElement.setProperty('groups', [{ column: testData.columns[0].name, visible: true }]);
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
