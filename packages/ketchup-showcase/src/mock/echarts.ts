export const baseData = {
  columns: [
    {
      name: 'Col1',
      title: 'Department',
      size: '10',
    },
    {
      name: 'Col2',
      title: 'Current Budget',
      size: '10',
    },
    {
      name: 'Col3',
      title: 'Projected Budget',
      size: '10',
    },
    {
      name: 'Col4',
      title: 'Allocated Budget',
      size: '10',
    },
  ],
  rows: [
    {
      cells: {
        Col1: {
          obj: {
            t: 'CN',
            p: 'COL',
          },
          value: 'Marketing',
        },
        Col2: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '10',
        },
        Col3: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '100.50',
        },
        Col4: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '55',
        },
      },
    },
    {
      cells: {
        Col1: {
          obj: {
            t: 'CN',
            p: 'COL',
          },
          value: 'Sales',
        },
        Col2: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '6',
        },
        Col3: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '67.8',
        },
        Col4: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '33',
        },
      },
    },
    {
      cells: {
        Col1: {
          obj: {
            t: 'CN',
            p: 'COL',
          },
          value: 'Administration',
        },
        Col2: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '5',
        },
        Col3: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '120.06',
        },
        Col4: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '77',
        },
      },
    },
  ],
};

export const singleData = {
  columns: [
    {
      name: 'Col1',
      title: 'Person',
      size: '10',
    },

    {
      name: 'Col4',
      title: 'Value3',
      size: '10',
    },
  ],
  rows: [
    {
      cells: {
        Col1: {
          obj: {
            t: 'CN',
            p: 'COL',
          },
          value: 'CASFRA',
        },

        Col4: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '55',
        },
      },
      id: '0',
    },
    {
      cells: {
        Col1: {
          obj: {
            t: 'CN',
            p: 'COL',
          },
          value: 'DELGIO',
        },

        Col4: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '33',
        },
      },
      id: '1',
    },
    {
      cells: {
        Col1: {
          obj: {
            t: 'CN',
            p: 'COL',
          },
          value: 'PARFRA',
        },

        Col4: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '77',
        },
      },
      id: '2',
    },
  ],
};

export const comboData = {
  columns: [
    {
      name: 'Col1',
      title: 'State',
      size: '10',
    },
    {
      name: 'Col2',
      title: 'Value1',
      size: '10',
    },
    {
      name: 'Col3',
      title: 'Value2',
      size: '10',
    },
  ],
  rows: [
    {
      cells: {
        Col1: {
          obj: {
            t: '',
            p: '',
          },
          value: 'Italy',
        },
        Col2: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '50',
        },
        Col3: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '45',
        },
      },
    },
    {
      cells: {
        Col1: {
          obj: {
            t: '',
            p: '',
          },
          value: 'France',
        },
        Col2: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '60',
        },
        Col3: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '35',
        },
      },
    },
    {
      cells: {
        Col1: {
          obj: {
            t: '',
            p: '',
          },
          value: 'Spain',
        },
        Col2: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '45',
        },
        Col3: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '70',
        },
      },
    },
  ],
};

export const calendarData = {
  columns: [
    {
      name: 'Col1',
      title: 'Day',
      size: '10',
    },
    {
      name: 'Col2',
      title: 'value',
      size: '10',
    },
  ],
  rows: [
    {
      cells: {
        Col1: {
          obj: {
            t: 'D8',
            p: '*YYMD',
          },
          value: '2019-01-02',
        },
        Col2: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '1000',
        },
      },
    },
    {
      cells: {
        Col1: {
          obj: {
            t: 'D8',
            p: '*YYMD',
          },
          value: '2019-06-03',
        },
        Col2: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '2000',
        },
      },
    },
    {
      cells: {
        Col1: {
          obj: {
            t: 'D8',
            p: '*YYMD',
          },
          value: '2019-12-12',
        },
        Col2: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '1700',
        },
      },
    },
    {
      cells: {
        Col1: {
          obj: {
            t: 'D8',
            p: '*YYMD',
          },
          value: '2019-07-25',
        },
        Col2: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '800',
        },
      },
    },
    {
      cells: {
        Col1: {
          obj: {
            t: 'D8',
            p: '*YYMD',
          },
          value: '2019-09-03',
        },
        Col2: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '2300',
        },
      },
    },
    {
      cells: {
        Col1: {
          obj: {
            t: 'D8',
            p: '*YYMD',
          },
          value: '2019-05-18',
        },
        Col2: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '450',
        },
      },
    },
    {
      cells: {
        Col1: {
          obj: {
            t: 'D8',
            p: '*YYMD',
          },
          value: '2019-04-15',
        },
        Col2: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '900',
        },
      },
    },
  ],
};

export const ageWeightData = {
  columns: [
    {
      name: 'Col1',
      title: 'Age',
      size: '10',
    },
    {
      name: 'Col2',
      title: 'Weight',
      size: '10',
    },
  ],
  rows: [
    {
      cells: {
        Col1: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '4',
        },
        Col2: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '5.5',
        },
      },
    },
    {
      cells: {
        Col1: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '8',
        },
        Col2: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '12',
        },
      },
    },
    {
      cells: {
        Col1: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '11',
        },
        Col2: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '14',
        },
      },
    },
  ],
};

export const mapData = {
  columns: [
    {
      name: 'Col1',
      title: 'State',
      size: '10',
    },
    {
      name: 'Col2',
      title: 'Color',
      size: '10',
    },
    {
      name: 'Col3',
      title: 'Value',
      size: '10',
    },
  ],
  rows: [
    {
      cells: {
        Col1: {
          obj: {
            t: '',
            p: '',
          },
          value: 'Germany',
        },
        Col2: {
          obj: {
            t: 'Color',
            p: '',
          },
          value: 'red',
        },
        Col3: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '100',
        },
      },
    },
    {
      cells: {
        Col1: {
          obj: {
            t: '',
            p: '',
          },
          value: 'United States',
        },
        Col2: {
          obj: {
            t: 'Color',
            p: '',
          },
          value: 'Green',
        },
        Col3: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '200',
        },
      },
    },
    {
      cells: {
        Col1: {
          obj: {
            t: '',
            p: '',
          },
          value: 'Brazil',
        },
        Col2: {
          obj: {
            t: 'Color',
            p: '',
          },
          value: 'purple',
        },
        Col3: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '300',
        },
      },
    },
    {
      cells: {
        Col1: {
          obj: {
            t: '',
            p: '',
          },
          value: 'Canada',
        },
        Col2: {
          obj: {
            t: 'Color',
            p: '',
          },
          value: 'yellow',
        },
        Col3: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '400',
        },
      },
    },
    {
      cells: {
        Col1: {
          obj: {
            t: '',
            p: '',
          },
          value: 'France',
        },
        Col2: {
          obj: {
            t: 'Color',
            p: '',
          },
          value: 'orange',
        },
        Col3: {
          obj: {
            t: 'NR',
            p: '',
          },
          value: '500',
        },
      },
    },
  ],
};
