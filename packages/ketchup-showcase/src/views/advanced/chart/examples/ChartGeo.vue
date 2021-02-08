<template>
  <div>
    <kup-chart
      :data.prop="geoData"
      :types.prop="types"
      axis="Col1"
      :series.prop="[{ code: 'Col2', decode: 'Col2' }]"
    />
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      types: ['Geo'],
      geoData: {
        columns: [
          {
            name: 'Col1',
            title: 'State',
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
                  t: '',
                  p: '',
                  k: 'Germany',
                },
                value: 'Germany',
              },
              Col2: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '200',
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
                  k: 'United States',
                },
                value: 'United States',
              },
              Col2: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '300',
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
                  k: 'Brazil',
                },
                value: 'Brazil',
              },
              Col2: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '400',
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
                  k: 'Canada',
                },
                value: 'Canada',
              },
              Col2: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '500',
                },
                value: '500',
              },
            },
          },
          {
            cells: {
              Col1: {
                obj: {
                  t: '',
                  p: '',
                  k: 'France',
                },
                value: 'France',
              },
              Col2: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '600',
                },
                value: '600',
              },
            },
          },
        ],
      },
    };
  },
};
</script>
