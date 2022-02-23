export const jlObjectsDataTable = {
  columns: [
    {
      name: 'JL_00',
      title: 'JL Objects',
    },
  ],
  rows: [
    {
      cells: {
        JL_00: {
          obj: {
            t: 'JL',
            p: '**',
            k: '',
          },
          value: '',
        },
      },
    },
    {
      cells: {
        JL_00: {
          data: {
            data: [
              {
                id: 'text',
                value: 'Text only',
              },
              {
                id: 'icon',
                icon: 'widgets',
                value: 'With icon',
              },
            ],
          },
          obj: {
            t: 'JL',
            p: '**',
            k: 'text;icon',
          },
          value: 'text;icon',
          options: false,
        },
      },
    },
    {
      cells: {
        JL_00: {
          data: {
            data: [
              {
                value: 'Federico Robertozzi',
              },
              {
                value: 'Parodonte Frascati',
              },
            ],
          },
          obj: {
            t: 'JL',
            p: 'CNCOL',
            k: 'FEDROB;PARFRA',
          },
          value: 'Federico Robertozzi;Parodonte Frascati',
          options: false,
        },
      },
    },
  ],
};
