<template>
  <div>
    <h3>Box with tooltip</h3>
    <kup-box 
      :data.prop="basicData"       
      @kupTooltipLoadData="onLoadData"
      @kupTooltipLoadDetail="loadBornToDie"
      ></kup-box>    
  </div>
</template>

<script>
import { defaultData } from '@/mock/box';
import {
  bornToDie,    
  imageUrls,
} from '@/mock/tooltip';

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
      console.log("simpleEventHandler");
    },
    onLoadData(event) {      
      let data = 
      {
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
      console.log(event);
      setTimeout(() => (event.detail.tooltip.detailData = bornToDie), 400);
    },
  },
};
</script>
