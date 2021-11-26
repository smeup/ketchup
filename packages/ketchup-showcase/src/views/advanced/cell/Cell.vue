<template>
  <div>
    <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
      <template v-slot:0>
        <cell-demo></cell-demo>
      </template>
      <template v-slot:1>
        <cell-basic></cell-basic>
      </template>
      <template v-slot:2>
        <cell-standard></cell-standard>
      </template>
      <template v-slot:3>
        <datatable-cell-classes></datatable-cell-classes>
      </template>
    </comp>
  </div>
</template>

<script>
import CellDemo from '@/views/advanced/cell/examples/CellDemo';
import CellBasic from '@/views/advanced/cell/examples/CellBasic';
import CellStandard from '@/views/advanced/cell/examples/CellStandard';
import DatatableCellClasses from '@/views/advanced/datatable/examples/DatatableCellClasses';
import Comp from '@/views/advanced/page/templates/Comp';
export default {
  components: {
    CellDemo,
    CellBasic,
    CellStandard,
    DatatableCellClasses,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/tree/develop/packages/ketchup/src/components/kup-cell',
      headtitle: 'Cell',
      titles: ['Playground', 'Basic usage', 'Standard', 'Cell classes'],
    };
  },
};
</script>
