<style scoped>
h3 {
  margin: 1rem 0;
}
</style>

<template>
  <div>
    <h1>Filters</h1>

    <h3>Filters enabled</h3>
    <kup-data-table :data.prop="data" :config.prop="config1"></kup-data-table>

    <h3>Filters enabled and default value</h3>
    <kup-data-table :data.prop="data" :config.prop="config4"></kup-data-table>

    <h3>Global filter</h3>
    <kup-data-table :data.prop="data" :config.prop="config2"></kup-data-table>

    <h3>Column filter and global filter</h3>
    <kup-data-table :data.prop="data" :config.prop="config3"></kup-data-table>
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
      config1: {
        showFilter: true,
      },
      config2: {
        globalFilter: true,
      },
      config3: {
        showFilter: true,
        globalFilter: true,
      },
      config4: {
        showFilter: true,
        filter: {
          FLD1: 'FRA',
        },
      },
    };
  },
};
</script>
