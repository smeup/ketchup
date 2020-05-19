<template>
  <div>
    <div style="width: 70px;">
      <kup-tree
        :columns.prop="basicData.columns"
        :data.prop="basicData.data"
        :showIcons.prop="false"
      />
    </div>
  </div>
</template>

<script>
import { TreeFactory } from 'ketchup/src/components/kup-tree/kup-tree-faker';

export default {
  name: 'TBasic',
  data() {
    return {
      basicData: TreeFactory(),
      expandedData: TreeFactory(3, 3),
      firstSelection: TreeFactory(3, 3),
      complexSelection: TreeFactory(3, 3),
      optionObj: {
        cell: '',
        column: '',
        treeNode: '',
      },
      selectedNodes: {
        first: [0],
        complex: [3],
      },
      labels: {
        noSelectionOnDisabled:
          'Remember that when a node is disabled it cannot be selected.',
      },
    };
  },
  methods: {
    hdlChangeSelected({ detail }, selection) {
      if (this.selectedNodes[selection]) {
        this.selectedNodes[selection] = detail.treeNodePath;
      }
    },
    hdlOptionClicked({ detail }) {
      this.optionObj.cell = JSON.stringify(detail.cell);
      this.optionObj.column = JSON.stringify(detail.column);
      this.optionObj.treeNode =
        JSON.stringify(detail.treeNode).substr(0, 300) + ' ...';
    },
  },
};
</script>
