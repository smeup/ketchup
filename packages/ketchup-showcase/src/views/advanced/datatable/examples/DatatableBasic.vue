<template>
  <div>
    <h3>Without configuration</h3>
    <kup-data-table :data.prop="data" @kupOptionClicked="handleKupOptionClicked"></kup-data-table>

    <h3>Hidden columns</h3>
    <kup-data-table :data.prop="hiddenColumnsData"></kup-data-table>

    <h3>Without header</h3>
    <kup-data-table :data.prop="data" :showHeader.prop="false"></kup-data-table>

    <h3>Without grid</h3>
    <kup-data-table :data.prop="data" :showGrid.prop="false"></kup-data-table>

    <h3>Cell style</h3>
    <kup-data-table :data.prop="cellStyleData"></kup-data-table>

    <h3>Border radius and writing mode</h3>
    <kup-data-table :data.prop="cellStyleData2"></kup-data-table>

    <h3>Icons and images</h3>
    <kup-data-table :data.prop="iconImagesDataTable"></kup-data-table>

    <h3>With load more button</h3>
    <code>Load more elements: {{ loadQuantity }}</code>
    <kup-data-table :data.prop="data" show-load-more @kupLoadMoreClicked="onLoadMoreClick" />

    <kup-data-table :data.prop="progressbarData" />
  </div>
</template>

<script>
import {
  defaultDataTable,
  cellStyleDataTable,
  cellStyleDataTable2,
  hiddenColumnsData,
  iconImagesDataTable,
} from '@/mock/dataTable';
import { j4btnData, pgbData } from '@/mock/box';

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
      cellStyleData2: { ...cellStyleDataTable2 },
      iconImagesDataTable: { ...iconImagesDataTable },
      loadQuantity: '',
      progressbarData: pgbData,
    };
  },

  methods: {
    handleKupOptionClicked({ detail }) {
      console.log('detail', detail);
    },
    onObjMatrix(e) {
      console.log('the matrix obj', e);
    },
    onLoadMoreClick(e) {
      this.loadQuantity = e.detail.loadItems.toString();
    },
  },
};
</script>