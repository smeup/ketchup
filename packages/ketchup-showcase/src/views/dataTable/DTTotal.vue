<style scoped>
h3 {
  margin: 1rem 0;
}
</style>

<template>
  <div>
    <h1>Totals</h1>

    <v-expansion-panel>
      <v-expansion-panel-content>
        <template v-slot:header>
          <div>Count</div>
        </template>

        <div class="pa-3">
          <p>Count on Column A and Column D</p>
          <kup-data-table
            :data.prop="data"
            :config.prop="config1"
            :totals.prop="countTotals"
          ></kup-data-table>
        </div>
      </v-expansion-panel-content>

      <v-expansion-panel-content>
        <template v-slot:header>
          <div>Sum</div>
        </template>

        <div class="pa-3">
          <p>Sum on Column B and Column C</p>
          <kup-data-table
            :data.prop="data"
            :config.prop="config1"
            :totals.prop="sumTotals"
          ></kup-data-table>
        </div>
      </v-expansion-panel-content>

      <v-expansion-panel-content>
        <template v-slot:header>
          <div>Avg</div>
        </template>

        <div class="pa-3">
          <p>Avarage on Column B and Column C</p>
          <kup-data-table
            :data.prop="data"
            :config.prop="config1"
            :totals.prop="avgTotals"
          ></kup-data-table>
        </div>
      </v-expansion-panel-content>

      <v-expansion-panel-content>
        <template v-slot:header>
          <div>Mixed</div>
        </template>

        <div class="pa-3">
          <p
            >Count on Column A, Sum on column B, Avg on Column C and count on
            Column D</p
          >
          <kup-data-table
            :data.prop="data"
            :config.prop="config1"
            :totals.prop="mixedTotals"
          ></kup-data-table>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
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
