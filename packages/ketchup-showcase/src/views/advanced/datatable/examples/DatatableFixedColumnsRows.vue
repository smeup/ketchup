<style scoped>
h3 {
  margin: 1rem 0;
}
</style>

<template>
  <div>
    <h3>Fixed columns (2)</h3>
    <kup-data-table
      :data.prop="data"
      :showFilters.prop="true"
      fixed-columns="2"/>

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
    />

    <h3>Single group (hidden)</h3>
    <kup-data-table :data.prop="data" :groups.prop="group2" />

    <h3>Multiple group (visible)</h3>
    <kup-data-table :data.prop="data" :groups.prop="group3" />

    <h3>Multiple group (hidden)</h3>
    <kup-data-table :data.prop="data" :groups.prop="group4" />

    <h3>Single group and totals</h3>
    <kup-data-table :data.prop="data" :groups.prop="group1" :totals.prop="totals1" />

    <h3>Multiple group and expansion</h3>
    <kup-data-table :data.prop="data" :groups.prop="group3" :expandGroups.prop="true" />
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
      smallTableStyle: {
          '--dtt_table-wrapper-height': '200px',
      },
      totals1: {
        FLD2: 'Count',
      },
    };
  },
};
</script>
