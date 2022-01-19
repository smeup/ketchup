<template>
  <div>
    <div class="demo-container">
      <div class="kup-container">
        <kup-echart
          :series.prop="series"
          :types.prop="types"
          :data.prop="createData()"
          legend="top"
      /></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      series: ['S1', 'S2', 'S3'],
      types: ['Gaussian'],
    };
  },
  methods: {
    createData() {
      const rows = [];
      const columns = [
        {
          name: 'S1',
          title: 'Series 1',
        },
        {
          name: 'S2',
          title: 'Series 2',
        },
        {
          name: 'S3',
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
  },
};
</script>

<style scoped lang="scss">
.kup-container {
  height: 300px;
  padding: 0;
}
</style>
