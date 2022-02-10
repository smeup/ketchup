const fld1Values = [
  'Customers module',
  'Sales module',
  'Marketing module',
  'Commerce module',
  'Service module',
];

const fld2Values = ['Java', 'Javascript', 'Delphi', 'Kotlin', 'Go'];

const fld3Values = [
  'Marketing',
  'Information Technology',
  'Sales',
  'Customers',
  'Accounting',
  'Logistic',
];

function getRandomArbitrary(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

export function createDataForPagination(
  colSize: number,
  rowSize: number,
  useStepValues: boolean = false
) {
  const columns: any = [];
  let stepValue = -20;
  const stepIncrement = 10;
  const stepValuesAlwaysFilteredRows = [0, 1];

  for (let i = 0; i < colSize; i++) {
    columns.push({
      name: 'FLD' + i,
      title: 'Column ' + i,
      hideValuesRepetitions:
        useStepValues &&
        (Math.random() > 0.5 || stepValuesAlwaysFilteredRows.indexOf(i) >= 0),
    });
  }

  const rows = [];
  for (let i = 0; i < rowSize; i++) {
    const currentRow: {
      cells: any;
    } = { cells: {} };

    for (let j = 0; j < columns.length; j++) {
      const cell: any = {};

      cell.value =
        (!useStepValues ? i.toString() : stepValue.toString()) + j.toString();

      cell.obj = {
        t: '',
        p: '',
        k: cell.value,
      };

      if (j === 0) {
        cell.obj.t = '';
        cell.value = fld1Values[getRandomArbitrary(0, 4)];
      } else if (j === 1) {
        cell.obj.t = '';
        cell.value = fld2Values[getRandomArbitrary(0, 4)];
      }

      currentRow.cells[columns[j].name] = cell;
    }

    if (!(i % stepIncrement)) stepValue++;

    rows.push(currentRow);
  }

  return {
    columns,
    rows,
  };
}

export function filterFakeDepartmentData(filter: string, dataSuffix: string) {
  let data = createFakeDepartmentData(dataSuffix);
  let rowsFiltered = data.rows;
  if (filter) {
    rowsFiltered = data.rows.filter((row: any) => {
      let includes = row.cells['code'].value + ' ' + row.cells['desc'].value;
      return includes.toUpperCase().includes(filter.toUpperCase());
    });
  }
  return {
    columns: data.columns,
    rows: rowsFiltered,
  };
}

export function createFakeDepartmentData(dataSuffix: string) {
  const columns: any = [];
  columns.push({
    name: 'code',
    title: 'Code',
  });
  columns.push({
    name: 'desc',
    title: 'Description',
  });
  const rows = [];
  for (let i = 0; i < fld3Values.length; i++) {
    const currentRow: {
      cells: any;
    } = { cells: {} };
    currentRow.cells['code'] = {
      value: (fld3Values[i].substring(0, 3) + dataSuffix).toUpperCase(),
    };
    currentRow.cells['desc'] = {
      value: fld3Values[i] + dataSuffix,
    };
    for (let j = 0; j < columns.length; j++) {
      currentRow.cells[columns[j].name].obj = {
        t: '',
        p: '',
        k: '',
      };
    }
    rows.push(currentRow);
  }
  return {
    columns,
    rows,
  };
}

export const defaultDataTable = {
  columns: [
    {
      name: 'FLD1',
      title: 'Software',
    },
    {
      name: 'FLD2',
      title: 'Working License',
      obj: {
        t: 'NR',
        p: '',
        k: '',
      },
    },
    {
      name: 'FLD3',
      title: 'Price',
      obj: {
        t: 'NR',
        p: '',
        k: '',
      },
    },
    {
      name: 'FLD4',
      title: 'Expiring Date',
      icon: 'calendar',
    },
  ],
  rows: [
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Shareholders module',
          },
          value: 'Shareholders module',
          title: 'Simple tooltip for cell 1',
          options: true,
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
          title: 'Simple tooltip for cell 2',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '100.60',
          },
          value: '100.60',
          title: 'Simple tooltip for cell 3',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200101',
          },
          value: '2020-01-01',
          title: 'Simple tooltip for cell 4',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Sales module',
          },
          value: 'Sales module',
          options: true,
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '39.5',
          },
          value: '39.5',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200202',
          },
          value: '2020-02-02',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Marketing module',
          },
          value: 'Marketing module',
          options: true,
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '67.8',
          },
          value: '67.8',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200303',
          },
          value: '2020-03-03',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Commerce module',
          },
          value: 'Commerce module',
          options: true,
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '2',
          },
          value: '2',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '156.7',
          },
          value: '156.7',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200404',
          },
          value: '2020-04-04',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Service module',
          },
          value: 'Service module',
          options: true,
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '2',
          },
          value: '2',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '256.7',
          },
          value: '256.7',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200505',
          },
          value: '2020-05-05',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Cloud module',
          },
          value: 'Cloud module',
          options: true,
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '2',
          },
          value: '2',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '78.9',
          },
          value: '78.9',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200606',
          },
          value: '2020-06-06',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Financial module',
          },
          value: 'Financial module',
          options: true,
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '3',
          },
          value: '3',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '145.6',
          },
          value: '145.6',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200707',
          },
          value: '2020-07-07',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Delivery module',
          },
          value: 'Delivery module',
          options: true,
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '3',
          },
          value: '3',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '278.9',
          },
          value: '278.9',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200808',
          },
          value: '2020-08-08',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Web module',
          },
          value: 'Web module',
          options: true,
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '3',
          },
          value: '3',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '498.7',
          },
          value: '498.7',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200909',
          },
          value: '2020-09-09',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Integration module',
          },
          value: 'Integration module',
          options: true,
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '4',
          },
          value: '4',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '99.9',
          },
          value: '99.9',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20201010',
          },
          value: '2020-10-10',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Banking module',
          },
          value: 'Banking module',
          options: true,
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '4',
          },
          value: '4',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '178.9',
          },
          value: '178.9',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20201111',
          },
          value: '2020-11-11',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Analytics module',
          },
          value: 'Analytics module',
          options: true,
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '4',
          },
          value: '4',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '345.6',
          },
          value: '345.6',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20201212',
          },
          value: '2020-12-12',
        },
      },
    },
  ],
};

export const hiddenColumnsData = {
  columns: [
    {
      name: 'FLD1',
      title: 'Software',
      visible: false,
    },
    {
      name: 'FLD2',
      title: 'Working License',
      obj: {
        t: 'NR',
        p: '',
        k: '',
      },
    },
    {
      name: 'FLD3',
      title: 'Price',
      visible: false,
      obj: {
        t: 'NR',
        p: '',
        k: '',
      },
    },
    {
      name: 'FLD4',
      title: 'Expiring Date',
    },
  ],
  rows: [
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Customer module',
          },
          value: 'Customer module',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '100.60',
          },
          value: '100.60',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200101',
          },
          value: '2020-01-01',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Commerce module',
          },
          value: 'Commerce module',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '2',
          },
          value: '2',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '67.8',
          },
          value: '67.8',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200404',
          },
          value: '2020-04-04',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Financial module',
          },
          value: 'Financial module',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '3',
          },
          value: '3',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '120.06',
          },
          value: '120.06',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200707',
          },
          value: '2020-07-07',
        },
      },
    },
  ],
};

export const iconImagesDataTable = {
  columns: [
    {
      name: 'FLD1',
      title: 'Person',
      // Checks 'clickable' class is not added when present but false
      clickable: false,
    },
    {
      name: 'FLD2',
      title: 'Icon',
      // Checks 'clickable' class is added
      clickable: true,
      obj: {
        t: 'J4',
        p: 'ICO',
        k: '',
      },
    },
    {
      name: 'FLD3',
      title: 'Image',
      obj: {
        t: 'J4',
        p: 'IMG',
        k: '',
      },
    },
  ],
  rows: [
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Customers module',
          },
          value: 'John Doe',
        },
        FLD2: {
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'CN;COL;Customers module',
          },
          data: { resource: 'account' },
          value: 'account',
        },
        FLD3: {
          obj: {
            t: 'J4',
            p: 'IMG',
            k: 'CN;COL;Customers module',
          },
          data: { resource: 'https://via.placeholder.com/64?text=PF' },
          value: 'https://via.placeholder.com/64?text=PF',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Marketing module',
          },
          value: 'Jonnie Doe',
        },
        FLD2: {
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'OG;J1;PATHFILE',
          },
          data: { resource: 'folder' },
          value: 'folder',
        },
        FLD3: {
          obj: {
            t: 'J4',
            p: 'IMG',
            k: 'OG;J1;PATHFILE',
          },
          data: { resource: 'https://via.placeholder.com/64?text=PF' },
          value: 'https://via.placeholder.com/64?text=PF',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Sales module',
          },
          value: 'Baby Doe',
        },
        FLD2: {
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'J1;KEY;CTRL',
          },
          data: { resource: 'play' },
          value: 'play',
        },
        FLD3: {
          obj: {
            t: 'J4',
            p: 'IMG',
            k: 'J1;KEY;CTRL',
          },
          data: { resource: 'https://via.placeholder.com/64?text=PF' },
          value: 'https://via.placeholder.com/64?text=PF',
        },
      },
    },
  ],
};

export const cellStyleDataTable = {
  columns: [
    {
      name: 'FLD1',
      title: 'Software',
    },
    {
      name: 'FLD2',
      title: 'Working License',
      obj: {
        t: 'NR',
        p: '',
        k: '',
      },
    },
    {
      name: 'FLD3',
      title: 'Price',
      obj: {
        t: 'NR',
        p: '',
        k: '',
      },
    },
    {
      name: 'FLD4',
      title: 'Expiring Date',
    },
  ],
  rows: [
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Customers module',
          },
          value: 'Customers module',
          style: {
            backgroundColor: 'blue',
            color: '#FFF',
          },
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
          style: {
            backgroundColor: 'blue',
            color: '#FFF',
          },
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '100.60',
          },
          value: '100.60',
          style: {
            backgroundColor: 'blue',
            color: '#FFF',
            borderRadius: '50px',
            padding: '3px',
          },
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200101',
          },
          value: '2020-01-01',
          style: {
            backgroundColor: 'blue',
            color: 'yellow',
            fontWeight: 'bold',
          },
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Commerce module',
          },
          value: 'Commerce module',
          style: {
            fontWeight: 'bold',
          },
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '2',
          },
          value: '2',
          style: {
            fontStyle: 'italic',
            textAlign: 'center',
          },
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '67.8',
          },
          value: '67.8',
          style: {
            backgroundColor: 'blue',
            color: '#FFF',
          },
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200404',
          },
          value: '2020-04-04',
          style: {
            fontSize: '30px',
          },
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Marketing module',
          },
          value: 'Marketing module',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '120.06',
          },
          value: '120.06',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200303',
          },
          value: '2020-03-03',
        },
      },
    },
  ],
};

export const cellStyleDataTable2 = {
  columns: [
    {
      name: 'FLD1',
      title: 'Column A',
    },
    {
      name: 'FLD2',
      title: 'Column B',
      obj: {
        t: 'NR',
        p: '',
        k: '',
      },
    },
    {
      name: 'FLD3',
      title: 'Column C',
      obj: {
        t: 'NR',
        p: '',
        k: '',
      },
    },
    {
      name: 'FLD4',
      title: 'Column D',
    },
  ],
  rows: [
    {
      cells: {
        FLD1: {
          cssClass: 'c-vertical-text c-round',
          obj: {
            t: 'CN',
            p: 'COL',
            k: 'CASFRA',
          },
          value: 'CASFRA',
          styleContent: {
            backgroundColor: 'blue',
            color: '#FFF',
          },
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '10',
          },
          value: '10',
          style: {
            backgroundColor: 'blue',
            color: '#FFF',
          },
        },
        FLD3: {
          cssClass: 'c-fitted c-round c-hor-padded c-ver-padded',
          obj: {
            t: 'NR',
            p: '',
            k: '100.60',
          },
          value: '100.60',
          style: { padding: '10px' },
          styleContent: {
            backgroundColor: 'blue',
            color: '#FFF',
          },
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20180101',
          },
          value: '2018-01-01',
          style: {
            backgroundColor: 'blue',
            color: 'yellow',
            fontWeight: 'bold',
          },
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
          style: {
            fontWeight: 'bold',
          },
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '6',
          },
          value: '6',
          style: {
            fontStyle: 'italic',
            textAlign: 'center',
          },
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '67.8',
          },
          value: '67.8',
          style: {
            backgroundColor: 'blue',
            color: '#FFF',
          },
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20180102',
          },
          value: '2018-01-02',
          style: {
            fontSize: '30px',
          },
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
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20180103',
          },
          value: '2018-01-03',
        },
      },
    },
  ],
};

export const sortDataTable = {
  columns: [
    {
      name: 'FLD1',
      title: 'Software',
    },
    {
      name: 'FLD2',
      title: 'Working License',
      obj: {
        t: 'NR',
        p: '',
        k: '',
      },
    },
    {
      name: 'FLD3',
      title: 'Price',
      obj: {
        t: 'NR',
        p: '',
        k: '',
      },
    },
    {
      name: 'FLD4',
      title: 'Expiring Date',
    },
  ],
  rows: [
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Customers module',
          },
          options: true,
          value: 'Customers module',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '100.60',
          },
          value: '100.60',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200101',
          },
          value: '2020-01-01',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Sales module',
          },
          options: true,
          value: 'Sales module',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '67.8',
          },
          value: '67.8',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200202',
          },
          value: '2020-02-02',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Marketing module',
          },
          options: true,
          value: 'Marketing module',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '120.06',
          },
          value: '120.06',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200303',
          },
          value: '2020-03-03',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Commerce module',
          },
          options: true,
          value: 'Commerce module',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '2',
          },
          value: '2',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '100.60',
          },
          value: '100.60',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200404',
          },
          value: '2020-04-04',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Service module',
          },
          options: true,
          value: 'Service module',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '2',
          },
          value: '2',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '67.8',
          },
          value: '67.8',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200505',
          },
          value: '2020-05-05',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Cloud module',
          },
          options: true,
          value: 'Cloud module',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '2',
          },
          value: '2',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '120.06',
          },
          value: '120.06',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200606',
          },
          value: '2020-06-06',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Financial module',
          },
          options: true,
          value: 'Financial module',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '3',
          },
          value: '3',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '100.60',
          },
          value: '100.60',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200707',
          },
          value: '2020-07-07',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Delivery module',
          },
          options: true,
          value: 'Delivery module',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '3',
          },
          value: '3',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '67.8',
          },
          value: '67.8',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200808',
          },
          value: '2020-08-08',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Web module',
          },
          options: true,
          value: 'Web module',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '3',
          },
          value: '3',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '120.06',
          },
          value: '120.06',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200909',
          },
          value: '2020-09-09',
        },
      },
    },
  ],
};

export const paginateDataTable = createDataForPagination(20, 500);

export const groupDataTable = createDataForPagination(10, 10);

export const repetitionsGroupDataTable = createDataForPagination(8, 1000, true);

//---- Checkbox and radio data table ----
export function dataTableCheckboxFactory(
  inputType: string = 'SI/NO',
  hideValuesRepetitions: boolean = false
) {
  return {
    config: {
      rowsPerPage: 50,
    },
    data: {
      columns: [
        {
          name: 'A',
          title: 'Numero',
        },
        {
          name: 'B',
          title: 'BarCode',
        },
        {
          hideValuesRepetitions,
          name: 'C',
          title: 'Si/No',
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
        },
      ],
      rows: [
        {
          cells: {
            A: {
              obj: {
                k: '1',
                p: '',
                t: '',
              },
              options: false,
              value: '1',
            },
            B: {
              obj: {
                k: 'J;1111ffffffffff',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: 'J;1111ffffffffff',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              data: { checked: true },
              options: false,
              value: '1',
            },
          },
          id: '0',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '2',
                p: '',
                t: '',
              },
              options: false,
              value: '2',
            },
            B: {
              obj: {
                k: 'A;12345',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: 'A;12345',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
              data: { checked: true },
            },
          },
          id: '1',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '3',
                p: '',
                t: '',
              },
              options: false,
              value: '3',
            },
            B: {
              obj: {
                k: 'B;987654321098',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: 'B;987654321098',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
              data: { checked: true },
            },
          },
          id: '2',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '4',
                p: '',
                t: '',
              },
              options: false,
              value: '4',
            },
            B: {
              obj: {
                k: 'C;123456789012',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: 'C;123456789012',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
              data: { checked: true },
            },
          },
          id: '3',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '5',
                p: '',
                t: '',
              },
              options: false,
              value: '5',
            },
            B: {
              obj: {
                k: 'D;1122334455667',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: 'D;1122334455667',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
              data: { checked: true },
            },
          },
          id: '4',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '6',
                p: '',
                t: '',
              },
              options: false,
              value: '6',
            },
            B: {
              obj: {
                k: 'E;9876543210123',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: 'E;9876543210123',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
              data: { checked: true },
            },
          },
          id: '5',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '7',
                p: '',
                t: '',
              },
              options: false,
              value: '7',
            },
            B: {
              obj: {
                k: 'F;0123987654456',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: 'F;0123987654456',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
              data: { checked: true },
            },
          },
          id: '6',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '8',
                p: '',
                t: '',
              },
              options: false,
              value: '8',
            },
            B: {
              obj: {
                k: 'G;1234567890123',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: 'G;1234567890123',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
              data: { checked: true },
            },
          },
          id: '7',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '9',
                p: '',
                t: '',
              },
              options: false,
              value: '9',
            },
            B: {
              obj: {
                k: 'H;51112345621',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: 'H;51112345621',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
              data: { checked: true },
            },
          },
          id: '8',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '0',
                p: '',
                t: '',
              },
              options: false,
              value: '0',
            },
            B: {
              obj: {
                k: 'I;12345678901',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: 'I;12345678901',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
              data: { checked: true },
            },
          },
          id: '9',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '2',
                p: '',
                t: '',
              },
              options: false,
              value: '2',
            },
            B: {
              obj: {
                k: '2345',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '2345',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
              data: { checked: true },
            },
          },
          id: '10',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '3',
                p: '',
                t: '',
              },
              options: false,
              value: '3',
            },
            B: {
              obj: {
                k: '6789',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '6789',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
              data: { checked: true },
            },
          },
          id: '11',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '4',
                p: '',
                t: '',
              },
              options: false,
              value: '4',
            },
            B: {
              obj: {
                k: '2511',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '2511',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
              data: { checked: true },
            },
          },
          id: '12',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '1',
                p: '',
                t: '',
              },
              options: false,
              value: '1',
            },
            B: {
              obj: {
                k: '1111',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '1111',
            },
            C: {
              obj: {
                k: '',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '',
              data: { checked: false },
            },
          },
          id: '13',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '2',
                p: '',
                t: '',
              },
              options: false,
              value: '2',
            },
            B: {
              obj: {
                k: '2345',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '2345',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
              data: { checked: true },
            },
          },
          id: '14',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '3',
                p: '',
                t: '',
              },
              options: false,
              value: '3',
            },
            B: {
              obj: {
                k: '6789',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '6789',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
              data: { checked: true },
            },
          },
          id: '15',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '4',
                p: '',
                t: '',
              },
              options: false,
              value: '4',
            },
            B: {
              obj: {
                k: '2511',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '2511',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
              data: { checked: true },
            },
          },
          id: '16',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '1',
                p: '',
                t: '',
              },
              options: false,
              value: '1',
            },
            B: {
              obj: {
                k: '1111',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '1111',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
              data: { checked: true },
            },
          },
          id: '17',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '2',
                p: '',
                t: '',
              },
              options: false,
              value: '2',
            },
            B: {
              obj: {
                k: '2345',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '2345',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
              data: { checked: true },
            },
          },
          id: '18',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '3',
                p: '',
                t: '',
              },
              options: false,
              value: '3',
            },
            B: {
              obj: {
                k: '6789',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '6789',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
              data: { checked: true },
            },
          },
          id: '19',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '4',
                p: '',
                t: '',
              },
              options: false,
              value: '4',
            },
            B: {
              obj: {
                k: '2511',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '2511',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
              data: { checked: true },
            },
          },
          id: '20',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '1',
                p: '',
                t: '',
              },
              options: false,
              value: '1',
            },
            B: {
              obj: {
                k: '1111',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '1111',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
              data: { checked: true },
            },
          },
          id: '21',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '2',
                p: '',
                t: '',
              },
              options: false,
              value: '2',
            },
            B: {
              obj: {
                k: '2345',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '2345',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
              data: { checked: true },
            },
          },
          id: '22',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '3',
                p: '',
                t: '',
              },
              options: false,
              value: '3',
            },
            B: {
              obj: {
                k: '6789',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '6789',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
              data: { checked: true },
            },
          },
          id: '23',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '4',
                p: '',
                t: '',
              },
              options: false,
              value: '4',
            },
            B: {
              obj: {
                k: '2511',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '2511',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
              data: { checked: true },
            },
          },
          id: '24',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '1',
                p: '',
                t: '',
              },
              options: false,
              value: '1',
            },
            B: {
              obj: {
                k: '1111',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '1111',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
              data: { checked: true },
            },
          },
          id: '25',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '2',
                p: '',
                t: '',
              },
              options: false,
              value: '2',
            },
            B: {
              obj: {
                k: '2345',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '2345',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
              data: { checked: true },
            },
          },
          id: '26',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '3',
                p: '',
                t: '',
              },
              options: false,
              value: '3',
            },
            B: {
              obj: {
                k: '6789',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '6789',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
              data: { checked: true },
            },
          },
          id: '27',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '4',
                p: '',
                t: '',
              },
              options: false,
              value: '4',
            },
            B: {
              obj: {
                k: '2511',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '2511',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
              data: { checked: true },
            },
          },
          id: '28',
          object: '',
          readOnly: true,
        },
      ],
    },
    key: 'i146',
  };
}

