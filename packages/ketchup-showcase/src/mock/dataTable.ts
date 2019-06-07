const fld1Values = ['DELGIO', 'CASFRA', 'PARFRA', 'FIOGIA', 'ZAMCHI'];

const fld2Values = ['Java', 'Javascript', 'Delphi', 'Kotlin', 'Go'];

function getRandomArbitrary(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

function createDataForPagination(colSize: number, rowSize: number) {
  const columns: any = [];
  for (let i = 0; i < colSize; i++) {
    columns.push({
      name: 'FLD' + i,
      title: 'Column ' + i,
      size: 10,
    });
  }

  const rows = [];
  for (let i = 0; i < rowSize; i++) {
    const currentRow: {
      cells: any;
    } = { cells: {} };

    for (let j = 0; j < columns.length; j++) {
      const cell: any = {};

      cell.value = i.toString() + j.toString();

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
    {
      name: 'FLD4',
      title: 'Column D',
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
            k: '20180101',
          },
          value: '01/01/2018',
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
            k: '67.8',
          },
          value: '67.8',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20180102',
          },
          value: '02/01/2018',
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
            k: '20180103',
          },
          value: '03/01/2018',
        },
      },
    },
  ],
};

export const hiddenColumnsData = {
  columns: [
    {
      name: 'FLD1',
      title: 'Column A',
      size: '',
      visible: false,
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
      visible: false,
    },
    {
      name: 'FLD4',
      title: 'Column D',
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
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20180101',
          },
          value: '01/01/2018',
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
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20180102',
          },
          value: '02/01/2018',
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
          value: '03/01/2018',
        },
      },
    },
  ],
};

export const cellStyleDataTable = {
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
    {
      name: 'FLD4',
      title: 'Column D',
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
          },
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20180101',
          },
          value: '01/01/2018',
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
          value: '02/01/2018',
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
          value: '03/01/2018',
        },
      },
    },
  ],
};

export const sortDataTable = {
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
    {
      name: 'FLD4',
      title: 'Column D',
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
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20180101',
          },
          value: '01/01/2018',
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
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20180102',
          },
          value: '02/01/2018',
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
          value: '03/01/2018',
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
            k: '20180101',
          },
          value: '01/01/2018',
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
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20180102',
          },
          value: '02/01/2018',
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
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20180103',
          },
          value: '03/01/2018',
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
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20180101',
          },
          value: '01/01/2018',
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
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20180102',
          },
          value: '02/01/2018',
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
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20180103',
          },
          value: '03/01/2018',
        },
      },
    },
  ],
};

export const paginateDataTable = createDataForPagination(20, 10000);

export const groupDataTable = createDataForPagination(10, 3000);
