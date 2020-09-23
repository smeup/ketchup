<style scoped>
h3 {
  margin: 1rem 0;
}
</style>

<template>
  <div>
    <h3>With Fixed Tooltip</h3>
    <kup-lazy component-name="kup-data-table" :data.prop="data"></kup-lazy>
  </div>
</template>

<script>
import { defaultDataTable } from '@/mock/dataTable';

import {
  bornToDie,
  cellOptions,
  ultraviolence,
  honeymoon,
  lustForLife,
  imageUrls,
} from '@/mock/tooltip';

import { j4btnData } from '@/mock/box';

export default {
  name: 'dataTableBasic',

  data() {
    return {
      data: {
        data: defaultDataTable,
        onKupOptionClicked: (e) => {
          this.handleKupOptionClicked(e.detail);
        },
        onKupTooltipLoadData: (e) => {
          this.onLoadData(e, 1);
        },
        onKupTooltipLoadDetail: (e) => {
          this.loadBornToDie(e);
        },
        onKupTooltipLoadCellOptions: (e) => {
          this.loadCellOptions(e);
        },
      },
      images: {
        ...imageUrls,
      },
      loadQuantity: '',
    };
  },

  methods: {
    handleKupOptionClicked({ detail }) {
      console.log('detail', detail);
    },

    loadBornToDie(event) {
      setTimeout(() => (event.detail.tooltip.detailData = bornToDie), 400);
    },
    loadCellOptions(event) {
      setTimeout(() => (event.detail.tooltip.cellOptions = cellOptions), 400);
    },

    onLoadData(event, index) {
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

        case 2:
          data = {
            image: this.images.ultra,
            title: 'Ultraviolence',
            content: {
              info1: {
                label: 'Author',
                value: 'Lana del Rey',
              },
              info2: {
                label: 'Year',
                value: 2014,
              },
            },
          };
          break;

        case 3:
          data = {
            image: this.images.honey,
            title: 'Honeymoon',
            content: {
              info1: {
                label: 'Author',
                value: 'Lana del Rey',
              },
              info2: {
                label: 'Year',
                value: 2015,
              },
            },
          };
          break;

        case 4:
          data = {
            image: this.images.lust,
            title: 'Lust for life',
            content: {
              info1: {
                label: 'Author',
                value: 'Lana del Rey',
              },
              info2: {
                label: 'Year',
                value: 2017,
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

<style lang="scss">
.persistent-header-wrapper {
  kup-data-table {
    --kup-data-table_header-offset: 0;
  }
}
</style>