export const dataTableDateTime = {
  columns: [
    {
      name: 'STRING',
      obj: {
        k: '',
        p: '',
        t: '',
      },
      title: 'String',
    },
    {
      name: 'NUMBER',
      obj: {
        t: 'NR',
        p: '',
        k: '',
      },
      title: 'Number',
    },
    {
      name: 'DECIMALNUMBER',
      obj: {
        t: 'NR',
        p: '',
        k: '',
      },
      title: 'Decimal number',
      decimals: '5',
    },
    {
      name: 'DATE',
      obj: {
        t: 'D8',
        p: '',
        k: '',
      },
      icon: 'calendar',
      title: 'Date (dd/mm/yyyy)',
    },
    {
      name: 'TIMESEC',
      obj: {
        t: 'I1',
        p: '2',
        k: '',
      },
      icon: 'clock',
      title: 'Time (hh:mm:ss)',
    },
    {
      name: 'TIME',
      obj: {
        t: 'I1',
        p: '',
        k: '',
      },
      icon: 'clock',
      title: 'Time (hh:mm)',
    },
    {
      name: 'TIMESTAMP',
      obj: {
        t: 'I3',
        p: '2',
        k: '',
      },
      icon: 'calendar',
      title: 'Timestamp',
    },
  ],
  rows: [
    {
      cells: {
        STRING: {
          obj: {
            k: 'String value',
            p: '',
            t: '',
          },
          value: 'String value',
        },
        NUMBER: {
          obj: {
            k: '12345',
            p: '',
            t: 'NR',
          },
          value: '12345.0',
        },
        DECIMALNUMBER: {
          obj: {
            k: '4567.123',
            p: '',
            t: 'NR',
          },
          value: '4567.123',
        },
        DATE: {
          obj: {
            t: 'D8',
            p: '',
            k: '',
          },
          value: '2021-01-02',
        },
        TIMESEC: {
          obj: {
            t: 'I1',
            p: '2',
            k: '',
          },
          value: '10:11:22',
        },
        TIME: {
          obj: {
            t: 'I1',
            p: '',
            k: '',
          },
          value: '10:55',
        },
        TIMESTAMP: {
          obj: {
            t: 'I3',
            p: '2',
            k: '',
          },
          value: '2021-07-19 10:33:44',
        },
        id: '7',
        object: '',
        readOnly: true,
      },
    },
  ],
};

export const reportDatatable = {
  columns: [
    {
      name: 'FLD1',
      title: 'Number',
      obj: {
        t: 'NR',
        p: '',
        k: '',
      },
    },
    {
      icon: 'calendar',
      name: 'FLD2',
      obj: {
        t: 'D8',
        p: '',
        k: '',
      },
      title: 'Event',
    },
    {
      name: 'FLD3',
      title: 'Type',
    },
    {
      name: 'FLD4',
      title: 'Topography',
    },
    {
      name: 'FLD5',
      title: 'Dimension',
    },
    {
      name: 'FLD6',
      title: 'Description',
      style: {
        display: 'none',
      },
    },
  ],
  rows: [
    {
      cells: {
        FLD6: {
          cssClass: 'c-centered',
          span: {
            col: 5,
          },
          style: {
            fontStyle: 'italic',
            height: '2.5em',
            lineHeight: '2.5em',
          },
          value: 'Avalanches at the Vallée de la Sionne Site',
        },
      },
      id: '0',
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
        },
        FLD2: {
          obj: {
            t: 'D8',
            p: '',
            k: '1999-01-30',
          },
          value: '1999-01-30',
        },
        FLD3: {
          value: 'mixed',
        },
        FLD4: {
          value: 'mixed',
        },
        FLD5: {
          value: 'large',
        },
      },
      id: '1',
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '2',
          },
          value: '2',
        },
        FLD2: {
          obj: {
            t: 'D8',
            p: '',
            k: '1999-02-10',
          },
          value: '1999-02-10',
        },
        FLD3: {
          value: 'mixed',
        },
        FLD4: {
          value: 'mixed',
        },
        FLD5: {
          value: 'large',
        },
      },
      id: '2',
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '3',
          },
          value: '3',
        },
        FLD2: {
          obj: {
            t: 'D8',
            p: '',
            k: '1999-02-25',
          },
          value: '1999-02-25',
        },
        FLD3: {
          value: 'mixed',
        },
        FLD4: {
          value: 'mixed',
        },
        FLD5: {
          value: 'large',
        },
      },
      id: '3',
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '4',
          },
          value: '4',
        },
        FLD2: {
          obj: {
            t: 'D8',
            p: '',
            k: '2003-01-31',
          },
          value: '2003-01-31',
        },
        FLD3: {
          value: 'mixed',
        },
        FLD4: {
          value: 'mixed',
        },
        FLD5: {
          value: 'large',
        },
      },
      id: '4',
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '5',
          },
          value: '5',
        },
        FLD2: {
          obj: {
            t: 'D8',
            p: '',
            k: '2003-02-05',
          },
          value: '2003-02-05',
        },
        FLD3: {
          value: 'mixed',
        },
        FLD4: {
          value: 'mixed',
        },
        FLD5: {
          value: 'medium',
        },
      },
      id: '5',
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '6',
          },
          value: '6',
        },
        FLD2: {
          obj: {
            t: 'D8',
            p: '',
            k: '2003-02-07',
          },
          value: '2003-02-07',
        },
        FLD3: {
          value: 'mixed',
        },
        FLD4: {
          value: 'mixed',
        },
        FLD5: {
          value: 'medium',
        },
      },
      id: '6',
    },
    {
      cells: {
        FLD6: {
          cssClass: 'c-centered',
          span: {
            col: 5,
          },
          style: {
            fontStyle: 'italic',
            height: '2.5em',
            lineHeight: '2.5em',
          },
          value: 'Avalanches at the Mount Pizzac Site',
        },
      },
      id: '7',
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '7',
          },
          value: '7',
        },
        FLD2: {
          obj: {
            t: 'D8',
            p: '',
            k: '2003-12-05',
          },
          value: '2003-12-05',
        },
        FLD3: {
          value: 'dense',
        },
        FLD4: {
          value: 'channeled',
        },
        FLD5: {
          value: 'small',
        },
      },
      id: '8',
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '8',
          },
          value: '8',
        },
        FLD2: {
          obj: {
            t: 'D8',
            p: '',
            k: '1997-12-21',
          },
          value: '1997-12-21',
        },
        FLD3: {
          value: 'dense',
        },
        FLD4: {
          value: 'channeled',
        },
        FLD5: {
          value: 'small',
        },
      },
      id: '9',
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '9',
          },
          value: '9',
        },
        FLD2: {
          obj: {
            t: 'D8',
            p: '',
            k: '1998-04-14',
          },
          value: '1998-04-14',
        },
        FLD3: {
          value: 'dense',
        },
        FLD4: {
          value: 'channeled',
        },
        FLD5: {
          value: 'small',
        },
      },
      id: '10',
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '10',
          },
          value: '10',
        },
        FLD2: {
          obj: {
            t: 'D8',
            p: '',
            k: '1998-04-28',
          },
          value: '1998-04-28',
        },
        FLD3: {
          value: 'dense',
        },
        FLD4: {
          value: 'channeled',
        },
        FLD5: {
          value: 'small',
        },
      },
      id: '11',
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '11',
          },
          value: '11',
        },
        FLD2: {
          obj: {
            t: 'D8',
            p: '',
            k: '1999-01-11',
          },
          value: '1999-01-11',
        },
        FLD3: {
          value: 'dense',
        },
        FLD4: {
          value: 'channeled',
        },
        FLD5: {
          value: 'small',
        },
      },
      id: '12',
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '12',
          },
          value: '12',
        },
        FLD2: {
          obj: {
            t: 'D8',
            p: '',
            k: '1999-03-05',
          },
          value: '1999-03-05',
        },
        FLD3: {
          value: 'dense',
        },
        FLD4: {
          value: 'channeled',
        },
        FLD5: {
          value: 'small',
        },
      },
      id: '13',
    },
    {
      cells: {
        FLD6: {
          cssClass: 'c-centered',
          span: {
            col: 5,
          },
          style: {
            fontStyle: 'italic',
            height: '2.5em',
            lineHeight: '2.5em',
          },
          value: 'Extreme avalanches of Winter 1998-1999',
        },
      },
      id: '14',
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '13',
          },
          value: '13',
        },
        FLD2: {
          obj: {
            t: 'D8',
            p: '',
            k: '1999-02-09',
          },
          value: '1999-02-09',
        },
        FLD3: {
          value: 'mixed',
        },
        FLD4: {
          value: 'channeled',
        },
        FLD5: {
          value: 'large',
        },
      },
      id: '15',
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '14',
          },
          value: '14',
        },
        FLD2: {
          obj: {
            t: 'D8',
            p: '',
            k: '1999-02-22',
          },
          value: '1999-02-22',
        },
        FLD3: {
          value: 'mixed',
        },
        FLD4: {
          value: 'open slope',
        },
        FLD5: {
          value: 'large',
        },
      },
      id: '15',
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '15',
          },
          value: '15',
        },
        FLD2: {
          obj: {
            t: 'D8',
            p: '',
            k: '1999-02-23',
          },
          value: '1999-02-23',
        },
        FLD3: {
          value: 'mixed',
        },
        FLD4: {
          value: 'open slope',
        },
        FLD5: {
          value: 'large',
        },
      },
      id: '16',
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '16',
          },
          value: '16',
        },
        FLD2: {
          obj: {
            t: 'D8',
            p: '',
            k: '1999-02-23',
          },
          value: '1999-02-23',
        },
        FLD3: {
          value: 'mixed',
        },
        FLD4: {
          value: 'mixed',
        },
        FLD5: {
          value: 'medium',
        },
      },
      id: '17',
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '17',
          },
          value: '17',
        },
        FLD2: {
          obj: {
            t: 'D8',
            p: '',
            k: '1999-02-25',
          },
          value: '1999-02-25',
        },
        FLD3: {
          value: 'mixed',
        },
        FLD4: {
          value: 'mixed',
        },
        FLD5: {
          value: 'large',
        },
      },
      id: '17',
    },
    {
      cells: {
        FLD6: {
          span: {
            col: 5,
          },
          style: {
            backgroundColor: 'var(--kup-text-color)',
            height: '1px',
            padding: 0,
          },
        },
      },
      id: '18',
    },
    {
      cells: {
        FLD6: {
          cssClass: 'c-centered',
          span: {
            col: 5,
          },
          style: {
            fontStyle: 'italic',
            fontWeight: 'bold',
            lineHeight: '2.5em',
          },
          value: '*Footer note',
        },
      },
      id: '19',
    },
  ],
};

