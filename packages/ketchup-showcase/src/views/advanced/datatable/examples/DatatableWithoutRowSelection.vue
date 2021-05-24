<style scoped>
h3 {
  margin: 1rem 0;
}
</style>

<template>
  <div>
    <p
      >Setting the value to <b>none</b> will make it impossible to select the
      rows.</p
    >
    <p
      >Please note that it is also possible to make a specific rows unable to
      select by setting the <b>unselectable</b> attribute to true in the row
      data.</p
    >
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
