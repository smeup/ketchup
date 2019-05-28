<style scoped>
h3 {
  margin: 1rem 0;
}
</style>

<template>
  <div>
    <h1>Sorting</h1>

    <h3>Sort disabled</h3>
    <kup-data-table
      :data.prop="data"
      :sortEnabled.prop="false"
    ></kup-data-table>

    <h3>Sort ascending on first column, descending on second</h3>
    <kup-data-table :data.prop="data" :sort.prop="sort"></kup-data-table>
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
    };
  },
};
</script>
