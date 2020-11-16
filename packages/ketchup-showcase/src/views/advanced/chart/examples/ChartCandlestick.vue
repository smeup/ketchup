<template>
  <div>
    <kup-chart
      :data.prop="csData"
      :types.prop="types"
      axis="Col1"
      :series.prop="[
        { code: 'Col2', decode: 'Col2' },
        { code: 'Col3', decode: 'Col3' },
        { code: 'Col4', decode: 'Col4' },
        { code: 'Col5', decode: 'Col5' },
      ]"
    />
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      types: ['Candlestick'],
      csData: {
        columns: [
          {
            name: 'Col1',
            title: 'Day',
            size: '10',
          },
          {
            name: 'Col2',
            title: 'low',
            size: '10',
          },
          {
            name: 'Col3',
            title: 'open',
            size: '10',
          },
          {
            name: 'Col4',
            title: 'close',
            size: '10',
          },
          {
            name: 'Col5',
            title: 'high',
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
                  k: '',
                },
                value: 'Mon',
              },
              Col2: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '20',
                },
                value: '20',
              },
              Col3: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '28',
                },
                value: '28',
              },
              Col4: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '38',
                },
                value: '38',
              },
              Col5: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '45',
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
                  k: '',
                },
                value: 'Tue',
              },
              Col2: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '31',
                },
                value: '31',
              },
              Col3: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '38',
                },
                value: '38',
              },
              Col4: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '55',
                },
                value: '55',
              },
              Col5: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '66',
                },
                value: '66',
              },
            },
          },
          {
            cells: {
              Col1: {
                obj: {
                  t: '',
                  p: '',
                  k: '',
                },
                value: 'Wed',
              },
              Col2: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '68',
                },
                value: '68',
              },
              Col3: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '66',
                },
                value: '66',
              },
              Col4: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '22',
                },
                value: '22',
              },
              Col5: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '15',
                },
                value: '15',
              },
            },
          },
        ],
      },
    };
  },
};
</script>
