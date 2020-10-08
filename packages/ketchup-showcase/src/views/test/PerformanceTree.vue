<template>
  <div>
    <div id="performance-wrapper"></div>
  </div>
</template>

<script>
import { performanceTreeData } from '@/mock/tree';

export default {
  name: 'PerformanceTree',
  mounted() {
    document.documentElement.kupDebug = true;
    let wrapper = document.querySelector('#performance-wrapper');
    let comp = document.createElement('kup-tree');
    comp.data = performanceTreeData;
    comp.autoSelectionNodeMode = true;
    comp.density = 'medium';
    comp.expanded = true;
    comp.showFilter = true;
    comp.showHeader = true;
    comp.showIcons = true;
    wrapper.appendChild(comp);
  },
};

const compSort = [
  {
    column: 'COMCOD',
    sortMode: 'A',
  },
];
</script>
