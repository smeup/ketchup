import { filterRows } from '../../../src/components/kup-data-table/kup-data-table-helper';
import { KupManager } from '../../../src/managers/kup-manager/kup-manager';
import { KupDom } from '../../../src/managers/kup-manager/kup-manager-declarations';
import { MockedRowsFactory } from './mocked-data';

const mockedRows = MockedRowsFactory();
const mockedRowsWithEmptyValues = MockedRowsFactory();
mockedRowsWithEmptyValues.rows[0].cells.FLD1.value = '';
mockedRowsWithEmptyValues.rows[2].cells.FLD1.value = '';
const displayedColumns = mockedRows.columns;
type FilterCompareFunction = (cellValue: string, filterText: string) => boolean;
const dom: KupDom = document.documentElement as KupDom;
if (!dom.ketchup) {
    dom.ketchup = new KupManager();
}

describe('kup-data-table filters rows', () => {
    it('filter without parameters', () => {
        const filtered = filterRows();
        expect(filtered).toEqual([]);
    });

    it('filter null rows', () => {
        const filtered = filterRows(null);
        expect(filtered).toEqual([]);
    });

    it('if no / null / empty filter, return rows as they are', () => {
        let filtered = filterRows(mockedRows.rows);
        expect(filtered).toEqual(mockedRows.rows);

        filtered = filterRows(mockedRows.rows, null);
        expect(filtered).toEqual(mockedRows.rows);

        filtered = filterRows(mockedRows.rows, {});
        expect(filtered).toEqual(mockedRows.rows);
    });

    it('returns empty array if no row matches', () => {
        const filtered = filterRows(
            mockedRows.rows,
            {
                FLD1: {
                    textField: 'clearly fake filter',
                    checkBoxes: [],
                    interval: ['', ''],
                },
            },
            '',
            displayedColumns
        );

        expect(filtered).not.toEqual(mockedRows.rows);
        expect(filtered).toHaveLength(0);
    });

    it('filter on FLD1', () => {
        const filtered = filterRows(
            mockedRows.rows,
            {
                FLD1: { textField: 'fra', checkBoxes: [], interval: ['', ''] },
            },
            '',
            displayedColumns
        );

        expect(filtered).not.toEqual(mockedRows.rows);
        expect(filtered).toHaveLength(5);
    });

    it('filter on FLD1 and FLD2', () => {
        const filtered = filterRows(
            mockedRows.rows,
            {
                FLD1: { textField: 'fra', checkBoxes: [], interval: ['', ''] },
                FLD2: { textField: '', checkBoxes: [], interval: ['12', '12'] },
            },
            '',
            displayedColumns
        );

        expect(filtered).not.toEqual(mockedRows.rows);
        expect(filtered).toHaveLength(1);
    });

    it('global filter without columns', () => {
        let filtered = filterRows(mockedRows.rows, null, 'fra');
        expect(filtered).toEqual(mockedRows.rows);

        filtered = filterRows(mockedRows.rows, null, 'fra', null);
        expect(filtered).toEqual(mockedRows.rows);

        filtered = filterRows(mockedRows.rows, null, 'fra', []);
        expect(filtered).toEqual(mockedRows.rows);
    });

    it('global filter with columns', () => {
        const filtered = filterRows(
            mockedRows.rows,
            null,
            'fra',
            displayedColumns
        );

        expect(filtered).not.toEqual(mockedRows.rows);
        expect(filtered).toHaveLength(5);
    });

    it('global filter + column filter', () => {
        const filtered = filterRows(
            mockedRows.rows,
            {
                FLD1: { textField: 'cas', checkBoxes: [], interval: ['', ''] },
                FLD2: { textField: '', checkBoxes: [], interval: ['12', '12'] },
            },
            'fra',
            displayedColumns
        );

        expect(filtered).not.toEqual(mockedRows.rows);
        expect(filtered).toHaveLength(1);
    });

    //-------- Filter rows with expressions --------
    describe(`with expression set to ''`, () => {
        const columnToFilterOn = 'FLD1';

        it('on column filter', () => {
            const filtered = filterRows(
                mockedRowsWithEmptyValues.rows,
                {
                    [columnToFilterOn]: {
                        textField: "''",
                        checkBoxes: [],
                        interval: ['', ''],
                    },
                },
                '',
                displayedColumns
            );
            expect(filtered).toHaveLength(3);
            filtered.forEach((row) => {
                expect(row.cells[columnToFilterOn].value).toBe('');
            });
        });

        it('on global column filter', () => {
            const filtered = filterRows(
                mockedRowsWithEmptyValues.rows,
                {},
                "''",
                displayedColumns
            );

            // Expect to match the given number of items
            expect(filtered).toHaveLength(5);
            filtered.forEach((row) => {
                // Checks if there is at least a '' value in one of the displayed columns
                expect(
                    displayedColumns.reduce(
                        (whiteSpaceFound, col) =>
                            row.cells[col.name] &&
                            row.cells[col.name].value === ''
                                ? true
                                : whiteSpaceFound,
                        false
                    )
                ).toBeTruthy();
            });
        });
    });

    describe.each([
        [
            'string%',
            'FRA%',
            (cellValue, filterText) => cellValue.startsWith(filterText),
        ],
        [
            '%string',
            '%FRA',
            (cellValue, filterText) => cellValue.endsWith(filterText),
        ],
        [
            '%string%',
            '%FRA%',
            (cellValue, filterText) => cellValue.indexOf(filterText) >= 0,
        ],
        ['string', 'FRA', (cellValue, filterText) => cellValue === filterText],
    ])(
        `with expression set to '%s'`,
        (
            label: string,
            searchKey: string,
            compareFunction: FilterCompareFunction
        ) => {
            const columnToFilterOn = 'FLD1';
            const filterText = searchKey.replace(/%/g, '');

            // [1] - It means that when the filter is negative (!) the expected result must be the contrary
            describe.each([
                [`affirmative`, true],
                [`negative, with a prepended '!'`, false],
            ])(`(%s), `, (testDescription, isAffirmative) => {
                const completeFilter = `${
                    isAffirmative ? '' : '!'
                }'${searchKey.toLowerCase()}'`;

                it('on column filter', () => {
                    const filtered = filterRows(
                        mockedRowsWithEmptyValues.rows,
                        {
                            [columnToFilterOn]: {
                                textField: completeFilter,
                                checkBoxes: [],
                                interval: ['', ''],
                            },
                        },
                        '',
                        displayedColumns
                    );

                    const filterProofRowsCount =
                        mockedRowsWithEmptyValues.rows.reduce(
                            (displayedRowsCount, { cells }) => {
                                let compareResult = compareFunction(
                                    cells[columnToFilterOn].value,
                                    filterText
                                );
                                if (
                                    !compareResult &&
                                    cells[columnToFilterOn].obj
                                ) {
                                    compareResult = compareFunction(
                                        cells[columnToFilterOn].obj.k,
                                        filterText
                                    );
                                }
                                return (displayedRowsCount += (
                                    isAffirmative
                                        ? compareResult
                                        : !compareResult
                                )
                                    ? 1
                                    : 0); // [1]
                            },
                            0
                        );
                    expect(filtered).toHaveLength(filterProofRowsCount);

                    filtered.forEach((row) => {
                        let compareResult = compareFunction(
                            row.cells[columnToFilterOn].value,
                            filterText
                        );
                        if (!compareResult && row.cells[columnToFilterOn].obj) {
                            compareResult = compareFunction(
                                row.cells[columnToFilterOn].obj.k,
                                filterText
                            );
                        }

                        expect(
                            isAffirmative ? compareResult : !compareResult
                        ).toBeTruthy(); // [1]
                    });
                });

                it('on global column filter', () => {
                    const filtered = filterRows(
                        mockedRowsWithEmptyValues.rows,
                        {},
                        completeFilter,
                        displayedColumns
                    );

                    const filterProofRowsCount =
                        mockedRowsWithEmptyValues.rows.reduce(
                            (displayedRowsCount, { cells }) => {
                                let foundItem = false;
                                for (
                                    let i = 0;
                                    i < displayedColumns.length && !foundItem;
                                    i++
                                ) {
                                    foundItem = compareFunction(
                                        cells[displayedColumns[i].name].value,
                                        filterText
                                    );
                                    /*if (
                                    !foundItem &&
                                    cells[displayedColumns[i].name].obj
                                ) {
                                    foundItem = compareFunction(
                                        cells[displayedColumns[i].name].obj.k,
                                        filterText
                                    );
                                }*/
                                }

                                return (displayedRowsCount +=
                                    (foundItem && isAffirmative) ||
                                    (!foundItem && !isAffirmative)
                                        ? 1
                                        : 0); // [1]
                            },
                            0
                        );

                    // Expect to match the given number of items
                    expect(filtered).toHaveLength(filterProofRowsCount);

                    // Checks that each rendered row has at least one match with the filter.
                    filtered.forEach(({ cells }) => {
                        let foundItem = false;
                        for (
                            let i = 0;
                            i < displayedColumns.length && !foundItem;
                            i++
                        ) {
                            foundItem = compareFunction(
                                cells[displayedColumns[i].name].value,
                                filterText
                            );
                        }
                        // Checks if there is at least a value in one of the displayed columns (when negative, there must be no values found)
                        expect(
                            isAffirmative ? foundItem : !foundItem
                        ).toBeTruthy(); // [1]
                    });
                });
            });
        }
    );
});
