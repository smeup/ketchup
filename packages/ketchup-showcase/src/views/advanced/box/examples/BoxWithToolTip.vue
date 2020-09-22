<template>
  <div>
    <p>BoxList (also called cards) is a list of surfaces that display content and actions. The elements like text, images and 
      actions must be positioned according to the hierarchy of the content. In current example you can view tooltip displayed
      on mouse over.
    
    <h3>3 columns with tooltips data</h3>
    <kup-box 
      :data.prop="basicData" 
      :columns.prop="3"    
      @
    ></kup-box>


  </div>
</template>

<script>
console.log("BoxWithToolTip");
import { defaultData } from '@/mock/box';

import {
  bornToDie
} from '@/mock/tooltip';

export default {
  data() {
    return {
      basicData: defaultData,      
      collapseLay: {
        sections: [
          {
            sections: [
              {
                style: {
                  textAlign: 'center',
                },
              },
              {
                collapsible: true,
                id: '1',
                style: {
                  textAlign: 'center',
                },
                sections: [
                  {
                    style: {
                      fontWeight: 'bold',
                    },
                  },
                  {},
                  {},
                ],
              },
            ],
          },
        ],
      },      
    }
  },
  method: {
    handleKupOptionClicked({ detail }) {
      console.log('detail', detail);
    },
    loadBornToDie(event) {
      console.log("loadBornToDie" + event);
      setTimeout(() => (event.detail.tooltip.detailData = bornToDie), 400);
    },
    loadCellOptions(event) {
      setTimeout(() => (event.detail.tooltip.cellOptions = cellOptions), 400);
    },
    onLoadData(event, index) {
      console.log("BowWithTooltTip: " + e);
      let data;
      switch (index) {
        case 1:
          data = {
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
          break;        
      }
      console.log(event);
      event.detail.tooltip.data = data;
    },  
  },
};
</script>
