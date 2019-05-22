<style scoped>
h3 {
  margin: 1rem 0;
}
</style>


<template>
  <div>
    <h1>Data Table</h1>

    <h3>Without configuration</h3>
    <kup-data-table :data.prop="data"></kup-data-table>

    <h3>Columns width</h3>
    <kup-data-table :data.prop="data" :config.prop="config1"></kup-data-table>

    <h3>Without header</h3>
    <kup-data-table :data.prop="data" :config.prop="config2"></kup-data-table>

    <h3>Without grid</h3>
    <kup-data-table
      :data.prop="data"
      :config.prop="{ showGrid: false }"
    ></kup-data-table>
  </div>
</template>

<script>
import { defaultDataTable } from '@/mock/dataTable';

export default {
  name: 'dataTableBasic',

  data() {
    return {
      data: {
        ...defaultDataTable,
      },
      config1: {
        columnsWidth: [
          {
            column: 'FLD1',
            width: 100,
          },
          {
            column: 'FLD3',
            width: 300,
          },
        ],
      },
      config2: {
        showHeader: false,
      },
    };
  },
};
</script>
