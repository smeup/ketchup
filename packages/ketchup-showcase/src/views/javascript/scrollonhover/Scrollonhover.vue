<template>
  <comp :titles="titles">
    <template v-slot:0>
      <scrollonhover-basic></scrollonhover-basic>
    </template>
    <template v-slot:1>
      <scrollonhover-datatable></scrollonhover-datatable>
    </template>
    <template v-slot:2>
      <scrollonhover-tree></scrollonhover-tree>
    </template>
  </comp>
</template>

<script>
import ScrollonhoverBasic from '@/views/javascript/scrollonhover/examples/ScrollonhoverBasic';
import ScrollonhoverDatatable from '@/views/javascript/scrollonhover/examples/ScrollonhoverDatatable';
import ScrollonhoverTree from '@/views/javascript/scrollonhover/examples/ScrollonhoverTree';
import Comp from '@/views/components/page/templates/Comp';

export default {
  components: {
    ScrollonhoverBasic,
    ScrollonhoverDatatable,
    ScrollonhoverTree,
    Comp,
  },
  data() {
    return {
      titles: ['Scroll on hover', 'Data Table integration', 'Tree integration'],
    };
  },
};
</script>
