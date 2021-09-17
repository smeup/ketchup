<template>
  <div id="kup-tooltip-tree">
    <kup-tree
      :columns.prop="basicData.columns"
      :data.prop="basicData.data"
      @kup-tooltip-loaddata="onLoadData"
      @kup-tooltip-loaddetail="loadBornToDie"
      @kup-tooltip-loadcelloptions="loadCellOptions"
    />
  </div>
</template>
<script>
import { TreeFactory } from '@sme.up/ketchup/src/components/kup-tree/kup-tree-faker';
import { bornToDie, imageUrls, cellOptionsTree } from '@/mock/tooltip';
export default {
  name: 'TooltipTree',
  data() {
    return {
      basicData: TreeFactory(),
      images: { ...imageUrls },
    };
  },
  methods: {
    loadCellOptions({ detail }) {
      setTimeout(() => (detail.comp.cellOptions = cellOptionsTree), 400);
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
      event.detail.comp.data = data;
    },
    loadBornToDie(event) {
      setTimeout(() => (event.detail.comp.detailData = bornToDie), 250);
    },
  },
};
</script>
