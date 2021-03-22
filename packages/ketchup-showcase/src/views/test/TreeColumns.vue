<template>
  <div>
    <div id="tree-wrapper"></div>
  </div>
</template>

<script>
import { treeColumns, treeColumnsColumns } from '@/mock/tree';
document.documentElement['ketchupInit'] = { debug: { active: true } };

export default {
  name: 'TreeColumns',
  mounted() {
    const dom = document.documentElement;
    if (dom.ketchup) {
      dom.ketchup.debug.toggle(true);
    }
    let wrapper = document.querySelector('#tree-wrapper');
    let comp = document.createElement('kup-tree');
    comp.columns = treeColumnsColumns;
    comp.data = treeColumns;
    comp.autoSelectionNodeMode = true;
    comp.density = 'medium';
    comp.expanded = true;
    comp.showColumns = true;
    comp.showFilter = true;
    comp.showHeader = true;
    comp.showIcons = true;
    wrapper.appendChild(comp);
  },
};
</script>
