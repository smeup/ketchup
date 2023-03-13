<template>
  <div>
    <div class="demo-container">
      <div class="kup-container">
        <kup-echart
          :axis.prop="chartProps.axis"
          :data.prop="chartProps.data"
          :legend.prop="chartProps.legend"
          :series.prop="chartProps.series"
          :sizeX.prop="chartProps.sizeX"
          :sizeY.prop="chartProps.sizeY"
          :types.prop="chartProps.types"
      /></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      axis: 'INT',
      types: ['Funnel'],
      data: {
        columns: [
          {
            isEditable: false,
            isKey: false,
            name: 'INT',
            obj: {
              k: '',
              p: 'STR',
              t: 'J1',
            },
            title: 'Description',
            tooltip: true,
          },
          {
            decimals: 0,
            isEditable: false,
            isKey: false,
            name: 'NUM',
            obj: {
              k: '',
              p: '',
              t: 'NR',
            },
            title: 'Value',
            tooltip: false,
          },
        ],
        rows: [
          {
            cells: {
              NUM: {
                obj: {
                  k: '124',
                  p: '',
                  t: 'NR',
                },
                value: '124',
              },
              INT: {
                obj: {
                  k: 'Visits',
                  p: 'STR',
                  t: 'J1',
                },
                value: 'Visits',
              },
            },
            id: '0',
            object: '',
            readOnly: true,
          },
          {
            cells: {
              NUM: {
                obj: {
                  k: '68',
                  p: '',
                  t: 'NR',
                },
                value: '68',
              },
              INT: {
                obj: {
                  k: 'Clicks',
                  p: 'STR',
                  t: 'J1',
                },
                value: 'Clicks',
              },
            },
            id: '1',
            object: '',
            readOnly: true,
          },
          {
            cells: {
              NUM: {
                obj: {
                  k: '13',
                  p: '',
                  t: 'NR',
                },
                value: '13',
              },
              INT: {
                obj: {
                  k: 'Inquiries',
                  p: 'STR',
                  t: 'J1',
                },
                value: 'Inquiries',
              },
            },
            id: '2',
            object: '',
            readOnly: true,
          },
          {
            cells: {
              NUM: {
                obj: {
                  k: '2',
                  p: '',
                  t: 'NR',
                },
                value: '2',
              },
              INT: {
                obj: {
                  k: 'Orders',
                  p: 'STR',
                  t: 'J1',
                },
                value: 'Orders',
              },
            },
            id: '3',
            object: '',
            readOnly: true,
          },
          {
            cells: {
              NUM: {
                obj: {
                  k: '402',
                  p: '',
                  t: 'NR',
                },
                value: '402',
              },
              INT: {
                obj: {
                  k: 'Impressions',
                  p: 'STR',
                  t: 'J1',
                },
                value: 'Impressions',
              },
            },
            id: '4',
            object: '',
            readOnly: true,
          },
        ],
      },
      legend: 'top',
    };
  },
};
</script>

<style scoped lang="scss">
.kup-container {
  height: 300px;
  padding: 0;
}
</style>
