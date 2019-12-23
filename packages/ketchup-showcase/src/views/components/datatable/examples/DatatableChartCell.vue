<template>
  <div>
    <h3>Chart jquery.sparkline</h3>

    <kup-data-table :data.prop="gcData"></kup-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gcData: {
        columns: [
          {
            name: 'FLD1',
            title: 'Value',
            size: '',
          },
          {
            name: 'FLD2',
            title: 'Chart cell',
            size: 100,
          },
        ],
        rows: [
          {
            cells: {
              FLD1: {
                obj: {
                  t: '',
                  p: '',
                  k: '',
                },
                value: 'J4;GRA_PIE;1;2;1',
                options: true,
              },
              FLD2: {
                obj: {
                  t: 'J4',
                  p: 'GRA_PIE',
                  k: '1;2;1',
                },
                value: '1;2;1',
                config: {
                  cellId: 'pie_example',
                  //width: 100,
                  //height: 100,
                  type: 'pie',
                },
                options: true,
              },
            },
          },
          {
            cells: {
              FLD1: {
                obj: {
                  t: '',
                  p: '',
                  k: '',
                },
                value: 'J4;GRA_BAR;1;7;-5;6;10;-5;3;4',
                options: true,
              },
              FLD2: {
                obj: {
                  t: 'J4',
                  p: 'GRA_BAR',
                  k: '1;7;-5;6;10;-5;3;4',
                },
                value: '1;7;-5;6;10;-5;3;4',
                config: { cellId: 'bar_example', type: 'bar' },
                options: true,
              },
            },
          },
          {
            cells: {
              FLD1: {
                obj: {
                  t: '',
                  p: '',
                  k: '',
                },
                value: 'J4;GRA_LIN;1;7;-5;6;10;-5;3;4',
                options: true,
              },
              FLD2: {
                obj: {
                  t: 'J4',
                  p: 'GRA_LIN',
                  k: '1;7;-5;6;10;-5;3;4',
                },
                value: '1;7;-5;6;10;-5;3;4',
                config: {
                  cellId: 'lin_example',
                  //width: '80',
                  //color: 'R255G000B000',
                  type: 'lin',
                },
                options: true,
              },
            },
          },
          {
            cells: {
              FLD1: {
                obj: {
                  t: '',
                  p: '',
                  k: '',
                },
                value: 'J4;GRA_DIS;1;7;-5;6;10;-5;3;4',
                options: true,
              },
              FLD2: {
                obj: {
                  t: 'J4',
                  p: 'GRA_DIS',
                  k: '1;7;-5;6;10;-5;3;4',
                },
                value: '1;7;-5;6;10;-5;3;4',
                config: {
                  cellId: 'dis_example',
                  //width: '100',
                  //color: 'R000G255B000',
                  type: 'dis',
                },
                options: true,
              },
            },
          },
          {
            cells: {
              FLD1: {
                obj: {
                  t: '',
                  p: '',
                  k: '',
                },
                value:
                  'J4;GRA_BUL;10;12;12;9;7 (target; performance; range1; range2; rarange3... )',
                options: true,
              },
              FLD2: {
                obj: {
                  t: 'J4',
                  p: 'GRA_BUL',
                  k: '10;12;12;9;7',
                },
                value: '10;12;12;9;7',
                config: {
                  cellId: 'bul_example',
                  //width: '80',
                  type: 'bul',
                },
                options: true,
              },
            },
          },
          {
            cells: {
              FLD1: {
                obj: {
                  t: '',
                  p: '',
                  k: '',
                },
                value:
                  'J4;GRA_BOX;4;27;34;52;54;59;61;68;78;82;85;87;91;93;100',
                options: true,
              },
              FLD2: {
                obj: {
                  t: 'J4',
                  p: 'GRA_BOX',
                  k: '4;27;34;52;54;59;61;68;78;82;85;87;91;93;100',
                },
                value: '4;27;34;52;54;59;61;68;78;82;85;87;91;93;100',
                config: { cellId: 'box_example', type: 'box' },
                options: true,
              },
            },
          },
          {
            cells: {
              FLD1: {
                obj: {
                  t: '',
                  p: '',
                  k: '',
                },
                value: 'J4;GRA_TRI;1;1;-1;1;0;0;-1',
                options: true,
              },
              FLD2: {
                obj: {
                  t: 'J4',
                  p: 'GRA_TRI',
                  k: '1;1;-1;1;0;0;-10',
                },
                value: '1;1;-1;1;0;0;-1',
                config: {
                  cellId: 'tristate_example',
                  //width: 100,
                  //height: 100,
                  type: 'tri',
                },
                options: true,
              },
            },
          },
        ],
      },
    };
  },
};
</script>
