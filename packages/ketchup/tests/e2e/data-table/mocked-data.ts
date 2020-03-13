import {Cell, Column, Row, DataTable,} from "../../../src/components/kup-data-table/kup-data-table-declarations";

const fld1Values = ['DELGIO', 'CASFRA', 'PARFRA', 'FIOGIA', 'ZAMCHI'];

const fld2Values = ['Java', 'Javascript', 'Delphi', 'Kotlin', 'Go'];

// function getRandomArbitrary(min: number, max: number): number {
//     return Math.floor(Math.random() * (max - min) + min);
// }

function columnFactory(name: string, title: string, size: number): Column {
  return {
    name,
    title,
    size,
  }
}

function cellFactory(value: string, t: string = 'nr', p: string = '', k: string = value): Cell {
  return {
    value,
    obj: {
      t,
      p,
      k
    }
  };
}

/**
 * Creates kup-data-table with a long text data set to allow testing on width aspects.
 * @param numberOfCols - The number of columns to generate.
 * @param numberOfRows - The number of rows to generate.
 * @returns The data to set to the table.
 */
export function LongTextDataFactory(numberOfCols: number = 4, numberOfRows: number = 20): DataTable {
  const longText = "Column's width defined by the matrix setup";
  let i = 0;

  // Composes columns
  const columns: Column[] = [];
  for (i = 0; i < numberOfCols; i++) {
    columns.push(columnFactory('FLD' + (i + 1), 'Column ' + (i + 1), 10));
  }

  // Composes rows
  const rows: Row[] = [];
  for (i = 0; i < numberOfRows; i++) {
    let row: Row = {
      cells: {}
    };

    // Composes cells
    for (let j = 0; j < numberOfCols; j++) {
      row.cells[columns[j].name] = cellFactory(longText);
    }

    rows.push(row);
  }

  return {
    columns,
    rows
  };
}


export function createData(colSize: number, rowSize: number): DataTable {
  const columns: Column[] = [];
  for (let i = 0; i < colSize; i++) {
    columns.push({
      name: 'FLD' + i,
      title: 'Column ' + i,
      size: 10,
    });
  }

  const rows: Row[] = [];
  for (let i = 0; i < rowSize; i++) {
    const currentRow: {
      cells: any;
    } = {cells: {}};

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
        cell.value = fld1Values[i % fld1Values.length];
        cell.obj.k = cell.value;
      } else if (j === 1) {
        cell.obj.t = '';
        cell.value = fld2Values[i % fld2Values.length];
        cell.obj.k = cell.value;
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

const data = createData(10, 300);

export default data;

export const staticData = {
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
      },
    },
  ],
};

export const hiddenColumns = {
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
};

export interface ColumnsWithLineBreaksGenerator {
    colIndex: number,
    breaksCount: number
}

export function DataWithHeaderLineBreaksFactory(
    tableSize: {
        colSize: number,
        rowSize: number
    },
    columnWithLineBreakIndexes: ColumnsWithLineBreaksGenerator[] = [
        {colIndex: 0, breaksCount: 1},
        {colIndex: 1, breaksCount: 2}
    ],
    lineBreakPlaceholder = '|'
)  {
    const tableData: DataTable = createData(tableSize.colSize, tableSize.rowSize);
    const randomTitleWords = [
        'very',
        'title',
        'such',
        'short',
        'Lord',
        'of the',
        'rings',
        'Blackflame',
        'Friede'
    ];

    let currentCol;
    for (let i = 0; i < columnWithLineBreakIndexes.length; i++) {
        currentCol = tableData.columns![columnWithLineBreakIndexes[i].colIndex];
        if (currentCol) {
            for (let j = 0; j < columnWithLineBreakIndexes[i].breaksCount; j++) {
                currentCol.title += lineBreakPlaceholder + randomTitleWords[Math.floor(Math.random() * randomTitleWords.length)];
            }
        }
    }

    return tableData;
}


