<style scoped>
h3 {
  margin: 1rem 0;
}
</style>

<template>
  <div>
    <h3>20 rows per page (default is 10)</h3>
    <div class="pa-3">
      <kup-data-table :data.prop="data" :showFilter.prop="true" :rowsPerPage.prop="20"></kup-data-table>
    </div>

    <h3>Paginator bottom</h3>
    <div class="pa-3">
      <kup-data-table :data.prop="data" :paginatorPos.prop="'Bottom'"></kup-data-table>
    </div>

    <h3>Paginator top and bottom</h3>
    <div class="pa-3">
      <kup-data-table :data.prop="data" :paginatorPos.prop="'Both'"></kup-data-table>
    </div>
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
