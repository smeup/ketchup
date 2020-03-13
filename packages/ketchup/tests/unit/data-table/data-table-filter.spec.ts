import {filterRows} from '../../../src/components/kup-data-table/kup-data-table-helper';
import {MockedRowsFactory} from './mocked-data';

const mockedRows = MockedRowsFactory();

const mockedRowsWithEmptyValues = MockedRowsFactory();
mockedRowsWithEmptyValues[0].cells.FLD1.value = '';
mockedRowsWithEmptyValues[2].cells.FLD1.value = '';

const displayedColumnsNames = ['FLD1', 'FLD2', 'FLD3', 'FLD4'];

type FilterCompareFunction = (cellValue: string, filterText: string) => boolean;

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
    let filtered = filterRows(mockedRows);

    expect(filtered).toEqual(mockedRows);

    filtered = filterRows(mockedRows, null);

    expect(filtered).toEqual(mockedRows);

    filtered = filterRows(mockedRows, {});

    expect(filtered).toEqual(mockedRows);
  });

  it('returns empty array if no row matches', () => {
    const filtered = filterRows(mockedRows, {
      FLD1: 'clearly fake filter',
    });

    expect(filtered).not.toEqual(mockedRows);

    expect(filtered).toHaveLength(0);
  });

  it('filter on FLD1', () => {
    const filtered = filterRows(mockedRows, {FLD1: 'fra'});

    expect(filtered).not.toEqual(mockedRows);

    expect(filtered).toHaveLength(5);
  });

  it('filter on FLD1 and FLD2', () => {
    const filtered = filterRows(mockedRows, {FLD1: 'fra', FLD2: '12'});

    expect(filtered).not.toEqual(mockedRows);

    expect(filtered).toHaveLength(1);
  });

  it('global filter without columns', () => {
    let filtered = filterRows(mockedRows, null, 'fra');

    expect(filtered).toEqual(mockedRows);

    filtered = filterRows(mockedRows, null, 'fra', null);

    expect(filtered).toEqual(mockedRows);

    filtered = filterRows(mockedRows, null, 'fra', []);

    expect(filtered).toEqual(mockedRows);
  });

  it('global filter with columns', () => {
    const filtered = filterRows(mockedRows, null, 'fra', [
      'FLD1',
      'FLD2',
      'FLD3',
      'FLD4',
    ]);

    expect(filtered).not.toEqual(mockedRows);

    expect(filtered).toHaveLength(5);
  });

  it('global filter + column filter', () => {
    const filtered = filterRows(
      mockedRows,
      {FLD1: 'cas', FLD2: '12'},
      'fra',
      displayedColumnsNames
    );

    expect(filtered).not.toEqual(mockedRows);

    expect(filtered).toHaveLength(1);
  });


  //-------- Filter rows with expressions --------
  describe(`with expression set to ''`, () => {

    const columnToFilterOn = 'FLD1';

    it('on column filter', () => {
      const filtered = filterRows(
        mockedRowsWithEmptyValues,
        {[columnToFilterOn]: "''"}
      );

      expect(filtered).toHaveLength(3);
      filtered.forEach(row => {
        expect(row.cells[columnToFilterOn].value).toBe('');
      })

    });

    it('on global column filter', () => {
      const filtered = filterRows(
        mockedRowsWithEmptyValues,
        {},
        "''",
        displayedColumnsNames
      );

      // Expect to match the given number of items
      expect(filtered).toHaveLength(5);
      filtered.forEach(row => {
        // Checks if there is at least a '' value in one of the displayed columns
        expect(displayedColumnsNames.reduce((whiteSpaceFound, col) => row.cells[col] && row.cells[col].value === '' ? true : whiteSpaceFound, false))
          .toBeTruthy();
      })

    });
  });

  describe.each([
    ['string%', 'FRA%', (cellValue, filterText) => cellValue.startsWith(filterText)],
    ['%string', '%FRA', (cellValue, filterText) => cellValue.endsWith(filterText)],
    ['%string%', '%FRA%', (cellValue, filterText) => cellValue.indexOf(filterText) >= 0],
    ['string', 'FRA', (cellValue, filterText) => cellValue === filterText],
  ])(`with expression set to '%s'`, (label: string, searchKey: string, compareFunction: FilterCompareFunction) => {
    const columnToFilterOn = 'FLD1';
    const filterText = searchKey.replace(/%/g, '');

    // [1] - It means that when the filter is negative (!) the expected result must be the contrary
    describe.each([
      [`affirmative`, true],
      [`negative, with a prepended '!'`, false],
    ])(`(%s), `, (testDescription, isAffirmative) => {

      const completeFilter = `${isAffirmative ? '' : '!'}'${searchKey}'`;

      it('on column filter', () => {
        const filtered = filterRows(
          mockedRowsWithEmptyValues,
          {[columnToFilterOn]: completeFilter}
        );

        const filterProofRowsCount = mockedRowsWithEmptyValues.reduce(
          (displayedRowsCount, {cells}) => {
            const compareResult = compareFunction(cells[columnToFilterOn].value, filterText);
            return displayedRowsCount += ((isAffirmative ? compareResult : !compareResult) ? 1 : 0); // [1]
          },
          0
        );
        expect(filtered).toHaveLength(filterProofRowsCount);

        filtered.forEach(row => {
          const compareResult = compareFunction(row.cells[columnToFilterOn].value, filterText);
          expect(isAffirmative ? compareResult : !compareResult).toBeTruthy(); // [1]
        })

      });

      it('on global column filter', () => {
        const filtered = filterRows(
          mockedRowsWithEmptyValues,
          {},
          completeFilter,
          displayedColumnsNames
        );

        const filterProofRowsCount = mockedRowsWithEmptyValues
          .reduce((displayedRowsCount, {cells}) => {
              let foundItem = false;
              for (let i = 0; i < displayedColumnsNames.length && !foundItem; i++) {
                foundItem = compareFunction(cells[displayedColumnsNames[i]].value, filterText);
              }

              return displayedRowsCount += ((foundItem && isAffirmative) || (!foundItem && !isAffirmative) ? 1 : 0); // [1]
            },
            0
          );

        // Expect to match the given number of items
        expect(filtered).toHaveLength(filterProofRowsCount);

        // Checks that each rendered row has at least one match with the filter.
        filtered.forEach(({ cells }) => {
          let foundItem = false;
          for (let i = 0; i < displayedColumnsNames.length && !foundItem; i++) {
            foundItem = compareFunction(cells[displayedColumnsNames[i]].value, filterText);
          }
          // Checks if there is at least a value in one of the displayed columns (when negative, there must be no values found)
          expect(isAffirmative? foundItem : !foundItem).toBeTruthy(); // [1]
        });

      });

    });

  });
});
