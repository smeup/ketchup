import { newE2EPage } from '@stencil/core/testing';

const mockData = {
    data: {
        columns: [
            {
                name: 'FLD1',
                title: 'Column A',
                size: '',
            },
            {
                name: 'FLD2',
                title: 'Column B',
                size: 10,
            },
            {
                name: 'FLD3',
                title: 'Column C',
                size: 10,
            },
        ],
        rows: [
            {
                cells: {
                    FLD1: {
                        obj: {
                            t: 'CN',
                            p: 'COL',
                            k: 'CASFRA',
                        },
                        value: 'CASFRA',
                    },
                    FLD2: {
                        obj: {
                            t: 'NR',
                            p: '',
                            k: '10',
                        },
                        value: '10',
                    },
                    FLD3: {
                        obj: {
                            t: 'NR',
                            p: '',
                            k: '100.60',
                        },
                        value: '100.60',
                    },
                },
            },
            {
                cells: {
                    FLD1: {
                        obj: {
                            t: 'CN',
                            p: 'COL',
                            k: 'DELGIO',
                        },
                        value: 'DELGIO',
                    },
                    FLD2: {
                        obj: {
                            t: 'NR',
                            p: '',
                            k: '6',
                        },
                        value: '6',
                    },
                    FLD3: {
                        obj: {
                            t: 'NR',
                            p: '',
                            k: '67.8',
                        },
                        value: '67.8',
                    },
                },
            },
            {
                cells: {
                    FLD1: {
                        obj: {
                            t: 'CN',
                            p: 'COL',
                            k: 'PARFRA',
                        },
                        value: 'PARFRA',
                    },
                    FLD2: {
                        obj: {
                            t: 'NR',
                            p: '',
                            k: '5',
                        },
                        value: '5',
                    },
                    FLD3: {
                        obj: {
                            t: 'NR',
                            p: '',
                            k: '120.06',
                        },
                        value: '120.06',
                    },
                },
            },
        ],
    },
};

describe('ketchup-data-table', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<ketchup-data-table></ketchup-data-table>');
        const element = await page.find('ketchup-data-table');
        expect(element).toHaveClass('hydrated');
    });

    it('renders without data', async () => {
        const page = await newE2EPage();

        await page.setContent('<ketchup-data-table></ketchup-data-table>');

        // testing header
        const headerRows = await page.findAll(
            'ketchup-data-table >>> table thead > tr'
        );
        expect(headerRows).toHaveLength(1);

        const headerCells = await headerRows[0].findAll('th');
        expect(headerCells).toHaveLength(1);
        expect(headerCells[0]).toEqualText('');

        // testing body
        const bodyRows = await page.findAll(
            'ketchup-data-table >>> table tbody > tr'
        );
        expect(bodyRows).toHaveLength(1);

        const bodyCells = await bodyRows[0].findAll('td');
        expect(bodyCells).toHaveLength(1);
        expect(bodyCells[0]).toEqualAttribute('colSpan', 1);
        expect(bodyCells[0]).toEqualText('Empty data');
    });

    it('renders with data', async () => {
        const page = await newE2EPage();

        await page.setContent('<ketchup-data-table></ketchup-data-table>');

        const element = await page.find('ketchup-data-table');
        element.setProperty('data', mockData);

        await page.waitForChanges();

        // testing header
        const headerRows = await page.findAll(
            'ketchup-data-table >>> table thead > tr'
        );
        expect(headerRows).toHaveLength(1);

        const headerCells = await headerRows[0].findAll('th');
        expect(headerCells).toHaveLength(3);
        expect(headerCells[0]).toEqualText('Column A');
        expect(headerCells[1]).toEqualText('Column B');
        expect(headerCells[2]).toEqualText('Column C');

        // testing body
        const bodyRows = await page.findAll(
            'ketchup-data-table >>> table tbody > tr'
        );
        expect(bodyRows).toHaveLength(3);

        // testing first row
        const firstRowCells = await bodyRows[0].findAll('td');
        expect(firstRowCells).toHaveLength(3);
        expect(firstRowCells[0]).toEqualText('CASFRA');
        expect(firstRowCells[1]).toEqualText('10');
        expect(firstRowCells[2]).toEqualText('100.60');
    });
});