const msMockData = {...staticData};
msMockData.rows = [
  ...msMockData.rows,
  {
    cells: {
      FLD1: {
        obj: {
          t: 'CN',
          p: 'COL',
          k: 'CASFRA',
        },
        value: 'CASFRA',
        options: false,
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
        options: false,
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
        options: false,
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
        options: false,
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
        options: false,
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
        options: false,
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

export const multiSortMockData = msMockData;


function GroupingDataFactory() {
  return {
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
              k: 'DELGIO',
            },
            value: 'DELGIO',
          },
          FLD2: {
            obj: {
              t: '',
              p: '',
              k: 'Javascript',
            },
            value: 'Javascript',
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
              t: '',
              p: '',
              k: 'Javascript',
            },
            value: 'Javascript',
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
              t: '',
              p: '',
              k: 'Javascript',
            },
            value: 'Javascript',
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
              k: 'CASFRA',
            },
            value: 'CASFRA',
          },
          FLD2: {
            obj: {
              t: '',
              p: '',
              k: 'Delphi',
            },
            value: 'Delphi',
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
              t: '',
              p: '',
              k: 'Delphi',
            },
            value: 'Delphi',
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
              t: '',
              p: '',
              k: 'Delphi',
            },
            value: 'Delphi',
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
              t: '',
              p: '',
              k: 'Go',
            },
            value: 'Go',
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
              t: '',
              p: '',
              k: 'Go',
            },
            value: 'Go',
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
              t: '',
              p: '',
              k: 'Go',
            },
            value: 'Go',
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
              t: '',
              p: '',
              k: 'Java',
            },
            value: 'Java',
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
              t: '',
              p: '',
              k: 'Java',
            },
            value: 'Java',
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
              t: '',
              p: '',
              k: 'Java',
            },
            value: 'Java',
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
  };
};

export const groupingData = GroupingDataFactory();

// Builds the data for the data table when equal values must not be displayed.
// Placed here a forced type to allow a correct usage later
let dataTableHideRepetitions = (GroupingDataFactory() as DataTable);

// @ts-ignore
dataTableHideRepetitions.columns.forEach(column => {
  column.hideValuesRepetitions = true;
});

// @ts-ignore
dataTableHideRepetitions.rows.forEach(row => {
  row.cells.FLD1.options = true;
});

export const dataTableHideRepetitionsData = dataTableHideRepetitions;

export const d8Data = {
  columns: [
    {
      name: 'FLD1',
      title: 'Person',
      size: 10,
    },
    {
      name: 'FLD2',
      title: 'Date',
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
            k: 'PARFRA',
          },
          value: 'PARFRA',
        },
        FLD2: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20181201',
          },
          value: '01/12/2018',
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
            t: 'D8',
            p: '*YYMD',
            k: '20180301',
          },
          value: '01/03/2018',
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
            t: 'D8',
            p: '*YYMD',
            k: '20180601',
          },
          value: '01/06/2018',
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
            textAlign: 'center',
            fontWeight: 'bold',
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
  ],
};


