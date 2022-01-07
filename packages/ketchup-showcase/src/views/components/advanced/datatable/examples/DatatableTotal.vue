<style scoped>
h3 {
  margin: 1rem 0;
}
</style>

<template>
  <div>
    <h3>Count on Column A and Column D</h3>
    <kup-lazy component-name="kup-data-table" :data.prop="data"></kup-lazy>

    <h3>Sum on Column B and Column C</h3>
    <kup-lazy component-name="kup-data-table" :data.prop="data1"></kup-lazy>

    <h3>Average on Column B and Column C</h3>
    <kup-lazy component-name="kup-data-table" :data.prop="data2"></kup-lazy>

    <h3>
      Count on Column A, Sum on column B, Avg on Column C and count on Column d
    </h3>
    <kup-lazy component-name="kup-data-table" :data.prop="data3"></kup-lazy>
  </div>
</template>

<script>
import { sortDataTable } from '@/mock/dataTable';

export default {
  name: 'dataTableSort',

  data() {
    return {
      data: {
        showFilter: true,
        data: sortDataTable,
        totals: {
          FLD1: 'Count',
          FLD4: 'Count',
        },
      },
      data1: {
        showFilter: true,
        data: sortDataTable,
        totals: {
          FLD1: 'Sum',
          FLD4: 'Sum',
        },
      },
      data2: {
        showFilter: true,
        data: sortDataTable,
        totals: {
          FLD1: 'Average',
          FLD4: 'Average',
        },
      },
      data3: {
        showFilter: true,
        data: sortDataTable,
        totals: {
          FLD1: 'Count',
          FLD2: 'Sum',
          FLD3: 'Average',
          FLD4: 'Count',
        },
      },
    };
  },
};
</script>
