<template>
  <div>
    <h3>Dynamism</h3>
    <kup-box :data.prop="basicData" @kupBoxClicked="onBoxClicked"></kup-box>

    <p v-if="clickedRow">Selected row: {{ clickedRow }}</p>
    <p v-if="clickedColumn">Selected column: {{ clickedColumn }}</p>

    <h3>Multi select</h3>
    <kup-box
      :data.prop="basicData"
      :multiSelection.prop="true"
      @kupBoxSelected="onBoxSelected"
    ></kup-box>
    <div v-if="selectedRows && selectedRows.length > 0">
      <p>Selected rows</p>
      <ul>
        <li v-for="(row, index) in selectedRows" :key="index">{{ row }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defaultData } from '@/mock/box';

export default {
  data() {
    return {
      basicData: defaultData,
      clickedRow: null,
      clickedColumn: null,
      selectedRows: null,
    };
  },

  methods: {
    onBoxClicked({ detail }) {
      this.clickedRow = detail.row;
      this.clickedColumn = detail.column;
    },

    onBoxSelected({ detail }) {
      this.selectedRows = detail.rows;
    },
  },
};
</script>
