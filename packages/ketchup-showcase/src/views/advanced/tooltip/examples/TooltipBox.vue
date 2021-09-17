<template>
  <div id="kup-tooltip-box">
    <kup-box
      :data.prop="dataTableWithLayout"
      @kup-datatable-optionclick="handleKupOptionClick"
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
const colors = ['#247ba0', '#70c1b3', '#b2dbbf', '#f3ffbd'];

export default {
  name: 'TooltipBox',

  data() {
    let dataTableWithLayout = JSON.parse(JSON.stringify(defaultData));

    let i = dataTableWithLayout.rows.length - 1;
    while (i >= 0) {
      const row = dataTableWithLayout.rows[i];

      const bgColor = colors[i % colors.length];

      const layout = {
        sections: [
          {
            horizontal: true,
            sections: [
              {
                dim: '20%',
                style: {
                  backgroundColor: bgColor,
                },
                content: [
                  {
                    column: 'FLD1',
                  },
                ],
              },
              {
                sections: [{}, {}, {}],
              },
            ],
          },
        ],
      };

      row.layout = layout;

      i--;
    }
    return {
      dataTableWithLayout,
      // clickedRow: null,
      // clickedColumn: null,
      // selectedRows: null,
      // autoSelectedRow: null,
      images: { ...imageUrls },
    };
  },

  methods: {
    handleKupOptionClick({ detail }) {
      console.log('detail', detail);
    },
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
      setTimeout(() => (event.detail.comp.detailData = bornToDie), 400);
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
