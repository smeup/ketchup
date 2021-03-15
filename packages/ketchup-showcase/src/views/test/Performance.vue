<template>
  <div>
    <div id="performance-wrapper"></div>
  </div>
</template>

<script>
import { performanceDataTable } from '@/mock/dataTable';
document.documentElement['ketchupInit'] = { debug: { active: true } };

export default {
  name: 'Performance',
  mounted() {
    const dom = document.documentElement;
    if (dom.ketchup) {
      dom.ketchup.debug.toggle(true);
    }
    let wrapper = document.querySelector('#performance-wrapper');
    let comp = document.createElement('kup-data-table');
    comp.data = performanceDataTable;
    comp.forceOneLine = true;
    comp.expandGroups = true;
    comp.groups = compGroups;
    comp.rowsPerPage = 100;
    comp.sort = compSort;
    wrapper.appendChild(comp);
  },
};

const compSort = [
  {
    column: 'COMCOD',
    sortMode: 'A',
  },
];

const compGroups = [
  {
    column: 'COMA01',
    visible: true,
  },
];
</script>
