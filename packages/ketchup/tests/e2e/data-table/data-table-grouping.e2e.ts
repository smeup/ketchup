import { newE2EPage } from '@stencil/core/testing';

import { groupingData } from './mocked-data';

const headerCellsSelector = 'kup-data-table >>> table > thead > tr > th';
const rowSelector = 'kup-data-table >>> table > tbody > tr';
const rowExpanderSelector =
    'kup-data-table >>> table > tbody > tr.group .row-expander';
const sortIconSelector = 'kup-data-table >>> table thead .column-sort icon';

describe('kup-data-table with single grouping', () => {
    it('visible group and expansion', async () => {
        const page = await newE2EPage();

        await page.setContent(
            '<kup-data-table global-filter></kup-data-table>'
        );
        const element = await page.find('kup-data-table');

        element.setProperty('data', groupingData);
        element.setProperty('groups', [{ column: 'FLD1', visible: true }]);

        await page.waitForChanges();

        // TODO test header (number of columns)

        let rows = await page.findAll(rowSelector);

        expect(rows).toHaveLength(3);

        // all group rows
        Promise.all(
            rows.map(async (row) => {
                expect(row).toHaveClass('group');

                const cells = await row.findAll('td');

                expect(cells).toHaveLength(1);

                expect(cells[0]).toEqualAttribute('colspan', '3');

                const expandIcon = await cells[0].find('icon.mdi');

                expect(expandIcon).toHaveClasses(['mdi', 'mdi-chevron-down']);
            })
        );

        // expanding first group
        let icon = await page.find(rowExpanderSelector);

        await icon.click();

        await page.waitForChanges();

        rows = await page.findAll(rowSelector);

        expect(rows).toHaveLength(7);

        // testing some rows...
        for (let i = 0; i <= 2; i++) {
            const row = rows[i];

            const cells = await row.findAll('td');

            if (i == 0) {
                // grouping
                expect(cells).toHaveLength(1);

                expect(cells[0]).toEqualAttribute('colspan', '3');

                const expandIcon = await cells[0].find('icon.mdi');

                expect(expandIcon).toHaveClasses(['mdi', 'mdi-chevron-right']);
            } else {
                // normal row
                expect(cells).toHaveLength(3);
            }
        }

        // collapsing group
        icon = await page.find(rowExpanderSelector);

        await icon.click();

        await page.waitForChanges();

        rows = await page.findAll(rowSelector);

        expect(rows).toHaveLength(3);

        rows.forEach((r) => expect(r).toHaveClass('group'));
    });

    it('hidden group and expansion', async () => {
        const page = await newE2EPage();

        await page.setContent(
            '<kup-data-table global-filter></kup-data-table>'
        );
        const element = await page.find('kup-data-table');

        element.setProperty('data', groupingData);
        element.setProperty('groups', [{ column: 'FLD1', visible: false }]);

        await page.waitForChanges();

        let rows = await page.findAll(rowSelector);

        expect(rows).toHaveLength(3);

        // all group rows
        Promise.all(
            rows.map(async (row) => {
                expect(row).toHaveClass('group');

                const cells = await row.findAll('td');

                expect(cells).toHaveLength(1);

                expect(cells[0]).toEqualAttribute('colspan', '2');

                const expandIcon = await cells[0].find('icon.mdi');

                expect(expandIcon).toHaveClasses(['mdi', 'mdi-chevron-down']);
            })
        );

        // expanding first group
        let icon = await page.find(rowExpanderSelector);

        await icon.click();

        await page.waitForChanges();

        rows = await page.findAll(rowSelector);

        expect(rows).toHaveLength(7);

        // testing some rows...
        for (let i = 0; i <= 2; i++) {
            const row = rows[i];

            const cells = await row.findAll('td');

            if (i == 0) {
                // grouping
                expect(cells).toHaveLength(1);

                expect(cells[0]).toEqualAttribute('colspan', '2');

                const expandIcon = await cells[0].find('icon.mdi');

                expect(expandIcon).toHaveClasses(['mdi', 'mdi-chevron-right']);
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
        const rows = await page.findAll(rowSelector);

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
    it('visible groups and expansion', async () => {
        const page = await newE2EPage();

        await page.setContent(
            '<kup-data-table global-filter></kup-data-table>'
        );
        const element = await page.find('kup-data-table');

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
        let rows = await page.findAll(rowSelector);
        expect(rows).toHaveLength(3);
        Promise.all(
            rows.map(async (row) => {
                expect(row).toHaveClasses(['group']);

                // testing cells
                const cells = await row.findAll('td');
                expect(cells).toHaveLength(1);
                expect(cells[0]).toEqualAttribute('colspan', '3');
            })
        );

        // expanding first group
        const expander = await page.find(rowExpanderSelector);
        await expander.click();
        await page.waitForChanges();

        // all group rows
        rows = await page.findAll(rowSelector);
        expect(rows).toHaveLength(7);

        Promise.all(
            rows.map(async (row) => {
                expect(row).toHaveClasses(['group']);

                // testing cells
                const cells = await row.findAll('td');
                expect(cells).toHaveLength(1);
                expect(cells[0]).toEqualAttribute('colspan', '3');
            })
        );

        // expanding second level group
        const expanders = await page.findAll(rowExpanderSelector);
        expect(expanders).toHaveLength(7);
        await expanders[1].click();
        await page.waitForChanges();

        rows = await page.findAll(rowSelector);
        expect(rows).toHaveLength(8);

        Promise.all(
            rows.map(async (row, index) => {
                if (index === 2) {
                    expect(row).not.toHaveClasses(['group']);

                    const cells = await row.findAll('td');
                    expect(cells).toHaveLength(3);
                } else {
                    expect(row).toHaveClasses(['group']);
                }
            })
        );
    });
});
