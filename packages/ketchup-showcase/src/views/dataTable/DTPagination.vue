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

        <div class="pa-5">
          <kup-data-table
            :data.prop="data"
            :config.prop="config1"
          ></kup-data-table>
        </div>
      </v-expansion-panel-content>

      <v-expansion-panel-content>
        <template v-slot:header>
          <div>Paginator bottom</div>
        </template>

        <div class="pa-5">
          <kup-data-table
            :data.prop="data"
            :config.prop="config2"
          ></kup-data-table>
        </div>
      </v-expansion-panel-content>

      <v-expansion-panel-content>
        <template v-slot:header>
          <div>Paginator top and bottom</div>
        </template>

        <div class="pa-5">
          <kup-data-table
            :data.prop="data"
            :config.prop="config3"
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
      config1: {
        showFilter: true,
        rowsPerPage: 20,
      },
      config2: {
        paginatorPos: 'Bottom',
      },
      config3: {
        paginatorPos: 'Both',
      },
    };
  },
};
</script>
