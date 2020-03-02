<style scoped>
h3 {
  margin: 1rem 0;
}
</style>

<template>
  <div>
    <h3>Fixed columns (2 columns and show-grid = Row)</h3>
    <kup-data-table
      :data.prop="data"
      :showFilters.prop="true"
      fixed-columns="2"/>

    <h3>Fixed columns (2 columns and show-grid = Col)</h3>
    <kup-data-table
      :data.prop="data"
      :showFilters.prop="true"
      fixed-columns="2"
      show-grid="Col"/>

    <h3>Fixed rows (3)</h3>
    <kup-data-table
      :data.prop="data"
      :showFilters.prop="true"
      :style="smallTableStyle"
      fixed-rows="3"
    />

    <h3>Fixed columns (2) rows (4)</h3>
    <kup-data-table
      :data.prop="data"
      :showFilters.prop="true"
      :style="smallTableStyle"
      fixed-columns="2"
      fixed-rows="4"
      show-grid="Complete"
    />

    <h3>Fixed columns (2) and rows (3) with multiple selection and actions activated</h3>
    <kup-data-table
      :data.prop="data"
      :rowActions.prop="rowActions"
      :showFilters.prop="true"
      :style="smallTableStyle"
      fixed-columns="2"
      fixed-rows="3"
      multi-selection/>

    <h3>When there are fixed columns or rows but groups are active, fixed does not work</h3>
    <kup-data-table
      :data.prop="data"
      :groups.prop="group3"
      :style="smallTableStyle"
      fixed-columns="2"
      fixed-rows="3"/>

    <kup-data-table
      :data.prop="data"
      :groups.prop="group3"
      :expandGroups.prop="true"
      :style="smallTableStyle"
      fixed-columns="2"
      fixed-rows="3"/>
  </div>
</template>

<script>
import { groupDataTable } from '@/mock/dataTable';

export default {
  name: 'DatatableFixedColumnsRows',
  data() {
    return {
      data: {
        ...groupDataTable,
      },
      group3: [
        {
          column: 'FLD0',
        },
        {
          column: 'FLD1',
        },
      ],
      smallTableStyle: {
          '--dtt_table-wrapper-height': '250px',
      },
      rowActions: [
          {
              text: 'Action #1',
              icon: 'mdi mdi-folder',
          },
          {
              text: 'Action #2',
              icon: 'mdi mdi-account',
          },
      ],
      totals1: {
        FLD2: 'Count',
      },
    };
  },
};
</script>
