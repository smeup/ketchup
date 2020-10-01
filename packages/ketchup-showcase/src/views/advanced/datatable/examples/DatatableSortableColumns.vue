<template>
  <div>
    <h2>Data Table</h2>

    <h3>Without configuration</h3>
    <kup-lazy component-name="kup-data-table" :data.prop="data"></kup-lazy>
    <code>
      {{ JSON.stringify(data.columns) }}
      <br />
      <span ref="noConfig" />
    </code>

    <h3>Hidden columns</h3>
    <kup-lazy component-name="kup-data-table" :data.prop="data2"></kup-lazy>
    <code>
      {{ JSON.stringify(hiddenColumnsData.columns) }}
      <br />
      <span ref="hiddenCols" />
    </code>

    <h3>No automatic sorting</h3>
    <h4>With no new object created to hold the result</h4>
    <kup-lazy
      ref="noAutomaticMutate"
      component-name="kup-data-table"
      :data.prop="data3"
    ></kup-lazy>
    <code>
      {{ JSON.stringify(noAutomaticMutate.columns) }}
      <br />
      <span ref="noAutomatic" />
    </code>

    <h4>With new object created to hold the result</h4>
    <kup-lazy
      ref="noAutomaticNewObject"
      component-name="kup-data-table"
      :data.prop="data4"
    ></kup-lazy>
    <code>
      {{ JSON.stringify(noAutomaticNewObject.columns) }}
      <br />
      <span ref="noAutomatic2" />
    </code>
  </div>
</template>

<script>
import {
  createDataForPagination,
  defaultDataTable,
  hiddenColumnsData,
} from '@/mock/dataTable';

export default {
  name: 'DTSortableColumns',
  data() {
    return {
      data: {
        data: defaultDataTable,
        enableSortableColumns: true,
        onKupDataTableSortedColumn: (e) => {
          this.handleKupDataTable('noConfig', e.detail);
        },
        onDragstart: (e) => {
          this.logger();
        },
      },
      data2: {
        data: hiddenColumnsData,
        enableSortableColumns: true,
        onKupDataTableSortedColumn: (e) => {
          this.handleKupDataTable('hiddenCols', e.detail);
        },
      },
      data3: {
        data: createDataForPagination(4, 25),
        enableSortableColumns: true,
        sortableColumnsMutateData: false,
        onKupDataTableSortedColumn: (e) => {
          this.handleKupDataTableNoAutomatic(
            'noAutomatic',
            'noAutomaticMutate',
            event.detail
          );
        },
      },
      data4: {
        data: createDataForPagination(4, 25),
        enableSortableColumns: true,
        sortableColumnsMutateData: false,
        onKupDataTableSortedColumn: (e) => {
          this.handleKupDataTableNoAutomatic(
            'noAutomatic2',
            'noAutomaticMutate',
            event.detail
          );
        },
      },
      noAutomaticMutate: createDataForPagination(4, 25),
      noAutomaticNewObject: createDataForPagination(4, 25),
      hiddenColumnsData: { ...hiddenColumnsData },
    };
  },

  methods: {
    handleKupDataTable(reference, { detail }) {
      this.$refs[reference].innerHTML = JSON.stringify(detail);
    },
    handleKupDataTableNoAutomatic(reference, tableRef, e) {
      this.handleKupDataTable(reference, e);
      if (tableRef === 'noAutomaticMutate') {
        // Sort with mutation directly ontop of columns
        this.$refs[tableRef].defaultSortingFunction(
          this[tableRef].columns,
          e.detail.receivingColumnIndex,
          e.detail.sortedColumnIndex
        );
      } else {
        // Sort with creation of a new element
        this.$refs[tableRef]
          .defaultSortingFunction(
            this[tableRef].columns,
            e.detail.receivingColumnIndex,
            e.detail.sortedColumnIndex,
            true
          )
          .then((data) => {
            this[tableRef] = {
              ...this[tableRef],
              columns: data,
            };
          });
      }
    },
    logger(e) {
      console.log('event logger', e);
    },
  },
};
</script>
