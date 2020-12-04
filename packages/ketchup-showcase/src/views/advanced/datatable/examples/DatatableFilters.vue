<style scoped>
h3 {
  margin: 1rem 0;
}
</style>

<template>
  <div>
    <h3>Filters enabled</h3>
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="filtersData"
    ></kup-lazy>

    <h3>Filters enabled and default value</h3>
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="filtersEnabledData"
    ></kup-lazy>

    <h3>Filters enabled and default value (but showFilter hidden)</h3>
    <p>
      In this example you can notice the small remove filter icon in the first
      column of the table.
      <br />By clicking on it, the filter gets removed and the icon itself will
      disappear.
    </p>
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="filtersEnabledData2"
    ></kup-lazy>

    <h3>Global filter</h3>
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="globalFilterData"
    ></kup-lazy>

    <h3>Column filter and global filter</h3>
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="globalFilterData2"
    ></kup-lazy>

    <h3>Column filter with empty value</h3>
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="columnFilter"
    ></kup-lazy>

    <h3>Column and global filter with empty value</h3>
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="columnFilter2"
    ></kup-lazy>
  </div>
</template>

<script>
import { defaultDataTable } from '@/mock/dataTable';

export default {
  name: 'dataTableFilters',

  data() {
    let dataTableWithEmptyValues = {
      ...defaultDataTable,
    };

    return {
      filtersData: { data: defaultDataTable, showFilters: true },
      filtersEnabledData: {
        data: defaultDataTable,
        filters: {
          FLD1: 'Marketing',
        },
        showFilters: true,
      },
      filtersEnabledData2: {
        data: defaultDataTable,
        filters: {
          FLD1: 'Marketing',
        },
        showFilters: false,
      },
      globalFilterData: { data: defaultDataTable, globalFilter: true },
      globalFilterData2: {
        data: defaultDataTable,
        globalFilter: true,
        filters: {
          FLD1: 'Marketing',
        },
        showFilters: true,
      },
      columnFilter: {
        data: defaultDataTable,
        filters: {
          FLD1: 'Marketing',
        },
        showFilters: true,
      },
      columnFilter2: {
        data: dataTableWithEmptyValues,
        filters: {
          FLD1: "''",
        },
        globalFilter: true,
        showFilters: true,
      },
      dataTableWithEmptyValues,
    };
  },
};
</script>
