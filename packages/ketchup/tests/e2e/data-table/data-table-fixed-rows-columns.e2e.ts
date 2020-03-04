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
 * The number of rows generated for the data used in these tests
 */
const testDataRows = 10;
/**
 * tableElement fetched before each test by the beforeEach function
 */
let tableElement;
/**
 * Generated data used to populate the data table for these tests
 * TODO move row size to a variable
 */
const testData = createData(12, testDataRows);
/**
 * The custom fixed height of the table
 */
const tableCustomHeight = 200;
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
        await tableElement.setProperty('rowsPerPage', testDataRows);
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

        // Sets height and width correctly to force a scrollable table
        await page.addStyleTag({content: tableCustomHeightStyle});

        // Set the fixed direction elements
        const propDirection = getPropDirectionFromCurrent(currentDirection);
        await tableElement.setProperty(propDirection, fixedCount);
        // Sets height correctly to force a scrollable table
        await page.addStyleTag({content: tableCustomHeightStyle});
        await page.waitForChanges();
        const allTbodyCells = await page.findAll('kup-data-table >>> td');
        const allHeaderCells = await page.findAll('kup-data-table >>> th');
        const allCells = allTbodyCells.concat(allHeaderCells);

        // Cells to check the position
        const cellsToCheck: Array<{col: number, row: number}> = [];

        // Checks that only the correct cells have the necessary fixed related classes
        // Controls both the thead and the tbody
        // For each row + the head
        for (let rowIndex = 0; rowIndex < testDataRows + 1; rowIndex++) {
            //For each column
            for (let colIndex = 0; colIndex < visibleColumnsCount; colIndex++) {
                // Gets the current cell
                const currentCell = allCells[rowIndex * visibleColumnsCount + colIndex];
                // Checks classes for the rows or for the columns.
                if ((currentDirection === 'rows' ? rowIndex : colIndex) < fixedCount) {
                    expect(currentCell).toHaveClass(FixedCellsClasses[currentDirection]);

                    // Stores the fact that this cell needs to be checked later
                    // avoid thead
                    if (rowIndex < testDataRows) {
                        cellsToCheck.push({
                            col: colIndex,
                            row: rowIndex
                        });
                    }
                } else {
                    expect(currentCell).not.toHaveClass(FixedCellsClasses[currentDirection]);
                }
            }
        }

        // Gets rect positions of all fixed cells inside the table and stores them
        // Control on these cells will happen later
        const initialClientRect: ClientRect[] = [];
        for (let i = 0; i < cellsToCheck.length; i++) {
            initialClientRect.push(
                await getElementClientRect(page, `kup-data-table >>> tbody > tr:nth-of-type(${cellsToCheck[i].row + 1}) > td:nth-of-type(${cellsToCheck[i].col + 1})`)
            );
        }

        // Gets the client rect of the last cell of the table
        // It will be used to be sure that non fixed cells have been scrolled
        const lastCellSelector = 'kup-data-table >>> ' + 'tbody > tr:last-of-type > td:last-of-type';
        const lastCellClientRectBefore = await getElementClientRect(page, lastCellSelector);

        // scrolls the table in the correct direction
        await page.evaluate((direction) => {
            document.querySelector('kup-data-table').shadowRoot
                .querySelector(
                    // Checks in which direction we must scroll
                    direction === 'rows' ?
                        'tbody > tr:last-of-type > td:first-of-type' : // fixed rows -> we use the first cell of the last row
                        'thead th:last-of-type' // fixed-columns -> we use last thead cell
                ).scrollIntoView();
        }, currentDirection);
        await page.waitForChanges();

        // gets the fixed cells again and controls if they have retained the same positions
        let currentCellClientRect: ClientRect;
        for (let i = 0; i < cellsToCheck.length; i++) {
            currentCellClientRect = await getElementClientRect(
                page,
                `kup-data-table >>> tbody > tr:nth-of-type(${cellsToCheck[i].row + 1}) > td:nth-of-type(${cellsToCheck[i].col + 1})`
            );
            expect(currentCellClientRect[startDirection]).toEqual(initialClientRect[i][startDirection])
        }

        // controls that other cells have been scrolled
        const lastCellClientRectAfter = await getElementClientRect(page, lastCellSelector);
        expect(lastCellClientRectAfter[startDirection]).toBeLessThan(lastCellClientRectBefore[startDirection]);
    }, 30000);

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
