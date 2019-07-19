<template>
  <div>
    <h1>Scatter charts</h1>
    <kup-chart
      :data.prop="scatterData"
      :type="type"
      axe="Col1"
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
      type: 'Scatter',
      scatterData: {
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
                  k: '8',
                },
                value: '8',
              },
              Col2: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '12',
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
                  k: '4',
                },
                value: '4',
              },
              Col2: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '5.5',
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
                  k: '11',
                },
                value: '11',
              },
              Col2: {
                obj: {
                  t: 'NR',
                  p: '',
                  k: '14',
                },
                value: '14',
              },
            },
          },
        ],
      },
    };
  },
};
</script>
