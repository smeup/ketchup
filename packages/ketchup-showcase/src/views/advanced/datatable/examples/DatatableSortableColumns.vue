<template>
  <div>
    <h2>Data Table</h2>

    <h3>Without configuration</h3>
    <kup-data-table
      :data.prop="data"
      enable-sortable-columns
      @kupDataTableSortedColumn="handleKupDataTable('noConfig', $event)"
      @dragstart="logger"
    />
    <code>
      {{ JSON.stringify(data.columns) }}
      <br />
      <span ref="noConfig" />
    </code>

    <h3>Hidden columns</h3>
    <kup-data-table
      :data.prop="hiddenColumnsData"
      :enableSortableColumns.prop="true"
      @kupDataTableSortedColumn="handleKupDataTable('hiddenCols', $event)"
    />
    <code>
      {{ JSON.stringify(hiddenColumnsData.columns) }}
      <br />
      <span ref="hiddenCols" />
    </code>

    <h3>No automatic sorting</h3>
    <h4>With no new object created to hold the result</h4>
    <kup-data-table
      ref="noAutomaticMutate"
      :data.prop="noAutomaticMutate"
      :enableSortableColumns.prop="true"
      :sortableColumnsMutateData.prop="false"
      @kupDataTableSortedColumn="handleKupDataTableNoAutomatic('noAutomatic', 'noAutomaticMutate', $event)"
    />
    <code>
      {{ JSON.stringify(noAutomaticMutate.columns) }}
      <br />
      <span ref="noAutomatic" />
    </code>

    <h4>With new object created to hold the result</h4>
    <kup-data-table
      ref="noAutomaticNewObject"
      :data.prop="noAutomaticNewObject"
      :enableSortableColumns.prop="true"
      :sortableColumnsMutateData.prop="false"
      @kupDataTableSortedColumn="handleKupDataTableNoAutomatic('noAutomatic2', 'noAutomaticNewObject', $event)"
    />
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
  // cellStyleDataTable,
  hiddenColumnsData,
  // iconImagesDataTable,
} from '@/mock/dataTable';

export default {
  name: 'DTSortableColumns',
  data() {
    return {
      data: {
        ...defaultDataTable,
      },
      hiddenColumnsData: { ...hiddenColumnsData },
      noAutomaticMutate: createDataForPagination(4, 25),
      noAutomaticNewObject: createDataForPagination(4, 25),
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
      /*cellStyleData: { ...cellStyleDataTable },
            iconImagesDataTable: { ...iconImagesDataTable },
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
            loadQuantity: ''*/
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