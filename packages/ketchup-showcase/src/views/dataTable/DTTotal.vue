<style scoped>
h3 {
  margin: 1rem 0;
}
</style>

<template>
  <div>
    <h1>Totals</h1>

    <h3>Count on Column A and Column D</h3>
    <kup-data-table
      :data.prop="data"
      :config.prop="config1"
      :totals.prop="countTotals"
    ></kup-data-table>

    <h3>Sum on Column B and Column C</h3>
    <kup-data-table
      :data.prop="data"
      :config.prop="config1"
      :totals.prop="sumTotals"
    ></kup-data-table>

    <h3>Avarage on Column B and Column C</h3>
    <kup-data-table
      :data.prop="data"
      :config.prop="config1"
      :totals.prop="avgTotals"
    ></kup-data-table>

    <h3
      >Count on Column A, Sum on column B, Avg on Column C and count on Column
      d</h3
    >
    <kup-data-table
      :data.prop="data"
      :config.prop="config1"
      :totals.prop="mixedTotals"
    ></kup-data-table>
  </div>
</template>

<script>
import { sortDataTable } from '@/mock/dataTable';

export default {
  name: 'dataTableSort',

  data() {
    return {
      data: {
        ...sortDataTable,
      },
      config1: {
        showFilter: true,
      },
      countTotals: {
        FLD1: 'Count',
        FLD4: 'Count',
      },
      sumTotals: {
        FLD2: 'Sum',
        FLD3: 'Sum',
      },
      avgTotals: {
        FLD2: 'Avarage',
        FLD3: 'Avarage',
      },
      mixedTotals: {
        FLD1: 'Count',
        FLD2: 'Sum',
        FLD3: 'Avarage',
        FLD4: 'Count',
      },
    };
  },
};
</script>
