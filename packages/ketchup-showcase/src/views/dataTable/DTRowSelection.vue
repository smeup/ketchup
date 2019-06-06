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
      @kupAutoRowSelect="onAutoRowSelect"
      @kupRowSelected="onRowSelect"
    ></kup-data-table>

    <p>Clicked column: {{ clickedColumn }}</p>
    <ul>
      <li v-for="(row, index) in selectedRows" :key="index">
        {{ row }}
      </li>
    </ul>

    <h3>Multi selection</h3>
    <kup-data-table
      multi-selection
      :data.prop="data"
      :showFilters.prop="true"
      :filters.prop="filters"
      :sort.prop="sort"
      @kupRowSelected="onRowSelect"
    ></kup-data-table>
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
      selectedRows: null,
      clickedColumn: null,
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
    onAutoRowSelect({ detail }) {
      this.selectedRows = [detail.selectedRow];
    },

    onRowSelect({ detail }) {
      this.selectedRows = detail.selectedRows;
      this.clickedColumn = detail.clickedColumn;
    },
  },
};
</script>