export const reportDatatable2 = {
  columns: [
    {
      name: 'FLD1',
      title: 'Posizione',
    },
    {
      name: 'FLD2',
      title: 'Categoria',
    },
    {
      name: 'FLD3',
      title: 'Articolo',
    },
    {
      name: 'FLD4',
      title: 'Descrizione',
    },
    {
      name: 'FLD5',
      title: 'Stato Art.',
    },
    {
      name: 'FLD6',
      title: 'Descr stato',
    },
    {
      name: 'FLD7',
      title: 'Giac.(se 75)',
    },
    {
      name: 'FLD8',
      title: 'Quantità',
    },
    {
      name: 'FLD9',
      title: 'Prezzo',
      decimals: 2,
    },
    {
      name: 'FLD10',
      title: 'Sconto%',
    },
    {
      name: 'FLD11',
      title: 'Importo',
      decimals: 2,
    },
    {
      name: 'FLD12',
      title: 'Modifica',
    },
    {
      name: 'FLD13',
      title: 'Cancella',
    },
    {
      name: 'FLD14',
      title: 'Duplica',
    },
    {
      cssClass: 'strong-text',
      name: 'FLD15',
      title: 'Intestazione',
      style: {
        display: 'none',
      },
    },
    {
      name: 'FLD16',
      title: 'Bottone modifica',
      obj: {
        t: 'J4',
        p: 'BTN',
        k: '',
      },
      style: {
        display: 'none',
      },
    },
    {
      name: 'FLD17',
      title: 'Bottone cancella',
      obj: {
        t: 'J4',
        p: 'BTN',
        k: '',
      },
      style: {
        display: 'none',
      },
    },
    {
      name: 'FLD18',
      title: 'Bottone duplica',
      obj: {
        t: 'J4',
        p: 'BTN',
        k: '',
      },
      style: {
        display: 'none',
      },
    },
    {
      name: 'FLD19',
      title: 'Bottone nuova riga',
      obj: {
        t: 'J4',
        p: 'BTN',
        k: '',
      },
      style: {
        display: 'none',
      },
    },
  ],
  rows: [
    {
      cells: {
        FLD15: {
          span: {
            col: 10,
          },
          style: {
            backgroundColor: 'var(--kup-primary-color)',
            border: 'none',
            color: 'var(--kup-text-on-primary-color)',
            fontSize: 'calc(var(--kup-font-size) * 1.25)',
            textTransform: 'uppercase',
          },
          value: 'Piano terra',
        },
        FLD16: {
          data: {
            icon: 'pencil',
            label: 'Modifica',
          },
          obj: {
            t: 'J4',
            p: 'BTN',
            k: 'Modifica',
          },
          style: {
            backgroundColor: 'var(--kup-primary-color)',
            border: 'none',
            ['--kup-button-font-size']: '12px',
          },
          value: 'Modifica',
        },
        FLD17: {
          data: {
            icon: 'delete',
            label: 'Cancella',
          },
          obj: {
            t: 'J4',
            p: 'BTN',
            k: 'Cancella',
          },
          style: {
            backgroundColor: 'var(--kup-primary-color)',
            border: 'none',
            ['--kup-button-font-size']: '12px',
          },
          value: 'Cancella',
        },
        FLD18: {
          data: {
            icon: 'content_copy',
            label: 'Duplica',
          },
          obj: {
            t: 'J4',
            p: 'BTN',
            k: 'Duplica',
          },
          style: {
            backgroundColor: 'var(--kup-primary-color)',
            border: 'none',
            ['--kup-button-font-size']: '12px',
          },
          value: 'Duplica',
        },
        FLD19: {
          data: {
            icon: 'plus',
            label: 'Nuova riga',
          },
          obj: {
            t: 'J4',
            p: 'BTN',
            k: 'Nuova riga',
          },
          style: {
            backgroundColor: 'var(--kup-primary-color)',
            border: 'none',
            ['--kup-button-font-size']: '12px',
          },
          value: 'Nuova riga',
        },
      },
    },
    {
      cells: {
        FLD1: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Posizione',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD2: {
          cssClass: 'strong-text',
          value: 'Categoria',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD3: {
          cssClass: 'strong-text',
          value: 'Articolo',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD4: {
          cssClass: 'strong-text',
          value: 'Descrizione',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD5: {
          cssClass: 'strong-text',
          value: 'Stato Art.',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD6: {
          cssClass: 'strong-text',
          value: 'Descr stato',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD7: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Giac.(se 75)',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD8: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Quantità',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD9: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Prezzo',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD10: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Sconto%',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD11: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Importo',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD12: {
          cssClass: 'strong-text c-centered',
          value: 'Modifica',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD13: {
          cssClass: 'strong-text c-centered',
          value: 'Cancella',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD14: {
          cssClass: 'strong-text c-centered',
          value: 'Duplica',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '10',
          },
          value: '10',
        },
        FLD2: {
          value: 'I',
        },
        FLD3: {
          value: 'ISMA-B-FCU-HH',
        },
        FLD4: {
          value: 'Descrizione ISMA-B-FCU-HH',
        },
        FLD5: {
          value: '10',
        },
        FLD6: {
          value: 'Attivo',
        },
        FLD7: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '4',
          },
          value: '4',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '190',
          },
          value: '190',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '760',
          },
          value: '760',
        },
        FLD12: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'pencil',
          },
          data: {
            resource: 'pencil',
          },
          value: 'pencil',
        },
        FLD13: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'delete',
          },
          data: {
            resource: 'delete',
          },
          value: 'delete',
        },
        FLD14: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'content_copy',
          },
          data: {
            resource: 'content_copy',
          },
          value: 'content_copy',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '20',
          },
          value: '20',
        },
        FLD2: {
          value: 'I',
        },
        FLD3: {
          value: 'ISMA-B-LP',
        },
        FLD4: {
          value: 'Descrizione ISMA-B-LP',
        },
        FLD5: {
          value: '10',
        },
        FLD6: {
          value: 'Attivo',
        },
        FLD7: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '2',
          },
          value: '2',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '90',
          },
          value: '90',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '180',
          },
          value: '180',
        },
        FLD12: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'pencil',
          },
          data: {
            resource: 'pencil',
          },
          value: 'pencil',
        },
        FLD13: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'delete',
          },
          data: {
            resource: 'delete',
          },
          value: 'delete',
        },
        FLD14: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'content_copy',
          },
          data: {
            resource: 'content_copy',
          },
          value: 'content_copy',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '30',
          },
          value: '30',
        },
        FLD2: {
          value: 'A',
        },
        FLD3: {
          value: 'VSX13*03',
        },
        FLD4: {
          value: 'Descrizione VSX13*03',
        },
        FLD5: {
          value: '10',
        },
        FLD6: {
          value: 'Attivo',
        },
        FLD7: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '4',
          },
          value: '4',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '31',
          },
          value: '31',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '124',
          },
          value: '124',
        },
        FLD12: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'pencil',
          },
          data: {
            resource: 'pencil',
          },
          value: 'pencil',
        },
        FLD13: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'delete',
          },
          data: {
            resource: 'delete',
          },
          value: 'delete',
        },
        FLD14: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'content_copy',
          },
          data: {
            resource: 'content_copy',
          },
          value: 'content_copy',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '40',
          },
          value: '40',
        },
        FLD2: {
          value: 'A',
        },
        FLD3: {
          value: 'MVX52',
        },
        FLD4: {
          value: 'Descrizione MVX52',
        },
        FLD5: {
          value: '10',
        },
        FLD6: {
          value: 'Attivo',
        },
        FLD7: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '4',
          },
          value: '4',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '100',
          },
          value: '100',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '400',
          },
          value: '400',
        },
        FLD12: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'pencil',
          },
          data: {
            resource: 'pencil',
          },
          value: 'pencil',
        },
        FLD13: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'delete',
          },
          data: {
            resource: 'delete',
          },
          value: 'delete',
        },
        FLD14: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'content_copy',
          },
          data: {
            resource: 'content_copy',
          },
          value: 'content_copy',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '50',
          },
          value: '50',
        },
        FLD2: {
          value: 'I',
        },
        FLD3: {
          value: 'ISMA-B-8I-IP',
        },
        FLD4: {
          value: 'Descrizione ISMA-B-8I-IP',
        },
        FLD5: {
          value: '10',
        },
        FLD6: {
          value: 'Attivo',
        },
        FLD7: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '244',
          },
          value: '244',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '244',
          },
          value: '244',
        },
        FLD12: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'pencil',
          },
          data: {
            resource: 'pencil',
          },
          value: 'pencil',
        },
        FLD13: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'delete',
          },
          data: {
            resource: 'delete',
          },
          value: 'delete',
        },
        FLD14: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'content_copy',
          },
          data: {
            resource: 'content_copy',
          },
          value: 'content_copy',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '60',
          },
          value: '60',
        },
        FLD2: {
          value: 'DP',
        },
        FLD3: {
          value: 'PROGRAM-10',
        },
        FLD4: {
          value: 'Descrizione PROGRAM-10',
        },
        FLD5: {
          value: '10',
        },
        FLD6: {
          value: 'Attivo',
        },
        FLD7: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '25',
          },
          value: '25',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '100',
          },
          value: '100',
        },
        FLD12: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'pencil',
          },
          data: {
            resource: 'pencil',
          },
          value: 'pencil',
        },
        FLD13: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'delete',
          },
          data: {
            resource: 'delete',
          },
          value: 'delete',
        },
        FLD14: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'content_copy',
          },
          data: {
            resource: 'content_copy',
          },
          value: 'content_copy',
        },
      },
    },
    {
      cells: {
        FLD1: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD2: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD3: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD4: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD5: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD6: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD7: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD8: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD9: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD10: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD11: {
          cssClass: 'strong-text',
          obj: {
            t: 'NR',
            p: '',
            k: '1808',
          },
          value: '1808',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD12: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD13: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD14: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
      },
    },
    {
      cells: {
        FLD15: {
          span: {
            col: 14,
          },
          style: {
            border: 'none',
            height: '24px',
          },
          value: '',
        },
      },
    },
    {
      cells: {
        FLD15: {
          span: {
            col: 10,
          },
          style: {
            backgroundColor: 'var(--kup-primary-color)',
            border: 'none',
            color: 'var(--kup-text-on-primary-color)',
            fontSize: 'calc(var(--kup-font-size) * 1.25)',
            textTransform: 'uppercase',
          },
          value: 'Piano primo',
        },
        FLD16: {
          data: {
            icon: 'pencil',
            label: 'Modifica',
          },
          obj: {
            t: 'J4',
            p: 'BTN',
            k: 'Modifica',
          },
          style: {
            backgroundColor: 'var(--kup-primary-color)',
            border: 'none',
            ['--kup-button-font-size']: '12px',
          },
          value: 'Modifica',
        },
        FLD17: {
          data: {
            icon: 'delete',
            label: 'Cancella',
          },
          obj: {
            t: 'J4',
            p: 'BTN',
            k: 'Cancella',
          },
          style: {
            backgroundColor: 'var(--kup-primary-color)',
            border: 'none',
            ['--kup-button-font-size']: '12px',
          },
          value: 'Cancella',
        },
        FLD18: {
          data: {
            icon: 'content_copy',
            label: 'Duplica',
          },
          obj: {
            t: 'J4',
            p: 'BTN',
            k: 'Duplica',
          },
          style: {
            backgroundColor: 'var(--kup-primary-color)',
            border: 'none',
            ['--kup-button-font-size']: '12px',
          },
          value: 'Duplica',
        },
        FLD19: {
          data: {
            icon: 'plus',
            label: 'Nuova riga',
          },
          obj: {
            t: 'J4',
            p: 'BTN',
            k: 'Nuova riga',
          },
          style: {
            backgroundColor: 'var(--kup-primary-color)',
            border: 'none',
            ['--kup-button-font-size']: '12px',
          },
          value: 'Nuova riga',
        },
      },
    },
    {
      cells: {
        FLD1: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Posizione',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD2: {
          cssClass: 'strong-text',
          value: 'Categoria',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD3: {
          cssClass: 'strong-text',
          value: 'Articolo',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD4: {
          cssClass: 'strong-text',
          value: 'Descrizione',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD5: {
          cssClass: 'strong-text',
          value: 'Stato Art.',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD6: {
          cssClass: 'strong-text',
          value: 'Descr stato',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD7: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Giac.(se 75)',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD8: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Quantità',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD9: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Prezzo',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD10: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Sconto%',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD11: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Importo',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD12: {
          cssClass: 'strong-text c-centered',
          value: 'Modifica',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD13: {
          cssClass: 'strong-text c-centered',
          value: 'Cancella',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD14: {
          cssClass: 'strong-text c-centered',
          value: 'Duplica',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '10',
          },
          value: '10',
        },
        FLD2: {
          value: 'I',
        },
        FLD3: {
          value: 'ISMA-B-FCU-HH',
        },
        FLD4: {
          value: 'Descrizione ISMA-B-FCU-HH',
        },
        FLD5: {
          value: '10',
        },
        FLD6: {
          value: 'Attivo',
        },
        FLD7: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '43',
          },
          value: '43',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '190',
          },
          value: '190',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '8170',
          },
          value: '8170',
        },
        FLD12: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'pencil',
          },
          data: {
            resource: 'pencil',
          },
          value: 'pencil',
        },
        FLD13: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'delete',
          },
          data: {
            resource: 'delete',
          },
          value: 'delete',
        },
        FLD14: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'content_copy',
          },
          data: {
            resource: 'content_copy',
          },
          value: 'content_copy',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '20',
          },
          value: '20',
        },
        FLD2: {
          value: 'I',
        },
        FLD3: {
          value: 'ISMA-B-LP',
        },
        FLD4: {
          value: 'Descrizione ISMA-B-LP',
        },
        FLD5: {
          value: '10',
        },
        FLD6: {
          value: 'Attivo',
        },
        FLD7: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '39',
          },
          value: '39',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '90',
          },
          value: '90',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '3510',
          },
          value: '3510',
        },
        FLD12: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'pencil',
          },
          data: {
            resource: 'pencil',
          },
          value: 'pencil',
        },
        FLD13: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'delete',
          },
          data: {
            resource: 'delete',
          },
          value: 'delete',
        },
        FLD14: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'content_copy',
          },
          data: {
            resource: 'content_copy',
          },
          value: 'content_copy',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '30',
          },
          value: '30',
        },
        FLD2: {
          value: 'A',
        },
        FLD3: {
          value: 'VSX13*03',
        },
        FLD4: {
          value: 'Descrizione VSX13*03',
        },
        FLD5: {
          value: '10',
        },
        FLD6: {
          value: 'Attivo',
        },
        FLD7: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '43',
          },
          value: '43',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '31',
          },
          value: '31',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '1333',
          },
          value: '1333',
        },
        FLD12: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'pencil',
          },
          data: {
            resource: 'pencil',
          },
          value: 'pencil',
        },
        FLD13: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'delete',
          },
          data: {
            resource: 'delete',
          },
          value: 'delete',
        },
        FLD14: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'content_copy',
          },
          data: {
            resource: 'content_copy',
          },
          value: 'content_copy',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '40',
          },
          value: '40',
        },
        FLD2: {
          value: 'A',
        },
        FLD3: {
          value: 'MVX52',
        },
        FLD4: {
          value: 'Descrizione MVX52',
        },
        FLD5: {
          value: '10',
        },
        FLD6: {
          value: 'Attivo',
        },
        FLD7: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '43',
          },
          value: '43',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '100',
          },
          value: '100',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '4300',
          },
          value: '4300',
        },
        FLD12: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'pencil',
          },
          data: {
            resource: 'pencil',
          },
          value: 'pencil',
        },
        FLD13: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'delete',
          },
          data: {
            resource: 'delete',
          },
          value: 'delete',
        },
        FLD14: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'content_copy',
          },
          data: {
            resource: 'content_copy',
          },
          value: 'content_copy',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '50',
          },
          value: '50',
        },
        FLD2: {
          value: 'I',
        },
        FLD3: {
          value: 'ISMA-B-8I-IP',
        },
        FLD4: {
          value: 'Descrizione ISMA-B-8I-IP',
        },
        FLD5: {
          value: '10',
        },
        FLD6: {
          value: 'Attivo',
        },
        FLD7: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '244',
          },
          value: '244',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '244',
          },
          value: '244',
        },
        FLD12: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'pencil',
          },
          data: {
            resource: 'pencil',
          },
          value: 'pencil',
        },
        FLD13: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'delete',
          },
          data: {
            resource: 'delete',
          },
          value: 'delete',
        },
        FLD14: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'content_copy',
          },
          data: {
            resource: 'content_copy',
          },
          value: 'content_copy',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '60',
          },
          value: '60',
        },
        FLD2: {
          value: 'DP',
        },
        FLD3: {
          value: 'PROGRAM-5',
        },
        FLD4: {
          value: 'Descrizione PROGRAM-5',
        },
        FLD5: {
          value: '10',
        },
        FLD6: {
          value: 'Attivo',
        },
        FLD7: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '43',
          },
          value: '43',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '5',
          },
          value: '5',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '215',
          },
          value: '215',
        },
        FLD12: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'pencil',
          },
          data: {
            resource: 'pencil',
          },
          value: 'pencil',
        },
        FLD13: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'delete',
          },
          data: {
            resource: 'delete',
          },
          value: 'delete',
        },
        FLD14: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'content_copy',
          },
          data: {
            resource: 'content_copy',
          },
          value: 'content_copy',
        },
      },
    },
    {
      cells: {
        FLD1: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD2: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD3: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD4: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD5: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD6: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD7: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD8: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD9: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD10: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD11: {
          cssClass: 'strong-text',
          obj: {
            t: 'NR',
            p: '',
            k: '17772',
          },
          value: '17772',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD12: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD13: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD14: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
      },
    },
    {
      cells: {
        FLD15: {
          span: {
            col: 14,
          },
          style: {
            border: 'none',
            height: '24px',
          },
          value: '',
        },
      },
    },
    {
      cells: {
        FLD15: {
          span: {
            col: 10,
          },
          style: {
            backgroundColor: 'var(--kup-primary-color)',
            border: 'none',
            color: 'var(--kup-text-on-primary-color)',
            fontSize: 'calc(var(--kup-font-size) * 1.25)',
            textTransform: 'uppercase',
          },
          value: 'Piano secondo',
        },
        FLD16: {
          data: {
            icon: 'pencil',
            label: 'Modifica',
          },
          obj: {
            t: 'J4',
            p: 'BTN',
            k: 'Modifica',
          },
          style: {
            backgroundColor: 'var(--kup-primary-color)',
            border: 'none',
            ['--kup-button-font-size']: '12px',
          },
          value: 'Modifica',
        },
        FLD17: {
          data: {
            icon: 'delete',
            label: 'Cancella',
          },
          obj: {
            t: 'J4',
            p: 'BTN',
            k: 'Cancella',
          },
          style: {
            backgroundColor: 'var(--kup-primary-color)',
            border: 'none',
            ['--kup-button-font-size']: '12px',
          },
          value: 'Cancella',
        },
        FLD18: {
          data: {
            icon: 'content_copy',
            label: 'Duplica',
          },
          obj: {
            t: 'J4',
            p: 'BTN',
            k: 'Duplica',
          },
          style: {
            backgroundColor: 'var(--kup-primary-color)',
            border: 'none',
            ['--kup-button-font-size']: '12px',
          },
          value: 'Duplica',
        },
        FLD19: {
          data: {
            icon: 'plus',
            label: 'Nuova riga',
          },
          obj: {
            t: 'J4',
            p: 'BTN',
            k: 'Nuova riga',
          },
          style: {
            backgroundColor: 'var(--kup-primary-color)',
            border: 'none',
            ['--kup-button-font-size']: '12px',
          },
          value: 'Nuova riga',
        },
      },
    },
    {
      cells: {
        FLD1: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Posizione',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD2: {
          cssClass: 'strong-text',
          value: 'Categoria',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD3: {
          cssClass: 'strong-text',
          value: 'Articolo',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD4: {
          cssClass: 'strong-text',
          value: 'Descrizione',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD5: {
          cssClass: 'strong-text',
          value: 'Stato Art.',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD6: {
          cssClass: 'strong-text',
          value: 'Descr stato',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD7: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Giac.(se 75)',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD8: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Quantità',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD9: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Prezzo',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD10: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Sconto%',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD11: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Importo',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD12: {
          cssClass: 'strong-text c-centered',
          value: 'Modifica',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD13: {
          cssClass: 'strong-text c-centered',
          value: 'Cancella',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD14: {
          cssClass: 'strong-text c-centered',
          value: 'Duplica',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '10',
          },
          value: '10',
        },
        FLD2: {
          value: 'I',
        },
        FLD3: {
          value: 'ISMA-B-FCU-HH',
        },
        FLD4: {
          value: 'Descrizione ISMA-B-FCU-HH',
        },
        FLD5: {
          value: '10',
        },
        FLD6: {
          value: 'Attivo',
        },
        FLD7: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '43',
          },
          value: '43',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '190',
          },
          value: '190',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '8170',
          },
          value: '8170',
        },
        FLD12: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'pencil',
          },
          data: {
            resource: 'pencil',
          },
          value: 'pencil',
        },
        FLD13: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'delete',
          },
          data: {
            resource: 'delete',
          },
          value: 'delete',
        },
        FLD14: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'content_copy',
          },
          data: {
            resource: 'content_copy',
          },
          value: 'content_copy',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '20',
          },
          value: '20',
        },
        FLD2: {
          value: 'I',
        },
        FLD3: {
          value: 'ISMA-B-LP',
        },
        FLD4: {
          value: 'Descrizione ISMA-B-LP',
        },
        FLD5: {
          value: '10',
        },
        FLD6: {
          value: 'Attivo',
        },
        FLD7: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '39',
          },
          value: '39',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '90',
          },
          value: '90',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '3510',
          },
          value: '3510',
        },
        FLD12: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'pencil',
          },
          data: {
            resource: 'pencil',
          },
          value: 'pencil',
        },
        FLD13: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'delete',
          },
          data: {
            resource: 'delete',
          },
          value: 'delete',
        },
        FLD14: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'content_copy',
          },
          data: {
            resource: 'content_copy',
          },
          value: 'content_copy',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '30',
          },
          value: '30',
        },
        FLD2: {
          value: 'A',
        },
        FLD3: {
          value: 'VSX13*03',
        },
        FLD4: {
          value: 'Descrizione VSX13*03',
        },
        FLD5: {
          value: '10',
        },
        FLD6: {
          value: 'Attivo',
        },
        FLD7: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '43',
          },
          value: '43',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '31',
          },
          value: '31',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '1333',
          },
          value: '1333',
        },
        FLD12: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'pencil',
          },
          data: {
            resource: 'pencil',
          },
          value: 'pencil',
        },
        FLD13: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'delete',
          },
          data: {
            resource: 'delete',
          },
          value: 'delete',
        },
        FLD14: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'content_copy',
          },
          data: {
            resource: 'content_copy',
          },
          value: 'content_copy',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '40',
          },
          value: '40',
        },
        FLD2: {
          value: 'A',
        },
        FLD3: {
          value: 'MVX52',
        },
        FLD4: {
          value: 'Descrizione MVX52',
        },
        FLD5: {
          value: '10',
        },
        FLD6: {
          value: 'Attivo',
        },
        FLD7: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '43',
          },
          value: '43',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '100',
          },
          value: '100',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '4300',
          },
          value: '4300',
        },
        FLD12: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'pencil',
          },
          data: {
            resource: 'pencil',
          },
          value: 'pencil',
        },
        FLD13: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'delete',
          },
          data: {
            resource: 'delete',
          },
          value: 'delete',
        },
        FLD14: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'content_copy',
          },
          data: {
            resource: 'content_copy',
          },
          value: 'content_copy',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '50',
          },
          value: '50',
        },
        FLD2: {
          value: 'I',
        },
        FLD3: {
          value: 'ISMA-B-8I-IP',
        },
        FLD4: {
          value: 'Descrizione ISMA-B-8I-IP',
        },
        FLD5: {
          value: '10',
        },
        FLD6: {
          value: 'Attivo',
        },
        FLD7: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '244',
          },
          value: '244',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '244',
          },
          value: '244',
        },
        FLD12: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'pencil',
          },
          data: {
            resource: 'pencil',
          },
          value: 'pencil',
        },
        FLD13: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'delete',
          },
          data: {
            resource: 'delete',
          },
          value: 'delete',
        },
        FLD14: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'content_copy',
          },
          data: {
            resource: 'content_copy',
          },
          value: 'content_copy',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'NR',
            p: '',
            k: '60',
          },
          value: '60',
        },
        FLD2: {
          value: 'DP',
        },
        FLD3: {
          value: 'PROGRAM-5',
        },
        FLD4: {
          value: 'Descrizione PROGRAM-5',
        },
        FLD5: {
          value: '10',
        },
        FLD6: {
          value: 'Attivo',
        },
        FLD7: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '43',
          },
          value: '43',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '5',
          },
          value: '5',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '215',
          },
          value: '215',
        },
        FLD12: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'pencil',
          },
          data: {
            resource: 'pencil',
          },
          value: 'pencil',
        },
        FLD13: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'delete',
          },
          data: {
            resource: 'delete',
          },
          value: 'delete',
        },
        FLD14: {
          cssClass: 'clickable',
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'content_copy',
          },
          data: {
            resource: 'content_copy',
          },
          value: 'content_copy',
        },
      },
    },
    {
      cells: {
        FLD1: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD2: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD3: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD4: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD5: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD6: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD7: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD8: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD9: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD10: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD11: {
          cssClass: 'strong-text',
          obj: {
            t: 'NR',
            p: '',
            k: '17772',
          },
          value: '17772',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD12: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD13: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD14: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
      },
    },
    {
      cells: {
        FLD15: {
          span: {
            col: 14,
          },
          style: {
            border: 'none',
            height: '24px',
          },
          value: '',
        },
      },
    },
  ],
};

