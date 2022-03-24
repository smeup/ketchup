import { newE2EPage } from '@stencil/core/testing';

import { groupingData, d8Data } from './mocked-data';

import {
    rowsSelector,
    headerCellsSelector,
    expanderSelector,
    rowExpanderSelector,
} from './data-table-selectors';

import { GroupLabelDisplayMode } from '../../../src/components/kup-data-table/kup-data-table-declarations';
import { unformattedStringToFormattedStringNumber } from '../../../src/utils/utils';
import { KupDom } from '../../../src/managers/kup-manager/kup-manager-declarations';
import { KupManager } from '../../../src/managers/kup-manager/kup-manager';

const sortIconSelector = 'kup-data-table >>> table thead .column-sort span';

//const collapseIcon = 'M19,13H5V11H19V13Z';
//const expandIcon = 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z';
const expandClass = 'collapsed';
const collapseClass = 'expanded';

const dom: KupDom = document.documentElement as KupDom;
if (!dom.ketchup) {
    dom.ketchup = new KupManager();
}

describe.skip('kup-data-table with single grouping', () => {
    it('visible group and expansion', async () => {
        const page = await newE2EPage();

        await page.setContent(
            '<kup-data-table global-filter></kup-data-table>'
        );
        const element = await page.find('kup-data-table');

        element.setProperty('groupLabelDisplay', GroupLabelDisplayMode.VALUE);
        element.setProperty('data', groupingData);
        element.setProperty('groups', [{ column: 'FLD1', visible: true }]);

        await page.waitForChanges();

        // test header (number of columns)
        const headerCells = await page.findAll(headerCellsSelector);
        expect(headerCells).toHaveLength(3);

        // test rows
        let rows = await page.findAll(rowsSelector);

        expect(rows).toHaveLength(3);

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];

            expect(row).toHaveClass('group');

            const cells = await row.findAll('td');

            expect(cells).toHaveLength(1);

            expect(cells[0]).toEqualAttribute('colspan', '3');

            const path = await cells[0].find(expanderSelector);

            expect(path).toHaveClass(expandClass);

            // testing group order
            switch (i) {
                case 1:
                    expect(cells[0]).toEqualText('DELGIO');
                    break;

                case 2:
                    expect(cells[0]).toEqualText('PARFRA');
                    break;

                default:
                    expect(cells[0]).toEqualText('CASFRA');
                    break;
            }
        }

        // expanding first group
        let icon = await page.find(rowExpanderSelector);

        await icon.click();

        await page.waitForChanges();

        rows = await page.findAll(rowsSelector);

        expect(rows).toHaveLength(7);

        // testing some rows...
        for (let i = 0; i <= 2; i++) {
            const row = rows[i];

            const cells = await row.findAll('td');

            if (i === 0) {
                // grouping
                expect(cells).toHaveLength(1);

                expect(cells[0]).toEqualAttribute('colspan', '3');

                const path = await cells[0].find(expanderSelector);

                expect(path).toHaveClass(collapseClass);
            } else {
                // normal row
                expect(cells).toHaveLength(3);
            }
        }

        // collapsing group
        icon = await page.find(rowExpanderSelector);

        await icon.click();

        await page.waitForChanges();

        rows = await page.findAll(rowsSelector);

        expect(rows).toHaveLength(3);

        rows.forEach((r) => expect(r).toHaveClass('group'));
    });

    it('hidden group and expansion', async () => {
        const page = await newE2EPage();

        await page.setContent(
            '<kup-data-table global-filter></kup-data-table>'
        );
        const element = await page.find('kup-data-table');

        element.setProperty('groupLabelDisplay', GroupLabelDisplayMode.VALUE);
        element.setProperty('data', groupingData);
        element.setProperty('groups', [{ column: 'FLD1', visible: false }]);

        await page.waitForChanges();

        // test header (number of columns)
        const headerCells = await page.findAll(headerCellsSelector);
        expect(headerCells).toHaveLength(2);

        let rows = await page.findAll(rowsSelector);

        expect(rows).toHaveLength(3);

        // all group rows
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];

            expect(row).toHaveClass('group');

            const cells = await row.findAll('td');

            expect(cells).toHaveLength(1);

            expect(cells[0]).toEqualAttribute('colspan', '2');

            const path = await cells[0].find(expanderSelector);

            expect(path).toHaveClass(expandClass);

            // testing group order
            switch (i) {
                case 1:
                    expect(cells[0]).toEqualText('DELGIO');
                    break;

                case 2:
                    expect(cells[0]).toEqualText('PARFRA');
                    break;

                default:
                    expect(cells[0]).toEqualText('CASFRA');
                    break;
            }
        }

        // expanding first group
        let icon = await page.find(rowExpanderSelector);

        await icon.click();

        await page.waitForChanges();

        rows = await page.findAll(rowsSelector);

        expect(rows).toHaveLength(7);

        // testing some rows...
        for (let i = 0; i <= 2; i++) {
            const row = rows[i];

            const cells = await row.findAll('td');

            if (i == 0) {
                // grouping
                expect(cells).toHaveLength(1);

                expect(cells[0]).toEqualAttribute('colspan', '2');

                const path = await cells[0].find(expanderSelector);

                expect(path).toHaveClass(collapseClass);
            } else {
                // normal row
                expect(cells).toHaveLength(2);
            }
        }
    });

    it('expand group and sort column', async () => {
        const page = await newE2EPage();

        await page.setContent(
            '<kup-data-table global-filter></kup-data-table>'
        );
        const element = await page.find('kup-data-table');

        element.setProperty('groupLabelDisplay', GroupLabelDisplayMode.VALUE);
        element.setProperty('data', groupingData);
        element.setProperty('groups', [{ column: 'FLD1', visible: false }]);

        await page.waitForChanges();

        // expanding first group
        let icon = await page.find(rowExpanderSelector);

        await icon.click();

        await page.waitForChanges();

        // testing sort icons
        const sortIcon = await page.find(sortIconSelector);

        await sortIcon.click();

        await page.waitForChanges();

        // testing rows
        const rows = await page.findAll(rowsSelector);

        expect(rows).toHaveLength(7);

        expect(rows[0]).toHaveClass('group');
        expect(rows[5]).toHaveClass('group');
        expect(rows[6]).toHaveClass('group');

        for (let i = 1; i < 5; i++) {
            const row = rows[i];

            const cells = await row.findAll('td');

            expect(cells).toHaveLength(2);

            switch (i) {
                case 1:
                    expect(cells[0]).toEqualText('Delphi');
                    break;
                case 2:
                    expect(cells[0]).toEqualText('Go');
                    break;
                case 3:
                    expect(cells[0]).toEqualText('Java');
                    break;
                default:
                    expect(cells[0]).toEqualText('Javascript');
                    break;
            }
        }
    });
});

