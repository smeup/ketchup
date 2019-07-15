<style scoped>
h3 {
  margin: 1rem 0;
}
</style>

<template>
  <div>
    <h1>Hiding repetitions</h1>



    <h2>With sorted tables</h2>

    <h3>Sort disabled</h3>
    <kup-data-table
      :data.prop="sortData"
      :sortEnabled.prop="false"/>

    <h3>Sort ascending on first column, descending on second</h3>
    <kup-data-table
      :data.prop="sortData"
      :sort.prop="sort"/>

    <h2>With pagination</h2>

    <h3>20 rows per page (default is 10)</h3>
    <div class="pa-3">
      <kup-data-table
        :data.prop="data"
        :showFilter.prop="true"
        :rowsPerPage.prop="20"
      ></kup-data-table>
    </div>


    <h2>Within grouped columns</h2>

    <h3>Single group (visible)</h3>
    <kup-data-table
      :data.prop="data"
      :groups.prop="group1"
      :showFilters.prop="true"
    ></kup-data-table>

    <h3>Single group (hidden)</h3>
    <kup-data-table :data.prop="data" :groups.prop="group2"></kup-data-table>

    <h3>Multiple group (hidden)</h3>
    <kup-data-table :data.prop="data" :groups.prop="group4"></kup-data-table>

    <h3>Single group and totals</h3>
    <kup-data-table
      :data.prop="data"
      :groups.prop="group1"
      :totals.prop="totals1"
    ></kup-data-table>
  </div>
</template>

<script>
import { repetitionsGroupDataTable, sortDataTable } from '@/mock/dataTable';

export default {
  name: 'dataTableFilters',

  data() {
    let sortData = sortDataTable;
    sortData.columns.forEach(col => {
      col.hideValuesRepetitions = true;
    });

    return {
      data: {
        ...repetitionsGroupDataTable,
      },
      group1: [
        {
          column: 'FLD0',
        },
      ],
      group2: [
        {
          column: 'FLD0',
          visible: false,
        },
      ],
      group3: [
        {
          column: 'FLD0',
        },
        {
          column: 'FLD1',
        },
      ],
      group4: [
        {
          column: 'FLD0',
          visible: false,
        },
        {
          column: 'FLD1',
          visible: false,
        },
      ],
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
      sortData,
      totals1: {
        FLD2: 'Count',
      },
    };
  },
};
</script>
