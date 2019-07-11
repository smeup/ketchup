<style scoped>
h3 {
  margin: 1rem 0;
}
</style>

<template>
  <div>
    <h1>Filters</h1>

    <h3>Filters enabled</h3>
    <kup-data-table :data.prop="data" :showFilters.prop="true"></kup-data-table>

    <h3>Filters enabled and default value</h3>
    <kup-data-table
      :data.prop="data"
      :showFilters.prop="true"
      :filters.prop="filters"
    ></kup-data-table>

    <h3>Global filter</h3>
    <kup-data-table
      :data.prop="data"
      :globalFilter.prop="true"
    ></kup-data-table>

    <h3>Column filter and global filter</h3>
    <kup-data-table
      :data.prop="data"
      :showFilters.prop="true"
      :globalFilter.prop="true"
      :filters.prop="filters"
    ></kup-data-table>

    <h3>Column filter with empty value</h3>
    <kup-data-table
      :data.prop="dataTableWithEmptyValues"
      :showFilters.prop="true"
      :filters.prop="filtersEmpty"
    ></kup-data-table>

    <h3>Column and global filter with empty value</h3>
    <kup-data-table
      :data.prop="dataTableWithEmptyValues"
      :showFilters.prop="true"
      :globalFilter.prop="true"
    ></kup-data-table>
  </div>
</template>

<script>
import { defaultDataTable } from '@/mock/dataTable';

export default {
  name: 'dataTableFilters',

  data() {
    let dataTableWithEmptyValues = {
      ...defaultDataTable
    };

    dataTableWithEmptyValues.rows[0].cells.FLD1.value = '';

    return {
      data: {
        ...defaultDataTable,
      },
      dataTableWithEmptyValues,
      filters: {
        FLD1: 'FRA',
      },
      filtersEmpty: {
        FLD1: "''",
      }
    };
  },
};
</script>
