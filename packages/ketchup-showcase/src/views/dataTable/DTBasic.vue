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

    <h3>Persistent header (sticky)</h3>
    <kup-data-table :data.prop="iconImagesDataTable" header-is-persistent></kup-data-table>

    <h3>Persistent header (sticky) - Inside a scrollable container</h3>
    <div class="scrollable-container persistent-header-wrapper">
      <kup-data-table :data.prop="iconImagesDataTable" header-is-persistent></kup-data-table>
      <kup-data-table :data.prop="iconImagesDataTable" header-is-persistent></kup-data-table>
      <kup-data-table :data.prop="iconImagesDataTable" header-is-persistent></kup-data-table>
    </div>

    <h3>Without grid</h3>
    <kup-data-table :data.prop="data" :showGrid.prop="false"></kup-data-table>

    <h3>Cell style</h3>
    <kup-data-table :data.prop="cellStyleData"></kup-data-table>

    <h3>Icons and images</h3>
    <kup-data-table :data.prop="iconImagesDataTable"></kup-data-table>

    <h3>With load more button</h3>
    <code>Load more elements: {{ loadQuantity }}</code>
    <kup-data-table
      :data.prop="data"
      show-load-more
      @kupLoadMoreClicked="onLoadMoreClick"/>

    <kup-data-table :data.prop="progressbarData"/>

  </div>
</template>

<script>
import {
  defaultDataTable,
  cellStyleDataTable,
  hiddenColumnsData,
  iconImagesDataTable,
} from '@/mock/dataTable';
import {
  j4btnData,
  pgbData,
} from '@/mock/box';

export default {
  name: 'dataTableBasic',

  data() {
    return {
      data: {
        ...defaultDataTable,
      },
      j4btnData,
      hiddenColumnsData: { ...hiddenColumnsData },
      cellStyleData: { ...cellStyleDataTable },
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
      loadQuantity: '',
      progressbarData: pgbData
    };
  },

  methods: {
    handleKupOptionClicked({ detail }) {
      console.log('detail', detail);
    },
    onObjMatrix(e) {
      console.log("the matrix obj", e);
    },
    onLoadMoreClick(e) {
      this.loadQuantity = e.detail.loadItems.toString();
    }
  },
};
</script>

<style lang="scss">
.persistent-header-wrapper {
  kup-data-table {
    --kup-data-table_header-offset: 0;
  }
}
</style>