export const reportDatatable3 = {
  columns: [
    {
      name: 'FLD1',
      title: 'Opzioni',
    },
    {
      name: 'FLD2',
      title: 'Posizione',
    },
    {
      name: 'FLD3',
      title: 'Categoria',
    },
    {
      name: 'FLD4',
      title: 'Articolo',
    },
    {
      name: 'FLD5',
      title: 'Descrizione',
    },
    {
      name: 'FLD6',
      title: 'Stato Art.',
    },
    {
      name: 'FLD7',
      title: 'Descr stato',
    },
    {
      name: 'FLD8',
      title: 'Giac.(se 75)',
    },
    {
      name: 'FLD9',
      title: 'Quantità',
    },
    {
      name: 'FLD10',
      title: 'Prezzo',
      decimals: 2,
    },
    {
      name: 'FLD11',
      title: 'Sconto%',
    },
    {
      name: 'FLD12',
      title: 'Importo',
      decimals: 2,
    },
    {
      cssClass: 'strong-text',
      name: 'FLD13',
      title: 'Intestazione',
      style: {
        display: 'none',
      },
    },
  ],
  rows: [
    {
      cells: {
        FLD1: {
          data: {
            data: [
              {
                children: [
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'pencil',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Modifica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'content_copy',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Duplica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'delete',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Elimina',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'plus',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Nuova riga',
                  },
                ],
                data: {
                  dropdownOnly: true,
                  icon: 'more_vert',
                },
                disabled: false,
                expandable: false,
                isExpanded: false,
                options: false,
              },
            ],
            customStyle:
              ' #kup-component button { height: 100%; padding: 0; } ',
            icon: 'more_vert',
            styling: 'icon',
          },
          obj: {
            t: 'VO',
            p: 'CODVER',
            k: 'Modifica',
          },
          shape: 'BTN',
          style: {
            backgroundColor: 'var(--kup-primary-color)',
            border: 'none',
            ['--kup-button-font-size']: 'calc(var(--kup-font-size) * 1.25)',
            ['--kup-button-primary-color']: 'var(--kup-text-on-primary-color)',
            ['--kup-button-primary-color-rgb']:
              'var(--kup-text-on-primary-color-rgb)',
          },
          value: '',
        },
        FLD13: {
          span: {
            col: 11,
          },
          style: {
            backgroundColor: 'var(--kup-primary-color)',
            border: 'none',
            color: 'var(--kup-text-on-primary-color)',
            fontSize: 'calc(var(--kup-font-size) * 1.25)',
            textTransform: 'uppercase',
          },
          value: 'Piano terra',
        },
      },
    },
    {
      cells: {
        FLD1: {
          cssClass: 'strong-text c-centered',
          value: 'Op',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD2: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Posizione',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD3: {
          cssClass: 'strong-text',
          value: 'Categoria',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD4: {
          cssClass: 'strong-text',
          value: 'Articolo',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD5: {
          cssClass: 'strong-text',
          value: 'Descrizione',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD6: {
          cssClass: 'strong-text',
          value: 'Stato Art.',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD7: {
          cssClass: 'strong-text',
          value: 'Descr stato',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD8: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Giac.(se 75)',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD9: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Quantità',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD10: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Prezzo',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD11: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Sconto%',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD12: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Importo',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
      },
    },
    {
      cells: {
        FLD1: {
          cssClass: 'strong-text',
          data: {
            data: [
              {
                children: [
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'pencil',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Modifica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'content_copy',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Duplica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'delete',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Elimina',
                  },
                ],
                data: {
                  dropdownOnly: true,
                },
                disabled: false,
                expandable: false,
                isExpanded: false,
                options: false,
              },
            ],
            customStyle: ' #kup-component button { padding: 0; } ',
            icon: 'more_vert',
            className: 'kup-slim',
            styling: 'icon',
          },
          isEditable: false,
          obj: {
            k: '000050',
            p: 'COD_VER',
            t: 'VO',
          },
          shape: 'BTN',
          value: '',
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
          value: 'I',
        },
        FLD4: {
          value: 'ISMA-B-FCU-HH',
        },
        FLD5: {
          value: 'Descrizione ISMA-B-FCU-HH',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '4',
          },
          value: '4',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '190',
          },
          value: '190',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '760',
          },
          value: '760',
        },
      },
    },
    {
      cells: {
        FLD1: {
          cssClass: 'strong-text',
          data: {
            data: [
              {
                children: [
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'pencil',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Modifica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'content_copy',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Duplica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'delete',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Elimina',
                  },
                ],
                data: {
                  dropdownOnly: true,
                },
                disabled: false,
                expandable: false,
                isExpanded: false,
                options: false,
              },
            ],
            customStyle: ' #kup-component button { padding: 0; } ',
            icon: 'more_vert',
            className: 'kup-slim',
            styling: 'icon',
          },
          isEditable: false,
          obj: {
            k: '000050',
            p: 'COD_VER',
            t: 'VO',
          },
          shape: 'BTN',
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '20',
          },
          value: '20',
        },
        FLD3: {
          value: 'I',
        },
        FLD4: {
          value: 'ISMA-B-LP',
        },
        FLD5: {
          value: 'Descrizione ISMA-B-LP',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '2',
          },
          value: '2',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '90',
          },
          value: '90',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '180',
          },
          value: '180',
        },
      },
    },
    {
      cells: {
        FLD1: {
          cssClass: 'strong-text',
          data: {
            data: [
              {
                children: [
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'pencil',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Modifica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'content_copy',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Duplica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'delete',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Elimina',
                  },
                ],
                data: {
                  dropdownOnly: true,
                },
                disabled: false,
                expandable: false,
                isExpanded: false,
                options: false,
              },
            ],
            customStyle: ' #kup-component button { padding: 0; } ',
            icon: 'more_vert',
            className: 'kup-slim',
            styling: 'icon',
          },
          isEditable: false,
          obj: {
            k: '000050',
            p: 'COD_VER',
            t: 'VO',
          },
          shape: 'BTN',
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '30',
          },
          value: '30',
        },
        FLD3: {
          value: 'A',
        },
        FLD4: {
          value: 'VSX13*03',
        },
        FLD5: {
          value: 'Descrizione VSX13*03',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '4',
          },
          value: '4',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '31',
          },
          value: '31',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '124',
          },
          value: '124',
        },
      },
    },
    {
      cells: {
        FLD1: {
          cssClass: 'strong-text',
          data: {
            data: [
              {
                children: [
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'pencil',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Modifica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'content_copy',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Duplica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'delete',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Elimina',
                  },
                ],
                data: {
                  dropdownOnly: true,
                },
                disabled: false,
                expandable: false,
                isExpanded: false,
                options: false,
              },
            ],
            customStyle: ' #kup-component button { padding: 0; } ',
            icon: 'more_vert',
            className: 'kup-slim',
            styling: 'icon',
          },
          isEditable: false,
          obj: {
            k: '000050',
            p: 'COD_VER',
            t: 'VO',
          },
          shape: 'BTN',
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '40',
          },
          value: '40',
        },
        FLD3: {
          value: 'A',
        },
        FLD4: {
          value: 'MVX52',
        },
        FLD5: {
          value: 'Descrizione MVX52',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '4',
          },
          value: '4',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '100',
          },
          value: '100',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '400',
          },
          value: '400',
        },
      },
    },
    {
      cells: {
        FLD1: {
          cssClass: 'strong-text',
          data: {
            data: [
              {
                children: [
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'pencil',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Modifica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'content_copy',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Duplica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'delete',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Elimina',
                  },
                ],
                data: {
                  dropdownOnly: true,
                },
                disabled: false,
                expandable: false,
                isExpanded: false,
                options: false,
              },
            ],
            customStyle: ' #kup-component button { padding: 0; } ',
            icon: 'more_vert',
            className: 'kup-slim',
            styling: 'icon',
          },
          isEditable: false,
          obj: {
            k: '000050',
            p: 'COD_VER',
            t: 'VO',
          },
          shape: 'BTN',
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '50',
          },
          value: '50',
        },
        FLD3: {
          value: 'I',
        },
        FLD4: {
          value: 'ISMA-B-8I-IP',
        },
        FLD5: {
          value: 'Descrizione ISMA-B-8I-IP',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '244',
          },
          value: '244',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '244',
          },
          value: '244',
        },
      },
    },
    {
      cells: {
        FLD1: {
          cssClass: 'strong-text',
          data: {
            data: [
              {
                children: [
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'pencil',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Modifica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'content_copy',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Duplica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'delete',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Elimina',
                  },
                ],
                data: {
                  dropdownOnly: true,
                },
                disabled: false,
                expandable: false,
                isExpanded: false,
                options: false,
              },
            ],
            customStyle: ' #kup-component button { padding: 0; } ',
            icon: 'more_vert',
            className: 'kup-slim',
            styling: 'icon',
          },
          isEditable: false,
          obj: {
            k: '000050',
            p: 'COD_VER',
            t: 'VO',
          },
          shape: 'BTN',
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '60',
          },
          value: '60',
        },
        FLD3: {
          value: 'DP',
        },
        FLD4: {
          value: 'PROGRAM-10',
        },
        FLD5: {
          value: 'Descrizione PROGRAM-10',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '25',
          },
          value: '25',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '100',
          },
          value: '100',
        },
      },
    },
    {
      cells: {
        FLD1: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD2: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD3: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD4: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD5: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD6: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD7: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD8: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD9: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD10: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD11: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD12: {
          cssClass: 'strong-text',
          obj: {
            t: 'NR',
            p: '',
            k: '1808',
          },
          value: '1808',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
      },
    },
    {
      cells: {
        FLD13: {
          span: {
            col: 12,
          },
          style: {
            border: 'none',
            height: '24px',
          },
          value: '',
        },
      },
    },
    {
      cells: {
        FLD1: {
          data: {
            data: [
              {
                children: [
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'pencil',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Modifica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'content_copy',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Duplica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'delete',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Elimina',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'plus',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Nuova riga',
                  },
                ],
                data: {
                  dropdownOnly: true,
                  icon: 'more_vert',
                },
                disabled: false,
                expandable: false,
                isExpanded: false,
                options: false,
              },
            ],
            customStyle:
              ' #kup-component button { height: 100%; padding: 0; } ',
            icon: 'more_vert',
            styling: 'icon',
          },
          obj: {
            t: 'VO',
            p: 'CODVER',
            k: 'Modifica',
          },
          shape: 'BTN',
          style: {
            backgroundColor: 'var(--kup-primary-color)',
            border: 'none',
            ['--kup-button-font-size']: 'calc(var(--kup-font-size) * 1.25)',
            ['--kup-button-primary-color']: 'var(--kup-text-on-primary-color)',
            ['--kup-button-primary-color-rgb']:
              'var(--kup-text-on-primary-color-rgb)',
          },
          value: '',
        },
        FLD13: {
          span: {
            col: 11,
          },
          style: {
            backgroundColor: 'var(--kup-primary-color)',
            border: 'none',
            color: 'var(--kup-text-on-primary-color)',
            fontSize: 'calc(var(--kup-font-size) * 1.25)',
            textTransform: 'uppercase',
          },
          value: 'Piano primo',
        },
      },
    },
    {
      cells: {
        FLD1: {
          cssClass: 'strong-text c-centered',
          value: 'Op',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD2: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Posizione',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD3: {
          cssClass: 'strong-text',
          value: 'Categoria',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD4: {
          cssClass: 'strong-text',
          value: 'Articolo',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD5: {
          cssClass: 'strong-text',
          value: 'Descrizione',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD6: {
          cssClass: 'strong-text',
          value: 'Stato Art.',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD7: {
          cssClass: 'strong-text',
          value: 'Descr stato',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD8: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Giac.(se 75)',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD9: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Quantità',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD10: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Prezzo',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD11: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Sconto%',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD12: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Importo',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
      },
    },
    {
      cells: {
        FLD1: {
          cssClass: 'strong-text',
          data: {
            data: [
              {
                children: [
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'pencil',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Modifica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'content_copy',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Duplica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'delete',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Elimina',
                  },
                ],
                data: {
                  dropdownOnly: true,
                },
                disabled: false,
                expandable: false,
                isExpanded: false,
                options: false,
              },
            ],
            customStyle: ' #kup-component button { padding: 0; } ',
            icon: 'more_vert',
            className: 'kup-slim',
            styling: 'icon',
          },
          isEditable: false,
          obj: {
            k: '000050',
            p: 'COD_VER',
            t: 'VO',
          },
          shape: 'BTN',
          value: '',
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
          value: 'I',
        },
        FLD4: {
          value: 'ISMA-B-FCU-HH',
        },
        FLD5: {
          value: 'Descrizione ISMA-B-FCU-HH',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '43',
          },
          value: '43',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '190',
          },
          value: '190',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '8170',
          },
          value: '8170',
        },
      },
    },
    {
      cells: {
        FLD1: {
          cssClass: 'strong-text',
          data: {
            data: [
              {
                children: [
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'pencil',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Modifica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'content_copy',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Duplica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'delete',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Elimina',
                  },
                ],
                data: {
                  dropdownOnly: true,
                },
                disabled: false,
                expandable: false,
                isExpanded: false,
                options: false,
              },
            ],
            customStyle: ' #kup-component button { padding: 0; } ',
            icon: 'more_vert',
            className: 'kup-slim',
            styling: 'icon',
          },
          isEditable: false,
          obj: {
            k: '000050',
            p: 'COD_VER',
            t: 'VO',
          },
          shape: 'BTN',
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '20',
          },
          value: '20',
        },
        FLD3: {
          value: 'I',
        },
        FLD4: {
          value: 'ISMA-B-LP',
        },
        FLD5: {
          value: 'Descrizione ISMA-B-LP',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '39',
          },
          value: '39',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '90',
          },
          value: '90',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '3510',
          },
          value: '3510',
        },
      },
    },
    {
      cells: {
        FLD1: {
          cssClass: 'strong-text',
          data: {
            data: [
              {
                children: [
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'pencil',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Modifica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'content_copy',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Duplica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'delete',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Elimina',
                  },
                ],
                data: {
                  dropdownOnly: true,
                },
                disabled: false,
                expandable: false,
                isExpanded: false,
                options: false,
              },
            ],
            customStyle: ' #kup-component button { padding: 0; } ',
            icon: 'more_vert',
            className: 'kup-slim',
            styling: 'icon',
          },
          isEditable: false,
          obj: {
            k: '000050',
            p: 'COD_VER',
            t: 'VO',
          },
          shape: 'BTN',
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '30',
          },
          value: '30',
        },
        FLD3: {
          value: 'A',
        },
        FLD4: {
          value: 'VSX13*03',
        },
        FLD5: {
          value: 'Descrizione VSX13*03',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '43',
          },
          value: '43',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '31',
          },
          value: '31',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '1333',
          },
          value: '1333',
        },
      },
    },
    {
      cells: {
        FLD1: {
          cssClass: 'strong-text',
          data: {
            data: [
              {
                children: [
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'pencil',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Modifica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'content_copy',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Duplica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'delete',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Elimina',
                  },
                ],
                data: {
                  dropdownOnly: true,
                },
                disabled: false,
                expandable: false,
                isExpanded: false,
                options: false,
              },
            ],
            customStyle: ' #kup-component button { padding: 0; } ',
            icon: 'more_vert',
            className: 'kup-slim',
            styling: 'icon',
          },
          isEditable: false,
          obj: {
            k: '000050',
            p: 'COD_VER',
            t: 'VO',
          },
          shape: 'BTN',
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '40',
          },
          value: '40',
        },
        FLD3: {
          value: 'A',
        },
        FLD4: {
          value: 'MVX52',
        },
        FLD5: {
          value: 'Descrizione MVX52',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '43',
          },
          value: '43',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '100',
          },
          value: '100',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '4300',
          },
          value: '4300',
        },
      },
    },
    {
      cells: {
        FLD1: {
          cssClass: 'strong-text',
          data: {
            data: [
              {
                children: [
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'pencil',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Modifica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'content_copy',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Duplica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'delete',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Elimina',
                  },
                ],
                data: {
                  dropdownOnly: true,
                },
                disabled: false,
                expandable: false,
                isExpanded: false,
                options: false,
              },
            ],
            customStyle: ' #kup-component button { padding: 0; } ',
            icon: 'more_vert',
            className: 'kup-slim',
            styling: 'icon',
          },
          isEditable: false,
          obj: {
            k: '000050',
            p: 'COD_VER',
            t: 'VO',
          },
          shape: 'BTN',
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '50',
          },
          value: '50',
        },
        FLD3: {
          value: 'I',
        },
        FLD4: {
          value: 'ISMA-B-8I-IP',
        },
        FLD5: {
          value: 'Descrizione ISMA-B-8I-IP',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '244',
          },
          value: '244',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '244',
          },
          value: '244',
        },
      },
    },
    {
      cells: {
        FLD1: {
          cssClass: 'strong-text',
          data: {
            data: [
              {
                children: [
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'pencil',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Modifica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'content_copy',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Duplica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'delete',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Elimina',
                  },
                ],
                data: {
                  dropdownOnly: true,
                },
                disabled: false,
                expandable: false,
                isExpanded: false,
                options: false,
              },
            ],
            customStyle: ' #kup-component button { padding: 0; } ',
            icon: 'more_vert',
            className: 'kup-slim',
            styling: 'icon',
          },
          isEditable: false,
          obj: {
            k: '000050',
            p: 'COD_VER',
            t: 'VO',
          },
          shape: 'BTN',
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '60',
          },
          value: '60',
        },
        FLD3: {
          value: 'DP',
        },
        FLD4: {
          value: 'PROGRAM-5',
        },
        FLD5: {
          value: 'Descrizione PROGRAM-5',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '43',
          },
          value: '43',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '5',
          },
          value: '5',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '215',
          },
          value: '215',
        },
      },
    },
    {
      cells: {
        FLD1: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD2: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD3: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD4: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD5: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD6: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD7: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD8: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD9: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD10: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD11: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD12: {
          cssClass: 'strong-text',
          obj: {
            t: 'NR',
            p: '',
            k: '17772',
          },
          value: '17772',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
      },
    },
    {
      cells: {
        FLD13: {
          span: {
            col: 12,
          },
          style: {
            border: 'none',
            height: '24px',
          },
          value: '',
        },
      },
    },
    {
      cells: {
        FLD1: {
          data: {
            data: [
              {
                children: [
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'pencil',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Modifica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'content_copy',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Duplica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'delete',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Elimina',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'plus',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Nuova riga',
                  },
                ],
                data: {
                  dropdownOnly: true,
                  icon: 'more_vert',
                },
                disabled: false,
                expandable: false,
                isExpanded: false,
                options: false,
              },
            ],
            customStyle:
              ' #kup-component button { height: 100%; padding: 0; } ',
            icon: 'more_vert',
            styling: 'icon',
          },
          obj: {
            t: 'VO',
            p: 'CODVER',
            k: 'Modifica',
          },
          shape: 'BTN',
          style: {
            backgroundColor: 'var(--kup-primary-color)',
            border: 'none',
            ['--kup-button-font-size']: 'calc(var(--kup-font-size) * 1.25)',
            ['--kup-button-primary-color']: 'var(--kup-text-on-primary-color)',
            ['--kup-button-primary-color-rgb']:
              'var(--kup-text-on-primary-color-rgb)',
          },
          value: '',
        },
        FLD13: {
          span: {
            col: 11,
          },
          style: {
            backgroundColor: 'var(--kup-primary-color)',
            border: 'none',
            color: 'var(--kup-text-on-primary-color)',
            fontSize: 'calc(var(--kup-font-size) * 1.25)',
            textTransform: 'uppercase',
          },
          value: 'Piano secondo',
        },
      },
    },
    {
      cells: {
        FLD1: {
          cssClass: 'strong-text c-centered',
          value: 'Op',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD2: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Posizione',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD3: {
          cssClass: 'strong-text',
          value: 'Categoria',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD4: {
          cssClass: 'strong-text',
          value: 'Articolo',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD5: {
          cssClass: 'strong-text',
          value: 'Descrizione',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD6: {
          cssClass: 'strong-text',
          value: 'Stato Art.',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD7: {
          cssClass: 'strong-text',
          value: 'Descr stato',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD8: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Giac.(se 75)',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD9: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Quantità',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD10: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Prezzo',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD11: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Sconto%',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD12: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Importo',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
      },
    },
    {
      cells: {
        FLD1: {
          cssClass: 'strong-text',
          data: {
            data: [
              {
                children: [
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'pencil',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Modifica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'content_copy',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Duplica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'delete',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Elimina',
                  },
                ],
                data: {
                  dropdownOnly: true,
                },
                disabled: false,
                expandable: false,
                isExpanded: false,
                options: false,
              },
            ],
            customStyle: ' #kup-component button { padding: 0; } ',
            icon: 'more_vert',
            className: 'kup-slim',
            styling: 'icon',
          },
          isEditable: false,
          obj: {
            k: '000050',
            p: 'COD_VER',
            t: 'VO',
          },
          shape: 'BTN',
          value: '',
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
          value: 'I',
        },
        FLD4: {
          value: 'ISMA-B-FCU-HH',
        },
        FLD5: {
          value: 'Descrizione ISMA-B-FCU-HH',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '43',
          },
          value: '43',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '190',
          },
          value: '190',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '8170',
          },
          value: '8170',
        },
      },
    },
    {
      cells: {
        FLD1: {
          cssClass: 'strong-text',
          data: {
            data: [
              {
                children: [
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'pencil',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Modifica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'content_copy',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Duplica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'delete',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Elimina',
                  },
                ],
                data: {
                  dropdownOnly: true,
                },
                disabled: false,
                expandable: false,
                isExpanded: false,
                options: false,
              },
            ],
            customStyle: ' #kup-component button { padding: 0; } ',
            icon: 'more_vert',
            className: 'kup-slim',
            styling: 'icon',
          },
          isEditable: false,
          obj: {
            k: '000050',
            p: 'COD_VER',
            t: 'VO',
          },
          shape: 'BTN',
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '20',
          },
          value: '20',
        },
        FLD3: {
          value: 'I',
        },
        FLD4: {
          value: 'ISMA-B-LP',
        },
        FLD5: {
          value: 'Descrizione ISMA-B-LP',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '39',
          },
          value: '39',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '90',
          },
          value: '90',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '3510',
          },
          value: '3510',
        },
      },
    },
    {
      cells: {
        FLD1: {
          cssClass: 'strong-text',
          data: {
            data: [
              {
                children: [
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'pencil',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Modifica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'content_copy',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Duplica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'delete',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Elimina',
                  },
                ],
                data: {
                  dropdownOnly: true,
                },
                disabled: false,
                expandable: false,
                isExpanded: false,
                options: false,
              },
            ],
            customStyle: ' #kup-component button { padding: 0; } ',
            icon: 'more_vert',
            className: 'kup-slim',
            styling: 'icon',
          },
          isEditable: false,
          obj: {
            k: '000050',
            p: 'COD_VER',
            t: 'VO',
          },
          shape: 'BTN',
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '30',
          },
          value: '30',
        },
        FLD3: {
          value: 'A',
        },
        FLD4: {
          value: 'VSX13*03',
        },
        FLD5: {
          value: 'Descrizione VSX13*03',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '43',
          },
          value: '43',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '31',
          },
          value: '31',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '1333',
          },
          value: '1333',
        },
      },
    },
    {
      cells: {
        FLD1: {
          cssClass: 'strong-text',
          data: {
            data: [
              {
                children: [
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'pencil',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Modifica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'content_copy',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Duplica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'delete',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Elimina',
                  },
                ],
                data: {
                  dropdownOnly: true,
                },
                disabled: false,
                expandable: false,
                isExpanded: false,
                options: false,
              },
            ],
            customStyle: ' #kup-component button { padding: 0; } ',
            icon: 'more_vert',
            className: 'kup-slim',
            styling: 'icon',
          },
          isEditable: false,
          obj: {
            k: '000050',
            p: 'COD_VER',
            t: 'VO',
          },
          shape: 'BTN',
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '40',
          },
          value: '40',
        },
        FLD3: {
          value: 'A',
        },
        FLD4: {
          value: 'MVX52',
        },
        FLD5: {
          value: 'Descrizione MVX52',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '43',
          },
          value: '43',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '100',
          },
          value: '100',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '4300',
          },
          value: '4300',
        },
      },
    },
    {
      cells: {
        FLD1: {
          cssClass: 'strong-text',
          data: {
            data: [
              {
                children: [
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'pencil',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Modifica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'content_copy',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Duplica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'delete',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Elimina',
                  },
                ],
                data: {
                  dropdownOnly: true,
                },
                disabled: false,
                expandable: false,
                isExpanded: false,
                options: false,
              },
            ],
            customStyle: ' #kup-component button { padding: 0; } ',
            icon: 'more_vert',
            className: 'kup-slim',
            styling: 'icon',
          },
          isEditable: false,
          obj: {
            k: '000050',
            p: 'COD_VER',
            t: 'VO',
          },
          shape: 'BTN',
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '50',
          },
          value: '50',
        },
        FLD3: {
          value: 'I',
        },
        FLD4: {
          value: 'ISMA-B-8I-IP',
        },
        FLD5: {
          value: 'Descrizione ISMA-B-8I-IP',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '244',
          },
          value: '244',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '244',
          },
          value: '244',
        },
      },
    },
    {
      cells: {
        FLD1: {
          cssClass: 'strong-text',
          data: {
            data: [
              {
                children: [
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'pencil',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Modifica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'content_copy',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Duplica',
                  },
                  {
                    children: [],
                    disabled: false,
                    expandable: false,
                    icon: 'delete',
                    isExpanded: false,
                    obj: {
                      k: '000050',
                      p: 'COD_VER',
                      t: 'VO',
                    },
                    options: false,
                    value: 'Elimina',
                  },
                ],
                data: {
                  dropdownOnly: true,
                },
                disabled: false,
                expandable: false,
                isExpanded: false,
                options: false,
              },
            ],
            customStyle: ' #kup-component button { padding: 0; } ',
            icon: 'more_vert',
            className: 'kup-slim',
            styling: 'icon',
          },
          isEditable: false,
          obj: {
            k: '000050',
            p: 'COD_VER',
            t: 'VO',
          },
          shape: 'BTN',
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '60',
          },
          value: '60',
        },
        FLD3: {
          value: 'DP',
        },
        FLD4: {
          value: 'PROGRAM-5',
        },
        FLD5: {
          value: 'Descrizione PROGRAM-5',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '43',
          },
          value: '43',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '5',
          },
          value: '5',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '215',
          },
          value: '215',
        },
      },
    },
    {
      cells: {
        FLD1: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD2: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD3: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD4: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD5: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD6: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD7: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD8: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD9: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD10: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD11: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD12: {
          cssClass: 'strong-text',
          obj: {
            t: 'NR',
            p: '',
            k: '17772',
          },
          value: '17772',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
      },
    },
    {
      cells: {
        FLD13: {
          span: {
            col: 12,
          },
          style: {
            border: 'none',
            height: '24px',
          },
          value: '',
        },
      },
    },
  ],
};

