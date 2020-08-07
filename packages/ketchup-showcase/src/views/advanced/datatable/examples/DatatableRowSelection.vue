<style scoped>
h3 {
  margin: 1rem 0;
}
</style>

<template>
  <div>
    <h3>Select first record</h3>
    <kup-lazy component-name="kup-data-table" :data.prop="data"></kup-lazy>

    <h3>Multi selection</h3>
    <kup-lazy component-name="kup-data-table" :data.prop="data1"></kup-lazy>
  </div>
</template>

<script>
import { sortDataTable } from '@/mock/dataTable';

export default {
  name: 'dataTableRowSelection',

  data() {
    return {
      data: {
        data: sortDataTable,
        selectRow: 1,
        showFilters: true,
        filters: {
          FLD1: 'fra',
        },
        sort: [
          {
            column: 'FLD2',
            sortMode: 'D',
          },
        ],
      },
      data1: {
        multiSelection: true,
        data: sortDataTable,
        showFilters: true,
        filters: {
          FLD1: 'fra',
        },
        sort: [
          {
            column: 'FLD2',
            sortMode: 'D',
          },
        ],
      },
    };
  },
};
</script>