describe('kup-data-table with multiple grouping', () => {
    it.skip('visible groups and expansion', async () => {
        const page = await newE2EPage();

        await page.setContent(
            '<kup-data-table global-filter></kup-data-table>'
        );
        const element = await page.find('kup-data-table');

        element.setProperty('groupLabelDisplay', GroupLabelDisplayMode.VALUE);
        element.setProperty('data', groupingData);
        element.setProperty('groups', [
            { column: 'FLD1', visible: true },
            { column: 'FLD2', visible: true },
        ]);

        await page.waitForChanges();

        // testing header
        const headerCells = await page.findAll(headerCellsSelector);
        expect(headerCells).toHaveLength(3);

        // testing rows
        let rows = await page.findAll(rowsSelector);
        expect(rows).toHaveLength(3);

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];

            expect(row).toHaveClasses(['group']);

            // testing cells
            const cells = await row.findAll('td');
            expect(cells).toHaveLength(1);
            expect(cells[0]).toEqualAttribute('colspan', '3');

            // testing group order
            switch (i) {
                case 1:
                    expect(cells[0]).toEqualText('DELGIO');
                    break;

                case 2:
                    expect(cells[0]).toEqualText('PARFRA');
                    break;

                default:
                    expect(cells[0]).toEqualText('CASFRA');
                    break;
            }
        }

        // expanding first group
        const expander = await page.find(rowExpanderSelector);
        await expander.click();
        await page.waitForChanges();

        // all group rows
        rows = await page.findAll(rowsSelector);
        expect(rows).toHaveLength(7);

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];

            expect(row).toHaveClasses(['group']);

            // testing cells
            const cells = await row.findAll('td');
            expect(cells).toHaveLength(1);
            expect(cells[0]).toEqualAttribute('colspan', '3');

            // testing group order
            switch (i) {
                case 1:
                    expect(cells[0]).toEqualText('Delphi');
                    break;

                case 2:
                    expect(cells[0]).toEqualText('Go');
                    break;

                case 3:
                    expect(cells[0]).toEqualText('Java');
                    break;

                case 4:
                    expect(cells[0]).toEqualText('Javascript');
                    break;

                case 5:
                    expect(cells[0]).toEqualText('DELGIO');
                    break;

                case 6:
                    expect(cells[0]).toEqualText('PARFRA');
                    break;

                default:
                    expect(cells[0]).toEqualText('CASFRA');
                    break;
            }
        }

        // expanding second level group
        const expanders = await page.findAll(rowExpanderSelector);
        expect(expanders).toHaveLength(7);
        await expanders[1].click();
        await page.waitForChanges();

        rows = await page.findAll(rowsSelector);
        expect(rows).toHaveLength(8);

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];

            if (i === 2) {
                expect(row).not.toHaveClasses(['group']);

                const cells = await row.findAll('td');
                expect(cells).toHaveLength(3);
            } else {
                expect(row).toHaveClasses(['group']);
            }
        }
    });
});

