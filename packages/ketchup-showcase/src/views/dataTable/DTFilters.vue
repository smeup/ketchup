<style scoped>
h3 {
  margin: 1rem 0;
}
</style>

<template>
  <div>
    <h1>Filters</h1>

    <h3>Filters enabled</h3>
    <kup-data-table
      :data.prop="data"
      :showFilters.prop="true"/>

    <h3>Filters enabled and default value</h3>
    <kup-data-table
      :data.prop="data"
      :showFilters.prop="true"
      :filters.prop="filters"/>

    <h3>Filters enabled and default value (but showFilter hidden)</h3>
    <p>In this example you can notice the small remove filter icon in the first column of the table.<br>
    By clicking on it, the filter gets removed and the icon itself will disappear.</p>
    <kup-data-table
      :data.prop="data"
      :showFilters.prop="false"
      :filters.prop="filters"/>

    <h3>Global filter</h3>
    <kup-data-table
      :data.prop="data"
      :globalFilter.prop="true"/>

    <h3>Column filter and global filter</h3>
    <kup-data-table
      :data.prop="data"
      :showFilters.prop="true"
      :globalFilter.prop="true"
      :filters.prop="filters"/>

    <h3>Column filter with empty value</h3>
    <kup-data-table
      :data.prop="dataTableWithEmptyValues"
      :showFilters.prop="true"
      :filters.prop="filtersEmpty"/>

    <h3>Column and global filter with empty value</h3>
    <kup-data-table
      :data.prop="dataTableWithEmptyValues"
      :showFilters.prop="true"
      :globalFilter.prop="true"/>
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
        FLD1: 'Marketing',
      },
      filtersEmpty: {
        FLD1: "''",
      }
    };
  },
};
</script>
