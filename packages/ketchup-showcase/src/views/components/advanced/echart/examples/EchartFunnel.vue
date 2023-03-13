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
      chartProps: {
        axis: 'INT',
        chartTitle: {},
        colors: [],
        consistencyCheck: true,
        customStyle: '',
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
              title: 'Significato indice',
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
              title: 'Valore',
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
                    k: 'Attività Marketig',
                    p: 'STR',
                    t: 'J1',
                  },
                  value: 'Attività Marketig',
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
                    k: 'Lead Da Campagna',
                    p: 'STR',
                    t: 'J1',
                  },
                  value: 'Lead Da Campagna',
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
                    k: 'Opportunità Create Campagna',
                    p: 'STR',
                    t: 'J1',
                  },
                  value: 'Opportunità Create Campagna',
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
                    k: 'opportunità Vinte Campagna',
                    p: 'STR',
                    t: 'J1',
                  },
                  value: 'opportunità Vinte Campagna',
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
                    k: 'Pagine Visitate Lead Champion',
                    p: 'STR',
                    t: 'J1',
                  },
                  value: 'Pagine Visitate Lead Champion',
                },
              },
              id: '4',
              object: '',
              readOnly: true,
            },
          ],
        },
        legend: 'hidden',
        map: null,
        series: ['NUM'],
        sizeX: '750',
        sizeY: '460px',
        types: ['Funnel'],
        xAxis: {
          axisLabel: {},
          mainType: 'xAxis',
        },
        yAxis: {
          axisLabel: {},
          mainType: 'yAxis',
        },
      },
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
