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
      :selectRow.prop="selectedRowIndex"
      :showFilters.prop="true"
      :filters.prop="filters"
      :sort.prop="sort"
      @kupRowSelected="onRowSelect"
    ></kup-data-table>

    <p>Selected row: {{ selectedRow }}</p>
  </div>
</template>

<script>
import { sortDataTable } from '@/mock/dataTable';

export default {
  name: 'dataTableRowSelection',

  data() {
    return {
      data: {
        ...sortDataTable,
      },
      selectedRowIndex: 1,
      selectedRow: null,
      filters: {
        FLD1: 'fra',
      },
      sort: [
        {
          column: 'FLD2',
          sortMode: 'D',
        },
      ],
    };
  },

  methods: {
    onRowSelect({ detail }) {
      this.selectedRow = detail;
    },
  },
};
</script>
