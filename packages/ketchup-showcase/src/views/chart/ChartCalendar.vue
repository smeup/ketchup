<template>
  <div>
    <h1>Calendar charts</h1>
    <kup-chart
      :data.prop="calendarData"
      :type="type"
      axis="Col1"
      :series.prop="['Col2']"
    />
    <hr />
  </div>
</template>

<script>
export default {
  name: 'KupCharts',
  data() {
    return {
      type: 'Cal',
      calendarData: {
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
                  k: '20190101',
                },
                value: '01/01/2019',
              },
              Col2: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '1000',
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
                  k: '20190603',
                },
                value: '03/06/2019',
              },
              Col2: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '2000',
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
                  k: '20191212',
                },
                value: '12/12/2019',
              },
              Col2: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '1700',
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
                  k: '20190725',
                },
                value: '25/07/2019',
              },
              Col2: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '800',
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
                  k: '20190903',
                },
                value: '03/09/2019',
              },
              Col2: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '2300',
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
                  k: '20190518',
                },
                value: '18/05/2019',
              },
              Col2: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '450',
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
                  k: '20190415',
                },
                value: '15/04/2019',
              },
              Col2: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '900',
                },
                value: '900',
              },
            },
          },
        ],
      },
    };
  },
};
</script>
