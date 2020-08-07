<style scoped>
h3 {
  margin: 1rem 0;
}
</style>

<template>
  <div>
    <h2>With sorted tables</h2>

    <h3>Sort disabled</h3>
    <kup-lazy component-name="kup-data-table" :data.prop="data"></kup-lazy>

    <h3>Sort ascending on first column, descending on second</h3>
    <kup-lazy component-name="kup-data-table" :data.prop="data"></kup-lazy>

    <h2>With pagination</h2>

    <h3>20 rows per page (default is 10)</h3>
    <div class="pa-3">
      <kup-lazy component-name="kup-data-table" :data.prop="data2"></kup-lazy>
    </div>

    <h2>Within grouped columns</h2>

    <h3>Single group (visible)</h3>
    <kup-lazy component-name="kup-data-table" :data.prop="data3"></kup-lazy>

    <h3>Single group (hidden)</h3>
    <kup-lazy component-name="kup-data-table" :data.prop="data4"></kup-lazy>

    <h3>Multiple group (hidden)</h3>
    <kup-lazy component-name="kup-data-table" :data.prop="data5"></kup-lazy>

    <h3>Single group and totals</h3>
    <kup-lazy component-name="kup-data-table" :data.prop="data6"></kup-lazy>
  </div>
</template>

<script>
import { repetitionsGroupDataTable, sortDataTable } from '@/mock/dataTable';

export default {
  name: 'dataTableFilters',

  data() {
    let sortData = sortDataTable;
    sortData.columns.forEach((col) => {
      col.hideValuesRepetitions = true;
    });

    return {
      data: {
        data: sortData,
        sortEnabled: false,
      },
      data1: {
        data: sortData,
        sort: [
          {
            column: 'FLD1',
            sortMode: 'A',
          },
          {
            column: 'FLD2',
            sortMode: 'D',
          },
        ],
      },
      data2: {
        data: repetitionsGroupDataTable,
        showFilter: true,
        rowsPerPage: '20',
      },
      data3: {
        data: repetitionsGroupDataTable,
        showFilter: true,
        groups: [
          {
            column: 'FLD0',
          },
        ],
      },
      data4: {
        data: repetitionsGroupDataTable,
        showFilter: true,
        groups: [
          {
            column: 'FLD0',
          },
          {
            column: 'FLD1',
          },
        ],
      },
      data5: {
        data: repetitionsGroupDataTable,
        showFilter: true,
        groups: [
          {
            column: 'FLD0',
            visible: false,
          },
          {
            column: 'FLD1',
            visible: false,
          },
        ],
      },
      data6: {
        data: repetitionsGroupDataTable,
        totals: {
          FLD2: 'Count',
        },
        groups: [
          {
            column: 'FLD0',
            visible: false,
          },
        ],
      },
    };
  },
};
</script>
