<template>
  <div>
    <div id="graphic-cells-wrapper"></div>
  </div>
</template>

<script>
import { graphicCellsDataTable } from '@/mock/dataTable';
document.documentElement['ketchupInit'] = { debug: { active: true } };

export default {
  name: 'GraphicCells',
  mounted() {
    const dom = document.documentElement;
    if (dom.ketchup) {
      dom.ketchup.debug.toggle(true);
    }
    let wrapper = document.querySelector('#graphic-cells-wrapper');
    let comp = document.createElement('kup-data-table');
    comp.data = graphicCellsDataTable;
    comp.forceOneLine = true;
    comp.rowsPerPage = 50;
    wrapper.appendChild(comp);
  },
};
</script>
