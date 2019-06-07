<style scoped>
h3 {
  margin: 1rem 0;
}
</style>


<template>
  <div>
    <h1>Data Table</h1>

    <h3>Without configuration</h3>
    <kup-data-table
      :data.prop="data"
      @kupOptionClicked="handleKupOptionClicked"
    ></kup-data-table>

    <h3>Hidden columns</h3>
    <kup-data-table :data.prop="hiddenColumnsData"></kup-data-table>

    <h3>Columns width</h3>
    <kup-data-table
      :data.prop="data"
      :columnsWidth.prop="columnsWidth"
    ></kup-data-table>

    <h3>Without header</h3>
    <kup-data-table :data.prop="data" :showHeader.prop="false"></kup-data-table>

    <h3>Without grid</h3>
    <kup-data-table :data.prop="data" :showGrid.prop="false"></kup-data-table>

    <h3>Cell style</h3>
    <kup-data-table :data.prop="cellStyleData"></kup-data-table>
  </div>
</template>

<script>
import {
  defaultDataTable,
  cellStyleDataTable,
  hiddenColumnsData,
} from '@/mock/dataTable';

export default {
  name: 'dataTableBasic',

  data() {
    return {
      data: {
        ...defaultDataTable,
      },
      hiddenColumnsData: { ...hiddenColumnsData },
      cellStyleData: { ...cellStyleDataTable },
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
    };
  },

  methods: {
    handleKupOptionClicked({ detail }) {
      console.log('detail', detail);
    },
  },
};
</script>
