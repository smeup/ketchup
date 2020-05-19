<template>
  <comp :giturl="giturl" :headtitle="headtitle" :titles="titles">
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
import Comp from '@/views/advanced/page/templates/Comp';

export default {
  components: {
    ScrollonhoverBasic,
    ScrollonhoverDatatable,
    ScrollonhoverTree,
    Comp,
  },
  data() {
    return {
      giturl:
        'https://github.com/smeup/ketchup/blob/develop/packages/ketchup/src/utils/scroll-on-hover.ts',
      headtitle: 'Scroll on hover',
      titles: ['Basic usage', 'Data Table integration', 'Tree integration'],
    };
  },
};
</script>
