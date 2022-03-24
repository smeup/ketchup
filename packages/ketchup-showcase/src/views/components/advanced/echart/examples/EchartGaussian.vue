<template>
  <div>
    <div>
      <h4>Simple series</h4>
      <p
        >This is a simple Gaussian chart that contains three series of the same
        type.</p
      >
      <div class="demo-container">
        <div class="kup-container">
          <kup-echart
            :series.prop="simpleSeries"
            :types.prop="simpleTypes"
            :data.prop="createData()"
            legend="top"
        /></div>
      </div>
    </div>
    <div>
      <h4>One Gaussian series and one Bar series</h4>
      <p
        >This example shows a Gaussian series and a Bar series. The Bar series
        is automatically sorted to be compared with the Gaussian one. The X axis
        for the bar series is bottom while for the Gaussian series it is top.
        The Y axis for the bar series is on the left while for the Gaussian
        series it is on the right.</p
      >
      <div class="demo-container">
        <div class="kup-container">
          <kup-echart
            :series.prop="sortedSeries"
            :types.prop="sortedTypes"
            :data.prop="createComplexData()"
            axis="COL3"
            legend="top"
        /></div>
      </div>
    </div>
    <div>
      <h4>One Gaussian series, one Bar series and one Scatter series</h4>
      <p
        >This example shows a Gaussian, a Bar and a Scatter series. The X axis
        for the non Gaussian series is bottom while for the Gaussian series it
        is top. The Y axis for the non Gaussian series is on the left while for
        the Gaussian series it is on the right.</p
      >
      <div class="demo-container">
        <div class="kup-container">
          <kup-echart
            :series.prop="mixedSeries"
            :types.prop="mixedTypes"
            :data.prop="createComplexData()"
            axis="COL3"
            legend="top"
        /></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      simpleSeries: ['S1', 'S2', 'S3'],
      simpleTypes: ['Gaussian'],
      sortedSeries: ['COL1', 'COL4'],
      sortedTypes: ['Gaussian', 'Bar'],
      mixedSeries: ['COL1', 'COL4', 'COL2'],
      mixedTypes: ['Gaussian', 'Bar', 'Scatter'],
    };
  },
  methods: {
    createData() {
      const rows = [];
      const columns = [
        {
          name: 'S1',
          obj: { t: 'NR', p: '', k: '' },
          title: 'Series 1',
        },
        {
          name: 'S2',
          obj: { t: 'NR', p: '', k: '' },
          title: 'Series 2',
        },
        {
          name: 'S3',
          obj: { t: 'NR', p: '', k: '' },
          title: 'Series 3',
        },
      ];
      for (let index = 0; index < 200; index++) {
        const value1 = (Math.random() * (20 - 10 + 1) + 10).toString();
        const value2 = (Math.random() * (50 - 45 + 1) + 45).toString();
        const value3 = (Math.random() * (5 - 4.8 + 1) + 4.8).toString();
        const row = {
          cells: {
            S1: {
              obj: {
                t: 'NR',
                p: '',
                k: value1,
              },
              value: value1,
            },
            S2: {
              obj: {
                t: 'NR',
                p: '',
                k: value2,
              },
              value: value2,
            },
            S3: {
              obj: {
                t: 'NR',
                p: '',
                k: value3,
              },
              value: value3,
            },
          },
        };
        rows.push(row);
      }
      return {
        columns: columns,
        rows: rows,
      };
    },
    createComplexData() {
      const ySeries = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'Z',
      ];

      const rows = [];
      for (let index = 0; index < ySeries.length; index++) {
        const element = ySeries[index];
        const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);

        rows.push({
          cells: {
            COL1: {
              obj: {
                t: 'NR',
                p: '',
                k: value1.toString(),
              },
              value: value1.toString(),
            },
            COL2: {
              obj: {
                t: 'NR',
                p: '',
                k: value2.toString(),
              },
              value: value2.toString(),
            },
            COL3: {
              value: element,
            },
            COL4: {
              obj: {
                t: 'NR',
                p: '',
                k: value1.toString(),
              },
              value: value1.toString(),
            },
          },
        });
      }
      const columns = [
        {
          name: 'COL1',
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          title: 'Series 1',
        },
        {
          name: 'COL2',
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          title: 'Series 2',
        },
        {
          name: 'COL3',
          title: 'Series 3',
        },
        {
          name: 'COL4',
          obj: {
            t: 'NR',
            p: '',
            k: '',
          },
          title: 'Copy of Series 1',
        },
      ];
      return {
        columns: columns,
        rows: rows,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.kup-container {
  height: 300px;
  padding: 0;
}
</style>
