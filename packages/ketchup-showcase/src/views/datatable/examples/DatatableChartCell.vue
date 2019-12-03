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
                value: 'J4;CHART;PIE;1;2;1',
                options: true,
              },
              FLD2: {
                obj: {
                  t: 'J4',
                  p: 'CHART',
                  k: '1;2;1',
                },
                value: 'CHART;PIE\\\\1;2;1',
                config: { cellId: 'pie_example', width: 100, height: 100 },
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
                value: 'J4;CHART;BAR;1;7;-5;6;10;-5;3;4',
                options: true,
              },
              FLD2: {
                obj: {
                  t: 'J4',
                  p: 'CHART',
                  k: '1;7;-5;6;10;-5;3;4',
                },
                value: 'CHART;BAR\\\\1;7;-5;6;10;-5;3;4',
                config: { cellId: 'bar_example' },
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
                value: 'J4;CHART;LIN;1;7;-5;6;10;-5;3;4',
                options: true,
              },
              FLD2: {
                obj: {
                  t: 'J4',
                  p: 'CHART',
                  k: '1;7;-5;6;10;-5;3;4',
                },
                value: 'CHART;LIN\\\\1;7;-5;6;10;-5;3;4',
                config: {
                  cellId: 'lin_example',
                  width: '80',
                  color: 'R255G000B000',
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
                value: 'J4;CHART;DIS;1;7;-5;6;10;-5;3;4',
                options: true,
              },
              FLD2: {
                obj: {
                  t: 'J4',
                  p: 'CHART',
                  k: '1;7;-5;6;10;-5;3;4',
                },
                value: 'CHART;DIS\\\\1;7;-5;6;10;-5;3;4',
                config: {
                  cellId: 'dis_example',
                  width: '100',
                  color: 'R000G255B000',
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
                  'J4;CHART;BUL;10;12;12;9;7 (target; performance; range1; range2; rarange3... )',
                options: true,
              },
              FLD2: {
                obj: {
                  t: 'J4',
                  p: 'CHART',
                  k:
                    '10;12;12;9;7 (target; performance; range1; range2; rarange3... )',
                },
                value: 'CHART;BUL\\\\10;12;12;9;7',
                /*'CHART;BUL\\\\10;12;12;9;7 (target; performance; range1; range2; rarange3... )',*/
                config: { cellId: 'bul_example', width: '80' },
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
                  'J4;CHART;BOX;4;27;34;52;54;59;61;68;78;82;85;87;91;93;100',
                options: true,
              },
              FLD2: {
                obj: {
                  t: 'J4',
                  p: 'CHART',
                  k: '4;27;34;52;54;59;61;68;78;82;85;87;91;93;100',
                },
                value:
                  'CHART;BOX\\\\4;27;34;52;54;59;61;68;78;82;85;87;91;93;100',
                config: { cellId: 'box_example' },
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
                value: 'J4;CHART;TRI;1;1;-1;1;0;0;-1',
                options: true,
              },
              FLD2: {
                obj: {
                  t: 'J4',
                  p: 'CHART',
                  k: '1;1;-1;1;0;0;-10',
                },
                value: 'CHART;TRI\\\\1;1;-1;1;0;0;-1',
                config: { cellId: 'tristate_example', width: 100, height: 100 },
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