export const reportDatatable4 = {
  columns: [
    {
      name: 'FLD1',
      title: 'Opzioni',
    },
    {
      name: 'FLD2',
      title: 'Posizione',
    },
    {
      name: 'FLD3',
      title: 'Categoria',
    },
    {
      name: 'FLD4',
      title: 'Articolo',
    },
    {
      name: 'FLD5',
      title: 'Descrizione',
    },
    {
      name: 'FLD6',
      title: 'Stato Art.',
    },
    {
      name: 'FLD7',
      title: 'Descr stato',
    },
    {
      name: 'FLD8',
      title: 'Giac.(se 75)',
    },
    {
      name: 'FLD9',
      title: 'Quantità',
    },
    {
      name: 'FLD10',
      title: 'Prezzo',
      decimals: 2,
    },
    {
      name: 'FLD11',
      title: 'Sconto%',
    },
    {
      name: 'FLD12',
      title: 'Importo',
      decimals: 2,
    },
    {
      cssClass: 'strong-text',
      name: 'FLD13',
      title: 'Intestazione',
      style: {
        display: 'none',
      },
    },
  ],
  rows: [
    {
      cells: {
        FLD1: {
          style: {
            backgroundColor: 'var(--kup-primary-color)',
            border: 'none',
            ['--kup-textfield-background-color']: 'var(--kup-primary-color)',
            ['--kup-textfield-primary-color']:
              'var(--kup-text-on-primary-color)',
            ['--kup-textfield-color']: 'var(--kup-text-on-primary-color)',
            ['--kup-textfield-color-rgb']:
              'var(--kup-text-on-primary-color-rgb)',
            ['--kup-textfield-primary-color-rgb']:
              'var(--kup-text-on-primary-color-rgb)',
            width: '50px',
          },
          isEditable: true,
          value: '',
        },
        FLD13: {
          span: {
            col: 11,
          },
          style: {
            backgroundColor: 'var(--kup-primary-color)',
            border: 'none',
            color: 'var(--kup-text-on-primary-color)',
            fontSize: 'calc(var(--kup-font-size) * 1.25)',
            textTransform: 'uppercase',
          },
          value: 'Piano terra',
        },
      },
    },
    {
      cells: {
        FLD1: {
          cssClass: 'strong-text c-centered',
          value: 'Op',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD2: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Posizione',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD3: {
          cssClass: 'strong-text',
          value: 'Categoria',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD4: {
          cssClass: 'strong-text',
          value: 'Articolo',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD5: {
          cssClass: 'strong-text',
          value: 'Descrizione',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD6: {
          cssClass: 'strong-text',
          value: 'Stato Art.',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD7: {
          cssClass: 'strong-text',
          value: 'Descr stato',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD8: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Giac.(se 75)',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD9: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Quantità',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD10: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Prezzo',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD11: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Sconto%',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD12: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Importo',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
      },
    },
    {
      cells: {
        FLD1: {
          style: {
            width: '50px',
          },
          isEditable: true,
          value: '',
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
          value: 'I',
        },
        FLD4: {
          value: 'ISMA-B-FCU-HH',
        },
        FLD5: {
          value: 'Descrizione ISMA-B-FCU-HH',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '4',
          },
          value: '4',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '190',
          },
          value: '190',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '760',
          },
          value: '760',
        },
      },
    },
    {
      cells: {
        FLD1: {
          style: {
            width: '50px',
          },
          isEditable: true,
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '20',
          },
          value: '20',
        },
        FLD3: {
          value: 'I',
        },
        FLD4: {
          value: 'ISMA-B-LP',
        },
        FLD5: {
          value: 'Descrizione ISMA-B-LP',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '2',
          },
          value: '2',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '90',
          },
          value: '90',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '180',
          },
          value: '180',
        },
      },
    },
    {
      cells: {
        FLD1: {
          style: {
            width: '50px',
          },
          isEditable: true,
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '30',
          },
          value: '30',
        },
        FLD3: {
          value: 'A',
        },
        FLD4: {
          value: 'VSX13*03',
        },
        FLD5: {
          value: 'Descrizione VSX13*03',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '4',
          },
          value: '4',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '31',
          },
          value: '31',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '124',
          },
          value: '124',
        },
      },
    },
    {
      cells: {
        FLD1: {
          style: {
            width: '50px',
          },
          isEditable: true,
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '40',
          },
          value: '40',
        },
        FLD3: {
          value: 'A',
        },
        FLD4: {
          value: 'MVX52',
        },
        FLD5: {
          value: 'Descrizione MVX52',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '4',
          },
          value: '4',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '100',
          },
          value: '100',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '400',
          },
          value: '400',
        },
      },
    },
    {
      cells: {
        FLD1: {
          style: {
            width: '50px',
          },
          isEditable: true,
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '50',
          },
          value: '50',
        },
        FLD3: {
          value: 'I',
        },
        FLD4: {
          value: 'ISMA-B-8I-IP',
        },
        FLD5: {
          value: 'Descrizione ISMA-B-8I-IP',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '244',
          },
          value: '244',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '244',
          },
          value: '244',
        },
      },
    },
    {
      cells: {
        FLD1: {
          style: {
            width: '50px',
          },
          isEditable: true,
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '60',
          },
          value: '60',
        },
        FLD3: {
          value: 'DP',
        },
        FLD4: {
          value: 'PROGRAM-10',
        },
        FLD5: {
          value: 'Descrizione PROGRAM-10',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '25',
          },
          value: '25',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '100',
          },
          value: '100',
        },
      },
    },
    {
      cells: {
        FLD1: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD2: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD3: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD4: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD5: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD6: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD7: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD8: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD9: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD10: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD11: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD12: {
          cssClass: 'strong-text',
          obj: {
            t: 'NR',
            p: '',
            k: '1808',
          },
          value: '1808',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
      },
    },
    {
      cells: {
        FLD13: {
          span: {
            col: 12,
          },
          style: {
            border: 'none',
            height: '24px',
          },
          value: '',
        },
      },
    },
    {
      cells: {
        FLD1: {
          style: {
            backgroundColor: 'var(--kup-primary-color)',
            border: 'none',
            ['--kup-textfield-background-color']: 'var(--kup-primary-color)',
            ['--kup-textfield-primary-color']:
              'var(--kup-text-on-primary-color)',
            ['--kup-textfield-color']: 'var(--kup-text-on-primary-color)',
            ['--kup-textfield-color-rgb']:
              'var(--kup-text-on-primary-color-rgb)',
            ['--kup-textfield-primary-color-rgb']:
              'var(--kup-text-on-primary-color-rgb)',
            width: '50px',
          },
          isEditable: true,
          value: '',
        },
        FLD13: {
          span: {
            col: 11,
          },
          style: {
            backgroundColor: 'var(--kup-primary-color)',
            border: 'none',
            color: 'var(--kup-text-on-primary-color)',
            fontSize: 'calc(var(--kup-font-size) * 1.25)',
            textTransform: 'uppercase',
          },
          value: 'Piano primo',
        },
      },
    },
    {
      cells: {
        FLD1: {
          cssClass: 'strong-text c-centered',
          value: 'Op',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD2: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Posizione',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD3: {
          cssClass: 'strong-text',
          value: 'Categoria',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD4: {
          cssClass: 'strong-text',
          value: 'Articolo',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD5: {
          cssClass: 'strong-text',
          value: 'Descrizione',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD6: {
          cssClass: 'strong-text',
          value: 'Stato Art.',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD7: {
          cssClass: 'strong-text',
          value: 'Descr stato',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD8: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Giac.(se 75)',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD9: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Quantità',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD10: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Prezzo',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD11: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Sconto%',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD12: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Importo',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
      },
    },
    {
      cells: {
        FLD1: {
          style: {
            width: '50px',
          },
          isEditable: true,
          value: '',
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
          value: 'I',
        },
        FLD4: {
          value: 'ISMA-B-FCU-HH',
        },
        FLD5: {
          value: 'Descrizione ISMA-B-FCU-HH',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '43',
          },
          value: '43',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '190',
          },
          value: '190',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '8170',
          },
          value: '8170',
        },
      },
    },
    {
      cells: {
        FLD1: {
          style: {
            width: '50px',
          },
          isEditable: true,
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '20',
          },
          value: '20',
        },
        FLD3: {
          value: 'I',
        },
        FLD4: {
          value: 'ISMA-B-LP',
        },
        FLD5: {
          value: 'Descrizione ISMA-B-LP',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '39',
          },
          value: '39',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '90',
          },
          value: '90',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '3510',
          },
          value: '3510',
        },
      },
    },
    {
      cells: {
        FLD1: {
          style: {
            width: '50px',
          },
          isEditable: true,
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '30',
          },
          value: '30',
        },
        FLD3: {
          value: 'A',
        },
        FLD4: {
          value: 'VSX13*03',
        },
        FLD5: {
          value: 'Descrizione VSX13*03',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '43',
          },
          value: '43',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '31',
          },
          value: '31',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '1333',
          },
          value: '1333',
        },
      },
    },
    {
      cells: {
        FLD1: {
          style: {
            width: '50px',
          },
          isEditable: true,
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '40',
          },
          value: '40',
        },
        FLD3: {
          value: 'A',
        },
        FLD4: {
          value: 'MVX52',
        },
        FLD5: {
          value: 'Descrizione MVX52',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '43',
          },
          value: '43',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '100',
          },
          value: '100',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '4300',
          },
          value: '4300',
        },
      },
    },
    {
      cells: {
        FLD1: {
          style: {
            width: '50px',
          },
          isEditable: true,
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '50',
          },
          value: '50',
        },
        FLD3: {
          value: 'I',
        },
        FLD4: {
          value: 'ISMA-B-8I-IP',
        },
        FLD5: {
          value: 'Descrizione ISMA-B-8I-IP',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '244',
          },
          value: '244',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '244',
          },
          value: '244',
        },
      },
    },
    {
      cells: {
        FLD1: {
          style: {
            width: '50px',
          },
          isEditable: true,
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '60',
          },
          value: '60',
        },
        FLD3: {
          value: 'DP',
        },
        FLD4: {
          value: 'PROGRAM-5',
        },
        FLD5: {
          value: 'Descrizione PROGRAM-5',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '43',
          },
          value: '43',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '5',
          },
          value: '5',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '215',
          },
          value: '215',
        },
      },
    },
    {
      cells: {
        FLD1: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD2: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD3: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD4: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD5: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD6: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD7: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD8: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD9: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD10: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD11: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD12: {
          cssClass: 'strong-text',
          obj: {
            t: 'NR',
            p: '',
            k: '17772',
          },
          value: '17772',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
      },
    },
    {
      cells: {
        FLD13: {
          span: {
            col: 12,
          },
          style: {
            border: 'none',
            height: '24px',
          },
          value: '',
        },
      },
    },
    {
      cells: {
        FLD1: {
          style: {
            backgroundColor: 'var(--kup-primary-color)',
            border: 'none',
            ['--kup-textfield-background-color']: 'var(--kup-primary-color)',
            ['--kup-textfield-primary-color']:
              'var(--kup-text-on-primary-color)',
            ['--kup-textfield-color']: 'var(--kup-text-on-primary-color)',
            ['--kup-textfield-color-rgb']:
              'var(--kup-text-on-primary-color-rgb)',
            ['--kup-textfield-primary-color-rgb']:
              'var(--kup-text-on-primary-color-rgb)',
            width: '50px',
          },
          isEditable: true,
          value: '',
        },
        FLD13: {
          span: {
            col: 11,
          },
          style: {
            backgroundColor: 'var(--kup-primary-color)',
            border: 'none',
            color: 'var(--kup-text-on-primary-color)',
            fontSize: 'calc(var(--kup-font-size) * 1.25)',
            textTransform: 'uppercase',
          },
          value: 'Piano secondo',
        },
      },
    },
    {
      cells: {
        FLD1: {
          cssClass: 'strong-text c-centered',
          value: 'Op',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD2: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Posizione',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD3: {
          cssClass: 'strong-text',
          value: 'Categoria',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD4: {
          cssClass: 'strong-text',
          value: 'Articolo',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD5: {
          cssClass: 'strong-text',
          value: 'Descrizione',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD6: {
          cssClass: 'strong-text',
          value: 'Stato Art.',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD7: {
          cssClass: 'strong-text',
          value: 'Descr stato',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD8: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Giac.(se 75)',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD9: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Quantità',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD10: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Prezzo',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD11: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Sconto%',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
        FLD12: {
          cssClass: 'strong-text c-right-aligned',
          value: 'Importo',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
            height: '28px',
            lineHeight: '28px',
          },
        },
      },
    },
    {
      cells: {
        FLD1: {
          style: {
            width: '50px',
          },
          isEditable: true,
          value: '',
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
          value: 'I',
        },
        FLD4: {
          value: 'ISMA-B-FCU-HH',
        },
        FLD5: {
          value: 'Descrizione ISMA-B-FCU-HH',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '43',
          },
          value: '43',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '190',
          },
          value: '190',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '8170',
          },
          value: '8170',
        },
      },
    },
    {
      cells: {
        FLD1: {
          style: {
            width: '50px',
          },
          isEditable: true,
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '20',
          },
          value: '20',
        },
        FLD3: {
          value: 'I',
        },
        FLD4: {
          value: 'ISMA-B-LP',
        },
        FLD5: {
          value: 'Descrizione ISMA-B-LP',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '39',
          },
          value: '39',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '90',
          },
          value: '90',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '3510',
          },
          value: '3510',
        },
      },
    },
    {
      cells: {
        FLD1: {
          style: {
            width: '50px',
          },
          isEditable: true,
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '30',
          },
          value: '30',
        },
        FLD3: {
          value: 'A',
        },
        FLD4: {
          value: 'VSX13*03',
        },
        FLD5: {
          value: 'Descrizione VSX13*03',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '43',
          },
          value: '43',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '31',
          },
          value: '31',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '1333',
          },
          value: '1333',
        },
      },
    },
    {
      cells: {
        FLD1: {
          style: {
            width: '50px',
          },
          isEditable: true,
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '40',
          },
          value: '40',
        },
        FLD3: {
          value: 'A',
        },
        FLD4: {
          value: 'MVX52',
        },
        FLD5: {
          value: 'Descrizione MVX52',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '43',
          },
          value: '43',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '100',
          },
          value: '100',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '4300',
          },
          value: '4300',
        },
      },
    },
    {
      cells: {
        FLD1: {
          style: {
            width: '50px',
          },
          isEditable: true,
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '50',
          },
          value: '50',
        },
        FLD3: {
          value: 'I',
        },
        FLD4: {
          value: 'ISMA-B-8I-IP',
        },
        FLD5: {
          value: 'Descrizione ISMA-B-8I-IP',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '244',
          },
          value: '244',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '244',
          },
          value: '244',
        },
      },
    },
    {
      cells: {
        FLD1: {
          style: {
            width: '50px',
          },
          isEditable: true,
          value: '',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '60',
          },
          value: '60',
        },
        FLD3: {
          value: 'DP',
        },
        FLD4: {
          value: 'PROGRAM-5',
        },
        FLD5: {
          value: 'Descrizione PROGRAM-5',
        },
        FLD6: {
          value: '10',
        },
        FLD7: {
          value: 'Attivo',
        },
        FLD8: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD9: {
          obj: {
            t: 'NR',
            p: '',
            k: '43',
          },
          value: '43',
        },
        FLD10: {
          obj: {
            t: 'NR',
            p: '',
            k: '5',
          },
          value: '5',
        },
        FLD11: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          value: '',
        },
        FLD12: {
          obj: {
            t: 'NR',
            p: '',
            k: '215',
          },
          value: '215',
        },
      },
    },
    {
      cells: {
        FLD1: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD2: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD3: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD4: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD5: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD6: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD7: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD8: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD9: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD10: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD11: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
        FLD12: {
          cssClass: 'strong-text',
          obj: {
            t: 'NR',
            p: '',
            k: '17772',
          },
          value: '17772',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            color: 'var(--kup-title-color)',
          },
        },
      },
    },
    {
      cells: {
        FLD13: {
          span: {
            col: 12,
          },
          style: {
            border: 'none',
            height: '24px',
          },
          value: '',
        },
      },
    },
  ],
};

