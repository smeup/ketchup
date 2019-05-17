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
        ],
    },
};

const multiSortMockData = { ...mockData };
multiSortMockData.data = { ...multiSortMockData.data };
multiSortMockData.data.rows = [
    ...multiSortMockData.data.rows,
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
                    k: '11',
                },
                value: '11',
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
                    k: '7',
                },
                value: '7',
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
                    k: '6',
                },
                value: '6',
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
                    k: '12',
                },
                value: '12',
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
                    k: '8',
                },
                value: '8',
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
                    k: '7',
                },
                value: '7',
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
];

const globalFilterSelector = 'kup-data-table >>> .globalFilter';
// const globalFilterInputSelector = globalFilterSelector + ' kup-text-input >>> input';
const sortIconSelector = 'kup-data-table >>> table thead .column-sort icon';
const cellSelector = 'kup-data-table >>> table tbody > tr > td';

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

        const headerCells = await headerRows[0].findAll('th');
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
        element.setProperty('data', mockData);

        await page.waitForChanges();

        // testing header
        const headerRows = await page.findAll(
            'kup-data-table >>> table thead > tr'
        );
        expect(headerRows).toHaveLength(1);

        const headerCells = await headerRows[0].findAll('th');
        expect(headerCells).toHaveLength(3);
        expect(headerCells[0]).toEqualText('Column A');
        expect(headerCells[1]).toEqualText('Column B');
        expect(headerCells[2]).toEqualText('Column C');

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

    it('renders with filters', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-data-table></kup-data-table>');

        const element = await page.find('kup-data-table');
        element.setProperty('data', mockData);
        element.setProperty('config', {
            showFilter: true,
        });

        await page.waitForChanges();

        const headerInputs = await page.findAll(
            'kup-data-table >>> table thead kup-text-input >>> input'
        );
        expect(headerInputs).toHaveLength(3);

        // testing event
        // const ketchupTextInputUpdated = await page.spyOnEvent(
        //     'ketchupTextInputUpdated'
        // );

        // // fuck you
        // await headerInputs[0].type('cas');
        // // await headerInputs[0].press('c');
        // // await headerInputs[0].press('a');
        // // await headerInputs[0].press('s');

        // await page.waitForChanges();

        // expect(ketchupTextInputUpdated).toHaveBeenCalled();

        // // should have one row
        // const bodyRows = await page.findAll(
        //     'kup-data-table >>> table tbody > tr'
        // );
        // expect(bodyRows).toHaveLength(1);
    });

    it('renders global filter', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-data-table></kup-data-table>');

        // const ketchupTextInputUpdated = await page.spyOnEvent(
        //     'ketchupTextInputUpdated'
        // );

        const element = await page.find('kup-data-table');
        element.setProperty('data', mockData);
        element.setProperty('config', {
            globalFilter: true,
        });

        await page.waitForChanges();

        const globalFilter = await page.findAll(globalFilterSelector);
        expect(globalFilter).toHaveLength(1);

        // const globalFilterInput = await page.find(globalFilterInputSelector);

        // await globalFilterInput.press('f');

        // await page.waitForChanges();

        // expect(ketchupTextInputUpdated).toHaveBeenCalled();
    });

    it('sorts rows', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-data-table></kup-data-table>');

        const element = await page.find('kup-data-table');
        element.setProperty('data', mockData);

        await page.waitForChanges();

        // getting all sort icons
        const sortIcons = await page.findAll(sortIconSelector);
        expect(sortIcons).toHaveLength(3);

        let cells = await page.findAll(cellSelector);
        expect(cells).toHaveLength(9);

        expect(cells[0]).toEqualText('CASFRA');
        expect(cells[3]).toEqualText('PARFRA');
        expect(cells[6]).toEqualText('DELGIO');

        await sortIcons[0].click();

        await page.waitForChanges();

        cells = await page.findAll(cellSelector);
        expect(cells).toHaveLength(9);

        expect(cells[0]).toEqualText('CASFRA');
        expect(cells[3]).toEqualText('DELGIO');
        expect(cells[6]).toEqualText('PARFRA');

        await sortIcons[0].click();

        await page.waitForChanges();

        cells = await page.findAll(cellSelector);
        expect(cells).toHaveLength(9);

        expect(cells[0]).toEqualText('PARFRA');
        expect(cells[3]).toEqualText('DELGIO');
        expect(cells[6]).toEqualText('CASFRA');
    });

    it('multi sorts rows', async () => {
        const page = await newE2EPage();

        await page.setContent('<kup-data-table></kup-data-table>');

        const element = await page.find('kup-data-table');
        element.setProperty('data', multiSortMockData);

        await page.waitForChanges();

        // getting all sort icons
        const sortIcons = await page.findAll(sortIconSelector);
        expect(sortIcons).toHaveLength(3);

        let cells = await page.findAll(cellSelector);
        expect(cells).toHaveLength(27);

        expect(cells[0]).toEqualText('CASFRA');
        expect(cells[3]).toEqualText('PARFRA');
        expect(cells[6]).toEqualText('DELGIO');

        await sortIcons[0].click();

        await page.waitForChanges();

        cells = await page.findAll(cellSelector);
        expect(cells).toHaveLength(27);

        expect(cells[0]).toEqualText('CASFRA');
        expect(cells[3]).toEqualText('CASFRA');
        expect(cells[6]).toEqualText('CASFRA');

        expect(cells[1]).toEqualText('10');
        expect(cells[4]).toEqualText('11');
        expect(cells[7]).toEqualText('12');

        // Ctrl+click on second column
        await page.keyboard.down('Control');
        await sortIcons[1].click();
        await page.keyboard.up('Control');

        await page.waitForChanges();

        cells = await page.findAll(cellSelector);
        expect(cells).toHaveLength(27);

        expect(cells[0]).toEqualText('CASFRA');
        expect(cells[3]).toEqualText('CASFRA');
        expect(cells[6]).toEqualText('CASFRA');

        expect(cells[1]).toEqualText('10');
        expect(cells[4]).toEqualText('11');
        expect(cells[7]).toEqualText('12');

        // Ctrl+click on second column
        await page.keyboard.down('Control');
        await sortIcons[1].click();
        await page.keyboard.up('Control');

        await page.waitForChanges();

        cells = await page.findAll(cellSelector);
        expect(cells).toHaveLength(27);

        expect(cells[0]).toEqualText('CASFRA');
        expect(cells[3]).toEqualText('CASFRA');
        expect(cells[6]).toEqualText('CASFRA');

        expect(cells[1]).toEqualText('12');
        expect(cells[4]).toEqualText('11');
        expect(cells[7]).toEqualText('10');
    });
});
