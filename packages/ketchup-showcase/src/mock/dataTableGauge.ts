export const gaugeShapesDataTable = {
  columns: [
    {
      name: 'GAU_00',
      title: 'Gau shapes',
    },
    {
      name: 'DESCR',
      title: 'Description',
    },
  ],
  rows: [
    {
      cells: {
        GAU_00: {
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          shape: 'Gau',
          options: false,
        },
        DESCR: {
          value: 'No data',
        },
      },
    },
    {
      cells: {
        GAU_00: {
          obj: {
            t: 'NR',
            p: '',
            k: '50',
          },
          value: '50',
          shape: 'Gau',
          options: false,
        },
        DESCR: {
          value: 'Only value',
        },
      },
    },
    {
      cells: {
        GAU_00: {
          data: {
            minValue: '30',
            maxValue: '150',
          },
          obj: {
            t: 'NR',
            p: '',
            k: '50',
          },
          value: '50',
          shape: 'Gau',
          options: false,
        },
        DESCR: {
          value: 'Max and min',
        },
      },
    },
    {
      cells: {
        GAU_00: {
          data: {
            firstThreshold: '30',
          },
          obj: {
            t: 'NR',
            p: '',
            k: '50',
          },
          value: '50',
          shape: 'Gau',
          options: false,
        },
        DESCR: {
          value: 'With one threshold',
        },
      },
    },
    {
      cells: {
        GAU_00: {
          data: {
            firstThreshold: '15',
            secondThreshold: '45',
          },
          obj: {
            t: 'NR',
            p: '',
            k: '50',
          },
          value: '50',
          shape: 'Gau',
          options: false,
        },
        DESCR: {
          value: 'With two thresholds',
        },
      },
    },
    {
      cells: {
        GAU_00: {
          data: {
            reverseColors: 'true',
          },
          obj: {
            t: 'NR',
            p: '',
            k: '50',
          },
          value: '50',
          shape: 'Gau',
          options: false,
        },
        DESCR: {
          value: 'Reverse colors',
        },
      },
    },
    {
      cells: {
        GAU_00: {
          data: {
            firstThreshold: '33',
            secondThreshold: '66',
            onlyValue: 'true',
          },
          obj: {
            t: 'NR',
            p: '',
            k: '50',
          },
          value: '50',
          shape: 'Gau',
          options: false,
        },
        DESCR: {
          value: 'Only value',
        },
      },
    },
    {
      cells: {
        GAU_00: {
          data: {
            showValue: 'false',
          },
          obj: {
            t: 'NR',
            p: '',
            k: '50',
          },
          value: '50',
          shape: 'Gau',
          options: false,
        },
        DESCR: {
          value: 'No show value',
        },
      },
    },
    {
      cells: {
        GAU_00: {
          data: {
            minValue: '0',
            firstThreshold: '20',
            maxValue: '200',
            secondThreshold: '50',
            measurementUnit: 'C°',
          },
          obj: {
            t: 'NR',
            p: '',
            k: '50',
          },
          value: '50',
          shape: 'Gau',
          options: false,
        },
        DESCR: {
          value: 'With measurement unit',
        },
      },
    },
  ],
};
