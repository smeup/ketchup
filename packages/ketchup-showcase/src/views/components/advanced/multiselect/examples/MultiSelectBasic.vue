<template>
  <div class="section-3">
    <div
      v-if="tabsValues.includes('FILTERS')"
      :class="getCardViewClass(viewIndex)"
    >
      <div class="sub-tree">
        <kup-tree
          :data="treeNodes"
          :selection-mode="'multiple'"
          :selected-nodes="selectedNodes"
          @selection-change="onSelectionChange"
          class="kup-full-width"
        />
      </div>
      <div class="sub-chip" v-if="selectedNodes.length > 0">
        <kup-chip
          v-for="node in selectedNodes"
          :key="node.id"
          :label="node.label"
          type="input"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      viewIndex: 0,
      visibleView: 0,
      tabsValues: ['FILTERS', 'COLUMNS', 'SETTINGS'],
      selectedNodes: [],
      treeNodes: [
        {
          id: '1',
          label: 'Node 1',
          children: [
            { id: '1-1', label: 'Child Node 1' },
            { id: '1-2', label: 'Child Node 2' },
          ],
        },
        {
          id: '2',
          label: 'Node 2',
          children: [
            { id: '2-1', label: 'Child Node 3' },
            { id: '2-2', label: 'Child Node 4' },
          ],
        },
        // Add more nodes
      ],
    };
  },
  methods: {
    getCardViewClass(index) {
      return `card-view view-${index} ${
        this.visibleView === index ? 'visible' : ''
      }`;
    },
    onSelectionChange(event) {
      this.selectedNodes = event.value;
    },
  },
};
</script>

<style scoped>
.card-view {
  margin: 1rem 0;
}
.sub-tree,
.sub-chip {
  margin: 0.5rem 0;
}
</style>