export const documentDatatable = {
  columns: [
    {
      name: '1',
      title: 'Column 1',
    },
    {
      name: '2',
      title: 'Column 2',
    },
    {
      name: '3',
      title: 'Column 3',
    },
    {
      name: '4',
      title: 'Column 4',
    },
    {
      name: '5',
      title: 'Column 5',
    },
    {
      name: '6',
      title: 'Column 6',
    },
    {
      name: '7',
      title: 'Column 7',
    },
    {
      name: '8',
      title: 'Column 8',
    },
    {
      name: '9',
      title: 'Column 9',
    },
  ],
  rows: [
    {
      cells: {
        1: {
          value: 'SOMETHING.COM',
          span: {
            col: 9,
          },
          cssClass: 'c-centered strong-text',
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
          style: {
            height: '5px',
          },
          span: {
            col: 9,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: 'CONSOLIDATED BALANCE SHEETS',
          span: {
            col: 9,
          },
          cssClass: 'c-centered strong-text',
        },
      },
    },
    {
      cells: {
        1: {
          value: '(in millions, except per share data)',
          span: {
            col: 9,
          },
          cssClass: 'c-centered strong-text',
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
          style: {
            height: '5px',
          },
          span: {
            col: 9,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
          span: {
            col: 4,
          },
        },
        2: {
          value: 'December 31,',
          cssClass: 'c-centered strong-text',
          span: {
            col: 5,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
          style: {
            height: '2px',
            padding: 0,
          },
          span: {
            col: 4,
          },
        },
        2: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-text-color)',
            height: '2px',
            padding: 0,
          },
          span: {
            col: 5,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
          span: {
            col: 4,
          },
        },
        2: {
          value: '2016',
          cssClass: 'c-centered strong-text',
          span: {
            col: 2,
          },
        },
        3: {
          value: '',
          style: {
            padding: 0,
          },
        },
        4: {
          value: '2017',
          cssClass: 'c-centered strong-text',
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
          style: {
            height: '2px',
            padding: 0,
          },
          span: {
            col: 4,
          },
        },
        2: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-text-color)',
            height: '2px',
            padding: 0,
          },
          span: {
            col: 2,
          },
        },
        3: {
          value: '',
          style: {
            height: '2px',
            padding: 0,
          },
        },
        4: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-text-color)',
            height: '2px',
            padding: 0,
          },
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: 'ASSETS',
          cssClass: 'strong-text c-centered',
          style: {
            textDecoration: 'underline',
          },
          span: {
            col: 4,
          },
        },
        2: {
          value: '',
          span: {
            col: 5,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: 'Current assets:',
          span: {
            col: 9,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
        },
        2: {
          value: 'Cash and cash equivalents',
          span: {
            col: 3,
          },
        },
        3: {
          value: '$',
        },
        4: {
          obj: {
            t: 'NR',
            p: '',
            k: '19,334',
          },
          value: '19,334',
        },
        5: {
          value: '',
        },
        6: {
          value: '$',
        },
        7: {
          obj: {
            t: 'NR',
            p: '',
            k: '20,552',
          },
          value: '20,552',
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
        },
        2: {
          value: 'Marketable securities',
          span: {
            col: 3,
          },
        },
        3: {
          obj: {
            t: 'NR',
            p: '',
            k: '19,334',
          },
          value: '6,647',
          span: {
            col: 2,
          },
        },
        4: {
          value: '',
        },
        5: {
          obj: {
            t: 'NR',
            p: '',
            k: '10,464',
          },
          value: '10,464',
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
        },
        2: {
          value: 'Inventories',
          span: {
            col: 3,
          },
        },
        3: {
          obj: {
            t: 'NR',
            p: '',
            k: '11,461',
          },
          value: '11,461',
          span: {
            col: 2,
          },
        },
        4: {
          value: '',
        },
        5: {
          obj: {
            t: 'NR',
            p: '',
            k: '16,047',
          },
          value: '16,047',
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
        },
        2: {
          value: 'Accounts receivable, net and other',
          span: {
            col: 3,
          },
        },
        3: {
          obj: {
            t: 'NR',
            p: '',
            k: '8,338',
          },
          value: '8,339',
          span: {
            col: 2,
          },
        },
        4: {
          value: '',
        },
        5: {
          obj: {
            t: 'NR',
            p: '',
            k: '13,164',
          },
          value: '13,164',
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
          style: {
            height: '2px',
            padding: 0,
          },
          span: {
            col: 4,
          },
        },
        2: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-text-color)',
            height: '2px',
            padding: 0,
          },
          span: {
            col: 2,
          },
        },
        3: {
          value: '',
          style: {
            height: '2px',
            padding: 0,
          },
        },
        4: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-text-color)',
            height: '2px',
            padding: 0,
          },
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
          span: {
            col: 2,
          },
        },
        2: {
          value: 'Total current assets',
          span: {
            col: 2,
          },
        },
        3: {
          obj: {
            t: 'NR',
            p: '',
            k: '45,781',
          },
          value: '45,781',
          span: {
            col: 2,
          },
        },
        4: {
          value: '',
        },
        5: {
          obj: {
            t: 'NR',
            p: '',
            k: '60,197',
          },
          value: '60,197',
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: 'Property and equipment, net',
          span: {
            col: 4,
          },
        },
        2: {
          obj: {
            t: 'NR',
            p: '',
            k: '29,114',
          },
          value: '29,114',
          span: {
            col: 2,
          },
        },
        3: {
          value: '',
        },
        4: {
          obj: {
            t: 'NR',
            p: '',
            k: '48,866',
          },
          value: '48,866',
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: 'Goodwill',
          span: {
            col: 4,
          },
        },
        2: {
          obj: {
            t: 'NR',
            p: '',
            k: '3,784',
          },
          value: '3,784',
          span: {
            col: 2,
          },
        },
        3: {
          value: '',
        },
        4: {
          obj: {
            t: 'NR',
            p: '',
            k: '13,350',
          },
          value: '13,350',
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: 'Other assets',
          span: {
            col: 4,
          },
        },
        2: {
          obj: {
            t: 'NR',
            p: '',
            k: '4,723',
          },
          value: '4,723',
          span: {
            col: 2,
          },
        },
        3: {
          value: '',
        },
        4: {
          obj: {
            t: 'NR',
            p: '',
            k: '8,897',
          },
          value: '8,897',
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
          style: {
            height: '2px',
            padding: 0,
          },
          span: {
            col: 4,
          },
        },
        2: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-text-color)',
            height: '2px',
            padding: 0,
          },
          span: {
            col: 2,
          },
        },
        3: {
          value: '',
          style: {
            height: '2px',
            padding: 0,
          },
        },
        4: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-text-color)',
            height: '2px',
            padding: 0,
          },
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
          span: {
            col: 3,
          },
        },
        2: {
          value: 'Total assets',
        },
        3: {
          value: '$',
        },
        4: {
          obj: {
            t: 'NR',
            p: '',
            k: '83,402',
          },
          value: '83,402',
        },
        5: {
          value: '',
        },
        6: {
          value: '$',
        },
        7: {
          obj: {
            t: 'NR',
            p: '',
            k: '131,310',
          },
          value: '131,310',
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
          style: {
            height: '2px',
            padding: 0,
          },
          span: {
            col: 4,
          },
        },
        2: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-text-color)',
            height: '2px',
            padding: 0,
          },
          span: {
            col: 2,
          },
        },
        3: {
          value: '',
          style: {
            height: '2px',
            padding: 0,
          },
        },
        4: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-text-color)',
            height: '2px',
            padding: 0,
          },
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
          style: {
            height: '2px',
            padding: 0,
          },
          span: {
            col: 4,
          },
        },
        2: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-text-color)',
            height: '2px',
            padding: 0,
          },
          span: {
            col: 2,
          },
        },
        3: {
          value: '',
          style: {
            height: '2px',
            padding: 0,
          },
        },
        4: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-text-color)',
            height: '2px',
            padding: 0,
          },
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: "LIABILITIES AND STOCKHOLDERS' EQUITIES",
          cssClass: 'strong-text c-centered',
          style: {
            textDecoration: 'underline',
          },
          span: {
            col: 4,
          },
        },
        2: {
          value: '',
          span: {
            col: 5,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: 'Current liabilities:',
          span: {
            col: 9,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
        },
        2: {
          value: 'Accounts payable',
          span: {
            col: 3,
          },
        },
        3: {
          value: '$',
        },
        4: {
          obj: {
            t: 'NR',
            p: '',
            k: '25,309',
          },
          value: '25,309',
        },
        5: {
          value: '',
        },
        6: {
          value: '$',
        },
        7: {
          obj: {
            t: 'NR',
            p: '',
            k: '34,616',
          },
          value: '34,616',
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
        },
        2: {
          value: 'Accounts payable',
          span: {
            col: 3,
          },
        },
        3: {
          obj: {
            t: 'NR',
            p: '',
            k: '13,739',
          },
          value: '13,739',
          span: {
            col: 2,
          },
        },
        4: {
          value: '',
        },
        5: {
          obj: {
            t: 'NR',
            p: '',
            k: '18,170',
          },
          value: '18,170',
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
        },
        2: {
          value: 'Unearned revenue',
          span: {
            col: 3,
          },
        },
        3: {
          obj: {
            t: 'NR',
            p: '',
            k: '4,768',
          },
          value: '4,768',
          span: {
            col: 2,
          },
        },
        4: {
          value: '',
        },
        5: {
          obj: {
            t: 'NR',
            p: '',
            k: '5,097',
          },
          value: '5,097',
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
          style: {
            height: '2px',
            padding: 0,
          },
          span: {
            col: 4,
          },
        },
        2: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-text-color)',
            height: '2px',
            padding: 0,
          },
          span: {
            col: 2,
          },
        },
        3: {
          value: '',
          style: {
            height: '2px',
            padding: 0,
          },
        },
        4: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-text-color)',
            height: '2px',
            padding: 0,
          },
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
          span: {
            col: 2,
          },
        },
        2: {
          value: 'Total current liabilities',
          span: {
            col: 2,
          },
        },
        3: {
          obj: {
            t: 'NR',
            p: '',
            k: '43,816',
          },
          value: '43,816',
          span: {
            col: 2,
          },
        },
        4: {
          value: '',
        },
        5: {
          obj: {
            t: 'NR',
            p: '',
            k: '57,883',
          },
          value: '57,883',
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: 'Long-term debt',
          span: {
            col: 4,
          },
        },
        2: {
          obj: {
            t: 'NR',
            p: '',
            k: '7,694',
          },
          value: '7,694',
          span: {
            col: 2,
          },
        },
        3: {
          value: '',
        },
        4: {
          obj: {
            t: 'NR',
            p: '',
            k: '24,743',
          },
          value: '24,743',
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: 'Other long-term liabilities',
          span: {
            col: 4,
          },
        },
        2: {
          obj: {
            t: 'NR',
            p: '',
            k: '12,607',
          },
          value: '12,607',
          span: {
            col: 2,
          },
        },
        3: {
          value: '',
        },
        4: {
          obj: {
            t: 'NR',
            p: '',
            k: '20,975',
          },
          value: '20,975',
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: 'Commitment and contingencies (Note 7)',
          span: {
            col: 9,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: "Stockholders' equity",
          span: {
            col: 9,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
        },
        2: {
          value: 'Preferred stock, $0.01 par value:',
          span: {
            col: 8,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
          span: {
            col: 2,
          },
        },
        2: {
          value: 'Authorized shares --- 500',
          span: {
            col: 7,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
          span: {
            col: 2,
          },
        },
        2: {
          value: 'Issued and outstanding shares --- none',
          span: {
            col: 2,
          },
        },
        3: {
          value: '---',
          span: {
            col: 2,
          },
          cssClass: 'c-right-aligned',
        },
        4: {
          value: '',
        },
        5: {
          value: '---',
          span: {
            col: 2,
          },
          cssClass: 'c-right-aligned',
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
        },
        2: {
          value: 'Common stock, $0.01 par value:',
          span: {
            col: 8,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
          span: {
            col: 2,
          },
        },
        2: {
          value: 'Authorized shares --- 5000',
          span: {
            col: 7,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
          span: {
            col: 2,
          },
        },
        2: {
          value: 'Issued shares --- 500 and 507',
          span: {
            col: 7,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
          span: {
            col: 2,
          },
        },
        2: {
          value: 'Outstanding shares --- 477 and 484',
          span: {
            col: 2,
          },
        },
        3: {
          obj: {
            t: 'NR',
            p: '',
            k: '5',
          },
          value: '5',
          span: {
            col: 2,
          },
        },
        4: {
          value: '',
        },
        5: {
          obj: {
            t: 'NR',
            p: '',
            k: '5',
          },
          value: '5',
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
        },
        2: {
          value: 'Treasury stock, at cost',
          span: {
            col: 3,
          },
        },
        3: {
          obj: {
            t: 'NR',
            p: '',
            k: '(1,837)',
          },
          value: '(1,837)',
          span: {
            col: 2,
          },
        },
        4: {
          value: '',
        },
        5: {
          obj: {
            t: 'NR',
            p: '',
            k: '(1,837)',
          },
          value: '(1,837)',
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
        },
        2: {
          value: 'Additional paid-in capital',
          span: {
            col: 3,
          },
        },
        3: {
          obj: {
            t: 'NR',
            p: '',
            k: '17,186',
          },
          value: '17,186',
          span: {
            col: 2,
          },
        },
        4: {
          value: '',
        },
        5: {
          obj: {
            t: 'NR',
            p: '',
            k: '21,389',
          },
          value: '21,389',
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
        },
        2: {
          value: 'Accumulated other comprehensive loss',
          span: {
            col: 3,
          },
        },
        3: {
          obj: {
            t: 'NR',
            p: '',
            k: '(985)',
          },
          value: '(985)',
          span: {
            col: 2,
          },
        },
        4: {
          value: '',
        },
        5: {
          obj: {
            t: 'NR',
            p: '',
            k: '(484)',
          },
          value: '(484)',
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
        },
        2: {
          value: 'Retained earnings',
          span: {
            col: 3,
          },
        },
        3: {
          obj: {
            t: 'NR',
            p: '',
            k: '4916',
          },
          value: '4916',
          span: {
            col: 2,
          },
        },
        4: {
          value: '',
        },
        5: {
          obj: {
            t: 'NR',
            p: '',
            k: '8636',
          },
          value: '8636',
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
          style: {
            height: '2px',
            padding: 0,
          },
          span: {
            col: 4,
          },
        },
        2: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-text-color)',
            height: '2px',
            padding: 0,
          },
          span: {
            col: 2,
          },
        },
        3: {
          value: '',
          style: {
            height: '2px',
            padding: 0,
          },
        },
        4: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-text-color)',
            height: '2px',
            padding: 0,
          },
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
          span: {
            col: 2,
          },
        },
        2: {
          value: "Total stockholders' equity",
          span: {
            col: 2,
          },
        },
        3: {
          obj: {
            t: 'NR',
            p: '',
            k: '19,285',
          },
          value: '19,285',
          span: {
            col: 2,
          },
        },
        4: {
          value: '',
        },
        5: {
          obj: {
            t: 'NR',
            p: '',
            k: '27,709',
          },
          value: '27,709',
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
          style: {
            height: '2px',
            padding: 0,
          },
          span: {
            col: 4,
          },
        },
        2: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-text-color)',
            height: '2px',
            padding: 0,
          },
          span: {
            col: 2,
          },
        },
        3: {
          value: '',
          style: {
            height: '2px',
            padding: 0,
          },
        },
        4: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-text-color)',
            height: '2px',
            padding: 0,
          },
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
          style: {
            width: '2em',
          },
        },
        2: {
          value: '',
          style: {
            width: '2em',
          },
        },
        3: {
          value: '',
          style: {
            width: '2em',
          },
        },
        4: {
          value: "Total liabilities and stockholders' equity",
        },
        5: {
          value: '',
        },
        6: {
          obj: {
            t: 'NR',
            p: '',
            k: '83,402',
          },
          value: '83,402',
        },
        7: {
          value: '',
          style: {
            width: '.1em',
          },
        },
        8: {
          value: '',
        },
        9: {
          obj: {
            t: 'NR',
            p: '',
            k: '131,310',
          },
          value: '131,310',
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
          style: {
            height: '2px',
            padding: 0,
          },
          span: {
            col: 4,
          },
        },
        2: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-text-color)',
            height: '2px',
            padding: 0,
          },
          span: {
            col: 2,
          },
        },
        3: {
          value: '',
          style: {
            height: '2px',
            padding: 0,
          },
        },
        4: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-text-color)',
            height: '2px',
            padding: 0,
          },
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: '',
          style: {
            height: '2px',
            padding: 0,
          },
          span: {
            col: 4,
          },
        },
        2: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-text-color)',
            height: '2px',
            padding: 0,
          },
          span: {
            col: 2,
          },
        },
        3: {
          value: '',
          style: {
            height: '2px',
            padding: 0,
          },
        },
        4: {
          value: '',
          style: {
            backgroundColor: 'var(--kup-text-color)',
            height: '2px',
            padding: 0,
          },
          span: {
            col: 2,
          },
        },
      },
    },
    {
      cells: {
        1: {
          value: 'See accompanying notes to consolidated financial statements.',
          span: {
            col: 9,
          },
          cssClass: 'c-centered',
          style: {
            height: '30px',
            lineHeight: '30px',
          },
        },
      },
    },
  ],
};

