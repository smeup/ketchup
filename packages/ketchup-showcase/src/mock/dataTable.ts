const fld1Values = ['Customers module', 'Sales module', 'Marketing module', 'Commerce module', 'Service module'];

const fld2Values = ['Java', 'Javascript', 'Delphi', 'Kotlin', 'Go'];

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
      size: 10,
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
        t: 'NR',
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

export const defaultDataTable = {
  columns: [
    {
      name: 'FLD1',
      title: 'Software',
      size: '',
    },
    {
      name: 'FLD2',
      title: 'Working License',
      size: 10,
    },
    {
      name: 'FLD3',
      title: 'Price',
      size: 10,
    },
    {
      name: 'FLD4',
      title: 'Expiring Date',
      size: 10,
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
          options: true,
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
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200101',
          },
          value: '01/01/2020',
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
            k: '20200102',
          },
          value: '02/01/2020',
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
            k: '20200102',
          },
          value: '02/01/2020',
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
            k: '6',
          },
          value: '6',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '98.7',
          },
          value: '98.7',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200102',
          },
          value: '02/01/2020',
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
            k: '12',
          },
          value: '12',
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
            k: '20200102',
          },
          value: '02/01/2020',
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
            k: '78.9',
          },
          value: '78.9',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200102',
          },
          value: '02/01/2021',
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
            k: '20200102',
          },
          value: '02/01/2021',
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
            k: '6',
          },
          value: '6',
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
            k: '20200102',
          },
          value: '02/01/2021',
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
            k: '12',
          },
          value: '12',
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
            k: '20200102',
          },
          value: '02/01/2021',
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
            k: '99.9',
          },
          value: '99.9',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200102',
          },
          value: '02/01/2022',
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
            k: '3',
          },
          value: '3',
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
            k: '20200102',
          },
          value: '02/01/2022',
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
            k: '6',
          },
          value: '6',
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
            k: '20200102',
          },
          value: '02/01/2022',
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
            k: '12',
          },
          value: '12',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '654.3',
          },
          value: '654.3',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200102',
          },
          value: '02/01/2022',
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
            k: '154.3',
          },
          value: '154.3',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200102',
          },
          value: '02/01/2025',
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
            k: '20200103',
          },
          value: '03/01/2020',
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
      size: '',
      visible: false,
    },
    {
      name: 'FLD2',
      title: 'Working License',
      size: 10,
    },
    {
      name: 'FLD3',
      title: 'Price',
      size: 10,
      visible: false,
    },
    {
      name: 'FLD4',
      title: 'Expiring Date',
      size: 10,
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
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200101',
          },
          value: '01/01/2020',
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
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200102',
          },
          value: '02/01/2020',
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
            k: '20200103',
          },
          value: '03/01/2020',
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
      size: '',
    },
    {
      name: 'FLD2',
      title: 'Icon',
      size: 10,
    },
    {
      name: 'FLD3',
      title: 'Image',
      size: 10,
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
          value: 'mdi mdi-account',
        },
        FLD3: {
          obj: {
            t: 'J4',
            p: 'IMG',
            k: 'CN;COL;Customers module',
          },
          value:
            'https://webuptest.smeup.com/WebUPNightly/javax.faces.resource/OG%253BCN%253BCOL.jsf?ln=smeupImages',
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
          value: 'mdi mdi-folder',
        },
        FLD3: {
          obj: {
            t: 'J4',
            p: 'IMG',
            k: 'OG;J1;PATHFILE',
          },
          value:
            'https://webuptest.smeup.com/WebUPNightly/javax.faces.resource/OG%253BJ1%253BPATHFILE.jsf?ln=smeupImages',
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
          value: 'mdi mdi-play',
        },
        FLD3: {
          obj: {
            t: 'J4',
            p: 'IMG',
            k: 'J1;KEY;CTRL',
          },
          value:
            'https://webuptest.smeup.com/WebUPNightly/javax.faces.resource/J1%253BKEY%253BCTRL.jsf?ln=smeupImages',
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
      size: '',
    },
    {
      name: 'FLD2',
      title: 'Working License',
      size: 10,
    },
    {
      name: 'FLD3',
      title: 'Price',
      size: 10,
    },
    {
      name: 'FLD4',
      title: 'Expiring Date',
      size: 10,
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
            k: '10',
          },
          value: '10',
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
          value: '01/01/2020',
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
            k: 'Sales module',
          },
          value: 'Sales module',
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
            k: '20200102',
          },
          value: '02/01/2020',
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
            k: '20200103',
          },
          value: '03/01/2020',
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
      size: '',
    },
    {
      name: 'FLD2',
      title: 'Working License',
      size: 10,
    },
    {
      name: 'FLD3',
      title: 'Price',
      size: 10,
    },
    {
      name: 'FLD4',
      title: 'Expiring Date',
      size: 10,
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
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200101',
          },
          value: '01/01/2020',
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
            k: '-2',
          },
          value: '-2',
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
            k: '20200102',
          },
          value: '02/01/2020',
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
            k: '20200103',
          },
          value: '03/01/2020',
        },
      },
    },
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
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200101',
          },
          value: '01/01/2020',
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
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200102',
          },
          value: '02/01/2020',
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
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200103',
          },
          value: '03/01/2020',
        },
      },
    },
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
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200101',
          },
          value: '01/01/2020',
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
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200102',
          },
          value: '02/01/2020',
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
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200103',
          },
          value: '03/01/2020',
        },
      },
    },
  ],
};

export const paginateDataTable = createDataForPagination(20, 10000);

export const groupDataTable = createDataForPagination(10, 3000);

export const repetitionsGroupDataTable = createDataForPagination(8, 1000, true);

//---- Checkbox and radio data table ----
export function dataTableCheckboxFactory(inputType: string = 'SI/NO', hideValuesRepetitions: boolean = false) {
  return {
    config: {
      rowsPerPage: 50,
    },
    data: {
      columns: [
        {
          name: 'A',
          size: 0,
          title: 'Numero',
        },
        {
          name: 'B',
          size: 0,
          title: 'BarCode',
        },
        {
          hideValuesRepetitions,
          name: 'C',
          size: 0,
          title: 'Si/No',
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
