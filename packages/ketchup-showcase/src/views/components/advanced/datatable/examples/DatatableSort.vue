<style scoped>
h3 {
  margin: 1rem 0;
}
</style>

<template>
  <div>
    <h3>Sort disabled</h3>
    <kup-lazy component-name="kup-data-table" :data.prop="data"></kup-lazy>

    <h3>Sort ascending on first column, descending on second</h3>
    <kup-lazy component-name="kup-data-table" :data.prop="data2"></kup-lazy>
  </div>
</template>

<script>
import { sortDataTable } from '@/mock/dataTable';

export default {
  name: 'dataTableSort',

  data() {
    return {
      data: {
        data: sortDataTable,
        sortEnabled: false,
      },
      data2: {
        data: sortDataTable,
        sort: [
          {
            column: 'FLD1',
            sortMode: 'A',
          },
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
