<template>
  <div class="max-width-container">
    <h3>Without configuration</h3>
    <kup-tree
      :columns.prop="basicData.columns"
      :data.prop="basicData.data"
      show-columns
    />

    <h3>Show header visible</h3>
    <kup-tree
      :columns.prop="basicData.columns"
      :data.prop="basicData.data"
      show-columns
      show-header
    />

    <h3>When showHeader is active but showColumns is disabled</h3>
    <kup-tree
      :columns.prop="basicData.columns"
      :data.prop="basicData.data"
      show-header
    />

    <h3>When expand flag is set to true</h3>
    <kup-tree
      :columns.prop="expandedData.columns"
      :data.prop="expandedData.data"
      expanded
      show-columns
      show-header
    />
  </div>
</template>

<script>
import { TreeFactory } from '@sme.up/ketchup/src/components/kup-tree/kup-tree-faker';

export default {
  name: 'TTable',
  data() {
    return {
      basicData: TreeFactory(),
      expandedData: TreeFactory(2, 3),
      optionObj: {
        cell: '',
        column: '',
        treeNode: '',
      },
    };
  },
  methods: {
    hdlOptionClicked({ detail }) {
      this.optionObj.cell = JSON.stringify(detail.cell);
      this.optionObj.column = JSON.stringify(detail.column);
      this.optionObj.treeNode =
        JSON.stringify(detail.treeNode).substring(0, 300) + ' ...';
    },
  },
};
</script>

<style lang="scss" scoped>
.orange-icons {
  --kup-tre_node-icon_color: #e65100;
}
</style>
