<template>
  <div>
    <kup-chart
      :data.prop="sankeyData"
      :types.prop="types"
      axis="Col1"
      :series.prop="[
        { code: 'Col2', decode: 'Col2' },
        { code: 'Col3', decode: 'Col3' },
      ]"
    />
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      types: ['Sankey'],
      sankeyData: {
        columns: [
          {
            name: 'Col1',
            title: 'From',
            size: '10',
          },
          {
            name: 'Col2',
            title: 'To',
            size: '10',
          },
          {
            name: 'Col3',
            title: 'Weight',
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
                  k: 'A',
                },
                value: 'A',
              },
              Col2: {
                obj: {
                  t: '',
                  p: '',
                  k: 'X',
                },
                value: 'X',
              },
              Col3: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '5',
                },
                value: '5',
              },
            },
          },
          {
            cells: {
              Col1: {
                obj: {
                  t: '',
                  p: '',
                  k: 'A',
                },
                value: 'A',
              },
              Col2: {
                obj: {
                  t: '',
                  p: '',
                  k: 'Y',
                },
                value: 'Y',
              },
              Col3: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '7',
                },
                value: '7',
              },
            },
          },
          {
            cells: {
              Col1: {
                obj: {
                  t: '',
                  p: '',
                  k: 'A',
                },
                value: 'A',
              },
              Col2: {
                obj: {
                  t: '',
                  p: '',
                  k: 'Z',
                },
                value: 'Z',
              },
              Col3: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '6',
                },
                value: '6',
              },
            },
          },
          {
            cells: {
              Col1: {
                obj: {
                  t: '',
                  p: '',
                  k: 'B',
                },
                value: 'B',
              },
              Col2: {
                obj: {
                  t: '',
                  p: '',
                  k: 'X',
                },
                value: 'X',
              },
              Col3: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '2',
                },
                value: '2',
              },
            },
          },
          {
            cells: {
              Col1: {
                obj: {
                  t: '',
                  p: '',
                  k: 'B',
                },
                value: 'B',
              },
              Col2: {
                obj: {
                  t: '',
                  p: '',
                  k: 'Y',
                },
                value: 'Y',
              },
              Col3: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '9',
                },
                value: '9',
              },
            },
          },
          {
            cells: {
              Col1: {
                obj: {
                  t: '',
                  p: '',
                  k: 'B',
                },
                value: 'B',
              },
              Col2: {
                obj: {
                  t: '',
                  p: '',
                  k: 'Z',
                },
                value: 'Z',
              },
              Col3: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '4',
                },
                value: '4',
              },
            },
          },
        ],
      },
    };
  },
};
</script>
