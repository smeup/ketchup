import { newE2EPage } from '@stencil/core/testing';
import { dataTableHideRepetitionsData } from './mocked-data';
import { rowsSelector } from './data-table-selectors';
import { Column } from '../../../src/components/kup-data-table/kup-data-table-declarations';
import { getColumnByName } from '../../../src/components/kup-data-table/kup-data-table-helper';
import { _numberToString, stringToNumber } from '../../../src/utils/utils';
import { isNumber } from '../../../src/utils/object-utils';

describe('kup-data-table with hide repetitions active', () => {
    it('hides values where the previous cell on the same column has the same value', async () => {
        const page = await newE2EPage();
        const { rows, columns } = dataTableHideRepetitionsData;

        await page.setContent(
            `<kup-data-table global-filter rows-per-page="${rows.length}"></kup-data-table>`
        );

        const element = await page.find('kup-data-table');
        element.setProperty('data', dataTableHideRepetitionsData);
        await page.waitForChanges();

        // testing rows
        let tableRows = await page.findAll(rowsSelector);
        // Keeps columns in the correct order
        const columnsNames = columns.map((column) => column.name);

        // no filters or grouping -> length must be the same
        expect(tableRows).toHaveLength(rows.length);

        await Promise.all(
            rows.map(async (row, index, currentArr) => {
                const cells = await tableRows[index].findAll('td');

                await Promise.all(
                    columnsNames.map(async (column, columnIndex) => {
                        if (
                            !index ||
                            (currentArr[index - 1] &&
                                row.cells[column].value !==
                                    currentArr[index - 1].cells[column].value)
                        ) {
                            const _column: Column = getColumnByName(
                                columns,
                                column
                            );
                            if (isNumber(row.cells[column].obj)) {
                                /*
                                const cellValue = unformattedStringToFormattedStringNumber(
                                    row.cells[column].value,
                                    _column.decimals
                                );*/

                                const cellValueNumber: number = stringToNumber(
                                    row.cells[column].value
                                );
                                const cellValue = _numberToString(
                                    cellValueNumber,
                                    _column.decimals ? _column.decimals : -1,
                                    'it-IT'
                                );

                                /*
                                console.log(
                                    ' cells[columnIndex].textContent=' +
                                        cells[columnIndex].textContent +
                                        ' <> cellValue=' +
                                        cellValue
                                );
                                console.log(
                                    'istrue: [' +
                                        (cells[columnIndex].textContent ==
                                            cellValue.replace(
                                                RegExp(/\./g),
                                                ','
                                            ) ||
                                            cells[columnIndex].textContent ==
                                                cellValue.replace(
                                                    RegExp(/,/g),
                                                    '.'
                                                )) +
                                        ']'
                                );*/

                                expect(
                                    cells[columnIndex].textContent ==
                                        cellValue.replace(RegExp(/\./g), ',') ||
                                        cells[columnIndex].textContent ==
                                            cellValue.replace(RegExp(/,/g), '.')
                                ).toBeTruthy();
                            } else {
                                // When values are different or is the first item
                                expect(cells[columnIndex]).toEqualText(
                                    row.cells[column].value
                                );
                                //  if (row.cells[column].options) {
                                //    const option = await cells[columnIndex].find('span.options');
                                //    expect(option).toBeTruthy();
                                //  }
                                //} else {
                                // When value must be hidden
                                //  expect(cells[columnIndex]).toEqualText('');
                                //  if (row.cells[column].options) {
                                //    const option = await cells[columnIndex].find('span.options');
                                //    expect(option).toBeFalsy();
                                //  }
                            }
                        }
                    })
                );
            })
        );
    });
});
