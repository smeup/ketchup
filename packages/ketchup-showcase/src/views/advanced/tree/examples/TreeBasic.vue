<template>
  <div class="max-width-container">
    <h3>Without configuration</h3>
    <kup-tree :columns.prop="basicData.columns" :data.prop="basicData.data" />

    <h3>Tree Nodes icons are hidden</h3>
    <kup-tree
      :columns.prop="basicData.columns"
      :data.prop="basicData.data"
      :showIcons.prop="false"
    />

    <h3>With show objectNavigation active</h3>
    <kup-tree
      :columns.prop="basicData.columns"
      :data.prop="basicData.data"
      show-object-navigation
      @kupOptionClicked="hdlOptionClicked"
    />
    <code>
      Cell: {{ optionObj.cell }}
      <br />
      Column: {{ optionObj.column }}
      <br />
      TreeNode: {{ optionObj.treeNode }}
    </code>

    <h3>With selection on first item</h3>
    <h4>{{ labels.noSelectionOnDisabled }}</h4>
    <kup-tree
      :columns.prop="firstSelection.columns"
      :data.prop="firstSelection.data"
      :selectedNode.prop="selectedNodes.first"
      show-object-navigation
      @kupTreeNodeSelected="hdlChangeSelected($event, 'first')"
    />

    <h3>With initial selection on 3 item and handler for selection</h3>
    <h5>{{ labels.noSelectionOnDisabled }}</h5>
    <kup-tree
      :columns.prop="complexSelection.columns"
      :data.prop="complexSelection.data"
      :selectedNode.prop="selectedNodes.complex"
      show-object-navigation
      @kupTreeNodeSelected="hdlChangeSelected($event, 'complex')"
    />
    <div class="example-container">
      <div>The selected node is the one with the following index (0 based):</div>
      <code>[{{ selectedNodes.complex.toString() }}]</code>
    </div>

    <h3>Automatically expanded tree</h3>
    <kup-tree :columns.prop="expandedData.columns" :data.prop="expandedData.data" expanded />
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