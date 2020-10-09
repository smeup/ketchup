<template>
  <div>
    <div id="graphic-cells-wrapper"></div>
  </div>
</template>

<script>
import { graphicCellsDataTable } from '@/mock/dataTable';

export default {
  name: 'GraphicCells',
  mounted() {
    document.documentElement.kupDebug = true;
    let wrapper = document.querySelector('#graphic-cells-wrapper');
    let comp = document.createElement('kup-data-table');
    comp.data = graphicCellsDataTable;
    comp.forceOneLine = true;
    comp.rowsPerPage = 50;
    wrapper.appendChild(comp);
  },
};
</script>
