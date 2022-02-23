<style scoped>
h3 {
  margin: 1rem 0;
}
</style>

<template>
  <div>
    <h3>20 rows per page (default is 10)</h3>
    <div class="pa-3">
      <kup-lazy component-name="kup-data-table" :data.prop="data"></kup-lazy>
    </div>

    <h3>Paginator bottom</h3>
    <div class="pa-3">
      <kup-lazy component-name="kup-data-table" :data.prop="data1"></kup-lazy>
    </div>

    <h3>Paginator top and bottom</h3>
    <div class="pa-3">
      <kup-lazy component-name="kup-data-table" :data.prop="data2"></kup-lazy>
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
        data: paginateDataTable,
        showFilter: true,
        rowsPerPage: '20',
      },
      data1: {
        data: paginateDataTable,
        paginatorPos: 'Bottom',
      },
      data2: {
        data: paginateDataTable,
        paginatorPos: 'Both',
      },
    };
  },
};
</script>
