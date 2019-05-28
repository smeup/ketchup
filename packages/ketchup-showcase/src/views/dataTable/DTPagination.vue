<style scoped>
h3 {
  margin: 1rem 0;
}
</style>

<template>
  <div>
    <h1>Sorting</h1>

    <v-expansion-panel>
      <v-expansion-panel-content>
        <template v-slot:header>
          <div>20 rows per page (default is 10)</div>
        </template>

        <div class="pa-3">
          <kup-data-table
            :data.prop="data"
            :showFilter.prop="true"
            :rowsPerPage.prop="20"
          ></kup-data-table>
        </div>
      </v-expansion-panel-content>

      <v-expansion-panel-content>
        <template v-slot:header>
          <div>Paginator bottom</div>
        </template>

        <div class="pa-3">
          <kup-data-table
            :data.prop="data"
            :paginatorPos.prop="'Bottom'"
          ></kup-data-table>
        </div>
      </v-expansion-panel-content>

      <v-expansion-panel-content>
        <template v-slot:header>
          <div>Paginator top and bottom</div>
        </template>

        <div class="pa-3">
          <kup-data-table
            :data.prop="data"
            :paginatorPos.prop="'Both'"
          ></kup-data-table>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
import { paginateDataTable } from '@/mock/dataTable';

export default {
  name: 'dataTableSort',

  data() {
    return {
      data: {
        ...paginateDataTable,
      },
    };
  },
};
</script>
