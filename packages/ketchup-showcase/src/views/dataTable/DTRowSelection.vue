<style scoped>
h3 {
  margin: 1rem 0;
}
</style>

<template>
  <div>
    <h1>Data Table</h1>

    <h3>Select first record</h3>
    <kup-data-table
      :data.prop="data"
      :config.prop="config"
      @kupRowSelected="onRowSelect"
    ></kup-data-table>
  </div>
</template>

<script>
import { defaultDataTable } from '@/mock/dataTable';

export default {
  name: 'dataTableRowSelection',

  data() {
    return {
      data: {
        ...defaultDataTable,
      },
      config: {
        selectRow: 1,
      },
      selectedRow: null,
    };
  },

  methods: {
    onRowSelect({ detail }) {
      console.log(detail);
    },
  },
};
</script>