export const subfile = {
  columns: [
    {
      name: 'INPUT',
      title: '?',
    },
    {
      name: 'SPAN01',
      title: '',
    },
    {
      name: 'SPAN02',
      title: '',
    },
    {
      name: 'SPAN03',
      title: '',
    },
    {
      name: 'SPAN04',
      title: '',
    },
    {
      name: 'SPAN05',
      title: '',
    },
    {
      name: 'CONTO01',
      title: 'COD. CONTO',
    },
    {
      name: 'CONTO02',
      title: '',
    },
    {
      name: 'CONTO03',
      title: '',
    },
    {
      name: 'CONTO04',
      title: '',
    },
    {
      name: 'CONTO05',
      title: '',
    },
    {
      name: 'CONTO06',
      title: '',
    },
    {
      name: 'CONTO07',
      title: '',
    },
    {
      name: 'CONTO08',
      title: '',
    },
    {
      name: 'CONTO09',
      title: '',
    },
    {
      name: 'CONTO10',
      title: '',
    },
    {
      name: 'CONTO11',
      title: '',
    },
    {
      name: 'CONTO12',
      title: '',
    },
    {
      name: 'CONTO13',
      title: '',
    },
    {
      name: 'CONTO14',
      title: '',
    },
    {
      name: 'CONTO15',
      title: '',
    },
    {
      name: 'DESCRIZIONE',
      title: 'DESCRIZIONE',
    },
    {
      name: 'COL01',
      title: 'SALDO INIZIALE',
    },
    {
      name: 'COL02',
      title: '----- DARE -----',
    },
    {
      name: 'COL03',
      title: '----- AVERE -----',
    },
    {
      name: 'COL04',
      title: 'SALDO PERIODO',
    },
    {
      name: 'COL05',
      title: 'SALDO-FINALE',
    },
  ],
  rows: [
    {
      cells: {
        INPUT: {
          cssClass: 'c-centered',
          value: '?',
        },
        SPAN01: {
          value: '',
          style: { width: '20px' },
        },
        SPAN02: {
          value: '',
          style: { width: '20px' },
        },
        SPAN03: {
          value: '',
          style: { width: '20px' },
        },
        SPAN04: {
          value: '',
          style: { width: '20px' },
        },
        SPAN05: {
          value: '',
          style: { width: '20px' },
        },
        CONTO01: {
          value: 'COD. CONTO',
          span: {
            col: 10,
          },
        },
        CONTO09: {
          value: '',
          style: { width: '20px' },
        },
        CONTO10: {
          value: 'DESCRIZIONE',
          span: {
            col: 5,
          },
        },
        COL01: {
          value: 'SALDO INIZIALE',
          cssClass: 'c-right-aligned',
        },
        COL02: {
          value: '----- DARE -----',
          cssClass: 'c-right-aligned',
        },
        COL03: {
          value: '----- AVERE -----',
          cssClass: 'c-right-aligned',
        },
        COL04: {
          value: 'SALDO PERIODO',
          cssClass: 'c-right-aligned',
        },
        COL05: {
          value: 'SALDO-FINALE',
          cssClass: 'c-right-aligned',
        },
      },
    },

    {
      cells: {
        INPUT: {
          value: '',
          style: {
            height: '2px',
            backgroundColor: 'var(--kup-text-color)',
            padding: '0px',
          },
        },
        SPAN01: {
          value: '',
          span: {
            col: 2,
          },
          style: {
            height: '2px',
            padding: '0px',
          },
        },
        SPAN03: {
          value: '',
          span: {
            col: 24,
          },
          style: {
            height: '2px',
            backgroundColor: 'var(--kup-text-color)',
            padding: '0px',
          },
        },
      },
    },
    {
      cells: {
        INPUT: {
          value: '',
          style: {
            height: '20px',
            padding: '0px',
          },
          span: {
            col: 27,
          },
        },
      },
    },
    {
      cells: {
        INPUT: {
          value: '',
          style: { width: '10px' },
        },
        SPAN01: {
          value: '',
          style: { width: '10px' },
        },
        SPAN02: {
          value: '',
          style: { width: '10px' },
        },
        SPAN03: {
          value: '',
          style: { width: '10px' },
        },
        SPAN04: {
          value: 'Patrimoniale',
          style: { backgroundColor: 'var(--kup-danger-color)' },
          span: {
            col: 23,
          },
        },
      },
    },
    {
      cells: {
        INPUT: {
          value: '',
          style: { width: '10px' },
        },
        SPAN01: {
          value: '',
          style: { width: '10px' },
        },
        SPAN02: {
          value: '',
          style: { width: '10px' },
        },
        SPAN03: {
          value: '',
          style: { width: '10px' },
        },
        SPAN04: {
          value: '',
          style: { width: '10px' },
        },
        SPAN05: {
          value: 'Attività',
          style: { color: 'var(--kup-danger-color)' },
          span: {
            col: 22,
          },
        },
      },
    },
    {
      cells: {
        INPUT: {
          value: '',
          span: {
            col: 2,
          },
          isEditable: true,
          style: { width: '20px' },
        },
        SPAN02: {
          value: '',
          span: {
            col: 4,
          },
        },
        CONTO01: {
          value: '',
          style: { width: '10px' },
        },
        CONTO02: {
          value: 'AA',
          span: {
            col: 2,
          },
          cssClass: 'strong-text',
        },
        CONTO04: {
          value: 'Prova da cancellare',
          span: {
            col: 13,
          },
        },
        COL01: {
          value: '',
        },
        COL02: {
          value: '',
        },
        COL03: {
          value: '',
        },
        COL04: {
          value: '',
        },
        COL05: {
          value: '',
        },
      },
    },
    {
      cells: {
        INPUT: {
          value: '',
          isEditable: true,
          style: { width: '20px' },
        },
        SPAN01: {
          value: '',
          style: { width: '20px' },
        },
        SPAN02: {
          value: '',
          style: { width: '20px' },
        },
        SPAN03: {
          value: '',
          style: { width: '20px' },
        },
        SPAN04: {
          value: '',
          style: { width: '20px' },
        },
        SPAN05: {
          value: '',
          style: { width: '20px' },
        },
        CONTO01: {
          value: '',
        },
        CONTO02: {
          value: '1011001',
          span: {
            col: 7,
          },
          cssClass: 'strong-text',
        },
        CONTO09: {
          value: 'Crediti verso soci',
          span: {
            col: 8,
          },
        },
        COL01: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
        },
        COL02: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
        },
        COL03: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
        },
        COL04: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
        },
        COL05: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
        },
      },
    },
    {
      cells: {
        INPUT: {
          value: '',
          span: {
            col: 2,
          },
          isEditable: true,
          style: { width: '20px' },
        },
        SPAN01: {
          value: '',
          span: {
            col: 5,
          },
        },
        CONTO02: {
          value: '1011002',
          span: {
            col: 7,
          },
          cssClass: 'strong-text',
        },
        CONTO09: {
          value: 'per versam. già richiamati',
          span: {
            col: 8,
          },
        },
        COL01: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
        },
        COL02: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
        },
        COL03: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
        },
        COL04: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
        },
        COL05: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
        },
      },
    },
    {
      cells: {
        INPUT: {
          value: '',
          span: {
            col: 6,
          },
        },
        CONTO01: {
          value: 'TOTALE Attività',
          span: {
            col: 16,
          },
          style: { color: 'var(--kup-danger-color)' },
        },
        COL01: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
          style: { color: 'var(--kup-danger-color)' },
        },
        COL02: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
          style: { color: 'var(--kup-danger-color)' },
        },
        COL03: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
          style: { color: 'var(--kup-danger-color)' },
        },
        COL04: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
          style: { color: 'var(--kup-danger-color)' },
        },
        COL05: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
          style: { color: 'var(--kup-danger-color)' },
        },
      },
    },
    {
      cells: {
        SPAN01: {
          value: '',
          span: {
            col: 4,
          },
          style: {
            height: '2px',
            padding: '0px',
          },
        },
        CONTO01: {
          value: '',
          span: {
            col: 23,
          },
          style: {
            height: '2px',
            backgroundColor: 'var(--kup-danger-color)',
            padding: '0px',
          },
        },
      },
    },
    // passività

    {
      cells: {
        INPUT: {
          value: '',
          style: { width: '10px' },
        },
        SPAN01: {
          value: '',
          style: { width: '10px' },
        },
        SPAN02: {
          value: '',
          style: { width: '10px' },
        },
        SPAN03: {
          value: '',
          style: { width: '10px' },
        },
        SPAN04: {
          value: '',
          style: { width: '10px' },
        },
        SPAN05: {
          value: 'Attività',
          style: { color: 'var(--kup-danger-color)' },
          span: {
            col: 22,
          },
        },
      },
    },
    {
      cells: {
        INPUT: {
          value: '',
          span: {
            col: 2,
          },
          isEditable: true,
          style: { width: '20px' },
        },
        SPAN01: {
          value: '',
          span: {
            col: 5,
          },
        },
        CONTO02: {
          value: '2351',
          span: {
            col: 4,
          },
          cssClass: 'strong-text',
        },
        CONTO06: {
          value: 'Fornitori nazionali',
          span: {
            col: 11,
          },
        },
        COL01: {
          value: '',
        },
        COL02: {
          value: '',
        },
        COL03: {
          value: '',
        },
        COL04: {
          value: '',
        },
        COL05: {
          value: '',
        },
      },
    },
    {
      cells: {
        INPUT: {
          value: '',
          span: {
            col: 2,
          },
          isEditable: true,
          style: { width: '20px' },
        },
        SPAN01: {
          value: '',
          span: {
            col: 5,
          },
        },
        CONTO02: {
          value: '2352',
          span: {
            col: 4,
          },
          cssClass: 'strong-text',
        },
        CONTO06: {
          value: 'Fornitori esteri',
          span: {
            col: 11,
          },
        },
        COL01: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
        },
        COL02: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
        },
        COL03: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
        },
        COL04: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
        },
        COL05: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
        },
      },
    },
    {
      cells: {
        INPUT: {
          value: '',
          span: {
            col: 2,
          },
          isEditable: true,
          style: { width: '20px' },
        },
        SPAN01: {
          value: '',
          span: {
            col: 5,
          },
        },
        CONTO02: {
          value: '2353',
          span: {
            col: 4,
          },
          cssClass: 'strong-text',
        },
        CONTO06: {
          value: 'Fornitori di servizi',
          span: {
            col: 11,
          },
        },
        COL01: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
        },
        COL02: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
        },
        COL03: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
        },
        COL04: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
        },
        COL05: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
        },
      },
    },
    {
      cells: {
        INPUT: {
          value: '',
          span: {
            col: 6,
          },
        },
        CONTO01: {
          value: 'TOTALE Passività',
          span: {
            col: 16,
          },
          style: { color: 'var(--kup-danger-color)' },
        },
        COL01: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
          style: { color: 'var(--kup-danger-color)' },
        },
        COL02: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
          style: { color: 'var(--kup-danger-color)' },
        },
        COL03: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
          style: { color: 'var(--kup-danger-color)' },
        },
        COL04: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
          style: { color: 'var(--kup-danger-color)' },
        },
        COL05: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          cssClass: 'strong-text',
          style: { color: 'var(--kup-danger-color)' },
        },
      },
    },
    {
      cells: {
        SPAN01: {
          value: '',
          span: {
            col: 4,
          },
          style: {
            height: '2px',
            padding: '0px',
          },
        },
        CONTO01: {
          value: '',
          span: {
            col: 23,
          },
          style: {
            height: '2px',
            backgroundColor: 'var(--kup-danger-color)',
            padding: '0px',
          },
        },
      },
    },

    {
      cells: {
        INPUT: {
          value: '',
          span: {
            col: 4,
          },
        },
        SPAN04: {
          value: 'DIFFERENZA PATRIMONIALE',
          span: {
            col: 18,
          },
          style: { backgroundColor: 'var(--kup-warning-color)' },
        },
        COL01: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          style: { backgroundColor: 'var(--kup-warning-color)' },
        },
        COL02: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          style: { backgroundColor: 'var(--kup-warning-color)' },
        },
        COL03: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          style: { backgroundColor: 'var(--kup-warning-color)' },
        },
        COL04: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          style: { backgroundColor: 'var(--kup-warning-color)' },
        },
        COL05: {
          value: '1000',
          obj: {
            t: 'NR',
            p: '',
            k: '1000',
          },
          style: { backgroundColor: 'var(--kup-warning-color)' },
        },
      },
    },
  ],
};