describe('kup-data-table with groups expanded', () => {
    it('single group and expansion', async () => {
        const page = await newE2EPage();

        await page.setContent(
            '<kup-data-table global-filter></kup-data-table>'
        );
        const element = await page.find('kup-data-table');

        element.setProperty('data', groupingData);
        element.setProperty('groups', [{ column: 'FLD1', visible: true }]);
        element.setProperty('expandGroups', true);
        element.setProperty('rowsPerPage', '50');

        await page.waitForChanges();

        const rows = await page.findAll(rowsSelector);

        expect(rows).toHaveLength(15);

        rows.forEach((row, index) => {
            if (index === 0 || index === 5 || index === 10) {
                expect(row).toHaveClass('group');
            } else {
                expect(row).not.toHaveClass('group');
            }
        });
    });

    it('multi group and expansion', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-data-table></kup-data-table>');
        const element = await page.find('kup-data-table');

        element.setProperty('data', groupingData);
        element.setProperty('groups', [
            { column: 'FLD1', visible: true },
            { column: 'FLD2', visible: true },
        ]);
        element.setProperty('expandGroups', true);
        element.setProperty('rowsPerPage', '50');

        await page.waitForChanges();

        const rows = await page.findAll(rowsSelector);

        expect(rows).toHaveLength(27);

        const groupRows = rows.filter((row) => row.classList.contains('group'));

        expect(groupRows).toHaveLength(15);
    });
});

describe('grouping on complex objects', () => {
    it('group on date', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-data-table></kup-data-table>');
        const element = await page.find('kup-data-table');

        element.setProperty('groupLabelDisplay', GroupLabelDisplayMode.VALUE);
        element.setProperty('data', d8Data);
        element.setProperty('groups', [{ column: 'FLD2', visible: true }]);

        await page.waitForChanges();

        const rows = await page.findAll(rowsSelector);

        expect(rows).toHaveLength(3);

        let cellValue1: string;
        let cellValue2: string;
        let htmlCellValue: string;
        // workaround problem in formatting dates with the same locale browser/IT
        // locale it-IT
        cellValue1 = '01/03/2018';
        // locale en-US
        cellValue2 = '03/01/2018';
        htmlCellValue = rows[0].textContent;
        //expect(rows[0]).toEqualText(cellValue);
        expect(
            htmlCellValue == cellValue1 || htmlCellValue == cellValue2
        ).toBeTruthy();
        // locale it-IT
        cellValue1 = '01/06/2018';
        // locale en-US
        cellValue2 = '06/01/2018';
        htmlCellValue = rows[1].textContent;

        //expect(rows[1]).toEqualText(cellValue);
        expect(
            htmlCellValue == cellValue1 || htmlCellValue == cellValue2
        ).toBeTruthy();
        // locale it-IT
        cellValue1 = '01/12/2018';
        // locale en-US
        cellValue2 = '12/01/2018';
        htmlCellValue = rows[2].textContent;

        //expect(rows[2]).toEqualText(cellValue);
        expect(
            htmlCellValue == cellValue1 || htmlCellValue == cellValue2
        ).toBeTruthy();
    });

    it('group on number', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-data-table></kup-data-table>');
        const element = await page.find('kup-data-table');

        element.setProperty('groupLabelDisplay', GroupLabelDisplayMode.VALUE);
        element.setProperty('data', groupingData);
        element.setProperty('groups', [{ column: 'FLD3', visible: true }]);

        await page.waitForChanges();

        const rows = await page.findAll(rowsSelector);

        expect(rows).toHaveLength(3);

        let cellValue: string;
        cellValue = unformattedStringToFormattedStringNumber('67.80', 2, '');
        //expect(rows[0]).toEqualText(cellValue);
        expect(
            rows[0].textContent == cellValue.replace(RegExp(/\./g), ',') ||
                rows[0].textContent == cellValue.replace(RegExp(/,/g), '.')
        ).toBeTruthy();

        cellValue = unformattedStringToFormattedStringNumber('100.60', 2, '');
        //expect(rows[1]).toEqualText(cellValue);
        expect(
            rows[1].textContent == cellValue.replace(RegExp(/\./g), ',') ||
                rows[1].textContent == cellValue.replace(RegExp(/,/g), '.')
        ).toBeTruthy();
        cellValue = unformattedStringToFormattedStringNumber('120.06', 2, '');
        //expect(rows[2]).toEqualText(cellValue);
        expect(
            rows[2].textContent == cellValue.replace(RegExp(/\./g), ',') ||
                rows[2].textContent == cellValue.replace(RegExp(/,/g), '.')
        ).toBeTruthy();
    });
});
