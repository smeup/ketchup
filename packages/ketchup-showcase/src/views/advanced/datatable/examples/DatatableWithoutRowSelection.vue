<style scoped>
h3 {
  margin: 1rem 0;
}
</style>

<template>
  <div>
    <kup-lazy component-name="kup-data-table" :data.prop="data"></kup-lazy>
  </div>
</template>

<script>
import { sortDataTable } from '@/mock/dataTable';

export default {
  name: 'dataTableWithoutRowSelection',

  data() {
    return {
      data: {
        data: sortDataTable,
        selection: 'none',
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