export const subfileDrop = {
  columns: [
    {
      name: 'OP',
      size: '40px',
      title: 'Op',
    },
    {
      name: 'CONTO',
      size: '100px',
      title: 'Conto',
    },
    {
      name: 'SUBCONTO',
      size: '50px',
      title: 'Subconto',
    },
    {
      name: 'DESCRIZIONE',
      title: 'Descrizione',
    },
    {
      name: 'IMPORTO',
      size: '120px',
      title: 'Importo',
    },
    {
      name: 'CODIMPORTO',
      title: 'Cod. Importo',
    },
    {
      name: 'CODIMPORTO2',
      size: '60px',
      title: 'Cod. Importo 2',
    },
    {
      name: 'CODIVA',
      size: '60px',
      title: 'Cod. Iva',
    },
    {
      name: 'DESCRIVA',
      title: 'Descr. Iva',
    },
    {
      name: 'DESCRIVA2',
      title: 'Descr. Iva 2',
    },
    {
      name: 'IND',
      size: '60px',
      title: 'Indetr.',
    },
    {
      name: 'S',
      size: '20px',
      title: 'S',
    },
    {
      name: 'N',
      size: '20px',
      title: 'N',
    },
  ],
  rows: [
    {
      cells: {
        OP: {
          cssClass: 'strong-text',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            borderBottom: 'var(--kup_datatable_border)',
            color: 'var(--kup-title-color)',
          },
          value: 'Op',
        },
        CONTO: {
          cssClass: 'strong-text',
          span: { col: 3 },
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            borderBottom: 'var(--kup_datatable_border)',
            color: 'var(--kup-title-color)',
          },
          value: 'Conto',
        },
        IMPORTO: {
          cssClass: 'strong-text c-right-aligned',
          span: { col: 3 },
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            borderBottom: 'var(--kup_datatable_border)',
            color: 'var(--kup-title-color)',
          },
          value: 'Importo',
        },
        CODIVA: {
          cssClass: 'strong-text',
          span: { col: 3 },
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            borderBottom: 'var(--kup_datatable_border)',
            color: 'var(--kup-title-color)',
          },
          value: 'Iva',
        },
        IND: {
          cssClass: 'strong-text',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            borderBottom: 'var(--kup_datatable_border)',
            color: 'var(--kup-title-color)',
          },
          value: 'Ind',
        },
        S: {
          cssClass: 'strong-text',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            borderBottom: 'var(--kup_datatable_border)',
            color: 'var(--kup-title-color)',
          },
          value: 'S',
        },
        N: {
          cssClass: 'strong-text',
          style: {
            backgroundColor: 'var(--kup-title-background-color)',
            borderBottom: 'var(--kup_datatable_border)',
            color: 'var(--kup-title-color)',
          },
          value: 'N',
        },
      },
    },
    {
      cells: {
        OP: {
          isEditable: true,
          value: '',
        },
        CONTO: {
          isEditable: true,
          span: { col: 2 },
          value: 'F0004',
        },
        SUBCONTO: {
          isEditable: true,
          value: 'FOR',
        },
        IMPORTO: {
          cssClass: 'danger-text',
          obj: { t: 'NR', p: '', k: '232.00' },
          isEditable: true,
          span: { col: 3 },
          value: '232.00',
        },
        CODIVA: {
          isEditable: true,
          value: '',
        },
        DESCRIVA: {
          span: { col: 2 },
          value: '',
        },
        IND: {
          isEditable: true,
          obj: { t: 'NR', p: '', k: '' },
          value: '',
        },
        S: {
          cssClass: 'danger-text',
          isEditable: true,
          value: 'A',
        },
        N: {
          isEditable: true,
          value: '',
        },
      },
    },
    {
      cells: {
        OP: {
          value: '5',
        },
        DESCRIZIONE: {
          span: {
            col: 3,
          },
          value: 'Ughino Trasporti SPA',
        },
        CODIMPORTO: {
          cssClass: 'strong-text',
          span: { col: 2 },
          value: '0122',
        },
        CODIMPORTO2: {
          cssClass: 'strong-text c-right-aligned',
          isEditable: true,
          value: '300',
        },
        DESCRIVA2: {
          span: { col: 6 },
          isEditable: true,
          value: 'Fattura acquisto nazionale',
        },
      },
    },
    {
      cells: {
        OP: {
          isEditable: true,
          value: '',
        },
        CONTO: {
          isEditable: true,
          span: { col: 2 },
          value: '1111001',
        },
        SUBCONTO: {
          isEditable: true,
          value: '',
        },
        IMPORTO: {
          obj: { t: 'NR', p: '', k: '100.00' },
          isEditable: true,
          span: { col: 3 },
          value: '100.00',
        },
        CODIVA: {
          isEditable: true,
          value: 'A6',
        },
        DESCRIVA: {
          span: { col: 2 },
          value: 'Iva 10% Ind',
        },
        IND: {
          isEditable: true,
          obj: { t: 'NR', p: '', k: '100.00' },
          value: '100.00',
        },
        S: {
          isEditable: true,
          value: 'D',
        },
        N: {
          isEditable: true,
          value: '',
        },
      },
    },
    {
      cells: {
        OP: {
          value: '10',
        },
        DESCRIZIONE: {
          span: {
            col: 3,
          },
          value: 'Impianto e ampliamento',
        },
        CODIMPORTO: {
          cssClass: 'strong-text',
          span: { col: 2 },
          value: '0122',
        },
        CODIMPORTO2: {
          cssClass: 'strong-text c-right-aligned',
          isEditable: true,
          value: '300',
        },
        DESCRIVA: {
          span: { col: 6 },
          isEditable: true,
          value: 'Fattura acquisto nazionale',
        },
      },
    },
    {
      cells: {
        OP: {
          isEditable: true,
          value: '',
        },
        CONTO: {
          isEditable: true,
          span: { col: 2 },
          value: '1121001',
        },
        SUBCONTO: {
          isEditable: true,
          value: '',
        },
        IMPORTO: {
          obj: { t: 'NR', p: '', k: '100.00' },
          isEditable: true,
          span: { col: 3 },
          value: '100.00',
        },
        CODIVA: {
          isEditable: true,
          value: 'G9',
        },
        DESCRIVA: {
          span: { col: 2 },
          value: 'Iva 22% Ind',
        },
        IND: {
          isEditable: true,
          obj: { t: 'NR', p: '', k: '100.00' },
          value: '100.00',
        },
        S: {
          isEditable: true,
          value: 'D',
        },
        N: {
          isEditable: true,
          value: '',
        },
      },
    },
    {
      cells: {
        OP: {
          value: '95',
        },
        DESCRIZIONE: {
          span: {
            col: 3,
          },
          value: 'Terreni e fabbricati',
        },
        CODIMPORTO: {
          cssClass: 'strong-text',
          span: { col: 2 },
          value: '0122',
        },
        CODIMPORTO2: {
          cssClass: 'strong-text c-right-aligned',
          isEditable: true,
          value: '300',
        },
        DESCRIVA: {
          isEditable: true,
          span: { col: 6 },
          value: 'Fattura acquisto nazionale',
        },
      },
    },
    {
      cells: {
        OP: {
          isEditable: true,
          value: '',
        },
        CONTO: {
          cssClass: 'strong-text',
          span: { col: 2 },
          value: '1234007',
        },
        SUBCONTO: {
          value: '',
        },
        IMPORTO: {
          cssClass: 'danger-text',
          obj: { t: 'NR', p: '', k: '32.00' },
          span: { col: 3 },
          value: '32.00',
        },
        CODIVA: {
          value: '',
        },
        DESCRIVA: {
          span: { col: 2 },
          value: '',
        },
        IND: {
          obj: { t: 'NR', p: '', k: '' },
          value: '',
        },
        S: {
          cssClass: 'danger-text',
          value: 'A',
        },
        N: {
          value: '',
        },
      },
    },
    {
      cells: {
        OP: {
          value: '190',
        },
        DESCRIZIONE: {
          span: {
            col: 3,
          },
          value: 'IVA su acquisti',
        },
        CODIMPORTO: {
          cssClass: 'strong-text',
          span: { col: 2 },
          value: '0122',
        },
        CODIMPORTO2: {
          cssClass: 'strong-text c-right-aligned',
          value: '300',
        },
        DESCRIVA: {
          cssClass: 'strong-text',
          span: { col: 6 },
          value: 'Fattura acquisto nazionale',
        },
      },
    },
    {
      cells: {
        OP: {
          isEditable: true,
          value: '',
        },
        CONTO: {
          cssClass: 'strong-text',
          span: { col: 2 },
          value: '1111001',
        },
        SUBCONTO: {
          value: '',
        },
        IMPORTO: {
          obj: { t: 'NR', p: '', k: '10.00' },
          span: { col: 3 },
          value: '10.00',
        },
        CODIVA: {
          value: '',
        },
        DESCRIVA: {
          span: { col: 2 },
          value: '',
        },
        IND: {
          obj: { t: 'NR', p: '', k: '' },
          value: '',
        },
        S: {
          value: 'D',
        },
        N: {
          value: '',
        },
      },
    },
    {
      cells: {
        OP: {
          value: '195',
        },
        DESCRIZIONE: {
          span: {
            col: 3,
          },
          value: 'Impianto e ampliamento',
        },
        CODIMPORTO: {
          cssClass: 'strong-text',
          span: { col: 2 },
          value: '0122',
        },
        CODIMPORTO2: {
          cssClass: 'strong-text c-right-aligned',
          value: '300',
        },
        DESCRIVA: {
          cssClass: 'strong-text',
          span: { col: 6 },
          value: 'Fattura acquisto nazionale',
        },
      },
    },
    {
      cells: {
        OP: {
          isEditable: true,
          value: '',
        },
        CONTO: {
          cssClass: 'strong-text',
          span: { col: 2 },
          value: '1121001',
        },
        SUBCONTO: {
          value: '',
        },
        IMPORTO: {
          obj: { t: 'NR', p: '', k: '22.00' },
          span: { col: 3 },
          value: '22.00',
        },
        CODIVA: {
          value: '',
        },
        DESCRIVA: {
          span: { col: 2 },
          value: '',
        },
        IND: {
          obj: { t: 'NR', p: '', k: '' },
          value: '',
        },
        S: {
          value: 'D',
        },
        N: {
          value: '',
        },
      },
    },
    {
      cells: {
        OP: {
          value: '200',
        },
        DESCRIZIONE: {
          span: {
            col: 3,
          },
          value: 'Terreni e fabbricati',
        },
        CODIMPORTO: {
          cssClass: 'strong-text',
          span: { col: 2 },
          value: '0122',
        },
        CODIMPORTO2: {
          cssClass: 'strong-text c-right-aligned',
          value: '300',
        },
        DESCRIVA: {
          cssClass: 'strong-text',
          span: { col: 6 },
          value: 'Fattura acquisto nazionale',
        },
      },
    },
    {
      cells: {
        OP: {
          isEditable: true,
          value: '',
        },
        CONTO: {
          isEditable: true,
          span: { col: 2 },
          value: '',
        },
        SUBCONTO: {
          isEditable: true,
          value: '',
        },
        IMPORTO: {
          obj: { t: 'NR', p: '', k: '' },
          isEditable: true,
          span: { col: 3 },
          value: '',
        },
        CODIVA: {
          isEditable: true,
          value: '',
        },
        DESCRIVA: {
          span: { col: 2 },
          value: '',
        },
        IND: {
          isEditable: true,
          obj: { t: 'NR', p: '', k: '' },
          value: '',
        },
        S: {
          isEditable: true,
          value: '',
        },
        N: {
          isEditable: true,
          value: '',
        },
      },
    },
    {
      cells: {
        OP: {
          value: '',
        },
        DESCRIZIONE: {
          span: {
            col: 3,
          },
          value: '',
        },
        CODIMPORTO: {
          cssClass: 'strong-text',
          span: { col: 2 },
          value: '',
        },
        CODIMPORTO2: {
          cssClass: 'strong-text c-right-aligned',
          isEditable: true,
          value: '',
        },
        DESCRIVA2: {
          span: { col: 6 },
          isEditable: true,
          value: '',
        },
      },
    },
  ],
};

export const kupDataDataset = {
  columns: [
    {
      isKey: false,
      name: 'PERSON',
      obj: {
        k: '',
        p: 'COL',
        t: 'CN',
      },
      title: 'Person',
    },
    {
      decimals: 0,
      isKey: false,
      name: 'NUMBER',
      obj: {
        k: '',
        p: '',
        t: 'NR',
      },
      title: 'Lucky number',
    },
    {
      decimals: 0,
      isKey: false,
      name: 'BIRTH',
      obj: {
        k: '',
        p: '',
        t: 'D8',
      },
      title: 'Birthdate',
    },
  ],
  rows: [
    {
      cells: {
        PERSON: {
          cssClass: 'strong-text',
          isEditable: false,
          obj: {
            k: 'Mark Wright',
            p: 'COL',
            t: 'CN',
          },
          value: 'Mark Wright',
        },
        NUMBER: {
          isEditable: false,
          obj: {
            k: '43',
            p: '',
            t: 'NR',
          },
          value: '43',
        },
        BIRTH: {
          obj: {
            k: '1900-12-12',
            p: '',
            t: 'D8',
          },
          value: '1900-12-12',
        },
      },
      id: '0',
      readOnly: true,
    },
    {
      cells: {
        PERSON: {
          cssClass: 'strong-text',
          isEditable: false,
          obj: {
            k: 'Jack Smith',
            p: 'COL',
            t: 'CN',
          },
          value: 'Jack Smith',
        },
        NUMBER: {
          isEditable: false,
          obj: {
            k: '69',
            p: '',
            t: 'NR',
          },
          value: '69',
        },
        BIRTH: {
          obj: {
            k: '1921-02-01',
            p: '',
            t: 'D8',
          },
          value: '1921-02-01',
        },
      },
      id: '1',
      readOnly: true,
    },
    {
      cells: {
        PERSON: {
          cssClass: 'strong-text',
          isEditable: false,
          obj: {
            k: 'Liz Johnson',
            p: 'COL',
            t: 'CN',
          },
          value: 'Liz Johnson',
        },
        NUMBER: {
          isEditable: false,
          obj: {
            k: '33',
            p: '',
            t: 'NR',
          },
          value: '33',
        },
        BIRTH: {
          obj: {
            k: '1932-06-30',
            p: '',
            t: 'D8',
          },
          value: '1932-06-30',
        },
      },
      id: '2',
      readOnly: true,
    },
    {
      cells: {
        PERSON: {
          cssClass: 'strong-text',
          isEditable: false,
          obj: {
            k: 'Patrick Day',
            p: 'COL',
            t: 'CN',
          },
          value: 'Patrick Day',
        },
        NUMBER: {
          isEditable: false,
          obj: {
            k: '24',
            p: '',
            t: 'NR',
          },
          value: '24',
        },
        BIRTH: {
          obj: {
            k: '2015-01-31',
            p: '',
            t: 'D8',
          },
          value: '2015-01-31',
        },
      },
      id: '3',
      readOnly: true,
    },
    {
      cells: {
        PERSON: {
          cssClass: 'strong-text',
          isEditable: false,
          obj: {
            k: 'Arya Jackson',
            p: 'COL',
            t: 'CN',
          },
          value: 'Arya Jackson',
        },
        NUMBER: {
          isEditable: false,
          obj: {
            k: '59',
            p: '',
            t: 'NR',
          },
          value: '59',
          displayedValue: '59',
        },
        BIRTH: {
          obj: {
            k: '2000-01-01',
            p: '',
            t: 'D8',
          },
          value: '2000-01-01',
        },
      },
      id: '4',
      readOnly: true,
    },
    {
      cells: {
        PERSON: {
          cssClass: 'strong-text',
          isEditable: false,
          obj: {
            k: 'Frank Boyle',
            p: 'COL',
            t: 'CN',
          },
          value: 'Frank Boyle',
        },
        NUMBER: {
          isEditable: false,
          obj: {
            k: '33',
            p: '',
            t: 'NR',
          },
          value: '33',
        },
        BIRTH: {
          obj: {
            k: '1999-05-12',
            p: '',
            t: 'D8',
          },
          value: '1999-05-12',
        },
      },
      id: '5',
      readOnly: true,
    },
    {
      cells: {
        PERSON: {
          cssClass: 'strong-text',
          isEditable: false,
          obj: {
            k: 'Victoria Fletcher',
            p: 'COL',
            t: 'CN',
          },
          value: 'Victoria Fletcher',
        },
        NUMBER: {
          isEditable: false,
          obj: {
            k: '51',
            p: '',
            t: 'NR',
          },
          value: '51',
        },
        BIRTH: {
          obj: {
            k: '1807-08-21',
            p: '',
            t: 'D8',
          },
          value: '1807-08-21',
        },
      },
      id: '6',
      readOnly: true,
    },
    {
      cells: {
        PERSON: {
          cssClass: 'strong-text',
          isEditable: false,
          obj: {
            k: 'Patricia Stewart',
            p: 'COL',
            t: 'CN',
          },
          value: 'Patricia Stewart',
        },
        NUMBER: {
          isEditable: false,
          obj: {
            k: '27',
            p: '',
            t: 'NR',
          },
          value: '27',
        },
        BIRTH: {
          obj: {
            k: '1780-10-01',
            p: '',
            t: 'D8',
          },
          value: '1780-10-01',
        },
      },
      id: '7',
      readOnly: true,
    },
    {
      cells: {
        PERSON: {
          cssClass: 'strong-text',
          isEditable: false,
          obj: {
            k: 'Tom Styles',
            p: 'COL',
            t: 'CN',
          },
          value: 'Tom Styles',
        },
        NUMBER: {
          isEditable: false,
          obj: {
            k: '51',
            p: '',
            t: 'NR',
          },
          value: '51',
        },
        BIRTH: {
          obj: {
            k: '2021-03-12',
            p: '',
            t: 'D8',
          },
          value: '2021-03-12',
        },
      },
      id: '8',
      readOnly: true,
    },
    {
      cells: {
        PERSON: {
          cssClass: 'strong-text',
          isEditable: false,
          obj: {
            k: 'Olivia Ridge',
            p: 'COL',
            t: 'CN',
          },
          value: 'Olivia Ridge',
        },
        NUMBER: {
          isEditable: false,
          obj: {
            k: '79',
            p: '',
            t: 'NR',
          },
          value: '79',
          displayedValue: '79',
        },
        BIRTH: {
          obj: {
            k: '1790-11-11',
            p: '',
            t: 'D8',
          },
          value: '1790-11-11',
        },
      },
      id: '9',
      readOnly: true,
    },
    {
      cells: {
        PERSON: {
          cssClass: 'strong-text',
          isEditable: false,
          obj: {
            k: 'Ruby White',
            p: 'COL',
            t: 'CN',
          },
          value: 'Ruby White',
        },
        NUMBER: {
          isEditable: false,
          obj: {
            k: '29',
            p: '',
            t: 'NR',
          },
          value: '29',
          displayedValue: '29',
        },
        BIRTH: {
          obj: {
            k: '1990-12-02',
            p: '',
            t: 'D8',
          },
          value: '1990-12-02',
        },
      },
      id: '10',
      readOnly: true,
    },
    {
      cells: {
        PERSON: {
          cssClass: 'strong-text',
          isEditable: false,
          obj: {
            k: 'Linda King',
            p: 'COL',
            t: 'CN',
          },
          value: 'Linda King',
        },
        NUMBER: {
          isEditable: false,
          obj: {
            k: '51',
            p: '',
            t: 'NR',
          },
          value: '51',
        },
        BIRTH: {
          obj: {
            k: '1945-03-17',
            p: '',
            t: 'D8',
          },
          value: '1945-03-17',
        },
      },
      id: '11',
      readOnly: true,
    },
  ],
};
