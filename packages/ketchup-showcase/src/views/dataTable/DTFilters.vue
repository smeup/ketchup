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
  </div>
</template>

<script>
import { defaultDataTable } from '@/mock/dataTable';

export default {
  name: 'dataTableFilters',

  data() {
    return {
      data: {
        ...defaultDataTable,
      },
      filters: {
        FLD1: 'FRA',
      },
    };
  },
};
</script>
