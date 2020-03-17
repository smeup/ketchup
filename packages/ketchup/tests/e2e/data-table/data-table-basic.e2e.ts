import { newE2EPage } from '@stencil/core/testing';

import {
    staticData,
    hiddenColumns,
    cellStyleDataTable,
    DataWithHeaderLineBreaksFactory,
    ColumnsWithLineBreaksGenerator,
} from './mocked-data';
import { cellsSelector } from './data-table-selectors';

const globalFilterSelector = 'kup-data-table >>> .globalFilter';
const sortIconSelector = 'kup-data-table >>> table thead .column-sort span';

describe('kup-data-table', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-data-table></kup-data-table>');
        const element = await page.find('kup-data-table');
        expect(element).toHaveClass('hydrated');
    });

    it('renders without data', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-data-table></kup-data-table>');

        // testing header
        const headerRows = await page.findAll(
            'kup-data-table >>> table thead > tr'
        );
        expect(headerRows).toHaveLength(1);

        const headerCells = await headerRows[0].findAll('th .column-title');
        expect(headerCells).toHaveLength(1);
        expect(headerCells[0]).toEqualText('');

        // testing body
        const bodyRows = await page.findAll(
            'kup-data-table >>> table tbody > tr'
        );
        expect(bodyRows).toHaveLength(1);

        const bodyCells = await bodyRows[0].findAll('td');
        expect(bodyCells).toHaveLength(1);
        expect(bodyCells[0]).toEqualAttribute('colSpan', 1);
        expect(bodyCells[0]).toEqualText('Empty data');

        // no config
        // -> no filters
        const inputs = await headerCells[0].findAll('input');
        expect(inputs).toHaveLength(0);

        // -> no global filter
        const globalFilter = await page.findAll(globalFilterSelector);
        expect(globalFilter).toHaveLength(0);

        // -> yes sort
        const sorts = await page.findAll(sortIconSelector);
        expect(sorts).toHaveLength(1);
    });

    it('renders with data', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-data-table></kup-data-table>');

        const element = await page.find('kup-data-table');
        element.setProperty('data', staticData);

        await page.waitForChanges();

        // testing header
        const headerRows = await page.findAll(
            'kup-data-table >>> table thead > tr'
        );
        expect(headerRows).toHaveLength(1);

        const headerCells = await headerRows[0].findAll('th .column-title');
        expect(headerCells).toHaveLength(staticData.columns.length);
        for (let i = 0; i < headerCells.length; i++) {
            expect(headerCells[i]).toEqualText(staticData.columns[i].title);
        }

        // testing body
        const bodyRows = await page.findAll(
            'kup-data-table >>> table tbody > tr'
        );
        expect(bodyRows).toHaveLength(3);

        // testing first row
        const firstRowCells = await bodyRows[0].findAll('td');
        expect(firstRowCells).toHaveLength(3);
        expect(firstRowCells[0]).toEqualText('CASFRA');
        expect(firstRowCells[1]).toEqualText('10');
        expect(firstRowCells[2]).toEqualText('100.60');
    });

    it('hidden columns', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-data-table></kup-data-table>');

        const element = await page.find('kup-data-table');
        element.setProperty('data', hiddenColumns);

        await page.waitForChanges();

        // testing header
        const headerRows = await page.findAll(
            'kup-data-table >>> table thead > tr'
        );
        expect(headerRows).toHaveLength(1);

        const headerCells = await headerRows[0].findAll('th .column-title');
        expect(headerCells).toHaveLength(1);
        expect(headerCells[0]).toEqualText(hiddenColumns.columns[1].title);

        // testing body
        const bodyRows = await page.findAll(
            'kup-data-table >>> table tbody > tr'
        );
        expect(bodyRows).toHaveLength(3);

        // testing first row
        const firstRowCells = await bodyRows[0].findAll('td');
        expect(firstRowCells).toHaveLength(1);
        expect(firstRowCells[0]).toEqualText('10');
    });

    it('cell has right click button', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-data-table></kup-data-table>');

        const element = await page.find('kup-data-table');
        element.setProperty('data', staticData);

        await page.waitForChanges();

        // testing body
        const bodyRows = await page.findAll(
            'kup-data-table >>> table tbody > tr'
        );
        expect(bodyRows).toHaveLength(3);

        // testing first row
        const firstRowCells = await bodyRows[0].findAll('td');
        expect(firstRowCells).toHaveLength(3);

        for (let i = 0; i < firstRowCells.length; i++) {
            const cell = firstRowCells[i];

            //    const rightClick = await cell.findAll('.options');

            //    if (i === 0) {
            //        expect(rightClick).toHaveLength(1);
            //    } else {
            //        expect(rightClick).toHaveLength(0);
            //    }
        }
    });

    it('cell has style', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-data-table></kup-data-table>');

        const element = await page.find('kup-data-table');
        element.setProperty('data', cellStyleDataTable);

        await page.waitForChanges();

        const cells = await page.findAll(cellsSelector);

        expect(cells).toHaveLength(4);

        // testing first cell
        let cellStyle = await cells[0].getComputedStyle();

        expect(cellStyle.color).toBe('rgb(255, 255, 255)');

        expect(cellStyle.backgroundColor).toBe('rgb(0, 0, 255)');

        // testing second cell
        cellStyle = await cells[1].getComputedStyle();

        expect(cellStyle.textAlign).toBe('center');

        expect(cellStyle.fontWeight).toBe('700');

        // testing third cell
        cellStyle = await cells[2].getComputedStyle();

        expect(cellStyle.borderRadius).not.toBe('50px');
        expect(cellStyle.padding).not.toBe('3px');

        const cellContent = await cells[2].find('.cell-content');

        const contentStyle = await cellContent.getComputedStyle();

        expect(contentStyle.borderRadius).toBe('50px');
        expect(contentStyle.padding).toBe('3px');
    });

    describe.each([
        ['the default separator', '|'],
        ['a custom line separator', '-'],
    ])('can insert line breaks by using %s inside', function(
        description,
        separator
    ) {
        let dataWithLineBreaksHeader,
            columnsWithLineBreaks: ColumnsWithLineBreaksGenerator[];
        let page, tableElement;

        beforeAll(() => {
            columnsWithLineBreaks = [
                {
                    colIndex: 1,
                    breaksCount: 3,
                },
                {
                    colIndex: 3,
                    breaksCount: 2,
                },
            ];

            dataWithLineBreaksHeader = DataWithHeaderLineBreaksFactory(
                {
                    colSize: 7,
                    rowSize: 10,
                },
                columnsWithLineBreaks,
                separator
            );
        });

        beforeEach(async () => {
            page = await newE2EPage();
            await page.setContent('<kup-data-table></kup-data-table>');
            tableElement = await page.find('kup-data-table');
            await tableElement.setProperty('data', dataWithLineBreaksHeader);
            await tableElement.setProperty('lineBreakCharacter', separator);
            await page.waitForChanges();
        });

        it.each([
            ['thead', 'thead > tr > th'],
            ['sticky', 'thead-sticky > tr-sticky > th-sticky'],
        ])('the %s header', async (label, selector) => {
            for (let i = 0; i < columnsWithLineBreaks.length; i++) {
                const tableHeaderCellTitle = await page.find(
                    `kup-data-table >>> ${selector}:nth-of-type(${columnsWithLineBreaks[
                        i
                    ].colIndex + 1}) .column-title`
                );
                let textNodes = 0;
                let breakNodes = 0;

                // console.log(tableHeaderCellTitle);
                for (let node of tableHeaderCellTitle.childNodes) {
                    // For node types
                    // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
                    if (node.nodeType === 3) {
                        // Text node
                        textNodes++;
                    } else if (node.nodeType === 1 && node.tagName === 'BR') {
                        breakNodes++;
                    }
                }

                expect(breakNodes).toEqual(
                    columnsWithLineBreaks[i].breaksCount
                );
                expect(textNodes).toEqual(
                    columnsWithLineBreaks[i].breaksCount + 1
                );
            }
        });
    });
});
