<style scoped>
h3 {
  margin: 1rem 0;
}
</style>

<template>
  <div>
    <h3>Fixed columns (2 columns and show-grid = Row)</h3>
    <kup-lazy component-name="kup-data-table" :data.prop="fixedData"></kup-lazy>

    <h3>Fixed columns (2 columns and show-grid = Col)</h3>
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="fixedData2"
    ></kup-lazy>

    <h3>Fixed rows (3)</h3>
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="fixedData3"
    ></kup-lazy>

    <h3>Fixed columns (2) rows (4)</h3>
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="fixedData4"
    ></kup-lazy>

    <h3
      >Fixed columns (2) and rows (3) with multiple selection and actions
      activated</h3
    >
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="fixedData5"
    ></kup-lazy>

    <h3
      >When there are fixed columns or rows but groups are active, fixed does
      not work</h3
    >
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="fixedData6"
    ></kup-lazy>
    <kup-lazy
      component-name="kup-data-table"
      :data.prop="fixedData7"
    ></kup-lazy>

    <h3>With totals (fixed columns (4) rows (4))</h3>
    <kup-lazy component-name="kup-data-table" :data.prop="fixedDataTotals" />

    <h3>With hidden table header (fixed columns (4) rows (4))</h3>
    <kup-lazy component-name="kup-data-table" :data.prop="fixedDataNoHeaders" />
  </div>
</template>

<script>
import { groupDataTable } from '@/mock/dataTable';

export default {
  name: 'DatatableFixedColumnsRows',
  data() {
    return {
      fixedData: {
        data: groupDataTable,
        showFilters: true,
        fixedColumns: '2',
        tableHeight: '200px',
        tableWidth: '400px',
      },
      fixedData2: {
        data: groupDataTable,
        showFilters: true,
        fixedColumns: '2',
        showGrid: 'Col',
        tableHeight: '200px',
        tableWidth: '400px',
        totals: {
          FLD0: 'Count',
          FLD1: 'Count',
        },
      },
      fixedData3: {
        data: groupDataTable,
        showFilters: true,
        fixedRows: '3',
        tableHeight: '200px',
        tableWidth: '400px',
      },
      fixedData4: {
        data: groupDataTable,
        showFilters: true,
        fixedColumns: '2',
        fixedRows: '4',
        showGrid: 'Complete',
        tableHeight: '200px',
        tableWidth: '400px',
      },
      fixedData5: {
        data: groupDataTable,
        showFilters: true,
        fixedColumns: '2',
        fixedRows: '3',
        showGrid: 'Complete',
        tableHeight: '200px',
        tableWidth: '400px',
        rowActions: [
          {
            text: 'Action #1',
            icon: 'folder',
          },
          {
            text: 'Action #2',
            icon: 'account',
          },
        ],
        multiSelection: true,
      },
      fixedData6: {
        data: groupDataTable,
        fixedColumns: '2',
        fixedRows: '3',
        tableHeight: '200px',
        tableWidth: '400px',
        groups: [
          {
            column: 'FLD0',
          },
          {
            column: 'FLD1',
          },
        ],
      },
      fixedData7: {
        data: groupDataTable,
        fixedColumns: '2',
        fixedRows: '3',
        tableHeight: '200px',
        tableWidth: '400px',
        groups: [
          {
            column: 'FLD0',
          },
          {
            column: 'FLD1',
          },
        ],
        expandGroups: true,
      },
      fixedDataTotals: {
        data: groupDataTable,
        showFilters: true,
        fixedColumns: '4',
        fixedRows: '4',
        showGrid: 'Complete',
        tableHeight: '230px',
        tableWidth: '450px',
        totals: {
          FLD2: 'Count',
          FLD3: 'Count',
          FLD4: 'Count',
          FLD5: 'Count',
        },
      },
      fixedDataNoHeaders: {
        data: groupDataTable,
        showFilters: true,
        showHeader: false,
        fixedColumns: '4',
        fixedRows: '4',
        showGrid: 'Complete',
        tableHeight: '230px',
        tableWidth: '450px',
      },
    };
  },
};
</script>
