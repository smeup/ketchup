<template>
  <div>
    <h3>Box with tooltip</h3>
    <kup-box
      :data.prop="basicData"
      @kupOptionClicked="handleKupOptionClicked"
      @kup-tooltip-loaddata="onLoadData"
      @kup-tooltip-loaddetail="loadBornToDie"
      @kup-tooltip-loadcelloptions="loadCellOptions"
      @kup-tree-nodeexpand="expandNode"
      @kup-tree-nodeselected="selectNode"
    ></kup-box>
  </div>
</template>

<script>
import { defaultData } from '@/mock/box';
import { bornToDie, imageUrls, cellOptionsTree } from '@/mock/tooltip';

export default {
  data() {
    return {
      basicData: defaultData,
      clickedRow: null,
      clickedColumn: null,
      selectedRows: null,
      autoSelectedRow: null,
      images: {
        ...imageUrls,
      },
    };
  },

  methods: {
    simpleEventHandler() {
      console.log('simpleEventHandler');
    },
    handleKupOptionClicked({ detail }) {
      console.log('detail', detail);
    },
    loadCellOptions({ detail }) {
      setTimeout(() => (detail.tooltip.cellOptions = cellOptionsTree), 400);
    },
    onLoadData(event) {
      let data = {
        image: this.images.bornToDie,
        title: 'Born to die',
        content: {
          info1: {
            label: 'Author',
            value: 'Lana del Rey',
          },
          info2: {
            label: 'Year',
            value: 2012,
          },
        },
      };
      event.detail.tooltip.data = data;
    },
    loadBornToDie(event) {
      //console.log(event);
      setTimeout(() => (event.detail.tooltip.detailData = bornToDie), 400);
    },
    expandNode(e) {
      const { detail } = e;
      console.group();
      console.log('expandNode: Fired event: ', e);
      console.log('expandNode: Event detail: ', detail);
    },
    selectNode(e) {
      const { detail } = e;
      console.group();
      console.log('selectNode: Fired event: ', e);
      console.log('selectNode: Event detail: ', detail);
    },
  },
};
</script>
