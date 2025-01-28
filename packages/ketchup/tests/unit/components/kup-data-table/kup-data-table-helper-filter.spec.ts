import { filterRows } from '../../../../src/components/kup-data-table/kup-data-table-helper';
import { KupManager } from '../../../../src/managers/kup-manager/kup-manager';
import { KupDom } from '../../../../src/managers/kup-manager/kup-manager-declarations';
import { KupDataColumn } from '../../../../src/managers/kup-data/kup-data-declarations';
import sampleKupDataDataset from '../../../resources/mock/kup-data-dataset-with-people-nrs-dates-2.json';

const mockedColumns: KupDataColumn[] = sampleKupDataDataset.columns;
export function MockedRowsFactory() {
    let mockedRows = JSON.parse(JSON.stringify(sampleKupDataDataset.rows));
    return {
        columns: mockedColumns,
        rows: mockedRows,
    };
}
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

describe('kup datatable filtering rows', () => {
    it('filters without parameters', () => {
        const filtered = filterRows();
        expect(filtered).toEqual([]);
    });

    it('filters undefined rows', () => {
        const filtered = filterRows(undefined);
        expect(filtered).toEqual([]);
    });

    it('returns rows as they are if no / undefined / empty filter', () => {
        let filtered = filterRows(mockedRows.rows);
        expect(filtered).toEqual(mockedRows.rows);

        filtered = filterRows(mockedRows.rows, undefined);
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
                    interval: [],
                },
            },
            '',
            displayedColumns
        );

        expect(filtered).not.toEqual(mockedRows.rows);
        expect(filtered).toHaveLength(0);
    });

    it('filters on FLD1', () => {
        const filtered = filterRows(
            mockedRows.rows,
            {
                FLD1: { textField: 'fra', checkBoxes: [], interval: [] },
            },
            '',
            displayedColumns
        );

        expect(filtered).not.toEqual(mockedRows.rows);
        expect(filtered).toHaveLength(5);
    });

    it('filters on FLD1 and FLD2', () => {
        const filtered = filterRows(
            mockedRows.rows,
            {
                FLD1: { textField: 'fra', checkBoxes: [], interval: [] },
                FLD2: { textField: `'12'`, checkBoxes: [], interval: [] },
            },
            '',
            displayedColumns
        );

        expect(filtered).not.toEqual(mockedRows.rows);
        expect(filtered).toHaveLength(1);
    });

    it('global filters without columns', () => {
        let filtered = filterRows(mockedRows.rows, undefined, 'fra');
        expect(filtered).toEqual(mockedRows.rows);

        filtered = filterRows(mockedRows.rows, undefined, 'fra', undefined);
        expect(filtered).toEqual(mockedRows.rows);

        filtered = filterRows(mockedRows.rows, undefined, 'fra', []);
        expect(filtered).toEqual(mockedRows.rows);
    });

    it('global filters with columns', () => {
        const filtered = filterRows(
            mockedRows.rows,
            undefined,
            'fra',
            displayedColumns
        );

        expect(filtered).not.toEqual(mockedRows.rows);
        expect(filtered).toHaveLength(5);
    });

    it('global filters + column filters', () => {
        const filtered = filterRows(
            mockedRows.rows,
            {
                FLD1: { textField: 'cas', checkBoxes: [], interval: [] },
                FLD2: { textField: `'12'`, checkBoxes: [], interval: [] },
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

        it('column filters', () => {
            const filtered = filterRows(
                mockedRowsWithEmptyValues.rows,
                {
                    [columnToFilterOn]: {
                        textField: "''",
                        checkBoxes: [],
                        interval: [],
                    },
                },
                '',
                displayedColumns
            );
            expect(filtered).toHaveLength(3);
            filtered.forEach((row) => {
                expect(row.cells && row.cells[columnToFilterOn].value).toBe('');
            });
        });

        it('global column filters', () => {
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
                            row.cells &&
                            row.cells[col.name] &&
                            row.cells &&
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
            ])(`(%s) `, (testDescription, isAffirmative) => {
                const completeFilter = `${
                    isAffirmative ? '' : '!'
                }'${searchKey.toLowerCase()}'`;

                it('column filters', () => {
                    const filtered = filterRows(
                        mockedRowsWithEmptyValues.rows,
                        {
                            [columnToFilterOn]: {
                                textField: completeFilter,
                                checkBoxes: [],
                                interval: [],
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
                        if (!row.cells) {
                            fail('it should not reach here');
                        }

                        let compareResult = compareFunction(
                            row.cells[columnToFilterOn].value,
                            filterText
                        );
                        if (
                            !compareResult &&
                            row.cells &&
                            row.cells[columnToFilterOn].obj
                        ) {
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

                it('global column filters', () => {
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
                            if (cells && cells[displayedColumns[i].name]) {
                                foundItem = compareFunction(
                                    cells[displayedColumns[i].name].value,
                                    filterText
                                );
                            }
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