export const tableButtonData = {
  "columns": [
    {
      "name": "DES",
      "size": 0,
      "title": "Descrizione"
    },
    {
      "name": "RAW",
      "size": 0,
      "title": "Valore raw"
    },
    {
      "name": "BTN",
      "size": 0,
      "title": ""
    }
  ],
  "rows": [
    {
      "cells": {
        "DES": {
          "obj": {
            "k": "Link - Solo icona",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "Link - Solo icona"
        },
        "RAW": {
          "obj": {
            "k": "I(VO;COD_VER;000112)",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "I(VO;COD_VER;000112)"
        },
        "BTN": {
          "config": {
            "icon": "mdi mdi-pencil"
          },
          "obj": {
            "k": "I(VO;COD_VER;000112)",
            "p": "BTN",
            "t": "J4"
          },
          "options": false
        }
      },
      "id": "0",
      "layout": {
        "horizontal": true,
        "sections": [
          {
            "dim": "100%",
            "horizontal": false,
            "sections": [
              {
                "content": [
                  {
                    "column": "DES"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "RAW"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "BTN"
                  }
                ],
                "horizontal": false
              }
            ]
          }
        ]
      },
      "object": "",
      "readOnly": true
    },
    {
      "cells": {
        "DES": {
          "obj": {
            "k": "Link - Solo immagine",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "Link - Solo immagine"
        },
        "RAW": {
          "obj": {
            "k": "M(J1;PATHFILE;\\\\SRV005\\smeup\\SmeOgg\\TAB£A\\WE\\homer-simpson.svg)",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "M(J1;PATHFILE;\\\\SRV005\\smeup\\SmeOgg\\TAB£A\\WE\\homer-simpson.svg)"
        },
        "BTN": {
          "config": {},
          "obj": {
            "k": "M(J1;PATHFILE;\\\\SRV005\\smeup\\SmeOgg\\TAB£A\\WE\\homer-simpson.svg)",
            "p": "BTN",
            "t": "J4"
          },
          "options": false
        }
      },
      "id": "1",
      "layout": {
        "horizontal": true,
        "sections": [
          {
            "dim": "100%",
            "horizontal": false,
            "sections": [
              {
                "content": [
                  {
                    "column": "DES"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "RAW"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "BTN"
                  }
                ],
                "horizontal": false
              }
            ]
          }
        ]
      },
      "object": "",
      "readOnly": true
    },
    {
      "cells": {
        "DES": {
          "obj": {
            "k": "Link - Icona e testo",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "Link - Icona e testo"
        },
        "RAW": {
          "obj": {
            "k": "I(VO;COD_VER;000112) T(Edit)",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "I(VO;COD_VER;000112) T(Edit)"
        },
        "BTN": {
          "config": {
            "showtext": true,
            "icon": "mdi mdi-pencil"
          },
          "obj": {
            "k": "I(VO;COD_VER;000112) T(Edit)",
            "p": "BTN",
            "t": "J4"
          },
          "options": false,
          "value": "Edit"
        }
      },
      "id": "2",
      "layout": {
        "horizontal": true,
        "sections": [
          {
            "dim": "100%",
            "horizontal": false,
            "sections": [
              {
                "content": [
                  {
                    "column": "DES"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "RAW"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "BTN"
                  }
                ],
                "horizontal": false
              }
            ]
          }
        ]
      },
      "object": "",
      "readOnly": true
    },
    {
      "cells": {
        "DES": {
          "obj": {
            "k": "Link - Immagine e testo",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "Link - Immagine e testo"
        },
        "RAW": {
          "obj": {
            "k": "M(CN;COL;CASFRA) T(bellicapelli)",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "M(CN;COL;CASFRA) T(bellicapelli)"
        },
        "BTN": {
          "config": {
            "showtext": true
          },
          "obj": {
            "k": "M(CN;COL;CASFRA) T(bellicapelli)",
            "p": "BTN",
            "t": "J4"
          },
          "options": false,
          "value": "bellicapelli"
        }
      },
      "id": "3",
      "layout": {
        "horizontal": true,
        "sections": [
          {
            "dim": "100%",
            "horizontal": false,
            "sections": [
              {
                "content": [
                  {
                    "column": "DES"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "RAW"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "BTN"
                  }
                ],
                "horizontal": false
              }
            ]
          }
        ]
      },
      "object": "",
      "readOnly": true
    },
    {
      "cells": {
        "DES": {
          "obj": {
            "k": "Link - Icona e tooltip",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "Link - Icona e tooltip"
        },
        "RAW": {
          "obj": {
            "k": "I(VO;COD_VER;000112) H(Edit)",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "I(VO;COD_VER;000112) H(Edit)"
        },
        "BTN": {
          "config": {
            "icon": "mdi mdi-pencil"
          },
          "obj": {
            "k": "I(VO;COD_VER;000112) H(Edit)",
            "p": "BTN",
            "t": "J4"
          },
          "options": false
        }
      },
      "id": "4",
      "layout": {
        "horizontal": true,
        "sections": [
          {
            "dim": "100%",
            "horizontal": false,
            "sections": [
              {
                "content": [
                  {
                    "column": "DES"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "RAW"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "BTN"
                  }
                ],
                "horizontal": false
              }
            ]
          }
        ]
      },
      "object": "",
      "readOnly": true
    },
    {
      "cells": {
        "DES": {
          "obj": {
            "k": "Link - Immagine e tooltip",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "Link - Immagine e tooltip"
        },
        "RAW": {
          "obj": {
            "k": "M(CN;COL;CASFRA) H(Bellicapelli)",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "M(CN;COL;CASFRA) H(Bellicapelli)"
        },
        "BTN": {
          "config": {},
          "obj": {
            "k": "M(CN;COL;CASFRA) H(Bellicapelli)",
            "p": "BTN",
            "t": "J4"
          },
          "options": false
        }
      },
      "id": "5",
      "layout": {
        "horizontal": true,
        "sections": [
          {
            "dim": "100%",
            "horizontal": false,
            "sections": [
              {
                "content": [
                  {
                    "column": "DES"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "RAW"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "BTN"
                  }
                ],
                "horizontal": false
              }
            ]
          }
        ]
      },
      "object": "",
      "readOnly": true
    },
    {
      "cells": {
        "DES": {
          "obj": {
            "k": "Link - Icona con exec",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "Link - Icona con exec"
        },
        "RAW": {
          "obj": {
            "k": "I(VO;COD_VER;000112) E(F(EXD;*SCO;) 1(CN;CON;SANCOS)) T(Test)",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "I(VO;COD_VER;000112) E(F(EXD;*SCO;) 1(CN;CON;SANCOS)) T(Test)"
        },
        "BTN": {
          "config": {
            "showtext": true,
            "icon": "mdi mdi-pencil"
          },
          "obj": {
            "k": "I(VO;COD_VER;000112) E(F(EXD;*SCO;) 1(CN;COL;SANCOS)) T(Test)",
            "p": "BTN",
            "t": "J4"
          },
          "options": false,
          "value": "Test"
        }
      },
      "id": "6",
      "layout": {
        "horizontal": true,
        "sections": [
          {
            "dim": "100%",
            "horizontal": false,
            "sections": [
              {
                "content": [
                  {
                    "column": "DES"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "RAW"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "BTN"
                  }
                ],
                "horizontal": false
              }
            ]
          }
        ]
      },
      "object": "",
      "readOnly": true
    },
    {
      "cells": {
        "DES": {
          "obj": {
            "k": "Link - Immagine con exec",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "Link - Immagine con exec"
        },
        "RAW": {
          "obj": {
            "k": "M(CN;COL;CASFRA) E(F(EXD;*SCO;) 1(CN;CON;CASFRA))",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "M(CN;COL;CASFRA) E(F(EXD;*SCO;) 1(CN;CON;CASFRA))"
        },
        "BTN": {
          "config": {},
          "obj": {
            "k": "M(CN;COL;CASFRA) E(F(EXD;*SCO;) 1(CN;CON;CASFRA))",
            "p": "BTN",
            "t": "J4"
          },
          "options": false
        }
      },
      "id": "7",
      "layout": {
        "horizontal": true,
        "sections": [
          {
            "dim": "100%",
            "horizontal": false,
            "sections": [
              {
                "content": [
                  {
                    "column": "DES"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "RAW"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "BTN"
                  }
                ],
                "horizontal": false
              }
            ]
          }
        ]
      },
      "object": "",
      "readOnly": true
    },
    {
      "cells": {
        "DES": {
          "obj": {
            "k": "Link - Icona con exec e style",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "Link - Icona con exec e style"
        },
        "RAW": {
          "obj": {
            "k": "S(a) I(VO;COD_VER;000112) E(F(EXD;*SCO;) 1(CN;CON;SANCOS))",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "S(a) I(VO;COD_VER;000112) E(F(EXD;*SCO;) 1(CN;CON;SANCOS))"
        },
        "BTN": {
          "config": {
            "icon": "mdi mdi-pencil"
          },
          "obj": {
            "k": "S(a) I(VO;COD_VER;000112) E(F(EXD;*SCO;) 1(CN;COL;SANCOS))",
            "p": "BTN",
            "t": "J4"
          },
          "options": false
        }
      },
      "id": "8",
      "layout": {
        "horizontal": true,
        "sections": [
          {
            "dim": "100%",
            "horizontal": false,
            "sections": [
              {
                "content": [
                  {
                    "column": "DES"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "RAW"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "BTN"
                  }
                ],
                "horizontal": false
              }
            ]
          }
        ]
      },
      "object": "",
      "readOnly": true
    },
    {
      "cells": {
        "DES": {
          "obj": {
            "k": "Link - Icona, testo e style",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "Link - Icona, testo e style"
        },
        "RAW": {
          "obj": {
            "k": "S(a) I(VO;COD_VER;000112) T(Edit)",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "S(a) I(VO;COD_VER;000112) T(Edit)"
        },
        "BTN": {
          "config": {
            "showtext": true,
            "icon": "mdi mdi-pencil"
          },
          "obj": {
            "k": "S(a) I(VO;COD_VER;000112) T(Edit)",
            "p": "BTN",
            "t": "J4"
          },
          "options": false,
          "value": "Edit"
        }
      },
      "id": "9",
      "layout": {
        "horizontal": true,
        "sections": [
          {
            "dim": "100%",
            "horizontal": false,
            "sections": [
              {
                "content": [
                  {
                    "column": "DES"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "RAW"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "BTN"
                  }
                ],
                "horizontal": false
              }
            ]
          }
        ]
      },
      "object": "",
      "readOnly": true
    },
    {
      "cells": {
        "DES": {
          "obj": {
            "k": "Link - Solo testo e style",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "Link - Solo testo e style"
        },
        "RAW": {
          "obj": {
            "k": "S(a) I(VO;COD_VER;000112) T(Edit)",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "S(a) I(VO;COD_VER;000112) T(Edit)"
        },
        "BTN": {
          "config": {
            "showtext": true,
            "icon": "mdi mdi-pencil"
          },
          "obj": {
            "k": "S(a) I(VO;COD_VER;000112) T(Edit)",
            "p": "BTN",
            "t": "J4"
          },
          "options": false,
          "value": "Edit"
        }
      },
      "id": "10",
      "layout": {
        "horizontal": true,
        "sections": [
          {
            "dim": "100%",
            "horizontal": false,
            "sections": [
              {
                "content": [
                  {
                    "column": "DES"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "RAW"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "BTN"
                  }
                ],
                "horizontal": false
              }
            ]
          }
        ]
      },
      "object": "",
      "readOnly": true
    },
    {
      "cells": {
        "DES": {
          "obj": {
            "k": "Button - Icona",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "Button - Icona"
        },
        "RAW": {
          "obj": {
            "k": "B(Yes) I(VO;COD_VER;000112)",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "B(Yes) I(VO;COD_VER;000112)"
        },
        "BTN": {
          "config": {
            "flat": false,
            "icon": "mdi mdi-pencil"
          },
          "obj": {
            "k": "B(Yes) I(VO;COD_VER;000112)",
            "p": "BTN",
            "t": "J4"
          },
          "options": false
        }
      },
      "id": "11",
      "layout": {
        "horizontal": true,
        "sections": [
          {
            "dim": "100%",
            "horizontal": false,
            "sections": [
              {
                "content": [
                  {
                    "column": "DES"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "RAW"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "BTN"
                  }
                ],
                "horizontal": false
              }
            ]
          }
        ]
      },
      "object": "",
      "readOnly": true
    },
    {
      "cells": {
        "DES": {
          "obj": {
            "k": "Button - Immagine",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "Button - Immagine"
        },
        "RAW": {
          "obj": {
            "k": "B(Yes) M(CN;COL;CASFRA)",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "B(Yes) M(CN;COL;CASFRA)"
        },
        "BTN": {
          "config": {
            "flat": false
          },
          "obj": {
            "k": "B(Yes) M(CN;COL;CASFRA)",
            "p": "BTN",
            "t": "J4"
          },
          "options": false
        }
      },
      "id": "12",
      "layout": {
        "horizontal": true,
        "sections": [
          {
            "dim": "100%",
            "horizontal": false,
            "sections": [
              {
                "content": [
                  {
                    "column": "DES"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "RAW"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "BTN"
                  }
                ],
                "horizontal": false
              }
            ]
          }
        ]
      },
      "object": "",
      "readOnly": true
    },
    {
      "cells": {
        "DES": {
          "obj": {
            "k": "Button - Icona e testo",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "Button - Icona e testo"
        },
        "RAW": {
          "obj": {
            "k": "B(Yes) I(VO;COD_VER;000112) T(Edit)",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "B(Yes) I(VO;COD_VER;000112) T(Edit)"
        },
        "BTN": {
          "config": {
            "showtext": true,
            "flat": false,
            "icon": "mdi mdi-pencil"
          },
          "obj": {
            "k": "B(Yes) I(VO;COD_VER;000112) T(Edit)",
            "p": "BTN",
            "t": "J4"
          },
          "options": false,
          "value": "Edit"
        }
      },
      "id": "13",
      "layout": {
        "horizontal": true,
        "sections": [
          {
            "dim": "100%",
            "horizontal": false,
            "sections": [
              {
                "content": [
                  {
                    "column": "DES"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "RAW"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "BTN"
                  }
                ],
                "horizontal": false
              }
            ]
          }
        ]
      },
      "object": "",
      "readOnly": true
    },
    {
      "cells": {
        "DES": {
          "obj": {
            "k": "Button - Immagine e testo",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "Button - Immagine e testo"
        },
        "RAW": {
          "obj": {
            "k": "B(Yes) M(CN;COL;CASFRA) T(bellicapelli)",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "B(Yes) M(CN;COL;CASFRA) T(bellicapelli)"
        },
        "BTN": {
          "config": {
            "showtext": true,
            "flat": false
          },
          "obj": {
            "k": "B(Yes) M(CN;COL;CASFRA) T(bellicapelli)",
            "p": "BTN",
            "t": "J4"
          },
          "options": false,
          "value": "bellicapelli"
        }
      },
      "id": "14",
      "layout": {
        "horizontal": true,
        "sections": [
          {
            "dim": "100%",
            "horizontal": false,
            "sections": [
              {
                "content": [
                  {
                    "column": "DES"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "RAW"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "BTN"
                  }
                ],
                "horizontal": false
              }
            ]
          }
        ]
      },
      "object": "",
      "readOnly": true
    },
    {
      "cells": {
        "DES": {
          "obj": {
            "k": "Button - Icona e tooltip",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "Button - Icona e tooltip"
        },
        "RAW": {
          "obj": {
            "k": "B(Yes) I(VO;COD_VER;000112) H(Edit)",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "B(Yes) I(VO;COD_VER;000112) H(Edit)"
        },
        "BTN": {
          "config": {
            "flat": false,
            "icon": "mdi mdi-pencil"
          },
          "obj": {
            "k": "B(Yes) I(VO;COD_VER;000112) H(Edit)",
            "p": "BTN",
            "t": "J4"
          },
          "options": false
        }
      },
      "id": "15",
      "layout": {
        "horizontal": true,
        "sections": [
          {
            "dim": "100%",
            "horizontal": false,
            "sections": [
              {
                "content": [
                  {
                    "column": "DES"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "RAW"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "BTN"
                  }
                ],
                "horizontal": false
              }
            ]
          }
        ]
      },
      "object": "",
      "readOnly": true
    },
    {
      "cells": {
        "DES": {
          "obj": {
            "k": "Button - Immagine e tooltip",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "Button - Immagine e tooltip"
        },
        "RAW": {
          "obj": {
            "k": "B(Yes) M(CN;COL;CASFRA) H(Bellicapelli)",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "B(Yes) M(CN;COL;CASFRA) H(Bellicapelli)"
        },
        "BTN": {
          "config": {
            "flat": false
          },
          "obj": {
            "k": "B(Yes) M(CN;COL;CASFRA) H(Bellicapelli)",
            "p": "BTN",
            "t": "J4"
          },
          "options": false
        }
      },
      "id": "16",
      "layout": {
        "horizontal": true,
        "sections": [
          {
            "dim": "100%",
            "horizontal": false,
            "sections": [
              {
                "content": [
                  {
                    "column": "DES"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "RAW"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "BTN"
                  }
                ],
                "horizontal": false
              }
            ]
          }
        ]
      },
      "object": "",
      "readOnly": true
    },
    {
      "cells": {
        "DES": {
          "obj": {
            "k": "Button - Icona con exec",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "Button - Icona con exec"
        },
        "RAW": {
          "obj": {
            "k": "B(Yes) I(VO;COD_VER;000112) E(F(EXD;*SCO;) 1(CN;CON;SANCOS))",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "B(Yes) I(VO;COD_VER;000112) E(F(EXD;*SCO;) 1(CN;CON;SANCOS))"
        },
        "BTN": {
          "config": {
            "flat": false,
            "icon": "mdi mdi-pencil"
          },
          "obj": {
            "k": "B(Yes) I(VO;COD_VER;000112) E(F(EXD;*SCO;) 1(CN;COL;SANCOS))",
            "p": "BTN",
            "t": "J4"
          },
          "options": false
        }
      },
      "id": "17",
      "layout": {
        "horizontal": true,
        "sections": [
          {
            "dim": "100%",
            "horizontal": false,
            "sections": [
              {
                "content": [
                  {
                    "column": "DES"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "RAW"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "BTN"
                  }
                ],
                "horizontal": false
              }
            ]
          }
        ]
      },
      "object": "",
      "readOnly": true
    },
    {
      "cells": {
        "DES": {
          "obj": {
            "k": "Button - Immagine con exec",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "Button - Immagine con exec"
        },
        "RAW": {
          "obj": {
            "k": "B(Yes) M(CN;COL;CASFRA) E(F(EXD;*SCO;) 1(CN;CON;CASFRA))",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "B(Yes) M(CN;COL;CASFRA) E(F(EXD;*SCO;) 1(CN;CON;CASFRA))"
        },
        "BTN": {
          "config": {
            "flat": false
          },
          "obj": {
            "k": "B(Yes) M(CN;COL;CASFRA) E(F(EXD;*SCO;) 1(CN;CON;CASFRA))",
            "p": "BTN",
            "t": "J4"
          },
          "options": false
        }
      },
      "id": "18",
      "layout": {
        "horizontal": true,
        "sections": [
          {
            "dim": "100%",
            "horizontal": false,
            "sections": [
              {
                "content": [
                  {
                    "column": "DES"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "RAW"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "BTN"
                  }
                ],
                "horizontal": false
              }
            ]
          }
        ]
      },
      "object": "",
      "readOnly": true
    },
    {
      "cells": {
        "DES": {
          "obj": {
            "k": "Button - Immagine con exec",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "Button - Immagine con exec"
        },
        "RAW": {
          "obj": {
            "k": "B(Yes) M(CN;COL;SANCOS) E(F(EXD;*SCO;) 1(CN;COL;SANCOS))",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "B(Yes) M(CN;COL;SANCOS) E(F(EXD;*SCO;) 1(CN;COL;SANCOS))"
        },
        "BTN": {
          "config": {
            "showtext": true,
            "flat": false
          },
          "obj": {
            "k": "B(Yes) M(CN;COL;SANCOS) T(Run action) E(F(EXD;*SCO;) 1(CN;COL;SANCOS))",
            "p": "BTN",
            "t": "J4"
          },
          "options": false,
          "value": "Run action"
        }
      },
      "id": "19",
      "layout": {
        "horizontal": true,
        "sections": [
          {
            "dim": "100%",
            "horizontal": false,
            "sections": [
              {
                "content": [
                  {
                    "column": "DES"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "RAW"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "BTN"
                  }
                ],
                "horizontal": false
              }
            ]
          }
        ]
      },
      "object": "",
      "readOnly": true
    },
    {
      "cells": {
        "DES": {
          "obj": {
            "k": "Button - Immagine con exec",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "Button - Immagine con exec"
        },
        "RAW": {
          "obj": {
            "k": "B(Yes) T(Dettaglio) E(F(EXD;*SCO;) 1(CN;COL;SANCOS))",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "B(Yes) T(Dettaglio) E(F(EXD;*SCO;) 1(CN;COL;SANCOS))"
        },
        "BTN": {
          "config": {
            "showtext": true,
            "flat": false
          },
          "obj": {
            "k": "B(Yes) T(Dettaglio) E(F(EXD;*SCO;) 1(CN;COL;SANCOS))",
            "p": "BTN",
            "t": "J4"
          },
          "options": false,
          "value": "Dettaglio"
        }
      },
      "id": "20",
      "layout": {
        "horizontal": true,
        "sections": [
          {
            "dim": "100%",
            "horizontal": false,
            "sections": [
              {
                "content": [
                  {
                    "column": "DES"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "RAW"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "BTN"
                  }
                ],
                "horizontal": false
              }
            ]
          }
        ]
      },
      "object": "",
      "readOnly": true
    },
    {
      "cells": {
        "DES": {
          "obj": {
            "k": "Button - Icona con exec e style",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "Button - Icona con exec e style"
        },
        "RAW": {
          "obj": {
            "k": "B(Yes) S(a) I(VO;COD_VER;000112) E(F(EXD;*SCO;) 1(CN;CON;SANCOS))",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "B(Yes) S(a) I(VO;COD_VER;000112) E(F(EXD;*SCO;) 1(CN;CON;SANCOS))"
        },
        "BTN": {
          "config": {
            "flat": false,
            "icon": "mdi mdi-pencil"
          },
          "obj": {
            "k": "B(Yes) S(a) I(VO;COD_VER;000112) E(F(EXD;*SCO;) 1(CN;COL;SANCOS))",
            "p": "BTN",
            "t": "J4"
          },
          "options": false
        }
      },
      "id": "21",
      "layout": {
        "horizontal": true,
        "sections": [
          {
            "dim": "100%",
            "horizontal": false,
            "sections": [
              {
                "content": [
                  {
                    "column": "DES"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "RAW"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "BTN"
                  }
                ],
                "horizontal": false
              }
            ]
          }
        ]
      },
      "object": "",
      "readOnly": true
    },
    {
      "cells": {
        "DES": {
          "obj": {
            "k": "Button - Icona, testo e style",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "Button - Icona, testo e style"
        },
        "RAW": {
          "obj": {
            "k": "B(Yes) S(a) I(VO;COD_VER;000112) T(Edit)",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "B(Yes) S(a) I(VO;COD_VER;000112) T(Edit)"
        },
        "BTN": {
          "config": {
            "showtext": true,
            "flat": false,
            "icon": "mdi mdi-pencil"
          },
          "obj": {
            "k": "B(Yes) S(a) I(VO;COD_VER;000112) T(Edit)",
            "p": "BTN",
            "t": "J4"
          },
          "options": false,
          "value": "Edit"
        }
      },
      "id": "22",
      "layout": {
        "horizontal": true,
        "sections": [
          {
            "dim": "100%",
            "horizontal": false,
            "sections": [
              {
                "content": [
                  {
                    "column": "DES"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "RAW"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "BTN"
                  }
                ],
                "horizontal": false
              }
            ]
          }
        ]
      },
      "object": "",
      "readOnly": true
    },
    {
      "cells": {
        "DES": {
          "obj": {
            "k": "Button - Solo testo e style",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "Button - Solo testo e style"
        },
        "RAW": {
          "obj": {
            "k": "B(Yes) S(a) T(Edit)",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "B(Yes) S(a) T(Edit)"
        },
        "BTN": {
          "config": {
            "showtext": true,
            "flat": false
          },
          "obj": {
            "k": "B(Yes) S(a) T(Edit)",
            "p": "BTN",
            "t": "J4"
          },
          "options": false,
          "value": "Edit"
        }
      },
      "id": "23",
      "layout": {
        "horizontal": true,
        "sections": [
          {
            "dim": "100%",
            "horizontal": false,
            "sections": [
              {
                "content": [
                  {
                    "column": "DES"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "RAW"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "BTN"
                  }
                ],
                "horizontal": false
              }
            ]
          }
        ]
      },
      "object": "",
      "readOnly": true
    },
    {
      "cells": {
        "DES": {
          "obj": {
            "k": "Button - Icona, testo e Fill",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "Button - Icona, testo e Fill"
        },
        "RAW": {
          "obj": {
            "k": "B(Yes) I(VO;COD_VER;000112) T(Edit) F(Yes)",
            "p": "",
            "t": ""
          },
          "options": false,
          "value": "B(Yes) I(VO;COD_VER;000112) T(Edit) F(Yes)"
        },
        "BTN": {
          "config": {
            "showtext": true,
            "flat": false,
            "fillspace": true,
            "icon": "mdi mdi-pencil"
          },
          "obj": {
            "k": "B(Yes) I(VO;COD_VER;000112) T(Edit) F(Yes)",
            "p": "BTN",
            "t": "J4"
          },
          "options": false,
          "value": "Edit"
        }
      },
      "id": "24",
      "layout": {
        "horizontal": true,
        "sections": [
          {
            "dim": "100%",
            "horizontal": false,
            "sections": [
              {
                "content": [
                  {
                    "column": "DES"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "RAW"
                  }
                ],
                "horizontal": false
              },
              {
                "content": [
                  {
                    "column": "BTN"
                  }
                ],
                "horizontal": false
              }
            ]
          }
        ]
      },
      "object": "",
      "readOnly": true
    }
  ]
};

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
