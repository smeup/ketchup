<template>
  <div>
    <h3>Small obj dataset - box form</h3>
    <kup-data-table
      :data.prop="j4btnData"
      @kupCellButtonClicked="onObjMatrix"
      @kupButtonClicked="printWarning"
      data-code="small"
    />
    <code ref="small" />

    <h3>Larger dataset - With and without buttons</h3>
    <kup-data-table
      :data.prop="j4btnLargeData"
      data-code="large"
      @kupCellButtonClicked="onObjMatrix"
      @kupButtonClicked="printWarning"
    />
    <code ref="large" />
  </div>
</template>

<script>
import { j4btnData } from '@/mock/box';
import j4btnLargeData from '@/mock/j4btn_table_box_data.json';

export default {
  name: 'DTJ4btn',
  data() {
    return {
      j4btnData,
      j4btnLargeData,
    };
  },
  mounted() {
    console.log(j4btnLargeData);
  },
  methods: {
    onObjMatrix(e) {
      const cell = JSON.stringify(e.detail.cell),
        row = JSON.stringify(e.detail.row),
        column = JSON.stringify(e.detail.column);
      this.$refs[
        e.target.dataset.code
      ].innerHTML = `Cell:<br>${cell}<br>Column:<br>${column}<br>Row:<br>${row}<br>`;
    },
    printWarning(e) {
      console.warn(
        'This message is displayed because the matrix component may not have blocked the button cell event.\n Check the event',
        e
      );
    },
  },
};
</script>

<style scoped>
</style>